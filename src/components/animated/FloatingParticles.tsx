"use client";

import { m } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
}

export default function FloatingParticles({ count = 20 }: { count?: number }) {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: count }).map((_, i) => ({
            id: i,
            // Focus more on the middle (Gaussian-like distribution by averaging randoms)
            x: ((Math.random() + Math.random() + Math.random()) / 3) * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1, // 1px to 4px
            duration: Math.random() * 10 + 10, // 10s to 20s
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);
    }, [count]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            {particles.map((particle) => (
                <m.div
                    key={particle.id}
                    className="absolute bg-white rounded-full opacity-20"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        y: [0, -100, 0], // Float up and down slightly
                        x: [0, 50, -50, 0], // Drifting sideways
                        opacity: [0.1, 0.4, 0.1],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: particle.delay,
                        repeatType: "reverse",
                    }}
                />
            ))}
        </div>
    );
}
