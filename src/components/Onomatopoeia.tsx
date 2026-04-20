"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const SOUND_EFFECTS = ["BAM!", "POW!", "ZOOM!", "DON!", "KRA-KOW!", "SWOOSH!", "BA-DUM!"];

export const Onomatopoeia = () => {
  const [elements, setElements] = useState<{ 
    id: number; 
    text: string; 
    x: number; 
    y: number; 
    rotate: number; 
    scale: number;
    duration: number;
    delay: number;
  }[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Generate random effects
    const newElements = Array.from({ length: 4 }).map((_, i) => ({
      id: i,
      text: SOUND_EFFECTS[Math.floor(Math.random() * SOUND_EFFECTS.length)],
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      rotate: Math.random() * 40 - 20,
      scale: Math.random() * 1 + 0.5,
      duration: 4 + Math.random() * 2,
      delay: i * 1.5,
    }));
    setElements(newElements);
  }, []);

  if (!mounted) return <div className="absolute inset-0 pointer-events-none" />;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.15, 0],
            scale: [el.scale * 0.8, el.scale, el.scale * 0.9],
            x: [0, 5, -5, 0], // Reduced randomness here for stability
            y: [0, -5, 5, 0],
          }}
          whileHover={{ 
            scale: el.scale * 1.5, 
            opacity: 0.8,
            rotate: [el.rotate - 5, el.rotate + 5, el.rotate],
            transition: { duration: 0.1 }
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
          }}
          className="absolute font-black text-manga-ink opacity-20 italic whitespace-nowrap cursor-default pointer-events-auto hover:z-50 transition-colors duration-300"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            rotate: `${el.rotate}deg`,
            fontSize: `${4 + el.scale * 2}rem`,
            WebkitTextStroke: "2px var(--manga-shadow-glow)",
          }}
        >
          {el.text}
        </motion.div>
      ))}
    </div>
  );
};
