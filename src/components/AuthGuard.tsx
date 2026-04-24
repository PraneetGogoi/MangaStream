"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getCurrentUser } from "@/app/actions";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const publicPaths = ["/login", "/register"];
      const isPublicPath = publicPaths.includes(pathname);
      
      const user = await getCurrentUser();
      
      if (!user && !isPublicPath) {
        router.push("/login");
      } else {
        setIsAuthorized(true);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [pathname, router]);

  if (isLoading) {
    return null; // Keep showing the MangaLoader during the check
  }

  // If on login/register, or authorized, show content
  const publicPaths = ["/login", "/register"];
  if (isAuthorized || publicPaths.includes(pathname)) {
    return <>{children}</>;
  }

  return null;
};
