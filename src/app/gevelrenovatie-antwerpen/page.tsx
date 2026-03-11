import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gevelrenovatie Antwerpen | Yannova - Vakkundige Gevelwerken',
  description: 'Gevelrenovatie in Antwerpen? ✓ Vakmanschap ✓ Crepi & Gevelbekleding ✓ Gratis offerte ✓ 15+ jaar ervaring. Bel voor advies!',
  keywords: 'gevelrenovatie antwerpen, gevelwerken antwerpen, gevel renoveren, gevelbekleding antwerpen',
};

export default function GevelrenovatieAntwerpenPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Gevelrenovatie in Antwerpen
          </h1>
          <p className="text-xl mb-8">
            Professionele gevelwerken voor een mooie en duurzame gevel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+32123456789" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">
              📞 Bel Direct
            </a>
            <a href="https://wa.me/32123456789?text=Hallo%20Yannova,%20ik%20wil%20graag%20een%20offerte%20voor%20gevelrenovatie" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="font-bold mb-2">15+ Jaar Ervaring</h3>
            <p className="text-gray-600 text-sm">Specialist in gevelwerken</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="font-bold mb-2">Vakmanschap</h3>
            <p className="text-gray-600 text-sm">Kwaliteit gegarandeerd</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="font-bold mb-2">Gratis Offerte</h3>
            <p className="text-gray-600 text-sm">Vrijblijvend advies</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold mb-2">Snelle Service</h3>
            <p className="text-gray-600 text-sm">Binnen 48u reactie</p>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Onze Gevelwerken</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Crepi Aanbrengen</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Diverse structuren</li>
                <li>✓ Kleurvast</li>
                <li>✓ Waterafstotend</li>
                <li>✓ Duurzaam</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Gevelbekleding</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Hout, PVC, Aluminium</li>
                <li>✓ Modern design</li>
                <li>✓ Onderhoudsarm</li>
                <li>✓ Lange levensduur</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Gevelisolatie</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Energiebesparing</li>
                <li>✓ Premies mogelijk</li>
                <li>✓ Betere isolatie</li>
                <li>✓ Waardevermeerdering</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Gevelreiniging</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Professioneel</li>
                <li>✓ Veilig</li>
                <li>✓ Grondig</li>
                <li>✓ Snel resultaat</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offerte Formulier */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Vraag Gratis Offerte Aan</h2>
          <form className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Naam *</label>
                <input type="text" name="name" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input type="email" name="email" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Telefoon *</label>
                <input type="tel" name="phone" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Type gevelwerk</label>
                <select name="service" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500">
                  <option>Crepi aanbrengen</option>
                  <option>Gevelbekleding</option>
                  <option>Gevelisolatie</option>
                  <option>Gevelreiniging</option>
                  <option>Volledige gevelrenovatie</option>
                  <option>Anders</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Bericht</label>
                <textarea name="message" rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500" placeholder="Vertel ons meer over uw gevel..." />
              </div>
              <button type="submit" className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition">
                Verstuur Aanvraag
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Waarom Gevelrenovatie */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Waarom Gevelrenovatie?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-bold text-lg mb-2">Bespaar Energie</h3>
              <p className="text-gray-700">Tot 30% lagere verwarmingskosten</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="font-bold text-lg mb-2">Hogere Waarde</h3>
              <p className="text-gray-700">Verhoogt de waarde van uw woning</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-bold text-lg mb-2">Mooier Uiterlijk</h3>
              <p className="text-gray-700">Fris en modern aanzien</p>
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
              <p className="text-gray-700 mb-4">"Onze gevel ziet er weer prachtig uit! Professioneel werk en netjes afgewerkt."</p>
              <p className="font-semibold">- Peter M., Antwerpen</p>
            </div>
            <div className="bg-white border rounded-lg p-6">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-gray-700 mb-4">"Snelle service en goede prijs voor gevelrenovatie. Zeer tevreden!"</p>
              <p className="font-semibold">- Linda K., Berchem</p>
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
              <h3 className="font-bold text-lg mb-2">Wat kost gevelrenovatie?</h3>
              <p className="text-gray-700">De prijs hangt af van de grootte van de gevel, het type werk en materialen. Vraag een gratis offerte aan.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Hoe lang duurt gevelrenovatie?</h3>
              <p className="text-gray-700">Gemiddeld 1-2 weken voor een standaard woning, afhankelijk van het type werk.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Kan ik premies krijgen?</h3>
              <p className="text-gray-700">Ja, voor gevelisolatie zijn er vaak premies beschikbaar. Wij helpen u graag met de aanvraag.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Wanneer is het beste seizoen?</h3>
              <p className="text-gray-700">Gevelwerken kunnen het hele jaar door, maar lente en zomer zijn ideaal vanwege het weer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Klaar voor een Mooie Gevel?</h2>
          <p className="text-xl mb-8">Neem vandaag nog contact op voor een gratis offerte</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+32123456789" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">
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
