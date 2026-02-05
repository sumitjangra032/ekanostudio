import ApiIntegrationsBlog from "@/components/blogs/how-api-integrations-work";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
  title: "API Integrations Guide: Protocols & Security",
  description:
    "A technical deep dive into building and securing API connections. Covers REST, OAuth 2.0, Webhooks, Rate Limiting, and key API security best practices.",
  keywords: [
    "API Integration",
    "REST",
    "SOAP",
    "GraphQL",
    "gRPC",
    "OAuth 2.0",
    "JWT",
    "Webhooks",
    "Polling",
    "Rate Limiting",
    "API Gateway",
    "API Security",
    "OpenAPI"
  ],
  openGraph: {
    title: "API Integrations Guide: Protocols & Security",
    description: "A technical and strategic deep dive into building, managing, and securing vital API connections.",
    url: `${SITE_URL}/how-api-integrations-work`,
    siteName: "Ekanostudio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "API Integrations Guide: Protocols & Security",
    description: "A technical and strategic deep dive into building, managing, and securing vital API connections.",
  },
  alternates: {
    canonical: `${SITE_URL}/how-api-integrations-work`,
  },
};


export default function ApiIntegrationsBlogpage() {
  return <ApiIntegrationsBlog />;
}
