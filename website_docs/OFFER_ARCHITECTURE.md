# Offer Architecture — MeepMS Commercial Website

Owner stage: 2 Offer Architecture.
Status: Ready for Visual System.
Skill applied: `commercial-claim-sanitizer` (table at bottom).
Inputs read: `SITE_BRIEF.md`, `ASSET_REGISTER.md`, `flyers/marketing-copy.md`, `flyers/marketing-copy-strategic.md`, `flyers/flyer-copy-redraft.md`, `flyers/flyer-copy-stability.md`, `flyers/star-services.md`, `MEEP_SITE_REDESIGN_PLAN.md`.

## Primary Buyer Problem

A medium-size regional business runs critical operations through a mix of specialized platforms (dispatch, document management, telematics, reporting, phone), supports them with a small internal IT team, and coordinates multiple vendors directly. Issues recur not because effort is missing but because **capacity** is — no one person can keep deep expertise across every platform, every integration, and every vendor relationship simultaneously. The result is a system that is technically supported but not operationally managed.

## Commercial Positioning

Meep Managed Services takes architecture-level ownership of the operational systems behind a regional business — the platforms, data, integrations, access, reporting, and workflows — and provides ongoing capacity plus implementation work as one accountable technical partner. Not a help desk. Not a single-product reseller. A team that manages the environment as one operational system.

## Core Offers

Each offer below appears on the site as a card. Each has a one-line headline, a 2-3 sentence description, and a list of 3-5 grounded support items. None publish customer names, pricing, or contract terms.

### 1. Managed Infrastructure

**Headline:** Architecture-level ownership of business-critical systems.

**Description:** Continuous administration, monitoring, and incident response for the platforms, servers, and integrations your operation runs on. Backed by runbooks and structured oversight rather than ticket-by-ticket reaction.

**What's included:**
- System administration ownership across servers, environments, and access controls
- Monitoring and proactive issue prevention
- Incident response with documented runbooks
- Backup oversight and recovery readiness
- Architectural review and tuning as operational needs evolve

### 2. Operational Platform Support

**Headline:** Practical support for the specialized platforms your operation depends on.

**Description:** Hands-on access, configuration, troubleshooting, and vendor coordination for the platforms that drive daily execution — dispatch, document management, telematics, phone, and other operational systems.

**Platforms supported (representative; not an exhaustive list):**
- Dispatch and fuel-management platforms (TMW Suite, Fuel Dispatch family)
- Document management (DocuWare and equivalents)
- Telematics and fleet platforms (Samsara and equivalents)
- Business phone systems
- Other specialized operational platforms in scope by engagement

**What's included:**
- Access control administration
- Server setup, configuration, and ongoing tuning
- Troubleshooting and ongoing support
- Direct vendor interaction and escalation

### 3. Data, Reporting & Integrations

**Headline:** Make the data your business already produces actually usable.

**Description:** Administration and development across SQL Server, reporting services, EDI workflows, and the integrations that move data between operational systems. The objective is reporting that decision-makers can rely on and integrations that survive vendor changes.

**What's included:**
- Microsoft SQL Server administration (TMW, DocuWare, and adjacent environments by engagement)
- SQL Server Reporting Services administration and report development
- EDI reporting development, management, and trading-partner coordination
- Operational reporting development and access management
- Integration review, support, and remediation

### 4. ServiceNow Implementations

**Headline:** ServiceNow shaped to how your business actually operates.

**Description:** Discovery, workflow design, configuration, integrations, and adoption support for ServiceNow ITSM and related modules. The implementation is built around your operations — workflows, data, roles, integrations, and reporting — not around generic out-of-box defaults.

**What's included:**
- Discovery and workflow design grounded in current operations
- ITSM and service-catalog implementation
- Configuration, integrations, reporting, and dashboards
- Adoption support and post-launch improvement

**Positioning copy block (use verbatim in section header):**
> ServiceNow succeeds when the workflows, data, roles, integrations, and reporting are designed around how the business actually operates.

### 5. Project & Specialized Support

**Headline:** Project capacity for the work that doesn't fit recurring support.

**Description:** Software development, migrations, reporting builds, architecture changes, and specialized vendor escalations — delivered as bounded projects alongside the ongoing engagement.

**What's included:**
- Software development for operational tools and integrations
- System migrations and platform consolidations
- Reporting builds and dashboard development
- Architecture changes that exceed routine administration
- Specialized vendor escalation when first-line vendor support stalls

### 6. Systems Review (Lead-In Offer / Primary CTA)

**Headline:** A structured review of your systems, vendors, workflows, and capacity gaps.

**Description:** A bounded engagement that maps the current operational environment, names the systems and vendor relationships, identifies capacity gaps and stabilization priorities, and produces a sequenced plan. Most engagements with Meep start here.

