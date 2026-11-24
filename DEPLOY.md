# Deployment

```bash
npm install
npm run dev
npm run build
npm run preview
```

## GHA

**Configuration** — text fields use matching secrets from `.env.example`.
The `ENABLE_WECHAT` feature flag uses an Actions variable as described below.
Any secret you don't set falls back to the same fictional default used locally.

**WeChat feature flag** — disabled by default. The QR panel is hidden and
contact details use the full width. Leave `ENABLE_WECHAT` blank or `false` locally.
After replacing `assets/qrcode.png` with the correct code, set `ENABLE_WECHAT=true`
in `.env` for local development. For production, set the GitHub Actions repository
variable `ENABLE_WECHAT` to `true` under Settings → Secrets and variables → Actions
→ Variables, then start a new workflow run. Set it to `false` (or remove the
variable) and rebuild to disable it again.

**Custom domain** — if you attach a domain later:
1. Set `site` in `astro.config.mjs` to the domain's HTTPS URL and set `base` to `/`.
2. Add a `CNAME` repository secret containing the domain.
3. Point the domain's DNS at GitHub Pages.
4. In Settings → Pages, set the custom domain to match.

The workflow writes the `CNAME` secret into the build output automatically.
