export interface LocalSeoCity {
  slug: string;
  name: string;
  nearby: string[];
  localContext: string;
  propertyFocus: string;
  priority: number;
}

export interface LocalSeoLink {
  label: string;
  href: string;
  description: string;
}

export interface LocalSeoService {
  slug: "renovatie" | "ramen-deuren" | "gevelrenovatie" | "crepi-gevel" | "totaalrenovatie";
  name: string;
  hubPath: string;
  detailPath: string;
  detailLabel: string;
  hubTitle: string;
  hubDescription: string;
  hubIntro: string[];
  benefits: string[];
  deliverables: string[];
  focusSentence: string;
  priceCue: string;
  timeline: string;
  keywordRoots: string[];
  extraKeywords: string[];
  getCityTitle(city: string): string;
  getCityDescription(city: string): string;
  getCityHeading(city: string): string;
}

export interface LocalSeoPageData {
  slug: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  keywords: string[];
  heroDescription: string;
  introParagraphs: string[];
  planningParagraphs: string[];
  combinationParagraphs: string[];
  areaParagraph: string;
  faqs: Array<{ question: string; answer: string }>;
  city: LocalSeoCity;
  service: LocalSeoService;
  sameCityPages: LocalSeoLink[];
  sameServicePages: LocalSeoLink[];
  serviceHubLinks: LocalSeoLink[];
}

export const priorityCities: LocalSeoCity[] = [
  {
    slug: "zoersel",
    name: "Zoersel",
    nearby: ["Halle", "Sint-Antonius", "Westmalle"],
    localContext: "veel open bebouwing en residentiële renovaties waar isolatie, planning en een verzorgde afwerking zwaar doorwegen",
    propertyFocus: "villa's, gezinswoningen en uitbreidingen",
    priority: 1,
  },
  {
    slug: "schilde",
    name: "Schilde",
    nearby: ["'s-Gravenwezel", "Zoersel", "Wijnegem"],
    localContext: "woningen waar esthetiek, materiaalkeuze en detailafwerking vaak bepalend zijn voor de uiteindelijke waarde",
    propertyFocus: "villa's, karakterwoningen en hoogwaardige renovaties",
    priority: 0.95,
  },
  {
    slug: "brasschaat",
    name: "Brasschaat",
    nearby: ["Kapellen", "Schoten", "Antwerpen"],
    localContext: "residentiële buurten met vraag naar duurzame materialen, nette uitvoering en een premium uitstraling",
    propertyFocus: "gezinswoningen, villa's en grondige gevel- of raamrenovaties",
    priority: 0.93,
  },
  {
    slug: "malle",
    name: "Malle",
    nearby: ["Westmalle", "Oostmalle", "Zoersel"],
    localContext: "woningen waar energetische renovatie en een slimme combinatie van buitenschilwerken extra veel rendement opleveren",
    propertyFocus: "eengezinswoningen, renovatieprojecten en uitbreidingen",
    priority: 0.91,
  },
  {
    slug: "wijnegem",
    name: "Wijnegem",
    nearby: ["Schilde", "Wommelgem", "Deurne"],
    localContext: "een mix van bestaande woningen en recente verbouwingen waar comfort, EPC en strakke planning centraal staan",
    propertyFocus: "rijwoningen, halfopen bebouwing en energetische upgrades",
    priority: 0.89,
  },
  {
    slug: "antwerpen",
    name: "Antwerpen",
    nearby: ["Borgerhout", "Berchem", "Merksem"],
    localContext: "stadspanden en appartementen waar voorbereiding, bereikbaarheid en correcte uitvoering in een stedelijke context cruciaal zijn",
    propertyFocus: "stadswoningen, appartementen en investeringspanden",
    priority: 0.88,
  },
  {
    slug: "deurne",
    name: "Deurne",
    nearby: ["Antwerpen", "Wijnegem", "Borsbeek"],
    localContext: "veel rijwoningen waar geluidsdemping, isolatie en een doordachte renovatiefase meteen voelbaar zijn in dagelijks comfort",
    propertyFocus: "rijwoningen, gezinswoningen en praktische renovaties",
    priority: 0.86,
  },
  {
    slug: "merksem",
    name: "Merksem",
    nearby: ["Antwerpen", "Schoten", "Ekeren"],
    localContext: "renovaties waarbij budgetcontrole, snelle uitvoering en een betere buitenschil vaak samenkomen",
    propertyFocus: "klassieke gezinswoningen en woningen met renovatiepotentieel",
    priority: 0.84,
  },
  {
    slug: "kapellen",
    name: "Kapellen",
    nearby: ["Brasschaat", "Stabroek", "Putte"],
    localContext: "ruimere woningen waar duurzaamheid, afwerking en waardevaste materiaalkeuzes belangrijk blijven op lange termijn",
    propertyFocus: "vrijstaande woningen, villa's en totaalprojecten",
    priority: 0.82,
  },
  {
    slug: "schoten",
    name: "Schoten",
    nearby: ["Brasschaat", "Merksem", "Wijnegem"],
    localContext: "gezinswoningen en uitbreidingen waar ramen, gevel en renovatieplanning vaak in één logisch traject worden samengebracht",
    propertyFocus: "gezinswoningen, verbouwingen en energetische verbeteringen",
    priority: 0.8,
  },
];

