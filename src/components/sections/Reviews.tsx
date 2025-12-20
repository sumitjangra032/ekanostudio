"use client";

import AnimatedLine from "../animated/AnimatedLine";
import { REVIEW_CONTENT } from "@/constants/reviews";
import MarqueeScroller from "../commons/MarqueeScroller";

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
      <div
    className="absolute inset-0"
    style={{
      backgroundImage: `url(${REVIEW_CONTENT.background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "1200px auto",    
      backgroundPosition: "center 350px", 
      filter: " brightness(0.7)", 
      transform: "scale(1.1)",           
    }}
  />
      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="max-w-5xl mx-auto text-center mb-24">
          <div
            className="flex items-center justify-center gap-2 font-semibold"
            style={{ color: theme.primary }}
          >
            <REVIEW_CONTENT.tag.icon size={16} />
            <span>{REVIEW_CONTENT.tag.label}</span>
          </div>

          <h2
            className="text-[42px] font-bold mt-3"
            style={{ color: theme.text }}
          >
            <AnimatedLine text={REVIEW_CONTENT.title} delay={0.1} isHeading={true} />
          </h2>

          <div
            className="text-lg max-w-3xl mx-auto mt-4 leading-relaxed"
            style={{ color: theme.subtext }}
          >
            <AnimatedLine text={REVIEW_CONTENT.description} delay={0.1} />
          </div>
        </div>

        {/* 🔥 HORIZONTAL REVIEW SCROLLER */}
        <ReviewCardScroller
          reviews={REVIEW_CONTENT.reviews}
          direction="left"
          duration={60}
        />

        {/* BRAND SCROLLER */}
        <div className="max-w-5xl mx-auto text-center mt-16">
          <p
            className="text-sm font-medium"
            style={{ color: theme.subtext }}
          >
            CLIENTS USING GREENCLOVER
          </p>
        </div>

        
        <div className="mt-6">
          <MarqueeScroller
            items={REVIEW_CONTENT.brands}
            direction="right"
            textColor={theme.subtext}
            iconColor={theme.primary}
          />
        </div>
      </div>
    </section>
  );
}

