# Design System — MeepMS Commercial Website

Owner stage: 3 Visual System.
Status: Ready for Page Blueprint.
Inputs read: `SITE_BRIEF.md`, `ASSET_REGISTER.md`, `OFFER_ARCHITECTURE.md`, `MEEP_SITE_REDESIGN_PLAN.md`, `site/examples/animations/*.html` (sampled for adapt/reject decisions).

This system is intentionally narrow. Its job is to make the site implementable in Next.js by a single builder without the builder inventing visual direction.

## 1. Brand Constraints (carried from intake)

- Public brand: Meep Managed Services / MeepMS.
- Existing palette is good and is kept (warm off-white, orange/coral accents, slate-blue copy).
- Logo is supplied; logotype-only header, no wordmark recreation.
- Buyer mindset is operational executive evaluating a credible technical partner — not a SaaS-product visitor. Visual system reads commercial-business, not product-marketing.

## 2. Color Tokens

All colors are CSS custom properties in `:root` so the builder can apply them without hand-rolling hexes through the codebase.

```
--color-paper:        #fcfdf9   /* page background, warm off-white */
--color-white:        #ffffff   /* card backgrounds, header surface */
--color-orange:       #ff7f57   /* primary brand accent, CTA fill, hero overlay */
--color-orange-deep:  #fc6b22   /* hover state on orange CTA, strong-emphasis accents */
--color-orange-tint:  #fff1ea   /* very faint orange wash for occasional surface tint */
--color-ink:          #111827   /* primary heading text */
--color-slate-copy:   #677a8e   /* body copy default */
--color-slate-deep:   #304254   /* secondary headings, comparison-band labels */
--color-line:         #e8ebe4   /* hairline dividers, card borders */
--color-line-strong:  #d3d8cd   /* slightly stronger divider when contrast is needed */
--color-success:      #2f855a   /* reserved; used only for "structured management" column in Why It Works if needed */
--color-warn:         #b45309   /* reserved; not used in v1 */
```

### Contrast rules (applied during build)

