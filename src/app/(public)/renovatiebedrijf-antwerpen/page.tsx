import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Renovatiebedrijf Antwerpen | Yannova - Totaalrenovatie',
  description: 'Op zoek naar een betrouwbaar renovatiebedrijf in Antwerpen? ✓ Totaalrenovatie ✓ 15+ jaar ervaring ✓ Gratis offerte. Bel nu!',
  keywords: 'renovatiebedrijf antwerpen, renovatie antwerpen, totaalrenovatie, verbouwing antwerpen',
};

export default function RenovatiebedrijfAntwerpenPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-linear-to-br from-purple-600 to-purple-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Renovatiebedrijf in Antwerpen
          </h1>
          <p className="text-xl mb-8">
            Van kleine verbouwing tot totaalrenovatie - Wij regelen het voor u
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+32123456789" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">
              📞 Bel Direct
            </a>
            <a href="https://wa.me/32123456789?text=Hallo%20Yannova,%20ik%20wil%20graag%20een%20offerte%20voor%20renovatie" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="font-bold mb-2">Totaalpakket</h3>
            <p className="text-gray-600 text-sm">Alles uit één hand</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="font-bold mb-2">15+ Jaar Ervaring</h3>
            <p className="text-gray-600 text-sm">Betrouwbaar vakmanschap</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="font-bold mb-2">Transparante Prijs</h3>
            <p className="text-gray-600 text-sm">Geen verrassingen</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="font-bold mb-2">Garantie</h3>
            <p className="text-gray-600 text-sm">Op werk en materiaal</p>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Onze Renovatiediensten</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Totaalrenovatie</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Volledige begeleiding</li>
                <li>✓ Alle disciplines</li>
                <li>✓ Eén aanspreekpunt</li>
                <li>✓ Planning & coördinatie</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Badkamerrenovatie</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Modern design</li>
                <li>✓ Loodgieterwerk</li>
                <li>✓ Tegelwerk</li>
                <li>✓ Sanitair installatie</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Keukenrenovatie</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Maatwerk keukens</li>
                <li>✓ Elektriciteit</li>
                <li>✓ Loodgieterwerk</li>
                <li>✓ Tegelwerk</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Dakwerken</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Dakrenovatie</li>
                <li>✓ Dakisolatie</li>
                <li>✓ Goten & afvoeren</li>
                <li>✓ Platte daken</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Vloeren</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Parket</li>
                <li>✓ Laminaat</li>
                <li>✓ Tegels</li>
                <li>✓ Vinyl</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Schilderwerken</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Binnen & buiten</li>
                <li>✓ Behangwerk</li>
                <li>✓ Decoratie</li>
                <li>✓ Afwerking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proces */}
      <section className="py-16 px-4 bg-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Hoe Werkt Het?</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Contact & Afspraak</h3>
                <p className="text-gray-700">Neem contact op voor een vrijblijvend gesprek en plaatsbezoek.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Offerte op Maat</h3>
                <p className="text-gray-700">We maken een gedetailleerde offerte met duidelijke prijzen.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Planning</h3>
                <p className="text-gray-700">We plannen de werkzaamheden in overleg met u.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Uitvoering</h3>
                <p className="text-gray-700">Onze vakmannen voeren het werk professioneel uit.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Oplevering</h3>
                <p className="text-gray-700">Netjes afgewerkt en opgeleverd, klaar om van te genieten!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerte Formulier */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Vraag Gratis Offerte Aan</h2>
          <form className="bg-white rounded-lg shadow-lg p-8 border">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Naam *</label>
                <input type="text" name="name" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input type="email" name="email" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Telefoon *</label>
                <input type="tel" name="phone" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Type renovatie</label>
                <select name="service" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500">
                  <option>Totaalrenovatie</option>
                  <option>Badkamerrenovatie</option>
                  <option>Keukenrenovatie</option>
                  <option>Dakwerken</option>
                  <option>Vloeren</option>
                  <option>Schilderwerken</option>
                  <option>Anders</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Bericht</label>
                <textarea name="message" rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500" placeholder="Vertel ons meer over uw renovatieproject..." />
              </div>
              <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition">
                Verstuur Aanvraag
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Wat Klanten Zeggen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border rounded-lg p-6">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-gray-700 mb-4">&quot;Onze totaalrenovatie perfect uitgevoerd. Alles uit één hand, super handig!&quot;</p>
              <p className="font-semibold">- Koen B., Antwerpen</p>
            </div>
            <div className="bg-white border rounded-lg p-6">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-gray-700 mb-4">&quot;Betrouwbaar bedrijf met vakmanschap. Onze badkamer is prachtig geworden.&quot;</p>
              <p className="font-semibold">- Els M., Berchem</p>
            </div>
            <div className="bg-white border rounded-lg p-6">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-gray-700 mb-4">&quot;Goede communicatie en netjes afgewerkt. Zeer tevreden!&quot;</p>
              <p className="font-semibold">- Dirk P., Deurne</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde Vragen</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Wat kost een renovatie?</h3>
              <p className="text-gray-700">Dit hangt af van de omvang en type renovatie. We maken graag een offerte op maat.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Hoe lang duurt een renovatie?</h3>
              <p className="text-gray-700">Een badkamer 1-2 weken, een totaalrenovatie 2-6 maanden, afhankelijk van de omvang.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Moet ik verhuizen tijdens de renovatie?</h3>
              <p className="text-gray-700">Bij kleine renovaties niet nodig. Bij totaalrenovaties adviseren we tijdelijk verhuizen.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Regelen jullie de vergunningen?</h3>
              <p className="text-gray-700">Ja, wij helpen met alle benodigde vergunningen en administratie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-purple-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Klaar voor Uw Renovatie?</h2>
          <p className="text-xl mb-8">Neem vandaag nog contact op voor een gratis offerte</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+32123456789" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">
              📞 +32 123 456 789
            </a>
            <a href="https://wa.me/32123456789" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
