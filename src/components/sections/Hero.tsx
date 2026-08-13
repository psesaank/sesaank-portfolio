"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaAws,
  FaBrain,
  FaCloud,
  FaDatabase,
  FaDocker,
  FaFileAlt,
  FaGithub,
  FaLinkedin,
  FaMicrochip,
  FaPython,
  FaRobot,
} from "react-icons/fa";
import { FiPause, FiPlay, FiVolume2, FiVolumeX } from "react-icons/fi";
import { GlassButton } from "@/components/ui/GlassButton";
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
  { label: "Artificial Intelligence", icon: FaBrain },
  { label: "Machine Learning", icon: FaRobot },
  { label: "Deep Learning", icon: FaMicrochip },
  { label: "Generative AI", icon: FaBrain },
  { label: "TensorFlow", icon: FaMicrochip },
  { label: "PyTorch", icon: FaMicrochip },
  { label: "OpenCV", icon: FaMicrochip },
  { label: "SQL", icon: FaDatabase },
  { label: "MongoDB", icon: FaDatabase },
  { label: "AWS", icon: FaAws },
  { label: "Azure", icon: FaCloud },
  { label: "Docker", icon: FaDocker },
  { label: "GitHub", icon: FaGithub },
];

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [muted, setMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(prefersReducedMotion);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!videoRef.current) return;

    videoRef.current.muted = true;
    if (mediaQuery.matches) {
      videoRef.current.pause();
      return;
    }

    const playPromise = videoRef.current.play();
    if (playPromise) {
      playPromise.catch(() => setIsPaused(true));
    }
  }, []);

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    const nextMuted = !muted;
    videoRef.current.muted = nextMuted;
    setMuted(nextMuted);
  };

  const handlePlaybackToggle = () => {
    if (!videoRef.current) return;

    if (isPaused) {
      const playPromise = videoRef.current.play();
      if (playPromise) {
        playPromise.catch(() => undefined);
      }
      setIsPaused(false);
      return;
    }

    videoRef.current.pause();
    setIsPaused(true);
  };

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100dvh] overflow-hidden bg-[#050505]"
      aria-label="Introduction"
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/sesaank-intro.mp4"
          autoPlay={!prefersReducedMotion}
          muted={muted}
          playsInline
          loop
          preload="metadata"
          className="h-full w-full object-cover"
          aria-label="Potharlanka Sesaank introduction video"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,26,10,0.18),transparent_30%),linear-gradient(90deg,rgba(5,5,5,0.82)_0%,rgba(5,5,5,0.42)_28%,rgba(5,5,5,0.18)_52%,rgba(5,5,5,0.72)_100%)]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-content text-left"
      >
        <motion.p
          custom={0}
          variants={fadeUp}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ff1a0a]/30 bg-[#050505]/40 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ffb3aa] backdrop-blur-md"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff1a0a] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#ff1a0a]" />
          </span>
          AI & Data Science Portfolio
        </motion.p>

        <motion.h1
          custom={0.1}
          variants={fadeUp}
          className="gradient-heading text-[clamp(2.6rem,5vw,5.4rem)] font-black leading-[0.92] tracking-[-0.05em]"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          custom={0.18}
          variants={fadeUp}
          className="mt-4 text-base font-medium uppercase tracking-[0.14em] text-[#f5f5f5] opacity-90 sm:text-lg"
        >
          Artificial Intelligence & Data Science Student
        </motion.p>

        <motion.div
          custom={0.24}
          variants={fadeUp}
          className="mt-7 w-full max-w-lg"
        >
          <TypingText texts={siteConfig.taglines} className="text-lg font-semibold text-white sm:text-xl" />
        </motion.div>

        <motion.div
          custom={0.32}
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <GlassButton href={siteConfig.links.github} external icon={<FaGithub className="h-4 w-4 text-white" />} className="sm:min-w-[128px] border-white/10 bg-white/[0.04] text-white hover:border-[#ff1a0a]/40 hover:bg-[#ff1a0a]/10">
            GitHub
          </GlassButton>
          <GlassButton href={siteConfig.links.linkedin} external icon={<FaLinkedin className="h-4 w-4 text-[#ffb3aa]" />} className="sm:min-w-[128px] border-white/10 bg-white/[0.04] text-white hover:border-[#ff1a0a]/40 hover:bg-[#ff1a0a]/10">
            LinkedIn
          </GlassButton>
          <GlassButton href={siteConfig.links.resume} external icon={<FaFileAlt className="h-4 w-4 text-[#ffb3aa]" />} className="sm:min-w-[128px] border-[#ff1a0a]/30 bg-[#ff1a0a]/10 text-white hover:border-[#ff3b30]/60 hover:bg-[#ff1a0a]/20">
            Resume
          </GlassButton>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 sm:bottom-8 sm:right-8">
        <button
          type="button"
          onClick={handleMuteToggle}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white shadow-lg shadow-black/30 backdrop-blur-md transition hover:border-[#ff3b30]/60 hover:text-[#ffb3aa] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1a0a]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? <FiVolumeX className="h-4 w-4" /> : <FiVolume2 className="h-4 w-4" />}
        </button>
        <button
          type="button"
          onClick={handlePlaybackToggle}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white shadow-lg shadow-black/30 backdrop-blur-md transition hover:border-[#ff3b30]/60 hover:text-[#ffb3aa] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1a0a]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          aria-label={isPaused ? "Play video" : "Pause video"}
        >
          {isPaused ? <FiPlay className="h-4 w-4" /> : <FiPause className="h-4 w-4" />}
        </button>
      </div>

      <ScrollIndicator />
    </section>
  );
}
