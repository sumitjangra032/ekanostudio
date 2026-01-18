"use client";

import dynamic from "next/dynamic";

const HeroBackground = dynamic(() => import("./HeroBackground"), { ssr: false });

export default function HeroBackgroundWrapper() {
    return <HeroBackground />;
}
