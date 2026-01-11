"use client";
import React from "react";
import { StaticImageData } from "next/image";

interface CarouselProps {
    images: (string | StaticImageData)[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
    if (!images || images.length === 0) return null;

    // EXACT 2x duplication
    const duplicatedImages = [...images, ...images];

    return (
        <div className="w-full overflow-hidden relative group">
            {/* Edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#0E0E0E] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#0E0E0E] to-transparent pointer-events-none" />

            {/* Track */}
            <div
                className="flex w-max gap-12 group-hover:[animation-play-state:paused]"
                style={{
                    animation: "marquee 60s linear infinite",
                }}
            >
                {duplicatedImages.map((img, index) => {
                    const src = typeof img === "string" ? img : img.src;

                    return (
                        <div key={index} className="shrink-0 flex items-center">
                            <img
                                src={src}
                                alt=""
                                className="max-h-[420px] w-auto object-contain rounded-lg"
                            />
                        </div>
                    );
                })}
            </div>

            {/* GLOBAL keyframes */}
            <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </div>
    );
};
