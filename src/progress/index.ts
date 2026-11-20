import { finishedTutorial } from '../maps/campaign';
import type {
  GameSettings,
  MapId,
  Mode,
  ProgressSnapshot,
  ProgressStore,
  RunResult,
} from '../shared/contracts';
import { BOARD_COLOR_UNLOCKS, CHALLENGES } from './challenges';

export const SAVE_KEY = 'barrelroll.save.v1';
const HISTORY_LIMIT = 128;
const MAP_IDS: readonly MapId[] = ['mavericks', 'pipeline', 'jbay', 'uluwatu', 'teahupoo', 'nazare'];
const MODES: readonly Mode[] = ['free-surf', 'score-run'];

export const DEFAULT_SETTINGS: Readonly<GameSettings> = Object.freeze({
  quality: 'medium',
  reducedMotion: false,
  masterVolume: 0.7,
  muted: false,
  boardColor: BOARD_COLOR_UNLOCKS[0].color,
});

export interface StorageAdapter {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

type BestRuns = Partial<Record<MapId, Partial<Record<Mode, RunResult>>>>;
interface SaveData {
  version: 1;
  levelsCleared: number;
  settings: GameSettings;
  bestRuns: BestRuns;
  earnedMedalIds: string[];
  recentRunIds: string[];
}

const defaults = (): SaveData => ({
  version: 1,
  levelsCleared: 0,
  settings: { ...DEFAULT_SETTINGS },
  bestRuns: {},
  earnedMedalIds: [],
  recentRunIds: [],
});

const isObject = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === 'object' && !Array.isArray(value);
const nonnegative = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value) && value >= 0;
const nonnegativeInteger = (value: unknown): value is number =>
  nonnegative(value) && Number.isInteger(value);
const isRunId = (value: unknown): value is string =>
  typeof value === 'string' && value.length > 0 && value.length <= 128;
const isMapId = (value: unknown): value is MapId => MAP_IDS.includes(value as MapId);
const isMode = (value: unknown): value is Mode => MODES.includes(value as Mode);

function parseSettings(value: unknown): GameSettings | null {
  if (!isObject(value) || !['low', 'medium', 'high'].includes(value.quality as string) ||
      typeof value.reducedMotion !== 'boolean' || !nonnegative(value.masterVolume) ||
      value.masterVolume > 1 || typeof value.muted !== 'boolean' ||
      typeof value.boardColor !== 'string') return null;
  return {
    quality: value.quality as GameSettings['quality'],
    reducedMotion: value.reducedMotion,
    masterVolume: value.masterVolume,
    muted: value.muted,
    boardColor: value.boardColor,
  };
}

function parseRun(value: unknown): RunResult | null {
  if (!isObject(value) || !isRunId(value.runId) || !isMapId(value.mapId) ||
      !isMode(value.mode) || !nonnegativeInteger(value.score) ||
      !nonnegative(value.durationS) ||
      !['timer', 'player-ended', 'ride-out', 'missed-exit', 'wipeout'].includes(value.reason as string) ||
      !nonnegative(value.longestBarrelS) ||
      !nonnegativeInteger(value.largestLandedSpinDeg) ||
      !nonnegativeInteger(value.bestCombo) ||
      !nonnegativeInteger(value.cleanLandings) ||
      !nonnegativeInteger(value.wipeouts)) return null;
  return {
    runId: value.runId,
    mapId: value.mapId,
    mode: value.mode,
    score: value.score,
    ...(nonnegative(value.cleanExitS) ? { cleanExitS: value.cleanExitS } : {}),
    durationS: value.durationS,
    reason: value.reason as RunResult['reason'],
    longestBarrelS: value.longestBarrelS,
    largestLandedSpinDeg: value.largestLandedSpinDeg,
    bestCombo: value.bestCombo,
    cleanLandings: value.cleanLandings,
    wipeouts: value.wipeouts,
  };
}

function parseSave(raw: string): SaveData | null {
  try {
    const value: unknown = JSON.parse(raw);
    if (!isObject(value) || value.version !== 1 || !isObject(value.bestRuns) ||
        !Array.isArray(value.earnedMedalIds) || !Array.isArray(value.recentRunIds)) return null;
    const settings = parseSettings(value.settings);
    if (!settings || !value.earnedMedalIds.every((id) => typeof id === 'string') ||
        !value.recentRunIds.every(isRunId)) return null;
    const bestRuns: BestRuns = {};
    for (const [mapId, byMode] of Object.entries(value.bestRuns)) {
      if (!isMapId(mapId) || !isObject(byMode)) continue;
      for (const [mode, candidate] of Object.entries(byMode)) {
        if (!isMode(mode)) continue;
        const run = parseRun(candidate);
        if (!run || run.mapId !== mapId || run.mode !== mode) return null;
        (bestRuns[mapId] ??= {})[mode] = run;
      }
    }
    const knownIds = new Set(CHALLENGES.map((challenge) => challenge.id));
    const earnedMedalIds = [...new Set(value.earnedMedalIds as string[])]
      .filter((id) => knownIds.has(id));
    const unlocked = unlockedColors(earnedMedalIds.length);
    if (!unlocked.includes(settings.boardColor)) settings.boardColor = DEFAULT_SETTINGS.boardColor;
    return {
      version: 1,
      levelsCleared: Math.max(nonnegativeInteger(value.levelsCleared) ? Math.min(5, value.levelsCleared) : 0,
        bestRuns.mavericks?.['score-run'] && finishedTutorial(bestRuns.mavericks['score-run']) ? 1 : 0),
      settings,
      bestRuns,
      earnedMedalIds,
      recentRunIds: [...new Set(value.recentRunIds as string[])].slice(-HISTORY_LIMIT),
    };
  } catch {
    return null;
  }
}

