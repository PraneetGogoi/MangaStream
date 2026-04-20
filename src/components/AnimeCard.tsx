"use client";

import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { BookOpen, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { Anime } from "@/data/mockAnime";
import { PreviewNode } from "./PreviewNode";
import { OpeningSelector } from "./OpeningSelector";

interface AnimeCardProps {
  anime: Anime;
  onOpenVideo: (anime: Anime, videoUrl: string, videoLabel: string) => void;
  onOpenManga: (anime: Anime) => void;
}

const containerVariants = {
  hover: {
    rotateY: 180,
    y: -12,
    scale: 1.02,
    transition: {
      rotateY: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: "easeInOut",
      },
      scale: { duration: 0.4 },
    },
  },
  initial: {
    rotateY: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

export const AnimeCard = ({ anime, onOpenVideo, onOpenManga }: AnimeCardProps) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpeningSelectorOpen, setIsOpeningSelectorOpen] = useState(false);

  // Motion values for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleInteraction = () => {
    if (isMobile) {
      if (!isHovered) {
        setIsHovered(true);
      } else {
        onOpenVideo(anime, anime.trailerUrl, "OFFICIAL TRAILER");
      }
    }
  };

  // Reset selector when card unflipped
  useEffect(() => {
    if (!isHovered) {
      setIsOpeningSelectorOpen(false);
    }
  }, [isHovered]);

  const getAngle = (index: number, total: number) => {
    if (total === 3) return [150, 30, 270][index];
    return (360 / total) * index;
  };

  return (
    <div 
      className="relative w-full aspect-[2/3] perspective-[2000px] pointer-events-auto"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => {
        if (!isMobile) {
          setIsHovered(false);
          mouseX.set(0);
          mouseY.set(0);
        }
      }}
      onMouseMove={(e) => {
        if (isMobile || isHovered) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x * 15); 
        mouseY.set(y * -15);
      }}
      onClick={handleInteraction}
    >
      <motion.div
        style={{ 
          rotateX: isHovered ? 0 : springY, 
          rotateY: isHovered ? 0 : springX,
          transformStyle: "preserve-3d"
        }}
        className="w-full h-full relative"
      >
        {/* Radial Previews (Always face the user, revealed when flipped) */}
        <div className="absolute inset-0 pointer-events-none z-30 overflow-visible">
          <AnimatePresence>
            {isHovered && anime.previews.map((previewUrl, idx) => (
              <PreviewNode
                key={`${anime.id}-preview-${idx}`}
                url={previewUrl}
                posterImage={anime.posterImage}
                angle={getAngle(idx, anime.previews.length)}
                radius={window.innerWidth < 640 ? 120 : 180}
                delayStart={idx * 100 + 200} // More staggered feel
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Flip Onomatopoeia (ZIP/FLIP) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ scale: 0, rotate: -20, opacity: 0 }}
              animate={{ scale: 1, rotate: 10, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute -top-12 -right-8 z-50 text-5xl font-black text-manga-ink select-none pointer-events-none"
              style={{ WebkitTextStroke: "2px var(--manga-paper)" }}
            >
              ZIP!
            </motion.div>
          )}
        </AnimatePresence>

      <motion.div
        className="w-full h-full relative cursor-pointer group"
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        variants={containerVariants}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT FACE - Manga Panel Style */}
        <div 
          className="absolute inset-0 w-full h-full rounded-sm border-[6px] border-manga-ink bg-manga-paper shadow-[12px_12px_0px_0px_var(--manga-shadow-color)] backface-hidden flex flex-col transition-colors duration-300"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
            <div className="flex-1 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700 delay-500 group-hover:delay-0 ease-in-out">
              <img
                src={anime.posterImage}
                alt={anime.title}
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              
              {/* Interaction Glint */}
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-manga-paper/20 to-transparent skew-x-[-20deg] pointer-events-none"
              />

              {/* Ink drip/gradient effect */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-manga-ink via-manga-ink/40 to-transparent opacity-80" />
              
              <motion.div 
                animate={isHovered ? { rotate: [10, 15, 10] } : {}}
                className="absolute top-2 right-2 bg-manga-paper border-2 border-manga-ink px-2 py-0.5 text-[10px] font-black uppercase rotate-[10deg] shadow-[2px_2px_0px_0px_var(--manga-shadow-color)] transition-colors"
              >
                Vol. 01
              </motion.div>
            </div>
          
          <div className="p-3 bg-manga-paper border-t-[4px] border-manga-ink transition-colors">
            <h3 className="text-manga-ink font-black text-xl leading-tight uppercase italic tracking-tighter transition-colors">
              {anime.title}
            </h3>
          </div>
        </div>

        {/* BACK FACE - Manga Content Style */}
        <div 
          className="absolute inset-0 w-full h-full rounded-sm border-[6px] border-manga-ink p-6 bg-manga-paper shadow-[-12px_12px_0px_0px_var(--manga-shadow-color)] backface-hidden flex flex-col transition-colors duration-300"
          style={{ 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Halftone texture background */}
          <div className="absolute inset-0 halftone pointer-events-none opacity-20" />

          <div className="relative z-10 h-full flex flex-col">
            <motion.h3 
              initial={{ x: -20, opacity: 0 }}
              animate={isHovered ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              className="text-manga-ink font-black text-2xl mb-4 uppercase italic border-b-4 border-manga-ink pb-2"
            >
              SYNOPSIS:
            </motion.h3>
            
            <div className="flex-1 overflow-y-auto mb-4 custom-scrollbar">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 }}
                className="text-manga-ink font-bold text-base leading-snug uppercase transition-colors"
              >
                {anime.description}
              </motion.p>
            </div>

            <motion.div 
              initial="hidden"
              animate={isHovered ? "show" : "hidden"}
              variants={{
                show: { transition: { staggerChildren: 0.05, delayChildren: 0.4 } }
              }}
              className="flex flex-wrap gap-2 mb-6 uppercase italic"
            >
              {anime.categories.map((cat) => (
                <motion.span 
                  key={cat} 
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    show: { opacity: 1, scale: 1 }
                  }}
                  className="px-2 py-1 bg-manga-ink text-manga-paper text-[10px] font-black transition-colors"
                >
                  #{cat}
                </motion.span>
              ))}
            </motion.div>

            <div className="flex flex-col gap-3">
              <motion.button 
                whileHover={{ y: -4, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenVideo(anime, anime.trailerUrl, "OFFICIAL TRAILER");
                }}
                className="w-full py-3 bg-manga-ink text-manga-paper border-[4px] border-manga-ink font-black uppercase transition-colors shadow-[6px_6px_0px_1px_var(--manga-shadow-color)]"
              >
                WATCH TRAILER
              </motion.button>
              
              <motion.button 
                whileHover={{ y: -4, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpeningSelectorOpen(true);
                }}
                className="w-full py-3 bg-manga-paper text-manga-ink border-[4px] border-manga-ink font-black uppercase transition-colors shadow-[6px_6px_0px_0px_var(--manga-shadow-color)]"
              >
                WATCH OPENING
              </motion.button>

              {anime.characters && anime.characters.length > 0 && (
                <motion.button 
                  whileHover={{ y: -4, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/archive/${anime.id}`);
                  }}
                  className="w-full py-3 bg-manga-ink text-manga-paper border-[4px] border-manga-ink font-black uppercase transition-colors shadow-[6px_6px_0px_0px_var(--manga-shadow-color)] relative overflow-hidden group/archive"
                >
                  <div className="absolute inset-0 bg-manga-paper translate-x-full group-hover/archive:translate-x-0 transition-transform duration-300" />
                  <span className="relative z-10 group-hover/archive:text-manga-ink transition-colors flex items-center justify-center gap-2">
                    <User className="w-5 h-5" />
                    THE ARCHIVE
                  </span>
                </motion.button>
              )}
            </div>

            <AnimatePresence>
              {isOpeningSelectorOpen && (
                <OpeningSelector
                  openings={anime.openings}
                  onBack={() => setIsOpeningSelectorOpen(false)}
                  onSelect={(url) => {
                    onOpenVideo(anime, url, "OPENING THEME");
                    setIsOpeningSelectorOpen(false);
                  }}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
    </div>
  );
};