export const localSeoServices: LocalSeoService[] = [
  {
    slug: "renovatie",
    name: "Renovatie",
    hubPath: "/renovatie",
    detailPath: "/diensten/renovatie",
    detailLabel: "Bekijk onze renovatie-aanpak",
    hubTitle: "Renovatie in Zoersel en regio Antwerpen",
    hubDescription:
      "Lokale renovatiepagina's voor Zoersel, Schilde, Brasschaat, Malle, Wijnegem, Antwerpen, Deurne, Merksem, Kapellen en Schoten. Focus op renovatie, gevelwerken, ramen en totaalprojecten.",
    hubIntro: [
      "Yannova bouwt hiermee een consistente lokale SEO-structuur uit rond renovatie in de sterkste gemeenten rond Zoersel. Elke pagina koppelt renovatie aan concrete wooncontext, omliggende deelgemeenten en relevante interne links.",
      "Dat maakt de site duidelijker voor Google en sterker voor bezoekers die zoeken op combinaties zoals renovatie Zoersel, aannemer Schilde of renovatiebedrijf Brasschaat.",
    ],
    benefits: [
      "Eén partner voor gevel, ramen en dakwerken",
      "Energetische optimalisatie en EPC-verbetering",
      "Strakke planning zonder leegstand tussen fases",
      "Bouwkundig advies en vakkundige uitvoering",
    ],
    deliverables: ["integrale buitenschil-renovatie", "ramen en deuren", "gevelisolatie en crepi", "totaalrenovatie van interieur en technieken"],
    focusSentence:
      "Wij realiseren zorgeloze totaalprojecten waarbij we de buitenschil en binnenafwerking technisch perfect op elkaar afstemmen.",
    priceCue: "afhankelijk van omvang, technieken en afwerkingsniveau",
    timeline: "een gefaseerde planning van enkele weken tot meerdere maanden",
    keywordRoots: ["renovatie", "aannemer renovatie", "renovatiebedrijf", "verbouwing"],
    extraKeywords: ["totaalrenovatie", "energetische renovatie", "woning renoveren"],
    getCityTitle: (city) => `Renovatie ${city} | Aannemer Renovatie | Yannova`,
    getCityDescription: (city) =>
      `Renovatie in ${city}? Yannova helpt met gevelrenovatie, ramen en deuren en totaalrenovaties. Vraag vandaag een offerte aan.`,
    getCityHeading: (city) => `Renovatie in ${city} door ervaren aannemer`,
  },
  {
    slug: "ramen-deuren",
    name: "Ramen en deuren",
    hubPath: "/ramen-deuren",
    detailPath: "/diensten/ramen-deuren",
    detailLabel: "Meer over ramen en deuren",
    hubTitle: "Ramen en deuren in Zoersel en regio Antwerpen",
    hubDescription:
      "Lokale landingspagina's voor ramen en deuren in de belangrijkste gemeenten rond Zoersel. Gericht op PVC, aluminium, hoogrendementsbeglazing en nette plaatsing.",
    hubIntro: [
      "Met deze hub bundelt Yannova de lokale pagina's voor ramen en deuren in de regio waar de meeste zoekvraag zit. Elke stadspagina focust op plaatsing, isolatie, veiligheid en de koppeling met andere renovatiewerken.",
      "Zo ontstaat een duidelijke SEO-structuur rond termen als ramen en deuren Zoersel, ramen vervangen Brasschaat of buitenschrijnwerk Antwerpen.",
    ],
    benefits: [
      "PVC en aluminium profielen tot 7 kamers",
      "Standaard HR++ of triple glas (HR+++)",
      "Luchtdichte montage en gevelintegratie",
      "Inbraakveilig beslag en topafwerking",
    ],
    deliverables: ["PVC en aluminium ramen", "hoogrendementsglas", "voordeuren en schuiframen", "perfecte aansluiting op gevelisolatie"],
    focusSentence:
      "Wij combineren technische superioriteit met esthetiek, zodat uw nieuwe ramen perfect aansluiten op de isolatieschil van uw woning.",
    priceCue: "afhankelijk van aantal openingen, materiaal, beglazing en afwerking",
    timeline: "meestal 1 tot 3 plaatsingsdagen na opmeting en productie",
    keywordRoots: ["ramen en deuren", "ramen vervangen", "deuren plaatsen", "buitenschrijnwerk"],
    extraKeywords: ["pvc ramen", "aluminium ramen", "triple glas", "schuifdeur"],
    getCityTitle: (city) => `Ramen en deuren ${city} | Plaatsing op maat | Yannova`,
    getCityDescription: (city) =>
      `Nieuwe ramen en deuren in ${city}? Yannova plaatst PVC en aluminium ramen, buitendeuren en schuiframen met professionele afwerking. Vraag een offerte aan.`,
    getCityHeading: (city) => `Ramen en deuren in ${city} laten plaatsen`,
  },
  {
    slug: "gevelrenovatie",
    name: "Gevelrenovatie",
    hubPath: "/gevelrenovatie",
    detailPath: "/diensten/gevelrenovatie",
    detailLabel: "Meer over gevelrenovatie",
    hubTitle: "Gevelrenovatie in Zoersel en regio Antwerpen",
    hubDescription:
      "Lokale SEO-pagina's voor gevelrenovatie in de sterkste gemeenten rond Zoersel. Gericht op gevelherstel, isolatie, crepi en duurzame buitenafwerking.",
    hubIntro: [
      "De gevel is vaak de eerste winst bij een renovatie. Deze hub groepeert lokale pagina's rond gevelrenovatie voor gemeenten waar veel gezocht wordt op gevelwerken, crepi en gevelisolatie.",
      "Per stadspagina koppelen we gevelrenovatie aan de lokale woningvoorraad, omliggende buurten en de link met ramen, isolatie en totaalrenovatie.",
    ],
    benefits: [
      "Hoogwaardige siliconenharspleister (crepi)",
      "Totaaloplossing: gevel, ramen en dak in één planning",
      "Structurele verbetering van EPC en woningwaarde",
      "Vakmanschap in detailafwerking rond dorpels en hoeken",
    ],
    deliverables: ["gevelisolatie (EPS)", "siliconenharspleister (crepi)", "steenstrips met isolatie", "totaalrenovatie van de buitenschil"],
    focusSentence:
      "Wij maken uw woning future-proof met een doorlopende thermische schil en een onderhoudsvriendelijke afwerking die jarenlang mooi blijft.",
    priceCue: "afhankelijk van oppervlakte, herstelwerk, isolatiedikte en gekozen afwerking",
    timeline: "vaak 1 tot 3 weken afhankelijk van voorbereidende werken en weersomstandigheden",
    keywordRoots: ["gevelrenovatie", "gevelwerken", "gevel herstellen", "gevel isoleren"],
    extraKeywords: ["crepi", "gevelisolatie", "gevelafwerking"],
    getCityTitle: (city) => `Gevelrenovatie ${city} | Crepi en gevelwerken | Yannova`,
    getCityDescription: (city) =>
      `Gevelrenovatie in ${city}? Yannova verzorgt gevelherstel, isolatie en crepi-afwerking voor woningen in ${city} en omgeving. Vraag een vrijblijvende offerte aan.`,
    getCityHeading: (city) => `Gevelrenovatie in ${city} met duurzame afwerking`,
  },
  {
    slug: "crepi-gevel",
    name: "Crepi gevel",
    hubPath: "/crepi-gevel",
    detailPath: "/diensten/gevelrenovatie",
    detailLabel: "Meer over crepi en gevelafwerking",
    hubTitle: "Crepi gevels in Zoersel en regio Antwerpen",
    hubDescription:
      "Gerichte lokale pagina's voor crepi gevelafwerking in Zoersel en de omliggende zoekregio. Focus op strakke afwerking, kleurkeuze, isolatie en onderhoudsarme gevels.",
    hubIntro: [
      "Crepi wordt vaak afzonderlijk gezocht, los van het bredere begrip gevelrenovatie. Daarom krijgt crepi hier een eigen lokale SEO-structuur met expliciete stadspagina's.",
      "Die pagina's ondersteunen zoekopdrachten zoals crepi gevel Zoersel, crepi Schilde of gevelbepleistering Brasschaat en linken tegelijk slim door naar gevelrenovatie en totaalrenovatie.",
    ],
    benefits: [
      "Zelfreinigende siliconenharspleister",
      "Eliminatie van koudebruggen via gevelisolatie",
      "Eén aanspreekpunt voor gevel, ramen en dak",
      "Keuze uit honderden kleurvaste afwerkingen",
    ],
    deliverables: ["crepi-afwerking (siliconen)", "gevelisolatie op maat", "kleuradvies", "perfecte aansluiting op ramen en dorpels"],
    focusSentence:
      "Onze focus ligt op een technisch perfecte opbouw die uw energiefactuur verlaagt en uw gevel een moderne, onderhoudsarme uitstraling geeft.",
    priceCue: "afhankelijk van de oppervlakte, gewenste structuur, ondergrond en combinatie met isolatie",
    timeline: "meestal 1 tot 2 weken inclusief voorbereiding en afwerking",
    keywordRoots: ["crepi gevel", "crepi", "gevelbepleistering", "sierpleister"],
    extraKeywords: ["gevelisolatie", "crepi afwerking", "buitengevel"],
    getCityTitle: (city) => `Crepi gevel ${city} | Gevelafwerking en isolatie | Yannova`,
    getCityDescription: (city) =>
      `Crepi gevel in ${city}? Kies voor een strakke gevelafwerking met isolatie, kleuradvies en vakkundige uitvoering door Yannova. Vraag uw offerte aan.`,
    getCityHeading: (city) => `Crepi gevel in ${city} voor een nieuwe uitstraling`,
  },
  {
    slug: "totaalrenovatie",
    name: "Totaalrenovatie",
    hubPath: "/totaalrenovatie",
    detailPath: "/diensten/renovatie",
    detailLabel: "Meer over totaalrenovatie",
    hubTitle: "Totaalrenovatie in Zoersel en regio Antwerpen",
    hubDescription:
      "Lokale SEO-pagina's voor totaalrenovatie in de gemeenten met de meeste zoekvraag rond Zoersel. Focus op coördinatie, planning en één vast aanspreekpunt van start tot oplevering.",
    hubIntro: [
      "Totaalrenovatie vraagt meer dan losse aannemingswerken. Deze hub zet daarom in op lokale pagina's die het volledige traject uitleggen voor gemeenten waar eigenaars gericht zoeken naar één partner.",
      "Zo worden zoektermen zoals totaalrenovatie Zoersel, totaalrenovatie Antwerpen of renovatiebedrijf Schoten beter ondersteund door duidelijke landingspagina's en interne links.",
    ],
    benefits: [
      "Eén partner voor gevel, ramen en dakwerken",
      "Energetische optimalisatie (EPC-upgrades)",
      "Vaste projectleider van start tot oplevering",
      "Gecoördineerde planning zonder tijdverlies",
    ],
    deliverables: ["integrale aanpak buitenschil", "technieken en binnenafwerking", "ramen, deuren en gevelisolatie", "totaalprojectbegeleiding"],
    focusSentence:
      "Wij realiseren complete woningtransformaties waarbij techniek, isolatie en esthetiek naadloos op elkaar aansluiten.",
    priceCue: "afhankelijk van de omvang van het project, technieken, materiaalkeuzes en gewenste afwerkingsgraad",
    timeline: "meestal een gefaseerde planning over meerdere weken of maanden",
    keywordRoots: ["totaalrenovatie", "woningrenovatie", "volledige renovatie", "renovatiebedrijf"],
    extraKeywords: ["aannemer", "energetische renovatie", "coördinatie renovatie"],
    getCityTitle: (city) => `Totaalrenovatie ${city} | Eén aanspreekpunt | Yannova`,
    getCityDescription: (city) =>
      `Totaalrenovatie in ${city}? Yannova coördineert uw renovatie van afbraak tot afwerking met één vast aanspreekpunt. Vraag een vrijblijvende offerte aan.`,
    getCityHeading: (city) => `Totaalrenovatie in ${city} met strakke opvolging`,
  },
];

