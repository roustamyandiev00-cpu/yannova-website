import { Metadata } from 'next';
import { generateSEO, generateBreadcrumbSchema } from '@/components/SEO';
import { CheckCircle, Phone, Mail, MapPin, Clock, Award } from 'lucide-react';
import Link from 'next/link';
import { company } from '@/lib/company';

export const metadata: Metadata = generateSEO({
  title: "Ramen Brasschaat | PVC en aluminium ramen met HR++ glas | Yannova",
  description: "Ramen in Brasschaat? Yannova is specialist in pvc en aluminium ramen met hr++ glas. Gratis opmeting en offerte binnen 24 uur. 15+ jaar ervaring in Brasschaat en omgeving.",
  path: "/ramen/brasschaat",
  keywords: ["ramen brasschaat", "ramen plaatsen brasschaat", "ramen Brasschaat", "nieuwe ramen brasschaat", "ramen specialist brasschaat"],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Ramen", url: "/ramen" },
  { name: "Brasschaat", url: "/ramen/brasschaat" },
]);

export default function RamenBrasschaatPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        {/* Hero Section */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-secondary mb-4">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium">Brasschaat en omgeving</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Ramen in <span className="text-secondary">Brasschaat</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Specialist in pvc en aluminium ramen met hr++ glas in Brasschaat. Gratis opmeting, duidelijke offerte binnen 24 uur 
                en vakkundige plaatsing door ervaren vaklui. Actief in Brasschaat en omgeving.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Waarom kiezen voor Yannova in Brasschaat?
                </h2>
                <div className="space-y-4 mb-8">
                  {[
                    "Lokaal actief in Brasschaat en omgeving",
                    "Gratis opmeting bij u thuis",
                    "Offerte binnen 24 uur",
                    "PVC en aluminium ramen met HR++ glas",
                    "10-30 jaar garantie op materiaal en plaatsing",
                    "Hulp bij premie-aanvraag (Mijn VerbouwPremie)",
                    "Vaste ploeg ervaren vaklui",
                    "Plaatsing binnen 4-6 weken",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                {/* USPs */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                    <Clock className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">24u</div>
                    <div className="text-sm text-gray-400">Offerte</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                    <Award className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-sm text-gray-400">Jaar ervaring</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                    <CheckCircle className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">30j</div>
                    <div className="text-sm text-gray-400">Garantie</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Vraag een gratis offerte aan
                </h3>
                <p className="text-gray-300 mb-6">
                  Neem contact op voor een vrijblijvende offerte in Brasschaat. 
                  We komen gratis langs voor een opmeting.
                </p>
                <div className="space-y-4">
                  <a
                    href={`tel:${company.phone}`}
                    className="flex items-center gap-3 p-4 bg-secondary hover:bg-secondary/90 text-white rounded-lg transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <div>
                      <div className="text-sm opacity-90">Bel ons direct</div>
                      <div className="font-semibold">{company.phoneDisplay}</div>
                    </div>
                  </a>
                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <div>
                      <div className="text-sm opacity-90">Email ons</div>
                      <div className="font-semibold">{company.email}</div>
                    </div>
                  </a>
                  <Link
                    href="/offerte"
                    className="block text-center p-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg transition-colors font-medium"
                  >
                    Online offerte aanvragen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ramen Plaatsen in Brasschaat: Wat U Moet Weten
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Als u op zoek bent naar ramen in Brasschaat, bent u bij Yannova aan het juiste adres. 
                Met meer dan 15 jaar ervaring in de regio Brasschaat en omgeving, weten wij precies wat er 
                komt kijken bij het plaatsen van ramen. Of het nu gaat om een nieuwbouwproject of 
                renovatie, wij staan voor u klaar met professioneel advies en vakkundige uitvoering.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                Onze Werkwijze in Brasschaat
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Bij Yannova werken we volgens een vaste werkwijze die zorgt voor een vlot verloop 
                van uw project in Brasschaat:
              </p>
              <ol className="text-gray-300 space-y-3 mb-6">
                <li><strong>Gratis opmeting:</strong> We komen bij u langs in Brasschaat voor een gratis en vrijblijvende opmeting.</li>
                <li><strong>Offerte binnen 24 uur:</strong> U ontvangt een duidelijke offerte zonder verborgen kosten.</li>
                <li><strong>Planning:</strong> We plannen de werkzaamheden op een moment dat u uitkomt.</li>
                <li><strong>Professionele plaatsing:</strong> Onze ervaren vaklui zorgen voor een nette en snelle plaatsing.</li>
                <li><strong>Oplevering:</strong> We ruimen alles netjes op en controleren samen met u het eindresultaat.</li>
              </ol>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                Premies en Subsidies in Brasschaat
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Voor energiebesparende renovaties zoals ramen kunt u in aanmerking komen voor premies 
                via Mijn VerbouwPremie. Wij helpen u graag met het aanvragen van deze premies, zodat u 
                maximaal kunt besparen op uw project in Brasschaat. Afhankelijk van uw situatie kunt u tot 
                €3.500 subsidie ontvangen.
              </p>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Onze andere diensten in Brasschaat
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link href="/ramen" className="bg-gray-800/50 border border-white/10 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Ramen</h3>
                <p className="text-gray-300">PVC en aluminium ramen met HR++ glas</p>
              </Link>
              <Link href="/deuren" className="bg-gray-800/50 border border-white/10 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Deuren</h3>
                <p className="text-gray-300">Voor- en achterdeuren in PVC & aluminium</p>
              </Link>
              <Link href="/diensten/gevelrenovatie" className="bg-gray-800/50 border border-white/10 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Gevelrenovatie</h3>
                <p className="text-gray-300">Isolatie met crepi-afwerking</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
