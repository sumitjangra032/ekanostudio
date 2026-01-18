"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRightIcon } from "@/components/icons/LocalIcons";

interface ContactButtonProps {
  text?: string;
  href?: string;
  color?: string;
  iconSize?: number;
  className?: string;
  fullWidth?: boolean;
  accent?: {
    a: string;
    b: string;
  };
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  onClick?: () => void;
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
  type = "button",
  onClick,
}: ContactButtonProps) {

  const ButtonContent = (
    <div
      className={`
        group relative overflow-hidden
        px-3 py-2 rounded-md font-semibold
        flex items-center justify-center gap-1 text-white
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
        boxShadow:
          variant === "secondary"
            ? `0 0 12px ${accent.a}a0`
            : "none",
        transition: "all 0.35s ease",
      }}
    >
      {/* TEXT */}
      <div
        className={`relative h-6 whitespace-nowrap overflow-hidden flex flex-col items-center ${fullWidth ? "flex-1" : ""}`}
      >
        <span className="opacity-0">{text}</span> {/* Spacer */}
        <span className="absolute left-1/2 -translate-x-1/2 top-0 transition-transform duration-300 ease-in-out group-hover:translate-y-[-150%]">
          {text}
        </span>
        <span className="absolute left-1/2 -translate-x-1/2 top-full transition-transform duration-300 ease-in-out group-hover:translate-y-[-100%]">
          {text}
        </span>
      </div>

      {/* ICON */}
      <div className="relative h-5 w-5 overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:translate-x-[-150%]">
          <ChevronRightIcon size={iconSize} />
        </div>
        <div className="absolute inset-0 translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0">
          <ChevronRightIcon size={iconSize} />
        </div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{ButtonContent}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={fullWidth ? "w-full" : ""}>
      {ButtonContent}
    </button>
  );
}
