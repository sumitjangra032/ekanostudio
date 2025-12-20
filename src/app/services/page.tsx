import ServicesComponent from "@/components/ServicesComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Our Digital Services | Ekanostudio",
  description: "Browse our extensive catalog of digital services. From custom software development to result-driven marketing strategies, find the perfect solution for your business needs.",
};

export default function ServicesListingPage() {
  return (
    <ServicesComponent />
  );
}
