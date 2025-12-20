import SEOMasterclassPage from "@/components/blogs/how-to-do-search-engine-optimization";
import { Metadata } from "next";

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
  alternates: {
    canonical: "/how-to-do-search-engine-optimization",
  },
};
export default function SeoMasterclassPage() {
    return <SEOMasterclassPage />;
}