"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { GlowingGrid } from "@/components/effects/GlowingGrid";
import { NeuralNetwork } from "@/components/effects/NeuralNetwork";
import { siteConfig } from "@/data/site";

const linkedInUrl = "https://www.linkedin.com/in/sesaank-potharlanka-702306320/";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    const nextErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please enter a message.";
    } else if (formData.message.trim().length < 20) {
      nextErrors.message = "Please share a bit more detail so I can help.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    window.setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }, 900);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-28 lg:py-32"
      aria-labelledby="contact-heading"
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
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Let&apos;s Build Something Intelligent
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Have an idea, opportunity, or project in mind? I&apos;d love to connect.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_45px_rgba(34,211,238,0.08)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.12)]">
                <FaEnvelope className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <a
                  href="mailto:2300080153@kluniversity.in"
                  className="text-sm text-cyan-300 transition-colors hover:text-cyan-200"
                >
                  2300080153@kluniversity.in
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href="https://github.com/psesaank"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-zinc-200 transition-colors hover:border-cyan-400/30 hover:bg-cyan-400/10"
              >
                <FaGithub className="h-4 w-4 text-cyan-300" />
                GitHub
              </motion.a>
              <motion.a
                href="mailto:2300080153@kluniversity.in"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-zinc-200 transition-colors hover:border-cyan-400/30 hover:bg-cyan-400/10"
              >
                <FaEnvelope className="h-4 w-4 text-cyan-300" />
                Email
              </motion.a>
              <motion.a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-zinc-200 transition-colors hover:border-cyan-400/30 hover:bg-cyan-400/10"
              >
                <FaLinkedin className="h-4 w-4 text-cyan-300" />
                LinkedIn
              </motion.a>
            </div>

            <p className="mt-8 text-sm leading-7 text-zinc-400">
              {siteConfig.name}
              <br />
              {siteConfig.role}
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_45px_rgba(34,211,238,0.08)] backdrop-blur-xl"
            noValidate
          >
            <div className="grid gap-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                  className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/40"
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name ? <p className="mt-2 text-sm text-rose-400">{errors.name}</p> : null}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                  className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/40"
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email ? <p className="mt-2 text-sm text-rose-400">{errors.email}</p> : null}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                  className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/40"
                  placeholder="Tell me about your idea or project..."
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message ? <p className="mt-2 text-sm text-rose-400">{errors.message}</p> : null}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex min-w-[170px] items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-200 transition-colors duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" ? (
                <p className="text-sm text-emerald-400">Thanks for reaching out. I&apos;ll get back to you soon.</p>
              ) : null}
              {status === "error" ? (
                <p className="text-sm text-amber-400">Please correct the highlighted fields and try again.</p>
              ) : null}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
