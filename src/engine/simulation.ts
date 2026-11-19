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

function rolledOrientation(base: Quat, angle: number): Quat {
  const s = Math.sin(angle / 2);
  const c = Math.cos(angle / 2);
  return {
    x: base.x * c + base.y * s,
    y: base.y * c - base.x * s,
    z: base.z * c + base.w * s,
    w: base.w * c - base.z * s,
  };
}

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
  private dropMomentum = 0;
  airTuck = 0;
  skidSide = 0;
  private turnStartFace = 0;
  private turnExtremeFace = 0;
  private turnDirection = 0;
  private driveS = 0;

  private resetLine(): void {
    this.turnStartFace = this.turnExtremeFace = this.position.x / this.map.wave.faceWidthM;
    this.turnDirection = this.driveS = this.dropMomentum = 0;
    this.skid = this.skidSide = this.airTuck = this.railAngle = 0;
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
    if (Math.abs(face - this.turnExtremeFace) < .085) return;
    const span = Math.abs(this.turnExtremeFace - this.turnStartFace);
    if (span >= .28 && !this.skid) {
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
    return this.mode === 'score-run' && this.map.id !== 'nazare' ? Math.max(0, 120 - this.elapsedS) : null;
  }

  reset(): void {
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
  }

  private updateWaveSpeed(dtS: number): void {
    const face = this.position.x / this.map.wave.faceWidthM;
    const wavePulse = 0.06 * Math.sin(this.wave.along01(this.alongM) * Math.PI * 4 +
      this.wave.phase - this.simulationTimeS * 0.12);
    // Carry the speed gained on the drop through the next bottom turn.
    this.dropMomentum *= Math.exp(-dtS / 2.8);
    this.dropMomentum = clamp(this.dropMomentum - this.lateralMps * face * dtS * 1.1, 0, 4.8);
    const downhillCarve = Math.max(0, -this.lateralMps) * 0.28;
    const uphillCarve = Math.max(0, this.lateralMps) * 0.12;
    const targetSpeed = this.map.wave.peelSpeedMps * (1.08 + face * 0.16 + wavePulse) +
      this.dropMomentum + 3.4 * Math.min(1, this.driveS) + downhillCarve - uphillCarve;
    this.speedMps += (targetSpeed - this.speedMps) * (1 - Math.exp(-1.5 * dtS));
    this.speedMps = clamp(this.speedMps, this.map.wave.peelSpeedMps * (this.skid > 0 ? .45 : .7),
      this.map.wave.peelSpeedMps * 1.5);
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
    this.updateWaveSpeed(dtS);
    this.alongM += this.speedMps * dtS;
    const barrel = this.wave.barrelAt(this.alongM, 0, 0, this.simulationTimeS);
    if (!barrel || barrel.sectionIndex !== this.barrelSectionIndex) {
      this.leaveBarrelWall();
      return;
    }
    if (barrel.openFraction <= 0.24) {
      this.wipeout('The barrel closed');
      return;
    }
    if (barrel.radiusM < 1.0) {
      this.leaveBarrelWall();
      return;
    }
    const wallAxis = -frame.wallRide * this.wave.direction;
    const nearestFloor = Math.round(this.wallRideAngle / (Math.PI * 2)) * Math.PI * 2;
    const targetAngularSpeed = wallAxis === 0 ?
      clamp((nearestFloor - this.wallRideAngle) * 4, -3.6, 3.6) : wallAxis * 4.1;
    this.wallRideAngularSpeed += (targetAngularSpeed - this.wallRideAngularSpeed) *
      (1 - Math.exp(-7 * dtS));
    const oldAngle = this.wallRideAngle;
    this.wallRideAngle += this.wallRideAngularSpeed * dtS;
    this.wallRideElapsedS += dtS;
    const finishedTurns = Math.floor(Math.abs(this.wallRideAngle) / (Math.PI * 2));
    if (finishedTurns > Math.floor(Math.abs(oldAngle) / (Math.PI * 2))) {
      this.trickLabel = 'Barrel loop';
    } else if (this.trickLabel !== 'Barrel loop') this.trickLabel = 'Riding the wall';

    const centerSurface = this.wave.surfaceAt(this.alongM, barrel.centerX,
      this.simulationTimeS);
    const orbitRadius = Math.min(2.1, barrel.radiusM * 0.72);
    const orbitCenterY = centerSurface.position.y + orbitRadius;
    const orbitX = barrel.centerX + orbitRadius * Math.sin(this.wallRideAngle);
    const orbitY = orbitCenterY - orbitRadius * Math.cos(this.wallRideAngle);
    const blend = smoothstep(this.wallRideElapsedS / 0.23);
    const entry = this.wallRideEntry ?? this.position;
    const x = clamp(entry.x + (orbitX - entry.x) * blend, 0.2, this.wave.joinX - 0.08);
    const y = entry.y + (orbitY - entry.y) * blend;
    this.position = { x, y, z: this.wave.direction * this.alongM };
    this.lateralMps = 0;
    this.travelHeading();
    const surface = this.wave.surfaceAt(this.alongM, x, this.simulationTimeS);
    this.orientation = rolledOrientation(waterOrientation(surface.normal, this.heading),
      this.wallRideAngle * this.wave.direction);
    this.barrelS += dtS;
    this.metrics.longestBarrelS = Math.max(this.metrics.longestBarrelS, this.barrelS);
    this.state = 'barrel';

    if (frame.jumpChargeS !== null) {
      this.stopWallRide();
      this.takeoff(frame.jumpChargeS);
      return;
    }
    if (wallAxis === 0 && Math.abs(this.wallRideAngle - nearestFloor) < 0.035 &&
        Math.abs(this.wallRideAngularSpeed) < 0.12) {
      this.stopWallRide();
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
    if (-frame.wallRide * this.wave.direction > 0) {
      const barrel = this.wave.barrelAt(this.alongM, this.position.x,
        this.position.y + 0.85, this.simulationTimeS);
      const section = barrel && this.map.wave.barrelSections[barrel.sectionIndex];
      const nearHollow = barrel && Math.hypot(this.position.x - barrel.centerX,
        this.position.y + 0.85 - barrel.centerY) <= barrel.radiusM * 1.25;
      if (barrel && nearHollow && section && barrel.radiusM >= 1.6 &&
          barrel.openFraction > 0.24 &&
          (section.end01 * this.map.wave.rideLengthM - this.alongM) > this.speedMps * 2.5) {
        if (this.barrelSectionIndex !== barrel.sectionIndex) {
          this.barrelSectionIndex = barrel.sectionIndex;
          this.barrelS = 0;
          this.wave.enterSection(barrel.sectionIndex, this.simulationTimeS);
        }
        this.resetLine();
        this.wallRideActive = true;
        this.wallRideEntry = { ...this.position };
        this.wallRideAngle = 0;
        this.wallRideAngularSpeed = 0;
        this.wallRideElapsedS = 0;
        this.moveOnBarrelWall(frame, dtS);
        return;
      }
    }
    this.updateWaveSpeed(dtS);
    const carveSpeed = clamp(this.speedMps * .41, 5.8, 9.6);
    const railInput = -frame.steer * this.wave.direction;
    const grip = 1 - .52 * this.skid;
    const drift = this.skidSide * this.wave.direction * this.skid * 4.8;
    const lateralTarget = railInput * carveSpeed * grip + drift;
    const crossingRails = railInput * this.lateralMps < -1;
    const response = frame.steer === 0 ? 9 : crossingRails ? 5.8 : 8;

    this.lateralMps += (lateralTarget - this.lateralMps) * (1 - Math.exp(-response * dtS));
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
    this.railAngle += (-this.lateralMps * this.wave.direction * .032 - this.railAngle) * (1 - Math.exp(-8 * dtS));
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

  private takeoff(chargeS: number): void {
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
    this.verticalMps = 3.3 + Math.min(0.6, chargeS) * 6.3 + lift;
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
    const airTarget = -frame.steer * this.wave.direction * Math.min(4.2, this.speedMps * 0.18);
    this.lateralMps += (airTarget - this.lateralMps) *
      (1 - Math.exp(-(frame.steer === 0 ? 3.5 : 2.5) * dtS));
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
    this.wave.setPeelPosition(this.alongM);
    this.previousPosition = { ...this.position };
    this.simulationTimeS += actualDt;
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

    if (this.map.id === 'nazare' && this.mode === 'score-run') {
      if (this.state === 'wipeout') { this.finish('wipeout'); return; }
      if (this.alongM >= this.map.wave.rideLengthM) {
        const face = this.position.x / this.map.wave.faceWidthM;
        this.finish(this.state === 'surfing' && face >= .10 && face <= .42 ? 'ride-out' : 'missed-exit');
        return;
      }
    }
    if (this.alongM >= this.map.wave.rideLengthM) this.nextWave();
    this.wave.setPeelPosition(this.alongM);
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
