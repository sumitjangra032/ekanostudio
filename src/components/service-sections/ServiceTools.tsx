"use client";
import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ToolboxIcon } from "../icons/LocalIcons";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import AnimatedLine from "../animated/AnimatedLine";

export default function ServiceTools({ data }: { data: any }) {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];

    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const yItems = useTransform(scrollYProgress, [0, 1], [0, -15]);

    return (
        <section
            id="tools"
            ref={sectionRef}
            className="py-20 px-6"
        >
            <div className="max-w-7xl mx-auto text-center">
                <m.div
                    className="text-center"
                    style={{ y: yText }}
                >
                    <div
                        className="flex justify-center mb-6"
                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--theme-accent-a)]/5 border border-[var(--theme-accent-a)]/20 backdrop-blur-[4px]"
                        >
                            <div className="pulse red" />
                            <span
                                className="text-xs font-medium tracking-wide uppercase text-[var(--theme-accent-a)]"
                            >
                                Tools
                            </span>
                        </div>
                    </div>

                    <h2
                        className="text-[32px] md:text-[42px] font-bold mb-10 text-[var(--theme-text)]"
                    >
                        <AnimatedLine
                            text={data.heading}
                            delay={0.1}
                            isHeading
                            gradient={{
                                from: "#fac175",
                                via: "#ff006a",
                                to: "#8b5cf6",
                            }}
                        />
                    </h2>
                </m.div>

                <m.div
                    className="flex flex-wrap justify-center gap-4"
                    style={{ y: yItems }}
                >
                    {data.items.map((item: any, i: number) => (
                        <div
                            key={i}
                            className="px-6 py-3 rounded-full border border-[var(--theme-text)]/20 text-[var(--theme-subtext)] text-sm font-medium"
                        >
                            {item}
                        </div>
                    ))}
                </m.div>
            </div>
        </section>
    );
}
