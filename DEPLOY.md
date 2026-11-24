# Deployment

```bash
npm install
npm run dev
npm run build
npm run preview
```

## GHA

**Configuration** — one secret per `.env.example` field.
Any secret you don't set falls back to the same fictional default used locally.

**Custom domain** — if you attach a domain later:
1. Set `site` in `astro.config.mjs` to the domain's HTTPS URL and set `base` to `/`.
2. Add a `CNAME` repository secret containing the domain.
3. Point the domain's DNS at GitHub Pages.
4. In Settings → Pages, set the custom domain to match.

The workflow writes the `CNAME` secret into the build output automatically.
