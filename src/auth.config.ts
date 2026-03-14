import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const user = auth?.user as { role?: string } | undefined;
      const isAdmin = user?.role === 'admin' || user?.role === 'super_admin';
      
      const isOnAdmin = nextUrl.pathname.startsWith('/admin');
      const isOnLogin = nextUrl.pathname.startsWith('/admin/login');

      // Always allow static files and SEO files
      const pathname = nextUrl.pathname;
      if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname === '/favicon.ico' ||
        pathname === '/robots.txt' ||
        pathname === '/sitemap.xml' ||
        /\.(png|jpg|jpeg|gif|svg|ico|webp|avif|txt|xml|json)$/.test(pathname)
      ) {
        return true;
      }

      if (isOnAdmin) {
        if (isOnLogin) return true;
        if (!isLoggedIn) return Response.redirect(new URL('/admin/login', nextUrl));
        if (isAdmin) return true;
        return Response.redirect(new URL('/', nextUrl));
      }

      // All public routes are always accessible
      return true;
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        // @ts-expect-error role is missing in types
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        // @ts-expect-error role is missing in types
        token.role = user.role;
      }
      return token;
    },
  },
  providers: [], // Configured in auth.ts
} satisfies NextAuthConfig;
