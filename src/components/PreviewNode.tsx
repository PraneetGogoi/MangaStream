"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

interface PreviewNodeProps {
  url: string;
  posterImage: string;
  angle: number;
  radius: number;
  delayStart: number;
}

const itemVariants = {
  initial: { 
    opacity: 0, 
    scale: 0.1, 
    rotate: -20,
    x: 0,
    y: 0
  },
  animate: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.2 }
  }
};

export const PreviewNode = ({ url, posterImage, angle, radius, delayStart }: PreviewNodeProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, delayStart + 300);
    return () => clearTimeout(timer);
  }, [delayStart]);

  return (
    <motion.div
      variants={itemVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover={{ 
        scale: 1.15, 
        y: -10, 
        rotate: 3,
        zIndex: 50,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "absolute w-32 h-24 rounded-sm border-[4px] border-manga-ink shadow-[6px_6px_0px_0px_var(--manga-shadow-color)] z-10 transition-colors duration-300",
        "bg-manga-paper flex items-center justify-center transform-gpu overflow-hidden cursor-pointer",
        "hover:shadow-[12px_12px_0px_0px_var(--manga-shadow-glow)] transition-all duration-200"
      )}
      style={{
        top: `calc(50% - 48px + ${y}px)`,
        left: `calc(50% - 64px + ${x}px)`,
      }}
    >
      {/* Background Halftone for manga feel */}
      <div className="absolute inset-0 halftone opacity-10 pointer-events-none" />
      
      {!showVideo && (
        <img
          src={posterImage}
          alt="Preview"
          className="w-full h-full object-cover grayscale opacity-40 blur-[1px]"
        />
      )}
      {showVideo && (
        <>
          {url.match(/\.(jpeg|jpg|gif|png|webp)$/i) ? (
            <img
              src={url}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              ref={videoRef}
              src={url}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          )}
        </>
      )}
      
      {/* Decorative manga speed lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-[linear-gradient(45deg,transparent_45%,var(--manga-ink)_50%,transparent_55%)] bg-[length:10px_10px] transition-colors" />
      <div className="absolute bottom-1 right-1 bg-manga-paper border-2 border-manga-ink text-manga-ink px-1 text-[8px] font-black uppercase transition-colors">
        ZOOM
      </div>
    </motion.div>
  );
};
