module.exports = [
"[project]/src/data/products.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/types/shop.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/CartContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$shop$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/shop.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function ProductDetail({ productId }) {
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cartFeedback, setCartFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { addItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProductById"])(productId);
    const handleAddToCart = ()=>{
        if (!product) {
            return;
        }
        addItem(product.id, quantity, product.price);
        setCartFeedback(`${quantity} product${quantity > 1 ? 'en' : ''} toegevoegd aan je winkelwagen.`);
        window.setTimeout(()=>setCartFeedback(null), 2500);
    };
    if (!product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-slate-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-4 text-2xl font-bold text-slate-900",
                        children: "Product niet gevonden"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/shop",
                        className: "text-sky-700 hover:underline",
                        children: "Terug naar shop"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this);
    }
    const relatedProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelatedProducts"])(product, 3);
    const selectedProductImage = product.images[selectedImage] ?? product.images[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "mb-8 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-sky-700 hover:underline",
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mx-2 text-slate-400",
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/shop",
                            className: "text-sky-700 hover:underline",
                            children: "Shop"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mx-2 text-slate-400",
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-slate-600",
                            children: product.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-12 lg:grid-cols-[1.05fr_0.95fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-square bg-gradient-to-br from-slate-100 via-white to-sky-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: selectedProductImage,
                                            alt: product.name,
                                            fill: true,
                                            sizes: "(max-width: 1024px) 100vw, 50vw",
                                            className: "object-contain p-10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                product.images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4",
                                    children: product.images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setSelectedImage(index),
                                            className: `relative overflow-hidden rounded-2xl border bg-white ${selectedImage === index ? 'border-sky-600 ring-4 ring-sky-100' : 'border-slate-200'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative aspect-square",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: image,
                                                    alt: `${product.name} ${index + 1}`,
                                                    fill: true,
                                                    sizes: "160px",
                                                    className: "object-contain p-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                lineNumber: 81,
                                                columnNumber: 21
                                            }, this)
                                        }, image, false, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 71,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 flex flex-wrap items-center gap-3 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full bg-sky-100 px-3 py-1 font-medium text-sky-800",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$shop$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORY_LABELS"][product.category]
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        product.brand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full bg-slate-200 px-3 py-1 font-medium text-slate-700",
                                            children: product.brand
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this),
                                        product.bestseller && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full bg-amber-100 px-3 py-1 font-medium text-amber-800",
                                            children: "Bestseller"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mb-4 text-3xl font-bold text-slate-900 md:text-4xl",
                                    children: product.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-6 text-lg leading-7 text-slate-600",
                                    children: product.shortDescription
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 flex flex-wrap items-center gap-4",
                                    children: product.originalPrice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-3 text-2xl text-slate-400 line-through",
                                                children: [
                                                    "€",
                                                    product.originalPrice.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-4xl font-bold text-rose-600",
                                                children: [
                                                    "€",
                                                    product.price.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-3 rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-800",
                                                children: [
                                                    "Bespaar €",
                                                    (product.originalPrice - product.price).toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl font-bold text-slate-900",
                                        children: [
                                            "€",
                                            product.price.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                product.inStock ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 inline-block rounded-2xl bg-emerald-100 px-4 py-2 text-emerald-800",
                                    children: [
                                        "✓ Op voorraad (",
                                        product.stockQuantity,
                                        " stuks beschikbaar)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 inline-block rounded-2xl bg-rose-100 px-4 py-2 text-rose-800",
                                    children: "Tijdelijk uitverkocht"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mb-3 text-lg font-bold",
                                            children: "Productomschrijving"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-4 leading-7 text-slate-700",
                                            children: product.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        product.features.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mb-2 font-semibold",
                                                    children: "Kenmerken:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-2",
                                                    children: product.features.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "mr-2 text-emerald-600",
                                                                    children: "✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-700",
                                                                    children: feature
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                                    lineNumber: 157,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, feature, true, {
                                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                product.specifications && Object.keys(product.specifications).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mb-3 text-lg font-bold",
                                            children: "Specificaties"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                            className: "space-y-2",
                                            children: [
                                                Object.entries(product.specifications).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between gap-6 border-b border-slate-100 py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                className: "text-slate-600",
                                                                children: key
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                className: "text-right font-medium text-slate-900",
                                                                children: value
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, key, true, {
                                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 21
                                                    }, this)),
                                                product.weight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between gap-6 border-b border-slate-100 py-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                            className: "text-slate-600",
                                                            children: "Gewicht"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                            className: "text-right font-medium text-slate-900",
                                                            children: [
                                                                product.weight,
                                                                "g"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 21
                                                }, this),
                                                product.sku && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between gap-6 py-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                            className: "text-slate-600",
                                                            children: "SKU"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                            className: "text-right font-medium text-slate-900",
                                                            children: product.sku
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-medium text-slate-700",
                                                    children: "Aantal:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center rounded-2xl border border-slate-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setQuantity(Math.max(1, quantity - 1)),
                                                            className: "px-4 py-2 transition-colors hover:bg-slate-100",
                                                            children: "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: quantity,
                                                            onChange: (event)=>setQuantity(Math.max(1, parseInt(event.target.value, 10) || 1)),
                                                            className: "w-16 border-x border-slate-300 py-2 text-center",
                                                            min: "1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setQuantity(quantity + 1),
                                                            className: "px-4 py-2 transition-colors hover:bg-slate-100",
                                                            children: "+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleAddToCart,
                                            disabled: !product.inStock,
                                            className: "mb-4 w-full rounded-2xl bg-slate-900 py-4 text-lg font-bold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300",
                                            children: product.inStock ? 'Toevoegen aan winkelwagen' : 'Uitverkocht'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this),
                                        cartFeedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800",
                                            children: cartFeedback
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/shop",
                                            className: "mb-4 block w-full text-center text-sky-700 hover:underline",
                                            children: "← Terug naar shop"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 space-y-2 border-t border-slate-200 pt-4 text-sm text-slate-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "✓ Gratis verzending vanaf €50"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "✓ 14 dagen retourrecht"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "✓ Veilig betalen"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "✓ Besteld voor 15:00, morgen in huis"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                relatedProducts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 flex items-end justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold uppercase tracking-[0.22em] text-sky-700",
                                            children: "Past hierbij"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 249,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mt-2 text-2xl font-bold text-slate-900",
                                            children: "Gerelateerde producten"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 248,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/shop",
                                    className: "text-sm font-medium text-sky-700 hover:underline",
                                    children: "Bekijk de volledige shop"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 247,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-5 md:grid-cols-3",
                            children: relatedProducts.map((relatedProduct)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/shop/product/${relatedProduct.id}`,
                                    className: "overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-[4/3] bg-gradient-to-br from-slate-100 via-white to-sky-50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: relatedProduct.images[0],
                                                alt: relatedProduct.name,
                                                fill: true,
                                                sizes: "(max-width: 768px) 100vw, 33vw",
                                                className: "object-contain p-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                lineNumber: 267,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 266,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-slate-900",
                                                    children: relatedProduct.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-sm leading-6 text-slate-600",
                                                    children: relatedProduct.shortDescription
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-4 text-lg font-bold text-slate-900",
                                                    children: [
                                                        "€",
                                                        relatedProduct.price.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 275,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, relatedProduct.id, true, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 261,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 259,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 246,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_297227be._.js.map