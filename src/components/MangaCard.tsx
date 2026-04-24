"use client";

import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect, useRef, memo } from "react";
import { BookOpen, User, Hash, Star, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSession } from "@/components/AuthProvider";
import { updateMangaReadingStatus } from "@/app/manga-actions";
import { Activity, Target } from "lucide-react";

interface MangaCardProps {
  manga: any;
  onOpenManga: (manga: any) => void;
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

export const MangaCard = memo(({ manga, onOpenManga }: MangaCardProps) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { data: session } = useSession();

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
      onClick={() => isMobile && (isHovered ? onOpenManga(manga) : setIsHovered(true))}
    >
      <motion.div
        style={{ 
          rotateX: isHovered ? 0 : springY, 
          rotateY: isHovered ? 0 : springX,
          transformStyle: "preserve-3d"
        }}
        className="w-full h-full relative"
      >
        {/* Flip Onomatopoeia (FWIP!) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ scale: 0, rotate: -20, opacity: 0 }}
              animate={{ scale: 1, rotate: 10, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute -top-12 -right-8 z-50 text-5xl font-black text-manga-ink select-none pointer-events-none"
              style={{ WebkitTextStroke: "2px var(--manga-paper)" }}
            >
              FWIP!
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
        {/* FRONT FACE */}
        <div 
          className="absolute inset-0 w-full h-full rounded-sm border-[6px] border-manga-ink bg-manga-paper shadow-[12px_12px_0px_0px_var(--manga-shadow-color)] backface-hidden flex flex-col transition-colors duration-300"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
            <div className="flex-1 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
              <img 
                src={manga.coverImage} 
                alt={manga.title}
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 min-h-[400px]"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/400x600?text=RECORD+NOT+FOUND";
                }}
              />
              
              {/* Halftone Overlay */}
              <div className="absolute inset-0 halftone opacity-10 pointer-events-none" />

              {/* Ink Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-manga-ink via-manga-ink/20 to-transparent opacity-80" />
              
              {/* Chapter Badge */}
              <div className="absolute top-4 right-4 bg-manga-paper border-2 border-manga-ink px-3 py-1 text-xs font-black uppercase rotate-[-5deg] shadow-[4px_4px_0px_0px_var(--manga-shadow-color)]">
                {manga.chapters?.length || 0} CHS
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 left-4 bg-manga-ink text-manga-paper px-2 py-0.5 text-[10px] font-black uppercase tracking-tighter">
                {manga.status}
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <h3 className="text-white font-black text-2xl leading-none uppercase italic tracking-tighter drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  {manga.title}
                </h3>
                <div className="h-1 w-12 bg-red-500 mt-2" />
              </div>
            </div>
        </div>

        {/* BACK FACE */}
        <div 
          className="absolute inset-0 w-full h-full rounded-sm border-[6px] border-manga-ink p-6 bg-manga-paper shadow-[-12px_12px_0px_0px_var(--manga-shadow-color)] backface-hidden flex flex-col transition-colors duration-300"
          style={{ 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="absolute inset-0 halftone pointer-events-none opacity-20" />

          <div className="relative z-10 h-full flex flex-col">
            <h3 className="text-manga-ink font-black text-xl mb-2 uppercase italic border-b-4 border-manga-ink pb-1">
              ARCHIVE INTEL:
            </h3>
            
            <p className="text-manga-ink font-bold text-sm leading-snug uppercase mb-4 line-clamp-6 italic">
              {manga.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-auto">
              {manga.categories.map((cat: string) => (
                <span key={cat} className="px-2 py-0.5 bg-manga-ink text-manga-paper text-[9px] font-black uppercase">
                  #{cat}
                </span>
              ))}
            </div>

            <div className="space-y-3 mt-4">
               <div className="flex items-center justify-between text-[10px] font-black uppercase opacity-60">
                 <span>Sync Level:</span>
                 <span>85% OPTIMAL</span>
               </div>
               <div className="w-full h-2 bg-manga-ink/10 border border-manga-ink">
                 <motion.div 
                    initial={{ width: 0 }}
                    animate={isHovered ? { width: "85%" } : { width: 0 }}
                    className="h-full bg-manga-ink" 
                 />
               </div>
            </div>

            <motion.button 
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                onOpenManga(manga);
              }}
              className="w-full mt-6 py-4 bg-manga-ink text-manga-paper border-[4px] border-manga-ink font-black uppercase italic text-lg shadow-[6px_6px_0px_0px_var(--manga-shadow-color)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-3"
            >
              <BookOpen className="w-6 h-6" />
              BEGIN READING
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
    </div>
  );
});
