"use client";

import React from "react";

export default function HeroBackground() {
    return (
        <div
            className="absolute inset-0 flex justify-center pointer-events-none"
            aria-hidden="true"
        >
            <div
                className="h-full w-full max-w-[1400px]"
                style={{
                    backgroundImage: `
            radial-gradient(circle, rgba(255,165,0,0.45) 1px, transparent 1px),
            radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px),
            radial-gradient(circle at 50% 40%, rgba(255,140,0,0.20), transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(0,0,0,0.85), rgba(0,0,0,1))
          `,
                    backgroundSize: `
            9px 9px,
            20px 20px,
            100% 100%,
            100% 100%
          `,
                    backgroundPosition: `
            0 0,
            7px 7px,
            center,
            center
          `,
                    maskImage: `
            linear-gradient(
              to right,
              transparent 0%,
              black 18%,
              black 82%,
              transparent 100%
            ),
            linear-gradient(
              to bottom,
              transparent 0%,
              black 12%,
              black 78%,
              transparent 100%
            )
          `,
                    WebkitMaskImage: `
            linear-gradient(
              to right,
              transparent 0%,
              black 18%,
              black 82%,
              transparent 100%
            ),
            linear-gradient(
              to bottom,
              transparent 0%,
              black 12%,
              black 78%,
              transparent 100%
            )
          `,
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                }}
            />
        </div>
    );
}
