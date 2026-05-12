"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ensureReady, loadPatch, type AudioPatch } from "@web-kits/audio";
import "./StickerPeel.css";

gsap.registerPlugin(Draggable);

let patchPromise: Promise<AudioPatch> | null = null;
function getPatch() {
  if (!patchPromise) patchPromise = loadPatch("/patches/mechanical.json");
  return patchPromise;
}

type StickerPeelProps = {
  children: ReactNode;
  initialPosition?: { x: number; y: number };
  className?: string;
};

export default function StickerPeel({
  children,
  initialPosition = { x: 0, y: 0 },
  className = "",
}: StickerPeelProps) {
  const dragTargetRef = useRef<HTMLDivElement>(null);
  const draggableInstanceRef = useRef<Draggable | null>(null);

  useEffect(() => {
    const target = dragTargetRef.current;
    if (!target) return;
    gsap.set(target, { x: initialPosition.x, y: initialPosition.y });
  }, [initialPosition.x, initialPosition.y]);

  useEffect(() => {
    const target = dragTargetRef.current;
    if (!target) return;
    const boundsEl = target.parentNode as HTMLElement;

    draggableInstanceRef.current = Draggable.create(target, {
      type: "x,y",
      bounds: boundsEl,
      inertia: false,
      zIndexBoost: false,
      onPress() {
        ensureReady().then(() =>
          getPatch().then((p) => p.play("page-exit", { volume: 3 }))
        );
      },
      onDrag(this: Draggable) {
        const rot = gsap.utils.clamp(-14, 14, this.deltaX * 0.5);
        gsap.to(target, { rotation: rot, duration: 0.15, ease: "power1.out" });
      },
      onRelease() {
        getPatch().then((p) => p.play("page-exit", { volume: 3 }));
      },
      onDragEnd() {
        gsap.to(target, {
          rotation: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.45)",
        });
      },
    })[0];

    const handleResize = () => draggableInstanceRef.current?.update();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      draggableInstanceRef.current?.kill();
    };
  }, []);

  return (
    <div ref={dragTargetRef} className={`sticker-peel ${className}`}>
      {children}
    </div>
  );
}