**What's included:**
- Inventory of operational systems, integrations, and vendor relationships
- Mapping of ownership, escalation paths, and capacity gaps
- Stabilization and implementation priorities
- A sequenced plan with options for ongoing managed services or project-based execution

## CTA Strategy

### Primary CTA

**Action:** Email `hello@meepms.com` with subject "Start a systems review".
**Label (everywhere):** "Start a systems review"
**Targets:** Hero, ServiceNow section, Engagement Process section, Contact / Close.

### Secondary CTA

**Action:** Anchor scroll to `#services` (the Commercial Offers grid).
**Label:** "Explore services"
**Target:** Hero only.

### Header CTA

**Action:** `mailto:hello@meepms.com`.
**Label:** "Contact" or "hello@meepms.com" (Stage 4 picks one for visual balance).

### What CTAs explicitly do **not** include

- No phone number (none has been authorized for publication).
- No web form (out of scope; the buyer profile reads email better than a form for v1).
- No calendar booking link / Calendly / etc. (would require external tooling).
- No live chat / Intercom / etc. (would require external tooling).
- No newsletter signup (no newsletter exists).

## Information Hierarchy

Top-to-bottom on the single home route. Each section's role is named so Stage 4 can structure the blueprint without re-deriving intent.

| # | Section | Role | Offers Mapped |
|---|---|---|---|
| 1 | Header | Persistent nav + CTA | Header CTA only |
| 2 | Hero | Establish positioning in first 10 seconds | Primary CTA + Secondary CTA |
| 3 | Problem / Context | Name the capacity-vs-effort framing | none directly; sets up offers |
| 4 | Commercial Offers | The six offers in a 3x2 grid (or stacked on mobile) | Offers 1–5 (Systems Review handled separately at section 7) |
| 5 | ServiceNow | Distinct visibility for the ServiceNow implementation offer | Offer 4 (deep-dive) |
| 6 | Workflow / Operating Layer | Visual: central Meep node + connected systems | Visual support for Offer 1, 2, 3 |
| 7 | Engagement Process | How a structured review starts | Offer 6 (Systems Review) — with primary CTA |
| 8 | Why It Works | Reactive support vs structured management — buyer outcomes | All offers, indirectly |
| 9 | Contact / Close | Email CTA + short trust note | Primary CTA |
| 10 | Footer | Copyright, legal-light, link to email | Header CTA echoed |

The first screen (above the fold on a 1440x900 desktop and on a 390x844 mobile) covers Header + Hero. The hero must communicate the business model on its own without scroll.

## Proof Basis

The site is informational, not testimonial. Proof comes from **specificity** rather than from numbers, names, or logos:

- Naming the actual platforms supported (TMW, Fuel Dispatch, DocuWare, Samsara, SQL Server, SSRS, EDI, ServiceNow) shows category fluency.
- Naming the actual layers covered (architecture, administration, integrations, reporting, vendor coordination) shows that the engagement model is real, not slogan.
- The Engagement Process section converts the model into a concrete sequence a buyer can recognize.
- The Why It Works section frames buyer outcomes without claiming uptime numbers, response times, or customer counts.

## Prohibited Claims (binding for Stages 3–6)

The following may **not** appear in copy or imagery without explicit user approval recorded back to this artifact:

- Customer names or any identifying customer detail (Star Transport, Big Star Trucking, individual contacts from `orders/order1.tex`, or any other named customer).
- Pricing in any form: hourly rate, weekly hours, monthly fee, project minimum, retainer amount.
- Contract thresholds, liability caps, payment terms, or any clause from any order or master agreement.
- Legal entity language ("Meep Managed Systems", "a Kansas corporation", "S-corp", any reference to incorporation or tax status).
- Numeric SLAs (response time, resolution time, uptime percentages, MTTR) — none have been supplied as authorized for publication.
- Headcount, years in business, customer count, total contract value, revenue, or any financial metric.
- Vendor partnership claims ("ServiceNow partner", "Trimble partner", "Samsara partner", "Microsoft partner") — none authorized.
- Vendor certification claims ("certified administrator", "certified developer", "MCSE", "ServiceNow CSA/CIS") — none authorized.
- Vendor logos or licensed marks (TMW, Trimble, Trimble Transportation, DocuWare, Samsara, ServiceNow, Microsoft, etc.).
- Client testimonials or case-study outcomes — none authorized.

## Approval-Sensitive Items (escalate before publishing)

These would be useful but require explicit user approval:

- **Public pricing model.** The flyer copy publishes "20 hours per week" and "$160/hr". The redesign plan defaults to NOT publishing pricing. **Default for v1: hide pricing.** If the user asks to publish a pricing line, route back to this artifact and re-sanitize.
- **24/7 availability framing.** Flyer-stability copy says "24/7 system availability support." V1 should phrase this as an *offering shape* attached to the Managed Infrastructure card ("around-the-clock availability coverage when contracted") rather than as a SLA promise on the site itself. **Approved framing for v1 — does not require user re-approval unless changed.**
- **OG preview image and Twitter card.** Optional. Default off. If the user wants social previews, generate a 1200x630 OG image with logo and headline; per the user's preference, hand off a ChatGPT prompt rather than generating locally.

