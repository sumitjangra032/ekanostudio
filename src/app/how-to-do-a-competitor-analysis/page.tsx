import CompetitorAnalysisPage from "@/components/blogs/how-to-do-a-competitor-analysis";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
  title: "How to do Competitor Analysis",
  description:
    "Learn how to do a competitor analysis properly to uncover market gaps, track rivals, and build a winning business strategy.",
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
    title: "How to do Competitor Analysis",
    description: "Learn how to do a competitor analysis properly to uncover market gaps, track rivals, and build a winning business strategy.",
    url: `${SITE_URL}/how-to-do-a-competitor-analysis`,
    siteName: "Ekanostudio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "how to do Competitor Analysis",
    description: "Learn how to do a competitor analysis properly to uncover market gaps, track rivals, and build a winning business strategy.",
  },
  alternates: {
    canonical: `${SITE_URL}/how-to-do-a-competitor-analysis`,
  },
};

export default function CompetitorAnalysisBlog() {
  return <CompetitorAnalysisPage />;
}   
