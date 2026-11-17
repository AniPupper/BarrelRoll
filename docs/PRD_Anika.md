# BarrelRoll — Anika’s PRD

**Owner:** Anika  
**Workstream:** Locations, scenery, interface, challenges, saved progress, and deployment  
**Companion:** [Teddy’s PRD](PRD_Teddy.md)  
**Repository:** https://github.com/AniPupper/BarrelRoll  
**Status:** Implementation specification; no game implementation is included in this document.  
**Date:** November 17, 2026

## 1. What we are making

BarrelRoll is a single-player, 3D browser surfing game inspired by the accessible controls and aerial freedom of [Cork 7](https://cork7.com/). Players surf famous locations, enter real playable barrels, launch from waves, and land exaggerated or impossible trick combinations. The camera follows behind the surfer.

Your job is to turn the surfing engine into a complete game with six distinct destinations, clear menus, useful feedback, and reasons to replay. Maps must change how a player rides, not just the background color.

### Confirmed requirements

- Desktop/laptop browser game for Mac and Windows.
- WASD controls; Space jumps; camera behind the surfer.
- Exaggerated tricks, including physically impossible combinations.
- Players can enter, ride through, and exit a curling barrel.
- Famous surf destinations from different parts of the world, each with specific gameplay differences.
- You and Teddy work separately and merge into the same GitHub repository.

### Product defaults chosen for the first release

These fill in unspecified details and may be adjusted together before implementation.

- Free Surf and a two-minute Score Run, with local records and map challenges.
- All six locations available immediately. Medals unlock cosmetic board colors, never stronger physics.
- Stylized 3D art with readable waves, simple animated surfers, and clear environmental identities.
- HTML/CSS, TypeScript, Three.js, and Vite. One application and one renderer; no backend required.
- Keyboard first. Multiplayer, accounts, online leaderboards, controller/mobile controls, video export, and full fluid simulation are deferred.

## 2. Your responsibility

| You build | Teddy builds |
| --- | --- |
| Six map definitions, scenery, location previews | Wave geometry, contact, curling barrels, closeouts |
| Title screen, map selection, tutorial, pause/settings | WASD, jumping, air rotations, landing, recovery |
| HUD rendering and results screens | Runtime scoring, combo banking, timer and metrics |
| Challenge rules, medals, cosmetics, local records | Engine events and final result data |
| Environmental assets and audio presentation | Surfer/board, gameplay spray, renderer and camera |
| Application bootstrap, build, deployment | Shared contracts and engine lifecycle |

**Boundary:** Build scenery around Teddy’s rideable wave. Do not create a separate water simulation, movement controller, score calculation, renderer, or animation loop. Decorative terrain must not imply collisions the engine does not support.

## 3. Required game experience

### 3.1 Six locations with different gameplay

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

### 3.2 Scenery and environment integration

- Store one typed definition per location under `src/maps/`, plus a registry with all six IDs. Keep selection-card text and challenge definitions in app-side metadata keyed by the same IDs.
- Use `src/worlds/` to create each destination’s scenery through the shared `EnvironmentFactory`. Use the supplied scene and coordinate frame.
- Teddy owns all rideable wave geometry, water contact, barrel shape, and gameplay spray. Pass him palette and mechanical parameters; do not deform his mesh independently.
- Background ocean must remain outside/below the active wave corridor. Avoid seams or a flat water plane cutting visibly through a barrel.
- Use a small set of reusable cliff, beach, rock, vegetation, and landmark assets with distinct composition and lighting per map.
- Keep decorative rocks, boats, vegetation, and buildings out of the riding route. Gameplay obstacle collisions are outside the first-release scope.
- Preload required environment assets before creating the session. Show loading progress and retry if a map fails to load; fall back to lightweight scenery if an optional decoration fails.
- Provide low-cost scenery at lower quality: fewer particles, simpler shadows/materials, reduced distant detail. Quality settings must not alter collision or scoring.
- Every environment must remove its scene objects and release its owned resources on disposal. Shared cached assets need explicit ownership/reference handling so one map does not dispose assets still in use.
- Use original, procedural, or appropriately licensed assets. List source/license/author in credits when needed.

### 3.3 Screens and navigation

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

### 3.4 Challenges and progression

Each map has three independently earned medals. Evaluate them from Teddy’s finished `RunResult`; do not infer achievements from animation or reimplement his score logic. Goals may be earned across separate finished runs in either mode unless a goal explicitly says Score Run.

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

### 3.5 Persistence and reliability

Use a versioned local save such as `barrelroll.save.v1` containing settings, selected board color, records keyed by map and mode, earned medal IDs, and a bounded recent-result history used to deduplicate run IDs.

- Persist only completed run results. An abandoned run does not grant new records or medals.
- Validate parsed saves and recover to defaults if corrupt. Unknown fields should not break startup.
- Handle blocked/full storage gracefully: keep the game playable and show a short “Progress could not be saved on this device” message.
- Explain in Settings that progress is local to this browser/device. No login or cloud synchronization in this release.
- Reset Progress requires confirmation and must not accidentally remove unrelated browser data.
- Refreshing after a completed run preserves records, medals, settings, and unlocked colors.
- Duplicate `run-ended` delivery must not award medals twice or duplicate history. Keep bounded history rather than unbounded growth.

### 3.6 Audio and visual polish

- Start audio only after a player interaction. Respect volume/mute in menus and gameplay.
- Layer a calm ocean bed with simple event feedback for banking a combo, wiping out, entering a barrel, and completing a run. Derive barrel transitions from HUD state changes if necessary.
- Use original or licensed audio. Music is optional and must not delay the playable release.
- Reduced Motion removes decorative menu motion; the engine handles camera effects.
- Keep location cards visually consistent and readable, with an immediate distinction between a long carving wave, a tight barrel, and a big-air wave.

## 4. Shared integration contract — version 1

This section is identical in both PRDs. Teddy owns `src/shared/contracts.ts`; agree on changes together and merge contract changes before consumers. These are proposed interfaces to implement, not files already present.

### Files and ownership

| Paths | Owner |
| --- | --- |
| `src/engine/**`, `src/shared/**`, `tests/engine/**`, `public/assets/surfer/**` | Teddy |
| `src/app/**`, `src/ui/**`, `src/maps/**`, `src/worlds/**`, `src/progress/**`, `src/audio/**`, `tests/app/**`, `public/assets/worlds/**`, `public/assets/audio/**` | Anika |
| `index.html`, `src/main.ts`, `package.json`, lockfile, TypeScript/Vite configuration, deployment workflow, `README.md` | Anika; coordinate dependency changes |
| `docs/PRD_Teddy.md`, `docs/PLAYTEST_Teddy.md` | Teddy |
| `docs/PRD_Anika.md`, `docs/PLAYTEST_Anika.md` | Anika |

Do not edit the other person’s owned files without coordination. No giant shared `main.ts` containing both systems. Anika’s app imports the engine; the engine must never import the app, maps registry, progress storage, or UI.

### Map data and lifecycle types

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
  onEvent: (event: GameEvent) => void;
}): SurfSession;
```

### Contract semantics

- Units: meters, seconds, degrees for reported rotations; world Y is up. At the start of a wave, the trough origin is `(0, 0, 0)`. Increasing along-wave distance follows +Z for right breaks and -Z for left breaks; the face rises toward +X. Scenery must use this frame and keep the ride corridor clear. `along01` follows the wave’s peeling path from 0 to 1 regardless of break direction; `face01` runs from trough 0 to lip 1. The engine handles mirroring internally.
- Section intervals must satisfy `0 <= start01 < end01 <= 1`. Positive dimensions/speeds, positive radius/lift, and a positive closeout delay or `null` are mandatory. Spawn must be outside a closed barrel and inside the rideable surface.
- A closing section’s countdown begins on first valid entry during that wave, continues even after exit, and resets only for a new wave/restart. All closeout visuals use that same countdown. This is a deliberate arcade rule.
- Anika provides and validates map data. Teddy validates again at the engine boundary and rejects bad input with a readable error.
- `createSurfSession` creates one canvas/renderer and a ready, nonrunning session. `start` begins once. The engine alone owns the animation loop, clock, resize handling, gameplay input, wave mesh, and camera.
- The environment factory adds scenery/lights to the supplied scene; it creates no renderer, animation loop, input handlers, rideable water, or gameplay collisions. Environment assets are preloaded by the app before session creation. The engine calls its update and disposal methods and forwards settings changes to `setSettings`; visual quality changes must work without restarting the run.
- `pause` freezes physics, timer, combo expiry, and environment animation. `resume` does not restore stale held keys. `restart` resets all runtime state, creates a new run ID, and retains the selected map/mode/seed/settings.
- `finish` resolves only already-completed safe actions and emits one final result. `dispose` frees listeners, RAF, geometries/materials/textures owned by the session, and environment resources; it does not implicitly finish/save a run. Repeated pause/dispose/finish calls are safe.
- Switching maps means disposing the old session and creating a new one. Exiting a live run requires an explicit End Run or Discard choice.
- Events begin with `run-started`. Send HUD updates at no more than 10 Hz. Results emit once per run; Anika also deduplicates saved results by `runId`.
- The engine owns all runtime scores and metrics. Anika owns final-result persistence, challenge evaluation, UI, and audio. `score-banked` is presentation feedback, not a second source of saved totals.
- The engine handles WASD, Space, and R only while the session is running and focused. The app alone handles Escape/menu navigation and calls `pause()`/`resume()`; it must never process movement keys.
- No global `window` game state or cross-owner DOM queries. Communicate through these typed inputs/events only.

## 5. Your build milestones

### A0 — Shared foundation

Create the minimal Vite/TypeScript/Three.js project in the existing repository without replacing either PRD. Own dependency installation, the lockfile, bootstrap, configuration, and npm scripts. Avoid adding an application framework unless both teammates agree it is needed.

**Done when:** the app starts, a simple screen renders, typecheck/build pass, and Teddy can branch from the merged scaffold. Add the test script and test runner as tests are introduced; do not present an empty test suite as gameplay verification.

### A1 — Screens, registry, and first three maps

Build navigation, a typed six-map registry, initial Bells/Pipeline/J-Bay environment adapters, and loading/error states. Hook the UI to the engine stub once Teddy’s contract PR merges. Use a clearly labeled development-only event fixture to preview HUD and results before the real engine is ready.

**Done when:** title → map → mode → loading → session → End Run → results works with the stub, and all UI data arrives through the contract. Mock results must never be mistaken for a tested playable game or saved as real records.

### A2 — First playable integration

Connect Teddy’s real engine for Bells, Pipeline, and J-Bay. Add HUD, tutorial, pause/settings, results, and local persistence. Test an actual barrel and trick with Teddy; fix app/engine wiring before adding more art.

**Done when:** a real Score Run finishes, results match the HUD, a record survives refresh, and switching maps disposes the previous scene.

### A3 — Six destinations, progression, and release

Complete Uluwatu, Teahupoo, and Nazare, all 18 medal goals, board color unlocks, audio feedback, credits, and the deployment configuration. Tune each map and challenge with Teddy.

**Done when:** all six maps look and play differently, each medal has been shown reachable, the shared acceptance check passes, and both teammates can play the production URL.

## 6. Tests and acceptance criteria

Automate map validation, goal thresholds (including just below/at the threshold), result deduplication, separate map/mode records, corrupted saves, and storage failures. Use manual browser checks for readability, keyboard navigation, scene transitions, and performance.

- [ ] Six location cards load the correct definitions and environments.
- [ ] Each map changes at least two riding properties, confirmed with the real engine.
- [ ] All maps use the same engine; none relies on a copied controller or renderer.
- [ ] The HUD reflects actual engine state and never adds banked points twice.
- [ ] Timer is absent in Free Surf and freezes correctly when a Score Run is paused.
- [ ] All three medals on every map are achievable in the merged game.
- [ ] Settings and records survive refresh; Free Surf and Score Run records stay separate.
- [ ] Corrupt/unavailable storage never prevents starting a game.
- [ ] Keyboard-only navigation and menu focus work without moving the surfer underneath.
- [ ] Returning to maps and starting another run does not retain old audio/listeners/canvases.
- [ ] Ten map switches do not cause steadily accumulating resources or visible performance degradation.
- [ ] Asset failure shows recovery UI instead of a blank page.
- [ ] The deployed repository-subpath build loads every asset and all six maps.

Record device/browser, steps, expected/actual results, and unresolved issues in `docs/PLAYTEST_Anika.md`. Target 60 FPS at 1080p medium quality on the team’s actual laptops and playable low quality near 30 FPS. Initial download goal: title interactive within five seconds on normal broadband; load individual map assets on demand. Record measured results rather than claiming these targets are already met.

## 7. GitHub integration and release — shared checklist

1. Anika creates the minimal Vite/TypeScript/Three.js scaffold, npm scripts (`dev`, `typecheck`, `test`, `build`, `preview`), and lockfile in a setup PR. Review and merge it before both people start feature branches.
2. Teddy adds the shared types plus engine stub in a contract PR. Anika reviews it; merge it before connecting app code. Initial scaffolding/contract PRs may have only the checks their contents support; meaningful tests follow with implementation.
3. Use short branches such as `teddy/surf-controller`, `teddy/barrels-tricks`, `anika/map-system`, and `anika/menus-progress`. Create each from current `main`; pull/rebase or merge current `main` before submitting changes.
4. Open small pull requests describing behavior, owned files changed, checks run, and remaining limitations. The other person reviews. Preserve both contributions when resolving conflicts; never overwrite a whole file to make a merge pass.
5. Merge the first playable integration early: title → map → controllable wave → HUD → End Run → results. Do this before producing all scenery or advanced tricks.
6. Integrate Bells, Pipeline, and J-Bay first; then Uluwatu, Teahupoo, and Nazare. The first three are a checkpoint, not the completed six-map release.
7. Before release, run `npm ci`, `npm run typecheck`, `npm test`, and `npm run build`. Use the production preview for manual checks; a successful build alone does not prove the game plays correctly.
8. On the merged app, test every map, both modes, WASD/Space, a barrel, a landed trick, a wipeout, pause/resume, a finished Score Run, saved records after refresh, and ten consecutive map switches. Test current Chrome and Safari where available; record actual versions and devices.
9. Anika configures a static GitHub Pages deployment for the repository path, including Vite’s base path and asset URLs. Both people open the deployed build and repeat the critical play flow. Do not call the release complete before checking the live URL.

**Final handoff:** one repository, one install/build process, one playable browser URL, six maps, both playtest notes, credits for any external assets, and no duplicated engines or app shells.

## 8. References and interpretation

- [Cork 7](https://cork7.com/) and its [official controls/tricks guide](https://cork7.com/how-to-play), consulted November 17, 2026: reference for approachable keyboard movement and player-controlled aerial rotations. BarrelRoll has its own scoring, surfing systems, identity, and assets.
- [Three.js documentation](https://threejs.org/manual/) and [Vite guide](https://vite.dev/guide/): proposed implementation stack. Choose compatible stable versions during setup and commit the lockfile.
- All map parameters, challenge thresholds, course layouts, and closeout rules above are original game-design proposals. They are not claims about actual conditions at these destinations.
