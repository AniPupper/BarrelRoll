import assert from 'node:assert/strict';
import test from 'node:test';
import { ScoreCounter } from '../../src/app/scoreCounter';
import { RuntimeScore } from '../../src/engine/scoring';
import { SurfSimulation } from '../../src/engine/simulation';
import { createTrickController } from '../../src/engine/tricks';
import { maps } from '../../src/maps';

test('riding earns points continuously, with higher rates for speed, wall rides and grabs', () => {
  const score = new RuntimeScore();
  function second(speed: number, state: 'surfing' | 'barrel' | 'airborne' | 'wipeout', wall = false, grab = false) {
    const start = score.score;
    for (let i = 0; i < 60; i++) score.addRideTime(1 / 60, speed, state, wall, grab);
    return score.score - start;
  }
  const cruise = second(12, 'surfing'), tuck = second(30, 'surfing');
  const tube = second(30, 'barrel'), loop = second(30, 'barrel', true);
  const air = second(30, 'airborne'), grab = second(30, 'airborne', false, true);
  assert.ok(cruise > 0 && tuck > cruise && tube > tuck && loop > tube);
  assert.ok(grab > air && air > tuck);
  assert.equal(second(30, 'wipeout'), 0);
  for (const mode of ['score-run', 'free-surf'] as const) {
    const sim = new SurfSimulation(maps.mavericks, mode, 8, createTrickController(), () => {});
    sim.start();
    const neutral = { steer: 0, wallRide: 0, jumpChargeS: null, trick: { spinAxis: 0, flipAxis: 0 } } as const;
    for (let i = 0; i < 24; i++) sim.step(neutral);
    const first = sim.score.score;
    for (let i = 0; i < 24; i++) sim.step(neutral);
    assert.ok(sim.score.score > first && first > 0);
    const final = sim.finish()!;
    sim.step(neutral);
    assert.equal(sim.score.score, final.score);
    sim.reset();
    assert.equal(sim.score.score, 0);
  }
});

test('a banked award accelerates then eases down to its exact value at different frame rates', () => {
  const score = new RuntimeScore();
  score.addBarrel(8, 10);
  score.bank();
  const target = score.score;
  const atOneSecond: number[] = [];
  for (const fps of [30, 60, 120]) {
    const counter = new ScoreCounter();
    let peakRate = 0;
    for (let frame = 1; frame <= fps * 4; frame++) {
      const before = counter.value;
      counter.advance(target, 1 / fps);
      const increment = counter.value - before;
      assert.ok(increment >= 0 && increment < target * .08);
      assert.ok(counter.value <= target);
      peakRate = Math.max(peakRate, counter.rate);
      if (frame === 1) assert.ok(counter.value < target * .015);
      if (frame === fps) {
        assert.ok(counter.rate < peakRate * .3);
        atOneSecond.push(counter.value);
        const pausedValue = counter.value;
        counter.advance(target, 0);
        assert.equal(counter.value, pausedValue);
      }
    }
    assert.equal(counter.value, target);
    assert.equal(counter.rate, 0);
    counter.reset();
    assert.equal(counter.value, 0);
  }
  assert.ok(Math.max(...atOneSecond) - Math.min(...atOneSecond) < .001);
});
