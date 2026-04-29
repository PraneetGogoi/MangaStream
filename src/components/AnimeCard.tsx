"use client";

import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect, useRef, memo } from "react";
import { BookOpen, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { Anime } from "@/data/mockAnime";
import { PreviewNode } from "./PreviewNode";
import { OpeningSelector } from "./OpeningSelector";
import Image from "next/image";
import { Bookmark, CheckCircle2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { toggleWatchlist, isAnimeInWatchlist, trackCardInteraction, generateGlimpse } from "@/app/actions";
import { Activity, ShieldCheck, Zap, Brain, Target, Layers, Music, X, Play } from "lucide-react";
import Link from "next/link";
import { getAssetPath } from "@/utils/path";

interface AnimeCardProps {
  anime: Anime & { telemetry?: { views: number } };
  syncRate?: number;
  onOpenVideo: (anime: Anime, videoUrl: string, videoLabel: string) => void;
  onOpenManga: (anime: Anime) => void;
  onOpenPlayer: (anime: any, episode: any) => void;
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

export const AnimeCard = memo(({ anime, syncRate, onOpenVideo, onOpenManga, onOpenPlayer }: AnimeCardProps) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpeningSelectorOpen, setIsOpeningSelectorOpen] = useState(false);
  const [glimpseText, setGlimpseText] = useState(anime.glimpse || "");
  const [showEpisodes, setShowEpisodes] = useState(false);
  const [showCharacters, setShowCharacters] = useState(false);
  const [characters, setCharacters] = useState<any[]>([]);
  const [loadingChars, setLoadingChars] = useState(false);
  const hasTracked = useRef(false);

  // Motion values for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const { data: session } = useSession();
  const [inWatchlist, setInWatchlist] = useState(false);
  const [isStamping, setIsStamping] = useState(false);

  useEffect(() => {
    const checkWatchlist = async () => {
      if (session) {
        const result = await isAnimeInWatchlist(anime.id);
        setInWatchlist(result);
      }
    };
    checkWatchlist();
  }, [anime.id, session]);

  const handleToggleWatchlist = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!session) {
      router.push("/login");
      return;
    }

    setIsStamping(true);
    const result = await toggleWatchlist(anime.id);
    if (result.success) {
      setInWatchlist(!!result.inWatchlist);
    }
    
    // Animation timeout
    setTimeout(() => setIsStamping(false), 800);
  };

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

  const handleOpenCharacters = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowCharacters(true);
    if (characters.length === 0) {
      setLoadingChars(true);
      const { getCharactersForAnime } = await import("@/app/actions");
      const data = await getCharactersForAnime(anime.id);
      setCharacters(data);
      setLoadingChars(false);
    }
  };

  // Reset selector when card unflipped
  useEffect(() => {
    if (!isHovered) {
      setIsOpeningSelectorOpen(false);
    } else {
      // Track interaction when hovered
      if (!hasTracked.current) {
        trackCardInteraction(anime.id);
        hasTracked.current = true;
      }
      
      // Generate glimpse if missing
      if (!glimpseText) {
        generateGlimpse(anime.id).then(res => {
          if (res.glimpse) setGlimpseText(res.glimpse);
        });
      }
    }
  }, [isHovered, anime.id, glimpseText]);

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
              <Image
                src={getAssetPath(anime.posterImage || "/assets/placeholder.png")}
                alt={anime.title}
                fill
                className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized={!anime.posterImage || !anime.posterImage.startsWith("/")}
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

              {/* Watchlist Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleToggleWatchlist}
                className={`absolute top-2 left-2 z-20 w-10 h-10 flex items-center justify-center border-4 border-manga-ink shadow-[4px_4px_0px_0px_var(--manga-shadow-color)] hover:shadow-none transition-all ${
                  inWatchlist ? "bg-red-500 text-white" : "bg-manga-paper text-manga-ink"
                }`}
              >
                <Bookmark className={`w-6 h-6 ${inWatchlist ? 'fill-current' : ''}`} />
              </motion.button>

              {/* Stamp Animation Overlay */}
              <AnimatePresence>
                {isStamping && (
                  <motion.div
                    initial={{ scale: 2, opacity: 0, rotate: -20 }}
                    animate={{ scale: 1, opacity: 1, rotate: 10 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
                  >
                    <div className="border-[12px] border-red-600 rounded-full px-8 py-4 bg-white/10 backdrop-blur-sm -rotate-12 flex flex-col items-center">
                      <span className="text-red-600 text-6xl font-black italic uppercase leading-none tracking-tighter">
                        {inWatchlist ? "SAVED" : "REMOVED"}
                      </span>
                      <div className="w-full h-2 bg-red-600 mt-2" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

               {/* Sync Rate Gauge (Tactical Overlay) */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute bottom-16 left-2 z-20 flex flex-col items-start"
              >
                <div className="flex items-center gap-2 bg-manga-ink text-manga-paper px-2 py-1 text-[10px] font-black italic shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                  <Target className={`w-3 h-3 ${syncRate && syncRate > 80 ? 'text-green-400' : 'text-yellow-400'}`} />
                  {syncRate || 50}% SYNC
                </div>
                <div className="w-16 h-1.5 bg-white/20 mt-1 border border-manga-ink overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${syncRate || 50}%` }}
                    className={`h-full ${syncRate && syncRate > 80 ? 'bg-green-500' : 'bg-yellow-500'}`}
                  />
                </div>
              </motion.div>

              {/* Telemetry Pulse (Live Views) */}
              <div className="absolute top-14 left-2 z-20 flex items-center gap-2 bg-white/90 text-manga-ink border-2 border-manga-ink px-2 py-0.5 shadow-[2px_2px_0px_0px_var(--manga-shadow-color)]">
                <Activity className="w-3 h-3 text-red-500 animate-pulse" />
                <span className="text-[9px] font-black">{anime.telemetry?.views || 0}</span>
              </div>

               {/* Oracle Glimpse Overlay (Flipped but visible on front hover) */}
               <AnimatePresence>
                {isHovered && glimpseText && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-40"
                  >
                    <div className="bg-manga-ink text-white p-4 border-l-8 border-purple-500 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.5)]">
                      <div className="text-[8px] font-black uppercase tracking-[0.3em] opacity-40 mb-2">Oracle Glimpse</div>
                      <p className="text-xs font-black italic leading-tight uppercase">"{glimpseText}"</p>
                    </div>
                    {/* Scanning Line Effect */}
                    <motion.div 
                      animate={{ y: [0, 80, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-x-0 h-0.5 bg-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                    />
                  </motion.div>
                )}
               </AnimatePresence>

              {/* Quick Access Archive Button */}
              {anime.hasArchive && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/archive/${anime.id}`);
                  }}
                  className="absolute bottom-4 right-4 z-20 w-12 h-12 bg-manga-paper border-[4px] border-manga-ink rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_var(--manga-shadow-color)] hover:shadow-none translate-y-2 transition-all cursor-pointer"
                >
                  <User className="w-6 h-6 text-manga-ink" />
                </motion.div>
              )}
            </div>
          
          <div className="p-3 bg-manga-paper border-t-[4px] border-manga-ink transition-colors">
            <h3 className="text-manga-ink font-black text-xl leading-tight uppercase italic tracking-tighter transition-colors line-clamp-2">
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

            {/* Archival Certification Stamps */}
            <div className="flex flex-wrap gap-2 mb-4">
              <motion.div 
                whileHover={{ scale: 1.05, x: -2, y: -2, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
                className="px-2 py-1 border-2 border-manga-ink bg-manga-paper text-manga-ink font-black uppercase italic text-[8px] cursor-default leading-none shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]"
              >
                DNA VERIFIED
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, x: -2, y: -2, boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.3)" }}
                className="px-2 py-1 bg-manga-ink text-manga-paper font-black uppercase italic text-[8px] cursor-default leading-none border-2 border-manga-ink shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]"
              >
                AUTH GUARANTEED
              </motion.div>
            </div>

            <div className="flex flex-col gap-3">
              <motion.button 
                whileHover={{ y: -4, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenVideo(anime, anime.trailerUrl, "EPISODE 01");
                }}
                className="w-full py-4 bg-manga-ink text-manga-paper border-[4px] border-manga-ink font-black uppercase italic text-lg shadow-[6px_6px_0px_0px_var(--manga-shadow-color)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-3"
              >
                <Zap className="w-6 h-6 fill-current" />
                WATCH NOW (FREE)
              </motion.button>

              <div className="grid grid-cols-3 gap-2">
                <motion.button 
                  whileHover={{ y: -2 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpeningSelectorOpen(true);
                  }}
                  className="py-2 border-2 border-manga-ink font-black uppercase italic text-[8px] flex flex-col items-center justify-center gap-1 hover:bg-manga-ink hover:text-manga-paper transition-all"
                >
                  <Music className="w-3 h-3" />
                  MUSIC
                </motion.button>
                
                <motion.button 
                  whileHover={{ y: -2 }}
                  onClick={handleOpenCharacters}
                  className="py-2 border-2 border-manga-ink font-black uppercase italic text-[8px] flex flex-col items-center justify-center gap-1 hover:bg-manga-ink hover:text-manga-paper transition-all"
                >
                  <User className="w-3 h-3" />
                  PERSONS
                </motion.button>

                <motion.button 
                  whileHover={{ y: -2 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowEpisodes(true);
                  }}
                  className="py-2 border-2 border-manga-ink font-black uppercase italic text-[8px] flex flex-col items-center justify-center gap-1 hover:bg-manga-ink hover:text-manga-paper transition-all"
                >
                  <Layers className="w-3 h-3" />
                  EPISODES
                </motion.button>
              </div>

              {/* Episode Browser Overlay */}
              <AnimatePresence>
                {showEpisodes && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute inset-0 z-50 bg-manga-paper p-6 flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex justify-between items-center mb-4 border-b-4 border-manga-ink pb-2">
                      <h4 className="font-black uppercase italic text-lg">Episode Ledger</h4>
                      <button onClick={() => setShowEpisodes(false)}><X className="w-6 h-6" /></button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto space-y-2 custom-scrollbar">
                      {anime.seasons?.map((s: any) => (
                        <div key={s.number} className="space-y-1">
                          <p className="text-[10px] font-black uppercase opacity-40">Season {s.number}</p>
                          {s.episodes.map((ep: any) => (
                            <button
                              key={ep.number}
                              onClick={() => onOpenPlayer(anime, { ...ep, season: s.number })}
                              className="w-full p-2 border-2 border-transparent hover:border-manga-ink hover:bg-manga-ink/5 flex items-center justify-between group transition-all"
                            >
                              <span className="font-bold text-xs uppercase italic">{ep.number}. {ep.title}</span>
                              <Play className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                          ))}
                        </div>
                      ))}
                      {(!anime.seasons || anime.seasons.length === 0) && (
                        <div className="flex flex-col items-center justify-center h-full opacity-20">
                          <Layers className="w-12 h-12 mb-2" />
                          <p className="font-black uppercase italic text-center text-xs">No episodes archivated yet.</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Character Personnel Overlay */}
              <AnimatePresence>
                {showCharacters && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 z-[60] bg-manga-ink text-manga-paper p-6 flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex justify-between items-center mb-4 border-b-4 border-manga-paper/20 pb-2">
                      <h4 className="font-black uppercase italic text-lg">Personnel Registry</h4>
                      <button onClick={() => setShowCharacters(false)}><X className="w-6 h-6" /></button>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar space-y-4">
                      {loadingChars ? (
                        <div className="flex items-center justify-center h-full animate-pulse uppercase font-black italic">Decrypting Data...</div>
                      ) : characters.length > 0 ? (
                        characters.map((char) => (
                          <Link 
                            key={char._id || char.name} 
                            href={`/characters/${char._id || encodeURIComponent(char.name)}`}
                            className="flex gap-4 p-2 border-b-2 border-white/5 group hover:bg-white/5 transition-all cursor-pointer"
                          >
                            <div className="w-12 h-12 relative grayscale group-hover:grayscale-0 transition-all">
                              <Image src={getAssetPath(char.image)} alt={char.name} fill className="object-cover" />
                            </div>
                            <div>
                              <p className="font-black uppercase italic text-sm leading-none group-hover:translate-x-1 transition-transform">{char.name}</p>
                              <p className="text-[10px] font-bold uppercase text-white/50">{char.role || "FIELD AGENT"}</p>
                            </div>
                          </Link>
                        ))
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full opacity-30">
                          <Brain className="w-12 h-12 mb-2" />
                          <p className="font-black uppercase italic text-center text-[10px]">No personnel files found.</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {anime.mangaChapters && anime.mangaChapters.length > 0 && (
                <motion.button 
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenManga(anime);
                  }}
                  className="w-full py-2 bg-red-500 text-white border-4 border-manga-ink font-black uppercase italic text-xs flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_var(--manga-shadow-color)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  READ MANGA
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
});
