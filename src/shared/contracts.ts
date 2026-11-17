import type { Scene } from 'three';

export type MapId = 'mavericks' | 'pipeline' | 'jbay' | 'uluwatu' | 'teahupoo' | 'nazare';
export type Mode = 'free-surf' | 'score-run';
export type Quality = 'low' | 'medium' | 'high';
export type RiderState = 'surfing' | 'barrel' | 'airborne' | 'wipeout';

export interface WaveSection {
  start01: number;
  end01: number;
  radiusM: number;
  closeAfterEntryS: number | null;
}

export interface LaunchSection {
  start01: number;
  end01: number;
  liftMultiplier: number;
}

export interface MapDefinition {
  id: MapId;
  name: string;
  region: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  wave: {
    breakDirection: 'left' | 'right';
    heightM: number;
    faceWidthM: number;
    rideLengthM: number;
    peelSpeedMps: number;
    barrelSections: WaveSection[];
    launchSections: LaunchSection[];
  };
  spawn: { along01: number; face01: number };
  visual: { waterColor: string; foamColor: string; skyColor: string };
}

export interface GameSettings {
  quality: Quality;
  reducedMotion: boolean;
  masterVolume: number;
  muted: boolean;
  boardColor: string;
}

export interface RunMetrics {
  longestBarrelS: number;
  largestLandedSpinDeg: number;
  bestCombo: number;
  cleanLandings: number;
  wipeouts: number;
}

export interface RunResult extends RunMetrics {
  runId: string;
  mapId: MapId;
  mode: Mode;
  score: number;
  durationS: number;
  reason: 'timer' | 'player-ended';
}

export interface HudSnapshot extends RunMetrics {
  runId: string;
  state: RiderState;
  score: number;
  pendingCombo: number;
  multiplier: number;
  speedMps: number;
  barrelS: number;
  remainingS: number | null;
  trickLabel: string;
}

export type GameEvent =
  | { type: 'run-started'; runId: string; mapId: MapId; mode: Mode }
  | { type: 'hud'; data: HudSnapshot }
  | { type: 'score-banked'; runId: string; points: number; total: number }
  | { type: 'wipeout'; runId: string; reason: string }
  | { type: 'run-ended'; result: RunResult };

export interface EnvironmentHandle {
  update(simulationTimeS: number, dtS: number): void;
  setSettings(settings: GameSettings): void;
  dispose(): void;
}

export type EnvironmentFactory =
  (scene: Scene, map: MapDefinition, settings: GameSettings) => EnvironmentHandle;

export interface SurfSession {
  start(): void;
  pause(): void;
  resume(): void;
  restart(): void;
  finish(): void;
  setSettings(settings: GameSettings): void;
  dispose(): void;
}

export type Vec3 = { x: number; y: number; z: number };
export type Quat = { x: number; y: number; z: number; w: number };
export type TrickFamily = 'straight-air' | 'spin' | 'flip' | 'cork';
export type LandingQuality = 'clean' | 'sketchy' | 'wipeout';

export interface TrickInput {
  spinAxis: -1 | 0 | 1;
  flipAxis: -1 | 0 | 1;
}

export interface TrickFrame {
  orientation: Quat;
  label: string;
}

export interface LandingReport {
  airId: string;
  quality: LandingQuality;
  family: TrickFamily;
  label: string;
  completedSpinDeg: number;
  completedFlips: number;
  speedMultiplier: number;
}

export interface TrickController {
  beginAir(start: { airId: string; orientation: Quat }): void;
  step(input: TrickInput, dtS: number): TrickFrame;
  land(contact: {
    surfaceNormal: Vec3;
    travelDirection: Vec3;
    impactSpeedMps: number;
  }): LandingReport;
  reset(): void;
}

export interface ChallengeDefinition {
  id: string;
  mapId: MapId;
  label: string;
  metric: keyof RunMetrics | 'score';
  target: number;
  mode?: Mode;
}

export interface ProgressSnapshot {
  settings: GameSettings;
  bestRuns: Partial<Record<MapId, Partial<Record<Mode, RunResult>>>>;
  earnedMedalIds: string[];
  unlockedBoardColors: string[];
  storageAvailable: boolean;
}

export interface ProgressStore {
  readonly challenges: readonly ChallengeDefinition[];
  getSnapshot(): ProgressSnapshot;
  recordResult(result: RunResult): {
    snapshot: ProgressSnapshot;
    newMedalIds: string[];
    newBoardColors: string[];
    duplicate: boolean;
  };
  updateSettings(patch: Partial<GameSettings>): ProgressSnapshot;
  reset(): ProgressSnapshot;
}
