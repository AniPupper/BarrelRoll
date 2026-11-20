# BarrelRoll

A single-player, 3D arcade surfing game by Anika and Teddy. Ride a penguin on an ice board through famous breaks, carve into barrels, launch off the lip, and land tricks.

## Play the current build

**[Play BarrelRoll on ChatGPT Sites](https://barrelroll-surf.tk7272.chatgpt.site/)**. The hosted game currently has owner-only access. Other players can use the offline build below.

**[Download the playable BarrelRoll HTML](https://github.com/AniPupper/BarrelRoll/blob/main/public/play.html)**. On GitHub, choose **Download raw file**, then open `play.html` in a desktop browser with WebGL 2 support. The GitHub file view shows the source; it does not run the game.

The downloadable game includes all six breaks and works offline. The game saves progress in the browser you use to play.

## The tour

Mavericks is the tutorial. Ride to the end of one wave to unlock untimed Freeplay at Mavericks, Jeffreys Bay, Pipeline, Teahupoʻo, Nazaré and Uluwatu. Points and medals track your runs. You can choose any open break regardless of score.

### Controls

| Key | On the wave | In the air |
| --- | --- | --- |
| A / D | Carve left / right | Spin |
| Shift | Inside the barrel, hold to loop. A / D selects the direction. Release Shift to return to the face. | — |
| W / S | Tuck for speed / brake | Frontflip / backflip (press again after takeoff) |
| ← / → | — | Side roll |
| Space | Hold and release to jump | Hold to tuck and rotate faster |
| Escape | Pause | Pause |
| R | Retry after a run | Retry after a run |

At Mavericks, hold A to enter the barrel. Hold Shift to ride up the wall, across the ceiling and back to the face. While holding Shift, use A or D to steer either way, or hold S to stay on one part of the wall as you travel down the wave. Release Shift to settle and press D to carve out. At Pipeline, D takes you uphill and A carves out.

A short tap adjusts your line. Holding a rail turns the board through a longer arc. Carry speed out of a drop, load Space, and release near the lip for a higher air. A steep ramp can also launch the board.

## Develop locally

Requires Node.js 20.19+ or 22.12+ and npm.

```sh
npm ci
npm run dev
```

Open the address Vite prints to play the game.

```sh
npm run typecheck
npm test
npm run build
npm run preview
```

`npm run build` writes the website to `dist/`. Serve that folder from any static host at a domain root or a project path such as `/BarrelRoll/`. It also packages the game and its images into `dist/BarrelRoll.html` and refreshes the downloadable `public/play.html`.

The [product requirements](docs/PRD.md) describe the game scope, level goals, and team responsibilities.
