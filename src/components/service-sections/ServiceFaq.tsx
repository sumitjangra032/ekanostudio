"use client";

import { useState, useRef } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import AnimatedLine from "../animated/AnimatedLine";
import { ScrollArea } from "@/components/ui/scroll-area";
import GlowBeam from "../effects/GlowBeam";
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

  const listRef = useRef<HTMLDivElement | null>(null);
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
      ref={sectionRef}
      className="relative w-full py-32 px-6 overflow-hidden"
    >
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          className="text-center"
          style={{ y: yText }}
        >
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
              className="text-xs font-medium tracking-wide uppercase"
              style={{ color: theme.accents.a }}
            >
              FAQ’S
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-[32px] md:text-[42px] font-bold"
            style={{ color: theme.text }}
          >
            <AnimatedLine
              text={data.heading}
              isHeading
              gradient={{
                from: "#fac175",
                via: "#ff006a",
                to: "#8b5cf6",
              }}
            />
          </h2>
        </motion.div>
      </div>

      {/* FAQ LIST */}
      <motion.div
        style={{ y: yWrap }}
        className="relative max-w-4xl mx-auto mt-16"
      >
        <GlowBeam color={theme.accents.a} />
        <RandomGradientGlow
          colorA={theme.accents.a}
          colorB={theme.accents.b}
          opacity={0.35}
        />

        <motion.div
          ref={listRef}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            relative rounded-3xl
            bg-black/40
            backdrop-blur-xl
            border border-white/10
            overflow-hidden
          "
        >
          <ScrollArea className="h-[350px]">
            <div className="divide-y divide-white/10">
              {data.items?.map((item: any, index: number) => {
                const isOpen = openItems.includes(index);

                return (
                  <FAQItem
                    key={index}
                    item={item}
                    index={index}
                    isOpen={isOpen}
                    toggleItem={toggleItem}
                    theme={theme}
                  />
                );
              })}
            </div>
          </ScrollArea>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---------------- FAQ ITEM ---------------- */

function FAQItem({
  item,
  index,
  isOpen,
  toggleItem,
  theme,
}: {
  item: any;
  index: number;
  isOpen: boolean;
  toggleItem: (i: number) => void;
  theme: any;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const showAnswer = isOpen || isHovered;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative px-8 py-6 transition-all"
      whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
    >
      {/* QUESTION */}
      <button
        onClick={() => toggleItem(index)}
        className="w-full flex justify-between items-start gap-6 text-left"
      >
        <span
          className="text-[17px] font-medium leading-relaxed"
          style={{ color: theme.text }}
        >
          {item.q}
        </span>

        <motion.div
          animate={{ rotate: showAnswer ? 90 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="mt-1 flex-shrink-0"
        >
          {showAnswer ? (
            <X size={18} style={{ color: theme.accents.a }} />
          ) : (
            <Plus size={18} style={{ color: theme.accents.a }} />
          )}
        </motion.div>
      </button>

      {/* ANSWER */}
      <AnimatePresence initial={false}>
        {showAnswer && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p
              className="mt-4 pr-4 text-[15px] leading-relaxed"
              style={{ color: theme.subtext }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
