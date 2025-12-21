"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PROCESS_CONTENT } from "@/constants/process";
import AnimatedLine from "../animated/AnimatedLine";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "../../constants/theme";
import GlowBeam from "../effects/GlowBeam";

export default function ProcessSection() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  const cardsRef = useRef<HTMLDivElement | null>(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="process"
      className="relative w-full py-28 px-6"
      style={{ backgroundColor: theme.background }}
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Top Tag */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{
            background: `${theme.accents.a}08`,
            border: `1px solid ${theme.accents.a}20`,
            backdropFilter: "blur(4px)",
          }}
        >
          <div className="pulse red" />
          <span
            className="text-xs font-medium tracking-wide"
            style={{ color: theme.accents.a }}
          >
            {PROCESS_CONTENT.tag.label}
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-[32px] md:text-[42px] font-bold"
          style={{ color: theme.text }}
        >
          <AnimatedLine
            text={PROCESS_CONTENT.title}
            delay={0.1}
            isHeading
            gradient={{
              from: "#fac175",
              via: "#ff006a",
              to: "#8b5cf6",
            }}
          />
        </h2>

        {/* Subtitle */}
        <div className="mt-4 mb-12 max-w-3xl">
          <AnimatedLine
            text={PROCESS_CONTENT.description}
            delay={0.1}
            isHeading={false}
            textColor={theme.subtext}
          />
        </div>

        {/* PROCESS CARDS */}
        <motion.div
          ref={cardsRef}
          initial={{ opacity: 0, y: 60 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {PROCESS_CONTENT.processSteps.map((item, idx) => (
            <div
              key={idx}
              className="
                relative rounded-3xl p-8
                bg-black/40
                border border-white/10
                backdrop-blur-xl
                overflow-hidden
                transition-all duration-500
                hover:-translate-y-1
              "
            >
              {/* Accent Glow */}
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

              {/* Step Badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6"
                style={{
                  background: `${theme.accents.a}14`,
                  color: theme.accents.a,
                  border: `1px solid ${theme.accents.a}30`,
                }}
              >
                <span className="opacity-70">Step</span>
                <span>{item.step}</span>
              </div>

              {/* Card Title */}
              <h3
                className="text-2xl font-semibold mb-5 tracking-tight"
                style={{
                  color: theme.text,
                  fontFamily: "var(--font-general-sans)",
                }}
              >
                {item.title}
              </h3>

              {/* Bullet Content (Paragraph Style) */}
              <div className="space-y-4">
                {item.bullets.map((bullet, bIdx) => (
                  <div
                    key={bIdx}
                    className="flex gap-4 items-start"
                  >
                    {/* Dot */}
                    <span
                      className="mt-2 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: theme.accents.a }}
                    />

                    {/* Text */}
                    <p
                      className="text-[15px] leading-relaxed font-light w-full max-w-none"
                      style={{
                        color: theme.subtext,
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      {String(bullet).replace(/\n+/g, " ")}
                    </p>
                  </div>
                ))}
              </div>

              {/* Hover Ambient */}
              <div
                className="
                  absolute inset-0 opacity-0
                  hover:opacity-100
                  transition-opacity duration-500
                  pointer-events-none
                "
                style={{
                  background: `radial-gradient(
                    600px circle at top right,
                    ${theme.accents.a}10,
                    transparent 45%
                  )`,
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
