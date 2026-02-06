"use client";

import { m } from "framer-motion";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import Image from "next/image";

import { Star } from "lucide-react";
import RandomGradientGlow from "../effects/RandomGradientGlow";

interface ReviewCardScrollerProps {
  reviews: any[];
  direction?: "left" | "right";
  duration?: number;
  className?: string;
}

export default function ReviewCardScroller({
  reviews,
  direction = "left",
  duration = 25,
  className = "",
}: ReviewCardScrollerProps) {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  const list = [...reviews, ...reviews, ...reviews];

  const animate =
    direction === "left"
      ? { x: ["0%", "-33.33%"] }
      : { x: ["-33.33%", "0%"] };

  return (
    <div
      className="relative w-full overflow-hidden py-8"
    >
      <div
        className="absolute top-0 left-0 h-full w-[10%] z-20 pointer-events-none bg-gradient-to-r from-[var(--theme-background)] to-transparent"
      />

      <div
        className="absolute top-0 right-0 h-full w-[10%] z-20 pointer-events-none bg-gradient-to-l from-[var(--theme-background)] to-transparent"
      />

      <m.div
        className={`flex gap-8 w-max ${className}`}
        animate={animate}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {list.map((review, idx) => (
          <div key={idx} className="w-[380px] flex-shrink-0">
            {/* The ReviewCard itself will now have the working backdrop-filter */}
            <ReviewCard {...review} />
          </div>
        ))}
      </m.div>
    </div>
  );
}


function ReviewCard({ text, name, role, img, stars }: any) {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  return (
    <div
      className="relative p-8 rounded-3xl h-full flex flex-col bg-black/40 border border-[var(--theme-text)]/10 backdrop-blur-[14px]"
    >
      {/* ... (rest of ReviewCard content) ... */}

      <RandomGradientGlow colorA={theme.accents.a} colorB={theme.accents.b} />

      {stars && (
        <div className="flex gap-1 mb-5">
          {Array.from({ length: stars }).map((_, i) => (
            <Star
              key={i}
              size={20}
              className="fill-[var(--theme-accent-a)] stroke-[var(--theme-accent-a)]"
            />
          ))}
        </div>
      )}

      {/* QUOTE */}
      <p
        className="leading-relaxed text-[17px] mb-10 flex-grow text-[var(--theme-text)]"
      >
        {text}
      </p>

      {/* BOTTOM USER SECTION */}
      <div className="flex items-center gap-4 mt-auto pt-4">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-xl overflow-hidden">
          <Image
            src={img}
            width={56}
            height={56}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name + Role */}
        <div className="flex flex-col">
          <span
            className="text-[17px] font-semibold text-[var(--theme-text)]"
          >
            {name}
          </span>

          <span
            className="text-sm text-[var(--theme-subtext)]"
          >
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}