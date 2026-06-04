import type { Metadata } from "next";
import ServiceShell from "@/components/ServiceShell";

export const metadata: Metadata = {
  title: "TMW Suite Support — Meep Managed Services",
  description:
    "Ongoing TMW Suite administration, troubleshooting, and vendor escalation for live transportation environments.",
};

export default function TmwSupportPage() {
  return (
    <ServiceShell
      eyebrow="Transportation Logistics"
      title="Ongoing TMW Suite support and administration."
      intro="Transportation operations don't pause for vendor escalations. We provide reserved technical capacity for live TMW Suite environments — administration, troubleshooting, integration health, and direct vendor escalation when issues exceed first-line response."
      crumbs={[
        { label: "Transportation Logistics", href: "/transportation-logistics" },
        { label: "TMW Suite Support" },
      ]}
      notAuthorizedNote="We are independent practitioners. Not authorized partners, certified resellers, or affiliated with Trimble or TMW."
      what={{
        heading: "What support covers",
        items: [
          "Day-to-day TMW Suite administration: users, roles, access, configuration",
          "Fuel Dispatch administration and configuration changes",
          "SQL Server administration: backups, recovery testing, indexing, security",
          "SSRS report maintenance and updates as operational reporting needs evolve",
          "EDI workflow monitoring, remediation, and trading-partner coordination",
          "Integration health checks across TMW, telematics, document management",
          "Incident response when dispatch, settlement, or reporting workflows break",
          "Direct vendor escalation when first-line vendor support stalls",
        ],
      }}
      approach={{
        heading: "How we run the engagement",
        items: [
          "Reserved hours per week for predictable administration capacity",
          "Runbooks for recurring tasks so knowledge doesn't sit in one head",
          "Coordinated change management with internal IT and operations",
          "Honest reads on whether a request is platform configuration, vendor escalation, or operational process change",
          "Periodic reviews of environment health, not just ticket reaction",
        ],
      }}
      whoFor={{
        heading: "When this fits",
        items: [
          "TMW environments where the in-house owner has left or is at capacity",
          "Fleets that have outgrown break-fix help-desk support",
          "Recurring SSRS, EDI, or integration issues that need a single accountable owner",
          "Operations that want vendor escalation handled without internal staff burning hours on it",
        ],
      }}
      whatItIsnt={{
        heading: "What this isn't",
        items: [
          "A license sale or partner-only deliverable",
          "Driver-facing helpdesk for in-cab devices or apps",
          "Open-ended T&M without capacity or scope definition",
          "Hardware procurement or warehouse-equipment support",
        ],
      }}
    />
  );
}
