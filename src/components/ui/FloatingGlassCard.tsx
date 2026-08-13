"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaBrain, FaCode, FaRobot } from "react-icons/fa";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const cardIcons = [FaRobot, FaBrain, FaCode] as const;

interface FloatingGlassCardProps {
  className?: string;
}

export function FloatingGlassCard({ className }: FloatingGlassCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn("perspective-[1000px]", className)}
      style={{
        transform: "translate3d(calc(var(--parallax-x) * -12px), calc(var(--parallax-y) * -12px), 0)",
      }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className={cn(
          "relative w-full max-w-xs rounded-2xl border border-white/10 p-5 sm:p-6",
          "bg-white/[0.04] shadow-2xl shadow-[#ff1a0a]/5 backdrop-blur-xl",
          "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl",
          "before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-[#ff1a0a]/5",
        )}
      >
        <div className="relative space-y-3" style={{ transform: "translateZ(20px)" }}>
          <p className="text-xs font-medium uppercase tracking-widest text-[#ff7a6d]">
            Focus Areas
          </p>

          {siteConfig.focusAreas.map((area, index) => {
            const Icon = cardIcons[index];
            return (
              <div
                key={area}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5 transition-colors hover:border-[#ff1a0a]/20 hover:bg-white/[0.06]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#b30000]/30 to-[#ff1a0a]/20 text-[#ffb3aa]">
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-zinc-200">{area}</span>
              </div>
            );
          })}
        </div>

        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-50"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,26,10,0.2), transparent 40%, rgba(179,0,0,0.15))",
          }}
          aria-hidden="true"
        />
      </motion.div>
    </motion.div>
  );
}
