# Project Workflow Bootstrap

This project is pinned to a leased factory workflow.

## Workflow Pin

- workflow: `commercial-website-workflow`
- version: `v1`
- source factory: `agent-factory`
- source path: `factory_floor/commercial-website-workflow`
- factory location: `C:\Users\njgsk\OneDrive\repositories\factories\agent-factory`

## Local Role

Use the pinned workflow as the governing workflow contract for project execution.

This local file is a bootstrap, not the canonical workflow definition.
Do not silently fork or rewrite the leased workflow here.

## Project Inputs (read-only)

Source materials supplied by the user. After the project was cleaned for public-repo polish, these were moved to a sibling archive directory at `../marketing-archive/source-materials/` so the project root is a clean Next.js implementation. The materials are still authoritative inputs; future workflow runs (e.g., revising the site) should read them from the archive.

- `../marketing-archive/source-materials/flyers/` — marketing copy, brochure drafts, flyer drafts, star-services notes (source materials)
- `../marketing-archive/source-materials/orders/order1.tex` — infrastructure order-form example. **Contains private customer detail (Star Transport / Big Star Trucking) and pricing — never publish.**
- `../marketing-archive/source-materials/site/examples/original_meep.html` — current site export (preserve verbatim; do not modify)
- `../marketing-archive/source-materials/site/examples/images/meep-image-kit/` — brand assets: logo derivatives, hero infrastructure image, favicons
- `../marketing-archive/source-materials/site/examples/animations/` — animation concepts (adapt ideas, do not copy dark neon style verbatim)
- `../marketing-archive/source-materials/site/examples/inspirations/` — design inspiration notes
- `../marketing-archive/source-materials/MEEP_SITE_REDESIGN_PLAN.md` — redesign brief from the user

Past Playwright capture screenshots from the v1 build live at `../marketing-archive/qa-captures/`. The capture scripts themselves remain in `./.qa/` as durable QA tooling.

## Working Artifacts (project-local)

Source-of-truth handoff documents owned by workflow stages. Live in this repo as audit trail and inter-stage handoff.

- `./website_docs/SITE_BRIEF.md` — owned by Stage 1 Site Intake
- `./website_docs/ASSET_REGISTER.md` — owned by Stage 1 Site Intake
- `./website_docs/OFFER_ARCHITECTURE.md` — owned by Stage 2 Offer Architecture
- `./website_docs/DESIGN_SYSTEM.md` — owned by Stage 3 Visual System
- `./website_docs/PAGE_BLUEPRINT.md` — owned by Stage 4 Page Blueprint
- `./website_docs/IMPLEMENTATION_SUMMARY.md` — owned by Stage 5 Site Build
- `./website_docs/EXPERIENCE_REVIEW.md` — owned by Stage 6 Experience Red Team

## Project Outputs (delivered)

The implemented Next.js site. Delivered artifacts must not be written outside these paths.

- `./app/` — Next.js App Router routes (preferred when available)
- `./pages/` — Next.js Pages Router routes (only if the project uses Pages Router instead of App Router)
- `./components/` — Next.js components
- `./public/` — static assets the site depends on (locally hosted only; no CDN references)
- `./styles/` — CSS / design tokens

The project may add other Next.js conventions (`./lib/`, `./hooks/`, etc.) as the build proceeds; those are build-internal, not pinned delivered artifacts.

## Hard Rules

- Do not copy `factory_floor/commercial-website-workflow/` into this project. The factory workflow is leased, never forked.
- Do not modify any source material under `../marketing-archive/source-materials/`.
- Do not write delivered artifacts anywhere except the declared output paths above.
- No external CDNs, third-party fonts, analytics, or tracking endpoints. Self-contained-site rule is binding; any exception requires explicit user approval recorded in `website_docs/IMPLEMENTATION_SUMMARY.md`.

## Local Overrides

Three standing override entries are recorded in `.factory/workflow.lock.json`: `project-inputs`, `project-working-artifacts`, `project-outputs`. Each describes the natural project layout for a self-contained Next.js project; none are workarounds for a factory bug.

If this project needs further local variation:
- make the override explicit
- keep it as small as possible
- record why the pinned workflow alone is insufficient

## Escalation

If the pinned workflow no longer fits:
- prefer upgrading the project pin
- prefer improving the factory workflow
- create a new canonical workflow only when the gap is durable
