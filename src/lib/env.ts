/**
 * Environment variables validation and type-safe access
 * Ensures all required environment variables are present
 */

import { logger } from './logger';

interface EnvConfig {
  // Database
  DATABASE_URL: string;
  DIRECT_URL: string;

  // Authentication
  AUTH_SECRET: string;
  AUTH_URL: string;

  // Email
  SMTP_HOST?: string;
  SMTP_PORT?: string;
  SMTP_USER?: string;
  SMTP_PASS?: string;
  CONTACT_EMAIL?: string;

  // Firebase
  NEXT_PUBLIC_FIREBASE_API_KEY?: string;
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN?: string;
  NEXT_PUBLIC_FIREBASE_PROJECT_ID?: string;
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET?: string;
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID?: string;
  NEXT_PUBLIC_FIREBASE_APP_ID?: string;

  // Supabase
  NEXT_PUBLIC_SUPABASE_URL?: string;
  NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;

  // Google AI
  GOOGLE_GENERATIVE_AI_API_KEY?: string;

  // Site
  NEXT_PUBLIC_SITE_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;

  // Node
  NODE_ENV: 'development' | 'production' | 'test';
}

/**
 * Get environment variable with type safety
 */
function getEnv<K extends keyof EnvConfig>(
  key: K,
  required: boolean = false
): EnvConfig[K] | undefined {
  const value = process.env[key];

  if (required && !value) {
    const error = `Missing required environment variable: ${key}`;
    logger.error(error);
    throw new Error(error);
  }

  return value as EnvConfig[K];
}

/**
 * Validate all required environment variables
 */
export function validateEnv(): void {
  const required: Array<keyof EnvConfig> = [
    'DATABASE_URL',
    'DIRECT_URL',
    'AUTH_SECRET',
    'AUTH_URL',
    'NODE_ENV',
  ];

  const missing: string[] = [];

  for (const key of required) {
    if (!process.env[key]) {
      missing.push(key);
    }
  }

  if (missing.length > 0) {
    const error = `Missing required environment variables: ${missing.join(', ')}`;
    logger.error(error);
    throw new Error(error);
  }

  logger.info('Environment variables validated successfully');
}

/**
 * Get all environment variables with defaults
 */
export const env = {
  // Database
  get DATABASE_URL() {
    return getEnv('DATABASE_URL', true)!;
  },
  get DIRECT_URL() {
    return getEnv('DIRECT_URL', true)!;
  },

  // Authentication
  get AUTH_SECRET() {
    return getEnv('AUTH_SECRET', true)!;
  },
  get AUTH_URL() {
    return getEnv('AUTH_URL', true)!;
  },

  // Email
  get SMTP_HOST() {
    return getEnv('SMTP_HOST');
  },
  get SMTP_PORT() {
    return getEnv('SMTP_PORT');
  },
  get SMTP_USER() {
    return getEnv('SMTP_USER');
  },
  get SMTP_PASS() {
    return getEnv('SMTP_PASS');
  },
  get CONTACT_EMAIL() {
    return getEnv('CONTACT_EMAIL') || 'info@yannova.be';
  },

  // Firebase
  get NEXT_PUBLIC_FIREBASE_API_KEY() {
    return getEnv('NEXT_PUBLIC_FIREBASE_API_KEY');
  },
  get NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN() {
    return getEnv('NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN');
  },
  get NEXT_PUBLIC_FIREBASE_PROJECT_ID() {
    return getEnv('NEXT_PUBLIC_FIREBASE_PROJECT_ID');
  },

  // Supabase
  get NEXT_PUBLIC_SUPABASE_URL() {
    return getEnv('NEXT_PUBLIC_SUPABASE_URL');
  },
  get NEXT_PUBLIC_SUPABASE_ANON_KEY() {
    return getEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY');
  },

  // Google AI
  get GOOGLE_GENERATIVE_AI_API_KEY() {
    return getEnv('GOOGLE_GENERATIVE_AI_API_KEY');
  },

  // Site
  get NEXT_PUBLIC_SITE_URL() {
    return getEnv('NEXT_PUBLIC_SITE_URL') || 'https://www.yannova.be';
  },
  get NEXT_PUBLIC_GA_ID() {
    return getEnv('NEXT_PUBLIC_GA_ID');
  },

  // Node
  get NODE_ENV() {
    return getEnv('NODE_ENV', true)!;
  },
  get isDevelopment() {
    return this.NODE_ENV === 'development';
  },
  get isProduction() {
    return this.NODE_ENV === 'production';
  },
  get isTest() {
    return this.NODE_ENV === 'test';
  },
} as const;

// Validate on import in production
if (process.env.NODE_ENV === 'production') {
  try {
    validateEnv();
  } catch (error) {
    // Log but don't throw to prevent build failures
    logger.error('Environment validation failed', error);
  }
}
