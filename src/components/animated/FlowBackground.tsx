"use client";

import { useEffect, useRef, useState } from "react";

export default function FlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const waves = Array.from({ length: 70 }).map(() => ({
      y: Math.random() * canvas.height,
      speed: 0.15 + Math.random() * 0.3,
      amplitude: 25 + Math.random() * 40,
      length: 0.002 + Math.random() * 0.004,
      phase: Math.random() * Math.PI * 2,
    }));

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // subtle dark base (NOT pure black)
      ctx.fillStyle = "#0b0b0b";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      waves.forEach((wave, i) => {
        ctx.beginPath();
        ctx.strokeStyle =
          i % 3 === 0
            ? "rgba(139,92,246,0.18)"   // purple
            : "rgba(255,255,255,0.12)";

        ctx.lineWidth = 1;

        for (let x = 0; x < canvas.width; x += 8) {
          const y =
            wave.y +
            Math.sin(x * wave.length + time * wave.speed + wave.phase) *
            wave.amplitude;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      time += 0.008;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className="absolute inset-0 w-full h-full bg-[#0b0b0b]" />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}
