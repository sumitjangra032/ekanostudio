"use client";

import AnimatedLine from "../animated/AnimatedLine";
import { REVIEW_CONTENT } from "@/constants/reviews";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "../../constants/theme";
import ReviewCardScroller from "../commons/ReviewCardScroller";
import { useMemo } from "react";

export default function Reviews() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  // Responsive duration for scroller based on screen size
  const scrollDuration = useMemo(() => {
    if (typeof window === 'undefined') return 60;

    const width = window.innerWidth;
    if (width < 640) return 40; // Mobile: faster
    if (width < 1024) return 50; // Tablet: medium speed
    return 60; // Desktop: normal speed
  }, []);

  return (
    <section
      id="reviews"
      className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundColor: theme.background,
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
          background: `radial-gradient(circle at 50% 50%, transparent 30%, ${theme.background} 70%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="max-w-5xl mx-auto text-center mb-12 md:mb-16 lg:mb-24 px-4">
          {/* Tag with pulse */}
          <div
            className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 md:mb-6"
            style={{
              background: `${theme.accents.a}08`,
              border: `1px solid ${theme.accents.a}20`,
              backdropFilter: "blur(4px)",
            }}
          >
            <div className="pulse w-2 h-2 sm:w-2.5 sm:h-2.5" />
            <span
              className="text-xs sm:text-sm font-medium tracking-wide"
              style={{ color: theme.accents.a }}
            >
              {REVIEW_CONTENT.tag.label}
            </span>
          </div>

          {/* Title with gradient */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold mt-2 md:mt-3 px-2"
            style={{ color: theme.text }}
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
            style={{ color: theme.subtext }}
          >
            <AnimatedLine
              text={REVIEW_CONTENT.description}
              delay={0.1}
              textColor={theme.subtext}
            />
          </div>
        </div>

        {/* 🔥 HORIZONTAL REVIEW SCROLLER - Responsive */}
        <div className="px-2 sm:px-4 md:px-6">
          <ReviewCardScroller
            reviews={REVIEW_CONTENT.reviews}
            direction="left"
            duration={scrollDuration}
            className="py-4"
          />
        </div>

        {/* Navigation indicator for mobile */}
        <div className="flex justify-center mt-8 md:mt-12 lg:hidden">
          <div className="flex items-center gap-2">
            <span
              className="text-xs opacity-70"
              style={{ color: theme.subtext }}
            >
              ← Scroll →
            </span>
          </div>
        </div>
      </div>

      {/* Responsive spacing helper */}
      <style jsx>{`
        @media (max-width: 640px) {
          .pulse {
            animation: pulse 2s infinite;
          }
        }
        
        @media (max-width: 768px) {
          #reviews {
            scroll-margin-top: 2rem;
          }
        }
        
        .pulse {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: ${theme.accents.a};
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}