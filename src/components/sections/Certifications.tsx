"use client";

import { motion } from "framer-motion";
import { FaAws, FaCheckCircle, FaDatabase, FaExternalLinkAlt } from "react-icons/fa";
import { BsMicrosoft } from "react-icons/bs";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { GlowingGrid } from "@/components/effects/GlowingGrid";
import { NeuralNetwork } from "@/components/effects/NeuralNetwork";

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/abd44635719340fe945a359ff0969166",
    icon: FaAws,
    accent: "from-[#ff1a0a]/20 via-[#ff3b30]/10 to-[#b30000]/20",
  },
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services (AWS)",
    credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/87a7421add6e406283854588d7faab04",
    icon: FaAws,
    accent: "from-[#ff3b30]/20 via-[#ff7a6d]/10 to-[#b30000]/20",
  },
  {
    name: "MongoDB Associate Developer",
    issuer: "MongoDB",
    credentialUrl: "https://www.credly.com/badges/d7ff9979-5fb3-40c0-b66a-76def92bb006/public_url",
    icon: FaDatabase,
    accent: "from-[#b30000]/20 via-[#ff1a0a]/10 to-[#ff3b30]/20",
  },
  {
    name: "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
    issuer: "Microsoft",
    exam: "AI-103",
    level: "Associate",
    completed: "August 9, 2026",
    credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/POTHARLANKASESAANK-3938/60615822DE899ADA?sharingId=3686189FC2CA92C0",
    icon: BsMicrosoft,
    accent: "from-[#ff3b30]/20 via-[#ff7a6d]/10 to-[#b30000]/20",
    buttonText: "✓ VERIFY CREDENTIAL",
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
          <p className="section-label">
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
                whileHover={{ y: -6, scale: 1.01, boxShadow: "0 0 40px rgba(255,26,10,0.16)" }}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.accent} opacity-80 transition-opacity duration-300 group-hover:opacity-100`} />
                <div className="absolute inset-px rounded-[23px] border border-white/10" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cert.accent} text-[#ffd7d2] shadow-[0_0_25px_rgba(255,26,10,0.12)]`}>
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="inline-flex items-center gap-2 rounded-full border border-[#ff1a0a]/20 bg-[#ff1a0a]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-[#ffd7d2]">
                      <FaCheckCircle className="h-3.5 w-3.5" />
                      Verified Credential
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
                    {cert.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">Issued by {cert.issuer}</p>

                  {(cert.exam || cert.level) && (
                    <div className="mt-4 space-y-2 text-sm text-zinc-300">
                      {cert.exam && (
                        <p>
                          <span className="font-medium text-white">Exam:</span> {cert.exam}
                        </p>
                      )}
                      {cert.level && (
                        <p>
                          <span className="font-medium text-white">Level:</span> {cert.level}
                        </p>
                      )}
                    </div>
                  )}

                  {cert.completed && (
                    <p className="mt-4 text-sm font-medium text-[#ffd7d2]">
                      Completed: {cert.completed}
                    </p>
                  )}

                  <div className="mt-8 flex items-end">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-full border border-[#ff1a0a]/20 bg-[#ff1a0a]/10 px-4 py-2.5 text-sm font-medium text-[#ffd7d2] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff3b30]/40 hover:bg-[#ff1a0a]/20 hover:shadow-[0_0_20px_rgba(255,26,10,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1a0a]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                      aria-label={`View credential for ${cert.name}`}
                    >
                      <FaExternalLinkAlt className="h-4 w-4" />
                      {cert.buttonText ?? "View Credential"}
                    </a>
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
