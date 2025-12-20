"use client";

import { motion } from "framer-motion";

export default function ScrollingTags() {
  const row1 = [
    "Secure Transactions",
    "Dedicated Support",
    "Automatic Adjustments",
    "Real-Time Reports",
  ];

  const row2 = [
    "Smart Spending",
    "Customizable Plans",
    "Instant Savings",
    "Flexible Payments",
  ];

  // helper to repeat items for smooth loop
  const repeat = (arr: string[]) => [...arr, ...arr, ...arr];

  const chip =
    "px-10 py-4 rounded-full bg-white text-[#333] font-medium shadow-sm whitespace-nowrap";

  return (
    <div className="relative w-full py-16 overflow-hidden">

      {/* FADE LEFT */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#E5EED7] to-transparent z-10"></div>

      {/* FADE RIGHT */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#E5EED7] to-transparent z-10"></div>

      {/* ROW 1 - moves left */}
      <motion.div
        className="flex gap-8 w-max mb-10"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{
          duration: 15, // medium speed
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {repeat(row1).map((tag, i) => (
          <div key={`r1-${i}`} className={chip}>
            {tag}
          </div>
        ))}
      </motion.div>

      {/* ROW 2 - moves right */}
      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: ["-33.33%", "0%"] }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {repeat(row2).map((tag, i) => (
          <div key={`r2-${i}`} className={chip}>
            {tag}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
