# Asset Register — MeepMS Commercial Website

Owner stage: 1 Site Intake.
Skill applied: `local-asset-inventory` (canonical at `factory_floor/commercial-website-workflow/skills/local-asset-inventory/SKILL.md`).
Source root: `./site/examples/images/meep-image-kit/`.

## Inventory

### Logos (`./site/examples/images/meep-image-kit/logo/`)

| File | Bytes | Likely Use | Notes |
|---|---|---|---|
| `meep-logo-source.png` | 169,010 | Primary source logo. Use for highest-fidelity needs (hero/header large render). | Dimensions unknown — measure during Stage 5 if needed. |
| `meep-logo-transparent.png` | 231,365 | Header logo on warm off-white background; OG/favicon source if a PNG-on-paper composite is built. | Transparent background, suitable for any background tint. |
| `meep-logo-cropped.png` | 241,294 | Tight crop variant; usable in compact headers. | Lower priority unless dimensions are friendlier than transparent variant. |

### Hero & Marketing Imagery (`./site/examples/images/meep-image-kit/media/`)

| File | Bytes | Likely Use | Notes |
|---|---|---|---|
| `hero-infrastructure-2400.jpg` | 658,477 | Hero, desktop large viewport. **Plan-recommended hero.** | Apply orange-corner-panel + thin system-path overlay per redesign plan; do not present raw. |
| `hero-infrastructure-1600.jpg` | 217,894 | Hero, desktop standard viewport (1.5x mobile). | Use in `<picture>` srcset with 800/1600/2400 stops. |
| `hero-infrastructure-800.jpg` | 60,516 | Hero, mobile viewport. | Smallest; safe for mobile-first responsive image. |
| `meep-logo-canvas-2000.png` | 169,010 | Logo on canvas (paper background already baked in). Reserve for OG / social preview. | Same byte count as `logo/meep-logo-source.png` — possibly identical content; verify before deduping. |
| `meep-logo-canvas-1600.png` | 154,684 | Logo on canvas, standard. Reserve for OG / social preview at 1200x630 if cropped. | |
| `meep-logo-canvas-800.png` | 51,301 | Logo on canvas, small. | |
| `secondary-image-a-1024.png` | 166,080 | Secondary marketing image (subject unknown without inspection). | Classify after visual inspection if Stage 4 wants a second hero/process image. |
| `secondary-image-a-800.png` | 122,761 | Secondary marketing image, mobile size. | Pair with `-1024.png`. |
| `secondary-image-b-1024.png` | 144,165 | Secondary marketing image B. | Subject unknown without inspection. |
| `secondary-image-b-800.png` | 110,086 | Secondary marketing image B, mobile. | |

### Favicons (`./site/examples/images/meep-image-kit/favicons/`)

| File | Bytes | Likely Use | Notes |
|---|---|---|---|
| `apple-touch-icon-180.png` | 6,245 | iOS home-screen icon (180x180 by convention). | Reference via `<link rel="apple-touch-icon">` or App Router `apple-icon.png` convention. |
| `icon-192.png` | 8,017 | Android/PWA icon (192x192). | Reference via `<link rel="icon" sizes="192x192">` or App Router `icon.png` convention. |
| `favicon-shortcut.png` | 721 | Small favicon (32x32-ish by file size). | Reference via `<link rel="icon">` or App Router `favicon.ico`/`icon.png` convention. |

### Manifest / Metadata (`./site/examples/images/meep-image-kit/`)

| File | Likely Use | Notes |
|---|---|---|
| `manifest.csv` | Internal asset manifest from the original export pipeline. | Reference only; do not ship. |
| `downloaded-assets.json` | Internal asset manifest. | Reference only; do not ship. |

## Stage-5 Asset-Placement Plan (proposed; Stage 4 confirms)

Copy local assets into `./public/` under stable names. Proposed layout:

```
./public/
  meep-logo.png                       <- copy of meep-image-kit/logo/meep-logo-transparent.png
  hero-infrastructure-800.jpg         <- mobile hero
  hero-infrastructure-1600.jpg        <- desktop hero
  hero-infrastructure-2400.jpg        <- 2x/desktop-xl hero
  apple-icon.png                      <- copy of favicons/apple-touch-icon-180.png (App Router convention)
  icon.png                            <- copy of favicons/icon-192.png (App Router convention)
  favicon.ico                         <- generated from favicons/favicon-shortcut.png if conversion is local-tool feasible; otherwise use icon.png as the metadata icon
```

Site builder must copy (not symlink) these from the immutable `site/examples/images/meep-image-kit/` source so the source export is preserved untouched.

## Missing References / Gaps

- **No `original_meep.html` asset audit yet** — the file references images by path; a Stage 4 audit (or Stage 5 prebuild check) should confirm whether the existing site references any image not enumerated above. None have been confirmed missing yet. The redesign plan does not depend on additional images.
- **No SVG icons in the kit** — all delivered icons are raster (favicons). The redesign plan calls for inline SVG/CSS service icons; Stage 5 will author these as code-native primitives, not raster downloads.
- **No OG preview at 1200x630 specifically** — `meep-logo-canvas-2000.png` is the closest source. Stage 4 should decide whether a 1200x630 OG image is wanted; if so, the redesign plan flags it as a candidate for generated imagery (escalate to user before generating).
- **No font files** — the redesign plan mandates system fonts only. No font assets are required and none are present.
- **No video, no manifest.json (PWA), no robots.txt, no sitemap.xml** — none required for v1; not gaps.

## External Reference Audit

Per the self-contained-site rule: no external assets are needed. Sources of potential external dependency to watch for during Stage 5:

- Next.js `next/font` Google import — **disallowed**; use system stack.
- Next.js `<Image>` `remotePatterns` — **disallowed**; only local `./public/` assets.
- CDN-hosted icon font (Font Awesome, Material Icons, Heroicons CDN) — **disallowed**; build inline SVG.
- Analytics scripts (GA, Plausible, Vercel Analytics) — **disallowed** for v1.

## Hard Rules (from `local-asset-inventory` skill)

- No assets were downloaded.
- No assets were generated.
- No missing file is presumed to exist; missing items are listed under "Missing References / Gaps".
- Dimensions marked **unknown** are not guessed — the kit ships filenames with size hints (`-800`, `-1024`, `-1600`, `-2000`, `-2400`) but exact pixel dimensions are not measured here. Stage 5 measures with a local tool only if needed.

## Stop Condition Met

Inventory is sufficient for Stage 4 to specify asset placement and for Stage 5 to copy assets into `./public/` with confidence. No external assets are needed for the planned design.
