"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, status } = useSession();

  useEffect(() => {
    const publicPaths = ["/login", "/register"];
    const isPublicPath = publicPaths.includes(pathname);
    
    if (status === "unauthenticated" && !isPublicPath) {
      router.push("/login");
    }
  }, [pathname, router, status]);

  if (status === "loading") {
    return null; // Keep showing the MangaLoader during the check
  }

  // If on login/register, or authorized, show content
  const publicPaths = ["/login", "/register"];
  if (status === "authenticated" || publicPaths.includes(pathname)) {
    return <>{children}</>;
  }

  return null;
};
