"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import AnimatedLine from "../animated/AnimatedLine";
import { FaHeart } from "react-icons/fa";

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

    return (    
        <section
            id="whyMatters"
            ref={sectionRef}
            className="py-20 px-6 relative z-10"
        >
            <div className="max-w-6xl mx-auto">

                <motion.div
                    className="flex justify-center items-center gap-2 font-semibold uppercase mb-6"
                    style={{ y: yText, color: theme.primary }}
                >
                    <FaHeart size={20} />
                    Why this matters
                </motion.div>

                <motion.h2
                    className="text-4xl font-bold text-center mb-12"
                    style={{ y: yText, color: theme.text }}
                >
                    <AnimatedLine text={data.heading} delay={0.1} isHeading={true} />
                </motion.h2>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    style={{ y: yCards }}
                >
                    {data.items.map((item: string, i: number) => (
                        <motion.div
                            key={i}
                            className="p-8 rounded-2xl relative overflow-hidden group"
                            style={{
                                background: theme.cardBg,
                                border: `1px solid ${theme.text}10`,
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            {/* Hover glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: `linear-gradient(to bottom right, ${theme.primary}10, transparent)`,
                                }}
                            />

                            <div className="relative ">
                                <h3
                                    className="text-lg  leading-snug"
                                    style={{ color: theme.text }}
                                >
                                    <AnimatedLine text={item} delay={0.1} />
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
