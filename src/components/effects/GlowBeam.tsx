"use client";

import { useState, useEffect } from "react";

export default function GlowBeam({ color = "red" }) {
  // Generate random animation delay
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    setDelay(-(Math.random() * 5)); // negative delay prevents jump
  }, []);

  return (
    <div
      className="glow-beam-border"
      style={
        {
          "--beam-color": color,
          animationDelay: `${delay}s`,
        } as any
      }
    />
  );
}
