import assert from 'node:assert/strict';
import test from 'node:test';
import { GameplayInput, type ControlFrame } from '../../src/engine/input';
import { validateMap } from '../../src/engine/map';
import { RuntimeScore } from '../../src/engine/scoring';
import { SurfSimulation } from '../../src/engine/simulation';
import { WaveModel } from '../../src/engine/wave';
import { MAP_ORDER, STARTING_MAP_ID } from '../../src/maps';
import { mavericks } from '../../src/maps/mavericks';
import type { GameEvent, LandingReport } from '../../src/shared/contracts';
import { FixtureTrickController, pipeline } from './fixtures';

const neutral: ControlFrame = { steer: 0, wallRide: 0, jumpChargeS: null,
  trick: { spinAxis: 0, flipAxis: 0 } };

test('map validation rejects malformed sections and a closed-barrel spawn', () => {
  assert.doesNotThrow(() => validateMap(pipeline));
  assert.doesNotThrow(() => validateMap(mavericks));
  assert.equal(STARTING_MAP_ID, 'mavericks');
  assert.equal(MAP_ORDER[0], 'mavericks');
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
  const crest = wave.crossSectionAt(along, 0.78, 0);
  const roof = wave.crossSectionAt(along, 0.9, 0);
  const pitchedLip = wave.crossSectionAt(along, 1, 0);
  assert.ok(pitchedLip.x < wave.joinX - query!.radiusM * 2.2);
  assert.ok(roof.y > crest.y + 1);
  assert.ok(pitchedLip.y < crest.y);
  const opening = wave.barrelAt(pipeline.wave.rideLengthM * 0.67, 0, 0, 0);
  assert.ok(opening!.radiusM < query!.radiusM * 0.5);
  wave.enterSection(0, 0);
  const warning = wave.barrelAt(along, 0, 0, 12)!;
  assert.ok(warning.radiusM < query!.radiusM);
  assert.ok(warning.foam > query!.foam);
  assert.equal(wave.openFraction(0, 14), 0);
  wave.resetWave();
  assert.equal(wave.openFraction(0, 14), 1);
});

test('Mavericks rises into a hollow lip and peels down to an open shoulder', () => {
  const wave = new WaveModel(mavericks);
  const tubeAlong = mavericks.wave.rideLengthM * 0.27;
  const shoulderAlong = mavericks.wave.rideLengthM * 0.43;
  const crest = wave.crossSectionAt(tubeAlong, 0.78, 0);
  const roof = wave.crossSectionAt(tubeAlong, 0.9, 0);
  const lipTip = wave.crossSectionAt(tubeAlong, 1, 0);
  const impact = wave.surfaceAt(tubeAlong, lipTip.x, 0).position;
  const shoulder = wave.crossSectionAt(shoulderAlong, 0.78, 0);
  assert.ok(roof.y > crest.y + 1.2);
  assert.ok(lipTip.x < crest.x - 5);
  assert.ok(lipTip.y > impact.y && lipTip.y - impact.y < 0.5);
  assert.ok(crest.y > shoulder.y * 1.7);
});

test('the Mavericks break crashes behind the rider and stays open ahead', () => {
  const wave = new WaveModel(mavericks);
  const riderAlong = mavericks.wave.rideLengthM * 0.27;
  wave.setPeelPosition(riderAlong);
  const behind = riderAlong - 28;
  const ahead = riderAlong + 28;
  const mouth = riderAlong + 4;
  const localTube = wave.barrelAt(riderAlong, 0, 0, 0)!;
  const broken = wave.barrelAt(behind, 0, 0, 0)!;
  const openMouth = wave.barrelAt(mouth, 0, 0, 0)!;
  const shoulder = wave.barrelAt(ahead, 0, 0, 0)!;
  assert.ok(localTube.radiusM > 2.5);
  assert.ok(broken.radiusM < 0.2);
  assert.ok(openMouth.radiusM < 0.2);
  assert.ok(shoulder.radiusM < 0.2);
  assert.ok(wave.whitewaterAt(behind) > 0.8);
  assert.equal(wave.whitewaterAt(ahead), 0);
  assert.ok(wave.crossSectionAt(riderAlong, 0.78, 0).y >
    wave.crossSectionAt(ahead, 0.78, 0).y * 1.7);
});

