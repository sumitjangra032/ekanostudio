"use client";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import { TERMS_AND_CONDITIONS_CONTENT } from "@/constants/termsAndConditions";
import { motion } from "framer-motion";
import AnimatedLine from "../animated/AnimatedLine";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import GlowBeam from "../effects/GlowBeam";

export default function TermsAndConditionsContent() {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];

    return (
        <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
            style={{ backgroundColor: theme.background }}
        >
            {/* Background elements similar to ServiceForm */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, ${theme.primary}08 0%, transparent 50%)`,
                }}
            />

            <div className="max-w-4xl mx-auto space-y-12 relative z-10">

                {/* Header */}
                <div className="space-y-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block"
                    >
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold font-cabinet mb-4 mt-10"
                            style={{ color: theme.text }}
                        >
                            <AnimatedLine text={TERMS_AND_CONDITIONS_CONTENT.title} />
                        </h1>
                        <p className="text-sm font-medium uppercase tracking-widest opacity-60" style={{ color: theme.subtext }}>
                            Last Updated: {TERMS_AND_CONDITIONS_CONTENT.lastUpdated}
                        </p>
                    </motion.div>
                </div>

                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <Card style={{
                        backgroundColor: theme.cardBg,
                        border: `1px solid ${theme.text}10`,
                        backdropFilter: "blur(12px)"
                    }}>
                        <CardContent className="p-8 md:p-10 text-base md:text-lg leading-relaxed whitespace-pre-wrap font-medium" style={{ color: theme.subtext }}>
                            {TERMS_AND_CONDITIONS_CONTENT.introduction}
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Sections */}
                <div className="space-y-8">
                    {TERMS_AND_CONDITIONS_CONTENT.sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div className="relative group rounded-2xl overflow-hidden">
                                <Card className="h-full transition-all duration-300 group-hover:translate-x-1" style={{
                                    backgroundColor: "transparent",
                                    border: "none",
                                }}>
                                    <CardContent className="p-0">
                                        <h2 className="text-2xl font-bold mb-4 font-cabinet" style={{ color: theme.text }}>
                                            {section.title}
                                        </h2>
                                        <div
                                            className="text-base leading-relaxed whitespace-pre-wrap opacity-90 pl-4 border-l-2"
                                            style={{
                                                color: theme.subtext,
                                                borderColor: theme.accents.a + "40"
                                            }}
                                        >
                                            {section.content}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer/Contact CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pt-12 text-center"
                >
                    <p className="text-sm opacity-50" style={{ color: theme.subtext }}>
                        © {new Date().getFullYear()} ekanostudio. All rights reserved.
                    </p>
                </motion.div>

            </div>
        </div>
    );
}
