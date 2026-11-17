# BarrelRoll — Group Project PRD

**Team:** Teddy Kindler and Anika  
**Repository:** https://github.com/AniPupper/BarrelRoll  
**Date:** November 17, 2026  
**Status:** Build specification; the game has not been implemented by this document.  
**Canonical PRD:** This file replaces the two separate owner PRDs.

BarrelRoll is a single-player, 3D browser surfing game inspired by [Cork 7](https://cork7.com/). Players carve across waves, ride inside curling barrels, launch from the lip, combine exaggerated spins and flips, and land back on the water. The camera follows behind the surfer. Famous surfing locations must have different wave behavior as well as different scenery.

**Confirmed requirements:** desktop/laptop browser on Mac and Windows; WASD movement; Space to jump; a camera behind the surfer; exaggerated and impossible tricks; playable wave barrels; multiple famous destinations; one game built together in the same GitHub repository.

**First-release defaults:** Free Surf and a 120-second Score Run; all six maps available immediately; local records, medals, and cosmetic board colors; stylized 3D art; HTML/CSS, TypeScript, Three.js, and Vite. Use one application, one renderer, one physics clock, and one lockfile. Multiplayer, accounts, online leaderboards, controller/mobile controls, video export, and full fluid simulation are later work.

A new player should be surfing, jumping, and attempting a trick within a minute. Start standing on a board, without paddling or waiting for a set. The loop is build speed → choose barrel or aerial line → control the maneuver → exit or land → bank points → try a harder combination. Recover from a wipeout within two seconds.

| Work | Teddy | Anika |
| --- | --- | --- |
| Surfing | Movement, jumping, water contact, air trajectory, barrels, recovery | Air rotations, flips, spins, corks, trick recognition, landing assessment |
| Presentation | Surfer/board model and animation, wave, camera, gameplay spray | Six locations, scenery, menus, HUD, audio |
| Game systems | Runtime scoring, timer, challenges, medals, saved progress, board-color unlocks | Present scores, challenges, medals, results, and settings through the UI |
| Integration | Engine, shared contracts, progression API | App wiring, project setup, dependencies, deployment |

**Updated split:** Anika now owns the tricks and landing mechanics that were previously assigned to Teddy. Teddy now owns challenges, progression, and saved records that were previously assigned to Anika. The two sections below are the ownership reference for implementation.

## Teddy — Surfing engine, barrels, scoring, and progression

You own the movement and wave foundation plus the progression system. Anika supplies the trick controller, landing evaluation, maps, environments, and UI. Integrate her modules through the interfaces in this section; do not duplicate them inside your controller.

### T1. Controls and movement

| Input | On the wave | In the air |
| --- | --- | --- |
| W | Pump/tuck to gain speed, within the speed cap | Frontflip |
| S | Brake/stall to stay inside the pocket | Backflip |
| A / D | Steer left/right relative to the travel heading | Spin left/right |
| Space | Tap for a small jump; hold up to 0.6 s and release for a stronger jump | No extra jump |
| W or S + A or D | Normal combined movement | Combined off-axis flip/spin, such as a cork |
| R | Restart the current run | Restart the current run |
| Esc | Pause | Pause |

- Basic surfing and every required trick must be possible with WASD and Space. Extra trick keys are not required.
- W/S held for speed control must not unexpectedly start a flip at takeoff: require a fresh W/S press after leaving water. Show this in the tutorial. A/D may carry through takeoff for a preloaded spin.
- Release directional keys to damp rotation. Use gentle landing assistance; do not instantly snap the rider upright.
- Left/right input remains intuitive on left- and right-breaking maps. The camera’s orientation must not reverse the controls.
- Prevent Space from scrolling while the game has focus. Never capture movement keys while a menu or text input is active.
- Clear held inputs on blur, pause, restart, and disposal; losing focus automatically pauses the run.

#### Surfing and wave contact

- Use a fixed physics step of 1/60 second with rendering interpolation and a capped catch-up budget. Frame rate must not change jump height or scoring.
- Use a controlled arcade model: speed along the wave plus steering over the face, with gravity and limited air control after takeoff.
- The board follows the sampled water position and normal. Smooth board tilt without separating it visibly from the water.
- Carving should change the rider’s line and speed. W must not provide unlimited acceleration, and S must have a visible braking effect.
- A low-face turn can build momentum into a lip launch. Launch sections add lift only when the rider actually reaches them with enough speed.
- Flat-water jumps remain small; big tricks reward use of the wave. No repeated midair jumps or unlimited flight.
- Detect contact across the previous/current motion segment to prevent tunneling through thin or fast-moving geometry.


**Input ownership:** Teddy captures gameplay keys and translates them into state. While airborne, pass normalized flip/spin input to Anika’s `TrickController`; use its orientation rather than implementing another rotation system. Teddy implements takeoff strength, gravity, trajectory, contact detection, and recovery. Anika evaluates whether a detected landing is clean, sketchy, or a wipeout. The app alone owns Escape/menu navigation.

### T2. Playable barrels

The rideable wave must curl overhead into a visible hollow tube. The surfer travels inside that volume with the opening ahead, not through an opaque wall or beside a decorative cylinder.

- Use one parameterized wave model for the rendered mesh, board contact, lip location, barrel volume, and closeout state. A simple height field alone cannot represent an overhanging lip.
- Expose internal queries for surface position/normal and barrel centerline/radius at a given position and simulation time. The surface parameterization must support the folded lip without confusing it with the lower rideable face.
- Barrel status requires the surfer to be inside the hollow region and behind the curling lip, with at least 0.3 s of continuous valid occupancy. Riding outside or above it earns no barrel points.
- Braking should keep the surfer deeper in the pocket; accelerating should help them reach the exit.
- Show impending closure with the visibly shrinking opening and increasing foam before it becomes a collision hazard.
- A clean exit completes the barrel maneuver and adds it to the pending combo; points bank under the scoring rules below. A closeout or collision loses only the unbanked combo.
- Match rendered and physical openings. No invisible walls where the player sees open water.
- First complete a generous, nonclosing development barrel. Add narrow and closing barrels after entry, riding, and exit work reliably.

### T3. Camera, surfer, and feedback

- Smooth chase camera behind the direction of travel with a stable horizon. Track movement heading, not the surfer’s spinning body.
- Pull back slightly during high airs and move closer inside barrels while keeping the exit readable. Avoid camera clipping through the lip.
- Use moderate speed-based field of view, optional subtle shake, and spray that does not obscure the player.
- Reduced Motion disables shake and large FOV shifts. Keep controls and trick timing unchanged.
- Engine events drive Anika’s HUD and audio. Do not place DOM menus or permanent HUD elements inside the engine.

- Own the surfer/board model and crouch, extension, and landing animation. Apply the orientation and trick label produced by Anika’s module. Body and board stay connected; neither the camera nor the heading reference spins with the model.
- Apply Anika’s landing outcome to speed, pose recovery, splash, and the engine state; the engine never independently reclassifies a normal water landing. Collisions with closing wave lips may cause an immediate engine wipeout without invoking a successful landing.

### T4. Runtime scoring and run rules

You own the authoritative runtime score, including the total. Consume Anika’s completed trick/landing report once per air, calculate its points, and emit game events. Anika displays these values and passes final results to your progression API; she does not create another scoring or storage implementation.

Starting balance, subject to playtesting:

| Action | Initial score rule |
| --- | --- |
| Straight air | 100 for a qualifying launch and successful landing |
| Spin | 200 per completed 180° |
| Flip | 600 per completed full flip |
| Combined flip and spin | 1.25× the aerial base |
| Barrel | 150 per valid second, plus 300 for a clean exit |
| Clean / sketchy landing | 100% / 50% of that maneuver’s base |
| Repeating the same trick family | 100%, 70%, then 40% within the current combo |

- Chain qualifying actions within three seconds: multiplier starts at 1×, adds 0.25× per additional action, caps at 3×. Continuous valid barrel riding keeps the window alive.
- Accumulate adjusted action values before applying the combo multiplier. Bank after three safe seconds without a qualifying action. Show banked score and pending combo separately.
- Wipeouts remove pending points but preserve banked points. R deliberately starts a new run and clears that run’s total.
- A timer ending midair does not bank an unfinished trick. Bank previously completed safe maneuvers, end once, and freeze input.
- Score Run lasts 120 seconds of active simulation time. Free Surf is untimed and offers an End Run button through Anika’s UI.
- At the end of a wave, transition quickly to the next wave in the same run; safely completed points may bank. Do not reset the run timer or accumulated statistics.
- Store longest continuous barrel duration, largest landed spin, best combo, clean landings, wipeouts, and elapsed active time. Count barrel/air time using simulation seconds, not render frames.

- Use Anika’s reported trick family, completed spin, completed flips, and landing quality. Failed landings award no aerial points and must not update largest landed spin or clean-landing records.
- Deduplicate aerial reports by `airId`. Barrel scoring comes from your wave occupancy checks. Neither source may double-credit a maneuver.

### T5. Challenges, medals, and saved progression

Each map has three independently earned medals. Evaluate them from the engine’s finished `RunResult`; keep challenge evaluation in your progression module, separate from the live engine. Anika’s UI displays your returned goals and unlocks. Goals may be earned across separate finished runs in either mode unless a goal explicitly says Score Run.

| Map | Medal 1 | Medal 2 | Medal 3 |
| --- | --- | --- | --- |
| Bells | 3 clean landings in one run | Land a 360 | Score 2,000 in a Score Run |
| Pipeline | Continuous barrel of 3 s | Continuous barrel of 6 s | Bank a 2,500-point combo |
| J-Bay | 6 clean landings in one run | Bank a 3,000-point combo | Score 6,000 in a Score Run |
| Uluwatu | Continuous barrel of 3 s | Land a 720 | Score 5,000 in a Score Run |
| Teahupoo | Continuous barrel of 2 s | Continuous barrel of 3.5 s | Score 4,000 in a Score Run |
| Nazare | Land a 720 | Land a 1080 | Bank a 5,000-point combo |

These are provisional thresholds. Playtest every challenge before release and lower targets that are impossible or tedious. Do not make a medal depend on an event or metric absent from the shared contract. A special “double backflip + 1080” achievement would need an explicit metric extension first.

- Unlock three additional board colors at 3, 6, and 12 total medals. Colors must not change speed, handling, or jump strength.
- Keep every map playable from the beginning. Progression rewards mastery without blocking a teammate’s demo.
- Keep best scores separate by map and mode; an unlimited Free Surf score must not compete with a timed Score Run record.
- Use the engine’s `score` and `bestCombo` fields directly. `score-banked` is for feedback; do not add it again to a completed result.

#### Persistence and reliability

Use a versioned local save such as `barrelroll.save.v1` containing settings, selected board color, records keyed by map and mode, earned medal IDs, and a bounded recent-result history used to deduplicate run IDs.

- Persist only completed run results. An abandoned run does not grant new records or medals.
- Validate parsed saves and recover to defaults if corrupt. Unknown fields should not break startup.
- Handle blocked/full storage gracefully: keep the game playable and show a short “Progress could not be saved on this device” message.
- Explain in Settings that progress is local to this browser/device. No login or cloud synchronization in this release.
- Reset Progress requires confirmation and must not accidentally remove unrelated browser data.
- Refreshing after a completed run preserves records, medals, settings, and unlocked colors.
- Duplicate `run-ended` delivery must not award medals twice or duplicate history. Keep bounded history rather than unbounded growth.

- Own challenge definitions in `src/progress/challenges.ts`, keyed by shared `MapId`. Expose their labels, targets, and earned IDs to Anika’s UI; do not make her duplicate these rules in map metadata.
- Own settings persistence as part of the same save service. Anika builds the settings controls and calls your API, then forwards effective settings to the engine and audio.
- Keep progression independent of DOM and engine internals so it can be tested using plain results and an injected storage adapter.

### T6. Shared interfaces and file ownership

Teddy owns `src/shared/contracts.ts`; both teammates review changes. Merge contract changes before their consumers. The following interfaces are proposed implementation requirements, not existing source files.

| Paths | Owner |
| --- | --- |
| `src/engine/**`, `tests/engine/**`, `public/assets/surfer/**` | Teddy: movement, wave, contact, renderer, camera, score, run lifecycle |
| `src/progress/**`, `tests/progress/**` | Teddy: challenges, medals, unlocks, records, settings persistence |
| `src/shared/**` | Teddy maintains; both review |
| `src/tricks/**`, `tests/tricks/**` | Anika: aerial orientation, rotation accounting, labels, landing evaluation |
| `src/app/**`, `src/ui/**`, `src/maps/**`, `src/worlds/**`, `src/audio/**`, `tests/app/**` | Anika |
| `public/assets/worlds/**`, `public/assets/audio/**` | Anika |
| `index.html`, `src/main.ts`, `package.json`, lockfile, TypeScript/Vite configuration, deployment workflow, `README.md` | Anika; coordinate dependency changes |
| `docs/PLAYTEST_Teddy.md` / `docs/PLAYTEST_Anika.md` | Each person owns their own playtest notes |
| `docs/PRD.md` | Shared specification; coordinate edits |

Anika’s app imports the engine, tricks, map registry, and progress API and wires them together. The engine receives the trick/environment factories; it never imports the app, maps registry, UI, or progress store. Tricks and progress depend only on shared types and their own helpers. Do not create a giant shared `main.ts` or edit someone else’s module without coordinating.

#### Map data and session lifecycle

```ts
import type { Scene } from 'three';

export type MapId = 'bells' | 'pipeline' | 'jbay' | 'uluwatu' | 'teahupoo' | 'nazare';
export type Mode = 'free-surf' | 'score-run';
export type Quality = 'low' | 'medium' | 'high';
export type RiderState = 'surfing' | 'barrel' | 'airborne' | 'wipeout';

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
    barrelSections: Array<{
      start01: number;
      end01: number;
      radiusM: number;
      closeAfterEntryS: number | null;
    }>;
    launchSections: Array<{
      start01: number;
      end01: number;
      liftMultiplier: number;
    }>;
  };
  spawn: { along01: number; face01: number };
  visual: { waterColor: string; foamColor: string; skyColor: string };
}

export interface GameSettings {
  quality: Quality;
  reducedMotion: boolean;
  masterVolume: number; // 0..1
  muted: boolean;
  boardColor: string;
}

export interface RunMetrics {
  longestBarrelS: number;
  largestLandedSpinDeg: number;
  bestCombo: number; // highest banked combo points
  cleanLandings: number;
  wipeouts: number;
}

export interface RunResult extends RunMetrics {
  runId: string;
  mapId: MapId;
  mode: Mode;
  score: number; // banked points only
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
  barrelS: number; // current continuous barrel, zero outside
  remainingS: number | null; // null in Free Surf
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

// Export from src/engine/index.ts:
export declare function createSurfSession(options: {
  mount: HTMLElement;
  map: MapDefinition;
  mode: Mode;
  seed: number;
  settings: GameSettings;
  createEnvironment: EnvironmentFactory;
  createTrickController: () => TrickController;
  onEvent: (event: GameEvent) => void;
}): SurfSession;
```

#### Session and wave semantics

- Units: meters, seconds, degrees for reported rotations; world Y is up. At the start of a wave, the trough origin is `(0, 0, 0)`. Increasing along-wave distance follows +Z for right breaks and -Z for left breaks; the face rises toward +X. Scenery must use this frame and keep the ride corridor clear. `along01` follows the wave’s peeling path from 0 to 1 regardless of break direction; `face01` runs from trough 0 to lip 1. The engine handles mirroring internally.
- Section intervals must satisfy `0 <= start01 < end01 <= 1`. Positive dimensions/speeds, positive radius/lift, and a positive closeout delay or `null` are mandatory. Spawn must be outside a closed barrel and inside the rideable surface.
- A closing section’s countdown begins on first valid entry during that wave, continues even after exit, and resets only for a new wave/restart. All closeout visuals use that same countdown. This is a deliberate arcade rule.
- Anika provides and validates map data. Teddy validates again at the engine boundary and rejects bad input with a readable error.
- `createSurfSession` creates one canvas/renderer and a ready, nonrunning session. `start` begins once. The engine alone owns the animation loop, clock, resize handling, gameplay input, wave mesh, and camera.
- The environment factory adds scenery/lights to the supplied scene; it creates no renderer, animation loop, input handlers, rideable water, or gameplay collisions. Environment assets are preloaded by the app before session creation. The engine calls its update and disposal methods and forwards settings changes to `setSettings`; visual quality changes must work without restarting the run.
- `pause` freezes physics, timer, combo expiry, and environment animation. `resume` does not restore stale held keys. `restart` resets all runtime state, creates a new run ID, and retains the selected map/mode/seed/settings.
- `finish` resolves only already-completed safe actions and emits one final result. `dispose` frees listeners, RAF, geometries/materials/textures owned by the session, and environment resources; it does not implicitly finish/save a run. Repeated pause/dispose/finish calls are safe.
- Switching maps means disposing the old session and creating a new one. Exiting a live run requires an explicit End Run or Discard choice.
- Events begin with `run-started`. Send HUD updates at no more than 10 Hz. Results emit once per run; Teddy’s progression store also deduplicates saved results by `runId`. Anika’s app calls that store on `run-ended`.
- Teddy’s engine owns runtime scores and metrics; Teddy’s progress module owns final-result persistence and challenge evaluation. Anika owns trick/landing reports, UI, and audio. `score-banked` is presentation feedback, not a second source of saved totals.
- The engine handles WASD, Space, and R only while the session is running and focused. The app alone handles Escape/menu navigation and calls `pause()`/`resume()`; it must never process movement keys.
- No global `window` game state or cross-owner DOM queries. Communicate through these typed inputs/events only.

#### Anika’s trick module interface

These types also belong in the shared contracts file. Anika exports `createTrickController` from `src/tricks/index.ts`; her app passes it into `createSurfSession`.

```ts
export type Vec3 = { x: number; y: number; z: number };
export type Quat = { x: number; y: number; z: number; w: number };
export type TrickFamily = 'straight-air' | 'spin' | 'flip' | 'cork';
export type LandingQuality = 'clean' | 'sketchy' | 'wipeout';

export interface TrickInput {
  spinAxis: -1 | 0 | 1; // A=-1, D=+1
  flipAxis: -1 | 0 | 1; // W=+1 frontflip, S=-1 backflip
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
  completedSpinDeg: number; // absolute net rotation, in 180-degree increments
  completedFlips: number; // full rotations only
  speedMultiplier: number; // initial tuning: clean=1, sketchy=0.65, wipeout=0
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
```

- Orientation is a normalized world-space quaternion; local board +Y is up and +Z points toward the nose. Contact vectors are normalized world-space vectors supplied by Teddy’s collision query.
- At takeoff, Teddy calls `beginAir` exactly once with a new `airId`, then calls `step` at the same fixed physics step as translation. Mask held W/S until a fresh press after takeoff; A/D may carry through.
- Anika integrates angular motion, counts actual rotations, damps released input, and returns orientation/label. She must not move the surfer’s world position, sample a separate wave, read the keyboard directly, or start an animation loop.
- On first rideable water contact, Teddy calls `land`. Anika compares her current orientation to the supplied surface and travel vectors, returns one report, and clears active-air state. Teddy applies the outcome, scoring, metrics, and animation.
- A second `land` call without a new `beginAir` must not generate a new report; reject it as a lifecycle error. The engine also deduplicates by `airId` before crediting points.
- Wipeout/reset/finish/dispose clear active trick state. Restart and the next takeoff cannot inherit angular velocity or counters. No `step` calls while paused.
- Net rotation must not reward oscillating back and forth as a new full spin. Only completed motion counts; holding keys while stalled cannot earn rotations.

#### Teddy’s progression interface

Anika calls this service from the app. Save schema and challenge rules remain Teddy’s responsibility.

```ts
export interface ChallengeDefinition {
  id: string;
  mapId: MapId;
  label: string;
  metric: keyof RunMetrics | 'score';
  target: number;
  mode?: Mode; // omitted means either mode
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

// Export from src/progress/index.ts:
export declare function createProgressStore(): ProgressStore;
```

- Read/validate the versioned save when creating the store. Return default in-memory state if storage is unavailable; `storageAvailable` tells the app to display the save warning.
- `recordResult` validates input, evaluates medals once, updates records separately by map/mode, and saves. Anika displays returned unlocks; she does not re-evaluate goals or write `localStorage` directly.
- `updateSettings` validates ranges and unlocked board colors, persists them, and returns effective settings for the app to forward to the engine/audio. Rendering a setting is Anika’s work; storing it is Teddy’s.
- `reset` removes only this game’s progress/settings after the app obtains confirmation. Store methods return snapshots that callers must treat as read-only.

### T7. Teddy’s milestones

| Milestone | Work | Done when |
| --- | --- | --- |
| T0 — Contracts | After Anika’s scaffold merges, add shared types, engine lifecycle stub, progress API stub, and engine fixtures | Typecheck/build pass and Anika can code against real exports |
| T1 — Wave foundation | Movement, jumping, contact, behind-surfer camera, simple surfer, restart | Player can carve for 30 s, jump, and recover; use a labeled development-only no-rotation trick stub until Anika’s module arrives |
| T2 — Barrel and trick integration | Curling geometry, occupancy, closeouts, connect Anika’s trick controller, scoring/run events | Player rides a visible barrel, lands a recognized trick, and sees accurate HUD values |
| T3 — Progression | All 18 medal definitions, records, settings save, color unlocks, storage recovery | Anika’s UI can show a real earned medal and saved record after refresh |
| T4 — Release tuning | Six-map compatibility, pause/cleanup, camera polish, frame independence | Shared release checks pass with the real trick module; no production stubs |

### T8. Teddy’s tests and acceptance criteria

Automate wave/map validation, barrel entry/exit/closeout, combo banking, duplicate aerial credit, timer/pause behavior, challenge thresholds, result deduplication, separate map/mode records, corrupt saves, and storage failures. Test the real trick report at the engine boundary; leave rotation/landing unit tests to Anika.

- [ ] WASD and Space produce responsive steering, speed control, and jumps.
- [ ] The camera follows travel direction and remains stable during tricks.
- [ ] Water rendering, board contact, and barrel volume agree.
- [ ] Riding beside a barrel never earns barrel time; closing openings give visible warning.
- [ ] Anika’s landing report controls the recovery outcome and is scored once.
- [ ] Pausing freezes the timer, combo window, environment, and trick simulation.
- [ ] 30/60/120 FPS caps give comparable motion, timer behavior, and scores.
- [ ] A completed run emits one result; abandoned runs grant no new medals.
- [ ] Saved records, medals, settings, and unlocked colors survive refresh.
- [ ] Corrupt or unavailable storage never prevents starting a game.
- [ ] Every medal is reachable with the merged maps and trick system.

Record device/browser, steps, expected/actual results, and unresolved issues in `docs/PLAYTEST_Teddy.md`. Coordinate gameplay feel with Anika rather than independently changing her rotations or landing thresholds.

## Anika — Tricks, landing mechanics, maps, and game interface

You own an actual part of the surfing gameplay: aerial tricks and landing assessment. You also build the locations, scenery, interface, and app integration. Teddy supplies movement/trajectory, the wave, scoring, and the progression API. Your UI presents challenges and unlocks from his service; it does not own their rules or storage.

### A1. Aerial tricks and landing mechanics

Required launch tricks: straight air, 180, 360, 720, 1080, frontflip, backflip, double flip, and combined flip/spin corks. An advanced player must be able to complete at least one intentionally unrealistic combination, such as a double backflip with a 1080, on a high-launch map.

- Count completed rotations from motion over time, not Euler angles at the final frame. Visual wrapping from 359° to 0° must not erase a rotation.
- Provide the orientation, trick label, and landing result that Teddy’s surfer model/animation consumes. Coordinate timing so the board and body stay connected; Teddy owns the visible rig and pose transitions.
- Your module controls angular motion only. Teddy owns translational air steering and gravity; your rotations cannot hover or teleport the player back to a wave.
- Evaluate board-up alignment against the landing surface normal and heading against local travel direction. Initial tuning: clean within 25° tilt/30° heading, sketchy within 55° tilt/70° heading, otherwise wipeout. Reverse-aligned landings may use the same tolerances and recover smoothly.
- A sketchy landing reduces speed and scores less. A wipeout should have a short readable splash, then recovery.
- Exact angles, air duration, and launch force are tuning values, not promises of real-world physics.

- Implement `src/tricks/index.ts` against the `TrickController` interface in Teddy’s shared-contract section. Use plain input frames and contact vectors so you can develop and test without finished maps.
- A/D spins; a fresh W/S press after takeoff flips; combining axes creates off-axis corks. Release keys to damp angular velocity and gently assist alignment. Assistance must not snap the surfer upright or complete an unearned rotation.
- Keep rotations controllable enough to land a 720 and 1080. A skilled player must be able to perform a double backflip with a 1080 on a suitable large launch, without extra jump buttons.
- Recognize completed motions and name them accurately. Front/back direction matters to labels; only completed spins/flips contribute to scoring fields. The combo family is straight-air, spin, flip, or cork.
- Evaluate clean/sketchy/wipeout at the contact supplied by Teddy. Initial speed multipliers are 1.0, 0.65, and 0 respectively. A reverse-aligned board may count as a valid landing using the same angular tolerances.
- Do not calculate points or save records inside this module. Return the facts of the maneuver; Teddy’s scoring service calculates the reward.

### A2. Six locations with different gameplay

The following are **proposed arcade interpretations** of famous places. Numeric values are initial game tuning, not measured local wave heights, forecasts, or exact recreations. Landmarks and coastline shapes may be simplified.

| Map ID / location | Visual identity | Distinct riding experience | Main skill | Difficulty |
| --- | --- | --- | --- | --- |
| `bells` — Bells Beach, Australia | Warm morning light, cliffs, broad blue-green water | Broad forgiving face, modest speed, easy launch zones; optional short training tube | Learn carving, jumps, and clean landings | Easy |
| `pipeline` — Banzai Pipeline, Hawaii, USA | Tropical shore, turquoise wall, strong white spray | Fast hollow tube with long barrel sections and a clear exit | Control depth with pumping and braking | Hard |
| `jbay` — Jeffreys Bay, South Africa | Open coastline, long clean lines, golden light | Long right-breaking ride with separated launch opportunities and few interruptions | Maintain speed and chain varied tricks | Medium |
| `uluwatu` — Uluwatu, Bali, Indonesia | Limestone cliffs, elevated coastal silhouettes, deep turquoise | Left-breaking ride alternating open faces, tubes, and takeoff sections | Adapt between barrel riding and aerials | Hard |
| `teahupoo` — Teahupoo, Tahiti, French Polynesia | Mountain-backed coast, dark blue-green water, heavy lip | Compact steep face, narrow tube, shortest closeout warning | Precise positioning and timely exits | Expert |
| `nazare` — Nazare, Portugal | Stormy Atlantic, headland/lighthouse silhouette, huge spray | Towering open faces and strongest launch zones; barrels are not its focus | Manage speed, air time, and impossible combos | Expert |

The entire first release includes all six. Build Bells, Pipeline, and J-Bay first as an integration checkpoint, then add the other three.

#### Initial wave configuration

| ID | Break | Height / face width | Ride length | Peel speed | Barrel intervals, radius, closure | Launch intervals and lift |
| --- | --- | --- | --- | --- | --- | --- |
| `bells` | Right | 3 m / 10 m | 420 m | 8 m/s | 0.60–0.72, 1.0 m, never | 0.20–0.30 and 0.80–0.90, 1.0× |
| `pipeline` | Left | 7 m / 12 m | 360 m | 14 m/s | 0.20–0.70, 1.8 m, after 9 s | 0.75–0.90, 1.2× |
| `jbay` | Right | 4 m / 12 m | 700 m | 11 m/s | 0.45–0.58, 1.2 m, never | 0.15–0.25, 0.60–0.70, 0.85–0.95, 1.3× |
| `uluwatu` | Left | 5 m / 10 m | 480 m | 12 m/s | 0.25–0.42 and 0.65–0.80, 1.3 m, after 7 s each | 0.45–0.60 and 0.84–0.94, 1.4× |
| `teahupoo` | Left | 6 m / 8 m | 300 m | 13 m/s | 0.20–0.65, 1.1 m, after 4.5 s | 0.75–0.90, 1.1× |
| `nazare` | Right | 18 m / 32 m | 650 m | 19 m/s | None | 0.20–0.38 and 0.65–0.85, 2.0× |

Intervals are normalized positions along a wave, not world coordinates. All maps start at `along01: 0.05, face01: 0.35`; verify each spawn with Teddy’s engine. Closure is timed from first entry into the section for that wave, as defined in the shared contract. Tune the values with Teddy when a tube is too small for the surfer or a goal cannot be completed.

**A map is meaningfully different only if its wave configuration changes at least two riding properties**: speed, face size/steepness, barrel space/length, closure timing, break direction, ride length, or launch lift. Color changes alone do not count.

### A3. Scenery and environment integration

- Store one typed definition per location under `src/maps/`, plus a registry with all six IDs. Keep selection-card text in app-side metadata keyed by the same IDs. Read challenge definitions and earned medals from Teddy’s progression API; do not duplicate them in map data.
- Use `src/worlds/` to create each destination’s scenery through the shared `EnvironmentFactory`. Use the supplied scene and coordinate frame.
- Teddy owns all rideable wave geometry, water contact, barrel shape, and gameplay spray. Pass him palette and mechanical parameters; do not deform his mesh independently.
- Background ocean must remain outside/below the active wave corridor. Avoid seams or a flat water plane cutting visibly through a barrel.
- Use a small set of reusable cliff, beach, rock, vegetation, and landmark assets with distinct composition and lighting per map.
- Keep decorative rocks, boats, vegetation, and buildings out of the riding route. Gameplay obstacle collisions are outside the first-release scope.
- Preload required environment assets before creating the session. Show loading progress and retry if a map fails to load; fall back to lightweight scenery if an optional decoration fails.
- Provide low-cost scenery at lower quality: fewer particles, simpler shadows/materials, reduced distant detail. Quality settings must not alter collision or scoring.
- Every environment must remove its scene objects and release its owned resources on disposal. Shared cached assets need explicit ownership/reference handling so one map does not dispose assets still in use.
- Use original, procedural, or appropriately licensed assets. List source/license/author in credits when needed.

### A4. Screens and navigation

| Screen | Required content and behavior |
| --- | --- |
| Title | BarrelRoll title, Play, How to Play, Settings, Credits |
| Map select | Six cards showing location, difficulty, signature wave behavior, preview, local best score, and medal state |
| Mode select | Free Surf description; 120-second Score Run description; selected location stays visible |
| Loading | Location name, loading state, one useful control tip, readable error/retry |
| Tutorial | WASD/Space diagram, on-water versus in-air actions, barrel explanation, safe landing advice; dismissible and reopenable |
| In-game HUD | Banked score, pending combo/multiplier, current trick, barrel timer when inside, run countdown in Score Run |
| Pause | Resume, Restart Run, End Run, Settings, Return to Maps with explicit discard/end handling |
| Results | Score, best combo, longest barrel, largest landed spin, clean landings, wipeouts, earned medals; Retry and Change Map |
| Settings | Quality, Reduced Motion, master volume/mute, board color; save changes |

- Use normal HTML/CSS overlays for menus and HUD; the engine supplies the canvas.
- Keep the center of the screen, surfer, barrel opening, and landing area clear of large panels.
- Show understandable state labels: “In the barrel,” “720 + backflip,” “Clean landing,” “Combo lost.” Do not expose debug names to players.
- No score countdown in Free Surf. Provide an End Run button accessible through pause.
- State changes must prevent gameplay keyboard input while menus have focus. On Escape, the engine and app must not both toggle pause independently; route the pause request through one agreed app handler in the integration PR, with engine input clearing handled by `pause()`.
- Tutorial must explain that W/S need a fresh press in the air to flip, so holding W for speed does not unexpectedly throw the rider forward.
- Keyboard-accessible buttons, visible focus, readable text contrast, and status cues that do not rely solely on color are required.

- On `run-ended`, call Teddy’s `recordResult(result)` once, then render the returned medals, unlocks, and saved records. Use `getSnapshot()` to populate map cards and settings.
- On settings changes, call `updateSettings`, then forward the returned settings to `session.setSettings` and audio. Disable locked board colors using the returned unlock list.
- Reset Progress must ask for confirmation before calling Teddy’s `reset()`. Show a short save warning when `storageAvailable` is false.

### A5. Audio and visual polish

- Start audio only after a player interaction. Respect volume/mute in menus and gameplay.
- Layer a calm ocean bed with simple event feedback for banking a combo, wiping out, entering a barrel, and completing a run. Derive barrel transitions from HUD state changes if necessary.
- Use original or licensed audio. Music is optional and must not delay the playable release.
- Reduced Motion removes decorative menu motion; the engine handles camera effects.
- Keep location cards visually consistent and readable, with an immediate distinction between a long carving wave, a tight barrel, and a big-air wave.

### A6. Anika’s milestones

| Milestone | Work | Done when |
| --- | --- | --- |
| A0 — Foundation | Minimal Vite/TypeScript/Three.js scaffold, dependencies, lockfile, bootstrap, npm scripts | Simple screen renders; typecheck/build pass; merge before feature branches |
| A1 — Trick module | Rotation integration, labels, combined tricks, landing assessment, unit fixtures | Artificial takeoff/contact fixtures verify spins, flips, reversals, and landing grades without requiring finished scenery |
| A2 — First playable app | Wire real engine/tricks/progress APIs; menus, HUD, tutorial, initial Bells/Pipeline/J-Bay scenery | A real barrel and landed 720 appear in HUD; one finished Score Run reaches results |
| A3 — Six locations and rewards UI | Remaining maps, challenge/medal/settings display, audio, loading/errors | Every map is distinct; UI displays Teddy’s stored medals and colors after refresh |
| A4 — Release | Asset cleanup, credits, quality options, production deployment | Shared release checks pass on the actual browser URL; no production mocks |

During development, use a clearly labeled fixture to preview HUD/results while waiting for engine output, and use plain contact/input fixtures for tricks. Never save mock results as player records or describe stub output as verified gameplay. Temporary adapters belong in development/test paths and must not ship as fallback gameplay.

### A7. Anika’s tests and acceptance criteria

Automate angular wraparound, net rotation/reversal, trick families and labels, fresh-air input behavior with Teddy’s input adapter, landing-angle boundaries, duplicate `land` rejection, reset state, map validation, and UI integration with the progress API. Use browser playtests for feel, visual contact, focus, and readability.

- [ ] A/D, W/S, and combinations generate the expected spins, flips, and corks.
- [ ] Reversing direction unwinds rotation rather than earning extra spins by oscillation.
- [ ] Clean, sketchy, and failed landings are visibly different after engine integration.
- [ ] 720, 1080, double flips, and one impossible combined trick can be landed.
- [ ] Trick state resets after wipeout/restart and never advances during pause.
- [ ] Six map cards load the right configuration and scenery; each map changes at least two riding properties.
- [ ] Menus and settings are usable with keyboard focus without steering the surfer underneath.
- [ ] HUD shows actual engine data; Free Surf has no countdown and banked points are not added twice.
- [ ] Medals, board colors, records, and warnings render from Teddy’s progression API.
- [ ] Failed asset loads show retry/recovery UI rather than a blank page.
- [ ] Ten consecutive map switches do not accumulate canvases, listeners, audio, or scene resources.
- [ ] The deployed repository-subpath build loads every asset and all maps.

Record device/browser, steps, expected/actual results, and unresolved issues in `docs/PLAYTEST_Anika.md`. Teddy tests challenge/save rules; Anika tests that the UI uses them correctly. Together, target 60 FPS at 1080p medium quality on the team’s actual laptops and playable low quality near 30 FPS. Aim for the title to be interactive within five seconds on normal broadband and load map assets on demand. Record measured results, not assumed performance.

### A8. App integration and GitHub release — both teammates participate

1. Anika merges the base scaffold first, with npm scripts for `dev`, `typecheck`, `test`, `build`, and `preview`. Teddy then merges the reviewed shared contracts and engine/progress stubs. Add meaningful tests with implementation; an empty suite is not gameplay verification.
2. Use focused branches such as `teddy/surf-barrels`, `teddy/progression`, `anika/tricks-landings`, and `anika/maps-ui`. Start from current `main` and update from it before merging. Only Anika changes the shared dependency/lockfile setup unless coordinated.
3. Each PR describes behavior, owned files changed, checks run, and remaining limitations. The other teammate reviews. Resolve conflicts by preserving both contributions, not overwriting the other person’s file.
4. Anika’s bootstrap creates Teddy’s progress store, loads the selected map/environment, creates the session with Anika’s `createTrickController`, connects events to the HUD and progress store, and starts the session. No component creates a second renderer or simulation loop.
5. Merge an early playable flow before all scenery is finished: title → map → controllable wave → real trick and landing → HUD → End Run → results → saved record. Prove a barrel and an aerial in this integration.
6. Integrate Bells, Pipeline, and J-Bay first, followed by Uluwatu, Teahupoo, and Nazare. Three maps are a checkpoint, not the completed release.
7. Before release, run `npm ci`, `npm run typecheck`, `npm test`, and `npm run build`. Test the production preview; a passing build alone does not prove gameplay.
8. On the merged app, verify every map, both modes, WASD/Space, a barrel, a landed trick, a wipeout, pause/resume, a complete Score Run, medals/records after refresh, and ten map switches. Test Chrome and Safari where available and record actual device/browser versions.
9. Anika configures GitHub Pages for the repository path, including Vite’s base path and asset URLs. Both teammates open the live build and repeat the core play flow before calling it complete.

**Final handoff:** one repository, this single PRD, one install/build process, one playable browser URL, six maps, both playtest notes, asset credits, and no duplicate engines, trick implementations, progression stores, or app shells.

### A9. Project references

- [Cork 7](https://cork7.com/) and its [official controls/tricks guide](https://cork7.com/how-to-play), consulted November 17, 2026: reference for approachable keyboard movement and player-controlled aerial rotations. BarrelRoll uses its own identity, surfing systems, score rules, and assets.
- [Three.js documentation](https://threejs.org/manual/) and [Vite guide](https://vite.dev/guide/): proposed implementation stack. Choose compatible stable versions during setup and commit the lockfile.
- Map parameters, course layouts, challenge thresholds, and closeout timing are original arcade design proposals, not statements about actual surf conditions.
