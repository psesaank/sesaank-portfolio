"use client";

import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  className?: string;
  href?: string;
  label?: string;
}

export function ScrollIndicator({ className, href = "#about", label = "Scroll to explore" }: ScrollIndicatorProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className={cn(
        "absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 rounded-full px-4 py-3 text-center text-zinc-300 transition-colors duration-300 hover:text-white sm:bottom-8",
        className,
      )}
      aria-label={label}
    >
      <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#a3a3a3] sm:text-[11px]">
        {label}
      </span>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 bg-white/[0.03] p-1.5 backdrop-blur-sm"
      >
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiChevronDown className="h-4 w-4 text-[#ffb3aa]" />
        </motion.div>
      </motion.div>
    </motion.a>
  );
}
