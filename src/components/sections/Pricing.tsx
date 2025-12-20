"use client";

import { Check } from "lucide-react";
import { PRICING_CONTENT } from "@/constants/pricing";
import AnimatedLine from "../animated/AnimatedLine";
import { motion } from "framer-motion";
import { PiShieldCheck } from "react-icons/pi";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdLogin } from "react-icons/md";

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
      className="w-full py-32 px-6"
      style={{
        backgroundColor: theme.background,
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Tag */}
        <div
          className="flex justify-center items-center gap-2 font-semibold"
          style={{ color: theme.primary }}
        >
          <tag.icon size={16} />
          {tag.label}
        </div>

        {/* Title */}
        <h2
          className="text-[42px] font-bold mt-3"
          style={{ color: theme.text }}
        >
          <AnimatedLine text={title} delay={0.1} isHeading={true} />
        </h2>

        {/* Description */}
        <div
          className="text-lg max-w-2xl mx-auto mt-4 leading-relaxed"
          style={{ color: theme.subtext }}
        >
          <AnimatedLine text={description} delay={0.1} />
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-10 mt-16 items-stretch">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.2,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative flex flex-col rounded-3xl p-10 text-left shadow-sm"
              style={{
                background: theme.cardBg,
                border: `1px solid ${theme.text}15`,
              }}
            >
              <GlowBeam color={theme.accents.a} />
              {p.popular && <RandomGradientGlow colorA={theme.accents.a} colorB={theme.accents.b} opacity={0.5} />}
              {/* MOST POPULAR Badge */}
              {p.popular && (
                <div
                  className=" absolute top-0 right-0 text-sm font-semibold px-3 py-2 rounded-bl-2xl rounded-tr-3xl tracking-wide "
                  style={{
                    background: `radial-gradient(circle at top right, ${theme.primary}33 0%, ${theme.primary}55 45%, ${theme.primary}40 90%)`,
                    color: theme.text,
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              {/* Equal-height wrapper */}
              <div className="flex-1">
                <h3
                  className="text-md font-semibold"
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
                    className="text-[15px] mt-4 leading-relaxed"
                    style={{ color: theme.subtext }}
                  >
                    {p.desc}
                  </p>
                )}

                {/* Features */}
                <ul className="mt-6 space-y-4 text-[15px] leading-relaxed">
                  {p.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3"
                      style={{ color: theme.subtext }}
                    >
                      <Check size={18} style={{ color: theme.primary }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="mt-4">
                <AnimatedRotateButton
                  text={GLOBAL_CTA_CONTENT.getStarted.title}
                  href={GLOBAL_CTA_CONTENT.getStarted.href}
                  fullWidth={true}
                  color={theme.buttonBg}
                  accent={theme.accents}
                />
              </div>

              <p
                className="text-center text-[13px] mt-4"
                style={{ color: theme.subtext }}
              >
                *No commitment - cancel anytime*
              </p>
            </motion.div>
          ))}
        </div>

        
        {/* CTA Box */}
        <div className="mt-20 relative max-w-2xl mx-auto ">
          <div
            className="relative rounded-3xl py-10 px-6 text-center shadow-[0_-8px_20px_rgba(0,0,0,0.06)]"
            style={{
              background: "black",
              border: `1px solid ${theme.text}15`,
              boxShadow: `0 -8px 20px ${theme.text}10`,
              backgroundImage: `radial-gradient(ellipse at bottom, ${theme.primary}22 0%, ${theme.cardBg} 50%)`,
            }}
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
                mt-6 mx-auto
                inline-flex items-center gap-3
                px-8 py-3
                rounded-xl
                bg-black
                border border-[rgba(255,255,255,0.12)]
                shadow-[inset_0_1px_20px_rgba(255,255,255,0.12)]
                text-white text-sm font-medium
                transition-all duration-300
                hover:border-[rgba(255,255,255,0.25)]
                hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]
              "
            >
              <AnimateDownloadedSVG
                src={call.icon}
                size={18}
                stroke="#ffffff"
              />

              <span className="flex items-center gap-2">
                {call.buttonText}
                <span className="opacity-70">›</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
