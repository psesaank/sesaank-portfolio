"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/data/site";

const linkedInUrl = "https://www.linkedin.com/in/sesaank-potharlanka-702306320/";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#ffb3aa]">
              Portfolio
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              {siteConfig.name}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-7 text-zinc-400">
              {siteConfig.role}
              <br />
              Building intelligent solutions with AI, data, and software.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/psesaank"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.05] p-3 text-zinc-200 transition-colors hover:border-[#ff1a0a]/30 hover:bg-[#ff1a0a]/10"
              aria-label="GitHub"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href="mailto:sesaankpotharlanka2@gmail.com"
              className="rounded-full border border-white/10 bg-white/[0.05] p-3 text-zinc-200 transition-colors hover:border-[#ff1a0a]/30 hover:bg-[#ff1a0a]/10"
              aria-label="Email"
            >
              <FaEnvelope className="h-4 w-4" />
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.05] p-3 text-zinc-200 transition-colors hover:border-[#ff1a0a]/30 hover:bg-[#ff1a0a]/10"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Potharlanka Sesaank. All Rights Reserved.</p>
          <p>Built with Next.js, TypeScript &amp; ❤️</p>
        </div>
      </div>
    </footer>
  );
}
