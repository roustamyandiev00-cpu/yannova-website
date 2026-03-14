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

// Veelgestelde vragen voor verschillende pagina&apos;s
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
      question: 'Wat kost een nieuwe voordeur in Zoersel of Antwerpen?',
      answer: 'Een nieuwe voordeur kost gemiddeld tussen €800 en €2.500 afhankelijk van het materiaal (PVC of aluminium), het design en de veiligheidsklasse. Wij bieden een gratis opmeting en offerte binnen 24 uur.',
    },
    {
      question: 'Wat zijn de voordelen van een nieuwe voordeur?',
      answer: 'Een nieuwe voordeur verbetert de isolatie, verhoogt de veiligheid en geeft uw woning een frisse uitstraling. Moderne deuren zijn energiezuinig, inbraakwerend en onderhoudsvriendelijk.',
    },
    {
      question: 'Welke soorten deuren plaatst Yannova?',
      answer: 'Wij plaatsen voordeuren, achterdeuren, schuifdeuren en garagepoorten in PVC en aluminium. Alle deuren zijn verkrijgbaar in elke RAL-kleur met inbraakwerend beslag.',
    },
    {
      question: 'Zijn er premies voor nieuwe deuren in Vlaanderen?',
      answer: 'Voor energiezuinige deuren met goede isolatiewaarde kunt u in aanmerking komen voor de Mijn VerbouwPremie. Wij helpen u bij de aanvraag en zorgen voor de nodige attesten.',
    },
    {
      question: 'Hoe lang duurt de plaatsing van een nieuwe deur?',
      answer: 'De plaatsing van een voordeur of achterdeur duurt gemiddeld een halve dag. Schuifdeuren of meerdere deuren kunnen 1 tot 2 dagen in beslag nemen. Wij zorgen voor een nette afwerking.',
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
  isolatie: [
    {
      question: 'Welke isolatiewerken leveren meestal het snelste rendement op?',
      answer: 'Dat hangt af van waar uw woning vandaag warmte verliest. Bij veel woningen leveren dakisolatie en spouwmuurisolatie snel resultaat op, terwijl buitengevelisolatie vooral interessant wordt wanneer ook de gevelafwerking of het EPC grondig verbeterd moet worden.',
    },
    {
      question: 'Voert Yannova alleen gevelisolatie uit of ook andere isolatiewerken?',
      answer: 'Yannova helpt bij verschillende isolatiewerken zoals dakisolatie, spouwmuurisolatie, buitengevelisolatie en vloer- of kelderisolatie. We bekijken per woning welke combinatie technisch en budgettair het meest logisch is.',
    },
    {
      question: 'Zijn er premies mogelijk voor isolatiewerken?',
      answer: 'Voor veel isolatiewerken zijn er in Vlaanderen voorwaarden en premiekanalen zoals Mijn VerbouwPremie. Welke steun mogelijk is, hangt af van het type werk, de woning, de gekozen opbouw en de administratieve voorwaarden. Wij helpen u graag om dat praktisch in kaart te brengen.',
    },
    {
      question: 'Is het slim om isolatie te combineren met ramen of gevelrenovatie?',
      answer: 'Ja, vaak wel. Wie isolatie slim combineert met nieuwe ramen, gevelrenovatie of een bredere buitenschil-aanpak vermijdt dubbel werk en behaalt meestal een beter resultaat op vlak van comfort, luchtdichtheid, planning en EPC.',
    },
  ],
};
