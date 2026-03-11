import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ramen en Deuren Plaatsen Antwerpen | Yannova - Gratis Offerte',
  description: 'Nieuwe ramen en deuren laten plaatsen in Antwerpen? ✓ PVC & Aluminium ✓ Vakmanschap ✓ Gratis offerte ✓ Snelle service. Bel nu!',
  keywords: 'ramen plaatsen antwerpen, deuren antwerpen, pvc ramen antwerpen, aluminium ramen, nieuwe ramen antwerpen',
};

export default function RamenDeurenAntwerpenPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ramen en Deuren Plaatsen in Antwerpen
          </h1>
          <p className="text-xl mb-8">
            Vakkundige plaatsing van PVC en aluminium ramen en deuren
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+32123456789"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              📞 Bel Direct
            </a>
            <a
              href="https://wa.me/32123456789?text=Hallo%20Yannova,%20ik%20wil%20graag%20een%20offerte%20voor%20ramen%20en%20deuren"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-bold text-lg mb-2">Vakmanschap</h3>
              <p className="text-gray-600">15+ jaar ervaring in Antwerpen</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold text-lg mb-2">Gratis Offerte</h3>
              <p className="text-gray-600">Vrijblijvend en snel</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-lg mb-2">Snelle Service</h3>
              <p className="text-gray-600">Binnen 48u reactie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Onze Diensten</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">PVC Ramen</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Energiezuinig</li>
                <li>✓ Onderhoudsarm</li>
                <li>✓ Lange levensduur</li>
                <li>✓ Goede isolatie</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Aluminium Ramen</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Modern design</li>
                <li>✓ Slanke profielen</li>
                <li>✓ Duurzaam materiaal</li>
                <li>✓ Veel lichtinval</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Voordeuren</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Veilig en stevig</li>
                <li>✓ Diverse stijlen</li>
                <li>✓ Goede isolatie</li>
                <li>✓ Op maat gemaakt</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Schuifdeuren</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Ruimtebesparend</li>
                <li>✓ Veel licht</li>
                <li>✓ Soepel systeem</li>
                <li>✓ Modern uiterlijk</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offerte Formulier */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Vraag Gratis Offerte Aan
          </h2>
          <form className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Naam *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Telefoon *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Wat wilt u laten plaatsen?</label>
                <select
                  name="service"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option>PVC Ramen</option>
                  <option>Aluminium Ramen</option>
                  <option>Voordeur</option>
                  <option>Schuifdeur</option>
                  <option>Ramen en Deuren</option>
                  <option>Anders</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Bericht</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Vertel ons meer over uw project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Verstuur Aanvraag
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Wat Klanten Zeggen</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-gray-700 mb-4">
                "Professioneel werk! Onze nieuwe ramen zijn perfect geplaatst en het huis is nu veel stiller."
              </p>
              <p className="font-semibold">- Jan D., Antwerpen</p>
            </div>
            <div className="border rounded-lg p-6">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-gray-700 mb-4">
                "Snelle service en goede prijs. Aanrader voor wie nieuwe ramen wil in Antwerpen!"
              </p>
              <p className="font-semibold">- Marie V., Berchem</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde Vragen</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Wat kost het plaatsen van nieuwe ramen?</h3>
              <p className="text-gray-700">
                De prijs hangt af van het type raam, afmetingen en aantal. Vraag een gratis offerte aan voor een exacte prijs.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Hoe lang duurt de plaatsing?</h3>
              <p className="text-gray-700">
                Gemiddeld 1-2 dagen voor een standaard woning, afhankelijk van het aantal ramen.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Krijg ik garantie?</h3>
              <p className="text-gray-700">
                Ja, wij bieden garantie op zowel materiaal als plaatsing.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Werken jullie in heel Antwerpen?</h3>
              <p className="text-gray-700">
                Ja, wij werken in Antwerpen en omgeving (Berchem, Deurne, Borgerhout, Wilrijk, etc.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-blue-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Klaar voor Nieuwe Ramen en Deuren?
          </h2>
          <p className="text-xl mb-8">
            Neem vandaag nog contact op voor een gratis offerte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+32123456789"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              📞 +32 123 456 789
            </a>
            <a
              href="https://wa.me/32123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
