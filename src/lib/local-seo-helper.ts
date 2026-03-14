/**
 * Helper functions voor lokale SEO pagina&apos;s
 * Genereert keywords, FAQ's en content voor stad-specifieke pagina&apos;s
 */

export type ServiceType = 'ramen' | 'deuren' | 'crepi' | 'gevelisolatie' | 'renovatie';

export interface LocalPageData {
  service: ServiceType;
  city: string;
  citySlug: string;
}

/**
 * Genereer lokale keywords voor een dienst in een stad
 */
export function generateLocalKeywords(service: ServiceType, city: string): string[] {
  const baseKeywords = [
    `${service} ${city.toLowerCase()}`,
    `${service} plaatsen ${city.toLowerCase()}`,
    `${service} ${city.toLowerCase()} prijs`,
    `${service} aannemer ${city.toLowerCase()}`,
    `${service} bedrijf ${city.toLowerCase()}`,
  ];

  // Service-specifieke keywords
  const serviceKeywords: Record<ServiceType, string[]> = {
    ramen: [
      `pvc ramen ${city.toLowerCase()}`,
      `aluminium ramen ${city.toLowerCase()}`,
      `nieuwe ramen ${city.toLowerCase()}`,
      `ramen vervangen ${city.toLowerCase()}`,
    ],
    deuren: [
      `voordeur ${city.toLowerCase()}`,
      `achterdeur ${city.toLowerCase()}`,
      `schuifdeur ${city.toLowerCase()}`,
      `deuren vervangen ${city.toLowerCase()}`,
    ],
    crepi: [
      `crepi aanbrengen ${city.toLowerCase()}`,
      `gevelbepleistering ${city.toLowerCase()}`,
      `crepi prijs per m2 ${city.toLowerCase()}`,
      `buitengevel crepi ${city.toLowerCase()}`,
    ],
    gevelisolatie: [
      `gevelisolatie prijs ${city.toLowerCase()}`,
      `buitenmuur isoleren ${city.toLowerCase()}`,
      `gevel isoleren ${city.toLowerCase()}`,
      `gevelisolatie premie ${city.toLowerCase()}`,
    ],
    renovatie: [
      `renovatiebedrijf ${city.toLowerCase()}`,
      `totaalrenovatie ${city.toLowerCase()}`,
      `verbouwing ${city.toLowerCase()}`,
      `renovatie aannemer ${city.toLowerCase()}`,
    ],
  };

  return [...baseKeywords, ...serviceKeywords[service]];
}

/**
 * Genereer lokale FAQ's voor een dienst in een stad
 */
export function generateLocalFAQs(service: ServiceType, city: string) {
  const servicePrices: Record<ServiceType, string> = {
    ramen: '€400-€800 per m²',
    deuren: '€800-€2.500 per stuk',
    crepi: '€80-€150 per m²',
    gevelisolatie: '€100-€180 per m²',
    renovatie: 'afhankelijk van de omvang',
  };

  const serviceDuration: Record<ServiceType, string> = {
    ramen: '1 tot 2 dagen',
    deuren: '1 dag',
    crepi: '1 tot 2 weken',
    gevelisolatie: '1 tot 2 weken',
    renovatie: '2 weken tot 6 maanden',
  };

  return [
    {
      question: `Wat kost ${service} in ${city}?`,
      answer: `De prijs voor ${service} in ${city} hangt af van het type, de afmetingen en de staat van de bestaande ${service}. Gemiddeld rekent u ${servicePrices[service]}. Wij komen graag gratis langs voor een opmeting en offerte op maat.`,
    },
    {
      question: `Hoe lang duurt de plaatsing van ${service} in ${city}?`,
      answer: `Voor een gemiddelde woning in ${city} duurt de plaatsing van ${service} ongeveer ${serviceDuration[service]}. We plannen de werkzaamheden in overleg en zorgen voor minimale overlast.`,
    },
    {
      question: `Zijn er premies beschikbaar in ${city}?`,
      answer: `Ja, in ${city} en Vlaanderen zijn er verschillende premies beschikbaar voor energiebesparende renovaties zoals ${service}. Via Mijn VerbouwPremie kunt u subsidies aanvragen. Wij helpen u graag met het aanvragen van de juiste premies.`,
    },
    {
      question: `Werken jullie in heel ${city}?`,
      answer: `Ja, wij zijn actief in heel ${city} en alle deelgemeenten. We werken binnen een straal van 30 kilometer rondom Zoersel en Antwerpen, dus ${city} valt binnen ons werkgebied.`,
    },
  ];
}

