import PortfolioClient from "./portfolio-client";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
  title: "Our Portfolio - Digital Projects | Ekanostudio",
  description: "Explore our portfolio of digital projects, case studies, and client work. Branding, Web Design, Webflow, Creative Development, and beyond.",
  keywords: ["portfolio", "case studies", "web design portfolio", "digital projects", "client work"],
  openGraph: {
    title: "Our Portfolio - Digital Projects | Ekanostudio",
    description: "Explore our portfolio of digital projects, case studies, and client work. Branding, Web Design, Webflow, Creative Development, and beyond.",
    url: `${SITE_URL}/portfolio`,
    siteName: "Ekanostudio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Portfolio - Digital Projects | Ekanostudio",
    description: "Explore our portfolio of digital projects, case studies, and client work.",
  },
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
