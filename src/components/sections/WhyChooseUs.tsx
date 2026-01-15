"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MarqueeScroller from "../commons/MarqueeScroller";
import { WHY_US_CONTENT } from "@/constants/whyChooseUs";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "../../constants/theme";
import AnimateDownloadedSVG from "../animated/AnimateDownloadedSVG";
import AnimatedLine from "../animated/AnimatedLine";
import GlowBeam from "../effects/GlowBeam";

export default function WhyChooseUs() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  const cardsRef = useRef<HTMLDivElement | null>(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-10% 0px" });

  return (
    <div
      id="why-us"
      className="relative w-full py-32 px-6 overflow-hidden"
      style={{ backgroundColor: theme.background }
      }
    >
      {/* Top divider */}
      < div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto z-10">

        {/* Title */}
        <AnimatedLine
          text={WHY_US_CONTENT.title}
          delay={0.4}
          isHeading
          gradient={{
            from: "#fac175",
            via: "#ff006a",
            to: "#8b5cf6",
          }}
          className="text-[32px] md:text-[42px] font-bold mb-3 font-satoshi"
        />

        {/* Description */}
        <AnimatedLine
          text={WHY_US_CONTENT.description}
          delay={0.1}
          isHeading={false}
          className="mt-2 mb-10 max-w-3xl"
          textColor={theme.subtext}
        />

        {/* Cards */}
        <motion.div
          ref={cardsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {WHY_US_CONTENT.cards.map((card, i) => (
            <div
              key={i}
              className="
                group relative p-8 rounded-3xl
                bg-black/40
                border border-white/10
                backdrop-blur-xl
                overflow-hidden
                transition-all duration-500
                hover:-translate-y-1
              "
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

              {/* Hover Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(
                    500px circle at top right,
                    ${theme.accents.a}12,
                    transparent 45%
                  )`,
                }}
              />

              {/* Icon */}
              <div
                className="
                  w-16 h-16 rounded-2xl
                  flex items-center justify-center
                  mb-8
                  backdrop-blur-md
                  transition-transform duration-300
                  group-hover:scale-110
                "
                style={{
                  background: `${theme.accents.a}14`,
                  border: `1px solid ${theme.accents.a}30`,
                }}
              >
                <AnimateDownloadedSVG
                  src={card.icon}
                  size={30}
                  stroke={theme.accents.a}
                />
              </div>

              {/* Content */}
              <h3
                className="text-2xl font-semibold mb-4 tracking-tight"
                style={{
                  color: theme.text,
                  fontFamily: "var(--font-general-sans)",
                }}
              >
                {card.title}
              </h3>

              <p
                className="text-[15px] leading-relaxed font-light"
                style={{
                  color: theme.subtext,
                  fontFamily: "var(--font-inter)",
                }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Marquee */}
        <div className="mt-24 pt-10 border-t border-white/5">
          <MarqueeScroller
            items={[...WHY_US_CONTENT.tagsRow1, ...WHY_US_CONTENT.tagsRow2]}
            direction="left"
            duration={40}
            textColor={theme.subtext}
          // iconColor={theme.accents.a}
          />
        </div>
      </div>
    </div >
  );
}
