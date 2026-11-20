import type { MapDefinition, Vec3, WaveSection } from '../shared/contracts';

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
  private riderAlongM = 0;
  private cachedAlong = NaN;
  private cachedTime = NaN;
  private cachedPeel: number | null = null;
  private cachedHeight = 0;
  private cachedLipLift = 0;
  // The face, lip, foam and camera all sample the same cross-section.
  private arc = { along: NaN, time: NaN, peel: null as number | null,
    radius: 0, joinY: 0, reach: 0, drop: 0, angle: 0 };
  private readonly wallTrack = Array.from({ length: 35 }, () => ({ x: 0, y: 0, distance: 0, slope: 0, progress: 0 }));

  constructor(map: MapDefinition, phase = 0) {
    this.map = map;
    this.phase = phase;
    this.direction = map.wave.breakDirection === 'right' ? 1 : -1;
    this.joinX = map.wave.faceWidthM * 0.95;
    this.enteredAtS = map.wave.barrelSections.map(() => null);
  }

  resetWave(): void {
    this.enteredAtS.fill(null);
    this.arc.along = NaN;
    this.peelAlongM = null;
    this.riderAlongM = 0;
  }

  setPeelPosition(alongM: number, x?: number): void {
    // A low line runs out onto the shoulder ahead of the breaking crest.
    // Carving back up lets the lip catch the board from behind.
    let lag = 0;
    if (x !== undefined) {
      const line = this.rideLineAt(alongM, x);
      if (line) lag = 12 * line.sectionBlend *
        smoothstep((line.lineX - x - .15 * line.radius) / (1.15 * line.radius));
      // Limit how fast the breaking point gains on a rider cutting back.
      // Otherwise a hard turn can sweep the whole curtain through the lens in a frame.
      if (this.peelAlongM !== null && alongM >= this.riderAlongM) {
        lag = Math.max(lag, this.riderAlongM - this.peelAlongM - .55 * (alongM - this.riderAlongM));
      }
    }
    this.riderAlongM = alongM;
    this.peelAlongM = clamp(alongM - lag, 0, this.map.wave.rideLengthM);
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
    // Ease the peel ahead of the rider over the whole approach. Using the
    // section boundary here made adjacent rows of water jump to different heights.
    const length = this.map.wave.rideLengthM;
    const section = this.map.wave.barrelSections.find(s => alongM <= s.end01 * length + 8);
    const firstPitch = section ? section.start01 * length + 9 : 0;
    const distance = firstPitch - this.peelAlongM;
    const lead = distance > 0 ? distance * (1 - smoothstep((distance - 30) / 52)) : 0;
    return alongM - this.peelAlongM - lead;
  }

  rideLineAt(alongM: number, x: number) {
    const length = this.map.wave.rideLengthM;
    const lead = this.map.wave.peelSpeedMps * 2.8;
    const section = this.map.wave.barrelSections.find(s =>
      alongM >= s.start01 * length - lead && alongM < s.end01 * length);
    if (!section) return null;
    const lineX = this.joinX - section.radiusM;
    const distance = alongM - section.start01 * length;
    const entry = smoothstep((distance + lead) / lead);
    const exit = smoothstep((section.end01 * length - alongM) /
      Math.min(14, (section.end01 - section.start01) * length * .22));
    const catchWidth = Math.max(section.radiusM * 1.55, this.map.wave.faceWidthM * .24);
    const proximity = 1 - smoothstep((Math.abs(lineX - x) - catchWidth * .40) / catchWidth);
    const sectionBlend = entry * exit;
    return { lineX, radius: section.radiusM, sectionBlend, strength: sectionBlend * proximity };
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

  private approachLength(section: WaveSection): number {
    return Math.min(this.map.wave.peelSpeedMps, (section.end01 - section.start01) *
      this.map.wave.rideLengthM * .20);
  }

  private sectionAt(alongM: number, forming = false): number {
    const along01 = this.along01(alongM);
    return this.map.wave.barrelSections.findIndex(
      section => along01 <= section.end01 && (along01 >= section.start01 ||
        (forming && alongM >= section.start01 * this.map.wave.rideLengthM - this.approachLength(section))),
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
    if (this.enteredAtS[index] === null) {
      this.enteredAtS[index] = timeS;
      this.arc.along = NaN;
    }
  }

  exitTaper01(index: number): number {
    const section = this.map.wave.barrelSections[index];
    return section ? Math.min(0.10, (section.end01 - section.start01) * 0.35) : 0;
  }

  private curlRadius(alongM: number, timeS: number, forming = false): number {
    const index = this.sectionAt(alongM, forming);
    if (index < 0) return 0.12;
    const section = this.map.wave.barrelSections[index];
    const width = section.end01 - section.start01;
    const entryFade = Math.min(0.025, width * 0.18);
    const exitFade = this.exitTaper01(index);
    const along = this.along01(alongM);
    const lead = this.approachLength(section) / this.map.wave.rideLengthM;
    const edge = smoothstep((along - section.start01 + lead) / (entryFade + lead * .35)) *
      smoothstep((section.end01 - along) / exitFade);
    const rollingShape = 0.92 + 0.08 * Math.sin(alongM * 0.09 - timeS * 0.45 + this.phase);
    return 0.12 + section.radiusM * edge * this.peelingPeak(alongM, forming ? 4.8 : .45, forming ? 5.2 : 3.3) *
      this.openFraction(index, timeS) * rollingShape;
  }

  private lipArcAt(alongM: number, timeS: number) {
    const arc = this.arc;
    if (arc.along === alongM && arc.time === timeS && arc.peel === this.peelAlongM) return arc;
    const radius = this.curlRadius(alongM, timeS, true);
    const joinY = this.faceHeight(this.joinX, alongM, timeS);
    const crash = this.whitewaterAt(alongM);
    const tipX = Math.max(0.2, this.joinX - radius * 2.55 -
      crash * Math.min(5, this.map.wave.faceWidthM * 0.27));
    const tipY = this.faceHeight(tipX, alongM, timeS) + Math.min(.42, radius * .2);
    // Ahead of the surfer only the first part of the arc has folded. The
    // free edge traces the arch as it pitches, leaving the daylight open.
    const section = this.map.wave.barrelSections[this.sectionAt(alongM, true)];
    // The crest already has breadth as the rider approaches. Its tip sweeps
    // overhead before descending on the open-water side of the board.
    const lead = section ? this.approachLength(section) : 0;
    const entryOpen = section ? 1 - smoothstep((alongM - section.start01 *
      this.map.wave.rideLengthM + lead) / (2.3 * lead)) : 0;
    const unfurl = this.peelAlongM === null ? 0 :
      Math.max(entryOpen, smoothstep((this.distanceFromPeak(alongM) + .8) / 7.4));
    arc.along = alongM;
    arc.time = timeS;
    arc.peel = this.peelAlongM;
    arc.radius = radius;
    arc.joinY = joinY;
    arc.reach = tipX - this.joinX;
    arc.drop = tipY - joinY;
    arc.angle = Math.PI * (1 - .89 * unfurl);
    return arc;
  }

  crossSectionAt(alongM: number, u: number, timeS: number, outer = false): Vec3 {
    const z = this.direction * alongM;
    if (u < 0.78 || (u === .78 && !outer)) {
      const x = this.joinX * clamp(u / 0.78, 0, 1);
      return { x, y: this.faceHeight(x, alongM, timeS), z };
    }
    const curl = clamp((u - 0.78) / 0.22, 0, 1);
    const { radius, joinY, reach, drop, angle: sweep } = this.lipArcAt(alongM, timeS);
    const angle = sweep * curl;
    const sine = Math.sin(angle), cosine = Math.cos(angle);
    const fall = .5 - .5 * cosine;
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

  lipCoverageAt(alongM: number, x: number, timeS: number): number {
    const index = this.sectionAt(alongM, true);
    if (index < 0) return 0;
    const tip = this.crossSectionAt(alongM, 1, timeS);
    // Measure the overhang against the board's own line. A rider on the
    // flats can pass the same section without ducking or changing cameras.
    const reach = this.joinX - tip.x;
    const radius = this.map.wave.barrelSections[index].radiusM;
    const span = Math.max(.35 * radius, this.joinX - x);
    return smoothstep((reach / span - .35) / .8);
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

  // One turn traces the same cross-section used by the water mesh. Measure
  // distance along it so a narrow tube and a tall, lopsided tube both ride smoothly.
  wallContactAt(alongM: number, angle: number, timeS: number) {
    const points = this.wallTrack;
    let count = 0;
    const add = (x: number, y: number) => {
      const previous = points[Math.max(0, count - 1)];
      const distance = count ? previous.distance + Math.hypot(x - previous.x, y - previous.y) : 0;
      const p = points[count++];
      p.x = x;
      p.y = y;
      p.distance = distance;
    };
    const tip = this.crossSectionAt(alongM, 1, timeS);
    const width = Math.max(.1, this.joinX - tip.x);
    const floorX = this.joinX - width * .40;
    for (let i = 0; i <= 6; i++) {
      const x = floorX + (this.joinX - floorX) * i / 6;
      add(x, this.faceHeight(x, alongM, timeS));
    }
    for (let i = 1; i <= 18; i++) {
      const p = this.crossSectionAt(alongM, .78 + .22 * .92 * i / 18, timeS);
      add(p.x, p.y);
    }
    // The falling curtain meets whitewater at its foot. Round this short
    // corner so the board rolls through contact with the foam.
    const lip = points[count - 1];
    const floorEndX = tip.x + .17 * width;
    const floorEndY = this.faceHeight(floorEndX, alongM, timeS);
    const controlX = tip.x + .045 * width;
    const controlY = this.faceHeight(controlX, alongM, timeS);
    for (let i = 1; i <= 6; i++) {
      const t = i / 6, s = 1 - t;
      add(s ** 3 * lip.x + 3 * s * s * t * tip.x + 3 * s * t * t * controlX + t ** 3 * floorEndX,
        s ** 3 * lip.y + 3 * s * s * t * tip.y + 3 * s * t * t * controlY + t ** 3 * floorEndY);
    }
    for (let i = 1; i <= 4; i++) {
      const x = floorEndX + (floorX - floorEndX) * i / 4;
      add(x, this.faceHeight(x, alongM, timeS));
    }
    const perimeter = points[count - 1].distance;
    const sample = (distance: number) => {
      const d = ((distance % perimeter) + perimeter) % perimeter;
      let i = 1;
      while (i < count - 1 && points[i].distance < d) i++;
      const a = points[i - 1], b = points[i];
      const t = (d - a.distance) / Math.max(.0001, b.distance - a.distance);
      return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
    };
    const footprint = Math.min(.55, perimeter * .055);
    // Allow time to change rail angle at the tight foot of the curtain.
    // Equal distance per tick here would whip the board upright in a few frames.
    const turn = 2 * Math.PI;
    let progress = 0;
    for (let i = 0; i < count; i++) {
      const p = points[i];
      const before = sample(p.distance - footprint), after = sample(p.distance + footprint);
      p.slope = Math.atan2(after.y - before.y, after.x - before.x);
      if (i) {
        const previous = points[i - 1];
        p.slope += Math.round((previous.slope - p.slope) / turn) * turn;
        progress += p.distance - previous.distance + .13 * perimeter * Math.abs(p.slope - previous.slope);
      }
      p.progress = progress;
    }
    const fraction = angle / turn - Math.floor(angle / turn);
    const target = fraction * progress;
    let i = 1;
    while (i < count - 1 && points[i].progress < target) i++;
    const a = points[i - 1], b = points[i];
    const t = (target - a.progress) / Math.max(.0001, b.progress - a.progress);
    const slope = a.slope + (b.slope - a.slope) * t;
    const normal = { x: -Math.sin(slope), y: Math.cos(slope), z: 0 };
    const position = { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, z: alongM * this.direction };
    return { position, normal };
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
      x < this.joinX - radius * 0.18 && x > this.joinX - radius * 1.9 &&
      x >= this.crossSectionAt(alongM, 1, timeS).x;
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
