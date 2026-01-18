"use client";
import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import AnimatedLine from "../animated/AnimatedLine";
import AnimatedRotateButton from "../animated/AnimatedRotateButton";
import Image from "next/image";
import { BRAND, GLOBAL_CTA_CONTENT, BRAND_LOGO } from "@/constants/global";
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
            className="py-10 px-6 text-center"
        >
            <div className="max-w-3xl mx-auto">
                <m.div style={{ y: yText }}>
                    <Link
                        href="/"
                        className="flex items-center justify-center mb-6"
                    >
                        <Image
                            src={BRAND_LOGO.src}
                            alt={BRAND.name}
                            width={BRAND_LOGO.centered.width}
                            height={BRAND_LOGO.centered.height}
                            className={BRAND_LOGO.centered.className}
                        />
                    </Link>

                    <h2
                        className="text-[32px] md:text-[42px] font-bold leading-tight mb-4"
                        style={{ color: theme.text }}
                    >
                        <AnimatedLine
                            text={data.heading}
                            delay={0.1}
                            gradient={{
                                from: "#fac175",
                                via: "#ff006a",
                                to: "#8b5cf6",
                            }}
                        />
                    </h2>


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
                </m.div>

            </div>
        </section>
    );
}
