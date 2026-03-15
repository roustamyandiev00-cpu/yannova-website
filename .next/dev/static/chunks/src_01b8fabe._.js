(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/types/shop.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Shop types voor ramen & deuren onderhoud producten
__turbopack_context__.s([
    "CATEGORY_LABELS",
    ()=>CATEGORY_LABELS
]);
const CATEGORY_LABELS = {
    'onderhoud-reiniging': 'Onderhoud & Reiniging',
    'tochtwering-isolatie': 'Tochtwering & Isolatie',
    'raam-accessoires': 'Raam Accessoires',
    'deur-accessoires': 'Deur Accessoires',
    'bundels': 'Bundels & Sets'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(public)/shop/ShopContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShopContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$shop$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/shop.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function ShopContent() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(52);
    if ($[0] !== "d5436913f87eacfdc8c3dc4549435fb18fc5f9e14809da8d1e906c2d3022d069") {
        for(let $i = 0; $i < 52; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d5436913f87eacfdc8c3dc4549435fb18fc5f9e14809da8d1e906c2d3022d069";
    }
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("featured");
    const [filteredProducts, setFilteredProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"]);
    let t0;
    let t1;
    if ($[1] !== searchQuery || $[2] !== selectedCategory || $[3] !== sortBy) {
        t0 = ({
            "ShopContent[useEffect()]": ()=>{
                let nextProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductsByCategory"])(selectedCategory);
                if (searchQuery.trim()) {
                    const normalizedQuery = searchQuery.trim().toLowerCase();
                    nextProducts = nextProducts.filter({
                        "ShopContent[useEffect() > nextProducts.filter()]": (product)=>[
                                product.name,
                                product.shortDescription,
                                product.brand,
                                product.sku,
                                ...product.tags
                            ].filter(Boolean).some({
                                "ShopContent[useEffect() > nextProducts.filter() > (anonymous)()]": (value)=>value.toLowerCase().includes(normalizedQuery)
                            }["ShopContent[useEffect() > nextProducts.filter() > (anonymous)()]"])
                    }["ShopContent[useEffect() > nextProducts.filter()]"]);
                }
                nextProducts = [
                    ...nextProducts
                ].sort({
                    "ShopContent[useEffect() > (anonymous)()]": (left, right)=>{
                        switch(sortBy){
                            case "price-asc":
                                {
                                    return left.price - right.price;
                                }
                            case "price-desc":
                                {
                                    return right.price - left.price;
                                }
                            case "name-asc":
                                {
                                    return left.name.localeCompare(right.name, "nl-BE");
                                }
                            default:
                                {
                                    return Number(right.featured) - Number(left.featured) || Number(right.bestseller) - Number(left.bestseller) || left.price - right.price;
                                }
                        }
                    }
                }["ShopContent[useEffect() > (anonymous)()]"]);
                setFilteredProducts(nextProducts);
            }
        })["ShopContent[useEffect()]"];
        t1 = [
            searchQuery,
            selectedCategory,
            sortBy
        ];
        $[1] = searchQuery;
        $[2] = selectedCategory;
        $[3] = sortBy;
        $[4] = t0;
        $[5] = t1;
    } else {
        t0 = $[4];
        t1 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-200",
            children: "Yannova Shop"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "mb-4 text-4xl font-bold md:text-5xl",
            children: "Onderhoud & Accessoires"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "max-w-2xl text-lg text-sky-100 md:text-xl",
            children: "Praktische onderhoudsproducten en accessoires voor ramen en deuren, geselecteerd voor renovatie, nazorg en seizoensonderhoud."
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t2 = $[6];
        t3 = $[7];
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 py-16 text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4",
                children: [
                    t2,
                    t3,
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex flex-wrap gap-3 text-sm text-sky-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full border border-white/20 bg-white/10 px-4 py-2",
                                children: "Gratis verzending vanaf €50"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                lineNumber: 89,
                                columnNumber: 218
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full border border-white/20 bg-white/10 px-4 py-2",
                                children: "Snelle levering in België"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                lineNumber: 89,
                                columnNumber: 328
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full border border-white/20 bg-white/10 px-4 py-2",
                                children: "Geselecteerd op basis van plaatsing en nazorg"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                lineNumber: 89,
                                columnNumber: 436
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 89,
                        columnNumber: 154
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                lineNumber: 89,
                columnNumber: 102
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "mb-2 block text-sm font-medium text-slate-700",
            children: "Zoek op product, merk of SKU"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "ShopContent[<input>.onChange]": (event)=>setSearchQuery(event.target.value)
        })["ShopContent[<input>.onChange]"];
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== searchQuery) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "search",
                    value: searchQuery,
                    onChange: t7,
                    placeholder: "Bijvoorbeeld FENOSOL, tochtstrip of raamgreep",
                    className: "w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 112,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[12] = searchQuery;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "mb-2 block text-sm font-medium text-slate-700",
            children: "Sorteer"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "ShopContent[<select>.onChange]": (event_0)=>setSortBy(event_0.target.value)
        })["ShopContent[<select>.onChange]"];
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    let t12;
    let t13;
    let t14;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "featured",
            children: "Aanbevolen eerst"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "price-asc",
            children: "Prijs laag naar hoog"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "price-desc",
            children: "Prijs hoog naar laag"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "name-asc",
            children: "Naam A-Z"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[16] = t11;
        $[17] = t12;
        $[18] = t13;
        $[19] = t14;
    } else {
        t11 = $[16];
        t12 = $[17];
        t13 = $[18];
        t14 = $[19];
    }
    let t15;
    if ($[20] !== sortBy) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: sortBy,
                    onChange: t10,
                    className: "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100",
                    children: [
                        t11,
                        t12,
                        t13,
                        t14
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 155,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[20] = sortBy;
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    let t16;
    if ($[22] !== t15 || $[23] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[1.6fr_0.9fr]",
            children: [
                t8,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[22] = t15;
        $[23] = t8;
        $[24] = t16;
    } else {
        t16 = $[24];
    }
    let t17;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = ({
            "ShopContent[<button>.onClick]": ()=>setSelectedCategory("all")
        })["ShopContent[<button>.onClick]"];
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    const t18 = `rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${selectedCategory === "all" ? "bg-slate-900 text-white" : "bg-white text-slate-700 hover:bg-slate-100"}`;
    let t19;
    if ($[26] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t17,
            className: t18,
            children: [
                "Alle Producten (",
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"].length,
                ")"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[26] = t18;
        $[27] = t19;
    } else {
        t19 = $[27];
    }
    let t20;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$shop$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_LABELS"]);
        $[28] = t20;
    } else {
        t20 = $[28];
    }
    let t21;
    if ($[29] !== selectedCategory) {
        t21 = t20.map({
            "ShopContent[(anonymous)()]": (t22)=>{
                const [key, label] = t22;
                const count = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"].filter({
                    "ShopContent[(anonymous)() > PRODUCTS.filter()]": (product_0)=>product_0.category === key
                }["ShopContent[(anonymous)() > PRODUCTS.filter()]"]).length;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ShopContent[(anonymous)() > <button>.onClick]": ()=>setSelectedCategory(key)
                    }["ShopContent[(anonymous)() > <button>.onClick]"],
                    className: `rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${selectedCategory === key ? "bg-sky-600 text-white" : "bg-white text-slate-700 hover:bg-slate-100"}`,
                    children: [
                        label,
                        " (",
                        count,
                        ")"
                    ]
                }, key, true, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 203,
                    columnNumber: 16
                }, this);
            }
        }["ShopContent[(anonymous)()]"]);
        $[29] = selectedCategory;
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    let t22;
    if ($[31] !== t19 || $[32] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-3",
                children: [
                    t19,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                lineNumber: 215,
                columnNumber: 33
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[31] = t19;
        $[32] = t21;
        $[33] = t22;
    } else {
        t22 = $[33];
    }
    const t23 = filteredProducts.length === 1 ? "" : "en";
    let t24;
    if ($[34] !== filteredProducts.length || $[35] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600",
            children: [
                filteredProducts.length,
                " product",
                t23,
                " gevonden"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[34] = filteredProducts.length;
        $[35] = t23;
        $[36] = t24;
    } else {
        t24 = $[36];
    }
    let t25;
    if ($[37] !== searchQuery) {
        t25 = searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "ShopContent[<button>.onClick]": ()=>setSearchQuery("")
            }["ShopContent[<button>.onClick]"],
            className: "text-sm font-medium text-sky-700 hover:text-sky-800",
            children: "Zoekopdracht wissen"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 234,
            columnNumber: 26
        }, this);
        $[37] = searchQuery;
        $[38] = t25;
    } else {
        t25 = $[38];
    }
    let t26;
    if ($[39] !== t24 || $[40] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 flex items-center justify-between gap-4",
            children: [
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[39] = t24;
        $[40] = t25;
        $[41] = t26;
    } else {
        t26 = $[41];
    }
    let t27;
    if ($[42] !== filteredProducts) {
        t27 = filteredProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-semibold text-slate-900",
                    children: "Geen producten gevonden"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 253,
                    columnNumber: 152
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-slate-600",
                    children: "Pas je zoekterm of filter aan om andere onderhoudsproducten te bekijken."
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 253,
                    columnNumber: 234
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 253,
            columnNumber: 43
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3",
            children: filteredProducts.map(_ShopContentFilteredProductsMap)
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 253,
            columnNumber: 354
        }, this);
        $[42] = filteredProducts;
        $[43] = t27;
    } else {
        t27 = $[43];
    }
    let t28;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-3 text-3xl text-sky-600",
                    children: "🚚"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 261,
                    columnNumber: 85
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-2 text-lg font-bold text-slate-900",
                    children: "Snelle Levering"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 261,
                    columnNumber: 137
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-600",
                    children: "Besteld voor 15:00, morgen in huis"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 261,
                    columnNumber: 211
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[44] = t28;
    } else {
        t28 = $[44];
    }
    let t29;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-3 text-3xl text-sky-600",
                    children: "✓"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 268,
                    columnNumber: 85
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-2 text-lg font-bold text-slate-900",
                    children: "Geselecteerd op de werf"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 268,
                    columnNumber: 136
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-600",
                    children: "Producten die logisch aansluiten bij plaatsing, onderhoud en nazorg."
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 268,
                    columnNumber: 218
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[45] = t29;
    } else {
        t29 = $[45];
    }
    let t30;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-16 grid gap-8 md:grid-cols-3",
            children: [
                t28,
                t29,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 text-3xl text-sky-600",
                            children: "💬"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                            lineNumber: 275,
                            columnNumber: 144
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mb-2 text-lg font-bold text-slate-900",
                            children: "Advies bij renovatie"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                            lineNumber: 275,
                            columnNumber: 196
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-600",
                            children: "Hulp nodig? Onze experts helpen je graag"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                            lineNumber: 275,
                            columnNumber: 275
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 275,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 275,
            columnNumber: 11
        }, this);
        $[46] = t30;
    } else {
        t30 = $[46];
    }
    let t31;
    if ($[47] !== t16 || $[48] !== t22 || $[49] !== t26 || $[50] !== t27) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-50",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-12",
                    children: [
                        t16,
                        t22,
                        t26,
                        t27,
                        t30
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 282,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[47] = t16;
        $[48] = t22;
        $[49] = t26;
        $[50] = t27;
        $[51] = t31;
    } else {
        t31 = $[51];
    }
    return t31;
}
_s(ShopContent, "owr89xW3eTsZ/MJxZR9GqMyNAxI=");
_c = ShopContent;
function _ShopContentFilteredProductsMap(product_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/shop/product/${product_1.id}`,
        className: "group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-100 via-white to-sky-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: product_1.images[0],
                        alt: product_1.name,
                        fill: true,
                        sizes: "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
                        className: "object-contain p-6 transition duration-500 group-hover:scale-105"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 294,
                        columnNumber: 323
                    }, this),
                    product_1.bestseller && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white",
                        children: "BESTSELLER"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 294,
                        columnNumber: 558
                    }, this),
                    product_1.originalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute right-4 top-4 rounded-full bg-rose-500 px-3 py-1 text-xs font-bold text-white",
                        children: "AANBIEDING"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 294,
                        columnNumber: 709
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute bottom-4 right-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-white",
                        children: product_1.inStock ? `Op voorraad (${product_1.stockQuantity})` : "Uitverkocht"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 294,
                        columnNumber: 832
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                lineNumber: 294,
                columnNumber: 215
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold uppercase tracking-[0.18em] text-sky-700",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$shop$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_LABELS"][product_1.category]
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                lineNumber: 294,
                                columnNumber: 1121
                            }, this),
                            product_1.brand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-500",
                                children: product_1.brand
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                lineNumber: 294,
                                columnNumber: 1266
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 294,
                        columnNumber: 1059
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-2 min-h-[3rem] line-clamp-2 text-lg font-semibold text-slate-900",
                        children: product_1.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 294,
                        columnNumber: 1338
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4 line-clamp-2 text-sm leading-6 text-slate-600",
                        children: product_1.shortDescription
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 294,
                        columnNumber: 1443
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    product_1.originalPrice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-slate-400 line-through",
                                                children: [
                                                    "€",
                                                    product_1.originalPrice.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                                lineNumber: 294,
                                                columnNumber: 1700
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl font-bold text-rose-600",
                                                children: [
                                                    "€",
                                                    product_1.price.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                                lineNumber: 294,
                                                columnNumber: 1798
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 294,
                                        columnNumber: 1649
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-bold text-slate-900",
                                        children: [
                                            "€",
                                            product_1.price.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 294,
                                        columnNumber: 1894
                                    }, this),
                                    product_1.sku && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500",
                                        children: [
                                            "SKU: ",
                                            product_1.sku
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 294,
                                        columnNumber: 2001
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                lineNumber: 294,
                                columnNumber: 1595
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition group-hover:bg-sky-50 group-hover:text-sky-700",
                                children: "Bekijk product"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                lineNumber: 294,
                                columnNumber: 2070
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 294,
                        columnNumber: 1541
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                lineNumber: 294,
                columnNumber: 1038
            }, this)
        ]
    }, product_1.id, true, {
        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
        lineNumber: 294,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ShopContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_01b8fabe._.js.map