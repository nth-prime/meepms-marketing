import type { Metadata } from "next";
import ServiceShell from "@/components/ServiceShell";

export const metadata: Metadata = {
  title: "TMW Suite Consulting — Meep Managed Services",
  description:
    "TMW Suite implementation, integration, reporting design, and workflow tuning. Independent practitioners; not authorized partners.",
};

export default function TmwConsultingPage() {
  return (
    <ServiceShell
      eyebrow="Transportation Logistics"
      title="TMW Suite consulting for transportation operations."
      intro="Project-shaped engagements for TMW Suite environments — implementation, integration design, reporting buildouts, and operational workflow tuning. We work in production environments and write things down so the work survives us."
      crumbs={[
        { label: "Transportation Logistics", href: "/transportation-logistics" },
        { label: "TMW Suite Consulting" },
      ]}
      notAuthorizedNote="We are independent practitioners. Not authorized partners, certified resellers, or affiliated with Trimble or TMW."
      what={{
        heading: "What an engagement covers",
        items: [
          "Implementation review and remediation for environments that didn't land cleanly",
          "TMW Suite access control, role design, and security model",
          "SQL Server schema, index, backup, and recovery design for TMW databases",
          "Integration design between TMW, telematics, document management, and accounting",
          "EDI workflow development and trading-partner integration",
          "SSRS report design for dispatch, settlement, and operational reporting",
          "Workflow tuning — dispatch boards, freight bill flow, settlement, fuel reconciliation",
          "Migration planning and execution for upgrades or platform consolidations",
        ],
      }}
      approach={{
        heading: "How we run the engagement",
        items: [
          "Bounded scope with documented deliverables",
          "Coordinate with internal IT and operations rather than working around them",
          "Direct vendor escalation when something is the platform vendor's responsibility to resolve",
          "Documented hand-off — runbooks, integration maps, decision rationales",
          "Sequenced delivery: stabilize first, optimize second",
        ],
      }}
      whoFor={{
        heading: "When this fits",
        items: [
          "TMW implementation that needs review or course-correction",
          "Fleet acquisition or consolidation requiring environment merges",
          "Reporting modernization — moving from spreadsheets to dispatch-grounded SSRS",
          "EDI or trading-partner integration that needs a thoughtful build",
        ],
      }}
      whatItIsnt={{
        heading: "What this isn't",
        items: [
          "A license sale — we don't resell TMW or Trimble products",
          "Driver-app or DOT-compliance scope",
          "Hardware procurement for telematics, scanning, or yard equipment",
          "Open-ended staff augmentation (Fractional FTE is the right shape for that)",
        ],
      }}
    />
  );
}
