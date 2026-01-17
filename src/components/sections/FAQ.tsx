import { FAQ_CONTENT } from "@/constants/faq";
import AnimatedLine from "../animated/AnimatedLine";
import { THEMES, currentTheme } from "../../constants/theme";
import RandomGradientGlow from "../effects/RandomGradientGlow";
import FAQList from "../animated/FAQList";
import SectionEntrance from "../animated/SectionEntrance";

export default function FAQ() {
  const theme = THEMES[currentTheme as keyof typeof THEMES];

  return (
    <section
      id="faq"
      className="relative w-full py-32 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--theme-background)" }}
    >
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
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
            {FAQ_CONTENT.tag.label}
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-[32px] md:text-[42px] font-bold"
          style={{ color: "var(--theme-text)" }}
        >
          <AnimatedLine
            text={FAQ_CONTENT.title}
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
          className="max-w-2xl mx-auto mt-4 leading-relaxed"
          style={{ color: "var(--theme-subtext)" }}
        >
          <AnimatedLine
            text={FAQ_CONTENT.description}
            textColor="var(--theme-subtext)"
          />
        </div>
      </div>

      {/* FAQ LIST */}
      <div className="relative max-w-4xl mx-auto mt-16">
        <RandomGradientGlow
          colorA="var(--theme-accent-a)"
          colorB="var(--theme-accent-b)"
          opacity={0.35}
        />

        <SectionEntrance
          className="
            relative rounded-3xl
            bg-black/40
            backdrop-blur-xl
            border border-white/10
            overflow-hidden
          "
        >
          <FAQList faqData={FAQ_CONTENT.faqData} theme={theme} />
        </SectionEntrance>
      </div>
    </section>
  );
}

