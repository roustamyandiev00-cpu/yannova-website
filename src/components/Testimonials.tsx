import { Star, Quote } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

interface Testimonial {
    id: string;
    name: string;
    company: string | null;
    text: string;
    rating: number;
}

interface TestimonialsProps {
    testimonials?: Testimonial[];
}

export function Testimonials({ testimonials = [] }: TestimonialsProps) {
    // Fallback if no testimonials are provided
    const displayTestimonials = testimonials.length > 0 ? testimonials : [
        {
            id: 'fallback-1',
            text: "Yannova heeft onze gevel volledig gerenoveerd met crepi. Het resultaat is verbluffend! Zeer propere afwerking en alles volgens afspraak.",
            name: "Bart & Sofie",
            company: "Zoersel",
            rating: 5
        },
        {
            id: 'fallback-2',
            text: "Nieuwe ramen laten plaatsen. Het advies was eerlijk en de plaatsers werkten zeer nauwkeurig. Een absolute aanrader voor wie kwaliteit zoekt.",
            name: "T. Janssens",
            company: "Schilde",
            rating: 5
        },
        {
            id: 'fallback-3',
            text: "We zochten een aannemer voor onze totaalrenovatie en kwamen bij Yannova terecht. Eén aanspreekpunt voor alles was een enorme geruststelling.",
            name: "Fam. Peeters",
            company: "Antwerpen",
            rating: 5
        },
    ];

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
                        {displayTestimonials.map((testimonial, idx) => (
                            <FadeIn key={testimonial.id} delay={idx * 0.1}>
                                <div className="relative rounded-xl bg-[#1a1d24] p-6 shadow-sm transition-all duration-300 hover:bg-[#1e2128]">
                                    <Quote className="absolute top-6 left-6 h-8 w-8 text-secondary/20" />
                                    <div className="flex gap-x-1 text-secondary mb-4 justify-end">
                                        {[...Array(testimonial.rating || 5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                                        ))}
                                    </div>
                                    <blockquote className="text-gray-300 text-sm leading-6 pt-4">
                                        <p>&quot;{testimonial.text}&quot;</p>
                                    </blockquote>
                                    <figcaption className="mt-6 flex items-center gap-x-4 pt-4">
                                        <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div className="text-sm leading-6">
                                            <div className="font-semibold text-white">{testimonial.name}</div>
                                            {testimonial.company && (
                                                <div className="text-gray-400">{testimonial.company}</div>
                                            )}
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
