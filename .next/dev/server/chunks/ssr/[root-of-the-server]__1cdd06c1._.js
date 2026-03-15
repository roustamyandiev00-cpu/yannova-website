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
"[project]/src/data/products.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PRODUCTS",
    ()=>PRODUCTS,
    "getAllProducts",
    ()=>getAllProducts,
    "getFeaturedProducts",
    ()=>getFeaturedProducts,
    "getProductById",
    ()=>getProductById,
    "getProductsByCategory",
    ()=>getProductsByCategory,
    "getRelatedProducts",
    ()=>getRelatedProducts
]);
const CATALOG_TIMESTAMP = '2026-03-13T00:00:00.000Z';
const SHOP_IMAGES = {
    pvc: '/images/products/pvc-raamprofiel.png',
    aluminium: '/images/products/aluminium-raamprofiel.png',
    wood: '/images/products/houten-raamprofiel.png',
    door: '/images/products/voordeur.png',
    crepi: '/images/products/crepi-isolatie-gevel.png',
    steenstrips: '/images/products/steenstrips-isolatie-gevel.png'
};
function createProduct(product) {
    return {
        ...product,
        createdAt: new Date(CATALOG_TIMESTAMP),
        updatedAt: new Date(CATALOG_TIMESTAMP)
    };
}
const PRODUCTS = [
    createProduct({
        id: 'fenosol-pvc-reiniger-wit',
        name: 'FENOSOL PVC Reiniger Wit',
        slug: 'fenosol-pvc-reiniger-wit',
        category: 'onderhoud-reiniging',
        shortDescription: 'Professionele reiniger voor witte PVC-profielen, ramen en deuren.',
        description: 'FENOSOL PVC Reiniger Wit verwijdert vuil, vet en aanslag van witte PVC ramen en deuren zonder de toplaag aan te tasten. Ideaal voor periodiek onderhoud na plaatsing of renovatie.',
        price: 14.95,
        originalPrice: 17.95,
        inStock: true,
        stockQuantity: 48,
        images: [
            SHOP_IMAGES.pvc
        ],
        features: [
            'Speciaal ontwikkeld voor witte PVC-profielen',
            'Verwijdert vuil en lichte aanslag zonder strepen',
            'Geschikt voor ramen, deuren en rolluiken',
            'Favoriet product na plaatsing en oplevering'
        ],
        specifications: {
            Inhoud: '500 ml',
            Toepassing: 'PVC-profielen en afwerkstukken',
            Gebruik: 'Met zachte doek of spons'
        },
        relatedProducts: [
            'rubberdichting-conditioner',
            'onderhoudsbox-ramen-deuren'
        ],
        tags: [
            'fenosol',
            'pvc',
            'reiniger',
            'ramen',
            'deuren'
        ],
        brand: 'FENOSOL',
        sku: 'FEN-PVC-WIT-500',
        weight: 550,
        featured: true,
        bestseller: true
    }),
    createProduct({
        id: 'fenosol-aluminium-cleaner',
        name: 'FENOSOL Aluminium Cleaner',
        slug: 'fenosol-aluminium-cleaner',
        category: 'onderhoud-reiniging',
        shortDescription: 'Veilige reiniger voor aluminium ramen, deuren en geveldetails.',
        description: 'Een professionele aluminiumreiniger voor gelakte en geanodiseerde profielen. Verwijdert bouwstof, vingerafdrukken en lichte kalkresten zonder het oppervlak dof te maken.',
        price: 16.95,
        inStock: true,
        stockQuantity: 32,
        images: [
            SHOP_IMAGES.aluminium
        ],
        features: [
            'Voor aluminium ramen, deuren en afdeklijsten',
            'Verwijdert lichte kalk- en cementsluier',
            'Professionele formule voor renovatie en nazorg',
            'Laat een frisse, propere afwerking achter'
        ],
        specifications: {
            Inhoud: '500 ml',
            Materiaal: 'Gelakt en geanodiseerd aluminium',
            Afwerking: 'Streeploos'
        },
        relatedProducts: [
            'smeerspray-beslag',
            'onderhoudsbox-ramen-deuren'
        ],
        tags: [
            'aluminium',
            'reiniger',
            'onderhoud',
            'kozijnen'
        ],
        brand: 'FENOSOL',
        sku: 'FEN-ALU-500',
        weight: 550,
        featured: true
    }),
    createProduct({
        id: 'rubberdichting-conditioner',
        name: 'Rubberdichting Conditioner',
        slug: 'rubberdichting-conditioner',
        category: 'onderhoud-reiniging',
        shortDescription: 'Voedt rubber dichtingen en voorkomt uitdroging of vastkleven.',
        description: 'Deze conditioner houdt rubberen dichtingen soepel zodat ramen en deuren beter sluiten. Aanbevolen vóór de winter en na intensieve reiniging.',
        price: 12.95,
        inStock: true,
        stockQuantity: 44,
        images: [
            SHOP_IMAGES.pvc
        ],
        features: [
            'Behoudt soepelheid van rubbers en dichtingen',
            'Helpt tocht en piepen verminderen',
            'Makkelijk aan te brengen met doek of applicator',
            'Aanbevolen voor jaarlijks onderhoud'
        ],
        specifications: {
            Inhoud: '200 ml',
            Toepassing: 'Ramen, deuren en schuifpartijen',
            Frequentie: '2 tot 4 keer per jaar'
        },
        relatedProducts: [
            'fenosol-pvc-reiniger-wit',
            'winter-isolatieset'
        ],
        tags: [
            'rubber',
            'dichting',
            'onderhoud',
            'tocht'
        ],
        brand: 'Yannova Care',
        sku: 'YAN-RUB-200',
        weight: 220,
        bestseller: true
    }),
    createProduct({
        id: 'smeerspray-beslag',
        name: 'Beslag- en Scharnierspray',
        slug: 'smeerspray-beslag',
        category: 'onderhoud-reiniging',
        shortDescription: 'Multispray voor bewegende delen van ramen, deuren en schuifsystemen.',
        description: 'Onderhoudsspray voor scharnieren, sluitpunten en bewegende beslagonderdelen. Vermindert piepen en slijtage en verbetert de bediening van ramen en deuren.',
        price: 9.95,
        inStock: true,
        stockQuantity: 52,
        images: [
            SHOP_IMAGES.aluminium
        ],
        features: [
            'Voor scharnieren, sluitstukken en beslag',
            'Snelle smering zonder vettige resten',
            'Helpt piepen en stroef openen voorkomen',
            'Geschikt voor periodiek onderhoud'
        ],
        specifications: {
            Inhoud: '250 ml',
            Type: 'Precisiespray',
            Toepassing: 'Binnen- en buitenschrijnwerk'
        },
        relatedProducts: [
            'fenosol-aluminium-cleaner',
            'scharnier-onderhoudsset'
        ],
        tags: [
            'smering',
            'beslag',
            'scharnier',
            'onderhoud'
        ],
        brand: 'Yannova Care',
        sku: 'YAN-BSL-250',
        weight: 280
    }),
    createProduct({
        id: 'tochtstrip-e-profiel',
        name: 'Tochtstrip E-Profiel Wit',
        slug: 'tochtstrip-e-profiel',
        category: 'tochtwering-isolatie',
        shortDescription: 'Zelfklevende tochtstrip voor kleine kieren rond ramen en deuren.',
        description: 'E-profiel tochtstrip voor het snel afdichten van kleine kieren. Vermindert koude luchtstromen, verbetert het comfort en helpt het energieverbruik beperken.',
        price: 7.95,
        inStock: true,
        stockQuantity: 80,
        images: [
            SHOP_IMAGES.pvc
        ],
        features: [
            'Voor kieren van 1 tot 3,5 mm',
            'Sterke kleeflaag voor snelle montage',
            'Geschikt voor ramen, deuren en renovatieprojecten',
            'Helpt warmteverlies beperken'
        ],
        specifications: {
            Lengte: '2 x 6 meter',
            Kleur: 'Wit',
            Toepassing: 'PVC, hout en aluminium'
        },
        relatedProducts: [
            'silicone-kierdichting',
            'winter-isolatieset'
        ],
        tags: [
            'tochtstrip',
            'isolatie',
            'e-profiel',
            'energie'
        ],
        brand: 'Yannova Home',
        sku: 'YAN-EPR-WHI',
        weight: 180,
        featured: true
    }),
    createProduct({
        id: 'silicone-kierdichting',
        name: 'Silicone Kierdichting Transparant',
        slug: 'silicone-kierdichting',
        category: 'tochtwering-isolatie',
        shortDescription: 'Transparante afdichtstrip voor ramen, vleugels en schuifpartijen.',
        description: 'Een transparante silicone afdichtingsstrip voor het verbeteren van comfort zonder visueel storende afwerking. Handig voor bestaande ramen en deuren met kleine luchtlekken.',
        price: 11.95,
        inStock: true,
        stockQuantity: 38,
        images: [
            SHOP_IMAGES.wood
        ],
        features: [
            'Bijna onzichtbare afwerking',
            'Voor ramen, deuren en schuifdeuren',
            'Verbetert akoestisch comfort',
            'Flexibel en eenvoudig op maat te knippen'
        ],
        specifications: {
            Lengte: '5 meter',
            Kleur: 'Transparant',
            Materiaal: 'Silicone'
        },
        relatedProducts: [
            'tochtstrip-e-profiel',
            'onderdeurborstel-premium'
        ],
        tags: [
            'kierdichting',
            'silicone',
            'tocht',
            'transparant'
        ],
        brand: 'Yannova Home',
        sku: 'YAN-SIL-TR-5M',
        weight: 160
    }),
    createProduct({
        id: 'onderdeurborstel-premium',
        name: 'Onderdeurborstel Premium',
        slug: 'onderdeurborstel-premium',
        category: 'deur-accessoires',
        shortDescription: 'Aluminium onderdeurborstel tegen tocht, stof en geluid.',
        description: 'Een stevige onderdeurborstel met aluminium profiel en duurzame borstelharen. Ideaal voor buitendeuren en renovaties waar tocht onder de deur moet worden tegengehouden.',
        price: 18.95,
        inStock: true,
        stockQuantity: 26,
        images: [
            SHOP_IMAGES.door
        ],
        features: [
            'Beperkt tocht en stof onder de deur',
            'Stevig aluminium profiel',
            'Op maat in te korten',
            'Geschikt voor binnen- en buitendeuren'
        ],
        specifications: {
            Lengte: '100 cm',
            Kleur: 'Mat aluminium',
            Montage: 'Schroefbevestiging'
        },
        relatedProducts: [
            'tochtstrip-e-profiel',
            'rvs-deurstopper'
        ],
        tags: [
            'deurborstel',
            'tocht',
            'deur',
            'isolatie'
        ],
        brand: 'Yannova Home',
        sku: 'YAN-ODB-100',
        weight: 420,
        bestseller: true
    }),
    createProduct({
        id: 'afsluitbare-raamgreep',
        name: 'Afsluitbare Raamgreep Mat Zwart',
        slug: 'afsluitbare-raamgreep',
        category: 'raam-accessoires',
        shortDescription: 'Veilige raamgreep met sleutel voor extra kind- en inbraakveiligheid.',
        description: 'Moderne raamgreep in mat zwart met sleutel. Geschikt voor renovatie en vervanging van standaard grepen waar extra veiligheid of kinderbeveiliging gewenst is.',
        price: 24.95,
        inStock: true,
        stockQuantity: 18,
        images: [
            SHOP_IMAGES.aluminium
        ],
        features: [
            'Afsluitbaar met sleutel',
            'Strakke matzwarte afwerking',
            'Universele maatvoering voor veel draaikiepramen',
            'Ideaal voor slaapkamers en kinderkamers'
        ],
        specifications: {
            Kleur: 'Mat zwart',
            Materiaal: 'Gepoedercoat metaal',
            Inclusief: '2 sleutels en bevestigingsschroeven'
        },
        relatedProducts: [
            'compact-ventilatierooster',
            'scharnier-onderhoudsset'
        ],
        tags: [
            'raamgreep',
            'veiligheid',
            'kindveilig',
            'zwart'
        ],
        brand: 'Yannova Hardware',
        sku: 'YAN-RGR-BLK',
        weight: 320,
        featured: true
    }),
    createProduct({
        id: 'compact-ventilatierooster',
        name: 'Compact Ventilatierooster Wit',
        slug: 'compact-ventilatierooster',
        category: 'raam-accessoires',
        shortDescription: 'Compact rooster voor gecontroleerde ventilatie zonder groot warmteverlies.',
        description: 'Een subtiel ventilatierooster voor renovaties en bestaande raamkaders waar extra verluchting nodig is. Past bij moderne PVC en aluminium profielen.',
        price: 29.95,
        inStock: true,
        stockQuantity: 14,
        images: [
            SHOP_IMAGES.pvc
        ],
        features: [
            'Discrete ventilatie-oplossing',
            'Geschikt voor renovatie en vervanging',
            'Helpt condensvorming beperken',
            'Strakke witte afwerking'
        ],
        specifications: {
            Breedte: '400 mm',
            Kleur: 'Wit',
            Materiaal: 'PVC en aluminium onderdelen'
        },
        relatedProducts: [
            'afsluitbare-raamgreep',
            'tochtstrip-e-profiel'
        ],
        tags: [
            'ventilatie',
            'raam',
            'rooster',
            'condens'
        ],
        brand: 'Yannova Hardware',
        sku: 'YAN-VRG-WHT',
        weight: 450
    }),
    createProduct({
        id: 'scharnier-onderhoudsset',
        name: 'Scharnier Onderhoudsset',
        slug: 'scharnier-onderhoudsset',
        category: 'raam-accessoires',
        shortDescription: 'Set met spray, doek en tool voor onderhoud van scharnieren en beslag.',
        description: 'Praktische onderhoudsset om draaikiepbeslag, scharnieren en sluitpunten te reinigen en te smeren. Een handige aanvulling voor klanten na plaatsing of renovatie.',
        price: 19.95,
        inStock: true,
        stockQuantity: 21,
        images: [
            SHOP_IMAGES.aluminium
        ],
        features: [
            'Complete set voor periodiek onderhoud',
            'Inclusief precisiespray en onderhoudsdoek',
            'Voor ramen, deuren en schuifsystemen',
            'Verlengt de levensduur van beslag'
        ],
        specifications: {
            Inhoud: 'Spray, doek en onderhoudstool',
            Gebruik: 'Scharnieren, sluitpunten en beslag',
            GeschiktVoor: 'PVC, aluminium en hout'
        },
        relatedProducts: [
            'smeerspray-beslag',
            'afsluitbare-raamgreep'
        ],
        tags: [
            'scharnier',
            'onderhoud',
            'beslag',
            'set'
        ],
        brand: 'Yannova Care',
        sku: 'YAN-SOS-SET',
        weight: 500
    }),
    createProduct({
        id: 'rvs-deurstopper',
        name: 'RVS Deurstopper Vloermodel',
        slug: 'rvs-deurstopper',
        category: 'deur-accessoires',
        shortDescription: 'Stevige deurstopper in inox look voor binnen- en buitendeuren.',
        description: 'Een minimalistische deurstopper die wand en deurkruk beschermt tegen beschadiging. Past in moderne interieurs en is geschikt voor nieuwbouw en renovatie.',
        price: 13.95,
        inStock: true,
        stockQuantity: 36,
        images: [
            SHOP_IMAGES.door
        ],
        features: [
            'Beschermt muren en deurklinken',
            'Stevige montage op vloer',
            'Neutrale inox look',
            'Onderhoudsvriendelijk'
        ],
        specifications: {
            Hoogte: '45 mm',
            Materiaal: 'RVS-look met rubber buffer',
            Montage: 'Schroefbevestiging'
        },
        relatedProducts: [
            'onderdeurborstel-premium',
            'veiligheidsbeslag-voordeur'
        ],
        tags: [
            'deurstopper',
            'rvs',
            'deur',
            'hardware'
        ],
        brand: 'Yannova Hardware',
        sku: 'YAN-DSP-RVS',
        weight: 310
    }),
    createProduct({
        id: 'veiligheidsbeslag-voordeur',
        name: 'Veiligheidsbeslag Set voor Voordeur',
        slug: 'veiligheidsbeslag-voordeur',
        category: 'deur-accessoires',
        shortDescription: 'Set met veiligheidsbeslag voor extra bescherming van de cilinder.',
        description: 'Veiligheidsbeslag in moderne uitvoering voor buitendeuren. Helpt de cilinder beschermen tegen manipulatie en geeft de voordeur een nette, professionele afwerking.',
        price: 79.95,
        originalPrice: 89.95,
        inStock: true,
        stockQuantity: 9,
        images: [
            SHOP_IMAGES.door
        ],
        features: [
            'Beschermt cilinder tegen uittrekken en manipulatie',
            'Geschikt voor renovatie van bestaande voordeuren',
            'Strakke en duurzame afwerking',
            'Inclusief bevestigingsmateriaal'
        ],
        specifications: {
            Uitvoering: 'Binnen- en buitenschild',
            Kleur: 'Geborsteld antraciet',
            Toepassing: 'Voordeuren en achterdeuren'
        },
        relatedProducts: [
            'rvs-deurstopper',
            'onderhoudsbox-ramen-deuren'
        ],
        tags: [
            'veiligheidsbeslag',
            'voordeur',
            'inbraakpreventie'
        ],
        brand: 'Yannova Security',
        sku: 'YAN-VBS-ANT',
        weight: 920,
        featured: true,
        bestseller: true
    }),
    createProduct({
        id: 'winter-isolatieset',
        name: 'Winter Isolatieset',
        slug: 'winter-isolatieset',
        category: 'bundels',
        shortDescription: 'Bundel met tochtstrip, kierdichting en rubberonderhoud voor de winter.',
        description: 'Deze winterset combineert de meest gekozen producten om ramen en deuren tochtvrij te maken vóór de koudere maanden. Een praktische bundel voor snelle energiewinst.',
        price: 29.95,
        originalPrice: 34.85,
        inStock: true,
        stockQuantity: 24,
        images: [
            SHOP_IMAGES.steenstrips,
            SHOP_IMAGES.crepi
        ],
        features: [
            'Klaar pakket voor wintervoorbereiding',
            'Combineert afdichting en onderhoud',
            'Gunstiger geprijsd dan losse aankoop',
            'Populair bij bestaande renovatieklanten'
        ],
        specifications: {
            Inhoud: 'Tochtstrip, kierdichting en rubberconditioner',
            GeschiktVoor: 'Ramen, deuren en schuifpartijen',
            Seizoen: 'Najaar en winter'
        },
        relatedProducts: [
            'tochtstrip-e-profiel',
            'rubberdichting-conditioner'
        ],
        tags: [
            'winter',
            'bundel',
            'isolatie',
            'tocht'
        ],
        brand: 'Yannova Care',
        sku: 'YAN-WIN-SET',
        weight: 680,
        featured: true
    }),
    createProduct({
        id: 'onderhoudsbox-ramen-deuren',
        name: 'Onderhoudsbox Ramen & Deuren',
        slug: 'onderhoudsbox-ramen-deuren',
        category: 'bundels',
        shortDescription: 'Complete onderhoudsbox voor periodiek onderhoud van ramen en deuren.',
        description: 'Een complete onderhoudsbox met reiniger, conditioner en smeerspray voor klanten die hun schrijnwerk professioneel willen onderhouden. Ideaal als upsell na plaatsing.',
        price: 39.95,
        originalPrice: 47.85,
        inStock: true,
        stockQuantity: 16,
        images: [
            SHOP_IMAGES.pvc,
            SHOP_IMAGES.aluminium
        ],
        features: [
            'Alles-in-één pakket voor PVC, aluminium en beslag',
            'Interessant als naverkoopproduct',
            'Duidelijke combinatie van reiniging en bescherming',
            'Geschikt voor seizoensonderhoud'
        ],
        specifications: {
            Inhoud: 'PVC reiniger, aluminium cleaner, conditioner en spray',
            Gebruik: '2 tot 3 onderhoudsmomenten',
            Verpakking: 'Compacte geschenkbox'
        },
        relatedProducts: [
            'fenosol-pvc-reiniger-wit',
            'fenosol-aluminium-cleaner'
        ],
        tags: [
            'onderhoudsbox',
            'bundel',
            'ramen',
            'deuren'
        ],
        brand: 'Yannova Care',
        sku: 'YAN-BOX-MNT',
        weight: 1800,
        featured: true,
        bestseller: true
    })
];
function getAllProducts() {
    return [
        ...PRODUCTS
    ];
}
function getProductsByCategory(category) {
    if (category === 'all') {
        return getAllProducts();
    }
    return PRODUCTS.filter((product)=>product.category === category);
}
function getProductById(productIdOrSlug) {
    return PRODUCTS.find((product)=>product.id === productIdOrSlug || product.slug === productIdOrSlug) ?? null;
}
function getFeaturedProducts(limit = 4) {
    return PRODUCTS.filter((product)=>product.featured || product.bestseller).slice(0, limit);
}
function getRelatedProducts(product, limit = 4) {
    const explicitRelated = (product.relatedProducts ?? []).map((relatedId)=>getProductById(relatedId)).filter((relatedProduct)=>Boolean(relatedProduct));
    if (explicitRelated.length >= limit) {
        return explicitRelated.slice(0, limit);
    }
    const sameCategory = PRODUCTS.filter((candidate)=>candidate.id !== product.id && candidate.category === product.category && !explicitRelated.some((relatedProduct)=>relatedProduct.id === candidate.id));
    return [
        ...explicitRelated,
        ...sameCategory
    ].slice(0, limit);
}
}),
"[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx <module evaluation>", "default");
}),
"[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx", "default");
}),
"[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$shop$2f$product$2f5b$id$5d2f$ProductDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$shop$2f$product$2f5b$id$5d2f$ProductDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$shop$2f$product$2f5b$id$5d2f$ProductDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/(public)/shop/product/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$shop$2f$product$2f5b$id$5d2f$ProductDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx [app-rsc] (ecmascript)");
;
;
;
;
async function generateStaticParams() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllProducts"])().map((product)=>({
            id: product.id
        }));
}
async function generateMetadata({ params }) {
    const { id } = await params;
    const product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductById"])(id);
    return {
        title: product ? `${product.name} | Yannova Shop` : 'Product niet gevonden | Yannova Shop',
        description: product?.shortDescription ?? 'Bekijk productdetails en bestel direct online.'
    };
}
async function ProductPage({ params }) {
    const { id } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductById"])(id)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$shop$2f$product$2f5b$id$5d2f$ProductDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        productId: id
    }, void 0, false, {
        fileName: "[project]/src/app/(public)/shop/product/[id]/page.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/(public)/shop/product/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(public)/shop/product/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1cdd06c1._.js.map