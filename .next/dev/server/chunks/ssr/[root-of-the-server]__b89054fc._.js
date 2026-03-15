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
"[project]/src/lib/company.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "company",
    ()=>company
]);
const company = {
    name: "Yannova Bouw",
    phone: "+32 489 96 00 01",
    phoneDisplay: "+32 489 96 00 01",
    phoneHref: "tel:+32489960001",
    whatsappHref: "https://wa.me/32489960001",
    email: "info@yannova.be",
    address: "Zoersel",
    city: "Zoersel",
    zip: "2980",
    // Primaire werkgebieden (binnen 15km van Zoersel)
    areas: [
        "Zoersel",
        "Antwerpen",
        "Schilde",
        "Brasschaat",
        "Schoten",
        "Wijnegem",
        "Wommelgem",
        "Ranst",
        "Brecht",
        "Malle",
        "Westmalle",
        "Oelegem",
        "Zandhoven",
        "Massenhoven",
        "Hove",
        "Kontich",
        "Mortsel",
        "Edegem",
        "Boechout",
        "Lint",
        "Aartselaar",
        "Wilrijk",
        "Berchem",
        "Deurne",
        "Borgerhout",
        "Merksem",
        "Ekeren",
        "Kapellen",
        "Stabroek",
        "Berendrecht",
        "Zandvliet",
        "Mechelen",
        "Bonheiden",
        "Putte",
        "Berlaar",
        "Lier",
        "Nijlen",
        "Heist-op-den-Berg",
        "Grobbendonk",
        "Herentals",
        "Vorselaar",
        "Olen",
        "Westerlo",
        "Turnhout",
        "Oud-Turnhout",
        "Beerse",
        "Vosselaar",
        "Lille",
        "Kasterlee",
        "Geel",
        "Mol",
        "Balen",
        "Dessel",
        "Retie"
    ],
    // SEO keywords voor lokale vindbaarheid
    seoKeywords: [
        "ramen plaatsen",
        "deuren plaatsen",
        "PVC ramen",
        "aluminium ramen",
        "drievoudig glas",
        "HR++ beglazing",
        "gevelrenovatie",
        "crepi",
        "gevelisolatie",
        "totaalrenovatie",
        "renovatie",
        "verbouwing",
        "energiezuinige ramen",
        "premies renovatie",
        "EPC verbetering",
        "raamplaatsing",
        "deurplaatsing",
        "renovatiebedrijf",
        "aannemer",
        "bouwbedrijf",
        "schrijnwerk",
        "ramen op maat",
        "deuren op maat"
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
"[project]/src/lib/faq-schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "commonFAQs",
    ()=>commonFAQs,
    "generateFAQSchema",
    ()=>generateFAQSchema
]);
function generateFAQSchema(faqs) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq)=>({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer
                }
            }))
    };
}
const commonFAQs = {
    ramen: [
        {
            question: 'Wat kost het plaatsen van nieuwe ramen in Antwerpen?',
            answer: 'De prijs voor nieuwe ramen hangt af van het type, de grootte en het materiaal. Gemiddeld betaal je tussen €300 en €800 per m². Wij bieden een gratis opmeting en offerte binnen 24 uur.'
        },
        {
            question: 'Hoe lang duurt het plaatsen van ramen?',
            answer: 'Voor een gemiddelde woning duurt de plaatsing 1 tot 2 dagen. Dit hangt af van het aantal ramen en de complexiteit van de installatie.'
        },
        {
            question: 'Welke premies zijn er beschikbaar voor nieuwe ramen?',
            answer: 'In Vlaanderen kun je aanspraak maken op de renovatiepremie voor hoogrendementsbeglazing. De premie bedraagt tot €20 per m² glas. Bekijk onze premie-gids voor meer informatie.'
        }
    ],
    deuren: [
        {
            question: 'Wat zijn de voordelen van een nieuwe voordeur?',
            answer: 'Een nieuwe voordeur verbetert de isolatie, verhoogt de veiligheid en geeft je woning een frisse uitstraling. Moderne deuren zijn energiezuinig en onderhoudsvriendelijk.'
        },
        {
            question: 'Welke soorten deuren plaatst Yannova?',
            answer: 'Wij plaatsen voordeuren, achterdeuren, schuifdeuren en garagepoorten in verschillende materialen zoals PVC, aluminium en hout.'
        }
    ],
    renovatie: [
        {
            question: 'Wat houdt een totaalrenovatie in?',
            answer: 'Een totaalrenovatie omvat alle aspecten van je woning: van gevelwerken en isolatie tot ramen, deuren en binnenafwerking. Wij begeleiden je van A tot Z.'
        },
        {
            question: 'Hoe lang duurt een renovatieproject?',
            answer: 'Dit hangt af van de omvang. Een gevelrenovatie duurt gemiddeld 2-4 weken, een totaalrenovatie kan 2-6 maanden duren.'
        }
    ],
    gevelisolatie: [
        {
            question: 'Wat kost gevelisolatie?',
            answer: 'Gevelisolatie kost gemiddeld tussen €80 en €150 per m², afhankelijk van het type isolatie en afwerking. Met premies kan dit aanzienlijk goedkoper uitvallen.'
        },
        {
            question: 'Welke premies zijn er voor gevelisolatie?',
            answer: 'Je kunt aanspraak maken op de Vlaamse renovatiepremie voor muurisolatie. De premie bedraagt tot €50 per m². Bekijk onze premie-gids voor alle voorwaarden.'
        }
    ],
    isolatie: [
        {
            question: 'Welke isolatiewerken leveren meestal het snelste rendement op?',
            answer: 'Dat hangt af van waar uw woning vandaag warmte verliest. Bij veel woningen leveren dakisolatie en spouwmuurisolatie snel resultaat op, terwijl buitengevelisolatie vooral interessant wordt wanneer ook de gevelafwerking of het EPC grondig verbeterd moet worden.'
        },
        {
            question: 'Voert Yannova alleen gevelisolatie uit of ook andere isolatiewerken?',
            answer: 'Yannova helpt bij verschillende isolatiewerken zoals dakisolatie, spouwmuurisolatie, buitengevelisolatie en vloer- of kelderisolatie. We bekijken per woning welke combinatie technisch en budgettair het meest logisch is.'
        },
        {
            question: 'Zijn er premies mogelijk voor isolatiewerken?',
            answer: 'Voor veel isolatiewerken zijn er in Vlaanderen voorwaarden en premiekanalen zoals Mijn VerbouwPremie. Welke steun mogelijk is, hangt af van het type werk, de woning, de gekozen opbouw en de administratieve voorwaarden. Wij helpen u graag om dat praktisch in kaart te brengen.'
        },
        {
            question: 'Is het slim om isolatie te combineren met ramen of gevelrenovatie?',
            answer: 'Ja, vaak wel. Wie isolatie slim combineert met nieuwe ramen, gevelrenovatie of een bredere buitenschil-aanpak vermijdt dubbel werk en behaalt meestal een beter resultaat op vlak van comfort, luchtdichtheid, planning en EPC.'
        }
    ]
};
}),
"[project]/src/lib/data/local-proof.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLocalProofProjects",
    ()=>getLocalProofProjects,
    "localProofProjects",
    ()=>localProofProjects
]);
const localProofProjects = [
    {
        id: "proof-zoersel-gevel",
        citySlug: "zoersel",
        cityName: "Zoersel",
        title: "Gevel en buitenschil opgefrist bij open bebouwing",
        description: "Project rond gevelrenovatie en afwerking met focus op een rustig werfverloop en een strakke buitenzijde.",
        imageUrl: "/images/projects/crepi-1.jpg",
        result: "Nieuwe uitstraling en betere buitenschil voor een woning in Zoersel.",
        serviceSlugs: [
            "gevelrenovatie",
            "crepi-gevel",
            "renovatie"
        ]
    },
    {
        id: "proof-schilde-ramen",
        citySlug: "schilde",
        cityName: "Schilde",
        title: "Ramen en voordeur afgestemd op karakterwoning",
        description: "Vervanging van buitenschrijnwerk met aandacht voor uitstraling, detaillering en isolatiewinst.",
        imageUrl: "/images/projects/replacing_windows_no_people.png",
        result: "Meer comfort en een strakkere gevelaanblik in Schilde.",
        serviceSlugs: [
            "ramen-deuren",
            "renovatie"
        ]
    },
    {
        id: "proof-brasschaat-totaal",
        citySlug: "brasschaat",
        cityName: "Brasschaat",
        title: "Buitenschilrenovatie bij residentiële woning",
        description: "Combinatie van ramen, gevel en afwerkingskeuzes met nadruk op duurzame materialen.",
        imageUrl: "/images/projects/Gemini_Generated_Image_bf8tm8bf8tm8bf8t.jpg",
        result: "Coherente renovatiestijl en betere energetische basis.",
        serviceSlugs: [
            "totaalrenovatie",
            "renovatie",
            "ramen-deuren",
            "gevelrenovatie"
        ]
    },
    {
        id: "proof-malle-renovatie",
        citySlug: "malle",
        cityName: "Malle",
        title: "Gefaseerde renovatie met focus op comfort",
        description: "Praktische renovatiefase waarbij buitenschilwerken en verdere woningverbetering slim op elkaar zijn afgestemd.",
        imageUrl: "/images/projects/renovation_works_example.png",
        result: "Sterkere planning en beter comfort voor een gezinswoning in Malle.",
        serviceSlugs: [
            "renovatie",
            "totaalrenovatie"
        ]
    },
    {
        id: "proof-wijnegem-gevel",
        citySlug: "wijnegem",
        cityName: "Wijnegem",
        title: "Gevelrenovatie met moderne afwerking",
        description: "Aanpak gericht op uitstraling, isolatie en een verzorgde aansluiting rond ramen en dorpels.",
        imageUrl: "/images/projects/crepi-patterns.jpg",
        result: "Frissere gevel en duidelijk betere energieprestatie.",
        serviceSlugs: [
            "gevelrenovatie",
            "crepi-gevel"
        ]
    },
    {
        id: "proof-antwerpen-ramen",
        citySlug: "antwerpen",
        cityName: "Antwerpen",
        title: "Buitenschrijnwerk vernieuwd in stedelijke context",
        description: "Ramenproject waarbij bereikbaarheid, plaatsing en nette afwerking in een stadspand centraal stonden.",
        imageUrl: "/images/projects/interior_renovation_sliding_doors.png",
        result: "Betere isolatie en geluidsdemping voor een woning in Antwerpen.",
        serviceSlugs: [
            "ramen-deuren",
            "renovatie"
        ]
    },
    {
        id: "proof-deurne-ramen",
        citySlug: "deurne",
        cityName: "Deurne",
        title: "PVC ramen vervangen in rijwoning",
        description: "Vernieuwing van buitenschrijnwerk met aandacht voor snelheid, afwerking en dagelijks comfort.",
        imageUrl: "/images/projects/003a3c82-53d0-4c81-8d96-4ae5ad333f15.png",
        result: "Merkbaar minder tocht en een rustigere binnenruimte.",
        serviceSlugs: [
            "ramen-deuren",
            "renovatie"
        ]
    },
    {
        id: "proof-merksem-totaal",
        citySlug: "merksem",
        cityName: "Merksem",
        title: "Renovatiewerken slim gefaseerd voor gezinswoning",
        description: "Project waarbij ramen, gevel en algemene renovatiewerken in een haalbare volgorde zijn gepland.",
        imageUrl: "/images/projects/modern_extension_construction.png",
        result: "Meer controle op budget en uitvoering in Merksem.",
        serviceSlugs: [
            "renovatie",
            "totaalrenovatie",
            "gevelrenovatie"
        ]
    },
    {
        id: "proof-kapellen-crepi",
        citySlug: "kapellen",
        cityName: "Kapellen",
        title: "Crepi-gevel met focus op detailafwerking",
        description: "Gevelafwerking afgestemd op een residentiële woning waar esthetiek en duurzaamheid samenkomen.",
        imageUrl: "/images/projects/c67c2ffe-a42b-477f-a67d-10100999c4f0.jpg",
        result: "Strakke buitenzijde en onderhoudsvriendelijk resultaat in Kapellen.",
        serviceSlugs: [
            "crepi-gevel",
            "gevelrenovatie"
        ]
    },
    {
        id: "proof-schoten-renovatie",
        citySlug: "schoten",
        cityName: "Schoten",
        title: "Ramen en gevelwerken in één renovatietraject",
        description: "Combinatieproject voor eigenaars die hun woning tegelijk comfortabeler en visueel sterker wilden maken.",
        imageUrl: "/images/projects/Gemini_Generated_Image_4xh3am4xh3am4xh3.jpg",
        result: "Beter geheel tussen ramen, gevel en renovatieplanning.",
        serviceSlugs: [
            "renovatie",
            "ramen-deuren",
            "gevelrenovatie",
            "totaalrenovatie"
        ]
    }
];
function getLocalProofProjects(citySlug, serviceSlug, limit = 2) {
    const scored = localProofProjects.map((project)=>{
        let score = 0;
        if (project.citySlug === citySlug) {
            score += 3;
        }
        if (project.serviceSlugs.includes(serviceSlug)) {
            score += 2;
        }
        return {
            project,
            score
        };
    }).sort((left, right)=>right.score - left.score);
    return scored.slice(0, limit).map((entry)=>entry.project);
}
}),
"[project]/src/data/testimonials.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "googleReviewsData",
    ()=>googleReviewsData,
    "testimonials",
    ()=>testimonials
]);
const testimonials = [
    {
        id: '1',
        name: 'Bart & Sofie V.',
        location: 'Zoersel',
        service: 'Gevelrenovatie',
        text: 'Yannova heeft onze gevel volledig gerenoveerd met crepi. Het resultaat is verbluffend! Zeer propere afwerking en alles volgens afspraak. De communicatie was uitstekend en ze hielden zich perfect aan de planning.',
        rating: 5,
        date: '2025-11',
        verified: true
    },
    {
        id: '2',
        name: 'Tom J.',
        location: 'Schilde',
        service: 'Ramen & Deuren',
        text: 'Nieuwe ramen laten plaatsen. Het advies was eerlijk en de plaatsers werkten zeer nauwkeurig. Een absolute aanrader voor wie kwaliteit zoekt. De isolatie is merkbaar verbeterd!',
        rating: 5,
        date: '2025-10',
        verified: true
    },
    {
        id: '3',
        name: 'Familie Peeters',
        location: 'Antwerpen',
        service: 'Totaalrenovatie',
        text: 'We zochten een aannemer voor onze totaalrenovatie en kwamen bij Yannova terecht. Eén aanspreekpunt voor alles was een enorme geruststelling. Professioneel werk van A tot Z.',
        rating: 5,
        date: '2025-09',
        verified: true
    },
    {
        id: '4',
        name: 'Linda M.',
        location: 'Brasschaat',
        service: 'Isolatie',
        text: 'Gevelisolatie laten aanbrengen. Zeer tevreden over het resultaat. Het huis is nu veel warmer en onze energiefactuur is merkbaar gedaald. Aanrader!',
        rating: 5,
        date: '2025-08',
        verified: true
    },
    {
        id: '5',
        name: 'Marc D.',
        location: 'Wijnegem',
        service: 'Ramen',
        text: 'Snelle service, correcte prijs en kwaliteitsvol werk. De nieuwe ramen zijn prachtig en perfect geplaatst. Geen rommel achtergelaten, alles netjes opgeruimd.',
        rating: 5,
        date: '2025-07',
        verified: true
    },
    {
        id: '6',
        name: 'Sarah & Kevin',
        location: 'Schoten',
        service: 'Gevelrenovatie',
        text: 'Onze gevel ziet er weer als nieuw uit! Yannova heeft ons goed geadviseerd over de beste oplossing. Het team was vriendelijk en professioneel. Top!',
        rating: 5,
        date: '2025-06',
        verified: true
    }
];
const googleReviewsData = {
    averageRating: 4.9,
    totalReviews: 50,
    ratingDistribution: {
        5: 47,
        4: 2,
        3: 1,
        2: 0,
        1: 0
    },
    googlePlaceId: 'YOUR_GOOGLE_PLACE_ID',
    reviewsUrl: 'https://g.page/r/YOUR_REVIEW_LINK/review'
};
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
"[project]/src/components/LocalSeoLandingPage.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocalSeoLandingPage",
    ()=>LocalSeoLandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-rsc] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-rsc] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-rsc] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-rsc] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-rsc] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/company.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$breadcrumb$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/breadcrumb-schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$faq$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/faq-schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$local$2d$proof$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/local-proof.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$testimonials$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/testimonials.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$blog$2d$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/blog-posts.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
