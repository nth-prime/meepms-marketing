import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./PageShell.module.css";

type Crumb = { label: string; href?: string };

export default function PageShell({
  eyebrow,
  title,
  intro,
  note,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  note?: string;
  crumbs?: Crumb[];
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero} aria-labelledby="page-heading">
          <div className={styles.inner}>
            {crumbs && crumbs.length ? (
              <nav className={styles.crumbs} aria-label="Breadcrumb">
                <ol>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  {crumbs.map((c, idx) => (
                    <li key={idx}>
                      {c.href ? <a href={c.href}>{c.label}</a> : <span>{c.label}</span>}
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}
            {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
            <h1 id="page-heading" className={styles.heading}>
              {title}
            </h1>
            {intro ? <p className={styles.intro}>{intro}</p> : null}
            {note ? <p className={styles.note}>{note}</p> : null}
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </>
  );
}
