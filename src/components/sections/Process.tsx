import { PROCESS_CONTENT } from "@/constants/process";
import AnimatedLine from "../animated/AnimatedLine";
import { THEMES, currentTheme } from "../../constants/theme";
import SectionEntrance from "../animated/SectionEntrance";

export default function ProcessSection() {
  const theme = THEMES[currentTheme as keyof typeof THEMES];

  return (
    <section
      id="process"
      className="relative w-full py-28 px-6"
      style={{ backgroundColor: "var(--theme-background)" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Top Tag */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{
            background: "rgba(255, 60, 40, 0.03)",
            border: "1px solid rgba(255, 60, 40, 0.15)",
            backdropFilter: "blur(4px)",
          }}
        >
          <div className="pulse red" aria-hidden="true" />
          <span
            className="text-xs font-medium tracking-wide"
            style={{ color: "var(--theme-accent-a)" }}
          >
            {PROCESS_CONTENT.tag.label}
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-[32px] md:text-[42px] font-bold"
          style={{ color: "var(--theme-text)" }}
        >
          <AnimatedLine
            text={PROCESS_CONTENT.title}
            delay={0.1}
            isHeading
            gradient={{
              from: "#fac175",
              via: "#ff006a",
              to: "#8b5cf6",
            }}
          />
        </h2>

        {/* Subtitle */}
        <div className="mt-4 mb-12 max-w-3xl">
          <AnimatedLine
            text={PROCESS_CONTENT.description}
            delay={0.1}
            isHeading={false}
            textColor="var(--theme-subtext)"
          />
        </div>

        {/* PROCESS CARDS */}
        <SectionEntrance className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROCESS_CONTENT.processSteps.map((item, idx) => (
            <div
              key={idx}
              className="
                relative rounded-3xl p-8
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

              {/* Step Badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6"
                style={{
                  background: "rgba(255, 60, 40, 0.08)",
                  color: "var(--theme-accent-a)",
                  border: "1px solid rgba(255, 60, 40, 0.2)",
                }}
              >
                <span className="opacity-70">Step</span>
                <span>{item.step}</span>
              </div>

              {/* Card Title */}
              <h3
                className="text-2xl font-semibold mb-5 tracking-tight"
                style={{
                  color: "var(--theme-text)",
                  fontFamily: "var(--font-general-sans)",
                }}
              >
                {item.title}
              </h3>

              {/* Bullet Content (Paragraph Style) */}
              <div className="space-y-4">
                {item.bullets.map((bullet, bIdx) => (
                  <div
                    key={bIdx}
                    className="flex gap-4 items-start"
                  >
                    {/* Dot */}
                    <span
                      className="mt-2 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: "var(--theme-accent-a)" }}
                    />

                    {/* Text */}
                    <p
                      className="text-[15px] leading-relaxed font-light w-full max-w-none"
                      style={{
                        color: "var(--theme-subtext)",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      {String(bullet).replace(/\n+/g, " ")}
                    </p>
                  </div>
                ))}
              </div>

              {/* Hover Ambient */}
              <div
                className="
                  absolute inset-0 opacity-0
                  hover:opacity-100
                  transition-opacity duration-500
                  pointer-events-none
                "
                style={{
                  background: `radial-gradient(
                    600px circle at top right,
                    rgba(255, 60, 40, 0.07),
                    transparent 45%
                  )`,
                }}
              />
            </div>
          ))}
        </SectionEntrance>
      </div>
    </section>
  );
}

