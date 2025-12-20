"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import AnimatedLine from "../animated/AnimatedLine";
import { Check } from "lucide-react";
import { FaUserTie } from "react-icons/fa";

export default function ServiceWhoItsFor({ data }: { data: any }) {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];

    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const yCards = useTransform(scrollYProgress, [0, 1], [0, -15]);

    return (
        <section
            id="whoItsFor"
            ref={sectionRef}
            className="py-20 px-6"  
        >
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="flex justify-center items-center gap-2 font-semibold uppercase mb-4"
                    style={{ y: yText, color: theme.primary }}
                >
                    <FaUserTie size={16} />
                    Who It's For
                </motion.div>

                <motion.h2
                    className="text-4xl font-bold text-center mb-10"
                    style={{ y: yText, color: theme.text }}
                >
                    <AnimatedLine text={data.heading} delay={0.1} isHeading={true} />
                </motion.h2>

                <motion.div
                    className="grid md:grid-cols-2 gap-6"
                    style={{ y: yCards }}
                >
                    {data.items.map((item: string, i: number) => (
                        <motion.div
                            key={i}
                            className="flex items-start gap-4 p-4 rounded-xl border hover:scale-[1.02] transition-transform duration-300"
                            style={{
                                borderColor: `${theme.text}10`,
                                background: theme.cardBg
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <div
                                className="p-2 rounded-full mt-1"
                                style={{ background: `${theme.primary}15` }}
                            >
                                <Check size={16} style={{ color: theme.primary }} />
                            </div>

                            <div
                                className="text-lg leading-relaxed"
                                style={{ color: theme.text }}
                            >
                                <AnimatedLine text={item} delay={0.1} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
