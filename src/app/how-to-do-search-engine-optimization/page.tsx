import SEOMasterclassPage from "@/components/blogs/how-to-do-search-engine-optimization";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
  title: "The SEO Master Class: Technical, Content, and Authority",
  description:
    "A deep dive into the technical infrastructure, content strategy, and link building required to master modern Search Engine Optimization (SEO).",
  keywords: [
    "SEO",
    "Technical SEO",
    "Core Web Vitals",
    "E-E-A-T",
    "Keyword Research",
    "Link Building",
    "Google Search Console",
    "Local SEO"
  ],
  openGraph: {
    title: "The SEO Master Class: Technical, Content, and Authority",
    description: "A deep dive into the technical infrastructure, content strategy, and link building required to master modern SEO.",
    url: `${SITE_URL}/how-to-do-search-engine-optimization`,
    siteName: "ekanostudio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The SEO Master Class: Technical, Content, and Authority",
    description: "A deep dive into the technical infrastructure, content strategy, and link building required to master modern SEO.",
  },
  alternates: {
    canonical: `${SITE_URL}/how-to-do-search-engine-optimization`,
  },
};
export default function SeoMasterclassPage() {
  return <SEOMasterclassPage />;
}