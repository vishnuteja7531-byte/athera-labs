// hooks/useSceneResize.js
// Small hook to provide a safe DPR-aware resize handler for canvases and three scenes.

import { useEffect } from "react";

export default function useSceneResize(ref) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!ref || !ref.current) return;

    const el = ref.current;
    const handle = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (el.width !== Math.floor(w * dpr) || el.height !== Math.floor(h * dpr)) {
        el.width = Math.floor(w * dpr);
        el.height = Math.floor(h * dpr);
      }
    };
    handle();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, [ref]);
}