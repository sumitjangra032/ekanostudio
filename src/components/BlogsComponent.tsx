"use client";

import { useState, useMemo, useRef } from "react";
import { m, useInView } from "framer-motion";
import { NAV_BLOGS } from "@/constants/navbar";
import { useTheme } from "@/components/providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import Link from "next/link";
import AnimatedLine from "./animated/AnimatedLine";
import { SearchIcon } from "@/components/icons/LocalIcons";
import AnimateDownloadedSVG from "./animated/AnimateDownloadedSVG";

export default function BlogsComponent() {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];

    const [search, setSearch] = useState("");

    const searchRef = useRef<HTMLDivElement | null>(null);
    const searchInView = useInView(searchRef, { once: true, margin: "-10% 0px" });

    const cardsRef = useRef<HTMLDivElement | null>(null);
    const cardsInView = useInView(cardsRef, { once: true, margin: "-10% 0px" });

    const filtered = useMemo(() => {
        return NAV_BLOGS.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.description.toLowerCase().includes(search.toLowerCase());
        });
    }, [search]);

    return (
        <section
            className="px-4 sm:px-8 pt-28 pb-20 min-h-screen"
            style={{
                backgroundColor: theme.background,
                color: theme.text,
            }}
        >
            <div className="max-w-7xl mx-auto space-y-10">

                {/* TOP TAG */}
                <div className="flex justify-center">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                        style={{
                            background: `${theme.accents.a}08`,
                            border: `1px solid ${theme.accents.a}20`,
                            backdropFilter: "blur(6px)",
                        }}
                    >
                        <div className="pulse red" />
                        <span
                            className="text-xs font-medium tracking-wide uppercase"
                            style={{ color: theme.accents.a }}
                        >
                            Knowledge Hub
                        </span>
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-cabinet)" }}>
                        Our Latest Blogs
                    </h1>
                    <div
                        className="max-w-3xl mx-auto text-sm md:text-base"
                        style={{ color: theme.subtext }}
                    >
                        <AnimatedLine text="Insights, guides, and strategies to help you navigate the digital landscape." delay={0.15} />
                    </div>
                </div>

                {/* SEARCH */}
                <m.div
                    ref={searchRef}
                    initial={{ opacity: 0, y: 40 }}
                    animate={searchInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl mx-auto relative"
                >
                    <SearchIcon
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                        size={20}
                        style={{ color: theme.subtext }}
                    />
                    <input
                        type="text"
                        placeholder="Search blogs..."
                        className="w-full py-3 pl-12 pr-4 rounded-2xl outline-none transition-all"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                            color: theme.text,
                            border: `1px solid ${theme.text}20`,
                            backdropFilter: "blur(12px)",
                        }}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </m.div>

                {/* CARDS */}
                <m.div
                    ref={cardsRef}
                    initial={{ opacity: 0, y: 40 }}
                    animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filtered.map((blog, i) => (
                        <Link
                            key={i}
                            href={blog.href}
                            className="
                relative rounded-3xl p-7
                bg-black/40
                border border-white/10
                backdrop-blur-xl
                overflow-hidden
                transition-all duration-500
                hover:-translate-y-1
              "
                        >
                            {/* Left Accent Line */}
                            <div
                                className="absolute left-0 top-0 h-full w-[2px]"
                                style={{
                                    background: `linear-gradient(
                    to bottom,
                    transparent,
                    ${theme.accents.a},
                    transparent
                  )`,
                                }}
                            />

                            <div className="mb-6">
                                <blog.icon size={32} style={{ color: theme.accents.a }} />
                            </div>

                            <h3
                                className="text-lg font-semibold mb-3 tracking-tight"
                                style={{
                                    color: theme.text,
                                    fontFamily: "var(--font-general-sans)",
                                }}
                            >
                                {blog.name}
                            </h3>

                            <p
                                className="text-[15px] leading-relaxed mb-6"
                                style={{
                                    color: theme.subtext,
                                    fontFamily: "var(--font-inter)",
                                }}
                            >
                                {blog.description}
                            </p>

                            <span
                                className="text-sm font-medium opacity-70 hover:opacity-100 transition"
                                style={{ color: theme.text }}
                            >
                                Read Article →
                            </span>

                            <div
                                className="
                  absolute inset-0 opacity-0
                  hover:opacity-100
                  transition-opacity duration-500
                  pointer-events-none
                "
                                style={{
                                    background: `radial-gradient(
                    600px circle at top right,
                    ${theme.accents.a}12,
                    transparent 45%
                  )`,
                                }}
                            />
                        </Link>
                    ))}
                </m.div>
            </div>
        </section>
    );
}
