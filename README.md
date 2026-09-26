# Portfolio

Tarek Benameur's portfolio site — Next.js (static export), TypeScript, Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs a static site to `./out` (`next.config.ts` sets `output: "export"`).

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `./out` to GitHub Pages. In the repo's **Settings → Pages**, set the source to **GitHub Actions**.
