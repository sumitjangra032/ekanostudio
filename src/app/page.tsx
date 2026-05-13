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
  title: "Web Design & Digital Marketing Agency in Hisar",
  description:
    "EkanoStudio helps businesses in Hisar and across India grow online with custom websites, SEO, performance marketing, and social media , transparent pricing , no long-term contracts.",
  keywords: [
    "digital marketing agency Hisar",
    "web design agency Hisar",
    "SEO services Haryana",
    "web development Hisar",
    "performance marketing India",
    "social media marketing Hisar",
    "UI UX design agency",
    "ecommerce development Haryana",
  ],
  openGraph: {
    title: "Web Design & Digital Marketing Agency in Hisar",
    description:
      "Custom websites, SEO, performance marketing, and social media management for businesses in Hisar and across India. Transparent pricing, no long-term contracts.",
    url: SITE_URL,
    siteName: "EkanoStudio",
    type: "website",

    images: [
      {
        url: `${SITE_URL}/logo.png`, // create a 1200x630px branded image
        width: 1200,
        height: 630,
        alt: "Digital Marketing & Web Design Agency in Hisar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Digital Marketing Agency in Hisar",
    description:
      "Custom websites, SEO, performance marketing, and social media management for businesses in Hisar and across India. Transparent pricing, no long-term contracts.",
    images: [`${SITE_URL}/logo.png`],
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
