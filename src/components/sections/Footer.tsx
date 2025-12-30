"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FOOTER_CONTENT } from "@/constants/footer";
import { BRAND } from "@/constants/global";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "../../constants/theme";

export default function Footer() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: theme.background }}
    >
      {/* TOP DIVIDER (ALWAYS VISIBLE) */}
      <div className="absolute top-0 left-0 w-full h-[1px] z-20">
        <div
          className="mx-auto h-full max-w-7xl"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
          }}
        />
      </div>

      {/* AMBIENT GLOW */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(
            1100px circle at bottom center,
            ${theme.accents.a}12,
            transparent 65%
          )`,
        }}
      />

      {/* CENTERED CONTENT WRAPPER */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-20">

          {/* MAIN GRID (PROPER 12-COLUMN MATH) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-14">

            {/* BRAND — 5 COLS */}
            <div className="lg:col-span-5 flex flex-col gap-2">
              <Link
                href="/"
                className="text-2xl font-semibold tracking-tight"
                style={{ color: theme.text }}
              >
                {BRAND.name}
              </Link>

              <p
                className="text-sm leading-relaxed max-w-md"
                style={{ color: theme.subtext }}
              >
                {FOOTER_CONTENT.tagline}
              </p>

              {/* SOCIALS */}
              <div className="flex gap-4 pt-2">
                {FOOTER_CONTENT.socials.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="p-2 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: theme.subtext,
                    }}
                  >
                    <item.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* COMPANY — 2 COLS */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              <h4
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: theme.text }}
              >
                Company
              </h4>

              <ul className="space-y-1">
                {FOOTER_CONTENT.columns[0].links.map((link, i) => (
                  <li key={i}>
                    <FooterLink theme={theme} link={link} />
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES — 2 COLS */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              <h4
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: theme.text }}
              >
                Services
              </h4>

              <ul className="space-y-1">
                {FOOTER_CONTENT.columns[1].links.map((link, i) => (
                  <li key={i}>
                    <FooterLink theme={theme} link={link} />
                  </li>
                ))}
              </ul>
            </div>

            {/* LEGAL — 3 COLS */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <h4
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: theme.text }}
              >
                Legal
              </h4>

              <ul className="space-y-1">
                {FOOTER_CONTENT.columns[2].links.map((link, i) => (
                  <li key={i}>
                    <FooterLink theme={theme} link={link} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div
            className="
              mt-20 pt-8
              border-t
              flex flex-col md:flex-row
              items-center justify-between gap-4
              text-xs
            "
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              color: theme.subtext,
            }}
          >
            <p>
              © {new Date().getFullYear()} {FOOTER_CONTENT.brand}. All rights reserved.
            </p>
            <span className="opacity-80">Made with ❤️ in India</span>
          </div>

        </div>
      </div>
    </footer>
  );
}

/* 🔥 FOOTER LINK — SAME HOVER ANIMATION AS NAVBAR */
function FooterLink({ link, theme }: any) {
  return (
    <Link
      href={link.href}
      className="group relative inline-flex items-center gap-2 text-sm font-light"
      style={{ color: theme.subtext }}
    >
      <span className="relative z-10">{link.label}</span>

      <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-full h-[4px] overflow-hidden pointer-events-none">
        <span
          className="
            absolute inset-0
            bg-gradient-to-r from-red-500 to-blue-500
            scale-x-0 origin-left
            transition-transform duration-500 ease-out
            group-hover:scale-x-100
          "
          style={{
            clipPath: "polygon(0 40%, 100% 0%, 100% 100%, 0 60%)",
          }}
        />
      </span>

      {link.badge && (
        <span
          className="text-[10px] px-2 py-0.5 rounded-md font-semibold uppercase"
          style={{
            background: `${theme.accents.a}22`,
            color: theme.accents.a,
          }}
        >
          {link.badge}
        </span>
      )}
    </Link>
  );
}
