"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SERVICES_CONTENT } from "@/constants/services";
import { useTheme } from "@/components/providers/ThemeProvider";
import { THEMES } from "@/constants/theme";

export default function NavbarServices({
  menuKey,
  setMenuKey,
}: {
  menuKey: string | null;
  setMenuKey: (key: string | null) => void;
}) {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const open = menuKey === 'Services';

  useEffect(() => {
    if (open) setActiveCategoryIndex(0);
  }, [open]);

  const activeCategory = SERVICES_CONTENT.categories[activeCategoryIndex];

  return (
    <div
      onMouseEnter={() => {
        if (menuKey) setMenuKey(menuKey);
      }}
      onMouseLeave={() => setMenuKey(null)}
      className={`
        fixed left-1/2 top-[50px] -translate-x-1/2
        w-[90vw] max-w-6xl rounded-2xl 
        border shadow-2xl 
        transition-all duration-300 origin-top
        backdrop-blur-xl
        border border-white/30
        shadow-[inset_0px_1px_20px_rgba(255,255,255,0.25)]
        overflow-hidden
        ${open
          ? "opacity-100 pointer-events-auto scale-100 translate-y-0"
          : "opacity-0 pointer-events-none scale-95 -translate-y-4"
        }
      `}
      style={{
        background: theme.background, // slightly transparent
        borderColor: theme.text + "15",
      }}
    >
      <div className="flex min-h-[400px]">
        {/* LEFT SIDEBAR: CATEGORIES */}
        <div
          className="w-[280px] flex-shrink-0 border-r p-4 flex flex-col gap-1"
          style={{ borderColor: theme.text + "10", background: theme.cardBg + "80" }}
        >
          {SERVICES_CONTENT.categories.map((cat, i) => {
            const isActive = i === activeCategoryIndex;
            return (
              <div
                key={i}
                onMouseEnter={() => setActiveCategoryIndex(i)}
                className={`
                  cursor-pointer px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                  flex items-center justify-between group
                `}
                style={{
                  background: isActive ? theme.primary + "25" : "transparent",
                  color: isActive ? theme.primary : theme.text,
                }}
              >
                <span>{cat.name}</span>
                {isActive && (
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: theme.primary }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* RIGHT CONTENT: SERVICES */}
        <div className="flex-1 p-8 bg-opacity-50">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-semibold flex items-center gap-3">
              <activeCategory.icon size={22} style={{ color: theme.primary }} />
              <span style={{ color: theme.text }}>{activeCategory.name}</span>
            </h3>

            <Link
              href="/services"
              className="text-xs font-medium px-3 py-1.5 rounded-full border transition hover:opacity-70"
              onClick={() => setMenuKey(null)}
              style={{
                borderColor: theme.text + "20",
                color: theme.subtext,
              }}
            >
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {activeCategory.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={`/services/${activeCategory.slug}/${item.slug}`}
                  onClick={() => setMenuKey(null)}
                  className="
                    group flex items-start gap-4 p-4 rounded-xl border
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                  "
                  style={{
                    borderColor: theme.text + "20",
                    background: theme.cardBg,
                  }}
                >
                  <div
                    className="
                      p-2.5 rounded-lg shrink-0 transition-colors
                      group-hover:bg-[var(--hoverBg)]
                    "
                    style={{
                      background: theme.primary + "10",
                      color: theme.primary,
                      "--hoverBg": theme.primary,
                      "--hoverText": "#fff"
                    } as React.CSSProperties}
                  >
                    <Icon size={20} className="group-hover:text-white transition-colors" />
                  </div>

                  <div>
                    <h4
                      className="text-sm font-semibold mb-1 group-hover:text-[var(--primary)] transition-colors"
                      style={{ color: theme.text, "--primary": theme.primary } as React.CSSProperties}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-xs line-clamp-2 leading-relaxed"
                      style={{ color: theme.subtext }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
