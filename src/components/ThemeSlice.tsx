"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ThemeSliceProps {
  isActive: boolean;
}

export const ThemeSlice = ({ isActive }: ThemeSliceProps) => {
  return (
    <AnimatePresence>
      {isActive && (
        <div className="fixed inset-0 z-[1000] pointer-events-none overflow-hidden">
          {/* Main Diagonal Slash Line */}
          <motion.div
            initial={{ height: 0, opacity: 1, skewY: -45 }}
            animate={{ 
              height: ["0%", "200%", "0%"],
              y: ["-50%", "50%", "150%"]
            }}
            transition={{ duration: 0.6, ease: "circIn" }}
            className="absolute top-0 left-[-50%] w-[200%] bg-manga-ink z-[1002]"
            style={{ transformOrigin: "center" }}
          />

          {/* Top-Right Panel */}
          <motion.div
            initial={{ x: "0%", y: "0%" }}
            animate={{ 
              x: ["0%", "10%", "0%"],
              y: ["0%", "-10%", "0%"]
            }}
            transition={{ duration: 0.4, ease: "backOut" }}
            className="absolute top-0 right-0 w-[150%] h-[150%] bg-manga-ink/10"
            style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
          />

          {/* Bottom-Left Panel */}
          <motion.div
            initial={{ x: "0%", y: "0%" }}
            animate={{ 
              x: ["0%", "-10%", "0%"],
              y: ["0%", "10%", "0%"]
            }}
            transition={{ duration: 0.4, ease: "backOut" }}
            className="absolute top-0 right-0 w-[150%] h-[150%] bg-manga-ink/10"
            style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
          />

          {/* Flash Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.3, times: [0, 0.5, 1] }}
            className="absolute inset-0 bg-manga-paper z-[1001]"
          />
          
          {/* Action Onomatopoeia */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
            animate={{ 
              scale: [0.5, 1.5, 1],
              opacity: [0, 1, 0],
              x: ["-10%", "0%", "10%"]
            }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute inset-0 flex items-center justify-center z-[1003]"
          >
            <span className="text-9xl font-black italic text-manga-ink drop-shadow-[10px_10px_0px_var(--manga-paper)] uppercase">
              SLASH!
            </span>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