## Allowed Specific References

These are explicitly safe per the source materials:

- Public brand: "Meep Managed Services" / "MeepMS"
- Public contact: `hello@meepms.com`
- Platform names as **neutral text references** (no logos, no partnership claim): TMW Suite, Fuel Dispatch, DocuWare, Samsara, ServiceNow, Microsoft SQL Server, SQL Server Reporting Services (SSRS), EDI
- Service categories already published in flyers: Managed Infrastructure, Operational Platform Support, Data/Reporting/Integrations, ServiceNow Implementations, Project & Specialized Support, Systems Review

## Hero Copy (Approved Final)

**Headline (primary):** Strategic managed services for the systems your business runs on.

**Headline (alternative, Stage 3 picks based on visual balance):** Critical systems deserve intentional management.

**Supporting copy:** Meep Managed Services provides architecture-level ownership, operational support, and implementation expertise for the platforms, data, integrations, and workflows your business relies on every day.

**CTA row:** "Start a systems review" (primary) | "Explore services" (secondary, anchor to `#services`)

## Problem / Context Copy (Approved Final)

**Section heading:** The challenge isn't effort. It's capacity.

**Body (left column, narrative):** Critical operational systems usually sit on top of stretched internal teams and a rotating set of vendor relationships. The result is recurring issues whose root cause is rarely effort or skill — it's that no single person can hold deep expertise across every platform, every integration, and every escalation path simultaneously. Systems get technically supported but not operationally managed.

**Body (right column, diagnostic list, header "Where systems strain"):**
- Critical platforms supported by one or two internal staff stretched across everything
- Recurring issues whose root cause is unclear ownership or unmanaged vendor relationships
- Reporting and data workflows that grow brittle as integrations accumulate
- Implementation work that stalls because day-to-day operations consume the team
- Vendor coordination overhead that grows faster than operational maturity

## Why It Works Copy (Approved Final)

**Section heading:** Reactive support vs. structured management.

Two-column comparison band. Left column "Reactive support", right column "Structured management with Meep". Each row is a buyer outcome, not a Meep-action.

| Reactive support | Structured management with Meep |
|---|---|
| Tickets escalate from system to system without a single owner | One accountable technical partner across the operational environment |
| Recurring issues; root cause is rarely addressed | Architecture-level ownership reduces recurring issues over time |
| Vendor coordination consumes internal staff time | Vendor escalation handled directly; internal team focuses on operations |
| Reporting and integrations grow brittle as platforms accumulate | Reporting and integrations managed as one connected system |
| Project work waits because operations consume the team | Project capacity available alongside ongoing managed services |
| ServiceNow stays at out-of-box defaults | ServiceNow shaped to how the business actually runs |

## Engagement Process Copy (Approved Final)

**Section heading:** How an engagement starts.

Four numbered steps, horizontal stepper on desktop, stacked timeline on mobile.

1. **Structured environment review.** A bounded review of operational systems, integrations, and vendor relationships.
2. **Ownership and vendor map.** Clear picture of who owns what, where escalation paths break, and where capacity gaps live.
3. **Stabilization and implementation priorities.** A sequenced plan with options.
4. **Reserved capacity and managed services.** Ongoing engagement with project capacity available.

**CTA (anchored to step 1):** Start a systems review → `mailto:hello@meepms.com?subject=Start%20a%20systems%20review`.

## Workflow / Operating Layer Section

This section is primarily visual — Stage 3 owns the design, Stage 4 owns the layout, Stage 5 builds it. From an offer-architecture perspective, the visual must communicate three things and only three:

1. Meep sits in the middle as a single accountable technical partner.
2. Connected nodes show what Meep manages: Infrastructure, ServiceNow, Databases & Reporting, Operational Platforms, Vendor Coordination, Project Capacity.
3. The connections suggest **flow** between nodes (data, escalation, decisions) — not a static org chart.

**Section copy (above the diagram):** One operational layer across the systems your business runs on.

## ServiceNow Section Copy (Approved Final)

**Section heading:** ServiceNow, shaped to how your business actually operates.

**Lead paragraph:** ServiceNow succeeds when the workflows, data, roles, integrations, and reporting are designed around how the business actually operates. We approach ServiceNow as an implementation and modernization engagement — discovery first, then configuration, integrations, and reporting that match the operations underneath.

