'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { ArrowLeft, Quote, Star } from 'lucide-react';
import { createTestimonial } from '@/lib/actions';

const ratingOptions = [5, 4, 3, 2, 1];

export default function NewTestimonialPage() {
  const initialState = { message: null, errors: {} };
  // @ts-expect-error - useActionState type mismatch with server action return type
  const [state, dispatch] = useActionState(createTestimonial, initialState);

  return (
    <main>
      <div className="mb-8 flex items-center gap-4">
        <Link
          href="/admin/testimonials"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white ring-1 ring-white/10 transition-colors hover:bg-white/10"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white">Nieuwe Testimonial</h1>
          <p className="mt-1 text-sm text-gray-400">
            Voeg handmatig een klantreview toe aan het admin dashboard.
          </p>
        </div>
      </div>

      <form
        action={dispatch}
        className="max-w-3xl space-y-6 rounded-2xl bg-card p-8 shadow-sm ring-1 ring-white/10"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-200">
              Naam
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-secondary focus:outline-none"
              placeholder="Klantnaam"
            />
            <div aria-live="polite" aria-atomic="true">
              {state.errors?.name?.map((error: string) => (
                <p key={error} className="mt-2 text-sm text-red-400">
                  {error}
                </p>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-200">
              Bedrijf of locatie
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-secondary focus:outline-none"
              placeholder="Optioneel"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[220px_1fr]">
          <div>
            <label htmlFor="rating" className="mb-2 block text-sm font-medium text-gray-200">
              Score
            </label>
            <div className="relative">
              <Star className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-yellow-400" />
              <select
                id="rating"
                name="rating"
                defaultValue="5"
                className="block w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-white focus:border-secondary focus:outline-none"
              >
                {ratingOptions.map((rating) => (
                  <option key={rating} value={rating}>
                    {rating} sterren
                  </option>
                ))}
              </select>
            </div>
            <div aria-live="polite" aria-atomic="true">
              {state.errors?.rating?.map((error: string) => (
                <p key={error} className="mt-2 text-sm text-red-400">
                  {error}
                </p>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="imageUrl" className="mb-2 block text-sm font-medium text-gray-200">
              Profielfoto URL
            </label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="url"
              className="block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-secondary focus:outline-none"
              placeholder="https://..."
            />
            <div aria-live="polite" aria-atomic="true">
              {state.errors?.imageUrl?.map((error: string) => (
                <p key={error} className="mt-2 text-sm text-red-400">
                  {error}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="text" className="mb-2 block text-sm font-medium text-gray-200">
            Review
          </label>
          <div className="relative">
            <Quote className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-gray-500" />
            <textarea
              id="text"
              name="text"
              rows={6}
              required
              className="block w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white placeholder:text-gray-500 focus:border-secondary focus:outline-none"
              placeholder="Beschrijf de ervaring van de klant..."
            />
          </div>
          <div aria-live="polite" aria-atomic="true">
            {state.errors?.text?.map((error: string) => (
              <p key={error} className="mt-2 text-sm text-red-400">
                {error}
              </p>
            ))}
          </div>
        </div>

        {state.message && (
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {state.message}
          </div>
        )}

        <div className="flex items-center justify-end gap-3 border-t border-white/10 pt-6">
          <Link
            href="/admin/testimonials"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            Annuleren
          </Link>
          <button
            type="submit"
            className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-secondary/80"
          >
            Testimonial opslaan
          </button>
        </div>
      </form>
    </main>
  );
}
