"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi2";
interface ContactButtonProps {
  text?: string;
  href?: string;
  color?: string;
  iconSize?: number;
  className?: string;
  fullWidth?: boolean;
  accent?: {
    a: string,
    b: string
  }
  variant?: "primary" | "secondary";
}

export default function AnimatedRotateButton({
  text = "Contact Us",
  href,
  color = "#FF7A45",
  iconSize = 20,
  className = "",
  fullWidth = false,
  accent = {
    a: "#ffffff",
    b: "#000000",
  },
  variant = "primary",
}: ContactButtonProps) {
  const [hover, setHover] = useState(false);

  const ButtonContent = (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`
        relative overflow-hidden
        px-3 py-2 rounded-md font-semibold
        flex items-center justify-center  gap-1 text-white
        ${fullWidth ? "w-full justify-between" : "inline-flex"}
        ${className}
      `}
      style={{
        background:
          variant === "secondary"
            ? `
              linear-gradient(
                90deg,
                ${accent.a}33 0%,
                ${accent.b}33 100%
              )
            `
            : `
              linear-gradient(black, black) padding-box,
              conic-gradient(
                from 230deg,
                transparent 0%,
                ${accent.a} 12%,
                ${accent.a} 50%,
                transparent 60%,
                ${accent.b} 65%,
                transparent 98%
              ) border-box
            `,
        border:
          variant === "secondary"
            ? `1.5px solid ${accent.a}55`
            : "2px solid transparent",

        color: variant === "secondary" ? "#fff" : "#fff",

        boxShadow:
          variant === "secondary"
            ? `0 0 12px ${accent.a}a0`
            : "none",

        transition: "all 0.35s ease",
      }}



    >
      {/* TEXT ANIMATION */}
      <div
        className={`relative h-6 whitespace-nowrap overflow-hidden ${fullWidth ? "flex-1" : ""
          }`}
      >
        <span className="opacity-0">{text}</span>
        <AnimatePresence initial={false}>
          {!hover ? (
            <motion.span
              key="normal"
              className="absolute left-1/2 -translate-x-1/2"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.28 }}
            >
              {text}
            </motion.span>
          ) : (
            <motion.span
              key="hover"
              className="absolute left-1/2 -translate-x-1/2"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
              transition={{ duration: 0.28 }}
            >
              {text}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* ICON */}
      <div className="relative h-5 w-5 overflow-hidden">
        <AnimatePresence initial={false}>
          {!hover ? (
            <motion.div
              key="arrow-normal"
              initial={{ x: 20 }}
              animate={{ x: 0 }}
              exit={{ x: 20 }}
              transition={{ duration: 0.28 }}
              className="absolute"
            >
              <HiOutlineChevronRight size={iconSize} />
            </motion.div>
          ) : (
            <motion.div
              key="arrow-hover"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              exit={{ x: -20 }}
              transition={{ duration: 0.28 }}
              className="absolute"
            >
              <HiOutlineChevronRight size={iconSize} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{ButtonContent}</Link>;
  }

  return <button>{ButtonContent}</button>;
}
