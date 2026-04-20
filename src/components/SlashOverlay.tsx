"use client";

import { motion, AnimatePresence } from "framer-motion";

interface SlashOverlayProps {
  isVisible: boolean;
}

export const SlashOverlay = ({ isVisible }: SlashOverlayProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[200] pointer-events-none flex items-center justify-center overflow-hidden">
          {/* Top Half */}
          <motion.div
            initial={{ x: "-100%", skewX: -45 }}
            animate={{ x: "200%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "circIn" }}
            className="absolute top-0 w-[200%] h-1/2 bg-manga-ink border-b-[20px] border-manga-paper z-[201] transition-colors duration-300"
          />
          {/* Bottom Half */}
          <motion.div
            initial={{ x: "100%", skewX: -45 }}
            animate={{ x: "-200%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "circIn" }}
            className="absolute bottom-0 w-[200%] h-1/2 bg-manga-ink border-t-[20px] border-manga-paper z-[201] transition-colors duration-300"
          />
          
          {/* Central Flash */}
          <motion.div
            initial={{ scaleY: 0, opacity: 1 }}
            animate={{ scaleY: 30, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="absolute w-full h-[10px] bg-manga-paper z-[202] transition-colors"
          />
        </div>
      )}
    </AnimatePresence>
  );
};
