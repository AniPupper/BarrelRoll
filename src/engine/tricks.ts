import { MathUtils, Quaternion, Vector3 } from 'three';
import type { TrickController, LandingReport } from '../shared/contracts';

export function createTrickController(): TrickController {
  const base = new Quaternion(), orientation = new Quaternion();
  const yaw = new Quaternion(), pitch = new Quaternion();
  const up = new Vector3(0, 1, 0), across = new Vector3(1, 0, 0);
  let airId = '', spin = 0, flip = 0, spinRate = 0, flipRate = 0;
  let loadedRail = 0;
  const units = (angle: number, unit: number) => Math.floor((Math.abs(angle) + 0.00001) / unit);
  const figures = () => {
    const turns = units(spin, 180) * 180, flips = units(flip, 360);
    const rotation = flip > 0 ? 'frontflip' : 'backflip';
    return [turns ? String(turns) : '', flips ? (flips > 1 ? flips + '× ' : '') + rotation : '']
      .filter(Boolean).join(' + ') || 'Straight air';
  };
  // A released input damps angular velocity and gently finishes a nearly aligned rotation.
  function settle(angle: number, step: number, dt: number) {
    const error = Math.round(angle / step) * step - angle;
    if (Math.abs(error) < .3) return angle + error;
    return Math.abs(error) < 22 ? angle + error * (1 - Math.exp(-8 * dt)) : angle;
  }
  return {
    beginAir(start) {
      airId = start.airId;
      loadedRail = start.loadedRail ?? 0;
      base.copy(start.orientation);
      orientation.copy(base);
      spin = flip = spinRate = flipRate = 0;
    },
    step(input, dt) {
      // A charged rail carries into the first spin if the rider follows that turn.
      if (loadedRail * input.spinAxis > 0) spinRate = loadedRail * 310;
      loadedRail = 0;
      const rotationScale = input.tucked ? 1.42 : 1;
      spinRate = MathUtils.damp(spinRate, input.spinAxis * 650 * rotationScale, input.spinAxis ? 12 : 19, dt);
      flipRate = MathUtils.damp(flipRate, input.flipAxis * 510 * rotationScale, input.flipAxis ? 11 : 19, dt);
      spin += spinRate * dt;
      flip += flipRate * dt;
      if (!input.spinAxis) spin = settle(spin, 180, dt);
      if (!input.flipAxis) flip = settle(flip, 360, dt);
      orientation.copy(base).multiply(yaw.setFromAxisAngle(up, MathUtils.degToRad(spin)))
        .multiply(pitch.setFromAxisAngle(across, MathUtils.degToRad(flip)));
      return {orientation, label: figures()};
    },
    land(contact): LandingReport {
      if (!airId) throw new Error('Landing without an active jump');
      const normal = new Vector3().copy(contact.surfaceNormal).normalize();
      const tilt = MathUtils.radToDeg(up.clone().applyQuaternion(orientation).angleTo(normal));
      const board = new Vector3(0,0,1).applyQuaternion(orientation).projectOnPlane(normal).normalize();
      const direction = new Vector3().copy(contact.travelDirection).projectOnPlane(normal).normalize();
      // When riding switch the tail leads, so use the nearer of the two board headings.
      if (board.dot(direction) < 0) board.negate();
      const side = new Vector3().crossVectors(normal, direction).normalize();
      const heading = MathUtils.radToDeg(Math.acos(Math.min(1, Math.abs(board.dot(direction)))));
      const quality = tilt <= 25 && heading <= 30 ? 'clean' : tilt <= 55 && heading <= 70 ? 'sketchy' : 'wipeout';
      const completedSpinDeg = units(spin,180)*180, completedFlips = units(flip,360);
      const id = airId;
      airId = '';
      return {airId:id, quality, slipSide:board.dot(side), completedSpinDeg, completedFlips, label:figures(),
        family:completedSpinDeg && completedFlips ? 'cork' : completedFlips ? 'flip' : completedSpinDeg ? 'spin' : 'straight-air',
        speedMultiplier:quality === 'clean' ? 1 : quality === 'sketchy' ? .68 : 0};
    },
    reset() { airId = ''; },
  };
}
