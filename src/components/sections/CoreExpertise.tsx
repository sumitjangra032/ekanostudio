"use client";
import Image from "next/image";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { CORE_EXPERTISE_CONTENT } from "@/constants/coreExpertise";
import AnimatedLine from "../animated/AnimatedLine";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "../../constants/theme";
import GlowBeam from "../effects/GlowBeam";

export default function CoreExpertise() {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section
            id="core-expertise"
            ref={containerRef}
            className="relative w-full py-20 px-4 md:py-32 md:px-6"
            style={{ backgroundColor: theme.background }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center md:text-left mb-20 max-w-3xl">
                    <div className="flex items-center justify-center md:justify-start gap-2 font-semibold text-sm mb-4">
                        <CORE_EXPERTISE_CONTENT.tag.icon
                            className="w-4 h-4"
                            style={{ color: theme.primary }}
                        />
                        <span style={{ color: theme.text }}>
                            {CORE_EXPERTISE_CONTENT.tag.label}
                        </span>
                    </div>
                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6"
                        style={{ color: theme.text }}
                    >
                        <AnimatedLine text={CORE_EXPERTISE_CONTENT.title} isHeading={true} />
                    </h2>
                    <div
                        className="text-lg leading-relaxed"
                        style={{ color: theme.subtext }}
                    >
                        <AnimatedLine text={CORE_EXPERTISE_CONTENT.description} />
                    </div>
                </div>

                {/* Stacked Cards Container */}
                <div className="relative  pb-40">
                    {CORE_EXPERTISE_CONTENT.cards.map((card, index) => {
                        const targetScale = 1 - ((CORE_EXPERTISE_CONTENT.cards.length - index) * 0.05);
                        return (
                            <CoreExpertiseCard
                                key={index}
                                card={card}
                                index={index}
                                total={CORE_EXPERTISE_CONTENT.cards.length}
                                theme={theme}
                                progress={scrollYProgress}
                                range={[index * 0.25, 1]}
                                targetScale={targetScale}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

function CoreExpertiseCard({
    card,
    index,
    total,
    theme,
    progress,
    range,
    targetScale,
}: {
    card: typeof CORE_EXPERTISE_CONTENT.cards[0];
    index: number;
    total: number;
    theme: any;
    progress: MotionValue<number>;
    range: number[];
    targetScale: number;
}) {
    const topOffset = 120;

    const isEven = index % 2 === 0;

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="sticky w-full origin-top top-24 md:top-[120px]"
            style={{
                zIndex: index + 1,
                backgroundColor: theme.background,
                scale
            }}
        >
            <div
                className={`relative overflow-hidden rounded-3xl border shadow-2xl flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} h-auto md:h-[500px]`}
                style={{
                    backgroundColor: theme.cardBg,
                    borderColor: `${theme.text}10`,
                }}
            >
                <GlowBeam color={theme.accents.a} />

                {/* Content Side */}
                <div className="flex-1 md:flex-1 p-6 md:p-12 flex flex-col justify-center relative z-10 order-2 md:order-none">

                    <h3
                        className="text-3xl md:text-4xl font-bold mb-8"
                        style={{ color: theme.text }}
                    >
                        {card.title}
                    </h3>
                    <p
                        className="text-xl leading-relaxed mb-8"
                        style={{ color: theme.subtext }}
                    >
                        {card.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-auto">
                        {card.tags.map((tag, tIdx) => (
                            <span
                                key={tIdx}
                                className="px-4 py-2 rounded-full text-sm font-medium border"
                                style={{
                                    borderColor: `${theme.text}15`,
                                    color: theme.subtext,
                                    backgroundColor: `${theme.background}80`,
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Image/Visual Side */}
                <div className="w-full h-64 md:h-auto md:flex-1 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black order-1 md:order-none">
                    <div
                        className="absolute inset-0 opacity-100"
                        style={{
                            background: `linear-gradient(135deg, ${theme.primary}40 0%, ${theme.accents.b}80 100%)`
                        }}
                    />

                    <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover opacity-100 mix-blend-overlay"
                    />

                </div>
            </div>
        </motion.div>
    );
}
