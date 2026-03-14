'use client';

import { useState, useEffect } from 'react';
import { Package, TrendingUp, DollarSign, Percent, Download, Check } from 'lucide-react';

interface BigBuyProduct {
  id: number;
  sku: string;
  name: string;
  description: string;
  inStock: boolean;
  stock: number;
  brand?: string;
  pricing: {
    wholesale: number;
    retail: number;
    margin: number;
    marginPercentage: number;
  };
}

export default function BigBuyProductsPage() {
  const [products, setProducts] = useState<BigBuyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState<Set<number>>(new Set());
  const [importing, setImporting] = useState(false);
  const [marginPercentage, setMarginPercentage] = useState(40);
  const [stats, setStats] = useState({
    totalProducts: 0,
    avgMargin: 0,
    avgMarginPercentage: 0,
    inStockCount: 0,
  });

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`/api/bigbuy/products?page=${page}&pageSize=50`);
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch products');
      }

      setProducts(data.products);

      // Calculate stats
      const totalMargin = data.products.reduce((sum: number, p: BigBuyProduct) => sum + p.pricing.margin, 0);
      const totalMarginPercentage = data.products.reduce((sum: number, p: BigBuyProduct) => sum + p.pricing.marginPercentage, 0);
      const inStock = data.products.filter((p: BigBuyProduct) => p.inStock).length;

      setStats({
        totalProducts: data.count,
        avgMargin: totalMargin / data.count,
        avgMarginPercentage: totalMarginPercentage / data.count,
        inStockCount: inStock,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const toggleProduct = (productId: number) => {
    const newSelected = new Set(selectedProducts);
    if (newSelected.has(productId)) {
      newSelected.delete(productId);
    } else {
      newSelected.add(productId);
    }
    setSelectedProducts(newSelected);
  };

  const toggleAll = () => {
    if (selectedProducts.size === products.length) {
      setSelectedProducts(new Set());
    } else {
      setSelectedProducts(new Set(products.map(p => p.id)));
    }
  };

  const handleImport = async () => {
    if (selectedProducts.size === 0) {
      alert('Selecteer eerst producten om te importeren');
      return;
    }

    if (!confirm(`${selectedProducts.size} producten importeren met ${marginPercentage}% marge?`)) {
      return;
    }

    try {
      setImporting(true);
      const response = await fetch('/api/bigbuy/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productIds: Array.from(selectedProducts),
          marginPercentage,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Import failed');
      }

      alert(`✓ ${data.imported} producten geïmporteerd!\n${data.failed > 0 ? `✗ ${data.failed} mislukt` : ''}`);
      setSelectedProducts(new Set());
    } catch (err) {
      alert('Import error: ' + (err instanceof Error ? err.message : 'Unknown error'));
    } finally {
      setImporting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">BigBuy Producten</h1>
        <p className="mt-2 text-gray-600">
          Bekijk producten van BigBuy met inkoopprijzen en marges
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Totaal Producten</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{stats.totalProducts}</p>
            </div>
            <Package className="h-12 w-12 text-blue-500" />
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Op Voorraad</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{stats.inStockCount}</p>
            </div>
            <TrendingUp className="h-12 w-12 text-green-500" />
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Gem. Marge</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                €{stats.avgMargin.toFixed(2)}
              </p>
            </div>
            <DollarSign className="h-12 w-12 text-orange-500" />
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Gem. Marge %</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                {stats.avgMarginPercentage.toFixed(1)}%
              </p>
            </div>
            <Percent className="h-12 w-12 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Import Controls */}
      <div className="rounded-lg bg-white p-6 shadow">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gewenste Marge %
              </label>
              <input
                type="number"
                value={marginPercentage}
                onChange={(e) => setMarginPercentage(Number(e.target.value))}
                className="mt-1 w-24 rounded-md border border-gray-300 px-3 py-2"
                min="0"
                max="100"
              />
            </div>
            <div className="text-sm text-gray-600">
              {selectedProducts.size} producten geselecteerd
            </div>
          </div>
          <button
            onClick={handleImport}
            disabled={selectedProducts.size === 0 || importing}
            className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {importing ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                Importeren...
              </>
            ) : (
              <>
                <Download className="h-4 w-4" />
                Importeer Geselecteerde
              </>
            )}
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-red-800">
          <p className="font-medium">Error</p>
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Products Table */}
      <div className="rounded-lg bg-white shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedProducts.size === products.length && products.length > 0}
                    onChange={toggleAll}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  SKU
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Voorraad
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                  Inkoopprijs
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                  Verkoopprijs
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                  Marge
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                  Marge %
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {loading ? (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center text-gray-500">
                    <div className="flex items-center justify-center">
                      <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
                      <span className="ml-3">Producten laden...</span>
                    </div>
                  </td>
                </tr>
              ) : products.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center text-gray-500">
                    Geen producten gevonden
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedProducts.has(product.id)}
                        onChange={() => toggleProduct(product.id)}
                        className="h-4 w-4 rounded border-gray-300"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      {product.brand && (
                        <div className="text-sm text-gray-500">{product.brand}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{product.sku}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                          product.inStock
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {product.inStock ? `${product.stock} stuks` : 'Niet op voorraad'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-sm text-gray-900">
                      €{product.pricing.wholesale.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium text-gray-900">
                      €{product.pricing.retail.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium text-green-600">
                      €{product.pricing.margin.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium text-green-600">
                      {product.pricing.marginPercentage.toFixed(1)}%
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-6 py-4">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1 || loading}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            Vorige
          </button>
          <span className="text-sm text-gray-700">Pagina {page}</span>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={loading || products.length < 50}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            Volgende
          </button>
        </div>
      </div>
    </div>
  );
}

