"use client";

import dynamic from "next/dynamic";

export const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"));
export const Process = dynamic(() => import("@/components/sections/Process"));
export const CoreExpertise = dynamic(() => import("@/components/sections/CoreExpertise"));
export const ProjectTimeline = dynamic(() => import("@/components/sections/ProjectTimeline"));
export const Comparison = dynamic(() => import("@/components/sections/Comparison"));
export const Pricing = dynamic(() => import("@/components/sections/Pricing"));
export const FAQ = dynamic(() => import("@/components/sections/FAQ"));
export const Reviews = dynamic(() => import("@/components/sections/Reviews"));
export const KeyTakeaways = dynamic(() => import("@/components/sections/KeyTakeaways"));
export const CTA = dynamic(() => import("@/components/sections/CTA"));
