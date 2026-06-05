import type { LocalSeoService } from "@/lib/data/local-seo";

export interface BlogSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
  serviceTags: LocalSeoService["slug"][];
  cityTags?: string[];
  dynamic?: boolean;
  intro?: string;
  keyPoints?: string[];
  sections?: BlogSection[];
  ctaTitle?: string;
  ctaText?: string;
  relatedSlugs?: string[];
  howtoSteps?: Array<{ name: string; text: string }>;
}

export const blogPosts: BlogPostData[] = [
  {
    slug: "wat-is-hr-glas-en-waarom-belangrijk",
    title: "Wat is HR++ glas en waarom is het belangrijk?",
    excerpt: "Alles over HR++ glas: de werking, isolatiewaarde, prijs, terugverdientijd en waarom het de beste keuze is voor jouw renovatie.",
    description: "Wat is HR++ glas? Ontdek de voordelen, isolatiewaarden (U-waarde), prijzen en besparing van hoogrendementsglas voor ramen in Antwerpen en omgeving.",
    date: "2026-06-05",
    readTime: "6 min",
    category: "Besparing",
    keywords: ["wat is hr++ glas", "hr++ glas isolatiewaarde", "hoogrendementsglas", "hr++ glas prijs", "ramen isoleren"],
    serviceTags: ["ramen-deuren"],
    dynamic: true,
    intro:
      "Bij het vervangen van je ramen hoor je de term 'HR++ glas' voortdurend vallen. Maar wat is HR++ glas nu precies, hoe verschilt het van standaard dubbel of driedubbel glas, en waarom is het zo'n belangrijke investering voor je woning? In deze gids leggen we de werking, isolatiewaarden, kosten en premies van hoogrendementsglas haarfijn uit.",
    keyPoints: [
      "HR++ glas isoleert tot 5 keer beter dan enkel glas en 2,5 keer beter dan oud dubbel glas.",
      "Dankzij een edelgasvulling (argon) en een onzichtbare metaalcoating wordt warmte effectief binnengehouden.",
      "De gemiddelde U-waarde van HR++ glas ligt rond de 1,1 W/m²K.",
      "Met Mijn VerbouwPremie kun je in Vlaanderen een aanzienlijk deel van de investering terugkrijgen.",
    ],
    sections: [
      {
        title: "Wat is HR++ glas precies?",
        paragraphs: [
          "HR++ staat voor Hoog Rendement glas van de second-generation. In tegenstelling to traditioneel dubbel glas, dat enkel gevuld is met droge lucht, bevindt er zich tussen de twee glasplaten van HR++ glas een edelgas, meestal argon. Edelgas geleidt warmte veel slechter dan lucht, waardoor de isolatiewaarde drastisch verbetert.",
          "Daarnaast is de binnenzijde van een van de glasbladen voorzien van een flinterdun, onzichtbaar metaalcoating-laagje. Deze coating laat het zonlicht (en dus de gratis zonnewarmte) wel naar binnen, maar reflecteert de langgolvige warmtestraling van je verwarming terug de kamer in. Hierdoor blijft je woning in de winter behaaglijk warm en in de zomer langer koel.",
        ],
      },
      {
        title: "Isolatiewaarden vergeleken: de U-waarde",
        paragraphs: [
          "De isolatiekracht van glas wordt uitgedrukt in de U-waarde (warmtedoorgangscoëfficiënt). Hoe lager deze U-waarde, hoe beter het glas isoleert. Hieronder zie je het enorme verschil tussen de verschillende glastypes:",
        ],
        bullets: [
          "Enkel glas: U-waarde van ca. 5,8 W/m²K (vrijwel geen isolatie)",
          "Standaard dubbel glas (oud): U-waarde van ca. 2,8 W/m²K",
          "HR+ glas: U-waarde van ca. 1,6 W/m²K",
          "HR++ glas: U-waarde van ca. 1,1 W/m²K (de huidige standaard)",
          "HR+++ glas (driedubbel glas): U-waarde van ca. 0,6 W/m²K (voor passiefhuizen)",
        ],
      },
      {
        title: "Waarom is HR++ glas belangrijk voor jouw woning?",
        paragraphs: [
          "Het installeren van HR++ glas is een van de snelste manieren om je energierekening te verlagen en het wooncomfort te verhogen. Oude ramen zijn vaak de grootste bron van tocht en warmteverlies. Door over te stappen op hoogrendementsglas elimineer je koude zones bij het raam en voorkom je condensvorming aan de binnenzijde.",
          "Bovendien draagt HR++ glas bij aan een betere EPC-score van je woning. In Vlaanderen geldt sinds enkele jaren een renovatieverplichting voor residentiële gebouwen met een EPC-label E of F. Het vervangen van glas en raamprofielen is een cruciale stap om aan deze verplichtingen te voldoen en de waarde van je vastgoed te verhogen.",
        ],
      },
      {
        title: "Prijs en terugverdientijd van HR++ glas",
        paragraphs: [
          "De prijs van HR++ glas zelf ligt gemiddeld tussen de €80 en €120 per vierkante meter, exclusief de btw en de kosten voor de raamprofielen en plaatsing. Hoewel dit duurder is dan standaard dubbel glas, verdient deze investering zichzelf snel terug door de lagere stookkosten.",
          "Gemiddeld bespaar je met HR++ glas zo'n €250 tot €300 per jaar op je gasrekening voor een gemiddelde gezinswoning. De terugverdientijd ligt daardoor meestal tussen de 5 en 7 jaar, zeker wanneer je ook gebruikmaakt van de Vlaamse renovatiepremies.",
        ],
      },
      {
        title: "Premies voor HR++ glas in Vlaanderen 2026",
        paragraphs: [
          "In 2026 kun je voor het vervangen van ramen en beglazing rekenen op Mijn VerbouwPremie. Om in aanmerking te komen voor de premie voor hoogrendementsglas, moet de U-waarde van het geplaatste glas maximaal 1,0 W/m²K bedragen (of 1,1 W/m²K in specifieke renovatiecontexten in combinatie met de profielen).",
          "De premiebedragen hangen af van je inkomenscategorie en kunnen oplopen tot 35% of zelfs 50% van de totale factuur voor de lagere inkomensgroepen. Dit maakt de overstap naar HR++ glas financieel nog aantrekkelijker.",
        ],
      },
    ],
    ctaTitle: "Wil je besparen met HR++ glas?",
    ctaText: "Yannova adviseert je graag over de beste raamprofielen en HR++ beglazing voor jouw woning. Neem contact op voor een gratis opmeting en offerte op maat.",
    relatedSlugs: ["wat-kosten-nieuwe-ramen", "pvc-of-aluminium-ramen", "energiebesparing-nieuwe-ramen"],
    howtoSteps: [
      { name: "Stap 1: Gratis opmeting en inspectie", text: "Een adviseur van Yannova komt bij je langs om de huidige ramen op te meten en de staat van de profielen te controleren." },
      { name: "Stap 2: Offerte en materiaalkeuze", text: "Je ontvangt een gedetailleerde offerte en kiest het gewenste type raamprofiel (PVC of aluminium) en de dikte van het HR++ glas." },
      { name: "Stap 3: Professionele plaatsing", text: "Onze ervaren monteurs demonteren de oude ramen en plaatsen de nieuwe profielen met HR++ glas tocht- en waterdicht." },
      { name: "Stap 4: Premie-aanvraag indienen", text: "Met de attesten en facturen van Yannova dien je de aanvraag voor Mijn VerbouwPremie in om een deel van de kosten terug te krijgen." },
    ],
  },
  {
    slug: "prijs-renovatie-zoersel",
    title: "Wat kost renovatie in Zoersel in 2026?",
    excerpt: "Prijsrichtlijnen voor renovatie in Zoersel: van ramen en gevel tot totaalrenovatie en slimme fasering.",
    description: "Ontdek wat renovatie in Zoersel kost in 2026. Inclusief prijsvoorbeelden voor ramen, gevelrenovatie en totaalrenovatie, plus de factoren die uw budget beïnvloeden.",
    date: "2026-03-12",
    readTime: "7 min",
    category: "Prijzen",
    keywords: ["prijs renovatie zoersel", "renovatie zoersel prijs", "totaalrenovatie zoersel", "aannemer zoersel"],
    serviceTags: ["renovatie", "totaalrenovatie", "ramen-deuren", "gevelrenovatie"],
    cityTags: ["zoersel"],
    dynamic: true,
    intro:
      "Wie zoekt op renovatie Zoersel wil meestal geen algemene richtprijzen, maar een realistisch budget voor een woning in de eigen regio. In deze gids zetten we de belangrijkste prijsblokken op een rij en leggen we uit hoe u werken slim kunt faseren.",
    keyPoints: [
      "Gerichte renovatiewerken: vanaf ongeveer €8.000",
      "Gevelrenovatie met isolatie: vaak €80 tot €150 per m²",
      "Nieuwe ramen en deuren: afhankelijk van materiaal, glas en aantal openingen",
      "Totaalrenovatie: budget wordt bepaald door technieken, afwerking en volgorde van de werken",
    ],
    sections: [
      {
        title: "Welke renovatiewerken worden het vaakst gecombineerd in Zoersel?",
        paragraphs: [
          "In Zoersel zien we vaak renovatieprojecten waarbij de buitenschil centraal staat: nieuwe ramen en deuren, gevelisolatie, crepi of een grotere totaalrenovatie waarin ook binnenafwerking wordt meegenomen.",
          "Omdat veel woningen in en rond Zoersel vrijstaand of halfopen zijn, loont het meestal om niet alleen naar één onderdeel te kijken. Wie ramen, gevel en algemene renovatiewerken samen bekijkt, haalt doorgaans een beter resultaat op vlak van comfort, EPC en planning.",
        ],
        bullets: [
          "Ramen en deuren vervangen om warmteverlies en tocht te beperken",
          "Gevelrenovatie met isolatie om de buitenschil energetisch te verbeteren",
          "Gefaseerde renovatie waarbij budget per fase wordt bewaakt",
        ],
      },
      {
        title: "Richtprijzen per type werk",
        paragraphs: [
          "Voor kleinere renovatiewerken of een duidelijke eerste fase start het budget vaak vanaf een paar duizend euro, maar zodra meerdere onderdelen samenkomen, stijgt de kost snel door voorbereiding, materiaal en afwerking.",
          "Nieuwe ramen en deuren worden geprijsd op basis van materiaal, glas, afmetingen en afwerking. Gevelrenovatie hangt vooral af van oppervlakte, isolatiedikte, herstelwerk en gekozen afwerking. Bij totaalrenovatie spelen technieken, afbraak, planning en binnenafwerking een veel grotere rol.",
        ],
        bullets: [
          "Ramen en deuren: prijs hangt sterk af van PVC of aluminium en het aantal openingen",
          "Gevelrenovatie: reken op een prijs per m², afhankelijk van herstel en isolatie",
          "Totaalrenovatie: budget op projectbasis met duidelijke fases en keuzes",
        ],
      },
      {
        title: "Wat duwt het budget omhoog?",
        paragraphs: [
          "De grootste budgetversnellers zijn bijna altijd verborgen gebreken, bijkomende voorbereidende werken en te late beslissingen tijdens de uitvoering. Daarom is een goede opname vooraf essentieel.",
          "Ook materiaalkeuze maakt een groot verschil. Aluminium ramen, zwaardere isolatiepakketten of een hogere afwerkingsgraad zijn logisch wanneer de woning en het doel dat vragen, maar ze moeten wel in verhouding staan tot het totale project.",
        ],
      },
      {
        title: "Hoe houdt u renovatie in Zoersel financieel beheersbaar?",
        paragraphs: [
          "De meest efficiënte aanpak is meestal starten met de buitenschil: ramen, deuren, gevel en isolatie. Daarna volgen technieken en binnenafwerking. Zo vermijdt u dat afgewerkte ruimtes later opnieuw open moeten.",
          "Vraag ook altijd naar scenario's. Een offerte met een basisaanpak, een energetische upgrade en een totaaltraject maakt het eenvoudiger om het juiste evenwicht te vinden tussen investering en rendement.",
        ],
      },
      {
        title: "Wanneer is een offerte echt bruikbaar?",
        paragraphs: [
          "Een bruikbare offerte is meer dan een totaalprijs. Ze splitst materialen, voorbereiding, uitvoering en afwerking op, en ze maakt duidelijk welke keuzes nog openstaan.",
          "Voor renovatie in Zoersel is het zinvol om zowel de werken op korte termijn als de logische volgende fase mee te bespreken. Dat voorkomt dat u vandaag goedkopere keuzes maakt die later extra kosten veroorzaken.",
        ],
      },
    ],
    ctaTitle: "Renovatie in Zoersel bespreken?",
    ctaText: "Yannova bekijkt graag welke combinatie van ramen, gevel en renovatiewerken voor uw woning in Zoersel het meeste effect geeft.",
    relatedSlugs: ["prijs-renovatie-zoersel", "energie-renovatie-premie-belgie", "hoeveel-kost-gevelrenovatie"],
  },
  {
    slug: "ramen-vervangen-prijs-antwerpen",
    title: "Ramen vervangen prijs in Antwerpen: waar moet u op rekenen?",
    excerpt: "Wat kost ramen vervangen in Antwerpen, welke factoren bepalen de prijs en wanneer loont PVC of aluminium?",
    description: "Ontdek de prijs van ramen vervangen in Antwerpen. We bekijken materiaal, glas, plaatsing, stadswoningen en slimme keuzes voor renovatieprojecten.",
    date: "2026-03-12",
    readTime: "6 min",
    category: "Prijzen",
    keywords: ["ramen vervangen prijs antwerpen", "ramen antwerpen prijs", "pvc ramen antwerpen", "aluminium ramen antwerpen"],
    serviceTags: ["ramen-deuren"],
    cityTags: ["antwerpen", "deurne", "merksem"],
    dynamic: true,
    intro:
      "Bij ramen vervangen in Antwerpen is de context minstens even belangrijk als het product zelf. Stadspanden, rijwoningen en appartementen vragen een andere voorbereiding dan een vrijstaande woning, en dat ziet u ook terug in de prijs.",
    keyPoints: [
      "PVC is meestal de meest budgetvriendelijke keuze",
      "Aluminium wordt vaak gekozen bij grotere glaspartijen en strakkere architectuur",
      "Plaatsing in stedelijke context vraagt extra aandacht voor bereikbaarheid en afwerking",
      "Goede ramen leveren niet alleen comfort op, maar ook winst op EPC en geluidsdemping",
    ],
    sections: [
      {
        title: "Welke prijsfactoren zijn in Antwerpen doorslaggevend?",
        paragraphs: [
          "De kost van ramen vervangen in Antwerpen wordt vooral bepaald door materiaal, beglazing, afmetingen, bereikbaarheid en de staat van de bestaande openingen.",
          "Bij stadswoningen zien we vaker extra werk rond afbraak, transport, beperkte toegang en afwerking. Daardoor ligt de prijs niet alleen vast in het raam zelf, maar ook in de plaatsingscontext.",
        ],
      },
      {
        title: "PVC of aluminium: wanneer kiest u wat?",
        paragraphs: [
          "PVC is bijzonder sterk als u prijs, isolatie en onderhoudsgemak wilt combineren. Voor veel rijwoningen en renovatieprojecten in Antwerpen blijft het de meest rationele keuze.",
          "Aluminium wordt interessanter bij grotere raamoppervlaktes, slanke profielen en een meer architecturale uitstraling. Het prijsverschil is reëel, maar kan verantwoord zijn wanneer lichtinval en design zwaarder wegen.",
        ],
        bullets: [
          "PVC: sterk op budget, isolatie en onderhoud",
          "Aluminium: sterk op design, glasoppervlak en strakke afwerking",
          "De juiste keuze hangt af van woningtype, gewenste stijl en totaalbudget",
        ],
      },
      {
        title: "Wat zit meestal in de prijs inbegrepen?",
        paragraphs: [
          "Een goede prijsinschatting omvat meer dan de levering van nieuwe ramen. Demontage van oude profielen, transport, plaatsing, aansluiting, afwerking en eventuele dorpels of vensterbanken bepalen mee het totale plaatje.",
          "Vraag daarom altijd na wat exact inbegrepen is. Een scherpe prijs zonder degelijke afwerking of duidelijke plaatsingsmethode is zelden de beste investering.",
        ],
      },
      {
        title: "Wanneer loont ramen vervangen het meest?",
        paragraphs: [
          "Ramen vervangen loont het hardst wanneer bestaande profielen tocht veroorzaken, de beglazing verouderd is of de gevel toch al aangepakt wordt. In die gevallen vermijdt u dubbel werk en verbetert u de woning in één beweging.",
          "In Antwerpen wordt ramen vervangen ook vaak gekoppeld aan geluidscomfort. Zeker aan drukkere assen maken betere profielen en glas een voelbaar verschil.",
        ],
      },
      {
        title: "Hoe vraagt u een correcte offerte aan?",
        paragraphs: [
          "Geef naast afmetingen ook context mee: woningtype, verdieping, bereikbaarheid en gewenste afwerking. Dat helpt om sneller een bruikbare en realistische offerte te krijgen.",
          "Wie twijfelt tussen PVC en aluminium doet er goed aan beide scenario's naast elkaar te laten prijzen. Zo vergelijkt u niet alleen de investering, maar ook het effect op comfort en uitstraling.",
        ],
      },
    ],
    ctaTitle: "Prijs voor ramen vervangen in Antwerpen kennen?",
    ctaText: "Yannova maakt graag een duidelijke prijsinschatting voor uw woning in Antwerpen, Deurne, Merksem of omliggende buurten.",
    relatedSlugs: ["wat-kosten-nieuwe-ramen", "pvc-of-aluminium-ramen", "premies-ramen-deuren-2026"],
  },
  {
    slug: "crepi-gevel-voordelen",
    title: "Crepi gevel voordelen: wanneer is crepi de juiste keuze?",
    excerpt: "De voordelen van crepi op een rij: uitstraling, isolatie, onderhoud en de situaties waarin crepi echt loont.",
    description: "Ontdek de voordelen van een crepi gevel. Wanneer is crepi slim, hoe combineert u het met isolatie en waar moet u op letten bij afwerking en onderhoud?",
    date: "2026-03-12",
    readTime: "6 min",
    category: "Advies",
    keywords: ["crepi gevel voordelen", "crepi gevel", "voordelen crepi", "gevelrenovatie crepi"],
    serviceTags: ["crepi-gevel", "gevelrenovatie"],
    dynamic: true,
    intro:
      "Crepi is populair omdat het tegelijk een esthetische en technische oplossing kan zijn. U geeft uw woning een nieuwe uitstraling, en als u crepi combineert met buitenisolatie verbetert u ook de energieprestatie van de gevel.",
    keyPoints: [
      "Crepi geeft een bestaande woning snel een strakke, hedendaagse uitstraling",
      "De afwerking combineert goed met buitenisolatie",
      "Een correcte opbouw en detailafwerking zijn bepalend voor duurzaamheid",
      "Crepi is vooral interessant wanneer gevelbeeld en energieprestatie samen belangrijk zijn",
    ],
    sections: [
      {
        title: "Waarom kiezen zoveel eigenaars voor crepi?",
        paragraphs: [
          "Crepi maakt het mogelijk om een verouderde gevel visueel volledig te vernieuwen zonder de woning structureel te veranderen. Dat is een groot voordeel bij renovaties waar de basis nog goed is, maar de gevel gedateerd oogt.",
          "Bovendien laat crepi zich perfect combineren met buitenisolatie. Daardoor is het niet alleen een esthetische keuze, maar ook een functionele investering in comfort en energieverbruik.",
        ],
      },
      {
        title: "Welke voordelen merkt u in de praktijk?",
        paragraphs: [
          "Het eerste voordeel is uitstraling. Een woning met een goed afgewerkte crepi-gevel oogt meteen verzorgd en eigentijds. Daarnaast voelt de woning vaak comfortabeler aan wanneer de gevel tegelijk geïsoleerd wordt.",
          "Ook onderhoud speelt mee. Een kwalitatieve crepi-opbouw met aangepaste detaillering rond dorpels, plinten en aansluitingen blijft lang mooi en is relatief eenvoudig proper te houden.",
        ],
        bullets: [
          "Nieuwe uitstraling zonder volledige heropbouw van de gevel",
          "Combineerbaar met gevelisolatie voor beter EPC",
          "Minder warmteverlies en meer wooncomfort",
          "Kleur- en structuurkeuze afgestemd op de woning",
        ],
      },
      {
        title: "Wanneer is crepi minder geschikt?",
        paragraphs: [
          "Crepi is niet voor elke gevel automatisch de beste oplossing. Wanneer de ondergrond instabiel is, er zware vochtproblemen spelen of het architecturale karakter van de woning om een andere afwerking vraagt, moet eerst technisch bekeken worden wat haalbaar is.",
          "Daarom is een plaatsbezoek cruciaal. Het gaat niet alleen om kleur en look, maar om de volledige opbouw van de gevel en de kwaliteit van de detaillering.",
        ],
      },
      {
        title: "Wat bepaalt de levensduur?",
        paragraphs: [
          "De duurzaamheid van crepi zit in de voorbereiding: correcte isolatieplaten, een degelijke wapening, de juiste basislagen en zorgvuldige afwerking aan alle randen en aansluitingen.",
          "Ook waterafvoer is essentieel. Slechte detaillering aan vensterbanken, dakranden of plinten is een veel grotere risicofactor dan het crepi-materiaal zelf.",
        ],
      },
      {
        title: "Hoe maakt u de juiste keuze?",
        paragraphs: [
          "Bekijk crepi altijd in functie van de totale woning. Past het bij de architectuur, wilt u tegelijk isoleren en is een strakke buitenafwerking een prioriteit? Dan is crepi vaak een zeer sterke optie.",
          "Laat altijd een scenario vergelijken met en zonder isolatie. Zo ziet u meteen wat het verschil is in investering, uitstraling en energetische winst.",
        ],
      },
    ],
    ctaTitle: "Twijfelt u of crepi bij uw gevel past?",
    ctaText: "Yannova bekijkt graag ter plaatse of crepi, gevelisolatie of een bredere gevelrenovatie de juiste stap is voor uw woning.",
    relatedSlugs: ["hoeveel-kost-gevelrenovatie", "renovatie-vergunning-antwerpen", "energie-renovatie-premie-belgie"],
  },
  {
    slug: "renovatie-vergunning-antwerpen",
    title: "Renovatie vergunning Antwerpen: wanneer moet u opletten?",
    excerpt: "Niet elke renovatie in Antwerpen vraagt een vergunning, maar bij gevelwijzigingen en grotere werken is voorbereiding cruciaal.",
    description: "Lees wanneer u in Antwerpen een vergunning of meldingsplicht moet bekijken bij renovatie, gevelwerken, ramen en totaalprojecten.",
    date: "2026-03-12",
    readTime: "6 min",
    category: "Advies",
    keywords: ["renovatie vergunning antwerpen", "gevelrenovatie vergunning antwerpen", "omgevingsvergunning renovatie antwerpen"],
    serviceTags: ["renovatie", "totaalrenovatie", "gevelrenovatie", "ramen-deuren"],
    cityTags: ["antwerpen"],
    dynamic: true,
    intro:
      "Bij renovatie in Antwerpen is technische voorbereiding niet genoeg. Zeker in stedelijke context moet u ook goed inschatten of een omgevingsvergunning, melding of voorafgaand advies nodig is.",
    keyPoints: [
      "Interne werken zijn vaak eenvoudiger dan zichtbare wijzigingen aan de gevel",
      "Ramen, deuren en gevelaanpassingen aan straatzijde vragen extra aandacht",
      "Ook beschermd erfgoed of specifieke zones kunnen de regels verstrengen",
      "Een goede voorbereiding voorkomt stilstand en herwerk",
    ],
    sections: [
      {
        title: "Welke renovaties zijn meestal eenvoudig?",
        paragraphs: [
          "Veel zuiver interne vernieuwingen vallen buiten de zwaardere vergunningsplicht, zolang u geen structurele of stedenbouwkundige wijzigingen doorvoert. Denk aan afwerking, beperkte vernieuwing of het vervangen van technieken zonder impact op het uitzicht van de woning.",
          "Zodra de buitenschil verandert of het volume aangepast wordt, stijgt de kans dat u regels, meldingen of vergunningen moet bekijken.",
        ],
      },
      {
        title: "Waar zitten de gevoeligste punten in Antwerpen?",
        paragraphs: [
          "Gevelwijzigingen aan de straatzijde, ingrepen aan ramen en deuren die het uitzicht veranderen, uitbreidingen en ingrepen in beschermde of gevoelige zones verdienen altijd extra aandacht.",
          "In Antwerpen speelt ook de stedelijke context mee. Wat in een randgemeente sneller kan, vraagt in de stad soms bijkomend overleg of een andere uitwerking.",
        ],
        bullets: [
          "Wijziging van uitzicht aan straatzijde",
          "Grotere ingrepen aan volume of dak",
          "Werken in zones met erfgoed- of beeldkwaliteitsregels",
        ],
      },
      {
        title: "Waarom is dit ook belangrijk voor prijs en planning?",
        paragraphs: [
          "Een vergunningstraject of bijkomende voorbereiding heeft impact op de timing. Daarom moet dit vroeg in het project bekeken worden, zeker als meerdere werken samenlopen.",
          "Wie pas tijdens de uitvoering vaststelt dat een aanpassing niet zomaar kan, riskeert vertraging, bijkomende kosten en wijzigingen in materiaal of detailafwerking.",
        ],
      },
      {
        title: "Hoe pakt u dit praktisch aan?",
        paragraphs: [
          "Werk met duidelijke foto's, beschrijf de bestaande toestand en wees concreet over wat u wil aanpassen. Bij ramen en deuren is het bijvoorbeeld nuttig om exact aan te geven of het uitzicht, de indeling of de kleur verandert.",
          "Voor grotere trajecten is het verstandig om eerst een technisch en stedenbouwkundig haalbaar scenario vast te leggen, en pas daarna de uitvoering te plannen.",
        ],
      },
      {
        title: "Wat kan Yannova hierin betekenen?",
        paragraphs: [
          "Yannova begeleidt renovatieprojecten praktisch: we bekijken welke werken logisch samen horen, waar de gevoeligheden zitten en welke voorbereiding nodig is om zonder verrassingen te starten.",
          "Voor Antwerpen is die voorbereiding extra waardevol, omdat timing, bereikbaarheid en regelgeving samen het verschil maken tussen een vlot project en een stilgevallen planning.",
        ],
      },
    ],
    ctaTitle: "Renovatieproject in Antwerpen opstarten?",
    ctaText: "We bekijken graag samen welke werken technisch en praktisch logisch zijn, en waar u vooraf rekening mee moet houden.",
    relatedSlugs: ["prijs-renovatie-zoersel", "crepi-gevel-voordelen", "ramen-vervangen-prijs-antwerpen"],
  },
  {
    slug: "energie-renovatie-premie-belgie",
    title: "Energie renovatie premie België: welke werken leveren het meeste op?",
    excerpt: "Niet elke premie is even interessant. Dit zijn de renovatiewerken die meestal het sterkste rendement geven op comfort en subsidie.",
    description: "Overzicht van energiegerichte renovatiepremies in België en Vlaanderen, en welke werken meestal het meeste opleveren voor eigenaars.",
    date: "2026-03-12",
    readTime: "7 min",
    category: "Premies",
    keywords: ["energie renovatie premie belgië", "renovatie premie belgie", "mijn verbouwpremie", "premie ramen deuren gevel"],
    serviceTags: ["renovatie", "ramen-deuren", "gevelrenovatie", "crepi-gevel", "totaalrenovatie"],
    dynamic: true,
    intro:
      "Premies zijn interessant, maar ze zijn zelden de enige reden om te renoveren. De echte winst zit in de combinatie van subsidie, lager verbruik, meer comfort en een sterkere woningwaarde.",
    keyPoints: [
      "Buitenschilwerken geven meestal de grootste combinatie van subsidie en energiewinst",
      "Ramen, deuren en gevelisolatie zijn vaak de eerste logische stap",
      "Premies zijn pas interessant als de technische oplossing ook echt bij de woning past",
      "Een goede volgorde van werken voorkomt dat u subsidie misloopt of dubbel werk betaalt",
    ],
    sections: [
      {
        title: "Waarom eerst naar de buitenschil kijken?",
        paragraphs: [
          "Bij veel woningen zit de grootste energetische winst in ramen, deuren, gevel en isolatie. Dat zijn ook precies de werken die vaak in aanmerking komen voor premie-ondersteuning.",
          "Wie eerst de buitenschil op orde zet, krijgt niet alleen meer comfort, maar vermijdt ook dat latere investeringen minder efficiënt worden door warmteverlies of verouderde openingen.",
        ],
      },
      {
        title: "Welke werken leveren meestal het meeste op?",
        paragraphs: [
          "Nieuwe ramen en deuren zijn sterk wanneer de bestaande profielen verouderd zijn of de beglazing nog zwak presteert. Gevelisolatie en crepi worden interessant wanneer de woning veel warmte verliest via de buitenmuren en de uitstraling tegelijk een upgrade mag krijgen.",
          "In grotere trajecten maakt totaalrenovatie het mogelijk om meerdere premiegeschikte werken logisch te bundelen, maar dan is de volgorde en documentatie extra belangrijk.",
        ],
        bullets: [
          "Ramen en deuren voor comfort, geluidsdemping en energieverlies",
          "Gevelisolatie en crepi voor een sterke buitenschil",
          "Gefaseerde renovatie om premie en planning slim te combineren",
        ],
      },
      {
        title: "Wanneer krijgt premie te veel aandacht?",
        paragraphs: [
          "Een premie mag nooit de enige reden zijn om voor een bepaald systeem of materiaal te kiezen. Soms is een oplossing die technisch beter past bij de woning uiteindelijk interessanter, ook als de subsidie beperkter is.",
          "Daarom is goed advies belangrijk: eerst bekijken wat de woning nodig heeft, daarna zien hoe premie daar logisch op aansluit.",
        ],
      },
      {
        title: "Hoe voorkomt u dat u kansen mist?",
        paragraphs: [
          "Bewaar offertes, facturen en technische info zorgvuldig. Werk ook met een duidelijke planning zodat premies, uitvoering en eventuele bijkomende fases op elkaar afgestemd blijven.",
          "Voor wie meerdere ingrepen plant, is het vaak interessanter om vooraf het totaalplaatje te bekijken in plaats van per onderdeel ad hoc te beslissen.",
        ],
      },
      {
        title: "Wat is de slimste volgorde?",
        paragraphs: [
          "Meestal begint een slim traject met ramen, deuren en/of gevel. Daarna volgen technieken en binnenafwerking. Zo bouwt u eerst de energieprestatie en het comfort op, en daarna de rest van de woning.",
          "Dat is precies de reden waarom lokale SEO-pagina's voor ramen, gevelrenovatie en totaalrenovatie elkaar intern moeten versterken: ze horen inhoudelijk ook echt samen.",
        ],
      },
    ],
    ctaTitle: "Wilt u weten welke premiegericht renovatiepad logisch is?",
    ctaText: "Yannova helpt u graag prioriteiten te leggen tussen ramen, gevel, isolatie en bredere renovatiewerken.",
    relatedSlugs: ["premies-ramen-deuren-2026", "hoeveel-kost-gevelrenovatie", "prijs-renovatie-zoersel"],
  },
  {
    slug: "crepi-prijs-per-m2",
    title: "Crepi prijs per m²: wat kost gevelbepleistering in 2026?",
    excerpt: "Wat kost crepi per m² in 2026? Overzicht van prijzen voor crepi zonder en met isolatie, plus factoren die de prijs bepalen.",
    description: "Ontdek de prijs van crepi per m² in 2026. Van €40/m² voor enkel crepi tot €150/m² voor ETICS met isolatie. Inclusief premie-info.",
    date: "2026-03-13",
    readTime: "6 min",
    category: "Prijzen",
    keywords: ["crepi prijs per m2", "crepi prijs", "gevelbepleistering prijs", "crepi kosten", "crepi antwerpen prijs"],
    serviceTags: ["crepi-gevel", "gevelrenovatie"],
    dynamic: true,
    intro:
      "De prijs van crepi hangt sterk af van wat er onder zit. Enkel crepi op een bestaande gevel is een heel ander verhaal dan een volledig ETICS-systeem met isolatieplaten. In deze gids zetten we de prijsblokken op een rij.",
    keyPoints: [
      "Enkel crepi (zonder isolatie): gemiddeld €40–€70 per m²",
      "Crepi met buitenisolatie (ETICS): gemiddeld €80–€150 per m²",
      "Voorbereiding en herstelwerk kunnen de prijs significant beïnvloeden",
      "Mijn VerbouwPremie kan een deel van de kosten terugbetalen",
    ],
    sections: [
      {
        title: "Wat bepaalt de prijs van crepi?",
        paragraphs: [
          "De grootste prijsfactor is of u enkel crepi aanbrengt of tegelijk isoleert. Bij een ETICS-systeem (isolatieplaten + wapening + crepi) is de investering hoger, maar de energiewinst en premie-opbrengst zijn dat ook.",
          "Daarnaast spelen de staat van de bestaande gevel, de oppervlakte, de toegankelijkheid (steigers of hoogtewerker) en de gekozen textuur en kleur een rol in de eindprijs.",
        ],
        bullets: [
          "Type systeem: enkel crepi vs. ETICS met isolatie",
          "Staat van de ondergrond: herstelwerk verhoogt de kostprijs",
          "Oppervlakte en complexiteit van de gevel",
          "Steigerkosten bij hogere gevels",
        ],
      },
      {
        title: "Prijsoverzicht crepi per m² in 2026",
        paragraphs: [
          "Voor enkel crepi op een voorbereide, stabiele ondergrond rekent u gemiddeld €40 tot €70 per m². Dit omvat de basislaag, wapening en afwerklaag, maar geen isolatie.",
          "Een volledig ETICS-systeem met EPS-isolatieplaten (60–120mm) en crepi-afwerking kost gemiddeld €80 tot €150 per m². De exacte prijs hangt af van de isolatiedikte, het type crepi en de voorbereiding.",
        ],
        bullets: [
          "Enkel crepi: €40–€70/m²",
          "ETICS met 60mm EPS + crepi: €80–€110/m²",
          "ETICS met 100–120mm EPS + crepi: €110–€150/m²",
          "Steenstrips i.p.v. crepi: +€20–€40/m² extra",
        ],
      },
      {
        title: "Wanneer loont de investering het meest?",
        paragraphs: [
          "Crepi met isolatie loont het meest wanneer de woning veel warmte verliest via de buitenmuren en de gevel toch al aan vernieuwing toe is. U combineert dan een esthetische upgrade met een energetische verbetering.",
          "Wie enkel crepi overweegt zonder isolatie, doet dat vaak om een verouderde of beschadigde gevel te vernieuwen. Dat is zinvol, maar het is de moeite om ook het isolatiescenario te laten berekenen.",
        ],
      },
      {
        title: "Premies voor crepi en gevelisolatie",
        paragraphs: [
          "Via de Vlaamse Mijn VerbouwPremie kunt u een deel van de kosten voor buitenmuurisolatie recupereren. De voorwaarde is dat de isolatielaag minimaal Rd 3 m²K/W haalt, wat overeenkomt met ongeveer 80–100mm EPS.",
          "Wij bezorgen u alle nodige attesten en facturen zodat uw premieaanvraag vlot verloopt. Vraag ook naar de Mijn VerbouwLening voor een voordelig rentetarief.",
        ],
      },
      {
        title: "Hoe vraagt u een correcte offerte aan?",
        paragraphs: [
          "Geef bij uw aanvraag de oppervlakte van de te behandelen gevels mee, de staat van de bestaande gevel en of u ook wilt isoleren. Zo krijgt u een realistische en vergelijkbare offerte.",
          "Vraag altijd twee scenario's: enkel crepi en crepi met isolatie. Het prijsverschil is kleiner dan veel mensen denken, maar het verschil in energiewinst en premie is groot.",
        ],
      },
    ],
    ctaTitle: "Prijs voor crepi op uw woning kennen?",
    ctaText: "Yannova komt ter plaatse opmeten en bezorgt u een gedetailleerde offerte voor crepi, gevelisolatie of een complete gevelrenovatie.",
    relatedSlugs: ["hoeveel-kost-gevelrenovatie", "crepi-gevel-voordelen", "energie-renovatie-premie-belgie"],
  },
  {
    slug: "gevelisolatie-prijs-voordelen",
    title: "Gevelisolatie prijs en voordelen: wat levert buitenmuurisolatie op?",
    excerpt: "Wat kost gevelisolatie en wat levert het op? Overzicht van prijzen, energiewinst en premies voor buitenmuurisolatie in 2026.",
    description: "Ontdek de prijs en voordelen van gevelisolatie in 2026. ETICS-systemen vanaf €80/m², tot 30% energiebesparing en Mijn VerbouwPremie.",
    date: "2026-03-13",
    readTime: "7 min",
    category: "Advies",
    keywords: ["gevelisolatie prijs", "buitenmuurisolatie prijs", "gevelisolatie voordelen", "gevelisolatie kosten", "gevelisolatie antwerpen"],
    serviceTags: ["gevelrenovatie", "crepi-gevel"],
    dynamic: true,
    intro:
      "Gevelisolatie is een van de meest effectieve energetische ingrepen voor woningen met ongeïsoleerde buitenmuren. U stopt warmteverlies, verbetert uw EPC en geeft de gevel tegelijk een nieuwe uitstraling.",
    keyPoints: [
      "Buitenmuurisolatie vermindert warmteverlies via de gevel met 20–35%",
      "ETICS-systemen kosten gemiddeld €80–€150 per m²",
      "Mijn VerbouwPremie dekt een deel van de kosten",
      "Geen verlies van binnenruimte, in tegenstelling tot binnenmuuisolatie",
    ],
    sections: [
      {
        title: "Waarom is gevelisolatie zo effectief?",
        paragraphs: [
          "Bij woningen zonder gevelisolatie gaat 20 tot 35% van de warmte verloren via de buitenmuren. Dat is na het dak de grootste bron van warmteverlies. Buitengevelisolatie pakt dit direct aan.",
          "Bovendien verbetert gevelisolatie ook het zomercomfort: de woning warmt minder snel op bij hoge temperaturen, wat de behoefte aan koeling vermindert.",
        ],
      },
      {
        title: "Welke systemen bestaan er?",
        paragraphs: [
          "Het meest gebruikte systeem is ETICS (External Thermal Insulation Composite System): isolatieplaten worden op de gevel gelijmd en verankerd, daarna afgewerkt met crepi, steenstrips of spuitkurk.",
          "De keuze van isolatiemateriaal (EPS, minerale wol, PIR) en dikte bepaalt de thermische prestatie en de prijs. EPS is het meest betaalbaar; minerale wol is dampopen en brandwerend.",
        ],
        bullets: [
          "EPS (geëxpandeerd polystyreen): meest betaalbaar, goede isolatiewaarden",
          "Minerale wol: dampopen, brandwerend, iets duurder",
          "PIR: hoogste isolatiewaarde per cm, interessant bij beperkte ruimte",
        ],
      },
      {
        title: "Wat kost gevelisolatie per m²?",
        paragraphs: [
          "Een volledig ETICS-systeem met EPS en crepi-afwerking kost gemiddeld €80 tot €150 per m², afhankelijk van isolatiedikte, afwerking en staat van de bestaande gevel.",
          "Minerale wol is iets duurder dan EPS. Steenstrips als afwerking kosten €20–€40/m² meer dan crepi. Steigerkosten komen bovenop de prijs per m².",
        ],
        bullets: [
          "ETICS met EPS 60mm + crepi: €80–€110/m²",
          "ETICS met EPS 100mm + crepi: €100–€130/m²",
          "ETICS met minerale wol + crepi: €110–€150/m²",
          "Steenstrips als afwerking: +€20–€40/m²",
        ],
      },
      {
        title: "Welke voordelen merkt u in de praktijk?",
        paragraphs: [
          "Naast de energiebesparing verbetert gevelisolatie ook het akoestisch comfort: de woning wordt stiller. Bovendien verdwijnen koudebruggen, wat condensatie en vochtproblemen aan de binnenkant vermindert.",
          "Een betere EPC-score verhoogt ook de verkoopwaarde van uw woning. Zeker bij verhuur is een goede EPC-score steeds belangrijker door de Vlaamse renovatieverplichting.",
        ],
        bullets: [
          "20–35% minder warmteverlies via de gevel",
          "Betere EPC-score en hogere woningwaarde",
          "Minder condensatie en vochtproblemen",
          "Verbeterd akoestisch comfort",
          "Geen verlies van binnenruimte",
        ],
      },
      {
        title: "Premies voor gevelisolatie in 2026",
        paragraphs: [
          "Via de Vlaamse Mijn VerbouwPremie kunt u een deel van de kosten recupereren als de isolatielaag minimaal Rd 3 m²K/W haalt (ca. 80–100mm EPS). Het premiebedrag hangt af van uw inkomen en de oppervlakte.",
          "Combineer gevelisolatie met ramen of dakisolatie voor een hogere totaalpremie. Wij bezorgen u alle vereiste attesten en facturen voor een vlotte premieaanvraag.",
        ],
      },
    ],
    ctaTitle: "Gevelisolatie laten plaatsen?",
    ctaText: "Yannova komt ter plaatse opmeten en bezorgt u een gedetailleerde offerte voor gevelisolatie, crepi of een complete gevelrenovatie.",
    relatedSlugs: ["crepi-prijs-per-m2", "hoeveel-kost-gevelrenovatie", "energie-renovatie-premie-belgie"],
  },
  {
    slug: "renovatie-premies-vlaanderen-2026",
    title: "Renovatie premies Vlaanderen 2026: volledig overzicht",
    excerpt: "Welke renovatiepremies zijn er in Vlaanderen in 2026? Overzicht van Mijn VerbouwPremie, Mijn VerbouwLening en andere subsidies.",
    description: "Volledig overzicht van renovatiepremies in Vlaanderen 2026: Mijn VerbouwPremie, Mijn VerbouwLening, REG-premies en lokale subsidies voor ramen, gevel en isolatie.",
    date: "2026-03-13",
    readTime: "8 min",
    category: "Premies",
    keywords: ["renovatie premies vlaanderen 2026", "mijn verbouwpremie 2026", "premies renovatie 2026", "verbouwpremie vlaanderen", "renovatie subsidie belgie"],
    serviceTags: ["renovatie", "ramen-deuren", "gevelrenovatie", "crepi-gevel", "totaalrenovatie"],
    dynamic: true,
    intro:
      "Renoveren in Vlaanderen loont in 2026 meer dan ooit. De Mijn VerbouwPremie, Mijn VerbouwLening en REG-premies maken energetische renovaties financieel aantrekkelijker. Dit is het volledige overzicht.",
    keyPoints: [
      "Mijn VerbouwPremie: voor ramen, gevelisolatie, dakisolatie en meer",
      "Mijn VerbouwLening: voordelig rentetarief voor energetische renovaties",
      "REG-premies via uw netbeheerder voor specifieke werken",
      "Combineer premies slim voor maximale terugbetaling",
    ],
    sections: [
      {
        title: "Mijn VerbouwPremie: de belangrijkste subsidie",
        paragraphs: [
          "De Mijn VerbouwPremie is de centrale Vlaamse renovatiepremie voor woningeigenaars en verhuurders. Ze dekt een deel van de kosten voor energetische ingrepen aan de buitenschil: dakisolatie, gevelisolatie, vloerisolatie, ramen en deuren.",
          "Het premiebedrag hangt af van uw inkomen (lager inkomen = hogere premie) en de oppervlakte of het aantal eenheden. U vraagt de premie aan via het Mijn VerbouwPremie-portaal na uitvoering van de werken.",
        ],
        bullets: [
          "Ramen en deuren: premie bij vervanging door HR++ of beter",
          "Gevelisolatie: premie bij min. Rd 3 m²K/W (ca. 80–100mm EPS)",
          "Dakisolatie: premie bij min. Rd 4,5 m²K/W",
          "Vloerisolatie: premie bij min. Rd 1,5 m²K/W",
        ],
      },
      {
        title: "Mijn VerbouwLening: voordelig lenen voor renovatie",
        paragraphs: [
          "Naast de premie kunt u ook een Mijn VerbouwLening aanvragen bij het Vlaams Energiebedrijf (VEB). Dit is een lening aan een voordelig rentetarief voor energetische renovaties.",
          "De lening is interessant als u meerdere werken combineert of als de premie niet voldoende is om de investering te financieren. Het tarief is lager dan een gewone banklening.",
        ],
      },
      {
        title: "REG-premies via uw netbeheerder",
        paragraphs: [
          "Naast de Vlaamse premies bieden netbeheerders (Fluvius) ook REG-premies (Rationeel Energiegebruik) voor specifieke werken. Deze worden automatisch verrekend via uw installateur of aannemer.",
          "REG-premies zijn beschikbaar voor onder meer hoogrendementsglas, warmtepompen en zonnepanelen. Ze worden gecombineerd met de Mijn VerbouwPremie.",
        ],
      },
      {
        title: "Lokale premies in Antwerpen en omgeving",
        paragraphs: [
          "Naast de Vlaamse premies hebben sommige gemeenten en de stad Antwerpen eigen subsidies voor renovatie. Deze zijn vaak gericht op specifieke doelgroepen of wijken.",
          "Informeer bij uw gemeente of er lokale premies beschikbaar zijn voor uw renovatieproject. Wij helpen u graag de juiste documenten op te stellen.",
        ],
      },
      {
        title: "Hoe combineert u premies slim?",
        paragraphs: [
          "De slimste aanpak is om meerdere energetische ingrepen te combineren in één project. Zo kunt u voor elk onderdeel (ramen, gevel, dak) een aparte premie aanvragen.",
          "Bewaar alle facturen, attesten en technische fiches zorgvuldig. Wij bezorgen u bij elk project de nodige documenten voor een vlotte premieaanvraag.",
        ],
        bullets: [
          "Combineer ramen + gevelisolatie + dakisolatie voor maximale premie",
          "Vraag premies aan per onderdeel, niet als totaalproject",
          "Bewaar alle facturen en technische attesten",
          "Vraag ook naar de Mijn VerbouwLening voor het resterende bedrag",
        ],
      },
      {
        title: "Wat verandert er in 2026?",
        paragraphs: [
          "De Vlaamse renovatieverplichting wordt strenger: woningen met EPC-label E of F die verkocht worden, moeten binnen 5 jaar gerenoveerd worden naar label D of beter. Dit maakt energetische renovatie niet alleen financieel interessant, maar ook steeds meer verplicht.",
          "De premies voor 2026 zijn grotendeels ongewijzigd ten opzichte van 2025, maar de drempelwaarden voor isolatie worden strenger. Informeer tijdig over de actuele voorwaarden.",
        ],
      },
    ],
    ctaTitle: "Weten welke premies u kunt aanvragen?",
    ctaText: "Yannova helpt u graag de juiste premies te identificeren en bezorgt u alle nodige attesten en facturen voor een vlotte aanvraag.",
    relatedSlugs: ["energie-renovatie-premie-belgie", "gevelisolatie-prijs-voordelen", "crepi-prijs-per-m2"],
  },
  {
    slug: "wat-kosten-nieuwe-ramen",
    title: "Wat kosten nieuwe ramen in 2026?",
    excerpt: "Ontdek de prijzen voor PVC en aluminium ramen en waar de prijs van afhangt.",
    description: "Ontdek de prijzen voor nieuwe ramen in 2026. PVC ramen vanaf €400/m², aluminium vanaf €600/m². Inclusief plaatsing en BTW.",
    date: "2026-03-08",
    readTime: "5 min",
    category: "Prijzen",
    keywords: ["ramen prijzen", "wat kosten ramen", "pvc ramen prijs", "aluminium ramen prijs"],
    serviceTags: ["ramen-deuren"],
    dynamic: false,
  },
  {
    slug: "nieuwe-voordeur-kiezen-tips",
    title: "Nieuwe voordeur kiezen: 7 tips voor de juiste keuze",
    excerpt: "Wat moet je weten bij het kiezen van een nieuwe voordeur? Van materiaal tot inbraakwering — alles op een rij.",
    description: "Nieuwe voordeur kiezen? Ontdek de 7 belangrijkste criteria: materiaal (PVC, aluminium, staal), inbraakklasse, isolatie, design en prijs. Expert advies van Yannova.",
    date: "2026-06-05",
    readTime: "6 min",
    category: "Advies",
    keywords: ["nieuwe voordeur kiezen", "voordeur keuze", "voordeur materiaal", "inbraakwerende voordeur", "voordeur advies"],
    serviceTags: ["ramen-deuren", "deuren"],
    dynamic: true,
    intro: "Een nieuwe voordeur is meer dan een functioneel element — het is het visitekaartje van uw woning. De keuze tussen PVC, aluminium of staal, de juiste inbraakklasse en het design dat bij uw woning past: het vraagt om een doordachte afweging. In deze gids geeft Yannova u 7 concrete tips om de juiste voordeur te kiezen.",
    keyPoints: [
      "Kies het materiaal op basis van budget, onderhoud en gewenste uitstraling: PVC is onderhoudsarm, aluminium is strak en staal is robuust.",
      "Inbraakklasse RC2 is de minimumstandaard voor stedelijke woningen in Antwerpen en omgeving.",
      "Let op de U-waarde: een goede voordeur heeft een U-waarde van 1,0 W/m²K of lager voor optimale isolatie.",
      "Kleur en design moeten passen bij de architectuur van uw woning — vraag kleurstalen aan.",
    ],
    sections: [
      {
        title: "Tip 1: Kies het juiste materiaal voor uw situatie",
        paragraphs: [
          "De drie meest voorkomende materialen voor voordeuren zijn PVC, aluminium en staal. Elk materiaal heeft zijn eigen voordelen afhankelijk van uw budget, onderhoudstijd en esthetische voorkeur.",
          "PVC is de meest budgetvriendelijke optie en zeer onderhoudsarm. Het isoleert uitstekend maar is minder geschikt voor zeer grote of zware voordeuren. PVC voordeuren zijn ideaal voor gezinswoningen waar praktisch comfort en prijs voorop staan.",
          "Aluminium biedt een strakke, moderne uitstraling met smalle profielen. Het is zeer duurzaam, verkrijgbaar in elke RAL-kleur en geschikt voor grote deuropeningen. Aluminium is iets duurder maar loont op lange termijn door de minimale onderhoudskosten.",
          "Stalen deuren zijn de stevigste optie en worden vooral gekozen voor een industriële of karaktervolle uitstraling. Ze zijn zwaarder en duurder, maar bieden maximale veiligheid en een unieke look.",
        ],
        bullets: [
          "PVC: budgetvriendelijk, goed isolerend, onderhoudsarm",
          "Aluminium: strak design, duurzaam, elke kleur mogelijk",
          "Staal: maximale stevigheid, industrieel karakter, langste levensduur",
        ],
      },
      {
        title: "Tip 2: Let op de inbraakklasse (RC-waarde)",
        paragraphs: [
          "Een voordeur moet uw woning niet alleen beschermen tegen kou en lawaai, maar ook tegen inbraak. De inbraakklasse wordt aangeduid met RC (Resistance Class) en loopt van RC1 tot RC6.",
          "Voor woningen in Antwerpen en andere stedelijke gebieden raden wij minimaal RC2 aan. Dit betekent dat de deur, het slot en het hang- en sluitwerk gecertificeerd zijn en een inbraakpoging minstens 3 minuten weerstaan.",
          "RC2 wordt ook steeds vaker geëist door verzekeringsmaatschappijen. Yannova plaatst standaard voordeuren met SKG**-gecertificeerd beslag en een cilinder met verhoogde boorbescherming.",
        ],
        bullets: [
          "RC1: basisbeveiliging tegen fysiek geweld (niet aanbevolen)",
          "RC2: standaard voor woningen (minimaal 3 minuten inbraakwerendheid)",
          "RC3: verhoogde beveiliging (minimaal 5 minuten, voor risicowoningen)",
        ],
      },
      {
        title: "Tip 3: Check de isolatiewaarde (U-waarde)",
        paragraphs: [
          "De U-waarde van een deur geeft aan hoeveel warmte er per vierkante meter verloren gaat. Hoe lager de U-waarde, hoe beter de isolatie.",
          "Moderne voordeuren hebben een U-waarde tussen 0,8 en 1,2 W/m²K. Voor passiefhuizen en nieuwbouwprojecten streeft men naar een U-waarde onder de 1,0 W/m²K.",
          "Een goed geïsoleerde voordeur bespaart energie, verhoogt het comfort (geen tocht) en vermindert geluidshinder van buiten.",
        ],
        bullets: [
          "U-waarde < 1,0 W/m²K: uitstekende isolatie",
          "U-waarde 1,0 - 1,5 W/m²K: goede isolatie",
          "U-waarde > 1,5 W/m²K: matige isolatie (oude deuren)",
        ],
      },
      {
        title: "Tip 4: Kies een design dat past bij uw woning",
        paragraphs: [
          "Een voordeur moet passen bij de architectuur van uw woning. Een moderne villa vraagt om een andere deur dan een klassieke rijwoning of een hedendaags appartement.",
          "Let op de verhoudingen: een hoge, smalle deur past bij een herenhuis, terwijl een brede deur met zijlichten geschikt is voor een vrijstaande woning. Ook de kleur speelt een grote rol in de uitstraling.",
          "Vraag altijd kleurstalen en visualisaties aan voordat u definitief kiest. Yannova kan u digitale impressies tonen van hoe verschillende deurmodellen en kleuren bij uw gevel passen.",
        ],
        bullets: [
          "Moderne woning: strakke lijnen, weinig versieringen, vaak antraciet of mat zwart",
          "Klassieke woning: horizontale of verticale verdeling, warme kleuren",
          "Landelijke stijl: houtlook of authentieke details, vaak groen of donkerblauw",
        ],
      },
      {
        title: "Tip 5: Vergeet de deurgreep en het slot niet",
        paragraphs: [
          "De kwaliteit van het hang- en sluitwerk is net zo belangrijk als de deur zelf. Een goede voordeur heeft een meerpuntsluiting (minimaal 3 sluitpunten) en een cilinder met anti-inbraakbescherming.",
          "Kies voor een comfortabele deurgreep die makkelijk vast te pakken is, ook voor kinderen en ouderen. Moderne opties zijn vingerafdruksloten of elektronische sloten met cijfercode.",
        ],
      },
      {
        title: "Tip 6: Budget en prijs-kwaliteitverhouding",
        paragraphs: [
          "De prijs van een voordeur varieert sterk afhankelijk van materiaal, afmetingen en afwerking. Een standaard PVC voordeur kost tussen €800 en €1.500, terwijl een aluminium voordeur tussen €1.500 en €3.500 ligt.",
          "Investeer in kwaliteit: een goede voordeur gaat 30 jaar of langer mee. Een goedkope deur met slechte isolatie of zwak beslag kost u op lange termijn meer door hogere energiekosten en eerder onderhoud.",
        ],
        bullets: [
          "PVC voordeur: €800 - €1.500 inclusief plaatsing",
          "Aluminium voordeur: €1.500 - €3.500 inclusief plaatsing",
          "Stalen voordeur op maat: €3.000 - €6.000+",
        ],
      },
      {
        title: "Tip 7: Werk met een specialist die opmeet en correct plaatst",
        paragraphs: [
          "De beste voordeur is waardeloos als de plaatsing niet correct is. Een vakkundige montage zorgt voor perfecte afsluiting, geen tocht en een lange levensduur.",
          "Yannova komt altijd gratis langs voor een opmeting. We controleren de bestaande opening, adviseren over de beste oplossing en zorgen voor een technisch correcte plaatsing met garantie.",
        ],
      },
    ],
    ctaTitle: "Nieuwe voordeur laten plaatsen?",
    ctaText: "Yannova adviseert u graag over de beste voordeur voor uw woning in Antwerpen en omgeving. Gratis opmeting, offerte binnen 24u.",
    relatedSlugs: ["voordeur-vervangen-prijs-antwerpen", "ramen-vervangen-wanneer-lonen", "aannemer-antwerpen-kiezen"],
  },
  {
    slug: "dubbel-glas-vervangen-door-hr-glas",
    title: "Dubbel glas vervangen door HR++ glas: wanneer loont het?",
    excerpt: "Wanneer moet je oud dubbel glas vervangen door HR++ glas? Besparing, kosten en terugverdientijd op een rij.",
    description: "Dubbel glas vervangen door HR++ glas? Ontdek wanneer het loont, hoeveel je bespaart en wat het kost. Expert advies voor woningen in Antwerpen.",
    date: "2026-06-05",
    readTime: "5 min",
    category: "Besparing",
    keywords: ["dubbel glas vervangen", "hr++ glas vervangen", "oude ramen vervangen", "dubbel glas of hr++ glas", "glas vervangen prijs"],
    serviceTags: ["ramen-deuren", "ramen"],
    dynamic: true,
    intro: "Veel woningen hebben nog oud dubbel glas uit de jaren 80 of 90. Dit glas isoleert veel slechter dan modern HR++ glas, wat resulteert in hogere energiekosten en minder comfort. Maar wanneer loont het om oud dubbel glas te vervangen? In deze gids leggen we uit wanneer vervanging zinvol is en wat het oplevert.",
    keyPoints: [
      "Oud dubbel glas (uit de jaren 80-90) heeft een U-waarde van 2,5-2,8 W/m²K, HR++ glas haalt 1,1 W/m²K.",
      "Door te vervangen bespaar je gemiddeld 20-30% op je verwarmingskosten.",
      "Alleen het glas vervangen kan, maar bij oude profielen is volledige raamvervanging vaak beter.",
      "De terugverdientijd ligt tussen 7 en 12 jaar, afhankelijk van je huidige situatie.",
    ],
    sections: [
      {
        title: "Verschil tussen oud dubbel glas en HR++ glas",
        paragraphs: [
          "Oud dubbel glas uit de jaren 80 en 90 bestaat uit twee glasplaten met een spouw van 6mm gevuld met droge lucht. De U-waarde ligt rond de 2,8 W/m²K, wat betekent dat er veel warmte verloren gaat.",
          "HR++ glas (hoogrendementsglas) heeft een spouw van 16mm gevuld met edelgas (argon) en een onzichtbare metaalcoating (low-e coating) die warmte reflecteert. Hierdoor haalt HR++ glas een U-waarde van ongeveer 1,1 W/m²K — meer dan twee keer zo goed als oud dubbel glas.",
        ],
        bullets: [
          "Oud dubbel glas: U-waarde 2,5-2,8 W/m²K",
          "HR+ glas: U-waarde 1,6 W/m²K",
          "HR++ glas: U-waarde 1,1 W/m²K",
          "HR+++ glas (triple): U-waarde 0,6 W/m²K",
        ],
      },
      {
        title: "Hoeveel bespaar je door te vervangen?",
        paragraphs: [
          "De besparing hangt af van de oppervlakte van je ramen, je huidige verwarmingskosten en het type verwarming. Voor een gemiddelde rijwoning met 15m² ramen kun je rekenen op een besparing van €200 tot €350 per jaar.",
          "Naast energiebesparing verbetert ook het comfort: geen koude ramen meer in de winter, minder condensatie en minder tocht. In de zomer blijft het langer koel in huis door de warmtewerende coating.",
        ],
        bullets: [
          "Gemiddelde rijwoning (15m² ramen): €200-€350/jaar besparing",
          "Vrijstaande woning (25m² ramen): €350-€600/jaar besparing",
          "Extra: minder condensatie, meer comfort, hogere woningwaarde",
        ],
      },
      {
        title: "Alleen glas vervangen of complete ramen?",
        paragraphs: [
          "In principe kun je alleen het glas vervangen zonder de profielen te vervangen. Dit is goedkoper (€150-€250 per m² glas), maar niet altijd de beste oplossing.",
          "Als je profielen ouder zijn dan 20 jaar, zijn de dichtingen vaak versleten en de profielen zelf slecht isolerend. Dan loont volledige raamvervanging meer, omdat je dan ook profiteert van moderne meerkamerprofielen met veel betere isolatie.",
          "Yannova adviseert bij een plaatsbezoek altijd of alleen glasvervanging volstaat of dat complete vervanging beter is voor jouw situatie.",
        ],
      },
      {
        title: "Wat kost het en wat is de terugverdientijd?",
        paragraphs: [
          "Alleen het glas vervangen kost €150-€250 per m². Voor complete raamvervanging met nieuwe PVC profielen reken je €400-€600 per m².",
          "De terugverdientijd van alleen glasvervanging ligt rond de 7-10 jaar. Voor complete raamvervanging is dat 10-15 jaar, maar je krijgt dan ook een volledig nieuw, onderhoudsvrij raam met betere isolatie en veiligheid.",
        ],
        bullets: [
          "Alleen glas vervangen: €150-€250/m², terugverdientijd 7-10 jaar",
          "Volledige raamvervanging: €400-€600/m², terugverdientijd 10-15 jaar",
          "Premies via Mijn VerbouwPremie kunnen de terugverdientijd met 2-3 jaar verkorten",
        ],
      },
      {
        title: "Wanneer is vervanging het meest logisch?",
        paragraphs: [
          "Glasvervanging loont het meest wanneer je ramen ouder zijn dan 20 jaar, je merkt dat het koud is bij de ramen, er condensatie optreedt tussen de glasbladen of je energiefactuur hoog blijft ondanks zuinige verwarming.",
          "Het is ook slim om raamvervanging te combineren met andere renovatiewerken zoals gevelisolatie. Dan kun je de werken op elkaar afstemmen en profiteer je van efficiëntere planning.",
        ],
      },
    ],
    ctaTitle: "Twijfel je of je ramen aan vervanging toe zijn?",
    ctaText: "Yannova komt gratis langs voor een inspectie en adviseert of glasvervanging volstaat of dat nieuwe ramen beter zijn.",
    relatedSlugs: ["wat-is-hr-glas-en-waarom-belangrijk", "ramen-vervangen-wanneer-lonen", "wat-kosten-nieuwe-ramen"],
  },
  {
    slug: "premies-ramen-deuren-2026",
    title: "Premies voor ramen en deuren in 2026",
    excerpt: "Overzicht van alle beschikbare premies in Vlaanderen voor nieuwe ramen en deuren.",
    description: "Overzicht van alle beschikbare premies in Vlaanderen voor nieuwe ramen en deuren.",
    date: "2026-03-08",
    readTime: "7 min",
    category: "Premies",
    keywords: ["premies ramen deuren", "ramen premie", "deuren premie", "mijn verbouwpremie"],
    serviceTags: ["ramen-deuren"],
  },
  {
    slug: "pvc-of-aluminium-ramen",
    title: "PVC of aluminium ramen: wat is beter?",
    excerpt: "Vergelijk de voor- en nadelen van PVC en aluminium ramen voor uw woning.",
    description: "Vergelijk de voor- en nadelen van PVC en aluminium ramen voor uw woning.",
    date: "2026-03-08",
    readTime: "6 min",
    category: "Tips",
    keywords: ["pvc of aluminium ramen", "aluminium ramen", "pvc ramen", "ramen vergelijken"],
    serviceTags: ["ramen-deuren"],
  },
  {
    slug: "energiebesparing-nieuwe-ramen",
    title: "Energiebesparing met nieuwe ramen",
    excerpt: "Bespaar tot 50% energie met HR++ glas. Bereken je terugverdientijd.",
    description: "Bespaar tot 50% energie met HR++ glas. Bereken je terugverdientijd.",
    date: "2026-03-09",
    readTime: "5 min",
    category: "Besparing",
    keywords: ["energiebesparing ramen", "hr++ glas besparen", "ramen isolatie"],
    serviceTags: ["ramen-deuren"],
  },
  {
    slug: "hoeveel-kost-gevelrenovatie",
    title: "Hoeveel kost gevelrenovatie in 2026?",
    excerpt: "Complete prijsoverzicht: €80-150/m² voor isolatie + crepi. Inclusief premies.",
    description: "Ontdek de prijzen voor gevelrenovatie met isolatie en crepi. Gemiddeld €80-150 per m². Inclusief premies en besparingen.",
    date: "2026-03-09",
    readTime: "6 min",
    category: "Prijzen",
    keywords: ["gevelrenovatie prijs", "kosten gevelrenovatie", "crepi prijs", "gevelisolatie kosten"],
    serviceTags: ["gevelrenovatie", "crepi-gevel"],
  },
  {
    slug: "totaalrenovatie-antwerpen-prijs",
    title: "Totaalrenovatie Antwerpen: wat kost het en hoe pakt u het slim aan?",
    excerpt: "Wat kost een totaalrenovatie in Antwerpen in 2026? Prijzen, slimme fasering en hoe u maximaal premies haalt.",
    description: "Ontdek wat een totaalrenovatie in Antwerpen kost in 2026. Richtprijzen, fasering, premies en hoe u één aannemer voor alles kiest. Yannova helpt u.",
    date: "2026-06-05",
    readTime: "7 min",
    category: "Prijzen",
    keywords: [
      "totaalrenovatie antwerpen",
      "totaalrenovatie antwerpen prijs",
      "renovatie antwerpen kosten",
      "aannemer totaalrenovatie antwerpen",
      "renovatiebedrijf antwerpen",
      "woning renoveren antwerpen",
    ],
    serviceTags: ["totaalrenovatie", "renovatie"],
    cityTags: ["antwerpen", "berchem", "deurne", "wilrijk"],
    dynamic: true,
    intro:
      "Wie een totaalrenovatie in Antwerpen plant, staat voor een complexe puzzel: wat doet u wanneer, wie coördineert alles, en hoe houdt u het budget onder controle? In deze gids vindt u concrete richtprijzen, slimme tips voor fasering en een helder beeld van wat een goede aannemer voor u kan doen.",
    keyPoints: [
      "Een totaalrenovatie in Antwerpen kost gemiddeld €700 tot €1.500 per m² afhankelijk van de omvang en afwerkingsgraad.",
      "De buitenschil (ramen, gevel, dak) is altijd de logische eerste fase — dit beschermt de rest van de woning.",
      "Via Mijn VerbouwPremie kunt u voor meerdere werken tegelijk premies combineren.",
      "Één aannemer voor de volledige buitenschil bespaart u coördinatiekosten en voorkomt planningsproblemen.",
    ],
    sections: [
      {
        title: "Wat valt onder een totaalrenovatie?",
        paragraphs: [
          "Een totaalrenovatie omvat alle werken die een woning grondig vernieuwen: van de buitenschil (ramen, gevel, dak en isolatie) tot technieken (elektriciteit, verwarming, sanitair) en binnenafwerking (vloeren, wanden, keuken, badkamer).",
          "In Antwerpen gaat het vaak om rijhuizen, herenhuizen of appartementen die in één project worden aangepakt. De combinatie van stedelijke bereikbaarheid, strikte bouwnormen en de nood aan snelle uitvoering maakt een goede aannemer essentieel.",
        ],
      },
      {
        title: "Wat zijn de richtprijzen voor totaalrenovatie in Antwerpen?",
        paragraphs: [
          "De prijs van een totaalrenovatie in Antwerpen hangt sterk af van de omvang, de keuze van materialen en de staat van de woning. Globaal kunt u rekenen op:",
        ],
        bullets: [
          "Lichte renovatie (enkel buitenschil of technieken): €300–€600/m²",
          "Uitgebreide renovatie (buitenschil + technieken): €600–€1.000/m²",
          "Totaalrenovatie inclusief binnenafwerking: €1.000–€1.800/m²",
          "Specifiek gevelrenovatie met isolatie en crepi: €80–€150/m² gevelvlak",
          "Nieuwe ramen en deuren: €400–€900 per raam/deur inclusief plaatsing",
        ],
      },
      {
        title: "Hoe faseert u een renovatie in Antwerpen slim?",
        paragraphs: [
          "De meeste experts adviseren te starten met de buitenschil: ramen, gevel en dak. Reden: zolang de buitenschil lekt of slecht isoleert, heeft binnenafwerking weinig zin. Moisture, tocht en warmteverlies tasten alles aan.",
          "Na de buitenschil volgen technieken (verwarming, elektriciteit, sanitair) en daarna pas de binnenafwerking. Wie deze volgorde volgt, vermijdt dat verse vloeren of plafonds later opnieuw opengebroken moeten worden.",
        ],
        bullets: [
          "Fase 1: buitenschil — ramen, deuren, gevel, isolatie, dak",
          "Fase 2: technieken — cv-installatie, elektriciteit, ventilatie, sanitair",
          "Fase 3: binnenafwerking — vloeren, wanden, plafonds, keuken, badkamer",
        ],
      },
      {
        title: "Welke premies zijn er voor totaalrenovatie in Antwerpen?",
        paragraphs: [
          "In Antwerpen kunt u voor een totaalrenovatie meerdere premies combineren. Mijn VerbouwPremie is de Vlaamse premie voor energiebesparende werken: gevelisolatie, dakisolatie, ramen met HR++ glas en ventilatie komen in aanmerking.",
          "Naast de Vlaamse premies heeft Antwerpen ook stedelijke energiepremies voor bepaalde wijken en doelgroepen. Door meerdere werken samen aan te vragen, maximaliseert u het premiebedrag.",
        ],
      },
      {
        title: "Waarom één aannemer voor de buitenschil?",
        paragraphs: [
          "Wie ramen, gevel en isolatie bij verschillende aannemers bestelt, riskeert planningsproblemen, aansluitingsfouten en discussies over verantwoordelijkheid. Een aannemer die alle buitenschilwerken coördineert, garandeert een technisch correcte aansluiting tussen ramen en gevelisolatie — cruciaal om koudebruggen en vochtproblemen te vermijden.",
          "Yannova specialiseert zich precies in deze buitenschilrenovaties in Antwerpen en omgeving. Eén aanspreekpunt, vaste ploeg, geen onderaannemers voor de kernwerken.",
        ],
      },
      {
        title: "Wat zijn typische valkuilen bij renovatie in Antwerpen?",
        paragraphs: [
          "De meest voorkomende fouten zijn: starten met binnenafwerking terwijl de buitenschil nog lekt, de volgorde van technieken verkeerd plannen, en te laat nadenken over vergunningen en premie-voorwaarden.",
          "In Antwerpen speelt ook de stedelijke context mee: beperkte parkeermogelijkheden voor machines, omgevingsvergunning voor gevelwijzigingen, en specifieke regels in bepaalde wijken of beschermde zones.",
        ],
      },
    ],
    ctaTitle: "Totaalrenovatie plannen in Antwerpen?",
    ctaText: "Yannova bespreekt graag uw project ter plaatse: van de buitenschil tot een realistische budgetplanning en premie-advies op maat.",
    relatedSlugs: ["renovatiebedrijf-antwerpen", "ramen-vervangen-prijs-antwerpen", "energie-renovatie-premie-belgie"],
    howtoSteps: [
      { name: "Stap 1: Plaatsbezoek en inspectie", text: "Een adviseur van Yannova inspecteert de woning en brengt de prioriteiten voor de buitenschil in kaart." },
      { name: "Stap 2: Offerte per fase", text: "U ontvangt een gedetailleerde offerte per fase zodat u het budget stap voor stap kunt beheren." },
      { name: "Stap 3: Vergunningen en premie-aanvraag", text: "Yannova begeleidt u bij de nodige omgevingsvergunning en dient de premie-aanvraag voor u in." },
      { name: "Stap 4: Uitvoering buitenschil", text: "Het vaste team voert ramen, gevel en isolatiewerken uit in één aaneengesloten planning." },
      { name: "Stap 5: Oplevering en attesten", text: "Na oplevering ontvangt u alle technische attesten voor de premie-aanvraag en garantiedocumenten." },
    ],
  },
  {
    slug: "aannemer-antwerpen-kiezen",
    title: "Aannemer kiezen in Antwerpen: waar moet u op letten in 2026?",
    excerpt: "Hoe kiest u een betrouwbare aannemer in Antwerpen? De 7 belangrijkste criteria om een goede renovatieaannemer te herkennen.",
    description: "Op zoek naar een goede aannemer in Antwerpen? Ontdek de 7 criteria voor een betrouwbare renovatieaannemer, wat een correcte offerte inhoudt en welke valkuilen u vermijdt.",
    date: "2026-06-05",
    readTime: "6 min",
    category: "Advies",
    keywords: [
      "aannemer antwerpen",
      "aannemer kiezen antwerpen",
      "betrouwbare aannemer antwerpen",
      "renovatieaannemer antwerpen",
      "aannemer ramen antwerpen",
      "aannemer gevelrenovatie antwerpen",
    ],
    serviceTags: ["renovatie", "totaalrenovatie", "ramen-deuren", "gevelrenovatie"],
    cityTags: ["antwerpen", "berchem", "wilrijk", "deurne", "merksem"],
    dynamic: true,
    intro:
      "Een goede aannemer vinden in Antwerpen lijkt makkelijker dan het is. Er zijn honderden bedrijven actief, maar de kwaliteitsverschillen zijn enorm. In deze gids geeft Yannova u de 7 concrete criteria om een betrouwbare renovatieaannemer te herkennen — en de valkuilen te vermijden die renovaties duur en frustrerend maken.",
    keyPoints: [
      "Een betrouwbare aannemer werkt met een eigen vaste ploeg — geen rondtrekkende onderaannemers.",
      "Een goede offerte is gedetailleerd: materialen, hoeveelheden, tijdlijn en garanties staan er allemaal in.",
      "Vraag altijd naar referenties in uw buurt en bekijk recente projecten.",
      "Controleer of de aannemer erkend is (erkenningsnummer) en RSZ-gecompliant werkt.",
    ],
    sections: [
      {
        title: "Waarom is een goede aannemer kiezen in Antwerpen zo belangrijk?",
        paragraphs: [
          "Antwerpen heeft een grote en competitieve renovatiemarkt. Dat is goed voor de keuze, maar ook voor het risico: tussen serieuze bedrijven en minder betrouwbare aannemers zit een groot verschil in kwaliteit, communicatie en eindresultaat.",
          "Een slechte keuze van aannemer leidt tot meerwerk, discussies, vertragingen en soms structurele problemen die jaren later opduiken. Een grondige selectie vooraf is de beste investering die u kunt doen.",
        ],
      },
      {
        title: "De 7 criteria voor een betrouwbare aannemer in Antwerpen",
        paragraphs: [
          "Gebruik deze checklist wanneer u offertes vergelijkt en aannemers beoordeelt:",
        ],
        bullets: [
          "1. Eigen vaste ploeg — geen rondtrekkende onderaannemers die u niet kent",
          "2. Transparante offerte — gedetailleerd per post, met materialen en garanties",
          "3. Referenties in uw regio — recente projecten die u kunt bekijken of navragen",
          "4. Erkenningsnummer — controleer via de Kruispuntbank of het RSZ-nummer correct is",
          "5. Duidelijke communicatie — snel bereikbaar, heldere planning, schriftelijke afspraken",
          "6. Premie-kennis — kennis van Mijn VerbouwPremie en lokale subsidies",
          "7. Garanties op materiaal én uitvoering — niet alleen op producten, ook op plaatsing",
        ],
      },
      {
        title: "Wat zegt een goede offerte over een aannemer?",
        paragraphs: [
          "Een offerte is de eerste echte test voor een aannemer. Een goede offerte beschrijft exact welke werken worden uitgevoerd, welke materialen worden gebruikt (merk, type, dikte), hoeveel m² of stuks, en wat de garantietermijnen zijn.",
          "Een vage offerte met enkel een totaalprijs is een alarmsignaal. Hoe minder detail, hoe groter het risico op discussies achteraf over wat er al dan niet inbegrepen was.",
        ],
      },
      {
        title: "Plaatsbezoek: verplicht voor een correcte prijs",
        paragraphs: [
          "Een serieuze aannemer geeft nooit een vaste prijs zonder uw woning te hebben gezien. Zeker in Antwerpen, waar bereikbaarheid, parkeerobstructies en de specifieke toestand van een pand de uitvoeringskosten sterk beïnvloeden.",
          "Een aannemer die op basis van een foto of telefonische beschrijving al een scherpe prijs communiceert, is ofwel heel naïef of rekent later meerwerk aan. Vraag altijd om een gratis plaatsbezoek voordat u een offerte bespreekt.",
        ],
      },
      {
        title: "Specialisatie versus algemeen aannemer: wanneer kiest u wat?",
        paragraphs: [
          "Voor specifieke werken zoals ramen en deuren, gevelrenovatie of gevelisolatie is een gespecialiseerde aannemer vaak beter dan een algemeen renovatiebedrijf. Specialisten hebben meer ervaring met de specifieke technieken, betere toegang tot kwaliteitsmaterialen en efficiëntere uitvoering.",
          "Voor een totaalrenovatie heeft u een coördinerende aannemer nodig die alle disciplines aanstuurt. Let er op dat deze aannemer ook voor de buitenschilwerken een eigen ploeg heeft — dat is waar de meeste kwaliteitsverschillen zichtbaar worden.",
        ],
      },
      {
        title: "Hoe gaat Yannova te werk in Antwerpen?",
        paragraphs: [
          "Yannova werkt met een vaste ploeg voor alle buitenschilwerken: ramen en deuren, gevelrenovatie, isolatie en crepi. Geen onderaannemers voor de kernwerken. Eén aanspreekpunt van plaatsbezoek tot oplevering.",
          "We geven altijd een gedetailleerde offerte na een gratis plaatsbezoek, inclusief premie-advies en een realistische planning. Zo weet u op voorhand precies wat u kunt verwachten.",
        ],
      },
    ],
    ctaTitle: "Op zoek naar een betrouwbare aannemer in Antwerpen?",
    ctaText: "Neem contact op met Yannova voor een gratis plaatsbezoek en een transparante offerte voor ramen, gevel of renovatiewerken in Antwerpen.",
    relatedSlugs: ["totaalrenovatie-antwerpen-prijs", "ramen-vervangen-prijs-antwerpen", "renovatie-vergunning-antwerpen"],
  },
  {
    slug: "gevelisolatie-subsidie-antwerpen-2026",
    title: "Gevelisolatie subsidie Antwerpen 2026: alles over premies en voordelen",
    excerpt: "Welke subsidies zijn er in 2026 voor gevelisolatie in Antwerpen? Mijn VerbouwPremie, stedelijke premies en hoe u ze combineert.",
    description: "Overzicht van alle subsidies voor gevelisolatie in Antwerpen in 2026. Mijn VerbouwPremie, stedelijke premies, EPB-attesten en wat Yannova voor u regelt.",
    date: "2026-06-05",
    readTime: "6 min",
    category: "Premies",
    keywords: [
      "gevelisolatie subsidie antwerpen",
      "premie gevelisolatie antwerpen 2026",
      "mijn verbouwpremie gevelisolatie",
      "subsidie buitenisolatie antwerpen",
      "gevelisolatie premie vlaanderen 2026",
      "epc verbeteren premie antwerpen",
    ],
    serviceTags: ["gevelisolatie", "gevelrenovatie"],
    cityTags: ["antwerpen"],
    dynamic: true,
    intro:
      "Gevelisolatie in Antwerpen is niet alleen goed voor uw comfort en energiefactuur — in 2026 zijn er ook substantiële subsidies beschikbaar. In deze gids zetten we alle premies voor buitengevelisolatie op een rij en leggen we uit hoe u ze combineert voor het maximale voordeel.",
    keyPoints: [
      "Via Mijn VerbouwPremie kunt u in 2026 een subsidie van 20% tot 50% van de kostprijs terugkrijgen voor gevelisolatie.",
      "Voor gevelisolatie moet de R-waarde van het isolatiemateriaal minimaal 3,5 m²K/W bedragen.",
      "Combineer gevelisolatie met ramen en dak voor nog hogere premies via het renovatiepakket.",
      "Yannova bezorgt alle EPB-attesten en technische documentatie voor uw premie-aanvraag.",
    ],
    sections: [
      {
        title: "Welke premies zijn er voor gevelisolatie in Antwerpen in 2026?",
        paragraphs: [
          "De belangrijkste subsidie voor gevelisolatie in Antwerpen is Mijn VerbouwPremie van de Vlaamse overheid. Deze premie geldt voor alle eigenaar-bewoners en verhuurders in het Vlaams Gewest die energiebesparende werken laten uitvoeren.",
          "Naast de Vlaamse premie heeft de stad Antwerpen voor bepaalde doelgroepen en wijken aanvullende energiepremies. Het is zinvol om beide premiekanalen te controleren voor u start.",
        ],
        bullets: [
          "Mijn VerbouwPremie: 20% tot 50% van de factuur (afhankelijk van inkomenscategorie)",
          "Maximale premie per woning voor gevelisolatie: tot €5.000 (te controleren voor uw situatie)",
          "Combinatiepremie bij gevelisolatie + ramen + dak: hogere totaalpremie mogelijk",
          "Stedelijke Antwerpen-premies: check bij het Energiehuis Antwerpen",
        ],
      },
      {
        title: "Aan welke technische eisen moet gevelisolatie voldoen voor premie?",
        paragraphs: [
          "Om in aanmerking te komen voor Mijn VerbouwPremie moet de gevelisolatie voldoen aan een minimale R-waarde van 3,5 m²K/W. In de praktijk betekent dit minstens 10 cm EPS-isolatieplaten of een gelijkwaardig systeem.",
          "De isolatiewerken moeten uitgevoerd worden door een erkende aannemer en gedocumenteerd worden met een EPB-attest. Yannova zorgt voor alle vereiste technische documentatie.",
        ],
      },
      {
        title: "Hoe vraagt u de premie aan voor gevelisolatie in Antwerpen?",
        paragraphs: [
          "De aanvraag voor Mijn VerbouwPremie gebeurt via het online platform van de Vlaamse overheid, na uitvoering van de werken. U heeft de factuur van de aannemer en het EPB-conformiteitsattest nodig.",
          "Yannova bezorgt u na de werken alle nodige documenten: de technische fiche van de isolatie, het bewijs van R-waarde, en een factuur met de vereiste vermelding van het erkenningsnummer.",
        ],
      },
      {
        title: "Wat is het financiële voordeel van gevelisolatie in Antwerpen?",
        paragraphs: [
          "De combinatie van lagere energiekosten en premies maakt gevelisolatie een sterke investering. Voor een gemiddeld rijhuis in Antwerpen met 80 m² te isoleren gevelvlak rekent u:",
        ],
        bullets: [
          "Investering gevelisolatie met crepi: €6.400 – €12.000",
          "Mijn VerbouwPremie (gemiddeld 30%): €1.900 – €3.600 terug",
          "Jaarlijkse energiebesparing: €350 – €600 per jaar",
          "Netto terugverdientijd: 7 tot 12 jaar",
          "Meerwaarde woning door EPC-verbetering: significant",
        ],
      },
      {
        title: "Waarom is 2026 een goed moment voor gevelisolatie in Antwerpen?",
        paragraphs: [
          "De renovatieverplichting in Vlaanderen verplicht eigenaar-bewoners van woningen met EPC-label E of F om te renoveren na aankoop of bij overdracht. Voor wie nog niet verplicht is, is het verstandig om nu te handelen: de premies zijn momenteel relatief gunstig en de energieprijzen blijven volatiel.",
          "Bovendien verwacht men dat de technische eisen voor premies in de komende jaren zullen verstrengen. Wie nu isoleert, doet dit nog aan de huidige voorwaarden.",
        ],
      },
    ],
    ctaTitle: "Gevelisolatie in Antwerpen met maximale premies?",
    ctaText: "Yannova adviseert u over de beste isolatieoplossing voor uw woning in Antwerpen en verzorgt de volledige premie-aanvraag voor u.",
    relatedSlugs: ["energie-renovatie-premie-belgie", "hoeveel-kost-gevelrenovatie", "crepi-gevel-voordelen"],
  },
  {
    slug: "voordeur-vervangen-prijs-antwerpen",
    title: "Voordeur vervangen in Antwerpen: prijs, types en tips voor 2026",
    excerpt: "Wat kost een nieuwe voordeur in Antwerpen? PVC, aluminium of staal — alles op een rij inclusief inbraakwering en premies.",
    description: "Ontdek wat een nieuwe voordeur kost in Antwerpen in 2026. Vergelijk PVC, aluminium en stalen deuren, inbraakklassen en hoe u premies aanvraagt.",
    date: "2026-06-05",
    readTime: "5 min",
    category: "Prijzen",
    keywords: [
      "voordeur vervangen antwerpen",
      "nieuwe voordeur antwerpen prijs",
      "voordeur plaatsen antwerpen",
      "aluminium voordeur antwerpen",
      "pvc voordeur antwerpen",
      "inbraakwerende deur antwerpen",
      "voordeur prijs 2026",
    ],
    serviceTags: ["ramen-deuren", "deuren"],
    cityTags: ["antwerpen", "berchem", "deurne", "wilrijk"],
    dynamic: true,
    intro:
      "Een nieuwe voordeur is meer dan een esthetische keuze. In Antwerpen, waar inbraakcijfers hoger liggen dan op het platteland, maakt de juiste deur een reëel verschil in veiligheid. Maar ook isolatie, uitstraling en onderhoud spelen mee. In deze gids zetten we alles op een rij.",
    keyPoints: [
      "Een kwalitatieve aluminium voordeur in Antwerpen kost gemiddeld €1.500 tot €3.500 inclusief plaatsing.",
      "Inbraakklasse RC2 is de minimumstandaard voor stedelijke woningen in Antwerpen.",
      "PVC deuren zijn goedkoper maar minder geschikt voor grote, zware voordeuren.",
      "Mijn VerbouwPremie dekt soms ook deuren als onderdeel van een bredere renovatie.",
    ],
    sections: [
      {
        title: "Welke types voordeur zijn er?",
        paragraphs: [
          "De drie meest voorkomende materialen voor voordeuren in Antwerpen zijn aluminium, PVC en staal. Elk heeft zijn sterktes afhankelijk van uw situatie.",
          "Aluminium is verreweg de populairste keuze voor voordeuren in Antwerpen. Het is sterk, strak en verkrijgbaar in elke RAL-kleur. PVC wordt minder gebruikt voor voordeuren omdat het bij zware afmetingen minder vormvast is. Stalen deuren zijn de sterkste optie en worden soms gekozen voor karakter of maximale veiligheid.",
        ],
        bullets: [
          "Aluminium: sterk, strak design, elke kleur, lange levensduur",
          "PVC: budgetvriendelijk, goed isolerend, minder geschikt voor zware deuren",
          "Staal: maximale stevigheid, karaktervol uiterlijk, hogere prijs",
        ],
      },
      {
        title: "Inbraakwering: wat heeft u nodig in Antwerpen?",
        paragraphs: [
          "Voor stedelijke woningen in Antwerpen raden wij minimaal inbraakklasse RC2 aan. Dit betekent dat de deur, het slot en het hang- en sluitwerk gecertificeerd zijn en een poging tot inbraak minstens 3 minuten weerstaan.",
          "RC2 is ook de klasse die verzekeringsmaatschappijen steeds vaker als minimumvereiste stellen voor woonverzekeringen in stedelijke gebieden. Yannova plaatst standaard deuren met SKG**-gecertificeerd beslag en een cilinder met verhoogde boormeerstand.",
        ],
      },
      {
        title: "Wat kost een nieuwe voordeur in Antwerpen?",
        paragraphs: [
          "De prijs van een voordeur hangt af van materiaal, inbraakklasse, afmetingen en afwerking. Een indicatie voor Antwerpen:",
        ],
        bullets: [
          "PVC voordeur (standaard afmetingen): €800 – €1.500 inclusief plaatsing",
          "Aluminium voordeur (RC2): €1.500 – €3.500 inclusief plaatsing",
          "Aluminium voordeur met zijlichten: €2.500 – €5.000",
          "Stalen voordeur op maat: €3.000 – €6.000+",
          "Extra opties: fingerprint-slot (+€200), glaspartijen (+€300), speciale kleur (+€150)",
        ],
      },
      {
        title: "Hoe lang duurt het plaatsen van een voordeur?",
        paragraphs: [
          "Het plaatsen van een voordeur duurt doorgaans een halve tot een volledige dag. Na de opmeting duurt de productie gemiddeld 3 tot 5 weken.",
          "In Antwerpen houden we rekening met de bereikbaarheid van uw woning, eventuele parkeervergunningen voor onze werkwagen en de specifieke eisen van bepaalde wijken of beschermde panden.",
        ],
      },
      {
        title: "Premies voor een nieuwe voordeur in Antwerpen",
        paragraphs: [
          "Een voordeur alleen komt doorgaans niet in aanmerking voor Mijn VerbouwPremie. Maar als u de deur combineert met andere energiewerken (ramen, gevelisolatie), kan de totaalinvestering wel gedeeltelijk in aanmerking komen.",
          "Voor inbraakwerende deuren zijn er soms kortingen via uw verzekeraar. Vraag dit na bij uw makelaar of verzekeringsmaatschappij.",
        ],
      },
    ],
    ctaTitle: "Nieuwe voordeur in Antwerpen?",
    ctaText: "Yannova plaatst aluminium en PVC voordeuren in Antwerpen en omgeving. Gratis opmeting aan huis, offerte binnen 24u.",
    relatedSlugs: ["ramen-vervangen-prijs-antwerpen", "aannemer-antwerpen-kiezen", "wat-kosten-nieuwe-ramen"],
  },
  {
    slug: "ramen-vervangen-wanneer-lonen",
    title: "Wanneer loont het om ramen te vervangen? De 5 signalen",
    excerpt: "Hoe weet u of uw ramen aan vervanging toe zijn? Deze 5 signalen vertellen u wanneer nieuwe ramen renderen.",
    description: "Wanneer is het tijd voor nieuwe ramen? Ontdek de 5 duidelijkste signalen dat uw ramen aan vervanging toe zijn en wanneer de investering loont.",
    date: "2026-06-05",
    readTime: "5 min",
    category: "Advies",
    keywords: [
      "wanneer ramen vervangen",
      "ramen vervangen nodig",
      "oude ramen vervangen",
      "condensatie ramen",
      "tocht ramen oplossen",
      "ramen aan vervanging toe",
    ],
    serviceTags: ["ramen-deuren", "ramen"],
    dynamic: true,
    intro:
      "Veel eigenaars twijfelen of het moment voor nieuwe ramen al aangebroken is. Soms zijn ramen visueel nog in orde maar presteren ze technisch al jaren slecht. In dit artikel leggen we de 5 duidelijkste signalen uit die aangeven dat uw ramen echt aan vervanging toe zijn.",
    keyPoints: [
      "Condensatie tussen de glasbladen is het duidelijkste teken dat uw beglazing defect is.",
      "Tocht bij gesloten ramen wijst op versleten dichtingen of vervormde profielen.",
      "Een hoge energiefactuur terwijl de verwarming altijd aan staat kan aan de ramen liggen.",
      "Ramen die moeilijk open of dicht gaan zorgen voor extra warmteverlies.",
    ],
    sections: [
      {
        title: "Signaal 1: Condensatie tussen de glasbladen",
        paragraphs: [
          "Als u mist of waterdruppels ziet tussen de twee glasbladen van uw dubbelglas, is de isolerende gasvulling (argon of lucht) verloren gegaan. Dit betekent dat het glas zijn isolerende werking heeft verloren en dat uw ramen thermisch niet meer presteren.",
          "Dit probleem kan soms worden opgelost door alleen het glas te vervangen zonder de profielen te wisselen. Als de profielen echter ook verouderd zijn, is een volledige vervanging meestal goedkoper en efficiënter.",
        ],
      },
      {
        title: "Signaal 2: Tocht bij gesloten ramen",
        paragraphs: [
          "Voelt u tocht bij gesloten ramen? Dan zijn de EPDM-dichtingen waarschijnlijk versleten of zijn de profielen licht vervormd door jarenlang gebruik. Dit zorgt niet alleen voor oncomfort maar ook voor een merkbaar hoger energieverbruik.",
          "Een simpele test: houd een aansteker of kaarsje bij de raamrand. Flakkert de vlam, dan is er tocht. Nieuwe ramen met meerkamerprofielen zijn volledig luchtdicht en elimineren dit probleem direct.",
        ],
      },
      {
        title: "Signaal 3: Hoge energiefactuur",
        paragraphs: [
          "Ramen zijn verantwoordelijk voor 20 tot 30% van het warmteverlies in een gemiddelde woning. Als uw energiefactuur hoog blijft ondanks een zuinige verwarming, kunnen de ramen een grote oorzaak zijn.",
          "Oude enkelglas- of verouderd dubbelglas-ramen hebben een U-waarde van 2,5 tot 5,8 W/m²K. Nieuwe HR++ ramen halen 1,1 W/m²K. Dat verschil is direct voelbaar in uw factuur.",
        ],
      },
      {
        title: "Signaal 4: Ramen die moeilijk bewegen",
        paragraphs: [
          "Ramen die stijf zijn, klemmen of niet meer goed afsluiten zijn een teken van profiel-vervorming of slijtage van het hang- en sluitwerk. Naast het ongemak zorgt dit ook voor luchtlekken die energie verspillen.",
          "Soms kan dit worden opgelost met een afstelling, maar bij oudere ramen is de vervorming vaak structureel en loont enkel volledige vervanging.",
        ],
      },
      {
        title: "Signaal 5: Ramen ouder dan 20 jaar",
        paragraphs: [
          "De meeste ramen en beglazing hebben een technische levensduur van 20 tot 30 jaar. Daarna neemt de isolatiewaarde af, ook als er geen zichtbare problemen zijn. Als uw ramen ouder zijn dan 20 jaar, is een inspectie door een vakman altijd zinvol.",
          "Zeker in combinatie met een nakende gevelrenovatie of andere energiewerken is dit het ideale moment: door alles te combineren bespaart u op de totale kost en geniet u van de maximale premies.",
        ],
      },
      {
        title: "Wanneer loont vervanging het meest?",
        paragraphs: [
          "Ramen vervangen loont het hardst wanneer u meerdere signalen tegelijk ziet, wanneer u toch al andere bouwwerken plant, of wanneer uw EPC-score een verbetering nodig heeft. De combinatie van lagere energiekosten en premies van Mijn VerbouwPremie maakt de investering in de meeste gevallen terug op 5 tot 8 jaar.",
          "Vraag een gratis opmeting aan — dan ziet u ter plaatse wat de staat van uw ramen is en wat de meest rendabele aanpak is voor uw situatie.",
        ],
      },
    ],
    ctaTitle: "Twijfelt u of uw ramen aan vervanging toe zijn?",
    ctaText: "Yannova komt gratis langs voor een inspectie en geeft u eerlijk advies over wat nodig is en wat het oplevert.",
    relatedSlugs: ["wat-kosten-nieuwe-ramen", "pvc-of-aluminium-ramen", "premies-ramen-deuren-2026"],
  },
  {
    slug: "schuifdeuren-prijs-types-antwerpen",
    title: "Schuifdeuren in Antwerpen: prijs, types en wat past bij uw woning",
    excerpt: "Wat kost een schuifdeur in Antwerpen? Vergelijk hef-schuif, vouwwand en zwart aluminium — met prijzen en tips.",
    description: "Alles over schuifdeuren in Antwerpen: hef-schuifsystemen, vouwwanden, prijzen vanaf €2.000 en hoe u de juiste keuze maakt voor uw woning of tuin.",
    date: "2026-06-05",
    readTime: "5 min",
    category: "Advies",
    keywords: [
      "schuifdeuren antwerpen",
      "schuifdeur prijs antwerpen",
      "hef schuifdeur antwerpen",
      "vouwwand antwerpen",
      "aluminium schuifdeur antwerpen",
      "schuifdeur tuin antwerpen",
      "terrasdeuren antwerpen",
    ],
    serviceTags: ["ramen-deuren", "deuren"],
    cityTags: ["antwerpen", "berchem", "wilrijk", "deurne"],
    dynamic: true,
    intro:
      "Schuifdeuren zijn de populairste manier om woning en tuin naadloos te verbinden. In Antwerpen zien we steeds meer vraag naar grote glaspartijen met slanke aluminium profielen. In deze gids vergelijken we de types, prijzen en wat het beste past bij uw woning.",
    keyPoints: [
      "Een hef-schuifdeur in aluminium kost in Antwerpen gemiddeld €2.500 tot €5.000 inclusief plaatsing.",
      "Hef-schuifdeuren zijn luchtdichter en zwaarder belastbaar dan klassieke schuifdeuren.",
      "Voor grote openingen zijn vouwwanden (openslaande glaswand) de meest spectaculaire optie.",
      "Drempelloos (flat threshold) is mogelijk en verplicht bij nieuwe constructies.",
    ],
    sections: [
      {
        title: "Welke types schuifdeuren zijn er?",
        paragraphs: [
          "Er zijn drie hoofdtypes: de klassieke schuifdeur, de hef-schuifdeur en de vouwwand. Voor woningen in Antwerpen is de hef-schuifdeur verreweg de meest populaire keuze voor terras- en tuinopeningen.",
          "Een klassieke schuifdeur schuift over een bodem- en bovengeleider. Een hef-schuifdeur wordt bij opening iets opgeheven van de drempel, wat een veel soepeler bediening geeft en een betere luchtdichtheid oplevert. Een vouwwand bestaat uit meerdere glasdelen die als harmonica openvouwen voor een volledige opening.",
        ],
        bullets: [
          "Klassieke schuifdeur: budgetvriendelijk, geschikt voor kleinere openingen",
          "Hef-schuifdeur: luchtdicht, soepel, voor grote openingen tot 6m breed",
          "Vouwwand: maximale opening, ideaal voor grote terrasopeningen",
        ],
      },
      {
        title: "Prijzen schuifdeuren in Antwerpen",
        paragraphs: [
          "De prijs hangt af van het type systeem, de breedte, het glas en het profiel. Voor een gemiddelde opening van 2,5 tot 3,5 meter kunt u rekenen op:",
        ],
        bullets: [
          "Klassieke PVC schuifdeur (2-delig): €900 – €1.800 incl. plaatsing",
          "Aluminium hef-schuifdeur (2-delig): €2.500 – €4.000 incl. plaatsing",
          "Aluminium hef-schuifdeur (3-delig breed): €3.500 – €6.000 incl. plaatsing",
          "Vouwwand aluminium (4 vleugels): €4.000 – €8.000 incl. plaatsing",
          "Extra opties: drempelloos (+€300), zonwerend glas (+€400), smartlock (+€250)",
        ],
      },
      {
        title: "Zwart aluminium: trend of duurzame keuze?",
        paragraphs: [
          "Antraciet (RAL 7016) en mat zwart zijn momenteel de meest gevraagde kleuren voor schuifdeuren in Antwerpen. Ze geven een moderne, architecturale uitstraling en combineren goed met zowel klassieke als eigentijdse woningen.",
          "Poederlak op aluminium is zeer duurzaam en houdt zijn kleur tientallen jaren zonder bij te kleuren of te onderhouden. Het is geen modegril maar een waardevolle investering.",
        ],
      },
      {
        title: "Wat moet u weten voor plaatsing in Antwerpen?",
        paragraphs: [
          "In Antwerpen gelden bij het vergroten van een raam- of deuropening naar buiten toe specifieke regels. Als u een muur doorbreekt voor een grotere schuifdeur, is een omgevingsvergunning nodig. Yannova begeleidt u in dit proces.",
          "Ook bereikbaarheid speelt mee: grote schuifdeuren worden in stukken geleverd maar vragen ruimte voor het plaatsen. We checken dit altijd vooraf zodat er op de dag zelf geen verrassingen zijn.",
        ],
      },
    ],
    ctaTitle: "Schuifdeuren laten plaatsen in Antwerpen?",
    ctaText: "Yannova plaatst hef-schuifdeuren en vouwwanden in Antwerpen en omgeving. Gratis opmeting, offerte binnen 24u.",
    relatedSlugs: ["ramen-vervangen-prijs-antwerpen", "voordeur-vervangen-prijs-antwerpen", "aannemer-antwerpen-kiezen"],
  },
  {
    slug: "ramen-plaatsen-berchem-schoten-wijnegem",
    title: "Ramen plaatsen in Berchem, Schoten en Wijnegem: specialist aan huis",
    excerpt: "Yannova plaatst PVC en aluminium ramen in Berchem, Schoten, Wijnegem en omgeving. Gratis opmeting, offerte binnen 24u.",
    description: "Op zoek naar een specialist voor ramen in Berchem, Schoten of Wijnegem? Yannova plaatst PVC en aluminium ramen met HR++ glas. Gratis opmeting aan huis.",
    date: "2026-06-05",
    readTime: "5 min",
    category: "Lokaal",
    keywords: [
      "ramen plaatsen berchem",
      "ramen schoten",
      "ramen wijnegem",
      "schrijnwerker berchem",
      "schrijnwerker schoten",
      "ramen vervangen berchem",
      "pvc ramen berchem",
      "aluminium ramen schoten",
    ],
    serviceTags: ["ramen-deuren", "ramen"],
    cityTags: ["berchem", "schoten", "wijnegem"],
    dynamic: true,
    intro:
      "Berchem, Schoten en Wijnegem hebben elk hun eigen woonkarakter maar één gemeenschappelijke behoefte: een betrouwbare lokale specialist voor ramen en deuren. Yannova werkt dagelijks in deze gemeenten en kent de specifieke woningtypen en verwachtingen van eigenaars in de regio.",
    keyPoints: [
      "Yannova werkt actief in Berchem, Schoten, Wijnegem en alle omliggende gemeenten.",
      "In Berchem zijn herenhuizen en appartementen de meest voorkomende projecten.",
      "Schoten en Wijnegem vragen vaak naar grotere raampartijen voor gezinswoningen.",
      "Gratis opmeting thuis in alle drie de gemeenten.",
    ],
    sections: [
      {
        title: "Ramen plaatsen in Berchem",
        paragraphs: [
          "Berchem is een dicht bebouwde gemeente met veel rijwoningen, herenhuizen en appartementen uit de 20e eeuw. Veel van deze woningen hebben ramen die dringend aan vervanging toe zijn. De combinatie van oud dubbel glas, versleten dichtingen en dunne profielen zorgt voor warmteverlies en geluidshinder.",
          "In Berchem werken we vaak met aluminium ramen voor de authentieke gevels van herenhuizen, waarbij strakke profielen en de juiste kleur het karakter van de woning bewaren. PVC is populair voor achtergevels en appartementen waar prijs en isolatie centraal staan.",
        ],
      },
      {
        title: "Ramen plaatsen in Schoten",
        paragraphs: [
          "Schoten heeft een mix van vrijstaande woningen, halfopen bebouwing en gezinswoningen. De vraag gaat hier vaker naar grotere raampartijen, schuifdeuren naar de tuin en energetische upgrades in het kader van een bredere renovatie.",
          "Yannova werkt regelmatig in Schoten voor projecten waarbij ramen worden gecombineerd met gevelrenovatie. Dit geeft de beste technische aansluiting en de hoogste energiewinst.",
        ],
      },
      {
        title: "Ramen plaatsen in Wijnegem",
        paragraphs: [
          "Wijnegem ligt strategisch tussen Antwerpen en de Kempen en heeft veel naoorlogse gezinswoningen en rijwoningen. In deze woningen zijn de ramen vaak nog origineel uit de jaren 70-80 en zijn ze dringend aan vervanging toe.",
          "In Wijnegem combineren we ramen vaak met een EPC-verbetering in het kader van Mijn VerbouwPremie. De premies kunnen oplopen tot enkele duizenden euro's afhankelijk van het inkomen en het aantal ramen.",
        ],
      },
      {
        title: "Werkwijze Yannova in de regio",
        paragraphs: [
          "We starten altijd met een gratis plaatsbezoek in uw gemeente. Daarna ontvangt u binnen 24 uur een gedetailleerde offerte per post (PVC of aluminium), per type beglazing (HR++ of triple glas) en per opning.",
          "Na akkoord plannen we de productie (4-6 weken) en de installatiedag in overleg met u. We werken met een vast team en laten geen rommel achter.",
        ],
      },
    ],
    ctaTitle: "Ramen laten plaatsen in Berchem, Schoten of Wijnegem?",
    ctaText: "Yannova komt gratis langs voor een opmeting. Offerte binnen 24u, professionele plaatsing door eigen vakmensen.",
    relatedSlugs: ["ramen-vervangen-prijs-antwerpen", "ramen-vervangen-wanneer-lonen", "premies-ramen-deuren-2026"],
  },
];

export function getBlogIndexPosts() {
  return [...blogPosts].sort((left, right) => right.date.localeCompare(left.date));
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}

export function getDynamicBlogPosts() {
  return blogPosts.filter((post) => post.dynamic);
}

export function getRelatedBlogPosts({
  currentSlug,
  serviceSlug,
  citySlug,
  limit = 3,
}: {
  currentSlug?: string;
  serviceSlug?: LocalSeoService["slug"];
  citySlug?: string;
  limit?: number;
}) {
  const scored = getBlogIndexPosts()
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      let score = 0;

      if (serviceSlug && post.serviceTags.includes(serviceSlug)) {
        score += 3;
      }

      if (citySlug && post.cityTags?.includes(citySlug)) {
        score += 2;
      }

      return { post, score };
    })
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score;
      }

      return right.post.date.localeCompare(left.post.date);
    });

  return scored.slice(0, limit).map((entry) => entry.post);
}
