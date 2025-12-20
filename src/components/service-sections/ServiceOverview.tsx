"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import AnimatedLine from "../animated/AnimatedLine";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function ServiceOverview({ data }: { data: any }) {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];

    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const yContent = useTransform(scrollYProgress, [0, 1], [0, -40]);

    return (
        <section
            id="overview"
            ref={sectionRef}
            className="py-20 px-6"
        >
            <div className="max-w-4xl mx-auto text-center">

                <motion.div
                    className="flex justify-center items-center gap-2 font-semibold uppercase mb-6"
                    style={{ y: yText, color: theme.primary }}
                >
                    <HiOutlineLightBulb size={20} />
                    Overview
                </motion.div>

                <motion.h2
                    className="text-4xl font-bold mb-8"
                    style={{ y: yText, color: theme.text }}
                >
                    <AnimatedLine text={data.heading} delay={0.1} isHeading={true} />
                </motion.h2>

                <motion.div
                    className="text-lg md:text-xl leading-relaxed font-medium"
                    style={{ y: yContent, color: theme.subtext }}
                >
                    <AnimatedLine text={data.content} />
                </motion.div>
            </div>
        </section>
    );
}
