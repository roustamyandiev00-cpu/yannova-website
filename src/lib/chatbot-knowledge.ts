/**
 * Kennisbank voor AI Chatbot
 * Bevat alle belangrijke informatie over Yannova
 */

export const COMPANY_INFO = {
  name: 'Yannova',
  tagline: 'Ramen, Deuren & Renovatie in Antwerpen',
  founded: '2010',
  location: {
    base: 'Zoersel',
    region: 'Antwerpen en omgeving',
  },
  contact: {
    phone: '03 123 45 67',
    phoneHref: 'tel:+3231234567',
    email: 'info@yannova.be',
    website: 'www.yannova.be',
  },
};

export const WERKGEBIED = {
  primary: [
    'Antwerpen (stad en alle deelgemeenten)',
    'Berchem',
    'Deurne',
    'Merksem',
    'Wilrijk',
  ],
  secondary: [
    'Brasschaat',
    'Schoten',
    'Wijnegem',
    'Mortsel',
    'Edegem',
    'Kontich',
    'Zoersel',
    'Mechelen',
  ],
  description: 'We zijn actief in heel Antwerpen en alle randgemeenten. Vanuit onze thuisbasis in Zoersel bereiken we de hele regio snel.',
};

export const DIENSTEN = {
  ramenDeuren: {
    title: 'Ramen & Deuren',
    types: ['PVC ramen', 'Aluminium ramen', 'Schuiframen', 'Voordeuren', 'Achterdeuren'],
    features: [
      'HR++ en drievoudig beglazing',
      'Alle RAL-kleuren mogelijk',
      '10 jaar garantie op beglazing',
      '30 jaar garantie op profielen',
      'Eigen montage door vakmensen',
    ],
    priceRange: '€300-€800 per m²',
    priceNote: 'Afhankelijk van type, grootte en beglazing',
  },
  gevelrenovatie: {
    title: 'Gevelrenovatie & Isolatie',
    types: ['Gevelisolatie', 'Crepi afwerking', 'Steenstrips', 'Voegwerk'],
    features: [
      'EPS, XPS of minerale wol isolatie',
      'Minerale of kunststof crepi',
      'Diverse kleuren en structuren',
      'Premie-advies en hulp bij aanvraag',
    ],
    priceRange: '€80-€150 per m²',
    priceNote: 'Inclusief isolatie en afwerking',
  },
  renovatie: {
    title: 'Totaalrenovatie',
    types: ['Badkamerrenovatie', 'Keukenrenovatie', 'Volledige woningrenovatie', 'Dakwerken'],
    features: [
      'Eén aanspreekpunt voor hele project',
      'Eigen vakmensen (geen onderaannemers)',
      'Transparante prijzen',
      'Strakke planning',
    ],
    priceRange: 'Op maat',
    priceNote: 'Afhankelijk van omvang en wensen',
  },
};

export const GARANTIES = {
  ramen: '10 jaar op beglazing, 30 jaar op profielen',
  deuren: '10 jaar op materiaal en plaatsing',
  renovatie: 'Garantie op alle uitgevoerde werken',
  algemeen: 'Volledige garantie op materiaal en vakmanschap',
};

export const PROCES = {
  stap1: {
    title: 'Gratis opmeting',
    description: 'We komen gratis langs voor een opmeting en advies op maat',
    duur: 'Meestal binnen 48 uur',
  },
  stap2: {
    title: 'Offerte binnen 24 uur',
    description: 'U ontvangt een duidelijke offerte zonder verborgen kosten',
    duur: 'Binnen 24 uur na opmeting',
  },
  stap3: {
    title: 'Planning',
    description: 'Bij akkoord plannen we de werken in overleg met u',
    duur: 'Meestal binnen 2-4 weken',
  },
  stap4: {
    title: 'Uitvoering',
    description: 'Onze eigen vakmensen voeren de werken netjes en professioneel uit',
    duur: 'Afhankelijk van project',
  },
  stap5: {
    title: 'Oplevering',
    description: 'We controleren samen het resultaat en geven garantiedocumenten',
    duur: 'Direct na afronding',
  },
};

