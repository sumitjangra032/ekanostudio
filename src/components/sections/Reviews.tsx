"use client";

import AnimatedLine from "../animated/AnimatedLine";
import { REVIEW_CONTENT } from "@/constants/reviews";
import { THEMES, currentTheme } from "../../constants/theme";
import ReviewCardScroller from "../commons/ReviewCardScroller";

export default function Reviews() {
  const theme = THEMES[currentTheme as keyof typeof THEMES];

  return (
    <section
      id="reviews"
      className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundColor: "var(--theme-background)",
      }}
    >
      {/* Background Image - Responsive */}
      <div
        className="absolute inset-0 opacity-20 lg:opacity-30"
        style={{
          backgroundImage: `url(${REVIEW_CONTENT.background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "clamp(600px, 90vw, 1200px) auto",
          backgroundPosition: "center clamp(200px, 40vh, 350px)",
          filter: "brightness(0.9)",
          transform: "scale(1.05)",
        }}
      />

      {/* Overlay gradient for better text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 30%, var(--theme-background) 70%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="max-w-5xl mx-auto text-center mb-12 md:mb-16 lg:mb-24 px-4">
          {/* Tag with pulse */}
          <div
            className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 md:mb-6"
            style={{
              background: "rgba(255, 60, 40, 0.03)",
              border: "1px solid rgba(255, 60, 40, 0.15)",
              backdropFilter: "blur(4px)",
            }}
          >
            <div className="pulse w-2 h-2 sm:w-2.5 sm:h-2.5" />
            <span
              className="text-xs sm:text-sm font-medium tracking-wide"
              style={{ color: "var(--theme-accent-a)" }}
            >
              {REVIEW_CONTENT.tag.label}
            </span>
          </div>

          {/* Title with gradient */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold mt-2 md:mt-3 px-2"
            style={{ color: "var(--theme-text)" }}
          >
            <AnimatedLine
              text={REVIEW_CONTENT.title}
              delay={0.1}
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
            className="text-base sm:text-lg md:text-xl max-w-2xl md:max-w-3xl mx-auto mt-3 md:mt-4 leading-relaxed px-4"
            style={{ color: "var(--theme-subtext)" }}
          >
            <AnimatedLine
              text={REVIEW_CONTENT.description}
              delay={0.1}
              textColor="var(--theme-subtext)"
            />
          </div>
        </div>

        {/* 🔥 HORIZONTAL REVIEW SCROLLER - Responsive */}
        <div className="px-2 sm:px-4 md:px-6">
          <ReviewCardScroller
            reviews={REVIEW_CONTENT.reviews}
            direction="left"
            duration={60} // Default duration, the scroller component should handle internal responsiveness if needed
            className="py-4"
          />
        </div>

        {/* Navigation indicator for mobile */}
        <div className="flex justify-center mt-8 md:mt-12 lg:hidden">
          <div className="flex items-center gap-2">
            <span
              className="text-xs opacity-70"
              style={{ color: "var(--theme-subtext)" }}
            >
              ← Scroll →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
