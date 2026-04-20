"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Music } from "lucide-react";

interface Opening {
  title: string;
  url: string;
}

interface OpeningSelectorProps {
  openings: Opening[];
  onSelect: (url: string) => void;
  onBack: () => void;
}

const SoundBar = ({ delay }: { delay: number }) => (
  <motion.div
    animate={{ height: ["20%", "70%", "30%", "80%", "20%"] }}
    transition={{ duration: 0.8, repeat: Infinity, delay, ease: "easeInOut" }}
    className="w-1 bg-manga-ink"
  />
);

export const OpeningSelector = ({ openings, onSelect, onBack }: OpeningSelectorProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      onClick={(e) => e.stopPropagation()}
      className="absolute inset-0 z-20 flex flex-col bg-manga-paper p-6 border-[6px] border-manga-ink shadow-[-12px_12px_0px_0px_var(--manga-shadow-color)] overflow-hidden transition-colors duration-300"
    >
      {/* Rhythmic Background decoration */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -right-1/2 w-full h-full halftone opacity-10 pointer-events-none rounded-full"
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-manga-ink font-black uppercase mb-4 hover:translate-x-[-4px] transition-all group"
        >
          <ChevronLeft className="w-5 h-5 stroke-[4px]" />
          <span className="relative">
            BACK TO STORY
            <motion.div className="absolute bottom-0 left-0 w-0 h-[2px] bg-manga-ink group-hover:w-full transition-all duration-300" />
          </span>
        </button>

        <h3 className="text-manga-ink font-black text-2xl mb-6 uppercase italic border-b-4 border-manga-ink pb-2 flex items-center justify-between transition-colors">
          <span>SELECT THEME:</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Music className="w-6 h-6 fill-manga-ink transition-colors" />
          </motion.div>
        </h3>

        <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-3 pb-4 pr-1">
          {openings.map((op, idx) => (
            <motion.button
              key={op.url}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ x: 8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(op.url)}
              className="w-full p-4 bg-manga-paper border-[4px] border-manga-ink text-left flex items-center justify-between group shadow-[4px_4px_0px_0px_var(--manga-shadow-color)] hover:shadow-none transition-all"
            >
              <div className="flex flex-col">
                <span className="font-black uppercase italic text-manga-ink text-sm line-clamp-1 transition-colors">{op.title}</span>
                <span className="text-[10px] uppercase font-bold opacity-40 text-manga-ink">Track {idx + 1}</span>
              </div>
              
              <div className="flex items-center gap-3">
                {/* Visualizer bars revealed on hover or presence */}
                <div className="flex items-end gap-1 h-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <SoundBar delay={0} />
                  <SoundBar delay={0.2} />
                  <SoundBar delay={0.1} />
                  <SoundBar delay={0.3} />
                </div>
                <div className="bg-manga-ink text-manga-paper p-1 rounded-sm group-hover:bg-manga-paper group-hover:text-manga-ink transition-colors border-2 border-transparent group-hover:border-manga-ink">
                  <Music className="w-4 h-4" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-auto pt-4 text-[10px] font-black uppercase opacity-20 italic flex justify-between items-center text-manga-ink transition-colors">
          <span>Chapter: Select Track</span>
          <motion.span
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Audio Signal Active
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};