const orderedServiceSlugs = [...localSeoServices]
  .map((service) => service.slug)
  .sort((left, right) => right.length - left.length);

export function getLocalSeoService(serviceSlug: LocalSeoService["slug"]) {
  return localSeoServices.find((service) => service.slug === serviceSlug) ?? null;
}

export function getLocalSeoCity(citySlug: string) {
  return priorityCities.find((city) => city.slug === citySlug) ?? null;
}

export function getLocalSeoPagePath(serviceSlug: LocalSeoService["slug"], citySlug: string) {
  return `/${serviceSlug}-${citySlug}`;
}

export function getLocalSeoPageSlugs() {
  return localSeoServices.flatMap((service) =>
    priorityCities.map((city) => `${service.slug}-${city.slug}`),
  );
}

export function getServiceHubLinks(): LocalSeoLink[] {
  return localSeoServices.map((service) => ({
    label: service.name,
    href: service.hubPath,
    description: `${service.name} in Zoersel en regio Antwerpen`,
  }));
}

function buildKeywords(service: LocalSeoService, city: LocalSeoCity) {
  const cityName = city.name.toLowerCase();
  return Array.from(
    new Set([
      ...service.keywordRoots.map((root) => `${root} ${cityName}`),
      ...service.keywordRoots.map((root) => `${root} ${cityName} prijs`),
      ...service.extraKeywords.map((keyword) => `${keyword} ${cityName}`),
      `aannemer ${cityName}`,
      `${service.name.toLowerCase()} ${cityName}`,
    ]),
  );
}

