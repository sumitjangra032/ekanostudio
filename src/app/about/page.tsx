import AboutPageClient from "./about-client";
import { Metadata } from "next";

const SITE_URL = "https://ekanostudio.com";

export const metadata: Metadata = {
  title: "About Us - Digital Services Studio | Ekanostudio",
  description: "Ekanostudio is a modern digital services studio focused on building high-performance digital experiences for brands, startups, and growing businesses.",
  keywords: ["about us", "digital agency", "web development company", "digital services", "Ekanostudio"],
  openGraph: {
    title: "About Us - Digital Services Studio | Ekanostudio",
    description: "Ekanostudio is a modern digital services studio focused on building high-performance digital experiences for brands, startups, and growing businesses.",
    url: `${SITE_URL}/about`,
    siteName: "Ekanostudio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Digital Services Studio | Ekanostudio",
    description: "Ekanostudio is a modern digital services studio focused on building high-performance digital experiences.",
  },
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
