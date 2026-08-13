"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ProjectIcon } from "@/components/ui/ProjectIcon";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  category?: string;
  iconVariant: "face" | "student" | "challenge";
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  category,
  iconVariant,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.015, boxShadow: "0 0 42px rgba(255,26,10,0.18)" }}
      className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-[#ff1a0a]/40"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff1a0a]/10 via-transparent to-[#b30000]/10 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-px rounded-[23px] border border-white/10" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <ProjectIcon variant={iconVariant} />
            <h3 className="text-xl font-semibold tracking-tight text-white">
              {title}
            </h3>
          </div>
          {category ? (
            <span className="rounded-full border border-[#ff1a0a]/20 bg-[#ff1a0a]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-[#ffb3aa]">
              {category}
            </span>
          ) : null}
        </div>

        <p className="mt-4 text-sm leading-7 text-zinc-400">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm text-zinc-200 transition-all duration-300 group-hover:border-[#ff3b30]/30 group-hover:bg-[#ff1a0a]/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-end">
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="inline-flex min-w-[168px] items-center justify-center gap-2 rounded-full border border-[#ff1a0a]/20 bg-[#ff1a0a]/10 px-4 py-2.5 text-sm font-medium text-[#ffb3aa] transition-colors duration-300 hover:border-[#ff3b30]/40 hover:bg-[#ff1a0a]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1a0a]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          >
            <FaGithub className="h-4 w-4" />
            View on GitHub
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}
