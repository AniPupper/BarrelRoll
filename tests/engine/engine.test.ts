import assert from 'node:assert/strict';
import test from 'node:test';
import { GameplayInput, type ControlFrame } from '../../src/engine/input';
import { validateMap } from '../../src/engine/map';
import { RuntimeScore } from '../../src/engine/scoring';
import { SurfSimulation } from '../../src/engine/simulation';
import { WaveModel } from '../../src/engine/wave';
import type { GameEvent, LandingReport } from '../../src/shared/contracts';
import { FixtureTrickController, pipeline } from './fixtures';

const neutral: ControlFrame = { steer: 0, throttle: 0, jumpChargeS: null,
  trick: { spinAxis: 0, flipAxis: 0 } };

test('map validation rejects malformed sections and a closed-barrel spawn', () => {
  assert.doesNotThrow(() => validateMap(pipeline));
  assert.throws(() => validateMap({ ...pipeline, wave: { ...pipeline.wave,
    barrelSections: [{ start01: 0.7, end01: 0.2, radiusM: 1,
      closeAfterEntryS: null }] } }));
  assert.throws(() => validateMap({ ...pipeline, spawn: { along01: 0.3, face01: 0.35 } }));
});

test('the same folded wave contains the barrel and closes visibly over time', () => {
  const wave = new WaveModel(pipeline);
  const along = pipeline.wave.rideLengthM * 0.4;
  const query = wave.barrelAt(along, wave.joinX - 1.8,
    wave.surfaceAt(along, wave.joinX - 1.8, 0).position.y + 0.85, 0);
  assert.equal(query?.inside, true);
  assert.equal(wave.barrelAt(along, 0, 0, 0)?.inside, false);
  assert.ok(wave.crossSectionAt(along, 1, 0).x < wave.joinX - 1);
  wave.enterSection(0, 0);
  const warning = wave.barrelAt(along, 0, 0, 7)!;
  assert.ok(warning.radiusM < query!.radiusM);
  assert.ok(warning.foam > query!.foam);
  assert.equal(wave.openFraction(0, 9), 0);
  wave.resetWave();
  assert.equal(wave.openFraction(0, 9), 1);
});

test('held speed input does not flip at takeoff, but a fresh air press does', () => {
  const input = new GameplayInput();
  input.press('w', true);
  input.beginAir();
  assert.equal(input.frame().trick.flipAxis, 0);
  input.release('w');
  input.press('w', false);
  assert.equal(input.frame().trick.flipAxis, 1);
  input.clear();
  assert.equal(input.frame().trick.flipAxis, 0);
});

test('A steers left and D steers right on both break directions', () => {
  for (const breakDirection of ['left', 'right'] as const) {
    const map = { ...pipeline, wave: { ...pipeline.wave, breakDirection } };
    const left = new SurfSimulation(map, 'free-surf', 1,
      new FixtureTrickController(), () => {});
    const right = new SurfSimulation(map, 'free-surf', 1,
      new FixtureTrickController(), () => {});
    left.start(); right.start();
    const startX = left.position.x;
    for (let i = 0; i < 30; i++) {
      left.step({ ...neutral, steer: -1 });
      right.step({ ...neutral, steer: 1 });
    }
    assert.ok((left.position.x - startX) * breakDirectionFactor(breakDirection) < 0);
    assert.ok((right.position.x - startX) * breakDirectionFactor(breakDirection) > 0);
  }
});

function breakDirectionFactor(direction: 'left' | 'right'): number {
  return direction === 'left' ? 1 : -1;
}

test('combo applies repetition and multiplier once, then banks safely', () => {
  const score = new RuntimeScore();
  const report: LandingReport = { airId: 'a', quality: 'clean', family: 'spin',
    label: '360', completedSpinDeg: 360, completedFlips: 0, speedMultiplier: 1 };
  assert.equal(score.addAerial(report, true, 1), true);
  assert.equal(score.addAerial(report, true, 1), false);
  score.addAerial({ ...report, airId: 'b' }, true, 2);
  assert.equal(score.pendingCombo, 1063);
  assert.equal(score.tick(5, false), 0);
  assert.equal(score.tick(5, true), 1063);
  assert.equal(score.score, 1063);
  assert.equal(score.bestCombo, 1063);
  score.addAerial({ ...report, airId: 'c' }, true, 6);
  score.losePending();
  assert.equal(score.score, 1063);
});

