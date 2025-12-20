"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedNumberProps {
    value: number;
    duration?: number;
    delay?: number;
    className?: string;
    format?: (value: number) => string;
    startWhenInView?: boolean;
}

export function AnimatedNumber({
    value,
    duration = 2000,
    delay = 0,
    className = "",
    format = (v) => Math.round(v).toString(), // Default: round to nearest integer
    startWhenInView = true,
}: AnimatedNumberProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        duration: duration,
        bounce: 0, // No bounce for number counting usually looks better
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (startWhenInView && !isInView) return;

        // Timeout to handle delay
        const timeoutId = setTimeout(() => {
            motionValue.set(value);
        }, delay * 1000);

        return () => clearTimeout(timeoutId);
    }, [motionValue, value, delay, isInView, startWhenInView]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = format(latest);
            }
        });
    }, [springValue, format]);

    return <span ref={ref} className={className} />;
}
