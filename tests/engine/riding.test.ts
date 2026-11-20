import assert from 'node:assert/strict';
import test from 'node:test';
import { SurfSimulation } from '../../src/engine/simulation';
import { createTrickController } from '../../src/engine/tricks';
import { maps } from '../../src/maps';
import { GameplayInput, type ControlFrame } from '../../src/engine/input';

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

test('releasing a carve early or late still gives a long first Mavericks barrel', () => {
  for (const heldS of [.7, 1.4, 2.4]) {
    const sim = new SurfSimulation(maps.mavericks,'free-surf',8,createTrickController(),()=>{});
    sim.start();
    for (let tick=0;tick<60*15;tick++) {
      const steer = tick<heldS*60 ? -1 : 0;
      sim.step({steer,wallRide:0,jumpChargeS:null,trick:{spinAxis:0,flipAxis:0}});
    }
    assert.ok(sim.metrics.longestBarrelS>4.5);
    assert.equal(sim.metrics.wipeouts,0);
  }
});

test('a sustained uphill carve loops, releasing settles, and the downhill rail carves out', () => {
  for (const map of [maps.mavericks, maps.pipeline]) {
    const start = map.wave.barrelSections[0].start01 * map.wave.rideLengthM;
    for (const carveFrom of [0, start + 4]) {
      const sim = new SurfSimulation(map, 'free-surf', 8, createTrickController(), () => {});
      const uphill = -sim.wave.direction as -1 | 1;
      const input = (steer: ControlFrame['steer']) => ({
        steer, wallRide: 0 as const, jumpChargeS: null, trick: { spinAxis: 0 as const, flipAxis: 0 as const },
      });
      sim.start();
      for (let tick = 0; tick < 1200 && sim.barrelS < 2; tick++) {
        sim.step(input(sim.alongM >= carveFrom ? uphill : 0));
      }
      assert.equal(sim.state, 'barrel', map.name);
      assert.ok(sim.barrelS >= 2, map.name);
      assert.ok(sim.wallRideActive, map.name);
      for (let tick = 0; tick < 140 && sim.wallRideActive; tick++) sim.step(input(0));
      assert.equal(sim.wallRideActive, false, map.name);
      assert.equal(sim.state, 'barrel', map.name);
      const insideX = sim.position.x;
      for (let tick = 0; tick < 60; tick++) sim.step(input(sim.wave.direction));
      assert.equal(sim.state, 'surfing', map.name);
      assert.ok(sim.position.x < insideX - 2, map.name);
      assert.equal(sim.metrics.wipeouts, 0, map.name);
    }
  }
});


test('full tuck doubles cruising speed and a countersteer bites within a quarter second', () => {
  const open = { ...maps.nazare, spawn: { along01: .06, face01: .48 } };
  function run(key?: string) {
    const sim = new SurfSimulation(open, 'free-surf', 8, createTrickController(), () => {});
    const input = new GameplayInput();
    sim.start();
    if (key) input.press(key, true);
    for (let i = 0; i < 150; i++) sim.step(input.frame());
    return { sim, input };
  }
  const cruise = run(), fast = run('w'), brake = run('s');
  assert.ok(fast.sim.speedMps > cruise.sim.speedMps * 1.9);
  assert.ok(brake.sim.speedMps < cruise.sim.speedMps * .56);
  cruise.input.press('a', true);
  for (let i = 0; i < 27; i++) cruise.sim.step(cruise.input.frame());
  assert.ok(Math.atan2(cruise.sim.lateralMps, cruise.sim.speedMps) > .74);
  cruise.input.release('a');
  cruise.input.press('d', true);
  for (let i = 0; i < 14; i++) cruise.sim.step(cruise.input.frame());
  assert.ok(cruise.sim.lateralMps < -cruise.sim.speedMps * .65);
});

test('the wall brake parks on the ceiling, a reverse carve unwinds, and Space pops off it', () => {
  const sim = new SurfSimulation(maps.mavericks, 'free-surf', 8, createTrickController(), () => {});
  const input = new GameplayInput();
  sim.start();
  input.press('a', true);
  function tick() { input.advance(1 / 60, true); sim.step(input.frame()); }
  for (let i = 0; i < 600 && sim.state !== 'barrel'; i++) tick();
  assert.equal(sim.state, 'barrel');
  const upY = () => 1 - 2 * (sim.orientation.x ** 2 + sim.orientation.z ** 2);
  for (let i = 0; i < 140 && upY() > -.80; i++) tick();
  assert.ok(upY() < -.8);
  input.release('a');
  input.press('s', true);
  for (let i = 0; i < 30; i++) tick();
  const parkedAngle = sim.wallRideAngle, start = sim.alongM;
  for (let i = 0; i < 18; i++) tick();
  assert.ok(upY() < -.50);
  assert.ok(Math.abs(sim.wallRideAngle - parkedAngle) < .02);
  assert.ok(sim.alongM > start + 1, 'still moving down the wave');
  input.release('s');
  input.press('d', true);
  for (let i = 0; i < 12; i++) tick();
  assert.ok(sim.wallRideAngle < parkedAngle - .2);
  input.press(' ', true);
  for (let i = 0; i < 10; i++) tick();
  input.release(' ');
  tick();
  assert.equal(sim.state, 'airborne');
  assert.equal(sim.wallRideActive, false);
  assert.ok(sim.activeAirId);
});

test('a keyboard side roll can be stopped, landed and credited', () => {
  const sim = ride(.35), input = new GameplayInput();
  input.press(' ', true);
  for (let i = 0; i < 38; i++) { input.advance(1 / 60, true); sim.step(input.frame()); }
  input.release(' ');
  sim.step(input.frame());
  assert.equal(sim.state, 'airborne');
  input.beginAir();
  input.press('ArrowRight', false);
  for (let i = 0; i < 45; i++) sim.step(input.frame());
  input.release('ArrowRight');
  for (let i = 0; i < 90 && sim.state === 'airborne'; i++) sim.step(input.frame());
  assert.equal(sim.state, 'surfing');
  assert.match(sim.trickLabel, /side roll · Clean landing/);
  assert.ok(sim.score.pendingCombo >= 700);
});
