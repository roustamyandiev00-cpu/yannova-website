module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(public)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(public)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(public)/error.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(public)/error.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(public)/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(public)/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(public)/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(public)/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/seo.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateSEO",
    ()=>generateSEO,
    "locationKeywords",
    ()=>locationKeywords
]);
const baseUrl = 'https://www.yannova.be';
function generateSEO({ title, description, path = '', keywords = [], image = '/og-image.jpg', noindex = false }) {
    const url = `${baseUrl}${path}`;
    const fullTitle = path === '' ? title : `${title} | Yannova`;
    return {
        title: fullTitle,
        description,
        keywords: [
            ...keywords,
            'ramen antwerpen',
            'deuren antwerpen',
            'renovatie antwerpen',
            'yannova'
        ],
        alternates: {
            canonical: url
        },
        openGraph: {
            title: fullTitle,
            description,
            url,
            type: 'website',
            locale: 'nl_BE',
            siteName: 'Yannova Bouw',
            images: [
                {
                    url: `${baseUrl}${image}`,
                    width: 1200,
                    height: 630,
                    alt: title
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [
                `${baseUrl}${image}`
            ]
        },
        robots: noindex ? {
            index: false,
            follow: false
        } : {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1
            }
        }
    };
}
const locationKeywords = {
    antwerpen: [
        'ramen antwerpen',
        'deuren antwerpen',
        'renovatie antwerpen',
        'gevelrenovatie antwerpen',
        'ramen antwerpen stad'
    ],
    berchem: [
        'ramen berchem',
        'deuren berchem',
        'renovatie berchem'
    ],
    deurne: [
        'ramen deurne',
        'deuren deurne',
        'renovatie deurne'
    ],
    merksem: [
        'ramen merksem',
        'deuren merksem',
        'renovatie merksem'
    ],
    wilrijk: [
        'ramen wilrijk',
        'deuren wilrijk',
        'renovatie wilrijk'
    ],
    mechelen: [
        'ramen mechelen',
        'deuren mechelen',
        'renovatie mechelen'
    ],
    zoersel: [
        'ramen zoersel',
        'deuren zoersel',
        'renovatie zoersel'
    ]
};
}),
"[project]/src/lib/breadcrumb-schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateBreadcrumbSchema",
    ()=>generateBreadcrumbSchema
]);
function generateBreadcrumbSchema(items) {
    const baseUrl = 'https://www.yannova.be';
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index)=>({
                '@type': 'ListItem',
                position: index + 1,
                name: item.name,
                item: `${baseUrl}${item.url}`
            }))
    };
}
}),
"[project]/src/lib/data/blog-posts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogPosts",
    ()=>blogPosts,
    "getBlogIndexPosts",
    ()=>getBlogIndexPosts,
    "getBlogPostBySlug",
    ()=>getBlogPostBySlug,
    "getDynamicBlogPosts",
    ()=>getDynamicBlogPosts,
    "getRelatedBlogPosts",
    ()=>getRelatedBlogPosts
]);
const blogPosts = [
    {
        slug: "prijs-renovatie-zoersel",
        title: "Wat kost renovatie in Zoersel in 2026?",
        excerpt: "Prijsrichtlijnen voor renovatie in Zoersel: van ramen en gevel tot totaalrenovatie en slimme fasering.",
        description: "Ontdek wat renovatie in Zoersel kost in 2026. Inclusief prijsvoorbeelden voor ramen, gevelrenovatie en totaalrenovatie, plus de factoren die uw budget beïnvloeden.",
        date: "2026-03-12",
        readTime: "7 min",
        category: "Prijzen",
        keywords: [
            "prijs renovatie zoersel",
            "renovatie zoersel prijs",
            "totaalrenovatie zoersel",
            "aannemer zoersel"
        ],
        serviceTags: [
            "renovatie",
            "totaalrenovatie",
            "ramen-deuren",
            "gevelrenovatie"
        ],
        cityTags: [
            "zoersel"
        ],
        dynamic: true,
        intro: "Wie zoekt op renovatie Zoersel wil meestal geen algemene richtprijzen, maar een realistisch budget voor een woning in de eigen regio. In deze gids zetten we de belangrijkste prijsblokken op een rij en leggen we uit hoe u werken slim kunt faseren.",
        keyPoints: [
            "Gerichte renovatiewerken: vanaf ongeveer €8.000",
            "Gevelrenovatie met isolatie: vaak €80 tot €150 per m²",
            "Nieuwe ramen en deuren: afhankelijk van materiaal, glas en aantal openingen",
            "Totaalrenovatie: budget wordt bepaald door technieken, afwerking en volgorde van de werken"
        ],
        sections: [
            {
                title: "Welke renovatiewerken worden het vaakst gecombineerd in Zoersel?",
                paragraphs: [
                    "In Zoersel zien we vaak renovatieprojecten waarbij de buitenschil centraal staat: nieuwe ramen en deuren, gevelisolatie, crepi of een grotere totaalrenovatie waarin ook binnenafwerking wordt meegenomen.",
                    "Omdat veel woningen in en rond Zoersel vrijstaand of halfopen zijn, loont het meestal om niet alleen naar één onderdeel te kijken. Wie ramen, gevel en algemene renovatiewerken samen bekijkt, haalt doorgaans een beter resultaat op vlak van comfort, EPC en planning."
                ],
                bullets: [
                    "Ramen en deuren vervangen om warmteverlies en tocht te beperken",
                    "Gevelrenovatie met isolatie om de buitenschil energetisch te verbeteren",
                    "Gefaseerde renovatie waarbij budget per fase wordt bewaakt"
                ]
            },
            {
                title: "Richtprijzen per type werk",
                paragraphs: [
                    "Voor kleinere renovatiewerken of een duidelijke eerste fase start het budget vaak vanaf een paar duizend euro, maar zodra meerdere onderdelen samenkomen, stijgt de kost snel door voorbereiding, materiaal en afwerking.",
                    "Nieuwe ramen en deuren worden geprijsd op basis van materiaal, glas, afmetingen en afwerking. Gevelrenovatie hangt vooral af van oppervlakte, isolatiedikte, herstelwerk en gekozen afwerking. Bij totaalrenovatie spelen technieken, afbraak, planning en binnenafwerking een veel grotere rol."
                ],
                bullets: [
                    "Ramen en deuren: prijs hangt sterk af van PVC of aluminium en het aantal openingen",
                    "Gevelrenovatie: reken op een prijs per m², afhankelijk van herstel en isolatie",
                    "Totaalrenovatie: budget op projectbasis met duidelijke fases en keuzes"
                ]
            },
            {
                title: "Wat duwt het budget omhoog?",
                paragraphs: [
                    "De grootste budgetversnellers zijn bijna altijd verborgen gebreken, bijkomende voorbereidende werken en te late beslissingen tijdens de uitvoering. Daarom is een goede opname vooraf essentieel.",
                    "Ook materiaalkeuze maakt een groot verschil. Aluminium ramen, zwaardere isolatiepakketten of een hogere afwerkingsgraad zijn logisch wanneer de woning en het doel dat vragen, maar ze moeten wel in verhouding staan tot het totale project."
                ]
            },
            {
                title: "Hoe houdt u renovatie in Zoersel financieel beheersbaar?",
                paragraphs: [
                    "De meest efficiënte aanpak is meestal starten met de buitenschil: ramen, deuren, gevel en isolatie. Daarna volgen technieken en binnenafwerking. Zo vermijdt u dat afgewerkte ruimtes later opnieuw open moeten.",
                    "Vraag ook altijd naar scenario's. Een offerte met een basisaanpak, een energetische upgrade en een totaaltraject maakt het eenvoudiger om het juiste evenwicht te vinden tussen investering en rendement."
                ]
            },
            {
                title: "Wanneer is een offerte echt bruikbaar?",
                paragraphs: [
                    "Een bruikbare offerte is meer dan een totaalprijs. Ze splitst materialen, voorbereiding, uitvoering en afwerking op, en ze maakt duidelijk welke keuzes nog openstaan.",
                    "Voor renovatie in Zoersel is het zinvol om zowel de werken op korte termijn als de logische volgende fase mee te bespreken. Dat voorkomt dat u vandaag goedkopere keuzes maakt die later extra kosten veroorzaken."
                ]
            }
        ],
        ctaTitle: "Renovatie in Zoersel bespreken?",
        ctaText: "Yannova bekijkt graag welke combinatie van ramen, gevel en renovatiewerken voor uw woning in Zoersel het meeste effect geeft.",
        relatedSlugs: [
            "prijs-renovatie-zoersel",
            "energie-renovatie-premie-belgie",
            "hoeveel-kost-gevelrenovatie"
        ]
    },
    {
        slug: "ramen-vervangen-prijs-antwerpen",
        title: "Ramen vervangen prijs in Antwerpen: waar moet u op rekenen?",
        excerpt: "Wat kost ramen vervangen in Antwerpen, welke factoren bepalen de prijs en wanneer loont PVC of aluminium?",
        description: "Ontdek de prijs van ramen vervangen in Antwerpen. We bekijken materiaal, glas, plaatsing, stadswoningen en slimme keuzes voor renovatieprojecten.",
        date: "2026-03-12",
        readTime: "6 min",
        category: "Prijzen",
        keywords: [
            "ramen vervangen prijs antwerpen",
            "ramen antwerpen prijs",
            "pvc ramen antwerpen",
            "aluminium ramen antwerpen"
        ],
        serviceTags: [
            "ramen-deuren"
        ],
        cityTags: [
            "antwerpen",
            "deurne",
            "merksem"
        ],
        dynamic: true,
        intro: "Bij ramen vervangen in Antwerpen is de context minstens even belangrijk als het product zelf. Stadspanden, rijwoningen en appartementen vragen een andere voorbereiding dan een vrijstaande woning, en dat ziet u ook terug in de prijs.",
        keyPoints: [
            "PVC is meestal de meest budgetvriendelijke keuze",
            "Aluminium wordt vaak gekozen bij grotere glaspartijen en strakkere architectuur",
            "Plaatsing in stedelijke context vraagt extra aandacht voor bereikbaarheid en afwerking",
            "Goede ramen leveren niet alleen comfort op, maar ook winst op EPC en geluidsdemping"
        ],
        sections: [
            {
                title: "Welke prijsfactoren zijn in Antwerpen doorslaggevend?",
                paragraphs: [
                    "De kost van ramen vervangen in Antwerpen wordt vooral bepaald door materiaal, beglazing, afmetingen, bereikbaarheid en de staat van de bestaande openingen.",
                    "Bij stadswoningen zien we vaker extra werk rond afbraak, transport, beperkte toegang en afwerking. Daardoor ligt de prijs niet alleen vast in het raam zelf, maar ook in de plaatsingscontext."
                ]
            },
            {
                title: "PVC of aluminium: wanneer kiest u wat?",
                paragraphs: [
                    "PVC is bijzonder sterk als u prijs, isolatie en onderhoudsgemak wilt combineren. Voor veel rijwoningen en renovatieprojecten in Antwerpen blijft het de meest rationele keuze.",
                    "Aluminium wordt interessanter bij grotere raamoppervlaktes, slanke profielen en een meer architecturale uitstraling. Het prijsverschil is reëel, maar kan verantwoord zijn wanneer lichtinval en design zwaarder wegen."
                ],
                bullets: [
                    "PVC: sterk op budget, isolatie en onderhoud",
                    "Aluminium: sterk op design, glasoppervlak en strakke afwerking",
                    "De juiste keuze hangt af van woningtype, gewenste stijl en totaalbudget"
                ]
            },
            {
                title: "Wat zit meestal in de prijs inbegrepen?",
                paragraphs: [
                    "Een goede prijsinschatting omvat meer dan de levering van nieuwe ramen. Demontage van oude profielen, transport, plaatsing, aansluiting, afwerking en eventuele dorpels of vensterbanken bepalen mee het totale plaatje.",
                    "Vraag daarom altijd na wat exact inbegrepen is. Een scherpe prijs zonder degelijke afwerking of duidelijke plaatsingsmethode is zelden de beste investering."
                ]
            },
            {
                title: "Wanneer loont ramen vervangen het meest?",
                paragraphs: [
                    "Ramen vervangen loont het hardst wanneer bestaande profielen tocht veroorzaken, de beglazing verouderd is of de gevel toch al aangepakt wordt. In die gevallen vermijdt u dubbel werk en verbetert u de woning in één beweging.",
                    "In Antwerpen wordt ramen vervangen ook vaak gekoppeld aan geluidscomfort. Zeker aan drukkere assen maken betere profielen en glas een voelbaar verschil."
                ]
            },
            {
                title: "Hoe vraagt u een correcte offerte aan?",
                paragraphs: [
                    "Geef naast afmetingen ook context mee: woningtype, verdieping, bereikbaarheid en gewenste afwerking. Dat helpt om sneller een bruikbare en realistische offerte te krijgen.",
                    "Wie twijfelt tussen PVC en aluminium doet er goed aan beide scenario's naast elkaar te laten prijzen. Zo vergelijkt u niet alleen de investering, maar ook het effect op comfort en uitstraling."
                ]
            }
        ],
        ctaTitle: "Prijs voor ramen vervangen in Antwerpen kennen?",
        ctaText: "Yannova maakt graag een duidelijke prijsinschatting voor uw woning in Antwerpen, Deurne, Merksem of omliggende buurten.",
        relatedSlugs: [
            "wat-kosten-nieuwe-ramen",
            "pvc-of-aluminium-ramen",
            "premies-ramen-deuren-2026"
        ]
    },
    {
        slug: "crepi-gevel-voordelen",
        title: "Crepi gevel voordelen: wanneer is crepi de juiste keuze?",
        excerpt: "De voordelen van crepi op een rij: uitstraling, isolatie, onderhoud en de situaties waarin crepi echt loont.",
        description: "Ontdek de voordelen van een crepi gevel. Wanneer is crepi slim, hoe combineert u het met isolatie en waar moet u op letten bij afwerking en onderhoud?",
        date: "2026-03-12",
        readTime: "6 min",
        category: "Advies",
        keywords: [
            "crepi gevel voordelen",
            "crepi gevel",
            "voordelen crepi",
            "gevelrenovatie crepi"
        ],
        serviceTags: [
            "crepi-gevel",
            "gevelrenovatie"
        ],
        dynamic: true,
        intro: "Crepi is populair omdat het tegelijk een esthetische en technische oplossing kan zijn. U geeft uw woning een nieuwe uitstraling, en als u crepi combineert met buitenisolatie verbetert u ook de energieprestatie van de gevel.",
        keyPoints: [
            "Crepi geeft een bestaande woning snel een strakke, hedendaagse uitstraling",
            "De afwerking combineert goed met buitenisolatie",
            "Een correcte opbouw en detailafwerking zijn bepalend voor duurzaamheid",
            "Crepi is vooral interessant wanneer gevelbeeld en energieprestatie samen belangrijk zijn"
        ],
        sections: [
            {
                title: "Waarom kiezen zoveel eigenaars voor crepi?",
                paragraphs: [
                    "Crepi maakt het mogelijk om een verouderde gevel visueel volledig te vernieuwen zonder de woning structureel te veranderen. Dat is een groot voordeel bij renovaties waar de basis nog goed is, maar de gevel gedateerd oogt.",
                    "Bovendien laat crepi zich perfect combineren met buitenisolatie. Daardoor is het niet alleen een esthetische keuze, maar ook een functionele investering in comfort en energieverbruik."
                ]
            },
            {
                title: "Welke voordelen merkt u in de praktijk?",
                paragraphs: [
                    "Het eerste voordeel is uitstraling. Een woning met een goed afgewerkte crepi-gevel oogt meteen verzorgd en eigentijds. Daarnaast voelt de woning vaak comfortabeler aan wanneer de gevel tegelijk geïsoleerd wordt.",
                    "Ook onderhoud speelt mee. Een kwalitatieve crepi-opbouw met aangepaste detaillering rond dorpels, plinten en aansluitingen blijft lang mooi en is relatief eenvoudig proper te houden."
                ],
                bullets: [
                    "Nieuwe uitstraling zonder volledige heropbouw van de gevel",
                    "Combineerbaar met gevelisolatie voor beter EPC",
                    "Minder warmteverlies en meer wooncomfort",
                    "Kleur- en structuurkeuze afgestemd op de woning"
                ]
            },
            {
                title: "Wanneer is crepi minder geschikt?",
                paragraphs: [
                    "Crepi is niet voor elke gevel automatisch de beste oplossing. Wanneer de ondergrond instabiel is, er zware vochtproblemen spelen of het architecturale karakter van de woning om een andere afwerking vraagt, moet eerst technisch bekeken worden wat haalbaar is.",
                    "Daarom is een plaatsbezoek cruciaal. Het gaat niet alleen om kleur en look, maar om de volledige opbouw van de gevel en de kwaliteit van de detaillering."
                ]
            },
            {
                title: "Wat bepaalt de levensduur?",
                paragraphs: [
                    "De duurzaamheid van crepi zit in de voorbereiding: correcte isolatieplaten, een degelijke wapening, de juiste basislagen en zorgvuldige afwerking aan alle randen en aansluitingen.",
                    "Ook waterafvoer is essentieel. Slechte detaillering aan vensterbanken, dakranden of plinten is een veel grotere risicofactor dan het crepi-materiaal zelf."
                ]
            },
            {
                title: "Hoe maakt u de juiste keuze?",
                paragraphs: [
                    "Bekijk crepi altijd in functie van de totale woning. Past het bij de architectuur, wilt u tegelijk isoleren en is een strakke buitenafwerking een prioriteit? Dan is crepi vaak een zeer sterke optie.",
                    "Laat altijd een scenario vergelijken met en zonder isolatie. Zo ziet u meteen wat het verschil is in investering, uitstraling en energetische winst."
                ]
            }
        ],
        ctaTitle: "Twijfelt u of crepi bij uw gevel past?",
        ctaText: "Yannova bekijkt graag ter plaatse of crepi, gevelisolatie of een bredere gevelrenovatie de juiste stap is voor uw woning.",
        relatedSlugs: [
            "hoeveel-kost-gevelrenovatie",
            "renovatie-vergunning-antwerpen",
            "energie-renovatie-premie-belgie"
        ]
    },
    {
        slug: "renovatie-vergunning-antwerpen",
        title: "Renovatie vergunning Antwerpen: wanneer moet u opletten?",
        excerpt: "Niet elke renovatie in Antwerpen vraagt een vergunning, maar bij gevelwijzigingen en grotere werken is voorbereiding cruciaal.",
        description: "Lees wanneer u in Antwerpen een vergunning of meldingsplicht moet bekijken bij renovatie, gevelwerken, ramen en totaalprojecten.",
        date: "2026-03-12",
        readTime: "6 min",
        category: "Advies",
        keywords: [
            "renovatie vergunning antwerpen",
            "gevelrenovatie vergunning antwerpen",
            "omgevingsvergunning renovatie antwerpen"
        ],
        serviceTags: [
            "renovatie",
            "totaalrenovatie",
            "gevelrenovatie",
            "ramen-deuren"
        ],
        cityTags: [
            "antwerpen"
        ],
        dynamic: true,
        intro: "Bij renovatie in Antwerpen is technische voorbereiding niet genoeg. Zeker in stedelijke context moet u ook goed inschatten of een omgevingsvergunning, melding of voorafgaand advies nodig is.",
        keyPoints: [
            "Interne werken zijn vaak eenvoudiger dan zichtbare wijzigingen aan de gevel",
            "Ramen, deuren en gevelaanpassingen aan straatzijde vragen extra aandacht",
            "Ook beschermd erfgoed of specifieke zones kunnen de regels verstrengen",
            "Een goede voorbereiding voorkomt stilstand en herwerk"
        ],
        sections: [
            {
                title: "Welke renovaties zijn meestal eenvoudig?",
                paragraphs: [
                    "Veel zuiver interne vernieuwingen vallen buiten de zwaardere vergunningsplicht, zolang u geen structurele of stedenbouwkundige wijzigingen doorvoert. Denk aan afwerking, beperkte vernieuwing of het vervangen van technieken zonder impact op het uitzicht van de woning.",
                    "Zodra de buitenschil verandert of het volume aangepast wordt, stijgt de kans dat u regels, meldingen of vergunningen moet bekijken."
                ]
            },
            {
                title: "Waar zitten de gevoeligste punten in Antwerpen?",
                paragraphs: [
                    "Gevelwijzigingen aan de straatzijde, ingrepen aan ramen en deuren die het uitzicht veranderen, uitbreidingen en ingrepen in beschermde of gevoelige zones verdienen altijd extra aandacht.",
                    "In Antwerpen speelt ook de stedelijke context mee. Wat in een randgemeente sneller kan, vraagt in de stad soms bijkomend overleg of een andere uitwerking."
                ],
                bullets: [
                    "Wijziging van uitzicht aan straatzijde",
                    "Grotere ingrepen aan volume of dak",
                    "Werken in zones met erfgoed- of beeldkwaliteitsregels"
                ]
            },
            {
                title: "Waarom is dit ook belangrijk voor prijs en planning?",
                paragraphs: [
                    "Een vergunningstraject of bijkomende voorbereiding heeft impact op de timing. Daarom moet dit vroeg in het project bekeken worden, zeker als meerdere werken samenlopen.",
                    "Wie pas tijdens de uitvoering vaststelt dat een aanpassing niet zomaar kan, riskeert vertraging, bijkomende kosten en wijzigingen in materiaal of detailafwerking."
                ]
            },
            {
                title: "Hoe pakt u dit praktisch aan?",
                paragraphs: [
                    "Werk met duidelijke foto's, beschrijf de bestaande toestand en wees concreet over wat u wil aanpassen. Bij ramen en deuren is het bijvoorbeeld nuttig om exact aan te geven of het uitzicht, de indeling of de kleur verandert.",
                    "Voor grotere trajecten is het verstandig om eerst een technisch en stedenbouwkundig haalbaar scenario vast te leggen, en pas daarna de uitvoering te plannen."
                ]
            },
            {
                title: "Wat kan Yannova hierin betekenen?",
                paragraphs: [
                    "Yannova begeleidt renovatieprojecten praktisch: we bekijken welke werken logisch samen horen, waar de gevoeligheden zitten en welke voorbereiding nodig is om zonder verrassingen te starten.",
                    "Voor Antwerpen is die voorbereiding extra waardevol, omdat timing, bereikbaarheid en regelgeving samen het verschil maken tussen een vlot project en een stilgevallen planning."
                ]
            }
        ],
        ctaTitle: "Renovatieproject in Antwerpen opstarten?",
        ctaText: "We bekijken graag samen welke werken technisch en praktisch logisch zijn, en waar u vooraf rekening mee moet houden.",
        relatedSlugs: [
            "prijs-renovatie-zoersel",
            "crepi-gevel-voordelen",
            "ramen-vervangen-prijs-antwerpen"
        ]
    },
    {
        slug: "energie-renovatie-premie-belgie",
        title: "Energie renovatie premie België: welke werken leveren het meeste op?",
        excerpt: "Niet elke premie is even interessant. Dit zijn de renovatiewerken die meestal het sterkste rendement geven op comfort en subsidie.",
        description: "Overzicht van energiegerichte renovatiepremies in België en Vlaanderen, en welke werken meestal het meeste opleveren voor eigenaars.",
        date: "2026-03-12",
        readTime: "7 min",
        category: "Premies",
        keywords: [
            "energie renovatie premie belgië",
            "renovatie premie belgie",
            "mijn verbouwpremie",
            "premie ramen deuren gevel"
        ],
        serviceTags: [
            "renovatie",
            "ramen-deuren",
            "gevelrenovatie",
            "crepi-gevel",
            "totaalrenovatie"
        ],
        dynamic: true,
        intro: "Premies zijn interessant, maar ze zijn zelden de enige reden om te renoveren. De echte winst zit in de combinatie van subsidie, lager verbruik, meer comfort en een sterkere woningwaarde.",
        keyPoints: [
            "Buitenschilwerken geven meestal de grootste combinatie van subsidie en energiewinst",
            "Ramen, deuren en gevelisolatie zijn vaak de eerste logische stap",
            "Premies zijn pas interessant als de technische oplossing ook echt bij de woning past",
            "Een goede volgorde van werken voorkomt dat u subsidie misloopt of dubbel werk betaalt"
        ],
        sections: [
            {
                title: "Waarom eerst naar de buitenschil kijken?",
                paragraphs: [
                    "Bij veel woningen zit de grootste energetische winst in ramen, deuren, gevel en isolatie. Dat zijn ook precies de werken die vaak in aanmerking komen voor premie-ondersteuning.",
                    "Wie eerst de buitenschil op orde zet, krijgt niet alleen meer comfort, maar vermijdt ook dat latere investeringen minder efficiënt worden door warmteverlies of verouderde openingen."
                ]
            },
            {
                title: "Welke werken leveren meestal het meeste op?",
                paragraphs: [
                    "Nieuwe ramen en deuren zijn sterk wanneer de bestaande profielen verouderd zijn of de beglazing nog zwak presteert. Gevelisolatie en crepi worden interessant wanneer de woning veel warmte verliest via de buitenmuren en de uitstraling tegelijk een upgrade mag krijgen.",
                    "In grotere trajecten maakt totaalrenovatie het mogelijk om meerdere premiegeschikte werken logisch te bundelen, maar dan is de volgorde en documentatie extra belangrijk."
                ],
                bullets: [
                    "Ramen en deuren voor comfort, geluidsdemping en energieverlies",
                    "Gevelisolatie en crepi voor een sterke buitenschil",
                    "Gefaseerde renovatie om premie en planning slim te combineren"
                ]
            },
            {
                title: "Wanneer krijgt premie te veel aandacht?",
                paragraphs: [
                    "Een premie mag nooit de enige reden zijn om voor een bepaald systeem of materiaal te kiezen. Soms is een oplossing die technisch beter past bij de woning uiteindelijk interessanter, ook als de subsidie beperkter is.",
                    "Daarom is goed advies belangrijk: eerst bekijken wat de woning nodig heeft, daarna zien hoe premie daar logisch op aansluit."
                ]
            },
            {
                title: "Hoe voorkomt u dat u kansen mist?",
                paragraphs: [
                    "Bewaar offertes, facturen en technische info zorgvuldig. Werk ook met een duidelijke planning zodat premies, uitvoering en eventuele bijkomende fases op elkaar afgestemd blijven.",
                    "Voor wie meerdere ingrepen plant, is het vaak interessanter om vooraf het totaalplaatje te bekijken in plaats van per onderdeel ad hoc te beslissen."
                ]
            },
            {
                title: "Wat is de slimste volgorde?",
                paragraphs: [
                    "Meestal begint een slim traject met ramen, deuren en/of gevel. Daarna volgen technieken en binnenafwerking. Zo bouwt u eerst de energieprestatie en het comfort op, en daarna de rest van de woning.",
                    "Dat is precies de reden waarom lokale SEO-pagina&apos;s voor ramen, gevelrenovatie en totaalrenovatie elkaar intern moeten versterken: ze horen inhoudelijk ook echt samen."
                ]
            }
        ],
        ctaTitle: "Wilt u weten welke premiegericht renovatiepad logisch is?",
        ctaText: "Yannova helpt u graag prioriteiten te leggen tussen ramen, gevel, isolatie en bredere renovatiewerken.",
        relatedSlugs: [
            "premies-ramen-deuren-2026",
            "hoeveel-kost-gevelrenovatie",
            "prijs-renovatie-zoersel"
        ]
    },
    {
        slug: "wat-kosten-nieuwe-ramen",
        title: "Wat kosten nieuwe ramen in 2026?",
        excerpt: "Ontdek de prijzen voor PVC en aluminium ramen en waar de prijs van afhangt.",
        description: "Ontdek de prijzen voor nieuwe ramen in 2026. PVC ramen vanaf €400/m², aluminium vanaf €600/m². Inclusief plaatsing en BTW.",
        date: "2026-03-08",
        readTime: "5 min",
        category: "Prijzen",
        keywords: [
            "ramen prijzen",
            "wat kosten ramen",
            "pvc ramen prijs",
            "aluminium ramen prijs"
        ],
        serviceTags: [
            "ramen-deuren"
        ]
    },
    {
        slug: "premies-ramen-deuren-2026",
        title: "Premies voor ramen en deuren in 2026",
        excerpt: "Overzicht van alle beschikbare premies in Vlaanderen voor nieuwe ramen en deuren.",
        description: "Overzicht van alle beschikbare premies in Vlaanderen voor nieuwe ramen en deuren.",
        date: "2026-03-08",
        readTime: "7 min",
        category: "Premies",
        keywords: [
            "premies ramen deuren",
            "ramen premie",
            "deuren premie",
            "mijn verbouwpremie"
        ],
        serviceTags: [
            "ramen-deuren"
        ]
    },
    {
        slug: "pvc-of-aluminium-ramen",
        title: "PVC of aluminium ramen: wat is beter?",
        excerpt: "Vergelijk de voor- en nadelen van PVC en aluminium ramen voor uw woning.",
        description: "Vergelijk de voor- en nadelen van PVC en aluminium ramen voor uw woning.",
        date: "2026-03-08",
        readTime: "6 min",
        category: "Tips",
        keywords: [
            "pvc of aluminium ramen",
            "aluminium ramen",
            "pvc ramen",
            "ramen vergelijken"
        ],
        serviceTags: [
            "ramen-deuren"
        ]
    },
    {
        slug: "energiebesparing-nieuwe-ramen",
        title: "Energiebesparing met nieuwe ramen",
        excerpt: "Bespaar tot 50% energie met HR++ glas. Bereken je terugverdientijd.",
        description: "Bespaar tot 50% energie met HR++ glas. Bereken je terugverdientijd.",
        date: "2026-03-09",
        readTime: "5 min",
        category: "Besparing",
        keywords: [
            "energiebesparing ramen",
            "hr++ glas besparen",
            "ramen isolatie"
        ],
        serviceTags: [
            "ramen-deuren"
        ]
    },
    {
        slug: "hoeveel-kost-gevelrenovatie",
        title: "Hoeveel kost gevelrenovatie in 2026?",
        excerpt: "Complete prijsoverzicht: €80-150/m² voor isolatie + crepi. Inclusief premies.",
        description: "Ontdek de prijzen voor gevelrenovatie met isolatie en crepi. Gemiddeld €80-150 per m². Inclusief premies en besparingen.",
        date: "2026-03-09",
        readTime: "6 min",
        category: "Prijzen",
        keywords: [
            "gevelrenovatie prijs",
            "kosten gevelrenovatie",
            "crepi prijs",
            "gevelisolatie kosten"
        ],
        serviceTags: [
            "gevelrenovatie",
            "crepi-gevel"
        ]
    }
];
function getBlogIndexPosts() {
    return [
        ...blogPosts
    ].sort((left, right)=>right.date.localeCompare(left.date));
}
function getBlogPostBySlug(slug) {
    return blogPosts.find((post)=>post.slug === slug) ?? null;
}
function getDynamicBlogPosts() {
    return blogPosts.filter((post)=>post.dynamic);
}
function getRelatedBlogPosts({ currentSlug, serviceSlug, citySlug, limit = 3 }) {
    const scored = getBlogIndexPosts().filter((post)=>post.slug !== currentSlug).map((post)=>{
        let score = 0;
        if (serviceSlug && post.serviceTags.includes(serviceSlug)) {
            score += 3;
        }
        if (citySlug && post.cityTags?.includes(citySlug)) {
            score += 2;
        }
        return {
            post,
            score
        };
    }).sort((left, right)=>{
        if (right.score !== left.score) {
            return right.score - left.score;
        }
        return right.post.date.localeCompare(left.post.date);
    });
    return scored.slice(0, limit).map((entry)=>entry.post);
}
}),
"[project]/src/app/(public)/blog/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-rsc] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-rsc] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/seo.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$breadcrumb$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/breadcrumb-schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$blog$2d$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/blog-posts.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateSEO"])({
    title: "Blog - Tips over Ramen, Deuren en Renovatie | Yannova",
    description: "Ontdek onze artikelen over ramen, deuren, renovatie, premies en prijzen. Expert advies voor uw renovatieproject.",
    path: "/blog",
    keywords: [
        "renovatie tips",
        "ramen prijzen",
        "premies vlaanderen",
        "renovatie advies"
    ]
});
const blogPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$blog$2d$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBlogIndexPosts"])();
function BlogPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$breadcrumb$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateBreadcrumbSchema"])([
                        {
                            name: "Home",
                            url: "/"
                        },
                        {
                            name: "Blog",
                            url: "/blog"
                        }
                    ]))
                }
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/blog/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-[#0a0c10]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 border-b border-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-3xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl sm:text-5xl font-bold text-white",
                                        children: [
                                            "Blog & ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-secondary",
                                                children: "Renovatie Tips"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/blog/page.tsx",
                                                lineNumber: 36,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/blog/page.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-6 text-xl text-gray-300 leading-relaxed",
                                        children: "Expert advies over ramen, deuren, renovatie en premies. Alles wat je moet weten voor je renovatieproject."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/blog/page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/blog/page.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/blog/page.tsx",
                            lineNumber: 33,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/blog/page.tsx",
                        lineNumber: 32,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                                children: blogPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/blog/${post.slug}`,
                                        className: "bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-sm text-secondary mb-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: post.category
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/blog/page.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/blog/page.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors",
                                                children: post.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/blog/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-400 mb-4 leading-relaxed",
                                                children: post.excerpt
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/blog/page.tsx",
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 text-sm text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/blog/page.tsx",
                                                                lineNumber: 63,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: new Date(post.date).toLocaleDateString("nl-BE")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/blog/page.tsx",
                                                                lineNumber: 64,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/blog/page.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/blog/page.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: post.readTime
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/blog/page.tsx",
                                                                lineNumber: 68,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/blog/page.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/blog/page.tsx",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 flex items-center gap-2 text-secondary font-medium",
                                                children: [
                                                    "Lees meer",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "h-4 w-4 group-hover:translate-x-1 transition-transform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/blog/page.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/blog/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, post.slug, true, {
                                        fileName: "[project]/src/app/(public)/blog/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/blog/page.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/blog/page.tsx",
                            lineNumber: 46,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/blog/page.tsx",
                        lineNumber: 45,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/blog/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/(public)/blog/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(public)/blog/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__038a305e._.js.map