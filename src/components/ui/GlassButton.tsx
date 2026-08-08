"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassButtonProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  external?: boolean;
  className?: string;
}

const glowClasses = cn(
  "border-white/10 hover:border-cyan-400/45",
  "hover:bg-white/10 hover:shadow-[0_0_28px_rgba(34,211,238,0.25),0_0_56px_rgba(59,130,246,0.12)]",
);

export function GlassButton({
  href,
  children,
  icon,
  external = false,
  className,
}: GlassButtonProps) {
  const classes = cn(
    "group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full sm:w-auto sm:min-w-[142px]",
    "border bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md sm:px-6 sm:py-3",
    "transition-[box-shadow,border-color,background-color] duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
    glowClasses,
    className,
  );

  const content = (
    <>
      <span
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-400/10 to-violet-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      {icon}
      <span className="relative">{children}</span>
    </>
  );

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="w-full sm:w-auto"
    >
      <Link href={href} className={classes}>
        {content}
      </Link>
    </motion.div>
  );
}
