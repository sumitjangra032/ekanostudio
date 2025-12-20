"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import AnimatedLine from "../animated/AnimatedLine";
import { FaEye } from "react-icons/fa";

export default function ServiceWhatYouSee({ data }: { data: any }) {
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
            id="whatYouSee"
            ref={sectionRef}
            className="py-20 px-6"
        >
            <div className="max-w-6xl mx-auto">

                <motion.div
                    className="flex justify-center items-center gap-2 font-semibold uppercase mb-6"
                    style={{ y: yText, color: theme.primary }}
                >
                    <FaEye size={20} />
                    What you see
                </motion.div>

                <motion.h2
                    className="text-3xl font-bold text-center mb-16"
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
                            className="p-6 rounded-2xl border flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300"
                            style={{
                                borderColor: `${theme.text}10`,
                                background: theme.cardBg,
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <h3
                                className=" text-lg leading-snug"
                                style={{ color: theme.text }}
                            >
                                <AnimatedLine text={item} delay={0.1} />
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
