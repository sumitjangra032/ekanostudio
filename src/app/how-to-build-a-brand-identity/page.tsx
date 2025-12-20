import BrandingMasterclass from "@/components/blogs/how-to-build-a-brand-identity";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build a Brand Identity: Strategy, Psychology & Visuals",
  description:
    "A comprehensive master class on how to build a powerful brand identity. Covers brand psychology, mission, vision, logo design, visual systems, voice, digital presence, and measuring brand equity.",
  keywords: [
    "brand identity",
    "branding strategy",
    "brand psychology",
    "brand archetype",
    "visual identity",
    "brand voice",
    "net promoter score",
    "brand equity",
    "rebranding risks",
  ],
  alternates: {
    canonical: "/how-to-build-a-brand-identity",
  },
};

export default function BrandingMasterclassPage() {
    return <BrandingMasterclass />;
}
