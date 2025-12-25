"use client";

import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

export const NAKULA_EASE = [0.6, 0.01, -0.05, 0.95] as const;

export default function ServiceRow({
  item,
  index,
  theme,
  progress,
  activeIndex,
  setActiveIndex,
}: {
  item: any;
  index: number;
  theme: any;
  progress: any;
  activeIndex: number | null;
  setActiveIndex: (v: number | null) => void;
}) {
  const isDesktop =
    typeof window !== "undefined" && window.innerWidth >= 768;

  const autoHover = useTransform(
    progress,
    [index * 0.18, index * 0.18 + 0.12],
    [0, 1]
  );

  useMotionValueEvent(autoHover, "change", (v) => {
    if (isDesktop && v > 0.6) {
      setActiveIndex(index);
    }
  });

  const isActive = activeIndex === index;

  return (
    <div
      className="relative"
      onMouseEnter={() => isDesktop && setActiveIndex(index)}
    >
      <div
        onClick={() =>
          !isDesktop && setActiveIndex(isActive ? null : index)
        }
        className="relative flex items-center justify-between h-[120px] md:h-[160px] border-t cursor-pointer"
        style={{ borderColor: `${theme.text}20` }}
      >
        <span
          className="ml-4 md:ml-6 text-xl md:text-2xl font-medium"
          style={{ color: theme.subtext }}
        >
          {String(index + 1).padStart(2, "0")}.
        </span>

        <motion.h3
          className="mr-10 md:mr-12 font-semibold text-right"
          animate={{ x: isActive && isDesktop ? -18 : 0 }}
          transition={{ duration: 0.36, ease: NAKULA_EASE }}
          style={{
            fontSize: "clamp(22px, 3vw, 42px)",
            color: theme.text,
            letterSpacing: "-0.01em",
          }}
        >
          {item.title}
        </motion.h3>

        <div className="absolute right-4 md:right-6">
          <motion.div
            animate={{ rotate: isActive ? 45 : 0 }}
            transition={{ duration: 0.4, ease: NAKULA_EASE }}
            className="relative w-4 h-4 md:w-5 md:h-5"
          >
            <span
              className="absolute inset-0 m-auto h-[2px] w-full"
              style={{ backgroundColor: theme.primary }}
            />
            <span
              className="absolute inset-0 m-auto w-[2px] h-full"
              style={{ backgroundColor: theme.primary }}
            />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{
              y: { duration: 0.55, ease: NAKULA_EASE },
              opacity: { duration: 0.3, delay: 0.05 },
            }}
            className={`${
              isDesktop
                ? "absolute left-0 right-0 top-full z-20"
                : "relative"
            }`}
          >
            <div
              className="mx-auto max-w-6xl mt-6 md:mt-10 border"
              style={{
                backgroundColor: theme.cardBg,
                borderColor: `${theme.text}15`,
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 md:p-12">
                  <p
                    className="text-base md:text-lg mb-6"
                    style={{ color: theme.subtext }}
                  >
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {item.tags.map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs md:text-sm border rounded-full"
                        style={{
                          borderColor: `${theme.text}20`,
                          color: theme.subtext,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ scale: 0.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, ease: NAKULA_EASE }}
                  className="relative h-[220px] md:h-[360px]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
