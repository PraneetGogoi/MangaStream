"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Terminal, Cpu, Database, Sparkles } from "lucide-react";
import { processOracleQuery, OracleResponse } from "@/app/oracle-actions";

interface Message {
  role: "user" | "oracle";
  content: string;
  recommendations?: any[];
  timestamp: Date;
}

interface OracleChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OracleChat = ({ isOpen, onClose }: OracleChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "oracle",
      content: "SYSTEM INITIALIZED. FLUFF ONLINE. STATE YOUR QUERY, ARCHIVIST.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      role: "user",
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await processOracleQuery(input);
      const oracleMsg: Message = {
        role: "oracle",
        content: response.text,
        recommendations: response.recommendations,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, oracleMsg]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: "oracle",
        content: "ERROR: NEURAL LINK SEVERED. UNABLE TO ACCESS VAULT.",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickQueries = [
    "Recommend a Seinen",
    "Jujutsu Kaisen status?",
    "Show me dark fantasy",
    "Latest archives?"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.9 }}
          className="fixed bottom-32 right-32 z-[210] w-[400px] max-h-[600px] flex flex-col bg-manga-ink border-[6px] border-manga-ink shadow-[12px_12px_0px_0px_rgba(0,0,0,0.5)] overflow-hidden font-mono"
        >
          {/* Header */}
          <div className="p-4 bg-red-600 flex items-center justify-between border-b-[4px] border-manga-ink">
            <div className="flex items-center gap-3 text-white">
              <Cpu className="w-5 h-5 animate-pulse" />
              <span className="font-black text-sm uppercase tracking-widest italic">Fluff v1.0</span>
            </div>
            <button onClick={onClose} className="text-white hover:rotate-90 transition-transform">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6 min-h-[300px] max-h-[400px] bg-manga-ink relative custom-scrollbar">
            {/* Scanline Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-scanline animate-scanline z-10" />
            
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className={`max-w-[85%] p-3 border-2 ${
                  msg.role === 'user' 
                    ? 'bg-manga-paper text-manga-ink border-white' 
                    : 'bg-black text-red-500 border-red-900 shadow-[4px_4px_0px_0px_rgba(153,0,0,0.3)]'
                }`}>
                  <div className="flex items-center gap-2 mb-1 opacity-50 text-[8px] font-black uppercase">
                    {msg.role === 'user' ? 'Archivist' : 'Fluff'} — {msg.timestamp.toLocaleTimeString()}
                  </div>
                  <p className="text-xs font-bold leading-relaxed">{msg.content}</p>
                  
                  {msg.recommendations && (
                    <div className="mt-4 grid grid-cols-1 gap-2">
                      {msg.recommendations.map((rec, idx) => (
                        <div key={idx} className="p-2 border border-red-500/30 bg-red-500/10 flex items-center gap-2">
                          <Sparkles className="w-3 h-3 text-red-500" />
                          <span className="text-[10px] font-black uppercase text-white truncate">{rec.title}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <div className="flex gap-2 text-red-500 animate-pulse text-[10px] font-black italic">
                <Database className="w-3 h-3" /> ANALYZING VAULT...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Queries */}
          <div className="p-2 bg-black border-t-2 border-manga-ink flex flex-wrap gap-2">
            {quickQueries.map((q, i) => (
              <button
                key={i}
                onClick={() => setInput(q)}
                className="text-[9px] font-black uppercase italic px-2 py-1 bg-manga-ink text-white/50 border border-white/10 hover:text-white hover:border-red-500 transition-all"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-manga-ink border-t-[4px] border-manga-ink flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="COMMAND >_"
              className="flex-1 bg-black text-red-500 border-2 border-red-900/50 p-2 text-xs focus:outline-none focus:border-red-500 transition-all uppercase placeholder:text-red-900/30"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="p-2 bg-red-600 text-white border-2 border-red-400 hover:bg-white hover:text-red-600 transition-all"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
