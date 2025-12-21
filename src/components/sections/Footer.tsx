"use client";

import Image from "next/image";
import { FOOTER_CONTENT } from "@/constants/footer";
import { BRAND } from "@/constants/global";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "../../constants/theme";
import Link from "next/link";

export default function Footer() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  return (
    <footer
      className="relative w-full py-20 px-6 border-t overflow-hidden"
      style={{
        backgroundColor: theme.background,
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      {/* Animated Ambient Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(1200px circle at bottom center, ${theme.accents.a}08, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

          {/* BRAND COLUMN (Span 4) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center font-bold text-2xl tracking-tight" style={{ color: theme.text }}>
              {BRAND.name}
            </Link>
            <p className="text-sm font-light leading-relaxed max-w-md" style={{ color: theme.subtext }}>
              {FOOTER_CONTENT.tagline}
            </p>
            <div className="flex gap-4 mt-2">
              {FOOTER_CONTENT.socials.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                  style={{
                    color: theme.subtext,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.05)"
                  }}
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS COLUMNS (Span 2 each) */}
          {FOOTER_CONTENT.columns.map((col, idx) => (
            <div key={idx} className="md:col-span-2 lg:col-span-2">
              <h4 className="font-semibold text-sm mb-6 uppercase tracking-wider" style={{ color: theme.text }}>
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link: any, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm font-light transition-all duration-300 hover:translate-x-1"
                      style={{ color: theme.subtext }}
                    >
                      <span className="group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-colors duration-300">
                        {link.label}
                      </span>

                      {link.badge && (
                        <span
                          className="px-2 py-0.5 text-[10px] font-bold rounded-md uppercase tracking-wide animate-pulse"
                          style={{
                            background: "linear-gradient(90deg, #ff0080, #7928ca)",
                            color: "white",
                            boxShadow: "0 2px 10px rgba(121, 40, 202, 0.3)"
                          }}
                        >
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* COPYRIGHT */}
        <div
          className="mt-20 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light"
          style={{
            borderColor: "rgba(255,255,255,0.08)",
            color: theme.subtext
          }}
        >
          <p>© {new Date().getFullYear()} {FOOTER_CONTENT.brand}. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Made with ❤️ in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
