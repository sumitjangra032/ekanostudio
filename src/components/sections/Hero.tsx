"use client";

import { motion } from "framer-motion";
import AnimatedLine from "@/components/animated/AnimatedLine";
import { HERO_CONTENT } from "@/constants/hero";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "../../constants/theme";
import AnimatedRotateButton from "../animated/AnimatedRotateButton";
import { GLOBAL_CTA_CONTENT } from "@/constants/global";
import FloatingParticles from "../animated/FloatingParticles";

export default function Hero() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  return (
    <section
      id="hero"
      className="
        relative overflow-hidden
        min-h-[100svh]
        flex items-center justify-center
        px-4 pt-16 sm:px-6
      "
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div
          className="h-full w-full max-w-[1400px]"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(255,165,0,0.45) 1px, transparent 1px),
              radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px),
              radial-gradient(circle at 50% 40%, rgba(255,140,0,0.20), transparent 60%),
              radial-gradient(circle at 50% 50%, rgba(0,0,0,0.85), rgba(0,0,0,1))
            `,
            backgroundSize: `
              9px 9px,
              20px 20px,
              100% 100%,
              100% 100%
            `,
            backgroundPosition: `
              0 0,
              7px 7px,
              center,
              center
            `,
            maskImage: `
              linear-gradient(
                to right,
                transparent 0%,
                black 18%,
                black 82%,
                transparent 100%
              ),
              linear-gradient(
                to bottom,
                transparent 0%,
                black 12%,
                black 78%,
                transparent 100%
              )
            `,
            WebkitMaskImage: `
              linear-gradient(
                to right,
                transparent 0%,
                black 18%,
                black 82%,
                transparent 100%
              ),
              linear-gradient(
                to bottom,
                transparent 0%,
                black 12%,
                black 78%,
                transparent 100%
              )
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
      </div>

      {/* Floating Particles */}
      <FloatingParticles count={30} />

      <div className="relative max-w-7xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Top Badge (SEO-safe) */}
          <div className="mb-4 flex justify-center">
            <span className="text-xs sm:text-sm tracking-wide bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Digital Growth & Web Solutions Partner
            </span>
          </div>

          {/* H1 Headline */}
          <div
            className="
              font-medium italic leading-tight
              text-[32px]
              sm:text-[40px]
              md:text-[52px]
              lg:text-[64px]
              xl:text-[72px]
            "
          >
            {HERO_CONTENT.headline.map((line, index) => (
              <AnimatedLine
                key={index}
                text={line}
                delay={index * 0.25}
                isHeading
                gradient={{
                  from: "#fac175",
                  via: "#ff006a",
                  to: "#8b5cf6",
                }}
              />
            ))}
          </div>

          {/* Supporting Description (NEW but SAFE) */}
          <div className="mt-4 max-w-3xl mx-auto">
            {HERO_CONTENT.description.map((desc, i) => (
              <p
                key={i}
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: theme.subtext }}
              >
                {desc}
              </p>
            ))}
          </div>

          {/* Sub Notes */}
          <div className="mt-4 space-y-1">
            {HERO_CONTENT.subNotes.map((note, i) => (
              <p
                key={i}
                className="text-xs sm:text-sm italic"
                style={{ color: theme.subtext }}
              >
                {note}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex justify-center">
            <AnimatedRotateButton
              text={GLOBAL_CTA_CONTENT.getStarted.title}
              href={GLOBAL_CTA_CONTENT.getStarted.href}
              color={theme.buttonBg}
              accent={theme.accents}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
