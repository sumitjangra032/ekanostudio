"use client";

import { useState, useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SERVICES_CONTENT } from "@/constants/services";
import { useTheme } from "@/components/providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import AnimatedLine from "./animated/AnimatedLine";
import { ALL_SERVICES_CONTENT } from "@/constants/allServices";
import { IoSearchOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

export default function ServicesComponent() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const { title, description } = ALL_SERVICES_CONTENT;

  // Refs for animations
  const searchRef = useRef(null);
  const searchInView = useInView(searchRef, { once: true, margin: "-10% 0px" });

  const tagsRef = useRef(null);
  const tagsInView = useInView(tagsRef, { once: true, margin: "-10% 0px" });

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-10% 0px" });

  // Extract unique tags (Marketing, Web, Video, etc.)
  const tags = useMemo(() => {
    const set = new Set<string>();
    SERVICES_CONTENT.categories.forEach((cat) => set.add(cat.name));
    return ["All", ...Array.from(set)];
  }, [SERVICES_CONTENT]);

  // Filter services
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
        .map((item) => ({ ...item, category: cat.name, categorySlug: cat.slug }))
    );
  }, [search, activeTag]);

  return (
    <section
      className="  px-4 sm:px-8 pt-20 pb-10"
      style={{ color: theme.text, backgroundColor: theme.background }}
    >
      <div className="max-w-7xl mx-auto space-y-6 r">
        {/* HEADER */}
        <h1
          className="text-5xl font-bold leading-tight text-center mt-10"
          style={{ color: theme.text }}
        >
          <AnimatedLine text={title} delay={0.1} />
        </h1>

        <h1
          className="text-md font-medium leading-tight text-center mt-5"
          style={{ color: theme.subtext }}
        >
          <AnimatedLine text={description} delay={0.1} />
        </h1>

        {/* SEARCH BAR */}
        <motion.div
          ref={searchRef}
          initial={{ opacity: 0, y: 60 }}
          animate={searchInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl mx-auto mb-8 relative"
        >
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2"
            style={{ color: theme.subtext }}
            size={24}
          />
          <input
            type="text"
            placeholder="Search services..."
            className="w-full py-3 pl-12 pr-4 rounded-xl outline-none"
            style={{
              background: theme.cardBg,
              color: theme.text,
              border: `1px solid ${theme.text}20`,
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </motion.div>

        {/* FILTER TAGS */}
        <motion.div
          ref={tagsRef}
          initial={{ opacity: 0, y: 60 }}
          animate={tagsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {tags.map((tag, i) => {
            const active = tag === activeTag;
            return (
              <button
                key={i}
                onClick={() => setActiveTag(tag)}
                className="px-1 py-1 rounded-full text-sm font-light transition-all"
                style={{
                  background: active ? theme.primary : theme.cardBg,
                  color: active ? theme.background : theme.text,
                  border: `1px solid ${theme.text}30`,
                  height: "30px",
                  paddingInline: "18px",
                }}
              >
                {tag}
              </button>
            );
          })}
        </motion.div>


        {/* ALL SERVICE CARDS */}
        <motion.div
          ref={cardsRef}
          initial={{ opacity: 0, y: 60 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((service, i) => {
            const Icon = service.icon;
            return (
              <Link
                key={i}
                href={`/services/${service.categorySlug}/${service.slug}`}
                className="p-6 rounded-2xl group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: theme.cardBg,
                  border: `1px solid ${theme.text}15`,
                  borderColor: theme.text + "30",
                }}
              >
                {/* Tags */}
                <div className="flex gap-2 mb-3">
                  <span
                    className="px-3 py-1 text-xs rounded-full"
                    style={{
                      background: theme.primary + "20",
                      color: theme.primary,
                    }}
                  >
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

                {/* Description */}
                <p className="text-sm mb-4" style={{ color: theme.subtext }}>
                  {service.desc}
                </p>

                {/* View details */}
                <span
                  className="
                    text-sm font-medium 
                    transition-opacity duration-200 
                    opacity-80 group-hover:opacity-100
                  "
                  style={{ color: theme.text }}
                >
                  View details →
                </span>
              </Link>
            );
          })}

          {filtered.length === 0 && (
            <div className="col-span-full flex justify-center">
              <div
                className="rounded-xl border p-6 text-center w-full max-w-full"
                style={{
                  background: theme.cardBg,
                  border: `1px solid ${theme.text}15`,
                }}
              >
                <p className="text-sm mb-1" style={{ color: theme.subtext }}>
                  No services found. Try a different keyword or filter.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
