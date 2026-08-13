"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { GlowingGrid } from "@/components/effects/GlowingGrid";
import { NeuralNetwork } from "@/components/effects/NeuralNetwork";
import { siteConfig } from "@/data/site";

const linkedInUrl = "https://www.linkedin.com/in/sesaank-potharlanka-702306320/";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateField = (field: "name" | "email" | "message", value: string) => {
  const trimmed = value.trim();

  if (field === "name") {
    if (!trimmed) return "Please enter your name.";
    if (trimmed.length < 2) return "Name must be at least 2 characters.";
    if (trimmed.length > 100) return "Name must be 100 characters or fewer.";
    return "";
  }

  if (field === "email") {
    if (!trimmed) return "Please enter your email.";
    if (trimmed.length > 254) return "Email must be 254 characters or fewer.";
    if (!emailPattern.test(trimmed)) return "Please enter a valid email address.";
    return "";
  }

  if (!trimmed) return "Please enter a message.";
  if (trimmed.length < 5) return "Message must be at least 5 characters.";
  if (trimmed.length > 5000) return "Message must be 5000 characters or fewer.";
  return "";
};

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const nextErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };

    setErrors(nextErrors);
    return !nextErrors.name && !nextErrors.email && !nextErrors.message;
  };

  const handleFieldChange = (field: "name" | "email" | "message", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, value) || undefined }));
    if (status === "success" || status === "error") {
      setStatus("idle");
    }
    if (submitError) {
      setSubmitError("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };

    setErrors(nextErrors);

    if (nextErrors.name || nextErrors.email || nextErrors.message) {
      setStatus("idle");
      setSubmitError("");
      return;
    }

    setStatus("loading");
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || "Unable to send message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setSubmitError("");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setSubmitError(error instanceof Error ? error.message : "Unable to send message.");
    }
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
          <p className="section-label">
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
            className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_45px_rgba(255,26,10,0.08)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff1a0a]/20 to-[#b30000]/20 text-[#ffb3aa] shadow-[0_0_24px_rgba(255,26,10,0.12)]">
                <FaEnvelope className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <a
                  href="mailto:sesaankpotharlanka2@gmail.com"
                  className="text-sm text-[#ffb3aa] transition-colors hover:text-[#ffd7d2]"
                >
                  sesaankpotharlanka2@gmail.com
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
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-zinc-200 transition-colors hover:border-[#ff1a0a]/30 hover:bg-[#ff1a0a]/10"
              >
                <FaGithub className="h-4 w-4 text-[#ffb3aa]" />
                GitHub
              </motion.a>
              <motion.a
                href="mailto:sesaankpotharlanka2@gmail.com"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-zinc-200 transition-colors hover:border-[#ff1a0a]/30 hover:bg-[#ff1a0a]/10"
              >
                <FaEnvelope className="h-4 w-4 text-[#ffb3aa]" />
                Email
              </motion.a>
              <motion.a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-zinc-200 transition-colors hover:border-[#ff1a0a]/30 hover:bg-[#ff1a0a]/10"
              >
                <FaLinkedin className="h-4 w-4 text-[#ffb3aa]" />
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
                  onChange={(event) => handleFieldChange("name", event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-[#ff1a0a]/40"
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
                  onChange={(event) => handleFieldChange("email", event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-[#ff1a0a]/40"
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
                  onChange={(event) => handleFieldChange("message", event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-[#ff1a0a]/40"
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
                className="inline-flex min-w-[170px] items-center justify-center rounded-full border border-[#ff1a0a]/20 bg-[#ff1a0a]/10 px-5 py-3 text-sm font-medium text-[#ffd7d2] transition-colors duration-300 hover:border-[#ff3b30]/40 hover:bg-[#ff1a0a]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1a0a]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" ? (
                <p className="text-sm text-emerald-400">Thanks for reaching out. I&apos;ll get back to you soon.</p>
              ) : null}
              {status === "error" && submitError ? (
                <p className="text-sm text-amber-400">{submitError}</p>
              ) : null}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
