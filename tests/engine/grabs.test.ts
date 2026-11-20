import assert from 'node:assert/strict';
import test from 'node:test';
import { Vector3 } from 'three';
import { GameplayInput } from '../../src/engine/input';
import { flipperTip } from '../../src/engine/penguin';
import { RuntimeScore } from '../../src/engine/scoring';
import { SurfSimulation } from '../../src/engine/simulation';
import { createTrickController } from '../../src/engine/tricks';
import { SurferVisual } from '../../src/engine/visuals';
import { maps } from '../../src/maps';
import { DEFAULT_SETTINGS } from '../../src/progress';

for (const left of [false, true]) {
  const side = left ? 'Left' : 'Right';
  test(`an E-key ${side.toLowerCase()} grab holds the actual rail, opens up and earns landing points`, () => {
    const map = { ...maps.mavericks, spawn: { along01: .44, face01: .35 } };
    const sim = new SurfSimulation(map, 'free-surf', 8, createTrickController(), () => {});
    const input = new GameplayInput();
    const rider = new SurferVisual(DEFAULT_SETTINGS, map.visual.foamColor);
    function tick() {
      const onWave = sim.state === 'surfing' || sim.state === 'barrel';
      input.advance(1 / 60, onWave);
      sim.step(input.frame());
      if (onWave && sim.state === 'airborne') input.beginAir();
    }
    function handPosition() {
      rider.update(sim, DEFAULT_SETTINGS);
      rider.group.position.copy(sim.position);
      rider.group.quaternion.copy(sim.orientation);
      rider.group.updateMatrixWorld(true);
      const flipper = rider.group.getObjectByName(side + ' flipper')!;
      return rider.group.worldToLocal(flipper.localToWorld(flipperTip.clone()));
    }
    sim.start();
    input.press('E', true);
    input.press(' ', true);
    for (let i = 0; i < 38; i++) tick();
    assert.equal(sim.grabPose, 0);
    assert.equal(sim.score.pendingCombo, 0);
    if (left) input.release('E');
    input.release(' ');
    tick();
    assert.equal(sim.state, 'airborne');
    if (left) {
      input.press('a', false);
      input.press('e', false);
    }
    tick();
    input.release('a');
    for (let i = 0; i < 23; i++) tick();
    const boardSide = left ? 1 : -1;
    const rail = new Vector3(boardSide * .385, .155, boardSide * .18);
    assert.ok(handPosition().distanceTo(rail) < .025);
    assert.match(sim.trickLabel, new RegExp(side + ' rail grab'));
    input.release('e');
    for (let i = 0; i < 14; i++) tick();
    assert.ok(handPosition().distanceTo(rail) > .25);
    for (let i = 0; i < 100 && sim.state === 'airborne'; i++) tick();
    assert.match(sim.trickLabel, new RegExp(side + ' rail grab · Clean landing'));
    assert.equal(sim.score.pendingCombo, 300);
    sim.reset();
    assert.equal(sim.grabPose, 0);
    rider.dispose();
  });
}

test('only a sustained grab of each distinct rail earns points in one air', () => {
  const trick = createTrickController();
  const start = { airId: 'first', orientation: { x: 0, y: 0, z: 0, w: 1 } };
  const landing = { surfaceNormal: { x: 0, y: 1, z: 0 }, travelDirection: { x: 0, y: 0, z: 1 }, impactSpeedMps: 9 };
  const tick = (grab: boolean, spinAxis: -1 | 0 | 1 = 0) => trick.step({ grab, spinAxis, flipAxis: 0 }, 1 / 60);
  trick.beginAir(start);
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 8; j++) tick(true);
    tick(false);
  }
  assert.equal(trick.land(landing).completedGrabs, 0);
  trick.beginAir({ ...start, airId: 'second' });
  for (const side of [-1, -1, 1] as const) {
    tick(true, side);
    assert.equal(tick(true, side === -1 ? 1 : -1).grabSide, side);
    for (let j = 0; j < 20; j++) tick(true);
    tick(false);
  }
  const report = trick.land(landing);
  assert.equal(report.completedGrabs, 2);
  assert.equal(report.label, 'Double rail grab');
  const score = new RuntimeScore();
  assert.ok(score.addAerial(report, true, 2));
  assert.equal(score.pendingCombo, 500);
  assert.equal(score.addAerial(report, true, 2), false);
  score.reset();
  score.addAerial({ ...report, quality: 'wipeout' }, true, 2);
  assert.equal(score.pendingCombo, 0);
  trick.beginAir({ ...start, airId: 'third' });
  assert.equal(tick(false).label, 'Straight air');
  assert.equal(trick.land(landing).completedGrabs, 0);
});
