import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { CheckCircle, Phone, Mail, MapPin, Clock, Award, ChevronRight, Euro, ShieldCheck } from 'lucide-react';
import { company } from '@/lib/company';

const cityName = "Zoersel";

export const metadata: Metadata = generateSEO({
  title: "Ramen Zoersel | Ramen Vervangen & Plaatsen | Yannova",
  description: "Ramen in Zoersel? Yannova is specialist in PVC en aluminium ramen met HR++ isolatieglas. Verlaag uw energiefactuur! Vraag nu een gratis offerte.",
  path: "/ramen/zoersel",
  keywords: ["ramen zoersel","ramen vervangen zoersel","nieuwe ramen zoersel","ramen plaatsen zoersel","ramen specialist zoersel","aannemer ramen zoersel"],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://www.yannova.be/" },
  { name: "Ramen", url: "https://www.yannova.be/ramen" },
  { name: "Ramen Zoersel", url: `https://www.yannova.be/ramen/zoersel` },
]);

// Organization & Local Business Schema (Combined for optimal Rich Snippets)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Yannova Ramen",
  "image": "https://www.yannova.be/images/logo.png",
  "@id": "https://www.yannova.be/#organization",
  "url": "https://www.yannova.be",
  "telephone": company.phone,
  "email": company.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": company.address,
    "addressLocality": company.city,
    "postalCode": company.zip,
    "addressCountry": "BE"
  },
  "areaServed": {
    "@type": "City",
    "name": cityName
  },
  "priceRange": "€€",
  "founder": {
    "@type": "Person",
    "name": "Arbi Yannova"
  }
};

