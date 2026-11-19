import assert from 'node:assert/strict';
import test from 'node:test';
import { SurfSimulation } from '../../src/engine/simulation';
import { createTrickController } from '../../src/engine/tricks';
import { maps } from '../../src/maps';
import type { ControlFrame } from '../../src/engine/input';

function ride(face: number) {
  // An open section lets us compare two input lines on the same part of a wave.
  const map = { ...maps.mavericks, spawn: {face01: face, along01: .44} };
  const sim = new SurfSimulation(map, 'free-surf', 8, createTrickController(), () => {});
  sim.start();
  return sim;
}
function step(sim: SurfSimulation, steer: ControlFrame['steer'], jumpChargeS: number | null = null) {
  sim.step({steer, wallRide:steer, jumpChargeS, trick:{spinAxis:steer, flipAxis:0}});
}
test('a full cutback earns points while steering taps on the same line do not', () => {
  const carving = ride(.35);
  for (let i = 0; i < 88; i++) step(carving,-1);
  for (let i = 0; i < 44; i++) step(carving,1);
  assert.ok(carving.score.pendingCombo >= 180);
  const taps = ride(.35);
  for (let i = 0; i < 132; i++) step(taps,i % 2 === 0 ? -1 : 1);
  assert.equal(taps.score.pendingCombo,0);
});
test('the same jump input gets more lift on the wave lip than down in the trough', () => {
  const high = ride(.86), low = ride(.27);
  for (let i = 0; i < 160; i++) { step(high,0); step(low,0); }
  step(high,0,.4); step(low,0,.4);
  assert.ok(high.verticalMps > low.verticalMps + 2);
});
test('an air tuck changes rotation while preserving the jump trajectory', () => {
  const open = ride(.35), tucked = ride(.35);
  for(const sim of [open,tucked]) step(sim,0,.6);
  for(let i=0;i<40;i++) {
    for(const sim of [open,tucked]) {
      sim.step({steer:1,wallRide:1,jumpChargeS:null,trick:{spinAxis:1,flipAxis:0,tucked:sim===tucked}});
    }
  }
  assert.deepEqual(open.position,tucked.position);
  assert.equal(open.trickLabel,'360');
  assert.equal(tucked.trickLabel,'540');
});

test('a fast carve launches off a ramp, while holding a charge lets you pick the release', () => {
  const map = {...maps.mavericks, spawn:{along01:.505, face01:.81}};
  for (const holding of [false, true]) {
    const sim = new SurfSimulation(map, 'free-surf', 8, createTrickController(), () => {});
    sim.start();
    for (let i = 0; i < 30; i++) {
      sim.step({steer:-1, wallRide:-1, charge01:holding ? 1 : 0, jumpChargeS:null,
        trick:{spinAxis:-1, flipAxis:0}});
    }
    assert.equal(sim.state, holding ? 'surfing' : 'airborne');
    if (holding) {
      step(sim, -1, .6);
      assert.equal(sim.state, 'airborne');
      assert.ok(sim.verticalMps > 10);
    }
  }
});

test('a loaded rail carries into a matching spin and still allows a straight air', () => {
  function spinAfterTakeoff(loadedRail: number, spinAxis: -1 | 0 | 1) {
    const controller = createTrickController();
    controller.beginAir({airId:'rail', orientation:{x:0, y:0, z:0, w:1}, loadedRail});
    let yaw = 0;
    for (let i = 0; i < 4; i++) {
      const {orientation} = controller.step({spinAxis, flipAxis:0}, 1 / 60);
      yaw = 2 * Math.atan2(orientation.y, orientation.w);
    }
    return yaw;
  }
  assert.ok(spinAfterTakeoff(1, 1) > spinAfterTakeoff(0, 1) + .15);
  assert.equal(spinAfterTakeoff(-1, 1), spinAfterTakeoff(0, 1));
  assert.equal(spinAfterTakeoff(1, 0), 0);
});
