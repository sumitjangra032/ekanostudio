"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import AnimatedLine from "../animated/AnimatedLine";
import { FaBoxOpen, FaCheckCircle } from "react-icons/fa";

export default function ServiceDeliverables({ data }: { data: any }) {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];

    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const yList = useTransform(scrollYProgress, [0, 1], [0, -15]);

    return (
        <section
            id="deliverables"
            ref={sectionRef}
            className="py-20 px-6"
        >
            <div className="max-w-5xl mx-auto">

                <motion.div
                    className="flex justify-center items-center gap-2 font-semibold uppercase mb-6"
                    style={{ y: yText, color: theme.primary }}
                >
                    <FaBoxOpen size={20} />
                    Deliverables
                </motion.div>
                <motion.h2
                    className="text-4xl font-bold text-center mb-12"
                    style={{ y: yText, color: theme.text }}
                >
                    <AnimatedLine text={data.heading} delay={0.1} isHeading={true} />
                </motion.h2>
                <motion.div
                    className="grid md:grid-cols-2 gap-x-12 gap-y-4"
                    style={{ y: yList }}
                >
                    {data.items.map((item: string, i: number) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 py-3 border-b"
                            style={{ borderColor: `${theme.text}10` }}
                        >
                            <FaCheckCircle
                                size={20}
                                style={{ color: theme.accents.b }}
                                className="shrink-0"
                            />

                            <div className="font-medium text-lg" style={{ color: theme.subtext }}>
                                <AnimatedLine text={item} delay={0.1} />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