test('a held W does not flip at takeoff, but a fresh air press does', () => {
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

test('normal carving stays on the face and Shift engages the barrel wall', () => {
  const input = new GameplayInput();
  input.press('a', true);
  assert.equal(input.frame().steer, -1);
  assert.equal(input.frame().wallRide, 0);
  input.press('Shift', true);
  assert.equal(input.frame().wallRide, -1);
  input.release('a');
  assert.equal(input.frame().wallRide, 0);
  input.clear();
  assert.equal(input.frame().wallRide, 0);
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

test('the board carves promptly, settles on release, and forward speed follows the wave', () => {
  const carving = new SurfSimulation(mavericks, 'free-surf', 1,
    new FixtureTrickController(), () => {});
  const coasting = new SurfSimulation(mavericks, 'free-surf', 1,
    new FixtureTrickController(), () => {});
  const heldW = new GameplayInput();
  heldW.press('w', true);
  carving.start(); coasting.start();
  const startX = carving.position.x;
  const startSpeed = carving.speedMps;
  for (let i = 0; i < 30; i++) {
    carving.step({ ...neutral, steer: -1 });
    coasting.step(heldW.frame());
  }
  assert.ok(carving.position.x > startX + 2);
  assert.ok(Math.abs(coasting.speedMps - startSpeed) > 0.2);
  const releaseX = carving.position.x;
  for (let i = 0; i < 60; i++) carving.step(neutral);
  assert.ok(carving.position.x - releaseX < 0.9);
  assert.ok(Math.abs(carving.lateralMps) < 0.01);
  const noInput = new SurfSimulation(mavericks, 'free-surf', 1,
    new FixtureTrickController(), () => {});
  noInput.start();
  for (let i = 0; i < 30; i++) noInput.step(neutral);
  assert.equal(coasting.speedMps, noInput.speedMps);
});

test('the opening Mavericks barrel allows a four-second ride and clean exit', () => {
  const sim = new SurfSimulation(mavericks, 'free-surf', 1,
    new FixtureTrickController(), () => {});
  sim.start();
  for (let i = 0; i < 60 * 23; i++) {
    sim.step({ ...neutral, steer: i < 60 * 1.75 ? -1 : 0 });
  }
  assert.ok(sim.metrics.longestBarrelS >= 4);
  assert.ok(sim.score.score > 0);
  assert.equal(sim.metrics.wipeouts, 0);
});

test('A can carry the board through a full loop inside the Mavericks barrel', () => {
  const sim = new SurfSimulation(mavericks, 'free-surf', 1,
    new FixtureTrickController(), () => {});
  sim.start();
  for (let i = 0; i < 60 * 9 && sim.state !== 'barrel'; i++) {
    sim.step({ ...neutral, steer: i < 60 * 1.75 ? -1 : 0 });
  }
  assert.equal(sim.state, 'barrel');
  const initialY = sim.position.y;
  let highestY = initialY;
  let hollowFrames = 0;
  for (let i = 0; i < 130; i++) {
    sim.step({ ...neutral, wallRide: -1 });
    highestY = Math.max(highestY, sim.position.y);
    const riderX = sim.position.x - Math.sin(sim.wallRideAngle) * 0.85;
    const riderY = sim.position.y + Math.cos(sim.wallRideAngle) * 0.85;
    if (sim.wave.barrelAt(sim.alongM, riderX, riderY,
      sim.simulationTimeS)?.inside) hollowFrames++;
  }
  assert.ok(sim.wallRideAngle >= Math.PI * 2);
  assert.ok(highestY > initialY + 2);
  assert.ok(hollowFrames > 110);
  assert.equal(sim.metrics.wipeouts, 0);
  const peakAngle = sim.wallRideAngle;
  for (let i = 0; i < 30; i++) sim.step({ ...neutral, wallRide: 1 });
  assert.ok(sim.wallRideAngle < peakAngle);
  for (let i = 0; i < 180 && sim.wallRideActive; i++) sim.step(neutral);
  assert.equal(sim.wallRideActive, false);
  assert.equal(sim.state, 'barrel');
  assert.ok(Math.abs(sim.position.y - sim.wave.surfaceAt(sim.alongM,
    sim.position.x, sim.simulationTimeS).position.y) < 0.05);
});

test('holding Shift and A starts a deliberate Mavericks wall ride near the hollow', () => {
  const sim = new SurfSimulation(mavericks, 'free-surf', 1,
    new FixtureTrickController(), () => {});
  const input = new GameplayInput();
  sim.start();
  input.press('Shift', true);
  input.press('a', true);
  for (let i = 0; i < 60 * 9; i++) {
    input.advance(1 / 60, true);
    sim.step(input.frame());
  }
  assert.ok(sim.wallRideAngle >= Math.PI * 2);
  assert.equal(sim.metrics.wipeouts, 0);
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
    { start01: 0.2, end01: 0.42, radiusM: 1.8, closeAfterEntryS: null },
  ] } };
  const sim = new SurfSimulation(map, 'free-surf', 1, new FixtureTrickController(), () => {});
  sim.start();
  sim.alongM = map.wave.rideLengthM * 0.22;
  const x = sim.wave.joinX - 1.8;
  sim.position = sim.wave.surfaceAt(sim.alongM, x, 0).position;
  for (let i = 0; i < 600 && sim.alongM < map.wave.rideLengthM * 0.44; i++) sim.step(neutral);
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

test('Pipeline permits its six-second barrel goal and a clean exit at automatic speed', () => {
  const sim = new SurfSimulation(pipeline, 'free-surf', 1,
    new FixtureTrickController(), () => {});
  sim.start();
  for (let i = 0; i < 60 * 18; i++) {
    sim.step({ ...neutral, steer: i < 60 * 0.95 ? 1 : 0 });
  }
  assert.ok(sim.metrics.longestBarrelS >= 6);
  assert.ok(sim.score.score > 0);
  assert.equal(sim.metrics.wipeouts, 0);
});

test('the short Teahupoo closeout leaves a 3.5-second rideable opening', () => {
  const map = { ...pipeline, wave: { ...pipeline.wave, heightM: 6,
    faceWidthM: 8, barrelSections: [{ start01: 0.2, end01: 0.65,
      radiusM: 1.1, closeAfterEntryS: 11 }] } };
  const wave = new WaveModel(map);
  const along = map.wave.rideLengthM * 0.4;
  const x = wave.joinX - 1.1;
  wave.enterSection(0, 0);
  const riderY = wave.surfaceAt(along, x, 3.5).position.y + 0.85;
  assert.equal(wave.barrelAt(along, x, riderY, 3.5)?.inside, true);
  assert.ok(wave.barrelAt(along, x, riderY, 10.3)!.foam > 0.5);
  assert.equal(wave.openFraction(0, 11), 0);
});
