"use client";
import { Check, X } from "lucide-react";
import { COMPARISON_CONTENT } from "@/constants/comparison";
import AnimatedLine from "../animated/AnimatedLine";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "../../constants/theme";
import GlowBeam from "../effects/GlowBeam";
import RandomGradientGlow from "../effects/RandomGradientGlow";

export default function Comparison() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  const { tag, title, description, features } = COMPARISON_CONTENT;

  return (
    <section
      id="comparison"
      className="w-full py-32 px-6"
      style={{
        backgroundColor: theme.background,
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Tag */}
        <div
          className="flex items-center justify-center gap-2 font-semibold"
          style={{ color: theme.primary }}
        >
          <tag.icon size={16} /> {tag.label}
        </div>

        {/* Title */}
        <h2
          className="text-[42px] font-bold mt-3"
          style={{ color: theme.text }}
        >
          <AnimatedLine text={title} delay={0.1} isHeading={true}/>
        </h2>

        {/* Description */}
        <div
          className="text-lg max-w-3xl mx-auto mt-4 leading-relaxed"
          style={{ color: theme.subtext }}
        >
          <AnimatedLine text={description} delay={0.1} />
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative mt-20 rounded-3xl overflow-hidden shadow-xl "
          style={{
            background: theme.cardBg,
            border: `1px solid ${theme.text}15`,
          }}
        >
          <GlowBeam color={theme.accents.a} />
          <RandomGradientGlow colorA={theme.accents.a} colorB={theme.accents.b} variant="right" opacity={0.4} />
          {/* Header */}
          <div
            className="grid grid-cols-3 text-center font-semibold text-sm py-6 relative z-10"
            style={{
              background: theme.cardBg,
              color: theme.text,
              borderBottom: `1px solid ${theme.text}15`,
            }}
          >
            <div>FEATURES</div>
            <div
              style={{
                background: theme.primary + "22",
              }}
              className="py-2 rounded-lg mx-3"
            >
              EkanoStudio
            </div>
            <div className="py-2 rounded-lg mx-3">INDUSTRY</div>
          </div>

          <ScrollArea
            className="h-[400px] md:h-[450px] mr-2"
          >
            {/* Feature Rows */}
            <div>
              {features.map((feature, i) => {
                const industryHas = ["Conversion-Focused Web Development"].includes(
                  feature
                );

                return (
                  <div
                    key={i}
                    className="grid grid-cols-3 text-center py-6"
                    style={{
                      borderTop: i === 0 ? "none" : `1px solid ${theme.text}15`,
                      color: theme.text,
                    }}
                  >
                    {/* Feature Name */}
                    <div
                      className="font-medium text-sm"
                      style={{ color: theme.text }}
                    >
                      {feature}
                    </div>

                    {/* You - always check */}
                    <div>
                      <Check size={20} className="mx-auto" style={{ color: theme.primary }} />
                    </div>

                    {/* Industry - check or cross */}
                    <div>
                      {industryHas ? (
                        <Check size={20} className="mx-auto" style={{ color: theme.subtext }} />
                      ) : (
                        <X size={20} className="mx-auto" style={{ color: theme.subtext }} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </motion.div>
      </div>
    </section>
  );
}
