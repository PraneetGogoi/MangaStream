"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeToggle = ({ isDarkMode, toggleTheme }: ThemeToggleProps) => {
  return (
    <motion.button
      onClick={toggleTheme}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.1, 
        rotate: isDarkMode ? -20 : 20,
        boxShadow: "0px 0px 20px var(--manga-shadow-glow)"
      }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[200] p-4 bg-manga-ink text-manga-paper border-[4px] border-manga-ink shadow-[8px_8px_0px_0px_var(--manga-shadow-color)] hover:shadow-none transition-all flex items-center justify-center group"
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="relative w-8 h-8 flex items-center justify-center">
        {/* Switch Blade Animation */}
        <motion.div
          animate={{ 
            rotate: isDarkMode ? 0 : 180,
            opacity: isDarkMode ? 1 : 0,
            scale: isDarkMode ? 1 : 0.5
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-8 h-8 fill-manga-paper" />
        </motion.div>
        
        <motion.div
          animate={{ 
            rotate: isDarkMode ? -180 : 0,
            opacity: isDarkMode ? 0 : 1,
            scale: isDarkMode ? 0.5 : 1
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-8 h-8 fill-manga-paper" />
        </motion.div>
      </div>

      {/* Tactile Labels */}
      <div className="ml-4 h-4 overflow-hidden hidden sm:block">
        <motion.div
          animate={{ y: isDarkMode ? "-50%" : "0%" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex flex-col text-left font-black text-xs uppercase tracking-widest leading-4"
        >
          <span className="h-4">Light</span>
          <span className="h-4">Dark</span>
        </motion.div>
      </div>

      {/* Decorative Glint */}
      <motion.div 
        animate={{ 
          x: ["-100%", "200%"],
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
        className="absolute inset-0 bg-white/20 skew-x-[-20deg] pointer-events-none"
      />
    </motion.button>
  );
};
