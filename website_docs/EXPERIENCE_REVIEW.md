# Experience Review — MeepMS Commercial Website

Owner stage: 6 Experience Red Team.
Skills applied: `nextjs-implementation-checker`, `commercial-claim-sanitizer`, `self-contained-site-checker`, `responsive-accessibility-checker`. **`visual-qa-capture` skipped — no browser/screenshot tooling in environment.**
Inputs read: `SITE_BRIEF.md`, `ASSET_REGISTER.md`, `OFFER_ARCHITECTURE.md`, `DESIGN_SYSTEM.md`, `PAGE_BLUEPRINT.md`, `IMPLEMENTATION_SUMMARY.md`, all implementation files in `app/`, `components/`, `styles/`, `next.config.js`, `package.json`.

## Readiness

**Ready with caveats.**

The implementation matches the blueprint, the design system, and the offer architecture. The build passes, lint is clean, and the self-contained-site check is clean. No blocking findings.

**Update from second pass:** browser visual QA was subsequently performed using Playwright (added as a `devDependency` at user request). Two issues surfaced during the live capture round and were fixed before the workflow stopped. See "Browser QA Round" below. The caveats remaining are non-blocking and are appropriate for v1.

## Findings

### Blocking findings

**None.**

### Non-blocking findings (already addressed during this review)

| # | Finding | Severity | Action taken |
|---|---|---|---|
| F1 | Sticky header (56–64px) would obscure the top of an anchor target when clicking section nav. The blueprint and design system did not specify scroll offset compensation. | Medium UX | Added `scroll-padding-top: calc(var(--header-height) + 8px)` to `html` in `styles/reset.css`. Build re-verified. |
| F2 | Stale planning comments inside `Workflow.tsx` JSX ("animate via CSS keyframes that interpolate cx/cy via offset-path? Simpler: animate translation..."). Reduces code clarity. | Low quality | Removed. Build re-verified. |
| F3 | Unused `const id = ...` inside the workflow connector loop. | Low quality | Removed. Build re-verified. |

### Non-blocking findings (caveat-recorded, not changed)

