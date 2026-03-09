import PortfolioNew from "@/components/portfolio-new/PortfolioNew";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
  title: " Our Portfolio ",
  description: "Explore our portfolio of projects, case studies, and client work. Branding, Web Design, Webflow, Creative Development, and beyond.",
  keywords: ["portfolio", "case studies", "web design portfolio", "projects", "client work"],
  openGraph: {
    title: " Our Portfolios",
    description: "Explore our portfolio of projects, case studies, and client work. Branding, Web Design, Webflow, Creative Development, and beyond.",
    url: `${SITE_URL}/portfolio`,
    siteName: "Ekanostudio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: " Our Portfolio",
    description: "Explore our portfolio of projects, case studies, and client work.",
  },
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
};

export default function PortfolioPage() {
  return <PortfolioNew />;
}
