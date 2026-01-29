import BookConsultationClient from "./BookConsultationClient";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
  title: "Book a Free Consultation | Ekanostudio",
  description: "Schedule a free strategy call with our digital experts. Discuss your project, goals, and how we can help you grow.",
  openGraph: {
    title: "Book a Free Consultation | Ekanostudio",
    description: "Schedule a free strategy call with our digital experts. Discuss your project, goals, and how we can help you grow.",
    url: `${SITE_URL}/book-consultation`,
    siteName: "Ekanostudio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Book a Free Consultation | Ekanostudio",
    description: "Schedule a free strategy call with our digital experts.",
  },
  alternates: {
    canonical: `${SITE_URL}/book-consultation`,
  },
};

export default function BookConsultationPage() {
  return <BookConsultationClient />;
}
