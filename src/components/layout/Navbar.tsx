"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-4 py-4 transition-all duration-300 sm:px-6 lg:px-8",
          scrolled
            ? "mt-3 rounded-2xl border border-white/10 bg-zinc-950/70 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "bg-transparent",
        )}
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-white sm:text-base"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-xs font-bold text-zinc-950"
            aria-hidden="true"
          >
            PS
          </span>
          <span className="hidden sm:inline">{siteConfig.name.split(" ").pop()}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "") || (item.href === "#github" && activeSection === "github");
            return (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "relative rounded-lg px-4 py-2 text-sm transition-all duration-300",
                  isActive ? "text-white" : "text-zinc-400 hover:text-white",
                )}
              >
                <span className="relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-cyan-400 after:to-violet-500 after:transition-transform after:duration-300 hover:after:scale-x-100">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white backdrop-blur-md md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <HiOutlineX className="h-5 w-5" />
          ) : (
            <HiOutlineMenu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="mx-4 mt-2 rounded-2xl border border-white/10 bg-zinc-950/90 p-4 backdrop-blur-xl md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mt-1 block rounded-lg px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
