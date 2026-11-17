# Teddy — gameplay and progression checks

Date: November 17, 2026

Device: local macOS development machine

Browser: visual playtest pending the shared app scaffold and browser access

| Steps | Expected | Actual |
| --- | --- | --- |
| Run the engine and progression test files with Node 22.20.0 | Wave validation, barrel entry/exit/closeout, input masking, scoring, run completion, challenges, and save recovery pass | 13 automated tests passed |
| Typecheck Teddy's source and tests with TypeScript 5.9.3 and Three.js types | No type errors at the shared API boundary | Passed |
| Build a temporary Vite preview importing Teddy's engine | Source bundles without an app scaffold | Passed; temporary harness bundle generated |
| Start Pipeline in a browser, steer, jump, ride a tube, and inspect camera/contact | Board stays on the rendered surface; the camera tracks heading; barrel opening and collision agree | Pending: local browser access was unavailable in this task |
| Integrate Anika's real trick controller, maps, and UI | One landed trick, a clean barrel exit, Score Run results, and saved medals appear in the app | Pending: those modules and the app scaffold are not yet in this repository |

## Integration checks still needed

1. On Mac and Windows browsers, ride Bells and Pipeline for 30 seconds, carve and jump with WASD and Space, then confirm that a held W does not start a flip until pressed again in the air.
2. Ride through a tube and beside it. Check the HUD timer and that the lip's visible opening agrees with the collision and closeout.
3. Land a real 720 and wipe out. Confirm one landing report per air, banked score preservation, and pending combo loss.
4. Pause and resume, restart, finish Free Surf, and complete a 120-second Score Run. Confirm one final result and that pause freezes the timer.
5. Reload and check records by map and mode, all 18 medal targets, unlocks at 3/6/12 medals, settings, and reset confirmation in Anika's UI.
6. Compare 30/60/120 FPS caps and repeat on all six maps once the integrated build exists. Tune goals that prove impossible or tedious.

The automated challenge checks prove that each rule can be evaluated from `RunResult`. They do not establish that every threshold is reachable in actual play.
