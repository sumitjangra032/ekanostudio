import ScreenwritingMasterclassPage from "@/components/blogs/how-to-learn-script-writing";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
  title: "The Screenwriter's Master Class: Structure & Selling",
  description:
    "A deep dive into the technical format, psychological character design, and business strategy required to write a professional, salable screenplay.",
  keywords: [
    "Screenwriting",
    "3-Act Structure",
    "Logline",
    "Inciting Incident",
    "Midpoint",
    "All Is Lost",
    "Wants vs. Needs",
    "Subtext",
    "Sluglines",
    "Final Draft",
    "The Black List"
  ],
  openGraph: {
    title: "The Screenwriter's Master Class: Structure & Selling",
    description: "A deep dive into the technical format, psychological character design, and business strategy required to write a professional, salable screenplay.",
    url: `${SITE_URL}/how-to-learn-script-writing`,
    siteName: "Ekanostudio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Screenwriter's Master Class: Structure & Selling",
    description: "A deep dive into the technical format, psychological character design, and business strategy.",
  },
  alternates: {
    canonical: `${SITE_URL}/how-to-learn-script-writing`,
  },
};
export default function scriptwritingblogpage() {
  return <ScreenwritingMasterclassPage />;
}
