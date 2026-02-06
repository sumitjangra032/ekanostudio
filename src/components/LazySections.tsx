"use client";

import dynamic from "next/dynamic";

export const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"), { loading: () => null });
export const Process = dynamic(() => import("@/components/sections/Process"), { loading: () => null });
export const CoreExpertise = dynamic(() => import("@/components/sections/CoreExpertise"), { loading: () => null });
export const ProjectTimeline = dynamic(() => import("@/components/sections/ProjectTimeline"), { loading: () => null });
export const Comparison = dynamic(() => import("@/components/sections/Comparison"), { loading: () => null });
export const Pricing = dynamic(() => import("@/components/sections/Pricing"), { loading: () => null });
export const FAQ = dynamic(() => import("@/components/sections/FAQ"), { loading: () => null });
export const Reviews = dynamic(() => import("@/components/sections/Reviews"), { loading: () => null });
export const KeyTakeaways = dynamic(() => import("@/components/sections/KeyTakeaways"), { loading: () => null });
export const CTA = dynamic(() => import("@/components/sections/CTA"), { loading: () => null });
