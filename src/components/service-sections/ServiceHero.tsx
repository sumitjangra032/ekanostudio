"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedLine from "@/components/animated/AnimatedLine";
import AnimatedRotateButton from "@/components/animated/AnimatedRotateButton";
import Link from "next/link";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import { GLOBAL_CTA_CONTENT } from "@/constants/global";
import { useParams } from "next/navigation";
import ParallaxBackground from "../animated/ParallaxBackground";
import FloatingParticles from "../animated/FloatingParticles";

export default function ServiceHero({ data }: { data: any }) {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  const params = useParams();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yHero = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const category = params?.category;
  const service = params?.service;

  return (
    <section
      id="hero"
      ref={sectionRef}
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

      {/* Floating Particles */}
      <FloatingParticles count={20} />

      <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-32 mt-16 md:mt-24">
        {/* Animation Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ y: yHero }}
        >
          {/* Category Breadcrumb styled like Homepage Badge */}
          {Array.isArray(data.category) && (
            <div className="mb-6 flex justify-center">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: `${theme.accents.a}08`,
                  border: `1px solid ${theme.accents.a}20`,
                  backdropFilter: "blur(4px)",
                }}
              >
                <div className="pulse red" />
                <span
                  className="text-xs font-medium tracking-wide uppercase"
                  style={{ color: theme.accents.a }}
                >
                  {data.category.join(" → ")}
                </span>
              </div>
            </div>
          )}

          {/* Title */}
          <h1
            className={data.isSmallHeading
              ? "text-2xl md:text-3xl lg:text-5xl font-bold uppercase leading-tight mb-8"
              : "text-4xl md:text-5xl lg:text-7xl font-bold uppercase leading-tight mb-8"
            }
          >
            <AnimatedLine
              text={data.title}
              delay={0.1}
              isHeading
              gradient={{
                from: "#fac175",
                via: "#ff006a",
                to: "#8b5cf6",
              }}
            />
          </h1>

          {/* Strong Description */}
          <div
            className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto mb-6"
            style={{ color: theme.subtext }}
          >
            <AnimatedLine text={data.headline} delay={0.3} />
          </div>

          {/* Secondary Description */}
          <div
            className="text-sm md:text-base max-w-2xl mx-auto mb-12"
            style={{ color: theme.subtext }}
          >
            <AnimatedLine text={data.subheadline} delay={0.5} />
          </div>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center sm:items-stretch">
            {/* Primary CTA - Optional */}
            {data.serviceCta && (
              <AnimatedRotateButton
                text={data.serviceCta.text}
                href={`${GLOBAL_CTA_CONTENT.serviceForm.href}?category=${category}&service=${service}`}
                color={theme.buttonBg2}
                accent={theme.accents}
                variant="secondary"
                className="w-full sm:w-auto"
              />
            )}
            <AnimatedRotateButton
              text={GLOBAL_CTA_CONTENT.bookConsultation.title}
              href={GLOBAL_CTA_CONTENT.bookConsultation.href}
              color={theme.buttonBg}
              accent={theme.accents}
              className="w-full sm:w-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