**Four content blocks (cards within the section):**
- **Discovery and workflow design** — current-state mapping of operations, ownership, and the workflows that need to move into ServiceNow.
- **ITSM and service-catalog implementation** — incident, request, problem, change, and a service catalog grounded in the business's actual service offerings.
- **Configuration, integrations, and reporting** — fields, forms, business rules, integrations to operational platforms, and dashboards that decision-makers can use.
- **Adoption support and post-launch improvement** — the work after go-live that determines whether the platform actually changes operations.

**Visual constraint:** Use a code-native workflow diagram (boxes/arrows in inline SVG/CSS). **Do not use ServiceNow logos or marks.**

## Contact / Close Copy (Approved Final)

**Section heading:** Start with a structured review.

**Body:** A structured review of your systems, vendors, workflows, and support gaps gives both sides a clear basis for an ongoing engagement. Most Meep engagements start there.

**CTA:** Email `hello@meepms.com` to start a systems review.

**Trust note (small, italic, single line under CTA):** *For teams that rely on critical platforms, infrastructure, ServiceNow workflows, reporting, and integrations.*

## Claim Sanitizer Result

| # | Claim | Class | Decision |
|---|---|---|---|
| 1 | "architecture-level ownership of business-critical systems" | grounded — published in `flyers/marketing-copy-strategic.md` and `flyers/flyer-copy-redraft.md` | keep |
| 2 | "operational platform support for TMW, DocuWare, Samsara, phone systems" | grounded — `flyers/marketing-copy.md`, `flyers/star-services.md` | keep (text only, no logos) |
| 3 | "Microsoft SQL Server, SSRS, EDI" support | grounded — `flyers/star-services.md` | keep (text only, no Microsoft logo) |
| 4 | "ServiceNow implementations: ITSM, configuration, integrations, reporting, adoption" | inferred but reasonable — redesign plan promotes ServiceNow to a distinct offer; flyers do not foreground it but do not contradict it. **No vendor partnership implied.** | keep with no logo, no partnership claim |
| 5 | "20 hours per week initial engagement" | private/contract-specific *as published number* | **remove from site**; the offering shape (recurring engagement + project capacity) stays |
| 6 | "$160/hr project rate" | pricing-specific | **remove from site** |
| 7 | "24/7 system availability support" | inferred but reasonable as *offering shape*; risky as *site-wide promise* | keep, reframed as "around-the-clock availability coverage when contracted" attached to the Managed Infrastructure card |
| 8 | Customer references (Star Transport, Big Star Trucking, named contacts) | private/customer-specific | **remove**; never publish |
| 9 | Legal entity ("Meep Managed Systems, Kansas corporation") | legal/contract-specific | **remove**; site uses public brand "Meep Managed Services" only |
| 10 | "We reduce avoidable licensing cost" (from `marketing-copy-strategic.md`) | inferred but reasonable; specific licensing-reduction claim is risky | keep at the conceptual level (Why It Works framing) but do not promise dollar savings |
| 11 | "Vendor coordination and direct escalation" | grounded | keep |
| 12 | Specific response-time / resolution-time SLA numbers | unsupported | **do not introduce** |
| 13 | Customer count, years in business, headcount | unsupported | **do not introduce** |
| 14 | "Strong fit for medium-size regional businesses" | grounded — `flyers/marketing-copy-strategic.md` | keep, used in the audience copy / trust note |
| 15 | Any vendor logo or licensed mark | licensed-mark sensitive | **do not use** |
| 16 | "Single accountable technical partner" | grounded — repeated across flyers | keep |
| 17 | "Project capacity for software development, migrations, reporting builds" | grounded — flyers + order form scope | keep |
| 18 | "Reduce operational costs" | inferred but reasonable; specific dollar numbers prohibited | keep at the conceptual level |
| 19 | "Better operational continuity" | grounded — flyer copy | keep |
| 20 | Email contact `hello@meepms.com` | grounded — redesign plan | keep |

## Known Issues (carry into Stage 3)

1. **Hero headline choice between two options.** Stage 3 picks based on visual balance with the chosen hero image and overlay treatment.
2. **Pricing publication is opt-in.** Default is hidden. If the user requests pricing on-site, route back here to re-sanitize.
3. **Service icons must be code-native (inline SVG/CSS).** Stage 3 (Visual System) defines the icon vocabulary; Stage 4 (Blueprint) places them; Stage 5 (Build) implements them. **No icon-font CDN.**
4. **Workflow diagram is content + visual.** Offer-architecture has named the three things it must communicate; Stage 3 designs the visual treatment within the no-dark-neon constraint.
5. **No customer testimonials, no case studies, no logos for v1.** If the business adds approved testimonials later, route back to this artifact.

## Stop Condition Met

Offers, claims, CTA path, proof basis, prohibited claims, approval-sensitive items, and unresolved commercial questions are explicit. Claim-sanitizer table covers every material claim. Ready to hand off to Stage 3 Visual System.
