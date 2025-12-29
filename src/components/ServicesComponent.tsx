"use client";

import { useState, useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SERVICES_CONTENT } from "@/constants/services";
import { ALL_SERVICES_CONTENT } from "@/constants/allServices";
import { useTheme } from "@/components/providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import Link from "next/link";
import AnimatedLine from "./animated/AnimatedLine";
import { FiSearch } from "react-icons/fi";
import GlowBeam from "@/components/effects/GlowBeam";

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
      className="px-4 sm:px-8 pt-28 pb-20"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      <div className="max-w-7xl mx-auto space-y-10">

        {/* TOP TAG (CENTERED, NOT REPEATED) */}
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
              All Services
            </span>
          </div>
        </div>

        {/* DESCRIPTION ONLY (NO REPEATED TITLE) */}
        <div className="text-center">
          <p
            className="max-w-3xl mx-auto text-sm md:text-base"
            style={{ color: theme.subtext }}
          >
            <AnimatedLine text={description} delay={0.15} />
          </p>
        </div>

        {/* SEARCH */}
        <motion.div
          ref={searchRef}
          initial={{ opacity: 0, y: 40 }}
          animate={searchInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto relative"
        >
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2"
            size={20}
            style={{ color: theme.subtext }}
          />
          <input
            type="text"
            placeholder="Search services..."
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
        </motion.div>

        {/* FILTER TAGS */}
        <motion.div
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
                className="px-5 py-1.5 rounded-full text-xs font-medium transition-all"
                style={{
                  background: active
                    ? `linear-gradient(90deg, ${theme.accents.a}, ${theme.accents.b})`
                    : "rgba(255,255,255,0.04)",
                  color: active ? "#000" : theme.text,
                  border: `1px solid ${theme.text}20`,
                }}
              >
                {tag}
              </button>
            );
          })}
        </motion.div>

        {/* SERVICE CARDS */}
        <motion.div
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
              <GlowBeam color={theme.accents.a} />

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

              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{
                  background: `${theme.accents.a}14`,
                  color: theme.accents.a,
                  border: `1px solid ${theme.accents.a}30`,
                }}
              >
                {service.category}
              </span>

              <h3
                className="text-lg font-semibold mb-3 tracking-tight"
                style={{
                  color: theme.text,
                  fontFamily: "var(--font-general-sans)",
                }}
              >
                {service.title}
              </h3>

              <p
                className="text-[15px] leading-relaxed mb-6"
                style={{
                  color: theme.subtext,
                  fontFamily: "var(--font-inter)",
                }}
              >
                {service.desc}
              </p>

              <span
                className="text-sm font-medium opacity-70 hover:opacity-100 transition"
                style={{ color: theme.text }}
              >
                View details →
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
        </motion.div>
      </div>
    </section>
  );
}
