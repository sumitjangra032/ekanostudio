"use client";
import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import AnimatedLine from "../animated/AnimatedLine";
import { HeartIcon } from "../icons/LocalIcons";

export default function ServiceWhyMatters({ data }: { data: any }) {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];

    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const yCards = useTransform(scrollYProgress, [0, 1], [0, -15]);

    const getGridClass = () => {
        const count = data.items.length;
        if (count === 1) return "grid-cols-1 max-w-3xl mx-auto";
        if (count === 2) return "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto";
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    };

    return (
        <section
            id="whyMatters"
            ref={sectionRef}
            className="py-20 px-6 relative z-10"
        >
            <div className="max-w-6xl mx-auto">

                <m.div
                    className="text-center"
                    style={{ y: yText }}
                >
                    <div
                        className="flex justify-center mb-6"
                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                            style={{
                                background: `${theme.accents.a}08`,
                                border: `1px solid ${theme.accents.a}20`,
                                backdropFilter: "blur(4px)",
                            }}
                        >
                            <div className="pulse red" />
                            <span
                                className="text-xs font-medium tracking-wide uppercase"
                                style={{ color: theme.accents.a }}
                            >
                                Why this matters
                            </span>
                        </div>
                    </div>

                    <h2
                        className="text-[32px] md:text-[42px] font-bold mb-12"
                        style={{ color: theme.text }}
                    >
                        <AnimatedLine
                            text={data.heading}
                            delay={0.1}
                            isHeading
                            gradient={{
                                from: "#fac175",
                                via: "#ff006a",
                                to: "#8b5cf6",
                            }}
                        />
                    </h2>
                </m.div>

                <m.div
                    className={`grid ${getGridClass()} gap-6`}
                    style={{ y: yCards }}
                >
                    {data.items.map((item: string, i: number) => (
                        <m.div
                            key={i}
                            className="
                                group relative p-8 rounded-3xl
                                bg-black/40
                                border border-white/10
                                backdrop-blur-xl
                                overflow-hidden
                                transition-all duration-500
                                hover:-translate-y-1
                            "
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >


                            {/* Left Accent Line */}
                            <div
                                className="absolute left-0 top-0 h-full w-[2px]"
                                style={{
                                    background: `linear-gradient(
                                        to bottom,
                                        transparent,
                                        ${theme.accents.a},
                                        transparent
                                    )`,
                                }}
                            />

                            {/* Hover glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    background: `radial-gradient(
                                        400px circle at top right,
                                        ${theme.accents.a}12,
                                        transparent 45%
                                    )`,
                                }}
                            />

                            <div className="relative z-10">
                                <h3
                                    className="text-lg leading-relaxed font-medium"
                                    style={{ color: theme.text, fontFamily: "var(--font-general-sans)" }}
                                >
                                    <AnimatedLine text={item} delay={0.1 * i} />
                                </h3>
                            </div>
                        </m.div>
                    ))}
                </m.div>
            </div>
        </section>
    );
}
