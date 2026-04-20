"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const InkSplatter = () => {
  const [drips, setDrips] = useState<{ id: number; x: number; delay: number; scale: number }[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const newDrips = Array.from({ length: 7 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      scale: Math.random() * 1.5 + 0.5,
    }));
    setDrips(newDrips);
  }, []);

  if (!mounted) return <div className="absolute inset-0 pointer-events-none" />;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
      {drips.map((drip) => (
        <motion.div
          key={drip.id}
          initial={{ y: "-10%", opacity: 0 }}
          animate={{ 
            y: ["-10%", "110%"],
            opacity: [0, 0.4, 0.4, 0],
            scaleX: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: drip.delay,
            ease: "linear",
          }}
          className="absolute w-[2px] bg-manga-ink opacity-20 transition-colors duration-300"
          style={{
            left: `${drip.x}%`,
            height: `${40 * drip.scale}px`,
            filter: "blur(0.5px)",
          }}
        >
          {/* Bulb at the bottom of the drip */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-3 bg-manga-ink rounded-full transition-colors"
            style={{ width: `${4 * drip.scale}px`, height: `${6 * drip.scale}px` }}
          />
        </motion.div>
      ))}

      {/* Halftone Scraps */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`scrap-${i}`}
          initial={{ rotate: 0 }}
          animate={{ 
            rotate: 360,
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute halftone opacity-[0.03] w-32 h-32 rounded-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};
