import { prisma } from '@/lib/prisma';
import { Star, Plus, Check, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { approveTestimonial, deleteTestimonial, toggleFeaturedTestimonial } from '@/lib/actions';

export const dynamic = 'force-dynamic';

export default async function TestimonialsPage() {
    const testimonials = await prisma.testimonial.findMany({
        orderBy: { createdAt: 'desc' },
    });

    const stats = {
        total: testimonials.length,
        approved: testimonials.filter(t => t.approved).length,
        pending: testimonials.filter(t => !t.approved).length,
        featured: testimonials.filter(t => t.featured).length,
    };

    return (
        <main>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-foreground">Testimonials</h1>
                <Link
                    href="/admin/testimonials/new"
                    className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary/80"
                >
                    <Plus className="h-4 w-4" /> Nieuwe Testimonial
                </Link>
            </div>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                    <p className="text-sm font-medium text-gray-400">Totaal</p>
                    <p className="text-3xl font-bold text-white">{stats.total}</p>
                </div>
                <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                    <p className="text-sm font-medium text-gray-400">Goedgekeurd</p>
                    <p className="text-3xl font-bold text-green-400">{stats.approved}</p>
                </div>
                <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                    <p className="text-sm font-medium text-gray-400">In afwachting</p>
                    <p className="text-3xl font-bold text-orange-400">{stats.pending}</p>
                </div>
                <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                    <p className="text-sm font-medium text-gray-400">Uitgelicht</p>
                    <p className="text-3xl font-bold text-secondary">{stats.featured}</p>
                </div>
            </div>

            {/* Testimonials List */}
            <div className="bg-card shadow-sm ring-1 ring-white/10 rounded-xl overflow-hidden">
                {testimonials.length === 0 ? (
                    <div className="p-10 text-center text-gray-400">
                        Nog geen testimonials toegevoegd.
                    </div>
                ) : (
                    <div className="divide-y divide-white/10">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="p-6 hover:bg-white/5 transition-colors">
                                <div className="flex items-start gap-4">
                                    {/* Avatar */}
                                    {testimonial.imageUrl ? (
                                        <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                                            <Image
                                                src={testimonial.imageUrl}
                                                alt={testimonial.name}
                                                width={48}
                                                height={48}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                                            <span className="text-secondary font-semibold text-lg">
                                                {testimonial.name.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                                                {testimonial.company && (
                                                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                                                )}
                                                <div className="flex items-center gap-1 mt-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`h-4 w-4 ${i < testimonial.rating
                                                                    ? 'fill-yellow-400 text-yellow-400'
                                                                    : 'text-gray-600'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Status Badges */}
                                            <div className="flex items-center gap-2">
                                                {testimonial.featured && (
                                                    <span className="inline-flex items-center rounded-full bg-secondary/20 px-2 py-1 text-xs font-medium text-secondary">
                                                        Uitgelicht
                                                    </span>
                                                )}
                                                {testimonial.approved ? (
                                                    <span className="inline-flex items-center rounded-full bg-green-500/20 px-2 py-1 text-xs font-medium text-green-400">
                                                        Goedgekeurd
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center rounded-full bg-orange-500/20 px-2 py-1 text-xs font-medium text-orange-400">
                                                        In afwachting
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <p className="mt-3 text-sm text-gray-300 line-clamp-3">{testimonial.text}</p>

                                        {/* Actions */}
                                        <div className="flex items-center gap-3 mt-4">
                                            {!testimonial.approved && (
                                                <form action={approveTestimonial.bind(null, testimonial.id)}>
                                                    <button
                                                        type="submit"
                                                        className="flex items-center gap-1 text-xs text-green-400 hover:text-green-300 font-medium"
                                                    >
                                                        <Check className="h-4 w-4" /> Goedkeuren
                                                    </button>
                                                </form>
                                            )}
                                            <form action={toggleFeaturedTestimonial.bind(null, testimonial.id)}>
                                                <button
                                                    type="submit"
                                                    className="flex items-center gap-1 text-xs text-secondary hover:text-secondary/80 font-medium"
                                                >
                                                    <Star className="h-4 w-4" />
                                                    {testimonial.featured ? 'Niet uitlichten' : 'Uitlichten'}
                                                </button>
                                            </form>
                                            <form action={deleteTestimonial.bind(null, testimonial.id)}>
                                                <button
                                                    type="submit"
                                                    className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300 font-medium"
                                                >
                                                    <X className="h-4 w-4" /> Verwijderen
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
