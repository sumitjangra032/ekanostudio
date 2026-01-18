"use client";

import { useEffect, useState, useRef } from "react";
import { easeInOut, m, useInView, Transition } from "framer-motion";

export default function AnimateDownloadedSVG({
  src,
  size = 100,
  stroke = "currentColor",
  duration = 1.5,
  repeat = true
}: {
  src: string;
  size?: number | string;
  stroke?: string;
  duration?: number;
  repeat?: boolean | number;
}) {
  const [svgContent, setSvgContent] = useState<any>(null);

  const wrapperRef = useRef(null);
  const inView = useInView(wrapperRef, { once: true, margin: "-20% 0px" });

  useEffect(() => {
    async function loadSVG() {
      const res = await fetch(src);
      const raw = await res.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(raw, "image/svg+xml");
      const svg = doc.querySelector("svg");
      if (!svg) return;

      const resolvedRepeat =
        repeat === false ? 0 : repeat === true ? Infinity : repeat;

      const makeAnim = (i: number) => ({
        initial: { pathLength: 0, opacity: 0 },
        animate: {
          pathLength: inView ? 1 : 0,
          opacity: inView ? 1 : 0
        },
        transition: {
          duration,
          ease: easeInOut,
          delay: i * 0.12,
          repeat: resolvedRepeat,
          repeatType: "reverse"
        } as Transition
      });

      function attr(el: Element, name: string, fallback = "0") {
        return el.getAttribute(name) ?? fallback;
      }

      const elements: any[] = [];

      doc.querySelectorAll("path").forEach((p, i) =>
        elements.push(
          <m.path
            key={"path" + i}
            d={attr(p, "d", "")}
            fill={attr(p, "fill", "none")}
            stroke={stroke}
            strokeWidth={attr(p, "stroke-width", "2")}
            {...makeAnim(i)}
          />
        )
      );

      doc.querySelectorAll("circle").forEach((c, i) =>
        elements.push(
          <m.circle
            key={"circle" + i}
            cx={attr(c, "cx")}
            cy={attr(c, "cy")}
            r={attr(c, "r")}
            fill={attr(c, "fill", "none")}
            stroke={stroke}
            strokeWidth={attr(c, "stroke-width", "2")}
            {...makeAnim(i)}
          />
        )
      );

      doc.querySelectorAll("rect").forEach((r, i) =>
        elements.push(
          <m.rect
            key={"rect" + i}
            x={attr(r, "x")}
            y={attr(r, "y")}
            width={attr(r, "width")}
            height={attr(r, "height")}
            rx={attr(r, "rx")}
            ry={attr(r, "ry")}
            fill={attr(r, "fill", "none")}
            stroke={stroke}
            strokeWidth={attr(r, "stroke-width", "2")}
            {...makeAnim(i)}
          />
        )
      );

      doc.querySelectorAll("line").forEach((l, i) =>
        elements.push(
          <m.line
            key={"line" + i}
            x1={attr(l, "x1")}
            y1={attr(l, "y1")}
            x2={attr(l, "x2")}
            y2={attr(l, "y2")}
            stroke={stroke}
            strokeWidth={attr(l, "stroke-width", "2")}
            {...makeAnim(i)}
          />
        )
      );

      doc.querySelectorAll("polygon").forEach((p, i) =>
        elements.push(
          <m.polygon
            key={"polygon" + i}
            points={attr(p, "points", "")}
            fill={attr(p, "fill", "none")}
            stroke={stroke}
            strokeWidth={attr(p, "stroke-width", "2")}
            {...makeAnim(i)}
          />
        )
      );

      doc.querySelectorAll("polyline").forEach((p, i) =>
        elements.push(
          <m.polyline
            key={"polyline" + i}
            points={attr(p, "points", "")}
            fill={attr(p, "fill", "none")}
            stroke={stroke}
            strokeWidth={attr(p, "stroke-width", "2")}
            {...makeAnim(i)}
          />
        )
      );

      setSvgContent(
        <svg
          width={size}
          height={size}
          viewBox={svg.getAttribute("viewBox") ?? "0 0 100 100"}
          fill="none"
        >
          {elements}
        </svg>
      );
    }

    loadSVG();
  }, [src, stroke, size, duration, repeat, inView]);

  return <div ref={wrapperRef}>{svgContent}</div>;
}
