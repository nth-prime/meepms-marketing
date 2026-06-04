# Meep Managed Services — Commercial Website

Self-contained Next.js (App Router) commercial website for Meep Managed Services, a strategic managed-services partner for the operational systems behind regional businesses.

The site is a single statically-prerendered route at `/` with no external runtime dependencies (no CDN, no third-party fonts, no analytics, no remote scripts).

## Stack

- [Next.js](https://nextjs.org) 14.2 (App Router, RSC by default — zero client components)
- React 18.3 + TypeScript 5.6
- CSS Modules + a single `styles/tokens.css` for design-system custom properties
- [Playwright](https://playwright.dev) for visual-regression QA (dev dependency)

## Develop

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build & validate

```bash
npm run build      # next build — fully static prerender
npm run lint       # next lint  — eslint-config-next/core-web-vitals
```

Final v1 build: 6.97 kB page bundle, 94.2 kB First Load JS, 6 static routes.

## Visual QA

Playwright capture scripts live under `.qa/`:

```bash
# Start dev server in another terminal first.
node .qa/capture.mjs   # six viewports, full-page + first-fold + per-section
node .qa/zoom.mjs      # element-targeted screenshots at the right viewport for each section
```

Captures land in `.qa/screens/` and `.qa/zoom/` (gitignored). Past v1 captures are archived at `../marketing-archive/qa-captures/`.

## Project layout

```
app/                      Next.js App Router
  layout.tsx              Document shell, metadata, stylesheet imports
  page.tsx                Home route — composes section components
  icon.png                Favicon (192px)
  apple-icon.png          Apple touch icon (180px)

components/               Server-rendered section components
  Header.tsx, Hero.tsx, Problem.tsx, Services.tsx, ServiceNow.tsx,
  Workflow.tsx, Process.tsx, WhyItWorks.tsx, Contact.tsx, Footer.tsx
  *.module.css            Co-located CSS Modules
  icons/                  Inline-SVG icon components

public/                   Locally-hosted assets only
  meep-logo.png
  hero-infrastructure-{800,1600,2400}.jpg

styles/
  tokens.css              :root design-system custom properties
  reset.css               Minimal reset

website_docs/             Workflow audit trail (Stage 1–6 artifacts)
.factory/                 Workflow lease pin
CLAUDE.md, AGENTS.md      Workflow lease bootstrap

.qa/                      Playwright capture scripts
```

## Workflow lease

This project is pinned to **`commercial-website-workflow@v1`** from the [`agent-factory`](../../factories/agent-factory) at `factory_floor/commercial-website-workflow`. The pin is recorded in `.factory/workflow.lock.json` and the bootstrap files `CLAUDE.md` and `AGENTS.md`. The seven Stage 1–6 source-of-truth artifacts under `website_docs/` form the audit trail for the v1 build.

Source materials (flyers, order-form example, original site export, image kit, redesign brief) live in a sibling archive at `../marketing-archive/source-materials/` to keep this project root a clean public-facing Next.js implementation. Future workflow runs (e.g., revising the site) read inputs from there.

## Self-contained-site rule

Binding for this project:

- No external CDNs, third-party fonts, analytics, or remote scripts.
- No `next/font/google`, no `images.remotePatterns`.
- Allowed external links: `mailto:hello@meepms.com` only.
- `next.config.js` sets `images.unoptimized = true` so the build is fully static-safe without an image-optimization loader.

Any exception requires explicit user approval recorded in `website_docs/IMPLEMENTATION_SUMMARY.md`.

## Deploy

Out of scope for this repo. A `next build` produces a fully static prerender suitable for any static host.

## License

Copyright © 2026 Meep Managed Services. All rights reserved.
