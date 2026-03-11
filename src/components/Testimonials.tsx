import { Star, Quote, CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { testimonials as defaultTestimonials, type Testimonial } from "@/data/testimonials";

interface TestimonialsProps {
    testimonials?: Testimonial[];
    showAll?: boolean;
}

export function Testimonials({ testimonials, showAll = false }: TestimonialsProps) {
    const displayTestimonials = testimonials || defaultTestimonials;
    const testimonialsToShow = showAll ? displayTestimonials : displayTestimonials.slice(0, 6);

    return (
        <div className="py-16 sm:py-20 bg-[#0f1115] relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-secondary">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Wat onze klanten zeggen
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {testimonialsToShow.map((testimonial, idx) => (
                            <FadeIn key={testimonial.id} delay={idx * 0.1}>
                                <div className="relative rounded-xl bg-[#1a1d24] p-6 shadow-lg transition-all duration-300 hover:bg-[#1e2128]">
                                    <Quote className="absolute top-6 left-6 h-8 w-8 text-secondary/20" />
                                    
                                    {/* Rating & Service */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex gap-x-1 text-secondary">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                                            ))}
                                        </div>
                                        {testimonial.verified && (
                                            <div className="flex items-center gap-1 text-green-400 text-xs">
                                                <CheckCircle className="h-3 w-3" />
                                                <span>Geverifieerd</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Service badge */}
                                    <div className="mb-3">
                                        <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary/20 text-secondary rounded-full">
                                            {testimonial.service}
                                        </span>
                                    </div>

                                    {/* Review text */}
                                    <blockquote className="text-gray-300 text-sm leading-6 pt-2">
                                        <p>&quot;{testimonial.text}&quot;</p>
                                    </blockquote>

                                    {/* Author info */}
                                    <figcaption className="mt-6 flex items-center gap-x-4 pt-4">
                                        <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div className="text-sm leading-6">
                                            <div className="font-semibold text-white">{testimonial.name}</div>
                                            <div className="text-gray-400">{testimonial.location}</div>
                                        </div>
                                    </figcaption>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
