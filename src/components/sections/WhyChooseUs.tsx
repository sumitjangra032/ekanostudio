import MarqueeScroller from "../commons/MarqueeScroller";
import { WHY_US_CONTENT } from "@/constants/whyChooseUs";
import { THEMES, currentTheme } from "../../constants/theme";
import AnimateDownloadedSVG from "../animated/AnimateDownloadedSVG";
import AnimatedLine from "../animated/AnimatedLine";
import SectionEntrance from "../animated/SectionEntrance";

export default function WhyChooseUs() {
  const theme = THEMES[currentTheme as keyof typeof THEMES];

  return (
    <div
      id="why-us"
      className="relative w-full py-32 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--theme-background)" }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Title */}
        <AnimatedLine
          text={WHY_US_CONTENT.title}
          delay={0.4}
          isHeading
          gradient={{
            from: "#fac175",
            via: "#ff006a",
            to: "#8b5cf6",
          }}
          className="text-[32px] md:text-[42px] font-bold mb-3 font-satoshi"
        />

        {/* Description */}
        <AnimatedLine
          text={WHY_US_CONTENT.description}
          delay={0.1}
          isHeading={false}
          className="mt-2 mb-10 max-w-3xl"
          textColor="var(--theme-subtext)"
        />

        {/* Cards */}
        <SectionEntrance className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_US_CONTENT.cards.map((card, i) => (
            <div
              key={i}
              className="
                group relative p-8 rounded-3xl
                bg-black/40
                border border-white/10
                backdrop-blur-xl
                overflow-hidden
                transition-all duration-500
                hover:-translate-y-1
              "
            >
              {/* Left Accent Line */}
              <div
                className="absolute left-0 top-0 h-full w-[2px]"
                style={{
                  background: `linear-gradient(
                    to bottom,
                    transparent,
                    var(--theme-accent-a),
                    transparent
                  )`,
                }}
              />

              {/* Hover Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(
                    500px circle at top right,
                    rgba(255, 60, 40, 0.07),
                    transparent 45%
                  )`,
                }}
              />

              {/* Icon */}
              <div
                className="
                  w-16 h-16 rounded-2xl
                  flex items-center justify-center
                  mb-8
                  backdrop-blur-md
                  transition-transform duration-300
                  group-hover:scale-110
                "
                style={{
                  background: `rgba(255, 60, 40, 0.08)`,
                  border: `1px solid rgba(255, 60, 40, 0.15)`,
                }}
              >
                <AnimateDownloadedSVG
                  src={card.icon}
                  size={30}
                  stroke="var(--theme-accent-a)"
                />
              </div>

              {/* Content */}
              <h3
                className="text-2xl font-semibold mb-4 tracking-tight"
                style={{
                  color: "var(--theme-text)",
                  fontFamily: "var(--font-general-sans)",
                }}
              >
                {card.title}
              </h3>

              <p
                className="text-[15px] leading-relaxed font-light"
                style={{
                  color: "var(--theme-subtext)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </SectionEntrance>

        {/* Marquee */}
        <div className="mt-24 pt-10 border-t border-white/5">
          <MarqueeScroller
            items={[...WHY_US_CONTENT.tagsRow1, ...WHY_US_CONTENT.tagsRow2]}
            direction="left"
            duration={40}
            textColor="var(--theme-subtext)"
          />
        </div>
      </div>
    </div>
  );
}