test('simulation consumes one landing report and ends a timed run once', () => {
  const trick = new FixtureTrickController();
  const events: GameEvent[] = [];
  const sim = new SurfSimulation(pipeline, 'score-run', 4, trick, (event) => events.push(event));
  sim.start();
  sim.step({ ...neutral, jumpChargeS: 0.4 });
  assert.equal(sim.state, 'airborne');
  for (let i = 0; i < 180 && sim.state === 'airborne'; i++) sim.step(neutral);
  assert.equal(trick.landCount, 1);
  assert.equal(sim.metrics.cleanLandings, 1);
  assert.equal(sim.metrics.largestLandedSpinDeg, 360);
  for (let i = 0; i < 60 * 120 && !sim.ended; i++) sim.step(neutral);
  assert.equal(sim.ended, true);
  assert.equal(events.filter((event) => event.type === 'run-ended').length, 1);
  assert.equal(sim.finish(), null);
  const result = events.find((event) => event.type === 'run-ended');
  assert.equal(result?.type === 'run-ended' && result.result.reason, 'timer');
  assert.ok(events.filter((event) => event.type === 'hud').length <= 1202);
});

test('a ridden barrel earns one action on a clean exit', () => {
  const map = { ...pipeline, wave: { ...pipeline.wave, barrelSections: [
    { start01: 0.2, end01: 0.36, radiusM: 1.8, closeAfterEntryS: null },
  ] } };
  const sim = new SurfSimulation(map, 'free-surf', 1, new FixtureTrickController(), () => {});
  sim.start();
  sim.alongM = map.wave.rideLengthM * 0.22;
  const x = sim.wave.joinX - 1.8;
  sim.position = sim.wave.surfaceAt(sim.alongM, x, 0).position;
  for (let i = 0; i < 600 && sim.alongM < map.wave.rideLengthM * 0.4; i++) sim.step(neutral);
  assert.ok(sim.metrics.longestBarrelS > 3);
  assert.ok(sim.score.pendingCombo > 300);
  for (let i = 0; i < 200; i++) sim.step(neutral);
  assert.ok(sim.score.score > 300);
});

test('a closing barrel wipes out the unbanked combo', () => {
  const map = { ...pipeline, wave: { ...pipeline.wave, barrelSections: [
    { start01: 0.2, end01: 0.7, radiusM: 1.8, closeAfterEntryS: 1 },
  ] } };
  const events: GameEvent[] = [];
  const sim = new SurfSimulation(map, 'free-surf', 1, new FixtureTrickController(),
    (event) => events.push(event));
  sim.start();
  sim.score.addBarrel(3, 0);
  sim.alongM = map.wave.rideLengthM * 0.3;
  const x = sim.wave.joinX - 1.8;
  sim.position = sim.wave.surfaceAt(sim.alongM, x, 0).position;
  for (let i = 0; i < 120 && sim.metrics.wipeouts === 0; i++) sim.step(neutral);
  assert.equal(sim.metrics.wipeouts, 1);
  assert.equal(sim.score.pendingCombo, 0);
  assert.equal(events.filter((event) => event.type === 'wipeout').length, 1);
});

test('Pipeline permits its six-second barrel goal and a clean exit with pumping', () => {
  const sim = new SurfSimulation(pipeline, 'free-surf', 1,
    new FixtureTrickController(), () => {});
  sim.start();
  for (let i = 0; i < 60 * 18; i++) {
    sim.step({ ...neutral, steer: i < 60 * 1.05 ? 1 : 0, throttle: 1 });
  }
  assert.ok(sim.metrics.longestBarrelS >= 6);
  assert.ok(sim.score.score > 0);
  assert.equal(sim.metrics.wipeouts, 0);
});

test('the short Teahupoo closeout leaves a 3.5-second rideable opening', () => {
  const map = { ...pipeline, wave: { ...pipeline.wave, heightM: 6,
    faceWidthM: 8, barrelSections: [{ start01: 0.2, end01: 0.65,
      radiusM: 1.1, closeAfterEntryS: 4.5 }] } };
  const wave = new WaveModel(map);
  const along = map.wave.rideLengthM * 0.4;
  const x = wave.joinX - 1.1;
  wave.enterSection(0, 0);
  const riderY = wave.surfaceAt(along, x, 3.5).position.y + 0.85;
  assert.equal(wave.barrelAt(along, x, riderY, 3.5)?.inside, true);
  assert.ok(wave.barrelAt(along, x, riderY, 4.2)!.foam > 0.5);
  assert.equal(wave.openFraction(0, 4.5), 0);
});
