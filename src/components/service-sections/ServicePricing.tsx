"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import AnimatedLine from "../animated/AnimatedLine";
import { FaTag, FaRegCheckCircle } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import AnimatedRotateButton from "../animated/AnimatedRotateButton";
import { GLOBAL_CTA_CONTENT } from "@/constants/global";
import RandomGradientGlow from "../effects/RandomGradientGlow";
import ParallaxBackground from "../animated/ParallaxBackground";

export default function ServicePricing({ data, theme }: { data: any; theme: any }) {
  if (!data?.plans?.length) return null;

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yCards = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="w-full py-32 px-6 relative"
    >
      <ParallaxBackground
                      image="/images/service-page-bg/wave-svg-3.svg"
                      speed={0.5}
                      zIndex={0}
                      opacity={0.4}
                      backgroundSize="cover"
                      backgroundPosition="center"
                  />
      <div className="max-w-7xl mx-auto text-center">

        <motion.div
          className="flex justify-center items-center gap-2 font-semibold uppercase"
          style={{ y: yText, color: theme.primary }}
        >
          <FaTag size={16} />
          Pricing
        </motion.div>

        <motion.h2
          className="text-4xl font-bold mt-3"
          style={{ y: yText, color: theme.text }}
        >
          <AnimatedLine text={data.heading || "Pricing Plans"} delay={0.1} isHeading={true}/>
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-8 mt-16 items-stretch"
          style={{ y: yCards }}
        >
          {data.plans?.map((p: any, i: number) => (
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
              className="relative flex flex-col rounded-3xl p-10 text-left shadow-sm w-full md:w-[400px] overflow-hidden group"
              style={{
                background: theme.cardBg,
                border: `1px solid ${theme.text}15`,
              }}
            >
              <RandomGradientGlow colorA={theme.accents.a} colorB={theme.accents.b} opacity={0.5} />

              <div className="flex-1">
                <h3 className="text-md font-semibold" style={{ color: theme.text }}>
                  {p.name}
                </h3>

                <p className="text-3xl font-semibold mt-2" style={{ color: theme.text }}>
                  {p.price}
                </p>

                {(p.desc || p.description) && (
                  <p
                    className="text-[15px] mt-4 leading-relaxed whitespace-pre-line"
                    style={{ color: theme.subtext }}
                  >
                    {p.desc || p.description}
                  </p>
                )}

                {p.features && (
                  <ul className="mt-6 space-y-4 text-[15px] leading-relaxed">
                    {p.features.map((f: any, idx: number) => (
                      <li key={idx} className="flex items-center gap-3" style={{ color: theme.subtext }}>
                        <Check size={18} style={{ color: theme.primary }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-4">
                <AnimatedRotateButton
                  text={p.ctaText || GLOBAL_CTA_CONTENT.getStarted.title}
                  href={p.ctaHref || GLOBAL_CTA_CONTENT.getStarted.href}
                  fullWidth={true}
                  color={theme.buttonBg}
                  accent={theme.accents}
                />
              </div>

              <p className="text-center text-[13px] mt-4" style={{ color: theme.subtext }}>
                *No commitment - cancel anytime*
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
