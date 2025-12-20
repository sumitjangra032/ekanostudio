"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaToolbox } from "react-icons/fa";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import AnimatedLine from "../animated/AnimatedLine";

export default function ServiceTools({ data }: { data: any }) {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];

    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const yItems = useTransform(scrollYProgress, [0, 1], [0, -15]);

    return (
        <section
            id="tools"
            ref={sectionRef}
            className="py-20 px-6"
        >
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    className="flex justify-center items-center gap-2 font-semibold uppercase"
                    style={{ y: yText, color: theme.primary }}
                >
                    <FaToolbox size={16} />
                    Tools
                </motion.div>

                <motion.h2
                    className="text-4xl font-bold mb-10"
                    style={{ y: yText, color: theme.text }}
                >
                    <AnimatedLine text={data.heading} delay={0.1} isHeading={true}  />
                </motion.h2>

                <motion.div
                    className="flex flex-wrap justify-center gap-4"
                    style={{ y: yItems }}
                >
                    {data.items.map((item: any, i: number) => (
                        <div
                            key={i}
                            className="px-6 py-3 rounded-full border text-sm font-medium"
                            style={{
                                borderColor: `${theme.text}20`,
                                color: theme.subtext
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
