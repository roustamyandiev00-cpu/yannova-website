import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { CheckCircle, Phone, Mail, MapPin, Clock, Award } from 'lucide-react';
import { company } from '@/lib/company';

const cityName = "Berchem";

export const metadata: Metadata = generateSEO({
  title: `Gevelrenovatie ${cityName} | Crepi & Gevelisolatie | Yannova`,
  description: `Gevelrenovatie in ${cityName}? Ontdek de voordelen van gevelisolatie met crepi. Yannova biedt topkwaliteit, gratis opmeting en 15+ jaar ervaring.`,
  path: `/gevelrenovatie/${cityName.toLowerCase()}`,
  keywords: [`gevelrenovatie ${cityName}`, `crepi ${cityName}`, `gevelisolatie ${cityName}`, `gevelbepleistering ${cityName}`, `gevel vernieuwen ${cityName}`],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Diensten", url: "/diensten" },
  { name: "Gevelrenovatie", url: "/diensten/gevelrenovatie" },
  { name: cityName, url: `/gevelrenovatie/${cityName.toLowerCase()}` },
]);

export default function GevelrenovatieCityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-secondary mb-4">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium">{cityName} en omgeving</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Gevelrenovatie & Crepi in <span className="text-secondary">{cityName}</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Een nieuwe uitstraling en besparing op uw energiefactuur? Yannova is uw specialist in gevelisolatie 
                en crepi voor woningen in {cityName}. Hoogwaardige afwerking door ervaren vakmensen.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Waarom gevelrenovatie door Yannova in {cityName}?
                </h2>
                <div className="space-y-4 mb-8">
                  {[
                    `Lokaal actief in ${cityName} en omgeving`,
                    "Gratis expertise aan huis",
                    "Tot 30% besparing op uw energiefactuur",
                    "Bescherming tegen weersinvloeden en vocht",
                    "Brede keuze aan crepi kleuren",
                    "Hulp bij premie-aanvragen (Mijn VerbouwPremie)",
                    "Volledige afwerking inclusief plinten",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                    <Clock className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">24u</div>
                    <div className="text-sm text-gray-400">Offerte</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                    <Award className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-sm text-gray-400">Jaar Ervaring</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                    <CheckCircle className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">10j</div>
                    <div className="text-sm text-gray-400">Garantie</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Vraag een gratis offerte aan
                </h3>
                <p className="text-gray-300 mb-6">
                  Geïnteresseerd in gevelisolatie met crepi in {cityName}? 
                  Neem contact op voor een vrijblijvende plaatsbezoek.
                </p>
                <div className="space-y-4">
                  <a
                    href={company.phoneHref}
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
                  <a
                    href="/offerte"
                    className="block text-center p-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg transition-colors font-medium"
                  >
                    Online offerte aanvragen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
              <h2 className="text-3xl font-bold text-white mb-6">
                Alles over Gevelrenovatie en Crepi in {cityName}
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Wanneer u uw gevel in {cityName} wil renoveren, is gevelisolatie afgewerkt met sierpleister (crepi) de 
                meest populaire en efficiënte keuze. Het zorgt niet alleen voor een strak, volledig nieuw uiterlijk, 
                maar verhoogt direct het energielabel (EPC) van uw woning. Dat is goed nieuws voor uw energiefactuur én de waarde van uw huis.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                Werkwijze voor Gevelbekleding
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Bij Yannova doorlopen wij een professioneel, strak gepland traject in {cityName}:
              </p>
              <ol className="text-gray-300 space-y-3 mb-6">
                <li><strong>Inspectie & Opmeting:</strong> Onze gevelexpert komt ter plaatse in {cityName} om de staat van de huidige muren te beoordelen.</li>
                <li><strong>Isolatie plaatsen:</strong> Isolatieplaten van hoge densiteit (EPS) worden naadloos op uw buitengevel bevestigd.</li>
                <li><strong>Wapeningsnet:</strong> Wij brengen een uitvlakkende mortellaag aan met een glasvezelnet, dat barsten en scheuren voorkomt.</li>
                <li><strong>Afwerking in Crepi:</strong> Tot slot wordt de decoratieve siliconenharspleister in de door u gekozen kleur aangebracht.</li>
              </ol>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                Premies voor Gevelisolatie in {cityName}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Nieuwe gevelisolatie is een investering in energiezuinigheid, waar de Vlaamse overheid u voor beloont.
                Afhankelijk van uw inkomenscategorie en de exacte thermische specificaties, kunt u via Mijn VerbouwPremie 
                aanzienlijke bedragen terugkrijgen. Wij zorgen voor alle benodigde bouwtechnische documenten en offertes om 
                uw premieaanvraag in {cityName} probleemloos de deur uit te sturen.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Onze andere diensten in {cityName}
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <a href="/ramen" className="bg-gray-800/50 border border-white/10 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Ramen</h3>
                <p className="text-gray-300">PVC en aluminium ramen met HR++ glas</p>
              </a>
              <a href="/deuren" className="bg-gray-800/50 border border-white/10 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Deuren</h3>
                <p className="text-gray-300">Voor- en achterdeuren in PVC & aluminium</p>
              </a>
              <a href="/diensten/dakrenovatie" className="bg-gray-800/50 border border-white/10 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Dakrenovatie</h3>
                <p className="text-gray-300">Volledige vernieuwing & dakisolatie</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
