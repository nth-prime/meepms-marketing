import type { Metadata } from "next";
import ServiceShell from "@/components/ServiceShell";

export const metadata: Metadata = {
  title: "Managed Infrastructure — Meep Managed Services",
  description:
    "Architecture-level ownership of business-critical systems. Monitoring, administration, runbooks, backups, and incident response.",
};

export default function ManagedInfrastructurePage() {
  return (
    <ServiceShell
      eyebrow="Services"
      title="Architecture-level ownership of business-critical systems."
      intro="Some businesses need a partner that takes ownership of the operational environment as one connected system — servers, integrations, vendor relationships, reporting, and access — and treats it as production-class. Managed Infrastructure is that engagement."
      crumbs={[{ label: "Managed Infrastructure" }]}
      what={{
        heading: "What the engagement covers",
        items: [
          "Server and platform administration across the environments you actually run on",
          "Access control structure, identity, and role management",
          "Monitoring, alerting, and proactive issue prevention",
          "Incident response with documented runbooks and communication paths",
          "Backup oversight, restore testing, and recovery readiness",
          "SQL Server, SSRS, and reporting environment administration",
          "Integration health across operational platforms, telematics, document management",
          "Vendor coordination and direct escalation when first-line vendor support stalls",
          "Architectural review and tuning as operations evolve",
          "Around-the-clock availability coverage when contracted",
        ],
      }}
      approach={{
        heading: "How we run the engagement",
        items: [
          "Start with a structured systems review to scope the environment, not assumptions",
          "Reserved capacity for predictable administration, plus project hours for change work",
          "One accountable technical owner across all platforms in scope",
          "Documented runbooks, integration maps, and decision rationales — yours to keep",
          "Coordinated change management with operations and any remaining internal IT",
          "Periodic environment reviews so issues get found before incidents do",
        ],
      }}
      whoFor={{
        heading: "When this fits",
        items: [
          "Critical operational systems supported by one or two internal staff stretched across everything",
          "A pattern of recurring issues whose root cause is capacity, not effort",
          "Vendor coordination overhead growing faster than operational maturity",
          "Reporting and integrations that have grown brittle as platforms accumulate",
          "Operations that need fractional engineering capacity alongside ongoing administration",
        ],
      }}
      whatItIsnt={{
        heading: "What this isn't",
        items: [
          "A help-desk subscription priced by ticket volume",
          "Cloud-only managed services for one specific hyperscaler",
          "Hardware procurement, datacenter colocation, or physical-network installation",
          "Open-ended T&M without scope or capacity definition",
          "End-user device management or print-fleet support without broader infrastructure scope",
        ],
      }}
    />
  );
}
