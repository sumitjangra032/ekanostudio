import Hero from "@/components/sections/Hero";
import { Metadata } from "next";
import {
  WhyChooseUs,
  Process,
  CoreExpertise,
  ProjectTimeline,
  Comparison,
  Pricing,
  FAQ,
  Reviews,
  KeyTakeaways,
  CTA
} from "@/components/LazySections";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
  title: "SEO, Growth & Web Development | Performance Marketing",
  description:
    "Get professional SEO, web development, and growth support. Ekanostudio offers real-time reporting, priority support, and expert digital marketing.",
  keywords: [
    "SEO",
    "Growth",
    "Web Development",
    "Support",
    "Performance Marketing",
    "Content",
    "How to",
    "Get started",
    "Social media",
    "Real-time reporting",
    "Priority support",
    "started get",
    "get startedget",
    "startedget started",
    "get started get",
  ],
  openGraph: {
    title: "SEO, Growth & Web Development | Performance Marketing",
    description:
      "Get professional SEO, web development, and growth support. Ekanostudio offers real-time reporting, priority support, and expert digital marketing.",
    url: SITE_URL,
    siteName: "Ekanostudio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO, Growth & Web Development | Performance Marketing",
    description:
      "Get professional SEO, web development, and growth support. Ekanostudio offers real-time reporting, priority support, and expert digital marketing.",
  },
  alternates: {
    canonical: SITE_URL,
  },
};


export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Process />
      <CoreExpertise />
      <ProjectTimeline />
      <Pricing />
      <Comparison />
      <FAQ />
      <Reviews />
      <KeyTakeaways />
      <CTA />
    </>
  );
}
