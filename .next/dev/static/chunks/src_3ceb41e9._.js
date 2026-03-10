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
    phoneDisplay: "+32 489 96 00 01",
    phoneHref: "tel:+32489960001",
    whatsappHref: "https://wa.me/32489960001",
    email: "info@yannova.be",
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
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
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
const navigation = [
    {
        name: "Diensten",
        href: "/diensten",
        children: [
            {
                name: "Ramen & Deuren",
                href: "/diensten/ramen-deuren",
                description: "PVC & aluminium"
            },
            {
                name: "Gevelrenovatie",
                href: "/diensten/gevelrenovatie",
                description: "Isolatie + afwerking"
            },
            {
                name: "Isolatie",
                href: "/diensten/isolatie",
                description: "Dak, gevel en vloer"
            },
            {
                name: "Renovatie",
                href: "/diensten/renovatie",
                description: "Totaalrenovatie"
            }
        ]
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
    if ($[0] !== "8cfe3594b6551fb5257babf3cb0c48b98a6227217a9d05f127305d09c9bd2350") {
        for(let $i = 0; $i < 43; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8cfe3594b6551fb5257babf3cb0c48b98a6227217a9d05f127305d09c9bd2350";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [servicesOpen, setServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const servicesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    const t6 = scrolled ? "glass backdrop-blur-xl border-b border-white/10 py-3 shadow-elegant-lg" : "bg-transparent border-b border-transparent py-5";
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
            className: "flex lg:flex-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "group -m-1.5 p-1.5 text-2xl font-bold tracking-tight transition-all duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white group-hover:text-secondary transition-colors duration-300",
                        children: "Yannova"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 158,
                        columnNumber: 151
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-secondary group-hover:scale-125 inline-block transition-transform duration-300",
                        children: "."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 158,
                        columnNumber: 252
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 158,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 158,
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
            lineNumber: 175,
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
            lineNumber: 182,
            columnNumber: 28
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
            className: "h-6 w-6",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 182,
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
                lineNumber: 190,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 190,
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
                                    lineNumber: 203,
                                    columnNumber: 355
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full", pathname.startsWith(item.href) ? "w-full" : "")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 203,
                                    columnNumber: 460
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 201,
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
                                        "Navbar[navigation.map() > item.children.map()]": (child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: child.href,
                                                onClick: {
                                                    "Navbar[navigation.map() > item.children.map() > <Link>.onClick]": ()=>setServicesOpen(false)
                                                }["Navbar[navigation.map() > item.children.map() > <Link>.onClick]"],
                                                className: "block px-4 py-3 hover:bg-white/5 transition-colors",
                                                role: "menuitem",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium text-white",
                                                        children: child.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Navbar.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 166
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-400 mt-0.5",
                                                        children: child.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Navbar.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 232
                                                    }, this)
                                                ]
                                            }, child.name, true, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 215,
                                                columnNumber: 76
                                            }, this)
                                    }["Navbar[navigation.map() > item.children.map()]"])
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 214,
                                    columnNumber: 146
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 203,
                                columnNumber: 673
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 203,
                            columnNumber: 639
                        }, this)
                    ]
                }, item.name, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 201,
                    columnNumber: 59
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium transition-all duration-300 relative group", pathname === item.href ? "text-secondary" : "text-gray-300 hover:text-white"),
                    children: [
                        item.name,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full", pathname === item.href ? "w-full" : "")
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 218,
                            columnNumber: 324
                        }, this)
                    ]
                }, item.name, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 218,
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
            className: "hidden lg:flex lg:gap-x-8",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 228,
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
            className: "flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 236,
                    columnNumber: 134
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].phoneDisplay
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 236,
                    columnNumber: 163
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 236,
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
            className: "flex items-center gap-1.5 text-sm text-gray-300 hover:text-[#25D366] transition-colors",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 243,
                    columnNumber: 183
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hidden xl:inline",
                    children: "WhatsApp"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 243,
                    columnNumber: 220
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[29] = t19;
    } else {
        t19 = $[29];
    }
    let t20;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-3",
            children: [
                t18,
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/vraag-ai",
                    className: "flex items-center gap-1.5 text-sm font-medium text-white glass px-4 py-2.5 rounded-xl glass-hover shadow-elegant group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            className: "h-4 w-4 text-secondary group-hover:rotate-12 transition-transform duration-300"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 250,
                            columnNumber: 259
                        }, this),
                        "Vraag Yannova AI"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 250,
                    columnNumber: 105
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/contact",
                    className: "flex items-center gap-2 rounded-xl bg-linear-to-r from-secondary to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-elegant glow-hover transition-all duration-300 hover:scale-105",
                    children: "Gratis offerte"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 250,
                    columnNumber: 385
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[30] = t20;
    } else {
        t20 = $[30];
    }
    let t21;
    if ($[31] !== t15 || $[32] !== t17) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "container mx-auto flex items-center justify-between px-6 lg:px-8",
            "aria-label": "Hoofdmenu",
            children: [
                t11,
                t15,
                t17,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 257,
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
            className: "lg:hidden glass backdrop-blur-xl border-t border-white/10 overflow-hidden shadow-elegant-lg",
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
                                        lineNumber: 276,
                                        columnNumber: 90
                                    }, this),
                                    item_0.children.map({
                                        "Navbar[navigation.map() > item_0.children.map()]": (child_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: child_0.href,
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("block rounded-lg px-3 py-2.5 pl-6 text-base font-medium transition-colors", pathname === child_0.href ? "bg-secondary/10 text-secondary" : "text-gray-300 hover:bg-white/5 hover:text-white"),
                                                onClick: {
                                                    "Navbar[navigation.map() > item_0.children.map() > <Link>.onClick]": ()=>setMobileMenuOpen(false)
                                                }["Navbar[navigation.map() > item_0.children.map() > <Link>.onClick]"],
                                                children: child_0.name
                                            }, child_0.name, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 277,
                                                columnNumber: 78
                                            }, this)
                                    }["Navbar[navigation.map() > item_0.children.map()]"])
                                ]
                            }, item_0.name, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 276,
                                columnNumber: 67
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item_0.href,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("block rounded-lg px-3 py-3 text-base font-medium transition-colors", pathname === item_0.href ? "bg-secondary/10 text-secondary" : "text-gray-300 hover:bg-white/5 hover:text-white"),
                                onClick: {
                                    "Navbar[navigation.map() > <Link>.onClick]": ()=>setMobileMenuOpen(false)
                                }["Navbar[navigation.map() > <Link>.onClick]"],
                                children: item_0.name
                            }, item_0.name, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 280,
                                columnNumber: 77
                            }, this)
                    }["Navbar[navigation.map()]"]),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-4 mt-4 border-t border-white/10 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].phoneHref,
                                className: "flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 283,
                                        columnNumber: 207
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].phoneDisplay
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 283,
                                columnNumber: 102
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].whatsappHref,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-[#25D366]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 283,
                                        columnNumber: 416
                                    }, this),
                                    "WhatsApp"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 283,
                                columnNumber: 262
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 283,
                        columnNumber: 40
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/vraag-ai",
                        className: "mt-4 flex items-center justify-center gap-2 rounded-xl glass px-4 py-3.5 text-base font-medium text-white glass-hover shadow-elegant",
                        onClick: {
                            "Navbar[<Link>.onClick]": ()=>setMobileMenuOpen(false)
                        }["Navbar[<Link>.onClick]"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "h-4 w-4 text-secondary"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 285,
                                columnNumber: 38
                            }, this),
                            "Vraag Yannova AI"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 283,
                        columnNumber: 471
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
                        lineNumber: 285,
                        columnNumber: 108
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 275,
                columnNumber: 112
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 266,
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
            lineNumber: 296,
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
            lineNumber: 304,
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
_s(Navbar, "VeAOgFZQ1w4ucHF0qzJSgAu6nfw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
function _temp() {
    document.body.style.overflow = "unset";
}
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data:ec19cd [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLead",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60cc43acfd1a938f2ac2e8d82e7f191ab4e73ac12c":"createLead"},"src/lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60cc43acfd1a938f2ac2e8d82e7f191ab4e73ac12c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createLead");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJ0AvYXV0aCc7XG5pbXBvcnQgeyBBdXRoRXJyb3IgfSBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnO1xuaW1wb3J0IHsgcHV0IH0gZnJvbSAnQHZlcmNlbC9ibG9iJztcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IGdlbmVyYXRlVGV4dCB9IGZyb20gJ2FpJztcbmltcG9ydCB7IGdvb2dsZSB9IGZyb20gJ0BhaS1zZGsvZ29vZ2xlJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ0AvbGliL2xvZ2dlcic7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZShcbiAgcHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbikge1xuICB0cnkge1xuICAgIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldCgncGFzc3dvcmQnKSBhcyBzdHJpbmc7XG5cbiAgICBsb2dnZXIuZGVidWcoJ0F1dGhlbnRpY2F0ZSBhY3Rpb24gY2FsbGVkIGZvcjonLCBlbWFpbCk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywgeyBcbiAgICAgIGVtYWlsLCBcbiAgICAgIHBhc3N3b3JkLCBcbiAgICAgIHJlZGlyZWN0OiBmYWxzZSBcbiAgICB9KTtcbiAgICBcbiAgICBsb2dnZXIuZGVidWcoJ1NpZ25JbiByZXN1bHQ6JywgcmVzdWx0KTtcbiAgICBcbiAgICAvLyBJZiB3ZSBnZXQgaGVyZSB3aXRob3V0IGVycm9yLCByZWRpcmVjdCBtYW51YWxseVxuICAgIHJlZGlyZWN0KCcvYWRtaW4nKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dnZXIuZXJyb3IoJ0F1dGhlbnRpY2F0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICBcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgIGxvZ2dlci5kZWJ1ZygnQXV0aEVycm9yIHR5cGU6JywgZXJyb3IudHlwZSk7XG4gICAgICBzd2l0Y2ggKGVycm9yLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnQ3JlZGVudGlhbHNTaWduaW4nOlxuICAgICAgICAgIHJldHVybiAnT25nZWxkaWdlIGlubG9nZ2VnZXZlbnMuJztcbiAgICAgICAgY2FzZSAnQ2FsbGJhY2tSb3V0ZUVycm9yJzpcbiAgICAgICAgICByZXR1cm4gJ09uZ2VsZGlnZSBpbmxvZ2dlZ2V2ZW5zLic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgbG9nZ2VyLmVycm9yKCdVbmtub3duIGF1dGggZXJyb3IgdHlwZTonLCBlcnJvci50eXBlKTtcbiAgICAgICAgICByZXR1cm4gJ0VyIGlzIGlldHMgbWlzZ2VnYWFuLiBQcm9iZWVyIG9wbmlldXcuJztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gTmV4dEF1dGggdGhyb3dzIE5FWFRfUkVESVJFQ1QgZXJyb3Igb24gc3VjY2VzcyAtIHRoaXMgaXMgZXhwZWN0ZWRcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgaWYgKGVycm9yLm1lc3NhZ2U/LmluY2x1ZGVzKCdORVhUX1JFRElSRUNUJykpIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKCdSZWRpcmVjdCBlcnJvciAoZXhwZWN0ZWQpIC0gcmUtdGhyb3dpbmcnKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7IC8vIFJlLXRocm93IHRvIGFsbG93IHJlZGlyZWN0XG4gICAgICB9XG4gICAgICBsb2dnZXIuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZTonLCBlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuICdFciBpcyBpZXRzIG1pc2dlZ2Fhbi4gUHJvYmVlciBvcG5pZXV3Lic7XG4gIH1cbn1cblxuY29uc3QgUHJvamVjdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdGl0bGU6IHouc3RyaW5nKCkubWluKDMsIFwiVGl0ZWwgbW9ldCBtaW5pbWFhbCAzIHRla2VucyB6aWpuXCIpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5taW4oMTAsIFwiQmVzY2hyaWp2aW5nIG1vZXQgbWluaW1hYWwgMTAgdGVrZW5zIHppam5cIiksXG4gIGNhdGVnb3J5OiB6LnN0cmluZygpLm1pbigxLCBcIkNhdGVnb3JpZSBpcyB2ZXJwbGljaHRcIiksXG4gIGltYWdlOiB6Lmluc3RhbmNlb2YoRmlsZSkucmVmaW5lKChmaWxlKSA9PiBmaWxlLnNpemUgPiAwLCBcIkFmYmVlbGRpbmcgaXMgdmVycGxpY2h0XCIpLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByZXZTdGF0ZTogdW5rbm93biwgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIC8vIDEuIFZhbGlkYXRlIGZpZWxkc1xuICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBQcm9qZWN0U2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgdGl0bGU6IGZvcm1EYXRhLmdldCgndGl0bGUnKSxcbiAgICBkZXNjcmlwdGlvbjogZm9ybURhdGEuZ2V0KCdkZXNjcmlwdGlvbicpLFxuICAgIGNhdGVnb3J5OiBmb3JtRGF0YS5nZXQoJ2NhdGVnb3J5JyksXG4gICAgaW1hZ2U6IGZvcm1EYXRhLmdldCgnaW1hZ2UnKSxcbiAgfSk7XG5cbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICBtZXNzYWdlOiAnVnVsIGFsbGUgdmVsZGVuIGNvcnJlY3QgaW4uJyxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG4gIGxldCBpbWFnZVVybCA9ICcnO1xuXG4gIHRyeSB7XG4gICAgLy8gMi4gVXBsb2FkIGltYWdlIHRvIFZlcmNlbCBCbG9iXG4gICAgY29uc3QgYmxvYiA9IGF3YWl0IHB1dChpbWFnZS5uYW1lLCBpbWFnZSwge1xuICAgICAgYWNjZXNzOiAncHVibGljJyxcbiAgICB9KTtcbiAgICBpbWFnZVVybCA9IGJsb2IudXJsO1xuXG4gICAgLy8gMy4gU2F2ZSB0byBEYXRhYmFzZVxuICAgIGF3YWl0IHByaXNtYS5wcm9qZWN0LmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGltYWdlVXJsLFxuICAgICAgfSxcbiAgICB9KTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ2dlci5lcnJvcignRGF0YWJhc2UgRXJyb3InLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6ICdEYXRhYmFzZSBmb3V0OiBLb24gcHJvamVjdCBuaWV0IGFhbm1ha2VuLicsXG4gICAgfTtcbiAgfVxuXG4gIC8vIDQuIFJldmFsaWRhdGUgYW5kIFJlZGlyZWN0XG4gIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vcHJvamVjdHMnKTtcbiAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9qZWN0ZW4nKTsgLy8gQWxzbyB1cGRhdGUgdGhlIHB1YmxpYyBwYWdlXG4gIHJlZGlyZWN0KCcvYWRtaW4vcHJvamVjdHMnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIC8vIE9wdGlvbmFsOiBEZWxldGUgYmxvYiBpbWFnZSBoZXJlIGFzIHdlbGwgaWYgbmVlZGVkIChyZXF1aXJlcyBkZWwgZnJvbSBAdmVyY2VsL2Jsb2IpXG4gICAgYXdhaXQgcHJpc21hLnByb2plY3QuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9wcm9qZWN0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvamVjdGVuJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nZ2VyLmVycm9yKCdEYXRhYmFzZSBFcnJvcicsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0tvbiBwcm9qZWN0IG5pZXQgdmVyd2lqZGVyZW4uJyk7XG4gIH1cbn1cblxuLy8gLS0tIExlYWRzIC8gQ2hhdGJvdCBBY3Rpb25zIC0tLVxuXG5jb25zdCBMZWFkU2NoZW1hID0gei5vYmplY3Qoe1xuICBtZXNzYWdlOiB6LnN0cmluZygpLm1pbigxLCBcIkJlcmljaHQgbWFnIG5pZXQgbGVlZyB6aWpuXCIpLFxuICBlbWFpbDogei5zdHJpbmcoKS5lbWFpbChcIk9uZ2VsZGlnIGVtYWlsYWRyZXNcIikub3B0aW9uYWwoKS5vcih6LmxpdGVyYWwoJycpKSxcbiAgbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBzb3VyY2U6IHouc3RyaW5nKCkuZGVmYXVsdChcImNoYXRib3RcIiksXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUxlYWQocHJldlN0YXRlOiB1bmtub3duLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gTGVhZFNjaGVtYS5zYWZlUGFyc2Uoe1xuICAgIG1lc3NhZ2U6IGZvcm1EYXRhLmdldCgnbWVzc2FnZScpLFxuICAgIGVtYWlsOiBmb3JtRGF0YS5nZXQoJ2VtYWlsJyksXG4gICAgbmFtZTogZm9ybURhdGEuZ2V0KCduYW1lJyksXG4gICAgc291cmNlOiBmb3JtRGF0YS5nZXQoJ3NvdXJjZScpLFxuICB9KTtcblxuICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdWdWwgYXViIGVlbiBnZWxkaWcgYmVyaWNodCBlbiBlbWFpbCBpbi4nIH07XG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5sZWFkLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB2YWxpZGF0ZWRGaWVsZHMuZGF0YSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vbGVhZHMnKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnQmVyaWNodCB2ZXJzdHV1cmQhJyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ2dlci5lcnJvcignTGVhZCBFcnJvcicsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0VyIGdpbmcgaWV0cyBtaXMgYmlqIGhldCB2ZXJzdHVyZW4uJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYXJrTGVhZEFzUmVhZChpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLmxlYWQudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhOiB7IHJlYWQ6IHRydWUgfVxuICAgIH0pO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vbGVhZHMnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvZ2dlci5lcnJvcihcIkZhaWxlZCB0byBtYXJrIGFzIHJlYWRcIiwgZSk7XG4gIH1cbn1cblxuLy8gLS0tIFRlc3RpbW9uaWFscyBBY3Rpb25zIC0tLVxuXG5jb25zdCBUZXN0aW1vbmlhbFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgbmFtZTogei5zdHJpbmcoKS5taW4oMiwgXCJOYWFtIG1vZXQgbWluaW1hYWwgMiB0ZWtlbnMgemlqblwiKSxcbiAgY29tcGFueTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICByYXRpbmc6IHoubnVtYmVyKCkubWluKDEpLm1heCg1KSxcbiAgdGV4dDogei5zdHJpbmcoKS5taW4oMTAsIFwiVGVzdGltb25pYWwgbW9ldCBtaW5pbWFhbCAxMCB0ZWtlbnMgemlqblwiKSxcbiAgaW1hZ2VVcmw6IHouc3RyaW5nKCkudXJsKCkub3B0aW9uYWwoKS5vcih6LmxpdGVyYWwoJycpKSxcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGVzdGltb25pYWwocHJldlN0YXRlOiB1bmtub3duLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gVGVzdGltb25pYWxTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICBuYW1lOiBmb3JtRGF0YS5nZXQoJ25hbWUnKSxcbiAgICBjb21wYW55OiBmb3JtRGF0YS5nZXQoJ2NvbXBhbnknKSxcbiAgICByYXRpbmc6IE51bWJlcihmb3JtRGF0YS5nZXQoJ3JhdGluZycpKSxcbiAgICB0ZXh0OiBmb3JtRGF0YS5nZXQoJ3RleHQnKSxcbiAgICBpbWFnZVVybDogZm9ybURhdGEuZ2V0KCdpbWFnZVVybCcpLFxuICB9KTtcblxuICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yczogdmFsaWRhdGVkRmllbGRzLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgIG1lc3NhZ2U6ICdWdWwgYWxsZSB2ZWxkZW4gY29ycmVjdCBpbi4nLFxuICAgIH07XG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS50ZXN0aW1vbmlhbC5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICAuLi52YWxpZGF0ZWRGaWVsZHMuZGF0YSxcbiAgICAgICAgYXBwcm92ZWQ6IHRydWUsIC8vIEF1dG8tYXBwcm92ZSBhZG1pbiBjcmVhdGVkIHRlc3RpbW9uaWFsc1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vdGVzdGltb25pYWxzJyk7XG4gICAgcmVkaXJlY3QoJy9hZG1pbi90ZXN0aW1vbmlhbHMnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdUZXN0aW1vbmlhbCBFcnJvcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogJ0tvbiB0ZXN0aW1vbmlhbCBuaWV0IGFhbm1ha2VuLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBwcm92ZVRlc3RpbW9uaWFsKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEudGVzdGltb25pYWwudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhOiB7IGFwcHJvdmVkOiB0cnVlIH0sXG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi90ZXN0aW1vbmlhbHMnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBcHByb3ZlIEVycm9yOicsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG9nZ2xlRmVhdHVyZWRUZXN0aW1vbmlhbChpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGVzdGltb25pYWwgPSBhd2FpdCBwcmlzbWEudGVzdGltb25pYWwuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgc2VsZWN0OiB7IGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgfSk7XG5cbiAgICBhd2FpdCBwcmlzbWEudGVzdGltb25pYWwudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhOiB7IGZlYXR1cmVkOiAhdGVzdGltb25pYWw/LmZlYXR1cmVkIH0sXG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi90ZXN0aW1vbmlhbHMnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdUb2dnbGUgRmVhdHVyZWQgRXJyb3I6JywgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUZXN0aW1vbmlhbChpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnRlc3RpbW9uaWFsLmRlbGV0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgIH0pO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vdGVzdGltb25pYWxzJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRGVsZXRlIFRlc3RpbW9uaWFsIEVycm9yOicsIGVycm9yKTtcbiAgfVxufVxuXG4vLyAtLS0gTWVkaWEgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1lZGlhRmlsZShpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLm1lZGlhRmlsZS5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL21lZGlhJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRGVsZXRlIE1lZGlhIEVycm9yOicsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkTWVkaWFGaWxlKHByZXZTdGF0ZTogdW5rbm93biwgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ZpbGUnKSBhcyBGaWxlO1xuICBjb25zdCBmb2xkZXIgPSBmb3JtRGF0YS5nZXQoJ2ZvbGRlcicpIGFzIHN0cmluZyB8fCAndXBsb2Fkcyc7XG4gIGNvbnN0IGFsdCA9IGZvcm1EYXRhLmdldCgnYWx0JykgYXMgc3RyaW5nIHx8ICcnO1xuXG4gIGlmICghZmlsZSB8fCBmaWxlLnNpemUgPT09IDApIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1NlbGVjdGVlciBlZW4gYmVzdGFuZCBvbSB0ZSB1cGxvYWRlbi4nIH07XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBwdXQoZmlsZS5uYW1lLCBmaWxlLCB7XG4gICAgICBhY2Nlc3M6ICdwdWJsaWMnLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgcHJpc21hLm1lZGlhRmlsZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBmaWxlbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICB1cmw6IGJsb2IudXJsLFxuICAgICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICAgIG1pbWVUeXBlOiBmaWxlLnR5cGUsXG4gICAgICAgIGZvbGRlcixcbiAgICAgICAgYWx0LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vbWVkaWEnKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnQmVzdGFuZCBnZcO8cGxvYWQhJyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1VwbG9hZCBFcnJvcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdLb24gYmVzdGFuZCBuaWV0IHVwbG9hZGVuLicgfTtcbiAgfVxufVxuXG4vLyAtLS0gU2V0dGluZ3MgQWN0aW9ucyAoUHJpc21hKSAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNldHRpbmdzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICBjb25zdCBzZXR0aW5ncyA9IFtcbiAgICB7IGtleTogJ3NpdGVfbmFtZScsIGNhdGVnb3J5OiAnZ2VuZXJhbCcgfSxcbiAgICB7IGtleTogJ3NpdGVfZGVzY3JpcHRpb24nLCBjYXRlZ29yeTogJ2dlbmVyYWwnIH0sXG4gICAgeyBrZXk6ICdzaXRlX3VybCcsIGNhdGVnb3J5OiAnZ2VuZXJhbCcgfSxcbiAgICB7IGtleTogJ2NvbnRhY3RfZW1haWwnLCBjYXRlZ29yeTogJ2NvbnRhY3QnIH0sXG4gICAgeyBrZXk6ICdjb250YWN0X3Bob25lJywgY2F0ZWdvcnk6ICdjb250YWN0JyB9LFxuICAgIHsga2V5OiAnY29udGFjdF9hZGRyZXNzJywgY2F0ZWdvcnk6ICdjb250YWN0JyB9LFxuICAgIHsga2V5OiAnc29jaWFsX2ZhY2Vib29rJywgY2F0ZWdvcnk6ICdzb2NpYWwnIH0sXG4gICAgeyBrZXk6ICdzb2NpYWxfaW5zdGFncmFtJywgY2F0ZWdvcnk6ICdzb2NpYWwnIH0sXG4gICAgeyBrZXk6ICdzb2NpYWxfbGlua2VkaW4nLCBjYXRlZ29yeTogJ3NvY2lhbCcgfSxcbiAgICB7IGtleTogJ3NvY2lhbF90d2l0dGVyJywgY2F0ZWdvcnk6ICdzb2NpYWwnIH0sXG4gICAgeyBrZXk6ICdzZW9fdGl0bGUnLCBjYXRlZ29yeTogJ3NlbycgfSxcbiAgICB7IGtleTogJ3Nlb19kZXNjcmlwdGlvbicsIGNhdGVnb3J5OiAnc2VvJyB9LFxuICAgIHsga2V5OiAnc2VvX2tleXdvcmRzJywgY2F0ZWdvcnk6ICdzZW8nIH0sXG4gIF07XG5cbiAgdHJ5IHtcbiAgICBmb3IgKGNvbnN0IHNldHRpbmcgb2Ygc2V0dGluZ3MpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gKGZvcm1EYXRhLmdldChzZXR0aW5nLmtleSkgYXMgc3RyaW5nKSB8fCAnJztcblxuICAgICAgYXdhaXQgcHJpc21hLnNpdGVTZXR0aW5nLnVwc2VydCh7XG4gICAgICAgIHdoZXJlOiB7IGtleTogc2V0dGluZy5rZXkgfSxcbiAgICAgICAgdXBkYXRlOiB7IHZhbHVlLCBjYXRlZ29yeTogc2V0dGluZy5jYXRlZ29yeSB9LFxuICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICBrZXk6IHNldHRpbmcua2V5LFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIGNhdGVnb3J5OiBzZXR0aW5nLmNhdGVnb3J5LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9zZXR0aW5ncycpO1xuICAgIHJlZGlyZWN0KCcvYWRtaW4vc2V0dGluZ3MnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdTZXR0aW5ncyBFcnJvcjonLCBlcnJvcik7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdLb24gaW5zdGVsbGluZ2VuIG5pZXQgb3BzbGFhbi4nKTtcbiAgfVxufVxuXG4vLyAtLS0gVXNlciBNYW5hZ2VtZW50IEFjdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b2dnbGVVc2VyU3RhdHVzKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgc2VsZWN0OiB7IGFjdGl2ZTogdHJ1ZSB9LFxuICAgIH0pO1xuXG4gICAgYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhOiB7IGFjdGl2ZTogIXVzZXI/LmFjdGl2ZSB9LFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi91c2VycycpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1RvZ2dsZSBVc2VyIFN0YXR1cyBFcnJvcjonLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIocHJldlN0YXRlOiB1bmtub3duLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoJ2VtYWlsJykgYXMgc3RyaW5nO1xuICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldCgncGFzc3dvcmQnKSBhcyBzdHJpbmc7XG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoJ25hbWUnKSBhcyBzdHJpbmc7XG4gIGxldCByb2xlID0gZm9ybURhdGEuZ2V0KCdyb2xlJykgYXMgc3RyaW5nO1xuXG4gIGlmICghcm9sZSkge1xuICAgIC8vIERlZmF1bHQgdG8gJ3VzZXInLCB1bmxlc3MgaXQncyB0aGUgdmVyeSBmaXJzdCB1c2VyXG4gICAgY29uc3QgdXNlckNvdW50ID0gYXdhaXQgcHJpc21hLnVzZXIuY291bnQoKTtcbiAgICByb2xlID0gdXNlckNvdW50ID09PSAwID8gJ2FkbWluJyA6ICd1c2VyJztcbiAgfVxuXG4gIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdFbWFpbCBlbiB3YWNodHdvb3JkIHppam4gdmVycGxpY2h0LicgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG4gICAgYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgcm9sZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3VzZXJzJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignQ3JlYXRlIFVzZXIgRXJyb3I6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnS29uIGdlYnJ1aWtlciBuaWV0IGFhbm1ha2VuLicgfTtcbiAgfVxuXG4gIC8vIFJlZGlyZWN0IG91dHNpZGUgdHJ5LWNhdGNoIHRvIGF2b2lkIGRpZ2VzdCBlcnJvclxuICByZWRpcmVjdCgnL2FkbWluL3VzZXJzJyk7XG59XG5cbi8vIC0tLSBBbmFseXRpY3MgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYWNrUGFnZVZpZXcocGF0aDogc3RyaW5nLCByZWZlcnJlcj86IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5wYWdlVmlldy5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBwYXRoLFxuICAgICAgICByZWZlcnJlcixcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignVHJhY2sgUGFnZSBWaWV3IEVycm9yOicsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5jcmVtZW50UHJvamVjdFZpZXdzKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEucHJvamVjdC51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBpbmNyZW1lbnQ6IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0luY3JlbWVudCBWaWV3cyBFcnJvcjonLCBlcnJvcik7XG4gIH1cbn1cblxuLy8gLS0tIFNFTyBBY3Rpb25zIC0tLVxuXG5jb25zdCBTZW9QYWdlU2NoZW1hID0gei5vYmplY3Qoe1xuICBwYXRoOiB6LnN0cmluZygpLm1pbigxLCBcIlBhZCBpcyB2ZXJwbGljaHRcIiksXG4gIHRpdGxlOiB6LnN0cmluZygpLm1pbigxLCBcIlRpdGVsIGlzIHZlcnBsaWNodFwiKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkubWluKDEsIFwiQmVzY2hyaWp2aW5nIGlzIHZlcnBsaWNodFwiKSxcbiAga2V5d29yZHM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb2dJbWFnZTogei5zdHJpbmcoKS51cmwoKS5vcHRpb25hbCgpLm9yKHoubGl0ZXJhbCgnJykpLFxuICBvZ1RpdGxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG9nRGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY2Fub25pY2FsVXJsOiB6LnN0cmluZygpLnVybCgpLm9wdGlvbmFsKCkub3Ioei5saXRlcmFsKCcnKSksXG4gIGgxOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG5vaW5kZXg6IHouYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpLFxuICBub2ZvbGxvdzogei5ib29sZWFuKCkuZGVmYXVsdChmYWxzZSksXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVTZW9QYWdlKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBTZW9QYWdlU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgcGF0aDogZm9ybURhdGEuZ2V0KCdwYXRoJyksXG4gICAgdGl0bGU6IGZvcm1EYXRhLmdldCgndGl0bGUnKSxcbiAgICBkZXNjcmlwdGlvbjogZm9ybURhdGEuZ2V0KCdkZXNjcmlwdGlvbicpLFxuICAgIGtleXdvcmRzOiBmb3JtRGF0YS5nZXQoJ2tleXdvcmRzJyksXG4gICAgb2dJbWFnZTogZm9ybURhdGEuZ2V0KCdvZ0ltYWdlJyksXG4gICAgb2dUaXRsZTogZm9ybURhdGEuZ2V0KCdvZ1RpdGxlJyksXG4gICAgb2dEZXNjcmlwdGlvbjogZm9ybURhdGEuZ2V0KCdvZ0Rlc2NyaXB0aW9uJyksXG4gICAgY2Fub25pY2FsVXJsOiBmb3JtRGF0YS5nZXQoJ2Nhbm9uaWNhbFVybCcpLFxuICAgIGgxOiBmb3JtRGF0YS5nZXQoJ2gxJyksXG4gICAgbm9pbmRleDogZm9ybURhdGEuZ2V0KCdub2luZGV4JykgPT09ICdvbicsXG4gICAgbm9mb2xsb3c6IGZvcm1EYXRhLmdldCgnbm9mb2xsb3cnKSA9PT0gJ29uJyxcbiAgfSk7XG5cbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICBtZXNzYWdlOiAnVnVsIGFsbGUgdmVycGxpY2h0ZSB2ZWxkZW4gY29ycmVjdCBpbi4nLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBkYXRhID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuc2VvUGFnZS51cHNlcnQoe1xuICAgICAgd2hlcmU6IHsgcGF0aDogZGF0YS5wYXRoIH0sXG4gICAgICB1cGRhdGU6IGRhdGEsXG4gICAgICBjcmVhdGU6IGRhdGEsXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3NlbycpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdTRU8gcGFnaW5hIG9wZ2VzbGFnZW4hJyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1NhdmUgU0VPIFBhZ2UgRXJyb3I6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6ICdLb24gU0VPIHBhZ2luYSBuaWV0IG9wc2xhYW4uJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTZW9QYWdlKHBhdGg6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5zZW9QYWdlLmRlbGV0ZSh7XG4gICAgICB3aGVyZTogeyBwYXRoIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3NlbycpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdTRU8gcGFnaW5hIHZlcndpamRlcmQhJyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0RlbGV0ZSBTRU8gUGFnZSBFcnJvcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogJ0tvbiBTRU8gcGFnaW5hIG5pZXQgdmVyd2lqZGVyZW4uJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW5TZW9BdWRpdCgpIHtcbiAgY29uc3QgaXNzdWVzOiBBcnJheTx7XG4gICAgcGF0aDogc3RyaW5nO1xuICAgIGlzc3VlOiBzdHJpbmc7XG4gICAgc2V2ZXJpdHk6IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gIH0+ID0gW107XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzZW9QYWdlcyA9IGF3YWl0IHByaXNtYS5zZW9QYWdlLmZpbmRNYW55KCk7XG5cbiAgICAvLyBDaGVjayBhbGwgU0VPIHBhZ2VzIGZvciBpc3N1ZXNcbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2Ygc2VvUGFnZXMpIHtcbiAgICAgIGlmICghcGFnZS50aXRsZSB8fCBwYWdlLnRpdGxlLmxlbmd0aCA8IDEwKSB7XG4gICAgICAgIGlzc3Vlcy5wdXNoKHtcbiAgICAgICAgICBwYXRoOiBwYWdlLnBhdGgsXG4gICAgICAgICAgaXNzdWU6ICdzaG9ydF90aXRsZScsXG4gICAgICAgICAgc2V2ZXJpdHk6ICd3YXJuaW5nJyxcbiAgICAgICAgICBtZXNzYWdlOiAnTWV0YSB0aXRlbCBpcyB0ZSBrb3J0IChtaW5pbWFhbCAxMCB0ZWtlbnMgYWFuYmV2b2xlbiknLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChwYWdlLnRpdGxlICYmIHBhZ2UudGl0bGUubGVuZ3RoID4gNjApIHtcbiAgICAgICAgaXNzdWVzLnB1c2goe1xuICAgICAgICAgIHBhdGg6IHBhZ2UucGF0aCxcbiAgICAgICAgICBpc3N1ZTogJ2xvbmdfdGl0bGUnLFxuICAgICAgICAgIHNldmVyaXR5OiAnd2FybmluZycsXG4gICAgICAgICAgbWVzc2FnZTogJ01ldGEgdGl0ZWwgaXMgdGUgbGFuZyAobWF4aW1hYWwgNjAgdGVrZW5zIGFhbmJldm9sZW4pJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoIXBhZ2UuZGVzY3JpcHRpb24gfHwgcGFnZS5kZXNjcmlwdGlvbi5sZW5ndGggPCA1MCkge1xuICAgICAgICBpc3N1ZXMucHVzaCh7XG4gICAgICAgICAgcGF0aDogcGFnZS5wYXRoLFxuICAgICAgICAgIGlzc3VlOiAnc2hvcnRfZGVzY3JpcHRpb24nLFxuICAgICAgICAgIHNldmVyaXR5OiAnd2FybmluZycsXG4gICAgICAgICAgbWVzc2FnZTogJ01ldGEgYmVzY2hyaWp2aW5nIGlzIHRlIGtvcnQgKG1pbmltYWFsIDUwIHRla2VucyBhYW5iZXZvbGVuKScsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHBhZ2UuZGVzY3JpcHRpb24gJiYgcGFnZS5kZXNjcmlwdGlvbi5sZW5ndGggPiAxNjApIHtcbiAgICAgICAgaXNzdWVzLnB1c2goe1xuICAgICAgICAgIHBhdGg6IHBhZ2UucGF0aCxcbiAgICAgICAgICBpc3N1ZTogJ2xvbmdfZGVzY3JpcHRpb24nLFxuICAgICAgICAgIHNldmVyaXR5OiAnd2FybmluZycsXG4gICAgICAgICAgbWVzc2FnZTogJ01ldGEgYmVzY2hyaWp2aW5nIGlzIHRlIGxhbmcgKG1heGltYWFsIDE2MCB0ZWtlbnMgYWFuYmV2b2xlbiknLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICghcGFnZS5oMSkge1xuICAgICAgICBpc3N1ZXMucHVzaCh7XG4gICAgICAgICAgcGF0aDogcGFnZS5wYXRoLFxuICAgICAgICAgIGlzc3VlOiAnbWlzc2luZ19oMScsXG4gICAgICAgICAgc2V2ZXJpdHk6ICdlcnJvcicsXG4gICAgICAgICAgbWVzc2FnZTogJ1BhZ2luYSBoZWVmdCBnZWVuIEgxIHRhZycsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNhdmUgYXVkaXQgcmVzdWx0c1xuICAgIGF3YWl0IHByaXNtYS5zZW9BdWRpdC5kZWxldGVNYW55KHt9KTtcbiAgICBpZiAoaXNzdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGF3YWl0IHByaXNtYS5zZW9BdWRpdC5jcmVhdGVNYW55KHtcbiAgICAgICAgZGF0YTogaXNzdWVzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgaXNzdWVzLCBtZXNzYWdlOiBgU0VPIGF1ZGl0IHZvbHRvb2lkLiAke2lzc3Vlcy5sZW5ndGh9IGlzc3VlcyBnZXZvbmRlbi5gIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignU0VPIEF1ZGl0IEVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiAnS29uIFNFTyBhdWRpdCBuaWV0IHVpdHZvZXJlbi4nIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpeFNlb0lzc3VlKGlzc3VlSWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5zZW9BdWRpdC51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGlzc3VlSWQgfSxcbiAgICAgIGRhdGE6IHsgZml4ZWQ6IHRydWUsIGZpeGVkQXQ6IG5ldyBEYXRlKCkgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vc2VvJyk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ0lzc3VlIGdlbWFya2VlcmQgYWxzIG9wZ2Vsb3N0IScgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGaXggU0VPIElzc3VlIEVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiAnS29uIGlzc3VlIG5pZXQgbWFya2VyZW4gYWxzIG9wZ2Vsb3N0LicgfTtcbiAgfVxufVxuXG4vLyAtLS0gQUkgU0VPIEdlbmVyYXRpb24gLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUFpU2VvKHByZXZTdGF0ZTogdW5rbm93biwgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIGNvbnN0IHBhdGggPSBmb3JtRGF0YS5nZXQoJ3BhdGgnKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHBhZ2VOYW1lID0gZm9ybURhdGEuZ2V0KCdwYWdlTmFtZScpIGFzIHN0cmluZztcbiAgY29uc3QgY29udGVudCA9IGZvcm1EYXRhLmdldCgnY29udGVudCcpIGFzIHN0cmluZyB8fCAnJztcblxuICBpZiAoIXBhdGggfHwgIXBhZ2VOYW1lKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdQYXRoIGFuZCBwYWdlIG5hbWUgYXJlIHJlcXVpcmVkJyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IHRleHQgfSA9IGF3YWl0IGdlbmVyYXRlVGV4dCh7XG4gICAgICBtb2RlbDogZ29vZ2xlKCdnZW1pbmktMi4wLWZsYXNoLTAwMScpLFxuICAgICAgcHJvbXB0OiBgR2VuZXJlZXIgU0VPIG1ldGFkYXRhIHZvb3IgZWVuIHJlbm92YXRpZWJlZHJpamYgd2Vic2l0ZSBwYWdpbmEuXG5cblBhZ2luYTogJHtwYWdlTmFtZX1cblVSTDogJHtwYXRofVxuJHtjb250ZW50ID8gYFBhZ2luYSBpbmhvdWQ6ICR7Y29udGVudH1gIDogJyd9XG5cbkdlbmVyZWVyIGVlbiBKU09OIG9iamVjdCBtZXQgZGV6ZSB2ZWxkZW4gKGluIGhldCBOZWRlcmxhbmRzKTpcbi0gdGl0bGU6IE1ldGEgdGl0ZWwgKDUwLTYwIHRla2VucywgYWFudHJla2tlbGlqayB2b29yIGtsYW50ZW4pXG4tIGRlc2NyaXB0aW9uOiBNZXRhIGJlc2NocmlqdmluZyAoMTUwLTE2MCB0ZWtlbnMsIG1ldCBjYWxsLXRvLWFjdGlvbilcbi0ga2V5d29yZHM6IDUtOCByZWxldmFudGUga2V5d29yZHMgKGtvbW1hIGdlc2NoZWlkZW4pXG4tIGgxOiBIMSBoZWFkaW5nICgxIHppbiwgbWF4IDEwIHdvb3JkZW4pXG4tIG9nVGl0bGU6IFNvY2lhbCBtZWRpYSB0aXRlbCAobWF4IDQwIHRla2Vucylcbi0gb2dEZXNjcmlwdGlvbjogU29jaWFsIG1lZGlhIGJlc2NocmlqdmluZyAobWF4IDEwMCB0ZWtlbnMpXG5cbkdlZWYgQUxMRUVOIGhldCBKU09OIG9iamVjdCB0ZXJ1ZywgZ2VlbiBhbmRlcmUgdGVrc3QuYCxcbiAgICB9KTtcblxuICAgIC8vIEV4dHJhY3QgSlNPTiBmcm9tIHJlc3BvbnNlXG4gICAgY29uc3QganNvbk1hdGNoID0gdGV4dC5tYXRjaCgvXFx7W1xcc1xcU10qXFx9Lyk7XG4gICAgaWYgKCFqc29uTWF0Y2gpIHtcbiAgICAgIHJldHVybiB7IGVycm9yOiAnQUkgcmVzcG9uc2UgcGFyc2luZyBmYWlsZWQnIH07XG4gICAgfVxuXG4gICAgY29uc3Qgc2VvRGF0YSA9IEpTT04ucGFyc2UoanNvbk1hdGNoWzBdKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgZGF0YTogc2VvRGF0YSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0FJIFNFTyBFcnJvcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdBSSBnZW5lcmF0aW9uIGZhaWxlZCcgfTtcbiAgfVxufVxuXG4vLyAtLS0gTWVkaWEgVXBsb2FkIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU1lZGlhRmlsZXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZmlsZW5hbWUgPSBmb3JtRGF0YS5nZXQoJ2ZpbGVuYW1lJykgYXMgc3RyaW5nO1xuICAgIGNvbnN0IG1pbWVUeXBlID0gZm9ybURhdGEuZ2V0KCdtaW1lVHlwZScpIGFzIHN0cmluZztcbiAgICBjb25zdCBzaXplID0gcGFyc2VJbnQoZm9ybURhdGEuZ2V0KCdzaXplJykgYXMgc3RyaW5nKTtcbiAgICBjb25zdCBmaWxlRGF0YSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIHN0cmluZztcblxuICAgIGlmICghZmlsZW5hbWUgfHwgIWZpbGVEYXRhKSB7XG4gICAgICByZXR1cm4geyBlcnJvcjogJ0Jlc3RhbmQgaXMgdmVycGxpY2h0JyB9O1xuICAgIH1cblxuICAgIC8vIFVwbG9hZCB0byBWZXJjZWwgQmxvYiAob2YgYW5kZXJlIHN0b3JhZ2UpXG4gICAgY29uc3QgYmxvYiA9IGF3YWl0IHB1dChmaWxlbmFtZSwgQnVmZmVyLmZyb20oZmlsZURhdGEuc3BsaXQoJywnKVsxXSwgJ2Jhc2U2NCcpLCB7XG4gICAgICBhY2Nlc3M6ICdwdWJsaWMnLFxuICAgICAgY29udGVudFR5cGU6IG1pbWVUeXBlLFxuICAgIH0pO1xuXG4gICAgLy8gU2F2ZSB0byBkYXRhYmFzZVxuICAgIGF3YWl0IHByaXNtYS5tZWRpYUZpbGUuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZmlsZW5hbWUsXG4gICAgICAgIHVybDogYmxvYi51cmwsXG4gICAgICAgIHNpemUsXG4gICAgICAgIG1pbWVUeXBlLFxuICAgICAgICBmb2xkZXI6ICd1cGxvYWRzJyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL21lZGlhJyk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXJsOiBibG9iLnVybCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ01lZGlhIFVwbG9hZCBFcnJvcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdVcGxvYWQgbWlzbHVrdCcgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpUkErSXNCLHVMQUFBIn0=
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$ec19cd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:ec19cd [app-client] (ecmascript) <text/javascript>");
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
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { messages, input, handleInputChange, handleSubmit, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])();
    // Lead form state
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
                    const timer = setTimeout({
                        "Chatbot.useEffect.timer": ()=>{
                            if (step === 'chat') {
                            // Don't auto-switch, but we could show a suggestion
                            }
                        }
                    }["Chatbot.useEffect.timer"], 2000);
                    return ({
                        "Chatbot.useEffect": ()=>clearTimeout(timer)
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$ec19cd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createLead"])(null, formData);
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
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-white font-bold",
                                children: "Gratis offerte aanvragen"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm mt-1",
                                children: "Vul uw gegevens in en we nemen binnen 24 uur contact op."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Chatbot.tsx",
                        lineNumber: 88,
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
                                        lineNumber: 102,
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
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-gray-400 block mb-1",
                                        children: "E-mail"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Chatbot.tsx",
                                        lineNumber: 106,
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
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-gray-400 block mb-1",
                                        children: "Telefoon"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Chatbot.tsx",
                                        lineNumber: 110,
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
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            submitError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-red-400 bg-red-500/10 p-2 rounded",
                                children: submitError
                            }, void 0, false, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 114,
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
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: isSubmitting,
                                        className: "flex-1 bg-secondary text-white py-2 rounded-lg text-sm font-semibold hover:bg-secondary/80 transition-colors disabled:opacity-50",
                                        children: isSubmitting ? 'Versturen...' : 'Verstuur'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Chatbot.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Chatbot.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Chatbot.tsx",
                lineNumber: 87,
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
                            lineNumber: 132,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Chatbot.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-bold text-lg mb-2",
                        children: "Bedankt!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Chatbot.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-sm",
                        children: "We hebben uw aanvraag ontvangen. U hoort binnen 24 uur van ons."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Chatbot.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Chatbot.tsx",
                lineNumber: 130,
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
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "Hallo! Ik ben de Yannova assistent. Hoe kan ik u vandaag helpen met uw bouwproject?"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Chatbot.tsx",
                            lineNumber: 143,
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
                                                lineNumber: 149,
                                                columnNumber: 40
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                className: "h-3 w-3 text-secondary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Chatbot.tsx",
                                                lineNumber: 149,
                                                columnNumber: 71
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold uppercase tracking-wider opacity-50",
                                                children: m_0.role === "user" ? "U" : "Yannova"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Chatbot.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Chatbot.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    m_0.content
                                ]
                            }, m_0.id, true, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 147,
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
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-bold uppercase tracking-wider opacity-50",
                                            children: "Yannova"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Chatbot.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-4 w-4 animate-spin opacity-50"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Chatbot.tsx",
                            lineNumber: 156,
                            columnNumber: 25
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg bg-red-500/10 p-3 text-xs text-red-400 border border-red-500/20",
                            children: "Er is een fout opgetreden. Probeer het later opnieuw."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Chatbot.tsx",
                            lineNumber: 163,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Chatbot.tsx",
                    lineNumber: 142,
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
                                lineNumber: 171,
                                columnNumber: 15
                            }, this),
                            "Vraag gratis offerte aan"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Chatbot.tsx",
                        lineNumber: 170,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Chatbot.tsx",
                    lineNumber: 169,
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
                                lineNumber: 179,
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
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Chatbot.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Chatbot.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white shadow-2xl transition-transform hover:scale-110 active:scale-95",
                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/src/components/Chatbot.tsx",
                    lineNumber: 190,
                    columnNumber: 19
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/src/components/Chatbot.tsx",
                    lineNumber: 190,
                    columnNumber: 47
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Chatbot.tsx",
                lineNumber: 189,
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
                    className: "fixed bottom-24 right-6 z-50 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-background shadow-2xl sm:w-[400px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between bg-secondary p-4 text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-8 w-8 items-center justify-center rounded-full bg-white/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Chatbot.tsx",
                                                lineNumber: 211,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Chatbot.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-bold",
                                                    children: "Kimberly"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Chatbot.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] opacity-80",
                                                    children: "Yannova Assistent"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Chatbot.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Chatbot.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 209,
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
                                        lineNumber: 222,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 218,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Chatbot.tsx",
                            lineNumber: 208,
                            columnNumber: 13
                        }, this),
                        renderChatContent()
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Chatbot.tsx",
                    lineNumber: 194,
                    columnNumber: 20
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Chatbot.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Chatbot, "IUuwsfoMuHymMiyJJphblZggYhE=", false, function() {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.js [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
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
function ExitIntentPopup() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "537802679736734fec3085a6802ce77c4b7608700b004427082e11e2eaadc7a6") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "537802679736734fec3085a6802ce77c4b7608700b004427082e11e2eaadc7a6";
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
                    lineNumber: 65,
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
                                    "ExitIntentPopup[<button>.onClick]": ()=>setIsVisible(false)
                                }["ExitIntentPopup[<button>.onClick]"],
                                className: "absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-5 w-5 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                    lineNumber: 87,
                                    columnNumber: 139
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                lineNumber: 85,
                                columnNumber: 238
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-20 -right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                lineNumber: 87,
                                columnNumber: 195
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                lineNumber: 87,
                                columnNumber: 289
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
                                            lineNumber: 87,
                                            columnNumber: 530
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                        lineNumber: 87,
                                        columnNumber: 428
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold mb-3",
                                        children: "Wacht! Nog een exclusieve aanbieding"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                        lineNumber: 87,
                                        columnNumber: 581
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
                                                lineNumber: 87,
                                                columnNumber: 740
                                            }, this),
                                            " over premies die u kunt aanvragen. Tot €5.000 aan subsidies mogelijk!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                        lineNumber: 87,
                                        columnNumber: 662
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                onClick: {
                                                    "ExitIntentPopup[<Link>.onClick]": ()=>setIsVisible(false)
                                                }["ExitIntentPopup[<Link>.onClick]"],
                                                className: "w-full bg-secondary text-white py-4 rounded-xl font-bold hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2",
                                                children: [
                                                    "Vraag gratis offerte aan",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 225
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                                lineNumber: 87,
                                                columnNumber: 898
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: {
                                                    "ExitIntentPopup[<button>.onClick]": ()=>setIsVisible(false)
                                                }["ExitIntentPopup[<button>.onClick]"],
                                                className: "w-full py-3 text-muted-foreground hover:text-foreground transition-colors text-sm",
                                                children: "Nee, ik mis liever de korting"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                                lineNumber: 89,
                                                columnNumber: 266
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                        lineNumber: 87,
                                        columnNumber: 871
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground mt-4",
                                        children: "⏰ Deze aanbieding is geldig bij aanvraag vandaag"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                        lineNumber: 91,
                                        columnNumber: 193
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ExitIntentPopup.tsx",
                                lineNumber: 87,
                                columnNumber: 385
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ExitIntentPopup.tsx",
                        lineNumber: 85,
                        columnNumber: 98
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ExitIntentPopup.tsx",
                    lineNumber: 73,
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
            lineNumber: 99,
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
    if ($[0] !== "7603192e4d0ed7e9f1138c8d27760b11a3a54c9922a200ede9d3c5209e9a4eae") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7603192e4d0ed7e9f1138c8d27760b11a3a54c9922a200ede9d3c5209e9a4eae";
    }
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
                                lineNumber: 81,
                                columnNumber: 345
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CookieConsent.tsx",
                            lineNumber: 81,
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
                                            lineNumber: 81,
                                            columnNumber: 483
                                        }, this),
                                        "Cookie instellingen"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CookieConsent.tsx",
                                    lineNumber: 81,
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
                                            lineNumber: 81,
                                            columnNumber: 747
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CookieConsent.tsx",
                                    lineNumber: 81,
                                    columnNumber: 537
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CookieConsent.tsx",
                            lineNumber: 81,
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
                                    lineNumber: 81,
                                    columnNumber: 883
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAccept,
                                    className: "flex-1 sm:flex-none px-6 py-2 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-secondary/80 transition-colors",
                                    children: "Accepteren"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CookieConsent.tsx",
                                    lineNumber: 81,
                                    columnNumber: 1044
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CookieConsent.tsx",
                            lineNumber: 81,
                            columnNumber: 838
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CookieConsent.tsx",
                    lineNumber: 81,
                    columnNumber: 170
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CookieConsent.tsx",
                lineNumber: 81,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CookieConsent.tsx",
            lineNumber: 72,
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
            lineNumber: 89,
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
var _c;
__turbopack_context__.k.register(_c, "CookieConsent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Analytics.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Analytics",
    ()=>Analytics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-client] (ecmascript)");
