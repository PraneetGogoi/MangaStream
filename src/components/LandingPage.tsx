"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Zap, ChevronRight, Swords } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Onomatopoeia } from "./Onomatopoeia";
import { SlashOverlay } from "./SlashOverlay";
import { InkSplatter } from "./InkSplatter";
import { getAssetPath } from "@/utils/path";

interface LandingPageProps {
  onEnter: () => void;
}

const CharacterReveal = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <span className="inline-block whitespace-nowrap">
    {text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20, scale: 2 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          delay: delay + (index * 0.05),
          type: "spring",
          stiffness: 200,
          damping: 10
        }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

export const LandingPage = ({ onEnter }: LandingPageProps) => {
  const [isSlashing, setIsSlashing] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x * 15); 
    mouseY.set(y * 15);
  };

  const handleEnter = () => {
    setIsSlashing(true);
    setTimeout(() => {
      onEnter();
    }, 400); 
  };

  if (!mounted) return <div className="fixed inset-0 bg-manga-paper transition-colors duration-300" />;

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="fixed inset-0 z-[100] bg-manga-paper overflow-hidden flex flex-col items-center justify-center p-8 manga-background-texture transition-colors duration-300"
    >
      <SlashOverlay isVisible={isSlashing} />
      
      {/* Background Halftone - Extremely Subtle */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[60vh] halftone-subtle opacity-5 pointer-events-none" />

      {/* Atmospheric Ink Drifts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: "110%", x: `${10 + i * 15}%` }}
            animate={{ 
              opacity: [0, 0.05, 0],
              y: "-10%",
              x: `${10 + i * 15 + (i % 2 === 0 ? 5 : -5)}%`
            }}
            transition={{ 
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear"
            }}
            className="absolute w-24 h-24 bg-manga-ink rounded-full blur-3xl opacity-5 transition-colors"
          />
        ))}
      </div>
      
      <div className="max-w-4xl w-full flex flex-col sm:flex-row items-center gap-16 relative z-20">
        
        {/* Left Side: Hero Frame */}
        <motion.div 
          style={{ x: springX, y: springY }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="relative w-64 h-96 sm:w-80 sm:h-[500px] border-[10px] border-manga-ink bg-manga-ink shadow-[20px_20px_0px_0px_var(--manga-shadow-color)] flex-shrink-0 group overflow-hidden transition-all duration-300"
        >
          <motion.img 
            src={getAssetPath("/assets/manga_hero.png")} 
            alt="Manga Hero" 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: [0, 1, 0.9, 1],
              filter: ["grayscale(100%)", "grayscale(100%)", "grayscale(0%)", "grayscale(100%)"]
            }}
            transition={{ 
              duration: 1.2, 
              delay: 0.2,
              opacity: { duration: 0.1, delay: 3, repeat: Infinity, repeatDelay: 5 },
              filter: { duration: 0.1, delay: 3, repeat: Infinity, repeatDelay: 5 }
            }}
            className="w-full h-full object-cover grayscale transition-all duration-1000"
          />
          {/* Subtle Speed Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_40%,var(--manga-paper)_45%,transparent_50%)] bg-[length:30px_30px] transition-colors" />
          
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 15 }}
            className="absolute top-4 right-4 bg-manga-paper border-2 border-manga-ink px-3 py-1 text-xs font-black uppercase rotate-[10deg] shadow-[4px_4px_0px_0px_var(--manga-shadow-color)] cursor-help transition-all"
          >
            Issue #00
          </motion.div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center sm:justify-start gap-4 mb-4">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, -2, 2, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 sm:w-24 sm:h-24 bg-manga-ink p-4 rotate-[-4deg] shadow-[8px_8px_0px_0px_var(--manga-shadow-color)]"
              >
                <img 
                  src={getAssetPath("/assets/logo.png")} 
                  alt="MangaStream Logo" 
                  className="w-full h-full object-contain invert" 
                />
              </motion.div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter italic flex flex-wrap items-center text-manga-ink transition-colors leading-none">
                <CharacterReveal text="Manga" delay={0.6} />
                <motion.span 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="text-stroke-ink text-transparent relative overflow-hidden inline-block ml-4 transition-colors whitespace-nowrap"
                >
                  Stream
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
                    className="absolute inset-0 bg-manga-ink mix-blend-difference opacity-20 transition-colors"
                  />
                </motion.span>
              </h1>
            </div>
            <p className="text-xl font-bold uppercase tracking-widest opacity-40 text-manga-ink transition-colors">
              The Art of Discovery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <p className="text-3xl font-black leading-tight uppercase italic border-l-[12px] border-manga-ink pl-8 py-2 text-manga-ink transition-colors">
              <CharacterReveal text="Chapter 01:" delay={1.4} /><br />
              <span className="text-5xl">Infinite sagas,</span><br />
              one frame.
            </p>
          </motion.div>

          <motion.button 
            onClick={handleEnter}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ 
              scale: 1.05, 
              x: 10,
              boxShadow: "15px 15px 0px 0px var(--manga-shadow-color)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-manga-ink text-manga-paper font-black text-2xl uppercase italic shadow-[10px_10px_0px_0px_var(--manga-shadow-glow)] transition-all flex items-center gap-4 group relative overflow-hidden"
          >
            <motion.div 
              className="absolute inset-0 bg-manga-paper/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500"
            />
            <Swords className="w-8 h-8 group-hover:rotate-45 transition-transform relative z-10" />
            <span className="relative z-10">Begin Reading</span>
            <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform relative z-10" />
          </motion.button>
        </div>
      </div>
      
      {/* Footer Decoration */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-12 left-0 right-0 flex items-center px-12 gap-8 text-[10px] font-black tracking-[1em] overflow-hidden whitespace-nowrap text-manga-ink transition-colors"
      >
        <div className="h-[2px] flex-1 bg-manga-ink transition-colors" />
        EST. 2026 // ALL RIGHTS RESERVED
        <div className="h-[2px] flex-1 bg-manga-ink transition-colors" />
      </motion.div>
    </div>
  );
};
