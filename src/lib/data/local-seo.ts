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
  slug: "renovatie" | "ramen-deuren" | "gevelrenovatie" | "crepi-gevel" | "totaalrenovatie" | "ramen" | "deuren" | "crepi" | "gevelisolatie";
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
    slug: "geraardsbergen",
    name: "Geraardsbergen",
    nearby: ["Lierde", "Zottegem", "Ninove", "Ronse", "Brakel"],
    localContext: "oudere woningen en karakterpanden in de Vlaamse Ardennen waar energetische renovatie, gevelwerken en schrijnwerk een directe impact hebben op comfort en woningwaarde",
    propertyFocus: "rijwoningen, halfopen bebouwing, karakterpanden en oudere eengezinswoningen",
    priority: 1,
  },
  {
    slug: "ninove",
    name: "Ninove",
    nearby: ["Geraardsbergen", "Aalst", "Denderleeuw", "Liedekerke"],
    localContext: "gemengde woningmarkt met veel renovatiepotentieel, waar raamvervanging, gevelisolatie en energieprestatie hoog op de agenda staan",
    propertyFocus: "gezinswoningen, rijhuizen en ouder woningbestand",
    priority: 0.95,
  },
  {
    slug: "ronse",
    name: "Ronse",
    nearby: ["Geraardsbergen", "Brakel", "Kluisbergen", "Koppenberg"],
    localContext: "historisch stadscentrum met veel oudere woningen waar gevelrenovatie, isolatie en nieuwe ramen de meeste meerwaarde bieden",
    propertyFocus: "rijwoningen, stadswoningen en karakterpanden",
    priority: 0.92,
  },
  {
    slug: "zottegem",
    name: "Zottegem",
    nearby: ["Geraardsbergen", "Herzele", "Lierde", "Brakel"],
    localContext: "residentiële gemeente in het hart van de Vlaamse Ardennen waar eigenaars inzetten op kwalitatieve renovatie, duurzame materialen en EPC-verbetering",
    propertyFocus: "eengezinswoningen, halfopen bebouwing en gezinswoningen",
    priority: 0.90,
  },
  {
    slug: "aalst",
    name: "Aalst",
    nearby: ["Ninove", "Denderleeuw", "Erpe-Mere", "Haaltert"],
    localContext: "grote gemeente met diverse woningtypes waarbij schrijnwerk, gevelrenovatie en totaalrenovatie populair zijn bij zowel eigenaars als investeerders",
    propertyFocus: "rijwoningen, stadswoningen, appartementen en gezinswoningen",
    priority: 0.93,
  },
  {
    slug: "brakel",
    name: "Brakel",
    nearby: ["Geraardsbergen", "Ronse", "Zottegem", "Oudenaarde"],
    localContext: "landelijke gemeente in de Vlaamse Ardennen met veel open en halfopen bebouwing waar isolatie en gevelherstel sterk renderen op energie en comfort",
    propertyFocus: "halfopen woningen, villa's en landelijke gezinswoningen",
    priority: 0.88,
  },
  {
    slug: "herzele",
    name: "Herzele",
    nearby: ["Zottegem", "Geraardsbergen", "Ninove", "Sint-Lievens-Houtem"],
    localContext: "groene gemeente met residentieel karakter waar inwoners renoveren met oog voor energiezuinigheid, detailafwerking en duurzame buitenschil",
    propertyFocus: "gezinswoningen, vrijstaande woningen en renovatieprojecten",
    priority: 0.86,
  },
  {
    slug: "lierde",
    name: "Lierde",
    nearby: ["Geraardsbergen", "Brakel", "Zottegem", "Ronse"],
    localContext: "rustige landelijke gemeente grenzend aan Geraardsbergen waar bewoners renoveren met aandacht voor isolatie, schrijnwerk en een verzorgde afwerking",
    propertyFocus: "landelijke woningen, halfopen bebouwing en gezinswoningen",
    priority: 0.84,
  },
  {
    slug: "galmaarden",
    name: "Galmaarden",
    nearby: ["Geraardsbergen", "Tollembeek", "Vollezele", "Herne"],
    localContext: "landelijke gemeente vlakbij Geraardsbergen waar eigenaars investeren in ramen, deuren en energiebesparende gevelisolatie",
    propertyFocus: "eengezinswoningen, hoekhuizen en landelijke panden",
    priority: 0.90,
  },
  {
    slug: "oudenaarde",
    name: "Oudenaarde",
    nearby: ["Brakel", "Ronse", "Kluisbergen", "Maarkedal"],
    localContext: "historisch en residentieel centrum van de Vlaamse Ardennen waar ramen, gevelrenovatie en totaalrenovaties veel gevraagd zijn",
    propertyFocus: "stadswoningen, herenhuizen en vrijstaande gezinswoningen",
    priority: 0.90,
  },
  {
    slug: "denderleeuw",
    name: "Denderleeuw",
    nearby: ["Ninove", "Aalst", "Liedekerke", "Haaltert"],
    localContext: "drukbevolkte Denderstreek-gemeente met veel gezinswoningen waar energiebesparende investeringen snel rendement opleveren",
    propertyFocus: "rijwoningen, gezinswoningen en halfopen bebouwing",
    priority: 0.87,
  },
  {
    slug: "haaltert",
    name: "Haaltert",
    nearby: ["Aalst", "Ninove", "Erpe-Mere", "Denderleeuw"],
    localContext: "groene gemeente in de Denderstreek waar bewoners kiezen voor kwalitatieve buitenschil- en raamvernieuwing",
    propertyFocus: "eengezinswoningen en renovatieprojecten",
    priority: 0.86,
  },
  {
    slug: "kluisbergen",
    name: "Kluisbergen",
    nearby: ["Ronse", "Oudenaarde", "Avelgem", "Wortegem-Petegem"],
    localContext: "prachtige streek in de Vlaamse Ardennen met focus op esthetische en duurzame woningrenovaties",
    propertyFocus: "vrijstaande woningen, villa's en karakterpanden",
    priority: 0.84,
  },
];


