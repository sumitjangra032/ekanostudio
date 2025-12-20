"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Gradient {
  from: string;
  via?: string;
  to: string;
}

interface AnimatedLineProps {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
  isHeading?: boolean;
  gradient?: Gradient;
}

export default function AnimatedLine({
  text,
  duration = 0.35,
  delay = 0,
  className = "",
  isHeading = false,
  gradient,
}: AnimatedLineProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  const words = text.split(" ");

  const gradientStyle = gradient
    ? {
        backgroundImage: `linear-gradient(270deg, ${gradient.from}, ${
          gradient.via ?? gradient.to
        }, ${gradient.to})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }
    : undefined;

  return (
    <div
      ref={ref}
      className={`block ${isHeading ? "font-[var(--font-cabinet)]" : ""} ${className}`}
      style={{
        color: gradient ? undefined : "#ffffff",
      }}
    >
      {words.map((word, i) => {
        const parts = word.split(/(\{[^}]+\}|\[[^\]]+\])/g);

        return (
          <motion.span
            key={i}
            className="inline-block mr-2 "
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration,
              delay: isInView ? delay + i * 0.08 : 0,
              ease: "easeOut",
            }}
          >
            {parts.map((part, index) => {
              const isTarget =
                (part.startsWith("{") && part.endsWith("}")) ||
                (part.startsWith("[") && part.endsWith("]"));

              const cleanText = isTarget
                ? part.slice(1, -1)
                : part;

              return (
                <span
                  key={index}
                  className="inline-block px-[0.045em]"
                  style={isTarget && gradient ? gradientStyle : undefined}
                >
                  {cleanText}
                </span>
              );
            })}
          </motion.span>
        );
      })}
    </div>
  );
}
