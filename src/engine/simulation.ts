import type {
  GameEvent,
  HudSnapshot,
  LandingReport,
  MapDefinition,
  Mode,
  Quat,
  RiderState,
  RunMetrics,
  RunResult,
  TrickController,
  Vec3,
} from '../shared/contracts';
import type { ControlFrame } from './input';
import { emptyMetrics, RuntimeScore } from './scoring';
import { WaveModel } from './wave';

const FIXED_STEP_S = 1 / 60;
const clamp = (value: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, value));
const normalize = (v: Vec3): Vec3 => {
  const length = Math.hypot(v.x, v.y, v.z) || 1;
  return { x: v.x / length, y: v.y / length, z: v.z / length };
};
const cross = (a: Vec3, b: Vec3): Vec3 => ({
  x: a.y * b.z - a.z * b.y,
  y: a.z * b.x - a.x * b.z,
  z: a.x * b.y - a.y * b.x,
});
const dot = (a: Vec3, b: Vec3) => a.x * b.x + a.y * b.y + a.z * b.z;

function waterOrientation(normal: Vec3, travel: Vec3): Quat {
  const forward = normalize({
    x: travel.x - normal.x * dot(travel, normal),
    y: travel.y - normal.y * dot(travel, normal),
    z: travel.z - normal.z * dot(travel, normal),
  });
  const right = normalize(cross(normal, forward));
  const up = normalize(cross(forward, right));
  const m00 = right.x, m01 = up.x, m02 = forward.x;
  const m10 = right.y, m11 = up.y, m12 = forward.y;
  const m20 = right.z, m21 = up.z, m22 = forward.z;
  const trace = m00 + m11 + m22;
  let q: Quat;
  if (trace > 0) {
    const s = Math.sqrt(trace + 1) * 2;
    q = { w: s / 4, x: (m21 - m12) / s, y: (m02 - m20) / s, z: (m10 - m01) / s };
  } else if (m00 > m11 && m00 > m22) {
    const s = Math.sqrt(1 + m00 - m11 - m22) * 2;
    q = { w: (m21 - m12) / s, x: s / 4, y: (m01 + m10) / s, z: (m02 + m20) / s };
  } else if (m11 > m22) {
    const s = Math.sqrt(1 + m11 - m00 - m22) * 2;
    q = { w: (m02 - m20) / s, x: (m01 + m10) / s, y: s / 4, z: (m12 + m21) / s };
  } else {
    const s = Math.sqrt(1 + m22 - m00 - m11) * 2;
    q = { w: (m10 - m01) / s, x: (m02 + m20) / s, y: (m12 + m21) / s, z: s / 4 };
  }
  const length = Math.hypot(q.x, q.y, q.z, q.w) || 1;
  return { x: q.x / length, y: q.y / length, z: q.z / length, w: q.w / length };
}

