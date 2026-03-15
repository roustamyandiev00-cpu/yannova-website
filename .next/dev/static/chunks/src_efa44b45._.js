(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/company.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GoogleTagManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoogleTagManager",
    ()=>GoogleTagManager,
    "GoogleTagManagerNoScript",
    ()=>GoogleTagManagerNoScript,
    "gtmEvent",
    ()=>gtmEvent,
    "gtmTrackEmail",
    ()=>gtmTrackEmail,
    "gtmTrackFormSubmit",
    ()=>gtmTrackFormSubmit,
    "gtmTrackPhone",
    ()=>gtmTrackPhone,
    "gtmTrackWhatsApp",
    ()=>gtmTrackWhatsApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-client] (ecmascript)");
'use client';
;
;
;
const GTM_ID = 'GTM-MZ98NM6L';
function GoogleTagManager() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "ea563b26567fcf871ecc18d6d26d6760c3ed7afe33265664f681b4d181877f34") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ea563b26567fcf871ecc18d6d26d6760c3ed7afe33265664f681b4d181877f34";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: "consent-mode-init",
                    strategy: "afterInteractive",
                    children: "\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          \n          // Default all tracking to denied until user consents \n          gtag('consent', 'default', {\n            'ad_storage': 'denied',\n            'ad_user_data': 'denied',\n            'ad_personalization': 'denied',\n            'analytics_storage': 'denied',\n            'wait_for_update': 500\n          });\n          \n          // Enable data redaction when ad_storage is denied\n          gtag('set', 'ads_data_redaction', true);\n        "
                }, void 0, false, {
                    fileName: "[project]/src/components/GoogleTagManager.tsx",
                    lineNumber: 16,
                    columnNumber: 12
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: "gtm-script",
                    strategy: "afterInteractive",
                    children: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `
                }, void 0, false, {
                    fileName: "[project]/src/components/GoogleTagManager.tsx",
                    lineNumber: 16,
                    columnNumber: 663
                }, this)
            ]
        }, void 0, true);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = GoogleTagManager;
function GoogleTagManagerNoScript() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "ea563b26567fcf871ecc18d6d26d6760c3ed7afe33265664f681b4d181877f34") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ea563b26567fcf871ecc18d6d26d6760c3ed7afe33265664f681b4d181877f34";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("noscript", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                src: `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`,
                height: "0",
                width: "0",
                style: {
                    display: "none",
                    visibility: "hidden"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/GoogleTagManager.tsx",
                lineNumber: 39,
                columnNumber: 20
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/GoogleTagManager.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c1 = GoogleTagManagerNoScript;
function gtmEvent(eventName, eventData) {
    if ("TURBOPACK compile-time truthy", 1) {
        const w = window;
        if (w.dataLayer) {
            w.dataLayer.push({
                event: eventName,
                ...eventData
            });
        }
    }
}
const gtmTrackFormSubmit = (formType = 'offerte')=>{
    gtmEvent('form_submit', {
        form_type: formType,
        value: 50,
        currency: 'EUR'
    });
};
const gtmTrackWhatsApp = ()=>{
    gtmEvent('whatsapp_click', {
        value: 20,
        currency: 'EUR'
    });
};
const gtmTrackPhone = ()=>{
    gtmEvent('phone_click', {
        value: 25,
        currency: 'EUR'
    });
};
const gtmTrackEmail = ()=>{
    gtmEvent('email_click', {
        value: 15,
        currency: 'EUR'
    });
};
var _c, _c1;
__turbopack_context__.k.register(_c, "GoogleTagManager");
__turbopack_context__.k.register(_c1, "GoogleTagManagerNoScript");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/contexts/CartContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const EMPTY_CART = {
    items: [],
    total: 0,
    updatedAt: new Date()
};
function normalizeCart(savedCart) {
    if (!savedCart) {
        return EMPTY_CART;
    }
    try {
        const parsed = JSON.parse(savedCart);
        const items = Array.isArray(parsed.items) ? parsed.items.filter((item)=>Boolean(item) && typeof item.productId === 'string' && typeof item.quantity === 'number' && typeof item.price === 'number') : [];
        return {
            items,
            total: items.reduce((sum, item)=>sum + item.price * item.quantity, 0),
            updatedAt: parsed.updatedAt ? new Date(parsed.updatedAt) : new Date()
        };
    } catch  {
        return EMPTY_CART;
    }
}
function CartProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "17deb37ad56d3a01320a6c33ded5a20af4b420966d432ab66efd2f9ab6d74523") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "17deb37ad56d3a01320a6c33ded5a20af4b420966d432ab66efd2f9ab6d74523";
    }
    const { children } = t0;
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(EMPTY_CART);
    const [hasLoaded, setHasLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "CartProvider[useEffect()]": ()=>{
                setCart(normalizeCart(localStorage.getItem("cart")));
                setHasLoaded(true);
            }
        })["CartProvider[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[3] !== cart || $[4] !== hasLoaded) {
        t3 = ({
            "CartProvider[useEffect()]": ()=>{
                if (!hasLoaded) {
                    return;
                }
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        })["CartProvider[useEffect()]"];
        t4 = [
            cart,
            hasLoaded
        ];
        $[3] = cart;
        $[4] = hasLoaded;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "CartProvider[addItem]": (productId, quantity, price)=>{
                setCart({
                    "CartProvider[addItem > setCart()]": (prev)=>{
                        const existingItem = prev.items.find({
                            "CartProvider[addItem > setCart() > prev.items.find()]": (item)=>item.productId === productId
                        }["CartProvider[addItem > setCart() > prev.items.find()]"]);
                        let newItems;
                        if (existingItem) {
                            newItems = prev.items.map({
                                "CartProvider[addItem > setCart() > prev.items.map()]": (item_0)=>item_0.productId === productId ? {
                                        ...item_0,
                                        quantity: item_0.quantity + quantity
                                    } : item_0
                            }["CartProvider[addItem > setCart() > prev.items.map()]"]);
                        } else {
                            newItems = [
                                ...prev.items,
                                {
                                    productId,
                                    quantity,
                                    price
                                }
                            ];
                        }
                        const total = newItems.reduce(_CartProviderAddItemSetCartNewItemsReduce, 0);
                        return {
                            items: newItems,
                            total,
                            updatedAt: new Date()
                        };
                    }
                }["CartProvider[addItem > setCart()]"]);
            }
        })["CartProvider[addItem]"];
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const addItem = t5;
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "CartProvider[removeItem]": (productId_0)=>{
                setCart({
                    "CartProvider[removeItem > setCart()]": (prev_0)=>{
                        const newItems_0 = prev_0.items.filter({
                            "CartProvider[removeItem > setCart() > prev_0.items.filter()]": (item_2)=>item_2.productId !== productId_0
                        }["CartProvider[removeItem > setCart() > prev_0.items.filter()]"]);
                        const total_0 = newItems_0.reduce(_CartProviderRemoveItemSetCartNewItems_0Reduce, 0);
                        return {
                            items: newItems_0,
                            total: total_0,
                            updatedAt: new Date()
                        };
                    }
                }["CartProvider[removeItem > setCart()]"]);
            }
        })["CartProvider[removeItem]"];
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const removeItem = t6;
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "CartProvider[updateQuantity]": (productId_1, quantity_0)=>{
                if (quantity_0 <= 0) {
                    removeItem(productId_1);
                    return;
                }
                setCart({
                    "CartProvider[updateQuantity > setCart()]": (prev_1)=>{
                        const newItems_1 = prev_1.items.map({
                            "CartProvider[updateQuantity > setCart() > prev_1.items.map()]": (item_4)=>item_4.productId === productId_1 ? {
                                    ...item_4,
                                    quantity: quantity_0
                                } : item_4
                        }["CartProvider[updateQuantity > setCart() > prev_1.items.map()]"]);
                        const total_1 = newItems_1.reduce(_CartProviderUpdateQuantitySetCartNewItems_1Reduce, 0);
                        return {
                            items: newItems_1,
                            total: total_1,
                            updatedAt: new Date()
                        };
                    }
                }["CartProvider[updateQuantity > setCart()]"]);
            }
        })["CartProvider[updateQuantity]"];
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const updateQuantity = t7;
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "CartProvider[clearCart]": ()=>{
                setCart({
                    ...EMPTY_CART,
                    updatedAt: new Date()
                });
            }
        })["CartProvider[clearCart]"];
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    const clearCart = t8;
    let t9;
    if ($[11] !== cart.items) {
        t9 = cart.items.reduce(_CartProviderCartItemsReduce, 0);
        $[11] = cart.items;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    const itemCount = t9;
    let t10;
    if ($[13] !== cart || $[14] !== itemCount) {
        t10 = {
            cart,
            addItem,
            removeItem,
            updateQuantity,
            clearCart,
            itemCount
        };
        $[13] = cart;
        $[14] = itemCount;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== children || $[17] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
            value: t10,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/contexts/CartContext.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[16] = children;
        $[17] = t10;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    return t11;
}
_s(CartProvider, "Qf5FXUDQTh1EzPqbV91eRlOTuE0=");
_c = CartProvider;
function _CartProviderCartItemsReduce(sum_2, item_6) {
    return sum_2 + item_6.quantity;
}
function _CartProviderUpdateQuantitySetCartNewItems_1Reduce(sum_1, item_5) {
    return sum_1 + item_5.price * item_5.quantity;
}
function _CartProviderRemoveItemSetCartNewItems_0Reduce(sum_0, item_3) {
    return sum_0 + item_3.price * item_3.quantity;
}
function _CartProviderAddItemSetCartNewItemsReduce(sum, item_1) {
    return sum + item_1.price * item_1.quantity;
}
function useCart() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "17deb37ad56d3a01320a6c33ded5a20af4b420966d432ab66efd2f9ab6d74523") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "17deb37ad56d3a01320a6c33ded5a20af4b420966d432ab66efd2f9ab6d74523";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
_s1(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/company.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoogleTagManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GoogleTagManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/CartContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
;
const navigation = [
    {
        name: "Diensten",
        href: "/diensten",
        children: [
            {
                name: "Ramen & Deuren",
                href: "/ramen-deuren",
                description: "PVC & aluminium"
            },
            {
                name: "Gevelrenovatie",
                href: "/gevelrenovatie",
                description: "Isolatie + afwerking"
            },
            {
                name: "Isolatie",
                href: "/diensten/isolatie",
                description: "Dak, gevel en vloer"
            },
            {
                name: "Renovatie",
                href: "/renovatie",
                description: "Totaalrenovatie"
            }
        ]
    },
    {
        name: "Producten",
        href: "/producten"
    },
    {
        name: "Shop",
        href: "/shop"
    },
    {
        name: "Projecten",
        href: "/projecten"
    },
    {
        name: "Blog",
        href: "/blog"
    },
    {
        name: "Contact",
        href: "/contact"
    }
];
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43);
    if ($[0] !== "1ad44bea5f38f7db6cdf84ab2c3f5a81b6d1d0352279e36eaff7b2ab9d27a833") {
        for(let $i = 0; $i < 43; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1ad44bea5f38f7db6cdf84ab2c3f5a81b6d1d0352279e36eaff7b2ab9d27a833";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [servicesOpen, setServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const servicesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Navbar[useEffect()]": ()=>{
                const handleScroll = {
                    "Navbar[useEffect() > handleScroll]": ()=>{
                        setScrolled(window.scrollY > 20);
                    }
                }["Navbar[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll);
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["Navbar[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Navbar[useEffect()]": ()=>{
                const handleClickOutside = {
                    "Navbar[useEffect() > handleClickOutside]": (event)=>{
                        if (servicesRef.current && !servicesRef.current.contains(event.target)) {
                            setServicesOpen(false);
                        }
                    }
                }["Navbar[useEffect() > handleClickOutside]"];
                document.addEventListener("mousedown", handleClickOutside);
                return ()=>document.removeEventListener("mousedown", handleClickOutside);
            }
        })["Navbar[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[5] !== mobileMenuOpen) {
        t4 = ({
            "Navbar[useEffect()]": ()=>{
                document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
                return _temp;
            }
        })["Navbar[useEffect()]"];
        t5 = [
            mobileMenuOpen
        ];
        $[5] = mobileMenuOpen;
        $[6] = t4;
        $[7] = t5;
    } else {
        t4 = $[6];
        t5 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    const t6 = scrolled ? "bg-[#0a0c10]/95 backdrop-blur-sm py-3 shadow-lg" : "bg-transparent py-5";
    let t7;
    if ($[8] !== t6) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 inset-x-0 z-50 transition-all duration-500", t6);
        $[8] = t6;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t10;
    let t8;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            y: -100
        };
        t9 = {
            y: 0
        };
        t10 = {
            duration: 0.5
        };
        $[10] = t10;
        $[11] = t8;
        $[12] = t9;
    } else {
        t10 = $[10];
        t8 = $[11];
        t9 = $[12];
    }
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center lg:w-[240px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "-m-1.5 p-1.5 flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Yannova"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 168,
                        columnNumber: 117
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/logo.png",
                        alt: "Yannova Logo",
                        width: 280,
                        height: 70,
                        priority: true,
                        className: "h-14 sm:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 168,
                        columnNumber: 157
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 168,
                columnNumber: 59
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] !== mobileMenuOpen) {
        t12 = ({
            "Navbar[<button>.onClick]": ()=>setMobileMenuOpen(!mobileMenuOpen)
        })["Navbar[<button>.onClick]"];
        $[14] = mobileMenuOpen;
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sr-only",
            children: "Open het menu"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] !== mobileMenuOpen) {
        t14 = mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-6 w-6",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 192,
            columnNumber: 28
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
            className: "h-6 w-6",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 192,
            columnNumber: 75
        }, this);
        $[17] = mobileMenuOpen;
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    let t15;
    if ($[19] !== mobileMenuOpen || $[20] !== t12 || $[21] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex lg:hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-white",
                onClick: t12,
                "aria-expanded": mobileMenuOpen,
                "aria-controls": "mobile-menu",
                children: [
                    t13,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 200,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[19] = mobileMenuOpen;
        $[20] = t12;
        $[21] = t14;
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    let t16;
    if ($[23] !== pathname || $[24] !== servicesOpen) {
        t16 = navigation.map({
            "Navbar[navigation.map()]": (item)=>item.children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    ref: servicesRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "Navbar[navigation.map() > <button>.onClick]": ()=>setServicesOpen(!servicesOpen)
                            }["Navbar[navigation.map() > <button>.onClick]"],
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium transition-all duration-300 relative group flex items-center gap-1", pathname.startsWith(item.href) ? "text-secondary" : "text-gray-300 hover:text-white"),
                            "aria-expanded": servicesOpen,
                            "aria-controls": "services-menu",
                            "aria-haspopup": "menu",
                            type: "button",
                            children: [
                                item.name,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 transition-transform duration-200", servicesOpen && "rotate-180")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 213,
                                    columnNumber: 355
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full", pathname.startsWith(item.href) ? "w-full" : "")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 213,
                                    columnNumber: 460
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 211,
                            columnNumber: 119
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: servicesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                id: "services-menu",
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: 10
                                },
                                transition: {
                                    duration: 0.15
                                },
                                className: "absolute top-full left-0 mt-2 w-56 rounded-xl bg-[#1a1d24] border border-white/10 shadow-xl overflow-hidden",
                                role: "menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-2",
                                    children: item.children.map({
                                        "Navbar[navigation.map() > item.children.map()]": (child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: child.href,
                                                onClick: {
                                                    "Navbar[navigation.map() > item.children.map() > <a>.onClick]": ()=>setServicesOpen(false)
                                                }["Navbar[navigation.map() > item.children.map() > <a>.onClick]"],
                                                className: "block px-4 py-3 hover:bg-white/5 transition-colors",
                                                role: "menuitem",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium text-white",
                                                        children: child.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Navbar.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 163
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-400 mt-0.5",
                                                        children: child.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Navbar.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 229
                                                    }, this)
                                                ]
                                            }, child.name, true, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 225,
                                                columnNumber: 76
                                            }, this)
                                    }["Navbar[navigation.map() > item.children.map()]"])
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 224,
                                    columnNumber: 146
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 213,
                                columnNumber: 673
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 213,
                            columnNumber: 639
                        }, this)
                    ]
                }, item.name, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 211,
                    columnNumber: 59
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium transition-all duration-300 relative group", pathname === item.href || pathname.startsWith(`${item.href}/`) ? "text-secondary" : "text-gray-300 hover:text-white"),
                    children: [
                        item.name,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full", pathname === item.href || pathname.startsWith(`${item.href}/`) ? "w-full" : "")
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 228,
                            columnNumber: 364
                        }, this)
                    ]
                }, item.name, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 228,
                    columnNumber: 115
                }, this)
        }["Navbar[navigation.map()]"]);
        $[23] = pathname;
        $[24] = servicesOpen;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-8",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[26] = t16;
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    let t18;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].phoneHref,
            onClick: _NavbarAOnClick,
            className: "flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 246,
                    columnNumber: 190
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hidden xl:inline",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].phoneDisplay
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 246,
                    columnNumber: 219
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    let t19;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].whatsappHref,
            target: "_blank",
            rel: "noopener noreferrer",
            onClick: _NavbarAOnClick2,
            className: "flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-[#25D366] transition-colors",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 253,
                    columnNumber: 222
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hidden xl:inline",
                    children: "WhatsApp"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 253,
                    columnNumber: 259
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        $[29] = t19;
    } else {
        t19 = $[29];
    }
    let t20;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:flex lg:items-center lg:justify-end lg:gap-x-4 lg:w-[240px] xl:w-auto",
            children: [
                t18,
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/vraag-ai",
                    className: "flex items-center gap-2 text-sm font-medium text-white bg-[#1a1d24] hover:bg-[#1f2229] px-4 py-2.5 rounded-xl shadow-lg transition-all group whitespace-nowrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            className: "h-4 w-4 text-secondary group-hover:rotate-12 transition-transform duration-300"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 260,
                            columnNumber: 312
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden xl:inline",
                            children: "Vraag Yannova AI"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 260,
                            columnNumber: 415
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 260,
                    columnNumber: 118
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/contact",
                    className: "flex items-center gap-2 rounded-xl bg-gradient-to-r from-secondary to-orange-600 px-6 py-2.5 text-sm font-semibold text-white shadow-elegant glow-hover transition-all duration-300 hover:scale-105 whitespace-nowrap",
                    children: "Gratis offerte"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 260,
                    columnNumber: 480
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[30] = t20;
    } else {
        t20 = $[30];
    }
    let t21;
    if ($[31] !== t15 || $[32] !== t17) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "container mx-auto flex items-center justify-between gap-8 px-6 lg:px-8",
            "aria-label": "Hoofdmenu",
            children: [
                t11,
                t15,
                t17,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[31] = t15;
        $[32] = t17;
        $[33] = t21;
    } else {
        t21 = $[33];
    }
    let t22;
    if ($[34] !== mobileMenuOpen || $[35] !== pathname) {
        t22 = mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            id: "mobile-menu",
            initial: {
                opacity: 0,
                height: 0
            },
            animate: {
                opacity: 1,
                height: "auto"
            },
            exit: {
                opacity: 0,
                height: 0
            },
            className: "lg:hidden bg-[#0a0c10]/95 backdrop-blur-sm overflow-hidden shadow-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1 px-4 pb-6 pt-4",
                children: [
                    navigation.map({
                        "Navbar[navigation.map()]": (item_0)=>item_0.children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",
                                        children: item_0.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 286,
                                        columnNumber: 90
                                    }, this),
                                    item_0.children.map({
                                        "Navbar[navigation.map() > item_0.children.map()]": (child_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: child_0.href,
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("block rounded-lg px-3 py-2.5 pl-6 text-base font-medium transition-colors", pathname === child_0.href ? "bg-secondary/10 text-secondary" : "text-gray-300 hover:bg-white/5 hover:text-white"),
                                                onClick: {
                                                    "Navbar[navigation.map() > item_0.children.map() > <a>.onClick]": ()=>setMobileMenuOpen(false)
                                                }["Navbar[navigation.map() > item_0.children.map() > <a>.onClick]"],
                                                children: child_0.name
                                            }, child_0.name, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 287,
                                                columnNumber: 78
                                            }, this)
                                    }["Navbar[navigation.map() > item_0.children.map()]"])
                                ]
                            }, item_0.name, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 286,
                                columnNumber: 67
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item_0.href,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("block rounded-lg px-3 py-3 text-base font-medium transition-colors", pathname === item_0.href || pathname.startsWith(`${item_0.href}/`) ? "bg-secondary/10 text-secondary" : "text-gray-300 hover:bg-white/5 hover:text-white"),
                                onClick: {
                                    "Navbar[navigation.map() > <a>.onClick]": ()=>setMobileMenuOpen(false)
                                }["Navbar[navigation.map() > <a>.onClick]"],
                                children: item_0.name
                            }, item_0.name, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 290,
                                columnNumber: 77
                            }, this)
                    }["Navbar[navigation.map()]"]),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-4 mt-4 border-t border-white/10 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].phoneHref,
                                onClick: _NavbarAOnClick3,
                                className: "flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 293,
                                        columnNumber: 234
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].phoneDisplay
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 293,
                                columnNumber: 102
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].whatsappHref,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                onClick: _NavbarAOnClick4,
                                className: "flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-[#25D366]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 293,
                                        columnNumber: 470
                                    }, this),
                                    "WhatsApp"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 293,
                                columnNumber: 289
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 293,
                        columnNumber: 40
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/vraag-ai",
                        className: "mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#1a1d24] hover:bg-[#1f2229] px-4 py-3.5 text-base font-medium text-white shadow-lg transition-all",
                        onClick: {
                            "Navbar[<Link>.onClick]": ()=>setMobileMenuOpen(false)
                        }["Navbar[<Link>.onClick]"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "h-4 w-4 text-secondary"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 295,
                                columnNumber: 38
                            }, this),
                            "Vraag Yannova AI"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 293,
                        columnNumber: 525
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/contact",
                        className: "mt-3 block w-full text-center rounded-xl bg-linear-to-r from-secondary to-orange-600 px-4 py-3.5 text-base font-semibold text-white shadow-elegant",
                        onClick: {
                            "Navbar[<Link>.onClick]": ()=>setMobileMenuOpen(false)
                        }["Navbar[<Link>.onClick]"],
                        children: "Gratis offerte aanvragen"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 295,
                        columnNumber: 108
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 285,
                columnNumber: 89
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 276,
            columnNumber: 29
        }, this);
        $[34] = mobileMenuOpen;
        $[35] = pathname;
        $[36] = t22;
    } else {
        t22 = $[36];
    }
    let t23;
    if ($[37] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[37] = t22;
        $[38] = t23;
    } else {
        t23 = $[38];
    }
    let t24;
    if ($[39] !== t21 || $[40] !== t23 || $[41] !== t7) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
            className: t7,
            initial: t8,
            animate: t9,
            transition: t10,
            children: [
                t21,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 314,
            columnNumber: 11
        }, this);
        $[39] = t21;
        $[40] = t23;
        $[41] = t7;
        $[42] = t24;
    } else {
        t24 = $[42];
    }
    return t24;
}
_s(Navbar, "xxwzE3lDgiTWfLvrpR+3sabPBrU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = Navbar;
function _NavbarAOnClick4() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoogleTagManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gtmTrackWhatsApp"])();
}
function _NavbarAOnClick3() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoogleTagManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gtmTrackPhone"])();
}
function _NavbarAOnClick2() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoogleTagManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gtmTrackWhatsApp"])();
}
function _NavbarAOnClick() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoogleTagManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gtmTrackPhone"])();
}
function _temp() {
    document.body.style.overflow = "unset";
}
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/company.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoogleTagManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GoogleTagManager.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Footer() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "d621b60e93de3f06fc1b9342b7142ed437265c9036edddd791d58205152a0a40") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d621b60e93de3f06fc1b9342b7142ed437265c9036edddd791d58205152a0a40";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0",
            style: {
                backgroundImage: "radial-gradient(ellipse at bottom, rgba(255, 107, 0, 0.08), transparent 60%)"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            id: "footer-heading",
            className: "sr-only",
            children: "Footer"
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "inline-block",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "Yannova"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 33,
                    columnNumber: 50
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/logo.png",
                    alt: "Yannova Logo",
                    width: 200,
                    height: 50,
                    className: "h-10 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 33,
                    columnNumber: 90
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm leading-6 text-gray-300 max-w-sm",
            children: "Uw specialist voor ramen, deuren en totaalrenovatie in Zoersel, Antwerpen en Mechelen. Meer dan 15 jaar ervaring en vakmanschap."
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].phoneHref,
            onClick: _FooterAOnClick,
            className: "inline-flex items-center gap-2 rounded-xl glass glass-hover px-4 py-2.5 text-sm text-gray-200 shadow-elegant",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                    className: "h-4 w-4 text-secondary"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 43,
                    columnNumber: 185
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].phoneDisplay
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8",
            children: [
                t2,
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-3",
                    children: [
                        t4,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].whatsappHref,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: _FooterAOnClick2,
                            className: "inline-flex items-center gap-2 rounded-xl glass glass-hover px-4 py-2.5 text-sm text-gray-200 shadow-elegant",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                    className: "h-4 w-4 text-secondary"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 50,
                                    columnNumber: 308
                                }, this),
                                "WhatsApp"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 50,
                            columnNumber: 87
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 50,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-semibold leading-6 text-white",
            children: "Diensten"
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    role: "list",
                    className: "mt-6 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/ramen-deuren",
                                className: "text-sm leading-6 text-gray-300 hover:text-white",
                                children: "Ramen & Deuren"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 64,
                                columnNumber: 66
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 64,
                            columnNumber: 62
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/gevelrenovatie",
                                className: "text-sm leading-6 text-gray-300 hover:text-white",
                                children: "Gevelrenovatie & Crepi"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 64,
                                columnNumber: 188
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 64,
                            columnNumber: 184
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/diensten/isolatie",
                                className: "text-sm leading-6 text-gray-300 hover:text-white",
                                children: "Isolatiewerken"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 64,
                                columnNumber: 320
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 64,
                            columnNumber: 316
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/renovatie",
                                className: "text-sm leading-6 text-gray-300 hover:text-white",
                                children: "Totaalrenovatie"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 64,
                                columnNumber: 443
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 64,
                            columnNumber: 439
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 64,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-semibold leading-6 text-white",
            children: "Bedrijf"
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2 md:mt-0",
                    children: [
                        t8,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            role: "list",
                            className: "mt-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/over-ons",
                                        className: "text-sm leading-6 text-gray-300 hover:text-white",
                                        children: "Over ons"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 78,
                                        columnNumber: 150
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 78,
                                    columnNumber: 146
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/projecten",
                                        className: "text-sm leading-6 text-gray-300 hover:text-white",
                                        children: "Projecten"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 78,
                                        columnNumber: 258
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 78,
                                    columnNumber: 254
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/producten",
                                        className: "text-sm leading-6 text-gray-300 hover:text-white",
                                        children: "Producten"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 78,
                                        columnNumber: 368
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 78,
                                    columnNumber: 364
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/premie-gids",
                                        className: "text-sm leading-6 text-gray-300 hover:text-white",
                                        children: "Premie gids"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 78,
                                        columnNumber: 478
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 78,
                                    columnNumber: 474
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: "text-sm leading-6 text-gray-300 hover:text-white",
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 78,
                                        columnNumber: 592
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 78,
                                    columnNumber: 588
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 78,
                            columnNumber: 103
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 78,
                    columnNumber: 69
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-semibold leading-6 text-white",
            children: "Populaire Regio's"
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 85,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    role: "list",
                    className: "mt-6 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/ramen/antwerpen",
                                className: "text-sm leading-6 text-gray-300 hover:text-white",
                                children: "Ramen Antwerpen"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 92,
                                columnNumber: 68
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 92,
                            columnNumber: 64
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/gevelrenovatie/zoersel",
                                className: "text-sm leading-6 text-gray-300 hover:text-white",
                                children: "Gevel Zoersel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 92,
                                columnNumber: 190
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 92,
                            columnNumber: 186
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/totaalrenovatie/brasschaat",
                                className: "text-sm leading-6 text-gray-300 hover:text-white",
                                children: "Renovatie Brasschaat"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 92,
                                columnNumber: 317
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 92,
                            columnNumber: 313
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/deuren/schoten",
                                className: "text-sm leading-6 text-gray-300 hover:text-white",
                                children: "Deuren Schoten"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 92,
                                columnNumber: 455
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 92,
                            columnNumber: 451
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 92,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 92,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-semibold leading-6 text-white",
            children: "Contact"
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 99,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            className: "h-5 w-5 text-secondary shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 106,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-start gap-3 text-sm leading-6 text-gray-300",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        "Regio ",
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].areas.join(", ")
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 113,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-center gap-3 text-sm leading-6 text-gray-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                    className: "h-5 w-5 text-secondary shrink-0"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 120,
                    columnNumber: 83
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].phoneHref,
                    onClick: _FooterAOnClick3,
                    className: "hover:text-white",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].phoneDisplay
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 120,
                    columnNumber: 136
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "xl:grid xl:grid-cols-3 xl:gap-8",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0",
                    children: [
                        t9,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: [
                                t11,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 md:mt-0",
                                    children: [
                                        t12,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            role: "list",
                                            className: "mt-6 space-y-4",
                                            children: [
                                                t14,
                                                t15,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center gap-3 text-sm leading-6 text-gray-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            className: "h-5 w-5 text-secondary shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 371
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].email}`,
                                                            onClick: _FooterAOnClick4,
                                                            className: "hover:text-white",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].email
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 423
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 299
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 127,
                                            columnNumber: 246
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 127,
                                    columnNumber: 211
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 127,
                            columnNumber: 151
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 127,
                    columnNumber: 64
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-linear-to-b from-background to-[#0d1117] text-white border-t border-white/5 relative overflow-hidden",
            "aria-labelledby": "footer-heading",
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 relative z-10",
                    children: [
                        t16,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs leading-5 text-gray-400",
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].name,
                                    ". Alle rechten voorbehouden."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 134,
                                columnNumber: 343
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 134,
                            columnNumber: 272
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 134,
                    columnNumber: 176
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    return t17;
}
_c = Footer;
function _FooterAOnClick4() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoogleTagManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gtmTrackEmail"])();
}
function _FooterAOnClick3() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoogleTagManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gtmTrackPhone"])();
}
function _FooterAOnClick2() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoogleTagManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gtmTrackWhatsApp"])();
}
function _FooterAOnClick() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoogleTagManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gtmTrackPhone"])();
}
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data:731efe [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLead",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60fb6db5dca0d2f723a921bce8d1ddf01aa65b7ed4":"createLead"},"src/lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60fb6db5dca0d2f723a921bce8d1ddf01aa65b7ed4", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createLead");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJ0AvYXV0aCc7XG5pbXBvcnQgeyBBdXRoRXJyb3IgfSBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnO1xuaW1wb3J0IHsgcHV0IH0gZnJvbSAnQHZlcmNlbC9ibG9iJztcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IGdlbmVyYXRlVGV4dCB9IGZyb20gJ2FpJztcbmltcG9ydCB7IGdvb2dsZSB9IGZyb20gJ0BhaS1zZGsvZ29vZ2xlJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ0AvbGliL2xvZ2dlcic7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZShcbiAgcHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbikge1xuICB0cnkge1xuICAgIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldCgncGFzc3dvcmQnKSBhcyBzdHJpbmc7XG5cbiAgICBsb2dnZXIuZGVidWcoJ0F1dGhlbnRpY2F0ZSBhY3Rpb24gY2FsbGVkIGZvcjonLCBlbWFpbCk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywgeyBcbiAgICAgIGVtYWlsLCBcbiAgICAgIHBhc3N3b3JkLCBcbiAgICAgIHJlZGlyZWN0OiBmYWxzZSBcbiAgICB9KTtcbiAgICBcbiAgICBsb2dnZXIuZGVidWcoJ1NpZ25JbiByZXN1bHQ6JywgcmVzdWx0KTtcbiAgICBcbiAgICAvLyBJZiB3ZSBnZXQgaGVyZSB3aXRob3V0IGVycm9yLCByZWRpcmVjdCBtYW51YWxseVxuICAgIHJlZGlyZWN0KCcvYWRtaW4nKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBOZXh0QXV0aCB0aHJvd3MgTkVYVF9SRURJUkVDVCBlcnJvciBvbiBzdWNjZXNzIC0gdGhpcyBpcyBleHBlY3RlZFxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IubWVzc2FnZT8uaW5jbHVkZXMoJ05FWFRfUkVESVJFQ1QnKSkge1xuICAgICAgICBsb2dnZXIuZGVidWcoJ1JlZGlyZWN0IGVycm9yIChleHBlY3RlZCkgLSByZS10aHJvd2luZycpO1xuICAgICAgICB0aHJvdyBlcnJvcjsgLy8gUmUtdGhyb3cgdG8gYWxsb3cgcmVkaXJlY3RcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsb2dnZXIuZXJyb3IoJ0F1dGhlbnRpY2F0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICBcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgIGxvZ2dlci5kZWJ1ZygnQXV0aEVycm9yIHR5cGU6JywgZXJyb3IudHlwZSk7XG4gICAgICBzd2l0Y2ggKGVycm9yLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnQ3JlZGVudGlhbHNTaWduaW4nOlxuICAgICAgICAgIHJldHVybiAnT25nZWxkaWdlIGlubG9nZ2VnZXZlbnMuJztcbiAgICAgICAgY2FzZSAnQ2FsbGJhY2tSb3V0ZUVycm9yJzpcbiAgICAgICAgICByZXR1cm4gJ09uZ2VsZGlnZSBpbmxvZ2dlZ2V2ZW5zLic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgbG9nZ2VyLmVycm9yKCdVbmtub3duIGF1dGggZXJyb3IgdHlwZTonLCBlcnJvci50eXBlKTtcbiAgICAgICAgICByZXR1cm4gJ0VyIGlzIGlldHMgbWlzZ2VnYWFuLiBQcm9iZWVyIG9wbmlldXcuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgbG9nZ2VyLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIG1lc3NhZ2U6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiAnRXIgaXMgaWV0cyBtaXNnZWdhYW4uIFByb2JlZXIgb3BuaWV1dy4nO1xuICB9XG59XG5cbmNvbnN0IFByb2plY3RTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHRpdGxlOiB6LnN0cmluZygpLm1pbigzLCBcIlRpdGVsIG1vZXQgbWluaW1hYWwgMyB0ZWtlbnMgemlqblwiKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkubWluKDEwLCBcIkJlc2NocmlqdmluZyBtb2V0IG1pbmltYWFsIDEwIHRla2VucyB6aWpuXCIpLFxuICBjYXRlZ29yeTogei5zdHJpbmcoKS5taW4oMSwgXCJDYXRlZ29yaWUgaXMgdmVycGxpY2h0XCIpLFxuICBpbWFnZTogei5pbnN0YW5jZW9mKEZpbGUpLnJlZmluZSgoZmlsZSkgPT4gZmlsZS5zaXplID4gMCwgXCJBZmJlZWxkaW5nIGlzIHZlcnBsaWNodFwiKSxcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcmV2U3RhdGU6IHVua25vd24sIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAvLyAxLiBWYWxpZGF0ZSBmaWVsZHNcbiAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gUHJvamVjdFNjaGVtYS5zYWZlUGFyc2Uoe1xuICAgIHRpdGxlOiBmb3JtRGF0YS5nZXQoJ3RpdGxlJyksXG4gICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKSxcbiAgICBjYXRlZ29yeTogZm9ybURhdGEuZ2V0KCdjYXRlZ29yeScpLFxuICAgIGltYWdlOiBmb3JtRGF0YS5nZXQoJ2ltYWdlJyksXG4gIH0pO1xuXG4gIGlmICghdmFsaWRhdGVkRmllbGRzLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgbWVzc2FnZTogJ1Z1bCBhbGxlIHZlbGRlbiBjb3JyZWN0IGluLicsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xuICBsZXQgaW1hZ2VVcmwgPSAnJztcblxuICB0cnkge1xuICAgIC8vIDIuIFVwbG9hZCBpbWFnZSB0byBWZXJjZWwgQmxvYlxuICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBwdXQoaW1hZ2UubmFtZSwgaW1hZ2UsIHtcbiAgICAgIGFjY2VzczogJ3B1YmxpYycsXG4gICAgfSk7XG4gICAgaW1hZ2VVcmwgPSBibG9iLnVybDtcblxuICAgIC8vIDMuIFNhdmUgdG8gRGF0YWJhc2VcbiAgICBhd2FpdCBwcmlzbWEucHJvamVjdC5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBpbWFnZVVybCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dnZXIuZXJyb3IoJ0RhdGFiYXNlIEVycm9yJywgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiAnRGF0YWJhc2UgZm91dDogS29uIHByb2plY3QgbmlldCBhYW5tYWtlbi4nLFxuICAgIH07XG4gIH1cblxuICAvLyA0LiBSZXZhbGlkYXRlIGFuZCBSZWRpcmVjdFxuICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3Byb2plY3RzJyk7XG4gIHJldmFsaWRhdGVQYXRoKCcvcHJvamVjdGVuJyk7IC8vIEFsc28gdXBkYXRlIHRoZSBwdWJsaWMgcGFnZVxuICByZWRpcmVjdCgnL2FkbWluL3Byb2plY3RzJyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICAvLyBPcHRpb25hbDogRGVsZXRlIGJsb2IgaW1hZ2UgaGVyZSBhcyB3ZWxsIGlmIG5lZWRlZCAocmVxdWlyZXMgZGVsIGZyb20gQHZlcmNlbC9ibG9iKVxuICAgIGF3YWl0IHByaXNtYS5wcm9qZWN0LmRlbGV0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgIH0pO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vcHJvamVjdHMnKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2plY3RlbicpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ2dlci5lcnJvcignRGF0YWJhc2UgRXJyb3InLCBlcnJvcik7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdLb24gcHJvamVjdCBuaWV0IHZlcndpamRlcmVuLicpO1xuICB9XG59XG5cbi8vIC0tLSBMZWFkcyAvIENoYXRib3QgQWN0aW9ucyAtLS1cblxuY29uc3QgTGVhZFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgbWVzc2FnZTogei5zdHJpbmcoKS5taW4oMSwgXCJCZXJpY2h0IG1hZyBuaWV0IGxlZWcgemlqblwiKSxcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoXCJPbmdlbGRpZyBlbWFpbGFkcmVzXCIpLm9wdGlvbmFsKCkub3Ioei5saXRlcmFsKCcnKSksXG4gIG5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgc291cmNlOiB6LnN0cmluZygpLmRlZmF1bHQoXCJjaGF0Ym90XCIpLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVMZWFkKHByZXZTdGF0ZTogdW5rbm93biwgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IExlYWRTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICBtZXNzYWdlOiBmb3JtRGF0YS5nZXQoJ21lc3NhZ2UnKSxcbiAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgIG5hbWU6IGZvcm1EYXRhLmdldCgnbmFtZScpLFxuICAgIHNvdXJjZTogZm9ybURhdGEuZ2V0KCdzb3VyY2UnKSxcbiAgfSk7XG5cbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVnVsIGF1YiBlZW4gZ2VsZGlnIGJlcmljaHQgZW4gZW1haWwgaW4uJyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEubGVhZC5jcmVhdGUoe1xuICAgICAgZGF0YTogdmFsaWRhdGVkRmllbGRzLmRhdGEsXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL2xlYWRzJyk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ0JlcmljaHQgdmVyc3R1dXJkIScgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dnZXIuZXJyb3IoJ0xlYWQgRXJyb3InLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdFciBnaW5nIGlldHMgbWlzIGJpaiBoZXQgdmVyc3R1cmVuLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0xlYWRBc1JlYWQoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5sZWFkLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YTogeyByZWFkOiB0cnVlIH1cbiAgICB9KTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL2xlYWRzJyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBsb2dnZXIuZXJyb3IoXCJGYWlsZWQgdG8gbWFyayBhcyByZWFkXCIsIGUpO1xuICB9XG59XG5cbi8vIC0tLSBUZXN0aW1vbmlhbHMgQWN0aW9ucyAtLS1cblxuY29uc3QgVGVzdGltb25pYWxTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDIsIFwiTmFhbSBtb2V0IG1pbmltYWFsIDIgdGVrZW5zIHppam5cIiksXG4gIGNvbXBhbnk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgcmF0aW5nOiB6Lm51bWJlcigpLm1pbigxKS5tYXgoNSksXG4gIHRleHQ6IHouc3RyaW5nKCkubWluKDEwLCBcIlRlc3RpbW9uaWFsIG1vZXQgbWluaW1hYWwgMTAgdGVrZW5zIHppam5cIiksXG4gIGltYWdlVXJsOiB6LnN0cmluZygpLnVybCgpLm9wdGlvbmFsKCkub3Ioei5saXRlcmFsKCcnKSksXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRlc3RpbW9uaWFsKHByZXZTdGF0ZTogdW5rbm93biwgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IFRlc3RpbW9uaWFsU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgbmFtZTogZm9ybURhdGEuZ2V0KCduYW1lJyksXG4gICAgY29tcGFueTogZm9ybURhdGEuZ2V0KCdjb21wYW55JyksXG4gICAgcmF0aW5nOiBOdW1iZXIoZm9ybURhdGEuZ2V0KCdyYXRpbmcnKSksXG4gICAgdGV4dDogZm9ybURhdGEuZ2V0KCd0ZXh0JyksXG4gICAgaW1hZ2VVcmw6IGZvcm1EYXRhLmdldCgnaW1hZ2VVcmwnKSxcbiAgfSk7XG5cbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICBtZXNzYWdlOiAnVnVsIGFsbGUgdmVsZGVuIGNvcnJlY3QgaW4uJyxcbiAgICB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEudGVzdGltb25pYWwuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgLi4udmFsaWRhdGVkRmllbGRzLmRhdGEsXG4gICAgICAgIGFwcHJvdmVkOiB0cnVlLCAvLyBBdXRvLWFwcHJvdmUgYWRtaW4gY3JlYXRlZCB0ZXN0aW1vbmlhbHNcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3Rlc3RpbW9uaWFscycpO1xuICAgIHJlZGlyZWN0KCcvYWRtaW4vdGVzdGltb25pYWxzJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignVGVzdGltb25pYWwgRXJyb3I6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6ICdLb24gdGVzdGltb25pYWwgbmlldCBhYW5tYWtlbi4nIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwcHJvdmVUZXN0aW1vbmlhbChpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnRlc3RpbW9uaWFsLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YTogeyBhcHByb3ZlZDogdHJ1ZSB9LFxuICAgIH0pO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vdGVzdGltb25pYWxzJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignQXBwcm92ZSBFcnJvcjonLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRvZ2dsZUZlYXR1cmVkVGVzdGltb25pYWwoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGNvbnN0IHRlc3RpbW9uaWFsID0gYXdhaXQgcHJpc21hLnRlc3RpbW9uaWFsLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIHNlbGVjdDogeyBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgIH0pO1xuXG4gICAgYXdhaXQgcHJpc21hLnRlc3RpbW9uaWFsLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YTogeyBmZWF0dXJlZDogIXRlc3RpbW9uaWFsPy5mZWF0dXJlZCB9LFxuICAgIH0pO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vdGVzdGltb25pYWxzJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignVG9nZ2xlIEZlYXR1cmVkIEVycm9yOicsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVGVzdGltb25pYWwoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS50ZXN0aW1vbmlhbC5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3Rlc3RpbW9uaWFscycpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0RlbGV0ZSBUZXN0aW1vbmlhbCBFcnJvcjonLCBlcnJvcik7XG4gIH1cbn1cblxuLy8gLS0tIE1lZGlhIEFjdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVNZWRpYUZpbGUoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5tZWRpYUZpbGUuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9tZWRpYScpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0RlbGV0ZSBNZWRpYSBFcnJvcjonLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZE1lZGlhRmlsZShwcmV2U3RhdGU6IHVua25vd24sIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZTtcbiAgY29uc3QgZm9sZGVyID0gZm9ybURhdGEuZ2V0KCdmb2xkZXInKSBhcyBzdHJpbmcgfHwgJ3VwbG9hZHMnO1xuICBjb25zdCBhbHQgPSBmb3JtRGF0YS5nZXQoJ2FsdCcpIGFzIHN0cmluZyB8fCAnJztcblxuICBpZiAoIWZpbGUgfHwgZmlsZS5zaXplID09PSAwKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdTZWxlY3RlZXIgZWVuIGJlc3RhbmQgb20gdGUgdXBsb2FkZW4uJyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBibG9iID0gYXdhaXQgcHV0KGZpbGUubmFtZSwgZmlsZSwge1xuICAgICAgYWNjZXNzOiAncHVibGljJyxcbiAgICB9KTtcblxuICAgIGF3YWl0IHByaXNtYS5tZWRpYUZpbGUuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgdXJsOiBibG9iLnVybCxcbiAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgICBtaW1lVHlwZTogZmlsZS50eXBlLFxuICAgICAgICBmb2xkZXIsXG4gICAgICAgIGFsdCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL21lZGlhJyk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ0Jlc3RhbmQgZ2XDvHBsb2FkIScgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdVcGxvYWQgRXJyb3I6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnS29uIGJlc3RhbmQgbmlldCB1cGxvYWRlbi4nIH07XG4gIH1cbn1cblxuLy8gLS0tIFNldHRpbmdzIEFjdGlvbnMgKFByaXNtYSkgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTZXR0aW5ncyhmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3Qgc2V0dGluZ3MgPSBbXG4gICAgeyBrZXk6ICdzaXRlX25hbWUnLCBjYXRlZ29yeTogJ2dlbmVyYWwnIH0sXG4gICAgeyBrZXk6ICdzaXRlX2Rlc2NyaXB0aW9uJywgY2F0ZWdvcnk6ICdnZW5lcmFsJyB9LFxuICAgIHsga2V5OiAnc2l0ZV91cmwnLCBjYXRlZ29yeTogJ2dlbmVyYWwnIH0sXG4gICAgeyBrZXk6ICdjb250YWN0X2VtYWlsJywgY2F0ZWdvcnk6ICdjb250YWN0JyB9LFxuICAgIHsga2V5OiAnY29udGFjdF9waG9uZScsIGNhdGVnb3J5OiAnY29udGFjdCcgfSxcbiAgICB7IGtleTogJ2NvbnRhY3RfYWRkcmVzcycsIGNhdGVnb3J5OiAnY29udGFjdCcgfSxcbiAgICB7IGtleTogJ3NvY2lhbF9mYWNlYm9vaycsIGNhdGVnb3J5OiAnc29jaWFsJyB9LFxuICAgIHsga2V5OiAnc29jaWFsX2luc3RhZ3JhbScsIGNhdGVnb3J5OiAnc29jaWFsJyB9LFxuICAgIHsga2V5OiAnc29jaWFsX2xpbmtlZGluJywgY2F0ZWdvcnk6ICdzb2NpYWwnIH0sXG4gICAgeyBrZXk6ICdzb2NpYWxfdHdpdHRlcicsIGNhdGVnb3J5OiAnc29jaWFsJyB9LFxuICAgIHsga2V5OiAnc2VvX3RpdGxlJywgY2F0ZWdvcnk6ICdzZW8nIH0sXG4gICAgeyBrZXk6ICdzZW9fZGVzY3JpcHRpb24nLCBjYXRlZ29yeTogJ3NlbycgfSxcbiAgICB7IGtleTogJ3Nlb19rZXl3b3JkcycsIGNhdGVnb3J5OiAnc2VvJyB9LFxuICBdO1xuXG4gIHRyeSB7XG4gICAgZm9yIChjb25zdCBzZXR0aW5nIG9mIHNldHRpbmdzKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IChmb3JtRGF0YS5nZXQoc2V0dGluZy5rZXkpIGFzIHN0cmluZykgfHwgJyc7XG5cbiAgICAgIGF3YWl0IHByaXNtYS5zaXRlU2V0dGluZy51cHNlcnQoe1xuICAgICAgICB3aGVyZTogeyBrZXk6IHNldHRpbmcua2V5IH0sXG4gICAgICAgIHVwZGF0ZTogeyB2YWx1ZSwgY2F0ZWdvcnk6IHNldHRpbmcuY2F0ZWdvcnkgfSxcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAga2V5OiBzZXR0aW5nLmtleSxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBjYXRlZ29yeTogc2V0dGluZy5jYXRlZ29yeSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vc2V0dGluZ3MnKTtcbiAgICByZWRpcmVjdCgnL2FkbWluL3NldHRpbmdzJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignU2V0dGluZ3MgRXJyb3I6JywgZXJyb3IpO1xuICAgIHRocm93IG5ldyBFcnJvcignS29uIGluc3RlbGxpbmdlbiBuaWV0IG9wc2xhYW4uJyk7XG4gIH1cbn1cblxuLy8gLS0tIFVzZXIgTWFuYWdlbWVudCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG9nZ2xlVXNlclN0YXR1cyhpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIHNlbGVjdDogeyBhY3RpdmU6IHRydWUgfSxcbiAgICB9KTtcblxuICAgIGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YTogeyBhY3RpdmU6ICF1c2VyPy5hY3RpdmUgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vdXNlcnMnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdUb2dnbGUgVXNlciBTdGF0dXMgRXJyb3I6JywgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKHByZXZTdGF0ZTogdW5rbm93biwgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpIGFzIHN0cmluZztcbiAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJykgYXMgc3RyaW5nO1xuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJykgYXMgc3RyaW5nO1xuICBsZXQgcm9sZSA9IGZvcm1EYXRhLmdldCgncm9sZScpIGFzIHN0cmluZztcblxuICBpZiAoIXJvbGUpIHtcbiAgICAvLyBEZWZhdWx0IHRvICd1c2VyJywgdW5sZXNzIGl0J3MgdGhlIHZlcnkgZmlyc3QgdXNlclxuICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IHByaXNtYS51c2VyLmNvdW50KCk7XG4gICAgcm9sZSA9IHVzZXJDb3VudCA9PT0gMCA/ICdhZG1pbicgOiAndXNlcic7XG4gIH1cblxuICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRW1haWwgZW4gd2FjaHR3b29yZCB6aWpuIHZlcnBsaWNodC4nIH07XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcblxuICAgIGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHJvbGUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi91c2VycycpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NyZWF0ZSBVc2VyIEVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0tvbiBnZWJydWlrZXIgbmlldCBhYW5tYWtlbi4nIH07XG4gIH1cblxuICAvLyBSZWRpcmVjdCBvdXRzaWRlIHRyeS1jYXRjaCB0byBhdm9pZCBkaWdlc3QgZXJyb3JcbiAgcmVkaXJlY3QoJy9hZG1pbi91c2VycycpO1xufVxuXG4vLyAtLS0gQW5hbHl0aWNzIEFjdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFja1BhZ2VWaWV3KHBhdGg6IHN0cmluZywgcmVmZXJyZXI/OiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEucGFnZVZpZXcuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgcmVmZXJyZXIsXG4gICAgICB9LFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1RyYWNrIFBhZ2UgVmlldyBFcnJvcjonLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluY3JlbWVudFByb2plY3RWaWV3cyhpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnByb2plY3QudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgaW5jcmVtZW50OiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdJbmNyZW1lbnQgVmlld3MgRXJyb3I6JywgZXJyb3IpO1xuICB9XG59XG5cbi8vIC0tLSBTRU8gQWN0aW9ucyAtLS1cblxuY29uc3QgU2VvUGFnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgcGF0aDogei5zdHJpbmcoKS5taW4oMSwgXCJQYWQgaXMgdmVycGxpY2h0XCIpLFxuICB0aXRsZTogei5zdHJpbmcoKS5taW4oMSwgXCJUaXRlbCBpcyB2ZXJwbGljaHRcIiksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm1pbigxLCBcIkJlc2NocmlqdmluZyBpcyB2ZXJwbGljaHRcIiksXG4gIGtleXdvcmRzOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG9nSW1hZ2U6IHouc3RyaW5nKCkudXJsKCkub3B0aW9uYWwoKS5vcih6LmxpdGVyYWwoJycpKSxcbiAgb2dUaXRsZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBvZ0Rlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNhbm9uaWNhbFVybDogei5zdHJpbmcoKS51cmwoKS5vcHRpb25hbCgpLm9yKHoubGl0ZXJhbCgnJykpLFxuICBoMTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBub2luZGV4OiB6LmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcbiAgbm9mb2xsb3c6IHouYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlU2VvUGFnZShmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gU2VvUGFnZVNjaGVtYS5zYWZlUGFyc2Uoe1xuICAgIHBhdGg6IGZvcm1EYXRhLmdldCgncGF0aCcpLFxuICAgIHRpdGxlOiBmb3JtRGF0YS5nZXQoJ3RpdGxlJyksXG4gICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKSxcbiAgICBrZXl3b3JkczogZm9ybURhdGEuZ2V0KCdrZXl3b3JkcycpLFxuICAgIG9nSW1hZ2U6IGZvcm1EYXRhLmdldCgnb2dJbWFnZScpLFxuICAgIG9nVGl0bGU6IGZvcm1EYXRhLmdldCgnb2dUaXRsZScpLFxuICAgIG9nRGVzY3JpcHRpb246IGZvcm1EYXRhLmdldCgnb2dEZXNjcmlwdGlvbicpLFxuICAgIGNhbm9uaWNhbFVybDogZm9ybURhdGEuZ2V0KCdjYW5vbmljYWxVcmwnKSxcbiAgICBoMTogZm9ybURhdGEuZ2V0KCdoMScpLFxuICAgIG5vaW5kZXg6IGZvcm1EYXRhLmdldCgnbm9pbmRleCcpID09PSAnb24nLFxuICAgIG5vZm9sbG93OiBmb3JtRGF0YS5nZXQoJ25vZm9sbG93JykgPT09ICdvbicsXG4gIH0pO1xuXG4gIGlmICghdmFsaWRhdGVkRmllbGRzLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgbWVzc2FnZTogJ1Z1bCBhbGxlIHZlcnBsaWNodGUgdmVsZGVuIGNvcnJlY3QgaW4uJyxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xuXG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnNlb1BhZ2UudXBzZXJ0KHtcbiAgICAgIHdoZXJlOiB7IHBhdGg6IGRhdGEucGF0aCB9LFxuICAgICAgdXBkYXRlOiBkYXRhLFxuICAgICAgY3JlYXRlOiBkYXRhLFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9zZW8nKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnU0VPIHBhZ2luYSBvcGdlc2xhZ2VuIScgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdTYXZlIFNFTyBQYWdlIEVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiAnS29uIFNFTyBwYWdpbmEgbmlldCBvcHNsYWFuLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlU2VvUGFnZShwYXRoOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuc2VvUGFnZS5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgcGF0aCB9LFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9zZW8nKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnU0VPIHBhZ2luYSB2ZXJ3aWpkZXJkIScgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdEZWxldGUgU0VPIFBhZ2UgRXJyb3I6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6ICdLb24gU0VPIHBhZ2luYSBuaWV0IHZlcndpamRlcmVuLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuU2VvQXVkaXQoKSB7XG4gIGNvbnN0IGlzc3VlczogQXJyYXk8e1xuICAgIHBhdGg6IHN0cmluZztcbiAgICBpc3N1ZTogc3RyaW5nO1xuICAgIHNldmVyaXR5OiBzdHJpbmc7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICB9PiA9IFtdO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2VvUGFnZXMgPSBhd2FpdCBwcmlzbWEuc2VvUGFnZS5maW5kTWFueSgpO1xuXG4gICAgLy8gQ2hlY2sgYWxsIFNFTyBwYWdlcyBmb3IgaXNzdWVzXG4gICAgZm9yIChjb25zdCBwYWdlIG9mIHNlb1BhZ2VzKSB7XG4gICAgICBpZiAoIXBhZ2UudGl0bGUgfHwgcGFnZS50aXRsZS5sZW5ndGggPCAxMCkge1xuICAgICAgICBpc3N1ZXMucHVzaCh7XG4gICAgICAgICAgcGF0aDogcGFnZS5wYXRoLFxuICAgICAgICAgIGlzc3VlOiAnc2hvcnRfdGl0bGUnLFxuICAgICAgICAgIHNldmVyaXR5OiAnd2FybmluZycsXG4gICAgICAgICAgbWVzc2FnZTogJ01ldGEgdGl0ZWwgaXMgdGUga29ydCAobWluaW1hYWwgMTAgdGVrZW5zIGFhbmJldm9sZW4pJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAocGFnZS50aXRsZSAmJiBwYWdlLnRpdGxlLmxlbmd0aCA+IDYwKSB7XG4gICAgICAgIGlzc3Vlcy5wdXNoKHtcbiAgICAgICAgICBwYXRoOiBwYWdlLnBhdGgsXG4gICAgICAgICAgaXNzdWU6ICdsb25nX3RpdGxlJyxcbiAgICAgICAgICBzZXZlcml0eTogJ3dhcm5pbmcnLFxuICAgICAgICAgIG1lc3NhZ2U6ICdNZXRhIHRpdGVsIGlzIHRlIGxhbmcgKG1heGltYWFsIDYwIHRla2VucyBhYW5iZXZvbGVuKScsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKCFwYWdlLmRlc2NyaXB0aW9uIHx8IHBhZ2UuZGVzY3JpcHRpb24ubGVuZ3RoIDwgNTApIHtcbiAgICAgICAgaXNzdWVzLnB1c2goe1xuICAgICAgICAgIHBhdGg6IHBhZ2UucGF0aCxcbiAgICAgICAgICBpc3N1ZTogJ3Nob3J0X2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICBzZXZlcml0eTogJ3dhcm5pbmcnLFxuICAgICAgICAgIG1lc3NhZ2U6ICdNZXRhIGJlc2NocmlqdmluZyBpcyB0ZSBrb3J0IChtaW5pbWFhbCA1MCB0ZWtlbnMgYWFuYmV2b2xlbiknLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChwYWdlLmRlc2NyaXB0aW9uICYmIHBhZ2UuZGVzY3JpcHRpb24ubGVuZ3RoID4gMTYwKSB7XG4gICAgICAgIGlzc3Vlcy5wdXNoKHtcbiAgICAgICAgICBwYXRoOiBwYWdlLnBhdGgsXG4gICAgICAgICAgaXNzdWU6ICdsb25nX2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICBzZXZlcml0eTogJ3dhcm5pbmcnLFxuICAgICAgICAgIG1lc3NhZ2U6ICdNZXRhIGJlc2NocmlqdmluZyBpcyB0ZSBsYW5nIChtYXhpbWFhbCAxNjAgdGVrZW5zIGFhbmJldm9sZW4pJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoIXBhZ2UuaDEpIHtcbiAgICAgICAgaXNzdWVzLnB1c2goe1xuICAgICAgICAgIHBhdGg6IHBhZ2UucGF0aCxcbiAgICAgICAgICBpc3N1ZTogJ21pc3NpbmdfaDEnLFxuICAgICAgICAgIHNldmVyaXR5OiAnZXJyb3InLFxuICAgICAgICAgIG1lc3NhZ2U6ICdQYWdpbmEgaGVlZnQgZ2VlbiBIMSB0YWcnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTYXZlIGF1ZGl0IHJlc3VsdHNcbiAgICBhd2FpdCBwcmlzbWEuc2VvQXVkaXQuZGVsZXRlTWFueSh7fSk7XG4gICAgaWYgKGlzc3Vlcy5sZW5ndGggPiAwKSB7XG4gICAgICBhd2FpdCBwcmlzbWEuc2VvQXVkaXQuY3JlYXRlTWFueSh7XG4gICAgICAgIGRhdGE6IGlzc3VlcyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGlzc3VlcywgbWVzc2FnZTogYFNFTyBhdWRpdCB2b2x0b29pZC4gJHtpc3N1ZXMubGVuZ3RofSBpc3N1ZXMgZ2V2b25kZW4uYCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1NFTyBBdWRpdCBFcnJvcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogJ0tvbiBTRU8gYXVkaXQgbmlldCB1aXR2b2VyZW4uJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaXhTZW9Jc3N1ZShpc3N1ZUlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuc2VvQXVkaXQudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBpc3N1ZUlkIH0sXG4gICAgICBkYXRhOiB7IGZpeGVkOiB0cnVlLCBmaXhlZEF0OiBuZXcgRGF0ZSgpIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3NlbycpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdJc3N1ZSBnZW1hcmtlZXJkIGFscyBvcGdlbG9zdCEnIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRml4IFNFTyBJc3N1ZSBFcnJvcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogJ0tvbiBpc3N1ZSBuaWV0IG1hcmtlcmVuIGFscyBvcGdlbG9zdC4nIH07XG4gIH1cbn1cblxuLy8gLS0tIEFJIFNFTyBHZW5lcmF0aW9uIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVBaVNlbyhwcmV2U3RhdGU6IHVua25vd24sIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICBjb25zdCBwYXRoID0gZm9ybURhdGEuZ2V0KCdwYXRoJykgYXMgc3RyaW5nO1xuICBjb25zdCBwYWdlTmFtZSA9IGZvcm1EYXRhLmdldCgncGFnZU5hbWUnKSBhcyBzdHJpbmc7XG4gIGNvbnN0IGNvbnRlbnQgPSBmb3JtRGF0YS5nZXQoJ2NvbnRlbnQnKSBhcyBzdHJpbmcgfHwgJyc7XG5cbiAgaWYgKCFwYXRoIHx8ICFwYWdlTmFtZSkge1xuICAgIHJldHVybiB7IGVycm9yOiAnUGF0aCBhbmQgcGFnZSBuYW1lIGFyZSByZXF1aXJlZCcgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSBhd2FpdCBnZW5lcmF0ZVRleHQoe1xuICAgICAgbW9kZWw6IGdvb2dsZSgnZ2VtaW5pLTIuMC1mbGFzaC0wMDEnKSxcbiAgICAgIHByb21wdDogYEdlbmVyZWVyIFNFTyBtZXRhZGF0YSB2b29yIGVlbiByZW5vdmF0aWViZWRyaWpmIHdlYnNpdGUgcGFnaW5hLlxuXG5QYWdpbmE6ICR7cGFnZU5hbWV9XG5VUkw6ICR7cGF0aH1cbiR7Y29udGVudCA/IGBQYWdpbmEgaW5ob3VkOiAke2NvbnRlbnR9YCA6ICcnfVxuXG5HZW5lcmVlciBlZW4gSlNPTiBvYmplY3QgbWV0IGRlemUgdmVsZGVuIChpbiBoZXQgTmVkZXJsYW5kcyk6XG4tIHRpdGxlOiBNZXRhIHRpdGVsICg1MC02MCB0ZWtlbnMsIGFhbnRyZWtrZWxpamsgdm9vciBrbGFudGVuKVxuLSBkZXNjcmlwdGlvbjogTWV0YSBiZXNjaHJpanZpbmcgKDE1MC0xNjAgdGVrZW5zLCBtZXQgY2FsbC10by1hY3Rpb24pXG4tIGtleXdvcmRzOiA1LTggcmVsZXZhbnRlIGtleXdvcmRzIChrb21tYSBnZXNjaGVpZGVuKVxuLSBoMTogSDEgaGVhZGluZyAoMSB6aW4sIG1heCAxMCB3b29yZGVuKVxuLSBvZ1RpdGxlOiBTb2NpYWwgbWVkaWEgdGl0ZWwgKG1heCA0MCB0ZWtlbnMpXG4tIG9nRGVzY3JpcHRpb246IFNvY2lhbCBtZWRpYSBiZXNjaHJpanZpbmcgKG1heCAxMDAgdGVrZW5zKVxuXG5HZWVmIEFMTEVFTiBoZXQgSlNPTiBvYmplY3QgdGVydWcsIGdlZW4gYW5kZXJlIHRla3N0LmAsXG4gICAgfSk7XG5cbiAgICAvLyBFeHRyYWN0IEpTT04gZnJvbSByZXNwb25zZVxuICAgIGNvbnN0IGpzb25NYXRjaCA9IHRleHQubWF0Y2goL1xce1tcXHNcXFNdKlxcfS8pO1xuICAgIGlmICghanNvbk1hdGNoKSB7XG4gICAgICByZXR1cm4geyBlcnJvcjogJ0FJIHJlc3BvbnNlIHBhcnNpbmcgZmFpbGVkJyB9O1xuICAgIH1cblxuICAgIGNvbnN0IHNlb0RhdGEgPSBKU09OLnBhcnNlKGpzb25NYXRjaFswXSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGRhdGE6IHNlb0RhdGEsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBSSBTRU8gRXJyb3I6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yOiAnQUkgZ2VuZXJhdGlvbiBmYWlsZWQnIH07XG4gIH1cbn1cblxuLy8gLS0tIE1lZGlhIFVwbG9hZCAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVNZWRpYUZpbGVzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICB0cnkge1xuICAgIGNvbnN0IGZpbGVuYW1lID0gZm9ybURhdGEuZ2V0KCdmaWxlbmFtZScpIGFzIHN0cmluZztcbiAgICBjb25zdCBtaW1lVHlwZSA9IGZvcm1EYXRhLmdldCgnbWltZVR5cGUnKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgc2l6ZSA9IHBhcnNlSW50KGZvcm1EYXRhLmdldCgnc2l6ZScpIGFzIHN0cmluZyk7XG4gICAgY29uc3QgZmlsZURhdGEgPSBmb3JtRGF0YS5nZXQoJ2ZpbGUnKSBhcyBzdHJpbmc7XG5cbiAgICBpZiAoIWZpbGVuYW1lIHx8ICFmaWxlRGF0YSkge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdCZXN0YW5kIGlzIHZlcnBsaWNodCcgfTtcbiAgICB9XG5cbiAgICAvLyBVcGxvYWQgdG8gVmVyY2VsIEJsb2IgKG9mIGFuZGVyZSBzdG9yYWdlKVxuICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBwdXQoZmlsZW5hbWUsIEJ1ZmZlci5mcm9tKGZpbGVEYXRhLnNwbGl0KCcsJylbMV0sICdiYXNlNjQnKSwge1xuICAgICAgYWNjZXNzOiAncHVibGljJyxcbiAgICAgIGNvbnRlbnRUeXBlOiBtaW1lVHlwZSxcbiAgICB9KTtcblxuICAgIC8vIFNhdmUgdG8gZGF0YWJhc2VcbiAgICBhd2FpdCBwcmlzbWEubWVkaWFGaWxlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGZpbGVuYW1lLFxuICAgICAgICB1cmw6IGJsb2IudXJsLFxuICAgICAgICBzaXplLFxuICAgICAgICBtaW1lVHlwZSxcbiAgICAgICAgZm9sZGVyOiAndXBsb2FkcycsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9tZWRpYScpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVybDogYmxvYi51cmwgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdNZWRpYSBVcGxvYWQgRXJyb3I6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yOiAnVXBsb2FkIG1pc2x1a3QnIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVJBa0pzQix1TEFBQSJ9
}),
"[project]/src/components/Chatbot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chatbot",
    ()=>Chatbot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ai/react/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$731efe__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:731efe [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function Chatbot() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('chat');
    const [showWelcome, setShowWelcome] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sessionId, setSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { messages, input, handleInputChange, handleSubmit, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])({
        body: {
            sessionId
        },
        onResponse: {
            "Chatbot.useChat": (response)=>{
                const newSessionId = response.headers.get('X-Session-Id');
                if (newSessionId && !sessionId) {
                    setSessionId(newSessionId);
                    localStorage.setItem('chatbot-session-id', newSessionId);
                }
            }
        }["Chatbot.useChat"]
    });
    // Lead form state
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Show welcome message after 3 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chatbot.useEffect": ()=>{
            const hasSeenWelcome = sessionStorage.getItem('chatbot-welcome-seen');
            if (!hasSeenWelcome) {
                const timer = setTimeout({
                    "Chatbot.useEffect.timer": ()=>{
                        setShowWelcome(true);
                        sessionStorage.setItem('chatbot-welcome-seen', 'true');
                        // Auto-hide after 10 seconds
                        setTimeout({
                            "Chatbot.useEffect.timer": ()=>{
                                setShowWelcome(false);
                            }
                        }["Chatbot.useEffect.timer"], 10000);
                    }
                }["Chatbot.useEffect.timer"], 3000);
                return ({
                    "Chatbot.useEffect": ()=>clearTimeout(timer)
                })["Chatbot.useEffect"];
            }
        }
    }["Chatbot.useEffect"], []);
    // Load existing session ID
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chatbot.useEffect": ()=>{
            const savedSessionId = localStorage.getItem('chatbot-session-id');
            if (savedSessionId) {
                setSessionId(savedSessionId);
            }
        }
    }["Chatbot.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chatbot.useEffect": ()=>{
            if (scrollRef.current) {
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
        }
    }["Chatbot.useEffect"], [
        messages
    ]);
    // Check if last message indicates offerte interest
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chatbot.useEffect": ()=>{
            const lastMessage = messages[messages.length - 1];
            if (lastMessage?.role === 'user') {
                const content = lastMessage.content.toLowerCase();
                if (content.includes('offerte') || content.includes('prijs') || content.includes('kost')) {
                    // Auto-suggest lead form after bot responds
                    const timer_0 = setTimeout({
                        "Chatbot.useEffect.timer_0": ()=>{
                            if (step === 'chat') {
                            // Don't auto-switch, but we could show a suggestion
                            }
                        }
                    }["Chatbot.useEffect.timer_0"], 2000);
                    return ({
                        "Chatbot.useEffect": ()=>clearTimeout(timer_0)
                    })["Chatbot.useEffect"];
                }
            }
        }
    }["Chatbot.useEffect"], [
        messages,
        step
    ]);
    const handleLeadSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);
        const formData = new FormData();
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('name', name);
        formData.append('message', `Chat lead: ${messages.map((m)=>m.content).join('\n')}`);
        formData.append('source', 'chatbot-offerte');
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$731efe__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createLead"])(null, formData);
            if (result.success) {
                setStep('lead-success');
                setTimeout(()=>{
                    setStep('chat');
                    setEmail('');
                    setPhone('');
                    setName('');
                }, 5000);
            } else {
                setSubmitError(result.message || 'Er ging iets mis.');
            }
        } catch  {
            setSubmitError('Kan geen verbinding maken met de server.');
        } finally{
            setIsSubmitting(false);
        }
    };
    const renderChatContent = ()=>{
        if (step === 'lead-form') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                        className: "h-6 w-6 text-secondary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Chatbot.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-white font-bold",
                                children: "Gratis offerte aanvragen"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm mt-1",
                                children: "Vul uw gegevens in en we nemen binnen 24 uur contact op."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Chatbot.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleLeadSubmit,
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-gray-400 block mb-1",
                                        children: "Naam"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Chatbot.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: name,
                                        onChange: (e_0)=>setName(e_0.target.value),
                                        placeholder: "Uw naam",
                                        className: "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-secondary",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Chatbot.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-gray-400 block mb-1",
                                        children: "E-mail"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Chatbot.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        value: email,
                                        onChange: (e_1)=>setEmail(e_1.target.value),
                                        placeholder: "uw@email.be",
                                        className: "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-secondary",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Chatbot.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-gray-400 block mb-1",
                                        children: "Telefoon"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Chatbot.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "tel",
                                        value: phone,
                                        onChange: (e_2)=>setPhone(e_2.target.value),
                                        placeholder: "+32 4XX XX XX XX",
                                        className: "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-secondary",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Chatbot.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            submitError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-red-400 bg-red-500/10 p-2 rounded",
                                children: submitError
                            }, void 0, false, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 152,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setStep('chat'),
                                        className: "flex-1 py-2 text-sm text-gray-400 hover:text-white transition-colors",
                                        children: "Terug"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Chatbot.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: isSubmitting,
                                        className: "flex-1 bg-secondary text-white py-2 rounded-lg text-sm font-semibold hover:bg-secondary/80 transition-colors disabled:opacity-50",
                                        children: isSubmitting ? 'Versturen...' : 'Verstuur'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Chatbot.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Chatbot.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Chatbot.tsx",
                lineNumber: 125,
                columnNumber: 14
            }, this);
        }
        if (step === 'lead-success') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center h-full text-center p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            className: "h-8 w-8 text-green-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Chatbot.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Chatbot.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-bold text-lg mb-2",
                        children: "Bedankt!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Chatbot.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-sm",
                        children: "We hebben uw aanvraag ontvangen. U hoort binnen 24 uur van ons."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Chatbot.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Chatbot.tsx",
                lineNumber: 168,
                columnNumber: 14
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: scrollRef,
                    className: "flex-1 overflow-y-auto p-4 space-y-4",
                    children: [
                        messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center h-full text-center space-y-2 opacity-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                    className: "h-10 w-10"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "Hallo! Ik ben de Yannova assistent. Hoe kan ik u vandaag helpen met uw bouwproject?"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Chatbot.tsx",
                            lineNumber: 181,
                            columnNumber: 37
                        }, this),
                        messages.map((m_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: cn("flex w-max max-w-[80%] flex-col gap-1 rounded-2xl px-4 py-2 text-sm", m_0.role === "user" ? "ml-auto bg-secondary text-white rounded-tr-none" : "bg-white/5 text-gray-200 rounded-tl-none border border-white/10"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-1",
                                        children: [
                                            m_0.role === "user" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Chatbot.tsx",
                                                lineNumber: 187,
                                                columnNumber: 40
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                className: "h-3 w-3 text-secondary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Chatbot.tsx",
                                                lineNumber: 187,
                                                columnNumber: 71
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold uppercase tracking-wider opacity-50",
                                                children: m_0.role === "user" ? "U" : "Yannova"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Chatbot.tsx",
                                                lineNumber: 188,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Chatbot.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this),
                                    m_0.content
                                ]
                            }, m_0.id, true, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 185,
                                columnNumber: 43
                            }, this)),
                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-max max-w-[80%] flex-col gap-1 rounded-2xl bg-white/5 px-4 py-2 text-sm text-gray-200 rounded-tl-none border border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                            className: "h-3 w-3 text-secondary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Chatbot.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-bold uppercase tracking-wider opacity-50",
                                            children: "Yannova"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Chatbot.tsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-4 w-4 animate-spin opacity-50"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Chatbot.tsx",
                            lineNumber: 194,
                            columnNumber: 25
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg bg-red-500/10 p-3 text-xs text-red-400 border border-red-500/20",
                            children: "Er is een fout opgetreden. Probeer het later opnieuw."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Chatbot.tsx",
                            lineNumber: 201,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Chatbot.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this),
                messages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 pb-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setStep('lead-form'),
                        className: "w-full bg-secondary/20 border border-secondary/30 text-secondary text-sm py-2 rounded-lg hover:bg-secondary/30 transition-colors flex items-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 209,
                                columnNumber: 15
                            }, this),
                            "Vraag gratis offerte aan"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Chatbot.tsx",
                        lineNumber: 208,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Chatbot.tsx",
                    lineNumber: 207,
                    columnNumber: 33
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "border-t border-white/10 p-4 bg-white/5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: input,
                                onChange: handleInputChange,
                                placeholder: "Stel uw vraag...",
                                className: "flex-1 bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none",
                                disabled: isLoading
                            }, void 0, false, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: !input.trim() || isLoading,
                                className: "flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Chatbot.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Chatbot.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showWelcome && !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: 100
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    exit: {
                        opacity: 0,
                        x: 100
                    },
                    className: "fixed bottom-24 right-6 z-40 w-[300px] rounded-xl border border-white/10 bg-card shadow-xl overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b border-white/10 bg-white/5 p-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-8 w-8 items-center justify-center rounded-full bg-secondary/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                            className: "h-5 w-5 text-secondary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Chatbot.tsx",
                                            lineNumber: 241,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Chatbot.tsx",
                                        lineNumber: 240,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-bold text-white",
                                                children: "Hallo! 👋"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Chatbot.tsx",
                                                lineNumber: 244,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/80",
                                                children: "Kimberly - Yannova Assistent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Chatbot.tsx",
                                                lineNumber: 245,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Chatbot.tsx",
                                        lineNumber: 243,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowWelcome(false),
                                        className: "text-white/60 hover:text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Chatbot.tsx",
                                            lineNumber: 248,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Chatbot.tsx",
                                        lineNumber: 247,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 239,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Chatbot.tsx",
                            lineNumber: 238,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-background",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-300 mb-3",
                                    children: "Ik kan u helpen met vragen over ramen, deuren, renovaties en offertes. Stel gerust uw vraag!"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowWelcome(false);
                                        setIsOpen(true);
                                    },
                                    className: "w-full bg-secondary text-white text-sm py-2 rounded-lg hover:bg-secondary/80 transition-colors font-semibold",
                                    children: "Start gesprek"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 256,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Chatbot.tsx",
                            lineNumber: 252,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Chatbot.tsx",
                    lineNumber: 228,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Chatbot.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white shadow-xl transition-transform hover:scale-110 active:scale-95",
                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/src/components/Chatbot.tsx",
                    lineNumber: 268,
                    columnNumber: 19
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/src/components/Chatbot.tsx",
                    lineNumber: 268,
                    columnNumber: 47
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Chatbot.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: 20,
                        scale: 0.95
                    },
                    className: "fixed bottom-24 right-6 z-50 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-background shadow-xl sm:w-[400px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-white/10 bg-white/5 p-4 text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-8 w-8 items-center justify-center rounded-full bg-secondary/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                className: "h-5 w-5 text-secondary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Chatbot.tsx",
                                                lineNumber: 289,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Chatbot.tsx",
                                            lineNumber: 288,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-bold",
                                                    children: "Kimberly"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Chatbot.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] opacity-80",
                                                    children: "Yannova Assistent"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Chatbot.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Chatbot.tsx",
                                            lineNumber: 291,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setIsOpen(false);
                                        setStep('chat');
                                    },
                                    className: "rounded-full p-1 hover:bg-white/10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Chatbot.tsx",
                                        lineNumber: 300,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 296,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Chatbot.tsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, this),
                        renderChatContent()
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Chatbot.tsx",
                    lineNumber: 272,
                    columnNumber: 20
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Chatbot.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Chatbot, "/veNO0IXwVV3i6e/XZ9reigERFg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"]
    ];
});
_c = Chatbot;
var _c;
__turbopack_context__.k.register(_c, "Chatbot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ExitIntentPopup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExitIntentPopup",
    ()=>ExitIntentPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.js [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
'use client';
;
;
;
;
;
function ExitIntentPopup() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "31a298532fdeee338ed2e96c038c2bfa7761dd6953bb27d2bf4aece091113d22") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "31a298532fdeee338ed2e96c038c2bfa7761dd6953bb27d2bf4aece091113d22";
    }
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasShown, setHasShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] !== hasShown) {
        t0 = ({
            "ExitIntentPopup[useEffect()]": ()=>{
                if (sessionStorage.getItem("exitIntentShown")) {
                    return;
                }
                let mouseY = 0;
                const handleMouseMove = {
                    "ExitIntentPopup[useEffect() > handleMouseMove]": (e)=>{
                        mouseY = e.clientY;
                    }
                }["ExitIntentPopup[useEffect() > handleMouseMove]"];
                const handleMouseLeave = {
                    "ExitIntentPopup[useEffect() > handleMouseLeave]": (e_0)=>{
                        if (e_0.clientY < 10 && !hasShown && mouseY < 100) {
                            setIsVisible(true);
                            setHasShown(true);
                            sessionStorage.setItem("exitIntentShown", "true");
                        }
                    }
                }["ExitIntentPopup[useEffect() > handleMouseLeave]"];
                if (window.matchMedia("(pointer: fine)").matches) {
                    document.addEventListener("mousemove", handleMouseMove);
                    document.addEventListener("mouseleave", handleMouseLeave);
                }
                return ()=>{
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseleave", handleMouseLeave);
                };
            }
        })["ExitIntentPopup[useEffect()]"];
        t1 = [
            hasShown
        ];
        $[1] = hasShown;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (!isVisible) {
        return null;
    }
    let t2;
    if ($[4] !== isVisible) {
        t2 = isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50",
                    onClick: {
                        "ExitIntentPopup[<motion.div>.onClick]": ()=>setIsVisible(false)
                    }["ExitIntentPopup[<motion.div>.onClick]"]
                }, void 0, false, {
                    fileName: "[project]/src/components/ExitIntentPopup.tsx",
                    lineNumber: 66,
                    columnNumber: 25
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.9,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.9,
                        y: 20
                    },
                    className: "fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-background border border-border rounded-3xl p-8 max-w-md w-full shadow-2xl pointer-events-auto relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "ExitIntentPopup[<button>.onClick]": (e_1)=>{
                                        e_1.stopPropagation();
                                        setIsVisible(false);
                                    }
                                }["ExitIntentPopup[<button>.onClick]"],
                                className: "absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors z-10",
                                "aria-label": "Sluiten",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-5 w-5 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                    lineNumber: 91,
                                    columnNumber: 165
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                lineNumber: 86,
                                columnNumber: 238
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-20 -right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                lineNumber: 91,
                                columnNumber: 221
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                lineNumber: 91,
                                columnNumber: 315
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                            className: "h-10 w-10 text-secondary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                            lineNumber: 91,
                                            columnNumber: 556
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                        lineNumber: 91,
                                        columnNumber: 454
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold mb-3",
                                        children: "Wacht! Nog een exclusieve aanbieding"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                        lineNumber: 91,
                                        columnNumber: 607
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground mb-6",
                                        children: [
                                            "Vraag nu een offerte aan en ontvang ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-secondary",
                                                children: "gratis advies"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                                lineNumber: 91,
                                                columnNumber: 766
                                            }, this),
                                            " over premies die u kunt aanvragen. Tot €5.000 aan subsidies mogelijk!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                        lineNumber: 91,
                                        columnNumber: 688
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                onClick: {
                                                    "ExitIntentPopup[<Link>.onClick]": (e_2)=>{
                                                        e_2.stopPropagation();
                                                        setIsVisible(false);
                                                    }
                                                }["ExitIntentPopup[<Link>.onClick]"],
                                                className: "w-full bg-secondary text-white py-4 rounded-xl font-bold hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2",
                                                children: [
                                                    "Vraag gratis offerte aan",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 225
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                                lineNumber: 91,
                                                columnNumber: 924
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: {
                                                    "ExitIntentPopup[<button>.onClick]": (e_3)=>{
                                                        e_3.stopPropagation();
                                                        setIsVisible(false);
                                                    }
                                                }["ExitIntentPopup[<button>.onClick]"],
                                                className: "w-full py-3 text-muted-foreground hover:text-foreground transition-colors text-sm",
                                                children: "Nee, ik mis liever de korting"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                                lineNumber: 96,
                                                columnNumber: 266
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                        lineNumber: 91,
                                        columnNumber: 897
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground mt-4",
                                        children: "⏰ Deze aanbieding is geldig bij aanvraag vandaag"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                        lineNumber: 101,
                                        columnNumber: 193
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                lineNumber: 91,
                                columnNumber: 411
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ExitIntentPopup.tsx",
                        lineNumber: 86,
                        columnNumber: 98
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ExitIntentPopup.tsx",
                    lineNumber: 74,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true);
        $[4] = isVisible;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/ExitIntentPopup.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_s(ExitIntentPopup, "NI7c37PWALmhX6DtqOwfZWSubpM=");
