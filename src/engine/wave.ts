import type { MapDefinition, Vec3 } from '../shared/contracts';

const clamp = (value: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, value));
const smoothstep = (value: number) => {
  const x = clamp(value, 0, 1);
  return x * x * (3 - 2 * x);
};

export interface BarrelQuery {
  sectionIndex: number;
  inside: boolean;
  radiusM: number;
  openFraction: number;
  foam: number;
  centerX: number;
  centerY: number;
}

// One parameterization drives both the mesh and collision/occupancy queries.
export class WaveModel {
  readonly map: MapDefinition;
  readonly direction: 1 | -1;
  readonly joinX: number;
  readonly phase: number;
  private enteredAtS: Array<number | null>;

  constructor(map: MapDefinition, phase = 0) {
    this.map = map;
    this.phase = phase;
    this.direction = map.wave.breakDirection === 'right' ? 1 : -1;
    this.joinX = map.wave.faceWidthM * 0.95;
    this.enteredAtS = map.wave.barrelSections.map(() => null);
  }

  resetWave(): void {
    this.enteredAtS.fill(null);
  }

  along01(alongM: number): number {
    return clamp(alongM / this.map.wave.rideLengthM, 0, 1);
  }

  private faceHeight(x: number, alongM: number, timeS: number): number {
    const face = clamp(x / this.map.wave.faceWidthM, 0, 0.95);
    const ripple = 0.035 * Math.sin(alongM * 0.075 - timeS * 1.7 + x * 0.4 + this.phase);
    return this.map.wave.heightM * Math.pow(face, 1.28) + ripple;
  }

  surfaceAt(alongM: number, x: number, timeS: number): { position: Vec3; normal: Vec3 } {
    const clampedX = clamp(x, 0, this.joinX);
    const h = this.faceHeight(clampedX, alongM, timeS);
    const dX = (this.faceHeight(clamp(clampedX + 0.02, 0, this.joinX), alongM, timeS) -
      this.faceHeight(clamp(clampedX - 0.02, 0, this.joinX), alongM, timeS)) / 0.04;
    const dAlong = (this.faceHeight(clampedX, alongM + 0.02, timeS) -
      this.faceHeight(clampedX, alongM - 0.02, timeS)) / 0.04;
    const length = Math.hypot(dX, 1, dAlong);
    return {
      position: { x: clampedX, y: h, z: this.direction * alongM },
      normal: { x: -dX / length, y: 1 / length, z: -this.direction * dAlong / length },
    };
  }

  private sectionAt(alongM: number): number {
    const along01 = this.along01(alongM);
    return this.map.wave.barrelSections.findIndex(
      ({ start01, end01 }) => along01 >= start01 && along01 <= end01,
    );
  }

  openFraction(index: number, timeS: number): number {
    const section = this.map.wave.barrelSections[index];
    if (!section) return 0;
    const enteredAt = this.enteredAtS[index];
    if (section.closeAfterEntryS === null || enteredAt === null) return 1;
    // Preserve a rideable opening for most of the countdown, then make the
    // approaching closeout readable before the lip becomes a collision hazard.
    const elapsed = Math.max(0, timeS - enteredAt);
    const delay = section.closeAfterEntryS;
    return 1 - smoothstep((elapsed - delay * 0.72) / (delay * 0.28));
  }

  enterSection(index: number, timeS: number): void {
    if (this.enteredAtS[index] === null) this.enteredAtS[index] = timeS;
  }

  private curlRadius(alongM: number, timeS: number): number {
    const index = this.sectionAt(alongM);
    if (index < 0) return 0.12;
    const section = this.map.wave.barrelSections[index];
    const width = section.end01 - section.start01;
    const fade = Math.min(0.025, width * 0.18);
    const along = this.along01(alongM);
    const edge = smoothstep((along - section.start01) / fade) *
      smoothstep((section.end01 - along) / fade);
    const rollingShape = 0.92 + 0.08 * Math.sin(alongM * 0.09 - timeS * 0.45 + this.phase);
    return 0.12 + section.radiusM * edge * this.openFraction(index, timeS) * rollingShape;
  }

  crossSectionAt(alongM: number, u: number, timeS: number): Vec3 {
    const z = this.direction * alongM;
    if (u <= 0.78) {
      const x = this.joinX * clamp(u / 0.78, 0, 1);
      return { x, y: this.faceHeight(x, alongM, timeS), z };
    }
    // Pitch the crest over and down toward the face. The same folded surface
    // supplies the visible tube and the barrel occupancy calculation.
    const curl = clamp((u - 0.78) / 0.22, 0, 1);
    const angle = curl * 3.9;
    const radius = this.curlRadius(alongM, timeS);
    const joinY = this.faceHeight(this.joinX, alongM, timeS);
    const fallingLip = curl * curl * curl;
    return {
      x: this.joinX - radius + radius * Math.cos(angle) - radius * 0.75 * fallingLip,
      y: joinY + radius * Math.sin(angle) - radius * 0.33 * fallingLip,
      z,
    };
  }

  barrelAt(alongM: number, x: number, riderCenterY: number, timeS: number): BarrelQuery | null {
    const index = this.sectionAt(alongM);
    if (index < 0) return null;
    const radius = this.curlRadius(alongM, timeS) - 0.12;
    const centerX = this.joinX - radius;
    const centerY = this.faceHeight(this.joinX, alongM, timeS);
    const openFraction = this.openFraction(index, timeS);
    const distance = Math.hypot(x - centerX, riderCenterY - centerY);
    // The rider must be under the folded lip, within the hollow, and on the rideable face.
    const inside = radius >= 0.62 && distance <= radius * 0.90 &&
      x < this.joinX - radius * 0.18 && x > this.joinX - radius * 1.9;
    return {
      sectionIndex: index,
      inside,
      radiusM: radius,
      openFraction,
      foam: 1 - smoothstep(openFraction),
      centerX,
      centerY,
    };
  }

  launchMultiplier(alongM: number): number {
    const along = this.along01(alongM);
    return this.map.wave.launchSections.find(
      ({ start01, end01 }) => along >= start01 && along <= end01,
    )?.liftMultiplier ?? 0;
  }
}
