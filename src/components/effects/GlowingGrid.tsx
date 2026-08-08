"use client";

import { cn } from "@/lib/utils";

interface GlowingGridProps {
  className?: string;
}

export function GlowingGrid({ className }: GlowingGridProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-0", className)}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.4) 0%, transparent 2px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 70% 50% at 50% 45%, black 10%, transparent 65%)",
        }}
      />
    </div>
  );
}