let nextRun = 0;
const runId = (seed: number) =>
  typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${seed.toString(36)}-${++nextRun}`;

export class SurfSimulation {
  readonly wave: WaveModel;
  readonly score = new RuntimeScore();
  readonly map: MapDefinition;
  readonly mode: Mode;
  readonly trick: TrickController;
  readonly emit: (event: GameEvent) => void;
  readonly seed: number;
  metrics: RunMetrics = emptyMetrics();
  position: Vec3 = { x: 0, y: 0, z: 0 };
  previousPosition: Vec3 = { x: 0, y: 0, z: 0 };
  orientation: Quat = { x: 0, y: 0, z: 0, w: 1 };
  heading: Vec3 = { x: 0, y: 0, z: 1 };
  state: RiderState = 'surfing';
  speedMps = 0;
  lateralMps = 0;
  verticalMps = 0;
  alongM = 0;
  simulationTimeS = 0;
  elapsedS = 0;
  barrelS = 0;
  trickLabel = '';
  currentRunId = '';
  activeAirId: string | null = null;
  ended = false;
  started = false;
  private airCounter = 0;
  private airQualified = false;
  private wipeoutRemainingS = 0;
  private barrelSectionIndex: number | null = null;
  private lastHudS = -Infinity;

  constructor(map: MapDefinition, mode: Mode, seed: number, trick: TrickController,
    emit: (event: GameEvent) => void) {
    this.map = map;
    this.mode = mode;
    this.seed = seed;
    this.trick = trick;
    this.emit = emit;
    this.wave = new WaveModel(map, seed % (Math.PI * 2));
    this.reset();
  }

  get remainingS(): number | null {
    return this.mode === 'score-run' ? Math.max(0, 120 - this.elapsedS) : null;
  }

  reset(): void {
    this.trick.reset();
    this.wave.resetWave();
    this.score.reset();
    this.metrics = emptyMetrics();
    this.alongM = this.map.spawn.along01 * this.map.wave.rideLengthM;
    this.simulationTimeS = 0;
    this.elapsedS = 0;
    this.speedMps = Math.max(5, this.map.wave.peelSpeedMps * 0.8);
    this.lateralMps = 0;
    this.verticalMps = 0;
    const x = this.map.spawn.face01 * this.map.wave.faceWidthM;
    this.position = this.wave.surfaceAt(this.alongM, x, 0).position;
    this.previousPosition = { ...this.position };
    this.heading = { x: 0, y: 0, z: this.wave.direction };
    this.orientation = waterOrientation(this.wave.surfaceAt(this.alongM, x, 0).normal, this.heading);
    this.state = 'surfing';
    this.barrelS = 0;
    this.barrelSectionIndex = null;
    this.trickLabel = '';
    this.activeAirId = null;
    this.airCounter = 0;
    this.airQualified = false;
    this.wipeoutRemainingS = 0;
    this.lastHudS = -Infinity;
    this.currentRunId = runId(this.seed);
    this.ended = false;
    this.started = false;
  }

  start(): void {
    if (this.started || this.ended) return;
    this.started = true;
    this.emit({ type: 'run-started', runId: this.currentRunId, mapId: this.map.id, mode: this.mode });
    this.emitHud();
  }

  private emitHud(): void {
    const snapshot: HudSnapshot = {
      runId: this.currentRunId,
      state: this.state,
      score: this.score.score,
      pendingCombo: this.score.pendingCombo,
      multiplier: this.score.multiplier,
      speedMps: this.speedMps,
      barrelS: this.barrelS,
      remainingS: this.remainingS,
      trickLabel: this.trickLabel,
      longestBarrelS: this.metrics.longestBarrelS,
      largestLandedSpinDeg: this.metrics.largestLandedSpinDeg,
      bestCombo: this.score.bestCombo,
      cleanLandings: this.metrics.cleanLandings,
      wipeouts: this.metrics.wipeouts,
    };
    this.emit({ type: 'hud', data: snapshot });
    this.lastHudS = this.elapsedS;
  }

  private bank(): void {
    const points = this.score.bank();
    if (points > 0) this.emit({ type: 'score-banked', runId: this.currentRunId,
      points, total: this.score.score });
  }

  private wipeout(reason: string): void {
    this.score.losePending();
    this.trick.reset();
    this.activeAirId = null;
    this.barrelSectionIndex = null;
    this.barrelS = 0;
    this.metrics.wipeouts++;
    this.state = 'wipeout';
    this.wipeoutRemainingS = 1.35;
    this.speedMps = Math.max(3, this.speedMps * 0.4);
    this.lateralMps = 0;
    this.trickLabel = 'Wipeout';
    this.emit({ type: 'wipeout', runId: this.currentRunId, reason });
  }

  private travelHeading(): void {
    this.heading = normalize({ x: this.lateralMps, y: 0,
      z: this.wave.direction * Math.max(1, this.speedMps) });
  }

  private moveOnWave(frame: ControlFrame, dtS: number): void {
    const maxSpeed = Math.max(18, this.map.wave.peelSpeedMps * 1.65);
    const acceleration = frame.throttle === 1 ? 4.3 : frame.throttle === -1 ? -7.5 : 0;
    const carveDrag = Math.abs(this.lateralMps) * 0.11;
    this.speedMps = clamp(this.speedMps + (acceleration - 0.38 - carveDrag) * dtS, 2.5, maxSpeed);
    this.lateralMps -= frame.steer * this.wave.direction * 9 * dtS;
    this.lateralMps *= Math.exp(-(frame.steer === 0 ? 3.2 : 0.9) * dtS);
    this.lateralMps = clamp(this.lateralMps, -6.5, 6.5);
    this.alongM += this.speedMps * dtS;
    const x = clamp(this.position.x + this.lateralMps * dtS, 0.2, this.wave.joinX - 0.08);
    if (x <= 0.2 || x >= this.wave.joinX - 0.08) this.lateralMps = 0;
    this.position = this.wave.surfaceAt(this.alongM, x, this.simulationTimeS).position;
    this.travelHeading();
    const surface = this.wave.surfaceAt(this.alongM, x, this.simulationTimeS);
    this.orientation = waterOrientation(surface.normal, this.heading);

    const barrel = this.wave.barrelAt(this.alongM, x, this.position.y + 0.85,
      this.simulationTimeS);
    const closingSection = barrel && this.map.wave.barrelSections[barrel.sectionIndex];
    const originalCenterX = closingSection ? this.wave.joinX - closingSection.radiusM : 0;
    if (barrel && closingSection && barrel.openFraction <= 0.24 &&
        Math.abs(x - originalCenterX) < closingSection.radiusM * 0.9) {
      this.wipeout('The barrel closed');
      return;
    }
    if (barrel?.inside) {
      this.wave.enterSection(barrel.sectionIndex, this.simulationTimeS);
      if (this.barrelSectionIndex !== barrel.sectionIndex) {
        this.barrelSectionIndex = barrel.sectionIndex;
        this.barrelS = 0;
      }
      this.barrelS += dtS;
      if (this.barrelS >= 0.3) {
        this.state = 'barrel';
        this.metrics.longestBarrelS = Math.max(this.metrics.longestBarrelS, this.barrelS);
      }
    } else if (this.barrelSectionIndex !== null) {
      const section = this.map.wave.barrelSections[this.barrelSectionIndex];
      const exitFade = Math.min(0.025, (section.end01 - section.start01) * 0.18);
      if (this.barrelS >= 0.3 && this.wave.along01(this.alongM) >= section.end01 - exitFade &&
          this.wave.openFraction(this.barrelSectionIndex, this.simulationTimeS) > 0.24) {
        this.score.addBarrel(this.barrelS, this.elapsedS);
      }
      this.barrelS = 0;
      this.barrelSectionIndex = null;
      this.state = 'surfing';
    }
    if (!barrel?.inside && this.state === 'barrel') this.state = 'surfing';

    if (frame.jumpChargeS !== null) this.takeoff(frame.jumpChargeS);
  }

  private takeoff(chargeS: number): void {
    const launch = this.wave.launchMultiplier(this.alongM);
    const lip = this.position.x >= this.map.wave.faceWidthM * 0.70;
    const fast = this.speedMps >= this.map.wave.peelSpeedMps * 0.8;
    const lift = lip && fast ? launch * Math.min(7.5, this.speedMps * 0.34) : 0;
    this.verticalMps = 3.3 + Math.min(0.6, chargeS) * 6.3 + lift;
    this.airQualified = chargeS >= 0.1 || lift > 0;
    this.activeAirId = `${this.currentRunId}:air:${++this.airCounter}`;
    this.trick.beginAir({ airId: this.activeAirId, orientation: this.orientation });
    this.state = 'airborne';
    this.trickLabel = '';
    this.barrelS = 0;
    this.barrelSectionIndex = null;
  }

  private moveInAir(frame: ControlFrame, dtS: number): void {
    this.lateralMps -= frame.steer * this.wave.direction * 3.2 * dtS;
    this.lateralMps *= Math.exp(-0.28 * dtS);
    this.lateralMps = clamp(this.lateralMps, -6.5, 6.5);
    this.speedMps = Math.max(2.5, this.speedMps - 0.18 * dtS);
    this.alongM += this.speedMps * dtS;
    const x = clamp(this.position.x + this.lateralMps * dtS, 0.2, this.wave.joinX - 0.08);
    this.verticalMps -= 9.81 * dtS;
    this.position = { x, y: this.position.y + this.verticalMps * dtS,
      z: this.wave.direction * this.alongM };
    this.travelHeading();
    const trickFrame = this.trick.step(frame.trick, dtS);
    this.orientation = trickFrame.orientation;
    this.trickLabel = trickFrame.label;

    // Intersect the previous/current motion segment with the moving rideable surface.
    // This catches impacts even when a fast rider crosses the face in one fixed step.
    const prevAlong = this.wave.direction * this.previousPosition.z;
    const prevSurfaceY = this.wave.surfaceAt(prevAlong, this.previousPosition.x,
      this.simulationTimeS - dtS).position.y;
    const nextSurfaceY = this.wave.surfaceAt(this.alongM, x, this.simulationTimeS).position.y;
    if (this.verticalMps >= 0 || this.previousPosition.y < prevSurfaceY - 0.02 ||
        this.position.y > nextSurfaceY) return;
    let lo = 0, hi = 1;
    for (let i = 0; i < 9; i++) {
      const mid = (lo + hi) / 2;
      const along = prevAlong + (this.alongM - prevAlong) * mid;
      const faceX = this.previousPosition.x + (x - this.previousPosition.x) * mid;
      const boardY = this.previousPosition.y + (this.position.y - this.previousPosition.y) * mid;
      const waterY = this.wave.surfaceAt(along, faceX,
        this.simulationTimeS - dtS + dtS * mid).position.y;
      if (boardY > waterY) lo = mid;
      else hi = mid;
    }
    const impactAlong = prevAlong + (this.alongM - prevAlong) * hi;
    const impactX = this.previousPosition.x + (x - this.previousPosition.x) * hi;
    const surface = this.wave.surfaceAt(impactAlong, impactX, this.simulationTimeS);
    this.position = surface.position;
    this.alongM = impactAlong;
    const report = this.trick.land({
      surfaceNormal: surface.normal,
      travelDirection: this.heading,
      impactSpeedMps: Math.hypot(this.speedMps, this.lateralMps, this.verticalMps),
    });
    this.applyLanding(report);
  }

  private applyLanding(report: LandingReport): void {
    if (report.airId !== this.activeAirId) {
      throw new Error('Trick controller returned a landing for the wrong air');
    }
    const credited = this.score.addAerial(report, this.airQualified, this.elapsedS);
    this.activeAirId = null;
    if (!credited) {
      this.state = 'surfing';
      this.verticalMps = 0;
      return;
    }
    if (report.quality === 'wipeout') {
      this.wipeout('Failed landing');
      return;
    }
    this.state = 'surfing';
    this.verticalMps = 0;
    this.speedMps *= clamp(report.speedMultiplier, 0, 1);
    if (report.quality === 'clean') this.metrics.cleanLandings++;
    this.metrics.largestLandedSpinDeg = Math.max(this.metrics.largestLandedSpinDeg,
      report.completedSpinDeg);
    this.trickLabel = report.quality === 'clean' ? 'Clean landing' : 'Sketchy landing';
    const surface = this.wave.surfaceAt(this.alongM, this.position.x, this.simulationTimeS);
    this.orientation = waterOrientation(surface.normal, this.heading);
  }

  private nextWave(): void {
    if (this.state === 'airborne') {
      this.trick.reset();
      this.activeAirId = null;
    }
    if (this.state !== 'wipeout') this.bank();
    this.wave.resetWave();
    this.alongM = this.map.spawn.along01 * this.map.wave.rideLengthM;
    this.lateralMps = 0;
    this.verticalMps = 0;
    this.barrelS = 0;
    this.barrelSectionIndex = null;
    this.state = 'surfing';
    this.trickLabel = '';
    const x = this.map.spawn.face01 * this.map.wave.faceWidthM;
    const surface = this.wave.surfaceAt(this.alongM, x, this.simulationTimeS);
    this.position = surface.position;
    this.previousPosition = { ...this.position };
    this.heading = { x: 0, y: 0, z: this.wave.direction };
    this.orientation = waterOrientation(surface.normal, this.heading);
  }

  step(frame: ControlFrame, dtS = FIXED_STEP_S): void {
    if (!this.started || this.ended) return;
    const actualDt = this.mode === 'score-run' ? Math.min(dtS, 120 - this.elapsedS) : dtS;
    if (actualDt <= 0) { this.finish('timer'); return; }
    this.previousPosition = { ...this.position };
    this.simulationTimeS += actualDt;
    this.elapsedS += actualDt;
    if (this.state === 'wipeout') {
      this.wipeoutRemainingS -= actualDt;
      if (this.wipeoutRemainingS <= 0) {
        const x = Math.min(this.position.x, this.map.wave.faceWidthM * 0.45);
        const surface = this.wave.surfaceAt(this.alongM, x, this.simulationTimeS);
        this.position = surface.position;
        this.state = 'surfing';
        this.trickLabel = '';
      }
    } else if (this.state === 'airborne') this.moveInAir(frame, actualDt);
    else this.moveOnWave(frame, actualDt);

    if (this.alongM >= this.map.wave.rideLengthM) this.nextWave();
    const banked = this.score.tick(this.elapsedS,
      this.state === 'surfing' && this.barrelSectionIndex === null);
    if (banked > 0) this.emit({ type: 'score-banked', runId: this.currentRunId,
      points: banked, total: this.score.score });
    if (this.elapsedS - this.lastHudS >= 0.1) this.emitHud();
    if (this.remainingS === 0) this.finish('timer');
  }

  finish(reason: RunResult['reason'] = 'player-ended'): RunResult | null {
    if (!this.started || this.ended) return null;
    this.ended = true;
    this.bank();
    this.trick.reset();
    this.activeAirId = null;
    this.barrelSectionIndex = null;
    this.barrelS = 0;
    const result: RunResult = {
      runId: this.currentRunId,
      mapId: this.map.id,
      mode: this.mode,
      score: this.score.score,
      durationS: this.elapsedS,
      reason,
      longestBarrelS: this.metrics.longestBarrelS,
      largestLandedSpinDeg: this.metrics.largestLandedSpinDeg,
      bestCombo: this.score.bestCombo,
      cleanLandings: this.metrics.cleanLandings,
      wipeouts: this.metrics.wipeouts,
    };
    this.emit({ type: 'run-ended', result });
    return result;
  }
}
