module.exports = [
"[project]/src/data/products.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PRODUCTS",
    ()=>PRODUCTS
]);
const PRODUCTS = [
    // A. Onderhoud & Reiniging (15 producten)
    {
        id: 'fenosol-pvc-reiniger-wit',
        name: 'FENOSOL PVC Reiniger Wit',
        slug: 'fenosol-pvc-reiniger-wit',
        category: 'onderhoud-reiniging',
        shortDescription: 'Professionele reiniger speciaal voor witte PVC ramen en deuren',
        description: 'FENOSOL PVC Reiniger Wit is speciaal ontwikkeld voor het reinigen van witte PVC ramen, deuren, rolluiken en gevels. Verwijdert effectief vuil, vet en aanslag zonder het materiaal aan te tasten. Geschikt voor dagelijks onderhoud.',
        price: 14.95,
        inStock: true,
        stockQuantity: 50,
        images: [
            '/images/products/placeholder-cleaner.jpg'
        ],
        features: [
            'Speciaal voor witte PVC profielen',
            'Verwijdert vuil en vet effectief',
            'Tast materiaal niet aan',
            'Professionele kwaliteit',
            'Eenvoudig in gebruik'
        ],
        specifications: {
            'Inhoud': '500ml',
            'Type': 'Spray',
            'Geschikt voor': 'Witte PVC ramen, deuren, rolluiken'
        },
        tags: [
            'fenosol',
            'pvc',
            'reiniger',
            'onderhoud',
            'bestseller'
        ],
        brand: 'FENOSOL',
        sku: 'FEN-PVC-WIT-500',
        weight: 550,
        createdAt: new Date(),
        updatedAt: new Date(),
        featured: true,
        bestseller: true
    },
    {
        id: 'fenosol-pvc-reiniger-gekleurd',
        name: 'FENOSOL PVC Reiniger Gekleurd',
        slug: 'fenosol-pvc-reiniger-gekleurd',
        category: 'onderhoud-reiniging',
        shortDescription: 'Professionele reiniger voor gekleurde PVC profielen',
        description: 'FENOSOL PVC Reiniger Gekleurd is speciaal geformuleerd voor gekleurde PVC ramen en deuren. Behoudt de kleur en glans terwijl het reinigt.',
        price: 15.95,
        inStock: true,
        stockQuantity: 40,
        images: [
            '/images/products/placeholder-cleaner.jpg'
        ],
        features: [
            'Speciaal voor gekleurde PVC',
            'Behoudt kleur en glans',
            'Geen verkleuring',
            'Professionele formule'
        ],
        specifications: {
            'Inhoud': '500ml',
            'Type': 'Spray',
            'Geschikt voor': 'Gekleurde PVC profielen'
        },
        tags: [
            'fenosol',
            'pvc',
            'reiniger',
            'gekleurd'
        ],
        brand: 'FENOSOL',
        sku: 'FEN-PVC-COL-500',
        weight: 550,
        createdAt: new Date(),
        updatedAt: new Date(),
        featured: true
    },
    {
        id: 'fenosol-aluminium-cleaner',
        name: 'FENOSOL Aluminium Cleaner',
        slug: 'fenosol-aluminium-cleaner',
        category: 'onderhoud-reiniging',
        shortDescription: 'Professionele reiniger voor aluminium ramen en deuren',
        description: 'FENOSOL Aluminium Cleaner reinigt en beschermt aluminium profielen. Verwijdert kalk, mortelresten en andere hardnekkige vervuiling zonder krassen.',
        price: 16.95,
        inStock: true,
        stockQuantity: 45,
        images: [
            '/images/products/placeholder-cleaner.jpg'
        ],
        features: [
            'Speciaal voor aluminium',
            'Verwijdert kalk en mortelresten',
            'Beschermende werking',
            'Veilig voor gelakte oppervlakken'
        ],
        specifications: {
            'Inhoud': '500ml',
            'Type': 'Spray',
            'Geschikt voor': 'Aluminium ramen, deuren, gevels'
        },
        tags: [
            'fenosol',
            'aluminium',
            'reiniger',
            'bestseller'
        ],
        brand: 'FENOSOL',
        sku: 'FEN-ALU-500',
        weight: 550,
        createdAt: new Date(),
        updatedAt: new Date(),
        featured: true,
        bestseller: true
    },
    {
        id: 'fenosol-care-kit-pvc',
        name: 'FENOSOL Care Kit PVC',
        slug: 'fenosol-care-kit-pvc',
        category: 'onderhoud-reiniging',
        shortDescription: 'Complete onderhoudsset voor PVC ramen en deuren',
        description: 'Complete FENOSOL Care Kit voor PVC met reiniger, beschermer en doek. Alles wat u nodig heeft voor perfect onderhoud van uw PVC ramen en deuren.',
        price: 29.95,
        inStock: true,
        stockQuantity: 30,
        images: [
            '/images/products/placeholder-kit.jpg'
        ],
        features: [
            'Complete set',
            'Reiniger + beschermer',
            'Microvezel doek inbegrepen',
            'Professioneel resultaat'
        ],
        specifications: {
            'Inhoud': 'Reiniger 500ml + Beschermer 250ml + Doek',
            'Geschikt voor': 'PVC ramen en deuren'
        },
        tags: [
            'fenosol',
            'pvc',
            'kit',
            'onderhoud',
            'bestseller'
        ],
        brand: 'FENOSOL',
        sku: 'FEN-KIT-PVC',
        weight: 900,
        createdAt: new Date(),
        updatedAt: new Date(),
        featured: true,
        bestseller: true
    },
    {
        id: 'fenosol-care-kit-aluminium',
        name: 'FENOSOL Care Kit Aluminium',
        slug: 'fenosol-care-kit-aluminium',
        category: 'onderhoud-reiniging',
        shortDescription: 'Complete onderhoudsset voor aluminium ramen en deuren',
        description: 'Complete FENOSOL Care Kit voor aluminium met reiniger, beschermer en doek. Professioneel onderhoud voor uw aluminium kozijnen.',
        price: 32.95,
        inStock: true,
        stockQuantity: 25,
        images: [
            '/images/products/placeholder-kit.jpg'
        ],
        features: [
            'Complete set voor aluminium',
            'Reiniger + beschermer',
            'Microvezel doek',
            'Langdurige bescherming'
        ],
        specifications: {
            'Inhoud': 'Reiniger 500ml + Beschermer 250ml + Doek',
            'Geschikt voor': 'Aluminium ramen en deuren'
        },
        tags: [
            'fenosol',
            'aluminium',
            'kit',
            'onderhoud',
            'bestseller'
        ],
        brand: 'FENOSOL',
        sku: 'FEN-KIT-ALU',
        weight: 900,
        createdAt: new Date(),
        updatedAt: new Date(),
        featured: true,
        bestseller: true
    },
    {
        id: 'glasreiniger-premium',
        name: 'Glasreiniger Premium',
        slug: 'glasreiniger-premium',
        category: 'onderhoud-reiniging',
        shortDescription: 'Streepvrije glasreiniger voor ramen',
        description: 'Premium glasreiniger voor streepvrij schone ramen. Verwijdert vet, vingerafdrukken en vuil zonder strepen achter te laten.',
        price: 8.95,
        inStock: true,
        stockQuantity: 60,
        images: [
            '/images/products/placeholder-cleaner.jpg'
        ],
        features: [
            'Streepvrij resultaat',
            'Verwijdert vet en vuil',
            'Sneldrogend',
            'Frisse geur'
        ],
        specifications: {
            'Inhoud': '750ml',
            'Type': 'Spray'
        },
        tags: [
            'glas',
            'reiniger',
            'streepvrij'
        ],
        brand: 'Premium',
        sku: 'GLAS-PREM-750',
        weight: 800,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 'ontvetter-profielen',
        name: 'Ontvetter voor Profielen',
        slug: 'ontvetter-profielen',
        category: 'onderhoud-reiniging',
        shortDescription: 'Krachtige ontvetter voor raam- en deurprofielen',
        description: 'Professionele ontvetter voor het verwijderen van hardnekkige vet- en olievlekken op raam- en deurprofielen.',
        price: 11.95,
        inStock: true,
        stockQuantity: 35,
        images: [
            '/images/products/placeholder-cleaner.jpg'
        ],
        features: [
            'Verwijdert hardnekkig vet',
            'Geschikt voor alle materialen',
            'Biologisch afbreekbaar',
            'Krachtige formule'
        ],
        specifications: {
            'Inhoud': '500ml',
            'Type': 'Spray'
        },
        tags: [
            'ontvetter',
            'reiniger',
            'vet'
        ],
        brand: 'Professional',
        sku: 'ONTV-PROF-500',
        weight: 550,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 'rubberdichting-conditioner',
        name: 'Rubberdichting Conditioner',
        slug: 'rubberdichting-conditioner',
        category: 'onderhoud-reiniging',
        shortDescription: 'Onderhoudsproduct voor rubber dichtingen',
        description: 'Conditioner voor rubber dichtingen van ramen en deuren. Voorkomt uitdrogen, scheuren en verlengt de levensduur.',
        price: 12.95,
        inStock: true,
        stockQuantity: 40,
        images: [
            '/images/products/placeholder-tube.jpg'
        ],
        features: [
            'Voorkomt uitdrogen',
            'Verlengt levensduur',
            'Behoudt soepelheid',
            'Eenvoudig aan te brengen'
        ],
        specifications: {
            'Inhoud': '200ml',
            'Type': 'Tube'
        },
        tags: [
            'rubber',
            'dichting',
            'onderhoud',
            'bestseller'
        ],
        brand: 'Professional',
        sku: 'RUBB-COND-200',
        weight: 220,
        createdAt: new Date(),
        updatedAt: new Date(),
        bestseller: true
    },
    {
        id: 'siliconenspray-rubbers',
        name: 'Siliconenspray voor Rubbers',
        slug: 'siliconenspray-rubbers',
        category: 'onderhoud-reiniging',
        shortDescription: 'Siliconenspray voor onderhoud rubber dichtingen',
        description: 'Siliconenspray speciaal voor rubber dichtingen. Houdt rubbers soepel en voorkomt vastkleven.',
        price: 9.95,
        inStock: true,
        stockQuantity: 55,
        images: [
            '/images/products/placeholder-spray.jpg'
        ],
        features: [
            'Houdt rubbers soepel',
            'Voorkomt vastkleven',
            'Waterafstotend',
            'Langdurige werking'
        ],
        specifications: {
            'Inhoud': '400ml',
            'Type': 'Spraybus'
        },
        tags: [
            'siliconen',
            'spray',
            'rubber',
            'bestseller'
        ],
        brand: 'Professional',
        sku: 'SILI-SPRAY-400',
        weight: 450,
        createdAt: new Date(),
        updatedAt: new Date(),
        bestseller: true
    },
    {
        id: 'beslagspray-multispray',
        name: 'Beslagspray / Multispray',
        slug: 'beslagspray-multispray',
        category: 'onderhoud-reiniging',
        shortDescription: 'Multifunctionele spray voor raam- en deurbeslag',
        description: 'Multifunctionele spray voor onderhoud van raam- en deurbeslag. Smeert, reinigt en beschermt tegen roest.',
        price: 10.95,
        inStock: true,
        stockQuantity: 50,
        images: [
            '/images/products/placeholder-spray.jpg'
        ],
        features: [
            'Smeert en reinigt',
            'Beschermt tegen roest',
            'Kruipend vermogen',
            'Multifunctioneel'
        ],
        specifications: {
            'Inhoud': '400ml',
            'Type': 'Spraybus'
        },
        tags: [
            'beslag',
            'spray',
            'onderhoud',
            'bestseller'
        ],
        brand: 'Professional',
        sku: 'BESL-MULTI-400',
        weight: 450,
        createdAt: new Date(),
        updatedAt: new Date(),
        bestseller: true
    },
    {
        id: 'reinigingsdoeken-microvezel',
        name: 'Reinigingsdoeken Microvezel',
        slug: 'reinigingsdoeken-microvezel',
        category: 'onderhoud-reiniging',
        shortDescription: 'Set van 3 microvezel reinigingsdoeken',
        description: 'Set van 3 hoogwaardige microvezel reinigingsdoeken. Perfect voor streepvrij reinigen van ramen en profielen.',
        price: 7.95,
        inStock: true,
        stockQuantity: 70,
        images: [
            '/images/products/placeholder-cloth.jpg'
        ],
        features: [
            'Set van 3 doeken',
            'Streepvrij resultaat',
            'Wasbaar tot 60°C',
            'Duurzaam'
        ],
        specifications: {
            'Afmeting': '40x40cm',
            'Aantal': '3 stuks',
            'Materiaal': 'Microvezel'
        },
        tags: [
            'microvezel',
            'doeken',
            'reinigen'
        ],
        brand: 'Professional',
        sku: 'MICRO-DOEK-3',
        weight: 150,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 'onderhoudsmelk-deuren',
        name: 'Onderhoudsmelk voor Deuren',
        slug: 'onderhoudsmelk-deuren',
        category: 'onderhoud-reiniging',
        shortDescription: 'Beschermende onderhoudsmelk voor deuren',
        description: 'Onderhoudsmelk voor deuren die reinigt, beschermt en een mooie glans geeft. Geschikt voor PVC en gelakte oppervlakken.',
        price: 13.95,
        inStock: true,
        stockQuantity: 30,
        images: [
            '/images/products/placeholder-bottle.jpg'
        ],
        features: [
            'Reinigt en beschermt',
            'Geeft mooie glans',
            'UV-bescherming',
            'Eenvoudig aan te brengen'
        ],
        specifications: {
            'Inhoud': '500ml',
            'Type': 'Fles'
        },
        tags: [
            'deuren',
            'onderhoud',
            'melk'
        ],
        brand: 'Professional',
        sku: 'ОНДЕРH-MELK-500',
        weight: 550,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 'polish-gelakte-oppervlakken',
        name: 'Polish voor Gelakte Oppervlakken',
        slug: 'polish-gelakte-oppervlakken',
        category: 'onderhoud-reiniging',
        shortDescription: 'Polish voor gelakte ramen en deuren',
        description: 'Speciale polish voor gelakte oppervlakken. Herstelt de glans en beschermt tegen weersinvloeden.',
        price: 14.95,
        inStock: true,
        stockQuantity: 25,
        images: [
            '/images/products/placeholder-bottle.jpg'
        ],
        features: [
            'Herstelt glans',
            'Beschermt lak',
            'UV-filter',
            'Langdurig effect'
        ],
        specifications: {
            'Inhoud': '250ml',
            'Type': 'Fles'
        },
        tags: [
            'polish',
            'gelakt',
            'glans'
        ],
        brand: 'Professional',
        sku: 'POL-GELAKT-250',
        weight: 280,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 'kalk-mortel-verwijderaar',
        name: 'Kalk- en Mortelresten Verwijderaar',
        slug: 'kalk-mortel-verwijderaar',
        category: 'onderhoud-reiniging',
        shortDescription: 'Verwijdert kalk en mortelresten van aluminium',
        description: 'Krachtige verwijderaar voor kalk- en mortelresten op aluminium ramen en deuren. Veilig voor het materiaal.',
        price: 15.95,
        inStock: true,
        stockQuantity: 20,
        images: [
            '/images/products/placeholder-bottle.jpg'
        ],
        features: [
            'Verwijdert kalk en mortel',
            'Veilig voor aluminium',
            'Krachtige formule',
            'Professioneel'
        ],
        specifications: {
            'Inhoud': '500ml',
            'Type': 'Fles'
        },
        tags: [
            'kalk',
            'mortel',
            'verwijderaar',
            'aluminium'
        ],
        brand: 'Professional',
        sku: 'KALK-MORT-500',
        weight: 550,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 'complete-onderhoudsbox',
        name: 'Complete Onderhoudsbox Ramen & Deuren',
        slug: 'complete-onderhoudsbox',
        category: 'onderhoud-reiniging',
        shortDescription: 'Alles-in-één onderhoudsbox voor ramen en deuren',
        description: 'Complete onderhoudsbox met alle producten die u nodig heeft voor perfect onderhoud van uw ramen en deuren. Inclusief reiniger, beschermer, doeken en meer.',
        price: 49.95,
        originalPrice: 65.00,
        inStock: true,
        stockQuantity: 15,
        images: [
            '/images/products/placeholder-box.jpg'
        ],
        features: [
            'Complete set',
            'Voor PVC en aluminium',
            'Alle benodigdheden',
            'Bespaart €15',
            'Professioneel resultaat'
        ],
        specifications: {
            'Inhoud': 'Reiniger, beschermer, glasreiniger, doeken, spray',
            'Geschikt voor': 'Alle ramen en deuren'
        },
        tags: [
            'box',
            'complete',
            'onderhoud',
            'set',
            'bestseller'
        ],
        brand: 'FENOSOL',
        sku: 'COMPL-BOX-ALL',
        weight: 2500,
        createdAt: new Date(),
        updatedAt: new Date(),
        featured: true,
        bestseller: true
    }
];
}),
"[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/CartContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ProductDetail({ productId }) {
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const { addItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const foundProduct = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].find((p)=>p.id === productId);
        setProduct(foundProduct || null);
    }, [
        productId
    ]);
    const handleAddToCart = ()=>{
        if (product) {
            addItem(product.id, quantity, product.price);
            alert('Product toegevoegd aan winkelwagen!');
        }
    };
    if (!product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-900 mb-4",
                        children: "Product niet gevonden"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/shop",
                        className: "text-blue-600 hover:underline",
                        children: "Terug naar shop"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this);
    }
    const productIcon = product.category === 'onderhoud-reiniging' ? '🧴' : product.category === 'tochtwering-isolatie' ? '🔧' : product.category === 'raam-accessoires' ? '🪟' : product.category === 'deur-accessoires' ? '🚪' : '📦';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "mb-8 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-blue-600 hover:underline",
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mx-2 text-gray-400",
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/shop",
                            className: "text-blue-600 hover:underline",
                            children: "Shop"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mx-2 text-gray-400",
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-600",
                            children: product.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg shadow-lg p-8 mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-96 flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-9xl",
                                            children: productIcon
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                product.bestseller && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-orange-100 border border-orange-300 rounded-lg p-4 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-orange-800 font-bold",
                                        children: "⭐ BESTSELLER"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                product.brand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-500 mb-2",
                                    children: product.brand
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold text-gray-900 mb-4",
                                    children: product.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 mb-6",
                                    children: product.originalPrice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl text-gray-400 line-through mr-3",
                                                children: [
                                                    "€",
                                                    product.originalPrice.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                lineNumber: 85,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-4xl font-bold text-red-600",
                                                children: [
                                                    "€",
                                                    product.price.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                lineNumber: 88,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-3 bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium",
                                                children: [
                                                    "Bespaar €",
                                                    (product.originalPrice - product.price).toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                lineNumber: 91,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl font-bold text-blue-600",
                                        children: [
                                            "€",
                                            product.price.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                        lineNumber: 96,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                product.inStock ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-green-100 text-green-800 px-4 py-2 rounded-lg inline-block mb-6",
                                    children: [
                                        "✓ Op voorraad (",
                                        product.stockQuantity,
                                        " stuks beschikbaar)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-red-100 text-red-800 px-4 py-2 rounded-lg inline-block mb-6",
                                    children: "Tijdelijk uitverkocht"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg shadow-md p-6 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-bold text-lg mb-3",
                                            children: "Productomschrijving"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 leading-relaxed mb-4",
                                            children: product.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        product.features && product.features.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold mb-2",
                                                    children: "Kenmerken:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-2",
                                                    children: product.features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-green-600 mr-2",
                                                                    children: "✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                                    lineNumber: 122,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-700",
                                                                    children: feature
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                                    lineNumber: 123,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                product.specifications && Object.keys(product.specifications).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg shadow-md p-6 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-bold text-lg mb-3",
                                            children: "Specificaties"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                            className: "space-y-2",
                                            children: [
                                                Object.entries(product.specifications).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between py-2 border-b border-gray-100",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                className: "text-gray-600",
                                                                children: key
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                className: "font-medium text-gray-900",
                                                                children: value
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, key, true, {
                                                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 21
                                                    }, this)),
                                                product.weight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between py-2 border-b border-gray-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                            className: "text-gray-600",
                                                            children: "Gewicht"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                            className: "font-medium text-gray-900",
                                                            children: [
                                                                product.weight,
                                                                "g"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 21
                                                }, this),
                                                product.sku && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between py-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                            className: "text-gray-600",
                                                            children: "SKU"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                            className: "font-medium text-gray-900",
                                                            children: product.sku
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg shadow-md p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-medium text-gray-700",
                                                    children: "Aantal:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center border border-gray-300 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setQuantity(Math.max(1, quantity - 1)),
                                                            className: "px-4 py-2 hover:bg-gray-100 transition-colors",
                                                            children: "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: quantity,
                                                            onChange: (e)=>setQuantity(Math.max(1, parseInt(e.target.value) || 1)),
                                                            className: "w-16 text-center border-x border-gray-300 py-2",
                                                            min: "1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setQuantity(quantity + 1),
                                                            className: "px-4 py-2 hover:bg-gray-100 transition-colors",
                                                            children: "+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleAddToCart,
                                            disabled: !product.inStock,
                                            className: "w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed mb-4",
                                            children: product.inStock ? 'Toevoegen aan winkelwagen' : 'Uitverkocht'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 185,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/shop",
                                            className: "block w-full text-center text-blue-600 hover:underline mb-4",
                                            children: "← Terug naar shop"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 space-y-2 text-sm text-gray-600 border-t pt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "✓ Gratis verzending vanaf €50"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "✓ 14 dagen retourrecht"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "✓ Veilig betalen"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "✓ Besteld voor 15:00, morgen in huis"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                            lineNumber: 200,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_aa3b34bf._.js.map