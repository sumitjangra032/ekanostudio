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
      className={`relative w-full overflow-hidden ${mask === "soft"
          ? "[mask-image:linear-gradient(to_right,transparent_0%,black_12.5%,black_87.5%,transparent_100%)] [WebkitMaskImage:linear-gradient(to_right,transparent_0%,black_12.5%,black_87.5%,transparent_100%)]"
          : "[mask-image:linear-gradient(to_right,transparent_0%,black_25%,black_75%,transparent_100%)] [WebkitMaskImage:linear-gradient(to_right,transparent_0%,black_25%,black_75%,transparent_100%)]"
        }`}
    >
      <ul
        className={`flex gap-6 w-max will-change-transform ${reverse
            ? `animate-[work-marquee-reverse_${speed}s_linear_infinite]`
            : `animate-[work-marquee-normal_${speed}s_linear_infinite]`
          }`}
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

