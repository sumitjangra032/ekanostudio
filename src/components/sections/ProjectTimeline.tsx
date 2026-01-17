"use client";

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useMotionValue,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { PROJECT_TIMELINE_CONTENT } from "@/constants/projectTimeline";
import AnimatedLine from "../animated/AnimatedLine";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "../../constants/theme";

import AnimateDownloadedSVG from "../animated/AnimateDownloadedSVG";

export default function ProjectTimeline() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];
  const GLOW_COLOR = "#FFD700";

  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const maxProgress = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest <= 0.01) maxProgress.set(0);
    else if (latest > maxProgress.get()) maxProgress.set(latest);
  });

  const scaleY = useSpring(maxProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="project-timeline"
      className="relative w-full py-28 px-6"
      style={{ backgroundColor: theme.background }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div
            className="
            inline-flex items-center gap-1
            px-4 py-2
            rounded-full
            border
            text-sm font-light
            mb-3
            backdrop-blur-xs
            "
            style={{
              borderColor: "#22c55e",
              background: "rgba(34,197,94,0.08)",
            }}
          >
            <div className="pulse green" />

            <span className="text-green-500">
              {PROJECT_TIMELINE_CONTENT.tag.label}
            </span>
          </div>


          <h2
            className="text-[32px] md:text-[42px] font-bold"
            style={{ color: theme.text }}
          >
            <AnimatedLine
              text={PROJECT_TIMELINE_CONTENT.title}
              delay={0.1}
              isHeading
              gradient={{
                from: "#fac175",
                via: "#ff006a",
                to: "#8b5cf6",
              }}
            />
          </h2>

          <div className="max-w-3xl mt-4">
            <AnimatedLine
              text={PROJECT_TIMELINE_CONTENT.description}
              delay={0.1}
              textColor={theme.subtext}
            />
          </div>
        </div>

        {/* TIMELINE */}
        <div ref={containerRef} className="relative">

          {/* Base Line */}
          <div
            className="absolute left-4 md:left-1/2 w-[1px] -translate-x-1/2"
            style={{
              top: "180px",
              bottom: "180px",
              background: `linear-gradient(
                to bottom,
                transparent,
                ${theme.primary}40,
                transparent
              )`,
            }}
          />

          {/* Active Line */}
          <motion.div
            className="absolute left-4 md:left-1/2 w-[3px] -translate-x-1/2 origin-top rounded-full"
            style={{
              top: "180px",
              bottom: "180px",
              background: GLOW_COLOR,
              scaleY,
              boxShadow: `0 0 15px ${GLOW_COLOR}`,
            }}
          />

          <div className="space-y-16">
            {PROJECT_TIMELINE_CONTENT.phases.map((phase, idx) => (
              <TimelinePhase
                key={idx}
                phase={phase}
                idx={idx}
                theme={theme}
                GLOW_COLOR={GLOW_COLOR}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelinePhase({
  phase,
  idx,
  theme,
  GLOW_COLOR,
  scrollYProgress,
}: {
  phase: any;
  idx: number;
  theme: any;
  GLOW_COLOR: string;
  scrollYProgress: MotionValue<number>;
}) {
  const isEven = idx % 2 === 0;
  const dotRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(dotRef, { margin: "-40% 0px -40% 0px" });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isInView) setIsActive(true);
  }, [isInView]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest <= 0.01) setIsActive(false);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      {/* Timeline Dot */}
      <motion.div
        ref={dotRef}
        className="absolute left-4 md:left-1/2 top-1/2 w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ scale: 1 }}
        animate={
          isActive
            ? {
              backgroundColor: GLOW_COLOR,
              scale: 1.6,
              boxShadow: `0 0 12px ${GLOW_COLOR}`,
            }
            : {
              backgroundColor: theme.background,
              scale: 1,
              boxShadow: "none",
            }
        }
        transition={{ duration: 0.4, ease: "backOut" }}
        style={{
          border: `2px solid ${isActive ? GLOW_COLOR : theme.primary}`,
        }}
      />

      <div className="hidden md:block md:w-1/2" />

      {/* CARD */}
      <div className="flex-1 md:w-1/2 pl-12 md:pl-0">
        <div
          className={`
            relative p-8 rounded-3xl
            bg-black/40
            border border-white/10
            backdrop-blur-xl
            overflow-hidden
            ${isEven ? "md:mr-12" : "md:ml-12"}
          `}
        >


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

          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: `${theme.accents.a}15`,
                color: theme.accents.a,
              }}
            >
              {phase.duration}
            </span>

            <AnimateDownloadedSVG
              src={phase.icon}
              size={32}
              stroke={theme.accents.a}
            />
          </div>

          <h3
            className="text-2xl font-semibold mb-4"
            style={{ color: theme.text }}
          >
            {phase.title}
          </h3>

          <p
            className="leading-relaxed mb-6 text-[15px]"
            style={{ color: theme.subtext }}
          >
            {phase.description}
          </p>

          {/* Features */}
          <ul className="space-y-3 text-left">
            {phase.features.map((feature: string, fIdx: number) => (
              <li
                key={fIdx}
                className="flex items-start gap-3 text-sm"
                style={{ color: theme.subtext }}
              >
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: theme.accents.a }}
                />
                <span className="block w-full">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
