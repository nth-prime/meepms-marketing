import type { Metadata } from "next";
import ServiceShell from "@/components/ServiceShell";

export const metadata: Metadata = {
  title: "ServiceNow — Meep Managed Services",
  description:
    "ServiceNow implementation and support, shaped to how the business actually operates. Independent practitioners; not authorized partners.",
};

export default function ServiceNowPage() {
  return (
    <ServiceShell
      eyebrow="Services"
      title="ServiceNow, shaped to how your business actually operates."
      intro="Implementation and support work for ServiceNow ITSM and adjacent modules. We approach ServiceNow as part of the operational environment — built around the workflows, data, roles, integrations, and reporting that already drive the business."
      crumbs={[{ label: "ServiceNow" }]}
      notAuthorizedNote="We are independent practitioners. We are not authorized ServiceNow partners or certified resellers, and we don't claim affiliation with ServiceNow or use their licensed marks."
      subPages={[
        {
          label: "ServiceNow Implementations",
          href: "/servicenow/implementations",
          note: "Discovery, workflow design, configuration, integrations, and adoption support.",
        },
        {
          label: "ServiceNow Support",
          href: "/servicenow/support",
          note: "Ongoing administration, enhancement, and incident handling for an existing ServiceNow instance.",
        },
      ]}
      what={{
        heading: "What we cover",
        items: [
          "Discovery and current-state mapping of operations, ownership, and workflows",
          "ITSM module design — incident, request, problem, change, knowledge",
          "Service-catalog implementation grounded in the business's actual service offerings",
          "Forms, fields, business rules, UI policies, client scripts",
          "Integrations to operational platforms, identity, monitoring, and reporting",
          "Dashboards and reporting that decision-makers actually use",
          "Role design, group structure, and access management",
          "Adoption support and post-launch improvement",
        ],
      }}
      whoFor={{
        heading: "When this fits",
        items: [
          "You have ServiceNow in flight (or are about to start) and want practitioner help, not a sales motion",
          "Out-of-box defaults aren't matching how your operations actually run",
          "Reporting and integrations have grown brittle and need a thoughtful rebuild",
          "You want a partner who tells you when not to customize",
          "Your current implementation is functional but adoption is uneven",
        ],
      }}
      whatItIsnt={{
        heading: "Boundaries",
        items: [
          "License sales — we don't resell ServiceNow",
          "Authorized-partner deliverables that require a partner agreement",
          "Anything that requires using ServiceNow's licensed marks in marketing",
          "Single-issue help-desk ticketing without underlying scope",
          "Greenfield ITSM implementations on platforms other than ServiceNow",
        ],
      }}
    />
  );
}
