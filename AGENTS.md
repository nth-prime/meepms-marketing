# Project Workflow Bootstrap Notes

This project is using a leased workflow from the factory.

## Pin

- workflow: `commercial-website-workflow`
- version: `v1`
- source factory: `agent-factory`
- source path: `factory_floor/commercial-website-workflow`
- factory location: `C:\Users\njgsk\OneDrive\repositories\factories\agent-factory`

## Project Inputs (read-only)

Source materials live in the sibling archive at `../marketing-archive/source-materials/` after public-repo cleanup. Never copy into the project root.

- `../marketing-archive/source-materials/flyers/` — marketing copy, brochure drafts, flyer drafts
- `../marketing-archive/source-materials/orders/order1.tex` — order form example. **Private: contains customer name + pricing. Never publish.**
- `../marketing-archive/source-materials/site/examples/original_meep.html` — current site export (preserve verbatim)
- `../marketing-archive/source-materials/site/examples/images/meep-image-kit/` — logo, hero image, favicons
- `../marketing-archive/source-materials/site/examples/animations/` — animation inspiration (adapt, don't copy)
- `../marketing-archive/source-materials/site/examples/inspirations/` — design inspiration notes
- `../marketing-archive/source-materials/MEEP_SITE_REDESIGN_PLAN.md` — redesign brief

Past v1 Playwright captures: `../marketing-archive/qa-captures/`. Capture scripts: `./.qa/capture.mjs`, `./.qa/zoom.mjs`.

## Working Artifacts (project-local)

All under `./website_docs/`:

- `SITE_BRIEF.md` (Stage 1 Site Intake)
- `ASSET_REGISTER.md` (Stage 1 Site Intake)
- `OFFER_ARCHITECTURE.md` (Stage 2 Offer Architecture)
- `DESIGN_SYSTEM.md` (Stage 3 Visual System)
- `PAGE_BLUEPRINT.md` (Stage 4 Page Blueprint)
- `IMPLEMENTATION_SUMMARY.md` (Stage 5 Site Build)
- `EXPERIENCE_REVIEW.md` (Stage 6 Experience Red Team)

## Project Outputs (delivered)

- `./app/` — Next.js App Router routes (preferred)
- `./pages/` — Next.js Pages Router routes (only if Pages Router is chosen instead of App Router)
- `./components/`
- `./public/` — locally hosted assets only (no CDN references)
- `./styles/`

## Rules

- treat the pinned workflow as canonical
- do not hand-copy the full workflow package into this project
- do not drift the local bootstrap away from the pinned lockfile
- make local overrides explicit and minimal
- do not modify source under `../marketing-archive/source-materials/`
- do not write delivered artifacts outside the declared output paths
- no external CDNs / third-party fonts / analytics / tracking unless explicitly approved and recorded in `website_docs/IMPLEMENTATION_SUMMARY.md`

## When To Escalate

- the project needs a workflow capability not covered by the pinned workflow
- the local override burden is growing
- the project should upgrade to a newer pinned workflow version
