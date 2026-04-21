"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, Activity, Zap, Users, MessageSquare, 
  ArrowLeft, ShieldAlert, Sparkles, Database, 
  Radio
} from "lucide-react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getEngagementAnalytics } from "../../actions";

export default function LeylineAnalyticsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated" || (session && (session.user as any).role !== "admin")) {
      router.push("/");
    }
  }, [session, status, router]);

  useEffect(() => {
    async function loadData() {
      const result = await getEngagementAnalytics();
      if (result.success) {
        setData(result);
      }
      setIsLoading(false);
    }
    if (session) loadData();
  }, [session]);

  if (status === "loading" || isLoading) {
    return (
      <div className="min-h-screen bg-manga-paper flex flex-col items-center justify-center p-8">
        <div className="relative">
            <motion.div 
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-32 h-32 border-[10px] border-manga-ink border-t-blue-500 rounded-full"
            />
            <Activity className="absolute inset-0 m-auto w-10 h-10 text-manga-ink animate-pulse" />
        </div>
        <h1 className="text-4xl font-black uppercase italic mt-12 tracking-tighter">Syncing Leylines...</h1>
        <p className="text-xs font-bold uppercase opacity-40 mt-2">Connecting to global interaction matrix</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-manga-paper text-manga-ink pb-40 selection:bg-manga-ink selection:text-manga-paper transition-colors duration-300 relative overflow-hidden">
      {/* Background Grid & FX */}
      <div className="absolute inset-0 halftone opacity-5 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
      
      {/* Header */}
      <header className="fixed top-0 inset-x-0 bg-manga-paper/80 backdrop-blur-md border-b-[6px] border-manga-ink z-[100] px-4 md:px-8 py-6 flex items-center justify-between">
        <Link 
          href="/admin"
          className="flex items-center gap-3 font-black uppercase italic group"
        >
          <div className="bg-manga-ink p-2 group-hover:-translate-x-1 transition-transform">
            <ArrowLeft className="text-manga-paper w-6 h-6" />
          </div>
          <span>Command Vault</span>
        </Link>

        <div className="flex items-center gap-6">
            <div className="flex flex-col items-end">
                <span className="text-[10px] font-black uppercase opacity-40 tracking-widest leading-none mb-1">Clearance Level</span>
                <span className="text-sm font-black uppercase italic">Administrative Sentinel</span>
            </div>
            <div className="h-10 w-[4px] bg-manga-ink" />
            <h1 className="text-2xl font-black uppercase italic tracking-tighter">Leyline Terminal</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pt-32 md:pt-48">
        {/* Title Section */}
        <div className="mb-20 relative">
             <motion.div 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 0.05, x: 0 }}
                className="absolute -top-16 -left-10 text-[180px] font-black uppercase italic text-manga-ink select-none pointer-events-none whitespace-nowrap"
            >
                ENGAGEMENT
            </motion.div>
            
            <div className="flex items-center gap-8 mb-6">
                <div className="bg-manga-ink p-6 rotate-[-4deg] shadow-[12px_12px_0px_0px_rgba(59,130,246,0.3)]">
                    <BarChart3 className="text-manga-paper w-16 h-16" />
                </div>
                <div>
                    <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
                        Data <span className="bg-manga-ink text-manga-paper px-4 relative overflow-hidden">
                            Leylines
                            <motion.div 
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
                            />
                        </span>
                    </h2>
                    <p className="text-xl font-bold border-l-[8px] border-manga-ink pl-6 mt-4 uppercase italic tracking-tight flex items-center gap-3">
                        <Activity className="w-5 h-5 text-blue-500" /> Real-time neural interaction matrix desynchronized from the global vault.
                    </p>
                </div>
            </div>
        </div>

        {/* Global Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            {[
                { label: 'Network Nodes', value: data?.totalUsers || 0, icon: Users, color: 'text-manga-ink' },
                { label: 'Committed Logs', value: data?.totalLogs || 0, icon: MessageSquare, color: 'text-blue-500' },
                { label: 'Active Signals', value: data?.signals?.length || 0, icon: Radio, color: 'text-red-500' },
                { label: 'Vault Fidelity', value: '99.9%', icon: ShieldAlert, color: 'text-green-500' },
            ].map((stat, idx) => (
                <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-manga-paper border-[6px] border-manga-ink p-8 shadow-[12px_12px_0px_0px_var(--manga-shadow-color)] relative group overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-manga-ink/5 rotate-45 translate-x-12 -translate-y-12 group-hover:bg-manga-ink/10 transition-colors" />
                    <stat.icon className={`w-10 h-10 ${stat.color} mb-6`} />
                    <div className="text-5xl font-black italic tracking-tighter mb-2">{stat.value}</div>
                    <div className="text-xs font-black uppercase opacity-40 tracking-widest">{stat.label}</div>
                </motion.div>
            ))}
        </div>

        {/* Main Analytics Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Trending Charts */}
            <div className="lg:col-span-8 space-y-12">
                <section className="bg-manga-paper border-[8px] border-manga-ink p-10 shadow-[24px_24px_0px_0px_var(--manga-shadow-color)] relative">
                    <div className="flex items-center justify-between mb-12 border-b-6 border-manga-ink pb-6">
                        <h3 className="text-4xl font-black uppercase italic tracking-tighter flex items-center gap-4">
                            <Zap className="w-10 h-10 text-yellow-500 fill-yellow-500" /> Neural Hotspots (Trending Top 5)
                        </h3>
                        <div className="text-[10px] font-black uppercase opacity-40 italic tracking-widest">Ordered by ED Score</div>
                    </div>

                    <div className="space-y-12">
                        {data?.trending?.map((anime: any, idx: number) => (
                            <div key={anime.id} className="space-y-3">
                                <div className="flex items-end justify-between px-2">
                                    <div className="flex items-center gap-4">
                                        <span className="text-2xl font-black italic opacity-20">#0{idx + 1}</span>
                                        <span className="text-2xl font-black uppercase italic tracking-tighter">{anime.title}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-black uppercase opacity-40 mr-3 italic">ED SCORE</span>
                                        <span className="text-3xl font-black italic text-blue-500">{anime.edScore}</span>
                                    </div>
                                </div>
                                <div className="h-10 bg-manga-ink/5 border-2 border-manga-ink relative overflow-hidden">
                                     <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: `${Math.min(100, (anime.edScore / (data.trending[0].edScore || 1)) * 100)}%` }}
                                        transition={{ duration: 1.5, delay: idx * 0.2, ease: "easeOut" }}
                                        className="absolute inset-y-0 left-0 bg-manga-ink flex items-center justify-end px-4 overflow-hidden"
                                     >
                                        <motion.div 
                                            animate={{ opacity: [1, 0.4, 1] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                            className="h-[2px] w-full bg-white/20 absolute top-2"
                                        />
                                        <div className="flex gap-4 text-[10px] font-black uppercase text-manga-paper italic whitespace-nowrap">
                                            <span>Logs: {anime.reviewCount}</span>
                                            <span className="opacity-40">|</span>
                                            <span>Pulse: {anime.watchlistCount}</span>
                                        </div>
                                     </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Biometric Pulse Matrix (Heatmap) */}
                <section className="bg-manga-paper border-[8px] border-manga-ink p-10 shadow-[24px_24px_0px_0px_var(--manga-shadow-color)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Activity className="w-40 h-40" />
                    </div>
                    
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-3xl font-black uppercase italic tracking-tighter flex items-center gap-4">
                            <Activity className="w-8 h-8" /> Biometric Pulse Matrix
                        </h3>
                        <div className="flex items-center gap-3">
                             <div className="w-3 h-3 bg-manga-ink/10" />
                             <div className="w-3 h-3 bg-blue-300" />
                             <div className="w-3 h-3 bg-blue-500" />
                             <div className="w-3 h-3 bg-manga-ink" />
                             <span className="text-[10px] font-black uppercase opacity-40 ml-2 italic">Signal Intensity</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 sm:grid-cols-24 gap-1 sm:gap-2">
                        {Array.from({ length: 24 * 7 }).map((_, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: (i % 24) * 0.02 + Math.floor(i / 24) * 0.05 }}
                                className={`aspect-square border border-manga-ink/10 transition-colors hover:border-manga-ink cursor-crosshair ${
                                    Math.random() > 0.8 ? 'bg-blue-500/40' : Math.random() > 0.95 ? 'bg-manga-ink' : 'bg-manga-ink/5'
                                }`}
                                title={`Matrix Node: T+${Math.floor(i/24)}h : ${i%24}:00`}
                            />
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-[8px] font-black uppercase opacity-20 tracking-[0.4em] italic px-2">
                        <span>00:00</span>
                        <span>06:00</span>
                        <span>12:00</span>
                        <span>18:00</span>
                        <span>23:59</span>
                    </div>
                </section>
            </div>

            {/* Right Column: Latest Signals */}
            <div className="lg:col-span-4 space-y-12">
                 <section className="bg-manga-paper border-[8px] border-manga-ink p-8 shadow-[16px_16px_0px_0px_var(--manga-shadow-color)] min-h-[600px] relative">
                    <div className="flex items-center gap-4 mb-10 border-b-4 border-manga-ink pb-4">
                        <Radio className="w-8 h-8 animate-pulse text-red-500" />
                        <h3 className="text-2xl font-black uppercase italic tracking-tighter">Latest Signals</h3>
                    </div>

                    <div className="space-y-8 relative">
                        <div className="absolute left-6 inset-y-0 w-1 bg-dashed bg-manga-ink/10" />
                        
                        <AnimatePresence>
                            {(data?.signals || []).map((signal: any, idx: number) => (
                                <motion.div 
                                    key={signal.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative pl-16 group"
                                >
                                    <div className="absolute left-4 top-2 w-5 h-5 bg-manga-ink border-4 border-manga-paper rounded-full group-hover:scale-150 transition-transform z-10" />
                                    <div className="text-[10px] font-black uppercase opacity-40 mb-1 flex items-center justify-between italic">
                                        <span>SIGNAL ID: {signal.id.slice(-8)}</span>
                                        <span>{new Date(signal.timestamp).toLocaleTimeString()}</span>
                                    </div>
                                    <div className="bg-manga-ink/5 p-4 border-l-4 border-manga-ink group-hover:bg-manga-ink/10 transition-colors">
                                        <div className="font-black text-sm uppercase italic mb-1">
                                            <span className="text-blue-500">@{signal.user}</span> {signal.action}
                                        </div>
                                        <div className="text-[10px] font-bold opacity-60">TARGET: {signal.target.toUpperCase()}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {(!data?.signals || data.signals.length === 0) && (
                            <div className="text-center py-20 opacity-20">
                                <Radio className="w-12 h-12 mx-auto mb-4" />
                                <p className="font-black uppercase italic">Scanning frequencies...</p>
                            </div>
                        )}
                    </div>

                    <div className="absolute bottom-8 left-8 right-8 text-[10px] font-black uppercase italic opacity-20 border-t-2 border-manga-ink/10 pt-4 text-center">
                       Real-time telemetry stream active.
                    </div>
                 </section>

                 {/* System Integrity */}
                 <section className="bg-manga-ink text-manga-paper p-8 shadow-[16px_16px_0px_0px_rgba(59,130,246,0.2)]">
                    <div className="flex items-center gap-4 mb-6">
                        <Database className="w-8 h-8" />
                        <h3 className="text-2xl font-black uppercase italic tracking-tighter leading-none">Database <br /> Integrity</h3>
                    </div>
                    <div className="space-y-4">
                        {[
                            { label: 'Cluster Connectivity', status: 'Stable', color: 'bg-green-400' },
                            { label: 'Neural Throughput', status: 'Optimal', color: 'bg-blue-400' },
                            { label: 'Archival Latency', status: '12ms', color: 'bg-yellow-400' },
                        ].map(item => (
                            <div key={item.label} className="flex items-center justify-between border-b border-manga-paper/10 pb-2">
                                <span className="text-[10px] font-bold uppercase opacity-60">{item.label}</span>
                                <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${item.color} animate-pulse`} />
                                    <span className="text-[10px] font-black italic">{item.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                 </section>
            </div>
        </div>
      </main>

      {/* Decorative Matrix Code Sidebar */}
      <div className="fixed top-0 bottom-0 right-0 w-8 flex flex-col items-center justify-center opacity-10 gap-4 overflow-hidden pointer-events-none">
            {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="text-[8px] font-bold uppercase rotate-90">{Math.random() > 0.5 ? '1' : '0'}</div>
            ))}
      </div>
    </div>
  );
}
