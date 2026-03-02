type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class Logger {
  private isDevelopment = process.env.NODE_ENV !== 'production';

  debug(message: string, ...args: any[]): void {
    if (this.isDevelopment) {
      console.log(`[DEBUG] ${message}`, ...args);
    }
  }

  info(message: string, ...args: any[]): void {
    if (this.isDevelopment) {
      console.info(`[INFO] ${message}`, ...args);
    }
  }

  warn(message: string, ...args: any[]): void {
    if (this.isDevelopment) {
      console.warn(`[WARN] ${message}`, ...args);
    }
  }

  error(message: string, error?: any): void {
    // Always log errors, but sanitize in production
    if (this.isDevelopment) {
      console.error(`[ERROR] ${message}`, error);
    } else {
      // In production, log only the message without sensitive details
      console.error(`[ERROR] ${message}`);
      // In a real production app, send to error tracking service (Sentry, etc.)
    }
  }
}

export const logger = new Logger();