export default function RamenZoerselPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <div className="min-h-screen bg-gray-50 text-gray-900">
        {/* HERO SECTION */}
        <section className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/images/hero/windows-hero.jpg')] bg-cover bg-center opacity-20 mixing-blend-overlay"></div>
          </div>
          <div className="container relative z-10 mx-auto px-6">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-secondary mb-4">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Zoersel en Provincie Antwerpen</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                Ramen in <span className="text-secondary">Zoersel</span> vervangen of plaatsen
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Bent u op zoek naar nieuwe ramen in Zoersel? Yannova levert en plaatst hoogwaardige pvc en aluminium ramen met hr++ glas. 
                Verhoog uw wooncomfort, verbeter de veiligheid en bespaar direct op uw energierekening.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/offerte" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-lg shadow-lg hover:bg-secondary/90 transition-all text-lg">
                  Vraag een gratis offerte
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a href={company.phoneHref} className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 font-bold rounded-lg hover:bg-white/20 transition-all text-lg">
                  <Phone className="w-5 h-5" />
                  Bel {company.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* SECTIE 1: EXPERTISE */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Specialist in ramen in omgeving Zoersel
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Het vervangen van uw ramen is een investering die zichzelf op termijn terugverdient. Zeker met de stijgende 
                energieprijzen is goede isolatie in uw woning in Zoersel belangrijker dan ooit. Wij werken uitsluitend met 
                topmerken die garant staan voor duurzaamheid en een uitstekende isolatiewaarde (inclusief HR++ of triple glas).
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-secondary flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> PVC Ramen
                  </h3>
                  <p className="text-gray-600">
                    PVC biedt de beste prijs-kwaliteitverhouding. Ze isoleren perfect, vergen amper onderhoud en 
                    zijn verkrijgbaar in talloze kleuren en afwerkingen in Zoersel.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-secondary flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Aluminium Ramen
                  </h3>
                  <p className="text-gray-600">
                    Aluminium is robuust en ultrasterk. Het laat toe om grote overspanningen te maken met zeer slanke profielen.
                    Ideaal voor een strakke, moderne woning.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTIE 1.5: ONZE PROFIELEN */}
            <section className="border-t border-gray-200 pt-12 mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Kwaliteit met topmerken: PVC en Aluminium profielen
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Voor uw project in Zoersel werken wij met de absolute topmerken op de markt. Wij kunnen buitenschrijnwerk bestellen, leveren en vakkundig plaatsen van onbetwiste Europese marktleiders: <strong>Schüco</strong>, <strong>Veka</strong>, <strong>Rehau</strong>, <strong>Deceuninck</strong>, <strong>Reynaers Aluminium</strong> en <strong>Eko-Okna</strong>. 
                Dankzij dit veelzijdige aanbod garanderen wij altijd buitenschrijnwerk dat technisch en esthetisch 100% past bij uw woning. Enkele populaire opties en technologieën:
              </p>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold mb-2 text-secondary">Premium PVC Merken</h3>
                  <p className="text-gray-600 text-sm">
                    Met profielen van onder meer <strong>Schüco, Veka, Rehau en Deceuninck</strong> bent u verzekerd van tientallen jaren probleemloos wooncomfort en de allerhoogste isolatiewaardes.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold mb-2 text-secondary">Reynaers Aluminium</h3>
                  <p className="text-gray-600 text-sm">
                    Kiest u voor strak en modern? De aluminium profielen van <strong>Reynaers Aluminium</strong> maken state-of-the-art grote raam-overspanningen en schuifpuien mogelijk.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold mb-2 text-secondary">Eko-Okna & Aluplast</h3>
                  <p className="text-gray-600 text-sm">
                    Zeer betrouwbare PVC-ramen (zoals de bekende <strong>Ideal-reeksen</strong> en Energeto Neo). Budgetvriendelijk, veelzijdig en uiterst degelijk afgewerkt.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold mb-2 text-secondary">Driedubbel (Triple) Glas</h3>
                  <p className="text-gray-600 text-sm">
                    In veel profielen plaatsen wij probleemloos zwaar triple glas voor specifieke zware thermische of akoestische bouw-eisen in Zoersel.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold mb-2 text-secondary">V-Perfect lasnaden</h3>
                  <p className="text-gray-600 text-sm">
                    Esthetische perfectie op PVC bereiken we door geavanceerde, nagenoeg onzichtbare verbindingstechnieken (V-Perfect) te hanteren in de raamhoeken.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold mb-2 text-secondary">Kleur op maat in Zoersel</h3>
                  <p className="text-gray-600 text-sm">
                    Aluminium is verkrijgbaar in élke RAL coating, en onze PVC profielen bieden keuze uit talloze krasvaste folies, inclusief levensechte houtstructuren.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTIE 2: VOORDELEN */}
            <section className="bg-gray-100 -mx-6 px-6 py-12 rounded-none md:rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Waarom kiezen voor Yannova in Zoersel?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                Een vakkundige installatie start met goed advies en precisiewerk. Bij Yannova nemen we uw project 
                serieus. Dit is wat u van ons mag verwachten in Zoersel:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">10 tot 30 jaar garantie</h4>
                    <p className="text-gray-600 text-sm mt-1">U geniet van een lange garantieperiode op zowel het materiaal als de vakkundige plaatsing van uw ramen.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Gratis opmeting thuis</h4>
                    <p className="text-gray-600 text-sm mt-1">Geen verassingen of verborgen kosten. Wij komen bij u in Zoersel langs, meten correct op en leveren een duidelijke offerte.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Inbraakveilig & Isolerend</h4>
                    <p className="text-gray-600 text-sm mt-1">Al onze profielen voldoen aan de strengste normen inzake inbraakvertraging en hebben de benodigde U-waardes voor premies.</p>
                  </div>
                </li>
              </ul>
            </section>

            {/* SECTIE 3: PREMIES & LOKAAL */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Premies voor nieuwe ramen in Zoersel
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Via de Vlaamse overheid (Mijn VerbouwPremie) heeft u vaak recht op financiële tussenkomst wanneer u enkele beglazing 
                of oud dubbel glas vervangt door hoogrendementsglas. Dit geldt dus ook voor het vernieuwen van het buitenschrijnwerk 
                (ramen) van uw woning in Zoersel.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-secondary p-6 rounded-r-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Euro className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-bold text-gray-900">Wij helpen u met de aanvraag</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Omdat het aanvragen van dergelijke premies niet altijd evident is, bezorgen wij voor elke afgeronde 
                  werf in Zoersel direct alle nodige bijlages. Zowel voor hr-glas, geluidswerend glas als het 
                  buitenschrijnwerk zelf zullen wij u de nodige stavingsdocumenten bezorgen zodat u de premie vlot ontvangt!
                </p>
              </div>
            </section>

            {/* LINKS NAAR ANDERE DIENSTEN */}
            <section className="border-t border-gray-200 pt-12">
               <h2 className="text-2xl font-bold mb-6 text-gray-900">Verder lezen</h2>
               <div className="flex flex-wrap gap-4">
                 <a href="/diensten/ramen-en-deuren" className="inline-block bg-white text-secondary font-semibold border border-gray-200 shadow-sm px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                   Algemene info Ramen & Deuren
                 </a>
                 <a href="/diensten/gevelrenovatie" className="inline-block bg-white text-secondary font-semibold border border-gray-200 shadow-sm px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                   Gevelisolatie en Crepi in Zoersel
                 </a>
                 <a href="/diensten/renovatie" className="inline-block bg-white text-secondary font-semibold border border-gray-200 shadow-sm px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                   Totaalaannemer in Zoersel
                 </a>
               </div>
            </section>

          </div>

          {/* SIDEBAR (Sticky CTA) */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-gray-900 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Wilt u de prijs voor uw woning in Zoersel weten?
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-sm">
                Nieuwe ramen laten plaatsen is een verstandige keuze. Contacteer ons vandaag nog voor een vrijblijvend deskundig 
                advies. We komen de situatie opmeten en bezorgen u een heldere offerte.
              </p>
              
              <div className="space-y-4">
                <a
                  href="/offerte"
                  className="w-full flex justify-center items-center gap-2 p-4 bg-secondary font-bold text-white rounded-lg hover:bg-secondary/90 transition-colors shadow-lg"
                >
                  Nu offerte aanvragen
                </a>
                
                <a
                  href={company.phoneHref}
                  className="w-full flex items-center justify-center gap-3 p-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">{company.phoneDisplay}</span>
                </a>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-secondary/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Werkgebied</div>
                    <div className="text-sm text-gray-400">Actief in Zoersel en omstreken.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
