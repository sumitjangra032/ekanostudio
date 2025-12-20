"use client";

import { useState, useRef } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FAQ_CONTENT } from "@/constants/faq";
import { ScrollArea } from "@/components/ui/scroll-area";
import AnimatedLine from "../animated/AnimatedLine";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "../../constants/theme";
import GlowBeam from "../effects/GlowBeam";
import RandomGradientGlow from "../effects/RandomGradientGlow";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  const listRef = useRef(null);
  const inView = useInView(listRef, { once: true, margin: "-10% 0px" });

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section
      id="faq"
      className="w-full py-32 px-6 relative overflow-hidden"
      style={{ backgroundColor: theme.background }}
    >
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          className="flex items-center justify-center gap-2 font-semibold tracking-wide"
          style={{ color: theme.primary }}
        >
          <FAQ_CONTENT.tag.icon size={16} />
          <span>{FAQ_CONTENT.tag.label}</span>
        </div>

        <h2
          className="text-[42px] font-bold mt-4"
          style={{ color: theme.text }}
        >
          <AnimatedLine text={FAQ_CONTENT.title} isHeading />
        </h2>

        <div
          className="text-lg max-w-2xl mx-auto mt-4 leading-relaxed"
          style={{ color: theme.subtext }}
        >
          <AnimatedLine text={FAQ_CONTENT.description} />
        </div>
      </div>

      {/* FAQ CONTAINER */}
      <div className="relative max-w-4xl mx-auto mt-24">
        <GlowBeam color={theme.accents.a} />
        <RandomGradientGlow colorA={theme.accents.a} colorB={theme.accents.b} />

        <motion.div
          ref={listRef}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl p-10"
          style={{
            background: theme.cardBg,
            border: `1px solid ${theme.text}15`,
            boxShadow: "inset 0 1px 30px rgba(255,255,255,0.05)",
          }}
        >
          <ScrollArea className="h-[600px] pr-6">
            <div className="space-y-6">
              {FAQ_CONTENT.faqData.map((item, index) => {
                const isOpen = openItems.includes(index);

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -2,
                      boxShadow: "0 0 30px rgba(99,102,241,0.15)",
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="rounded-2xl p-6 backdrop-blur-md transition-all"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                      border: `1px solid ${theme.text}18`,
                    }}
                  >
                    {/* QUESTION */}
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full flex justify-between items-center text-left gap-6"
                    >
                      <span
                        className="text-[18px] font-medium"
                        style={{ color: theme.text }}
                      >
                        {item.q}
                      </span>

                      <motion.div
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        {isOpen ? (
                          <X className="w-5 h-5" style={{ color: theme.text }} />
                        ) : (
                          <Plus className="w-5 h-5" style={{ color: theme.text }} />
                        )}
                      </motion.div>
                    </button>

                    {/* ANSWER */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p
                            className="mt-4 leading-relaxed pr-2"
                            style={{ color: theme.subtext }}
                          >
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </ScrollArea>
        </motion.div>
      </div>
    </section>
  );
}
