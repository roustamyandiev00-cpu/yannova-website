'use client';

import { useState } from 'react';

export default function SetupDatabasePage() {
  const [status, setStatus] = useState<'idle' | 'running' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const runMigration = async () => {
    setStatus('running');
    setMessage('Bezig met aanmaken van database tables...');

    try {
      const response = await fetch('/api/admin/setup-database', {
        method: 'POST',
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Database tables succesvol aangemaakt!');
      } else {
        setStatus('error');
        setMessage(data.error || 'Er is een fout opgetreden');
      }
    } catch (error: any) {
      setStatus('error');
      setMessage(error.message || 'Netwerk fout');
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Database Setup</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Shop Database Tables</h2>
        <p className="text-gray-600 mb-4">
          Klik op de knop hieronder om de benodigde database tables aan te maken voor de shop.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <h3 className="font-bold text-blue-900 mb-2">Wat wordt er aangemaakt?</h3>
          <ul className="list-disc list-inside text-blue-800 space-y-1">
            <li>shop_orders - Voor het opslaan van bestellingen</li>
            <li>shop_order_items - Voor order details</li>
            <li>Indexes voor betere performance</li>
            <li>RLS policies voor security</li>
          </ul>
        </div>

        <button
          onClick={runMigration}
          disabled={status === 'running'}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'running' ? 'Bezig...' : 'Database Aanmaken'}
        </button>

        {status !== 'idle' && (
          <div className={`mt-4 p-4 rounded-lg ${
            status === 'success' ? 'bg-green-50 border border-green-200' :
            status === 'error' ? 'bg-red-50 border border-red-200' :
            'bg-gray-50 border border-gray-200'
          }`}>
            <p className={`${
              status === 'success' ? 'text-green-800' :
              status === 'error' ? 'text-red-800' :
              'text-gray-800'
            }`}>
              {message}
            </p>
          </div>
        )}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="font-bold text-yellow-900 mb-2">⚠️ Alternatieve Methode</h3>
        <p className="text-yellow-800 mb-3">
          Als de automatische setup niet werkt, kun je de migratie handmatig uitvoeren:
        </p>
        <ol className="list-decimal list-inside text-yellow-800 space-y-2">
          <li>Ga naar <a href="https://adlqcdnpjaglfvleeykj.supabase.co" target="_blank" className="underline">Supabase Dashboard</a></li>
          <li>Klik op "SQL Editor" → "New Query"</li>
          <li>Kopieer de SQL uit: <code className="bg-yellow-100 px-2 py-1 rounded">supabase/migrations/20240315_create_shop_tables.sql</code></li>
          <li>Plak in de SQL editor en klik "Run"</li>
        </ol>
      </div>
    </div>
  );
}
