"use client";

import AnimatedLine from "../animated/AnimatedLine";
import { REVIEW_CONTENT } from "@/constants/reviews";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "../../constants/theme";

import ReviewCardScroller from "../commons/ReviewCardScroller";

export default function Reviews() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  return (
    <section
      id="reviews"
      className="w-full py-32 px-6 relative overflow-hidden"
      style={{
        backgroundColor: theme.background,
      }}
    >
      {/* Background Image – clarity fixed */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${REVIEW_CONTENT.background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "1200px auto",
          backgroundPosition: "center 350px",
          filter: "brightness(0.9)",   // ❌ removed blur, improved clarity
          transform: "scale(1.05)",    // subtle depth without blur
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="max-w-5xl mx-auto text-center mb-24">

          {/* Tag with pulse green */}
          <div
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full mb-6"
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
              {REVIEW_CONTENT.tag.label}
            </span>
          </div>

          {/* Title with gradient */}
          <h2
            className="text-[32px] md:text-[42px] font-bold mt-3"
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
            className="text-lg max-w-3xl mx-auto mt-4 leading-relaxed"
            style={{ color: theme.subtext }}
          >
            <AnimatedLine text={REVIEW_CONTENT.description} delay={0.1} textColor={theme.subtext} />
          </div>
        </div>

        {/* 🔥 HORIZONTAL REVIEW SCROLLER */}
        <ReviewCardScroller
          reviews={REVIEW_CONTENT.reviews}
          direction="left"
          duration={60}
        />

      </div>
    </section>
  );
}
