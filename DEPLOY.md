# Deployment

```bash
npm install
mpm run dev
npm run build
npm run preview
```

## GHA

**Text fields** — one secret per `.env.example` field.
Any secret you don't set falls back to the same fictional default used locally.

**Images** — in pairs:
- `PATH_HEADSHOT` / `HEADSHOT_IMAGE_B64`
- `PATH_OFFICE_LOGO` / `OFFICE_LOGO_IMAGE_B64`

Generate base64-encoded:

```bash
base64 -i {{PATH_HEADSHOT}} | pbcopy
```

Paste the result as the secret value. If a pair is left unset, that image is simply
omitted from the deployed build — the workflow does not fail.

**Custom domain** — this project is configured to deploy at the root (`base: '/'`)
for use with a custom domain, not a `/<repo>/` subpath. To attach one:
1. Add a `CNAME` repository secret containing the domain (e.g. `example.com`).
2. Point the domain's DNS at GitHub Pages.
3. In the repo's Settings → Pages, set the custom domain to match.

The workflow writes the `CNAME` secret into the build output automatically; it is
never committed to the repository.
