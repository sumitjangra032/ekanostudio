"use client";

import { useEffect, useState } from "react";

type Variant = "left" | "center" | "right";

export default function RandomGradientGlow({
  colorA = "#ff6b1d",
  colorB = "#0071ff",
  blur = 1,
  opacity = 0.4,
  variant = "center",
}: {
  colorA?: string;
  colorB?: string;
  blur?: number;
  opacity?: number;
  variant?: Variant;
}) {
  // ⛔ NO RANDOM ON FIRST RENDER
  const [shift, setShift] = useState<number | null>(null);

  // ✅ RANDOMNESS ONLY AFTER MOUNT
  useEffect(() => {
    setShift(Math.random() * 40 - 20);
  }, []);

  // ⛔ SSR-safe fallback (same on server + client)
  if (shift === null) {
    return (
      <div
        className="absolute inset-0 pointer-events-none rounded-3xl"
        style={{
          opacity: 0,
        }}
      />
    );
  }

  const gradients = {
    center: `
      radial-gradient(80% 60% at calc(0% + ${shift}px) 100%, ${colorA} 0%, transparent 70%),
      radial-gradient(80% 60% at calc(100% + ${shift}px) 100%, ${colorB} 0%, transparent 70%)
    `,
    left: `
      radial-gradient(80% 60% at calc(-20% + ${shift}px) 100%, ${colorA} 0%, transparent 70%),
      radial-gradient(80% 60% at calc(60% + ${shift}px) 100%, ${colorB} 0%, transparent 70%)
    `,
    right: `
      radial-gradient(80% 60% at calc(40% + ${shift}px) 100%, ${colorA} 0%, transparent 70%),
      radial-gradient(80% 60% at calc(120% + ${shift}px) 100%, ${colorB} 0%, transparent 70%)
    `,
  };

  return (
    <div
      className="absolute inset-0 pointer-events-none rounded-3xl"
      style={{
        background: gradients[variant],
        filter: `blur(${blur}px)`,
        opacity,
      }}
    />
  );
}
