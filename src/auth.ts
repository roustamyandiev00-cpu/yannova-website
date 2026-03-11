import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { logger } from '@/lib/logger';

async function getUser(email: string) {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  } catch (error) {
    logger.error('Failed to fetch user', error);
    throw new Error('Failed to fetch user.');
  }
}

// Whitelist van toegestane admin emails
const ALLOWED_ADMIN_EMAILS = [
  'roustamyandiev00@gmail.com',
  'windowpro.be@gmail.com'
];

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          logger.debug('Authorize called with credentials:', { email: credentials?.email });
          
          const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string() })
            .safeParse(credentials);

          if (!parsedCredentials.success) {
            logger.debug('Credential validation failed:', parsedCredentials.error);
            return null;
          }

          const { email, password } = parsedCredentials.data;
          
          // Check whitelist
          if (!ALLOWED_ADMIN_EMAILS.includes(email.toLowerCase())) {
            logger.debug('Email not in whitelist:', email);
            return null;
          }
          logger.debug('Looking up user:', email);
          
          const user = await getUser(email);
          if (!user) {
            logger.debug('User not found:', email);
            return null;
          }
          
          logger.debug('User found:', { email: user.email, role: user.role, active: user.active });
          
          // Check if user has admin or super_admin role
          if (user.role !== 'admin' && user.role !== 'super_admin') {
            logger.debug('User role check failed. Role:', user.role);
            return null;
          }
          
          // Check if user is active
          if (!user.active) {
            logger.debug('User is not active');
            return null;
          }
          
          logger.debug('Comparing passwords...');
          const passwordsMatch = await bcrypt.compare(password, user.password);
          logger.debug('Password match result:', passwordsMatch);
          
          if (passwordsMatch) {
            logger.debug('Authentication successful for:', email);
            return user;
          }
          
          logger.debug('Password mismatch');
          return null;
        } catch (error) {
          logger.error('Authorization error:', error);
          return null;
        }
      },
    }),
  ],
});
