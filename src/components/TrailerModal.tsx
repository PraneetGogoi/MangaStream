"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Anime } from "@/data/mockAnime";

interface TrailerModalProps {
  anime: Anime;
  videoUrl: string;
  videoLabel: string;
  onClose: () => void;
}

export const TrailerModal = ({ anime, videoUrl, videoLabel, onClose }: TrailerModalProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Manga Speed Line Background Backdrop */}
      <div 
        className="absolute inset-0 bg-manga-paper transition-colors duration-300"
        onClick={onClose}
      >
        <div className="absolute inset-0 halftone opacity-30" />
        {/* Simple speed line radial gradient substitute */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--manga-ink)_150%)] opacity-20" />
      </div>

      <motion.div
        layoutId={`card-image-${anime.id}`}
        initial={{ scale: 0.8, rotate: -5 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0.8, rotate: 5 }}
        className="relative w-full max-w-5xl bg-manga-paper border-[10px] border-manga-ink shadow-[20px_20px_0px_0px_var(--manga-shadow-color)] flex flex-col sm:flex-row overflow-hidden transition-colors duration-300"
      >
        {/* Interaction Glint */}
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
          className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-manga-ink/[0.03] to-transparent skew-x-[-20deg] pointer-events-none"
        />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-manga-ink text-manga-paper border-[3px] border-manga-ink hover:bg-manga-paper hover:text-manga-ink transition-all"
        >
          <X className="w-8 h-8 font-black" />
        </button>

        {/* Video Area */}
        <div className="flex-[1.5] aspect-video bg-black border-r-[6px] border-manga-ink relative overflow-hidden group transition-colors duration-300">
          <iframe
            src={`${videoUrl}&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
            title={anime.title}
            className="w-full h-full relative z-10"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
          {/* Subtle Scanning Beam for Video Frame */}
          <motion.div 
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-manga-ink/[0.05] to-transparent pointer-events-none"
          />
        </div>

        {/* Info Area */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex-1 p-8 bg-manga-paper relative flex flex-col justify-center transition-colors duration-300"
        >
          <div className="absolute top-0 left-0 w-full h-full halftone opacity-5 pointer-events-none" />
          
          <motion.h2 
            variants={itemVariants}
            animate={{ scale: [1, 1.01, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl font-black mb-1 uppercase italic leading-none relative z-10 text-manga-ink"
          >
            {anime.title}
          </motion.h2>

          <motion.div 
            variants={itemVariants}
            className="bg-manga-ink text-manga-paper inline-block px-2 py-0.5 text-xs font-black uppercase mb-6 rotate-[-1deg] self-start transition-colors"
          >
            {videoLabel}
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5, x: 2, rotate: 0, boxShadow: "12px 12px 0px 0px var(--manga-shadow-color)" }}
            animate={videoLabel === "OPENING THEME" ? { 
              scale: [1, 1.01, 1],
              boxShadow: [
                "12px 12px 0px 0px var(--manga-shadow-color)",
                "14px 14px 0px 0px var(--manga-shadow-glow)",
                "12px 12px 0px 0px var(--manga-shadow-color)"
              ]
            } : {}}
            transition={{ 
              default: { type: "spring", stiffness: 400, damping: 10 },
              boxShadow: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative p-6 border-[4px] border-manga-ink bg-manga-paper shadow-[8px_8px_0px_0px_var(--manga-shadow-color)] rotate-[-1deg] cursor-default overflow-hidden transition-colors duration-300"
          >
            {/* Rhythm Waves for Opening themes */}
            {videoLabel === "OPENING THEME" && (
              <div className="absolute inset-0 pointer-events-none flex items-end justify-center gap-1 opacity-10">
                {[...Array(20)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: ["10%", `${20 + Math.random() * 60}%`, "10%"] }}
                    transition={{ duration: 0.5 + Math.random() * 0.5, repeat: Infinity, delay: i * 0.05 }}
                    className="w-1 bg-manga-ink"
                  />
                ))}
              </div>
            )}
            <p className="text-manga-ink font-black uppercase text-base leading-tight relative z-10 transition-colors">
              {anime.description}
            </p>
          </motion.div>

          <motion.div 
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.05 } }
            }}
            className="mt-8 flex flex-wrap gap-2 uppercase tracking-tighter"
          >
            {anime.categories.map((cat, idx) => (
              <motion.span 
                key={cat} 
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  show: { opacity: 1, scale: 1 }
                }}
                animate={videoLabel === "OPENING THEME" ? {
                  rotate: [idx % 2 === 0 ? -2 : 2, idx % 2 === 0 ? 2 : -2]
                } : {}}
                transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
                className="px-3 py-1 bg-manga-ink text-manga-paper font-black text-xs italic transition-colors"
              >
                #{cat}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              x: videoLabel === "OPENING THEME" ? [0, 5, 0] : 0
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-4 right-6 text-2xl font-black uppercase italic text-manga-ink"
          >
            {videoLabel === "OPENING THEME" ? "NOW PLAYING" : "End Chapter"}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