function LocalSeoLandingPage({ page }) {
    const normalize = (value)=>value.toLowerCase().replace(/&/g, "en").replace(/[^a-z0-9]+/g, " ").trim();
    const breadcrumbSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$breadcrumb$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateBreadcrumbSchema"])([
        {
            name: "Home",
            url: "/"
        },
        {
            name: page.service.name,
            url: page.service.hubPath
        },
        {
            name: page.city.name,
            url: page.path
        }
    ]);
    const faqSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$faq$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateFAQSchema"])(page.faqs);
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `${page.service.name} ${page.city.name}`,
        serviceType: page.service.name,
        description: page.description,
        areaServed: {
            "@type": "City",
            name: page.city.name
        },
        provider: {
            "@type": "LocalBusiness",
            "@id": "https://www.yannova.be/#organization",
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["company"].name,
            telephone: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["company"].phoneDisplay,
            email: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["company"].email
        },
        url: `https://www.yannova.be${page.path}`
    };
    const localProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$local$2d$proof$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLocalProofProjects"])(page.city.slug, page.service.slug, 2);
    const localReviews = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$testimonials$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["testimonials"].filter((testimonial)=>normalize(testimonial.location) === normalize(page.city.name)).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$testimonials$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["testimonials"].filter((testimonial)=>normalize(testimonial.service).includes(normalize(page.service.name)))).filter((testimonial, index, all)=>all.findIndex((item)=>item.id === testimonial.id) === index).slice(0, 2);
    const relatedPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$blog$2d$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRelatedBlogPosts"])({
        serviceSlug: page.service.slug,
        citySlug: page.city.slug,
        limit: 3
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(breadcrumbSchema)
                }
            }, void 0, false, {
                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(faqSchema)
                }
            }, void 0, false, {
                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(serviceSchema)
                }
            }, void 0, false, {
                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-[#0a0c10]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "border-b border-white/10 py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-secondary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this),
                                            page.city.name,
                                            " en omgeving"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-bold text-white sm:text-5xl",
                                        children: page.h1
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-6 max-w-3xl text-xl leading-relaxed text-gray-300",
                                        children: page.heroDescription
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 flex flex-col gap-4 sm:flex-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/offerte",
                                                className: "inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-base font-semibold text-white hover:bg-secondary/90 transition-colors",
                                                children: [
                                                    "Offerte aanvragen",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                className: "inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-base font-medium text-white hover:bg-white/5 transition-colors",
                                                children: "Contact opnemen"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["company"].phoneHref,
                                                className: "inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-base font-medium text-white hover:bg-white/5 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["company"].phoneDisplay
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4",
                                children: page.service.benefits.map((benefit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "editorial-slat pr-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "h-6 w-6 text-secondary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                lineNumber: 126,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-4 text-base leading-relaxed text-gray-300",
                                                children: benefit
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                lineNumber: 127,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, benefit, true, {
                                        fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "border-t border-white/10 py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto grid gap-12 px-6 lg:grid-cols-[1.35fr_0.85fr]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-3xl font-bold text-white",
                                                    children: [
                                                        page.service.name,
                                                        " in ",
                                                        page.city.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-5 space-y-5 text-lg leading-relaxed text-gray-300",
                                                    children: page.introParagraphs.map((paragraph)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: paragraph
                                                        }, paragraph, false, {
                                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-3xl font-bold text-white",
                                                    children: [
                                                        "Aanpak voor ",
                                                        page.service.name.toLowerCase(),
                                                        " in ",
                                                        page.city.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-5 space-y-5 text-lg leading-relaxed text-gray-300",
                                                    children: page.planningParagraphs.map((paragraph)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: paragraph
                                                        }, paragraph, false, {
                                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-3xl font-bold text-white",
                                                    children: [
                                                        "Combineren met andere werken in ",
                                                        page.city.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-5 space-y-5 text-lg leading-relaxed text-gray-300",
                                                    children: page.combinationParagraphs.map((paragraph)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: paragraph
                                                        }, paragraph, false, {
                                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "editorial-pane pr-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl font-semibold text-white",
                                                    children: "Wat we meenemen in uw project"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "mt-6 space-y-3",
                                                    children: page.service.deliverables.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-start gap-3 text-gray-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    className: "mt-0.5 h-5 w-5 shrink-0 text-secondary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                    lineNumber: 177,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: item
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, item, true, {
                                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "editorial-pane pr-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl font-semibold text-white",
                                                    children: [
                                                        "Actief in ",
                                                        page.city.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-4 leading-relaxed text-gray-300",
                                                    children: page.areaParagraph
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "mt-6 space-y-2 text-sm text-gray-400",
                                                    children: page.city.nearby.map((area)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                "• ",
                                                                area
                                                            ]
                                                        }, area, true, {
                                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "editorial-callout px-6 py-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl font-semibold text-white",
                                                    children: "Direct advies nodig?"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-4 leading-relaxed text-gray-200",
                                                    children: [
                                                        "We bekijken graag uw woning in ",
                                                        page.city.name,
                                                        " en bezorgen een duidelijke offerte zonder omwegen."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 flex flex-col gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/offerte",
                                                            className: "inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#0a0c10] hover:bg-white/90 transition-colors",
                                                            children: "Vraag uw offerte"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["company"].whatsappHref,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                    lineNumber: 213,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "WhatsApp"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "border-t border-white/10 py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-6 lg:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "editorial-pane",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-white",
                                                children: [
                                                    "Andere diensten in ",
                                                    page.city.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-gray-300",
                                                children: "Elke lokale pagina linkt ook door naar gerelateerde werken in dezelfde stad. Zo versterk je de interne SEO-structuur rond dienst + locatie."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                lineNumber: 229,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 grid gap-x-6 gap-y-1 sm:grid-cols-2",
                                                children: page.sameCityPages.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: link.href,
                                                        className: "editorial-link text-sm text-gray-300 hover:text-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold text-white",
                                                                children: link.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1 text-xs text-gray-400",
                                                                children: link.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, link.href, true, {
                                                        fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "editorial-pane",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-white",
                                                children: "Belangrijke interne links"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                lineNumber: 248,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-gray-300",
                                                children: "Deze links moeten op elke lokale SEO-pagina aanwezig zijn, zodat Google de hoofdstructuur van de site meteen begrijpt."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 grid gap-x-6 gap-y-1 sm:grid-cols-2",
                                                children: [
                                                    page.serviceHubLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            href: link.href,
                                                            className: "editorial-link text-sm text-gray-300 hover:text-white",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-semibold text-white",
                                                                    children: link.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                    lineNumber: 260,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-1 text-xs text-gray-400",
                                                                    children: link.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                    lineNumber: 261,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, link.href, true, {
                                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 21
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/contact",
                                                        className: "editorial-link text-sm text-gray-300 hover:text-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold text-white",
                                                                children: "Contact"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1 text-xs text-gray-400",
                                                                children: "Bespreek uw project met Yannova"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                lineNumber: 269,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/offerte",
                                                        className: "editorial-link text-sm text-gray-300 hover:text-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold text-white",
                                                                children: "Offerte"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                lineNumber: 275,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1 text-xs text-gray-400",
                                                                children: "Vraag een vrijblijvende prijsaanvraag"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                lineNumber: 276,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                lineNumber: 253,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    (localProjects.length > 0 || localReviews.length > 0 || relatedPosts.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "border-t border-white/10 py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto space-y-10 px-6",
                            children: [
                                localProjects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl font-bold text-white",
                                            children: [
                                                "Realisaties in en rond ",
                                                page.city.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                            lineNumber: 289,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 max-w-3xl text-lg leading-relaxed text-gray-300",
                                            children: "Google verwacht meer dan alleen zoekwoorden. Door lokale projecten te tonen krijgt deze pagina extra geloofwaardigheid voor bezoekers én zoekmachines."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                            lineNumber: 292,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 grid gap-6 lg:grid-cols-2",
                                            children: localProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/projecten",
                                                    className: "editorial-slat group overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative mt-5 h-64 overflow-hidden rounded-[1.75rem]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: project.imageUrl,
                                                                    alt: project.title,
                                                                    fill: true,
                                                                    className: "object-cover transition-transform duration-500 group-hover:scale-105",
                                                                    sizes: "(max-width: 1024px) 100vw, 50vw"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                    lineNumber: 304,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                    lineNumber: 311,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute bottom-0 left-0 right-0 p-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mb-2 text-sm font-medium text-secondary",
                                                                            children: project.cityName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                            lineNumber: 313,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-2xl font-semibold text-white",
                                                                            children: project.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                            lineNumber: 316,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mt-2 text-sm leading-relaxed text-gray-300",
                                                                            children: project.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                            lineNumber: 317,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                    lineNumber: 312,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                            lineNumber: 303,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pt-5 pr-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm leading-relaxed text-gray-300",
                                                                children: project.result
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                lineNumber: 323,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, project.id, true, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                            lineNumber: 296,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                    lineNumber: 288,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-6 lg:grid-cols-2",
                                    children: [
                                        localReviews.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "editorial-pane",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-white",
                                                    children: "Wat klanten zeggen over Yannova"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 space-y-5",
                                                    children: localReviews.map((review)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "editorial-slat pr-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mb-3 flex items-center gap-1",
                                                                    children: [
                                                                        ...Array(review.rating)
                                                                    ].map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                            className: "h-4 w-4 fill-secondary text-secondary"
                                                                        }, `${review.id}-${index}`, false, {
                                                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                            lineNumber: 342,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                    lineNumber: 340,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "leading-relaxed text-gray-300",
                                                                    children: [
                                                                        '"',
                                                                        review.text,
                                                                        '"'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                    lineNumber: 345,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-4 text-sm text-gray-400",
                                                                    children: [
                                                                        review.name,
                                                                        " · ",
                                                                        review.location
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                    lineNumber: 346,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, review.id, true, {
                                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/reviews",
                                                    className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline",
                                                    children: [
                                                        "Bekijk alle reviews",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                            lineNumber: 333,
                                            columnNumber: 19
                                        }, this),
                                        relatedPosts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "editorial-pane",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-white",
                                                    children: [
                                                        "Relevante artikels voor ",
                                                        page.city.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-gray-300",
                                                    children: "Extra content rond prijs, premies en advies versterkt de lokale SEO-pagina en geeft bezoekers meer redenen om door te klikken."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 space-y-4",
                                                    children: relatedPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/blog/${post.slug}`,
                                                            className: "editorial-link",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-medium text-secondary",
                                                                    children: post.category
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                    lineNumber: 375,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "mt-2 text-lg font-semibold text-white",
                                                                    children: post.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                    lineNumber: 376,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-2 text-sm leading-relaxed text-gray-400",
                                                                    children: post.excerpt
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                                    lineNumber: 377,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, post.slug, true, {
                                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                            lineNumber: 370,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                            lineNumber: 360,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                    lineNumber: 331,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                        lineNumber: 285,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "border-t border-white/10 py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-white",
                                    children: [
                                        "Veelgestelde vragen over ",
                                        page.service.name.toLowerCase(),
                                        " in ",
                                        page.city.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                    lineNumber: 390,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 max-w-4xl space-y-4",
                                    children: page.faqs.map((faq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                            className: "editorial-slat pr-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                    className: "cursor-pointer text-lg font-semibold text-white",
                                                    children: faq.question
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-4 leading-relaxed text-gray-300",
                                                    children: faq.answer
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, faq.question, true, {
                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                            lineNumber: 395,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                    lineNumber: 393,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                            lineNumber: 389,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "border-t border-white/10 py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-white",
                                    children: [
                                        "Ook actief voor ",
                                        page.service.name.toLowerCase(),
                                        " in andere gemeenten"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                    lineNumber: 408,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 max-w-3xl text-lg leading-relaxed text-gray-300",
                                    children: [
                                        "Naast ",
                                        page.city.name,
                                        " zet Yannova dezelfde structuur in voor andere sterke gemeenten rond Zoersel en Antwerpen."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                    lineNumber: 411,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3",
                                    children: page.sameServicePages.slice(0, 6).map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: "editorial-slat pr-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-lg font-semibold text-white",
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 text-sm text-gray-400",
                                                    children: link.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, link.href, true, {
                                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                            lineNumber: 417,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                                    lineNumber: 415,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                            lineNumber: 407,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                        lineNumber: 406,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LocalSeoLandingPage.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/lib/data/local-seo.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getHubCityLinks",
    ()=>getHubCityLinks,
    "getLocalSeoCity",
    ()=>getLocalSeoCity,
    "getLocalSeoHubSeoInput",
    ()=>getLocalSeoHubSeoInput,
    "getLocalSeoPageBySlug",
    ()=>getLocalSeoPageBySlug,
    "getLocalSeoPagePath",
    ()=>getLocalSeoPagePath,
    "getLocalSeoPageSlugs",
    ()=>getLocalSeoPageSlugs,
    "getLocalSeoService",
    ()=>getLocalSeoService,
    "getServiceHubLinks",
    ()=>getServiceHubLinks,
    "localSeoServices",
    ()=>localSeoServices,
    "priorityCities",
    ()=>priorityCities
]);
const priorityCities = [
    {
        slug: "zoersel",
        name: "Zoersel",
        nearby: [
            "Halle",
            "Sint-Antonius",
            "Westmalle"
        ],
        localContext: "veel open bebouwing en residentiële renovaties waar isolatie, planning en een verzorgde afwerking zwaar doorwegen",
        propertyFocus: "villa's, gezinswoningen en uitbreidingen",
        priority: 1
    },
    {
        slug: "schilde",
        name: "Schilde",
        nearby: [
            "'s-Gravenwezel",
            "Zoersel",
            "Wijnegem"
        ],
        localContext: "woningen waar esthetiek, materiaalkeuze en detailafwerking vaak bepalend zijn voor de uiteindelijke waarde",
        propertyFocus: "villa's, karakterwoningen en hoogwaardige renovaties",
        priority: 0.95
    },
    {
        slug: "brasschaat",
        name: "Brasschaat",
        nearby: [
            "Kapellen",
            "Schoten",
            "Antwerpen"
        ],
        localContext: "residentiële buurten met vraag naar duurzame materialen, nette uitvoering en een premium uitstraling",
        propertyFocus: "gezinswoningen, villa's en grondige gevel- of raamrenovaties",
        priority: 0.93
    },
    {
        slug: "malle",
        name: "Malle",
        nearby: [
            "Westmalle",
            "Oostmalle",
            "Zoersel"
        ],
        localContext: "woningen waar energetische renovatie en een slimme combinatie van buitenschilwerken extra veel rendement opleveren",
        propertyFocus: "eengezinswoningen, renovatieprojecten en uitbreidingen",
        priority: 0.91
    },
    {
        slug: "wijnegem",
        name: "Wijnegem",
        nearby: [
            "Schilde",
            "Wommelgem",
            "Deurne"
        ],
        localContext: "een mix van bestaande woningen en recente verbouwingen waar comfort, EPC en strakke planning centraal staan",
        propertyFocus: "rijwoningen, halfopen bebouwing en energetische upgrades",
        priority: 0.89
    },
    {
        slug: "antwerpen",
        name: "Antwerpen",
        nearby: [
            "Borgerhout",
            "Berchem",
            "Merksem"
        ],
        localContext: "stadspanden en appartementen waar voorbereiding, bereikbaarheid en correcte uitvoering in een stedelijke context cruciaal zijn",
        propertyFocus: "stadswoningen, appartementen en investeringspanden",
        priority: 0.88
    },
    {
        slug: "deurne",
        name: "Deurne",
        nearby: [
            "Antwerpen",
            "Wijnegem",
            "Borsbeek"
        ],
        localContext: "veel rijwoningen waar geluidsdemping, isolatie en een doordachte renovatiefase meteen voelbaar zijn in dagelijks comfort",
        propertyFocus: "rijwoningen, gezinswoningen en praktische renovaties",
        priority: 0.86
    },
    {
        slug: "merksem",
        name: "Merksem",
        nearby: [
            "Antwerpen",
            "Schoten",
            "Ekeren"
        ],
        localContext: "renovaties waarbij budgetcontrole, snelle uitvoering en een betere buitenschil vaak samenkomen",
        propertyFocus: "klassieke gezinswoningen en woningen met renovatiepotentieel",
        priority: 0.84
    },
    {
        slug: "kapellen",
        name: "Kapellen",
        nearby: [
            "Brasschaat",
            "Stabroek",
            "Putte"
        ],
        localContext: "ruimere woningen waar duurzaamheid, afwerking en waardevaste materiaalkeuzes belangrijk blijven op lange termijn",
        propertyFocus: "vrijstaande woningen, villa's en totaalprojecten",
        priority: 0.82
    },
    {
        slug: "schoten",
        name: "Schoten",
        nearby: [
            "Brasschaat",
            "Merksem",
            "Wijnegem"
        ],
        localContext: "gezinswoningen en uitbreidingen waar ramen, gevel en renovatieplanning vaak in één logisch traject worden samengebracht",
        propertyFocus: "gezinswoningen, verbouwingen en energetische verbeteringen",
        priority: 0.8
    }
];
const localSeoServices = [
    {
        slug: "renovatie",
        name: "Renovatie",
        hubPath: "/renovatie",
        detailPath: "/diensten/renovatie",
        detailLabel: "Bekijk onze renovatie-aanpak",
        hubTitle: "Renovatie in Zoersel en regio Antwerpen",
        hubDescription: "Lokale renovatiepagina&apos;s voor Zoersel, Schilde, Brasschaat, Malle, Wijnegem, Antwerpen, Deurne, Merksem, Kapellen en Schoten. Focus op renovatie, gevelwerken, ramen en totaalprojecten.",
        hubIntro: [
            "Yannova bouwt hiermee een consistente lokale SEO-structuur uit rond renovatie in de sterkste gemeenten rond Zoersel. Elke pagina koppelt renovatie aan concrete wooncontext, omliggende deelgemeenten en relevante interne links.",
            "Dat maakt de site duidelijker voor Google en sterker voor bezoekers die zoeken op combinaties zoals renovatie Zoersel, aannemer Schilde of renovatiebedrijf Brasschaat."
        ],
        benefits: [
            "Eén partner voor gevel, ramen en dakwerken",
            "Energetische optimalisatie en EPC-verbetering",
            "Strakke planning zonder leegstand tussen fases",
            "Bouwkundig advies en vakkundige uitvoering"
        ],
        deliverables: [
            "integrale buitenschil-renovatie",
            "ramen en deuren",
            "gevelisolatie en crepi",
            "totaalrenovatie van interieur en technieken"
        ],
        focusSentence: "Wij realiseren zorgeloze totaalprojecten waarbij we de buitenschil en binnenafwerking technisch perfect op elkaar afstemmen.",
        priceCue: "afhankelijk van omvang, technieken en afwerkingsniveau",
        timeline: "een gefaseerde planning van enkele weken tot meerdere maanden",
        keywordRoots: [
            "renovatie",
            "aannemer renovatie",
            "renovatiebedrijf",
            "verbouwing"
        ],
        extraKeywords: [
            "totaalrenovatie",
            "energetische renovatie",
            "woning renoveren"
        ],
        getCityTitle: (city)=>`Renovatie ${city} | Aannemer Renovatie | Yannova`,
        getCityDescription: (city)=>`Renovatie in ${city}? Yannova helpt met gevelrenovatie, ramen en deuren en totaalrenovaties. Vraag vandaag een offerte aan.`,
        getCityHeading: (city)=>`Renovatie in ${city} door ervaren aannemer`
    },
    {
        slug: "ramen-deuren",
        name: "Ramen en deuren",
        hubPath: "/ramen-deuren",
        detailPath: "/diensten/ramen-deuren",
        detailLabel: "Meer over ramen en deuren",
        hubTitle: "Ramen en deuren in Zoersel en regio Antwerpen",
        hubDescription: "Lokale landingspagina&apos;s voor ramen en deuren in de belangrijkste gemeenten rond Zoersel. Gericht op PVC, aluminium, hoogrendementsbeglazing en nette plaatsing.",
        hubIntro: [
            "Met deze hub bundelt Yannova de lokale pagina&apos;s voor ramen en deuren in de regio waar de meeste zoekvraag zit. Elke stadspagina focust op plaatsing, isolatie, veiligheid en de koppeling met andere renovatiewerken.",
            "Zo ontstaat een duidelijke SEO-structuur rond termen als ramen en deuren Zoersel, ramen vervangen Brasschaat of buitenschrijnwerk Antwerpen."
        ],
        benefits: [
            "PVC en aluminium profielen tot 7 kamers",
            "Standaard HR++ of triple glas (HR+++)",
            "Luchtdichte montage en gevelintegratie",
            "Inbraakveilig beslag en topafwerking"
        ],
        deliverables: [
            "PVC en aluminium ramen",
            "hoogrendementsglas",
            "voordeuren en schuiframen",
            "perfecte aansluiting op gevelisolatie"
        ],
        focusSentence: "Wij combineren technische superioriteit met esthetiek, zodat uw nieuwe ramen perfect aansluiten op de isolatieschil van uw woning.",
        priceCue: "afhankelijk van aantal openingen, materiaal, beglazing en afwerking",
        timeline: "meestal 1 tot 3 plaatsingsdagen na opmeting en productie",
        keywordRoots: [
            "ramen en deuren",
            "ramen vervangen",
            "deuren plaatsen",
            "buitenschrijnwerk"
        ],
        extraKeywords: [
            "pvc ramen",
            "aluminium ramen",
            "triple glas",
            "schuifdeur"
        ],
        getCityTitle: (city)=>`Ramen en deuren ${city} | Plaatsing op maat | Yannova`,
        getCityDescription: (city)=>`Nieuwe ramen en deuren in ${city}? Yannova plaatst PVC en aluminium ramen, buitendeuren en schuiframen met professionele afwerking. Vraag een offerte aan.`,
        getCityHeading: (city)=>`Ramen en deuren in ${city} laten plaatsen`
    },
    {
        slug: "gevelrenovatie",
        name: "Gevelrenovatie",
        hubPath: "/gevelrenovatie",
        detailPath: "/diensten/gevelrenovatie",
        detailLabel: "Meer over gevelrenovatie",
        hubTitle: "Gevelrenovatie in Zoersel en regio Antwerpen",
        hubDescription: "Lokale SEO-pagina&apos;s voor gevelrenovatie in de sterkste gemeenten rond Zoersel. Gericht op gevelherstel, isolatie, crepi en duurzame buitenafwerking.",
        hubIntro: [
            "De gevel is vaak de eerste winst bij een renovatie. Deze hub groepeert lokale pagina&apos;s rond gevelrenovatie voor gemeenten waar veel gezocht wordt op gevelwerken, crepi en gevelisolatie.",
            "Per stadspagina koppelen we gevelrenovatie aan de lokale woningvoorraad, omliggende buurten en de link met ramen, isolatie en totaalrenovatie."
        ],
        benefits: [
            "Hoogwaardige siliconenharspleister (crepi)",
            "Totaaloplossing: gevel, ramen en dak in één planning",
            "Structurele verbetering van EPC en woningwaarde",
            "Vakmanschap in detailafwerking rond dorpels en hoeken"
        ],
        deliverables: [
            "gevelisolatie (EPS)",
            "siliconenharspleister (crepi)",
            "steenstrips met isolatie",
            "totaalrenovatie van de buitenschil"
        ],
        focusSentence: "Wij maken uw woning future-proof met een doorlopende thermische schil en een onderhoudsvriendelijke afwerking die jarenlang mooi blijft.",
        priceCue: "afhankelijk van oppervlakte, herstelwerk, isolatiedikte en gekozen afwerking",
        timeline: "vaak 1 tot 3 weken afhankelijk van voorbereidende werken en weersomstandigheden",
        keywordRoots: [
            "gevelrenovatie",
            "gevelwerken",
            "gevel herstellen",
            "gevel isoleren"
        ],
        extraKeywords: [
            "crepi",
            "gevelisolatie",
            "gevelafwerking"
        ],
        getCityTitle: (city)=>`Gevelrenovatie ${city} | Crepi en gevelwerken | Yannova`,
        getCityDescription: (city)=>`Gevelrenovatie in ${city}? Yannova verzorgt gevelherstel, isolatie en crepi-afwerking voor woningen in ${city} en omgeving. Vraag een vrijblijvende offerte aan.`,
        getCityHeading: (city)=>`Gevelrenovatie in ${city} met duurzame afwerking`
    },
    {
        slug: "crepi-gevel",
        name: "Crepi gevel",
        hubPath: "/crepi-gevel",
        detailPath: "/diensten/gevelrenovatie",
        detailLabel: "Meer over crepi en gevelafwerking",
        hubTitle: "Crepi gevels in Zoersel en regio Antwerpen",
        hubDescription: "Gerichte lokale pagina&apos;s voor crepi gevelafwerking in Zoersel en de omliggende zoekregio. Focus op strakke afwerking, kleurkeuze, isolatie en onderhoudsarme gevels.",
        hubIntro: [
            "Crepi wordt vaak afzonderlijk gezocht, los van het bredere begrip gevelrenovatie. Daarom krijgt crepi hier een eigen lokale SEO-structuur met expliciete stadspagina&apos;s.",
            "Die pagina&apos;s ondersteunen zoekopdrachten zoals crepi gevel Zoersel, crepi Schilde of gevelbepleistering Brasschaat en linken tegelijk slim door naar gevelrenovatie en totaalrenovatie."
        ],
        benefits: [
            "Zelfreinigende siliconenharspleister",
            "Eliminatie van koudebruggen via gevelisolatie",
            "Eén aanspreekpunt voor gevel, ramen en dak",
            "Keuze uit honderden kleurvaste afwerkingen"
        ],
        deliverables: [
            "crepi-afwerking (siliconen)",
            "gevelisolatie op maat",
            "kleuradvies",
            "perfecte aansluiting op ramen en dorpels"
        ],
        focusSentence: "Onze focus ligt op een technisch perfecte opbouw die uw energiefactuur verlaagt en uw gevel een moderne, onderhoudsarme uitstraling geeft.",
        priceCue: "afhankelijk van de oppervlakte, gewenste structuur, ondergrond en combinatie met isolatie",
        timeline: "meestal 1 tot 2 weken inclusief voorbereiding en afwerking",
        keywordRoots: [
            "crepi gevel",
            "crepi",
            "gevelbepleistering",
            "sierpleister"
        ],
        extraKeywords: [
            "gevelisolatie",
            "crepi afwerking",
            "buitengevel"
        ],
        getCityTitle: (city)=>`Crepi gevel ${city} | Gevelafwerking en isolatie | Yannova`,
        getCityDescription: (city)=>`Crepi gevel in ${city}? Kies voor een strakke gevelafwerking met isolatie, kleuradvies en vakkundige uitvoering door Yannova. Vraag uw offerte aan.`,
        getCityHeading: (city)=>`Crepi gevel in ${city} voor een nieuwe uitstraling`
    },
    {
        slug: "totaalrenovatie",
        name: "Totaalrenovatie",
        hubPath: "/totaalrenovatie",
        detailPath: "/diensten/renovatie",
        detailLabel: "Meer over totaalrenovatie",
        hubTitle: "Totaalrenovatie in Zoersel en regio Antwerpen",
        hubDescription: "Lokale SEO-pagina&apos;s voor totaalrenovatie in de gemeenten met de meeste zoekvraag rond Zoersel. Focus op coördinatie, planning en één vast aanspreekpunt van start tot oplevering.",
        hubIntro: [
            "Totaalrenovatie vraagt meer dan losse aannemingswerken. Deze hub zet daarom in op lokale pagina&apos;s die het volledige traject uitleggen voor gemeenten waar eigenaars gericht zoeken naar één partner.",
            "Zo worden zoektermen zoals totaalrenovatie Zoersel, totaalrenovatie Antwerpen of renovatiebedrijf Schoten beter ondersteund door duidelijke landingspagina&apos;s en interne links."
        ],
        benefits: [
            "Eén partner voor gevel, ramen en dakwerken",
            "Energetische optimalisatie (EPC-upgrades)",
            "Vaste projectleider van start tot oplevering",
            "Gecoördineerde planning zonder tijdverlies"
        ],
        deliverables: [
            "integrale aanpak buitenschil",
            "technieken en binnenafwerking",
            "ramen, deuren en gevelisolatie",
            "totaalprojectbegeleiding"
        ],
        focusSentence: "Wij realiseren complete woningtransformaties waarbij techniek, isolatie en esthetiek naadloos op elkaar aansluiten.",
        priceCue: "afhankelijk van de omvang van het project, technieken, materiaalkeuzes en gewenste afwerkingsgraad",
        timeline: "meestal een gefaseerde planning over meerdere weken of maanden",
        keywordRoots: [
            "totaalrenovatie",
            "woningrenovatie",
            "volledige renovatie",
            "renovatiebedrijf"
        ],
        extraKeywords: [
            "aannemer",
            "energetische renovatie",
            "coördinatie renovatie"
        ],
        getCityTitle: (city)=>`Totaalrenovatie ${city} | Eén aanspreekpunt | Yannova`,
        getCityDescription: (city)=>`Totaalrenovatie in ${city}? Yannova coördineert uw renovatie van afbraak tot afwerking met één vast aanspreekpunt. Vraag een vrijblijvende offerte aan.`,
        getCityHeading: (city)=>`Totaalrenovatie in ${city} met strakke opvolging`
    }
];
const orderedServiceSlugs = [
    ...localSeoServices
].map((service)=>service.slug).sort((left, right)=>right.length - left.length);
function getLocalSeoService(serviceSlug) {
    return localSeoServices.find((service)=>service.slug === serviceSlug) ?? null;
}
function getLocalSeoCity(citySlug) {
    return priorityCities.find((city)=>city.slug === citySlug) ?? null;
}
function getLocalSeoPagePath(serviceSlug, citySlug) {
    return `/${serviceSlug}-${citySlug}`;
}
function getLocalSeoPageSlugs() {
    return localSeoServices.flatMap((service)=>priorityCities.map((city)=>`${service.slug}-${city.slug}`));
}
function getServiceHubLinks() {
    return localSeoServices.map((service)=>({
            label: service.name,
            href: service.hubPath,
            description: `${service.name} in Zoersel en regio Antwerpen`
        }));
}
function buildKeywords(service, city) {
    const cityName = city.name.toLowerCase();
    return Array.from(new Set([
        ...service.keywordRoots.map((root)=>`${root} ${cityName}`),
        ...service.keywordRoots.map((root)=>`${root} ${cityName} prijs`),
        ...service.extraKeywords.map((keyword)=>`${keyword} ${cityName}`),
        `aannemer ${cityName}`,
        `${service.name.toLowerCase()} ${cityName}`
    ]));
}
function buildFaqs(service, city) {
    return [
        {
            question: `Wat kost ${service.name.toLowerCase()} in ${city.name}?`,
            answer: `De prijs voor ${service.name.toLowerCase()} in ${city.name} is ${service.priceCue}. Na een plaatsbezoek krijgt u van Yannova een duidelijke offerte op maat van uw woning en planning.`
        },
        {
            question: `Hoe snel kunnen jullie starten in ${city.name}?`,
            answer: `Na een eerste opname in ${city.name} ontvangt u snel een voorstel met aanpak en timing. Voor ${service.name.toLowerCase()} rekenen we meestal op ${service.timeline}.`
        },
        {
            question: `Werken jullie enkel in ${city.name}?`,
            answer: `Nee. Yannova werkt naast ${city.name} ook in ${city.nearby.join(", ")} en andere gemeenten rond Zoersel en de Antwerpse rand.`
        },
        {
            question: `Kunnen jullie ${service.name.toLowerCase()} combineren met andere werken?`,
            answer: `Ja. We combineren ${service.name.toLowerCase()} geregeld met ramen en deuren, gevelwerken of een bredere renovatiefase zodat planning, budget en afwerking logisch op elkaar aansluiten.`
        }
    ];
}
function parseLocalSeoSlug(seoSlug) {
    for (const serviceSlug of orderedServiceSlugs){
        const prefix = `${serviceSlug}-`;
        if (!seoSlug.startsWith(prefix)) {
            continue;
        }
        const citySlug = seoSlug.slice(prefix.length);
        const service = getLocalSeoService(serviceSlug);
        const city = getLocalSeoCity(citySlug);
        if (service && city) {
            return {
                service,
                city
            };
        }
    }
    return null;
}
function getSameCityPages(city, currentServiceSlug) {
    return localSeoServices.filter((service)=>service.slug !== currentServiceSlug).map((service)=>({
            label: `${service.name} ${city.name}`,
            href: getLocalSeoPagePath(service.slug, city.slug),
            description: `${service.name} in ${city.name} en omgeving`
        }));
}
function getSameServicePages(service, currentCitySlug) {
    return priorityCities.filter((city)=>city.slug !== currentCitySlug).sort((left, right)=>right.priority - left.priority).map((city)=>({
            label: `${service.name} ${city.name}`,
            href: getLocalSeoPagePath(service.slug, city.slug),
            description: `${service.name} in ${city.name}`
        }));
}
function getHubCityLinks(serviceSlug) {
    const service = getLocalSeoService(serviceSlug);
    if (!service) {
        return [];
    }
    return priorityCities.map((city)=>({
            label: `${service.name} ${city.name}`,
            href: getLocalSeoPagePath(service.slug, city.slug),
            description: city.localContext
        }));
}
function getLocalSeoHubSeoInput(serviceSlug) {
    const service = getLocalSeoService(serviceSlug);
    if (!service) {
        return null;
    }
    return {
        title: service.hubTitle,
        description: service.hubDescription,
        path: service.hubPath,
        keywords: priorityCities.flatMap((city)=>[
                `${service.name.toLowerCase()} ${city.name.toLowerCase()}`,
                `${service.name.toLowerCase()} ${city.name.toLowerCase()} offerte`
            ])
    };
}
function getLocalSeoPageBySlug(seoSlug) {
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
            `In ${city.name} zien we ${city.localContext}. Daarom vertrekken wij niet vanuit standaardoplossingen, maar vanuit de bestaande toestand van uw woning, de gewenste timing en het rendement op lange termijn.`
        ],
        planningParagraphs: [
            `Tijdens een plaatsbezoek in ${city.name} bekijken we de huidige situatie, de technische aandachtspunten en de volgorde van de werken. Daarna ontvangt u een duidelijke offerte met advies over materiaalkeuze, afwerking en uitvoering.`,
            `Yannova werkt geregeld in ${city.name} en omliggende gemeenten zoals ${city.nearby.join(", ")}. Daardoor kunnen we realistische termijnen voorstellen en ${service.name.toLowerCase()} in ${city.name} logisch laten aansluiten op uw woningtype en planning.`
        ],
        combinationParagraphs: [
            `Veel projecten in ${city.name} combineren ${service.name.toLowerCase()} met ${sameCityPages.slice(0, 2).map((link)=>link.label.toLowerCase()).join(" en ")}. Door die werken op elkaar af te stemmen, vermijdt u dubbele kosten en krijgt u een consistenter eindresultaat.`,
            `Wie in ${city.name} renoveert, wint vaak tegelijk op comfort, EPC, onderhoud en uitstraling wanneer ramen, gevel en renovatieplanning samen bekeken worden. Dat is precies waar Yannova het verschil maakt met een lokale en praktische aanpak.`
        ],
        areaParagraph: `${city.name} is voor Yannova een strategisch werkgebied binnen de regio rond Zoersel. We zijn ook actief in ${city.nearby.join(", ")} en andere buurten waar ${city.propertyFocus} sterk vertegenwoordigd zijn.`,
        faqs: buildFaqs(service, city),
        city,
        service,
        sameCityPages,
        sameServicePages,
        serviceHubLinks: getServiceHubLinks()
    };
}
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
"[project]/src/app/(public)/[seoSlug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocalSeoPage,
    "dynamicParams",
    ()=>dynamicParams,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LocalSeoLandingPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LocalSeoLandingPage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$local$2d$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/local-seo.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/seo.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const dynamicParams = false;
function generateStaticParams() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$local$2d$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLocalSeoPageSlugs"])().map((seoSlug)=>({
            seoSlug
        }));
}
async function generateMetadata({ params }) {
    const { seoSlug } = await params;
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$local$2d$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLocalSeoPageBySlug"])(seoSlug);
    if (!page) {
        return {
            title: "Pagina niet gevonden"
        };
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateSEO"])({
        title: page.title,
        description: page.description,
        path: page.path,
        keywords: page.keywords
    });
}
async function LocalSeoPage({ params }) {
    const { seoSlug } = await params;
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$local$2d$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLocalSeoPageBySlug"])(seoSlug);
    if (!page) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LocalSeoLandingPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LocalSeoLandingPage"], {
        page: page
    }, void 0, false, {
        fileName: "[project]/src/app/(public)/[seoSlug]/page.tsx",
        lineNumber: 43,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/(public)/[seoSlug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(public)/[seoSlug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b89054fc._.js.map