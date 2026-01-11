import CareersPageClient from "./careers-client";
import { Metadata } from "next";

const SITE_URL = "https://ekanostudio.com";

export const metadata: Metadata = {
  title: "Careers - Join Our Remote Team | Ekanostudio",
  description: "Join a global team of innovators building digital experiences that matter. Remote-first, results-driven. Apply now for open positions.",
  keywords: ["careers", "jobs", "remote jobs", "digital agency careers", "tech jobs"],
  openGraph: {
    title: "Careers - Join Our Remote Team | Ekanostudio",
    description: "Join a global team of innovators building digital experiences that matter. Remote-first, results-driven.",
    url: `${SITE_URL}/careers`,
    siteName: "Ekanostudio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers - Join Our Remote Team | Ekanostudio",
    description: "Join a global team of innovators building digital experiences that matter.",
  },
  alternates: {
    canonical: `${SITE_URL}/careers`,
  },
};

export default function CareersPage() {
  return <CareersPageClient />;
}
