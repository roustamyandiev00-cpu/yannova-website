'use client';

import { Star, ExternalLink } from 'lucide-react';
import { googleReviewsData } from '@/data/testimonials';

export function GoogleReviews() {
  const { averageRating, totalReviews, reviewsUrl } = googleReviewsData;

  return (
    <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-md">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Google Reviews
          </h3>
          <p className="text-sm text-muted-foreground">
            Wat onze klanten zeggen
          </p>
        </div>
        <img 
          src="/google-logo.svg" 
          alt="Google" 
          className="h-8 w-auto opacity-80"
          onError={(e) => {
            // Fallback als logo niet bestaat
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="text-5xl font-bold text-foreground">
          {averageRating.toFixed(1)}
        </div>
        <div>
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(averageRating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-600'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Gebaseerd op {totalReviews} reviews
          </p>
        </div>
      </div>

      <a
        href={reviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full rounded-full bg-white/10 hover:bg-white/20 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:scale-[1.02] active:scale-[0.98] border border-white/10"
      >
        <span>Bekijk alle reviews</span>
        <ExternalLink className="h-4 w-4" />
      </a>

      <div className="mt-6 pt-6 border-t border-white/10">
        <a
          href={reviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-sm text-secondary hover:text-secondary/80 transition-colors"
        >
          <span>Laat een review achter</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
