import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crepi Aanbrengen Antwerpen | Hoogwaardige Siliconenharspleister',
  description: 'Crepi laten aanbrengen in Antwerpen? Specialist in siliconenharspleister en gevelisolatie. ✓ Zelfreinigend ✓ EPC-verbetering ✓ Gratis offerte. Bel nu!',
  keywords: 'crepi antwerpen, siliconenharspleister, gevelbepleistering antwerpen, buitengevel crepi, gevelisolatie EPS',
};

export default function CrepiIsolatieAntwerpenPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-linear-to-br from-secondary to-secondary/80 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Crepi Aanbrengen in Antwerpen
          </h1>
          <p className="text-xl mb-8">
            Hoogwaardige siliconenharspleister voor een duurzame en energiezuinige woning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+32432060388" className="bg-white text-secondary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
              📞 Bel Direct
            </a>
            <a href="https://wa.me/32432060388?text=Hallo%20Yannova,%20ik%20wil%20graag%20een%20offerte%20voor%20crepi" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-secondary font-bold px-8 py-4 rounded-lg hover:bg-yellow-300 transition shadow-lg">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">🧴</div>
            <h3 className="font-bold mb-2">Siliconenhars</h3>
            <p className="text-gray-600 text-sm">Zelfreinigend & barstvrij</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="font-bold mb-2">Totaaloplossing</h3>
            <p className="text-gray-600 text-sm">Gevel, ramen & dak</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold mb-2">EPC-Winst</h3>
            <p className="text-gray-600 text-sm">Verlaag uw energiefactuur</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="font-bold mb-2">Vakmanschap</h3>
            <p className="text-gray-600 text-sm">Oog voor elk detail</p>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Onze Crepi Diensten</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6 bg-white hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-4">Siliconenharspleister</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Extra waterafstotend</li>
                <li>✓ Zelfreinigend effect</li>
                <li>✓ UV-bestendig & kleurvast</li>
                <li>✓ Zeer elastisch (minder barsten)</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6 bg-white hover:shadow-md transition border-secondary/30">
              <h3 className="text-xl font-bold mb-4 text-secondary">Gevelisolatie (EPS)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Direct lagere energiekosten</li>
                <li>✓ In aanmerking voor premies</li>
                <li>✓ Geen koudebruggen meer</li>
                <li>✓ Waardevermeerdering woning</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6 bg-white hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-4">Steenstrips</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Look van echt metselwerk</li>
                <li>✓ Perfecte isolatie-onderbouw</li>
                <li>✓ Onderhoudsarm</li>
                <li>✓ Karaktervolle uitstraling</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6 bg-white hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-4">Gevelrenovatie</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Herstel van oude gevels</li>
                <li>✓ Professionele voorbereiding</li>
                <li>✓ Perfecte aansluiting ramen</li>
                <li>✓ Totaalpakket ontzorging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offerte Formulier */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Vraag Gratis Advies Aan</h2>
          <form className="bg-white rounded-lg shadow-xl p-8 border border-secondary/10">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Naam *</label>
                <input type="text" name="name" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-hidden" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input type="email" name="email" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-hidden" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Telefoon *</label>
                <input type="tel" name="phone" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-hidden" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Interesse in</label>
                <select name="service" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-hidden">
                  <option>Siliconenharspleister (Crepi)</option>
                  <option>Crepi met isolatie</option>
                  <option>Steenstrips</option>
                  <option>Totaalrenovatie buitenschil</option>
                  <option>Weet ik nog niet</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Bericht</label>
                <textarea name="message" rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-hidden" placeholder="Vertel ons meer over uw woning in Antwerpen..." />
              </div>
              <button type="submit" className="w-full bg-secondary text-white py-4 rounded-lg font-bold hover:bg-secondary/90 transition shadow-lg">
                Verstuur Aanvraag
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Voordelen */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-foreground">De Kracht van Siliconen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <div className="text-5xl mb-4 text-secondary">✨</div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Zelfreinigend</h3>
              <p className="text-muted-foreground text-sm">Vuil spoelt weg met de regen dankzij de siliconen toplaag.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <div className="text-5xl mb-4 text-secondary">🛡️</div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Extreme Duurzaamheid</h3>
              <p className="text-muted-foreground text-sm">Blijvend elastisch, waardoor de kans op scheuren minimaal is.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <div className="text-5xl mb-4 text-secondary">🎨</div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Vlekbestendig</h3>
              <p className="text-muted-foreground text-sm">Resistent tegen algen, mossen en atmosferische vervuiling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde Vragen</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Wat kost crepi met isolatie per m²?</h3>
              <p className="text-gray-700 leading-relaxed">Gemiddeld rekent u voor een volledige gevelrenovatie met 10cm EPS-isolatie en siliconenharspleister tussen de €80 en €150 per m². De exacte prijs hangt af van de oppervlakte en de complexiteit van de details (zoals vensterbanken).</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Is er een vergunning nodig voor crepi in Antwerpen?</h3>
              <p className="text-gray-700 leading-relaxed">Wanneer u de gevel isoleert en daarmee het uitzicht wijzigt, is er meestal een meldingsplicht of vergunning nodig. Wij adviseren u graag over de specifieke regels in uw district.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Wat is het voordeel van de totaaloplossing?</h3>
              <p className="text-gray-700 leading-relaxed">Door gevel, ramen en dak in één keer aan te pakken, garanderen we een 100% luchtdichte en waterdichte aansluiting. Bovendien heeft u maar één planning en één aanspreekpunt.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Hoe lang gaat siliconenharspleister mee?</h3>
              <p className="text-gray-700 leading-relaxed">Bij professionele plaatsing en minimaal onderhoud (jaarlijks afspoelen) gaat deze afwerking makkelijk 30 jaar mee zonder zijn kleur of elasticiteit te verliezen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 italic">Ready for an upgrade?</h2>
          <p className="text-xl mb-8">Neem vandaag nog contact op voor een gratis gevelscan en offerte</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+32432060388" className="bg-white text-secondary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
              📞 +32 432 060 388
            </a>
            <a href="https://wa.me/32432060388" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-secondary px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition shadow-lg">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
