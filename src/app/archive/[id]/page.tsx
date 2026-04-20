"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, User, ArrowLeft, Layers, BookOpen } from "lucide-react";
import { useState, use } from "react";
import { MOCK_ANIME } from "@/data/mockAnime";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ArchivePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [selectedCharIdx, setSelectedCharIdx] = useState(0);
  
  const anime = MOCK_ANIME.find(a => a.id === id);
  const characters = anime?.characters || [];
  const selectedChar = characters[selectedCharIdx];

  if (!anime || characters.length === 0) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
        <h1 className="text-white text-4xl font-black uppercase italic mb-8">404: ARCHIVE LOST</h1>
        <Link 
          href="/" 
          className="px-8 py-4 bg-white text-black font-black uppercase tracking-tighter border-4 border-white hover:bg-black hover:text-white transition-all"
        >
          Return to Library
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white relative overflow-hidden flex flex-col">
      {/* Background Halftone Texture */}
      <div className="fixed inset-0 halftone opacity-5 pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b-[8px] border-black p-4 flex items-center justify-between shadow-[0px_10px_30px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-6">
          <Link 
            href="/"
            className="group flex items-center gap-2 bg-black text-white px-4 py-2 font-black uppercase text-sm border-2 border-black hover:bg-white hover:text-black transition-all"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            BACK
          </Link>
          <div className="h-10 w-[4px] bg-black hidden sm:block" />
          <div className="flex items-center gap-4">
            <div className="bg-black p-2 rotate-[-5deg] hidden sm:block">
              <User className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter italic leading-none">THE ARCHIVE</h1>
              <p className="text-[10px] sm:text-xs font-bold opacity-50 uppercase tracking-widest">{anime.title}</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div className="px-4 py-1 bg-black text-white text-[10px] font-black uppercase rotate-[2deg]">
            SECURED DATABASE v2.0
          </div>
          <div className="text-xs font-black uppercase tracking-tighter opacity-30 italic">
            Entry Code: 0X-{anime.id.toUpperCase()}
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative z-10">
        {/* Sidebar: Character Selector */}
        <aside className="w-full md:w-96 border-b-8 md:border-b-0 md:border-r-8 border-black overflow-y-auto bg-gray-50 flex md:flex-col p-6 gap-4 scrollbar-hide md:min-h-0 min-h-[140px]">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.5, y: 0 }}
            className="hidden md:block text-xs font-black uppercase tracking-widest border-b-2 border-black pb-2 mb-4"
          >
            Select Personnel:
          </motion.h3>
          <motion.div 
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05
                }
              }
            }}
            className="flex md:flex-col gap-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0"
          >
            {characters.map((char, idx) => (
              <motion.button
                key={char.name}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
                onClick={() => setSelectedCharIdx(idx)}
                className={`flex-shrink-0 md:w-full p-4 border-4 transition-all flex items-center gap-4 group relative ${
                  selectedCharIdx === idx 
                    ? "bg-black text-white border-black translate-x-2 shadow-[-4px_4px_0px_0px_rgba(0,0,0,0.2)]" 
                    : "bg-white text-black border-black hover:translate-x-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                }`}
              >
                <div className="w-14 h-14 border-2 border-inherit overflow-hidden bg-gray-200">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    src={char.image} 
                    alt={char.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
                  />
                </div>
                <div className="flex flex-col items-start overflow-hidden">
                  <span className="font-black uppercase italic text-sm truncate w-full text-left">{char.name}</span>
                  <span className={`text-[10px] font-bold uppercase w-full truncate text-left ${selectedCharIdx === idx ? "text-gray-400" : "text-gray-500"}`}>
                    {char.role}
                  </span>
                </div>
                {selectedCharIdx === idx && (
                  <motion.div 
                    layoutId="active-indicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-black rotate-45 border-2 border-white"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </aside>

        {/* Main Profile Area */}
        <main className="flex-1 overflow-y-auto p-6 sm:p-12 lg:p-20 scrollbar-hide">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedChar.name}
              initial={{ opacity: 0, x: 50, scale: 0.95, skewY: 1 }}
              animate={{ opacity: 1, x: 0, scale: 1, skewY: 0 }}
              exit={{ opacity: 0, x: -50, scale: 0.95, skewY: -1 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start"
            >
              {/* Character Visual Side */}
              <div className="space-y-8">
                <motion.div 
                  initial={{ rotate: 1, scale: 0.9 }}
                  animate={{ rotate: 0, scale: 1 }}
                  className="relative aspect-[4/5] sm:aspect-[3/4] border-[12px] border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] overflow-hidden group/visual"
                >
                  <div className="absolute inset-0 halftone opacity-20 z-10" />
                  <img 
                    src={selectedChar.image} 
                    alt={selectedChar.name} 
                    className="w-full h-full object-cover grayscale group-hover/visual:grayscale-0 group-hover/visual:scale-105 transition-all duration-1000 ease-out"
                  />
                  {/* Decorative Manga Overlays */}
                  <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-6 right-6 bg-black text-white px-6 py-2 font-black uppercase text-2xl rotate-[3deg] z-20 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
                  >
                    {selectedChar.role.split('/')[0]}
                  </motion.div>
                  <div className="absolute bottom-6 left-6 flex flex-col gap-2 z-20">
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="bg-white border-4 border-black px-4 py-1 text-black font-black uppercase text-sm italic shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    >
                      Personnel Archive
                    </motion.div>
                  </div>
                </motion.div>

                {/* Character Tagline/Brief */}
                <motion.div 
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-black text-white p-6 border-l-[12px] border-white shadow-[0px_0px_0px_4px_rgba(0,0,0,1)] rotate-[-1deg]"
                >
                  <p className="font-black italic uppercase text-lg leading-tight tracking-tighter">
                    "EVERY STORY HAS A SOUL. EVERY SOUL HAS A COST."
                  </p>
                </motion.div>
              </div>

              {/* Character Info Side */}
              <div className="flex flex-col gap-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      className="h-1 flex-1 bg-black" 
                    />
                    <span className="font-black uppercase text-xs tracking-[0.3em] opacity-40">Profile Decrypted</span>
                  </div>
                  <h2 className="text-7xl sm:text-9xl font-black uppercase tracking-tighter italic leading-[0.85] text-black">
                    {selectedChar.name.split(' ').map((part, i) => (
                      <motion.span 
                        key={i} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className={i % 2 === 1 ? "bg-black text-white px-4 inline-block transform rotate-1" : ""}
                      >
                        {part}
                        {i === 0 && <br />}
                      </motion.span>
                    ))}
                  </h2>
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="relative"
                >
                  <div className="absolute -left-6 top-0 bottom-0 w-2 bg-black" />
                  <p className="text-2xl font-bold leading-relaxed uppercase italic">
                    {selectedChar.description}
                  </p>
                </motion.div>

                {/* Narrative Article Section */}
                <div className="space-y-8 bg-gray-50 p-8 sm:p-12 border-4 border-black relative overflow-hidden">
                  <motion.div 
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [-12, -8, -12]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-0 right-0 p-4 opacity-5"
                  >
                    <BookOpen className="w-40 h-40" />
                  </motion.div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        className="bg-black p-2 rotate-[5deg] cursor-pointer"
                      >
                        <BookOpen className="text-white w-6 h-6" />
                      </motion.div>
                      <h4 className="font-black text-3xl uppercase italic tracking-tighter border-b-8 border-black pb-2 inline-block">
                        PERSONNEL BIOGRAPHY
                      </h4>
                    </div>
                    
                    <motion.div 
                      key={`bio-${selectedChar.name}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="prose prose-xl max-w-none"
                    >
                      <p className="text-xl sm:text-2xl font-medium leading-relaxed text-black/80 first-letter:text-7xl first-letter:font-black first-letter:mr-4 first-letter:float-left first-letter:leading-none first-letter:mt-2">
                        {selectedChar.bio || selectedChar.description}
                      </p>
                    </motion.div>

                    {/* Technical Specifications Section */}
                    {(selectedChar.abilities || selectedChar.affiliation || selectedChar.status || selectedChar.origin) && (
                      <div className="mt-12 space-y-8 border-t-4 border-black pt-12">
                        <div className="flex items-center gap-4">
                          <motion.div 
                            whileHover={{ scale: 1.1, rotate: -15 }}
                            className="bg-black p-2 rotate-[-5deg] cursor-pointer"
                          >
                            <Layers className="text-white w-6 h-6" />
                          </motion.div>
                          <h4 className="font-black text-3xl uppercase italic tracking-tighter border-b-8 border-black pb-2 inline-block">
                            TECHNICAL SPECIFICATIONS
                          </h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {selectedChar.abilities && (
                            <div className="space-y-4">
                              <h5 className="flex items-center gap-2 font-black uppercase text-sm tracking-widest opacity-60">
                                <span className="w-8 h-[2px] bg-black" />
                                COMBAT ABILITIES
                              </h5>
                              <motion.ul 
                                initial="hidden"
                                animate="show"
                                key={`abilities-${selectedChar.name}`}
                                variants={{
                                  show: {
                                    transition: {
                                      staggerChildren: 0.1
                                    }
                                  }
                                }}
                                className="grid grid-cols-1 gap-2"
                              >
                                {selectedChar.abilities.map((ability) => (
                                  <motion.li 
                                    key={ability}
                                    variants={{
                                      hidden: { opacity: 0, x: -10 },
                                      show: { opacity: 1, x: 0 }
                                    }}
                                    whileHover={{ x: 8, backgroundColor: "rgba(0,0,0,0.05)" }}
                                    className="flex items-center gap-3 bg-white border-2 border-black p-3 font-black uppercase italic text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors cursor-crosshair"
                                  >
                                    <div className="w-2 h-2 bg-black rotate-45" />
                                    {ability}
                                  </motion.li>
                                ))}
                              </motion.ul>
                            </div>
                          )}

                          <div className="space-y-6">
                            {selectedChar.affiliation && (
                              <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="space-y-2"
                              >
                                <h5 className="font-black uppercase text-[10px] tracking-widest opacity-40">Primary Affiliation</h5>
                                <div className="bg-black text-white p-4 border-l-[8px] border-white shadow-[0px_0px_0px_4px_rgba(0,0,0,1)] font-black uppercase italic text-lg tracking-tighter">
                                  {selectedChar.affiliation}
                                </div>
                              </motion.div>
                            )}

                            <div className="flex flex-wrap gap-4">
                              {selectedChar.status && (
                                <motion.div 
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.5 }}
                                  className="space-y-1"
                                >
                                  <h5 className="font-black uppercase text-[10px] tracking-widest opacity-40">Operational Status</h5>
                                  <div className={`px-4 py-1 font-black uppercase italic text-sm border-2 border-black ${
                                    selectedChar.status.toLowerCase() === 'active' 
                                      ? "bg-green-500 text-white animate-pulse" 
                                      : "bg-red-500 text-white"
                                  }`}>
                                    {selectedChar.status}
                                  </div>
                                </motion.div>
                              )}
                              {selectedChar.origin && (
                                <motion.div 
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.6 }}
                                  className="space-y-1"
                                >
                                  <h5 className="font-black uppercase text-[10px] tracking-widest opacity-40">Personnel Origin</h5>
                                  <div className="px-4 py-1 bg-white text-black border-2 border-black font-black uppercase italic text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    {selectedChar.origin}
                                  </div>
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mt-12 pt-12 border-t-4 border-black/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                      <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Classification</p>
                        <p className="font-black uppercase italic text-lg">{selectedChar.role || "UNKNOWN"}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-1 bg-black opacity-20" />
                        <span className="font-black uppercase italic text-sm opacity-30 tracking-widest">End of Record</span>
                      </div>
                    </div>
                  </div>

                  {/* Halftone texture for the article background */}
                  <div className="absolute inset-0 halftone opacity-[0.03] pointer-events-none" />
                </div>

                {/* Footer Badges */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <motion.div 
                    whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
                    className="px-6 py-2 border-4 border-black font-black uppercase italic text-sm transition-all cursor-default"
                  >
                    DNA Verified
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000", borderColor: "#000" }}
                    className="px-6 py-2 bg-black text-white font-black uppercase italic text-sm transition-all cursor-default border-4 border-transparent"
                  >
                    Authenticity Guaranteed
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
