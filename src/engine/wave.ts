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
  private peelAlongM: number | null = null;
  private cachedAlong = NaN;
  private cachedTime = NaN;
  private cachedPeel: number | null = null;
  private cachedHeight = 0;
  private cachedLipLift = 0;

  constructor(map: MapDefinition, phase = 0) {
    this.map = map;
    this.phase = phase;
    this.direction = map.wave.breakDirection === 'right' ? 1 : -1;
    this.joinX = map.wave.faceWidthM * 0.95;
    this.enteredAtS = map.wave.barrelSections.map(() => null);
  }

  resetWave(): void {
    this.enteredAtS.fill(null);
    this.peelAlongM = null;
  }

  setPeelPosition(alongM: number): void {
    this.peelAlongM = clamp(alongM, 0, this.map.wave.rideLengthM);
  }

  get peelPositionM(): number | null {
    return this.peelAlongM;
  }

  along01(alongM: number): number {
    return clamp(alongM / this.map.wave.rideLengthM, 0, 1);
  }

  private distanceFromPeak(alongM: number): number {
    if (this.peelAlongM === null) return 0;
    // Start the next breaking section in front of the approaching surfer.
    // The entry is visible from the open face before the board reaches it.
    const section = this.map.wave.barrelSections[this.sectionAt(alongM)];
    const firstPitch = section ? section.start01 * this.map.wave.rideLengthM + 9 : 0;
    const approach = firstPitch - this.peelAlongM;
    const lead = section && approach > 0 ? approach * (1 - smoothstep((approach - 35) / 40)) : 0;
    return alongM - this.peelAlongM - lead;
  }

  private peelingPeak(alongM: number, aheadStartM: number, aheadFadeM: number): number {
    if (this.peelAlongM === null) return 1;
    const fromRider = this.distanceFromPeak(alongM);
    // The face becomes a shoulder ahead; its projecting lip rolls back sooner
    // so the rider can see through the opening rather than into a water wall.
    return smoothstep((fromRider + 30) / 18) *
      (1 - smoothstep((fromRider - aheadStartM) / aheadFadeM));
  }

  whitewaterAt(alongM: number): number {
    if (this.peelAlongM === null || this.sectionAt(alongM) < 0) return 0;
    const behind = this.peelAlongM - alongM;
    return smoothstep((behind - 11) / 12) *
      (1 - smoothstep((behind - 65) / 25));
  }

  private faceHeightScale(alongM: number): number {
    if (this.map.id === 'nazare') return 1 - .86 * smoothstep((this.along01(alongM) - .72) / .28);
    if (this.map.wave.barrelSections.length === 0) return 1;
    const along = this.along01(alongM);
    // A peeling wave has a tall breaking peak and a lower, open shoulder ahead.
    // Keeping the face high beyond a tube makes its exit look like a solid wall.
    let scale = 0.46;
    for (let index = 0; index < this.map.wave.barrelSections.length; index++) {
      const section = this.map.wave.barrelSections[index];
      const riseStart = Math.max(0, section.start01 - 0.15);
      const rise = smoothstep((along - riseStart) /
        Math.max(0.001, section.start01 - riseStart));
      const fallStart = section.end01 - this.exitTaper01(index) * 1.25;
      const fallEnd = Math.min(1, section.end01 + 0.045);
      const fall = 1 - smoothstep((along - fallStart) /
        Math.max(0.001, fallEnd - fallStart));
      scale = Math.max(scale, 0.46 + 0.54 * rise * fall *
        this.peelingPeak(alongM, 6, 20));
    }
    return scale;
  }

  private faceHeight(x: number, alongM: number, timeS: number): number {
    const face = clamp(x / this.map.wave.faceWidthM, 0, 0.95);
    // The trough stays low while water draws up into the steep breaking wall.
    const profile = 0.50 * Math.pow(face, 1.4) + 0.50 * Math.pow(face, 4.2);
    // Thousands of rendered vertices share a longitudinal section. Its swell
    // and launch profile are identical for every point across that section.
    if (alongM !== this.cachedAlong || timeS !== this.cachedTime || this.peelAlongM !== this.cachedPeel) {
      this.cachedAlong = alongM;
      this.cachedTime = timeS;
      this.cachedPeel = this.peelAlongM;
      const swell = 1 + .035 * Math.sin(alongM * .018 - timeS * .55 + this.phase) +
        .012 * Math.sin(alongM * .052 - timeS * .85 + this.phase * .7);
      this.cachedHeight = this.map.wave.heightM * swell * this.faceHeightScale(alongM);
      this.cachedLipLift = this.launchMultiplier(alongM) * Math.min(1.45, this.map.wave.heightM * .18);
    }
    const ripple = 0.045 * Math.sin(alongM * 0.075 - timeS * 1.7 + x * 0.4 + this.phase) +
      0.018 * Math.sin(alongM * 0.21 - timeS * 2.8 + x * 0.9);
    return this.cachedHeight * profile + this.cachedLipLift * smoothstep((face - .58) / .37) + ripple;
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

  exitTaper01(index: number): number {
    const section = this.map.wave.barrelSections[index];
    return section ? Math.min(0.10, (section.end01 - section.start01) * 0.35) : 0;
  }

  private curlRadius(alongM: number, timeS: number, forming = false): number {
    const index = this.sectionAt(alongM);
    if (index < 0) return 0.12;
    const section = this.map.wave.barrelSections[index];
    const width = section.end01 - section.start01;
    const entryFade = Math.min(0.025, width * 0.18);
    const exitFade = this.exitTaper01(index);
    const along = this.along01(alongM);
    const edge = smoothstep((along - section.start01) / entryFade) *
      smoothstep((section.end01 - along) / exitFade);
    const rollingShape = 0.92 + 0.08 * Math.sin(alongM * 0.09 - timeS * 0.45 + this.phase);
    return 0.12 + section.radiusM * edge * this.peelingPeak(alongM, forming ? 3.4 : .45, 3.3) *
      this.openFraction(index, timeS) * rollingShape;
  }

  crossSectionAt(alongM: number, u: number, timeS: number, outer = false): Vec3 {
    const z = this.direction * alongM;
    if (u < 0.78 || (u === .78 && !outer)) {
      const x = this.joinX * clamp(u / 0.78, 0, 1);
      return { x, y: this.faceHeight(x, alongM, timeS), z };
    }
    // A rising crest pitches into an arched lip whose tip nearly meets the
    // face. The hollow underneath remains open all the way down the wave.
    const curl = clamp((u - 0.78) / 0.22, 0, 1);
    const radius = this.curlRadius(alongM, timeS, true);
    const joinY = this.faceHeight(this.joinX, alongM, timeS);
    const crash = this.whitewaterAt(alongM);
    const tipX = Math.max(0.2, this.joinX - radius * 2.55 -
      crash * Math.min(5, this.map.wave.faceWidthM * 0.27));
    const tipY = this.faceHeight(tipX, alongM, timeS) + Math.min(.42, radius * .2);
    // Ahead of the surfer only the first part of the arc has folded. The
    // free edge traces the arch as it pitches, leaving the daylight open.
    const unfurl = this.peelAlongM === null ? 0 :
      smoothstep((this.distanceFromPeak(alongM) + .55) / 4);
    const angle = Math.PI * curl * (1 - .89 * unfurl);
    const sine = Math.sin(angle), cosine = Math.cos(angle);
    const fall = .5 - .5 * cosine;
    const reach = tipX - this.joinX;
    const drop = tipY - joinY;
    const x = this.joinX + reach * fall + radius * .15 * sine;
    const y = joinY + drop * fall * fall + radius * 1.34 * sine;
    if (!outer) return { x, y, z };

    // The outside follows the normal of the hollow. Both skins touch at
    // the feathering tip, including while the leading edge is unfurling.
    const dx = reach * .5 * sine + radius * .15 * cosine;
    const dy = drop * fall * sine + radius * 1.34 * cosine;
    const thickness = (.10 + radius * .22) * (1 - curl * curl);
    const scale = thickness / Math.max(.001, Math.hypot(dx, dy));
    return { x: x + dy * scale, y: y - dx * scale, z };
  }

  backAt(alongM: number, across: number, timeS: number): Vec3 {
    if (across >= .5) return this.crossSectionAt(alongM, .78 + .22 * (across - .5) * 2, timeS, true);
    const crest = this.crossSectionAt(alongM, .78, timeS, true);
    const t = across * 2;
    const farX = this.joinX + this.map.wave.faceWidthM * 3.2;
    return {
      x: farX + (crest.x - farX) * t,
      y: -.20 + (crest.y + .20) * t * t,
      z: crest.z,
    };
  }

  tubeCameraAt(alongM: number, timeS: number): Vec3 | null {
    const barrel = this.barrelAt(alongM, 0, 0, timeS);
    if (!barrel || barrel.radiusM < .55) return null;
    // Sample the inner surface at the lens position. Keep clear of both the
    // rising face below and the curling water above, including on small tubes.
    const roof = this.crossSectionAt(alongM, .78 + .22 * .48, timeS);
    const floor = this.faceHeight(roof.x, alongM, timeS);
    return { x: roof.x, y: floor + (roof.y - floor) * .38, z: roof.z };
  }

  barrelAt(alongM: number, x: number, riderCenterY: number, timeS: number): BarrelQuery | null {
    const index = this.sectionAt(alongM);
    if (index < 0) return null;
    const radius = this.curlRadius(alongM, timeS) - 0.12;
    const centerX = this.joinX - radius;
    // The hollow sits slightly below the crest, where the rising face and
    // falling lip leave room for the rider.
    const centerY = this.faceHeight(this.joinX, alongM, timeS) - radius * 0.12;
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
      foam: Math.max(1 - smoothstep(openFraction), this.whitewaterAt(alongM)),
      centerX,
      centerY,
    };
  }

  launchMultiplier(alongM: number): number {
    const along = this.along01(alongM);
    const section = this.map.wave.launchSections.find(s => along >= s.start01 && along <= s.end01);
    if (!section) return 0;
    const phase = (along - section.start01) / (section.end01 - section.start01);
    return section.liftMultiplier * smoothstep(phase / .25) * smoothstep((1 - phase) / .3);
  }
}
