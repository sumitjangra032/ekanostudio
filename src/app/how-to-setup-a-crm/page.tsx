import CreateOnlineMarketplaceBlog from "@/components/blogs/how-to-setup-a-crm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM Implementation Master Class: Strategy, Architecture, Automation, and Adoption",
  description:
    "A complete guide on how to implement a high-performance CRM. Learn about selecting the right platform, data architecture, process mapping, automation logic, and driving user adoption to ensure success.",
  keywords: [
    "CRM implementation guide",
    "Salesforce vs HubSpot",
    "Operational Analytical Collaborative CRM",
    "CRM data migration",
    "Sales pipeline stages",
    "CRM automation logic",
    "user adoption strategy CRM",
    "CRM selection matrix",
  ],
  alternates: {
    canonical: "/how-to-setup-a-crm",
  },
};

export default function CrmImplementationMasterclassPage() {
    return <CreateOnlineMarketplaceBlog />;
}
