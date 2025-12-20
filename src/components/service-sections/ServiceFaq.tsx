"use client";

import { useState, useRef } from "react";
import { Plus, X } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import AnimatedLine from "../animated/AnimatedLine";
import { IoIosCheckbox } from "react-icons/io";
import RandomGradientGlow from "../effects/RandomGradientGlow";

export default function ServiceFaq({ data, theme }: { data: any; theme: any }) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yWrap = useTransform(scrollYProgress, [0, 1], [0, -15]);

  const listRef = useRef(null);
  const inView = useInView(listRef, { once: true, margin: "-10% 0px" });

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="w-full py-32 px-6 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="flex items-center justify-center gap-2 font-semibold"
          style={{ y: yText, color: theme.primary }}
        >
          <IoIosCheckbox size={16} />
          <span>FAQ’S</span>
        </motion.div>

        <motion.h2
          className="text-4xl font-bold mt-3"
          style={{ y: yText, color: theme.text }}
        >
          <AnimatedLine text={data.heading} delay={0.1} isHeading={true} />
        </motion.h2>
      </div>

      <motion.div
        style={{ y: yWrap }}
        className="relative max-w-4xl rounded-3xl mx-auto mt-20"
      >
        <RandomGradientGlow colorA={theme.accents.a} colorB={theme.accents.b} />

        <div
          className="absolute inset-0 blur-[90px] rounded-3xl opacity-60"
          style={{ background: theme.primary + "55" }}
        />

        <motion.div
          ref={listRef}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl p-10 space-y-6"
          style={{
            background: theme.cardBg,
            border: `1px solid ${theme.text}15`,
          }}
        >
          {data.items?.map((item: any, index: number) => {
            const isOpen = openItems.includes(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + index * 0.15,
                }}
                className="rounded-2xl shadow-md p-6 transition-all"
                style={{
                  background: theme.cardBg,
                  border: `1px solid ${theme.text}15`,
                }}
              >
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => toggleItem(index)}
                >
                  <span
                    className="text-[18px] font-medium"
                    style={{ color: theme.text }}
                  >
                    {item.q}
                  </span>

                  <div
                    className={`transition-transform duration-300 ${
                      isOpen ? "-rotate-90" : "rotate-0"
                    }`}
                  >
                    {isOpen ? (
                      <X className="w-5 h-5" style={{ color: theme.text }} />
                    ) : (
                      <Plus className="w-5 h-5" style={{ color: theme.text }} />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 leading-relaxed pl-1"
                    style={{ color: theme.subtext }}
                  >
                    {item.a}
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
