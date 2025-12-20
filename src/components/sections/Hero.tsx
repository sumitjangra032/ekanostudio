"use client";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import AnimatedLine from "@/components/animated/AnimatedLine";
import { FaChevronDown } from "react-icons/fa";
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
      className=" relative overflow-hidden  min-h-screen pt-32 pb-16 md:py-0 flex flex-col items-center justify-center text-center "
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >

      {/* Dotted Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#f97316 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(circle at center, black 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 80%)",
          opacity: 0.3,
        }}
      />

      <FloatingParticles count={30} />

      <div className="relative max-w-6xl mx-auto w-full">

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-5xl mx-auto px-4"
        >

          <div className="w-full py-2 flex justify-center">
            <h1 className="text-sm md:text-sm  tracking-wide">
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                #1 Digital Service Providers
              </span>
            </h1>
          </div>

          {/* Headline */}
          <div className="text-3xl md:text-5xl lg:text-7xl font-medium italic leading-tight mb-2">
            {HERO_CONTENT.headline.map((line, index) => (
              <AnimatedLine
                key={index}
                text={line}
                delay={index * 0.4}
                isHeading
                gradient={{
                  from: "#fac175",
                  via: "#ff006a",
                  to: "#8b5cf6",
                }}
              />
            ))}
          </div>


          {/* Description */}
          {/* <div
            className="text-sm md:text-lg font-medium max-w-4xl mx-auto mb-2 "
            style={{ color: theme.subtext }}
          >
            {HERO_CONTENT.description.map((line, index) => (
              <AnimatedLine
                key={index}
                text={line}
                delay={0.7 + index * 0.2}
                isHeading={false}
              />
            ))}
          </div> */}

          {/* Notes */}
          {HERO_CONTENT.subNotes.map((note, i) => (
            <p
              key={i}
              className="italic text-xs md:text-sm "
              style={{ color: theme.subtext }}
            >
              {note}
            </p>
          ))}

          {/* Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8 mt-6">
            <AnimatedRotateButton
              text={GLOBAL_CTA_CONTENT.getStarted.title}
              href={GLOBAL_CTA_CONTENT.getStarted.href}
              color={theme.buttonBg}
              accent={theme.accents}
            />
          </div>



          {/* Down Arrow */}
          {/* <div className="mt-8 flex justify-center">
            <a
              href="#why-us"
              className="p-3 rounded-full border border-black/10 transition flex items-center justify-center"
              style={{
                background: theme.cardBg,
                color: theme.subtext,
              }}
            >
              <FaChevronDown size={20} />
            </a>
          </div> */}

        </motion.div>
      </div>
    </section>
  );
}
