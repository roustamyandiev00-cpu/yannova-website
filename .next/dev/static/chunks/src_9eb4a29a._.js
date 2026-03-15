(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ProductDetail(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(78);
    if ($[0] !== "7eaf29a01bbee190f5a6ab019624f7bfa0afe0e7f8ba12bd67922f15df88af07") {
        for(let $i = 0; $i < 78; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7eaf29a01bbee190f5a6ab019624f7bfa0afe0e7f8ba12bd67922f15df88af07";
    }
    const { productId } = t0;
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const { addItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    let t1;
    let t2;
    if ($[1] !== productId) {
        t1 = ({
            "ProductDetail[useEffect()]": ()=>{
                const foundProduct = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"].find({
                    "ProductDetail[useEffect() > PRODUCTS.find()]": (p)=>p.id === productId
                }["ProductDetail[useEffect() > PRODUCTS.find()]"]);
                setProduct(foundProduct || null);
            }
        })["ProductDetail[useEffect()]"];
        t2 = [
            productId
        ];
        $[1] = productId;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== addItem || $[5] !== product || $[6] !== quantity) {
        t3 = ({
            "ProductDetail[handleAddToCart]": ()=>{
                if (product) {
                    addItem(product.id, quantity, product.price);
                    alert("Product toegevoegd aan winkelwagen!");
                }
            }
        })["ProductDetail[handleAddToCart]"];
        $[4] = addItem;
        $[5] = product;
        $[6] = quantity;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const handleAddToCart = t3;
    if (!product) {
        let t4;
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-50 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "Product niet gevonden"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 66,
                            columnNumber: 115
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/shop",
                            className: "text-blue-600 hover:underline",
                            children: "Terug naar shop"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 66,
                            columnNumber: 195
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 66,
                    columnNumber: 86
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 66,
                columnNumber: 12
            }, this);
            $[8] = t4;
        } else {
            t4 = $[8];
        }
        return t4;
    }
    const productIcon = product.category === "onderhoud-reiniging" ? "\uD83E\uDDF4" : product.category === "tochtwering-isolatie" ? "\uD83D\uDD27" : product.category === "raam-accessoires" ? "\uD83E\uDE9F" : product.category === "deur-accessoires" ? "\uD83D\uDEAA" : "\uD83D\uDCE6";
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "text-blue-600 hover:underline",
            children: "Home"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "mx-2 text-gray-400",
            children: "/"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/shop",
            className: "text-blue-600 hover:underline",
            children: "Shop"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "mx-2 text-gray-400",
            children: "/"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
    } else {
        t4 = $[9];
        t5 = $[10];
        t6 = $[11];
        t7 = $[12];
    }
    let t8;
    if ($[13] !== product.name) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "mb-8 text-sm",
            children: [
                t4,
                t5,
                t6,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-600",
                    children: product.name
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 95,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[13] = product.name;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== productIcon) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-lg p-8 mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-96 flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 rounded-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-9xl",
                    children: productIcon
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 103,
                    columnNumber: 182
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 103,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[15] = productIcon;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== product.bestseller) {
        t10 = product.bestseller && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-orange-100 border border-orange-300 rounded-lg p-4 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-orange-800 font-bold",
                children: "⭐ BESTSELLER"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 111,
                columnNumber: 116
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 111,
            columnNumber: 33
        }, this);
        $[17] = product.bestseller;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t10 || $[20] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t9;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== product.brand) {
        t12 = product.brand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-gray-500 mb-2",
            children: product.brand
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 128,
            columnNumber: 28
        }, this);
        $[22] = product.brand;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== product.name) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold text-gray-900 mb-4",
            children: product.name
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[24] = product.name;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== product.originalPrice || $[27] !== product.price) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 mb-6",
            children: product.originalPrice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl text-gray-400 line-through mr-3",
                        children: [
                            "€",
                            product.originalPrice.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                        lineNumber: 144,
                        columnNumber: 87
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-4xl font-bold text-red-600",
                        children: [
                            "€",
                            product.price.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                        lineNumber: 144,
                        columnNumber: 188
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-3 bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium",
                        children: [
                            "Bespaar €",
                            (product.originalPrice - product.price).toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                        lineNumber: 144,
                        columnNumber: 272
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 144,
                columnNumber: 82
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-4xl font-bold text-blue-600",
                children: [
                    "€",
                    product.price.toFixed(2)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 144,
                columnNumber: 439
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[26] = product.originalPrice;
        $[27] = product.price;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== product.inStock || $[30] !== product.stockQuantity) {
        t15 = product.inStock ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-green-100 text-green-800 px-4 py-2 rounded-lg inline-block mb-6",
            children: [
                "✓ Op voorraad (",
                product.stockQuantity,
                " stuks beschikbaar)"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 153,
            columnNumber: 29
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-red-100 text-red-800 px-4 py-2 rounded-lg inline-block mb-6",
            children: "Tijdelijk uitverkocht"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 153,
            columnNumber: 179
        }, this);
        $[29] = product.inStock;
        $[30] = product.stockQuantity;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "font-bold text-lg mb-3",
            children: "Productomschrijving"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] !== product.description) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-700 leading-relaxed mb-4",
            children: product.description
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[33] = product.description;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== product.features) {
        t18 = product.features && product.features.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-semibold mb-2",
                    children: "Kenmerken:"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 177,
                    columnNumber: 84
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2",
                    children: product.features.map(_ProductDetailProductFeaturesMap)
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 177,
                    columnNumber: 134
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 177,
            columnNumber: 62
        }, this);
        $[35] = product.features;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] !== t17 || $[38] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-md p-6 mb-6",
            children: [
                t16,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[37] = t17;
        $[38] = t18;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== product.sku || $[41] !== product.specifications || $[42] !== product.weight) {
        t20 = product.specifications && Object.keys(product.specifications).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-md p-6 mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-bold text-lg mb-3",
                    children: "Specificaties"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 194,
                    columnNumber: 143
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                    className: "space-y-2",
                    children: [
                        Object.entries(product.specifications).map(_ProductDetailAnonymous),
                        product.weight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between py-2 border-b border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                    className: "text-gray-600",
                                    children: "Gewicht"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 194,
                                    columnNumber: 382
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                    className: "font-medium text-gray-900",
                                    children: [
                                        product.weight,
                                        "g"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 194,
                                    columnNumber: 424
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 194,
                            columnNumber: 314
                        }, this),
                        product.sku && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                    className: "text-gray-600",
                                    children: "SKU"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 194,
                                    columnNumber: 554
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                    className: "font-medium text-gray-900",
                                    children: product.sku
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                                    lineNumber: 194,
                                    columnNumber: 592
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                            lineNumber: 194,
                            columnNumber: 511
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 194,
                    columnNumber: 200
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 194,
            columnNumber: 87
        }, this);
        $[40] = product.sku;
        $[41] = product.specifications;
        $[42] = product.weight;
        $[43] = t20;
    } else {
        t20 = $[43];
    }
    let t21;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "font-medium text-gray-700",
            children: "Aantal:"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    let t22;
    if ($[45] !== quantity) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "ProductDetail[<button>.onClick]": ()=>setQuantity(Math.max(1, quantity - 1))
            }["ProductDetail[<button>.onClick]"],
            className: "px-4 py-2 hover:bg-gray-100 transition-colors",
            children: "-"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[45] = quantity;
        $[46] = t22;
    } else {
        t22 = $[46];
    }
    let t23;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = ({
            "ProductDetail[<input>.onChange]": (e)=>setQuantity(Math.max(1, parseInt(e.target.value) || 1))
        })["ProductDetail[<input>.onChange]"];
        $[47] = t23;
    } else {
        t23 = $[47];
    }
    let t24;
    let t25;
    if ($[48] !== quantity) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            value: quantity,
            onChange: t23,
            className: "w-16 text-center border-x border-gray-300 py-2",
            min: "1"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "ProductDetail[<button>.onClick]": ()=>setQuantity(quantity + 1)
            }["ProductDetail[<button>.onClick]"],
            className: "px-4 py-2 hover:bg-gray-100 transition-colors",
            children: "+"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[48] = quantity;
        $[49] = t24;
        $[50] = t25;
    } else {
        t24 = $[49];
        t25 = $[50];
    }
    let t26;
    if ($[51] !== t22 || $[52] !== t24 || $[53] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 mb-4",
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center border border-gray-300 rounded-lg",
                    children: [
                        t22,
                        t24,
                        t25
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 244,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[51] = t22;
        $[52] = t24;
        $[53] = t25;
        $[54] = t26;
    } else {
        t26 = $[54];
    }
    const t27 = !product.inStock;
    const t28 = product.inStock ? "Toevoegen aan winkelwagen" : "Uitverkocht";
    let t29;
    if ($[55] !== handleAddToCart || $[56] !== t27 || $[57] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleAddToCart,
            disabled: t27,
            className: "w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed mb-4",
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[55] = handleAddToCart;
        $[56] = t27;
        $[57] = t28;
        $[58] = t29;
    } else {
        t29 = $[58];
    }
    let t30;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/shop",
            className: "block w-full text-center text-blue-600 hover:underline mb-4",
            children: "← Terug naar shop"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[59] = t30;
    } else {
        t30 = $[59];
    }
    let t31;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 space-y-2 text-sm text-gray-600 border-t pt-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "✓ Gratis verzending vanaf €50"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 273,
                    columnNumber: 79
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "✓ 14 dagen retourrecht"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 273,
                    columnNumber: 115
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "✓ Veilig betalen"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 273,
                    columnNumber: 144
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "✓ Besteld voor 15:00, morgen in huis"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                    lineNumber: 273,
                    columnNumber: 167
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[60] = t31;
    } else {
        t31 = $[60];
    }
    let t32;
    if ($[61] !== t26 || $[62] !== t29) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-md p-6",
            children: [
                t26,
                t29,
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[61] = t26;
        $[62] = t29;
        $[63] = t32;
    } else {
        t32 = $[63];
    }
    let t33;
    if ($[64] !== t12 || $[65] !== t13 || $[66] !== t14 || $[67] !== t15 || $[68] !== t19 || $[69] !== t20 || $[70] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t12,
                t13,
                t14,
                t15,
                t19,
                t20,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[64] = t12;
        $[65] = t13;
        $[66] = t14;
        $[67] = t15;
        $[68] = t19;
        $[69] = t20;
        $[70] = t32;
        $[71] = t33;
    } else {
        t33 = $[71];
    }
    let t34;
    if ($[72] !== t11 || $[73] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-2 gap-12",
            children: [
                t11,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 303,
            columnNumber: 11
        }, this);
        $[72] = t11;
        $[73] = t33;
        $[74] = t34;
    } else {
        t34 = $[74];
    }
    let t35;
    if ($[75] !== t34 || $[76] !== t8) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-8",
                children: [
                    t8,
                    t34
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 312,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[75] = t34;
        $[76] = t8;
        $[77] = t35;
    } else {
        t35 = $[77];
    }
    return t35;
}
_s(ProductDetail, "ZtNFZU3BV9D0KiprBsJBhNBCR/k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = ProductDetail;
function _ProductDetailAnonymous(t0) {
    const [key, value] = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between py-2 border-b border-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                className: "text-gray-600",
                children: key
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 323,
                columnNumber: 88
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                className: "font-medium text-gray-900",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 323,
                columnNumber: 128
            }, this)
        ]
    }, key, true, {
        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
        lineNumber: 323,
        columnNumber: 10
    }, this);
}
function _ProductDetailProductFeaturesMap(feature, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-green-600 mr-2",
                children: "✓"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 326,
                columnNumber: 55
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-700",
                children: feature
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
                lineNumber: 326,
                columnNumber: 101
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/app/(public)/shop/product/[id]/ProductDetail.tsx",
        lineNumber: 326,
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

//# sourceMappingURL=src_9eb4a29a._.js.map