import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import CoreExpertise from "@/components/sections/CoreExpertise";
import ProjectTimeline from "@/components/sections/ProjectTimeline";
import Comparison from "@/components/sections/Comparison";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Reviews from "@/components/sections/Reviews";
import KeyTakeaways from "@/components/sections/KeyTakeaways";
import CTA from "@/components/sections/CTA";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
  title: "ekanostudio – Digital Transformation, Web Design & Consulting Agency",
  description:
    "ekanostudio is a digital transformation and consulting agency helping businesses scale with web development, branding, digital marketing, UI/UX design, and strategic growth solutions.",
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
    title: "ekanostudio – Digital Transformation & Consulting Agency",
    description:
      "ekanostudio helps modern businesses grow through digital transformation, web development, branding, digital marketing, and strategic consulting.",
    url: SITE_URL,
    siteName: "ekanostudio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ekanostudio – Digital Transformation & Consulting Agency",
    description:
      "ekanostudio helps modern businesses grow through digital transformation, web development, branding, digital marketing, and consulting.",
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
