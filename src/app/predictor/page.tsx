"use client";

export const dynamic = "force-dynamic";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Sparkles, Send, RefreshCcw, TrendingUp, Zap } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export default function PredictorPage() {
  const [formData, setFormData] = useState({
    title: "",
    type: "TV",
    source: "Manga",
    episodes: 12,
    duration_min: 24,
    rating: "PG-13 - Teens 13 or older",
    season: "spring",
    year: 2024,
    members: 10000,
    favorites: 500,
    scored_by: 8000,
    airing: false,
    genres: [] as string[]
  });

  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const GENRES = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Mystery", "Romance", "Sci-Fi", "Slice of Life", "Supernatural"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/discovery/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setPrediction(data.score);
    } catch (error) {
      console.error("Prediction error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenreToggle = (genre: string) => {
    setFormData(prev => ({
      ...prev,
      genres: prev.genres.includes(genre) 
        ? prev.genres.filter(g => g !== genre)
        : [...prev.genres, genre]
    }));
  };

  return (
    <div className="min-h-screen bg-manga-paper text-manga-ink manga-background-texture pt-32 pb-20 px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16 relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none text-8xl font-black uppercase italic whitespace-nowrap">
            Oracle AI
          </div>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 bg-manga-ink p-4 rotate-[5deg] mx-auto mb-6 flex items-center justify-center shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)]"
          >
            <Brain size={48} className="text-manga-paper" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-black tracking-tighter uppercase italic mb-4"
          >
            AI Score Predictor
          </motion.h1>
          <p className="text-xl font-bold uppercase max-w-lg mx-auto">
            SUBMIT YOUR PROJECT SPECS. <br />
            OUR NEURAL NETWORK WILL ESTIMATE ITS SUCCESS.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="space-y-12 bg-manga-paper p-12 border-[4px] border-manga-ink rounded-[2.5rem] shadow-[20px_20px_0px_0px_var(--manga-shadow-color)]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest font-black opacity-50 ml-1 italic">Release Format</label>
                <select 
                  className="w-full bg-manga-paper border-[4px] border-manga-ink rounded-xl p-4 font-black uppercase italic focus:outline-none"
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                >
                  <option>TV</option><option>Movie</option><option>OVA</option><option>Special</option><option>ONA</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest font-black opacity-50 ml-1 italic">Source Material</label>
                <select 
                  className="w-full bg-manga-paper border-[4px] border-manga-ink rounded-xl p-4 font-black uppercase italic focus:outline-none"
                  value={formData.source}
                  onChange={(e) => setFormData({...formData, source: e.target.value})}
                >
                  <option>Manga</option><option>Light Novel</option><option>Original</option><option>Visual Novel</option><option>Game</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              <label className="text-xs uppercase tracking-widest font-black opacity-50 ml-1 italic">Select Genres (Select Multiple)</label>
              <div className="flex flex-wrap gap-3">
                {GENRES.map(genre => (
                  <button
                    key={genre}
                    type="button"
                    onClick={() => handleGenreToggle(genre)}
                    className={cn(
                      "px-6 py-3 rounded-xl text-sm font-black uppercase italic border-2 transition-all",
                      formData.genres.includes(genre)
                        ? "bg-manga-ink text-manga-paper border-manga-ink shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
                        : "bg-manga-paper border-manga-ink/20 text-manga-ink/40 hover:border-manga-ink/60"
                    )}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest font-black opacity-50 ml-1 italic">Expected Episodes</label>
                <input 
                  type="number"
                  className="w-full bg-manga-paper border-[4px] border-manga-ink rounded-xl p-4 font-black uppercase italic focus:outline-none"
                  value={formData.episodes}
                  onChange={(e) => setFormData({...formData, episodes: parseInt(e.target.value)})}
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest font-black opacity-50 ml-1 italic">Target Year</label>
                <input 
                  type="number"
                  className="w-full bg-manga-paper border-[4px] border-manga-ink rounded-xl p-4 font-black uppercase italic focus:outline-none"
                  value={formData.year}
                  onChange={(e) => setFormData({...formData, year: parseInt(e.target.value)})}
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-manga-ink text-manga-paper py-6 rounded-2xl font-black text-2xl uppercase italic shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,0.3)] active:translate-x-0 active:translate-y-0 transition-all flex items-center justify-center gap-4 disabled:opacity-50"
            >
              {loading ? <RefreshCcw className="animate-spin" /> : <Zap />}
              Execute Prediction
            </button>
          </motion.form>

          {/* Result Section */}
          <AnimatePresence mode="wait">
            {prediction && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-12 bg-manga-ink p-1 rounded-[2.5rem] shadow-[20px_20px_0px_0px_rgba(0,0,0,0.2)]"
              >
                <div className="bg-manga-paper rounded-[2.4rem] p-12 text-center border-[8px] border-manga-ink">
                  <TrendingUp className="text-manga-ink mx-auto mb-6" size={64} />
                  <h2 className="text-xl font-black uppercase italic opacity-40 mb-2">Calculated mal_score</h2>
                  <div className="text-9xl font-black tracking-tighter text-manga-ink mb-6">
                    {prediction.toFixed(2)}
                  </div>
                  <div className="bg-manga-ink/5 border-2 border-dashed border-manga-ink rounded-2xl p-6 text-sm font-black uppercase italic text-manga-ink/60">
                    DATA SYNCHRONIZATION COMPLETE FOR FISCAL YEAR {formData.year}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
