"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CTA_CONTENT } from "@/constants/cta";
import AnimatedLine from "../animated/AnimatedLine";
import { ArrowUpRight } from "lucide-react";
import { BRAND, GLOBAL_CTA_CONTENT } from "@/constants/global";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "../../constants/theme";
import AnimatedRotateButton from "../animated/AnimatedRotateButton";
import Link from "next/link";

export default function CTA() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  return (
    <section
      className="w-full py-32 px-6 text-center"
      style={{
        // backgroundImage: theme.gradient2,
        backgroundColor: theme.background,
      }}
    >
      <div className="relative max-w-3xl mx-auto">
        <Link href="/" className="flex items-center justify-center font-bold text-3xl mb-6" style={{ color: theme.text }}>
          {BRAND.name}
        </Link>

        {/* HEADLINE */}
        <div
          className="text-4xl font-light leading-tight space-y-1"
          style={{ color: theme.text }}
        >
          <AnimatedLine text={CTA_CONTENT.title} delay={0.1} gradient={{
            from: "#fac175",
            via: "#ff006a",
            to: "#8b5cf6",
          }} />
        </div>

        {/* DESCRIPTION */}
        <div
          className="mt-6 text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-6"
          style={{ color: theme.subtext }}
        >
          <AnimatedLine text={CTA_CONTENT.description} delay={0.4} textColor={theme.subtext} />
        </div>

        <AnimatedRotateButton
          text={GLOBAL_CTA_CONTENT.getStarted.title}
          href={GLOBAL_CTA_CONTENT.getStarted.href}
          color={theme.buttonBg}
          accent={theme.accents}
        />
      </div>
    </section>
  );
}
