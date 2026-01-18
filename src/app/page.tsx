import Hero from "@/components/sections/Hero";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"));
const Process = dynamic(() => import("@/components/sections/Process"));
const CoreExpertise = dynamic(() => import("@/components/sections/CoreExpertise"));
const ProjectTimeline = dynamic(() => import("@/components/sections/ProjectTimeline"));
const Comparison = dynamic(() => import("@/components/sections/Comparison"));
const Pricing = dynamic(() => import("@/components/sections/Pricing"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Reviews = dynamic(() => import("@/components/sections/Reviews"));
const KeyTakeaways = dynamic(() => import("@/components/sections/KeyTakeaways"));
const CTA = dynamic(() => import("@/components/sections/CTA"));

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
