"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaClock } from "react-icons/fa";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import AnimatedLine from "../animated/AnimatedLine";
import ParallaxBackground from "../animated/ParallaxBackground";

export default function ServiceTimeline({ data }: { data: any }) {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];

    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const yCards = useTransform(scrollYProgress, [0, 1], [0, -15]);

    return (
        <section
            id="timeline"
            ref={sectionRef}
            className="py-20 px-6 relative"
        >

            <motion.div
                className="max-w-4xl mx-auto text-center"
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
                            Timeline
                        </span>
                    </div>
                </div>

                <h2
                    className="text-[32px] md:text-[42px] font-bold mb-10"
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
            </motion.div>

            <motion.div
                className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6 px-4"
                style={{ y: yCards }}
            >
                {data.items.map((item: any, i: number) => (
                    <motion.div
                        key={i}
                        className="
                            group relative w-full md:flex-1 p-8 rounded-3xl
                            bg-[#09090b]
                            border border-white/10
                            backdrop-blur-xl
                            overflow-hidden
                            transition-all duration-500
                            hover:-translate-y-1
                        "
                        style={{
                        }}
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
                        <p
                            className="text-lg mb-2"
                            style={{ color: theme.text }}
                        >
                            {item.label}
                        </p>
                        <p
                            className="text-lg font-bold"
                            style={{ color: theme.primary }}
                        >
                            {item.duration}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
