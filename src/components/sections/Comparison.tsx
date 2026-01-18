"use client";

import { Check, X } from "lucide-react";

import { COMPARISON_CONTENT } from "@/constants/comparison";
import AnimatedLine from "../animated/AnimatedLine";
import { ScrollArea } from "@/components/ui/scroll-area";
import { THEMES, currentTheme } from "../../constants/theme";
import RandomGradientGlow from "../effects/RandomGradientGlow";
import SectionEntrance from "../animated/SectionEntrance";

export default function Comparison() {
  const { tag, title, description, features } = COMPARISON_CONTENT;

  return (
    <section
      id="comparison"
      className="relative w-full py-32 px-6"
      style={{ backgroundColor: "var(--theme-background)" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Tag with existing pulse class */}
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
            to: "#8b5cf6"
          }} />
        </h2>

        {/* Description */}
        <div
          className="max-w-3xl mx-auto mt-4 leading-relaxed"
          style={{ color: "var(--theme-subtext)" }}
        >
          <AnimatedLine text={description} delay={0.1} textColor="var(--theme-subtext)" />
        </div>

        {/* Comparison Table */}
        <SectionEntrance
          className="
            relative mt-20 rounded-3xl overflow-hidden
            bg-black/40
            border border-white/10
            backdrop-blur-xl
          "
        >
          <RandomGradientGlow
            colorA="var(--theme-accent-a)"
            colorB="var(--theme-accent-b)"
            variant="right"
            opacity={0.35}
          />

          {/* Header */}
          <div className="grid grid-cols-3 items-center text-sm font-semibold py-6 px-6">
            <div className="text-left opacity-100 text-white">Features</div>

            <div
              className="mx-3 py-2 rounded-xl"
              style={{
                background: "rgba(34, 197, 94, 0.13)",
                color: "#22c55e",
              }}
            >
              ekanostudio
            </div>

            <div
              className="mx-3 py-2"
              style={{
                color: "#ef4444",
              }}
            >
              Industry
            </div>
          </div>

          {/* Rows */}
          <ScrollArea className="h-[400px] md:h-[450px]">
            <div className="divide-y divide-white/10">
              {features.map((feature, i) => {
                const industryHas =
                  ["Conversion-Focused Web Development"].includes(feature);

                return (
                  <div
                    key={i}
                    className="grid grid-cols-3 items-center py-5 px-6"
                  >
                    {/* Feature */}
                    <div
                      className="text-left text-sm"
                      style={{ color: "var(--theme-text)" }}
                    >
                      {feature}
                    </div>

                    {/* ekanostudio — ALWAYS GREEN CHECK */}
                    <div className="flex justify-center">
                      <Check size={20} color="#22c55e" />
                    </div>

                    {/* Industry — RED CHECK OR RED CROSS */}
                    <div className="flex justify-center">
                      {industryHas ? (
                        <Check size={20} color="#ef4444" />
                      ) : (
                        <X size={20} color="#ef4444" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </SectionEntrance>
      </div>
    </section>
  );
}

