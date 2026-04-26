"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Star, Clock, Calendar, Users, Heart, Share2, ArrowLeft, Play, Bookmark } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export default function DiscoveryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { type, id } = params;
  
  const [item, setItem] = useState<any>(null);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [itemRes, recRes] = await Promise.all([
          fetch(`/api/discovery/search?type=${type}&q=${id}&limit=1`), // Hacky search by ID using our search API or we could make a direct fetch
          // Wait, let's make a direct fetch to a new endpoint or update search
          fetch(`/api/discovery/recommend?id=${id}&type=${type}`)
        ]);
        
        // Since search isn't optimized for ID, let's add a specific fetch logic
        const itemData = await fetch(`/api/discovery/item?type=${type}&id=${id}`).then(r => r.json());
        const recData = await recRes.json();
        
        setItem(itemData);
        setRecommendations(recData);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, type]);

  if (loading) return <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center text-white text-2xl font-bold">Accessing database...</div>;
  if (!item) return <div className="min-h-screen bg-[#0a0a0c] flex flex-col items-center justify-center text-white p-8">
    <h2 className="text-3xl font-bold mb-4">Entry Not Found</h2>
    <button onClick={() => router.back()} className="text-pink-500 hover:underline">Go Back</button>
  </div>;

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={item.main_picture} alt="" className="w-full h-full object-cover blur-2xl opacity-20 scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/40 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-8 h-full flex items-end pb-12 gap-12">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-72 aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 hidden md:block shrink-0"
          >
            <img src={item.main_picture} alt={item.title} className="w-full h-full object-cover" />
          </motion.div>

          <div className="flex-1 space-y-6">
            <button onClick={() => router.back()} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Catalog
            </button>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1.5 bg-pink-500 rounded-full text-xs font-bold uppercase tracking-wider">{item.type}</span>
              <span className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10">{item.status}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black">{item.title}</h1>
            <p className="text-gray-400 text-lg italic">{item.title_english}</p>

            <div className="flex flex-wrap gap-8 items-center">
              <div className="flex items-center gap-2">
                <Star className="text-yellow-500 fill-yellow-500" />
                <span className="text-3xl font-black">{item.score}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users size={20} />
                <span className="font-bold">{item.members.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Heart size={20} />
                <span className="font-bold">{item.favorites.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Info className="text-pink-500" /> Synopsis
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed whitespace-pre-line">
              {item.synopsis}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Share2 className="text-violet-500" /> Genres & Themes
            </h2>
            <div className="flex flex-wrap gap-3">
              {[...item.genres, ...item.themes, ...item.demographics].map(tag => (
                <span key={tag} className="px-6 py-3 bg-[#16161e] border border-gray-800 rounded-2xl text-gray-300 hover:border-pink-500/50 transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Sparkles className="text-emerald-500" /> Recommended For You
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {recommendations.map(rec => (
                  <div 
                    key={rec._id} 
                    onClick={() => router.push(`/discovery/${type}/${rec.mal_id}`)}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-[2/3] rounded-2xl overflow-hidden mb-3 relative border border-white/5">
                      <img src={rec.main_picture} alt={rec.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded-lg text-xs font-bold border border-white/10 flex items-center gap-1">
                        <Star size={10} className="text-yellow-500 fill-yellow-500" /> {rec.score}
                      </div>
                    </div>
                    <h4 className="font-bold text-sm line-clamp-1 group-hover:text-pink-500 transition-colors">{rec.title}</h4>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div className="bg-[#16161e] border border-gray-800 rounded-[2.5rem] p-8 space-y-6">
            <h3 className="text-xl font-bold mb-4">Metadata</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-gray-500">Source</span>
                <span className="font-bold">{item.source || "N/A"}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-gray-500">Episodes</span>
                <span className="font-bold">{item.episodes || item.chapters || "N/A"}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-gray-500">Aired</span>
                <span className="font-bold">{item.year || "N/A"}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-gray-500">Rating</span>
                <span className="font-bold text-xs max-w-[150px] text-right">{item.rating || "N/A"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Popularity Rank</span>
                <span className="font-bold text-pink-500">#{item.popularity}</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-[2.5rem] p-8 text-center shadow-xl shadow-indigo-500/20">
            <h3 className="text-xl font-bold mb-4">Track Progress</h3>
            <p className="text-indigo-100/70 text-sm mb-6">Add this entry to your personal vault to sync across devices.</p>
            <button className="w-full bg-white text-indigo-700 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
              <Bookmark size={20} /> Add to Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Info, Sparkles } from "lucide-react";
