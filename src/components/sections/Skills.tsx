"use client";

import { motion } from "framer-motion";
import { FaAws, FaCode, FaDatabase, FaLaptopCode, FaMicrochip, FaServer, FaTools } from "react-icons/fa";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { GlowingGrid } from "@/components/effects/GlowingGrid";
import { NeuralNetwork } from "@/components/effects/NeuralNetwork";

const skillGroups = [
  {
    title: "Programming",
    icon: FaCode,
    skills: ["Python", "Java", "C", "SQL", "JavaScript"],
  },
  {
    title: "Frontend",
    icon: FaLaptopCode,
    skills: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: FaServer,
    skills: ["FastAPI", "JDBC"],
  },
  {
    title: "AI & Data Science",
    icon: FaMicrochip,
    skills: ["Machine Learning", "Deep Learning", "TensorFlow", "OpenCV", "YOLO", "DeepFace"],
  },
  {
    title: "Database",
    icon: FaDatabase,
    skills: ["MySQL", "SQLite"],
  },
  {
    title: "Tools",
    icon: FaTools,
    skills: ["Git", "GitHub", "Docker", "VS Code", "Postman"],
  },
  {
    title: "Cloud",
    icon: FaAws,
    skills: ["AWS"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-28 lg:py-32"
      aria-label="Skills"
    >
      <AuroraBackground />
      <GlowingGrid />
      <NeuralNetwork />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-400/80">
            Skills
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A versatile toolkit for building AI-powered experiences.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.08 * index }}
                whileHover={{ y: -6, scale: 1.01, boxShadow: "0 0 40px rgba(34,211,238,0.16)" }}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-500/10 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-cyan-300">
                      {group.title}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm text-zinc-200 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
