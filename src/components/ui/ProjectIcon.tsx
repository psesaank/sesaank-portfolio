"use client";

import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaVideo } from "react-icons/fa";

interface ProjectIconProps {
  variant: "face" | "student" | "challenge";
}

const iconMap = {
  face: FaVideo,
  student: FaGraduationCap,
  challenge: FaCode,
};

const glowMap = {
  face: "from-[#ff1a0a]/30 via-[#ff3b30]/20 to-[#b30000]/30",
  student: "from-[#b30000]/30 via-[#ff7a6d]/20 to-[#ff1a0a]/30",
  challenge: "from-[#ff3b30]/30 via-[#ff7a6d]/20 to-[#b30000]/30",
};

const accentMap = {
  face: "text-[#ffd7d2]",
  student: "text-[#ffd7d2]",
  challenge: "text-[#ffd7d2]",
};

export function ProjectIcon({ variant }: ProjectIconProps) {
  const Icon = iconMap[variant];
  const glowClass = glowMap[variant];
  const accentClass = accentMap[variant];

  return (
    <motion.div
      whileHover={{ scale: 1.08, rotate: 2 }}
      transition={{ duration: 0.2 }}
      className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${glowClass} shadow-[0_0_22px_rgba(255,26,10,0.14)]`}
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${glowClass} opacity-70 blur-[6px]`} />
      <Icon className={`relative h-5 w-5 ${accentClass}`} />
    </motion.div>
  );
}
