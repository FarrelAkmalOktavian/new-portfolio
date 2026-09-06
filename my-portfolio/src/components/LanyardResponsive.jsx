import { Suspense, lazy, useEffect, useState } from "react";
import Lanyard from "./Lanyard";

// Chunk 3D (three.js + rapier + meshline) di-split terpisah dan cuma di-load
// kalau memang mau dipakai — supaya initial bundle & Lighthouse mobile tidak kena dampak.
const Lanyard3D = lazy(() => import("./Lanyard3D"));

export default function LanyardResponsive() {
  const [canRender3D, setCanRender3D] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCanRender3D(mq.matches && !reduceMotion);

    function handler(e) {
      setCanRender3D(e.matches && !reduceMotion);
    }
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (!canRender3D) {
    // Mobile & prefers-reduced-motion tetap dapat visual signature-nya,
    // cuma versi CSS yang ringan.
    return <Lanyard />;
  }

  return (
    <Suspense fallback={<Lanyard />}>
      <Lanyard3D />
    </Suspense>
  );
}