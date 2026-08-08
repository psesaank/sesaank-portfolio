"use client";

import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaFileAlt,
  FaGithub,
  FaLinkedin,
  FaPython,
  FaReact,
  FaServer,
} from "react-icons/fa";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { GlowingGrid } from "@/components/effects/GlowingGrid";
import { InteractiveHeroWrapper } from "@/components/effects/InteractiveHeroWrapper";
import { NeuralNetwork } from "@/components/effects/NeuralNetwork";
import { FloatingGlassCard } from "@/components/ui/FloatingGlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { ProfileAvatar } from "@/components/ui/ProfileAvatar";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { TypingText } from "@/components/ui/TypingText";
import { siteConfig } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const techBadges = [
  { label: "Python", icon: FaPython },
  { label: "TensorFlow", icon: FaPython },
  { label: "React", icon: FaReact },
  { label: "FastAPI", icon: FaServer },
  { label: "AWS", icon: FaAws },
  { label: "Docker", icon: FaDocker },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center justify-center"
      aria-label="Introduction"
    >
      <InteractiveHeroWrapper className="min-h-[100dvh] w-full">
        <AuroraBackground />
        <GlowingGrid />
        <NeuralNetwork />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-4 pb-24 pt-28 sm:px-6 sm:pt-32 lg:grid lg:grid-cols-[1fr_auto_auto] lg:items-center lg:gap-12 lg:px-8 lg:pb-28">
          <ProfileAvatar
            src={siteConfig.profile.image}
            alt={`${siteConfig.name} profile photo`}
            initials={siteConfig.profile.initials}
            className="order-1 lg:order-2"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 flex w-full flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
            style={{
              transform:
                "translate3d(calc(var(--parallax-x) * 8px), calc(var(--parallax-y) * 8px), 0)",
            }}
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-cyan-300 backdrop-blur-sm sm:px-4 sm:text-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              Available for opportunities
            </motion.p>

            <motion.h1
              custom={0.1}
              variants={fadeUp}
              className="gradient-heading text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight"
            >
              {siteConfig.name}
            </motion.h1>

            <motion.p
              custom={0.22}
              variants={fadeUp}
              className="mt-4 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg md:text-xl"
            >
              {siteConfig.role}
            </motion.p>

            <motion.p
              custom={0.28}
              variants={fadeUp}
              className="mt-4 max-w-[600px] text-sm leading-8 text-zinc-400 sm:text-[1rem]"
            >
              {siteConfig.intro}
            </motion.p>

            <motion.div
              custom={0.34}
              variants={fadeUp}
              className="mt-5 min-h-[2rem] w-full max-w-xl sm:min-h-[2.25rem]"
            >
              <TypingText
                texts={siteConfig.taglines}
                className="text-center lg:text-left"
              />
            </motion.div>

            <motion.div
              custom={0.46}
              variants={fadeUp}
              className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
            >
              <GlassButton
                href={siteConfig.links.resume}
                external
                icon={<FaFileAlt className="h-4 w-4 text-cyan-400" />}
                className="sm:min-w-[140px]"
              >
                Resume
              </GlassButton>
              <GlassButton
                href={siteConfig.links.github}
                external
                icon={<FaGithub className="h-4 w-4 text-zinc-300" />}
                className="sm:min-w-[140px]"
              >
                GitHub
              </GlassButton>
              <GlassButton
                href={siteConfig.links.linkedin}
                external
                icon={<FaLinkedin className="h-4 w-4 text-blue-400" />}
                className="sm:min-w-[140px]"
              >
                LinkedIn
              </GlassButton>
            </motion.div>

            <motion.div
              custom={0.56}
              variants={fadeUp}
              className="mt-6 flex flex-wrap justify-center gap-2.5 lg:justify-start"
            >
              {techBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <motion.span
                    key={badge.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    whileHover={{ y: -2, scale: 1.02, boxShadow: "0 0 18px rgba(34,211,238,0.16)" }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-sm text-zinc-200 backdrop-blur-md"
                  >
                    <Icon className="h-3.5 w-3.5 text-cyan-300" />
                    {badge.label}
                  </motion.span>
                );
              })}
            </motion.div>
          </motion.div>

          <div className="order-3 flex justify-center lg:order-3">
            <FloatingGlassCard />
          </div>
        </div>

        <ScrollIndicator />
      </InteractiveHeroWrapper>
    </section>
  );
}
