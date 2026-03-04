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
  title: "Best Digital Marketing Company In Hisar | Digital Marketing Agency In Haryana | EkanoStudio",
  description:
    "Top digital marketing & web development agency in Hisar, Haryana. Ekanostudio delivers SEO, real-time reporting & growth solutions. Contact us today!",
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
    title: "Best Digital Marketing Company In Hisar | Digital Marketing Agency In Haryana | EkanoStudio",
    description:
      "Top digital marketing & web development agency in Hisar, Haryana. Ekanostudio delivers SEO, real-time reporting & growth solutions. Contact us today!",
    url: SITE_URL,
    siteName: "Ekanostudio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Company In Hisar | Digital Marketing Agency In Haryana | EkanoStudio",
    description:
      "Top digital marketing & web development agency in Hisar, Haryana. Ekanostudio delivers SEO, real-time reporting & growth solutions. Contact us today!",
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
