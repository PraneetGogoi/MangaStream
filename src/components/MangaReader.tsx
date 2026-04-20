"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, BookOpen, Layers } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Anime } from "@/data/mockAnime";

interface MangaReaderProps {
  anime: Anime;
  onClose: () => void;
}

export const MangaReader = ({ anime, onClose }: MangaReaderProps) => {
  const [currentChapterIdx, setCurrentChapterIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const currentChapter = anime.mangaChapters?.[currentChapterIdx];
  const totalChapters = anime.mangaChapters?.length || 0;

  useEffect(() => {
    // Scroll to top when chapter changes
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0);
    }
  }, [currentChapterIdx]);

  if (!currentChapter) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center overflow-hidden"
    >
      {/* Header */}
      <header className="w-full bg-white border-b-[6px] border-black p-4 relative z-50 flex items-center justify-between shadow-[0px_10px_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-4">
          <div className="bg-black p-2 rounded-sm rotate-[-3deg]">
            <BookOpen className="text-white w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-black uppercase italic tracking-tighter leading-none">
              {anime.title}
            </h2>
            <p className="text-[10px] font-black uppercase opacity-50">
              {currentChapter.title}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Chapter Selector */}
          <div className="hidden sm:flex items-center gap-2 bg-gray-100 border-2 border-black p-1">
            <button 
              disabled={currentChapterIdx === 0}
              onClick={() => setCurrentChapterIdx(prev => prev - 1)}
              className="p-1 hover:bg-black hover:text-white disabled:opacity-20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="px-3 font-black text-xs uppercase">
              Chapter {currentChapterIdx + 1} / {totalChapters}
            </span>
            <button 
              disabled={currentChapterIdx === totalChapters - 1}
              onClick={() => setCurrentChapterIdx(prev => prev + 1)}
              className="p-1 hover:bg-black hover:text-white disabled:opacity-20 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <button 
            onClick={onClose}
            className="group flex items-center gap-2 bg-black text-white px-4 py-2 font-black uppercase text-sm border-2 border-black hover:bg-white hover:text-black transition-all"
          >
            Close
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          </button>
        </div>
      </header>

      {/* Main Reader Area */}
      <div 
        ref={containerRef}
        className="flex-1 w-full overflow-y-auto custom-scrollbar flex flex-col items-center bg-[#1a1a1a] py-12"
      >
        <div className="max-w-3xl w-full flex flex-col gap-8 px-4">
          {/* Chapter Splash Panel */}
          <motion.div 
            key={currentChapter.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full aspect-[2/1] bg-white border-[8px] border-black flex flex-col items-center justify-center p-8 relative overflow-hidden mb-12 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 halftone opacity-20 pointer-events-none" />
            <h3 className="text-black font-black text-5xl sm:text-7xl uppercase italic tracking-tighter text-center leading-none relative z-10">
              {currentChapter.title}
            </h3>
            <div className="mt-6 px-4 py-2 bg-black text-white font-black uppercase text-xl relative z-10 rotate-[-2deg]">
              BEGIN SAGA
            </div>
          </motion.div>

          {/* Manga Pages */}
          {currentChapter.pages.map((pageUrl, idx) => (
            <motion.div
              key={`${currentChapter.id}-page-${idx}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full border-[8px] border-black bg-white shadow-[15px_15px_0px_0px_rgba(0,0,0,0.3)] mb-4"
            >
              <img 
                src={pageUrl} 
                alt={`Page ${idx + 1}`} 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute bottom-4 right-4 bg-black text-white px-3 py-1 font-black text-[10px] uppercase">
                P. {idx + 1}
              </div>
            </motion.div>
          ))}

          {/* End of Chapter Navigation */}
          <div className="w-full flex flex-col items-center py-20 gap-8">
            <div className="h-[2px] w-full bg-white/20" />
            <h4 className="text-white/40 font-black uppercase text-xl italic">End of Chapter</h4>
            
            <div className="flex gap-4">
              <button
                disabled={currentChapterIdx === 0}
                onClick={() => setCurrentChapterIdx(prev => prev - 1)}
                className="px-8 py-4 border-4 border-white text-white font-black uppercase hover:bg-white hover:text-black transition-all disabled:opacity-20"
              >
                Prev Chapter
              </button>
              <button
                disabled={currentChapterIdx === totalChapters - 1}
                onClick={() => setCurrentChapterIdx(prev => prev + 1)}
                className="px-8 py-4 bg-white text-black border-4 border-white font-black uppercase hover:bg-black hover:text-white transition-all disabled:opacity-20"
              >
                Next Chapter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Side Nav (Mobile) */}
      <div className="sm:hidden fixed bottom-8 right-8 flex flex-col gap-4 z-[100]">
        <button 
          onClick={() => setCurrentChapterIdx(prev => Math.max(0, prev - 1))}
          className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:scale-90 transition-transform"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        <button 
          onClick={() => setCurrentChapterIdx(prev => Math.min(totalChapters - 1, prev + 1))}
          className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:scale-90 transition-transform"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>
    </motion.div>
  );
};