function buildFaqs(service: LocalSeoService, city: LocalSeoCity) {
  return [
    {
      question: `Wat kost ${service.name.toLowerCase()} in ${city.name}?`,
      answer: `De prijs voor ${service.name.toLowerCase()} in ${city.name} is ${service.priceCue}. Na een plaatsbezoek krijgt u van Yannova een duidelijke offerte op maat van uw woning en planning.`,
    },
    {
      question: `Hoe snel kunnen jullie starten in ${city.name}?`,
      answer: `Na een eerste opname in ${city.name} ontvangt u snel een voorstel met aanpak en timing. Voor ${service.name.toLowerCase()} rekenen we meestal op ${service.timeline}.`,
    },
    {
      question: `Werken jullie enkel in ${city.name}?`,
      answer: `Nee. Yannova werkt naast ${city.name} ook in ${city.nearby.join(", ")} en andere gemeenten rond Zoersel en de Antwerpse rand.`,
    },
    {
      question: `Kunnen jullie ${service.name.toLowerCase()} combineren met andere werken?`,
      answer: `Ja. We combineren ${service.name.toLowerCase()} geregeld met ramen en deuren, gevelwerken of een bredere renovatiefase zodat planning, budget en afwerking logisch op elkaar aansluiten.`,
    },
  ];
}

