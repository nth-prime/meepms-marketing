import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageSection from "@/components/PageSection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About — Meep Managed Services",
  description:
    "Senior IT practitioners with deep operational experience. Based in Kansas City, Missouri.",
};

const PRINCIPLES = [
  {
    heading: "Architecture before tickets",
    body: "Recurring issues usually come from a missing owner, not a missing ticket. We start by mapping the environment so day-to-day work has somewhere to land.",
  },
  {
    heading: "Specificity over slogans",
    body: "We name the systems, the vendors, and the integrations we work in. If we haven't run something in production, we say so before we agree to support it.",
  },
  {
    heading: "Bounded engagements, durable handoff",
    body: "Every engagement has a stop condition and a written record. If you decide to bring the work back in-house, you don't need us to read the documentation to you.",
  },
  {
    heading: "Operational fluency",
    body: "Dispatch, document management, telematics, reporting — we treat operational platforms as part of the production environment, not an afterthought to the help desk.",
  },
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Senior IT practitioners for the systems your business runs on."
      intro="Meep Managed Services is a Kansas City–based managed-services and consulting firm. We work with regional businesses whose operations sit on top of specialized platforms — and whose internal IT teams are stretched across more systems than any one person can specialize in."
      crumbs={[{ label: "About" }]}
    >
      <PageSection variant="white">
        <div className={styles.intro}>
          <h2 className={styles.heading}>Who we work with</h2>
          <p className={styles.body}>
            Medium-size regional businesses running mission-critical operational
            systems &mdash; dispatch and fuel, document management, telematics,
            reporting, ServiceNow, SQL Server, EDI, and the integrations that
            connect them. Buyers who have outgrown break-fix support and need a
            partner that understands how the environment fits together.
          </p>
          <p className={styles.body}>
            We are not authorized resellers, official partners, or certified
            implementors of any vendor platform. We are practitioners who have
            run these systems in production, written the runbooks, and handled
            the escalations &mdash; and we say so plainly rather than implying
            credentials we don&rsquo;t hold.
          </p>
        </div>
      </PageSection>

      <PageSection variant="paper">
        <div className={styles.principles}>
          <h2 className={styles.heading}>How we work</h2>
          <ul className={styles.principleList}>
            {PRINCIPLES.map((p, idx) => (
              <li key={idx} className={styles.principle}>
                <h3 className={styles.principleHeading}>{p.heading}</h3>
                <p className={styles.principleBody}>{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </PageSection>

      <PageSection variant="white">
        <div className={styles.locationBlock}>
          <div className={styles.locationCopy}>
            <p className={styles.eyebrow}>Where to find us</p>
            <h2 className={styles.heading}>Kansas City, Missouri.</h2>
            <p className={styles.body}>
              Our office sits at <strong>12th &amp; Wyandotte</strong> in
              downtown Kansas City. We work primarily with regional clients
              across the Midwest and remote-first beyond that. Most engagements
              run on calls and shared documentation; periodic on-site time is
              available for clients in the metro and within practical drive
              range.
            </p>
            <dl className={styles.address}>
              <div>
                <dt>Office</dt>
                <dd>
                  12th &amp; Wyandotte
                  <br />
                  Kansas City, Missouri
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:hello@meepms.com">hello@meepms.com</a>
                </dd>
              </div>
            </dl>
          </div>
          <figure
            className={styles.locationVisual}
            aria-label="Office location near 12th and Wyandotte, downtown Kansas City, Missouri"
          >
            <div className={styles.mapPlaceholder} aria-hidden="true">
              <svg
                viewBox="0 0 540 400"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label=""
              >
                <rect width="540" height="400" fill="var(--color-paper)" />

                {/* block fills — light tint for every block in the grid */}
                {(() => {
                  const xs = [60, 150, 240, 330, 420, 510];
                  const ys = [70, 145, 220, 295, 370];
                  const rects: JSX.Element[] = [];
                  for (let r = 0; r < ys.length - 1; r++) {
                    for (let c = 0; c < xs.length - 1; c++) {
                      rects.push(
                        <rect
                          key={`b-${r}-${c}`}
                          x={xs[c] + 3}
                          y={ys[r] + 3}
                          width={xs[c + 1] - xs[c] - 6}
                          height={ys[r + 1] - ys[r] - 6}
                          fill="var(--color-line)"
                          opacity="0.35"
                        />
                      );
                    }
                  }
                  return rects;
                })()}

                {/* E-W streets (horizontal). 12th drawn slightly thicker. */}
                <line x1="20" y1="70" x2="520" y2="70" stroke="var(--color-line-strong)" strokeWidth="1.25" />
                <line x1="20" y1="145" x2="520" y2="145" stroke="var(--color-line-strong)" strokeWidth="1.25" />
                <line x1="20" y1="220" x2="520" y2="220" stroke="var(--color-line-strong)" strokeWidth="2.25" />
                <line x1="20" y1="295" x2="520" y2="295" stroke="var(--color-line-strong)" strokeWidth="1.25" />
                <line x1="20" y1="370" x2="520" y2="370" stroke="var(--color-line-strong)" strokeWidth="1.25" />

                {/* N-S streets (vertical). Main drawn slightly thicker. */}
                <line x1="60" y1="40" x2="60" y2="385" stroke="var(--color-line-strong)" strokeWidth="1.25" />
                <line x1="150" y1="40" x2="150" y2="385" stroke="var(--color-line-strong)" strokeWidth="1.25" />
                <line x1="240" y1="40" x2="240" y2="385" stroke="var(--color-line-strong)" strokeWidth="1.25" />
                <line x1="330" y1="40" x2="330" y2="385" stroke="var(--color-line-strong)" strokeWidth="2.25" />
                <line x1="420" y1="40" x2="420" y2="385" stroke="var(--color-line-strong)" strokeWidth="1.25" />
                <line x1="510" y1="40" x2="510" y2="385" stroke="var(--color-line-strong)" strokeWidth="1.25" />

                {/* N-S street labels along the top */}
                {[
                  { x: 60, label: "BROADWAY" },
                  { x: 150, label: "BALTIMORE" },
                  { x: 240, label: "WYANDOTTE" },
                  { x: 330, label: "MAIN" },
                  { x: 420, label: "WALNUT" },
                  { x: 510, label: "GRAND" },
                ].map((s) => (
                  <text
                    key={s.label}
                    x={s.x}
                    y={26}
                    fontSize="10"
                    fontFamily="var(--font-sans)"
                    fontWeight="600"
                    letterSpacing="0.06em"
                    fill="var(--color-slate-deep)"
                    textAnchor="middle"
                  >
                    {s.label}
                  </text>
                ))}

                {/* E-W street labels down the left */}
                {[
                  { y: 70, label: "9TH" },
                  { y: 145, label: "11TH" },
                  { y: 220, label: "12TH" },
                  { y: 295, label: "13TH" },
                  { y: 370, label: "14TH" },
                ].map((s) => (
                  <text
                    key={s.label}
                    x={14}
                    y={s.y + 4}
                    fontSize="10"
                    fontFamily="var(--font-sans)"
                    fontWeight="600"
                    letterSpacing="0.06em"
                    fill="var(--color-slate-deep)"
                  >
                    {s.label}
                  </text>
                ))}

                {/* marker at 12th & Wyandotte (240, 220) */}
                <circle cx="240" cy="220" r="22" fill="var(--color-orange)" opacity="0.18" />
                <circle cx="240" cy="220" r="11" fill="var(--color-orange)" />
                <circle cx="240" cy="220" r="4" fill="var(--color-white)" />

                {/* north arrow */}
                <g transform="translate(498, 50)">
                  <circle r="14" fill="var(--color-white)" stroke="var(--color-line-strong)" strokeWidth="1" />
                  <polygon
                    points="0,-8 4,4 0,1 -4,4"
                    fill="var(--color-orange-deep)"
                  />
                  <text
                    y={9}
                    fontSize="8"
                    fontWeight="700"
                    fontFamily="var(--font-sans)"
                    fill="var(--color-slate-deep)"
                    textAnchor="middle"
                  >
                    N
                  </text>
                </g>
              </svg>
            </div>
            <figcaption className={styles.mapCaption}>
              Schematic of downtown Kansas City, Missouri &mdash; office at 12th
              &amp; Wyandotte. Not to scale.
            </figcaption>
          </figure>
        </div>
      </PageSection>

      <PageSection variant="tint">
        <div className={styles.cta}>
          <h2 className={styles.ctaHeading}>
            Want to see whether we&rsquo;re a fit for your environment?
          </h2>
          <p className={styles.ctaBody}>
            Most engagements start with a structured systems review &mdash; bounded
            scope, sequenced output, and a plan you can act on with or without
            us.
          </p>
          <div className={styles.ctaActions}>
            <a href="/systems-review" className={styles.ctaPrimary}>
              Start a systems review
            </a>
            <a href="/contact" className={styles.ctaSecondary}>
              Or just say hello
            </a>
          </div>
        </div>
      </PageSection>
    </PageShell>
  );
}
