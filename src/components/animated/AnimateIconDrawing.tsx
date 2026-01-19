"use client";

import { m } from "framer-motion";
import { cloneElement } from "react";

interface AnimateIconDrawingProps {
  icon: React.ElementType;   // pass the component itself (ShoppingCart)
  size?: number;
  stroke?: string;
  strokeWidth?: number;
}

export default function AnimateIconDrawing({
  icon: Icon,
  size = 48,
  stroke = "#2B1F24",
  strokeWidth = 2,
}: AnimateIconDrawingProps) {
  if (!Icon) return null;


  // Render icon once to inspect children
  const rendered = <Icon stroke={stroke} strokeWidth={strokeWidth} />;

  const animatedChildren = Array.isArray((rendered as any).props.children)
    ? (rendered as any).props.children.map((child: any, i: number) =>
      child?.type === "path" ? (
        <m.path
          key={i}
          {...child.props}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ) : (
        child
      )
    )
    : (rendered as any).props.children?.type === "path" ? (
      <m.path
        {...(rendered as any).props.children.props}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    ) : (
      (rendered as any).props.children
    );

  return cloneElement(rendered, {
    width: size,
    height: size,
    stroke,
    strokeWidth,
    fill: "none",
    children: animatedChildren,
  });
}
