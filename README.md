# BarrelRoll

A single-player, 3D arcade surfing game by Anika and Teddy. Ride a penguin on an ice board through famous breaks, carve into barrels, launch off the lip, and land tricks.

## Play the current build

**[Play BarrelRoll on ChatGPT Sites](https://barrelroll-surf.tk7272.chatgpt.site/)** in a desktop browser. Use the download below to play offline.

**[Download the playable BarrelRoll HTML](https://github.com/AniPupper/BarrelRoll/blob/main/public/play.html)**. On GitHub, choose **Download raw file**, then open `play.html` in a desktop browser with WebGL 2 support. The GitHub file view shows the source; it does not run the game.

The downloadable game includes all six breaks and works offline. The game saves progress in the browser you use to play.

## The tour

Mavericks is the tutorial. Ride to the end of one wave to unlock untimed Freeplay at Mavericks, Jeffreys Bay, Pipeline, Teahupoʻo, Nazaré and Uluwatu. Points and medals track your runs. You can choose any open break regardless of score.

### Controls

| Key | On the wave | In the air |
| --- | --- | --- |
| A / D | Carve left / right. Keep steering uphill into the curl to loop. | Spin |
| E | — | Hold to grab a rail. Start the grab with A for left or D for right. |
| W / S | Tuck for speed / brake | Frontflip / backflip (press again after takeoff) |
| ← / → | — | Side roll |
| Space | Hold and release to jump | Hold to tuck and rotate faster |
| Escape | Pause | Pause |
| R | Retry after a run | Retry after a run |

At Mavericks, hold A to enter the barrel and keep holding it to ride up the wall, across the ceiling and back down. On the wall, D reverses the loop and S holds your height as you travel down the wave. Release the keys to settle on the floor, then press D to carve out. At Pipeline, D takes you uphill and A carves out.

E alone grabs the right rail in the air. Choose the left rail by holding A when you press E. Release E and reach again to switch hands during the same jump. Holding a distinct rail for at least 0.20 seconds adds 200 base points when you land.

A short tap adjusts your line. Holding a rail turns the board through a longer arc. Carry speed out of a drop, load Space, and release near the lip for a higher air. A steep ramp can also launch the board.

The score runs throughout the tutorial and Freeplay. Speed, barrel time, aerial grabs and active combos raise the points-per-second readout. Banked tricks roll into the counter over time. Wipeouts stop new ride points, and pausing freezes the counter.

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