export const localSeoServices: LocalSeoService[] = [
  {
    slug: "renovatie",
    name: "Renovatie",
    hubPath: "/renovatie",
    detailPath: "/diensten/renovatie",
    detailLabel: "Bekijk onze renovatie-aanpak",
    hubTitle: "Renovatie in Geraardsbergen en regio",
    hubDescription:
      "Lokale renovatiepagina's voor Geraardsbergen, Ninove, Ronse, Zottegem, Brakel, Herzele, Aalst en meer. Focus op renovatie, gevelwerken, ramen en totaalprojecten in de Vlaamse Ardennen en Denderstreek.",
    hubIntro: [
      "Yannova bouwt een consistente lokale SEO-structuur uit rond renovatie in de sterkste gemeenten van de Vlaamse Ardennen (Geraardsbergen, Ninove, Ronse, Zottegem) en de Denderstreek (Aalst, Denderleeuw, Haaltert). Elke pagina koppelt renovatie aan concrete wooncontext, omliggende deelgemeenten en relevante interne links.",
      "Dat maakt de site duidelijker voor Google en sterker voor bezoekers die zoeken op combinaties zoals renovatie Geraardsbergen, aannemer Ninove, renovatiebedrijf Ronse of renovatie Aalst.",
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
    hubTitle: "Ramen en deuren in Geraardsbergen en regio",
    hubDescription:
      "Lokale landingspagina's voor ramen en deuren in Geraardsbergen, Ninove, Ronse, Zottegem, Brakel, Herzele en de Denderstreek. Gericht op PVC, aluminium, hoogrendementsbeglazing en nette plaatsing.",
    hubIntro: [
      "Met deze hub bundelt Yannova de lokale pagina's voor ramen en deuren in de Vlaamse Ardennen (Geraardsbergen, Ninove, Ronse) en de Denderstreek (Aalst, Denderleeuw, Haaltert). Elke stadspagina focust op plaatsing, isolatie, veiligheid en de koppeling met andere renovatiewerken.",
      "Zo ontstaat een duidelijke SEO-structuur rond termen als ramen Geraardsbergen, ramen vervangen Ninove, buitenschrijnwerk Ronse of buitenschrijnwerk Aalst.",
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
    hubTitle: "Gevelrenovatie in Geraardsbergen en regio",
    hubDescription:
      "Lokale SEO-pagina's voor gevelrenovatie in Geraardsbergen, Ninove, Ronse, Zottegem, Brakel, Herzele en de Denderstreek. Gericht op gevelherstel, isolatie, crepi en duurzame buitenafwerking.",
    hubIntro: [
      "De gevel is vaak de eerste winst bij een renovatie. Deze hub groepeert lokale pagina's rond gevelrenovatie voor gemeenten in de Vlaamse Ardennen (Geraardsbergen, Ninove, Ronse, Zottegem) en de Denderstreek (Aalst, Herzele, Haaltert).",
      "Per stadspagina koppelen we gevelrenovatie aan de lokale woningvoorraad, omliggende buurten en de link met ramen, isolatie en totaalrenovatie. Zo ondersteunen we zoekopdrachten als gevelrenovatie Geraardsbergen, crepi Ninove of gevelisolatie Ronse.",
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
    hubTitle: "Crepi gevels in Geraardsbergen en regio",
    hubDescription:
      "Gerichte lokale pagina's voor crepi gevelafwerking in Geraardsbergen, Ninove, Ronse, Brakel en de Denderstreek. Focus op strakke afwerking, kleurkeuze, isolatie en onderhoudsarme gevels.",
    hubIntro: [
      "Crepi wordt vaak afzonderlijk gezocht, los van het bredere begrip gevelrenovatie. Daarom krijgt crepi hier een eigen lokale SEO-structuur met expliciete stadspagina's voor de Vlaamse Ardennen en Denderstreek.",
      "Die pagina's ondersteunen zoekopdrachten zoals crepi gevel Geraardsbergen, crepi Ninove, gevelbepleistering Ronse of crepi Brakel en linken tegelijk slim door naar gevelrenovatie en totaalrenovatie.",
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
    hubTitle: "Totaalrenovatie in Geraardsbergen en regio",
    hubDescription:
      "Lokale SEO-pagina's voor totaalrenovatie in Geraardsbergen, Ninove, Ronse, Zottegem, Brakel en de Denderstreek. Focus op coördinatie, planning en één vast aanspreekpunt van start tot oplevering.",
    hubIntro: [
      "Totaalrenovatie vraagt meer dan losse aannemingswerken. Deze hub zet in op lokale pagina's die het volledige traject uitleggen voor gemeenten in de Vlaamse Ardennen en de Denderstreek.",
      "Zo worden zoektermen zoals totaalrenovatie Geraardsbergen, totaalrenovatie Ninove, renovatiebedrijf Ronse of totaalrenovatie Aalst beter ondersteund door duidelijke landingspagina's en interne links.",
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
  {
    slug: "ramen",
    name: "Ramen",
    hubPath: "/ramen",
    detailPath: "/diensten/ramen-deuren",
    detailLabel: "Bekijk onze ramen",
    hubTitle: "Ramen in Geraardsbergen en regio",
    hubDescription:
      "Vakkundige plaatsing en vervanging van PVC en aluminium ramen door Yannova. Specialist in Geraardsbergen, Ninove, Ronse en Antwerpen.",
    hubIntro: [
      "Nieuwe ramen nodig voor uw woning? Bij Yannova kiest u voor topkwaliteit, perfecte isolatie en een vlekkeloze afwerking.",
      "Wij begeleiden u van gratis opmeting tot de complete montage en afwerking van uw nieuwe PVC of aluminium ramen.",
    ],
    benefits: [
      "PVC en aluminium profielen tot 7 kamers",
      "Standaard hoogrendementsglas (HR++) of triple glas",
      "Luchtdichte montage en gevelintegratie",
      "10 tot 30 jaar garantie op profielen",
    ],
    deliverables: ["PVC en aluminium ramen", "hoogrendementsglas", "schuiframen op maat", "perfecte aansluiting op gevelisolatie"],
    focusSentence:
      "Wij plaatsen ramen die uitmuntend isoleren en esthetisch perfect bij uw woning passen.",
    priceCue: "afhankelijk van aantal openingen, materiaal, beglazing en afwerking",
    timeline: "1 tot 3 plaatsingsdagen na opmeting en productie",
    keywordRoots: ["ramen", "ramen vervangen", "nieuwe ramen", "ramen plaatsen"],
    extraKeywords: ["pvc ramen", "aluminium ramen", "triple glas", "ramen specialist"],
    getCityTitle: (city) => `Ramen ${city} | Ramen Vervangen & Plaatsen | Yannova`,
    getCityDescription: (city) =>
      `Ramen in ${city} vervangen? Yannova is specialist in PVC en aluminium ramen met HR++ isolatieglas. Verlaag uw energiefactuur. Vraag een offerte!`,
    getCityHeading: (city) => `Ramen in ${city} laten vervangen of plaatsen`,
  },
  {
    slug: "deuren",
    name: "Deuren",
    hubPath: "/deuren",
    detailPath: "/diensten/ramen-deuren",
    detailLabel: "Bekijk onze deuren",
    hubTitle: "Deuren in Geraardsbergen en regio",
    hubDescription:
      "Kwalitatieve en veilige voor- en achterdeuren in PVC en aluminium door Yannova. Ontdek ons aanbod in Geraardsbergen, Ninove en Antwerpen.",
    hubIntro: [
      "Een voordeur is het visitekaartje van uw woning. Bij Yannova leveren en plaatsen we veilige, stijlvolle en perfect isolerende deuren.",
      "Of het nu gaat om een moderne aluminium voordeur of een praktische achterdeur: wij maken alles op maat.",
    ],
    benefits: [
      "Maximale inbraakveiligheid met driepuntssluiting",
      "Uitstekende thermische en akoestische isolatie",
      "PVC en aluminium deuren op maat",
      "Keuze uit honderden RAL-kleuren en designs",
    ],
    deliverables: ["aluminium voordeuren", "PVC buitendeuren", "schuifdeuren", "inbraakveilig beslag en cilinders"],
    focusSentence:
      "Wij plaatsen deuren die uw woning beveiligen en een prachtige uitstraling geven.",
    priceCue: "afhankelijk van afmetingen, deursysteem, materiaal en beslag",
    timeline: "meestal 1 dag voor demontage en montage",
    keywordRoots: ["deuren", "deuren plaatsen", "nieuwe deuren", "voordeur"],
    extraKeywords: ["buitendeuren", "pvc deuren", "aluminium deuren", "schuifdeur"],
    getCityTitle: (city) => `Deuren ${city} | Buitendeuren & Binnendeuren | Yannova`,
    getCityDescription: (city) =>
      `Nieuwe deuren in ${city}? Wij plaatsen kwalitatieve en veilige voor- en achterdeuren in PVC en aluminium. Ontdek ons aanbod en vraag een offerte.`,
    getCityHeading: (city) => `Deuren in ${city} laten plaatsen`,
  },
  {
    slug: "crepi",
    name: "Crepi",
    hubPath: "/crepi-gevel",
    detailPath: "/diensten/gevelrenovatie",
    detailLabel: "Meer over crepi gevels",
    hubTitle: "Crepi gevels in Geraardsbergen en regio",
    hubDescription:
      "Crepi gevelafwerking met isolatie door Yannova. Specialist in gevelbepleistering in Geraardsbergen, Ninove, Ronse en Antwerpen.",
    hubIntro: [
      "Crepi is de ideale afwerking voor een moderne en energiezuinige gevel. Yannova brengt siliconenharspleister vakkundig aan.",
      "U kunt crepi perfect combineren met hoogwaardige gevelisolatie om uw EPC-score drastisch te verbeteren.",
    ],
    benefits: [
      "Siliconenharspleister (crepi) is zelfreinigend",
      "Naadloze isolatieschil elimineert koudebruggen",
      "Keuze uit honderden kleurvaste afwerkingen",
      "10 jaar garantie op de gevelbepleistering",
    ],
    deliverables: ["siliconen crepi", "gevelisolatie (EPS/minerale wol)", "kleuradvies op maat", "technische detailafwerking rond ramen en plinten"],
    focusSentence:
      "Wij geven uw gevel een strakke, moderne uitstraling and verlagen uw energiefactuur.",
    priceCue: "afhankelijk van oppervlakte, isolatiedikte, hoeken en eventueel stellingwerk",
    timeline: "meestal 1 tot 2 weken afhankelijk van het weer",
    keywordRoots: ["crepi", "crepi gevel", "gevelbepleistering", "sierpleister"],
    extraKeywords: ["gevelisolatie", "crepi afwerking", "buitengevel"],
    getCityTitle: (city) => `Crepi ${city} | Gevelbepleistering & Gevelisolatie | Yannova`,
    getCityDescription: (city) =>
      `Crepi in ${city}? Yannova is specialist in gevelbepleistering, crepi en gevelisolatie. Vernieuw uw gevel en bespaar op energie. Vraag direct uw offerte aan.`,
    getCityHeading: (city) => `Crepi gevel in ${city} laten plaatsen`,
  },
  {
    slug: "gevelisolatie",
    name: "Gevelisolatie",
    hubPath: "/gevelisolatie-crepi",
    detailPath: "/diensten/gevelrenovatie",
    detailLabel: "Meer over gevelisolatie",
    hubTitle: "Gevelisolatie in Geraardsbergen en regio",
    hubDescription:
      "Buitengevelisolatie door Yannova. Verbeter uw EPC-label en bespaar tot 30% op energiekosten in Geraardsbergen, Ninove, Ronse en Antwerpen.",
    hubIntro: [
      "Met hoogwaardige gevelisolatie verpakt u uw woning in een warme deken. Dit verhoogt uw comfort en verlaagt uw energiekosten.",
      "Gevelisolatie wordt door Yannova doorgaans afgewerkt met crepi of steenstrips, EPB-conform voor subsidies.",
    ],
    benefits: [
      "Bespaar tot 30% op uw verwarmingskosten",
      "Eliminatie van condensatie en koudebruggen",
      "Mijn VerbouwPremie en subsidies mogelijk",
      "Directe waardestijging van uw vastgoed",
    ],
    deliverables: ["buitengevelisolatie (EPS/minerale wol)", "crepi of steenstrips afwerking", "attesten voor premie-aanvragen", "volledige EPB-conformiteit"],
    focusSentence:
      "Wij isoleren uw buitenschil vakkundig zodat uw woning voldoet aan de strengste energienormen.",
    priceCue: "afhankelijk van de te isoleren oppervlakte en gewenste afwerking",
    timeline: "meestal 1 tot 3 weken inclusief gevelafwerking",
    keywordRoots: ["gevelisolatie", "gevel isoleren", "buitenmuur isoleren", "epc verbeteren"],
    extraKeywords: ["buitenisolatie", "eps isolatieplaten", "gevelrenovatie met isolatie"],
    getCityTitle: (city) => `Gevelisolatie ${city} | EPC Verbeteren & Premies | Yannova`,
    getCityDescription: (city) =>
      `Gevelisolatie in ${city}? Verbeter uw EPC-label en bespaar tot 30% op energiekosten. Premies via Mijn VerbouwPremie mogelijk. Vraag nu een offerte.`,
    getCityHeading: (city) => `Gevelisolatie in ${city} laten uitvoeren`,
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
  if (serviceSlug === "ramen-deuren" || serviceSlug === "crepi-gevel") {
    return `/${serviceSlug}-${citySlug}`;
  }
  return `/${serviceSlug}/${citySlug}`;
}

export function getLocalSeoPageSlugs() {
  return localSeoServices.flatMap((service) =>
    priorityCities.map((city) => `${service.slug}-${city.slug}`),
  );
}

export function getServiceHubLinks(): LocalSeoLink[] {
  const seenHrefs = new Set<string>();
  const links: LocalSeoLink[] = [];
  for (const service of localSeoServices) {
    if (!seenHrefs.has(service.hubPath)) {
      seenHrefs.add(service.hubPath);
      links.push({
        label: service.name,
        href: service.hubPath,
        description: `${service.name} in Geraardsbergen en de Vlaamse Ardennen`,
      });
    }
  }
  return links;
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
      answer: `Nee. Yannova werkt naast ${city.name} ook in ${city.nearby.join(", ")} en andere gemeenten in de regio. Ons werkgebied omvat de volledige Vlaamse Ardennen en Denderstreek rond Geraardsbergen.`,
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

export function getLocalSeoPageData(serviceSlug: LocalSeoService["slug"], citySlug: string): LocalSeoPageData | null {
  const service = getLocalSeoService(serviceSlug);
  const city = getLocalSeoCity(citySlug);

  if (!service || !city) {
    return null;
  }

  const sameCityPages = getSameCityPages(city, service.slug);
  const sameServicePages = getSameServicePages(service, city.slug);

  return {
    slug: `${service.slug}-${city.slug}`,
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
    areaParagraph: `${city.name} is voor Yannova een strategisch werkgebied. We zijn ook actief in ${city.nearby.join(", ")} en andere buurten waar ${city.propertyFocus} sterk vertegenwoordigd zijn.`,
    faqs: buildFaqs(service, city),
    city,
    service,
    sameCityPages,
    sameServicePages,
    serviceHubLinks: getServiceHubLinks(),
  };
}

export function getLocalSeoPageBySlug(seoSlug: string): LocalSeoPageData | null {
  const parsed = parseLocalSeoSlug(seoSlug);
  if (!parsed) {
    return null;
  }
  return getLocalSeoPageData(parsed.service.slug, parsed.city.slug);
}
