"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MarqueeScroller from "../commons/MarqueeScroller";
import { WHY_US_CONTENT } from "@/constants/whyChooseUs";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "../../constants/theme";
import AnimateDownloadedSVG from "../animated/AnimateDownloadedSVG";

export default function WhyChooseUs() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="why-us"
      className="relative w-full py-32 px-6 overflow-hidden"
      style={{
        backgroundColor: theme.background,
        // Subtle ambient background gradient instead of the old one
        background: `radial-gradient(circle at 50% 0%, ${theme.accents.b}15 0%, transparent 40%), ${theme.background}`,
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>


      <div className="relative max-w-7xl mx-auto z-10">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            style={{
              fontFamily: "var(--font-general-sans)",
              color: theme.text
            }}
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #fac175, #ff006a, #8b5cf6)"
              }}
            >
              Why Choose Us?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl font-light leading-relaxed"
            style={{
              color: theme.subtext,
              fontFamily: "var(--font-inter)"
            }}
          >
            {WHY_US_CONTENT.description}
          </motion.p>
        </div>

        {/* Cards Grid */}
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
              className="group relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2"
              style={{
                background: "rgba(255,255,255,0.03)", // Glass effect base
                borderColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${theme.accents.a}10 0%, transparent 70%)`
                }}
              />

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${theme.accents.a}20, transparent)`,
                  border: `1px solid ${theme.accents.a}40`
                }}
              >
                <AnimateDownloadedSVG src={card.icon} size={32} stroke={theme.accents.a} />
              </div>

              {/* Content */}
              <h3
                className="text-2xl font-semibold mb-4"
                style={{
                  color: theme.text,
                  fontFamily: "var(--font-general-sans)"
                }}
              >
                {card.title}
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{
                  color: theme.subtext,
                  fontFamily: "var(--font-inter)"
                }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Marquee Section */}
        <div className="mt-24 pt-10 border-t border-white/5">
          <MarqueeScroller
            items={[...WHY_US_CONTENT.tagsRow1, ...WHY_US_CONTENT.tagsRow2]}
            direction="left"
            duration={40}
            textColor={theme.subtext}
            iconColor={theme.accents.a}
          />
        </div>

      </div>
    </section>
  );
}
