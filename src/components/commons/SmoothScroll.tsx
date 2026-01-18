"use client";

import { useEffect, useRef } from "react"; // Added useRef
import Lenis from "lenis";

export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null); // Ref to store the Lenis instance
  const rafIdRef = useRef<number | null>(null); // Ref to store the requestAnimationFrame ID

  useEffect(() => {
    // Optimization: Disable smooth scroll on mobile for better performance
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;

    const initLenis = () => {
      const lenis = new Lenis({
        duration: 1.0,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: false, // Better to let native touch handle scroll on mobile if enabled
      });
      lenisRef.current = lenis; // Store lenis instance in ref

      function raf(time: number) {
        lenis.raf(time);
        rafIdRef.current = requestAnimationFrame(raf); // Store rafId in ref
      }

      rafIdRef.current = requestAnimationFrame(raf); // Store initial rafId in ref
    };

    if (typeof window !== "undefined") { // Ensure window is defined before accessing requestIdleCallback
      if ('requestIdleCallback' in window) {
        const idleCallbackId = requestIdleCallback(initLenis);
        return () => {
          cancelIdleCallback(idleCallbackId); // Cleanup for requestIdleCallback
          if (rafIdRef.current) {
            cancelAnimationFrame(rafIdRef.current);
          }
          if (lenisRef.current) {
            lenisRef.current.destroy();
          }
        };
      } else {
        // Fallback for browsers that don't support requestIdleCallback
        const timeoutId = setTimeout(initLenis, 2000); // 2s delay fallback for mobile/unsupported, ensures LCP is prioritized.
        return () => {
          clearTimeout(timeoutId); // Cleanup for setTimeout
          if (rafIdRef.current) {
            cancelAnimationFrame(rafIdRef.current);
          }
          if (lenisRef.current) {
            lenisRef.current.destroy();
          }
        };
      }
    }

    // Fallback return for SSR or if window is not defined (though initLenis is guarded by it)
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return null;
}
