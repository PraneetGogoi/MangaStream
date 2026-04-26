"use client";

export const dynamic = "force-dynamic";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Sparkles, Send, RefreshCcw, TrendingUp } from "lucide-react";

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
    <div className="min-h-screen bg-[#0a0a0c] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-gradient-to-tr from-pink-500 to-violet-500 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl shadow-pink-500/20"
          >
            <Brain size={40} className="text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            AI Score Predictor
          </motion.h1>
          <p className="text-gray-400 text-lg">Input your project details and let our neural network estimate its potential MAL score.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.form 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-8 bg-[#16161e] p-8 rounded-[2.5rem] border border-gray-800"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Type</label>
                <select 
                  className="w-full bg-[#0a0a0c] border border-gray-800 rounded-2xl p-4 focus:outline-none focus:border-pink-500/50"
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                >
                  <option>TV</option><option>Movie</option><option>OVA</option><option>Special</option><option>ONA</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Source</label>
                <select 
                  className="w-full bg-[#0a0a0c] border border-gray-800 rounded-2xl p-4 focus:outline-none focus:border-pink-500/50"
                  value={formData.source}
                  onChange={(e) => setFormData({...formData, source: e.target.value})}
                >
                  <option>Manga</option><option>Light Novel</option><option>Original</option><option>Visual Novel</option><option>Game</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Select Genres</label>
              <div className="flex flex-wrap gap-3">
                {GENRES.map(genre => (
                  <button
                    key={genre}
                    type="button"
                    onClick={() => handleGenreToggle(genre)}
                    className={cn(
                      "px-4 py-2 rounded-xl text-sm border transition-all",
                      formData.genres.includes(genre)
                        ? "bg-pink-500/10 border-pink-500 text-pink-500"
                        : "bg-black/20 border-gray-800 text-gray-500 hover:border-gray-700"
                    )}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Expected Episodes</label>
                <input 
                  type="number"
                  className="w-full bg-[#0a0a0c] border border-gray-800 rounded-2xl p-4 focus:outline-none focus:border-pink-500/50"
                  value={formData.episodes}
                  onChange={(e) => setFormData({...formData, episodes: parseInt(e.target.value)})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Expected Year</label>
                <input 
                  type="number"
                  className="w-full bg-[#0a0a0c] border border-gray-800 rounded-2xl p-4 focus:outline-none focus:border-pink-500/50"
                  value={formData.year}
                  onChange={(e) => setFormData({...formData, year: parseInt(e.target.value)})}
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-pink-500 to-violet-600 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-pink-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loading ? <RefreshCcw className="animate-spin" /> : <Sparkles />}
              Generate AI Prediction
            </button>
          </motion.form>

          {/* Result Section */}
          <div className="flex flex-col gap-8">
            <AnimatePresence mode="wait">
              {prediction ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-gray-900 to-black p-1 rounded-[2.5rem] shadow-2xl"
                >
                  <div className="bg-[#16161e] rounded-[2.4rem] p-10 text-center border border-white/5">
                    <TrendingUp className="text-pink-500 mx-auto mb-6" size={48} />
                    <h2 className="text-gray-400 uppercase tracking-widest font-bold mb-2">Predicted Score</h2>
                    <div className="text-8xl font-black text-white mb-6">
                      {prediction.toFixed(2)}
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 text-sm text-gray-400">
                      Based on current industry trends for {formData.year}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="h-full bg-[#16161e]/50 border border-dashed border-gray-800 rounded-[2.5rem] flex items-center justify-center text-gray-600 text-center p-12">
                  <div className="space-y-4">
                    <Brain size={48} className="mx-auto opacity-20" />
                    <p>Enter details and run the model to see results</p>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
