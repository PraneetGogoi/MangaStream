"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser, logoutUser } from "@/app/actions";

type Session = {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string;
    username?: string;
  };
  expires: string;
};

type AuthContextType = {
  data: Session | null;
  status: "loading" | "authenticated" | "unauthenticated";
  update: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  data: null,
  status: "loading",
  update: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [status, setStatus] = useState<"loading" | "authenticated" | "unauthenticated">("loading");

  const refreshSession = async () => {
    const user = await getCurrentUser();
    if (user) {
      setSession({
        user: {
          name: user.username,
          username: user.username,
          role: user.role,
        },
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      });
      setStatus("authenticated");
    } else {
      setSession(null);
      setStatus("unauthenticated");
    }
  };

  useEffect(() => {
    refreshSession();
  }, []);

  return (
    <AuthContext.Provider value={{ data: session, status, update: refreshSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useSession = () => {
  return useContext(AuthContext);
};

export const signOut = async (options?: { callbackUrl?: string }) => {
  await logoutUser();
  if (options?.callbackUrl) {
    window.location.href = options.callbackUrl;
  } else {
    window.location.reload();
  }
};
