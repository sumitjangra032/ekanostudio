"use client";

import { m, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { BENEFITS_CONTENT } from "@/constants/benefits";
import AnimatedLine from "../animated/AnimatedLine";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "../../constants/theme";
import AnimateDownloadedSVG from "../animated/AnimateDownloadedSVG";

import RandomGradientGlow from "../effects/RandomGradientGlow";


export default function Benefits() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-10% 0px" });


  return (
    <section
      id="benefits"
      className="relative w-full py-28 px-6"
      style={{
        backgroundColor: theme.background,
      }}
    >

      <div className="max-w-6xl mx-auto">
        {/* Top Tag */}
        <div className="flex items-center gap-2 font-semibold text-sm">
          <BENEFITS_CONTENT.tag.icon
            className="w-4 h-4"
            style={{ color: theme.primary }}
          />
          <span style={{ color: theme.text }}>{BENEFITS_CONTENT.tag.label}</span>
        </div>

        {/* Title */}
        <h2
          className="text-[42px] font-bold mt-3"
          style={{ color: theme.text }}
        >
          <AnimatedLine text={BENEFITS_CONTENT.title} delay={0.1} isHeading={true} />
        </h2>

        {/* Subtitle */}
        <div
          className="text-lg max-w-3xl mt-4 leading-relaxed"
          style={{ color: theme.subtext }}
        >
          <AnimatedLine text={BENEFITS_CONTENT.description} delay={0.1} />
        </div>

        {/* CARD GRID */}
        <m.div
          ref={cardsRef}
          initial={{ opacity: 0, y: 60 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14"
        >
          {BENEFITS_CONTENT.benefitsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl shadow-sm p-8"
                style={{
                  background: theme.cardBg,
                  border: `1px solid ${theme.text}15`,
                }}
              >


                {/* Main Icon */}

                <AnimateDownloadedSVG src={Icon} size={35} stroke={theme.primary} />

                {/* Title */}
                <h3
                  className="text-2xl font-medium mt-8 mb-3"
                  style={{ color: theme.text }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="leading-relaxed"
                  style={{ color: theme.subtext }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}
