import CompetitorAnalysisPage from "@/components/blogs/how-to-do-a-competitor-analysis";
import { Metadata } from "next";

const SITE_URL = "https://ekanostudio.com";

export const metadata: Metadata = {
  title: "The Competitor Analysis Master Class: War Game Your Market",
  description:
    "A deep dive into competitor analysis, using strategic frameworks, digital espionage, and psychological audits to find market gaps and exploit competitor weaknesses.",
  keywords: [
    "Competitor Analysis",
    "Market Strategy",
    "SWOT",
    "Porter's Five Forces",
    "Jobs to Be Done",
    "Battlecards",
    "SEO Analysis",
    "Pricing Strategy"
  ],
  openGraph: {
    title: "The Competitor Analysis Master Class: War Game Your Market",
    description: "A deep dive into competitor analysis, using strategic frameworks, digital espionage, and psychological audits.",
    url: `${SITE_URL}/how-to-do-a-competitor-analysis`,
    siteName: "Ekanostudio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Competitor Analysis Master Class: War Game Your Market",
    description: "A deep dive into competitor analysis, using strategic frameworks, digital espionage, and psychological audits.",
  },
  alternates: {
    canonical: `${SITE_URL}/how-to-do-a-competitor-analysis`,
  },
};

export default function CompetitorAnalysisBlog() {
    return <CompetitorAnalysisPage />;
}   
