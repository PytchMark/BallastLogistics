# Ballast Logistics Ltd. Marketing Website

Premium, responsive React + TypeScript marketing site for Ballast Logistics Ltd. (Jamaica) with WhatsApp-first lead generation.

## Features

- High-polish dark SaaS UI with subtle gradients, glassmorphism, and motion.
- Multi-page structure with React Router:
  - `/`
  - `/containers`
  - `/financing`
  - `/about`
- Context-aware WhatsApp CTA tracking with source tags.
- Reusable Quick Quote modal that generates prefilled `wa.me` links (no backend required).
- Horizontal scroll-snap container rail supporting image/video media.
- Cloud Run-ready Docker image serving static assets on `PORT`.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## Environment variables

Create a `.env` file:

```bash
VITE_WA_PHONE=1876XXXXXXX
```

## Docker

Build:

```bash
docker build -t ballast-logistics .
```

> Note: The Docker build uses `npm install` in the build stage so it works in CI/CD even before a lockfile is committed.

Run locally:

```bash
docker run --rm -p 8080:8080 -e PORT=8080 ballast-logistics
```

## Google Cloud Run deploy example

```bash
gcloud run deploy ballast-logistics \
  --source . \
  --region us-central1 \
  --allow-unauthenticated
```
