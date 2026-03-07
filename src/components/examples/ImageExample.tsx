/**
 * VOORBEELD: Hoe OptimizedImage te gebruiken
 * 
 * Dit bestand toont verschillende use cases voor de OptimizedImage component
 */

import OptimizedImage from '@/components/OptimizedImage';

export function HeroImageExample() {
  return (
    <OptimizedImage
      src="/images/renovatie/modern_extension_construction-lg.webp"
      alt="Moderne uitbouw constructie"
      width={1920}
      height={1080}
      type="hero"
      priority={true} // Laad direct (above the fold)
      quality={90} // Hogere kwaliteit voor hero
      className="w-full h-[600px] object-cover"
    />
  );
}

export function GalleryImageExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <OptimizedImage
        src="/images/renovatie/bathroom_renovation_tiling-md.webp"
        alt="Badkamerrenovatie met tegels"
        width={800}
        height={600}
        type="gallery"
        className="rounded-lg"
      />
      
      <OptimizedImage
        src="/images/renovatie/kitchen_renovation_stripout-md.webp"
        alt="Keukenrenovatie stripout"
        width={800}
        height={600}
        type="gallery"
        className="rounded-lg"
      />
      
      <OptimizedImage
        src="/images/renovatie/roof_renovation_scaffolding-md.webp"
        alt="Dakrenovatie met steigers"
        width={800}
        height={600}
        type="gallery"
        className="rounded-lg"
      />
    </div>
  );
}

export function ThumbnailExample() {
  return (
    <OptimizedImage
      src="/images/renovatie/herringbone_flooring_install-sm.webp"
      alt="Visgraat vloer installatie"
      width={400}
      height={300}
      type="thumbnail"
      quality={75} // Lagere kwaliteit voor thumbnails
      className="w-32 h-32 rounded-full object-cover"
    />
  );
}

export function ResponsiveExample() {
  return (
    <div className="relative w-full aspect-video">
      <OptimizedImage
        src="/images/renovatie/interior_renovation_sliding_doors-md.webp"
        alt="Interieur renovatie met schuifdeuren"
        width={1200}
        height={675}
        type="full"
        className="rounded-xl shadow-lg"
      />
    </div>
  );
}

// Gebruik in je bestaande components:
// 
// VOOR:
// <Image src="/RenovatieProject/bathroom.png" alt="Badkamer" />
//
// NA:
// <OptimizedImage 
//   src="/images/renovatie/bathroom-md.webp" 
//   alt="Badkamer"
//   width={1200}
//   height={800}
//   type="gallery"
// />
