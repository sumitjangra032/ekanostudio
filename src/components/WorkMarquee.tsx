"use client";

import { motion } from "framer-motion";

type MarqueeItem = {
  src: string;
  alt?: string;
};

type WorkMarqueeProps = {
  items: MarqueeItem[];
  speed?: number;
  reverse?: boolean;
  mask?: "soft" | "medium";
};

export default function WorkMarquee({
  items,
  speed = 40,
  reverse = false,
  mask = "medium",
}: WorkMarqueeProps) {
  return (
    <div
      className="relative w-full overflow-hidden "
      style={{
        maskImage:
          mask === "soft"
            ? "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)"
            : "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
      }}
    >
      <motion.ul
        className="flex gap-6 w-max "
        initial={{ x: reverse ? "-50%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        style={{ willChange: "transform" }}
      >
        {[...items, ...items].map((item, index) => (
          <li key={index} className="flex-shrink-0">
            <div className="relative rounded-xl overflow-hidden border border-white/10">
              <img
                src={item.src}
                alt={item.alt || ""}
                className="h-[400px] md:h-[400px] w-full object-cover"
                draggable={false}
              />
            </div>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
