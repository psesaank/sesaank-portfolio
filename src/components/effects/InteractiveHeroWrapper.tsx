"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

interface InteractiveHeroWrapperProps {
  children: ReactNode;
  className?: string;
}

export function InteractiveHeroWrapper({
  children,
  className,
}: InteractiveHeroWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0.5, y: 0.5 });
  const currentRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      targetRef.current = {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      };
    },
    [],
  );

  const handleMouseLeave = useCallback(() => {
    targetRef.current = { x: 0.5, y: 0.5 };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tick = () => {
      const target = targetRef.current;
      const current = currentRef.current;

      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;

      const px = current.x * 100;
      const py = current.y * 100;
      const parallaxX = (current.x - 0.5) * 2;
      const parallaxY = (current.y - 0.5) * 2;

      container.style.setProperty("--mouse-x", `${px}%`);
      container.style.setProperty("--mouse-y", `${py}%`);
      container.style.setProperty("--parallax-x", String(parallaxX));
      container.style.setProperty("--parallax-y", String(parallaxY));

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative overflow-hidden", className)}
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
          "--parallax-x": "0",
          "--parallax-y": "0",
        } as CSSProperties
      }
    >
      {children}

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(700px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.07), transparent 42%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(34, 211, 238, 0.05), transparent 35%)",
        }}
      />
    </div>
  );
}
