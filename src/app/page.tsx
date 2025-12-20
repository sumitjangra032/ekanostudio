import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Benefits from "@/components/sections/Benefits";
import Process from "@/components/sections/Process";
import CoreExpertise from "@/components/sections/CoreExpertise";
import ProjectTimeline from "@/components/sections/ProjectTimeline";
// import Product from "@/components/sections/Product";
import Comparison from "@/components/sections/Comparison";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Reviews from "@/components/sections/Reviews";
import KeyTakeaways from "@/components/sections/KeyTakeaways";
import CTA from "@/components/sections/CTA";
import WorkSection from "@/components/WorkSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Transformation Services & Consulting | Ekanostudio",
  description: "Accelerate your digital growth with Ekanostudio. We offer expert web development, branding, digital marketing, and strategic consulting services tailored for modern businesses.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Benefits />
      <Process />
      <CoreExpertise />
      <WorkSection />
      <ProjectTimeline />
      {/* <Product />  */}
      <Pricing />
      <Comparison />
      <FAQ />
      <Reviews />
      <KeyTakeaways />
      <CTA />
    </>
  );
}
