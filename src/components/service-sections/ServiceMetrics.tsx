"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";

import AnimateDownloadedSVG from "../animated/AnimateDownloadedSVG";
import { AnalyticsIcon } from "../icons/LocalIcons";
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

    // Calculate grid columns based on item count for better centering
    const getGridConfig = () => {
        const itemCount = data.items.length;

        if (itemCount === 1) {
            return "grid-cols-1 max-w-md mx-auto";
        } else if (itemCount === 2) {
            return "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto";
        } else if (itemCount === 3) {
            return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto";
        } else if (itemCount === 5) {
            return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-6xl mx-auto";
        } else {
            return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
        }
    };

    return (
        <section
            id="metrics"
            ref={sectionRef}
            className="py-20 px-4 sm:px-6 relative overflow-hidden"
        >
            {/* Background accent */}
            <div
                className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_50%_50%,var(--theme-accent-a)/0.05,transparent_70%)]"
            />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                {/* Header Section - Perfectly Centered */}
                <m.div
                    className="text-center mb-12 md:mb-16 px-4"
                    style={{ y: yText }}
                >
                    <div className="flex justify-center mb-6">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--theme-accent-a)]/10 border border-[var(--theme-accent-a)]/20 backdrop-blur-[4px]"
                        >
                            <div className="pulse red" />
                            <span
                                className="text-xs font-medium tracking-wide uppercase text-[var(--theme-accent-a)]"
                            >
                                Metrics
                            </span>
                        </div>
                    </div>

                    <h2
                        className="text-3xl sm:text-4xl md:text-[42px] font-bold mb-4 md:mb-6 px-2 text-[var(--theme-text)]"
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
                        className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 text-[var(--theme-subtext)]"
                    >
                        <AnimatedLine text={data.subheading} />
                    </div>
                </m.div>

                {/* Cards Grid - Perfectly Centered */}
                <m.div
                    className={`grid ${getGridConfig()} gap-4 md:gap-6 lg:gap-8 justify-items-center`}
                    style={{ y: yCards }}
                >
                    {data.items.map((item: any, i: number) => (
                        <m.div
                            key={i}
                            className="
                                group relative p-5 md:p-7 lg:p-8 rounded-2xl md:rounded-3xl
                                bg-gradient-to-br from-black/30 via-black/20 to-black/10
                                border border-white/5
                                backdrop-blur-xl
                                overflow-hidden
                                transition-all duration-500 ease-out
                                hover:-translate-y-2 hover:scale-[1.02]
                                flex flex-col items-center justify-center text-center
                                w-full max-w-xs sm:max-w-sm md:max-w-none
                                h-full
                                shadow-xl hover:shadow-2xl
                            "
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                delay: i * 0.1,
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            whileHover={{
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Animated gradient border */}
                            <div
                                className="absolute inset-0 rounded-2xl md:rounded-3xl p-[1px] bg-gradient-to-br from-[var(--theme-accent-a)]/20 via-[var(--theme-accent-b)]/20 to-transparent"
                            >
                                <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-black/40 via-black/30 to-black/20" />
                            </div>

                            {/* Hover Glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(300px_circle_at_var(--mouse-x)_var(--mouse-y),var(--theme-accent-a)/0.1,transparent_60%)]"
                            />

                            {/* Icon Container */}
                            <div
                                className="mb-4 md:mb-6 relative z-10 p-3 md:p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 bg-[var(--theme-accent-a)]/10 border border-[var(--theme-accent-a)]/15 [box-shadow:0_4px_20px_var(--theme-accent-a)/0.1]"
                            >
                                {typeof item.icon === 'string' ? (
                                    <AnimateDownloadedSVG
                                        src={item.icon}
                                        size={32}
                                        stroke="var(--theme-accent-a)"
                                        repeat={false}
                                    />
                                ) : (
                                    <item.icon size={32} className="text-[var(--theme-accent-a)]" />
                                )}
                            </div>

                            {/* Number Value */}
                            <h3
                                className="text-3xl md:text-4xl lg:text-5xl font-bold relative z-10 flex items-center justify-center mb-2 md:mb-3 text-[var(--theme-text)] font-sans [text-shadow:0_2px_20px_var(--theme-accent-a)/0.2]"
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
                                                <span className="mx-1 md:mx-2">-</span>
                                                <AnimatedNumber value={end} />
                                                {unit && <span className="ml-1 md:ml-2 text-2xl">{unit}</span>}
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

                                    return (
                                        <span className="text-2xl md:text-3xl">
                                            {item.value}
                                        </span>
                                    );
                                })()}
                            </h3>

                            {/* Label */}
                            <p
                                className="relative z-10 text-sm md:text-base font-medium tracking-tight md:tracking-normal px-2 text-[var(--theme-subtext)] font-inter max-w-[90%]"
                            >
                                {item.label}
                            </p>

                            {/* Subtle bottom accent */}
                            <div
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-[var(--theme-accent-a)] to-transparent"
                            />
                        </m.div>
                    ))}
                </m.div>

                {/* Decorative elements */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none bg-[var(--theme-accent-a)]"
                />
                <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-5 pointer-events-none bg-[var(--theme-accent-b)]"
                />
            </div>
        </section>
    );
}           