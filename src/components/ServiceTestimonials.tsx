import { Star, Quote } from 'lucide-react';
import { testimonials, type Testimonial } from '@/data/testimonials';

interface ServiceTestimonialsProps {
  service: string;
  limit?: number;
}

export function ServiceTestimonials({ service, limit = 3 }: ServiceTestimonialsProps) {
  // Filter testimonials by service
  const serviceTestimonials = testimonials
    .filter((t) => t.service.toLowerCase().includes(service.toLowerCase()))
    .slice(0, limit);

  // If no specific testimonials, show random ones
  const displayTestimonials = serviceTestimonials.length > 0 
    ? serviceTestimonials 
    : testimonials.slice(0, limit);

  if (displayTestimonials.length === 0) return null;

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Wat onze klanten zeggen
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ontdek de ervaringen van klanten die voor {service} kozen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-xl bg-[#1a1d24] p-6 border border-white/5 hover:border-white/10 transition-all"
            >
              <Quote className="absolute top-6 left-6 h-8 w-8 text-secondary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4 justify-end">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-secondary fill-secondary" />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="text-gray-300 text-sm leading-6 mb-6">
                <p>&quot;{testimonial.text}&quot;</p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to all reviews */}
        <div className="text-center mt-12">
          <a
            href="/reviews"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors text-sm font-medium"
          >
            <span>Bekijk alle reviews</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
