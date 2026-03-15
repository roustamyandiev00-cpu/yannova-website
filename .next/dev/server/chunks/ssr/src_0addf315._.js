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
"[project]/src/app/(public)/shop/cart/CartContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/CartContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function CartContent() {
    const { cart, removeItem, updateQuantity, clearCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Map cart items to products
        const productMap = {};
        cart.items.forEach((item)=>{
            const product = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].find((p)=>p.id === item.productId);
            if (product) {
                productMap[item.productId] = product;
            }
        });
        setProducts(productMap);
    }, [
        cart.items
    ]);
    const shippingCost = cart.total >= 50 ? 0 : 6.95;
    const totalWithShipping = cart.total + shippingCost;
    if (cart.items.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl mb-4",
                            children: "🛒"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-gray-900 mb-4",
                            children: "Uw winkelwagen is leeg"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-8",
                            children: "Voeg producten toe om te beginnen met winkelen"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/shop",
                            className: "inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors",
                            children: "Naar de shop"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    const productIcon = (category)=>category === 'onderhoud-reiniging' ? '🧴' : category === 'tochtwering-isolatie' ? '🔧' : category === 'raam-accessoires' ? '🪟' : category === 'deur-accessoires' ? '🚪' : '📦';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-gray-900 mb-8",
                    children: "Winkelwagen"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-3 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2 space-y-4",
                            children: [
                                cart.items.map((item)=>{
                                    const product = products[item.productId];
                                    if (!product) return null;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg shadow-md p-6 flex gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-24 h-24 flex-shrink-0 bg-gradient-to-br from-blue-50 to-gray-100 rounded-lg flex items-center justify-center text-4xl",
                                                children: productIcon(product.category)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-lg text-gray-900 mb-1",
                                                        children: product.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 mb-3",
                                                        children: [
                                                            product.brand,
                                                            " • SKU: ",
                                                            product.sku
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center border border-gray-300 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>updateQuantity(item.productId, item.quantity - 1),
                                                                        className: "px-3 py-1 hover:bg-gray-100 transition-colors",
                                                                        children: "-"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                                        lineNumber: 90,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-4 py-1 border-x border-gray-300",
                                                                        children: item.quantity
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                                        lineNumber: 96,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>updateQuantity(item.productId, item.quantity + 1),
                                                                        className: "px-3 py-1 hover:bg-gray-100 transition-colors",
                                                                        children: "+"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                                        lineNumber: 99,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                                lineNumber: 89,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>removeItem(item.productId),
                                                                className: "text-red-600 hover:text-red-700 text-sm font-medium",
                                                                children: "Verwijderen"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                                lineNumber: 106,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-blue-600",
                                                        children: [
                                                            "€",
                                                            (item.price * item.quantity).toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500",
                                                        children: [
                                                            "€",
                                                            item.price.toFixed(2),
                                                            " per stuk"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.productId, true, {
                                        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this);
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: clearCart,
                                    className: "text-red-600 hover:text-red-700 text-sm font-medium",
                                    children: "Winkelwagen legen"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg shadow-md p-6 sticky top-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-gray-900 mb-4",
                                        children: "Overzicht"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-gray-600",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Subtotaal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "€",
                                                            cart.total.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                lineNumber: 142,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-gray-600",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Verzendkosten"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: shippingCost === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-green-600 font-medium",
                                                            children: "Gratis"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 23
                                                        }, this) : `€${shippingCost.toFixed(2)}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this),
                                            cart.total < 50 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-blue-50 border border-blue-200 rounded-lg p-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-blue-800",
                                                    children: [
                                                        "Nog €",
                                                        (50 - cart.total).toFixed(2),
                                                        " tot gratis verzending! 🚚"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                lineNumber: 157,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-t pt-3 flex justify-between text-lg font-bold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Totaal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-600",
                                                        children: [
                                                            "€",
                                                            totalWithShipping.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: "block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors mb-3",
                                        children: "Bestelling Plaatsen"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-center text-gray-500 mb-3",
                                        children: "Neem contact op om uw bestelling af te ronden"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/shop",
                                        className: "block w-full text-center text-blue-600 hover:underline",
                                        children: "Verder winkelen"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 pt-6 border-t space-y-2 text-sm text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "✓ Veilig betalen"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "✓ 14 dagen retourrecht"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "✓ Gratis verzending vanaf €50"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "✓ Besteld voor 15:00, morgen in huis"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                                lineNumber: 193,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(public)/shop/cart/CartContent.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_0addf315._.js.map