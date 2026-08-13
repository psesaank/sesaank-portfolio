"use client";

import { motion } from "framer-motion";
import { FaBrain, FaCode, FaMicrochip, FaRocket } from "react-icons/fa";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { GlowingGrid } from "@/components/effects/GlowingGrid";
import { NeuralNetwork } from "@/components/effects/NeuralNetwork";

const highlights = [
  {
    title: "Research-driven",
    description: "Focused on building intelligent systems with practical impact.",
    icon: FaMicrochip,
  },
  {
    title: "AI-first engineering",
    description: "Bridging machine learning ideas with scalable AI solutions.",
    icon: FaCode,
  },
  {
    title: "Continuous growth",
    description: "Constantly refining technical skills and problem-solving depth.",
    icon: FaRocket,
  },
  {
    title: "Cloud-ready",
    description: "Leveraging AWS, Azure and cloud AI services to deploy smart applications.",
    icon: FaBrain,
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-28 lg:py-32"
      aria-label="About"
    >
      <AuroraBackground />
      <GlowingGrid />
      <NeuralNetwork />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="section-label">
            About Me
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Building intelligent software with curiosity and purpose.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="red-rim rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_45px_rgba(255,26,10,0.08)] backdrop-blur-xl sm:p-10"
          >
            <p className="text-lg leading-8 text-zinc-300 sm:text-xl">
              I am pursuing a Bachelor of Technology in Artificial Intelligence &amp; Data Science. I build AI-driven applications, machine learning systems, and cloud-enabled data solutions for practical impact.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
                    className="rounded-2xl border border-[#ff1a0a]/10 bg-gradient-to-br from-[#ff1a0a]/8 to-[#b30000]/8 p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#ffb3aa]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="mt-3 text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#ff1a0a]/8 via-transparent to-[#b30000]/8 p-8 shadow-[0_0_45px_rgba(255,26,10,0.08)] backdrop-blur-xl sm:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,26,10,0.15),transparent_45%)]" />
            <div className="relative">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#ffb3aa]">
                Focus Areas
              </p>
              <div className="mt-6 space-y-4">
                {[
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Data Science",
                  "AI Engineering",
                  "Cloud AI",
                  "Supporting Software Architecture",
                ].map((focus, index) => (
                  <motion.div
                    key={focus}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: 0.16 + index * 0.05 }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#ff3b30] to-[#b30000]" />
                    <span className="text-sm font-medium text-zinc-200">{focus}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
