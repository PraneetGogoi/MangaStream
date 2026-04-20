"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Position values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring configuration
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Detect if hovering over clickable elements
      const target = e.target as HTMLElement;
      const isClickable = 
        target.closest("button") || 
        target.closest("a") || 
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest(".cursor-pointer") ||
        target.tagName === "BUTTON" ||
        target.tagName === "A";
      
      setIsPointer(!!isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        animate={{
          scale: isPointer ? 1.8 : isClicking ? 0.9 : 1,
          rotate: isPointer ? 15 : 0,
        }}
        className="w-full h-full relative"
      >
        {/* Manga Style Cursor - Circle with thick border and halftone */}
        <div className="absolute inset-0 border-[3px] border-white rounded-full bg-black shadow-[4px_4px_0_0_#fff]">
           <div className="absolute inset-0 halftone opacity-40 rounded-full" />
        </div>
        
        {/* Small inner dot */}
        <div className="absolute inset-[35%] bg-white rounded-full" />

        {/* CLICK! bubble indicator when hovering */}
        {isPointer && !isClicking && (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: 20, y: -20 }}
            animate={{ opacity: 1, scale: 1, x: 30, y: -30 }}
            className="absolute bg-white text-black px-2 py-0.5 text-[8px] font-black uppercase rotate-[-10deg] border-2 border-black"
          >
            CLICK!
          </motion.div>
        )}

        {/* BAM! Click animation */}
        <AnimatePresence>
          {isClicking && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 30, y: -30, rotate: -10 }}
              animate={{ opacity: 1, scale: 1.2, x: 40, y: -40, rotate: 5 }}
              exit={{ opacity: 0, scale: 1.5, x: 50, y: -50, rotate: 15 }}
              className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
            >
              {/* Halftone Burst Effect behind the bubble */}
              <div className="absolute inset-[-100%] border-[6px] border-black rounded-full opacity-20 scale-125 halftone animate-ping" />
              
              <div className="bg-white text-black px-3 py-1 font-black text-sm uppercase italic border-4 border-black shadow-[6px_6px_0px_0px_#000]">
                BAM!!
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
