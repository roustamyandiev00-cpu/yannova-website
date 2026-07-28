// Lijst van alle lokale pagina's die we moeten maken voor SEO
export const lokalePaginas = [
  // Ramen pagina's
  { type: 'ramen', gemeente: 'geraardsbergen', naam: 'Geraardsbergen', priority: 1.0 },
  { type: 'ramen', gemeente: 'ninove', naam: 'Ninove', priority: 0.95 },
  { type: 'ramen', gemeente: 'zottegem', naam: 'Zottegem', priority: 0.93 },
  { type: 'ramen', gemeente: 'ronse', naam: 'Ronse', priority: 0.92 },
  { type: 'ramen', gemeente: 'brakel', naam: 'Brakel', priority: 0.9 },
  { type: 'ramen', gemeente: 'lierde', naam: 'Lierde', priority: 0.9 },
  { type: 'ramen', gemeente: 'herzele', naam: 'Herzele', priority: 0.88 },
  { type: 'ramen', gemeente: 'aalst', naam: 'Aalst', priority: 0.93 },
  
  // Deuren pagina's
  { type: 'deuren', gemeente: 'geraardsbergen', naam: 'Geraardsbergen', priority: 1.0 },
  { type: 'deuren', gemeente: 'ninove', naam: 'Ninove', priority: 0.95 },
  { type: 'deuren', gemeente: 'zottegem', naam: 'Zottegem', priority: 0.93 },
  { type: 'deuren', gemeente: 'ronse', naam: 'Ronse', priority: 0.92 },
  { type: 'deuren', gemeente: 'brakel', naam: 'Brakel', priority: 0.9 },
  { type: 'deuren', gemeente: 'lierde', naam: 'Lierde', priority: 0.9 },
  { type: 'deuren', gemeente: 'aalst', naam: 'Aalst', priority: 0.93 },
  
  // Gevelrenovatie / Crepi pagina's
  { type: 'gevelrenovatie', gemeente: 'geraardsbergen', naam: 'Geraardsbergen', priority: 1.0 },
  { type: 'gevelrenovatie', gemeente: 'ninove', naam: 'Ninove', priority: 0.95 },
  { type: 'gevelrenovatie', gemeente: 'zottegem', naam: 'Zottegem', priority: 0.93 },
  { type: 'gevelrenovatie', gemeente: 'ronse', naam: 'Ronse', priority: 0.92 },
  { type: 'gevelrenovatie', gemeente: 'brakel', naam: 'Brakel', priority: 0.9 },
  
  { type: 'crepi', gemeente: 'geraardsbergen', naam: 'Geraardsbergen', priority: 1.0 },
  { type: 'crepi', gemeente: 'ninove', naam: 'Ninove', priority: 0.95 },
  { type: 'crepi', gemeente: 'zottegem', naam: 'Zottegem', priority: 0.93 },
  
  // Gevelisolatie pagina's
  { type: 'gevelisolatie', gemeente: 'geraardsbergen', naam: 'Geraardsbergen', priority: 1.0 },
  { type: 'gevelisolatie', gemeente: 'ninove', naam: 'Ninove', priority: 0.95 },
  { type: 'gevelisolatie', gemeente: 'zottegem', naam: 'Zottegem', priority: 0.93 },
  
  // Renovatie pagina's
  { type: 'renovatie', gemeente: 'geraardsbergen', naam: 'Geraardsbergen', priority: 1.0 },
  { type: 'renovatie', gemeente: 'ninove', naam: 'Ninove', priority: 0.95 },
  { type: 'renovatie', gemeente: 'zottegem', naam: 'Zottegem', priority: 0.93 },
  { type: 'renovatie', gemeente: 'ronse', naam: 'Ronse', priority: 0.92 },
  
  // Renovatiebedrijf pagina's
  { type: 'renovatiebedrijf', gemeente: 'geraardsbergen', naam: 'Geraardsbergen', priority: 1.0 },
  { type: 'renovatiebedrijf', gemeente: 'ninove', naam: 'Ninove', priority: 0.95 },
];

