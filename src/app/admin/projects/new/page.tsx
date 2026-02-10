'use client';

import Link from 'next/link';
import { createProject } from '@/lib/actions';
import { useActionState } from 'react';
import { ArrowLeft, Upload } from 'lucide-react';

export default function NewProjectPage() {
    const initialState = { message: null, errors: {} };
    // @ts-expect-error - useActionState type mismatch with server action return type
    const [state, dispatch] = useActionState(createProject, initialState);

  return (
    <main>
        <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
                 <Link
                    href="/admin/projects"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 hover:bg-gray-50"
                >
                    <ArrowLeft className="w-5 text-gray-900" />
                </Link>
                <h1 className="text-2xl font-bold">Nieuw Project</h1>
            </div>
        </div>

      <form action={dispatch} className="max-w-2xl bg-white p-8 rounded-xl shadow-sm ring-1 ring-gray-900/5">
        <div className="space-y-6">
          
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
              Project Titel
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="title"
                id="title"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3"
                placeholder="bv. Renovatie Villa Zoersel"
                aria-describedby="title-error"
              />
            </div>
            <div id="title-error" aria-live="polite" aria-atomic="true">
                {state.errors?.title &&
                  state.errors.title.map((error: string) => (
                    <p key={error} className="mt-2 text-sm text-red-500">
                      {error}
                    </p>
                  ))}
            </div>
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
              Categorie
            </label>
            <div className="mt-2">
              <select
                id="category"
                name="category"
                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-2"
                defaultValue=""
                aria-describedby="category-error"
              >
                <option value="" disabled>
                  Selecteer een categorie
                </option>
                <option value="Ramen & Deuren">Ramen & Deuren</option>
                <option value="Gevelrenovatie">Gevelrenovatie</option>
                <option value="Totaalrenovatie">Totaalrenovatie</option>
                <option value="Isolatiewerken">Isolatiewerken</option>
              </select>
            </div>
            <div id="category-error" aria-live="polite" aria-atomic="true">
                {state.errors?.category &&
                  state.errors.category.map((error: string) => (
                    <p key={error} className="mt-2 text-sm text-red-500">
                      {error}
                    </p>
                  ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
              Beschrijving
            </label>
            <div className="mt-2">
              <textarea
                id="description"
                name="description"
                rows={4}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3"
                placeholder="Beschrijf wat er gedaan is..."
                aria-describedby="description-error"
              />
            </div>
             <div id="description-error" aria-live="polite" aria-atomic="true">
                {state.errors?.description &&
                  state.errors.description.map((error: string) => (
                    <p key={error} className="mt-2 text-sm text-red-500">
                      {error}
                    </p>
                  ))}
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
              Project Foto
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-gray-50">
              <div className="text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600 justify-center">
                  <label
                    htmlFor="image"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500 px-2"
                  >
                    <span>Upload een bestand</span>
                    <input id="image" name="image" type="file" className="sr-only" accept="image/*" />
                  </label>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG, WEBP tot 4MB</p>
              </div>
            </div>
             <div id="image-error" aria-live="polite" aria-atomic="true">
                {state.errors?.image &&
                  state.errors.image.map((error: string) => (
                    <p key={error} className="mt-2 text-sm text-red-500">
                      {error}
                    </p>
                  ))}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-900/10 flex items-center justify-end gap-x-6">
            <Link href="/admin/projects" className="text-sm font-semibold leading-6 text-gray-900">
              Annuleren
            </Link>
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Project Opslaan
            </button>
          </div>
          
           <div aria-live="polite" aria-atomic="true">
              {state.message && (
                 <p className="mt-2 text-sm text-red-500">{state.message}</p>
              )}
            </div>

        </div>
      </form>
    </main>
  );
}
