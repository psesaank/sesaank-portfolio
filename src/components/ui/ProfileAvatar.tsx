"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProfileAvatarProps {
  src: string;
  alt: string;
  initials: string;
  className?: string;
}

export function ProfileAvatar({
  src,
  alt,
  initials,
  className,
}: ProfileAvatarProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.02 }}
      className={cn("relative h-[150px] w-[150px] shrink-0 sm:h-[180px] sm:w-[180px]", className)}
    >
      <motion.div
        animate={{ y: [0, -5, 0], rotate: [0, 1, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full p-[2px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.8), rgba(34,211,238,0.75), rgba(168,85,247,0.8))",
        }}
      />

      <div
        className={cn(
          "absolute inset-[6px] rounded-full",
          "border border-white/20 bg-zinc-950/70 backdrop-blur-xl",
          "shadow-[0_0_36px_rgba(34,211,238,0.22)]",
          "transition-shadow duration-300 hover:shadow-[0_0_48px_rgba(34,211,238,0.35)]",
        )}
      >
        <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-blue-500/20 via-cyan-500/15 to-violet-500/20">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(34,211,238,0.28), transparent 30%), radial-gradient(circle at 80% 25%, rgba(168,85,247,0.25), transparent 28%), linear-gradient(135deg, rgba(255,255,255,0.08), transparent 35%), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 18px), repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 20px)",
            }}
          />
          {!hasError ? (
            <Image
              src={src}
              alt={alt}
              width={180}
              height={180}
              loading="lazy"
              className="relative h-full w-full object-cover"
              onError={() => setHasError(true)}
            />
          ) : (
            <div
              className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500/25 via-cyan-500/15 to-purple-500/25 text-3xl font-bold tracking-tight text-white"
              role="img"
              aria-label={alt}
            >
              {initials}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
