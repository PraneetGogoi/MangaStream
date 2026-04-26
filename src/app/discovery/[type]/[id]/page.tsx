"use client";

export const dynamic = "force-dynamic";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Star, Clock, Calendar, Users, Heart, Share2, ArrowLeft, Bookmark, Info, Sparkles, Zap } from "lucide-react";
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
        const itemData = await fetch(`/api/discovery/item?type=${type}&id=${id}`).then(r => r.json());
        const recData = await fetch(`/api/discovery/recommend?id=${id}&type=${type}`).then(r => r.json());
        
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

  if (loading) return (
    <div className="min-h-screen bg-manga-paper flex items-center justify-center text-manga-ink">
      <div className="text-4xl font-black uppercase italic animate-pulse">Syncing Archive Entry...</div>
    </div>
  );

  if (!item || item.error) return (
    <div className="min-h-screen bg-manga-paper flex flex-col items-center justify-center text-manga-ink p-8">
      <h2 className="text-5xl font-black uppercase italic mb-4 tracking-tighter">Entry Redacted</h2>
      <button onClick={() => router.back()} className="text-manga-ink font-black uppercase italic border-b-4 border-manga-ink">Return to Catalog</button>
    </div>
  );

  return (
    <div className="min-h-screen bg-manga-paper text-manga-ink manga-background-texture">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 px-8 border-b-[8px] border-manga-ink overflow-hidden">
        <div className="absolute inset-0 halftone opacity-10" />
        
        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <motion.div 
            initial={{ rotate: -5, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            className="w-80 aspect-[2/3] bg-manga-paper border-[8px] border-manga-ink p-1 rounded-sm shadow-[16px_16px_0px_0px_var(--manga-shadow-color)] shrink-0"
          >
            <img src={item.main_picture} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
          </motion.div>

          <div className="flex-1 space-y-8">
            <button onClick={() => router.back()} className="flex items-center gap-2 font-black uppercase italic text-sm hover:translate-x-[-2px] transition-transform">
              <ArrowLeft size={20} /> Back to Catalog
            </button>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1.5 bg-manga-ink text-manga-paper font-black uppercase italic text-xs rotate-[-2deg]">{item.type}</span>
              <span className="px-4 py-1.5 border-2 border-manga-ink font-black uppercase italic text-xs">{item.status}</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black uppercase italic tracking-tighter leading-none break-words">
              {item.title}
            </h1>
            <p className="text-2xl font-bold italic opacity-60">{item.title_english}</p>

            <div className="flex flex-wrap gap-12 items-center">
              <div className="flex items-center gap-3">
                <div className="bg-manga-ink p-2">
                  <Star className="text-manga-paper fill-manga-paper" size={32} />
                </div>
                <span className="text-6xl font-black tracking-tighter">{item.score}</span>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-black uppercase opacity-40 italic">Members</div>
                <div className="text-2xl font-black">{item.members?.toLocaleString()}</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-black uppercase opacity-40 italic">Favorites</div>
                <div className="text-2xl font-black">{item.favorites?.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-16">
          <section>
            <h2 className="text-3xl font-black uppercase italic mb-8 flex items-center gap-4">
              <Info className="text-manga-ink" size={32} /> Synopsis
            </h2>
            <div className="bg-manga-paper border-[4px] border-manga-ink p-10 rounded-[2.5rem] shadow-[12px_12px_0px_0px_var(--manga-shadow-color)]">
              <p className="text-xl font-bold leading-relaxed whitespace-pre-line text-justify uppercase tracking-tight">
                {item.synopsis}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black uppercase italic mb-8 flex items-center gap-4">
              <Share2 className="text-manga-ink" size={32} /> Archives & Tags
            </h2>
            <div className="flex flex-wrap gap-3">
              {[...(item.genres || []), ...(item.themes || []), ...(item.demographics || [])].map(tag => (
                <span key={tag} className="px-6 py-3 bg-manga-paper border-[4px] border-manga-ink font-black uppercase italic hover:bg-manga-ink hover:text-manga-paper transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <section>
              <h2 className="text-3xl font-black uppercase italic mb-12 flex items-center gap-4">
                <Sparkles className="text-manga-ink" size={32} /> Similar Intel
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                {recommendations.map(rec => (
                  <div 
                    key={rec._id} 
                    onClick={() => router.push(`/discovery/${type}/${rec.mal_id}`)}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-[2/3] bg-manga-paper border-[4px] border-manga-ink rounded-xl overflow-hidden mb-4 relative hover:shadow-[8px_8px_0px_0px_var(--manga-shadow-color)] transition-all">
                      <img src={rec.main_picture} alt={rec.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                      <div className="absolute top-2 right-2 bg-manga-ink text-manga-paper px-2 py-1 font-black text-[10px] uppercase italic flex items-center gap-1">
                        <Star size={10} className="fill-manga-paper" /> {rec.score}
                      </div>
                    </div>
                    <h4 className="font-black uppercase italic text-sm line-clamp-1 group-hover:translate-x-1 transition-transform">{rec.title}</h4>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="space-y-12">
          <div className="bg-manga-paper border-[4px] border-manga-ink rounded-[2.5rem] p-10 shadow-[12px_12px_0px_0px_var(--manga-shadow-color)] space-y-8">
            <h3 className="text-2xl font-black uppercase italic border-b-[4px] border-manga-ink pb-4">Metadata</h3>
            <div className="space-y-6">
              {[
                { label: "Source", value: item.source },
                { label: "Status", value: item.status },
                { label: "Episodes", value: item.episodes || item.chapters },
                { label: "Release Year", value: item.year },
                { label: "Popularity", value: `#${item.popularity}`, accent: true },
              ].map((row, i) => (row.value || row.accent) && (
                <div key={i} className="flex justify-between items-center pb-4 border-b-2 border-manga-ink/10 border-dashed last:border-0">
                  <span className="text-xs font-black uppercase opacity-40 italic">{row.label}</span>
                  <span className={cn("font-black uppercase italic", row.accent && "text-manga-ink bg-manga-paper px-2 py-0.5 border-2 border-manga-ink")}>
                    {row.value || "N/A"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full bg-manga-ink text-manga-paper p-8 border-[4px] border-manga-ink shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all group">
            <div className="flex items-center justify-center gap-4">
              <Zap className="group-hover:animate-pulse" size={32} />
              <div className="text-left">
                <div className="text-2xl font-black uppercase italic leading-none">Archival Sync</div>
                <div className="text-[10px] font-black uppercase opacity-60">Add to personal records</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