export const PREMIES = {
  ramen: {
    title: 'Renovatiepremie hoogrendementsbeglazing',
    bedrag: 'Tot €20 per m² glas',
    voorwaarden: 'HR++ of drievoudig glas, erkende plaatser',
  },
  gevelisolatie: {
    title: 'Renovatiepremie muurisolatie',
    bedrag: 'Tot €50 per m²',
    voorwaarden: 'Minimale isolatiewaarde, erkende uitvoerder',
  },
  algemeen: {
    note: 'We helpen u graag met premie-advies en de aanvraag. Premies verschillen per gemeente en wijzigen regelmatig.',
  },
};

export const FAQ = [
  {
    question: 'Wat kost het plaatsen van nieuwe ramen?',
    answer: 'Nieuwe ramen kosten gemiddeld tussen €300 en €800 per m², afhankelijk van het type (PVC of aluminium) en de beglazing (HR++ of drievoudig). We bieden 10 jaar garantie en plaatsen met eigen vakmensen. We komen graag gratis langs voor een opmeting en maken een offerte op maat binnen 24 uur.',
  },
  {
    question: 'Werken jullie ook in [gemeente]?',
    answer: 'We zijn actief in heel Antwerpen en alle randgemeenten: Berchem, Deurne, Merksem, Wilrijk, Brasschaat, Schoten, Wijnegem, Mortsel, Edegem, Kontich, Zoersel en Mechelen. Vanuit onze thuisbasis in Zoersel bereiken we de hele regio snel.',
  },
  {
    question: 'Hoe snel kunnen jullie starten?',
    answer: 'Na de gratis opmeting ontvangt u binnen 24 uur een offerte. Bij akkoord kunnen we meestal binnen 2-4 weken starten, afhankelijk van de planning en levertijden van materialen.',
  },
  {
    question: 'Is de opmeting echt gratis?',
    answer: 'Ja, de opmeting is volledig gratis en vrijblijvend. We komen langs, nemen de maten op, geven advies en maken een offerte. U bent nergens toe verplicht.',
  },
  {
    question: 'Welke garantie krijg ik?',
    answer: 'Op ramen en deuren geven we 10 jaar garantie op de beglazing en 30 jaar op de profielen. Op alle renovatiewerken geven we garantie op materiaal en vakmanschap. Alles wordt schriftelijk vastgelegd.',
  },
  {
    question: 'Kan ik premies krijgen?',
    answer: 'Ja, voor ramen met HR++ beglazing en gevelisolatie zijn er Vlaamse renovatiepremies beschikbaar. We helpen u graag met advies en de aanvraag. De premies verschillen per gemeente en wijzigen regelmatig.',
  },
  {
    question: 'Werken jullie met onderaannemers?',
    answer: 'Nee, we werken uitsluitend met eigen vakmensen. Dit garandeert kwaliteit, goede communicatie en snelle service. U heeft altijd één vast aanspreekpunt.',
  },
];

export const USP = [
  'Gratis opmeting aan huis',
  'Offerte binnen 24 uur',
  '10 jaar garantie op ramen en deuren',
  'Eigen vakmensen (geen onderaannemers)',
  'Erkend voor Vlaamse premies',
  'Actief in heel Antwerpen en omgeving',
  'Transparante prijzen zonder verborgen kosten',
  'Persoonlijke service en nazorg',
];

