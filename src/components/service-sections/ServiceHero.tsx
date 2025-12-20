"use client";

import { motion } from "framer-motion";
import AnimatedLine from "@/components/animated/AnimatedLine";
import AnimatedRotateButton from "@/components/animated/AnimatedRotateButton";
import Link from "next/link";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import { GLOBAL_CTA_CONTENT } from "@/constants/global";
import { useParams } from "next/navigation";
import ParallaxBackground from "../animated/ParallaxBackground";

export default function ServiceHero({ data }: { data: any }) {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  const params = useParams();

  const category = params?.category;
  const service = params?.service;

  return (
    <section
      id="hero"
      className=" relative  min-h-screen flex items-center justify-center text-center "
      style={{
        color: theme.text,
      }}
    >
      <ParallaxBackground
        image="/images/service-page-bg/wave-svg-1.svg"
        speed={0.5}
        zIndex={0}
        opacity={0.9}
        backgroundSize="cover"
        backgroundPosition="top"
      />

      <div className="relative max-w-4xl mx-auto px-6 py-32">
        {/* Animation Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Category Breadcrumb */}
          {Array.isArray(data.category) && (
            <div
              className="
                inline-flex items-center gap-2 
                px-6 py-2 rounded-full text-sm font-medium mb-6
                bg-white/10 backdrop-blur-xl border border-white/20
              "
            >
              {data.category.map((c: string, i: number) => (
                <span key={i} className="opacity-90">
                  {c}
                  {i < data.category.length - 1 && " → "}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1
            className=" text-3xl md:text-3xl lg:text-6xl font-bold uppercase leading-tight mb-6 mt-6 "
          >
            <AnimatedLine text={data.title} delay={0.1} />
          </h1>

          {/* Strong Description + Underline */}
          <div
            className="text-xl md:text-2xl lg:text-2xl font-semibold max-w-3xl mx-auto mb-3"
            style={{ color: theme.subtext }}
          >
            <AnimatedLine text={data.headline} delay={0.3} />
          </div>

          {/* Underline */}
          <div className="w-14 h-[3px] bg-blue-400 rounded-full mx-auto mb-6 opacity-90" />

          {/* Secondary Description */}
          <div
            className="text-xs md:text-sm lg:text-sm max-w-3xl mx-auto mb-10 max-w-xl"
            style={{ color: theme.subtext }}
          >
            <AnimatedLine text={data.subheadline} delay={0.5} />
          </div>


          {/* CTA Buttons */}
          <div className="flex flex-row justify-center gap-4 items-stretch">
            {/* Primary CTA */}
            <AnimatedRotateButton
              text={data.serviceCta.text}
              href={`${GLOBAL_CTA_CONTENT.serviceForm.href}?category=${category}&service=${service}`}
              color={theme.buttonBg2}
              accent={theme.accents}
              variant="secondary"
            />
            <AnimatedRotateButton
              text={GLOBAL_CTA_CONTENT.bookConsultation.title}
              href={GLOBAL_CTA_CONTENT.bookConsultation.href}
              color={theme.buttonBg}
              accent={theme.accents}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
