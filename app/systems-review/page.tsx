import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageSection from "@/components/PageSection";
import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Start a systems review — Meep Managed Services",
  description:
    "A structured review of your operational systems, vendors, integrations, and capacity gaps. Bounded scope, sequenced output.",
};

const STEPS = [
  {
    title: "Structured environment review",
    body: "We map the operational systems, integrations, and vendor relationships you actually run on. Bounded interview-and-document scope, no surprise discovery rabbit holes.",
  },
  {
    title: "Ownership and vendor map",
    body: "We name who owns what, where escalation paths break, and where capacity gaps live. The result is something concrete you can hand to leadership.",
  },
  {
    title: "Stabilization and implementation priorities",
    body: "We sequence the work — what to stabilize first, what to implement next, and what can wait. Each priority has a rationale and a rough effort band.",
  },
  {
    title: "Reserved capacity and managed services",
    body: "If the engagement continues, we move into reserved technical capacity for ongoing administration, projects, or both. The review is the basis for scope, not the commitment.",
  },
];

const EXPECT = [
  "A bounded interview process — no open-ended discovery without scope.",
  "Source-of-truth artifacts: an inventory, a vendor map, and a sequenced priority plan.",
  "Honest reads on what your team can absorb internally vs. what benefits from outside hands.",
  "A clear handoff at the end, whether the engagement continues or not.",
];

export default function SystemsReviewPage() {
  return (
    <PageShell
      eyebrow="Systems review"
      title="A structured review of the systems your business runs on."
      intro="Most engagements with Meep start here. Bounded scope, sequenced output, and a plan you can act on with or without us."
      crumbs={[{ label: "Start a systems review" }]}
    >
      <PageSection variant="white">
        <div className={styles.layout}>
          <div className={styles.copy}>
            <h2 className={styles.heading}>How the review works</h2>
            <ol className={styles.steps}>
              {STEPS.map((s, idx) => (
                <li key={idx} className={styles.step}>
                  <span className={styles.badge} aria-hidden="true">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className={styles.stepHeading}>{s.title}</h3>
                    <p className={styles.stepBody}>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className={styles.heading}>What to expect</h2>
            <ul className={styles.expect}>
              {EXPECT.map((e, idx) => (
                <li key={idx}>{e}</li>
              ))}
            </ul>
          </div>

          <div className={styles.formWrap}>
            <ContactForm
              heading="Tell us about your environment"
              intent="Systems review"
              placeholder="Which platforms, vendors, or recurring issues are on your mind right now?"
            />
            <p className={styles.fineprint}>
              Or email <a href="mailto:hello@meepms.com?subject=Start%20a%20systems%20review">
              hello@meepms.com
              </a> if you&rsquo;d rather skip the form.
            </p>
          </div>
        </div>
      </PageSection>
    </PageShell>
  );
}
