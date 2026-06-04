import type { Metadata } from "next";
import ServiceShell from "@/components/ServiceShell";

export const metadata: Metadata = {
  title: "ServiceNow Implementations — Meep Managed Services",
  description:
    "ServiceNow implementation engagements: discovery, workflow design, configuration, integrations, and adoption support.",
};

export default function ServiceNowImplementationsPage() {
  return (
    <ServiceShell
      eyebrow="ServiceNow"
      title="ServiceNow implementations grounded in how the business actually runs."
      intro="A ServiceNow implementation should match the operations underneath it. We start with discovery, design workflows that reflect real ownership and escalation paths, and build configuration, integrations, and reporting that decision-makers can actually use."
      crumbs={[
        { label: "ServiceNow", href: "/servicenow" },
        { label: "Implementations" },
      ]}
      notAuthorizedNote="We are independent practitioners. Not authorized ServiceNow partners or certified resellers."
      what={{
        heading: "What an engagement covers",
        items: [
          "Current-state interviews with operators, dispatchers, technicians, and managers",
          "Workflow design and approval-path mapping",
          "ITSM module implementation: incident, request, problem, change",
          "Service-catalog buildout grounded in actual service offerings",
          "Forms, fields, business rules, UI policies, client scripts",
          "Integrations to operational platforms, identity, and monitoring",
          "Reporting and dashboard design",
          "Role and group structure",
          "Knowledge-base seeding for first-line response",
          "Go-live readiness and adoption support",
        ],
      }}
      approach={{
        heading: "How we run the engagement",
        items: [
          "Bounded discovery before configuration — we won't build to assumptions",
          "Sequenced delivery: stabilize core ITSM first, then expand the catalog and reporting",
          "Documented decisions — every customization has a written rationale",
          "Honest reads on what should stay out-of-box versus what needs configuration",
          "Hand-off documentation that survives our absence",
        ],
      }}
      whoFor={{
        heading: "When this fits",
        items: [
          "New ServiceNow implementation aligned to operational reality",
          "Re-implementation or restructuring after an out-of-box rollout that didn't land",
          "Adding ITSM modules onto an instance already running other ServiceNow workloads",
          "Migration from a legacy ITSM platform with workflow modernization in scope",
        ],
      }}
      whatItIsnt={{
        heading: "What this isn't",
        items: [
          "A license sale — we don't resell ServiceNow",
          "An out-of-box deployment with no discovery (we'll decline that scope)",
          "A long-term staffing arrangement disguised as implementation",
        ],
      }}
    />
  );
}
