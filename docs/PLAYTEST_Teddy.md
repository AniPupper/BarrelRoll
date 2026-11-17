# Teddy — gameplay and progression checks

Date: November 17, 2026

Device: local macOS development machine

Browser: the user opened the temporary Codex preview; browser version was not captured. Agent-side visual inspection was unavailable.

| Steps | Expected | Actual |
| --- | --- | --- |
| Run engine and progression checks with Node 22.20.0 | Wave, barrel, input, scoring, save, and challenge rules pass | 20 automated tests passed, including Mavericks map validation, responsive steering, automatic speed, a clean four-second barrel exit, and a full inner-wall loop |
| Typecheck Teddy's source and tests with TypeScript 5.9.3 and Three.js types | No shared API type errors | Passed |
| Build a temporary Vite preview importing the engine and Mavericks scenery | Source bundles without a production app scaffold | Passed; temporary harness bundle generated |
| Press A/D and jump in the earlier Pipeline preview | A moves left, D moves right; surfing responds naturally | The user confirmed the corrected controls felt good and the surfing mechanic was much better before the Mavericks changes |
| Jump and use A/D or a fresh W/S press in the air | A visible spin or flip appears | The temporary preview has labeled sample rotations; Anika's actual trick module remains pending |
| Steer toward the Mavericks opening tube for 1.75 s in a fixed-step simulation, then release | The four-second medal target and a clean exit are possible with wave-driven speed | The simulated ride reached over ten seconds in the barrel, banked points, and had no wipeout |
| Hold W while on the wave in the fixed-step simulation | W does not change forward speed | Speed matched an otherwise identical ride with no W input; the wave changed speed automatically |
| Enter the Mavericks barrel, release the steering key, then press A for a wall ride | The board loops around the tube and can reverse with D or settle back onto the face | Fixed-step simulation completed more than one full turn, reversed with D, returned to the wave face, and recorded no wipeout |
| Inspect the first wall-ride preview at the top of the loop | The camera stays within the tube and the wave reads as a barrel | The user reported an awkward top-of-loop camera and an odd-looking tube. The camera now tracks the hollow's center and the lip pitches farther down toward the wave face; a retest is pending |
| Inspect the refreshed Mavericks beach, bluff, camera, barrel, and carve feel | The level looks and feels like a surfing location | Pending user playtest of the refreshed preview |
| Integrate Anika's real trick controller, five remaining maps, and UI | A real landed trick, Score Run results, and saved medals appear in the app | Pending: those modules and the production app scaffold are not yet in this repository |

## Integration checks still needed

1. On Mac and Windows browsers, ride Mavericks and Pipeline for 30 seconds. Check A/D carving, jump with Space, and confirm that W/S do not change speed on the wave but flip after a fresh press in the air.
2. Ride through a tube and beside it. In Mavericks, release and press A after entering the tube, hold for a full loop, reverse with D, then release to return to the face. Check that the visible curl, board path, barrel timer, and closeout agree.
3. Inspect Mavericks' beach and bluffs from the board, especially whether the sea and shore meet cleanly and the camera keeps the exit in view.
4. Land a real 720 and wipe out. Confirm one landing report per air, banked score preservation, and pending combo loss.
5. Pause and resume, restart, finish Free Surf, and complete a 120-second Score Run. Confirm one final result and that pause freezes the timer.
6. Reload and check records by map and mode, all 18 medal targets, unlocks at 3/6/12 medals, settings, and reset confirmation in Anika's UI.
7. Compare 30/60/120 FPS caps and repeat on all six maps once the integrated build exists. Tune goals that prove impossible or tedious.

The automated challenge checks prove that each rule can be evaluated from `RunResult`. The Mavericks and Pipeline barrel goals were also reached by fixed-step simulation. Other goals still need playtesting with the merged maps and real trick controller.

The temporary preview contains Teddy's wave, surfer, Mavericks scenery, and a development-only trick fixture. It does not contain Anika's actual tricks, menus, or game HUD. The new barrel shape, wall ride, and camera still need a direct user retest before release.
