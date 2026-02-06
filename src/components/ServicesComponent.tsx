"use client";

import { useState, useMemo, useRef } from "react";
import { m, useInView } from "framer-motion";
import { SERVICES_CONTENT } from "@/constants/services";
import { ALL_SERVICES_CONTENT } from "@/constants/allServices";
import { useTheme } from "@/components/providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import Link from "next/link";
import AnimatedLine from "./animated/AnimatedLine";
import { SearchIcon } from "@/components/icons/LocalIcons";


export default function ServicesComponent() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const { description } = ALL_SERVICES_CONTENT;

  const searchRef = useRef<HTMLDivElement | null>(null);
  const searchInView = useInView(searchRef, { once: true, margin: "-10% 0px" });

  const tagsRef = useRef<HTMLDivElement | null>(null);
  const tagsInView = useInView(tagsRef, { once: true, margin: "-10% 0px" });

  const cardsRef = useRef<HTMLDivElement | null>(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-10% 0px" });

  const tags = useMemo(() => {
    const set = new Set<string>();
    SERVICES_CONTENT.categories.forEach((cat) => set.add(cat.name));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    return SERVICES_CONTENT.categories.flatMap((cat) =>
      cat.items
        .filter((item) => {
          const matchesSearch = item.title
            .toLowerCase()
            .includes(search.toLowerCase());
          const matchesTag = activeTag === "All" || activeTag === cat.name;
          return matchesSearch && matchesTag;
        })
        .map((item) => ({
          ...item,
          category: cat.name,
          categorySlug: cat.slug,
        }))
    );
  }, [search, activeTag]);

  return (
    <section
      className="px-4 sm:px-8 pt-28 pb-20 bg-[var(--theme-background)] text-[var(--theme-text)]"
    >
      <div className="max-w-7xl mx-auto space-y-10">

        {/* TOP TAG (CENTERED, NOT REPEATED) */}
        <div className="flex justify-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--theme-accent-a)]/5 border border-[var(--theme-accent-a)]/15 backdrop-blur-[6px]"
          >
            <div className="pulse red" />
            <span
              className="text-xs font-medium tracking-wide uppercase text-[var(--theme-accent-a)]"
            >
              All Services
            </span>
          </div>
        </div>

        <div className="text-center">
          <div
            className="max-w-3xl mx-auto text-sm md:text-base text-[var(--theme-subtext)]"
          >
            <AnimatedLine text={description} delay={0.15} />
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
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-[var(--theme-subtext)]"
            size={20}
          />
          <input
            type="text"
            placeholder="Search services..."
            className="w-full py-3 pl-12 pr-4 rounded-2xl outline-none transition-all bg-gradient-to-b from-white/5 to-white/[0.02] text-[var(--theme-text)] border border-[var(--theme-text)]/20 backdrop-blur-[12px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </m.div>

        {/* FILTER TAGS */}
        <m.div
          ref={tagsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={tagsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {tags.map((tag) => {
            const active = tag === activeTag;
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-5 py-1.5 rounded-full text-xs font-medium transition-all border border-[var(--theme-text)]/20 ${active
                  ? "bg-gradient-to-r from-[var(--theme-accent-a)] to-[var(--theme-accent-b)] text-black"
                  : "bg-white/5 text-[var(--theme-text)]"
                  }`}
              >
                {tag}
              </button>
            );
          })}
        </m.div>

        {/* SERVICE CARDS */}
        <m.div
          ref={cardsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((service, i) => (
            <Link
              key={i}
              href={`/services/${service.categorySlug}/${service.slug}`}
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


              <div
                className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[var(--theme-accent-a)] to-transparent"
              />

              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-[var(--theme-accent-a)]/10 text-[var(--theme-accent-a)] border border-[var(--theme-accent-a)]/20"
              >
                {service.category}
              </span>

              <h3
                className="text-lg font-semibold mb-3 tracking-tight text-[var(--theme-text)] font-sans"
              >
                {service.title}
              </h3>

              <p
                className="text-[15px] leading-relaxed mb-6 text-[var(--theme-subtext)] font-sans"
              >
                {service.desc}
              </p>

              <span
                className="text-sm font-medium opacity-70 hover:opacity-100 transition text-[var(--theme-text)]"
              >
                View details →
              </span>

              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(600px_circle_at_top_right,var(--theme-accent-a)_0.07,transparent_45%)]"
              />
            </Link>
          ))}
        </m.div>
      </div>
    </section>
  );
}
