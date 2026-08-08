"use client";

import { motion } from "framer-motion";
import { FaAws, FaDatabase, FaGithub } from "react-icons/fa";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { GlowingGrid } from "@/components/effects/GlowingGrid";
import { NeuralNetwork } from "@/components/effects/NeuralNetwork";

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud Computing",
    icon: FaAws,
    accent: "from-cyan-400/20 via-cyan-300/10 to-violet-500/20",
  },
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud Development",
    icon: FaAws,
    accent: "from-blue-400/20 via-cyan-300/10 to-purple-500/20",
  },
  {
    name: "MongoDB Associate Developer",
    issuer: "MongoDB",
    category: "Database Development",
    icon: FaDatabase,
    accent: "from-violet-400/20 via-cyan-300/10 to-blue-500/20",
  },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-28 lg:py-32"
      aria-labelledby="certifications-heading"
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
            Certifications
          </p>
          <h2
            id="certifications-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Demonstrating continued growth through industry-recognized learning.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.article
                key={cert.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.08 * index }}
                whileHover={{ y: -6, scale: 1.01, boxShadow: "0 0 40px rgba(34,211,238,0.16)" }}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.accent} opacity-80 transition-opacity duration-300 group-hover:opacity-100`} />
                <div className="absolute inset-px rounded-[23px] border border-white/10" />

                <div className="relative flex h-full flex-col">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cert.accent} text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.12)]`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {cert.name}
                    </h3>
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-cyan-300">
                      {cert.category}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">{cert.issuer}</p>

                  <div className="mt-8 flex items-end">
                    <button
                      type="button"
                      className="inline-flex min-w-[150px] items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2.5 text-sm font-medium text-cyan-200 transition-colors duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                      aria-label={`View credential for ${cert.name}`}
                    >
                      <FaGithub className="h-4 w-4" />
                      View Credential
                    </button>
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