// MERKEN EN PROFIELEN
export const MERKEN = {
  pvc: {
    aluplast: {
      naam: 'Aluplast',
      type: 'PVC',
      beschrijving: 'Hoogwaardige Duitse PVC profielen met uitstekende isolatiewaarden',
      voordelen: [
        'Tot 7 kamers voor optimale isolatie',
        'Energiezuinig en duurzaam',
        'Onderhoudsarm en kleurvast',
        'Uitstekende prijs-kwaliteit verhouding',
        'Verkrijgbaar in wit, grijs, antraciet en houtdecors',
      ],
      isolatiewaarde: 'Uw-waarde tot 0.71 W/m²K',
      garantie: '30 jaar op profielen',
      toepassingen: ['Draairamen', 'Draaikiepramen', 'Schuiframen', 'Deuren'],
      prijsklasse: 'Middensegment',
    },
    salamander: {
      naam: 'Salamander',
      type: 'PVC',
      beschrijving: 'Premium Duitse PVC profielen met innovatieve technologie',
      voordelen: [
        'Zeer hoge isolatiewaarden',
        'Slanke profielen voor meer lichtinval',
        'Duurzaam en recyclebaar',
        'Uitstekende geluidsisolatie',
        'Verkrijgbaar in alle RAL-kleuren',
      ],
      isolatiewaarde: 'Uw-waarde tot 0.68 W/m²K',
      garantie: '30 jaar op profielen',
      toepassingen: ['Draairamen', 'Draaikiepramen', 'Schuiframen', 'Deuren', 'Hefdeurensystemen'],
      prijsklasse: 'Premium',
    },
  },
  aluminium: {
    schuco: {
      naam: 'Schüco',
      type: 'Aluminium',
      beschrijving: 'Wereldleider in aluminium raam- en deursystemen',
      voordelen: [
        'Slanke profielen voor maximale lichtinval',
        'Zeer hoge sterkte en duurzaamheid',
        'Thermisch onderbroken voor goede isolatie',
        'Geschikt voor grote glaspartijen',
        'Verkrijgbaar in alle RAL-kleuren',
        'Moderne, strakke uitstraling',
      ],
      isolatiewaarde: 'Uw-waarde tot 0.79 W/m²K',
      garantie: '10 jaar op profielen en coating',
      toepassingen: ['Draairamen', 'Schuifsystemen', 'Hefdeurensystemen', 'Gevelsystemen'],
      prijsklasse: 'Premium',
    },
    reynaers: {
      naam: 'Reynaers',
      type: 'Aluminium',
      beschrijving: 'Belgisch topkwaliteit aluminium met innovatieve systemen',
      voordelen: [
        'Uitstekende isolatiewaarden',
        'Minimale zichtbare profielen',
        'Hoge sterkte en stabiliteit',
        'Perfect voor moderne architectuur',
        'Verkrijgbaar in alle RAL-kleuren',
        'Duurzaam en onderhoudsarm',
      ],
      isolatiewaarde: 'Uw-waarde tot 0.75 W/m²K',
      garantie: '10 jaar op profielen en coating',
      toepassingen: ['Draairamen', 'Schuifsystemen', 'Vouwwandsystemen', 'Deuren'],
      prijsklasse: 'Premium',
    },
    aluprof: {
      naam: 'Aluprof',
      type: 'Aluminium',
      beschrijving: 'Poolse kwaliteitsprofielen met uitstekende prijs-kwaliteit',
      voordelen: [
        'Goede isolatiewaarden',
        'Robuust en duurzaam',
        'Moderne designs',
        'Betaalbaar alternatief voor premium merken',
        'Verkrijgbaar in diverse kleuren',
      ],
      isolatiewaarde: 'Uw-waarde tot 0.85 W/m²K',
      garantie: '10 jaar op profielen',
      toepassingen: ['Draairamen', 'Schuifsystemen', 'Deuren'],
      prijsklasse: 'Middensegment',
    },
  },
};

// VERGELIJKING PVC VS ALUMINIUM
export const PVC_VS_ALUMINIUM = {
  pvc: {
    voordelen: [
      'Betere isolatiewaarde (warmer)',
      'Goedkoper in aanschaf',
      'Onderhoudsarm',
      'Goede geluidsisolatie',
      'Verkrijgbaar in diverse kleuren',
    ],
    nadelen: [
      'Dikkere profielen (minder lichtinval)',
      'Beperktere kleurkeuze dan aluminium',
      'Kan verkleuren bij donkere kleuren in de zon',
    ],
    geschiktVoor: [
      'Klassieke woningen',
      'Budget-bewuste klanten',
      'Maximale isolatie',
      'Onderhoudsarme oplossing',
    ],
    prijsrange: '€450-€650 per m²',
  },
  aluminium: {
    voordelen: [
      'Slanke profielen (meer lichtinval)',
      'Zeer sterk en duurzaam',
      'Alle RAL-kleuren mogelijk',
      'Moderne, strakke uitstraling',
      'Geschikt voor grote glaspartijen',
      'Kleurvast (verbleekt niet)',
    ],
    nadelen: [
      'Duurder in aanschaf',
      'Iets minder isolerend dan PVC (maar nog steeds goed met thermische onderbreking)',
    ],
    geschiktVoor: [
      'Moderne architectuur',
      'Grote glaspartijen',
      'Maximale lichtinval',
      'Duurzame investering',
    ],
    prijsrange: '€650-€950 per m²',
  },
};

