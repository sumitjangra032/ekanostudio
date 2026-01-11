"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import AnimatedLine from "@/components/animated/AnimatedLine";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function AboutPageClient() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  return (
    <section
      className="px-4 sm:px-8 pt-28 pb-24"
      style={{ backgroundColor: theme.background, color: theme.text }}
    >
      <div className="max-w-6xl mx-auto space-y-20">

        {/* TOP TAG */}
        <div className="flex justify-center">
          <div
            className="px-4 py-2 rounded-full text-xs tracking-wide uppercase font-medium"
            style={{
              background: `${theme.accents.a}10`,
              border: `1px solid ${theme.accents.a}30`,
              color: theme.accents.a,
            }}
          >
            About EkanoStudio
          </div>
        </div>

        {/* HERO */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            <AnimatedLine
              text="We Build Digital Systems That Grow Businesses"
              isHeading
            />
          </h1>

          <p
            className="max-w-3xl mx-auto text-base leading-relaxed"
            style={{ color: theme.subtext }}
          >
            EkanoStudio is a modern digital services studio focused on building
            high-performance digital experiences for brands, startups, and
            growing businesses. We combine strategy, design, and technology to
            create scalable digital solutions that deliver real business impact.
          </p>
        </div>

        {/* OUR APPROACH + WHAT WE DO */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-3xl p-8 bg-black/40 border border-white/10 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
            <p className="text-sm leading-relaxed" style={{ color: theme.subtext }}>
              Every project at EkanoStudio starts with clarity. Before design or
              development, we focus on understanding your business goals,
              audience, and long-term vision. This ensures everything we build
              is intentional, scalable, and performance-driven.
            </p>
          </div>

          <div className="rounded-3xl p-8 bg-black/40 border border-white/10 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
            <p className="text-sm leading-relaxed" style={{ color: theme.subtext }}>
              From UI/UX design and web development to SEO, marketing,
              automation, and branding — we offer end-to-end digital services
              under one roof. Everything we build works together as a complete
              system, not disconnected parts.
            </p>
          </div>
        </div>

        {/* MISSION / VALUES / MINDSET */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Mission",
              text: "To help businesses build, launch, and scale digital products with clarity, confidence, and long-term value.",
            },
            {
              title: "Our Values",
              text: "Simplicity, transparency, performance, and trust guide every decision we make — from design to delivery.",
            },
            {
              title: "Our Mindset",
              text: "We think long-term. We build systems, not quick fixes. Quality always comes before shortcuts.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-3xl p-8 bg-black/40 border border-white/10 backdrop-blur-xl"
            >
              <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: theme.subtext }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* TIMELINE */}
        <div className="space-y-10">
          <h2 className="text-3xl font-semibold text-center">Our Journey</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                year: "2023",
                text: "EkanoStudio was founded with a focus on clean design and scalable development.",
              },
              {
                year: "2024",
                text: "Expanded services into growth marketing, automation, and performance optimization.",
              },
              {
                year: "2025",
                text: "Building long-term partnerships with brands and startups across India and globally.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl p-6 bg-black/40 border border-white/10 backdrop-blur-xl"
              >
                <span
                  className="text-sm font-semibold"
                  style={{ color: theme.accents.a }}
                >
                  {item.year}
                </span>
                <p className="mt-3 text-sm" style={{ color: theme.subtext }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT DETAILS – CENTERED & PROFESSIONAL */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="rounded-3xl p-8 bg-black/40 border border-white/10 backdrop-blur-xl flex flex-col items-center gap-3">
              <FiMapPin size={26} style={{ color: theme.accents.a }} />
              <h4 className="text-lg font-semibold">Address</h4>
              <p className="text-sm" style={{ color: theme.subtext }}>
                Hisar, Haryana<br />India
              </p>
            </div>

            <div className="rounded-3xl p-8 bg-black/40 border border-white/10 backdrop-blur-xl flex flex-col items-center gap-3">
              <FiMail size={26} style={{ color: theme.accents.a }} />
              <h4 className="text-lg font-semibold">Email</h4>
              <p className="text-sm" style={{ color: theme.subtext }}>
                info@ekanostudio.com<br />
                support@ekanostudio.com
              </p>
            </div>

            <div className="rounded-3xl p-8 bg-black/40 border border-white/10 backdrop-blur-xl flex flex-col items-center gap-2">
              <FiPhone size={26} style={{ color: theme.accents.a }} />
              <h4 className="text-lg font-semibold">Phone</h4>
              <p className="text-sm" style={{ color: theme.subtext }}>
                +91 9034817987
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-semibold">
            Let's Build Something That Lasts
          </h3>
          <p className="text-sm" style={{ color: theme.subtext }}>
            If you're looking for a digital partner who understands design,
            technology, and business — EkanoStudio is ready.
          </p>
        </div>

      </div>
    </section>
  );
}
