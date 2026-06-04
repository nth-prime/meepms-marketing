# Site Brief — MeepMS Commercial Website

Owner stage: 1 Site Intake.
Status: Ready for Offer Architecture.
Pinned workflow: `commercial-website-workflow@v1`.

## Requested Outcome

Replace the current Canva-style export (`site/examples/original_meep.html`) with a self-contained Next.js commercial website that positions Meep Managed Services as a strategic technical partner for medium-size regional businesses with critical operational systems. Keep the existing warm off-white + orange/coral + slate-blue palette. Improve layout, hierarchy, content structure, responsiveness, and perceived product maturity. Preserve the original HTML file untouched.

## Business

- Public-facing brand: **Meep Managed Services** (used throughout marketing copy and the existing site).
- Legal entity (per `orders/order1.tex`, line 42): "Meep Managed Systems" — Kansas corporation. **Not for publication.** Public copy uses "Meep Managed Services" / "MeepMS".
- Public contact: `hello@meepms.com` (per redesign plan; existing site uses the same).
- Internal/legal contact: `legal@meepms.com` — internal use, do not publish on a marketing site.

## Audience

- Decision-makers at medium-size regional businesses (operations-heavy: dispatch/logistics, regional services, multi-location operations).
- Buyers evaluating ongoing support for critical IT systems where downtime affects daily operations.
- Buyers who currently coordinate multiple specialized vendors and want a single accountable technical partner.
- Buyers who have outgrown basic help-desk support but cannot justify a full internal infrastructure team.

## Business Goal of the Site

Communicate the Meep model — architecture-level ownership of critical operational systems plus implementation capacity — clearly enough in the first 10 seconds that an operations executive can decide whether to start a structured systems review. The site is informational and credible; it is not a SaaS product page and is not a lead-gen funnel beyond the email CTA.

## Core Offers (extracted from source materials)

Confirmed from flyers and order form (publishable):

1. **Managed Infrastructure** — monitoring, administration ownership, runbooks, backup oversight, incident response, system-health work.
2. **Operational Platform Support** — TMW Suite / Fuel Dispatch, DocuWare, Samsara, phone systems, specialized business platforms. Support includes access control, server config, troubleshooting, vendor escalation.
3. **Data, Reporting & Integrations** — Microsoft SQL Server, SSRS, EDI reporting, operational data workflows, integration review and support.
4. **ServiceNow Implementations** — ITSM/workflow design, implementation, configuration, integrations, reporting, adoption support. Distinct implementation/modernization offer.
5. **Project & Specialized Support** — migrations, software development, reporting builds, architecture changes, vendor escalation. Per-hour basis.
6. **Systems Review** — initial structured review of systems, risks, vendor relationships, capacity gaps, and stabilization priorities. Primary CTA path.

## Target Output

- Next.js site, **App Router preferred** (project will be scaffolded under `./app/` per the existing empty `app/` placeholder; no current `package.json` is present).
- Single primary commercial route at `/` (home).
- Local assets only, copied into `./public/`.
- Project-supported validation via `npm run build` and lint where configured.

## Constraints

### Self-contained-site (binding)

- No external CDNs, third-party fonts, analytics, tracking, or remote scripts.
- No remote images or `images.remotePatterns` entries in `next.config.*`.
- Allowed external URL: `mailto:hello@meepms.com`.
- System font stack only.

### Preservation

- `site/examples/original_meep.html` is preserved verbatim. Do not move, edit, or delete.
- `flyers/`, `orders/`, `site/examples/animations/`, `site/examples/inspirations/`, `MEEP_SITE_REDESIGN_PLAN.md` are all read-only inputs.
- Animation HTML files are inspiration only — adapt the workflow-node concept; do not lift the dark neon glassmorphism.

### Claim-safety (binding for Stage 2)

- **Do not publish** customer names from `orders/order1.tex`: Star Transport, L.L.C. / Big Star Trucking / individual contacts.
- **Do not publish** pricing from `orders/order1.tex` or per-hour rates from flyers ($160/hr, 20 hours/week) without explicit user approval.
- **Do not publish** contract thresholds, liability caps, payment terms, or any clause from `orders/order1.tex`.
- **Do not publish** legal entity language ("Meep Managed Systems, a Kansas corporation").
- **Do not** imply official partnership, certification, or licensed-mark relationship with TMW, Trimble, Trimble Transportation, DocuWare, Samsara, ServiceNow, or Microsoft.
- **Do not use** vendor logos (TMW, DocuWare, Samsara, ServiceNow, Microsoft, etc.) — only neutral text references to the platforms supported.
- **Do not invent** response-time SLAs, uptime numbers, customer counts, years-in-business, or case-study outcomes.

The flyer copy at `flyers/flyer-copy-stability.md` references "24/7 system availability support" — this language is allowed only if reframed as the offer (we provide 24/7 availability support coverage when contracted) rather than as an SLA promise of the marketing site itself.

### Brand & Visual Direction

