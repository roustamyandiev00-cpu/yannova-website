// Lijst van alle lokale pagina&apos;s die we moeten maken voor SEO
export const lokalePaginas = [
  // Ramen pagina&apos;s
  { type: 'ramen', gemeente: 'antwerpen', naam: 'Antwerpen', priority: 0.9 },
  { type: 'ramen', gemeente: 'berchem', naam: 'Berchem', priority: 0.85 },
  { type: 'ramen', gemeente: 'deurne', naam: 'Deurne', priority: 0.85 },
  { type: 'ramen', gemeente: 'merksem', naam: 'Merksem', priority: 0.85 },
  { type: 'ramen', gemeente: 'wilrijk', naam: 'Wilrijk', priority: 0.85 },
  { type: 'ramen', gemeente: 'brasschaat', naam: 'Brasschaat', priority: 0.8 },
  { type: 'ramen', gemeente: 'schoten', naam: 'Schoten', priority: 0.8 },
  { type: 'ramen', gemeente: 'wijnegem', naam: 'Wijnegem', priority: 0.8 },
  { type: 'ramen', gemeente: 'schilde', naam: 'Schilde', priority: 0.8 },
  { type: 'ramen', gemeente: 'mortsel', naam: 'Mortsel', priority: 0.8 },
  { type: 'ramen', gemeente: 'edegem', naam: 'Edegem', priority: 0.8 },
  { type: 'ramen', gemeente: 'kontich', naam: 'Kontich', priority: 0.8 },
  { type: 'ramen', gemeente: 'zoersel', naam: 'Zoersel', priority: 0.75 },
  { type: 'ramen', gemeente: 'mechelen', naam: 'Mechelen', priority: 0.75 },
  { type: 'ramen', gemeente: 'lier', naam: 'Lier', priority: 0.75 },
  
  // Deuren pagina&apos;s
  { type: 'deuren', gemeente: 'antwerpen', naam: 'Antwerpen', priority: 0.9 },
  { type: 'deuren', gemeente: 'berchem', naam: 'Berchem', priority: 0.85 },
  { type: 'deuren', gemeente: 'deurne', naam: 'Deurne', priority: 0.85 },
  { type: 'deuren', gemeente: 'merksem', naam: 'Merksem', priority: 0.85 },
  { type: 'deuren', gemeente: 'wilrijk', naam: 'Wilrijk', priority: 0.85 },
  { type: 'deuren', gemeente: 'brasschaat', naam: 'Brasschaat', priority: 0.8 },
  { type: 'deuren', gemeente: 'schoten', naam: 'Schoten', priority: 0.8 },
  { type: 'deuren', gemeente: 'wijnegem', naam: 'Wijnegem', priority: 0.8 },
  { type: 'deuren', gemeente: 'zoersel', naam: 'Zoersel', priority: 0.75 },
  
  // Gevelrenovatie / Crepi pagina&apos;s
  { type: 'gevelrenovatie', gemeente: 'antwerpen', naam: 'Antwerpen', priority: 0.85 },
  { type: 'gevelrenovatie', gemeente: 'berchem', naam: 'Berchem', priority: 0.8 },
  { type: 'gevelrenovatie', gemeente: 'deurne', naam: 'Deurne', priority: 0.8 },
  { type: 'gevelrenovatie', gemeente: 'merksem', naam: 'Merksem', priority: 0.8 },
  { type: 'gevelrenovatie', gemeente: 'wilrijk', naam: 'Wilrijk', priority: 0.8 },
  
  { type: 'crepi', gemeente: 'antwerpen', naam: 'Antwerpen', priority: 0.85 },
  { type: 'crepi', gemeente: 'berchem', naam: 'Berchem', priority: 0.8 },
  { type: 'crepi', gemeente: 'schoten', naam: 'Schoten', priority: 0.8 },
  
  // Gevelisolatie pagina&apos;s
  { type: 'gevelisolatie', gemeente: 'antwerpen', naam: 'Antwerpen', priority: 0.85 },
  { type: 'gevelisolatie', gemeente: 'berchem', naam: 'Berchem', priority: 0.8 },
  { type: 'gevelisolatie', gemeente: 'deurne', naam: 'Deurne', priority: 0.8 },
  
  // Renovatie pagina&apos;s
  { type: 'renovatie', gemeente: 'antwerpen', naam: 'Antwerpen', priority: 0.85 },
  { type: 'renovatie', gemeente: 'berchem', naam: 'Berchem', priority: 0.8 },
  { type: 'renovatie', gemeente: 'deurne', naam: 'Deurne', priority: 0.8 },
  { type: 'renovatie', gemeente: 'merksem', naam: 'Merksem', priority: 0.8 },
  
  // Renovatiebedrijf pagina&apos;s
  { type: 'renovatiebedrijf', gemeente: 'antwerpen', naam: 'Antwerpen', priority: 0.85 },
  { type: 'renovatiebedrijf', gemeente: 'berchem', naam: 'Berchem', priority: 0.8 },
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