function parseLocalSeoSlug(seoSlug: string) {
  for (const serviceSlug of orderedServiceSlugs) {
    const prefix = `${serviceSlug}-`;
    if (!seoSlug.startsWith(prefix)) {
      continue;
    }

    const citySlug = seoSlug.slice(prefix.length);
    const service = getLocalSeoService(serviceSlug as LocalSeoService["slug"]);
    const city = getLocalSeoCity(citySlug);

    if (service && city) {
      return { service, city };
    }
  }

  return null;
}

function getSameCityPages(city: LocalSeoCity, currentServiceSlug: LocalSeoService["slug"]): LocalSeoLink[] {
  return localSeoServices
    .filter((service) => service.slug !== currentServiceSlug)
    .map((service) => ({
      label: `${service.name} ${city.name}`,
      href: getLocalSeoPagePath(service.slug, city.slug),
      description: `${service.name} in ${city.name} en omgeving`,
    }));
}

function getSameServicePages(service: LocalSeoService, currentCitySlug: string): LocalSeoLink[] {
  return priorityCities
    .filter((city) => city.slug !== currentCitySlug)
    .sort((left, right) => right.priority - left.priority)
    .map((city) => ({
      label: `${service.name} ${city.name}`,
      href: getLocalSeoPagePath(service.slug, city.slug),
      description: `${service.name} in ${city.name}`,
    }));
}

