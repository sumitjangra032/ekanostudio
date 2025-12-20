"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import AnimatedLine from "../animated/AnimatedLine";
import AnimatedRotateButton from "../animated/AnimatedRotateButton";
import { BRAND, GLOBAL_CTA_CONTENT } from "@/constants/global";
import Link from "next/link";

export default function ServiceCta({ data }: { data: any }) {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];

    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, -110]);
    const ySub = useTransform(scrollYProgress, [0, 1], [0, -15]);

    return (
        <section
            id="cta"
            ref={sectionRef}
            className="py-20 px-6 text-center"
        >
            <div className="max-w-3xl mx-auto">
                <motion.div style={{ y: yText }}>
                    <Link
                        href="/"
                        className="flex items-center justify-center font-bold text-3xl mb-6"
                        style={{ color: theme.text }}
                    >
                        {BRAND.name}
                    </Link>

                    <h2
                        className="text-4xl font-light leading-tight mb-4"
                        style={{ color: theme.text }}
                    >
                        <AnimatedLine text={data.heading} delay={0.1} />
                    </h2>
                </motion.div>

                <motion.div style={{ y: ySub }}>
                    <div
                        className="text-lg font-medium leading-relaxed mb-10"
                        style={{ color: theme.subtext }}
                    >
                        <AnimatedLine text={data.subheading} delay={0.3} />
                    </div>

                    <div className="flex justify-center">
                        <AnimatedRotateButton
                            text={GLOBAL_CTA_CONTENT.bookConsultation.title}
                            href={GLOBAL_CTA_CONTENT.bookConsultation.href}
                            color={theme.buttonBg}
                            accent={theme.accents}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