// Content templates per type
export const contentTemplates = {
  ramen: {
    title: (gemeente: string) => `Ramen Plaatsen ${gemeente} | PVC & Aluminium Ramen | Yannova`,
    description: (gemeente: string) => `Nieuwe ramen in ${gemeente}? Specialist in PVC en aluminium ramen met HR++ glas. Gratis opmeting en offerte binnen 24 uur. 15+ jaar ervaring in ${gemeente} en omgeving.`,
    h1: (gemeente: string) => `Ramen Plaatsen in ${gemeente}`,
    intro: (gemeente: string) => `Op zoek naar nieuwe ramen in ${gemeente}? Yannova is uw specialist voor het plaatsen van hoogwaardige PVC en aluminium ramen. Met meer dan 15 jaar ervaring in ${gemeente} en omgeving, zorgen wij voor een professionele plaatsing met minimale overlast.`,
    keywords: (gemeente: string) => [
      `ramen ${gemeente.toLowerCase()}`,
      `ramen plaatsen ${gemeente.toLowerCase()}`,
      `nieuwe ramen ${gemeente.toLowerCase()}`,
      `pvc ramen ${gemeente.toLowerCase()}`,
      `aluminium ramen ${gemeente.toLowerCase()}`,
      `ramen vervangen ${gemeente.toLowerCase()}`,
      `energiezuinige ramen ${gemeente.toLowerCase()}`,
    ],
  },
  deuren: {
    title: (gemeente: string) => `Deuren Plaatsen ${gemeente} | Voor- & Achterdeuren | Yannova`,
    description: (gemeente: string) => `Nieuwe deuren in ${gemeente}? Specialist in PVC en aluminium deuren. Voordeuren, achterdeuren en schuifdeuren. Gratis opmeting en offerte binnen 24 uur.`,
    h1: (gemeente: string) => `Deuren Plaatsen in ${gemeente}`,
    intro: (gemeente: string) => `Nieuwe deuren nodig in ${gemeente}? Yannova plaatst hoogwaardige PVC en aluminium deuren voor particulieren en bedrijven. Van voordeuren tot schuifdeuren - wij verzorgen de volledige plaatsing in ${gemeente} en omgeving.`,
    keywords: (gemeente: string) => [
      `deuren ${gemeente.toLowerCase()}`,
      `deuren plaatsen ${gemeente.toLowerCase()}`,
      `voordeur ${gemeente.toLowerCase()}`,
      `achterdeur ${gemeente.toLowerCase()}`,
      `schuifdeuren ${gemeente.toLowerCase()}`,
      `nieuwe deuren ${gemeente.toLowerCase()}`,
    ],
  },
  gevelrenovatie: {
    title: (gemeente: string) => `Gevelrenovatie ${gemeente} | Isolatie & Crepi | Yannova`,
    description: (gemeente: string) => `Gevelrenovatie in ${gemeente}? Specialist in gevelisolatie met crepi-afwerking. Verbeter uw EPC-label en bespaar energie. Gratis offerte binnen 24 uur.`,
    h1: (gemeente: string) => `Gevelrenovatie in ${gemeente}`,
    intro: (gemeente: string) => `Gevelrenovatie nodig in ${gemeente}? Yannova is uw specialist voor professionele gevelisolatie met crepi-afwerking. Wij verbeteren uw EPC-label en zorgen voor een energiezuinige woning in ${gemeente}.`,
    keywords: (gemeente: string) => [
      `gevelrenovatie ${gemeente.toLowerCase()}`,
      `gevel renoveren ${gemeente.toLowerCase()}`,
      `gevelisolatie ${gemeente.toLowerCase()}`,
      `crepi ${gemeente.toLowerCase()}`,
      `gevel isoleren ${gemeente.toLowerCase()}`,
    ],
  },
  crepi: {
    title: (gemeente: string) => `Crepi Gevel ${gemeente} | Gevelisolatie met Crepi | Yannova`,
    description: (gemeente: string) => `Crepi gevel in ${gemeente}? Specialist in gevelisolatie met crepi-afwerking. Duurzaam, energiezuinig en onderhoudsarm. Gratis offerte binnen 24 uur.`,
    h1: (gemeente: string) => `Crepi Gevel in ${gemeente}`,
    intro: (gemeente: string) => `Crepi gevel nodig in ${gemeente}? Yannova brengt professionele crepi aan op uw gevel, gecombineerd met isolatie voor maximale energiebesparing. Actief in ${gemeente} en omgeving.`,
    keywords: (gemeente: string) => [
      `crepi ${gemeente.toLowerCase()}`,
      `crepi gevel ${gemeente.toLowerCase()}`,
      `gevelbepleistering ${gemeente.toLowerCase()}`,
      `crepi aanbrengen ${gemeente.toLowerCase()}`,
    ],
  },
  gevelisolatie: {
    title: (gemeente: string) => `Gevelisolatie ${gemeente} | EPC Verbeteren | Yannova`,
    description: (gemeente: string) => `Gevelisolatie in ${gemeente}? Verbeter uw EPC-label en bespaar tot 30% op energiekosten. Premies mogelijk. Gratis offerte binnen 24 uur.`,
    h1: (gemeente: string) => `Gevelisolatie in ${gemeente}`,
    intro: (gemeente: string) => `Gevelisolatie in ${gemeente}? Yannova isoleert uw gevel professioneel voor maximale energiebesparing. Verbeter uw EPC-label en profiteer van premies via Mijn VerbouwPremie.`,
    keywords: (gemeente: string) => [
      `gevelisolatie ${gemeente.toLowerCase()}`,
      `gevel isoleren ${gemeente.toLowerCase()}`,
      `buitenisolatie ${gemeente.toLowerCase()}`,
      `epc verbeteren ${gemeente.toLowerCase()}`,
    ],
  },
  renovatie: {
    title: (gemeente: string) => `Renovatie ${gemeente} | Totaalrenovatie & Verbouwing | Yannova`,
    description: (gemeente: string) => `Renovatie in ${gemeente}? Specialist in totaalrenovaties en verbouwingen. Van ramen tot gevel - alles onder één dak. Gratis offerte binnen 24 uur.`,
    h1: (gemeente: string) => `Renovatie in ${gemeente}`,
    intro: (gemeente: string) => `Renovatie gepland in ${gemeente}? Yannova begeleidt u van A tot Z bij uw renovatieproject. Ramen, deuren, gevel, isolatie - wij verzorgen alles in ${gemeente} en omgeving.`,
    keywords: (gemeente: string) => [
      `renovatie ${gemeente.toLowerCase()}`,
      `totaalrenovatie ${gemeente.toLowerCase()}`,
      `verbouwing ${gemeente.toLowerCase()}`,
      `woning renoveren ${gemeente.toLowerCase()}`,
    ],
  },
  renovatiebedrijf: {
    title: (gemeente: string) => `Renovatiebedrijf ${gemeente} | Aannemer voor Renovatie | Yannova`,
    description: (gemeente: string) => `Betrouwbaar renovatiebedrijf in ${gemeente}. 15+ jaar ervaring in renovaties, ramen, deuren en gevelwerken. Gratis offerte binnen 24 uur.`,
    h1: (gemeente: string) => `Renovatiebedrijf in ${gemeente}`,
    intro: (gemeente: string) => `Op zoek naar een betrouwbaar renovatiebedrijf in ${gemeente}? Yannova heeft meer dan 15 jaar ervaring in renovaties, ramen, deuren en gevelwerken in ${gemeente} en omgeving.`,
    keywords: (gemeente: string) => [
      `renovatiebedrijf ${gemeente.toLowerCase()}`,
      `aannemer ${gemeente.toLowerCase()}`,
      `bouwbedrijf ${gemeente.toLowerCase()}`,
      `renovatie aannemer ${gemeente.toLowerCase()}`,
    ],
  },
};