export function getHubCityLinks(serviceSlug: LocalSeoService["slug"]): LocalSeoLink[] {
  const service = getLocalSeoService(serviceSlug);
  if (!service) {
    return [];
  }

  return priorityCities.map((city) => ({
    label: `${service.name} ${city.name}`,
    href: getLocalSeoPagePath(service.slug, city.slug),
    description: city.localContext,
  }));
}

export function getLocalSeoHubSeoInput(serviceSlug: LocalSeoService["slug"]) {
  const service = getLocalSeoService(serviceSlug);
  if (!service) {
    return null;
  }

  return {
    title: service.hubTitle,
    description: service.hubDescription,
    path: service.hubPath,
    keywords: priorityCities.flatMap((city) => [
      `${service.name.toLowerCase()} ${city.name.toLowerCase()}`,
      `${service.name.toLowerCase()} ${city.name.toLowerCase()} offerte`,
    ]),
  };
}

export function getLocalSeoPageBySlug(seoSlug: string): LocalSeoPageData | null {
  const parsed = parseLocalSeoSlug(seoSlug);
  if (!parsed) {
    return null;
  }

  const { service, city } = parsed;
  const sameCityPages = getSameCityPages(city, service.slug);
  const sameServicePages = getSameServicePages(service, city.slug);

  return {
    slug: seoSlug,
    path: getLocalSeoPagePath(service.slug, city.slug),
    title: service.getCityTitle(city.name),
    description: service.getCityDescription(city.name),
    h1: service.getCityHeading(city.name),
    keywords: buildKeywords(service, city),
    heroDescription: `${service.name} in ${city.name}? Yannova helpt met ${service.deliverables.join(", ")}. ${service.focusSentence}`,
    introParagraphs: [
      `Bent u op zoek naar een betrouwbare partner voor ${service.name.toLowerCase()} in ${city.name}? Yannova begeleidt eigenaars in ${city.name} met ${service.deliverables[0]}, ${service.deliverables[1]} en een aanpak die past bij ${city.propertyFocus}.`,
      `In ${city.name} zien we ${city.localContext}. Daarom vertrekken wij niet vanuit standaardoplossingen, maar vanuit de bestaande toestand van uw woning, de gewenste timing en het rendement op lange termijn.`,
    ],
    planningParagraphs: [
      `Tijdens een plaatsbezoek in ${city.name} bekijken we de huidige situatie, de technische aandachtspunten en de volgorde van de werken. Daarna ontvangt u een duidelijke offerte met advies over materiaalkeuze, afwerking en uitvoering.`,
      `Yannova werkt geregeld in ${city.name} en omliggende gemeenten zoals ${city.nearby.join(", ")}. Daardoor kunnen we realistische termijnen voorstellen en ${service.name.toLowerCase()} in ${city.name} logisch laten aansluiten op uw woningtype en planning.`,
    ],
    combinationParagraphs: [
      `Veel projecten in ${city.name} combineren ${service.name.toLowerCase()} met ${sameCityPages
        .slice(0, 2)
        .map((link) => link.label.toLowerCase())
        .join(" en ")}. Door die werken op elkaar af te stemmen, vermijdt u dubbele kosten en krijgt u een consistenter eindresultaat.`,
      `Wie in ${city.name} renoveert, wint vaak tegelijk op comfort, EPC, onderhoud en uitstraling wanneer ramen, gevel en renovatieplanning samen bekeken worden. Dat is precies waar Yannova het verschil maakt met een lokale en praktische aanpak.`,
    ],
    areaParagraph: `${city.name} is voor Yannova een strategisch werkgebied binnen de regio rond Zoersel. We zijn ook actief in ${city.nearby.join(", ")} en andere buurten waar ${city.propertyFocus} sterk vertegenwoordigd zijn.`,
    faqs: buildFaqs(service, city),
    city,
    service,
    sameCityPages,
    sameServicePages,
    serviceHubLinks: getServiceHubLinks(),
  };
}
