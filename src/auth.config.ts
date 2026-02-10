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

      if (isOnAdmin) {
        if (isOnLogin) return true; // Always allow access to login page
        if (!isLoggedIn) return false; // Redirect unauthenticated users to login page
        
        // Check admin role
        if (isAdmin) return true;
        
        // Logged in but not admin -> redirect to home
        return Response.redirect(new URL('/', nextUrl));
      }
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
