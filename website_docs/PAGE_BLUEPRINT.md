# Page Blueprint — MeepMS Commercial Website

Owner stage: 4 Page Blueprint.
Status: Build-ready.
Skill applied: `page-completeness-checker` (result at the bottom).
Inputs read: `SITE_BRIEF.md`, `ASSET_REGISTER.md`, `OFFER_ARCHITECTURE.md`, `DESIGN_SYSTEM.md`.

## 1. Stack & Project Decisions

- **Framework:** Next.js, latest stable. App Router.
- **Language:** TypeScript.
- **Styling:** CSS Modules + a single `./styles/tokens.css` that exposes the design-system custom properties on `:root`. **No Tailwind for v1.** Reason: CSS Modules ship with Next.js out of the box, the design system already enumerates the tokens, and a single page does not benefit from Tailwind's utility scale. (Stage 3 Known Issue #5 resolved here.)
- **Routing:** Single primary route at `/`. App Router file: `./app/page.tsx`. Layout wrapper at `./app/layout.tsx` provides the document shell, metadata, and the global stylesheet import.
- **Components:** Server components by default. The only client component is the workflow diagram **only if** the path-pulse animation requires hydration; the design system's pulse can be implemented purely with CSS keyframes on inline SVG, so the diagram can stay a server component. **Plan: zero client components for v1.**
- **Build target:** Static-rendered home route (`force-static` or default static behavior; no dynamic data, no server actions).
- **Validation:** `npm run build` and `npm run lint` (lint script created during scaffold using `next lint`'s default config).

## 2. Project Layout

```
./app/
  layout.tsx                  Document shell, <html>, <body>, metadata, stylesheet import, favicon convention
  page.tsx                    Home route — composes all section components
  globals.css                 (deprecated; unused) — IF Next.js scaffold creates one, replace with our import
  icon.png                    App Router favicon (192px) — copy of meep-image-kit/favicons/icon-192.png
  apple-icon.png              App Router Apple touch icon — copy of meep-image-kit/favicons/apple-touch-icon-180.png

./components/
  Header.tsx                  Sticky header with logo + nav + primary CTA
  Hero.tsx                    Hero section with headline, copy, CTAs, hero image + overlay
  Problem.tsx                 Problem / Context section
  Services.tsx                Commercial offers grid (5 cards; Systems Review handled in Process section)
  ServiceNow.tsx              ServiceNow distinct section with code-native flow diagram
  Workflow.tsx                Operating-layer diagram (central Meep node + 6 satellites)
  Process.tsx                 Engagement Process stepper with primary CTA
  WhyItWorks.tsx              Two-column comparison band
  Contact.tsx                 Contact / close band (orange background)
  Footer.tsx                  Footer
  icons/
    IconInfra.tsx
    IconPlatforms.tsx
    IconData.tsx
    IconServiceNow.tsx
    IconProject.tsx
    IconReview.tsx
    IconArrowRight.tsx        (used in process stepper and ServiceNow flow)
    IconChevronDown.tsx       (reserved; only if mobile nav disclosure is added later)

./components/*.module.css     Co-located CSS Modules per component

./styles/
  tokens.css                  :root custom properties (color, type, spacing) — imported by app/layout.tsx
  reset.css                   Minimal CSS reset (box-sizing, margin, body baseline) — imported by app/layout.tsx

./public/
  meep-logo.png               <- copy of site/examples/images/meep-image-kit/logo/meep-logo-transparent.png
  hero-infrastructure-800.jpg
  hero-infrastructure-1600.jpg
  hero-infrastructure-2400.jpg
```

**No `./pages/` (Pages Router unused).**
**No `./app/public/` (the empty placeholder is left as-is or removed at scaffold time; do not put assets there).**

The `<Image>` component from `next/image` is used for the hero image (with explicit width/height to avoid CLS). Logo in the header uses `next/image` with `priority` only on the hero image, not the logo.

## 3. Section-by-Section Blueprint

Each section below specifies: id, surface (color band), copy, layout at desktop and mobile, asset placements, interaction/motion rules, validation expectations.

### 3.1 Header

- **Component:** `Header.tsx`
- **Section id:** N/A (it's not a section anchor target itself; it contains anchors)
- **Surface:** `--color-white` background, 1px `--color-line` bottom border
- **Position:** `position: sticky; top: 0; z-index: 50`
- **Desktop layout:** logo left, nav center-right (Overview, Services, ServiceNow, Process, Contact — anchor links to `#overview` (hero), `#services`, `#servicenow`, `#process`, `#contact`), primary CTA far right.
- **Mobile layout (<768px):** logo left, primary CTA right. Nav links hidden (per Design System §5 trade-off — single-page anchors are reachable by scroll; section eyebrows act as in-page nav).
- **Logo:** `next/image` of `/meep-logo.png`, width=120, height=32 desktop; width=104, height=28 mobile. Alt: "Meep Managed Services".
- **Primary CTA:** `<a class="btn-primary" href="mailto:hello@meepms.com?subject=Start%20a%20systems%20review">Start a systems review</a>`. **Mobile compact label:** "Start a review" (20px shorter; same href).
- **Motion:** none. No scroll-triggered shadow (Design System §13 Known Issue #2 — keep static).
- **Validation expectation:** Renders within 64px desktop / 56px mobile height; no horizontal overflow at 360px.

### 3.2 Hero

- **Component:** `Hero.tsx`
- **Section id:** `#overview`
- **Surface:** `--color-paper`
- **Padding:** `--space-10` top, `--space-12` bottom (mobile); `--space-16` top, `--space-16` bottom (desktop)
- **Desktop layout (>=768px):** 12-col grid; left column 6/12 holds copy, right column 6/12 holds hero image with orange overlay panel. Vertical alignment: items-center.
- **Mobile layout (<768px):** stacked. Copy first (headline → subheadline → CTAs), then image below (image-below-copy).
- **Copy:**
  - Eyebrow (above h1): "MEEP MANAGED SERVICES" — `--text-eyebrow`, `--color-orange-deep`.
  - H1: "Strategic managed services for the systems your business runs on." — `--text-h1`, `--color-ink`.
  - Subheadline (`--text-body-l`, `--color-slate-deep`, max 64ch): "Architecture-level ownership, operational support, and implementation expertise for the platforms, data, integrations, and workflows your business relies on every day."
  - CTAs (row): primary `Start a systems review` (`mailto:` link as above), secondary `Explore services` (anchor `#services`).
- **Hero image:**
  - `next/image` `<Image src="/hero-infrastructure-2400.jpg" width={1600} height={1280} sizes="(max-width: 767px) 100vw, 50vw" priority alt="Server infrastructure with overlay illustrating Meep's operational coverage" />`
  - **The redesign plan recommended `<picture>` srcset.** Next.js `<Image>` handles responsive `srcset` automatically when given `sizes`. The 800/1600/2400 source files exist in `./public/` and Next.js's image optimizer is **disabled** for static export (we use the original files; no on-the-fly optimization needed for v1). Set `next.config.js` with `images: { unoptimized: true }` to keep the build static-safe and self-contained — the optimizer otherwise tries to fetch from a remote loader during dev. With `unoptimized: true`, `<Image>` renders a plain `<img>` with `srcset` derived from the file we point at; we add an additional explicit `<source>` chain only if Stage 5 needs to.
- **Hero overlay (orange corner panel):**
  - Positioned absolutely inside the image's positioned wrapper; sits at the bottom-right corner of the image (Stage 3 said top-left or bottom-right; bottom-right is chosen because the existing image has the most informational content in the upper portion).
  - ~22% width, ~38% height of the image area.
  - Background: `--color-orange`, opacity 0.92 (the image still ghosts through faintly).
  - Padding: 16px.
  - Contents (top to bottom): a 12-pixel `--color-paper` accent strip, then 4 status labels (`--text-eyebrow`, `--color-paper`):
    1. `INFRA · ACTIVE`
    2. `BACKUP · OK`
    3. `INTEGRATIONS · 4 ✓`
    4. `INCIDENTS · 0 OPEN`
  - 1px hairline divider in `rgba(252,253,249,0.4)` between labels.
  - **Alt-text rule (binding):** the hero image alt text mentions "overlay" but does NOT claim live telemetry. The four labels are visual decoration, not real data. They are inside the image visual, not exposed as `<dl>` or anything that screen readers could read as live metrics.
- **Motion:** none. No parallax, no Ken Burns.
- **Validation:** First-screen content (Header + Hero) communicates the business and primary offer in <10 seconds. H1 not truncated at any breakpoint from 360px to 1440px.

### 3.3 Problem / Context

- **Component:** `Problem.tsx`
- **Section id:** `#problem`
- **Surface:** `--color-paper`
- **Padding:** `--space-12` mobile, `--space-16` desktop
- **Desktop layout:** 12-col grid; 7/12 narrative on the left, 5/12 diagnostic list on the right.
- **Mobile layout:** stacked, narrative first.
- **Copy:**
  - Eyebrow: "WHY THE PATTERN REPEATS"
  - H2: "The challenge isn't effort. It's capacity."
  - Narrative paragraph (max 64ch): from `OFFER_ARCHITECTURE.md` §Problem / Context Copy.
  - Right column: small heading "Where systems strain" (`--text-h3`), then 5 list items as a `<ul>` with subtle hairline dividers between items (1px `--color-line`, padding 12px vertical). Each item is a single sentence per OFFER_ARCHITECTURE.md.
- **Motion:** none.

### 3.4 Commercial Offers (Services)

- **Component:** `Services.tsx`
- **Section id:** `#services`
- **Surface:** `--color-white`
- **Padding:** `--space-12` mobile, `--space-16` desktop
- **Layout:** Section heading + eyebrow at top; then a grid of **5 cards** (the Systems Review offer is handled in the Process section).
  - Mobile (<768px): 1 column.
  - Tablet (768–1023px): 2 columns.
  - Desktop (>=1024px): 3 columns. With 5 cards, the 6th cell of the 3x2 implicit grid is empty — fill it with a "Project capacity for the work that doesn't fit recurring support" mini-card or balance to a 2x2+1 layout? **Decision: 3 columns, last row has 2 cards centered (justify-content: center), or just left-aligned acceptable.** Stage 5 picks the cleaner CSS, but **must not visually orphan the 5th card.**

  Alternative decision: **place the Systems Review card here too as the 6th card**, with a different visual treatment (orange-filled card instead of white) and the same primary CTA. Stage 5 may use this approach if the 5-card layout creates an awkward bottom row. *Document the choice in `IMPLEMENTATION_SUMMARY.md`.*

- **Section heading:**
  - Eyebrow: "WHAT MEEP DOES"
  - H2: "One technical partner across the systems your business runs on."
- **Card structure (each card):**
  - Top: 40x40 inline SVG icon (per design system §8).
  - H3 headline (per OFFER_ARCHITECTURE.md, e.g. "Architecture-level ownership of business-critical systems.").
  - 2-3 sentence description (`--text-body`, `--color-slate-copy`).
  - Bullet list of 3-5 included items (`--text-body-s`, `--color-slate-deep`).
  - **No CTA inside cards.** All offers route to the page-level primary CTA.
- **Card hover:** subtle lift + shadow per design system; reduced-motion respected.
- **Validation:** 5 (or 6 with Systems Review) cards present; every offer from OFFER_ARCHITECTURE.md is represented; mobile stack does not produce horizontal scroll.

### 3.5 ServiceNow

- **Component:** `ServiceNow.tsx`
- **Section id:** `#servicenow`
- **Surface:** `--color-paper`
- **Padding:** `--space-12` mobile, `--space-16` desktop
- **Layout:**
  - Heading at top.
  - Lead paragraph below heading, centered, max 64ch.
  - Code-native flow diagram (inline SVG): 4 boxes in a row at desktop; vertical at mobile.
  - 4 cards in a 2x2 grid below the diagram (desktop), stacked at mobile.
- **Section heading:**
  - Eyebrow: "SERVICENOW IMPLEMENTATIONS"
  - H2: "ServiceNow, shaped to how your business actually operates."
- **Lead paragraph:** verbatim from OFFER_ARCHITECTURE.md.
- **Flow diagram (inline SVG):** Discovery → Implementation → Configuration → Adoption. Boxes are 180x60 px at desktop, all in a horizontal row with arrows between, total width fitting container minus padding. At mobile: vertical stack with arrows pointing down.
- **Cards:** 4 cards from OFFER_ARCHITECTURE.md: Discovery, ITSM/Service Catalog, Configuration & Integrations, Adoption Support. Each has `--text-h3` heading and `--text-body` description. No cards-inside-cards; no icons in this section's cards (the flow diagram carries the visual weight).
- **Constraint reminder (Stage 5):** No ServiceNow logos, no licensed marks, no claim of partnership.

### 3.6 Workflow / Operating Layer

- **Component:** `Workflow.tsx`
- **Section id:** `#workflow`
- **Surface:** `--color-white`
- **Padding:** `--space-12` mobile, `--space-16` desktop
- **Section heading:**
  - Eyebrow: "ONE OPERATIONAL LAYER"
  - H2: "Across the systems your business runs on."
- **Diagram layout (>=640px):** Single inline SVG, fluid-scaled to container width, fixed aspect 5:3. Central Meep pill node centered. 6 satellite nodes arranged in a hexagonal pattern around the central node (top-left, top, top-right, bottom-right, bottom, bottom-left).
  - Satellite nodes:
    1. Infrastructure (top-left)
    2. ServiceNow (top)
    3. Databases & Reporting (top-right)
    4. Operational Platforms (bottom-right)
    5. Vendor Coordination (bottom)
    6. Project Capacity (bottom-left)
  - Connectors: 6 lines from central node to each satellite, with a 4px-radius corner where they bend.
  - **Pulse animation:** one orange dot per connector, traveling from center to satellite over 3.5s linear, looping. Staggered 0.5s per connector.
- **Mobile layout (<640px):** vertical list of the 6 satellites, with the central Meep node at the top and a hairline (1px `--color-line`) connecting each satellite vertically below it. **No pulses on mobile** (the radial layout is what makes the pulse meaningful).
- **Reduced motion:** pulses hidden via `@media (prefers-reduced-motion: reduce)` rule on `.workflow-pulse` class.
- **Validation:** SVG is purely declarative (no scripts). Animation uses CSS keyframes, not SMIL `<animate>`, so the media query takes effect.

### 3.7 Engagement Process

- **Component:** `Process.tsx`
- **Section id:** `#process`
- **Surface:** `--color-paper`
- **Padding:** `--space-12` mobile, `--space-16` desktop
- **Section heading:**
  - Eyebrow: "HOW AN ENGAGEMENT STARTS"
  - H2: "From a systems review to managed capacity."
- **Layout:**
  - Desktop (>=900px): horizontal stepper with 4 columns. Each column is a number badge (orange circle, white text), step title, step description.
  - Mobile (<900px): vertical timeline. Each row is a number badge on the left, content on the right, with a 1px `--color-line-strong` vertical line connecting badges.
- **Steps (verbatim from OFFER_ARCHITECTURE.md §Engagement Process Copy):**
  1. Structured environment review.
  2. Ownership and vendor map.
  3. Stabilization and implementation priorities.
  4. Reserved capacity and managed services.
- **Primary CTA below stepper:** `Start a systems review` button (`mailto:` link). Centered. This is the page's main CTA placement after the hero.

### 3.8 Why It Works

- **Component:** `WhyItWorks.tsx`
- **Section id:** `#why`
- **Surface:** `--color-white`
- **Padding:** `--space-12` mobile, `--space-16` desktop
- **Section heading:**
  - Eyebrow: "WHAT CHANGES"
  - H2: "Reactive support vs. structured management."
- **Layout:**
  - Desktop (>=768px): 2-column comparison band. Left column header "Reactive support" (`--text-h3`, `--color-slate-deep`). Right column header "Structured management with Meep" (`--text-h3`, `--color-ink`). Each row is a single sentence pair from the OFFER_ARCHITECTURE.md table. 1px `--color-line` divider between rows.
  - Mobile: 2 column at >=480px with smaller padding; below 480, stack each pair (Reactive sentence, then Structured sentence, then divider) — preserving comparison meaning by labeling each sentence with a small `--text-eyebrow` "REACTIVE" / "STRUCTURED" tag.
- **Color rule:** color is **not** the carrier of meaning. Both columns sit on white; the right column gets a subtle `--color-orange-tint` background tint to differentiate, plus the explicit column headers. Disability-of-color users still get the comparison meaning from the headers.

### 3.9 Contact / Close

- **Component:** `Contact.tsx`
- **Section id:** `#contact`
- **Surface:** `--color-orange` band (white text on orange — the only orange-band section)
- **Padding:** `--space-12` top/bottom mobile, `--space-16` desktop
- **Layout:** Centered, max 720px content width.
- **Copy:**
  - H2 (white): "Start with a structured review."
  - Body paragraph (white, `--text-body-l`): from OFFER_ARCHITECTURE.md §Contact / Close Copy.
  - CTA (white pill button, ink text on white): `Email hello@meepms.com` linking to `mailto:hello@meepms.com?subject=Start%20a%20systems%20review`.
  - Trust note (small, italic, white at 0.85 opacity): from OFFER_ARCHITECTURE.md.
- **Motion:** none.

### 3.10 Footer

- **Component:** `Footer.tsx`
- **Surface:** `--color-paper`
- **Padding:** `--space-8` top/bottom mobile, `--space-10` desktop
- **Layout:** 1 row, 3 columns at desktop (logo + tagline | nav anchors | contact line). Stacked at mobile.
- **Content:**
  - Small logo (`/meep-logo.png`, 28px tall) with copyright: "© 2026 Meep Managed Services"
  - Repeat of the section anchors as small text links: Overview, Services, ServiceNow, Process, Contact
  - Contact line with `mailto:hello@meepms.com` and the trust note: *"For teams that rely on critical platforms, infrastructure, ServiceNow workflows, reporting, and integrations."*

## 4. Routing & Metadata

`./app/layout.tsx` provides:

```ts
export const metadata = {
  title: "Meep Managed Services — Strategic managed services for critical systems",
  description:
    "Architecture-level ownership, operational platform support, ServiceNow implementations, data and reporting, and project capacity for the systems your business runs on.",
  metadataBase: new URL("https://meepms.com"),  // adjust if final domain differs; required only for absolute URLs in OG metadata
  openGraph: {
    title: "Meep Managed Services",
    description: "Strategic managed services for the systems your business runs on.",
    type: "website",
  },
};
```

**No `images` in `openGraph` for v1** (no OG image generated yet). If the user generates one, place it at `./public/og.png` and add it.

App Router favicon convention:
- `./app/icon.png` — copy of `meep-image-kit/favicons/icon-192.png`
- `./app/apple-icon.png` — copy of `meep-image-kit/favicons/apple-touch-icon-180.png`

No `manifest.json` for v1.

## 5. Asset Placement (final)

Stage 5 copies these files exactly:

| Source (read-only input) | Destination (under `./public/` or `./app/`) |
|---|---|
| `site/examples/images/meep-image-kit/logo/meep-logo-transparent.png` | `./public/meep-logo.png` |
| `site/examples/images/meep-image-kit/media/hero-infrastructure-800.jpg` | `./public/hero-infrastructure-800.jpg` |
| `site/examples/images/meep-image-kit/media/hero-infrastructure-1600.jpg` | `./public/hero-infrastructure-1600.jpg` |
| `site/examples/images/meep-image-kit/media/hero-infrastructure-2400.jpg` | `./public/hero-infrastructure-2400.jpg` |
| `site/examples/images/meep-image-kit/favicons/icon-192.png` | `./app/icon.png` |
| `site/examples/images/meep-image-kit/favicons/apple-touch-icon-180.png` | `./app/apple-icon.png` |

**Source files are not modified, moved, or deleted.** Copies only.

## 6. Validation Checklist

Per the page-completeness-checker skill, this blueprint is build-ready iff:

- [x] First screen (Header + Hero) communicates business and primary offer in <10s.
- [x] Every core offer from OFFER_ARCHITECTURE.md is represented in the page (5 offer cards in Services + the 6th, Systems Review, surfaced in the Process section + a possible 6th card).
- [x] CTA path is explicit: hero → header → process → contact, all with the same `mailto:` and label.
- [x] Service, process, proof/trust, and contact sections are covered.
- [x] Local asset placements are specified (table in §5).
- [x] Desktop and mobile behavior are specified per section.
- [x] Motion and reduced-motion behavior are specified at the design-system level and respected here.
- [x] Self-contained constraints are explicit (no remote assets, no external scripts, system fonts only, `unoptimized: true` on `next/image`).
- [x] Next.js route structure, component boundaries, asset locations, and client-component justification are specified (zero client components needed for v1).
- [x] Validation commands named: `npm run build`, `npm run lint`.

## 7. Stage-5 Build Order (recommended)

1. Scaffold Next.js App Router under project root: `package.json`, `tsconfig.json`, `next.config.js` (`images.unoptimized = true`), `app/layout.tsx`, `app/page.tsx`, `app/icon.png`, `app/apple-icon.png`.
2. Add `./styles/tokens.css` and `./styles/reset.css`. Wire into `app/layout.tsx`.
3. Copy assets per §5.
4. Build component by component, top to bottom: Header → Hero → Problem → Services → ServiceNow → Workflow → Process → WhyItWorks → Contact → Footer.
5. Verify `npm run build` and `npm run lint` pass.
6. Self-contained-site check (Stage 6 also runs this).
7. Hand to Stage 6 Experience Red Team.

## 8. Known Issues (carry into Stage 5)

1. **Services grid 5-vs-6-card layout.** Either 5 cards in 3-col with a balanced bottom row, or include Systems Review as a sixth card with orange-filled treatment. Stage 5 picks; record decision in IMPLEMENTATION_SUMMARY.md.
2. **`next/image` `unoptimized: true`.** Required for true self-containment (the optimizer otherwise hits a remote loader during dev). This trades runtime image optimization for static safety. **Acceptable for v1.**
3. **No mobile nav menu.** Section eyebrows substitute for navigation on mobile (<768px). If user feedback indicates it's a problem, plan a non-JS disclosure pattern for v2.
4. **Hero overlay status labels.** Decorative; alt-text must not claim live telemetry.
5. **OG image absent.** If user wants social previews, a ChatGPT-ready prompt is the handoff path per project convention.

## Page Completeness Checker Result

- First-screen test: pass.
- Every offer represented: pass.
- CTA path explicit: pass.
- Service/process/proof/contact covered: pass.
- Local asset placements specified: pass.
- Mobile behavior explicit: pass.
- Motion specified: pass.
- Self-contained constraints explicit: pass.

**Result: pass — blueprint is build-ready.**

## Stop Condition Met

A builder can implement the Next.js page from this blueprint without inventing route structure, section order, component boundaries, content modules, assets, responsive behavior, or validation expectations. Ready to hand off to Stage 5 Site Build.
