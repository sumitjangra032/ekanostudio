"use client";

interface ParallaxBackgroundProps {
  speed?: number;
  image: string;
  opacity?: number;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  className?: string;
  zIndex?: number;
  heightMultiplier?: number;
}

export default function ParallaxBackground({
  speed = 0.15,
  image,
  opacity = 1,
  backgroundSize = "contain",
  backgroundPosition = "center",
  backgroundRepeat = "no-repeat",
  zIndex = 0,
  heightMultiplier = 2,
}: ParallaxBackgroundProps) {
  return (
    <div
      className="absolute left-0 w-full pointer-events-none"
      style={{
        zIndex,
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
    </div>
  );
}
