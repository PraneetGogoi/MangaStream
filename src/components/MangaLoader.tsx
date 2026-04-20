"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const MangaLoader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.8, ease: [0.9, 0, 0.1, 1] }
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-manga-paper overflow-hidden pointer-events-none transition-colors duration-300"
          >
            {/* Halftone Flickering Overlay */}
            <motion.div 
              animate={{ opacity: [0.1, 0.15, 0.1] }}
              transition={{ duration: 0.1, repeat: Infinity }}
              className="absolute inset-0 halftone-bg"
            />

            {/* Manga Grid Lines Overlay */}
            <div className="absolute inset-0 manga-grid-line opacity-5" />

            {/* Scanning Beam Micro-Animation */}
            <motion.div 
              initial={{ y: "-100%" }}
              animate={{ y: "100%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 z-10 w-full h-1/4 bg-gradient-to-b from-transparent via-manga-ink/5 to-transparent pointer-events-none"
            />

            {/* Slidng Panels */}
            <div className="absolute inset-0 flex flex-wrap">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="w-1/2 h-1/2 border-r-4 border-b-4 border-manga-ink bg-manga-paper flex items-center justify-center overflow-hidden relative transition-colors duration-300"
              >
                <motion.img 
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 0.5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  src="/1.jpg" 
                  alt="Loading panel 1"
                  className="w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 transition-all"
                />
                <div className="absolute inset-0 bg-manga-ink/10 transition-colors" />
              </motion.div>
              <motion.div 
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "circOut" }}
                className="w-1/2 h-1/2 border-b-4 border-manga-ink bg-manga-paper flex items-center justify-center overflow-hidden relative transition-colors duration-300"
              >
                <motion.img 
                  animate={{ scale: [1, 1.05, 1], rotate: [0, -0.5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  src="/2.jpg" 
                  alt="Loading panel 2"
                  className="w-full h-full object-cover grayscale opacity-40 transition-all"
                />
                <div className="absolute inset-0 bg-manga-ink/10 transition-colors" />
              </motion.div>
              <motion.div 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "circOut" }}
                className="w-1/2 h-1/2 border-r-4 border-manga-ink bg-manga-paper flex items-center justify-center overflow-hidden relative transition-colors duration-300"
              >
                <motion.img 
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 0.3, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  src="/3.jpg" 
                  alt="Loading panel 3"
                  className="w-full h-full object-cover grayscale opacity-40 transition-all"
                />
                <div className="absolute inset-0 bg-manga-ink/10 transition-colors" />
              </motion.div>
              <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "circOut" }}
                className="w-1/2 h-1/2 bg-manga-paper flex items-center justify-center overflow-hidden relative transition-colors duration-300"
              >
                <motion.img 
                  animate={{ scale: [1, 1.05, 1], rotate: [0, -0.3, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                  src="/4.jpg" 
                  alt="Loading panel 4"
                  className="w-full h-full object-cover grayscale opacity-40 transition-all"
                />
                <div className="absolute inset-0 bg-manga-ink/10 transition-colors" />
              </motion.div>
            </div>

            {/* Central Onomatopoeia */}
            <div className="relative z-20">
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ 
                  scale: [0, 1.2, 1],
                  rotate: [-20, 5, -2],
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4,
                  type: "spring",
                  stiffness: 260,
                  damping: 20 
                }}
                className="flex flex-col items-center"
              >
                {/* Kanji: ドドド (Do Do Do) */}
                <div className="flex gap-4 mb-4 relative">
                  {["ド", "ド", "ド"].map((kanji, i) => (
                    <div key={i} className="relative">
                      <motion.span
                        animate={{ 
                          y: [0, -15, 0],
                          scale: [1, 1.15, 1]
                        }}
                        transition={{ 
                          duration: 0.25, 
                          repeat: Infinity, 
                          delay: i * 0.08 
                        }}
                        className="text-9xl font-black text-manga-ink drop-shadow-[8px_8px_0px_var(--manga-paper)] block transition-colors"
                        style={{ 
                          WebkitTextStroke: "4px var(--manga-ink)",
                          textShadow: "8px 8px 0px var(--manga-shadow-glow)"
                        }}
                      >
                        {kanji}
                      </motion.span>
                      {/* Impact Spark Lines */}
                      <motion.div 
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0.5, 1.5, 1]
                        }}
                        transition={{ 
                          duration: 0.25, 
                          repeat: Infinity, 
                          delay: i * 0.08 
                        }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      >
                        {[0, 90, 180, 270].map((angle) => (
                          <div 
                            key={angle}
                            className="absolute w-1 h-8 bg-manga-ink"
                            style={{ 
                              transform: `rotate(${angle}deg) translateY(-80px)`,
                              boxShadow: "0 0 10px var(--manga-shadow-glow)"
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    x: [-1, 1, -1, 1, 0]
                  }}
                  transition={{ 
                    delay: 1,
                    x: { repeat: Infinity, duration: 0.1, delay: 1.5 }
                  }}
                  className="bg-manga-ink text-manga-paper px-6 py-2 text-2xl font-black italic uppercase tracking-tighter shadow-[8px_8px_0px_0px_var(--manga-shadow-glow)] transition-colors"
                >
                  Discovering Masterpieces...
                </motion.div>
              </motion.div>
            </div>

            {/* Minimalist Ink-Flow Progress Bar */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 h-1 bg-manga-ink/10 overflow-hidden transition-colors">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2.2, ease: "linear" }}
                className="w-full h-full bg-manga-ink shadow-[0_0_10px_var(--manga-shadow-glow)] transition-colors"
              />
            </div>

            {/* Exit Ink Splatter Effect (revealed through the opacity fade) */}
            <motion.div 
              initial={{ scale: 0 }}
              exit={{ 
                scale: 20,
                transition: { duration: 0.8, ease: "circIn" }
              }}
              className="absolute z-20 w-32 h-32 bg-manga-ink rounded-full mix-blend-difference transition-colors"
            />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
