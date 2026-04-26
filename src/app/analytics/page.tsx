"use client";

export const dynamic = "force-dynamic";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, ScatterChart, Scatter, ZAxis
} from "recharts";
import { TrendingUp, Users, Star, BarChart3, PieChart as PieChartIcon } from "lucide-react";

const COLORS = ["#ec4899", "#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

export default function AnalyticsPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/discovery/analytics")
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center text-white text-2xl font-bold">Calculating insights...</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-500 to-emerald-500 bg-clip-text text-transparent"
          >
            Intelligence Hub
          </motion.h1>
          <p className="text-gray-400 text-lg">Statistical trends and deep-dives into the anime industry.</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Total Anime", value: "30k+", icon: BarChart3, color: "text-violet-500" },
            { label: "Avg Score", value: "6.82", icon: Star, color: "text-yellow-500" },
            { label: "Database Size", value: "65MB", icon: Users, color: "text-emerald-500" },
            { label: "Updates", value: "Real-time", icon: TrendingUp, color: "text-pink-500" }
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#16161e] border border-gray-800 p-6 rounded-3xl"
            >
              <stat.icon className={`${stat.color} mb-4`} size={28} />
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Release Trends */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#16161e] border border-gray-800 p-8 rounded-[2rem]"
          >
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <TrendingUp className="text-emerald-500" /> Release Trends (1980-2024)
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.anime.trends}>
                  <defs>
                    <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                  <XAxis dataKey="_id" stroke="#555" />
                  <YAxis stroke="#555" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: "#16161e", border: "1px solid #333", borderRadius: "12px" }}
                  />
                  <Area type="monotone" dataKey="count" stroke="#10b981" fillOpacity={1} fill="url(#colorCount)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Genre Performance */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#16161e] border border-gray-800 p-8 rounded-[2rem]"
          >
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <Star className="text-yellow-500" /> Genre Popularity vs Quality
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.anime.genres}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                  <XAxis dataKey="_id" stroke="#555" tick={{ fontSize: 10 }} />
                  <YAxis stroke="#555" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: "#16161e", border: "1px solid #333", borderRadius: "12px" }}
                  />
                  <Bar dataKey="avgScore" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Type Distribution */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#16161e] border border-gray-800 p-8 rounded-[2rem]"
          >
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <PieChartIcon className="text-violet-500" /> Format Breakdown
            </h3>
            <div className="h-[300px] flex items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.anime.types}
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="count"
                    nameKey="_id"
                  >
                    {data.anime.types.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-col gap-2">
                {data.anime.types.map((t: any, i: number) => (
                  <div key={t._id} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                    <span className="text-xs text-gray-400 capitalize">{t._id}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Top Studios */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#16161e] border border-gray-800 p-8 rounded-[2rem]"
          >
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <BarChart3 className="text-pink-500" /> Leading Studios
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.anime.studios} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" horizontal={false} />
                  <XAxis type="number" stroke="#555" />
                  <YAxis dataKey="_id" type="category" stroke="#555" tick={{ fontSize: 10 }} width={100} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: "#16161e", border: "1px solid #333", borderRadius: "12px" }}
                  />
                  <Bar dataKey="count" fill="#ec4899" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
