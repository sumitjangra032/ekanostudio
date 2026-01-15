import EmailMarketingMasterclass from "@/components/blogs/how-to-start-email-marketing";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
  title: "Email Marketing Master Class: From Strategy to Automated Revenue Flows",
  description:
    "A complete guide on how to start and scale email marketing. Learn technical setup (SPF/DKIM), list building (Lead Magnets), copywriting, and automated revenue flows (Welcome, Abandoned Cart).",
  keywords: [
    "email marketing strategy",
    "email automation flows",
    "SPF DKIM DMARC setup",
    "lead magnets that convert",
    "email list hygiene",
    "GDPR CAN-SPAM compliance",
    "email deliverability guide",
    "abandoned cart flow setup",
  ],
  openGraph: {
    title: "Email Marketing Master Class: From Strategy to Automated Revenue Flows",
    description: "A complete guide on how to start and scale email marketing.",
    url: `${SITE_URL}/how-to-start-email-marketing`,
    siteName: "ekanostudio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Marketing Master Class: From Strategy to Automated Revenue Flows",
    description: "A complete guide on how to start and scale email marketing.",
  },
  alternates: {
    canonical: `${SITE_URL}/how-to-start-email-marketing`,
  },
};
export default function EmailMarketingMasterclassPage() {
  return <EmailMarketingMasterclass />;
}
