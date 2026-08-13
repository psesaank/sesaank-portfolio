"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { GlowingGrid } from "@/components/effects/GlowingGrid";
import { NeuralNetwork } from "@/components/effects/NeuralNetwork";

const repositories = [
  {
    name: "Face Recognition Attendance System",
    description: "AI-powered attendance recognition using Python and computer vision.",
    technology: "Python",
    url: "https://github.com/psesaank/FaceRecognitionAttendance",
  },
  {
    name: "Student Management System",
    description: "Java-based CRUD application for student records with JDBC and MySQL.",
    technology: "Java",
    url: "https://github.com/psesaank/StudentManagementSystem",
  },
  {
    name: "100 Days Challenge",
    description: "A personal collection of coding challenges and problem-solving progress.",
    technology: "Python",
    url: "https://github.com/psesaank/100-Days_challenge",
  },
];

export function GitHubSection() {
  return (
    <section
      id="github"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-28 lg:py-32"
      aria-labelledby="github-heading"
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
          <p className="section-label">
            GitHub
          </p>
          <h2
            id="github-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Exploring code, building tools, and sharing progress with the community.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_45px_rgba(255,26,10,0.08)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff1a0a]/20 to-[#b30000]/20 text-[#ffb3aa] shadow-[0_0_25px_rgba(255,26,10,0.12)]">
                <FaGithub className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Potharlanka Sesaank</h3>
                <p className="text-sm text-[#ffb3aa]">@psesaank</p>
              </div>
            </div>

            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Artificial Intelligence & Data Science Student
            </p>

            <motion.a
              href="https://github.com/psesaank"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#ff1a0a]/20 bg-[#ff1a0a]/10 px-4 py-2.5 text-sm font-medium text-[#ffd7d2] transition-colors duration-300 hover:border-[#ff3b30]/40 hover:bg-[#ff1a0a]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1a0a]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
            >
              <FaGithub className="h-4 w-4" />
              Visit GitHub Profile
            </motion.a>
          </motion.div>

          <div className="space-y-4">
            {repositories.map((repo, index) => (
              <motion.article
                key={repo.name}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.08 * index }}
                whileHover={{ y: -4, scale: 1.005, boxShadow: "0 0 32px rgba(255,26,10,0.14)" }}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{repo.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-400">{repo.description}</p>
                    <span className="mt-3 inline-flex rounded-full border border-[#ff1a0a]/20 bg-[#ff1a0a]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-[#ffb3aa]">
                      {repo.technology}
                    </span>
                  </div>

                  <motion.a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ff1a0a]/20 bg-[#ff1a0a]/10 px-4 py-2.5 text-sm font-medium text-[#ffd7d2] transition-colors duration-300 hover:border-[#ff3b30]/40 hover:bg-[#ff1a0a]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1a0a]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                  >
                    <FaGithub className="h-4 w-4" />
                    View Repository
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
