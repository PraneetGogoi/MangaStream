"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "@/components/AuthProvider";
import { getPusherClient } from "@/lib/pusher";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Bell, X } from "lucide-react";
import { getNotifications, markNotificationRead } from "@/app/actions";

interface PulseContextType {
  notifications: any[];
  unreadCount: number;
  refreshNotifications: () => Promise<void>;
}

const PulseContext = createContext<PulseContextType | undefined>(undefined);

export const PulseProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const [notifications, setNotifications] = useState<any[]>([]);
  const [activeToast, setActiveToast] = useState<{title: string, message: string} | null>(null);

  const fetchNotes = async () => {
    if (session?.user) {
      const notes = await getNotifications();
      setNotifications(notes);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [session]);

  useEffect(() => {
    if (!session?.user) return;

    const userId = (session.user as any).id;
    const pusher = getPusherClient();
    const channel = pusher.subscribe(`user-${userId}-notifications`);

    channel.bind("pulse-ping", (data: any) => {
        // Trigger Tactical Toast
        setActiveToast({ title: data.title, message: data.message });
        fetchNotes();
        
        // Auto-dismiss toast
        setTimeout(() => setActiveToast(null), 8000);
    });

    return () => {
      pusher.unsubscribe(`user-${userId}-notifications`);
    };
  }, [session]);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <PulseContext.Provider value={{ notifications, unreadCount, refreshNotifications: fetchNotes }}>
      {children}
      
      {/* Tactical Notification Toast */}
      <AnimatePresence>
        {activeToast && (
          <motion.div 
            initial={{ x: 300, opacity: 0, skewX: 10 }}
            animate={{ x: 0, opacity: 1, skewX: 0 }}
            exit={{ x: 400, opacity: 0 }}
            className="fixed bottom-10 right-10 z-[1000] w-80 bg-manga-paper border-l-[12px] border-manga-ink p-6 shadow-[20px_20px_0px_0px_var(--manga-shadow-color)]"
          >
            <div className="flex items-start gap-4">
              <div className="bg-manga-ink p-2 animate-pulse">
                <Zap className="text-manga-paper w-6 h-6 fill-manga-paper" />
              </div>
              <div className="flex-1">
                <h4 className="font-black uppercase italic text-sm tracking-tighter leading-none mb-1 text-red-500">
                  {activeToast.title}
                </h4>
                <p className="font-bold uppercase text-[10px] leading-tight opacity-70">
                  {activeToast.message}
                </p>
              </div>
              <button onClick={() => setActiveToast(null)} className="text-manga-ink opacity-20 hover:opacity-100">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            {/* Loading Bar Effect */}
            <motion.div 
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 8, ease: "linear" }}
              className="absolute bottom-0 left-0 h-1 bg-red-500"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PulseContext.Provider>
  );
};

export const usePulse = () => {
  const context = useContext(PulseContext);
  if (context === undefined) {
    throw new Error("usePulse must be used within a PulseProvider");
  }
  return context;
};
