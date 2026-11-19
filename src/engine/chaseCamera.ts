import { MathUtils, Vector3 } from 'three';
import type { Vec3 } from '../shared/contracts';
import type { WaveModel } from './wave';

export class ChaseCamera {
  readonly eye = new Vector3();
  readonly focus = new Vector3();
  private readonly desired = new Vector3();
  private readonly target = new Vector3();
  private mix = 0;
  private ready = false;

  reset() { this.ready = false; }

  update(wave: WaveModel, rider: Vec3, heading: Vec3, airHeight: number, grounded: boolean,
    timeS: number, dt: number) {
    const along = rider.z * wave.direction;
    const line = wave.rideLineAt(along, rider.x);
    const weight = grounded && line ? line.strength : 0;
    this.mix = this.ready ? MathUtils.damp(this.mix, weight, 6, dt) : weight;
    const distance = MathUtils.lerp(8 + Math.min(4, airHeight * .22), 3.8, this.mix);
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
      const room = MathUtils.smoothstep(radius, .56, 1.28);
      const lane = line?.lineX ?? rider.x;
      const entryX = MathUtils.lerp(rider.x, lane, .55);
      const entryY = wave.surfaceAt(lensAlong, entryX, timeS).position.y + 1.55;
      const tubeX = MathUtils.lerp(entryX, pocket?.x ?? entryX, room);
      const tubeY = MathUtils.lerp(entryY, pocket?.y ?? entryY, room);
      this.desired.x = MathUtils.lerp(outsideX, tubeX, this.mix);
      this.desired.y = MathUtils.lerp(this.desired.y, tubeY, this.mix);
      this.target.x = MathUtils.lerp(this.target.x, tubeX - .8, this.mix);
      this.target.y = MathUtils.lerp(this.target.y, tubeY + .16, this.mix);
      this.target.z += 2 * wave.direction * this.mix;
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
