"use client";

export const dynamic = "force-dynamic";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area
} from "recharts";
import { TrendingUp, Calendar, PieChart as PieIcon, BarChart3, Activity, Zap, Box } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export default function AnalyticsPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/discovery/analytics")
      .then(res => res.json())
      .then(data => {
        if (data.anime) {
          setData(data.anime);
        } else {
          setData(data);
        }
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="min-h-screen bg-manga-paper flex items-center justify-center text-manga-ink">
      <div className="text-4xl font-black uppercase italic animate-pulse">Scanning Archives...</div>
    </div>
  );

  const MANGA_COLORS = ["#000000", "#333333", "#666666", "#999999", "#CCCCCC"];

  return (
    <div className="min-h-screen bg-manga-paper text-manga-ink manga-background-texture pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <header className="relative">
          <div className="absolute -top-12 -left-6 opacity-10 pointer-events-none text-8xl font-black uppercase italic">
            Intelligence
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-manga-ink p-2 rotate-[5deg]">
              <Activity className="text-manga-paper w-8 h-8" />
            </div>
            <h1 className="text-6xl font-black tracking-tighter uppercase italic">Intelligence Hub</h1>
          </div>
          <p className="text-xl font-bold border-l-4 border-manga-ink pl-4 max-w-2xl uppercase">
            LIVE ANALYTICS AND DEEP DATA INSIGHTS INTO THE GLOBAL ANIME & MANGA ECOSYSTEM.
          </p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Total Titles", value: "95k+", icon: Box },
            { label: "Avg Score", value: "7.42", icon: Zap },
            { label: "Active Studios", value: "480", icon: BarChart3 },
            { label: "Growth Rate", value: "+12%", icon: TrendingUp },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-manga-paper border-[4px] border-manga-ink p-8 rounded-2xl shadow-[8px_8px_0px_0px_var(--manga-shadow-color)] group hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="text-manga-ink group-hover:rotate-12 transition-transform" size={24} />
                <span className="text-[10px] font-black uppercase tracking-widest opacity-30">v1.0.4</span>
              </div>
              <h3 className="text-sm font-black uppercase italic opacity-60 mb-1">{stat.label}</h3>
              <div className="text-4xl font-black tracking-tighter">{stat.value}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Release Trend */}
          <div className="bg-manga-paper border-[4px] border-manga-ink p-10 rounded-[2.5rem] shadow-[12px_12px_0px_0px_var(--manga-shadow-color)]">
            <h3 className="text-2xl font-black uppercase italic mb-8 flex items-center gap-3">
              <Calendar className="text-manga-ink" /> Historical Release Trends
            </h3>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data?.trends || []}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#00000010" />
                  <XAxis dataKey="_id" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 'bold' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 'bold' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '4px solid #000', borderRadius: '12px', fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="count" stroke="#000" fill="#000" fillOpacity={0.05} strokeWidth={4} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Genre Distribution */}
          <div className="bg-manga-paper border-[4px] border-manga-ink p-10 rounded-[2.5rem] shadow-[12px_12px_0px_0px_var(--manga-shadow-color)]">
            <h3 className="text-2xl font-black uppercase italic mb-8 flex items-center gap-3">
              <PieIcon className="text-manga-ink" /> Dominant Genres
            </h3>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data?.genres || []}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="count"
                    nameKey="_id"
                  >
                    {data.genres.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={MANGA_COLORS[index % MANGA_COLORS.length]} stroke="#fff" strokeWidth={4} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '4px solid #000', borderRadius: '12px', fontWeight: 'bold' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Format Breakdown */}
        <div className="bg-manga-paper border-[4px] border-manga-ink p-10 rounded-[2.5rem] shadow-[12px_12px_0px_0px_var(--manga-shadow-color)]">
          <h3 className="text-2xl font-black uppercase italic mb-8 flex items-center gap-3">
            <BarChart3 className="text-manga-ink" /> Content Formats
          </h3>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data?.types || []}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#00000010" />
                <XAxis dataKey="_id" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 'bold' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 'bold' }} />
                <Tooltip 
                  cursor={{ fill: '#00000005' }}
                  contentStyle={{ backgroundColor: '#fff', border: '4px solid #000', borderRadius: '12px', fontWeight: 'bold' }}
                />
                <Bar dataKey="count" fill="#000" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
