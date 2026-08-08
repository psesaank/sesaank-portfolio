"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaCode, FaGraduationCap, FaVideo } from "react-icons/fa";

interface ProjectIconProps {
  variant: "face" | "student" | "challenge";
}

const iconMap = {
  face: FaVideo,
  student: FaGraduationCap,
  challenge: FaCode,
};

const glowMap = {
  face: "from-cyan-400/30 via-cyan-300/20 to-violet-500/30",
  student: "from-violet-400/30 via-cyan-300/20 to-blue-500/30",
  challenge: "from-blue-400/30 via-cyan-300/20 to-violet-500/30",
};

const accentMap = {
  face: "text-cyan-200",
  student: "text-violet-200",
  challenge: "text-cyan-200",
};

export function ProjectIcon({ variant }: ProjectIconProps) {
  const Icon = iconMap[variant];
  const glowClass = glowMap[variant];
  const accentClass = accentMap[variant];

  return (
    <motion.div
      whileHover={{ scale: 1.08, rotate: 2 }}
      transition={{ duration: 0.2 }}
      className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${glowClass} shadow-[0_0_22px_rgba(34,211,238,0.14)]`}
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${glowClass} opacity-70 blur-[6px]`} />
      <Icon className={`relative h-5 w-5 ${accentClass}`} />
    </motion.div>
  );
}
