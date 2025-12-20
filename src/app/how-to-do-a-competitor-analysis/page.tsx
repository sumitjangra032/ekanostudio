import CompetitorAnalysisPage from "@/components/blogs/how-to-do-a-competitor-analysis";
import { Metadata } from "next";

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
  alternates: {
    canonical: "/competitor-analysis-master-class",
  },
};

export default function CompetitorAnalysisBlog() {
    return <CompetitorAnalysisPage />;
}   
