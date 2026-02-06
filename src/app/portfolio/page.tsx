import PortfolioNew from "@/components/portfolio-new/PortfolioNew";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
  title: "Our Portfolio – Web Design & AI Case Studies | Ekanostudio",
  description: "Explore our work in Web Design, AI Automation, and Performance Marketing. Real case studies of digital transformation for global brands.",
  keywords: ["portfolio", "case studies", "web design portfolio", "AI case studies", "digital projects", "Ekanostudio"],
  openGraph: {
    title: "Our Portfolio – Web Design & AI Case Studies | Ekanostudio",
    description: "Explore our work in Web Design, AI Automation, and Performance Marketing. Real case studies of digital transformation for global brands.",
    url: `${SITE_URL}/portfolio`,
    siteName: "Ekanostudio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Portfolio – Web Design & AI Case Studies | Ekanostudio",
    description: "Explore our work in Web Design, AI Automation, and Performance Marketing.",
  },
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
};

export default function PortfolioPage() {
  return <PortfolioNew />;
}
