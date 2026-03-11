import { generateFAQSchema } from "@/lib/faq-schema";

export const dynamic = 'force-dynamic';

const homepageFAQs = [
  {
    question: "Wat zijn de kosten voor nieuwe ramen in Antwerpen?",
    answer: "De prijs voor nieuwe ramen hangt af van het type, de grootte en het materiaal. Gemiddeld betaal je tussen €300 en €800 per m². Wij bieden een gratis opmeting en offerte binnen 24 uur.",
  },
  {
    question: "In welke regio's is Yannova actief?",
    answer: "Wij zijn actief in Antwerpen stad en alle randgemeenten: Berchem, Deurne, Merksem, Wilrijk, Brasschaat, Schoten, Wijnegem, Schilde, Ranst, Mortsel en omgeving.",
  },
];

const faqSchema = generateFAQSchema(homepageFAQs);

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Yannova Bouw</h1>
        <p className="text-gray-300 mb-4">Specialist in ramen, deuren en gevelrenovatie in Antwerpen en omgeving.</p>
        <a href="/offerte" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
          Gratis offerte aanvragen
        </a>
      </div>
    </>
  );
}
