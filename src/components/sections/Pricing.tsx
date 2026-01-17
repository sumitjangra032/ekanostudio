import { PRICING_CONTENT } from "@/constants/pricing";
import AnimatedLine from "../animated/AnimatedLine";
import { THEMES, currentTheme } from "../../constants/theme";
import AnimatedRotateButton from "../animated/AnimatedRotateButton";
import { GLOBAL_CTA_CONTENT } from "@/constants/global";
import AnimateDownloadedSVG from "../animated/AnimateDownloadedSVG";
import RandomGradientGlow from "../effects/RandomGradientGlow";
import SectionEntrance from "../animated/SectionEntrance";

export default function Pricing() {
  const theme = THEMES[currentTheme as keyof typeof THEMES];
  const { tag, title, description, plans, call } = PRICING_CONTENT;

  return (
    <section
      id="pricing"
      className="relative w-full py-32 px-6"
      style={{ backgroundColor: "var(--theme-background)" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Tag */}
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
            {tag.label}
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-[32px] md:text-[42px] font-bold"
          style={{ color: "var(--theme-text)" }}
        >
          <AnimatedLine text={title} delay={0.1} isHeading gradient={{
            from: "#fac175",
            via: "#ff006a",
            to: "#8b5cf6",
          }} />
        </h2>

        {/* Description */}
        <div
          className="max-w-2xl mx-auto mt-4 leading-relaxed"
          style={{ color: "var(--theme-subtext)" }}
        >
          <AnimatedLine text={description} delay={0.1} textColor="var(--theme-subtext)" />
        </div>

        {/* PLANS */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 items-stretch">
          {plans.map((p, i) => (
            <SectionEntrance
              key={i}
              className="
                relative flex flex-col p-10 rounded-3xl
                bg-black/40
                border border-white/10
                backdrop-blur-xl
                overflow-hidden
                text-left
                transition-all duration-500
                hover:-translate-y-1
              "
            >
              {p.popular && (
                <RandomGradientGlow
                  colorA="var(--theme-accent-a)"
                  colorB="var(--theme-accent-b)"
                  opacity={0.45}
                />
              )}

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

              {/* Popular Badge */}
              {p.popular && (
                <div
                  className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(255, 60, 40, 0.15)",
                    color: "var(--theme-accent-a)",
                    border: "1px solid rgba(255, 60, 40, 0.3)",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-sm font-semibold opacity-80"
                  style={{ color: "var(--theme-text)" }}
                >
                  {p.name}
                </h3>

                <p
                  className="text-3xl font-semibold mt-2"
                  style={{ color: "var(--theme-text)" }}
                >
                  {p.price}
                </p>

                {p.desc && (
                  <p
                    className="text-[15px] mt-4 leading-relaxed mb-4"
                    style={{ color: "var(--theme-subtext)" }}
                  >
                    {p.desc}
                  </p>
                )}

                {/* Features */}
                <div className="mt-8 space-y-2">
                  {p.features.map((f, idx) => (
                    <div
                      key={idx}
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
                        {f}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button */}
              <div className="mt-8">
                <AnimatedRotateButton
                  text={GLOBAL_CTA_CONTENT.getStarted.title}
                  href={GLOBAL_CTA_CONTENT.getStarted.href}
                  fullWidth
                  color={theme.buttonBg}
                  accent={theme.accents}
                />
              </div>
            </SectionEntrance>
          ))}
        </div>

        {/* CTA BOX */}
        <div className="mt-24 max-w-2xl mx-auto relative">
          <SectionEntrance
            className="
              relative rounded-3xl py-12 px-6
              bg-black/40
              border border-white/10
              backdrop-blur-xl
              overflow-hidden
              text-center
            "
          >
            <h3
              className="text-2xl font-medium"
              style={{ color: "var(--theme-text)" }}
            >
              {call.headline}
            </h3>

            <p
              className="mt-3 leading-relaxed"
              style={{ color: "var(--theme-subtext)" }}
            >
              {call.description}
            </p>

            <a
              href={GLOBAL_CTA_CONTENT.getStarted.href}
              className="
                mt-6 mx-auto inline-flex items-center gap-3
                px-8 py-3 rounded-xl
                bg-black
                border border-white/15
                text-white text-sm font-medium
                transition-all duration-300
                hover:border-white/30
                hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]
              "
            >
              <AnimateDownloadedSVG
                src={call.icon}
                size={18}
                stroke="#ffffff"
              />
              <span className="flex items-center gap-1">
                {call.buttonText}
                <span className="opacity-70">›</span>
              </span>
            </a>
          </SectionEntrance>
        </div>
      </div>
    </section>
  );
}

