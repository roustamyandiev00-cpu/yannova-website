/**
 * Image Optimization Utilities
 * Helpers for optimizing images in the RenovatieProject folder
 */

export interface ImageOptimizationConfig {
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  width?: number;
  height?: number;
}

/**
 * Generate optimized image URL for Next.js Image component
 */
export function getOptimizedImageUrl(
  src: string,
  config: ImageOptimizationConfig = {}
): string {
  const { quality = 85, width, height } = config;
  
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  params.set('q', quality.toString());
  
  return `${src}?${params.toString()}`;
}

/**
 * Get responsive image sizes for different breakpoints
 */
export function getResponsiveSizes(type: 'hero' | 'gallery' | 'thumbnail' | 'full'): string {
  const sizes = {
    hero: '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px',
    gallery: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    thumbnail: '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw',
    full: '100vw',
  };
  
  return sizes[type];
}

/**
 * Generate blur placeholder for images
 */
export function getBlurDataURL(width = 10, height = 10): string {
  const canvas = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#f3f4f6"/>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${Buffer.from(canvas).toString('base64')}`;
}

/**
 * Lazy load images with Intersection Observer
 */
export function setupLazyLoading() {
  if (typeof window === 'undefined') return;
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        
        if (src) {
          img.src = src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });
}

/**
 * Preload critical images
 */
export function preloadImage(src: string, priority: 'high' | 'low' = 'high') {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  link.fetchPriority = priority;
  
  document.head.appendChild(link);
}

/**
 * Convert RenovatieProject images to optimized format
 */
export const RENOVATION_IMAGES = [
  'attic_conversion_insulation.png',
  'bathroom_renovation_tiling.png',
  'electrical_wiring_fix.png',
  'fresh_plastering_skim.png',
  'herringbone_flooring_install.png',
  'interior_renovation_sliding_doors.png',
  'kitchen_renovation_stripout.png',
  'modern_extension_construction.png',
  'plumbing_rough_in.png',
  'renovation_works_example.png',
  'replacing_windows_no_people.png',
  'roof_renovation_scaffolding.png',
  'staircase_installation.png',
  'structural_steel_beam_install.png',
  'underfloor_heating_installation.png',
] as const;

export function getRenovationImagePath(filename: typeof RENOVATION_IMAGES[number]): string {
  return `/RenovatieProject/${filename}`;
}
