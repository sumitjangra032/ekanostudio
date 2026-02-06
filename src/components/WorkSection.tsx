"use client";

import { useTheme } from "./providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import AnimatedLine from "./animated/AnimatedLine";
import { WORK_CONTENT } from "@/constants/work";
import WorkMarquee from "./WorkMarquee";

const ROW_1 = [
  { src: "https://framerusercontent.com/images/0DzYDI0BJ4hmv3ZFOEoKCHNRads.png" },
  { src: "https://framerusercontent.com/images/UR1d2u9WH5HccJP03bKTSY1FDQ.png" },
  { src: "https://framerusercontent.com/images/IHfks8oJ30AQUhgh03QgUwHIA.png" },
  { src: "https://framerusercontent.com/images/M2aqRkcDBti4UtcNvjmYLwZUOfo.png" },
];

const ROW_2 = [
  { src: "https://framerusercontent.com/images/jyNE2GeNnp9aMJcnE6tpf72YE.png" },
  { src: "https://framerusercontent.com/images/3HdSKdJID82cm18YIfU2F5to.jpg" },
  { src: "https://framerusercontent.com/images/aCNiceGIrEoe5X35haWm4Ar1uo.jpg" },
  { src: "https://framerusercontent.com/images/v6Mszk3RrZhyQSqyf901fkxHDRg.jpg" },
];

const ROW_3 = [
  { src: "https://framerusercontent.com/images/crpV6RKC6FWLT71lCtgSSST0.png" },
  { src: "https://framerusercontent.com/images/JpaqrzL88okqjP21h9uM2ruGJ4A.png" },
  { src: "https://framerusercontent.com/images/XyWulADII4hpinSHIR6UhpNubbo.jpg" },
  { src: "https://framerusercontent.com/images/k2CV27IWDWGxHRdsQZnVNllkPW0.png" },
];

export default function WorkSection() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  return (
    <section
      id="work"
      className="relative w-full space-y-12 py-24 bg-[var(--theme-background)]"
    >
      <div className="max-w-full mx-auto px-6 mb-12">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 tag-glass-red">
          <div className="pulse red" />
          <span className="text-xs font-medium tracking-wide text-[var(--theme-accent-a)]">
            {WORK_CONTENT.tag.label}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-[32px] md:text-[42px] font-bold mb-4 text-[var(--theme-text)] font-general-sans">
          <AnimatedLine
            text={WORK_CONTENT.title}
            isHeading
            gradient={{
              from: "#fac175",
              via: "#ff006a",
              to: "#8b5cf6",
            }}
          />
        </h2>

        {/* Description */}
        <div className="max-w-2xl">
          <AnimatedLine
            text={WORK_CONTENT.description}
            delay={0.1}
            isHeading={false}
            textColor={theme.subtext}
          />
        </div>
      </div>
      <div className="space-y-8 work-perspective-skew">
        <WorkMarquee items={ROW_1} speed={45} mask="soft" />
        <WorkMarquee items={ROW_2} speed={60} reverse />
        <WorkMarquee items={ROW_3} speed={50} mask="soft" />
      </div>
    </section>
  );
}
