import type { Metadata } from "next";
import ServiceShell from "@/components/ServiceShell";

export const metadata: Metadata = {
  title: "ServiceNow Support — Meep Managed Services",
  description:
    "Ongoing ServiceNow administration, enhancement, and incident handling for existing instances.",
};

export default function ServiceNowSupportPage() {
  return (
    <ServiceShell
      eyebrow="ServiceNow"
      title="Ongoing ServiceNow support, administration, and enhancement."
      intro="An existing ServiceNow instance needs consistent administration, careful enhancement, and someone who treats incidents on the platform itself as production-class. We provide that capacity as a recurring engagement."
      crumbs={[
        { label: "ServiceNow", href: "/servicenow" },
        { label: "Support" },
      ]}
      notAuthorizedNote="We are independent practitioners. Not authorized ServiceNow partners or certified resellers."
      what={{
        heading: "What support covers",
        items: [
          "Day-to-day administration: users, groups, roles, ACLs",
          "Catalog and form maintenance as services and processes evolve",
          "Workflow tuning and approval-path adjustments",
          "Business-rule, UI-policy, and client-script reviews and updates",
          "Reporting and dashboard maintenance",
          "Integration health monitoring and remediation",
          "Knowledge-base curation and access management",
          "Release planning and impact assessment for ServiceNow upgrades",
          "Incident handling on the platform itself when something breaks",
        ],
      }}
      approach={{
        heading: "How we run the engagement",
        items: [
          "Reserved hours per week for predictable administration capacity",
          "Documented runbooks for recurring tasks so knowledge doesn't sit in one head",
          "Change discipline: every customization has a record and a rollback path",
          "Honest reads on whether a request should be configuration or process change",
          "Coordination with whoever owns dependent platforms",
        ],
      }}
      whoFor={{
        heading: "When this fits",
        items: [
          "ServiceNow is in production but the in-house owner has moved on or is at capacity",
          "Customization debt has accumulated and needs review and selective unwind",
          "Incidents on the platform itself are landing on someone who shouldn't be the owner",
          "An upcoming upgrade needs deliberate planning rather than crossed fingers",
        ],
      }}
      whatItIsnt={{
        heading: "What this isn't",
        items: [
          "A license sale or partner-only deliverable",
          "End-user help-desk staffing that happens to use ServiceNow as the ticket system",
          "Open-ended T&M without scope or capacity definition",
        ],
      }}
    />
  );
}
