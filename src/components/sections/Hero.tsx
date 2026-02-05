import { HERO_CONTENT } from "@/constants/hero";
import { THEMES, currentTheme } from "../../constants/theme";
import AnimatedRotateButton from "../animated/AnimatedRotateButton";
import { GLOBAL_CTA_CONTENT } from "@/constants/global";
import HeroParticles from "./HeroParticles";
import HeroBackgroundWrapper from "./HeroBackgroundWrapper";

export default function Hero() {
  const theme = THEMES[currentTheme as keyof typeof THEMES];

  return (
    <section
      id="hero"
      className="
        relative overflow-hidden
        min-h-[100svh]
        flex items-center justify-center
        px-4 pt-16 sm:px-6
      "
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >
      {/* Background - Lazy Loaded */}
      <HeroBackgroundWrapper />

      {/* Floating Particles - Lazy Loaded */}
      <HeroParticles />

      <div className="relative max-w-7xl mx-auto w-full text-center">
        {/* CSS Animation Wrapper instead of HeroEntrance JS */}
        {/* OPTIMIZATION: Removed 'animate-in fade-in zoom-in' to prevent LCP delay. Text is visible instantly. */}
        <div className="opacity-100">
          {/* Top Badge (SEO-safe H1) */}
          <div className="mb-4 flex justify-center">
            <h1 className="text-xs sm:text-sm tracking-wide bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent font-medium uppercase m-0 p-0 inline-block">
              Digital Growth, SEO & Web Solutions Partner
            </h1>
          </div>

          {/* Critical CSS for Hero H1 - Inlined for Instant Paint */}
          <style dangerouslySetInnerHTML={{
            __html: `
            #hero-h1 {
              font-size: 32px;
              line-height: 1.1;
            }
            @media (min-width: 640px) { #hero-h1 { font-size: 40px; } }
            @media (min-width: 768px) { #hero-h1 { font-size: 52px; } }
            @media (min-width: 1024px) { #hero-h1 { font-size: 64px; } }
            @media (min-width: 1280px) { #hero-h1 { font-size: 72px; } }
          `}} />

          {/* H2 Headline (was H1) */}
          <h2
            id="hero-h1"
            className="font-medium italic hero-headline"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 700,
              color: "var(--theme-text)"
            }}
          >
            {HERO_CONTENT.headline.map((line, index) => {
              const words = line.match(/(\[[^\]]+\]|\{[^}]+\}|\S+)/g) || [];
              return (
                <div key={index} className="block font-[var(--font-cabinet)]">
                  {words.map((word, i) => {
                    const isTarget = (word.startsWith("{") && word.endsWith("}")) || (word.startsWith("[") && word.endsWith("]"));
                    const cleanText = isTarget ? word.slice(1, -1) : word;
                    return (
                      <span
                        key={i}
                        className={`inline-block mr-2 px-[0.045em] ${isTarget ? 'gradient-text' : ''}`}
                      >
                        {cleanText}
                      </span>
                    );
                  })}
                </div>
              );
            })}
          </h2>

          {/* Supporting Description */}
          <div className="mt-4 max-w-3xl mx-auto">
            {HERO_CONTENT.description.map((desc, i) => (
              <p
                key={i}
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: "var(--theme-subtext)" }}
              >
                {desc}
              </p>
            ))}
          </div>

          {/* Sub Notes */}
          <div className="mt-4 space-y-1">
            {HERO_CONTENT.subNotes.map((note, i) => (
              <p
                key={i}
                className="text-xs sm:text-sm italic"
                style={{ color: "var(--theme-subtext)" }}
              >
                {note}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex justify-center">
            <AnimatedRotateButton
              text={GLOBAL_CTA_CONTENT.getStarted.title}
              href={GLOBAL_CTA_CONTENT.getStarted.href}
              color={theme.buttonBg}
              accent={theme.accents}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

