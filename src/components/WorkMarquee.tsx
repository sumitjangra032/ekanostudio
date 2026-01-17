import Image from "next/image";

type MarqueeItem = {
  src: string;
  alt?: string;
};

type WorkMarqueeProps = {
  items: MarqueeItem[];
  speed?: number;
  reverse?: boolean;
  mask?: "soft" | "medium";
};

export default function WorkMarquee({
  items,
  speed = 40,
  reverse = false,
  mask = "medium",
}: WorkMarqueeProps) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage:
          mask === "soft"
            ? "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)"
            : "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
        WebkitMaskImage:
          mask === "soft"
            ? "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)"
            : "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
      }}
    >
      <ul
        className="flex gap-6 w-max"
        style={{
          animation: `work-marquee-${reverse ? 'reverse' : 'normal'} ${speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <li key={index} className="flex-shrink-0">
            <div className="relative rounded-xl overflow-hidden border border-white/10 w-[300px] md:w-[600px] aspect-[6/4]">
              <Image
                src={item.src}
                alt={item.alt || ""}
                fill
                className="h-full w-full object-cover"
                draggable={false}
                sizes="(max-width: 768px) 300px, 600px"
              />
            </div>
          </li>
        ))}
      </ul>
      <style>{`
        @keyframes work-marquee-normal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes work-marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

