"use client";

import dynamic from "next/dynamic";

export const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"), { ssr: false, loading: () => null });
export const Process = dynamic(() => import("@/components/sections/Process"), { ssr: false, loading: () => null });
export const CoreExpertise = dynamic(() => import("@/components/sections/CoreExpertise"), { ssr: false, loading: () => null });
export const ProjectTimeline = dynamic(() => import("@/components/sections/ProjectTimeline"), { ssr: false, loading: () => null });
export const Comparison = dynamic(() => import("@/components/sections/Comparison"), { ssr: false, loading: () => null });
export const Pricing = dynamic(() => import("@/components/sections/Pricing"), { ssr: false, loading: () => null });
export const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: false, loading: () => null });
export const Reviews = dynamic(() => import("@/components/sections/Reviews"), { ssr: false, loading: () => null });
export const KeyTakeaways = dynamic(() => import("@/components/sections/KeyTakeaways"), { ssr: false, loading: () => null });
export const CTA = dynamic(() => import("@/components/sections/CTA"), { ssr: false, loading: () => null });
