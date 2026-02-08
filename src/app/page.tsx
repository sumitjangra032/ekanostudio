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
  title: "Ekanostudio – SEO, Web Development & Digital Growth Agency",
  description:
    "Ekanostudio: Priority support, real-time reporting, and performance-driven digital marketing services for sustainable business growth. Get started today.",
  keywords: [
    "digital transformation agency",
    "web design agency",
    "branding agency",
    "digital marketing services",
    "UI UX design",
    "business consulting",
    "SEO services",
    "priority support",
    "real-time reporting",
    "content strategy",
    "business growth",
  ],
  openGraph: {
    title: "Ekanostudio – SEO, Web Development & Digital Growth Agency",
    description:
      "Ekanostudio: Priority support, real-time reporting, and performance-driven digital marketing services for sustainable business growth. Get started today.",
    url: SITE_URL,
    siteName: "Ekanostudio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekanostudio – SEO, Web Development & Digital Growth Agency",
    description:
      "Ekanostudio: Priority support, real-time reporting, and performance-driven digital marketing services for sustainable business growth. Get started today.",
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