- Keep palette from current site: warm off-white (`#fcfdf9`), white, orange (`#ff7f57`), strong orange (`#fc6b22`), ink (`#111827`), slate copy (`#677a8e`), deep slate (`#304254`), soft line (`#e8ebe4`).
- System fonts only; suggested stack: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- Light-theme workflow diagram: adapt the central-Meep-node-with-spokes idea from `site/examples/animations/`. Reject dark neon styling.
- Local hero image: `hero-infrastructure-2400.jpg` (with a controlled crop and restrained orange overlay panel).
- No generated images for this increment unless a gap appears during build (per redesign plan section "Image Plan").

### Project / Stack

- Project root: `c:\Users\njgsk\OneDrive\repositories\meepms\marketing\` (the directory leased to `commercial-website-workflow@v1`).
- No `package.json` present yet — Stage 5 site builder will need to scaffold a Next.js app structure (App Router) at the project root. **User approval already covered by lease step "creating or using a Next.js project is in scope because the user selected Next.js" (per workflow CLAUDE.md, Approval Boundaries).** Destructive overwrites still require approval.
- An empty `app/public/` directory pre-exists. The Stage 5 builder should treat that as latent and use root-level `app/` and `public/` per Next.js App Router convention; relocate or remove `app/public/` only with caution.

## Audience-Buyer Mental Model

The buyer has:
- One or more business-critical operational platforms (dispatch, document management, telematics, phone, reporting).
- A small internal IT team or single internal IT lead, stretched thin.
- Multiple vendor relationships that they coordinate themselves.
- A pattern of recurring issues whose root cause is capacity, not effort.

The site must show the buyer that their problem (capacity, not effort) is named, understood, and solvable through architecture-level ownership rather than another break-fix vendor.

## Information Hierarchy (high-level, refined in Stage 4)

1. Header with nav and primary CTA.
2. Hero with positioning headline + supporting copy + dual CTA.
3. Problem / Context — name the capacity-vs-effort framing.
4. Commercial offers — the six offers above.
5. ServiceNow implementation section — distinct visibility.
6. Workflow / operating layer — light-theme adapted diagram.
7. Engagement process — how a structured review starts.
8. Why It Works — converting support claims into buyer outcomes.
9. Contact / close — email CTA + short trust note.

## Inferred Facts (labeled)

- *Inferred*: the current site is treated by the user as a Canva-style export. The redesign plan describes it that way; the source HTML structure is not yet read in full but the redesign plan is treated as the canonical brief.
- *Inferred*: ServiceNow has independent commercial weight per the redesign plan. Source flyers do not always foreground it; the redesign plan promotes it to a distinct section.
- *Inferred*: regional/medium-size focus per `flyers/marketing-copy-strategic.md`. Confirmed by order form scope (regional trucking customer) but the explicit-customer detail is not for publication.

## Known Issues (carry into downstream stages)

1. **Legal-entity vs brand**: "Meep Managed Services" is the public brand; "Meep Managed Systems" is the legal entity. Site uses public brand only. (Resolved by intake; flagged so future edits do not reintroduce the legal entity name into copy.)
2. **Pricing publication**: The 20-hour weekly engagement model and $160/hr project rate appear in published flyer copy but the user's redesign plan says "do not expose contract-specific pricing... unless the business explicitly wants those published." Default for site v1: **do not publish dollar amounts.** Stage 2 must confirm this stance and route to user if a pricing mention is desired.
3. **Vendor-name reference vs licensed-mark**: Flyer copy lists vendor product names (TMW, DocuWare, Samsara, ServiceNow, SSRS). Stage 2 will treat these as neutral platform references. No vendor logos and no claim of partnership.
4. **24/7 phrasing**: Flyer-stability draft promises 24/7 availability support; the new site will frame this as an *offering shape* rather than an SLA promise to all visitors.
5. **No package.json**: Project is empty of Next.js scaffolding. Stage 5 will scaffold App Router. No dev-server start, no deploy, no `npm install` of non-Next packages without approval.
6. **Inspiration file `site/examples/inspirations/DESIGN_PLAN.md` is unrelated** — it is a CaptiView KC sales-deck handoff from a different project. Not used as inspiration for this site.
7. **Animations are HTML inspiration only** — `meepms_flow_animation*.html` files use dark-themed glassmorphism. The redesign plan rejects that style; only the workflow-node/system-paths idea is adapted.
8. **Existing `app/public/` empty placeholder** — its presence may indicate a prior attempt; treat as latent and rebuild cleanly under root `app/` and `public/` per App Router convention.
9. **Generated imagery (operations-map, OG preview)** — listed as optional in the redesign plan. **Default off**. Surface to user only if a gap appears during build.

## Out of Scope (explicit)

- SEO strategy and search-console wiring.
- Multi-page content governance (this is a single-page commercial site for v1).
- Analytics, tracking, A/B testing, marketing automation, CMS integration.
- Live deployment, hosting, DNS, TLS — out of scope unless explicitly authorized.
- Browser automation / Playwright / Puppeteer (not available in this environment).
- AI image generation (not requested for v1; surface as recommendation only if a gap appears).

## Stop Condition Met

Brief contains: business identity, audience, business goal, core offers, target output, constraints, claim-safety boundaries, inferred facts labeled, and unresolved issues surfaced in `Known Issues`. Asset register is populated separately. Ready to hand off to Stage 2 Offer Architecture.
