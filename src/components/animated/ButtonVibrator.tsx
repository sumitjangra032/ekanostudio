"use client";

import { useEffect, useState } from "react";

export default function ButtonVibrator({
  children,
}: {
  children: React.ReactNode;
}) {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger(true);
      setTimeout(() => setTrigger(false), 1000); // Reset after animation
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={trigger ? "animate-vibrate" : ""}>
      {children}
      <style jsx global>{`
        @keyframes vibrate {
          0% { transform: translate(0); }
          10% { transform: translate(-6px) rotate(-1deg); }
          20% { transform: translate(6px) rotate(1deg); }
          30% { transform: translate(-6px) rotate(-1deg); }
          40% { transform: translate(6px) rotate(1deg); }
          50% { transform: translate(-3px); }
          60% { transform: translate(3px); }
          70% { transform: translate(0); }
          100% { transform: translate(0); }
        }
        .animate-vibrate {
          animation: vibrate 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
