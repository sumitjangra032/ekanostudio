"use client";

import {
    m,
    useInView,
    useScroll,
    useSpring,
    useMotionValue,
    useMotionValueEvent,
    MotionValue,
    useTransform
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import AnimatedLine from "../animated/AnimatedLine";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import AnimateDownloadedSVG from "../animated/AnimateDownloadedSVG";
import { FlowMergeIcon, TrophyIcon, AnalyticsIcon } from "../icons/LocalIcons";
import RandomGradientGlow from "../effects/RandomGradientGlow";
import FloatingParticles from "../animated/FloatingParticles";
import ParallaxBackground from "../animated/ParallaxBackground";

export default function ServiceProcess({ data }: { data: any }) {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];
    const GLOW_COLOR = theme.primary;

    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const maxProgress = useMotionValue(0);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest <= 0.01) {
            maxProgress.set(0);
        } else if (latest > maxProgress.get()) {
            maxProgress.set(latest);
        }
    });

    const scaleY = useSpring(maxProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const sectionRef = useRef(null);

    const { scrollYProgress: sectionScroll } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yText = useTransform(sectionScroll, [0, 1], [0, -150]);
    const yTimeline = useTransform(sectionScroll, [0, 1], [0, -15]);
    const [lineStyle, setLineStyle] = useState({ top: 0, height: 0 });
    const dotsRef = useRef<{ [key: number]: HTMLDivElement | null }>({});

    const updateLinePosition = () => {
        const firstDot = dotsRef.current[0];
        const lastDot = dotsRef.current[data.steps.length - 1];
        const container = containerRef.current;

        if (firstDot && lastDot && container) {
            const getRelativeTop = (el: HTMLElement) => {
                let top = 0;
                let current: HTMLElement | null = el;
                while (current && current !== container) {
                    top += current.offsetTop;
                    current = current.offsetParent as HTMLElement;
                }
                return top;
            };

            const firstTop = getRelativeTop(firstDot) + firstDot.offsetHeight / 2;
            const lastTop = getRelativeTop(lastDot) + lastDot.offsetHeight / 2;

            setLineStyle({ top: firstTop, height: lastTop - firstTop });
        }
    };

    useEffect(() => {
        updateLinePosition();
        window.addEventListener("resize", updateLinePosition);
        const timeout = setTimeout(updateLinePosition, 500);
        return () => {
            window.removeEventListener("resize", updateLinePosition);
            clearTimeout(timeout);
        };
    }, [data.steps]);

    return (
        <section
            id="process"
            ref={sectionRef}
            className="relative w-full py-28 px-6"
        >
            <ParallaxBackground
                image="/images/service-page-bg/wave-svg-2.svg"
                speed={0.3}
                zIndex={0}
                opacity={0.4}
                backgroundSize="cover"
                backgroundPosition="center"
            />

            {/* Floating Particles */}
            <FloatingParticles count={15} />
            <div className="max-w-6xl mx-auto">

                <m.div
                    className="flex flex-col items-center text-center"
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
                                Process
                            </span>
                        </div>
                    </div>
                    <h2
                        className="text-[32px] md:text-[42px] font-bold"
                        style={{ color: theme.text }}
                    >
                        <AnimatedLine
                            text="Step By Step"
                            delay={0.1}
                            isHeading
                            gradient={{
                                from: "#fac175",
                                via: "#ff006a",
                                to: "#8b5cf6",
                            }}
                        />
                    </h2>
                </m.div>

                <m.div
                    ref={containerRef}
                    className="relative mt-20"
                    style={{ y: yTimeline }}
                >
                    <div
                        className="absolute left-4 md:left-[50%] w-[1px] -translate-x-1/2"
                        style={{
                            top: lineStyle.top,
                            height: lineStyle.height,
                            background: `linear-gradient(to bottom, ${theme.primary}00, ${theme.primary}40, ${theme.primary}00)`
                        }}
                    />

                    <m.div
                        className="absolute left-4 md:left-[50%] w-[3px] -translate-x-1/2 origin-top rounded-full"
                        style={{
                            top: lineStyle.top,
                            height: lineStyle.height,
                            background: GLOW_COLOR,
                            scaleY,
                            boxShadow: `0 0 15px ${GLOW_COLOR}`
                        }}
                    />

                    <div className="space-y-12">
                        {data.steps.map((step: any, idx: number) => (
                            <ProcessStep
                                key={idx}
                                step={step}
                                idx={idx}
                                theme={theme}
                                GLOW_COLOR={GLOW_COLOR}
                                scrollYProgress={scrollYProgress}
                                onDotMount={(el) => (dotsRef.current[idx] = el)}
                            />
                        ))}
                    </div>
                </m.div>
            </div>
        </section>
    );
}

