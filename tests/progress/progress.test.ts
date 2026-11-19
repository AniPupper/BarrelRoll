import assert from 'node:assert/strict';
import test from 'node:test';
import { createProgressStore, SAVE_KEY, type StorageAdapter } from '../../src/progress/index';
import type { RunResult } from '../../src/shared/contracts';

class MemoryStorage implements StorageAdapter {
  items = new Map<string, string>();
  failWrites = false;
  getItem(key: string) { return this.items.get(key) ?? null; }
  setItem(key: string, value: string) {
    if (this.failWrites) throw new Error('Storage full');
    this.items.set(key, value);
  }
  removeItem(key: string) { this.items.delete(key); }
}

let nextRun = 0;
function run(patch: Partial<RunResult> = {}): RunResult {
  return {
    runId: `run-${++nextRun}`,
    mapId: 'mavericks',
    mode: 'free-surf',
    score: 0,
    durationS: 20,
    reason: 'player-ended',
    longestBarrelS: 0,
    largestLandedSpinDeg: 0,
    bestCombo: 0,
    cleanLandings: 0,
    wipeouts: 0,
    ...patch,
  };
}

test('all 18 challenges use result metrics and Score Run gates', () => {
  const store = createProgressStore({ storage: new MemoryStorage() });
  assert.equal(store.challenges.length, 18);
  const first = store.recordResult(run({ cleanLandings: 3, longestBarrelS: 4, score: 5000 }));
  assert.deepEqual(first.newMedalIds, ['mavericks-clean-3', 'mavericks-barrel-4']);
  assert.equal(first.snapshot.earnedMedalIds.length, 2);
  const second = store.recordResult(run({ mode: 'score-run', score: 2000, reason: 'timer' }));
  assert.deepEqual(second.newMedalIds, ['mavericks-score-2000']);
  assert.deepEqual(second.newBoardColors, ['#48c9b0']);
});

test('records are independent by map and mode, and duplicate results do nothing', () => {
  const storage = new MemoryStorage();
  const store = createProgressStore({ storage });
  const free = run({ score: 9000 });
  store.recordResult(free);
  store.recordResult(run({ mode: 'score-run', score: 2500, reason: 'timer' }));
  store.recordResult(run({ score: 100 }));
  const duplicate = store.recordResult(free);
  assert.equal(duplicate.duplicate, true);
  assert.deepEqual(duplicate.newMedalIds, []);
  assert.equal(store.getSnapshot().bestRuns.mavericks?.['free-surf']?.score, 9000);
  assert.equal(store.getSnapshot().bestRuns.mavericks?.['score-run']?.score, 2500);
  assert.equal(createProgressStore({ storage }).getSnapshot().bestRuns.mavericks?.['score-run']?.score, 2500);
});

test('corrupt saves recover; unknown fields are ignored', () => {
  const storage = new MemoryStorage();
  storage.items.set(SAVE_KEY, '{bad json');
  assert.deepEqual(createProgressStore({ storage }).getSnapshot().earnedMedalIds, []);
  const store = createProgressStore({ storage });
  store.recordResult(run({ cleanLandings: 3 }));
  const saved = JSON.parse(storage.items.get(SAVE_KEY)!);
  saved.futureField = { okay: true };
  storage.items.set(SAVE_KEY, JSON.stringify(saved));
  assert.equal(createProgressStore({ storage }).getSnapshot().earnedMedalIds.length, 1);
});

test('storage failure preserves playable in-memory progress and reports the warning', () => {
  const storage = new MemoryStorage();
  storage.failWrites = true;
  const store = createProgressStore({ storage });
  const result = store.recordResult(run({ cleanLandings: 3 }));
  assert.equal(result.snapshot.storageAvailable, false);
  assert.deepEqual(result.newMedalIds, ['mavericks-clean-3']);
  assert.equal(store.getSnapshot().earnedMedalIds.length, 1);
});

test('settings validate locked colors, persist, and reset only the game key', () => {
  const storage = new MemoryStorage();
  storage.items.set('another-app', 'keep');
  const store = createProgressStore({ storage });
  assert.throws(() => store.updateSettings({ masterVolume: 2 }));
  assert.throws(() => store.updateSettings({ boardColor: '#a17cf2' }));
  store.updateSettings({ reducedMotion: true, masterVolume: 0.25 });
  assert.equal(createProgressStore({ storage }).getSnapshot().settings.reducedMotion, true);
  store.reset();
  assert.equal(storage.items.get('another-app'), 'keep');
  assert.equal(storage.items.has(SAVE_KEY), false);
  assert.equal(store.getSnapshot().settings.reducedMotion, false);
});

test('all challenge thresholds are evaluable and unlock every cosmetic color', () => {
  const store = createProgressStore({ storage: new MemoryStorage() });
  for (const mapId of ['mavericks', 'pipeline', 'jbay', 'uluwatu', 'teahupoo', 'nazare'] as const) {
    store.recordResult(run({ mapId, mode: 'score-run', reason: 'timer', score: 10000,
      bestCombo: 10000, longestBarrelS: 10, largestLandedSpinDeg: 1080,
      cleanLandings: 10 }));
  }
  assert.equal(store.getSnapshot().earnedMedalIds.length, 18);
  assert.equal(store.getSnapshot().unlockedBoardColors.length, 4);
});
