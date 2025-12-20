import ScreenwritingMasterclassPage from "@/components/blogs/how-to-learn-script-writing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Screenwriter's Master Class: Structure, Psychology, and Selling",
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
  alternates: {
    canonical: "/how-to-learn-script-writing",
  },
};
export default function scriptwritingblogpage() {
    return <ScreenwritingMasterclassPage />;
}
