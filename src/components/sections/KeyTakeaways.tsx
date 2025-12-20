"use client";

import { motion } from "framer-motion";
import AnimatedLine from "../animated/AnimatedLine";
import { KEY_TAKEWAYS_CONTENT } from "@/constants/keyTakeaways";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "../../constants/theme";
import AnimatedRotateButton from "../animated/AnimatedRotateButton";
import { GLOBAL_CTA_CONTENT } from "@/constants/global";

export default function KeyTakeaways() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  const repeat = (arr: any[]) => [...arr, ...arr, ...arr];

  return (
    <section
      id="key-takeaways"
      className="w-full py-32 px-6 overflow-hidden"
      style={{
        backgroundImage: theme.gradient2,
        backgroundColor: theme.background,
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* Tag */}
          <div
            className="flex items-center gap-2 font-medium"
            style={{ color: theme.primary }}
          >
            <KEY_TAKEWAYS_CONTENT.tag.icon size={22} />
            {KEY_TAKEWAYS_CONTENT.tag.label}
          </div>

          {/* Title */}
          <h2
            className="text-[42px] font-medium leading-tight"
            style={{ color: theme.text }}
          >
            <AnimatedLine text={KEY_TAKEWAYS_CONTENT.title} delay={0.1} isHeading={true} />
          </h2>

          {/* Description */}
          <div
            className="text-md font-medium max-w-md leading-relaxed"
            style={{ color: theme.subtext }}
          >
            <AnimatedLine
              text={KEY_TAKEWAYS_CONTENT.description}
              delay={0.2}
            />
          </div>

          <AnimatedRotateButton
            text={GLOBAL_CTA_CONTENT.getStarted.title}
            href={GLOBAL_CTA_CONTENT.getStarted.href}
            color={theme.buttonBg}
            accent={theme.accents}
          />
        </div>

        {/* RIGHT SIDE — INFINITE VERTICAL SCROLLER */}
        <div
          className="relative h-[520px] overflow-hidden pt-6"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          }}
        >

          {/* Scrolling List */}
          <motion.div
            className="space-y-6"
            animate={{ y: ["0%", "-33.33%"] }}
            transition={{
              duration: 14,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {repeat(KEY_TAKEWAYS_CONTENT.takeways).map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="w-full rounded-2xl shadow-md px-10 py-7 flex items-center justify-between text-[18px]"
                  style={{
                    background: theme.cardBg,
                    border: `1px solid ${theme.text}15`,
                  }}
                >
                  <span
                    className="font-medium"
                    style={{ color: theme.text }}
                  >
                    {item.text}
                  </span>

                  <Icon
                    size={26}
                    strokeWidth={2.2}
                    style={{ color: theme.primary }}
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
