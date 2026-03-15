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
"[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/CartContext.tsx [app-client] (ecmascript)");
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
;
function ProductDetail(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(50);
    if ($[0] !== "11e31ff42f082adb4e2abfc30f70017386ad7668df50ad44561261c034f2db12") {
        for(let $i = 0; $i < 50; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "11e31ff42f082adb4e2abfc30f70017386ad7668df50ad44561261c034f2db12";
    }
    const { productId } = t0;
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cartFeedback, setCartFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { addItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[1] !== addItem || $[2] !== cartFeedback || $[3] !== productId || $[4] !== quantity || $[5] !== selectedImage) {
        t6 = Symbol.for("react.early_return_sentinel");
        bb0: {
            const product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductById"])(productId);
            const handleAddToCart = {
                "ProductDetail[handleAddToCart]": ()=>{
                    if (!product) {
                        return;
                    }
                    addItem(product.id, quantity, product.price);
                    setCartFeedback(`${quantity} product${quantity > 1 ? "en" : ""} toegevoegd aan je winkelwagen.`);
                    window.setTimeout({
                        "ProductDetail[handleAddToCart > window.setTimeout()]": ()=>setCartFeedback(null)
                    }["ProductDetail[handleAddToCart > window.setTimeout()]"], 2500);
                }
            }["ProductDetail[handleAddToCart]"];
            if (!product) {
                let t7;
                if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
                    t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-h-screen items-center justify-center bg-slate-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mb-4 text-2xl font-bold text-slate-900",
                                    children: "Product niet gevonden"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 52,
                                    columnNumber: 120
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/shop",
                                    className: "text-sky-700 hover:underline",
                                    children: "Terug naar shop"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 52,
                                    columnNumber: 201
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 52,
                            columnNumber: 91
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                        lineNumber: 52,
                        columnNumber: 16
                    }, this);
                    $[12] = t7;
                } else {
                    t7 = $[12];
                }
                t6 = t7;
                break bb0;
            }
            const relatedProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRelatedProducts"])(product, 3);
            const selectedProductImage = product.images[selectedImage] ?? product.images[0];
            t5 = "min-h-screen bg-slate-50";
            t1 = "container mx-auto px-4 py-8";
            let t10;
            let t7;
            let t8;
            let t9;
            if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
                t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "text-sky-700 hover:underline",
                    children: "Home"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 69,
                    columnNumber: 14
                }, this);
                t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mx-2 text-slate-400",
                    children: "/"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 70,
                    columnNumber: 14
                }, this);
                t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/shop",
                    className: "text-sky-700 hover:underline",
                    children: "Shop"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 71,
                    columnNumber: 14
                }, this);
                t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mx-2 text-slate-400",
                    children: "/"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 72,
                    columnNumber: 15
                }, this);
                $[13] = t10;
                $[14] = t7;
                $[15] = t8;
                $[16] = t9;
            } else {
                t10 = $[13];
                t7 = $[14];
                t8 = $[15];
                t9 = $[16];
            }
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mb-8 text-sm",
                children: [
                    t7,
                    t8,
                    t9,
                    t10,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-600",
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                        lineNumber: 83,
                        columnNumber: 59
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 83,
                columnNumber: 12
            }, this);
            const t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-square bg-gradient-to-br from-slate-100 via-white to-sky-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: selectedProductImage,
                    alt: product.name,
                    fill: true,
                    sizes: "(max-width: 1024px) 100vw, 50vw",
                    className: "object-contain p-10"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 84,
                    columnNumber: 112
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 84,
                columnNumber: 19
            }, this);
            let t12;
            if ($[17] !== t11) {
                t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm",
                    children: t11
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 87,
                    columnNumber: 15
                }, this);
                $[17] = t11;
                $[18] = t12;
            } else {
                t12 = $[18];
            }
            const t13 = product.images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4",
                children: product.images.map({
                    "ProductDetail[product.images.map()]": (image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: {
                                "ProductDetail[product.images.map() > <button>.onClick]": ()=>setSelectedImage(index)
                            }["ProductDetail[product.images.map() > <button>.onClick]"],
                            className: `relative overflow-hidden rounded-2xl border bg-white ${selectedImage === index ? "border-sky-600 ring-4 ring-sky-100" : "border-slate-200"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-square",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: image,
                                    alt: `${product.name} ${index + 1}`,
                                    fill: true,
                                    sizes: "160px",
                                    className: "object-contain p-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 96,
                                    columnNumber: 266
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                lineNumber: 96,
                                columnNumber: 226
                            }, this)
                        }, image, false, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 94,
                            columnNumber: 68
                        }, this)
                }["ProductDetail[product.images.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 93,
                columnNumber: 48
            }, this);
            let t14;
            if ($[19] !== t12 || $[20] !== t13) {
                t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t12,
                        t13
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 100,
                    columnNumber: 15
                }, this);
                $[19] = t12;
                $[20] = t13;
                $[21] = t14;
            } else {
                t14 = $[21];
            }
            const t15 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$shop$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_LABELS"][product.category];
            let t16;
            if ($[22] !== t15) {
                t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "rounded-full bg-sky-100 px-3 py-1 font-medium text-sky-800",
                    children: t15
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 110,
                    columnNumber: 15
                }, this);
                $[22] = t15;
                $[23] = t16;
            } else {
                t16 = $[23];
            }
            const t17 = product.originalPrice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mr-3 text-2xl text-slate-400 line-through",
                        children: [
                            "€",
                            product.originalPrice.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                        lineNumber: 116,
                        columnNumber: 48
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-4xl font-bold text-rose-600",
                        children: [
                            "€",
                            product.price.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                        lineNumber: 116,
                        columnNumber: 150
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-3 rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-800",
                        children: [
                            "Bespaar €",
                            (product.originalPrice - product.price).toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                        lineNumber: 116,
                        columnNumber: 235
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 116,
                columnNumber: 43
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-4xl font-bold text-slate-900",
                children: [
                    "€",
                    product.price.toFixed(2)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 116,
                columnNumber: 404
            }, this);
            let t18;
            if ($[24] !== t17) {
                t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex flex-wrap items-center gap-4",
                    children: t17
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 119,
                    columnNumber: 15
                }, this);
                $[24] = t17;
                $[25] = t18;
            } else {
                t18 = $[25];
            }
            let t19;
            if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
                t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-3 text-lg font-bold",
                    children: "Productomschrijving"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 127,
                    columnNumber: 15
                }, this);
                $[26] = t19;
            } else {
                t19 = $[26];
            }
            let t20;
            if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
                t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "font-medium text-slate-700",
                    children: "Aantal:"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 134,
                    columnNumber: 15
                }, this);
                $[27] = t20;
            } else {
                t20 = $[27];
            }
            let t21;
            if ($[28] !== quantity) {
                t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ProductDetail[<button>.onClick]": ()=>setQuantity(Math.max(1, quantity - 1))
                    }["ProductDetail[<button>.onClick]"],
                    className: "px-4 py-2 transition-colors hover:bg-slate-100",
                    children: "-"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 141,
                    columnNumber: 15
                }, this);
                $[28] = quantity;
                $[29] = t21;
            } else {
                t21 = $[29];
            }
            let t22;
            if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
                t22 = ({
                    "ProductDetail[<input>.onChange]": (event)=>setQuantity(Math.max(1, parseInt(event.target.value, 10) || 1))
                })["ProductDetail[<input>.onChange]"];
                $[30] = t22;
            } else {
                t22 = $[30];
            }
            let t23;
            let t24;
            if ($[31] !== quantity) {
                t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "number",
                    value: quantity,
                    onChange: t22,
                    className: "w-16 border-x border-slate-300 py-2 text-center",
                    min: "1"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 161,
                    columnNumber: 15
                }, this);
                t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ProductDetail[<button>.onClick]": ()=>setQuantity(quantity + 1)
                    }["ProductDetail[<button>.onClick]"],
                    className: "px-4 py-2 transition-colors hover:bg-slate-100",
                    children: "+"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 162,
                    columnNumber: 15
                }, this);
                $[31] = quantity;
                $[32] = t23;
                $[33] = t24;
            } else {
                t23 = $[32];
                t24 = $[33];
            }
            let t25;
            if ($[34] !== t21 || $[35] !== t23 || $[36] !== t24) {
                t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex items-center gap-4",
                    children: [
                        t20,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center rounded-2xl border border-slate-300",
                            children: [
                                t21,
                                t23,
                                t24
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 174,
                            columnNumber: 66
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 174,
                    columnNumber: 15
                }, this);
                $[34] = t21;
                $[35] = t23;
                $[36] = t24;
                $[37] = t25;
            } else {
                t25 = $[37];
            }
            let t26;
            if ($[38] !== cartFeedback) {
                t26 = cartFeedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800",
                    children: cartFeedback
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 184,
                    columnNumber: 31
                }, this);
                $[38] = cartFeedback;
                $[39] = t26;
            } else {
                t26 = $[39];
            }
            let t27;
            if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
                t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/shop",
                    className: "mb-4 block w-full text-center text-sky-700 hover:underline",
                    children: "← Terug naar shop"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 192,
                    columnNumber: 15
                }, this);
                $[40] = t27;
            } else {
                t27 = $[40];
            }
            let t28;
            if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
                t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 space-y-2 border-t border-slate-200 pt-4 text-sm text-slate-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "✓ Gratis verzending vanaf €50"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 199,
                            columnNumber: 101
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "✓ 14 dagen retourrecht"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 199,
                            columnNumber: 137
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "✓ Veilig betalen"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 199,
                            columnNumber: 166
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "✓ Besteld voor 15:00, morgen in huis"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 199,
                            columnNumber: 189
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 199,
                    columnNumber: 15
                }, this);
                $[41] = t28;
            } else {
                t28 = $[41];
            }
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-12 lg:grid-cols-[1.05fr_0.95fr]",
                children: [
                    t14,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex flex-wrap items-center gap-3 text-sm",
                                children: [
                                    t16,
                                    product.brand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-slate-200 px-3 py-1 font-medium text-slate-700",
                                        children: product.brand
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                        lineNumber: 204,
                                        columnNumber: 167
                                    }, this),
                                    product.bestseller && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-amber-100 px-3 py-1 font-medium text-amber-800",
                                        children: "Bestseller"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                        lineNumber: 204,
                                        columnNumber: 294
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                lineNumber: 204,
                                columnNumber: 80
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mb-4 text-3xl font-bold text-slate-900 md:text-4xl",
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                lineNumber: 204,
                                columnNumber: 399
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-6 text-lg leading-7 text-slate-600",
                                children: product.shortDescription
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                lineNumber: 204,
                                columnNumber: 485
                            }, this),
                            t18,
                            product.inStock ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 inline-block rounded-2xl bg-emerald-100 px-4 py-2 text-emerald-800",
                                children: [
                                    "✓ Op voorraad (",
                                    product.stockQuantity,
                                    " stuks beschikbaar)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                lineNumber: 204,
                                columnNumber: 592
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 inline-block rounded-2xl bg-rose-100 px-4 py-2 text-rose-800",
                                children: "Tijdelijk uitverkocht"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                lineNumber: 204,
                                columnNumber: 747
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm",
                                children: [
                                    t19,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-4 leading-7 text-slate-700",
                                        children: product.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                        lineNumber: 204,
                                        columnNumber: 947
                                    }, this),
                                    product.features.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mb-2 font-semibold",
                                                children: "Kenmerken:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                lineNumber: 204,
                                                columnNumber: 1071
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: product.features.map(_ProductDetailProductFeaturesMap)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                lineNumber: 204,
                                                columnNumber: 1121
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                        lineNumber: 204,
                                        columnNumber: 1049
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                lineNumber: 204,
                                columnNumber: 858
                            }, this),
                            product.specifications && Object.keys(product.specifications).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mb-3 text-lg font-bold",
                                        children: "Specificaties"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                        lineNumber: 204,
                                        columnNumber: 1382
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                        className: "space-y-2",
                                        children: [
                                            Object.entries(product.specifications).map(_ProductDetailAnonymous),
                                            product.weight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between gap-6 border-b border-slate-100 py-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        className: "text-slate-600",
                                                        children: "Gewicht"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 1628
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "text-right font-medium text-slate-900",
                                                        children: [
                                                            product.weight,
                                                            "g"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 1671
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                lineNumber: 204,
                                                columnNumber: 1553
                                            }, this),
                                            product.sku && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between gap-6 py-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        className: "text-slate-600",
                                                        children: "SKU"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 1819
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "text-right font-medium text-slate-900",
                                                        children: product.sku
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 1858
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                lineNumber: 204,
                                                columnNumber: 1770
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                        lineNumber: 204,
                                        columnNumber: 1439
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                lineNumber: 204,
                                columnNumber: 1298
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm",
                                children: [
                                    t25,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleAddToCart,
                                        disabled: !product.inStock,
                                        className: "mb-4 w-full rounded-2xl bg-slate-900 py-4 text-lg font-bold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300",
                                        children: product.inStock ? "Toevoegen aan winkelwagen" : "Uitverkocht"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                        lineNumber: 204,
                                        columnNumber: 2033
                                    }, this),
                                    t26,
                                    t27,
                                    t28
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                lineNumber: 204,
                                columnNumber: 1949
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                        lineNumber: 204,
                        columnNumber: 75
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 204,
                columnNumber: 12
            }, this);
            t4 = relatedProducts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 flex items-end justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold uppercase tracking-[0.22em] text-sky-700",
                                        children: "Past hierbij"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                        lineNumber: 205,
                                        columnNumber: 133
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-2 text-2xl font-bold text-slate-900",
                                        children: "Gerelateerde producten"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                        lineNumber: 205,
                                        columnNumber: 227
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                lineNumber: 205,
                                columnNumber: 128
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/shop",
                                className: "text-sm font-medium text-sky-700 hover:underline",
                                children: "Bekijk de volledige shop"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                lineNumber: 205,
                                columnNumber: 315
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                        lineNumber: 205,
                        columnNumber: 69
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-5 md:grid-cols-3",
                        children: relatedProducts.map(_ProductDetailRelatedProductsMap)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                        lineNumber: 205,
                        columnNumber: 432
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 205,
                columnNumber: 42
            }, this);
        }
        $[1] = addItem;
        $[2] = cartFeedback;
        $[3] = productId;
        $[4] = quantity;
        $[5] = selectedImage;
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
    } else {
        t1 = $[6];
        t2 = $[7];
        t3 = $[8];
        t4 = $[9];
        t5 = $[10];
        t6 = $[11];
    }
    if (t6 !== Symbol.for("react.early_return_sentinel")) {
        return t6;
    }
    let t7;
    if ($[42] !== t1 || $[43] !== t2 || $[44] !== t3 || $[45] !== t4) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 231,
            columnNumber: 10
        }, this);
        $[42] = t1;
        $[43] = t2;
        $[44] = t3;
        $[45] = t4;
        $[46] = t7;
    } else {
        t7 = $[46];
    }
    let t8;
    if ($[47] !== t5 || $[48] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 242,
            columnNumber: 10
        }, this);
        $[47] = t5;
        $[48] = t7;
        $[49] = t8;
    } else {
        t8 = $[49];
    }
    return t8;
}
_s(ProductDetail, "ADmX+RLzgRDfKnPuxttLeuXg+jA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = ProductDetail;
function _ProductDetailRelatedProductsMap(relatedProduct) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/shop/product/${relatedProduct.id}`,
        className: "overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[4/3] bg-gradient-to-br from-slate-100 via-white to-sky-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: relatedProduct.images[0],
                    alt: relatedProduct.name,
                    fill: true,
                    sizes: "(max-width: 768px) 100vw, 33vw",
                    className: "object-contain p-6"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 252,
                    columnNumber: 307
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 252,
                columnNumber: 215
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-slate-900",
                        children: relatedProduct.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                        lineNumber: 252,
                        columnNumber: 482
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm leading-6 text-slate-600",
                        children: relatedProduct.shortDescription
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                        lineNumber: 252,
                        columnNumber: 561
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-lg font-bold text-slate-900",
                        children: [
                            "€",
                            relatedProduct.price.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                        lineNumber: 252,
                        columnNumber: 651
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 252,
                columnNumber: 461
            }, this)
        ]
    }, relatedProduct.id, true, {
        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
        lineNumber: 252,
        columnNumber: 10
    }, this);
}
function _ProductDetailAnonymous(t0) {
    const [key, value] = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between gap-6 border-b border-slate-100 py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                className: "text-slate-600",
                children: key
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 256,
                columnNumber: 95
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                className: "text-right font-medium text-slate-900",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 256,
                columnNumber: 136
            }, this)
        ]
    }, key, true, {
        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
        lineNumber: 256,
        columnNumber: 10
    }, this);
}
function _ProductDetailProductFeaturesMap(feature) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mr-2 text-emerald-600",
                children: "✓"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 259,
                columnNumber: 57
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-slate-700",
                children: feature
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 259,
                columnNumber: 105
            }, this)
        ]
    }, feature, true, {
        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
        lineNumber: 259,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ProductDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_562cd378._.js.map