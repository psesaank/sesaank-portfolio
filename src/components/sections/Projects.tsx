"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { GlowingGrid } from "@/components/effects/GlowingGrid";
import { NeuralNetwork } from "@/components/effects/NeuralNetwork";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "Face Recognition Attendance System",
    description:
      "An AI-powered attendance system using Python, OpenCV, DeepFace, Tkinter, and SQLite to automatically recognize students and record attendance.",
    technologies: ["Python", "OpenCV", "DeepFace", "Tkinter", "SQLite"],
    githubUrl: "https://github.com/psesaank/FaceRecognitionAttendance",
    category: "AI",
  },
  {
    title: "Student Management System",
    description:
      "A Java console-based application using JDBC and MySQL to manage student records with complete CRUD functionality.",
    technologies: ["Java", "JDBC", "MySQL"],
    githubUrl: "https://github.com/psesaank/StudentManagementSystem",
    category: "Software",
  },
  {
    title: "100 Days Challenge",
    description:
      "A collection of coding challenges documenting my programming journey and continuous learning.",
    technologies: ["Python", "Problem Solving", "DSA"],
    githubUrl: "https://github.com/psesaank/100-Days_challenge",
    category: "Learning",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-28 lg:py-32"
      aria-labelledby="projects-heading"
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
            Featured Projects
          </p>
          <h2
            id="projects-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.6rem]"
          >
            Building practical solutions with AI, software engineering, and data-driven technologies.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} iconVariant={project.title === "Face Recognition Attendance System" ? "face" : project.title === "Student Management System" ? "student" : "challenge"} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex justify-center"
        >
          <motion.a
            href="https://github.com/psesaank"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(255,26,10,0.12)] backdrop-blur-md transition-all duration-300 hover:border-[#ff1a0a]/30 hover:bg-[#ff1a0a]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1a0a]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          >
            <FaGithub className="h-4 w-4 text-[#ffb3aa]" />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