function ProcessStep({
    step,
    idx,
    theme,
    GLOW_COLOR,
    scrollYProgress,
    onDotMount
}: {
    step: any;
    idx: number;
    theme: any;
    GLOW_COLOR: string;
    scrollYProgress: MotionValue<number>;
    onDotMount: (el: HTMLDivElement | null) => void;
}) {
    const isEven = idx % 2 === 0;
    const dotRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(dotRef, { margin: "-50% 0px -50% 0px" });
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (isInView) setIsActive(true);
    }, [isInView]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest <= 0.01) setIsActive(false);
    });

    useEffect(() => {
        if (dotRef.current) onDotMount(dotRef.current);
    }, [onDotMount]);

    return (
        <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${isEven ? "md:flex-row-reverse" : ""}`}
        >
            {/* Timeline Dot */}
            <m.div
                ref={dotRef}
                className="absolute left-4 md:left-[50%] top-1/2 w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2 z-10"
                initial={{
                    backgroundColor: theme.background,
                    borderColor: theme.primary,
                    scale: 1,
                    boxShadow: "none",
                }}
                animate={
                    isActive
                        ? {
                            backgroundColor: GLOW_COLOR,
                            borderColor: GLOW_COLOR,
                            scale: 1.6,
                            boxShadow: `0 0 12px ${GLOW_COLOR}`,
                        }
                        : {
                            backgroundColor: theme.background,
                            borderColor: theme.primary,
                            scale: 1,
                            boxShadow: "none",
                        }
                }
                transition={{ duration: 0.5, ease: "backOut" }}
                style={{ borderWidth: "2px", borderStyle: "solid" }}
            />

            <div className="hidden md:block md:w-1/2" />

            {/* Content Card */}
            <div className="flex-1 md:w-1/2 pl-12 md:pl-0">
                <div
                    className={`
                        relative p-8 rounded-3xl
                        bg-black/40
                        border border-white/10
                        backdrop-blur-xl
                        overflow-hidden
                        transition-all duration-500
                        hover:-translate-y-1
                        ${isEven ? "md:mr-12" : "md:ml-12"}
                    `}
                >


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

                    {/* Hover glow */}
                    <div
                        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                            background: `radial-gradient(
                                600px circle at top right,
                                ${theme.accents.a}12,
                                transparent 45%
                            )`,
                        }}
                    />

                    <RandomGradientGlow
                        colorA={theme.accents.a}
                        colorB={theme.accents.b}
                        variant={isEven ? "right" : "left"}
                        opacity={0.4}
                    />

                    {/* Title + Icon */}
                    <div className="flex items-center gap-4 mb-4 justify-between relative z-10">
                        <div className="flex items-center gap-4">
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                                style={{
                                    background: `${theme.accents.a}14`,
                                    border: `1px solid ${theme.accents.a}30`,
                                }}
                            >
                                <AnimateDownloadedSVG
                                    src={step.icon}
                                    size={28}
                                    stroke={theme.accents.a}
                                    repeat={false}
                                />
                            </div>
                            <h3
                                className="text-2xl font-semibold tracking-tight"
                                style={{ color: theme.text, fontFamily: "var(--font-general-sans)" }}
                            >
                                <AnimatedLine text={step.title} delay={0.1} />
                            </h3>
                        </div>
                        <span
                            className="text-4xl font-black opacity-10"
                            style={{ color: theme.accents.a }}
                        >
                            {idx + 1}
                        </span>
                    </div>

                    <div className="leading-relaxed relative z-10" style={{ color: theme.subtext, fontFamily: "var(--font-inter)" }}>
                        <AnimatedLine text={step.description} />
                    </div>
                </div>
            </div>
        </m.div>
    );
}
