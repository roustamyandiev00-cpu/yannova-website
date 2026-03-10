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
]);

//# sourceMappingURL=src_components_animations_FadeIn_tsx_a5b53c37._.js.map