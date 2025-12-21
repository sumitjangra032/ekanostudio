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
}

export default function MarqueeScroller({
  items,
  direction = "left",
  duration = 15,
  className = "",
  textColor,
}: MarqueeProps) {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  // Repeat items for seamless loop
  const list = [...items, ...items, ...items];

  const animate =
    direction === "left"
      ? { x: ["0%", "-33.33%"] }
      : { x: ["-33.33%", "0%"] };

  return (
    <div
      className="relative w-full overflow-hidden py-2 bg-black"
    // style={{
    //   WebkitMaskImage:
    //     "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
    //   maskImage:
    //     "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
    // }}
    >
      <motion.div
        className={`flex gap-10 w-max ${className}`}
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
            className="
              group
              flex items-center gap-3
              px-10 py-4
              rounded-full
              font-medium
              whitespace-nowrap
              backdrop-blur-xl
              transition-all duration-300
              border border-white/10
            "
            style={{
              background: "#000000/20",
              color: textColor || theme.subtext,
            }}
          >

            {/* Text */}
            <span>{item}</span>


          </div>
        ))}
      </motion.div>
    </div>
  );
}
