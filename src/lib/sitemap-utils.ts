import { MetadataRoute } from 'next';

export interface SitemapEntry {
  url: string;
  lastModified?: Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

/**
 * Helper functie om sitemap entries te genereren
 */
export function createSitemapEntry(
  path: string,
  options: {
    lastModified?: Date;
    changeFrequency?: SitemapEntry['changeFrequency'];
    priority?: number;
  } = {}
): MetadataRoute.Sitemap[0] {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.yannova.be';
  
  return {
    url: `${baseUrl}${path}`,
    lastModified: options.lastModified || new Date(),
    changeFrequency: options.changeFrequency || 'monthly',
    priority: options.priority || 0.7,
  };
}

/**
 * Standaard prioriteiten voor verschillende pagina types
 */
export const SITEMAP_PRIORITIES = {
  homepage: 1.0,
  mainService: 0.9,
  service: 0.85,
  location: 0.8,
  content: 0.7,
  utility: 0.6,
} as const;

/**
 * Standaard change frequencies
 */
export const SITEMAP_FREQUENCIES = {
  homepage: 'weekly',
  services: 'monthly',
  content: 'monthly',
  static: 'yearly',
} as const;
