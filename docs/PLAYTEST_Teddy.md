# Teddy — gameplay and progression checks

Date: November 17, 2026

Device: local macOS development machine

Browser: user opened the temporary Codex preview; browser version not captured.
Agent-side visual inspection was unavailable.

| Steps | Expected | Actual |
| --- | --- | --- |
| Run the engine and progression test files with Node 22.20.0 | Wave validation, barrel entry/exit/closeout, input masking, steering, scoring, run completion, challenges, and save recovery pass | 16 automated tests passed after barrel timing and steering corrections |
| Typecheck Teddy's source and tests with TypeScript 5.9.3 and Three.js types | No type errors at the shared API boundary | Passed |
| Build a temporary Vite preview importing Teddy's engine | Source bundles without an app scaffold | Passed; temporary harness bundle generated |
| Press A and D on Pipeline while watching the surfer | A moves left toward the trough; D moves right toward the lip | The user clarified that A should move left. Water and air steering were corrected on both break directions; a user retest is pending. |
| Jump and use A/D or a fresh W/S press in the air | A visible spin or flip appears | The initial development fixture did not rotate. The temporary preview now has labeled sample rotations; Anika's actual trick module remains pending. |
| Inspect the surfing setting | Ocean and coastline give the wave a readable setting | The initial preview lacked scenery. A placeholder ocean and coast were added to the temporary preview; Anika's final environment remains pending. |
| Pump with W and steer right with D toward Pipeline's tube for about 1 second in a fixed-step simulation | The 6-second medal target and a clean exit are possible before closeout | Longest barrel 7.35 s, 1,402 banked points, no wipeout |
| Hold a Teahupoo-sized tube through 3.5 s of its 4.5 s closeout | The 3.5-second medal target remains physically possible | The occupancy query still reports inside at 3.5 s |
| Integrate Anika's real trick controller, maps, and UI | One landed trick, a clean barrel exit, Score Run results, and saved medals appear in the app | Pending: those modules and the app scaffold are not yet in this repository |

## Integration checks still needed

1. On Mac and Windows browsers, ride Bells and Pipeline for 30 seconds, carve and jump with WASD and Space, then confirm that a held W does not start a flip until pressed again in the air.
2. Ride through a tube and beside it. Check the HUD timer and that the lip's visible opening agrees with the collision and closeout.
3. Land a real 720 and wipe out. Confirm one landing report per air, banked score preservation, and pending combo loss.
4. Pause and resume, restart, finish Free Surf, and complete a 120-second Score Run. Confirm one final result and that pause freezes the timer.
5. Reload and check records by map and mode, all 18 medal targets, unlocks at 3/6/12 medals, settings, and reset confirmation in Anika's UI.
6. Compare 30/60/120 FPS caps and repeat on all six maps once the integrated build exists. Tune goals that prove impossible or tedious.

The automated challenge checks prove that each rule can be evaluated from `RunResult`. They do not establish that every threshold is reachable in actual play.

The temporary preview contains Teddy's wave and surfer with a development-only trick fixture and placeholder scenery. It does not contain Anika's actual tricks, environments, menus, or game HUD. Its appearance and the camera change need a direct user retest before release.
