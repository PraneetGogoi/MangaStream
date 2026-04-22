"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Monitor, List, Layers, Volume2, Maximize2 } from "lucide-react";
import { useState } from "react";

interface AnimePlayerProps {
  anime: any;
  initialEpisode: { season: number; number: number; url: string; title: string };
  onClose: () => void;
}

export const AnimePlayer = ({ anime, initialEpisode, onClose }: AnimePlayerProps) => {
  const [currentEp, setCurrentEp] = useState(initialEpisode);
  const [activeSeason, setActiveSeason] = useState(initialEpisode.season);

  const seasons = anime.seasons || [];
  const currentSeasonData = seasons.find((s: any) => s.number === activeSeason);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[500] bg-black flex flex-col overflow-hidden"
    >
      {/* Player Header */}
      <header className="w-full bg-manga-ink p-4 flex items-center justify-between border-b-4 border-white/20">
        <div className="flex items-center gap-4">
          <div className="bg-white p-2 rotate-[-3deg]">
            <Monitor className="text-black w-6 h-6" />
          </div>
          <div>
            <h2 className="text-white font-black uppercase italic tracking-tighter leading-none">
              {anime.title}
            </h2>
            <p className="text-white/50 text-[10px] font-black uppercase">
              Season {currentEp.season} • Episode {currentEp.number}: {currentEp.title}
            </p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="bg-white text-black p-2 hover:bg-red-600 hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]"
        >
          <X className="w-6 h-6" />
        </button>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Main Cinema View */}
        <div className="flex-1 bg-black relative group flex items-center justify-center">
          <iframe 
            src={currentEp.url || `https://www.youtube.com/embed/${anime.trailerUrl.split('v=')[1]}`}
            className="w-full h-full border-none"
            allowFullScreen
            title={currentEp.title}
          />
          
          {/* Tactical Overlay (Simulation) */}
          <div className="absolute top-8 left-8 pointer-events-none opacity-20 group-hover:opacity-100 transition-opacity">
            <div className="text-[10px] font-black text-white bg-black/50 p-2 border border-white/20 uppercase tracking-widest">
              Live Stream Archival // Node: OMNI-STREAM-01
            </div>
          </div>
        </div>

        {/* Sidebar: Episode Ledger */}
        <aside className="w-full lg:w-96 bg-manga-ink border-l-4 border-white/10 flex flex-col overflow-hidden">
          <div className="p-6 border-b-4 border-white/5">
            <h3 className="text-white font-black uppercase italic text-2xl flex items-center gap-2">
              <List className="w-6 h-6" /> Episode Ledger
            </h3>
          </div>

          {/* Season Selector */}
          <div className="flex gap-2 p-4 overflow-x-auto no-scrollbar">
            {seasons.map((s: any) => (
              <button
                key={s.number}
                onClick={() => setActiveSeason(s.number)}
                className={`px-4 py-2 font-black uppercase italic text-xs border-2 transition-all ${
                  activeSeason === s.number 
                    ? "bg-white text-black border-white" 
                    : "text-white border-white/20 hover:border-white"
                }`}
              >
                Season {s.number}
              </button>
            ))}
          </div>

          {/* Episode List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
            {currentSeasonData?.episodes.map((ep: any) => (
              <button
                key={ep.number}
                onClick={() => setCurrentEp({ ...ep, season: activeSeason })}
                className={`w-full p-4 flex items-center gap-4 border-2 transition-all group ${
                  currentEp.number === ep.number && currentEp.season === activeSeason
                    ? "bg-white/10 border-white text-white"
                    : "border-transparent text-white/50 hover:bg-white/5 hover:text-white"
                }`}
              >
                <div className={`w-10 h-10 flex items-center justify-center font-black italic ${
                  currentEp.number === ep.number && currentEp.season === activeSeason
                    ? "bg-white text-black"
                    : "bg-white/10 group-hover:bg-white/20"
                }`}>
                  {ep.number}
                </div>
                <div className="flex-1 text-left">
                  <p className="text-[10px] font-black uppercase opacity-50 mb-1">Episode {ep.number}</p>
                  <p className="font-black uppercase italic text-xs leading-none">{ep.title}</p>
                </div>
                <Play className={`w-4 h-4 ${
                   currentEp.number === ep.number && currentEp.season === activeSeason ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`} />
              </button>
            ))}
          </div>
        </aside>
      </div>
    </motion.div>
  );
};
