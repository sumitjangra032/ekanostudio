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
  title: "Ekanostudio – Web Design, SEO & AI Automation Agency",
  description:
    "Accelerate your digital growth with Ekanostudio. Expert Web Design, SEO, AI Automation, and Performance Marketing services to scale your business online.",
  keywords: [
    "digital transformation agency",
    "web design agency",
    "branding agency",
    "digital marketing services",
    "UI UX design",
    "business consulting",
    "SEO services",
  ],
  openGraph: {
    title: "Ekanostudio – Digital Transformation & Consulting Agency",
    description:
      "Ekanostudio helps modern businesses grow through digital transformation, web development, branding, digital marketing, and strategic consulting.",
    url: SITE_URL,
    siteName: "Ekanostudio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekanostudio – Digital Transformation & Consulting Agency",
    description:
      "Ekanostudio helps modern businesses grow through digital transformation, web development, branding, digital marketing, and consulting.",
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