'use client';
;
;
;
function Analytics() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "77cec69c5c34b4885eb21209aaa54b19d03df0ef1403f66affeb420129e464cb") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "77cec69c5c34b4885eb21209aaa54b19d03df0ef1403f66affeb420129e464cb";
    }
    const gaId = ("TURBOPACK compile-time value", "G-Z71ZC4TEY2");
    const googleAdsId = ("TURBOPACK compile-time value", "AW-17673401673");
    const clarityId = ("TURBOPACK compile-time value", "vsu0sqq5xj");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                gaId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
                            strategy: "afterInteractive"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Analytics.tsx",
                            lineNumber: 21,
                            columnNumber: 23
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            id: "google-analytics",
                            strategy: "afterInteractive",
                            children: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `
                        }, void 0, false, {
                            fileName: "[project]/src/components/Analytics.tsx",
                            lineNumber: 21,
                            columnNumber: 121
                        }, this)
                    ]
                }, void 0, true),
                googleAdsId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: `https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`,
                            strategy: "afterInteractive"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Analytics.tsx",
                            lineNumber: 26,
                            columnNumber: 46
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            id: "google-ads",
                            strategy: "afterInteractive",
                            children: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAdsId}');
            `
                        }, void 0, false, {
                            fileName: "[project]/src/components/Analytics.tsx",
                            lineNumber: 26,
                            columnNumber: 151
                        }, this)
                    ]
                }, void 0, true),
                clarityId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: "microsoft-clarity",
                    strategy: "afterInteractive",
                    children: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `
                }, void 0, false, {
                    fileName: "[project]/src/components/Analytics.tsx",
                    lineNumber: 31,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = Analytics;
var _c;
__turbopack_context__.k.register(_c, "Analytics");
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
;
var _s = __turbopack_context__.k.signature();
"use client";
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
                                    className: "flex-1 flex items-center justify-center gap-2 bg-white text-secondary font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StickyCTA.tsx",
                                            lineNumber: 55,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: "Bel nu"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StickyCTA.tsx",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StickyCTA.tsx",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].whatsappHref,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex-1 flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-bold py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StickyCTA.tsx",
                                            lineNumber: 59,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: "WhatsApp"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StickyCTA.tsx",
                                            lineNumber: 60,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StickyCTA.tsx",
                                    lineNumber: 58,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StickyCTA.tsx",
                            lineNumber: 53,
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
                                lineNumber: 64,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/StickyCTA.tsx",
                            lineNumber: 63,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StickyCTA.tsx",
                    lineNumber: 52,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/StickyCTA.tsx",
                lineNumber: 51,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/StickyCTA.tsx",
            lineNumber: 41,
            columnNumber: 21
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/StickyCTA.tsx",
        lineNumber: 40,
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
"[project]/src/components/PerformanceMonitor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PerformanceMonitor",
    ()=>PerformanceMonitor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function PerformanceMonitor() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "45f58403bd2c63c71b8ec12ae7f6e073b7edc1decc4af753a7ae6e3d6286a194") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "45f58403bd2c63c71b8ec12ae7f6e073b7edc1decc4af753a7ae6e3d6286a194";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_PerformanceMonitorUseEffect, t0);
    return null;
}
_s(PerformanceMonitor, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = PerformanceMonitor;
function _PerformanceMonitorUseEffect() {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
}
function _temp2(list_0) {
    const entries_0 = list_0.getEntries();
    entries_0.forEach(_PerformanceMonitorUseEffectAnonymousEntries_0ForEach);
}
function _PerformanceMonitorUseEffectAnonymousEntries_0ForEach(entry) {
    const fidEntry = entry;
    if (fidEntry.processingStart) {
        console.log("FID:", fidEntry.processingStart - fidEntry.startTime);
    }
}
function _temp(list) {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log("LCP:", lastEntry.renderTime || lastEntry.loadTime);
}
var _c;
__turbopack_context__.k.register(_c, "PerformanceMonitor");
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
const GTM_ID = 'GTM-586XVHKN';
function GoogleTagManager() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "3040293c09a2745e4639b13715f5a06bd353e53ecc6b40d39d0dce5fd51bac91") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3040293c09a2745e4639b13715f5a06bd353e53ecc6b40d39d0dce5fd51bac91";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                columnNumber: 12
            }, this)
        }, void 0, false);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = GoogleTagManager;
function GoogleTagManagerNoScript() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "3040293c09a2745e4639b13715f5a06bd353e53ecc6b40d39d0dce5fd51bac91") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3040293c09a2745e4639b13715f5a06bd353e53ecc6b40d39d0dce5fd51bac91";
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
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: eventName,
            ...eventData
        });
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
]);

//# sourceMappingURL=src_3ceb41e9._.js.map