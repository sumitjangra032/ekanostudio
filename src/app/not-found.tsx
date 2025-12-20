"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import AnimatedRotateButton from "@/components/animated/AnimatedRotateButton";
import { motion } from "framer-motion";

export default function NotFound() {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];

    return (
        <div
            className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden"
            style={{ backgroundColor: theme.background }}
        >
            {/* Background Ambience */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 pointer-events-none"
                style={{ background: theme.accents.a }}
            />

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 0.05, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-bold leading-none tracking-tighter select-none pointer-events-none"
                style={{ color: theme.text }}
            >
                404
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-10"
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: theme.text }}>
                    Page Not Found
                </h2>

                <p className="text-lg md:text-xl max-w-md mx-auto mb-10" style={{ color: theme.subtext }}>
                    The page you are looking for doesn't exist or has been moved.
                </p>

                <div className="flex justify-center">
                    <AnimatedRotateButton
                        text="Go back Home"
                        href="/"
                        color={theme.buttonBg}
                        accent={theme.accents}
                    />
                </div>
            </motion.div>
        </div>
    );
}