function unlockedColors(medalCount: number): string[] {
  return BOARD_COLOR_UNLOCKS.filter(({ medals }) => medalCount >= medals)
    .map(({ color }) => color);
}

function copySnapshot(data: SaveData, storageAvailable: boolean): ProgressSnapshot {
  const bestRuns: BestRuns = {};
  for (const mapId of MAP_IDS) {
    const byMode = data.bestRuns[mapId];
    if (!byMode) continue;
    bestRuns[mapId] = {};
    for (const mode of MODES) {
      const run = byMode[mode];
      if (run) bestRuns[mapId]![mode] = { ...run };
    }
  }
  return {
    settings: { ...data.settings },
    bestRuns,
    earnedMedalIds: [...data.earnedMedalIds],
    unlockedBoardColors: unlockedColors(data.earnedMedalIds.length),
    storageAvailable,
    levelsCleared: data.levelsCleared,
  };
}

function defaultStorage(): StorageAdapter | null {
  try {
    return typeof localStorage === 'undefined' ? null : localStorage;
  } catch {
    return null;
  }
}

// The optional adapter keeps the service usable in tests and non-browser contexts.
export function createProgressStore(options: { storage?: StorageAdapter | null } = {}): ProgressStore {
  const storage = options.storage === undefined ? defaultStorage() : options.storage;
  let data = defaults();
  let storageAvailable = storage !== null;
  if (storage) {
    try {
      const raw = storage.getItem(SAVE_KEY);
      if (raw !== null) data = parseSave(raw) ?? defaults();
    } catch {
      storageAvailable = false;
    }
  }

  function persist(): void {
    if (!storage) return;
    try {
      storage.setItem(SAVE_KEY, JSON.stringify(data));
      storageAvailable = true;
    } catch {
      storageAvailable = false;
    }
  }

  function snapshot(): ProgressSnapshot {
    return copySnapshot(data, storageAvailable);
  }

  return {
    challenges: CHALLENGES,
    getSnapshot: snapshot,
    recordResult(input) {
      const result = parseRun(input);
      if (!result) throw new Error('Invalid completed run result');
      if (data.recentRunIds.includes(result.runId)) {
        return { snapshot: snapshot(), newMedalIds: [], newBoardColors: [], duplicate: true };
      }
      const previousColors = unlockedColors(data.earnedMedalIds.length);
      const earned = new Set(data.earnedMedalIds);
      const newMedalIds: string[] = [];
      for (const challenge of CHALLENGES) {
        if (challenge.mapId !== result.mapId || (challenge.mode && challenge.mode !== result.mode) ||
            earned.has(challenge.id) || result[challenge.metric] < challenge.target) continue;
        earned.add(challenge.id);
        newMedalIds.push(challenge.id);
      }
      data.earnedMedalIds = [...earned];
      const best = data.bestRuns[result.mapId]?.[result.mode];
      if (!best || result.score > best.score) {
        (data.bestRuns[result.mapId] ??= {})[result.mode] = result;
      }
      if (finishedTutorial(result)) data.levelsCleared = Math.max(1, data.levelsCleared);
      data.recentRunIds.push(result.runId);
      data.recentRunIds = data.recentRunIds.slice(-HISTORY_LIMIT);
      persist();
      const newBoardColors = unlockedColors(data.earnedMedalIds.length)
        .filter((color) => !previousColors.includes(color));
      return { snapshot: snapshot(), newMedalIds, newBoardColors, duplicate: false };
    },
    updateSettings(patch) {
      const settings = parseSettings({ ...data.settings, ...patch });
      if (!settings) throw new Error('Invalid game settings');
      if (!unlockedColors(data.earnedMedalIds.length).includes(settings.boardColor)) {
        throw new Error('Board color is locked');
      }
      data.settings = settings;
      persist();
      return snapshot();
    },
    reset() {
      data = defaults();
      if (storage) {
        try {
          storage.removeItem(SAVE_KEY);
          storageAvailable = true;
        } catch {
          storageAvailable = false;
        }
      }
      return snapshot();
    },
  };
}
