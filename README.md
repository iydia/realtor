# Realtor Business Card

A single-page professional business card site, built with [Astro](https://astro.build) and plain CSS. All contact and office details are supplied through configuration rather than hardcoded, so the repository itself contains no personal or business information.

## Stack

- [Astro](https://astro.build) (static output)
- Plain CSS, no UI framework

## Configuration

Site content is read from environment variables (see `.env.example`) and from optional images referenced by path. 
See `DEPLOY.md` for local setup and deployment details.

## Deployment

Deployed automatically to GitHub Pages via GitHub Actions on push to `main`. See
`DEPLOY.md`.
