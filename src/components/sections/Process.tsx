"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PROCESS_CONTENT } from "@/constants/process";
import AnimatedLine from "../animated/AnimatedLine";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "../../constants/theme";
import GlowBeam from "../effects/GlowBeam";
import RandomGradientGlow from "../effects/RandomGradientGlow";

export default function ProcessSection() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="process"
      className="relative w-full py-28 px-6"
      style={{
        backgroundColor: theme.background,
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Tag */}
        <div className="flex items-center gap-2 font-semibold text-sm">
          <PROCESS_CONTENT.tag.icon
            className="w-4 h-4"
            style={{ color: theme.primary }}
          />
          <span style={{ color: theme.text }}>{PROCESS_CONTENT.tag.label}</span>
        </div>

        {/* Title */}
        <h2
          className="text-[42px] md:text-[42px] font-bold mt-3"
          style={{ color: theme.text }}
        >
          <AnimatedLine text={PROCESS_CONTENT.title} delay={0.1} isHeading={true}/>
        </h2>

        {/* Subtitle */}
        <div
          className="text-md font-medium max-w-3xl mt-4 leading-relaxed"
          style={{ color: theme.subtext }}
        >
          <AnimatedLine text={PROCESS_CONTENT.description} delay={0.1} />
        </div>

        {/* ANIMATED GRID */}
        <motion.div
          ref={cardsRef}
          initial={{ opacity: 0, y: 60 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14"
        >
          {PROCESS_CONTENT.processSteps.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl shadow-sm p-10"
              style={{
                background: theme.cardBg,
                border: `1px solid ${theme.text}15`,
              }}
            >
              <GlowBeam color={theme.accents.a} />
              {/* Step Badge */}
              <div
                className="inline-flex items-center justify-center w-8 h-8 rounded-full font-semibold"
                style={{
                  background: theme.background,
                  border: `1px solid ${theme.text}20`,
                  color: theme.primary, 
                }}
              >
                {item.step}
              </div>

              {/* Title */}
              <h3
                className="text-[24px] font-medium mb-4 mt-4"
                style={{ color: theme.text }}
              >
                {item.title}
              </h3>

              {/* Bullets */}
              <ul className="space-y-3 leading-relaxed">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex gap-2">
                    <span style={{ color: theme.primary }}>•</span>
                    <span style={{ color: theme.subtext }}>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
