import Image from "next/image";
import styles from "./Hero.module.css";

const CTA_HREF = "/systems-review";

export default function Hero() {
  return (
    <section id="overview" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <Image
            src="/meep-logo.png"
            alt="Meep Managed Services"
            width={140}
            height={140}
            priority
            className={styles.brandMark}
          />
          <h1 id="hero-heading" className={styles.heading}>
            Strategic managed services for the systems your business runs on.
          </h1>
          <p className={styles.sub}>
            Architecture-level ownership, operational support, and implementation
            expertise for the platforms, data, integrations, and workflows your
            business relies on every day.
          </p>
          <div className={styles.ctas}>
            <a href={CTA_HREF} className={styles.ctaPrimary}>
              Start a systems review
            </a>
            <a href="#services" className={styles.ctaSecondary}>
              Explore services
            </a>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.imageWrap}>
            <Image
              src="/hero-infrastructure-2400.jpg"
              alt="Server infrastructure with overlay illustrating Meep's operational coverage"
              width={1600}
              height={1280}
              sizes="(max-width: 767px) 100vw, 50vw"
              priority
              className={styles.image}
            />
            <div className={styles.fade} aria-hidden="true" />
            <div className={styles.overlay} aria-hidden="true">
              <span className={styles.overlayStrip} />
              <ul className={styles.overlayList}>
                <li>INFRA · ACTIVE</li>
                <li>BACKUP · OK</li>
                <li>INTEGRATIONS · 4 ✓</li>
                <li>INCIDENTS · 0 OPEN</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
