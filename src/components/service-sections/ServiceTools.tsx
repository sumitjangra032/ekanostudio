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
                                Tools
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