/**
 * Genereer metadata voor lokale pagina
 */
export function generateLocalMetadata(data: LocalPageData) {
  const serviceTitles: Record<ServiceType, string> = {
    ramen: 'Ramen Plaatsen',
    deuren: 'Deuren Plaatsen',
    crepi: 'Crepi Aanbrengen',
    gevelisolatie: 'Gevelisolatie',
    renovatie: 'Renovatie & Verbouwing',
  };

  const serviceDescriptions: Record<ServiceType, string> = {
    ramen: 'PVC en aluminium ramen met HR++ glas',
    deuren: 'Voordeur, achterdeur en schuifdeuren',
    crepi: 'Professionele gevelbepleistering met isolatie',
    gevelisolatie: 'Buitenmuur isoleren voor energiebesparing',
    renovatie: 'Totaalrenovatie met één aanspreekpunt',
  };

  return {
    title: `${serviceTitles[data.service]} ${data.city} | ${serviceDescriptions[data.service]} | Yannova`,
    description: `${serviceTitles[data.service]} in ${data.city} en omgeving. ${serviceDescriptions[data.service]}. Gratis opmeting, offerte binnen 24u. 15+ jaar ervaring.`,
    keywords: generateLocalKeywords(data.service, data.city),
  };
}

/**
 * Genereer gerelateerde diensten voor interne linking
 */
export function getRelatedServices(currentService: ServiceType, city: string) {
  const allServices: ServiceType[] = ['ramen', 'deuren', 'crepi', 'gevelisolatie', 'renovatie'];
  const related = allServices.filter(s => s !== currentService).slice(0, 3);

  const serviceTitles: Record<ServiceType, string> = {
    ramen: 'Ramen',
    deuren: 'Deuren',
    crepi: 'Crepi',
    gevelisolatie: 'Gevelisolatie',
    renovatie: 'Renovatie',
  };

  return related.map(service => ({
    title: `${serviceTitles[service]} in ${city}`,
    url: `/${service}/${city.toLowerCase()}`,
    service,
  }));
}

/**
 * Prijsinformatie per dienst
 */
export function getPricingInfo(service: ServiceType) {
  const pricing: Record<ServiceType, {
    range: string;
    unit: string;
    factors: string[];
  }> = {
    ramen: {
      range: '€400 - €800',
      unit: 'per m²',
      factors: [
        'Type raam (PVC of aluminium)',
        'Type beglazing (HR++ of drievoudig)',
        'Afmetingen van het raam',
        'Aantal ramen',
        'Kleur en afwerking',
      ],
    },
    deuren: {
      range: '€800 - €2.500',
      unit: 'per stuk',
      factors: [
        'Type deur (voordeur, achterdeur, schuifdeur)',
        'Materiaal (PVC, aluminium, hout)',
        'Afmetingen',
        'Veiligheidsklasse',
        'Afwerking en kleur',
      ],
    },
    crepi: {
      range: '€80 - €150',
      unit: 'per m²',
      factors: [
        'Type crepi (mineraal, acryl, silicaat)',
        'Structuur en afwerking',
        'Staat van de bestaande gevel',
        'Isolatiedikte',
        'Oppervlakte',
      ],
    },
    gevelisolatie: {
      range: '€100 - €180',
      unit: 'per m²',
      factors: [
        'Type isolatiemateriaal (EPS, minerale wol, PUR)',
        'Isolatiedikte (8-14 cm)',
        'Afwerking (crepi, gevelbekleding)',
        'Staat van de bestaande gevel',
        'Oppervlakte',
      ],
    },
    renovatie: {
      range: 'Op maat',
      unit: 'per project',
      factors: [
        'Omvang van de renovatie',
        'Type werkzaamheden',
        'Kwaliteit van materialen',
        'Staat van de woning',
        'Gewenste afwerking',
      ],
    },
  };

  return pricing[service];
}

