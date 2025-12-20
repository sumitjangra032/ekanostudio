"use client";

import { motion } from "framer-motion";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "../../constants/theme";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  duration?: number;
  className?: string;
  textColor?: string;
  iconColor?: string;
}

export default function MarqueeScroller({
  items,
  direction = "left",
  duration = 15,
  className = "",
  textColor,
  iconColor,
}: MarqueeProps) {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  // Repeat items for seamless loop
  const list = [...items, ...items, ...items];

  const chip = {
    background: theme.cardBg,
    color: textColor || theme.subtext,
    border: `1px solid ${theme.text}15`,
  };

  const animate =
    direction === "left"
      ? { x: ["0%", "-33.33%"] }
      : { x: ["-33.33%", "0%"] };

  return (
    <div
      className="relative w-full overflow-hidden py-3"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      <motion.div
        className={`flex gap-8 w-max ${className}`}
        animate={animate}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {list.map((item, idx) => (
          <div
            key={idx}
            className="px-10 py-4 rounded-full font-semibold whitespace-nowrap"
            style={chip}
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