// BEGLAZING OPTIES
export const BEGLAZING = {
  hrPlusPlus: {
    naam: 'HR++ (Hoogrendementsbeglazing)',
    beschrijving: 'Dubbele beglazing met speciale coating',
    uWaarde: '1.1 W/m²K',
    voordelen: [
      'Standaard voor nieuwbouw',
      'Goede isolatie',
      'Energiebesparing tot 30%',
      'In aanmerking voor premies',
    ],
    toepassingen: 'Standaard voor alle ramen en deuren',
    prijsklasse: 'Standaard',
  },
  drievoudig: {
    naam: 'Drievoudig glas (Triple glas)',
    beschrijving: 'Drie glaslagen met twee spouwvullingen',
    uWaarde: '0.6-0.7 W/m²K',
    voordelen: [
      'Beste isolatie',
      'Maximale energiebesparing (tot 50%)',
      'Uitstekende geluidsisolatie',
      'Ideaal voor passiefhuizen',
    ],
    toepassingen: 'Energiezuinige woningen, passiefhuizen',
    prijsklasse: 'Premium (+25% t.o.v. HR++)',
  },
  geluidwerend: {
    naam: 'Geluidwerend glas',
    beschrijving: 'Speciale beglazing voor geluidsreductie',
    reductie: 'Tot 45 dB geluidsreductie',
    voordelen: [
      'Ideaal bij drukke wegen',
      'Betere nachtrust',
      'Combineert met HR++ isolatie',
    ],
    toepassingen: 'Woningen aan drukke wegen, vliegtuigroutes',
    prijsklasse: 'Premium',
  },
  veiligheid: {
    naam: 'Veiligheidsglas',
    beschrijving: 'Gelaagd glas voor extra inbraakwerendheid',
    voordelen: [
      'Inbraakwerend',
      'Bescherming tegen glasbreuk',
      'Combineert met HR++ isolatie',
    ],
    toepassingen: 'Begane grond, kwetsbare locaties',
    prijsklasse: 'Premium',
  },
};

// KLEUREN EN AFWERKINGEN
export const KLEUREN = {
  pvc: {
    standaard: ['Wit', 'Grijs', 'Antraciet'],
    houtdecors: ['Golden Oak', 'Noten', 'Mahonie', 'Donker eiken'],
    tweekleurig: 'Binnen en buiten verschillende kleuren mogelijk',
    opmerking: 'Donkere kleuren kunnen bij PVC licht verkleuren in de zon',
  },
  aluminium: {
    standaard: 'Alle RAL-kleuren mogelijk',
    populair: ['RAL 9016 (Wit)', 'RAL 7016 (Antraciet)', 'RAL 9005 (Zwart)', 'RAL 7021 (Donkergrijs)'],
    afwerking: ['Mat', 'Glanzend', 'Structuur'],
    tweekleurig: 'Binnen en buiten verschillende kleuren mogelijk',
    opmerking: 'Aluminium is kleurvast en verbleekt niet',
  },
};

// ADVIES PER SITUATIE
export const ADVIES_PER_SITUATIE = {
  nieuwbouw: {
    aanbeveling: 'Aluminium (Schüco of Reynaers) met HR++ of drievoudig glas',
    reden: 'Moderne uitstraling, slanke profielen, duurzame investering',
  },
  renovatie_klassiek: {
    aanbeveling: 'PVC (Aluplast of Salamander) met HR++ glas',
    reden: 'Goede isolatie, betaalbaar, past bij klassieke architectuur',
  },
  renovatie_modern: {
    aanbeveling: 'Aluminium (Schüco of Reynaers) met HR++ glas',
    reden: 'Strakke lijnen, maximale lichtinval, moderne uitstraling',
  },
  budget_bewust: {
    aanbeveling: 'PVC (Aluplast) met HR++ glas',
    reden: 'Beste prijs-kwaliteit verhouding, goede isolatie',
  },
  premium: {
    aanbeveling: 'Aluminium (Schüco) met drievoudig glas',
    reden: 'Topkwaliteit, beste isolatie, maximale duurzaamheid',
  },
  grote_glaspartijen: {
    aanbeveling: 'Aluminium (Schüco of Reynaers) schuifsystemen',
    reden: 'Hoge sterkte, slanke profielen, geschikt voor grote afmetingen',
  },
  geluid: {
    aanbeveling: 'PVC of Aluminium met geluidwerend glas',
    reden: 'Beste geluidsisolatie, rust in huis',
  },
};
