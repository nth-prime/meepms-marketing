import type { Metadata } from "next";
import ServiceShell from "@/components/ServiceShell";

export const metadata: Metadata = {
  title: "Fractional FTE — Meep Managed Services",
  description:
    "Reserved technical capacity that operates as part of your team. Engineering, administration, and project work without headcount overhead.",
};

export default function FractionalFtePage() {
  return (
    <ServiceShell
      eyebrow="Services"
      title="Fractional FTE — reserved capacity that works alongside your team."
      intro="Some businesses need a dedicated technical owner across operational systems but can't justify a full senior FTE. Fractional FTE is a reserved-capacity engagement: a defined number of hours per week, allocated to your environment, working as part of your team rather than as an external vendor."
      crumbs={[{ label: "Fractional FTE" }]}
      what={{
        heading: "What the engagement looks like",
        items: [
          "Reserved technical capacity — a defined number of hours per week dedicated to your environment",
          "A primary owner who builds context across your platforms, vendors, and integrations",
          "Day-to-day administration across operational systems",
          "Project capacity for migrations, reporting builds, integration work, and architecture changes",
          "Direct vendor escalation when first-line vendor support stalls",
          "Documentation and runbooks that survive engagement changes",
          "Coordination with internal IT, operations, and finance as needed",
          "Regular check-ins on priorities, capacity, and what should be reshuffled",
        ],
      }}
      approach={{
        heading: "How the engagement works",
        items: [
          "Reserved hours rather than ticket-by-ticket billing — capacity is predictable",
          "We work as part of your team, not as a generic vendor — your tools, your channels",
          "Bounded scope of platforms in support; we say so when something is out of scope",
          "Documented decisions and runbooks land in your environment, not ours",
          "Honest reads on when an engagement should grow, shrink, or end",
        ],
      }}
      whoFor={{
        heading: "When this fits",
        items: [
          "You have outgrown break-fix support but can't justify a full senior IT FTE",
          "Critical systems are supported by one or two internal staff stretched across everything",
          "Vendor coordination is consuming internal time that should go to operations",
          "Project work is stalling because day-to-day support consumes the team",
          "You want one accountable technical partner rather than a rotating vendor list",
        ],
      }}
      whatItIsnt={{
        heading: "What this isn't",
        items: [
          "A staffing agency placement or W-2 contractor arrangement",
          "Open-ended T&M without scope or capacity definition",
          "A help-desk subscription priced by ticket volume",
          "A back-fill for an unfilled FTE requisition without scope conversation",
        ],
      }}
    />
  );
}
