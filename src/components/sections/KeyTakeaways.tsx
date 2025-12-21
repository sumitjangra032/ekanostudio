"use client";

import { motion } from "framer-motion";
import AnimatedLine from "../animated/AnimatedLine";
import { KEY_TAKEWAYS_CONTENT } from "@/constants/keyTakeaways";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "../../constants/theme";
import AnimatedRotateButton from "../animated/AnimatedRotateButton";
import { GLOBAL_CTA_CONTENT } from "@/constants/global";
import GlowBeam from "../effects/GlowBeam";

export default function KeyTakeaways() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  const repeat = (arr: any[]) => [...arr, ...arr, ...arr];

  return (
    <section
      id="key-takeaways"
      className="relative w-full py-32 px-6 overflow-hidden"
      style={{
        backgroundColor: theme.background,
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-top">

        {/* LEFT SIDE */}
        <div className="space-y-6 relative">
          {/* Tag with pulse */}
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
              className="text-xs font-medium tracking-wide"
              style={{ color: theme.accents.a }}
            >
              {KEY_TAKEWAYS_CONTENT.tag.label}
            </span>
          </div>

          {/* Title with gradient */}
          <h2
            className="text-[32px] md:text-[42px] font-bold leading-tight"
            style={{ color: theme.text }}
          >
            <AnimatedLine
              text={KEY_TAKEWAYS_CONTENT.title}
              isHeading
              gradient={{
                from: "#fac175",
                via: "#ff006a",
                to: "#8b5cf6",
              }}
            />
          </h2>

          {/* Description */}
          <div
            className="text-md max-w-md leading-relaxed"
            style={{ color: theme.subtext }}
          >
            <AnimatedLine
              text={KEY_TAKEWAYS_CONTENT.description}
              delay={0.15}
              textColor={theme.subtext}
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
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <GlowBeam color={theme.accents.a} />

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
                  className="
                    relative w-full rounded-2xl
                    px-10 py-7
                    flex items-center justify-between
                    text-[16px] md:text-[18px]
                    bg-black/40
                    border border-white/10
                    backdrop-blur-xl
                    overflow-hidden
                  "
                >
                  {/* Left accent */}
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

                  <span
                    className="font-medium"
                    style={{ color: theme.text }}
                  >
                    {item.text}
                  </span>

                  <Icon
                    size={24}
                    strokeWidth={2.2}
                    style={{ color: theme.accents.a }}
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
