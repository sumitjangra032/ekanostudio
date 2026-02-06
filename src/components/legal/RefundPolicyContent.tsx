"use client";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import { REFUND_POLICY_CONTENT } from "@/constants/refundPolicy";
import { m } from "framer-motion";
import AnimatedLine from "../animated/AnimatedLine";
import { Card, CardContent } from "@/components/ui/card";

export default function RefundPolicyContent() {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];

    return (
        <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[var(--theme-background)]"
        >
            {/* Background elements similar to ServiceForm */}
            <div
                className="fixed inset-0 pointer-events-none [background-image:radial-gradient(circle_at_50%_50%,var(--theme-primary-08)_0%,transparent_50%)]"
            />

            <div className="max-w-4xl mx-auto space-y-12 relative z-10">

                {/* Header */}
                <div className="space-y-6 text-center">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block"
                    >
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold font-cabinet mb-4 mt-10 text-[var(--theme-text)]"
                        >
                            <AnimatedLine text={REFUND_POLICY_CONTENT.title} />
                        </h1>
                        <p className="text-sm font-medium uppercase tracking-widest opacity-60 text-[var(--theme-subtext)]">
                            Last Updated: {REFUND_POLICY_CONTENT.lastUpdated}
                        </p>
                    </m.div>
                </div>

                {/* Introduction */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <Card className="bg-[var(--theme-card-bg)] border-[var(--theme-text)]/10 backdrop-blur-[12px]">
                        <CardContent className="p-8 md:p-10 text-base md:text-lg leading-relaxed whitespace-pre-wrap font-medium text-[var(--theme-subtext)]">
                            {REFUND_POLICY_CONTENT.introduction}
                        </CardContent>
                    </Card>
                </m.div>

                {/* Sections */}
                <div className="space-y-8">
                    {REFUND_POLICY_CONTENT.sections.map((section, index) => (
                        <m.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div className="relative group rounded-2xl overflow-hidden">
                                <Card className="h-full transition-all duration-300 group-hover:translate-x-1 bg-transparent border-none">
                                    <CardContent className="p-0">
                                        <h2 className="text-2xl font-bold mb-4 font-cabinet text-[var(--theme-text)]">
                                            {section.title}
                                        </h2>
                                        <div
                                            className="text-base leading-relaxed whitespace-pre-wrap opacity-90 pl-4 border-l-2 text-[var(--theme-subtext)] border-[var(--theme-accent-a)]/25"
                                        >
                                            {section.content}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </m.div>
                    ))}
                </div>

                {/* Footer/Contact CTA */}
                <m.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pt-12 text-center"
                >
                    <p className="text-sm opacity-50 text-[var(--theme-subtext)]">
                        © {new Date().getFullYear()} Ekanostudio. All rights reserved.
                    </p>
                </m.div>

            </div>
        </div>
    );
}
