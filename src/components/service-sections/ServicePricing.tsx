"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import AnimatedLine from "../animated/AnimatedLine";
import AnimatedRotateButton from "../animated/AnimatedRotateButton";
import { GLOBAL_CTA_CONTENT } from "@/constants/global";
import RandomGradientGlow from "../effects/RandomGradientGlow";
import FloatingParticles from "../animated/FloatingParticles";
import ParallaxBackground from "../animated/ParallaxBackground";

export default function ServicePricing({ data, theme }: { data: any; theme: any }) {
  if (!data?.plans?.length) return null;

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yCards = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="w-full py-32 px-6 relative"
    >
      <ParallaxBackground
        image="/images/service-page-bg/wave-svg-3.svg"
        speed={0.3}
        zIndex={0}
        opacity={0.4}
        backgroundSize="cover"
        backgroundPosition="center"
      />

      {/* Floating Particles */}
      <FloatingParticles count={15} />

      <div className="max-w-6xl mx-auto relative z-10">
        <m.div
          className="text-center"
          style={{ y: yText }}
        >
          <div
            className="flex justify-center mb-6"
          >
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
                Pricing
              </span>
            </div>
          </div>

          <h2
            className="text-[32px] md:text-[42px] font-bold"
            style={{ color: theme.text }}
          >
            <AnimatedLine
              text={data.heading || "Pricing Plans"}
              delay={0.1}
              isHeading
              gradient={{
                from: "#fac175",
                via: "#ff006a",
                to: "#8b5cf6",
              }}
            />
          </h2>
        </m.div>

        <m.div
          className="flex flex-wrap justify-center gap-8 mt-16 items-stretch"
          style={{ y: yCards }}
        >
          {data.plans?.map((p: any, i: number) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              viewport={{ once: true }}
              className="
                group relative
                bg-black/40
                border border-white/10
                backdrop-blur-xl
                p-8 md:p-10
                rounded-[2rem]
                transition-all duration-500
                hover:-translate-y-2
                flex flex-col
                w-full md:w-[400px]
              "
            >


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

              <div className="mb-8 relative z-10">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: theme.text }}
                >
                  {p.name}
                </h3>
                <div
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: theme.accents.a }}
                >
                  {p.price}
                </div>
                <p style={{ color: theme.subtext }}>{p.description}</p>
              </div>

              <div className="mt-auto relative z-10">
                <ul className="mb-10 space-y-4">
                  {p.features?.map((f: string, fi: number) => (
                    <li
                      key={fi}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: theme.subtext }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: theme.accents.a }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <AnimatedRotateButton
                  text="Get Started"
                  href={GLOBAL_CTA_CONTENT.serviceForm.href}
                  color={theme.buttonBg}
                  accent={theme.accents}
                  className="w-full text-center py-4 text-sm font-bold uppercase tracking-widest"
                />
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
