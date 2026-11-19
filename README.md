# BarrelRoll

An arcade surfing game being built by Anika and Teddy. The foundation currently renders a title screen and a location selector. Mavericks is the first highlighted location; gameplay integration is in progress.

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

