export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Veelgestelde vragen voor verschillende pagina's
export const commonFAQs = {
  ramen: [
    {
      question: 'Wat kost het plaatsen van nieuwe ramen in Antwerpen?',
      answer: 'De prijs voor nieuwe ramen hangt af van het type, de grootte en het materiaal. Gemiddeld betaal je tussen €300 en €800 per m². Wij bieden een gratis opmeting en offerte binnen 24 uur.',
    },
    {
      question: 'Hoe lang duurt het plaatsen van ramen?',
      answer: 'Voor een gemiddelde woning duurt de plaatsing 1 tot 2 dagen. Dit hangt af van het aantal ramen en de complexiteit van de installatie.',
    },
    {
      question: 'Welke premies zijn er beschikbaar voor nieuwe ramen?',
      answer: 'In Vlaanderen kun je aanspraak maken op de renovatiepremie voor hoogrendementsbeglazing. De premie bedraagt tot €20 per m² glas. Bekijk onze premie-gids voor meer informatie.',
    },
  ],
  deuren: [
    {
      question: 'Wat zijn de voordelen van een nieuwe voordeur?',
      answer: 'Een nieuwe voordeur verbetert de isolatie, verhoogt de veiligheid en geeft je woning een frisse uitstraling. Moderne deuren zijn energiezuinig en onderhoudsvriendelijk.',
    },
    {
      question: 'Welke soorten deuren plaatst Yannova?',
      answer: 'Wij plaatsen voordeuren, achterdeuren, schuifdeuren en garagepoorten in verschillende materialen zoals PVC, aluminium en hout.',
    },
  ],
  renovatie: [
    {
      question: 'Wat houdt een totaalrenovatie in?',
      answer: 'Een totaalrenovatie omvat alle aspecten van je woning: van gevelwerken en isolatie tot ramen, deuren en binnenafwerking. Wij begeleiden je van A tot Z.',
    },
    {
      question: 'Hoe lang duurt een renovatieproject?',
      answer: 'Dit hangt af van de omvang. Een gevelrenovatie duurt gemiddeld 2-4 weken, een totaalrenovatie kan 2-6 maanden duren.',
    },
  ],
  gevelisolatie: [
    {
      question: 'Wat kost gevelisolatie?',
      answer: 'Gevelisolatie kost gemiddeld tussen €80 en €150 per m², afhankelijk van het type isolatie en afwerking. Met premies kan dit aanzienlijk goedkoper uitvallen.',
    },
    {
      question: 'Welke premies zijn er voor gevelisolatie?',
      answer: 'Je kunt aanspraak maken op de Vlaamse renovatiepremie voor muurisolatie. De premie bedraagt tot €50 per m². Bekijk onze premie-gids voor alle voorwaarden.',
    },
  ],
};
