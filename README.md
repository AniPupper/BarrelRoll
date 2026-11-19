# BarrelRoll

A single-player, 3D arcade surfing game by Anika and Teddy. Ride a penguin on an ice board through famous breaks, carve into barrels, launch off the lip, and land tricks.

## Play the current build

**[Download the playable BarrelRoll HTML](https://github.com/AniPupper/BarrelRoll/blob/ux-ui/public/play.html)** from the `ux-ui` branch. On GitHub, choose **Download raw file**, then open `play.html` in a desktop browser with WebGL 2 support. The GitHub file view shows the source; it does not run the game.

The playable HTML is a self-contained snapshot. Progress is saved in that browser and is separate from the site's UI preview. A direct play URL is pending deployment. The current link downloads a self-contained build that works without the Vite source build.

## The tour

The five-level campaign runs **Mavericks → Jeffreys Bay (Supertubes) → Pipeline → Teahupoʻo → Nazaré**. Clear each level to unlock the next. Completing Nazaré unlocks untimed Freeplay at all five campaign breaks plus the bonus Uluwatu spot. The game is single-player; it has no account or online leaderboard.

### Controls

| Key | On the wave | In the air |
| --- | --- | --- |
| A / D | Carve left / right | Spin |
| W / S | — | Flip after takeoff |
| Space | Hold and release to jump | Hold to tuck and rotate faster |
| Escape | Pause | Pause |
| R | Retry after a run | Retry after a run |

A steep ramp can also launch the board. The first campaign level is Mavericks.

## Develop locally

Requires Node.js 20.19+ or 22.12+ and npm.

```sh
npm ci
npm run dev
```

Vite prints the local address. On a branch containing `public/play.html`, add `/play.html` to that address to open the standalone game. The site itself opens at the printed address.

```sh
npm run typecheck
npm test
npm run build
npm run preview
```

`npm run build` creates `dist/` and runs the offline HTML packaging script. The Vite production base path is currently `/BarrelRoll/`, which suits GitHub Pages. A Vercel deployment of the full Vite site would need a root base path. As of November 19, 2026, the current `main` source also fails typechecking because `src/main.ts` has duplicate imports; use the downloadable build above to play while source integration is repaired.

The [product requirements](docs/PRD.md) describe the game scope, level goals, and team responsibilities.
