"use client";

import { motion, useInView, useScroll, useSpring, useMotionValue, useMotionValueEvent, MotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { PROJECT_TIMELINE_CONTENT } from "@/constants/projectTimeline";
import AnimatedLine from "../animated/AnimatedLine";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "../../constants/theme";
import GlowBeam from "../effects/GlowBeam";
import AnimateDownloadedSVG from "../animated/AnimateDownloadedSVG";

export default function ProjectTimeline() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];
  const GLOW_COLOR = "#FFD700"; // Glowing Gold/Yellow

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
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

  return (
    <section
      id="project-timeline"
      className="relative w-full py-28 px-6"
      style={{
        backgroundColor: theme.background,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">

          {/* Top Tag */}
          <div className="flex items-center gap-2 font-semibold text-sm">
            <PROJECT_TIMELINE_CONTENT.tag.icon
              className="w-4 h-4"
              style={{ color: theme.primary }}
            />
            <span style={{ color: theme.text }}>
              {PROJECT_TIMELINE_CONTENT.tag.label}
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-[42px] md:text-[42px] font-bold mt-3"
            style={{ color: theme.text }}
          >
            <AnimatedLine text={PROJECT_TIMELINE_CONTENT.title} delay={0.1} isHeading={true} />
          </h2>

          {/* Subtitle */}
          <div
            className="text-md font-medium max-w-3xl mt-4 "
            style={{ color: theme.subtext }}
          >
            <AnimatedLine
              text={PROJECT_TIMELINE_CONTENT.description}
              delay={0.1}
            />
          </div>
        </div>

        {/* TIMELINE CONTAINER */}
        <div ref={containerRef} className="relative mt-20">
          {/* Vertical Line (Base) */}
          <div
            className="absolute left-4 md:left-[50%] w-[1px] -translate-x-1/2"
            style={{
              top: "182px",  
              bottom: "182px",
              background: `linear-gradient(to bottom, ${theme.primary}00, ${theme.primary}40, ${theme.primary}00)`
            }}
          />

          {/* Filling Line */}
          <motion.div
            className="absolute left-4 md:left-[50%] w-[3px] -translate-x-1/2 origin-top rounded-full"
            style={{
              top: "182px", 
              bottom: "182px",
              background: GLOW_COLOR,
              scaleY,
              boxShadow: `0 0 15px ${GLOW_COLOR}`
            }}
          />



          <div className="space-y-12">
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
  const dotRef = useRef(null);
  const isInView = useInView(dotRef, { margin: "-50% 0px -50% 0px" });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsActive(true);
    }
  }, [isInView]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest <= 0.01) {
      setIsActive(false);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 0.5,
        delay: 0.1,
        ease: "easeOut",
      }}
      className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${isEven ? "md:flex-row-reverse" : ""
        }`}
    >
      {/* Timeline Dot (Mobile & Desktop) */}
      <motion.div
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
        style={{
          borderWidth: "2px",
          borderStyle: "solid",
        }}
      />

      {/* Spacer for the other side */}
      <div className="hidden md:block md:w-1/2" />

      {/* Content Card */}
      <div className="flex-1 md:w-1/2 pl-12 md:pl-0">
        <div
          className={`relative p-8 rounded-2xl border ${isEven ? "md:mr-12" : "md:ml-12"
            }`}
          style={{
            background: theme.cardBg,
            borderColor: `${theme.text}10`,
          }}
        >
          {/* Glow Effect */}
          <GlowBeam color={theme.accents.a} />

          {/* Duration & Icon */}
          <div className="flex items-center justify-between mb-4">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: `${theme.primary}15`,
                color: theme.primary,
              }}
            >
              {phase.duration}
            </span>
            <AnimateDownloadedSVG
              src={phase.icon}
              size={35}
              stroke={theme.primary}
            />
          </div>

          <h3 className="text-2xl font-bold mb-3" style={{ color: theme.text }}>
            {phase.title}
          </h3>

          <p className="mb-6 leading-relaxed" style={{ color: theme.subtext }}>
            {phase.description}
          </p>

          {/* Features List */}
          <ul className="space-y-2">
            {phase.features.map((feature: any, fIdx: number) => (
              <li
                key={fIdx}
                className="flex items-center gap-2 text-sm font-medium"
                style={{ color: theme.subtext }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: theme.primary }}
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
