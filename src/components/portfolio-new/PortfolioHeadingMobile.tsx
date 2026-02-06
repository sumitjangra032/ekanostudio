import { m } from "framer-motion";

export default function PortfolioHeadingMobile() {
  const text = "PORTFOLIO";

  return (
    <div className="portfolio-heading-mobile flex justify-center items-center py-4">
      <h1 className="portfolio-text-mobile text-4xl font-bold tracking-tighter flex overflow-hidden">
        {text.split("").map((char, i) => (
          <m.span
            key={i}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.34, 1.56, 0.64, 1],
              delay: i * 0.03 + 0.1,
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </m.span>
        ))}
      </h1>
    </div>
  );
}
