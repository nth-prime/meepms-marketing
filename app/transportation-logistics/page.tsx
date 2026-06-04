import type { Metadata } from "next";
import ServiceShell from "@/components/ServiceShell";

export const metadata: Metadata = {
  title: "Transportation Logistics — Meep Managed Services",
  description:
    "TMW Suite consulting and support for transportation and logistics operations. Independent practitioners; not authorized partners.",
};

export default function TransportationLogisticsPage() {
  return (
    <ServiceShell
      eyebrow="Services"
      title="TMW Suite consulting and support for transportation operations."
      intro="Transportation and logistics businesses run on dispatch, fuel, and the data flowing between them. We work in TMW Suite, Fuel Dispatch, and the SQL Server and reporting layers underneath — as practitioners, not resellers."
      crumbs={[{ label: "Transportation Logistics" }]}
      notAuthorizedNote="We are independent practitioners. We are not authorized partners, certified resellers, or affiliated with Trimble, TMW, or any transportation-software vendor. We don't use vendor logos or licensed marks."
      subPages={[
        {
          label: "TMW Suite Consulting",
          href: "/transportation-logistics/tmw-suite-consulting",
          note: "Implementation, integration, reporting design, and operational workflow tuning for TMW Suite environments.",
        },
        {
          label: "TMW Suite Support",
          href: "/transportation-logistics/tmw-suite-support",
          note: "Ongoing administration, troubleshooting, and vendor escalation for live TMW Suite environments.",
        },
      ]}
      what={{
        heading: "What we cover",
        items: [
          "TMW Suite and Fuel Dispatch access control and configuration",
          "SQL Server administration for TMW environments — backups, indexes, security",
          "SSRS and operational reporting tied to dispatch and fuel data",
          "EDI development, trading-partner coordination, and remediation",
          "Integrations between TMW, telematics, document management, and accounting",
          "Workflow review and tuning — dispatch boards, freight bill flow, settlement",
          "Direct vendor escalation when first-line vendor support stalls",
          "Migration support for upgrades and platform consolidations",
        ],
      }}
      whoFor={{
        heading: "When this fits",
        items: [
          "TMW environments running in production where in-house IT is stretched",
          "Fleets where reporting and integrations have grown brittle and need a thoughtful unwind",
          "Operations that need a single technical owner across dispatch, fuel, telematics, and reporting",
          "Implementations or upgrades that need someone who's actually operated the platform",
        ],
      }}
      whatItIsnt={{
        heading: "Boundaries",
        items: [
          "License sales — we don't resell TMW, Trimble, or any transportation platform",
          "Authorized-partner deliverables that require a partner agreement",
          "Driver-facing app development or DOT-compliance work",
          "Telematics hardware procurement",
        ],
      }}
    />
  );
}
