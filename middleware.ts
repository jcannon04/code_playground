import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes : ["/", "/demo", "/sign-up", "/profile", "/api/User", "/api/teacher", "/api/User/projects/(.*)"]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)/(.*)",  "/api/User", "/api/User/projects/(.*)"],
};