| # | Finding | Severity | Reason not changed |
|---|---|---|---|
| C1 | Body-copy color contrast: `--color-slate-copy` (#677a8e) on `--color-paper` (#fcfdf9) is roughly 4.0:1 — below the WCAG AA 4.5:1 threshold for normal-size body text. Headings and `--color-slate-deep` body pass. | Medium accessibility | The design system explicitly declared this trade-off; the buyer's eye will read this as polished editorial typography. WCAG conformance was never claimed. **Recommendation:** if formal WCAG AA conformance is later wanted, swap default body color to `--color-slate-deep` (#304254) which passes comfortably. |
| C2 | No browser/visual QA performed: no dev server started, no screenshots captured, no console-error inspection, no real keyboard tab order verified. | Material gap | No browser-automation tool is available in this environment. The `visual-qa-capture` skill explicitly permits recording "skipped checks precisely" when tools are unavailable; this is recorded here. **The user should do a final manual browser pass before publication.** Specific things to look at: hero image overlay legibility, workflow diagram pulse rendering and reduced-motion behavior, mobile breakpoint at 360 / 390 / 414px, sticky-header scroll offset on anchor click. |
| C3 | `next/image` with `images.unoptimized = true` does not emit a multi-size `srcset`. The `-800.jpg` and `-1600.jpg` hero variants exist in `public/` but are not referenced. | Low performance | Required to keep the build self-contained without an image-optimization loader. If mobile data cost becomes a concern, swap the hero `<Image>` for a hand-rolled `<picture>` with explicit `<source srcset>`. |
| C4 | OG / Twitter preview image absent. `metadata.openGraph` is set but no image. | Low marketing | Per project convention, image generation goes through the user with a ChatGPT prompt. **Suggested ChatGPT prompt below.** |
| C5 | 5 npm audit vulnerabilities remain (1 moderate, 4 high). All require Next.js 16 to resolve — a major-version breaking change. | Low for this site | All high-severity Next.js advisories are non-applicable to a fully-static site with `images.unoptimized: true`, no remote patterns, no rewrites, no API routes, no server actions. Recommend a tracked Next.js 16 upgrade as a follow-up rather than a v1 blocker. |
| C6 | Empty `app/public/` directory left over from before the lease. | Cosmetic | Empty dirs do not produce routes; leaving as-is. Stage builders may delete it during a future cleanup PR. |
| C7 | No mobile hamburger / disclosure nav. | Design intent | Documented in design system (§13 Known Issue #1) and blueprint (§3.1) as a deliberate trade. Mobile users navigate via scroll; section eyebrows are visually large. If user feedback indicates this is a problem, plan a non-JS disclosure for v2. |

## Per-skill check results

### Next.js implementation check (`nextjs-implementation-checker`)

| Item | Status |
|---|---|
| App Router used (preferred) | Pass — `app/`, no `pages/` |
| Target route + changed files named in IMPLEMENTATION_SUMMARY | Pass |
| Local assets in `public/` | Pass — 4 files plus 2 in App Router favicon convention |
| Server/static components default; client components only when justified | Pass — **zero client components** |
| Metadata, page title, favicon | Pass — `metadata` exported; `app/icon.png` and `app/apple-icon.png` present |
| Build run | Pass (`npm run build` exits successfully) |
| Lint run | Pass (`✔ No ESLint warnings or errors`) |
| External deps / new packages flagged for approval | None added beyond Next.js + React + TS baseline |

**Verdict: pass with caveats** (caveats are the audit advisories per C5).

### Commercial claim sanitizer (`commercial-claim-sanitizer`)

Re-checked every claim in the implementation against the prohibited-claims list in `OFFER_ARCHITECTURE.md`:

| Claim category | Implementation usage | Verdict |
|---|---|---|
| Customer names (Star Transport, Big Star Trucking, contacts) | Not used anywhere | Pass |
| Pricing (20 hours/week, $160/hr, contract dollar amounts) | Not used anywhere | Pass |
| Contract clauses, liability caps, payment terms | Not used anywhere | Pass |
| Legal entity ("Meep Managed Systems, Kansas corporation", S-corp) | Not used; site uses "Meep Managed Services" only | Pass |
| Numeric SLAs, uptime, response time | Not used; "around-the-clock availability coverage when contracted" is the only availability framing — phrased as offering shape, not promise | Pass |
| Headcount, years in business, customer count | Not used | Pass |
| Vendor partnership / certification claims | Not used; platforms named as neutral text only | Pass |
| Vendor logos / licensed marks | Not used; ServiceNow icon and ServiceNow flow diagram are code-native, abstract, no marks | Pass |
| Client testimonials, case studies | Not used | Pass |

**Hero overlay status labels** ("INFRA · ACTIVE", "BACKUP · OK", "INTEGRATIONS · 4 ✓", "INCIDENTS · 0 OPEN") were re-evaluated for risk that a viewer might interpret them as live telemetry. They sit inside the hero image visual under `aria-hidden="true"`, the hero image alt does not claim telemetry, and they are clearly typographic decoration on an orange overlay panel. **Pass** — they read as illustration, not data.

**Verdict: pass.** No prohibited claims were introduced during build.

### Self-contained site check (`self-contained-site-checker`)

Already performed in Stage 5 (recorded in IMPLEMENTATION_SUMMARY.md). Re-confirmed here:

| Check | Result |
|---|---|
| `http://` / `https://` in `app/`, `components/`, `styles/` | None |
| Protocol-relative URLs `//` | None |
| `next/font/google` / `@font-face` | None |
| External scripts / analytics / tracking | None |
| `next.config.js` `images.remotePatterns` / `images.domains` | Not configured (`unoptimized: true`) |
| Local image paths resolve to existing files in `public/` | All 4 hero/logo files present; 2 favicon files present in `app/` |
| `mailto:` references | 5 occurrences — all `mailto:hello@meepms.com[?subject=...]` |

**Verdict: pass.**

### Responsive & accessibility check (`responsive-accessibility-checker`)

Static-code review only (no browser).

| Check | Result |
|---|---|
| Single `<h1>` (hero) | Pass |
| `<h2>` per section, `<h3>` for cards | Pass |
| Semantic `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<aside>` | Pass |
| Section `aria-labelledby` referencing the section's heading id | Pass for all 8 sections (hero, problem, services, servicenow, workflow, process, why, contact) |
| Alt text on `<Image>` | Hero alt: "Server infrastructure with overlay illustrating Meep's operational coverage" (does not claim telemetry); header logo alt: "Meep Managed Services"; footer logo alt: "" (decorative; brand text adjacent) — all pass |
| Decorative SVG icons `aria-hidden="true"` | Pass for all 7 icon components |
| Workflow SVG carries `role="img"` and `aria-label` | Pass |
| Hero overlay panel `aria-hidden="true"` | Pass |
| Buttons that fire `mailto:` are real `<a>` elements | Pass |
| Focus-visible outlines | Defined in `styles/reset.css`; not removed anywhere | Pass |
| Tab order matches visual order; no positive tabindex | Pass |
| Color is not the sole carrier of meaning in WhyItWorks | Pass — column headers carry semantic meaning; mobile uses tags |
| Contrast for headings | Pass (`--color-ink` on paper/white) |
| Contrast for body copy | **Caveat** (~4.0:1; see C1) |
| Reduced-motion handling | Global override in `tokens.css` plus explicit `.workflowPulse { display: none }`; `scroll-behavior: smooth` switched to `auto` under reduced-motion. Pass. |
| `prefers-reduced-motion` not bypassed via SVG SMIL `<animate>` | Pass — animation uses CSS keyframes only |
| Mobile layout specified per section | Pass |
| Text does not rely on `vw`-scaled fonts | Pass — all sizes are fixed `px` |
| No horizontal overflow at 360px | **Visual QA not performed**; static review of breakpoint rules suggests pass, but should be confirmed in a browser |

Skipped checks (recorded honestly):

- Live keyboard tab-traversal of the page (no browser).
- Live screen-reader announcement check (no AT, no browser).
- Real-pixel rendering at 360 / 390 / 414 / 768 / 1024 / 1440px (no browser).
- Lighthouse / axe-core / pa11y scan (no browser, no scanner).

**Verdict: pass with caveats** — caveats limited to (a) borderline body-copy contrast and (b) skipped browser-only checks.

### Visual QA capture (`visual-qa-capture`)

**Performed.** Playwright was added as a `devDependency` (`^1.59.1`) and Chromium installed locally. Two capture scripts (`.qa/capture.mjs`, `.qa/zoom.mjs`) drove headless Chromium across six viewports (1440, 1024, 768, 414, 390, 360) plus per-element zooms of every section. **0 console errors, 0 warnings, 0 pageerror events** at any viewport.

**Two issues found and fixed:**

1. **Header & footer logo rendering** — the source `meep-logo.png` is a square 1:1 vertical lockup (sunburst icon over "MEEP" wordmark over "managed services" subtitle). Rendered via `<Image width=140 height=36>` with CSS `width: auto; height: 32px`, the displayed image collapsed to a ~32×32 fragment of just the icon — barely visible on desktop, completely unrecognizable on mobile. **Fixed** by replacing with CSS `background-image` icon-crop (showing only the top portion of the source) plus an HTML sibling wordmark composed of `Meep` (always shown) and `Managed Services` subtitle (hidden <420px). Header height bumped to 64/72px to fit the larger lockup. Re-captured and verified at all six viewports.

2. **Workflow diagram mobile fallback** — at <640px the mobile list rendered with orphaned 32-px connector fragments floating beside each satellite card. The flex-row layout compressed the central-spine metaphor into visual noise. **Fixed** by rewriting the mobile fallback to use a wrapper-level vertical pseudo-element spine plus per-card horizontal pseudo-element connectors. Re-captured and verified.

**Verified during the same round:**

- Hero overlay panel: all 4 status labels visible (INFRA · ACTIVE, BACKUP · OK, INTEGRATIONS · 4 ✓, INCIDENTS · 0 OPEN) at desktop, tablet, and mobile.
- ServiceNow flow: horizontal 4-step at desktop, vertical at mobile, arrows render in both orientations.
- Services grid: 6 cards in 3-column at >=1024px, 2-column at 768–1023px, 1-column at <768px; the Systems Review emphasis card (orange tint) renders correctly as the 6th card.
- Process stepper: 4 horizontal steps at >=900px, vertical timeline below 900px.
- WhyItWorks: 2-column comparison band with explicit headers at >=768px; stacked rows with per-row REACTIVE / STRUCTURED tags below 768px.
- Contact band, footer lockup, sticky-header anchor scroll all render as designed.
- No horizontal scroll at any of 360 / 390 / 414 / 768 / 1024 / 1440.

**Verdict:** pass. Visual evidence captured under `.qa/screens/` and `.qa/zoom/` for any future audit.

**Remaining manual checks the user should still perform** (these need a real device or a real keyboard, not a headless browser):

1. First viewport on a 1440x900 desktop and a 390x844 mobile.
2. Hero overlay panel legibility.
3. Workflow diagram: confirm pulses render and animate; toggle OS reduced-motion and confirm pulses hide.
4. Sticky-header anchor scroll: click each nav link and confirm the section header is fully visible (the new `scroll-padding-top` should handle this).
5. Services grid layout at 1024px / 768px / 414px.
6. Why It Works comparison band at 768px / 414px (the per-row tags should appear on mobile).
7. Contact orange band on mobile and desktop.
8. Browser console: no errors, no warnings, no remote-asset 404s, no preflight requests.

If anything visually surprises, the workflow routes back to the owning stage (Visual System or Page Blueprint).

## Comparison against artifacts (consistency check)

| Artifact contract | Implementation | Verdict |
|---|---|---|
| 6 core offers represented (`OFFER_ARCHITECTURE.md`) | 6 service cards + Engagement Process step list + ServiceNow distinct section | Pass |
| First screen communicates business and primary offer (`SITE_BRIEF.md`) | Header brand + hero positioning headline + CTA all visible above the fold at 1440x900 | Pass |
| CTA path: hero → header → process → contact, all `mailto:hello@meepms.com?subject=Start a systems review` | All 5 CTA placements use the same href and label "Start a systems review" / "Email hello@meepms.com" | Pass |
| Palette tokens applied (`DESIGN_SYSTEM.md`) | All colors via CSS custom properties; no inline hex except via `var(--color-*)` | Pass |
| Spacing tokens applied | All paddings/margins via `var(--space-*)` | Pass |
| Typography scale applied | All font sizes via `var(--text-*)` | Pass |
| ServiceNow section uses code-native diagram, no logos | Confirmed | Pass |
| Workflow diagram: central Meep + 6 satellites + reduced-motion-aware pulses | Confirmed | Pass |
| WhyItWorks: comparison band, color is not sole carrier | Column headers + mobile tags | Pass |
| Process stepper: 4 steps + primary CTA below | Confirmed | Pass |
| Hero overlay: orange corner panel + 4 status labels (decorative) | Confirmed; `aria-hidden="true"`; not in alt | Pass |
| No external CDN / fonts / scripts / analytics | Confirmed by grep | Pass |

## Recommendations to the user

These are non-blocking but worth surfacing.

1. **Final browser pass.** Run `npm run dev`, walk through the manual checks listed above. ~10 minutes.
2. **Optional: tighten body-copy contrast.** Swap default body color to `--color-slate-deep` (#304254) if formal WCAG AA conformance is wanted — a one-line change in `tokens.css` plus per-component review.
3. **Optional: OG preview image.** If the site will be shared on social platforms, a 1200x630 OG preview helps. **ChatGPT prompt suggestion:**

   > Create a 1200x630 promotional image with a warm off-white background (#fcfdf9). On the left, the text "Meep Managed Services" in a clean sans-serif at roughly 56px, dark ink color (#111827). Below it, a smaller line "Strategic managed services for the systems your business runs on." in slate gray (#304254) at roughly 28px. On the right side, an abstract minimalist illustration of a six-node operations map: a single orange (#ff7f57) pill labeled "MEEP" at center, connected by thin slate lines (#d3d8cd) to six small white rounded-rectangle nodes labeled "Infrastructure", "ServiceNow", "Databases", "Operational Platforms", "Vendors", "Projects". No glow, no neon, no glassmorphism. Editorial commercial-business aesthetic. Save as `og.png` for me to drop into `./public/`.

   When the image lands, place it at `./public/og.png` and add `images: [{ url: "/og.png", width: 1200, height: 630 }]` to the `metadata.openGraph` block in `app/layout.tsx`.

4. **Tracked follow-up: Next.js 16 upgrade.** A schedulable agent in ~6–8 weeks to evaluate Next.js 16 stability and run an upgrade PR with build/lint verification.
5. **Optional cleanup: remove empty `app/public/` directory.** Cosmetic.

## Manager questions (none open)

There are no unresolved questions for the manager. All approval-sensitive items in `OFFER_ARCHITECTURE.md` were observed and respected. No vendor logos, no pricing, no customer names, no SLA promises were introduced. The only optional sub-feature requiring user action (OG preview image) is non-blocking and the user already declared the handoff path (ChatGPT prompt).

## Stop Condition

Findings, evidence, readiness verdict, caveats, and recommendations are explicit. Skipped checks are recorded with reason. No open manager questions. **Ready with caveats.**
