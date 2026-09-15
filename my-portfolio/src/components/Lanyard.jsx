import { useEffect, useRef, useState } from "react";
import { profile } from "../data/content";
import fotoProfil from "../assets/me.JPEG";

export default function Lanyard() {
  const wrapperRef = useRef(null);
  const angleRef = useRef(-16);
  const velRef = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const reducedMotionRef = useRef(false);
  const [dragging, setDragging] = useState(false);

  const STIFFNESS = 0.012;
  const DAMPING = 0.055;
  const MAX_ANGLE = 55;

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotionRef.current) {
      angleRef.current = 0;
      if (wrapperRef.current) wrapperRef.current.style.transform = "rotate(0deg)";
      return; // tidak menjalankan loop animasi kalau user minta motion lebih sedikit
    }

    let raf;
    function tick() {
      if (!draggingRef.current) {
        const angle = angleRef.current;
        const accel = -STIFFNESS * angle - DAMPING * velRef.current;
        velRef.current += accel;
        angleRef.current += velRef.current;
      }
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `rotate(${angleRef.current}deg)`;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  function onPointerDown(e) {
    draggingRef.current = true;
    setDragging(true);
    lastXRef.current = e.clientX;
    velRef.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e) {
    if (!draggingRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    if (reducedMotionRef.current) return; // abaikan drag visual, cukup diam
    const next = Math.max(-MAX_ANGLE, Math.min(MAX_ANGLE, angleRef.current - dx * 0.6));
    angleRef.current = next;
    velRef.current = -dx * 0.6;
    if (wrapperRef.current) wrapperRef.current.style.transform = `rotate(${next}deg)`;
  }

  function onPointerUp() {
    draggingRef.current = false;
    setDragging(false);
    if (reducedMotionRef.current) {
      angleRef.current = 0;
      velRef.current = 0;
      if (wrapperRef.current) wrapperRef.current.style.transform = "rotate(0deg)";
    }
  }

  return (
    <div
      className="flex flex-col items-center select-none"
      style={{ touchAction: "none" }}
    >
      {/* klip di atas — titik tetap, tidak ikut berayun */}
      <div className="w-12 h-3 rounded-t-md bg-line" />
      <div
        className="w-3 h-2 -mt-px bg-line"
        style={{ clipPath: "polygon(20% 0, 80% 0, 100% 100%, 0 100%)" }}
      />

      {/* grup yang berayun: tali + lubang + kartu */}
      <div ref={wrapperRef} style={{ transformOrigin: "50% 0%" }} className="flex flex-col items-center">
        <div className="w-1.5 h-20 bg-line" />

        <div
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          className={dragging ? "cursor-grabbing" : "cursor-grab"}
        >
          {/* lubang pons */}
          <div className="w-4 h-4 rounded-full border-2 border-line bg-background -mb-2 mx-auto" />

          {/* kartu ID — rasio 2:3, manjang ke bawah */}
          <div className="w-60 h-90 rounded-2xl bg-surface border border-line shadow-2xl overflow-hidden flex flex-col">
            <img
              src={fotoProfil}
              alt={profile.name}
              className="w-full h-52.5 object-cover shrink-0"
            />

            <div className="p-4 flex flex-col flex-1 min-h-0">
              <p className="font-display text-lg leading-tight text-ink truncate">
                {profile.name}
              </p>
              <p className="mt-1 text-sm text-muted truncate">{profile.role}</p>

              <div className="mt-3 h-px w-full bg-line" />

              <div className="mt-auto pt-3 flex items-end justify-between">
                <span className="text-[11px] text-muted">Portfolio · 2026</span>
                <div className="flex items-end gap-0.5 h-4">
                  {[3, 5, 2, 4, 6, 2, 5, 3, 4].map((h, i) => (
                    <div key={i} style={{ width: 2, height: `${h * 2.5}px` }} className="bg-line" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-xs text-muted">Tarik dan lepas badge-nya</p>
    </div>
  );
}