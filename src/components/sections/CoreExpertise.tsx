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
                {/* Header */}
                <div className="text-center md:text-left mb-20 max-w-3xl">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{
                            background: `${theme.accents.a}08`,
                            border: `1px solid ${theme.accents.a}20`,
                            backdropFilter: "blur(4px)",
                        }}
                    >
                        {/* CSS Pulse Dot */}
                        <div className="pulse red"></div>

                        <span
                            className="text-xs font-medium tracking-wide "
                            style={{ color: theme.accents.a }}
                        >
                            {CORE_EXPERTISE_CONTENT.tag.label}
                        </span>
                    </div>

                    <h2
                        className="text-[32px] md:text-[42px] font-semibold mb-2"
                        style={{ color: theme.text, fontFamily: "var(--font-general-sans)" }}
                    >
                        <AnimatedLine text={CORE_EXPERTISE_CONTENT.title} isHeading={true} gradient={{
                            from: "#fac175",
                            via: "#ff006a",
                            to: "#8b5cf6",
                        }} />
                    </h2>
                    <div className="mr-8 mt-4 mb-2">
                        <AnimatedLine
                            text={CORE_EXPERTISE_CONTENT.description}
                            delay={0.1}
                            isHeading={false}
                            className="text-left"
                            textColor={theme.subtext}
                        />
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
                scale,
            }}
        >
            <div
                className={`
          relative overflow-hidden rounded-3xl
          flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
          h-auto md:h-[520px]
          border border-white/10
          bg-black/40
          backdrop-blur-xl
          transition-all duration-500
          hover:-translate-y-1
        `}
            >
                {/* Ambient Glow */}
                <GlowBeam color={theme.accents.a} />

                {/* Left Accent Line */}
                <div
                    className="absolute left-0 top-0 h-full w-[2px]"
                    style={{
                        background: `linear-gradient(
              to bottom,
              transparent,
              ${theme.accents.a},
              transparent
            )`,
                    }}
                />

                {/* CONTENT */}
                <div className="flex-1 p-6 md:p-12 flex flex-col justify-center relative z-10">
                    <h3
                        className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight"
                        style={{
                            color: theme.text,
                            fontFamily: "var(--font-general-sans)",
                        }}
                    >
                        {card.title}
                    </h3>

                    <p
                        className="text-[16px] leading-relaxed mb-8 max-w-xl"
                        style={{
                            color: theme.subtext,
                            fontFamily: "var(--font-inter)",
                        }}
                    >
                        {card.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mt-auto">
                        {card.tags.map((tag, tIdx) => (
                            <span
                                key={tIdx}
                                className="px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-md"
                                style={{
                                    borderColor: `${theme.accents.a}30`,
                                    color: theme.subtext,
                                    background: `${theme.accents.a}10`,
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* IMAGE SIDE */}
                <div className="relative w-full md:flex-1 h-64 md:h-auto overflow-hidden">
                    {/* Gradient Overlay */}
                    <div
                        className="absolute inset-0 z-10"
                        style={{
                            background: `radial-gradient(
                600px circle at top right,
                ${theme.accents.a}25,
                transparent 45%
              )`,
                        }}
                    />

                    {/* Image */}
                    <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover opacity-80"
                    />
                </div>
            </div>
        </motion.div>
    );
}
