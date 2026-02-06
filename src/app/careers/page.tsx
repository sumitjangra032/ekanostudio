import CareersPageClient from "./careers-client";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
  title: "Careers - Join Our Remote Agency Team | Ekanostudio",
  description: "Join a global team of innovators building digital experiences that matter. Remote-first, results-driven positions in AI, SEO, and Web Design.",
  keywords: ["Remote Agency Jobs", "Digital Marketing Careers", "AI Automation Jobs", "Web Design Openings", "Ekanostudio Careers"],
  openGraph: {
    title: "Careers - Join Our Remote Agency Team | Ekanostudio",
    description: "Join a global team of innovators building digital experiences that matter. Remote-first, results-driven AI and SEO positions.",
    url: `${SITE_URL}/careers`,
    siteName: "Ekanostudio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers - Join Our Remote Agency Team | Ekanostudio",
    description: "Join a global team of innovators building digital experiences that matter.",
  },
  alternates: {
    canonical: `${SITE_URL}/careers`,
  },
};

export default function CareersPage() {
  return <CareersPageClient />;
}
