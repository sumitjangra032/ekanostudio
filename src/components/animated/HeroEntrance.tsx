"use client";

import { m } from "framer-motion";

export default function HeroEntrance({ children }: { children: React.ReactNode }) {
    return (
        <m.div
            initial={{ opacity: 1, y: 0 }} // Changed to 1 to avoid LCP delay, maybe slightly offset y
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
        >
            {children}
        </m.div>
    );
}
