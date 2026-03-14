import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy & Cookies | Yannova',
  description:
    'Lees hoe Yannova omgaat met persoonsgegevens, cookies en analytische tools op de website.',
};

const sections = [
  {
    title: 'Welke gegevens we verwerken',
    body:
      'Wanneer u contact opneemt via formulieren, e-mail of telefoon verwerken we enkel de gegevens die nodig zijn om uw vraag, offerte of bestelling op te volgen. Denk aan naam, e-mailadres, telefoonnummer en project- of leveringsinformatie.',
  },
  {
    title: 'Waarom we die gegevens gebruiken',
    body:
      'We gebruiken persoonsgegevens om offertes op te maken, vragen te beantwoorden, bestellingen op te volgen en onze dienstverlening te verbeteren. Gegevens worden niet verkocht aan derden.',
  },
  {
    title: 'Cookies en analyse',
    body:
      'Yannova gebruikt functionele cookies om de website correct te laten werken en analytische cookies om anoniem gebruik te begrijpen. Marketing- en trackingcookies worden alleen geladen volgens uw cookiekeuze.',
  },
  {
    title: 'Bewaartermijnen',
    body:
      'We bewaren persoonsgegevens niet langer dan nodig is voor klantenservice, administratie en wettelijke verplichtingen. Daarna worden gegevens verwijderd of geanonimiseerd.',
  },
  {
    title: 'Uw rechten',
    body:
      'U kunt steeds vragen om uw gegevens in te kijken, te verbeteren of te laten verwijderen. Stuur daarvoor een bericht naar info@yannova.be met voldoende context zodat we uw aanvraag correct kunnen behandelen.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            Privacy
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            Privacy- en cookiebeleid
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Op deze pagina leest u in duidelijke taal hoe Yannova omgaat met
            persoonsgegevens, cookies en website-analyse.
          </p>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-slate-100 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Voor vragen over privacy of cookies kunt u mailen naar
              {' '}
              <a className="font-medium text-sky-700 hover:underline" href="mailto:info@yannova.be">
                info@yannova.be
              </a>
              {' '}
              of bellen naar
              {' '}
              <a className="font-medium text-sky-700 hover:underline" href="tel:+32489960001">
                +32 489 96 00 01
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
