"use client";

import { m } from "framer-motion";

export default function AutoScrollRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden w-full whitespace-nowrap">
      <m.div
        className="flex gap-6"
        animate={{
          x: reverse ? ["0%", "-50%"] : ["0%", "50%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 35,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="
              px-8 py-4 rounded-full
              bg-[#F7F7F2]
              text-[#222]
              font-medium
              text-lg
              shadow-sm
            "
          >
            {item}
          </div>
        ))}
      </m.div>
    </div>
  );
}
