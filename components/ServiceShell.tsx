import type { ReactNode } from "react";
import PageShell from "./PageShell";
import PageSection from "./PageSection";
import styles from "./ServiceShell.module.css";

type CTA = { label: string; href: string };

export default function ServiceShell({
  eyebrow,
  title,
  intro,
  crumbs,
  notAuthorizedNote,
  what,
  approach,
  whatItIsnt,
  subPages,
  primaryCta,
  secondaryCta,
  whoFor,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  crumbs?: { label: string; href?: string }[];
  notAuthorizedNote?: string;
  what: { heading: string; items: string[] };
  approach?: { heading: string; items: string[] };
  whatItIsnt?: { heading: string; items: string[] };
  subPages?: { label: string; href: string; note: string }[];
  primaryCta?: CTA;
  secondaryCta?: CTA;
  whoFor?: { heading: string; items: string[] };
}) {
  return (
    <PageShell
      eyebrow={eyebrow}
      title={title}
      intro={intro}
      note={notAuthorizedNote}
      crumbs={crumbs}
    >
      {subPages && subPages.length ? (
        <PageSection variant="white">
          <div className={styles.head}>
            <p className={styles.eyebrow}>Sub-areas</p>
            <h2 className={styles.heading}>What this category includes.</h2>
          </div>
          <ul className={styles.subPages}>
            {subPages.map((s) => (
              <li key={s.href}>
                <a href={s.href} className={styles.subPageCard}>
                  <span className={styles.subPageLabel}>{s.label}</span>
                  <span className={styles.subPageNote}>{s.note}</span>
                  <span className={styles.subPageArrow} aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        </PageSection>
      ) : null}

      <PageSection variant={subPages && subPages.length ? "paper" : "white"}>
        <div className={styles.head}>
          <p className={styles.eyebrow}>{what.heading}</p>
          <h2 className={styles.heading}>What we actually do.</h2>
        </div>
        <ul className={styles.bullets}>
          {what.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </PageSection>

      {approach ? (
        <PageSection variant="white">
          <div className={styles.head}>
            <p className={styles.eyebrow}>{approach.heading}</p>
            <h2 className={styles.heading}>How we work the engagement.</h2>
          </div>
          <ul className={styles.bullets}>
            {approach.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </PageSection>
      ) : null}

      {whoFor ? (
        <PageSection variant="paper">
          <div className={styles.head}>
            <p className={styles.eyebrow}>{whoFor.heading}</p>
            <h2 className={styles.heading}>When this engagement fits.</h2>
          </div>
          <ul className={styles.bullets}>
            {whoFor.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </PageSection>
      ) : null}

      {whatItIsnt ? (
        <PageSection variant="white">
          <div className={styles.head}>
            <p className={styles.eyebrow}>{whatItIsnt.heading}</p>
            <h2 className={styles.heading}>What this engagement isn&rsquo;t.</h2>
          </div>
          <ul className={styles.bulletsCaution}>
            {whatItIsnt.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </PageSection>
      ) : null}

      <PageSection variant="tint">
        <div className={styles.cta}>
          <h2 className={styles.ctaHeading}>Want to see whether we&rsquo;re a fit?</h2>
          <p className={styles.ctaBody}>
            Most engagements with Meep start with a structured systems review &mdash;
            bounded scope, sequenced output, and a plan you can act on with or
            without us.
          </p>
          <div className={styles.ctaActions}>
            <a
              href={primaryCta?.href || "/systems-review"}
              className={styles.ctaPrimary}
            >
              {primaryCta?.label || "Start a systems review"}
            </a>
            <a
              href={secondaryCta?.href || "/contact"}
              className={styles.ctaSecondary}
            >
              {secondaryCta?.label || "Or just say hello"}
            </a>
          </div>
        </div>
      </PageSection>
    </PageShell>
  );
}