- Body copy on paper: `--color-slate-copy` (#677a8e) on #fcfdf9 — measured ratio ~4.0:1. **Use only at 16px+ regular weight or 14px+ medium weight.** Smaller fine-print in slate-copy is disallowed; small text drops to `--color-slate-deep`.
- Headings on paper: `--color-ink` (#111827) — high contrast.
- Body copy on white card: `--color-slate-copy` on #ffffff — slightly higher ratio than on paper; passes for body sizes.
- CTA: white text on `--color-orange` — ratio ~3.0:1, **acceptable for large 16px+ bold button text only**. Small orange-on-white text is disallowed (use `--color-orange-deep` instead, which has higher contrast).
- "Reactive support" column header in Why It Works uses `--color-slate-deep`; the contrast band is structural, not a positive/negative color split — no red/green semantics.

### What's not used (rejected from inspirations)

- No dark theme. The animation HTMLs use a near-black background; rejected per redesign plan.
- No glassmorphism (blurred translucent panels over a backdrop). Rejected — reads "consumer SaaS" rather than "commercial services".
- No neon glow or strong saturation pulses. Rejected — same reason.
- No additional accent colors (purple, teal, sage). The existing palette is sufficient.

## 3. Typography

System fonts only (binding from intake — no `next/font` Google import, no font CDN, no font self-host either since system stack is sufficient).

### Stack

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
             "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas,
             "Liberation Mono", monospace;
```

`Inter` appears first because most modern macOS/Windows/Linux installs ship it or have it via the OS UI fonts. If absent, the cascade falls to system UI fonts seamlessly. **Do not include `@font-face` or any `next/font` import.**

### Scale

Mobile-first; desktop sizes apply at `min-width: 768px`.

| Token | Mobile | Desktop | Weight | Line height | Use |
|---|---|---|---|---|---|
| `--text-h1` | 32px | 44px | 600 | 1.15 | Hero headline only |
| `--text-h2` | 24px | 30px | 600 | 1.20 | Section headings |
| `--text-h3` | 18px | 20px | 600 | 1.30 | Card / sub-section headings |
| `--text-eyebrow` | 12px | 12px | 600 | 1.30 | Section eyebrow caps; `letter-spacing: 0.08em`; uppercase |
| `--text-body-l` | 17px | 18px | 400 | 1.55 | Hero supporting copy, intro paragraphs |
| `--text-body` | 16px | 16px | 400 | 1.6 | Default body copy |
| `--text-body-s` | 14px | 14px | 400 | 1.5 | Card list items, fine-print, footer |
| `--text-mono-s` | 13px | 13px | 500 | 1.4 | Reserved for code-native diagram labels only |

**Letter-spacing rule:** the only place letter-spacing is used is on uppercase eyebrows (0.08em). Headings get default tracking. Hero headline gets `-0.01em` only at desktop; mobile is default.

**Maximum measure (line length):** body-copy paragraphs are capped at 64 characters via `max-width: 64ch`. Two-column sections relax to ~52ch per column.

## 4. Spacing & Layout

### Spacing scale (8-px grid)

```
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-5:   24px
--space-6:   32px
--space-8:   48px
--space-10:  64px
--space-12:  80px
--space-16:  112px
```

Section vertical padding (top/bottom): `--space-12` mobile, `--space-16` desktop. Hero: `--space-10` mobile, `--space-16` desktop. Header bar height: ~64px desktop, ~56px mobile.

### Container

```
--container-max:     1180px   /* matches redesign plan */
--container-padding: 20px (mobile) / 32px (>=768px) / 48px (>=1280px)
```

All sections use the container. No section reaches edge-to-edge except the hero overlay panel (which extends the orange corner inside its own container clip).

### Grid

- Hero: 1 column mobile (image-below-copy at <768px), 12-col grid desktop with copy taking 6/12 and hero visual taking 6/12 with the orange overlay panel.
- Problem / Context: 1 column mobile, 7/12 narrative + 5/12 diagnostic list desktop.
- Commercial Offers: 1 column mobile, 2 columns at >=768px, 3 columns at >=1024px (3x2 grid).
- ServiceNow section: 4 cards at desktop (2x2), stacked at mobile.
- Workflow / Operating Layer: full-width section, central node, 6 connected satellite nodes — laid out as a single SVG that scales fluidly. On mobile (<640px), the diagram becomes a vertical list with hairline connectors instead of a radial layout.
- Engagement Process: horizontal stepper (4 columns) at >=900px, stacked timeline (vertical) below 900px.
- Why It Works: 2 columns at >=768px (Reactive | Structured), stacked at <768px.
- Contact / Close: full-width band, centered content, max 720px.

### Section bands (no nested cards)

The page uses **alternating section surfaces** instead of nested cards:

- `paper` (default): `--color-paper`
- `white` (cards-on-paper sections): `--color-white` background for the section container
- `tint` (one section gets a faint orange tint): `--color-orange-tint`

Recommended pattern (Stage 4 confirms placement):
- Header: white
- Hero: paper, with orange overlay corner inside the hero visual
- Problem / Context: paper
- Commercial Offers: white
- ServiceNow: paper
- Workflow: white
- Engagement Process: paper
- Why It Works: white (or paper with comparison band background tint)
- Contact / Close: orange band (white text on `--color-orange`)
- Footer: paper

## 5. Component Style

### Buttons

```
.btn-primary
  background: --color-orange
  color: white
  padding: 14px 22px (desktop), 12px 18px (mobile)
  border-radius: 8px
  font: 16px / 600 weight
  hover: background --color-orange-deep + 1px lift (translateY -1px)
  focus-visible: 2px outline at --color-ink, offset 2px
  reduced-motion: no transform on hover

.btn-secondary
  background: transparent
  color: --color-ink
  border: 1px solid --color-line-strong
  padding: same as primary
  border-radius: 8px
  hover: background --color-orange-tint, border --color-orange
  reduced-motion: no transition

.btn-ghost-link  (used inline: "Explore services →")
  background: transparent
  color: --color-orange-deep
  border: none
  underline on hover
```

### Cards

```
.card-service / .card-step / .card-servicenow
  background: --color-white
  border: 1px solid --color-line
  border-radius: 12px
  padding: 24px (mobile) / 28px (desktop)
  box-shadow: 0 1px 2px rgba(17, 24, 39, 0.04)
  hover (only on cards that act as anchors): box-shadow 0 6px 16px rgba(17, 24, 39, 0.06), translateY(-2px)
  reduced-motion: no transform, no shadow change
  inside: --text-h3 heading, --text-body-s description, list items at --text-body-s
  no-nesting rule: a card never contains another card
```

Service-card icon area: 40x40 inline SVG block, top-left, `--color-orange` stroke at 1.75px, no fill, rounded line caps. Stage 4 picks the icon for each card from the vocabulary in §8 below.

### Header

- Sticky (`position: sticky; top: 0`), light shadow appears on scroll past 8px (CSS custom property toggled via small intersection or scroll handler — server-rendered first, hydrated only if a client component is justified; default to no-shadow + visible bottom hairline rather than hydrating purely for shadow).
- Background: `--color-white`.
- Bottom border: 1px `--color-line`.
- Logo: 32px tall mobile, 36px tall desktop.
- Nav: 5 links (Overview, Services, ServiceNow, Process, Contact) — anchor links to `#sections` on the home page.
- Right side: primary CTA button "Start a systems review" linking to `mailto:hello@meepms.com?subject=Start%20a%20systems%20review` (this is the same as Hero primary CTA — same target, same label).
- Mobile (<768px): nav links collapse into a non-JS solution — show only the CTA on the right and the logo on the left. **No hamburger menu in v1.** The page is one route; section anchors are reached via scrolling, and the section eyebrows are visually large enough to act as in-page nav. (Stage 4 confirms this UX trade.)

### Footer

- Background: `--color-paper`
- Top border: 1px `--color-line`
- Padding: 48px top/bottom desktop, 32px mobile
- Content: small logo, copyright line "© 2026 Meep Managed Services", contact line "hello@meepms.com" as `mailto:`, optional small "Built for teams that rely on critical platforms" trust line
- No social icons (none authorized)
- No legal links (privacy / terms) for v1 — none authored, and the site does not collect personal data

## 6. Image Treatment

### Hero image

Source: `./public/hero-infrastructure-{800,1600,2400}.jpg` (copies of `site/examples/images/meep-image-kit/media/hero-infrastructure-*.jpg`).

Treatment:
- Cropped to a roughly 5:4 aspect ratio at desktop, 4:3 at mobile.
- A `--color-orange` corner panel sits on the top-left or bottom-right of the image (Stage 4 picks orientation), occupying ~22% of the image area. The panel carries small operational status labels in `--text-body-s` and uses inline SVG hairlines to suggest "system paths".
- 3-4 "operational status" labels inside the orange panel, e.g.:
  - `INFRA · ACTIVE`
  - `BACKUP · OK`
  - `INTEGRATIONS · 4 ✓`
  - `INCIDENTS · 0 OPEN`

  These labels are illustrative — they are **not real telemetry**. They communicate "we manage this" visually. **Stage 5 must include alt-text that does not claim live telemetry.**
- A subtle gradient ramp from `rgba(17,24,39,0.18)` at the bottom-right corner of the image fades upward to `0` to keep text legible if any text overlays the image.
- No motion on the hero image. No parallax. No Ken Burns.

`<picture>` element with `srcset` of all three sizes, `sizes` set so mobile picks 800, tablet 1600, desktop and HiDPI 2400. `loading="eager"` for the hero (above the fold); `fetchpriority="high"`.

### Service-card icons

All icons are inline SVG, authored as React components. **No icon-font CDN.** Vocabulary in §8.

### Workflow / Operating Layer diagram

Single inline SVG. Stage 4 specifies the layout; Stage 3 specifies the visual:
- Central node: pill-shaped, `--color-orange` fill, white text "Meep". 56px tall.
- Satellite nodes: 6 rounded-rect cards, `--color-white` background, 1px `--color-line` border, `--color-ink` text, 12px font on label, 14px label on title.
- Connectors: 1.5px stroke at `--color-line-strong`, with a 4px-radius corner where they bend.
- One pulse animation per connector (~3.5s loop), implemented as a 6-pixel `--color-orange` dot moving along the path. Animation respects `@media (prefers-reduced-motion: reduce)` and is hidden in that case (the static layout still reads as a system map).

### ServiceNow code-native workflow diagram

Inline SVG, simpler than the operating layer:
- 4 boxes in a horizontal flow at desktop (Discovery → Implementation → Configuration → Adoption).
- Boxes are rounded rectangles, `--color-white`, 1px `--color-line` border, ink text.
- Arrows are 1.5px `--color-orange-deep` strokes with a 6px arrowhead.
- At mobile, the flow becomes vertical with arrows pointing down.
- **No ServiceNow logos. No vendor marks.**

### Generated imagery

None for v1. If a gap appears (e.g., OG preview), surface a ChatGPT-ready prompt to the user per the project's image-handoff convention. Do not generate locally.

## 7. Motion

### Allowed motion

- Subtle 250ms ease transitions on button hover (background color, border color, transform translateY -1px).
- 350ms ease transition on card hover (box-shadow + translateY).
- Workflow diagram: 3.5s linear infinite path-pulse, looped, on each connector. Stagger by 0.5s between connectors so they don't pulse in unison.
- 200ms color transition on text-link hover.

### Disallowed motion

- No scroll-driven animations.
- No cursor-follow effects.
- No parallax.
- No autoplaying entrance animations on section reveal.
- No carousel / slider components.
- No accordion-on-load.
- No video, GIF, or APNG.

### Reduced-motion handling

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
  /* Workflow diagram pulses are hidden entirely so the static map is the only state. */
  .workflow-pulse { display: none; }
}
```

This is binding. The pulse animation must use a class that can be hidden via `prefers-reduced-motion: reduce` cleanly; do not implement pulses with inline SVG `<animate>` elements that ignore the media query.

## 8. Icon Vocabulary (inline SVG, code-native)

Six service icons, each a 40x40 viewport, 1.75px stroke at `--color-orange`, rounded line caps, no fill:

| Card | Icon concept | Composition |
|---|---|---|
| Managed Infrastructure | Server stack | Two horizontal slabs (top/bottom) with 3 small dots on each slab |
| Operational Platform Support | Connected modules | Three small rounded squares connected by lines |
| Data, Reporting & Integrations | Database with arrows | Cylinder shape (two ellipses + parallel sides) with two arrows in/out |
| ServiceNow Implementations | Workflow circle | Circle with a rotational arrow + 4 small nodes around the circumference |
| Project & Specialized Support | Toolbox / wrench | Open box with a wrench shape across it |
| Systems Review | Magnifier over grid | 3x3 small dots grid behind a circle with a handle |

Stage 5 implements these as React components in `./components/icons/`. Each is a pure SVG element with `aria-hidden="true"` (since adjacent text labels carry the meaning) and inherits stroke color from CSS.

Workflow / operating-layer satellite icons share the same icon vocabulary, scaled down to 24x24.

## 9. Accessibility & Responsive Constraints

- Semantic HTML required: `<header>`, `<main>`, `<section>` (with `aria-labelledby` referring to the section heading id), `<nav>`, `<footer>`. Headings are a strict outline: one `<h1>` (hero), `<h2>` per section, `<h3>` per card.
- All `<img>` tags have `alt` attributes. Decorative SVG icons use `aria-hidden="true"` and have no `<title>`. Meaningful imagery (hero) has alt that describes the subject without claiming live telemetry: e.g., `alt="Server-room infrastructure with overlay illustrating Meep's operational ownership"`.
- Buttons that fire `mailto:` use `<a>` (real link) with `class="btn-primary"`, not `<button>`. Buttons that perform on-page actions use `<button>`. No `<div role="button">`.
- Focus-visible outlines required on all interactive elements: 2px solid `--color-ink`, offset 2px, no outline-removal anywhere.
- Tab order matches visual order; no `tabindex` greater than 0.
- Mobile breakpoints: 360px, 390px, 414px, 768px, 1024px, 1280px, 1440px tested in static-code review. Single-page horizontal scroll prohibited at all breakpoints.
- Text never relies on viewport-scaled font sizing (no `vw`-based fonts that overflow).
- Color is never the sole carrier of meaning. The Why It Works comparison band is labeled by column heading, not just by color.

## 10. Self-Contained Asset Policy (binding)

- All images live under `./public/`. **No remote images.** **No `next.config.js` `images.remotePatterns`.**
- No external font load: no `@font-face`, no `<link rel="stylesheet" href="https://fonts.googleapis.com/...">`, no `next/font/google`. System stack only.
- No external script: no GA, no Plausible, no Vercel Analytics, no Sentry, no chat widget.
- No CDN-hosted icon library. Icons are inline SVG.
- No external stylesheets via `<link>`. CSS lives in the project (`./styles/` or CSS Modules / Tailwind colocated, depending on what Stage 5 picks).
- Allowed: `mailto:hello@meepms.com`, `mailto:hello@meepms.com?subject=Start%20a%20systems%20review`. Nothing else.

## 11. Adapted vs Rejected From Inspirations

Source: `site/examples/animations/meepms_flow_animation.html`, `meepms_flow_animation (1).html`, `meepms_flow_animation (2).html`.

| Idea from inspiration | Decision | Reason |
|---|---|---|
| Central Meep node with connected satellite system nodes | **Adapt** | Communicates the offer architecture's core message of one operational layer |
| Connector path pulses | **Adapt at low intensity, light theme** | Adds the suggestion of flow without screaming "consumer SaaS" |
| Dark near-black background | **Reject** | Brand is warm off-white + orange; dark theme is a different brand |
| Neon glow / saturated cyan/purple accents | **Reject** | Off-brand; would undermine credibility for the operational-executive buyer |
| Glassmorphism (blurred translucent panels) | **Reject** | Reads consumer SaaS, not commercial services |
| Cursor-follow / mouse parallax | **Reject** | Distracts from informational reading mode |
| Floating particles | **Reject** | Visual noise, no informational value |
| Status-label chips with green dots | **Adapt** for the hero overlay only, with `--color-orange` accent rather than green | Communicates "we manage this" without misleading as live telemetry |

## 12. Validation Checklist (used by Stage 4 page-completeness-checker and Stage 6 red team)

A correct implementation must:

- Use only the tokens defined in §2 — no arbitrary hex values inline.
- Use only the typography scale in §3 — no arbitrary px sizes inline.
- Use only the spacing scale in §4 — no magic-number paddings.
- Place all text on backgrounds that satisfy the contrast rules in §2.
- Render correctly at 360px width with no horizontal scroll.
- Pass `prefers-reduced-motion: reduce` cleanly (no animation, no pulse).
- Include exactly one `<h1>`.
- Include alt text on the hero image and any other content image.
- Have `focus-visible` outlines on every interactive element.
- Reference no external URLs other than `mailto:hello@meepms.com[…]`.

## 13. Known Issues (carry into Stage 4)

1. **Header CTA on mobile (<768px) trade-off.** No hamburger nav in v1; section anchors are not exposed on mobile in the header. This is intentional but Stage 4 should confirm the section-eyebrow visual hierarchy is strong enough to substitute, or propose a non-JS disclosure pattern.
2. **Sticky-header shadow on scroll.** Default to no-shadow (purely static `position: sticky` with a hairline border) to avoid hydrating just for shadow. If Stage 4 wants the scroll-shadow effect, plan a small client component scoped to the header only.
3. **Workflow diagram on very narrow viewports (<360px).** Specified as a stacked vertical list at <640px; very narrow widths may still need testing during Stage 6 visual QA. **Caveat-recordable.**
4. **OG preview image.** Not included in v1. If desired, surface a ChatGPT-ready prompt for a 1200x630 image with the logo and headline (the user generates).
5. **Aside on Tailwind vs CSS Modules.** No project preference is set. Stage 5 picks based on whatever approach lets the system above ship cleanly without external dependencies. **Tailwind requires a build step but no remote dependency at runtime.** **CSS Modules ship with Next.js out of the box.** Either is acceptable; default to **CSS Modules + a small `tokens.css`** to minimize moving parts.

## Stop Condition Met

Palette, typography, spacing, layout grid, image treatment, icon style, component style, motion rules, accessibility constraints, and self-contained asset policy are explicit. Adapted-vs-rejected inspiration decisions are recorded. Ready to hand off to Stage 4 Page Blueprint.
