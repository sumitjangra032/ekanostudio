"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import AnimatedLine from "../animated/AnimatedLine";
import { FaTrophy } from "react-icons/fa";
import RandomGradientGlow from "../effects/RandomGradientGlow";
import ParallaxBackground from "../animated/ParallaxBackground";

export default function ServiceCaseStudy({ data }: { data: any }) {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];

    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const yCard = useTransform(scrollYProgress, [0, 1], [0, -15]);

    return (
        <section
            id="caseStudy"
            ref={sectionRef}
            className="py-20 px-6 relative z-10"
        >

            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="flex justify-center items-center gap-2 font-semibold uppercase mb-4"
                    style={{ y: yText, color: theme.primary }}
                >
                    <FaTrophy size={16} />
                    Case Study
                </motion.div>

                <motion.h2
                    className="text-4xl font-bold text-center mb-10"
                    style={{ y: yText, color: theme.text }}
                >
                    <AnimatedLine text={data.heading} delay={0.1} isHeading={true} />
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="p-8 md:p-12 rounded-2xl border relative overflow-hidden group "
                    style={{
                        y: yCard,
                        background: `linear-gradient(145deg, ${theme.cardBg}, ${theme.background})`,
                        borderColor: `${theme.primary}20`
                    }}
                >
                    <RandomGradientGlow colorA={theme.accents.a} colorB={theme.accents.b} />

                    <div className="relative z-10">
                        <div
                            className="text-xl md:text-2xl leading-relaxed text-center"
                            style={{ color: theme.text }}
                        >
                            <AnimatedLine text={data.content} delay={0.2} textSize="text-lg md:text-xl" textColor={theme.subtext} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
