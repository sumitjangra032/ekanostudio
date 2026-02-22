"use client";

import { CTA_CONTENT } from "@/constants/cta";
import AnimatedLine from "../animated/AnimatedLine";
import Image from "next/image";
import { BRAND, GLOBAL_CTA_CONTENT, BRAND_LOGO } from "@/constants/global";
import { THEMES, currentTheme } from "../../constants/theme";
import AnimatedRotateButton from "../animated/AnimatedRotateButton";

import Link from "next/link";

interface CTAProps {
  category?: string;
  service?: string;
}

export default function CTA({ category, service }: CTAProps) {
  const theme = THEMES[currentTheme as keyof typeof THEMES];

  const projectHref = category && service
    ? `${GLOBAL_CTA_CONTENT.serviceForm.href}?category=${category}&service=${service}`
    : category
      ? `${GLOBAL_CTA_CONTENT.serviceForm.href}?category=${category}`
      : GLOBAL_CTA_CONTENT.serviceForm.href;

  return (
    <section
      className="w-full py-32 px-6 text-center"
      style={{
        backgroundColor: "var(--theme-background)",
      }}
    >
      <div className="relative max-w-3xl mx-auto">
        <Link href="/" className="flex items-center justify-center mb-6">
          <Image
            src={BRAND_LOGO.src}
            alt={BRAND.name}
            width={BRAND_LOGO.centered.width}
            height={BRAND_LOGO.centered.height}
            className={BRAND_LOGO.centered.className}
          />
        </Link>

        {/* HEADLINE */}
        <div
          className="text-4xl font-light leading-tight space-y-1"
          style={{ color: "var(--theme-text)" }}
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
          style={{ color: "var(--theme-subtext)" }}
        >
          <AnimatedLine text={CTA_CONTENT.description} delay={0.4} textColor="var(--theme-subtext)" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <AnimatedRotateButton
            text="Start Your Project"
            href={projectHref}
            color={theme.buttonBg}
            accent={theme.accents}
          />
          <AnimatedRotateButton
            text={GLOBAL_CTA_CONTENT.bookConsultation.title}
            href={GLOBAL_CTA_CONTENT.bookConsultation.href}
            color={theme.buttonBg}
            accent={theme.accents}
          />
        </div>
      </div>
    </section>
  );
}

