import ServicesComponent from "@/components/ServicesComponent";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
  title: " Explore Our Services",
  description: "Browse our extensive catalog of Services. From custom software development to result-driven marketing strategies, find your perfect solution.",
  keywords: ["Services", "web development services", "SEO services", "marketing services", "branding services"],
  openGraph: {
    title: " Explore Our Services",
    description: "Browse our extensive catalog of Services. From custom software development to result-driven marketing strategies.",
    url: `${SITE_URL}/services`,
    siteName: "Ekanostudio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: " Explore Our Services",
    description: "Browse our extensive catalog of Services.",
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
