import ApiIntegrationsBlog from "@/components/blogs/how-api-integrations-work";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Complete Guide to API Integrations: Protocols, Security & Strategy",
  description:
    "A technical and strategic deep dive into building, managing, and securing vital API connections. Covers REST, OAuth 2.0, Webhooks, Rate Limiting, and the future of the API economy.",
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
  alternates: {
    canonical: "/how-api-integrations-work",
  },
};


export default function ApiIntegrationsBlogpage() {
    return <ApiIntegrationsBlog />;
}
