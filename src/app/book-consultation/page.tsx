import BookConsultationClient from "./BookConsultationClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Consultation | Ekanostudio",
  description: "Schedule a free strategy call with our digital experts. Discuss your project, goals, and how we can help you grow.",
};

export default function BookConsultationPage() {
  return <BookConsultationClient />;
}
