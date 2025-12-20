"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";

import AnimateDownloadedSVG from "../animated/AnimateDownloadedSVG";
import { IoAnalytics } from "react-icons/io5";
import AnimatedLine from "../animated/AnimatedLine";
import RandomGradientGlow from "../effects/RandomGradientGlow";
import { AnimatedNumber } from "../animated/AnimatedNumber";

export default function ServiceMetrics({ data }: { data: any }) {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];

    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, -115]);
    const yCards = useTransform(scrollYProgress, [0, 1], [0, -15]);

    return (
        <section
            id="metrics"
            ref={sectionRef}
            className="py-20 px-6"
            style={{  }}
        >
            <div className="max-w-7xl mx-auto">

                <motion.div
                    className="flex justify-center items-center gap-2 font-semibold uppercase"
                    style={{ y: yText, color: theme.primary }}
                >
                    <IoAnalytics size={16} />
                    Metrics
                </motion.div>

                <div className="text-center mb-12 mt-3">

                    <motion.h2
                        className="text-4xl font-bold mb-4 "
                        style={{ y: yText, color: theme.text }}
                    >
                        <AnimatedLine text={data.heading} delay={0.1} isHeading={true} />
                    </motion.h2>

                    <motion.div
                        className="text-lg"
                        style={{ y: yText, color: theme.subtext }}
                    >
                        <AnimatedLine text={data.subheading} />
                    </motion.div>
                </div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    style={{ y: yCards }}
                >
                    {data.items.map((item: any, i: number) => (
                        <motion.div
                            key={i}
                            className="text-center p-6 rounded-2xl border flex flex-col items-center gap-2 relative overflow-hidden group"
                            style={{
                                borderColor: `${theme.text}15`,
                                background: theme.cardBg,
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <RandomGradientGlow
                                colorA={theme.accents.a}
                                colorB={theme.accents.b}
                            />

                            {/* ICON */}
                            <div className="mb-2 relative z-10">
                                <AnimateDownloadedSVG
                                    src={item.icon}
                                    size={40}
                                    stroke={theme.primary}
                                    repeat={false}
                                />
                            </div>

                            {/* NUMBER */}
                            <h3
                                className="text-4xl font-bold relative z-10 flex items-center justify-center"
                                style={{ color: theme.primary }}
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
                            <p className="relative z-10" style={{ color: theme.subtext }}>
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
