"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { User, Settings, Save, Lock, AlertTriangle, ShieldCheck, ArrowLeft, Zap, Sparkles, X, Camera, Upload } from "lucide-react";
import { updateUserProfile, uploadProfilePicture } from "../actions";
import Link from "next/link";

export default function AccountSettingsPage() {
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  // Form States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (session?.user?.name) {
      setUsername(session.user.name);
    }
  }, [session]);

  if (status === "loading") return null;
  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (password && password !== confirmPassword) {
      setMessage({ type: 'error', text: "Passwords do not match!" });
      return;
    }

    setIsSubmitting(true);
    const result = await updateUserProfile({ 
      username: username !== session?.user?.name ? username : undefined,
      password: password || undefined 
    });
    setIsSubmitting(false);

    if (result.success) {
      setMessage({ type: 'success', text: "PROFILE ARCHIVE UPDATED SUCCESSFULLY." });
      setPassword("");
      setConfirmPassword("");
      // Update session if username changed
      if (username !== session?.user?.name) {
        update({ name: username });
      }
    } else {
      setMessage({ type: 'error', text: result.error || "UPDATE FAILED. CHECK SYSTEM STATUS." });
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Client-side size check (3MB to respect server limits)
    if (file.size > 3 * 1024 * 1024) {
      setMessage({ type: 'error', text: "FILE TOO HEAVY. MATRIX LIMIT IS 3MB." });
      return;
    }

    setIsSubmitting(true);
    setMessage({ type: 'success', text: "INITIATING BIOMETRIC FORGERY..." });
    
    const formData = new FormData();
    formData.append("file", file);

    try {
      const result = await uploadProfilePicture(formData);
      setIsSubmitting(false);

      if (result.success) {
        setMessage({ type: 'success', text: "BIO-LINK (IMAGE) FORGED SUCCESSFULLY." });
        update(); // Triggers session re-fetch from DB
      } else {
        setMessage({ type: 'error', text: result.error || "IMAGE FORGERY FAILED DUE TO SYSTEM CRASH." });
      }
    } catch (e) {
      setIsSubmitting(false);
      setMessage({ type: 'error', text: "SERVER REJECTED PAYLOAD. IMAGE IS TOO LARGE OR NETWORK ERROR." });
    }
  };

  return (
    <div className="min-h-screen bg-manga-paper text-manga-ink pb-20 selection:bg-manga-ink selection:text-manga-paper transition-colors duration-300 relative overflow-hidden">
      <div className="absolute inset-0 halftone opacity-5 pointer-events-none" />

      {/* Background Splatters */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-manga-ink/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-manga-ink/5 rounded-full blur-3xl pointer-events-none" />

      <header className="fixed top-0 inset-x-0 bg-manga-paper/80 backdrop-blur-md border-b-[6px] border-manga-ink z-[100] px-4 md:px-8 py-6 flex items-center justify-between">
        <Link 
          href="/"
          className="flex items-center gap-3 font-black uppercase italic group"
        >
          <div className="bg-manga-ink p-2 group-hover:-translate-x-1 transition-transform">
            <ArrowLeft className="text-manga-paper w-6 h-6" />
          </div>
          <span>Return Home</span>
        </Link>
        <h1 className="text-2xl font-black uppercase italic tracking-tighter">Account Terminal</h1>
      </header>

      <main className="max-w-4xl mx-auto px-4 pt-40 relative z-10">
        <div className="mb-20 relative border-b-8 border-manga-ink pb-8">
          <div className="flex items-center gap-6 mb-4 relative z-10">
               <div className="bg-manga-ink p-4 rotate-[-3deg] shadow-[8px_8px_0px_0px_var(--manga-shadow-color)]">
                    <User className="text-manga-paper w-12 h-12" />
               </div>
               <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
                Identity <span className="bg-manga-ink text-manga-paper px-4">Matrix</span>
               </h2>
          </div>
          <p className="text-xl font-bold border-l-[6px] border-manga-ink pl-6 uppercase max-w-xl italic tracking-tight">
            Modify your digital signature and security keys in the Stream network.
          </p>
        </div>

        <AnimatePresence>
          {message && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={`mb-12 p-8 border-[8px] border-manga-ink font-black uppercase italic text-2xl flex items-center justify-between ${
                message.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
              } shadow-[16px_16px_0px_0px_var(--manga-shadow-color)]`}
            >
              <div className="flex items-center gap-6">
                <AlertTriangle className="w-10 h-10" />
                {message.text}
              </div>
              <button onClick={() => setMessage(null)}><X className="w-8 h-8" /></button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* User Status Card */}
          <section className="lg:col-span-4">
             <div className="bg-manga-paper border-[6px] border-manga-ink p-8 shadow-[12px_12px_0px_0px_var(--manga-shadow-color)] flex flex-col items-center text-center">
                <div className="relative group mb-6">
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="w-40 h-40 bg-manga-ink border-[6px] border-manga-ink relative overflow-hidden shadow-[8px_8px_0px_0px_var(--manga-shadow-color)]"
                    >
                        {(session?.user as any).profileImage ? (
                            <img 
                                src={(session?.user as any).profileImage} 
                                alt="Profile" 
                                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <User className="text-manga-paper w-16 h-16" />
                            </div>
                        )}
                        
                        {/* Upload Overlay */}
                        <label className="absolute inset-0 bg-manga-ink/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                            <Camera className="text-manga-paper w-8 h-8 mb-1" />
                            <span className="text-[10px] font-black uppercase text-manga-paper">Update Photo</span>
                            <input 
                                type="file" 
                                className="hidden" 
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
                        </label>
                    </motion.div>
                    
                    {/* Decorative Corner Icon */}
                    <div className="absolute -top-4 -right-4 bg-manga-paper border-4 border-manga-ink p-2 rotate-12 shadow-[4px_4px_0px_0px_var(--manga-shadow-color)] z-10">
                        <Sparkles className="w-4 h-4 text-manga-ink" />
                    </div>
                </div>

                <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-2">{session?.user?.name}</h3>
                <div className="bg-manga-ink text-manga-paper px-4 py-1 text-xs font-black uppercase italic mb-8">
                  Rank: {(session?.user as any).role || 'GUEST'}
                </div>

                <div className="w-full space-y-4 text-left">
                  <div className="border-l-4 border-manga-ink pl-4">
                    <p className="text-[10px] font-black uppercase opacity-40">Status</p>
                    <p className="font-bold uppercase italic text-sm">ONLINE & ACTIVE</p>
                  </div>
                  <div className="border-l-4 border-manga-ink pl-4">
                    <p className="text-[10px] font-black uppercase opacity-40">Clearance</p>
                    <p className="font-bold uppercase italic text-sm">Level {(session?.user as any).role === 'admin' ? 'MAX' : '01'}</p>
                  </div>
                </div>
             </div>
          </section>

          {/* Settings Form */}
          <section className="lg:col-span-8">
            <form onSubmit={handleUpdateProfile} className="space-y-12">
              <div className="bg-manga-paper border-[6px] border-manga-ink p-8 md:p-12 shadow-[20px_20px_0px_0px_var(--manga-shadow-color)] space-y-10">
                
                {/* Username */}
                <div>
                  <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest opacity-40 mb-4 underline decoration-4 decoration-manga-ink/20">
                    <ShieldCheck size={14} className="w-4 h-4" /> Designation (Username)
                  </label>
                  <input 
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full bg-transparent border-b-6 border-manga-ink text-4xl font-black uppercase italic py-2 focus:outline-none focus:border-red-500 transition-all font-geist-sans"
                    placeholder="NAME..."
                  />
                </div>

                {/* Password Section */}
                <div className="pt-6 border-t-4 border-manga-ink border-dashed">
                  <h4 className="text-xl font-black uppercase italic mb-8 flex items-center gap-3">
                    <Lock size={24} className="w-6 h-6" /> Security Keys
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest opacity-40 mb-2 font-geist-sans">New Matrix Key (Password)</label>
                      <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-manga-ink/5 border-b-4 border-manga-ink p-3 text-lg font-bold focus:outline-none focus:bg-manga-paper transition-all"
                        placeholder="••••••••"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest opacity-40 mb-2 font-geist-sans">Confirm Key</label>
                      <input 
                        type="password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full bg-manga-ink/5 border-b-4 border-manga-ink p-3 text-lg font-bold focus:outline-none focus:bg-manga-paper transition-all"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-[10px] font-bold uppercase opacity-30 italic">Leave empty to keep current security sequence.</p>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, y: -8 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                type="submit"
                className="w-full py-8 bg-manga-ink text-manga-paper border-[6px] border-manga-ink text-4xl font-black uppercase italic shadow-[24px_24px_0px_0px_var(--manga-shadow-glow)] hover:shadow-none transition-all flex items-center justify-center gap-6 group disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-12 h-12 border-6 border-manga-paper border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Save size={40} className="w-10 h-10 group-hover:rotate-12 transition-transform" />
                    Commit Changes
                  </>
                )}
              </motion.button>
            </form>
          </section>
        </div>
      </main>

      {/* Decorative manga speed lines */}
      <div className="fixed bottom-10 right-10 pointer-events-none opacity-20">
            <Zap className="w-20 h-20 text-manga-ink animate-pulse" />
      </div>
    </div>
  );
}
