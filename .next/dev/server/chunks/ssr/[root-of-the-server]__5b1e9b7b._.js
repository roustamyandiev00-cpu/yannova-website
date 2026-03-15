module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/icon.png.mjs { IMAGE => \"[project]/src/app/icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/icon.png.mjs { IMAGE => \"[project]/src/app/icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/not-found.tsx [app-rsc] (ecmascript)"));
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
"[project]/src/lib/data/product-catalog.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProductCatalogItem",
    ()=>getProductCatalogItem,
    "productCatalog",
    ()=>productCatalog
]);
const productCatalog = [
    {
        slug: "ramen",
        name: "Ramen",
        shortName: "Ramen",
        categoryLabel: "Productgamma",
        overview: "PVC en aluminium ramen in verschillende profielen, stijlen en isolatieniveaus. Leverbaar en plaatsbaar via Yannova.",
        metaTitle: "Ramen op maat | PVC & Aluminium | Yannova",
        metaDescription: "Ontdek het ramenaanbod van Yannova: PVC en aluminium ramen met verschillende profielen, kleuren en beglazingsopties.",
        heroTitle: "Ramen op maat voor renovatie en nieuw buitenschrijnwerk",
        heroDescription: "Yannova levert en plaatst ramen uit een breed gamma van PVC- en aluminiumoplossingen, afgestemd op woningtype, isolatie-eisen en gewenste uitstraling.",
        icon: "window",
        coverImage: {
            src: "https://ekookna.nl/file/records/oryginalne/okna-do-sesji-43.jpg",
            alt: "Voorbeeld van moderne ramen uit het leveranciergamma",
            label: "Ramen op maat"
        },
        gallery: [
            {
                src: "https://ekookna.nl/file/records/oryginalne/76c5-oknapvc.webp",
                alt: "PVC-raamprofielen uit het leveranciergamma",
                label: "PVC-ramen"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/oknaaluminiowe.png",
                alt: "Aluminium raamprofielen uit het leveranciergamma",
                label: "Aluminium ramen"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/oknastalowe.png",
                alt: "Stalen raamprofielen uit het leveranciergamma",
                label: "Stalen ramen"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/b816-oknadrewniane.webp",
                alt: "Houten raamprofielen uit het leveranciergamma",
                label: "Houten ramen"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/e4a6-dodatki2x.png",
                alt: "Raamaccessoires uit het leveranciergamma",
                label: "Extra's"
            }
        ],
        keywords: [
            "ramen op maat",
            "pvc ramen",
            "aluminium ramen",
            "nieuwe ramen",
            "buitenschrijnwerk"
        ],
        intro: [
            "Op basis van het aanbod van onze leverancier kan Yannova veel meer aanbieden dan alleen standaard ramen. Denk aan verschillende profielsystemen, kleurafwerkingen, beglazingspakketten en oplossingen voor klassieke of moderne woningen.",
            "Op de website vertalen we dat gamma naar duidelijke Yannova-productpagina&apos;s, zodat bezoekers begrijpen wat u kunt leveren zonder dat de site een technische leverancierscatalogus wordt."
        ],
        productTypes: [
            "PVC ramen",
            "Aluminium ramen",
            "Vaste ramen en draaikiepsystemen",
            "Projectmatige oplossingen voor renovatie en grotere openingen"
        ],
        benefits: [
            "Sterke isolatiewaarden met HR++ of drievoudige beglazing",
            "Veel keuze in profielen, kleuren en afwerking",
            "Combineerbaar met deuren en schuifsystemen",
            "Plaatsing en opvolging via Yannova"
        ],
        idealFor: [
            "Renovaties waar comfort en EPC moeten verbeteren",
            "Eigenaars die PVC en aluminium willen vergelijken",
            "Projecten waar ramen samen met gevel of deuren worden aangepakt"
        ],
        supplierNote: "Dit gamma is gebaseerd op het aanbod van onze leverancier. Yannova adviseert welke systemen technisch en esthetisch het best passen bij uw woning.",
        primaryCtaHref: "/ramen",
        primaryCtaLabel: "Bekijk onze ramenservice",
        secondaryLinks: [
            {
                label: "Ramen & deuren",
                href: "/ramen-deuren"
            },
            {
                label: "Prijs nieuwe ramen",
                href: "/blog/wat-kosten-nieuwe-ramen"
            }
        ]
    },
    {
        slug: "deuren",
        name: "Deuren",
        shortName: "Deuren",
        categoryLabel: "Productgamma",
        overview: "Voordeuren, achterdeuren, terrasdeuren en technische deuroplossingen in PVC en aluminium.",
        metaTitle: "Deuren op maat | PVC & Aluminium Deuren | Yannova",
        metaDescription: "Bekijk het deurgamma van Yannova: voordeuren, terrasdeuren, technische deuren en aluminium of PVC oplossingen op maat.",
        heroTitle: "Deuren op maat voor veiligheid, isolatie en uitstraling",
        heroDescription: "Yannova kan een breed assortiment deuren leveren en plaatsen: van stijlvolle voordeuren tot technische en terrasgerichte oplossingen.",
        icon: "door",
        coverImage: {
            src: "https://ekookna.nl/file/records/oryginalne/drzwi2.jpg",
            alt: "Voorbeeld van moderne deuren uit het leveranciergamma",
            label: "Inkom- en terrasdeuren"
        },
        gallery: [
            {
                src: "https://ekookna.nl/file/records/oryginalne/drzwizestawienie2xv2.png",
                alt: "Buitendeuren uit het leveranciergamma",
                label: "Buitendeuren"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/5cc0-norm-pivot.webp",
                alt: "Binnendeuren uit het leveranciergamma",
                label: "Binnendeuren"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/drzwidodatki.png",
                alt: "Extra deuraccessoires uit het leveranciergamma",
                label: "Extra's"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/drzwi1.jpg",
                alt: "Deurbeslag en afwerking uit het leveranciergamma",
                label: "Beslag & afwerking"
            }
        ],
        keywords: [
            "deuren op maat",
            "voordeur",
            "achterdeur",
            "aluminium deuren",
            "pvc deuren"
        ],
        intro: [
            "De leverancier heeft een ruimer gamma dan wat nu zichtbaar is op de Yannova-site. Daar vallen niet alleen klassieke voordeuren onder, maar ook terrasgerichte oplossingen en technische deurtypes.",
            "Door dat gamma als eigen productstructuur te tonen, kan Yannova meer zoekintentie capteren rond deuren zonder dat bezoekers naar de leverancierssite moeten doorsturen."
        ],
        productTypes: [
            "Voordeuren",
            "Achterdeuren",
            "Terrasdeuren en zijlichten",
            "Technische en functionele deuren"
        ],
        benefits: [
            "Meer keuze in stijl, glasverdeling en veiligheid",
            "Afgestemd op ramen en schuifsystemen",
            "Sterke isolatie en moderne slotopties",
            "Technisch advies en plaatsing via Yannova"
        ],
        idealFor: [
            "Eigenaars die hun inkom willen upgraden",
            "Renovaties waar deur en ramen één geheel moeten vormen",
            "Projecten met focus op veiligheid en afwerking"
        ],
        supplierNote: "Het getoonde assortiment wordt door Yannova vertaald naar projecten op maat. We selecteren niet blind elk model, maar alleen wat technisch en visueel klopt voor de woning.",
        primaryCtaHref: "/deuren",
        primaryCtaLabel: "Bekijk onze deurenservice",
        secondaryLinks: [
            {
                label: "Ramen & deuren",
                href: "/ramen-deuren"
            },
            {
                label: "Deuren in Antwerpen",
                href: "/deuren/antwerpen"
            }
        ]
    },
    {
        slug: "schuifsystemen",
        name: "Schuifsystemen",
        shortName: "Schuifsystemen",
        categoryLabel: "Productgamma",
        overview: "Hefschuifdeuren, terrasoplossingen en grote glaspartijen die binnen en buiten visueel verbinden.",
        metaTitle: "Schuifsystemen | Terrasdeuren & Grote Glaspartijen | Yannova",
        metaDescription: "Ontdek schuifsystemen via Yannova: hefschuifdeuren, terrasoplossingen en grote glaspartijen in PVC of aluminium.",
        heroTitle: "Schuifsystemen voor licht, comfort en open woonruimtes",
        heroDescription: "Yannova kan ook schuifsystemen leveren en plaatsen: ideaal voor terrassen, tuingerichte leefruimtes en renovaties met veel glas.",
        icon: "panels",
        coverImage: {
            src: "https://ekookna.nl/file/records/oryginalne/przesuwne02.jpg",
            alt: "Voorbeeld van een schuifsysteem met grote glaspartij",
            label: "Grote glaspartijen"
        },
        gallery: [
            {
                src: "https://ekookna.nl/file/records/oryginalne/3fd1-00.png",
                alt: "PVC-schuifsystemen uit het leveranciergamma",
                label: "PVC-systemen"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/4e9e-cor-vision-plus00.png",
                alt: "Aluminium schuifsystemen uit het leveranciergamma",
                label: "Aluminiumsystemen"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/systemy-stalowe.png",
                alt: "Stalen schuifsystemen uit het leveranciergamma",
                label: "Stalensystemen"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/systemydrewniane.png",
                alt: "Houten schuifsystemen uit het leveranciergamma",
                label: "Houtsystemen"
            }
        ],
        keywords: [
            "schuifsystemen",
            "hefschuifdeur",
            "schuifdeur aluminium",
            "schuifdeur pvc",
            "terrasdeur"
        ],
        intro: [
            "Schuifsystemen verdienen een eigen plek op de site. Ze zijn technisch en visueel anders dan standaard ramen of deuren en worden vaak apart gezocht.",
            "Via de leverancier is er een breder gamma mogelijk voor grote glaspartijen, terrasopeningen en meer architecturale oplossingen."
        ],
        productTypes: [
            "Hefschuifdeuren",
            "Schuiframen voor grote openingen",
            "Terrasgerichte aluminium systemen",
            "Ruimtes met maximale lichtinval"
        ],
        benefits: [
            "Meer glasoppervlak en licht",
            "Vlotte verbinding tussen binnen en buiten",
            "Geschikt voor moderne renovaties en uitbreidingen",
            "Combineerbaar met ramen, deuren en zonwering"
        ],
        idealFor: [
            "Woningen met tuin- of terrasconnectie",
            "Renovaties waar lichtinval belangrijk is",
            "Eigenaars die strakke profielen zoeken"
        ],
        supplierNote: "Niet elk schuifsysteem past bij elke opening. Yannova bekijkt draagkracht, detaillering en gebruikscomfort voor we een systeem voorstellen.",
        primaryCtaHref: "/ramen-deuren",
        primaryCtaLabel: "Bespreek een schuifsysteem",
        secondaryLinks: [
            {
                label: "PVC of aluminium ramen",
                href: "/blog/pvc-of-aluminium-ramen"
            },
            {
                label: "Contact opnemen",
                href: "/contact"
            }
        ]
    },
    {
        slug: "rolluiken-zonwering",
        name: "Rolluiken & zonwering",
        shortName: "Rolluiken & zonwering",
        categoryLabel: "Productgamma",
        overview: "Rolluiken, screens, geveljaloezieën en aanverwante buitenzonwering als aanvulling op ramen en schuifsystemen.",
        metaTitle: "Rolluiken & Zonwering | Screens en Shutters | Yannova",
        metaDescription: "Yannova kan ook rolluiken, screens en andere zonweringsoplossingen leveren en plaatsen als onderdeel van een totaalproject.",
        heroTitle: "Rolluiken, screens en buitenzonwering op maat",
        heroDescription: "Naast ramen en deuren kan Yannova ook oplossingen aanbieden voor verduistering, privacy, zonwering en extra gebruikscomfort.",
        icon: "sun",
        coverImage: {
            src: "https://ekookna.nl/file/records/oryginalne/oslony.jpg",
            alt: "Voorbeeld van rolluiken en zonwering uit het leveranciergamma",
            label: "Rolluiken en screens"
        },
        gallery: [
            {
                src: "https://ekookna.nl/file/records/oryginalne/bce7-rolety.jpg",
                alt: "Rolluiken uit het leveranciergamma",
                label: "Rolluiken"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/6255-zaluzja-fasadowa-raff-i-z-napisem-2.webp",
                alt: "Geveljaloezieen uit het leveranciergamma",
                label: "Geveljaloezieen"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/okiennicetamiz.jpg",
                alt: "Shutters uit het leveranciergamma",
                label: "Shutters"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/oslonyokiennedodatki.jpg",
                alt: "Accessoires voor zonwering uit het leveranciergamma",
                label: "Accessoires"
            }
        ],
        keywords: [
            "rolluiken",
            "screens",
            "zonwering",
            "geveljaloezie",
            "shutters"
        ],
        intro: [
            "Dit is vandaag nog amper zichtbaar op de site, terwijl het een logische uitbreiding is van ramen, deuren en schuifsystemen. Voor veel bezoekers hoort buitenzonwering gewoon bij het totaalplaatje.",
            "Op basis van het gamma van de leverancier kan Yannova dit dus wel degelijk aanbieden, maar dan onder een eigen productpagina met duidelijke uitleg over toepassingen en combinaties."
        ],
        productTypes: [
            "Opbouw- en voorzetrolluiken",
            "Screens",
            "Geveljaloezieën",
            "Aanvullende oplossingen voor privacy en lichtregeling"
        ],
        benefits: [
            "Meer comfort in zomer en winter",
            "Extra privacy en lichtcontrole",
            "Logische combinatie met nieuwe ramen en schuifdeuren",
            "Technische afstemming via één partner"
        ],
        idealFor: [
            "Projecten met veel glas en zonbelasting",
            "Eigenaars die ramen en zonwering samen willen aanpakken",
            "Woningen waar comfort en privacy extra belangrijk zijn"
        ],
        supplierNote: "Niet elk systeem is zichtbaar op de site van Yannova, maar we kunnen deze productgroep wel meenemen in het aanbod en in offertes op maat.",
        primaryCtaHref: "/contact",
        primaryCtaLabel: "Vraag advies over rolluiken en screens",
        secondaryLinks: [
            {
                label: "Schuifsystemen",
                href: "/producten/schuifsystemen"
            },
            {
                label: "Ramen",
                href: "/ramen"
            }
        ]
    },
    {
        slug: "garagepoorten",
        name: "Garagepoorten",
        shortName: "Garagepoorten",
        categoryLabel: "Productgamma",
        overview: "Sectionale en aanverwante garagepoortoplossingen als onderdeel van buitenschil en totaalrenovatie.",
        metaTitle: "Garagepoorten | Sectionale Poorten op maat | Yannova",
        metaDescription: "Ontdek garagepoorten via Yannova. Leverbaar als onderdeel van een bredere renovatie of buitenschilproject.",
        heroTitle: "Garagepoorten als volwaardig onderdeel van uw buitenschil",
        heroDescription: "Yannova kan ook garagepoorten opnemen in het aanbod, zodat ramen, deuren, poorten en afwerking beter op elkaar aansluiten.",
        icon: "garage",
        coverImage: {
            src: "https://ekookna.nl/file/uploads/Animacje/Brama/brama_01.jpg",
            alt: "Voorbeeld van een garagepoort uit het leveranciergamma",
            label: "Garagepoorten op maat"
        },
        gallery: [
            {
                src: "https://ekookna.nl/file/records/oryginalne/3795-bramy-garazowe.webp",
                alt: "Garagedeuren uit het leveranciergamma",
                label: "Garagedeuren"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/bramakratarolowana2x.png",
                alt: "Rolroosters uit het leveranciergamma",
                label: "Rolroosters"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/dodatkibramy.png",
                alt: "Garagepoortaccessoires uit het leveranciergamma",
                label: "Accessoires"
            }
        ],
        keywords: [
            "garagepoorten",
            "sectionale poort",
            "garagedeur",
            "poort op maat"
        ],
        intro: [
            "Garagepoorten zitten vaak in dezelfde beslissingsfase als ramen, deuren of gevelwerken. Daarom is het logisch dat ze ook op de site zichtbaar worden als apart aanbod.",
            "Via de leverancier is deze categorie beschikbaar, en voor Yannova is dit interessant als upsell binnen bredere renovatieprojecten."
        ],
        productTypes: [
            "Sectionale garagepoorten",
            "Poorten afgestemd op gevel en buitenschrijnwerk",
            "Oplossingen voor renovatie en volledige buitenschilprojecten"
        ],
        benefits: [
            "Één visuele lijn met ramen en deuren",
            "Meer comfort en gebruiksgemak",
            "Sterke aanvulling op totaalrenovatie",
            "Technische coördinatie via Yannova"
        ],
        idealFor: [
            "Woningen met inpandige of aangebouwde garage",
            "Projecten waar buitenschrijnwerk en poort samen worden vernieuwd",
            "Eigenaars die één partner willen voor het geheel"
        ],
        supplierNote: "Garagepoorten zijn niet zomaar een los product. Yannova bekijkt aansluiting, uitstraling en gebruik in functie van de volledige woning.",
        primaryCtaHref: "/contact",
        primaryCtaLabel: "Bespreek uw garagepoort",
        secondaryLinks: [
            {
                label: "Totaalrenovatie",
                href: "/totaalrenovatie"
            },
            {
                label: "Offerte aanvragen",
                href: "/offerte"
            }
        ]
    },
    {
        slug: "omheiningen",
        name: "Omheiningen",
        shortName: "Omheiningen",
        categoryLabel: "Productgamma",
        overview: "Omheiningen, poorten en buitenafsluitingen die aansluiten op de uitstraling van woning en buitenschil.",
        metaTitle: "Omheiningen & Poorten | Buitenafsluiting op maat | Yannova",
        metaDescription: "Yannova kan ook omheiningen en buitenafsluitingen opnemen in het aanbod als onderdeel van een totaalproject of buitenschilrenovatie.",
        heroTitle: "Omheiningen en poorten die aansluiten op uw woning",
        heroDescription: "Naast ramen, deuren en poorten kan Yannova ook buitenafsluitingen en omheiningen meenemen wanneer u uw volledige buitenschil coherent wilt aanpakken.",
        icon: "shield",
        coverImage: {
            src: "https://ekookna.nl/file/records/oryginalne/2efc-ogrodzenie3.jpg",
            alt: "Voorbeeld van een omheining uit het leveranciergamma",
            label: "Buitenafsluitingen"
        },
        gallery: [
            {
                src: "https://ekookna.nl/file/records/oryginalne/ogrodzeniastandard.png",
                alt: "Standaard omheiningen uit het leveranciergamma",
                label: "Standaard omheiningen"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/ogrodzeniaelegance.png",
                alt: "Elegante omheiningen uit het leveranciergamma",
                label: "Omheiningen Elegantie"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/ogrodzeniaprestige.png",
                alt: "Prestige hekken uit het leveranciergamma",
                label: "Prestige hekken"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/ogrodzenia.png",
                alt: "Accessoires voor omheiningen uit het leveranciergamma",
                label: "Accessoires"
            }
        ],
        keywords: [
            "omheiningen",
            "poorten",
            "buitenafsluiting",
            "hekwerk",
            "tuinafsluiting"
        ],
        intro: [
            "Op de leverancierssite vallen ook omheiningen en poorten onder het productgamma. Voor Yannova is dat interessant bij projecten waar de buitenzijde van de woning als geheel wordt aangepakt.",
            "Op de site tonen we dit niet als losse technische catalogus, maar als aanvullende productgroep voor klanten die een partner zoeken voor ramen, deuren, poorten en buitenafwerking."
        ],
        productTypes: [
            "Standaard omheiningen",
            "Afsluitingen met meer architecturale uitstraling",
            "Poortoplossingen afgestemd op woning en toegang",
            "Accessoires en afwerkingsopties"
        ],
        benefits: [
            "Eén visuele lijn tussen woning en perceel",
            "Meer privacy en afbakening",
            "Interessant in combinatie met poorten en buitenschrijnwerk",
            "Praktisch voor totaalprojecten met één aanspreekpunt"
        ],
        idealFor: [
            "Eigenaars die de volledige buitenzijde willen vernieuwen",
            "Projecten waar toegang en afwerking samen bekeken worden",
            "Woningen waar coherente materiaal- en kleurkeuze belangrijk is"
        ],
        supplierNote: "Deze productgroep is beschikbaar via onze leverancier, maar Yannova vertaalt ze naar projecten waar afwerking, plaatsing en samenhang met de woning centraal staan.",
        primaryCtaHref: "/contact",
        primaryCtaLabel: "Bespreek omheiningen en poorten",
        secondaryLinks: [
            {
                label: "Garagepoorten",
                href: "/producten/garagepoorten"
            },
            {
                label: "Totaalrenovatie",
                href: "/totaalrenovatie"
            }
        ]
    },
    {
        slug: "horren",
        name: "Horren",
        shortName: "Horren",
        categoryLabel: "Productgamma",
        overview: "Horren en muggengaasoplossingen voor ramen en deuren, geïntegreerd in het buitenschrijnwerk.",
        metaTitle: "Horren & Muggengaas | Oplossingen voor ramen en deuren | Yannova",
        metaDescription: "Yannova kan ook horren en muggengaasoplossingen leveren voor ramen en deuren als onderdeel van een volledig buitenschrijnwerkproject.",
        heroTitle: "Horren als praktische aanvulling op ramen en deuren",
        heroDescription: "Horren horen voor veel klanten bij een compleet ramen- en deurenproject. Daarom kan Yannova ze ook meenemen binnen het bredere productgamma.",
        icon: "shield",
        coverImage: {
            src: "https://ekookna.nl/file/records/oryginalne/moskitiera01.jpg",
            alt: "Voorbeeld van horren voor ramen en deuren",
            label: "Horren voor ramen en deuren"
        },
        gallery: [
            {
                src: "https://ekookna.nl/file/records/oryginalne/moskitieraokienna2x.png",
                alt: "Horren voor ramen uit het leveranciergamma",
                label: "Horren"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/moskitieradrzwiowa2x.png",
                alt: "Muggengaas voor deuren uit het leveranciergamma",
                label: "Muggengaas voor deuren"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/moskitieraprzesuwna2x.png",
                alt: "Uitschuifbare horren uit het leveranciergamma",
                label: "Uitschuifbare horren"
            }
        ],
        keywords: [
            "horren",
            "muggengaas",
            "horramen",
            "hordeur",
            "insectenwering"
        ],
        intro: [
            "Horren zijn geen hoofdproduct zoals ramen of deuren, maar ze verhogen het gebruikscomfort aanzienlijk en worden vaak mee beslist tijdens de opmeting.",
            "Door ze zichtbaar op de site te maken, vangt Yannova ook bezoekers op die specifiek zoeken naar een geïntegreerde oplossing voor insectenwering bij nieuwe ramen of deuren."
        ],
        productTypes: [
            "Horren voor ramen",
            "Muggengaas voor deuren",
            "Uitschuifbare en geïntegreerde oplossingen",
            "Toepassingen afgestemd op dagelijks gebruik"
        ],
        benefits: [
            "Meer comfort zonder los achterafwerk",
            "Nettere integratie in nieuwe ramen en deuren",
            "Interessant als upsell bij buitenschrijnwerk",
            "Eén technisch afgestemde oplossing"
        ],
        idealFor: [
            "Klanten die ramen en deuren volledig willen afwerken",
            "Woningen met tuin- of terrasconnectie",
            "Projecten waar comfort en dagelijks gebruik centraal staan"
        ],
        supplierNote: "Horren nemen we best mee als onderdeel van het totaaladvies. Zo sluiten maatvoering, gebruik en afwerking beter aan op het gekozen schrijnwerk.",
        primaryCtaHref: "/ramen-deuren",
        primaryCtaLabel: "Combineer horren met ramen en deuren",
        secondaryLinks: [
            {
                label: "Ramen",
                href: "/producten/ramen"
            },
            {
                label: "Deuren",
                href: "/producten/deuren"
            }
        ]
    },
    {
        slug: "beglazing",
        name: "Beglazing",
        shortName: "Beglazing",
        categoryLabel: "Productgamma",
        overview: "Dubbele, drievoudige en gespecialiseerde beglazing voor isolatie, veiligheid en geluidscomfort.",
        metaTitle: "Beglazing | HR++, Triple en Veiligheidsglas | Yannova",
        metaDescription: "Ontdek beglazingsoplossingen via Yannova: dubbele beglazing, drievoudige beglazing, akoestische en veilige glasopties.",
        heroTitle: "Beglazing die isolatie en comfort mee bepaalt",
        heroDescription: "Niet alleen het profiel, maar ook het glas bepaalt hoe goed ramen en schuifsystemen presteren. Daarom nemen we beglazing mee als aparte productgroep.",
        icon: "sparkles",
        coverImage: {
            src: "https://ekookna.nl/file/records/oryginalne/szyby01.jpg",
            alt: "Voorbeeld van beglazing uit het leveranciergamma",
            label: "Dubbel en triple glas"
        },
        gallery: [
            {
                src: "https://ekookna.nl/file/records/oryginalne/pakietyszybowe2x.png",
                alt: "Beglazingseenheden uit het leveranciergamma",
                label: "Beglazingseenheden"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/rodzajeszyb2x.png",
                alt: "Soorten glas uit het leveranciergamma",
                label: "Soorten glas"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/2c85-szybydodatki.png",
                alt: "Glasaccessoires uit het leveranciergamma",
                label: "Accessoires"
            }
        ],
        keywords: [
            "beglazing",
            "dubbele beglazing",
            "drievoudige beglazing",
            "veiligheidsglas",
            "akoestisch glas"
        ],
        intro: [
            "Op de leverancierssite is beglazing een aparte categorie. Dat is logisch, want glaskeuze heeft directe impact op warmteverlies, geluidscomfort, veiligheid en zonbelasting.",
            "Voor Yannova is dit vooral relevant als inhoudelijke verdieping: we tonen klanten dat er meer keuzes zijn dan alleen een nieuw raam en dat we daarin gericht kunnen adviseren."
        ],
        productTypes: [
            "Dubbele beglazing",
            "Drievoudige beglazing",
            "Akoestische glasoplossingen",
            "Veiligheids- en comfortglas"
        ],
        benefits: [
            "Betere energieprestaties",
            "Meer geluidscomfort in drukke omgevingen",
            "Extra veiligheid waar nodig",
            "Afstembaar op ramen, deuren en schuifsystemen"
        ],
        idealFor: [
            "Renovaties met EPC-focus",
            "Woningen langs drukke straten",
            "Klanten die prestatie en comfort expliciet willen vergelijken"
        ],
        supplierNote: "Glaskeuze gebeurt niet los van het profiel. Yannova stemt beglazing af op de raamopbouw, de woning en het beoogde comfortniveau.",
        primaryCtaHref: "/ramen",
        primaryCtaLabel: "Bespreek beglazing voor uw ramen",
        secondaryLinks: [
            {
                label: "Prijs nieuwe ramen",
                href: "/blog/wat-kosten-nieuwe-ramen"
            },
            {
                label: "PVC of aluminium",
                href: "/blog/pvc-of-aluminium-ramen"
            }
        ]
    },
    {
        slug: "pergolas",
        name: "Pergola's",
        shortName: "Pergola's",
        categoryLabel: "Productgamma",
        overview: "Pergola-oplossingen en buitencomfortsystemen als uitbreiding van terras, schuifsystemen en leefruimte.",
        metaTitle: "Pergola's | Buitencomfort en Terrasoplossingen | Yannova",
        metaDescription: "Yannova kan ook pergola-oplossingen en buitencomfortsystemen meenemen als onderdeel van een bredere buiten- of renovatieaanpak.",
        heroTitle: "Pergola's voor buitencomfort en een sterkere leefomgeving",
        heroDescription: "Pergola's zijn een interessante uitbreiding voor woningen met terras of tuin en sluiten goed aan op schuifsystemen, zonwering en moderne buitenprojecten.",
        icon: "sun",
        coverImage: {
            src: "https://ekookna.nl/file/records/oryginalne/pergolanuuneco1.jpg",
            alt: "Voorbeeld van een pergola uit het leveranciergamma",
            label: "Bioklimatische pergola's"
        },
        gallery: [
            {
                src: "https://ekookna.nl/file/records/oryginalne/fc08-pergolanuuneco.png",
                alt: "Bioklimatische pergola's uit het leveranciergamma",
                label: "Bioklimatische pergola's"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/zestawieniedodatki.jpg",
                alt: "Accessoires voor pergola's uit het leveranciergamma",
                label: "Accessoires"
            },
            {
                src: "https://ekookna.nl/file/records/oryginalne/pergolanuuneco2.jpg",
                alt: "Vrijstaande pergola-opstelling uit het leveranciergamma",
                label: "Vrijstaande opstelling"
            }
        ],
        keywords: [
            "pergola",
            "bioklimatische pergola",
            "terrasoverkapping",
            "buitencomfort"
        ],
        intro: [
            "Dit is geen klassieke Yannova-dienst, maar wel een productgroep die via de leverancier beschikbaar is en goed past bij klanten die hun buitenruimte mee willen afwerken.",
            "Vooral bij moderne renovaties met veel glas, schuifdeuren en terrasconnectie kan een pergola logisch deel uitmaken van het totaalvoorstel."
        ],
        productTypes: [
            "Bioklimatische pergola's",
            "Terrasgerichte oplossingen",
            "Aanvullende accessoires en afwerking",
            "Combinaties met zonwering en schuifsystemen"
        ],
        benefits: [
            "Meer bruikbare buitenruimte",
            "Sterke aanvulling op terrasgerichte renovaties",
            "Interessant bij grote glaspartijen en schuifsystemen",
            "Meerwaarde voor comfort en uitstraling"
        ],
        idealFor: [
            "Woningen met tuin of patio",
            "Projecten waar binnen en buiten visueel verbonden worden",
            "Eigenaars die comfort en uitstraling samen willen aanpakken"
        ],
        supplierNote: "Pergola's nemen we op als aanvullende productgroep. We beoordelen eerst of dit logisch is binnen het project en de architectuur van de woning.",
        primaryCtaHref: "/contact",
        primaryCtaLabel: "Bespreek een pergola-oplossing",
        secondaryLinks: [
            {
                label: "Schuifsystemen",
                href: "/producten/schuifsystemen"
            },
            {
                label: "Rolluiken & zonwering",
                href: "/producten/rolluiken-zonwering"
            }
        ]
    }
];
function getProductCatalogItem(slug) {
    return productCatalog.find((item)=>item.slug === slug) ?? null;
}
}),
"[project]/src/components/ProductCatalogSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCatalogSection",
    ()=>ProductCatalogSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$app$2d$window$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AppWindow$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/app-window.js [app-rsc] (ecmascript) <export default as AppWindow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$blinds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Blinds$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/blinds.js [app-rsc] (ecmascript) <export default as Blinds>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__DoorOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/door-open.js [app-rsc] (ecmascript) <export default as DoorOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelsTopLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-rsc] (ecmascript) <export default as PanelsTopLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-rsc] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-rsc] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2d$medium$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__SunMedium$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun-medium.js [app-rsc] (ecmascript) <export default as SunMedium>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$warehouse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Warehouse$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/warehouse.js [app-rsc] (ecmascript) <export default as Warehouse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$product$2d$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/product-catalog.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const iconMap = {
    window: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$app$2d$window$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AppWindow$3e$__["AppWindow"],
    door: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__DoorOpen$3e$__["DoorOpen"],
    panels: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelsTopLeft$3e$__["PanelsTopLeft"],
    sun: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2d$medium$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__SunMedium$3e$__["SunMedium"],
    garage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$warehouse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Warehouse$3e$__["Warehouse"],
    shield: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
    sparkles: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
};
function ProductCatalogSection({ compact = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: compact ? "section-divider-grid border-t border-white/10 py-16" : "section-divider-grid border-y border-white/10 bg-[#0f1115] py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-secondary",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$blinds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Blinds$3e$__["Blinds"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductCatalogSection.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                "Leverbaar via ons gamma"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductCatalogSection.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-white",
                            children: "Meer dan alleen ramen en deuren"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductCatalogSection.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-lg leading-relaxed text-gray-300",
                            children: "Yannova kan ook een ruimer productgamma aanbieden op basis van het assortiment van de leverancier. We tonen het op onze site als eigen aanbod, met focus op wat relevant is voor Belgische renovatie- en plaatsingsprojecten."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductCatalogSection.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductCatalogSection.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$product$2d$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productCatalog"].map((item)=>{
                        const Icon = iconMap[item.icon];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/producten/${item.slug}`,
                            className: "group flex h-full flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative aspect-[5/3] overflow-hidden rounded-[1.75rem] bg-white/5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            src: item.coverImage.src,
                                            alt: item.coverImage.alt,
                                            fill: true,
                                            sizes: "(min-width: 1280px) 28vw, (min-width: 768px) 42vw, 92vw",
                                            className: "object-cover transition duration-500 group-hover:scale-[1.04]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductCatalogSection.tsx",
                                            lineNumber: 59,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/35 to-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductCatalogSection.tsx",
                                            lineNumber: 66,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[#0a0c10]/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "h-3.5 w-3.5 text-secondary"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductCatalogSection.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 21
                                                }, this),
                                                item.coverImage.label
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductCatalogSection.tsx",
                                            lineNumber: 67,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductCatalogSection.tsx",
                                    lineNumber: 58,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "editorial-slat mt-5 flex flex-1 flex-col pr-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-medium text-secondary",
                                            children: item.categoryLabel
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductCatalogSection.tsx",
                                            lineNumber: 73,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-2 text-2xl font-semibold text-white transition-colors group-hover:text-secondary",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductCatalogSection.tsx",
                                            lineNumber: 74,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-sm leading-relaxed text-gray-400",
                                            children: item.overview
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductCatalogSection.tsx",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-secondary",
                                            children: [
                                                "Bekijk productpagina",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductCatalogSection.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductCatalogSection.tsx",
                                            lineNumber: 78,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductCatalogSection.tsx",
                                    lineNumber: 72,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.slug, true, {
                            fileName: "[project]/src/components/ProductCatalogSection.tsx",
                            lineNumber: 53,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/ProductCatalogSection.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/producten",
                        className: "inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline",
                        children: [
                            "Naar het volledige productoverzicht",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCatalogSection.tsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCatalogSection.tsx",
                        lineNumber: 90,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ProductCatalogSection.tsx",
                    lineNumber: 89,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProductCatalogSection.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ProductCatalogSection.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(public)/producten/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductenPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-rsc] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-rsc] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/seo.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$breadcrumb$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/breadcrumb-schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCatalogSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCatalogSection.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateSEO"])({
    title: "Producten | Ramen, Deuren, Rolluiken & Garagepoorten",
    description: "Ontdek het bredere productgamma van Yannova: ramen, deuren, schuifsystemen, rolluiken, zonwering en garagepoorten.",
    path: "/producten",
    keywords: [
        "producten ramen deuren",
        "rolluiken",
        "garagepoorten",
        "schuifsystemen",
        "zonwering"
    ]
});
const breadcrumbSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$breadcrumb$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateBreadcrumbSchema"])([
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Producten",
        url: "/producten"
    }
]);
function ProductenPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(breadcrumbSchema)
                }
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/producten/page.tsx",
                lineNumber: 30,
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-bold text-white sm:text-5xl",
                                        children: "Producten die Yannova kan leveren en plaatsen"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/producten/page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-6 max-w-3xl text-xl leading-relaxed text-gray-300",
                                        children: "Naast de diensten die al op de site stonden, kunnen we ook een ruimer gamma tonen op basis van het assortiment van onze leverancier. Denk aan schuifsystemen, rolluiken, screens en garagepoorten naast ramen en deuren."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/producten/page.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 flex flex-col gap-4 sm:flex-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                className: "inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-base font-semibold text-white hover:bg-secondary/90 transition-colors",
                                                children: [
                                                    "Vraag productadvies",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/producten/page.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/producten/page.tsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/offerte",
                                                className: "inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-base font-medium text-white hover:bg-white/5 transition-colors",
                                                children: "Offerte aanvragen"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/producten/page.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/producten/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/producten/page.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/producten/page.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/producten/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCatalogSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductCatalogSection"], {}, void 0, false, {
                        fileName: "[project]/src/app/(public)/producten/page.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto grid gap-8 px-6 lg:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "editorial-pane",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-white",
                                            children: "Belangrijk voor de website"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/producten/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "mt-6 space-y-3",
                                            children: [
                                                "We tonen dit gamma als eigen Yannova-aanbod, niet als kopie van de leverancierssite.",
                                                "Productcopy moet herschreven worden in eigen woorden voor SEO en duidelijkheid.",
                                                "Leveranciersfoto's of technische fiches gebruik je alleen met expliciete toestemming.",
                                                "Elke productgroep linkt best door naar contact, offerte en relevante dienstpagina&apos;s."
                                            ].map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-3 text-gray-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            className: "mt-0.5 h-5 w-5 shrink-0 text-secondary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/producten/page.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: point
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/producten/page.tsx",
                                                            lineNumber: 80,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, point, true, {
                                                    fileName: "[project]/src/app/(public)/producten/page.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/producten/page.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/producten/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "editorial-callout px-6 py-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-white",
                                            children: "Volgende uitbouw"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/producten/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-gray-200",
                                            children: "Zodra het gamma op hoofdniveau zichtbaar is, kunnen we voor de best presterende productgroepen ook lokale pagina's maken zoals `rolluiken-zoersel` of `garagepoorten-antwerpen`."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/producten/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 flex flex-col gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/ramen-deuren",
                                                    className: "inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#0a0c10] hover:bg-white/90 transition-colors",
                                                    children: "Naar ramen & deuren"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/producten/page.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/renovatie",
                                                    className: "inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors",
                                                    children: [
                                                        "Naar renovatie",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/producten/page.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/producten/page.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/producten/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/producten/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/producten/page.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/producten/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/producten/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/(public)/producten/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(public)/producten/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5b1e9b7b._.js.map