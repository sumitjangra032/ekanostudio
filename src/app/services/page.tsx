import ServicesComponent from "@/components/ServicesComponent";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
  title: "Explore Our Digital Services | ekanostudio",
  description: "Browse our extensive catalog of digital services. From custom software development to result-driven marketing strategies, find the perfect solution for your business needs.",
  keywords: ["digital services", "web development services", "SEO services", "marketing services", "branding services"],
  openGraph: {
    title: "Explore Our Digital Services | ekanostudio",
    description: "Browse our extensive catalog of digital services. From custom software development to result-driven marketing strategies.",
    url: `${SITE_URL}/services`,
    siteName: "ekanostudio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Our Digital Services | ekanostudio",
    description: "Browse our extensive catalog of digital services.",
  },
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
};

export default function ServicesListingPage() {
  return (
    <ServicesComponent />
  );
}
