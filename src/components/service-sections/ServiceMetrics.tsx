"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";

import AnimateDownloadedSVG from "../animated/AnimateDownloadedSVG";
import { IoAnalytics } from "react-icons/io5";
import AnimatedLine from "../animated/AnimatedLine";
import { AnimatedNumber } from "../animated/AnimatedNumber";

export default function ServiceMetrics({ data }: { data: any }) {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];

    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const yCards = useTransform(scrollYProgress, [0, 1], [0, -10]);

    return (
        <section
            id="metrics"
            ref={sectionRef}
            className="py-20 px-6"
            style={{}}
        >
            <div className="max-w-7xl mx-auto">

                <motion.div
                    className="text-center mb-12 mt-3"
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
                                Metrics
                            </span>
                        </div>
                    </div>

                    <h2
                        className="text-[32px] md:text-[42px] font-bold mb-4"
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

                    <div
                        className="text-lg"
                        style={{ color: theme.subtext }}
                    >
                        <AnimatedLine text={data.subheading} />
                    </div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
                    style={{ y: yCards }}
                >
                    {data.items.map((item: any, i: number) => (
                        <motion.div
                            key={i}
                            className="
                                group relative p-5 md:p-8 rounded-2xl md:rounded-3xl
                                bg-black/40
                                border border-white/10
                                backdrop-blur-xl
                                overflow-hidden
                                transition-all duration-500
                                hover:-translate-y-1
                                flex flex-col items-center gap-2
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

                            {/* Hover Glow */}
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

                            {/* ICON */}
                            <div className="mb-4 relative z-10 p-4 rounded-2xl" style={{ background: `${theme.accents.a}08`, border: `1px solid ${theme.accents.a}15` }}>
                                <AnimateDownloadedSVG
                                    src={item.icon}
                                    size={36}
                                    stroke={theme.accents.a}
                                    repeat={false}
                                />
                            </div>

                            {/* NUMBER */}
                            <h3
                                className="text-4xl font-bold relative z-10 flex items-center justify-center"
                                style={{ color: theme.text, fontFamily: "var(--font-general-sans)" }}
                            >
                                {(() => {
                                    const valStr = String(item.value).trim();

                                    const rangeMatch = valStr.match(
                                        /^(\d+)\s*-\s*(\d+)\s*(.*)$/
                                    );
                                    if (rangeMatch) {
                                        const start = Number(rangeMatch[1]);
                                        const end = Number(rangeMatch[2]);
                                        const unit = rangeMatch[3] || "";
                                        return (
                                            <>
                                                <AnimatedNumber value={start} />
                                                <span className="mx-1">-</span>
                                                <AnimatedNumber value={end} />
                                                {unit && <span className="ml-1">{unit}</span>}
                                            </>
                                        );
                                    }

                                    const match = valStr.match(
                                        /^([^\d]*)([\d,.]+)([^\d]*)$/
                                    );

                                    if (match) {
                                        const prefix = match[1];
                                        const rawNum = match[2].replace(/,/g, "");
                                        const numVal = parseFloat(rawNum);
                                        const suffix = match[3];

                                        if (!isNaN(numVal)) {
                                            const isFloat = rawNum.includes(".");
                                            return (
                                                <>
                                                    {prefix}
                                                    <AnimatedNumber
                                                        value={numVal}
                                                        format={(v) =>
                                                            isFloat
                                                                ? v.toFixed(1)
                                                                : Math.floor(v).toLocaleString()
                                                        }
                                                    />
                                                    {suffix}
                                                </>
                                            );
                                        }
                                    }

                                    return item.value;
                                })()}
                            </h3>

                            {/* LABEL */}
                            <p className="relative z-10 text-sm font-medium tracking-tight" style={{ color: theme.subtext, fontFamily: "var(--font-inter)" }}>
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