/**
 * Voordelen per dienst
 */
export function getServiceBenefits(service: ServiceType) {
  const benefits: Record<ServiceType, Array<{
    title: string;
    description: string;
    value: string;
  }>> = {
    ramen: [
      {
        title: 'Energiebesparing',
        description: 'Tot 30% besparing op verwarmingskosten met HR++ beglazing',
        value: '30%',
      },
      {
        title: 'Geluidsisolatie',
        description: 'Tot 35dB geluidsreductie voor een rustige woning',
        value: '-35dB',
      },
      {
        title: 'Garantie',
        description: '30 jaar garantie op profielen en 10 jaar op beglazing',
        value: '30jr',
      },
    ],
    deuren: [
      {
        title: 'Veiligheid',
        description: 'Inbraakwerend tot RC2 voor maximale beveiliging',
        value: 'RC2',
      },
      {
        title: 'Isolatie',
        description: 'U-waarde tot 0.8 W/m²K voor energiebesparing',
        value: '0.8',
      },
      {
        title: 'Garantie',
        description: '30 jaar garantie op profielen en hang- en sluitwerk',
        value: '30jr',
      },
    ],
    crepi: [
      {
        title: 'Energiebesparing',
        description: 'Tot 40% besparing op verwarmingskosten',
        value: '40%',
      },
      {
        title: 'EPC-verbetering',
        description: 'Gemiddeld 2-3 labels verbetering',
        value: '2-3',
      },
      {
        title: 'Garantie',
        description: '10 jaar garantie op afwerking en isolatie',
        value: '10jr',
      },
    ],
    gevelisolatie: [
      {
        title: 'Energiebesparing',
        description: 'Tot 40% besparing op verwarmingskosten',
        value: '40%',
      },
      {
        title: 'EPC-verbetering',
        description: 'Gemiddeld 2-3 labels verbetering',
        value: '2-3',
      },
      {
        title: 'Premies',
        description: 'Tot €30/m² premie via Mijn VerbouwPremie',
        value: '€30',
      },
    ],
    renovatie: [
      {
        title: 'Waardestijging',
        description: 'Tot 15% waardestijging van uw woning',
        value: '15%',
      },
      {
        title: 'Energiebesparing',
        description: 'Tot 50% besparing op energiekosten',
        value: '50%',
      },
      {
        title: 'Garantie',
        description: '10 jaar garantie op alle werkzaamheden',
        value: '10jr',
      },
    ],
  };

  return benefits[service];
}

/**
 * Kenmerken per dienst
 */
export function getServiceFeatures(service: ServiceType): string[] {
  const features: Record<ServiceType, string[]> = {
    ramen: [
      'HR++ en drievoudig beglazing',
      'PVC en aluminium profielen',
      'Inbraakwerend en energiezuinig',
      'Alle RAL-kleuren mogelijk',
      '30 jaar garantie op profielen',
      'Gratis opmeting en advies',
    ],
    deuren: [
      'Inbraakwerend tot RC2',
      'PVC, aluminium en composiet',
      'Energiezuinig met lage U-waarde',
      'Alle RAL-kleuren mogelijk',
      '30 jaar garantie op profielen',
      'Gratis opmeting en advies',
    ],
    crepi: [
      'Mineraal, acryl en silicaat crepi',
      'Diverse structuren en kleuren',
      'Inclusief gevelisolatie',
      'Vochtwerend en ademend',
      '10 jaar garantie op afwerking',
      'Gratis opmeting en advies',
    ],
    gevelisolatie: [
      'EPS, minerale wol en PUR isolatie',
      'Isolatiedikte 8-14 cm',
      'EPC-verbetering 2-3 labels',
      'Premies tot €30/m²',
      '10 jaar garantie op isolatie',
      'Gratis opmeting en advies',
    ],
    renovatie: [
      'Eén aanspreekpunt van A tot Z',
      'Vast projectteam, geen onderaannemers',
      'Duidelijke planning en communicatie',
      'Transparante offerte zonder verrassingen',
      '10 jaar garantie op alle werken',
      'Gratis opmeting en advies',
    ],
  };

  return features[service];
}
