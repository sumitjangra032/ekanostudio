"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxBackgroundProps {
  speed?: number;
  image: string;
  opacity?: number;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  className?: string;
  zIndex?: number;
  heightMultiplier?: number; // NEW
}

export default function ParallaxBackground({
  speed = 0.15,
  image,
  opacity = 1,
  backgroundSize = "contain",
  backgroundPosition = "center",
  backgroundRepeat = "no-repeat",
  zIndex = 0,
  heightMultiplier = 2, // 2x viewport height
}: ParallaxBackgroundProps) {
  const { scrollY } = useScroll();

  const y = useTransform(
    scrollY,
    [0, 1200],
    [0, -120 * speed]
  );

  return (
    <motion.div
      className="absolute left-0 w-full pointer-events-none will-change-transform"
      style={{
        y, zIndex,
        top: "-50vh",
        height: `${heightMultiplier * 100}vh`,
      }}
    >
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize,
          backgroundPosition,
          backgroundRepeat,
          opacity,
        }}
      />
    </motion.div>
  );
}
