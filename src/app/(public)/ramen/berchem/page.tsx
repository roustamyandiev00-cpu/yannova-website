import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { CheckCircle, Phone, Mail } from 'lucide-react';
import { company } from '@/lib/company';

export const metadata: Metadata = generateSEO({
  title: "Ramen Berchem | PVC & Aluminium Ramen Plaatsen",
  description: "Nieuwe ramen in Berchem? Yannova plaatst PVC en aluminium ramen met HR++ glas. Gratis opmeting en offerte binnen 24 uur. Specialist in Berchem.",
  path: "/ramen/berchem",
  keywords: ["ramen berchem", "ramen plaatsen berchem", "pvc ramen berchem", "aluminium ramen berchem", "nieuwe ramen berchem"],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Ramen", url: "/ramen" },
  { name: "Berchem", url: "/ramen/berchem" },
]);

export default function RamenBerchemPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Ramen in <span className="text-secondary">Berchem</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 leading-relaxed">
                Specialist in PVC en aluminium ramen in Berchem. Gratis opmeting, duidelijke offerte binnen 24 uur en vakkundige plaatsing door ervaren vaklui.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Waarom kiezen voor Yannova in Berchem?
                </h2>
                <div className="space-y-4">
                  {[
                    "Lokaal actief in Berchem en omgeving",
                    "Gratis opmeting bij u thuis",
                    "Offerte binnen 24 uur",
                    "PVC en aluminium ramen met HR++ of drievoudig glas",
                    "10 jaar garantie op materiaal en plaatsing",
                    "Hulp bij premie-aanvraag (tot €3.500)",
                    "Vaste ploeg ervaren vaklui",
                    "Plaatsing binnen 4-6 weken",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Vraag een gratis offerte aan
                </h3>
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
                    className="block text-center p-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg transition-colors"
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Onze diensten in Berchem
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <a href="/ramen" className="bg-gray-800/50 border border-white/10 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">PVC Ramen</h3>
                <p className="text-gray-300">Vanaf €400/m² inclusief plaatsing</p>
              </a>
              <a href="/ramen" className="bg-gray-800/50 border border-white/10 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Aluminium Ramen</h3>
                <p className="text-gray-300">Vanaf €600/m² inclusief plaatsing</p>
              </a>
              <a href="/deuren" className="bg-gray-800/50 border border-white/10 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Deuren</h3>
                <p className="text-gray-300">Voor- en achterdeuren in PVC & aluminium</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
