"use client";

export const dynamic = "force-dynamic";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, ComposedChart, Scatter, Legend
} from "recharts";
import { TrendingUp, Calendar, PieChart as PieIcon, BarChart3, Activity, Zap, Box, Layout, Award, Users } from "lucide-react";
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

  const MANGA_COLORS = ["#000000", "#333333", "#666666", "#999999", "#BBBBBB", "#DDDDDD"];

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
            { label: "Avg Score", value: "7.42", icon: Award },
            { label: "Active Studios", value: "480+", icon: BarChart3 },
            { label: "Global Reach", value: "2.4B", icon: Users },
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
                <span className="text-[10px] font-black uppercase tracking-widest opacity-30">Archive ID: {400 + i}</span>
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
              <Calendar className="text-manga-ink" /> Historical Trends (1980-2026)
            </h3>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data?.trends || []}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#00000010" />
                  <XAxis dataKey="_id" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '4px solid #000', borderRadius: '12px', fontWeight: 'bold' }}
                  />
                  <Area type="step" dataKey="count" stroke="#000" fill="#000" fillOpacity={0.05} strokeWidth={4} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Genre Distribution */}
          <div className="bg-manga-paper border-[4px] border-manga-ink p-10 rounded-[2.5rem] shadow-[12px_12px_0px_0px_var(--manga-shadow-color)]">
            <h3 className="text-2xl font-black uppercase italic mb-8 flex items-center gap-3">
              <PieIcon className="text-manga-ink" /> Market Dominance
            </h3>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data?.genres || []}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={5}
                    dataKey="count"
                    nameKey="_id"
                  >
                    {data?.genres?.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={MANGA_COLORS[index % MANGA_COLORS.length]} stroke="#fff" strokeWidth={4} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '4px solid #000', borderRadius: '12px', fontWeight: 'bold' }}
                  />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Score Distribution */}
          <div className="lg:col-span-1 bg-manga-paper border-[4px] border-manga-ink p-10 rounded-[2.5rem] shadow-[12px_12px_0px_0px_var(--manga-shadow-color)]">
            <h3 className="text-xl font-black uppercase italic mb-8">Score Density</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data?.scores || []}>
                  <XAxis dataKey="_id" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'black' }} />
                  <Tooltip cursor={{fill: '#00000005'}} contentStyle={{ backgroundColor: '#fff', border: '4px solid #000', borderRadius: '8px' }} />
                  <Bar dataKey="count" fill="#000" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Status Breakdown */}
          <div className="lg:col-span-1 bg-manga-paper border-[4px] border-manga-ink p-10 rounded-[2.5rem] shadow-[12px_12px_0px_0px_var(--manga-shadow-color)]">
            <h3 className="text-xl font-black uppercase italic mb-8">Airing Status</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data?.status || []}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    dataKey="count"
                    nameKey="_id"
                  >
                    {data?.status?.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={MANGA_COLORS[index % MANGA_COLORS.length]} stroke="#fff" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Studios */}
          <div className="lg:col-span-1 bg-manga-paper border-[4px] border-manga-ink p-10 rounded-[2.5rem] shadow-[12px_12px_0px_0px_var(--manga-shadow-color)]">
            <h3 className="text-xl font-black uppercase italic mb-8">Legendary Studios</h3>
            <div className="space-y-4 max-h-[300px] overflow-y-auto custom-scrollbar pr-4">
              {data?.studios?.map((studio: any, i: number) => (
                <div key={i} className="flex items-center justify-between border-b-2 border-manga-ink/10 pb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black opacity-30">#{i+1}</span>
                    <span className="font-black uppercase italic text-sm">{studio._id}</span>
                  </div>
                  <span className="bg-manga-ink text-manga-paper px-2 py-0.5 text-[10px] font-black">{studio.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Source Material Comparison */}
        <div className="bg-manga-paper border-[4px] border-manga-ink p-10 rounded-[2.5rem] shadow-[12px_12px_0px_0px_var(--manga-shadow-color)]">
          <h3 className="text-2xl font-black uppercase italic mb-8 flex items-center gap-3">
            <Layout className="text-manga-ink" /> Origins of the Annals
          </h3>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={data?.sources || []} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#00000010" />
                <XAxis type="number" axisLine={false} tickLine={false} hide />
                <YAxis dataKey="_id" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 'black', width: 100 }} width={120} />
                <Tooltip cursor={{fill: '#00000005'}} contentStyle={{ backgroundColor: '#fff', border: '4px solid #000', borderRadius: '12px' }} />
                <Bar dataKey="count" fill="#000" radius={[0, 10, 10, 0]} barSize={30} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
