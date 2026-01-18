interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  duration?: number;
  className?: string;
  textColor?: string;
}

export default function MarqueeScroller({
  items,
  direction = "left",
  duration = 15,
  className = "",
  textColor,
}: MarqueeProps) {
  // Repeat items for seamless loop
  const list = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-2 bg-black">
      <div
        className={`flex gap-10 w-max ${className}`}
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
          display: "flex",
          willChange: "transform",
        }}
      >
        {list.map((item, idx) => (
          <div
            key={idx}
            className="
              group
              flex items-center gap-3
              px-10 py-4
              rounded-full
              font-medium
              whitespace-nowrap
              backdrop-blur-xl
              transition-all duration-300
              border border-white/10
            "
            style={{
              background: "rgba(0, 0, 0, 0.2)",
              color: textColor || "var(--theme-subtext)",
            }}
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

