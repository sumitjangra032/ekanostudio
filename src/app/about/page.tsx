import AboutPageClient from "./about-client";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
  title: "About Ekanostudio – Growth Marketing & Digital Strategy Experts",
  description: "Learn how Ekanostudio combines design, SEO, and AI automation to drive digital growth for brands worldwide. Meet the team behind your digital evolution.",
  keywords: ["about us", "growth marketing", "digital strategy", "SEO agency", "AI automation", "Ekanostudio"],
  openGraph: {
    title: "About Ekanostudio – Growth Marketing & Digital Strategy Experts",
    description: "Learn how Ekanostudio combines design, SEO, and AI automation to drive digital growth for brands worldwide.",
    url: `${SITE_URL}/about`,
    siteName: "Ekanostudio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ekanostudio – Growth Marketing & Digital Strategy Experts",
    description: "Learn how Ekanostudio combines design, SEO, and AI automation to drive digital growth.",
  },
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
