"use client";

import React from "react";

export default function HeroBackground() {
  return (
    <div
      className="absolute inset-0 flex justify-center pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full w-full max-w-[1400px] hero-background-patterns"
      />
    </div>
  );
}
