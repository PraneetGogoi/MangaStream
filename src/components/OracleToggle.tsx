"use client";

import { motion } from "framer-motion";
import { Bot, Terminal } from "lucide-react";

interface OracleToggleProps {
  isOpen: boolean;
  toggle: () => void;
}

export const OracleToggle = ({ isOpen, toggle }: OracleToggleProps) => {
  return (
    <motion.button
      onClick={toggle}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0px 0px 25px rgba(255, 0, 0, 0.4)"
      }}
      whileTap={{ scale: 0.9 }}
      className={`fixed bottom-32 right-8 z-[200] p-4 border-[4px] border-manga-ink shadow-[8px_8px_0px_0px_var(--manga-shadow-color)] transition-all flex items-center justify-center group ${
        isOpen ? 'bg-red-500 text-white' : 'bg-manga-paper text-manga-ink'
      }`}
      title="Consult the Oracle"
    >
      <div className="relative w-8 h-8 flex items-center justify-center">
        {isOpen ? (
          <Terminal className="w-8 h-8 animate-pulse" />
        ) : (
          <Bot className="w-8 h-8 group-hover:rotate-12 transition-transform" />
        )}
      </div>

      {/* Label (Mobile hidden) */}
      <div className="ml-4 h-4 overflow-hidden hidden sm:block">
        <span className="font-black text-xs uppercase tracking-widest leading-4">
          {isOpen ? 'CLOSE' : 'FLUFF'}
        </span>
      </div>

      {/* Decorative Scanline inside button */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-1 w-full animate-scanline pointer-events-none opacity-20" />
    </motion.button>
  );
};
