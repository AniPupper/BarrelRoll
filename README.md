# BarrelRoll

An arcade surfing game being built by Anika and Teddy. Finish one tutorial wave at Mavericks to unlock all six locations for untimed freeplay. Scores and medals track personal bests.

## Local development

Requires Node.js 20.19+ or 22.12+ and npm.

```sh
npm ci
npm run dev
```

The development server prints its local URL. Other checks:

```sh
npm run typecheck
npm test
npm run build
npm run preview
```

The production build uses `/BarrelRoll/` as its base path for GitHub Pages.


After a production build, open `dist/BarrelRoll.html` directly in a WebGL 2 desktop browser to play offline. A/D carve and spin. Hold and release Space to jump. Press W/S after takeoff to flip. Escape pauses and R retries.
