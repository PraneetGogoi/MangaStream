import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuth = !!token;
    const pathname = req.nextUrl.pathname;

    // Public paths that don't require authentication
    const isPublicPath = 
      pathname === "/login" || 
      pathname === "/register" || 
      pathname.startsWith("/api/auth") ||
      pathname.startsWith("/assets") ||
      pathname.startsWith("/uploads") ||
      pathname === "/favicon.ico";

    // If user is authenticated and tries to access login/register, redirect to home
    if (isAuth && (pathname === "/login" || pathname === "/register")) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Admin path protection
    const isAdminPage = pathname.startsWith("/admin");
    if (isAdminPage && token?.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Default: Continue
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const pathname = req.nextUrl.pathname;
        // Allow public paths without token
        if (
          pathname === "/login" || 
          pathname === "/register" || 
          pathname.startsWith("/api/auth") ||
          pathname.startsWith("/assets") ||
          pathname.startsWith("/uploads") ||
          pathname === "/favicon.ico" ||
          pathname.startsWith("/_next") ||
          pathname.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)
        ) {
          return true;
        }
        // Require token for everything else
        return !!token;
      },
    },
  }
);

export const config = {
  // Match all paths except static assets and image files
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|png|gif|svg|webp)$).*)"],
};
