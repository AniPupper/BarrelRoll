import { MathUtils, Vector3 } from 'three';
import type { Vec3 } from '../shared/contracts';
import type { WaveModel } from './wave';

export class ChaseCamera {
  readonly eye = new Vector3();
  readonly focus = new Vector3();
  private readonly desired = new Vector3();
  private readonly target = new Vector3();
  private mix = 0;
  wallFraming = 0;
  private ready = false;

  reset() { this.ready = false; }

  update(wave: WaveModel, rider: Vec3, heading: Vec3, airHeight: number, grounded: boolean,
    timeS: number, dt: number, onWall = false) {
    const along = rider.z * wave.direction;
    const wallTarget = onWall ? 1 : 0;
    this.wallFraming = this.ready ? MathUtils.damp(this.wallFraming, wallTarget, 7, dt) : wallTarget;
    const line = grounded ? wave.rideLineAt(along, rider.x) : null;
    // The breaking crest can reach the trailing camera first on a late carve.
    const cover = line ? Math.max(wave.lipCoverageAt(along, rider.x, timeS),
      wave.lipCoverageAt(along - 7.5, rider.x, timeS)) : 0;
    const weight = Math.max(line ? line.strength * (.32 + .68 * cover) : 0, this.wallFraming);
    this.mix = this.ready ? MathUtils.damp(this.mix, weight, 6, dt) : weight;
    const tubeDistance = MathUtils.lerp(5.2, Math.min(10, 4 + (line?.radius ?? 2) * 1.65), this.wallFraming);
    const distance = MathUtils.lerp(7.5 + Math.min(4, airHeight * .22), tubeDistance, this.mix);
    // Anchor the chase distance to the rider. A fast carve shouldn't sling the lens
    // to the far side of the breaking curtain or put the penguin out of frame.
    const z = rider.z - wave.direction * distance;
    const outsideX = rider.x - heading.x * 2;
    this.desired.set(outsideX, rider.y + 3.2 + Math.min(2, airHeight * .13), z);
    this.target.set(rider.x + heading.x * .45, rider.y + 1.4, rider.z + wave.direction * 5);

    if (this.mix > .001) {
      const lensAlong = z * wave.direction;
      const pocket = wave.tubeCameraAt(lensAlong, timeS);
      const radius = wave.barrelAt(lensAlong, 0, 0, timeS)?.radiusM ?? 0;
      const lane = line?.lineX ?? rider.x;
      const entryX = MathUtils.lerp(rider.x, lane, .55);
      const fullRadius = line?.radius ?? 2;
      const overLane = pocket ? 1 - MathUtils.smoothstep(Math.abs(pocket.x - entryX),
        .16 * fullRadius, .72 * fullRadius) : 0;
      const room = MathUtils.smoothstep(radius / fullRadius, .40, .85) * overLane;
      const entryY = wave.surfaceAt(lensAlong, entryX, timeS).position.y + Math.min(1.55, .38 + .62 * fullRadius);
      const tubeX = MathUtils.lerp(entryX, pocket?.x ?? entryX, room);
      const tubeY = MathUtils.lerp(entryY, pocket?.y ?? entryY, room);
      this.desired.x = MathUtils.lerp(outsideX, tubeX, this.mix);
      this.desired.y = MathUtils.lerp(this.desired.y, tubeY, this.mix);
      this.target.x = MathUtils.lerp(this.target.x, tubeX - .8, this.mix);
      // Aim through the rider toward the opening. Using the roof height as
      // the look target tilts the view upward just as the lip wraps over us.
      const lookAhead = 5 + 2 * this.mix;
      const riderAim = rider.y + 1.08;
      const tubeAim = riderAim + (riderAim - this.desired.y) * lookAhead / distance;
      this.target.y = MathUtils.lerp(this.target.y, tubeAim, this.mix);
      this.target.z = rider.z + wave.direction * lookAhead;
      // Keep a level view down the hollow as the rider crosses the ceiling.
      // Tracking the board at full strength here pitches the camera into the lip.
      if (this.wallFraming > .001) {
        const center = wave.tubeCameraAt(along, timeS);
        if (center) {
          const lens = pocket ?? center;
          this.desired.x = MathUtils.lerp(this.desired.x, lens.x, this.wallFraming);
          this.desired.y = MathUtils.lerp(this.desired.y, lens.y, this.wallFraming);
          const aimX = MathUtils.lerp(center.x, rider.x, .20);
          const aimY = MathUtils.lerp(center.y, rider.y, .20);
          this.target.x = MathUtils.lerp(this.target.x, aimX + (aimX - lens.x) * lookAhead / distance, this.wallFraming);
          this.target.y = MathUtils.lerp(this.target.y, aimY + (aimY - lens.y) * lookAhead / distance, this.wallFraming);
        }
      }
    }

    if (this.ready) {
      this.eye.lerp(this.desired, 1 - Math.exp(-12 * dt));
      this.focus.lerp(this.target, 1 - Math.exp(-10 * dt));
    } else {
      this.eye.copy(this.desired);
      this.focus.copy(this.target);
      this.ready = true;
    }
    this.eye.z = z;
    return this.mix;
  }
}