_c = ExitIntentPopup;
var _c;
__turbopack_context__.k.register(_c, "ExitIntentPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CookieConsent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CookieConsent",
    ()=>CookieConsent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cookie.js [app-client] (ecmascript) <export default as Cookie>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function CookieConsent() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "6301ac847b33e55b013047724a1ba6406d0222df06dd50679e8a417db7eedace") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6301ac847b33e55b013047724a1ba6406d0222df06dd50679e8a417db7eedace";
    }
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const broadcastConsent = _CookieConsentBroadcastConsent;
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "CookieConsent[useEffect()]": ()=>{
                const consent = localStorage.getItem("cookieConsent");
                if (!consent) {
                    const timer = setTimeout({
                        "CookieConsent[useEffect() > setTimeout()]": ()=>{
                            setIsVisible(true);
                        }
                    }["CookieConsent[useEffect() > setTimeout()]"], 1000);
                    return ()=>clearTimeout(timer);
                }
            }
        })["CookieConsent[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "CookieConsent[handleAccept]": ()=>{
                localStorage.setItem("cookieConsent", "accepted");
                broadcastConsent("accepted");
                setIsVisible(false);
            }
        })["CookieConsent[handleAccept]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleAccept = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "CookieConsent[handleDecline]": ()=>{
                localStorage.setItem("cookieConsent", "declined");
                broadcastConsent("declined");
                setIsVisible(false);
            }
        })["CookieConsent[handleDecline]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleDecline = t3;
    if (!isVisible) {
        return null;
    }
    let t4;
    if ($[5] !== isVisible) {
        t4 = isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 100
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: 100
            },
            className: "fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto bg-background border border-border rounded-2xl shadow-2xl p-6 sm:p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row items-start sm:items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__["Cookie"], {
                                className: "h-6 w-6 text-secondary"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CookieConsent.tsx",
                                lineNumber: 84,
                                columnNumber: 345
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CookieConsent.tsx",
                            lineNumber: 84,
                            columnNumber: 247
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-lg mb-1 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CookieConsent.tsx",
                                            lineNumber: 84,
                                            columnNumber: 483
                                        }, this),
                                        "Cookie instellingen"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CookieConsent.tsx",
                                    lineNumber: 84,
                                    columnNumber: 420
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                        'Wij gebruiken cookies om uw ervaring te verbeteren en websiteverkeer te analyseren. Door op "Accepteren" te klikken, gaat u akkoord met ons gebruik van cookies.',
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/privacy",
                                            className: "text-secondary hover:underline",
                                            children: "Lees meer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CookieConsent.tsx",
                                            lineNumber: 84,
                                            columnNumber: 747
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CookieConsent.tsx",
                                    lineNumber: 84,
                                    columnNumber: 537
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CookieConsent.tsx",
                            lineNumber: 84,
                            columnNumber: 396
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 w-full sm:w-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDecline,
                                    className: "flex-1 sm:flex-none px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
                                    children: "Weigeren"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CookieConsent.tsx",
                                    lineNumber: 84,
                                    columnNumber: 883
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAccept,
                                    className: "flex-1 sm:flex-none px-6 py-2 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-secondary/80 transition-colors",
                                    children: "Accepteren"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CookieConsent.tsx",
                                    lineNumber: 84,
                                    columnNumber: 1044
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CookieConsent.tsx",
                            lineNumber: 84,
                            columnNumber: 838
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CookieConsent.tsx",
                    lineNumber: 84,
                    columnNumber: 170
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CookieConsent.tsx",
                lineNumber: 84,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CookieConsent.tsx",
            lineNumber: 75,
            columnNumber: 23
        }, this);
        $[5] = isVisible;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/CookieConsent.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    return t5;
}
_s(CookieConsent, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = CookieConsent;
function _CookieConsentBroadcastConsent(value) {
    window.dispatchEvent(new CustomEvent("cookie-consent-change", {
        detail: value
    }));
}
var _c;
__turbopack_context__.k.register(_c, "CookieConsent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/StickyCTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StickyCTA",
    ()=>StickyCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/company.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoogleTagManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GoogleTagManager.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function StickyCTA() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDismissed, setIsDismissed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "StickyCTA.useState": ()=>{
            try {
                return ("TURBOPACK compile-time value", "object") !== 'undefined' && sessionStorage.getItem('stickyCTADismissed') === 'true';
            } catch  {
                return false;
            }
        }
    }["StickyCTA.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StickyCTA.useEffect": ()=>{
            if (isDismissed) {
                return;
            }
            // Show after scrolling down
            const handleScroll = {
                "StickyCTA.useEffect.handleScroll": ()=>{
                    if (window.scrollY > 300) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                }
            }["StickyCTA.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            handleScroll();
            return ({
                "StickyCTA.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["StickyCTA.useEffect"];
        }
    }["StickyCTA.useEffect"], [
        isDismissed
    ]);
    const handleDismiss = ()=>{
        setIsDismissed(true);
        sessionStorage.setItem('stickyCTADismissed', 'true');
    };
    if (isDismissed) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                y: 100,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1
            },
            exit: {
                y: 100,
                opacity: 0
            },
            className: "fixed bottom-0 left-0 right-0 z-40 sm:hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-linear-to-r from-secondary to-orange-600 p-3 shadow-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].phoneHref,
                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoogleTagManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gtmTrackPhone"])(),
                                    className: "flex-1 flex items-center justify-center gap-2 bg-white text-secondary font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StickyCTA.tsx",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: "Bel nu"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StickyCTA.tsx",
                                            lineNumber: 57,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StickyCTA.tsx",
                                    lineNumber: 55,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].whatsappHref,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoogleTagManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gtmTrackWhatsApp"])(),
                                    className: "flex-1 flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-bold py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StickyCTA.tsx",
                                            lineNumber: 60,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: "WhatsApp"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StickyCTA.tsx",
                                            lineNumber: 61,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StickyCTA.tsx",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StickyCTA.tsx",
                            lineNumber: 54,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleDismiss,
                            className: "p-2 text-white/80 hover:text-white transition-colors",
                            "aria-label": "Sluiten",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/StickyCTA.tsx",
                                lineNumber: 65,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/StickyCTA.tsx",
                            lineNumber: 64,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StickyCTA.tsx",
                    lineNumber: 53,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/StickyCTA.tsx",
                lineNumber: 52,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/StickyCTA.tsx",
            lineNumber: 42,
            columnNumber: 21
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/StickyCTA.tsx",
        lineNumber: 41,
        columnNumber: 10
    }, this);
}
_s(StickyCTA, "tz8NS9o7mzBzbHVmwQe1OUQdByA=");
_c = StickyCTA;
var _c;
__turbopack_context__.k.register(_c, "StickyCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_efa44b45._.js.map