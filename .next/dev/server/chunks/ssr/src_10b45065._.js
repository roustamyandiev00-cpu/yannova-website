module.exports = [
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
"[project]/src/app/(public)/shop/ShopContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShopContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$shop$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/shop.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
'use client';
;
;
;
;
;
;
;
// Get product emoji based on category
const getProductEmoji = (category)=>{
    switch(category){
        case 'onderhoud-reiniging':
            return '🧴';
        case 'tochtwering-isolatie':
            return '🔧';
        case 'raam-accessoires':
            return '🪟';
        case 'deur-accessoires':
            return '🚪';
        case 'bundels-sets':
            return '📦';
        default:
            return '📦';
    }
};
function ShopContent() {
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const filteredProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (selectedCategory === 'all') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"];
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].filter((p)=>p.category === selectedCategory);
    }, [
        selectedCategory
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto px-4 py-20 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-6 h-6 text-yellow-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-200 font-medium",
                                        children: "Professionele kwaliteit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl md:text-6xl font-bold mb-6 leading-tight",
                                children: [
                                    "Onderhoud &",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 41,
                                        columnNumber: 24
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-200",
                                        children: "Accessoires"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-blue-100 max-w-2xl leading-relaxed",
                                children: "Ontdek ons assortiment professionele producten voor het onderhoud van uw ramen en deuren. Alles voor een perfect resultaat."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedCategory('all'),
                                    className: `px-6 py-2 rounded-full font-medium transition-colors ${selectedCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`,
                                    children: [
                                        "Alle Producten (",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$shop$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORY_LABELS"]).map(([key, label])=>{
                                    const count = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].filter((p)=>p.category === key).length;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedCategory(key),
                                        className: `px-6 py-2 rounded-full font-medium transition-colors ${selectedCategory === key ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`,
                                        children: [
                                            label,
                                            " (",
                                            count,
                                            ")"
                                        ]
                                    }, key, true, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6",
                        children: filteredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/shop/product/${product.id}`,
                                className: "bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-48 bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: product.images[0],
                                                alt: product.name,
                                                fill: true,
                                                className: "object-contain p-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this),
                                            product.bestseller && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded font-bold",
                                                children: "BESTSELLER"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this),
                                            product.originalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold",
                                                children: "AANBIEDING"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute bottom-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded",
                                                children: "Op voorraad"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]",
                                                children: product.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 mb-3 line-clamp-2",
                                                children: product.shortDescription
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: product.originalPrice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-gray-400 line-through",
                                                                children: [
                                                                    "€",
                                                                    product.originalPrice.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                                                lineNumber: 123,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-2xl font-bold text-red-600 ml-2",
                                                                children: [
                                                                    "€",
                                                                    product.price.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl font-bold text-blue-600",
                                                        children: [
                                                            "€",
                                                            product.price.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this),
                                            product.brand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 text-xs text-gray-500",
                                                children: product.brand
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, product.id, true, {
                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 grid md:grid-cols-3 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 rounded-lg shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-blue-600 text-3xl mb-3",
                                        children: "🚚"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-lg mb-2",
                                        children: "Snelle Levering"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "Besteld voor 15:00, morgen in huis"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 rounded-lg shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-blue-600 text-3xl mb-3",
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-lg mb-2",
                                        children: "Professionele Kwaliteit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "Producten gebruikt door professionals"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 rounded-lg shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-blue-600 text-3xl mb-3",
                                        children: "💬"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-lg mb-2",
                                        children: "Expert Advies"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "Hulp nodig? Onze experts helpen je graag"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_10b45065._.js.map