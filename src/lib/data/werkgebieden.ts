export const werkgebieden: Record<string, { name: string; description: string; distance: string; features: string[]; neighborhoods?: string[] }> = {
  zoersel: {
    name: "Zoersel",
    description: "Onze thuisbasis. Vanuit Zoersel bedienen we de volledige regio met ramen, deuren en renovatiewerken.",
    distance: "0 km",
    features: [
      "Gratis opmeting aan huis",
      "Same-day service mogelijk",
      "Lokale kennis en ervaring",
      "Referenties in de buurt",
    ],
  },
  antwerpen: {
    name: "Antwerpen",
    description: "Actief in heel Antwerpen stad en alle deelgemeenten. Van centrum tot rand, wij staan voor u klaar.",
    distance: "20 km",
    neighborhoods: ["Centrum", "Berchem", "Deurne", "Merksem", "Wilrijk", "Ekeren", "Hoboken", "Borgerhout"],
    features: [
      "Dekking heel Antwerpen",
      "Stadsprojecten en appartementen",
      "Ervaring met stadspanden",
      "Erkend voor Vlaamse premies",
    ],
  },
  berchem: {
    name: "Berchem",
    description: "Specialist in ramen en deuren in Berchem. Wij kennen de wijk en hebben al tientallen projecten gerealiseerd.",
    distance: "18 km",
    features: [
      "Lokale expertise in Berchem",
      "Snelle service en korte wachttijden",
      "Referenties in de buurt",
      "Premie-advies voor Antwerpen",
    ],
  },
  deurne: {
    name: "Deurne",
    description: "Ramen, deuren en gevelrenovatie in Deurne. Van klassieke rijwoningen tot moderne nieuwbouw.",
    distance: "22 km",
    features: [
      "Uitgebreide ervaring in Deurne",
      "Focus op energiezuinige oplossingen",
      "Gratis en vrijblijvend advies",
      "Vlotte bereikbaarheid",
    ],
  },
  merksem: {
    name: "Merksem",
    description: "Uw partner voor renovatie in Merksem. Wij bieden een totaaloplossing voor uw woning.",
    distance: "25 km",
    features: [
      "Totaalrenovaties van A tot Z",
      "Gevelrenovatie en isolatie",
      "Plaatsing van ramen en deuren",
      "Duidelijke planning en communicatie",
    ],
  },
  wilrijk: {
    name: "Wilrijk",
    description: "Ramen, deuren en meer in Wilrijk. Profiteer van onze expertise en lokale aanpak.",
    distance: "24 km",
    features: [
      "Maatwerk voor elke woning",
      "Hoogwaardige materialen (PVC, alu)",
      "Deskundig advies over premies",
      "Perfecte afwerking gegarandeerd",
    ],
  },
  brasschaat: {
    name: "Brasschaat",
    description: "Exclusieve ramen en deuren voor uw woning in Brasschaat. Kwaliteit en esthetiek staan voorop.",
    distance: "15 km",
    features: [
      "Premium merken en materialen",
      "Focus op design en esthetiek",
      "Begeleiding van A tot Z",
      "Perfecte integratie met uw woning",
    ],
  },
  schoten: {
    name: "Schoten",
    description: "Renovatie en nieuwbouw in Schoten. Wij realiseren uw droomproject met oog voor detail.",
    distance: "18 km",
    features: [
      "Ervaring met diverse stijlen",
      "Energiezuinige oplossingen",
      "Vast team van vakmensen",
      "Heldere afspraken en budget",
    ],
  },
  wijnegem: {
    name: "Wijnegem",
    description: "Ramen, deuren en renovaties in Wijnegem. Vertrouw op onze expertise voor een vlekkeloos resultaat.",
    distance: "12 km",
    features: [
      "Lokale, betrouwbare aannemer",
      "Advies op maat van uw project",
      "Kwaliteit en duurzaamheid",
      "Uitstekende service na verkoop",
    ],
  },
};
