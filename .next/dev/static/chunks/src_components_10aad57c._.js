(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/animations/FadeIn.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FadeIn",
    ()=>FadeIn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
const FadeIn = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "bcc7077f437784a81b2c0bac54c1a16b3bc821cef900682a5ea03edb03496287") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bcc7077f437784a81b2c0bac54c1a16b3bc821cef900682a5ea03edb03496287";
    }
    const { children, delay: t1, duration: t2, direction: t3, className } = t0;
    const delay = t1 === undefined ? 0 : t1;
    const duration = t2 === undefined ? 0.5 : t2;
    const direction = t3 === undefined ? "up" : t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            up: {
                y: 20
            },
            down: {
                y: -20
            },
            left: {
                x: 20
            },
            right: {
                x: -20
            }
        };
        $[1] = t4;
    } else {
        t4 = $[1];
    }
    const directions = t4;
    const t5 = directions[direction];
    let t6;
    if ($[2] !== t5) {
        t6 = {
            opacity: 0,
            ...t5
        };
        $[2] = t5;
        $[3] = t6;
    } else {
        t6 = $[3];
    }
    let t7;
    let t8;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            opacity: 1,
            x: 0,
            y: 0
        };
        t8 = {
            once: true,
            margin: "-50px"
        };
        $[4] = t7;
        $[5] = t8;
    } else {
        t7 = $[4];
        t8 = $[5];
    }
    let t9;
    if ($[6] !== delay || $[7] !== duration) {
        t9 = {
            duration,
            delay,
            ease: "easeOut"
        };
        $[6] = delay;
        $[7] = duration;
        $[8] = t9;
    } else {
        t9 = $[8];
    }
    let t10;
    if ($[9] !== children || $[10] !== className || $[11] !== t6 || $[12] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t6,
            whileInView: t7,
            viewport: t8,
            transition: t9,
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/animations/FadeIn.tsx",
            lineNumber: 96,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = children;
        $[10] = className;
        $[11] = t6;
        $[12] = t9;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    return t10;
};
_c = FadeIn;
var _c;
__turbopack_context__.k.register(_c, "FadeIn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ServiceCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceCard",
    ()=>ServiceCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function ServiceCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "80268fa317398b86131f088f06623e35870b855ee59ce06563c13a90d40ee445") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "80268fa317398b86131f088f06623e35870b855ee59ce06563c13a90d40ee445";
    }
    const { title, description, link, icon, index: t1 } = t0;
    const index = t1 === undefined ? 0 : t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            y: 20
        };
        t3 = {
            opacity: 1,
            y: 0
        };
        t4 = {
            once: true,
            margin: "-50px"
        };
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
    }
    const t5 = index * 0.1;
    let t6;
    if ($[4] !== t5) {
        t6 = {
            duration: 0.5,
            delay: t5
        };
        $[4] = t5;
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    let t7;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-linear-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        }, void 0, false, {
            fileName: "[project]/src/components/ServiceCard.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[6] = t7;
    } else {
        t7 = $[6];
    }
    let t8;
    if ($[7] !== icon) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-secondary/20 to-secondary/5 text-secondary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg",
            children: icon
        }, void 0, false, {
            fileName: "[project]/src/components/ServiceCard.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[7] = icon;
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    let t9;
    if ($[9] !== title) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-bold leading-7 text-white group-hover:text-secondary transition-colors duration-300 mb-3",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/ServiceCard.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[9] = title;
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] !== description) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm leading-relaxed text-gray-300 flex-1 group-hover:text-gray-200 transition-colors duration-300",
            children: description
        }, void 0, false, {
            fileName: "[project]/src/components/ServiceCard.tsx",
            lineNumber: 91,
            columnNumber: 11
        }, this);
        $[11] = description;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
            className: "ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-2"
        }, void 0, false, {
            fileName: "[project]/src/components/ServiceCard.tsx",
            lineNumber: 99,
            columnNumber: 11
        }, this);
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] !== link) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-6 mt-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: link,
                className: "inline-flex items-center text-sm font-semibold text-secondary hover:text-white transition-all duration-300 group/link",
                children: [
                    "Meer info",
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ServiceCard.tsx",
                lineNumber: 106,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ServiceCard.tsx",
            lineNumber: 106,
            columnNumber: 11
        }, this);
        $[14] = link;
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] !== t10 || $[17] !== t12 || $[18] !== t8 || $[19] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10",
            children: [
                t8,
                t9,
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ServiceCard.tsx",
            lineNumber: 114,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t12;
        $[18] = t8;
        $[19] = t9;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== t13 || $[22] !== t6) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t2,
            whileInView: t3,
            viewport: t4,
            transition: t6,
            className: "group relative flex flex-col h-full rounded-2xl glass p-8 shadow-elegant hover:shadow-elegant-lg transition-all duration-500 overflow-hidden",
            children: [
                t7,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ServiceCard.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        $[21] = t13;
        $[22] = t6;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    return t14;
}
_c = ServiceCard;
var _c;
__turbopack_context__.k.register(_c, "ServiceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_10aad57c._.js.map