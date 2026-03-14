'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getProductsByCategory, PRODUCTS } from '@/data/products';
import { CATEGORY_LABELS, ProductCategory } from '@/types/shop';
import { ProductImage } from '@/components/shop/ProductImage';

type ShopSortOption = 'featured' | 'price-asc' | 'price-desc' | 'name-asc';

export default function ShopContent() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<ShopSortOption>('featured');
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  useEffect(() => {
    let nextProducts = getProductsByCategory(selectedCategory);

    if (searchQuery.trim()) {
      const normalizedQuery = searchQuery.trim().toLowerCase();
      nextProducts = nextProducts.filter((product) =>
        [product.name, product.shortDescription, product.brand, product.sku, ...product.tags]
          .filter(Boolean)
          .some((value) => value!.toLowerCase().includes(normalizedQuery))
      );
    }

    nextProducts = [...nextProducts].sort((left, right) => {
      switch (sortBy) {
        case 'price-asc': return left.price - right.price;
        case 'price-desc': return right.price - left.price;
        case 'name-asc': return left.name.localeCompare(right.name, 'nl-BE');
        default:
          return (
            Number(right.featured) - Number(left.featured) ||
            Number(right.bestseller) - Number(left.bestseller) ||
            left.price - right.price
          );
      }
    });

    setFilteredProducts(nextProducts);
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
            Yannova Accessoires
          </p>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Onderhoud & Accessoires
          </h1>
          <p className="max-w-2xl text-lg text-sky-100 md:text-xl">
            Praktische onderhoudsproducten en accessoires voor ramen en deuren.
            Vraag eenvoudig aan — wij bezorgen of leveren mee bij uw project.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-5 py-2.5 text-sm text-amber-200">
            <span>📦</span>
            <span>Producten op aanvraag — geen webshop, gewoon direct contact</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-8 grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[1.6fr_0.9fr]">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Zoek op product, merk of SKU</span>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Bijvoorbeeld FENOSOL, tochtstrip of raamgreep"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Sorteer</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as ShopSortOption)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            >
              <option value="featured">Aanbevolen eerst</option>
              <option value="price-asc">Prijs laag naar hoog</option>
              <option value="price-desc">Prijs hoog naar laag</option>
              <option value="name-asc">Naam A-Z</option>
            </select>
          </label>
        </div>

        {/* Categoriefilters */}
        <div className="mb-8 flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              selectedCategory === 'all' ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            Alle Producten ({PRODUCTS.length})
          </button>
          {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
            const count = PRODUCTS.filter((p) => p.category === key).length;
            return (
              <button
                key={key}
                onClick={() => setSelectedCategory(key as ProductCategory)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  selectedCategory === key ? 'bg-sky-600 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {label} ({count})
              </button>
            );
          })}
        </div>

        <p className="mb-6 text-sm text-slate-600">
          {filteredProducts.length} product{filteredProducts.length === 1 ? '' : 'en'} gevonden
        </p>

        {filteredProducts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Geen producten gevonden</h2>
            <p className="mt-3 text-slate-600">Pas je zoekterm of filter aan.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Afbeelding */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-100 via-white to-sky-50">
                  <ProductImage src={product.images[0]} alt={product.name} category={product.category} />
                  {product.bestseller && (
                    <span className="absolute left-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white">
                      BESTSELLER
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="absolute right-4 top-4 rounded-full bg-rose-500 px-3 py-1 text-xs font-bold text-white">
                      AANBIEDING
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                      {CATEGORY_LABELS[product.category]}
                    </span>
                    {product.brand && <span className="text-xs text-slate-500">{product.brand}</span>}
                  </div>
                  <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-slate-900">{product.name}</h3>
                  <p className="mb-4 line-clamp-2 text-sm leading-6 text-slate-600">{product.shortDescription}</p>

                  {/* Prijs + aanvraagknop */}
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      {product.originalPrice ? (
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm text-slate-400 line-through">€{product.originalPrice.toFixed(2)}</span>
                          <span className="text-2xl font-bold text-rose-600">€{product.price.toFixed(2)}</span>
                        </div>
                      ) : (
                        <span className="text-2xl font-bold text-slate-900">€{product.price.toFixed(2)}</span>
                      )}
                      <p className="mt-0.5 text-xs text-slate-400">Prijs op aanvraag bevestigd</p>
                    </div>
                    <Link
                      href={`/contact?product=${encodeURIComponent(product.name)}&sku=${product.sku}`}
                      className="shrink-0 rounded-full bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 active:scale-95"
                    >
                      Vraag aan
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Info blokken */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="mb-3 text-3xl">📩</div>
            <h3 className="mb-2 text-lg font-bold text-slate-900">Aanvraag via contact</h3>
            <p className="text-slate-600">Stuur ons een bericht met het gewenste product — wij bevestigen prijs en levering.</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="mb-3 text-3xl">🚚</div>
            <h3 className="mb-2 text-lg font-bold text-slate-900">Levering of afhaling</h3>
            <p className="text-slate-600">Producten worden geleverd of meegebracht bij uw renovatieproject.</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="mb-3 text-3xl">💬</div>
            <h3 className="mb-2 text-lg font-bold text-slate-900">Persoonlijk advies</h3>
            <p className="text-slate-600">Niet zeker welk product u nodig heeft? Wij helpen u graag verder.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
