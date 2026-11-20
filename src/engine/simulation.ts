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
const smoothstep = (value: number) => {
  const x = clamp(value, 0, 1);
  return x * x * (3 - 2 * x);
};

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
  cleanExitS = 0;
  jumpLoad = 0;
  railAngle = 0;
  landingPulse = 0;
  skid = 0;
  stance = 0;
  private edge = 0;
  private dropMomentum = 0;
  airTuck = 0;
  grabPose = 0;
  skidSide = 0;
  private turnStartFace = 0;
  private turnExtremeFace = 0;
  private turnDirection = 0;
  private driveS = 0;

  private resetLine(): void {
    this.turnStartFace = this.turnExtremeFace = this.position.x / this.map.wave.faceWidthM;
    this.turnDirection = this.driveS = this.dropMomentum = 0;
    this.skid = this.skidSide = this.airTuck = this.railAngle = this.edge = this.stance = 0;
  }

  // Measure actual travel across the face. A key reversal is only a maneuver
  // once the surfer has carved some distance back in the other direction.
  private trackTurn(face: number): void {
    if (!this.turnDirection) {
      const displacement = face - this.turnStartFace;
      if (Math.abs(displacement) < .055) return;
      this.turnDirection = Math.sign(displacement);
      this.turnExtremeFace = face;
      return;
    }
    if ((face - this.turnExtremeFace) * this.turnDirection >= 0) {
      this.turnExtremeFace = face;
      return;
    }
    if (Math.abs(face - this.turnExtremeFace) < .068) return;
    const span = Math.abs(this.turnExtremeFace - this.turnStartFace);
    if (span >= .23 && !this.skid) {
      if (this.turnDirection < 0 && this.turnExtremeFace < .43) {
        this.driveS = 3;
        this.trickLabel = 'Driving bottom turn';
      } else if (this.turnDirection > 0 && this.turnExtremeFace > .68) {
        this.score.addCutback(span, this.elapsedS);
        this.trickLabel = 'Cutback';
      }
    }
    this.turnStartFace = this.turnExtremeFace;
    this.turnExtremeFace = face;
    this.turnDirection *= -1;
  }
  wallRideActive = false;
  wallRideAngle = 0;
  trickLabel = '';
  currentRunId = '';
  activeAirId: string | null = null;
  ended = false;
  started = false;
  private airCounter = 0;
  private airQualified = false;
  private wipeoutRemainingS = 0;
  private barrelSectionIndex: number | null = null;
  private wallRideAngularSpeed = 0;
  private wallRideElapsedS = 0;
  private wallRideSense = 1;
  private wallLaps = 0;
  private lastLapAngle = 0;
  private wallReturnAngle: number | null = null;
  private wallRideEntry: Vec3 | null = null;
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
    return this.mode === 'score-run' && this.map.id !== 'nazare' && this.map.id !== 'mavericks' ? Math.max(0, 120 - this.elapsedS) : null;
  }

  reset(): void {
    this.grabPose = 0;
    this.trick.reset();
    this.wave.resetWave();
    this.score.reset();
    this.metrics = emptyMetrics();
    this.cleanExitS = this.jumpLoad = this.railAngle = this.dropMomentum = this.landingPulse = this.skid = 0;
    this.alongM = this.map.spawn.along01 * this.map.wave.rideLengthM;
    this.wave.setPeelPosition(this.alongM);
    this.simulationTimeS = 0;
    this.elapsedS = 0;
    this.speedMps = Math.max(5, this.map.wave.peelSpeedMps * 1.06);
    this.lateralMps = 0;
    this.verticalMps = 0;
    const x = this.map.spawn.face01 * this.map.wave.faceWidthM;
    this.position = this.wave.surfaceAt(this.alongM, x, 0).position;
    this.previousPosition = { ...this.position };
    this.resetLine();
    this.heading = { x: 0, y: 0, z: this.wave.direction };
    this.orientation = waterOrientation(this.wave.surfaceAt(this.alongM, x, 0).normal, this.heading);
    this.state = 'surfing';
    this.barrelS = 0;
    this.barrelSectionIndex = null;
    this.stopWallRide();
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
      wallRiding: this.wallRideActive,
      score: this.score.score,
      pendingCombo: this.score.pendingCombo,
      multiplier: this.score.multiplier,
      speedMps: this.speedMps,
      barrelS: this.barrelS,
      cleanExitS: this.cleanExitS,
      distanceLeftM: Math.max(0, this.map.wave.rideLengthM - this.alongM),
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
    this.grabPose = 0;
    this.score.losePending();
    this.trick.reset();
    this.activeAirId = null;
    this.barrelSectionIndex = null;
    this.barrelS = 0;
    this.stopWallRide();
    this.resetLine();
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

  private stopWallRide(): void {
    this.wallRideActive = false;
    this.wallRideAngle = 0;
    this.wallRideAngularSpeed = 0;
    this.wallRideElapsedS = 0;
    this.wallRideEntry = null;
    this.wallRideSense = 1;
    this.wallLaps = this.lastLapAngle = 0;
    this.wallReturnAngle = null;
  }

  private updateWaveSpeed(frame: ControlFrame, dtS: number): void {
    const pace = this.map.wave.peelSpeedMps;
    const drive = frame.drive ?? 0;
    this.stance += (drive - this.stance) * (1 - Math.exp(-7 * dtS));
    const face = this.position.x / this.map.wave.faceWidthM;
    const wavePulse = .06 * Math.sin(this.wave.along01(this.alongM) * Math.PI * 4 +
      this.wave.phase - this.simulationTimeS * .12);
    const across = this.wallRideActive ? 0 : this.lateralMps;
    this.dropMomentum *= Math.exp(-dtS / 2.8);
    this.dropMomentum = clamp(this.dropMomentum - across * face * dtS * 1.1, 0, 4.8);
    const driveFromDrop = this.dropMomentum + Math.max(0, -across) * .28 - Math.max(0, across) * .17;
    const stanceSpeed = this.stance * (this.stance < 0 ? .82 : 1.28);
    const target = pace * (1.19 + face * .16 + wavePulse + stanceSpeed - .07 * this.edge ** 2) +
      driveFromDrop + 3.4 * Math.min(1, this.driveS);
    const response = drive < 0 ? 3.2 : target < this.speedMps ? .72 : 1.65;
    this.speedMps += (target - this.speedMps) * (1 - Math.exp(-response * dtS));
    this.speedMps = clamp(this.speedMps, pace * .36, pace * 2.85);
  }

  private creditBarrelExit(): void {
    this.cleanExitS = Math.max(this.cleanExitS, this.barrelS);
    this.score.addBarrel(this.barrelS, this.elapsedS);
  }

  private canExitBarrel(): boolean {
    const index = this.barrelSectionIndex;
    if (index === null || this.barrelS < .3) return false;
    const end = this.map.wave.barrelSections[index].end01;
    return this.wave.along01(this.alongM) >= end - this.wave.exitTaper01(index) &&
      this.wave.openFraction(index, this.simulationTimeS) > .24;
  }

  private leaveBarrelWall(): void {
    if (this.canExitBarrel()) {
      this.creditBarrelExit();
      this.trickLabel = 'Barrel exit';
    } else this.trickLabel = 'Barrel lost';
    this.barrelS = 0;
    this.barrelSectionIndex = null;
    this.stopWallRide();
    this.state = 'surfing';
    const surface = this.wave.surfaceAt(this.alongM,
      clamp(this.position.x, 0.2, this.wave.joinX - 0.08), this.simulationTimeS);
    this.position = surface.position;
    this.orientation = waterOrientation(surface.normal, this.heading);
  }

  private moveOnBarrelWall(frame: ControlFrame, dtS: number): void {
    this.updateWaveSpeed(frame, dtS);
    this.alongM += this.speedMps * dtS;
    // Moving across the hollow is a lap of the same peeling wave. Keep the
    // breaking point with the ride even when the board reaches the free edge.
    this.wave.setPeelPosition(this.alongM);
    const barrel = this.wave.barrelAt(this.alongM, 0, 0, this.simulationTimeS);
    if (!barrel || barrel.sectionIndex !== this.barrelSectionIndex) {
      this.leaveBarrelWall();
      return;
    }
    if (barrel.openFraction <= .24) {
      this.wipeout('The barrel closed');
      return;
    }
    const section = this.map.wave.barrelSections[barrel.sectionIndex];
    const exitInS = (section.end01 * this.map.wave.rideLengthM - this.alongM) / this.speedMps;
    const wallSteer = frame.steer || frame.wallRide;
    const holdingLine = (frame.drive ?? 0) < 0;
    const driving = (wallSteer || holdingLine || frame.wallHeld) && exitInS > 1.05;
    if (wallSteer) this.wallRideSense = -wallSteer * this.wave.direction;
    const turn = 2 * Math.PI;
    if (driving) this.wallReturnAngle = null;
    else this.wallReturnAngle ??= Math.round((this.wallRideAngle + .14 * this.wallRideAngularSpeed) / turn) * turn;
    const rate = 4.15 * clamp(this.speedMps / (this.map.wave.peelSpeedMps * 1.12), .70, 1.30);
    const targetRate = this.wallReturnAngle === null ? (holdingLine ? 0 : this.wallRideSense * rate) :
      clamp((this.wallReturnAngle - this.wallRideAngle) * 6, -6, 6);
    this.wallRideAngularSpeed += (targetRate - this.wallRideAngularSpeed) * (1 - Math.exp(-11 * dtS));
    this.wallRideAngle += this.wallRideAngularSpeed * dtS;
    this.wallRideElapsedS += dtS;
    const swept = this.wallRideAngle - this.lastLapAngle;
    if (Math.abs(swept) >= turn) {
      this.lastLapAngle += Math.sign(swept) * turn;
      this.wallLaps++;
    }
    if (this.wallReturnAngle !== null) this.trickLabel = 'Carving back down';
    else if (holdingLine) this.trickLabel = 'Holding wall line';
    else if (this.wallLaps) this.trickLabel = 'Barrel loop ×' + this.wallLaps;
    else this.trickLabel = 'Riding the wall';

    const contact = this.wave.wallContactAt(this.alongM, this.wallRideAngle, this.simulationTimeS);
    const join = smoothstep(this.wallRideElapsedS / .28);
    const entry = this.wallRideEntry ?? this.position;
    const x = entry.x + (contact.position.x - entry.x) * join;
    const surface = this.wave.surfaceAt(this.alongM, x, this.simulationTimeS);
    const contactFloor = join < 1 ? this.wave.surfaceAt(this.alongM, contact.position.x, this.simulationTimeS) : surface;
    const wrap = join * smoothstep(exitInS / .72);
    this.position = { x, y: surface.position.y + (contact.position.y - contactFloor.position.y) * wrap,
      z: contact.position.z };
    const normal = normalize({ x: surface.normal.x + (contact.normal.x - surface.normal.x) * wrap,
      y: surface.normal.y + (contact.normal.y - surface.normal.y) * wrap, z: surface.normal.z * (1 - wrap) });
    const response = 1 - Math.exp(-16 * dtS);
    this.lateralMps += ((x - this.previousPosition.x) / dtS - this.lateralMps) * response;
    this.verticalMps += ((this.position.y - this.previousPosition.y) / dtS - this.verticalMps) * response;
    this.heading = normalize({ x: this.lateralMps, y: this.verticalMps, z: this.speedMps * this.wave.direction });
    this.orientation = waterOrientation(normal, this.heading);
    this.barrelS += dtS;
    this.metrics.longestBarrelS = Math.max(this.metrics.longestBarrelS, this.barrelS);
    this.state = 'barrel';

    if (frame.jumpChargeS !== null) {
      this.takeoff(frame.jumpChargeS, normal);
      return;
    }
    if (this.wallReturnAngle !== null && Math.abs(this.wallReturnAngle - this.wallRideAngle) < .045 &&
        Math.abs(this.wallRideAngularSpeed) < .25) {
      this.stopWallRide();
      this.lateralMps = this.verticalMps = 0;
      this.travelHeading();
      this.position = surface.position;
      this.orientation = waterOrientation(surface.normal, this.heading);
      this.trickLabel = 'In the barrel';
    }
  }

  private moveOnWave(frame: ControlFrame, dtS: number): void {
    if (this.wallRideActive) {
      this.moveOnBarrelWall(frame, dtS);
      return;
    }
    const uphill = -frame.steer * this.wave.direction > 0;
    if (uphill || frame.wallHeld || frame.wallRide) {
      const barrel = this.wave.barrelAt(this.alongM, this.position.x, this.position.y + .85, this.simulationTimeS);
      if (barrel && barrel.openFraction > .32 && barrel.radiusM > .60) {
        const section = this.map.wave.barrelSections[barrel.sectionIndex];
        const tip = this.wave.crossSectionAt(this.alongM, 1, this.simulationTimeS);
        const gap = tip.y - this.wave.surfaceAt(this.alongM, tip.x, this.simulationTimeS).position.y;
        const nearWall = Math.abs(this.position.x - barrel.centerX) < barrel.radiusM * .95;
        const remaining = section.end01 * this.map.wave.rideLengthM - this.alongM;
        if (nearWall && tip.x < this.position.x && gap < Math.max(.8, section.radiusM * .6) &&
            remaining > this.speedMps * 1.20) {
          if (this.barrelSectionIndex !== barrel.sectionIndex) {
            this.barrelSectionIndex = barrel.sectionIndex;
            this.barrelS = 0;
            this.wave.enterSection(barrel.sectionIndex, this.simulationTimeS);
          }
          this.edge = this.railAngle = 0;
          this.wallRideActive = true;
          this.wallRideEntry = { ...this.position };
          this.moveOnBarrelWall(frame, dtS);
          return;
        }
      }
    }
    this.updateWaveSpeed(frame, dtS);
    const line = this.wave.rideLineAt(this.alongM, this.position.x);
    const assistance = line?.strength ?? 0;
    // The original hold-to-loop shortcut can still queue a reverse lap as the lip forms.
    // With direct steering, the downhill rail stays available to carve out from the floor.
    const liningUp = this.state === 'barrel' && (frame.wallHeld || frame.wallRide !== 0);
    const railInput = liningUp ? 0 : -frame.steer * this.wave.direction;
    // A committed rail change bites quickly. Easing off lets the board run
    // on its current heading, and braking cuts a much tighter arc.
    const reversing = railInput * this.lateralMps < -1;
    const edgeResponse = reversing ? 17 : railInput ? 11 : 6.8;
    this.edge += (railInput - this.edge) * (1 - Math.exp(-edgeResponse * dtS));
    const maxTurn = .87 - Math.max(0, this.stance) * .06 - Math.min(0, this.stance) * .23;
    const steeringAngle = this.edge * maxTurn;
    const grip = 1 - .52 * this.skid;
    const carveSpeed = this.speedMps * Math.tan(maxTurn);
    let carve = this.speedMps * Math.tan(steeringAngle) * (1 - .44 * assistance) * grip;
    if (line && railInput >= 0) {
      const trim = clamp((line.lineX - this.position.x) * 2.3, -4.4, carveSpeed);
      if (railInput === 0) carve += (trim - carve) * assistance;
      else carve += (Math.min(carve, trim) - carve) * line.sectionBlend;
    }
    const drift = this.skidSide * this.wave.direction * this.skid * 4.8;
    this.lateralMps += (carve + drift - this.lateralMps) * (1 - Math.exp(-(reversing ? 17 : 11) * dtS));
    this.alongM += this.speedMps * dtS;
    const previousX = this.position.x;
    const x = clamp(this.position.x + this.lateralMps * dtS, 0.2, this.wave.joinX - 0.08);
    if (x <= 0.2 || x >= this.wave.joinX - 0.08) this.lateralMps = 0;
    this.position = this.wave.surfaceAt(this.alongM, x, this.simulationTimeS).position;
    this.travelHeading();
    const surface = this.wave.surfaceAt(this.alongM, x, this.simulationTimeS);
    this.orientation = waterOrientation(surface.normal, this.heading);

    const barrel = this.wave.barrelAt(this.alongM, x, this.position.y + 0.85,
      this.simulationTimeS);
    this.railAngle += (-this.wave.direction * clamp(.19 * this.edge + .015 * this.lateralMps, -.48, .48) *
      (1 - .65 * assistance) - this.railAngle) * (1 - Math.exp(-9 * dtS));
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
        this.trickLabel = 'In the barrel';
        this.metrics.longestBarrelS = Math.max(this.metrics.longestBarrelS, this.barrelS);
      }
    } else if (this.barrelSectionIndex !== null) {
      if (this.canExitBarrel()) {
        this.creditBarrelExit();
        this.trickLabel = 'Barrel exit';
      } else if (this.barrelS >= 0.3) {
        this.trickLabel = 'Barrel lost';
      }
      this.barrelS = 0;
      this.barrelSectionIndex = null;
      this.state = 'surfing';
    }
    if (!barrel?.inside && this.state === 'barrel') this.state = 'surfing';

    if (!barrel?.inside) this.trackTurn(x / this.map.wave.faceWidthM);
    if (frame.jumpChargeS !== null) {
      this.takeoff(frame.jumpChargeS);
    } else {
      const lipX = this.map.wave.faceWidthM * .86;
      const ridesOffLip = previousX < lipX && x >= lipX && this.lateralMps > 3 &&
        this.wave.launchMultiplier(this.alongM) > .75;
      if (ridesOffLip && !(frame.charge01 ?? 0) && !barrel?.inside) this.takeoff(0);
    }
  }

  private takeoff(chargeS: number, wallNormal?: Vec3): void {
    // Popping through the open mouth finishes the tube and links into the air.
    if (this.canExitBarrel()) this.creditBarrelExit();
    this.stopWallRide();
    const launch = this.wave.launchMultiplier(this.alongM);
    const face = this.position.x / this.map.wave.faceWidthM;
    const lip = smoothstep((face - .58) / .27);
    const speedRatio = this.speedMps / this.map.wave.peelSpeedMps;
    const drive = this.driveS * .9 + Math.max(0, this.lateralMps) * .25;
    const lift = lip * clamp(speedRatio, .4, 1.65) * (1.1 + launch * 3.25 + drive);
    this.driveS = 0;
    this.turnDirection = 0;
    const pop = 3.3 + Math.min(.6, chargeS) * 6.3;
    if (wallNormal) {
      this.lateralMps += wallNormal.x * pop;
      this.verticalMps = this.verticalMps * .72 + wallNormal.y * pop;
    } else this.verticalMps = pop + lift;
    this.airQualified = chargeS >= 0.1 || lift > 0;
    this.activeAirId = `${this.currentRunId}:air:${++this.airCounter}`;
    const loadedRail = clamp(-this.lateralMps * this.wave.direction / 7, -1, 1) *
      clamp(chargeS / .6, 0, 1);
    this.trick.beginAir({ airId: this.activeAirId, orientation: this.orientation, loadedRail });
    this.state = 'airborne';
    this.trickLabel = '';
    this.barrelS = 0;
    this.barrelSectionIndex = null;
  }

  private moveInAir(frame: ControlFrame, dtS: number): void {
    this.airTuck += ((frame.trick.tucked ? 1 : 0) - this.airTuck) * (1 - Math.exp(-14 * dtS));
    const airTarget = -frame.steer * this.wave.direction * Math.min(2.2, this.speedMps * .10);
    this.lateralMps += (airTarget - this.lateralMps) *
      (1 - Math.exp(-.62 * dtS));
    this.speedMps = Math.max(2.5, this.speedMps - 0.18 * dtS);
    this.alongM += this.speedMps * dtS;
    const x = clamp(this.position.x + this.lateralMps * dtS, 0.2, this.wave.joinX - 0.08);
    this.verticalMps -= 9.81 * dtS;
    this.position = { x, y: this.position.y + this.verticalMps * dtS,
      z: this.wave.direction * this.alongM };
    this.travelHeading();
    const trickFrame = this.trick.step(frame.trick, dtS);
    this.grabPose += ((trickFrame.grabSide ?? 0) - this.grabPose) * (1 - Math.exp(-19 * dtS));
    this.orientation = trickFrame.orientation;
    this.trickLabel = trickFrame.label;

    // Intersect the previous/current motion segment with the moving rideable surface.
    // This catches impacts even when a fast rider crosses the face in one fixed step.
    const prevAlong = this.wave.direction * this.previousPosition.z;
    const prevSurfaceY = this.wave.surfaceAt(prevAlong, this.previousPosition.x,
      this.simulationTimeS - dtS).position.y;
    const nextSurfaceY = this.wave.surfaceAt(this.alongM, x, this.simulationTimeS).position.y;
    // Compare board clearance at both ends: on a steep face the water can
    // catch a board which is still rising in world space.
    if (this.position.y > nextSurfaceY || this.previousPosition.y < prevSurfaceY - .02) return;
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
    this.resetLine();
    this.state = 'surfing';
    this.landingPulse = 1;
    this.skid = report.quality === 'sketchy' ? 1 : 0;
    this.skidSide = this.skid ? clamp(report.slipSide ?? 0, -1, 1) : 0;
    this.verticalMps = 0;
    this.speedMps *= clamp(report.speedMultiplier, 0, 1);
    if (report.quality === 'clean') this.metrics.cleanLandings++;
    this.metrics.largestLandedSpinDeg = Math.max(this.metrics.largestLandedSpinDeg,
      report.completedSpinDeg);
    this.trickLabel = report.label + (report.quality === 'clean' ? ' · Clean landing' : ' · Sketchy landing');
    const surface = this.wave.surfaceAt(this.alongM, this.position.x, this.simulationTimeS);
    this.orientation = waterOrientation(surface.normal, this.heading);
  }

  private nextWave(): void {
    this.grabPose = 0;
    if (this.state === 'airborne') {
      this.trick.reset();
      this.activeAirId = null;
    }
    if (this.state !== 'wipeout') this.bank();
    this.wave.resetWave();
    this.alongM = this.map.spawn.along01 * this.map.wave.rideLengthM;
    this.wave.setPeelPosition(this.alongM);
    this.lateralMps = 0;
    this.verticalMps = 0;
    this.barrelS = 0;
    this.barrelSectionIndex = null;
    this.stopWallRide();
    this.state = 'surfing';
    this.trickLabel = '';
    const x = this.map.spawn.face01 * this.map.wave.faceWidthM;
    const surface = this.wave.surfaceAt(this.alongM, x, this.simulationTimeS);
    this.position = surface.position;
    this.previousPosition = { ...this.position };
    this.resetLine();
    this.heading = { x: 0, y: 0, z: this.wave.direction };
    this.orientation = waterOrientation(surface.normal, this.heading);
  }

  step(frame: ControlFrame, dtS = FIXED_STEP_S): void {
    if (!this.started || this.ended) return;
    const actualDt = this.remainingS !== null ? Math.min(dtS, 120 - this.elapsedS) : dtS;
    if (actualDt <= 0) { this.finish('timer'); return; }
    this.wave.setPeelPosition(this.alongM, this.wallRideActive ? undefined : this.position.x);
    this.previousPosition = { ...this.position };
    this.simulationTimeS += actualDt;
    if (this.state !== 'airborne') this.grabPose *= Math.exp(-22 * actualDt);
    this.elapsedS += actualDt;
    this.landingPulse = Math.max(0, this.landingPulse - actualDt * 3.6);
    const counterSteering = frame.steer * this.skidSide > .12;
    this.skid = Math.max(0, this.skid - actualDt * (counterSteering ? 3.4 : 1.45));
    this.driveS = Math.max(0, this.driveS - actualDt);
    this.jumpLoad = frame.charge01 ?? 0;
    if (this.state === 'wipeout') {
      this.wipeoutRemainingS -= actualDt;
      if (this.wipeoutRemainingS <= 0) {
        const x = Math.min(this.position.x, this.map.wave.faceWidthM * 0.45);
        const surface = this.wave.surfaceAt(this.alongM, x, this.simulationTimeS);
        this.position = surface.position;
        this.resetLine();
        this.orientation = waterOrientation(surface.normal, this.heading);
        this.state = 'surfing';
        this.trickLabel = '';
      }
    } else if (this.state === 'airborne') this.moveInAir(frame, actualDt);
    else this.moveOnWave(frame, actualDt);

    this.score.addRideTime(actualDt, this.speedMps, this.state, this.wallRideActive,
      !!frame.trick.grab && Math.abs(this.grabPose) > .9);
    if (this.map.id === 'nazare' && this.mode === 'score-run') {
      if (this.state === 'wipeout') { this.finish('wipeout'); return; }
      if (this.alongM >= this.map.wave.rideLengthM) {
        const face = this.position.x / this.map.wave.faceWidthM;
        this.finish(this.state === 'surfing' && face >= .10 && face <= .42 ? 'ride-out' : 'missed-exit');
        return;
      }
    }
    if (this.alongM >= this.map.wave.rideLengthM) {
      if (this.map.id === 'mavericks' && this.mode === 'score-run') {
        this.finish('ride-out');
        return;
      }
      this.nextWave();
    }
    this.wave.setPeelPosition(this.alongM, this.wallRideActive ? undefined : this.position.x);
    if (this.state === 'barrel') this.score.sustainBarrel(this.elapsedS);
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
    this.stopWallRide();
    const result: RunResult = {
      runId: this.currentRunId,
      mapId: this.map.id,
      mode: this.mode,
      score: this.score.score,
      durationS: this.elapsedS,
      reason,
      cleanExitS: this.cleanExitS,
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
