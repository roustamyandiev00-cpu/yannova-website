import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crepi Aanbrengen Antwerpen | Yannova - Gevelbepleistering',
  description: 'Crepi laten aanbrengen in Antwerpen? ✓ Professioneel ✓ Diverse structuren ✓ Gratis offerte ✓ Duurzaam resultaat. Bel nu!',
  keywords: 'crepi antwerpen, crepi aanbrengen, gevelbepleistering antwerpen, buitengevel crepi',
};

export default function CrepiIsolatieAntwerpenPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Crepi Aanbrengen in Antwerpen
          </h1>
          <p className="text-xl mb-8">
            Professionele gevelbepleistering voor een duurzame buitengevel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+32123456789" className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">
              📞 Bel Direct
            </a>
            <a href="https://wa.me/32123456789?text=Hallo%20Yannova,%20ik%20wil%20graag%20een%20offerte%20voor%20crepi" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-bold mb-2">Diverse Structuren</h3>
            <p className="text-gray-600 text-sm">Keuze uit vele stijlen</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💧</div>
            <h3 className="font-bold mb-2">Waterafstotend</h3>
            <p className="text-gray-600 text-sm">Beschermt tegen vocht</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="font-bold mb-2">Lange Levensduur</h3>
            <p className="text-gray-600 text-sm">20+ jaar garantie</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="font-bold mb-2">Vakmanschap</h3>
            <p className="text-gray-600 text-sm">15+ jaar ervaring</p>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Onze Crepi Diensten</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Traditioneel Crepi</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Klassieke uitstraling</li>
                <li>✓ Diverse korrelgroottes</li>
                <li>✓ Kleurvast</li>
                <li>✓ Ademend</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Siliconencrep</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Extra waterafstotend</li>
                <li>✓ Zelfreinigend effect</li>
                <li>✓ UV-bestendig</li>
                <li>✓ Lange levensduur</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Crepi met Isolatie</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Energiebesparing</li>
                <li>✓ Premies mogelijk</li>
                <li>✓ Betere isolatie</li>
                <li>✓ Waardevermeerdering</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Crepi Renovatie</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Herstel oude crepi</li>
                <li>✓ Nieuwe toplaag</li>
                <li>✓ Kleurverandering</li>
                <li>✓ Kostenbesparend</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offerte Formulier */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Vraag Gratis Offerte Aan</h2>
          <form className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Naam *</label>
                <input type="text" name="name" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input type="email" name="email" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Telefoon *</label>
                <input type="tel" name="phone" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Type crepi</label>
                <select name="service" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500">
                  <option>Traditioneel crepi</option>
                  <option>Siliconencrep</option>
                  <option>Crepi met isolatie</option>
                  <option>Crepi renovatie</option>
                  <option>Weet ik nog niet</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Bericht</label>
                <textarea name="message" rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Vertel ons meer over uw gevel..." />
              </div>
              <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition">
                Verstuur Aanvraag
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Voordelen */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Voordelen van Crepi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-bold text-lg mb-2">Betaalbaar</h3>
              <p className="text-gray-700">Goede prijs-kwaliteit verhouding</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="font-bold text-lg mb-2">Bescherming</h3>
              <p className="text-gray-700">Beschermt tegen weer en wind</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="font-bold text-lg mb-2">Veel Keuze</h3>
              <p className="text-gray-700">Diverse kleuren en structuren</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Wat Klanten Zeggen</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border rounded-lg p-6">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-gray-700 mb-4">"Mooi afgewerkt crepi! Onze gevel ziet er weer als nieuw uit."</p>
              <p className="font-semibold">- Tom V., Antwerpen</p>
            </div>
            <div className="bg-white border rounded-lg p-6">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-gray-700 mb-4">"Professioneel werk en netjes opgeleverd. Aanrader!"</p>
              <p className="font-semibold">- Sarah D., Deurne</p>
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
              <h3 className="font-bold text-lg mb-2">Wat kost crepi aanbrengen?</h3>
              <p className="text-gray-700">Gemiddeld €40-80 per m², afhankelijk van type en voorbereiding. Vraag een gratis offerte aan.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Hoe lang duurt het aanbrengen?</h3>
              <p className="text-gray-700">Voor een standaard woning 3-5 dagen, afhankelijk van de grootte en het weer.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Hoe lang gaat crepi mee?</h3>
              <p className="text-gray-700">Bij goede kwaliteit en onderhoud 20-30 jaar.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Kan crepi op elke ondergrond?</h3>
              <p className="text-gray-700">Crepi kan op de meeste ondergronden, maar goede voorbereiding is essentieel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Klaar voor een Mooie Crepi Gevel?</h2>
          <p className="text-xl mb-8">Neem vandaag nog contact op voor een gratis offerte</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+32123456789" className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">
              📞 +32 123 456 789
            </a>
            <a href="https://wa.me/32123456789" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
