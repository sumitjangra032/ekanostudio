"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ButtonVibrator({
  children,
}: {
  children: React.ReactNode;
}) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((k) => k + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={key}
      animate={{
        x: [0, -6, 6, -6, 6, -3, 3, 0],
        rotate: [0, -1, 1, -1, 1, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
