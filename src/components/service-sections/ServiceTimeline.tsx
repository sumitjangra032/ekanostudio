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
            
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    className="flex justify-center items-center gap-2 font-semibold uppercase"
                    style={{ y: yText, color: theme.primary }}
                >
                    <FaClock size={16} />
                    Timeline
                </motion.div>

                <motion.h2
                    className="text-4xl font-bold mb-10"
                    style={{ y: yText, color: theme.text }}
                >
                    <AnimatedLine text={data.heading} delay={0.1} isHeading={true} />
                </motion.h2>

                <motion.div
                    className="flex flex-col md:flex-row justify-center gap-6"
                    style={{ y: yCards }}
                >
                    {data.items.map((item: any, i: number) => (
                        <motion.div
                            key={i}
                            className="flex-1 p-6 rounded-2xl border"
                            style={{
                                borderColor: `${theme.text}10`,
                                background: theme.cardBg,
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
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
            </div>
        </section>
    );
}
