# BarrelRoll — Teddy’s PRD

**Owner:** Teddy Kindler  
**Workstream:** Surfing, wave simulation, tricks, scoring, and camera  
**Companion:** [Anika’s PRD](PRD_Anika.md)  
**Repository:** https://github.com/AniPupper/BarrelRoll  
**Status:** Implementation specification; no game implementation is included in this document.  
**Date:** November 17, 2026

## 1. What we are making

BarrelRoll is a single-player, 3D browser surfing game inspired by the accessible controls and aerial freedom of [Cork 7](https://cork7.com/). Players carve across waves, ride inside curling barrels, launch from the lip, combine exaggerated spins and flips, and land back on the water. The camera follows behind the surfer.

The game must feel responsive and playful. Huge airs and physically impossible combinations are intentional, but success still depends on choosing a line, timing takeoff, controlling rotations, and landing. A decorative ocean with a character sliding across a flat plane does not satisfy this brief.

### Confirmed requirements

- Runs in a desktop/laptop browser, including on Mac and Windows.
- WASD controls the surfer; Space jumps.
- Camera stays behind the surfer.
- Exaggerated and impossible tricks are central to the experience.
- Players can actually enter, ride through, and exit a wave’s barrel.
- Multiple famous surfing locations have meaningful gameplay differences.
- Teddy and Anika build separate parts that merge into this repository.

### Product defaults chosen for the first release

These decisions fill in details not specified by Teddy; they can be adjusted together before implementation.

- Free Surf and a two-minute Score Run, with local records and map challenges.
- All six locations are accessible from the start; achievements unlock cosmetic board colors.
- Stylized 3D art, readable wave shapes, simple surfer animation, strong spray and speed feedback.
- HTML/CSS, TypeScript, Three.js, and Vite; one application, one renderer, one lockfile.
- Keyboard first. Multiplayer, accounts, online leaderboards, controller support, mobile controls, video export, and full fluid simulation are later work.

## 2. Your responsibility

You own the complete playable surfing system. Anika supplies location definitions, scenery, menus, HUD presentation, saved progress, and challenges. You must make her maps affect the simulation through their shared configuration, without adding map-specific conditions throughout the controller.

| You build | Anika builds |
| --- | --- |
| Surfer and board movement; contact with water | Six location definitions and their scenery |
| Shared wave geometry, contact queries, and barrel detection | Map cards, menu flow, loading, HUD, results |
| Jumping, spins, flips, combined tricks, landing | Challenge targets and achievement presentation |
| Runtime scores, combo banking, run timer and statistics | Saving records, settings, medals, cosmetic selections |
| Renderer, gameplay camera, surfer animation, gameplay spray | Scenery assets, environmental decoration, audio presentation |
| Shared TypeScript contracts and engine lifecycle | Application bootstrap, dependencies, build and deployment configuration |

**Boundary:** The wave mesh and its collision behavior are yours. Anika’s water colors, terrain, and background ocean must not introduce a second independently animated rideable wave.

## 3. Required player experience

Within one minute of loading the game, a new player should be surfing, jumping, and attempting a trick. Start each wave already standing on the board in a forgiving position. No paddling, swimming, or waiting for a set in the first release.

The repeatable loop is: build speed → choose barrel or aerial line → control the maneuver → exit or land → bank points → try a harder combination. A wipeout returns the player to a usable wave within two seconds.

### 3.1 Controls

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

### 3.2 Surfing and wave contact

- Use a fixed physics step of 1/60 second with rendering interpolation and a capped catch-up budget. Frame rate must not change jump height or scoring.
- Use a controlled arcade model: speed along the wave plus steering over the face, with gravity and limited air control after takeoff.
- The board follows the sampled water position and normal. Smooth board tilt without separating it visibly from the water.
- Carving should change the rider’s line and speed. W must not provide unlimited acceleration, and S must have a visible braking effect.
- A low-face turn can build momentum into a lip launch. Launch sections add lift only when the rider actually reaches them with enough speed.
- Flat-water jumps remain small; big tricks reward use of the wave. No repeated midair jumps or unlimited flight.
- Detect contact across the previous/current motion segment to prevent tunneling through thin or fast-moving geometry.

### 3.3 A real playable barrel

The rideable wave must curl overhead into a visible hollow tube. The surfer travels inside that volume with the opening ahead, not through an opaque wall or beside a decorative cylinder.

- Use one parameterized wave model for the rendered mesh, board contact, lip location, barrel volume, and closeout state. A simple height field alone cannot represent an overhanging lip.
- Expose internal queries for surface position/normal and barrel centerline/radius at a given position and simulation time. The surface parameterization must support the folded lip without confusing it with the lower rideable face.
- Barrel status requires the surfer to be inside the hollow region and behind the curling lip, with at least 0.3 s of continuous valid occupancy. Riding outside or above it earns no barrel points.
- Braking should keep the surfer deeper in the pocket; accelerating should help them reach the exit.
- Show impending closure with the visibly shrinking opening and increasing foam before it becomes a collision hazard.
- A clean exit banks barrel points; a closeout or collision loses only the unbanked combo.
- Match rendered and physical openings. No invisible walls where the player sees open water.
- First complete a generous, nonclosing development barrel. Add narrow and closing barrels after entry, riding, and exit work reliably.

### 3.4 Tricks and landing

Required launch tricks: straight air, 180, 360, 720, 1080, frontflip, backflip, double flip, and combined flip/spin corks. An advanced player must be able to complete at least one intentionally unrealistic combination, such as a double backflip with a 1080, on a high-launch map.

- Count completed rotations from motion over time, not Euler angles at the final frame. Visual wrapping from 359° to 0° must not erase a rotation.
- Keep board and body animation connected; use an articulated or simple rigged surfer that crouches, extends, rotates, and absorbs landing.
- Air steering may slightly correct the trajectory but cannot hover or teleport the player back to a wave.
- Evaluate board-up alignment against the landing surface normal and heading against local travel direction. Initial tuning: clean within 25° tilt/30° heading, sketchy within 55° tilt/70° heading, otherwise wipeout. Reverse-aligned landings may use the same tolerances and recover smoothly.
- A sketchy landing reduces speed and scores less. A wipeout should have a short readable splash, then recovery.
- Exact angles, air duration, and launch force are tuning values, not promises of real-world physics.

### 3.5 Scoring and run rules

You own the authoritative runtime score, including the total. Anika displays it and saves finished results; she does not create a second scoring algorithm.

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

### 3.6 Camera and feedback

- Smooth chase camera behind the direction of travel with a stable horizon. Track movement heading, not the surfer’s spinning body.
- Pull back slightly during high airs and move closer inside barrels while keeping the exit readable. Avoid camera clipping through the lip.
- Use moderate speed-based field of view, optional subtle shake, and spray that does not obscure the player.
- Reduced Motion disables shake and large FOV shifts. Keep controls and trick timing unchanged.
- Engine events drive Anika’s HUD and audio. Do not place DOM menus or permanent HUD elements inside the engine.

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

### T0 — Agree on the contract

After Anika merges the base project, add the shared types and an engine stub implementing the lifecycle. Provide a no-op environment adapter for isolated engine testing. Merge this small PR first so Anika can integrate against real exports.

**Done when:** `npm run typecheck` and `npm run build` pass, and creating/starting/disposing the stub does not leak listeners or canvases.

### T1 — One wave that feels good

Build a simple surfer, a development wave fixture inside your engine test files, WASD movement, Space jumping, camera, wipeout/restart, and frame-independent motion. Do not wait for finished scenery.

**Done when:** a player can carve for 30 seconds, jump and land, recover after wiping out, and restart without reloading.

### T2 — Barrel plus aerial tricks

Implement curling geometry, barrel entry/exit/closeout, rotation counting, combined tricks, landing quality, and scoring events. Integrate Anika’s first Bells/Pipeline/J-Bay configurations.

**Done when:** a player can complete a visible barrel ride, land a 720, lose only pending points on wipeout, and see both actions in the app HUD.

### T3 — Six-map compatibility and polish

Support every configured map, both modes, pause/focus behavior, reduced motion, audio events, and dependable cleanup. Tune high airs so Nazare can support impossible combos while Bells remains approachable.

**Done when:** all six maps are mechanically distinct, the shared end-to-end check passes, and no map requires editing the controller to change its wave tuning.

## 6. Tests and acceptance criteria

Write meaningful automated checks for rotation wraparound, score/combo banking, repeat penalties, timer/pause behavior, invalid maps, and barrel entry/exit/closeout. Use browser playtesting for feel, visual contact, and camera behavior.

- [ ] WASD + Space is enough to steer, jump, flip, spin, and combine tricks.
- [ ] The surfer and camera never spin together during a trick.
- [ ] Held movement stops after blur; resuming does not cause unintended motion.
- [ ] A visible hollow wave can be entered, ridden, and exited under player control.
- [ ] Staying beside the barrel never earns barrel points.
- [ ] Barrel closeout visuals and collisions agree.
- [ ] 720/1080 and combined tricks count correctly across rotation wraparound.
- [ ] Clean, sketchy, and failed landings behave differently and visibly.
- [ ] 30/60/120 FPS caps produce comparable motion and time-based scores.
- [ ] Pausing cannot spend run time or alter a pending combo.
- [ ] Repeated restart/map switching does not multiply input handlers or canvases.
- [ ] A complete Score Run produces one result with correct score and metrics.

Record device/browser, steps, expected/actual results, and unresolved issues in `docs/PLAYTEST_Teddy.md`. Target 60 FPS at 1080p medium quality on the team’s actual laptops; low quality should remain playable near 30 FPS. These are targets to measure, not claims already verified.

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
- Anika’s location table defines fictionalized game tuning inspired by real destinations, not measured surf forecasts or physical simulations.
