"use client";

import { Check } from "lucide-react";
import { PRICING_CONTENT } from "@/constants/pricing";
import AnimatedLine from "../animated/AnimatedLine";
import { motion } from "framer-motion";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "../../constants/theme";
import AnimatedRotateButton from "../animated/AnimatedRotateButton";
import { GLOBAL_CTA_CONTENT } from "@/constants/global";
import AnimateDownloadedSVG from "../animated/AnimateDownloadedSVG";
import GlowBeam from "../effects/GlowBeam";
import RandomGradientGlow from "../effects/RandomGradientGlow";

export default function Pricing() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  const { tag, title, description, plans, call } = PRICING_CONTENT;

  return (
    <section
      id="pricing"
      className="relative w-full py-32 px-6"
      style={{ backgroundColor: theme.background }}
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Tag */}
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
            {tag.label}
          </span>
        </div>


        {/* Title */}
        <h2
          className="text-[32px] md:text-[42px] font-bold"
          style={{ color: theme.text }}
        >
          <AnimatedLine text={title} delay={0.1} isHeading gradient={{
            from: "#fac175",
            via: "#ff006a",
            to: "#8b5cf6",
          }} />
        </h2>

        {/* Description */}
        <div
          className="max-w-2xl mx-auto mt-4 leading-relaxed"
          style={{ color: theme.subtext }}
        >
          <AnimatedLine text={description} delay={0.1} textColor={theme.subtext} />
        </div>

        {/* PLANS */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 items-stretch">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="
                relative flex flex-col p-10 rounded-3xl
                bg-black/40
                border border-white/10
                backdrop-blur-xl
                overflow-hidden
                text-left
                transition-all duration-500
                hover:-translate-y-1
              "
            >
              <GlowBeam color={theme.accents.a} />
              {p.popular && (
                <RandomGradientGlow
                  colorA={theme.accents.a}
                  colorB={theme.accents.b}
                  opacity={0.45}
                />
              )}

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

              {/* Popular Badge */}
              {p.popular && (
                <div
                  className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: `${theme.accents.a}20`,
                    color: theme.accents.a,
                    border: `1px solid ${theme.accents.a}40`,
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-sm font-semibold opacity-80"
                  style={{ color: theme.text }}
                >
                  {p.name}
                </h3>

                <p
                  className="text-3xl font-semibold mt-2"
                  style={{ color: theme.text }}
                >
                  {p.price}
                </p>

                {p.desc && (
                  <p
                    className="text-[15px] mt-4 leading-relaxed mb-4"
                    style={{ color: theme.subtext }}
                  >
                    {p.desc}
                  </p>
                )}

                {/* Features — SAME AS PROCESS SECTION */}
                <div className="mt-8 space-y-2">
                  {p.features.map((f, idx) => (
                    <div
                      key={idx}
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
                        {f}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

              {/* Button */}
              <div className="mt-8">
                <AnimatedRotateButton
                  text={GLOBAL_CTA_CONTENT.getStarted.title}
                  href={GLOBAL_CTA_CONTENT.getStarted.href}
                  fullWidth
                  color={theme.buttonBg}
                  accent={theme.accents}
                />
              </div>


            </motion.div>
          ))}
        </div>

        {/* CTA BOX */}
        <div className="mt-24 max-w-2xl mx-auto relative">
          <div
            className="
              relative rounded-3xl py-12 px-6
              bg-black/40
              border border-white/10
              backdrop-blur-xl
              overflow-hidden
              text-center
            "
          >
            <GlowBeam color={theme.accents.a} />

            <h3
              className="text-2xl font-medium"
              style={{ color: theme.text }}
            >
              {call.headline}
            </h3>

            <p
              className="mt-3 leading-relaxed"
              style={{ color: theme.subtext }}
            >
              {call.description}
            </p>

            <a
              href={GLOBAL_CTA_CONTENT.getStarted.href}
              className="
                mt-6 mx-auto inline-flex items-center gap-3
                px-8 py-3 rounded-xl
                bg-black
                border border-white/15
                text-white text-sm font-medium
                transition-all duration-300
                hover:border-white/30
                hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]
              "
            >
              <AnimateDownloadedSVG
                src={call.icon}
                size={18}
                stroke="#ffffff"
              />
              <span className="flex items-center gap-1">
                {call.buttonText}
                <span className="opacity-70">›</span>
              </span>
            </a>
          </div>
        </div>

      </div>
    </section >
  );
}
