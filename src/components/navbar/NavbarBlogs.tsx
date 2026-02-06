"use client";

import Link from "next/link";
import { NAV_BLOGS } from "@/constants/navbar";
import { useTheme } from "@/components/providers/ThemeProvider";
import { THEMES } from "@/constants/theme";

export default function navbarblogs({
    menuKey,
    setMenuKey,
}: {
    menuKey: string | null;
    setMenuKey: (key: string | null) => void;
}) {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];

    const open = menuKey === "Blogs";

    return (
        <div
            onMouseEnter={() => {
                if (menuKey) setMenuKey(menuKey);
            }}
            onMouseLeave={() => setMenuKey(null)}
            className={`
            fixed left-1/2 top-[50px] -translate-x-1/2
            w-[600px] rounded-2xl 
            border shadow-2xl
            transition-all duration-300 origin-top
            backdrop-blur-xl
            border-[var(--theme-text)]/15
            shadow-[inset_0px_1px_20px_rgba(255,255,255,0.25)]
            overflow-hidden bg-[var(--theme-background)]
            ${open
                    ? "opacity-100 pointer-events-auto scale-100 translate-y-0"
                    : "opacity-0 pointer-events-none scale-95 -translate-y-4"
                }
      `}
        >
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {NAV_BLOGS.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setMenuKey(null)}
                            className="
                    group flex items-start gap-4 p-4 rounded-xl border border-[var(--theme-text)]/20 bg-[var(--theme-card-bg)]
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                    "
                        >
                            <div
                                className="
                        p-2.5 rounded-lg shrink-0 transition-colors
                        group-hover:bg-[var(--theme-primary)] bg-[var(--theme-primary)]/10 text-[var(--theme-primary)] [--hoverText:#fff]
                    "

                            >
                                <Icon size={20} className="group-hover:text-white transition-colors" />


                            </div>

                            <div>
                                <h4
                                    className="text-sm font-semibold mb-1 group-hover:text-[var(--theme-primary)] transition-colors text-[var(--theme-text)]"
                                >
                                    {item.name}
                                </h4>
                                <p
                                    className="text-xs line-clamp-2 leading-relaxed text-[var(--theme-subtext)]"
                                >
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
