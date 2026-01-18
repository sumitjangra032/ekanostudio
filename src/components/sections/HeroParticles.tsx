"use client";

import dynamic from "next/dynamic";

const FloatingParticles = dynamic(() => import("../animated/FloatingParticles"), {
    ssr: false,
});

export default function HeroParticles() {
    return <FloatingParticles count={20} />;
}
