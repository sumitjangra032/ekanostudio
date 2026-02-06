"use client";

import AnimatedLine from "../animated/AnimatedLine";
import { KEY_TAKEWAYS_CONTENT } from "@/constants/keyTakeaways";
import { THEMES, currentTheme } from "../../constants/theme";
import AnimatedRotateButton from "../animated/AnimatedRotateButton";
import { GLOBAL_CTA_CONTENT } from "@/constants/global";

export default function KeyTakeaways() {
  const theme = THEMES[currentTheme as keyof typeof THEMES];
  const takeawaysList = [...KEY_TAKEWAYS_CONTENT.takeways, ...KEY_TAKEWAYS_CONTENT.takeways, ...KEY_TAKEWAYS_CONTENT.takeways];

  return (
    <section
      id="key-takeaways"
      className="relative w-full py-32 px-6 overflow-hidden bg-[var(--theme-background)]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-top">
        {/* LEFT SIDE */}
        <div className="space-y-6 relative">
          {/* Tag with pulse */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-400/5 border border-red-400/15 backdrop-blur-[4px]"
          >
            <div className="pulse red" aria-hidden="true" />
            <span
              className="text-xs font-medium tracking-wide text-[var(--theme-accent-a)]"
            >
              {KEY_TAKEWAYS_CONTENT.tag.label}
            </span>
          </div>

          {/* Title with gradient */}
          <h2
            className="text-[32px] md:text-[42px] font-bold leading-tight text-[var(--theme-text)]"
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
            className="text-md max-w-md leading-relaxed text-[var(--theme-subtext)]"
          >
            <AnimatedLine
              text={KEY_TAKEWAYS_CONTENT.description}
              delay={0.15}
              textColor="var(--theme-subtext)"
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
          className="relative h-[520px] overflow-hidden pt-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
        >
          {/* Scrolling List */}
          <div
            className="space-y-6 flex flex-col animate-[marquee-vertical_20s_linear_infinite]"
          >
            {takeawaysList.map((item, index) => {
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
                    shrink-0
                  "
                >
                  {/* Left accent */}
                  <div
                    className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[var(--theme-accent-a)] to-transparent"
                  />

                  <h3
                    className="font-medium text-[16px] md:text-[18px] text-[var(--theme-text)]"
                  >
                    {item.text}
                  </h3>

                  <Icon
                    size={24}
                    strokeWidth={2.2}
                    className="text-[var(--theme-accent-a)]"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); }
        }
      `}</style>
    </section>
  );
}

