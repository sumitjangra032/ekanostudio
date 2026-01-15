"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface Gradient {
  from: string;
  via?: string;
  to: string;
}

interface AnimatedLineProps {
  text: string;
  duration?: number;
  delay?: number;
  className?: string; // Container class
  textSize?: string; // e.g. "text-4xl"
  textColor?: string; // e.g. "#ffffff" or "text-white"
  isHeading?: boolean;
  gradient?: Gradient;
  highlightStyle?: React.CSSProperties;
  highlightClassName?: string;
}

export default function AnimatedLine({
  text,
  duration = 0.35,
  delay = 0,
  className = "",
  isHeading = false,
  textSize = isHeading ? "" : "text-sm",
  textColor,
  gradient,
  highlightStyle,
  highlightClassName,
}: AnimatedLineProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  // Regex to match:
  // 1. [...] segments
  // 2. {...} segments
  // 3. Or sequence of non-whitespace characters (words)
  const regex = /(\[[^\]]+\]|\{[^}]+\}|\S+)/g;
  const words = text ? (text.match(regex) || []) : [];

  const gradientStyle = gradient
    ? {
      backgroundImage: `linear-gradient(270deg, ${gradient.from}, ${gradient.via ?? gradient.to
        }, ${gradient.to})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }
    : undefined;

  return (
    <div
      ref={ref}
      className={`block ${isHeading ? "font-[var(--font-cabinet)]" : ""} ${textSize ?? ""} ${className}`}
      style={{
        color: gradient ? undefined : (textColor ?? "#ffffff"),
      }}
    >
      {words.map((word, i) => {
        const isTarget =
          (word.startsWith("{") && word.endsWith("}")) ||
          (word.startsWith("[") && word.endsWith("]"));

        let cleanText = isTarget ? word.slice(1, -1) : word;
        let linkUrl: string | null = null;

        if (isTarget && cleanText.includes("|")) {
          const parts = cleanText.split("|");
          cleanText = parts[0];
          linkUrl = parts[1];
        }

        const content = (
          <motion.span
            key={i}
            className={`inline-block mr-2 ${isTarget ? highlightClassName : ""} px-[0.045em] ${linkUrl ? "hover:underline cursor-pointer" : ""
              }`}
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration,
              delay: isInView ? delay + i * 0.08 : 0,
              ease: "easeOut",
            }}
            style={{
              ...(isTarget && gradient ? gradientStyle : {}),
              ...(isTarget && highlightStyle ? highlightStyle : {}),
            }}
          >
            {cleanText}
          </motion.span>
        );

        if (linkUrl) {
          return (
            <Link key={i} href={linkUrl} className="inline-block">
              {content}
            </Link>
          );
        }

        return content;
      })}
    </div>
  );
}
