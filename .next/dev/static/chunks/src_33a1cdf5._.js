(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/products.ts [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/data/products.ts'\n\nUnexpected token `,`. Expected identifier");
e.code = 'MODULE_UNPARSABLE';
throw e;
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
"[project]/src/components/shop/ProductImage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductImage",
    ()=>ProductImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// SVG placeholders per categorie — toont een passend icoon als er geen echte foto is
const CATEGORY_PLACEHOLDERS = {
    'onderhoud-reiniging': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 120 120",
        className: "w-24 h-24 opacity-60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "45",
                y: "10",
                width: "30",
                height: "55",
                rx: "15",
                fill: "#94a3b8"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "40",
                y: "60",
                width: "40",
                height: "12",
                rx: "4",
                fill: "#64748b"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "60",
                cy: "72",
                rx: "20",
                ry: "6",
                fill: "#475569"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "50",
                y: "78",
                width: "20",
                height: "30",
                rx: "3",
                fill: "#64748b"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "55",
                y: "20",
                width: "10",
                height: "30",
                rx: "5",
                fill: "#cbd5e1",
                opacity: "0.5"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shop/ProductImage.tsx",
        lineNumber: 10,
        columnNumber: 26
    }, ("TURBOPACK compile-time value", void 0)),
    'tochtwering-isolatie': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 120 120",
        className: "w-24 h-24 opacity-60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "15",
                y: "30",
                width: "90",
                height: "60",
                rx: "6",
                stroke: "#94a3b8",
                strokeWidth: "4",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "15",
                y: "30",
                width: "90",
                height: "8",
                rx: "3",
                fill: "#94a3b8"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "15",
                y: "82",
                width: "90",
                height: "8",
                rx: "3",
                fill: "#94a3b8"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M30 55 Q45 45 60 55 Q75 65 90 55",
                stroke: "#64748b",
                strokeWidth: "3",
                fill: "none",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M30 65 Q45 55 60 65 Q75 75 90 65",
                stroke: "#64748b",
                strokeWidth: "3",
                fill: "none",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shop/ProductImage.tsx",
        lineNumber: 17,
        columnNumber: 27
    }, ("TURBOPACK compile-time value", void 0)),
    'raam-accessoires': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 120 120",
        className: "w-24 h-24 opacity-60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "20",
                y: "20",
                width: "80",
                height: "80",
                rx: "6",
                stroke: "#94a3b8",
                strokeWidth: "4",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "60",
                y1: "20",
                x2: "60",
                y2: "100",
                stroke: "#94a3b8",
                strokeWidth: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "20",
                y1: "60",
                x2: "100",
                y2: "60",
                stroke: "#94a3b8",
                strokeWidth: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "75",
                cy: "45",
                r: "8",
                fill: "#64748b"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "71",
                y: "41",
                width: "8",
                height: "14",
                rx: "2",
                fill: "#94a3b8"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shop/ProductImage.tsx",
        lineNumber: 24,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0)),
    'deur-accessoires': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 120 120",
        className: "w-24 h-24 opacity-60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "30",
                y: "10",
                width: "60",
                height: "100",
                rx: "4",
                stroke: "#94a3b8",
                strokeWidth: "4",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "80",
                cy: "60",
                r: "6",
                fill: "#64748b"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "25",
                y: "10",
                width: "8",
                height: "100",
                rx: "2",
                fill: "#94a3b8",
                opacity: "0.4"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "40",
                y: "30",
                width: "35",
                height: "20",
                rx: "3",
                stroke: "#94a3b8",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "40",
                y: "70",
                width: "35",
                height: "20",
                rx: "3",
                stroke: "#94a3b8",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shop/ProductImage.tsx",
        lineNumber: 31,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0)),
    bundels: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 120 120",
        className: "w-24 h-24 opacity-60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "20",
                y: "50",
                width: "40",
                height: "50",
                rx: "4",
                fill: "#94a3b8"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "60",
                y: "40",
                width: "40",
                height: "60",
                rx: "4",
                fill: "#64748b"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "35",
                y: "30",
                width: "35",
                height: "45",
                rx: "4",
                fill: "#475569"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M35 30 L52 15 L70 30",
                fill: "#64748b"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shop/ProductImage.tsx",
        lineNumber: 38,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    default: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 120 120",
        className: "w-24 h-24 opacity-60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "20",
                y: "20",
                width: "80",
                height: "80",
                rx: "8",
                stroke: "#94a3b8",
                strokeWidth: "4",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "60",
                cy: "55",
                r: "18",
                stroke: "#94a3b8",
                strokeWidth: "3",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "60",
                y1: "73",
                x2: "60",
                y2: "85",
                stroke: "#94a3b8",
                strokeWidth: "3",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shop/ProductImage.tsx",
        lineNumber: 44,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0))
};
function ProductImage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "973e6b90ec361830d924cf8ecb91364ae256da7d474f1eff78067f9db7359e08") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "973e6b90ec361830d924cf8ecb91364ae256da7d474f1eff78067f9db7359e08";
    }
    const { src, alt, category, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const [hasError, setHasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isGenericProfileImage = src.includes("raamprofiel") || src.includes("crepi-isolatie") || src.includes("steenstrips-isolatie") || src.includes("voordeur.png");
    if (hasError || isGenericProfileImage) {
        const placeholder = CATEGORY_PLACEHOLDERS[category] ?? CATEGORY_PLACEHOLDERS.default;
        const t2 = `flex items-center justify-center w-full h-full bg-gradient-to-br from-slate-100 via-white to-sky-50 ${className}`;
        let t3;
        if ($[1] !== placeholder || $[2] !== t2) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t2,
                children: placeholder
            }, void 0, false, {
                fileName: "[project]/src/components/shop/ProductImage.tsx",
                lineNumber: 78,
                columnNumber: 12
            }, this);
            $[1] = placeholder;
            $[2] = t2;
            $[3] = t3;
        } else {
            t3 = $[3];
        }
        return t3;
    }
    const t2 = `object-contain p-6 transition duration-500 group-hover:scale-105 ${className}`;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "ProductImage[<Image>.onError]": ()=>setHasError(true)
        })["ProductImage[<Image>.onError]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== alt || $[6] !== src || $[7] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: src,
            alt: alt,
            fill: true,
            sizes: "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
            className: t2,
            onError: t3
        }, void 0, false, {
            fileName: "[project]/src/components/shop/ProductImage.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[5] = alt;
        $[6] = src;
        $[7] = t2;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
}
_s(ProductImage, "0lWSx5YqYPOl7PiOJe/TIAtHv6A=");
_c = ProductImage;
var _c;
__turbopack_context__.k.register(_c, "ProductImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(public)/shop/ShopContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShopContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$shop$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/shop.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$ProductImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/ProductImage.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function ShopContent() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "632205a37defe850af0e002f8c1fee61086fdf9af2fe8b6d622a83d1b9ce874b") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "632205a37defe850af0e002f8c1fee61086fdf9af2fe8b6d622a83d1b9ce874b";
    }
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("featured");
    const [filteredProducts, setFilteredProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"]);
    let t0;
    let t1;
    if ($[1] !== searchQuery || $[2] !== selectedCategory || $[3] !== sortBy) {
        t0 = ({
            "ShopContent[useEffect()]": ()=>{
                let nextProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductsByCategory"])(selectedCategory);
                if (searchQuery.trim()) {
                    const normalizedQuery = searchQuery.trim().toLowerCase();
                    nextProducts = nextProducts.filter({
                        "ShopContent[useEffect() > nextProducts.filter()]": (product)=>[
                                product.name,
                                product.shortDescription,
                                product.brand,
                                product.sku,
                                ...product.tags
                            ].filter(Boolean).some({
                                "ShopContent[useEffect() > nextProducts.filter() > (anonymous)()]": (value)=>value.toLowerCase().includes(normalizedQuery)
                            }["ShopContent[useEffect() > nextProducts.filter() > (anonymous)()]"])
                    }["ShopContent[useEffect() > nextProducts.filter()]"]);
                }
                nextProducts = [
                    ...nextProducts
                ].sort({
                    "ShopContent[useEffect() > (anonymous)()]": (left, right)=>{
                        switch(sortBy){
                            case "price-asc":
                                {
                                    return left.price - right.price;
                                }
                            case "price-desc":
                                {
                                    return right.price - left.price;
                                }
                            case "name-asc":
                                {
                                    return left.name.localeCompare(right.name, "nl-BE");
                                }
                            default:
                                {
                                    return Number(right.featured) - Number(left.featured) || Number(right.bestseller) - Number(left.bestseller) || left.price - right.price;
                                }
                        }
                    }
                }["ShopContent[useEffect() > (anonymous)()]"]);
                setFilteredProducts(nextProducts);
            }
        })["ShopContent[useEffect()]"];
        t1 = [
            searchQuery,
            selectedCategory,
            sortBy
        ];
        $[1] = searchQuery;
        $[2] = selectedCategory;
        $[3] = sortBy;
        $[4] = t0;
        $[5] = t1;
    } else {
        t0 = $[4];
        t1 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-200",
            children: "Yannova Accessoires"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "mb-4 text-4xl font-bold md:text-5xl",
            children: "Onderhoud & Accessoires"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "max-w-2xl text-lg text-sky-100 md:text-xl",
            children: "Praktische onderhoudsproducten en accessoires voor ramen en deuren. Vraag eenvoudig aan — wij bezorgen of leveren mee bij uw project."
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t2 = $[6];
        t3 = $[7];
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 py-16 text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4",
                children: [
                    t2,
                    t3,
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-5 py-2.5 text-sm text-amber-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "📦"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                lineNumber: 89,
                                columnNumber: 298
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Producten op aanvraag — geen webshop, gewoon direct contact"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                lineNumber: 89,
                                columnNumber: 313
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 89,
                        columnNumber: 154
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                lineNumber: 89,
                columnNumber: 102
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "mb-2 block text-sm font-medium text-slate-700",
            children: "Zoek op product, merk of SKU"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "ShopContent[<input>.onChange]": (e)=>setSearchQuery(e.target.value)
        })["ShopContent[<input>.onChange]"];
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== searchQuery) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "search",
                    value: searchQuery,
                    onChange: t7,
                    placeholder: "Bijvoorbeeld FENOSOL, tochtstrip of raamgreep",
                    className: "w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 112,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[12] = searchQuery;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "mb-2 block text-sm font-medium text-slate-700",
            children: "Sorteer"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "ShopContent[<select>.onChange]": (e_0)=>setSortBy(e_0.target.value)
        })["ShopContent[<select>.onChange]"];
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    let t12;
    let t13;
    let t14;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "featured",
            children: "Aanbevolen eerst"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "price-asc",
            children: "Prijs laag naar hoog"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "price-desc",
            children: "Prijs hoog naar laag"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "name-asc",
            children: "Naam A-Z"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[16] = t11;
        $[17] = t12;
        $[18] = t13;
        $[19] = t14;
    } else {
        t11 = $[16];
        t12 = $[17];
        t13 = $[18];
        t14 = $[19];
    }
    let t15;
    if ($[20] !== sortBy) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: sortBy,
                    onChange: t10,
                    className: "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100",
                    children: [
                        t11,
                        t12,
                        t13,
                        t14
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 155,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[20] = sortBy;
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    let t16;
    if ($[22] !== t15 || $[23] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[1.6fr_0.9fr]",
            children: [
                t8,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[22] = t15;
        $[23] = t8;
        $[24] = t16;
    } else {
        t16 = $[24];
    }
    let t17;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = ({
            "ShopContent[<button>.onClick]": ()=>setSelectedCategory("all")
        })["ShopContent[<button>.onClick]"];
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    const t18 = `rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${selectedCategory === "all" ? "bg-slate-900 text-white" : "bg-white text-slate-700 hover:bg-slate-100"}`;
    let t19;
    if ($[26] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t17,
            className: t18,
            children: [
                "Alle Producten (",
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"].length,
                ")"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[26] = t18;
        $[27] = t19;
    } else {
        t19 = $[27];
    }
    let t20;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$shop$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_LABELS"]);
        $[28] = t20;
    } else {
        t20 = $[28];
    }
    let t21;
    if ($[29] !== selectedCategory) {
        t21 = t20.map({
            "ShopContent[(anonymous)()]": (t22)=>{
                const [key, label] = t22;
                const count = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"].filter({
                    "ShopContent[(anonymous)() > PRODUCTS.filter()]": (p)=>p.category === key
                }["ShopContent[(anonymous)() > PRODUCTS.filter()]"]).length;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ShopContent[(anonymous)() > <button>.onClick]": ()=>setSelectedCategory(key)
                    }["ShopContent[(anonymous)() > <button>.onClick]"],
                    className: `rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${selectedCategory === key ? "bg-sky-600 text-white" : "bg-white text-slate-700 hover:bg-slate-100"}`,
                    children: [
                        label,
                        " (",
                        count,
                        ")"
                    ]
                }, key, true, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 203,
                    columnNumber: 16
                }, this);
            }
        }["ShopContent[(anonymous)()]"]);
        $[29] = selectedCategory;
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    let t22;
    if ($[31] !== t19 || $[32] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 flex flex-wrap gap-3",
            children: [
                t19,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[31] = t19;
        $[32] = t21;
        $[33] = t22;
    } else {
        t22 = $[33];
    }
    const t23 = filteredProducts.length === 1 ? "" : "en";
    let t24;
    if ($[34] !== filteredProducts.length || $[35] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-6 text-sm text-slate-600",
            children: [
                filteredProducts.length,
                " product",
                t23,
                " gevonden"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[34] = filteredProducts.length;
        $[35] = t23;
        $[36] = t24;
    } else {
        t24 = $[36];
    }
    let t25;
    if ($[37] !== filteredProducts) {
        t25 = filteredProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-semibold text-slate-900",
                    children: "Geen producten gevonden"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 234,
                    columnNumber: 152
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-slate-600",
                    children: "Pas je zoekterm of filter aan."
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 234,
                    columnNumber: 234
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 234,
            columnNumber: 43
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3",
            children: filteredProducts.map(_ShopContentFilteredProductsMap)
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 234,
            columnNumber: 312
        }, this);
        $[37] = filteredProducts;
        $[38] = t25;
    } else {
        t25 = $[38];
    }
    let t26;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-3 text-3xl",
                    children: "📩"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 242,
                    columnNumber: 85
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-2 text-lg font-bold text-slate-900",
                    children: "Aanvraag via contact"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 242,
                    columnNumber: 124
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-600",
                    children: "Stuur ons een bericht met het gewenste product — wij bevestigen prijs en levering."
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 242,
                    columnNumber: 203
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[39] = t26;
    } else {
        t26 = $[39];
    }
    let t27;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-3 text-3xl",
                    children: "🚚"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 249,
                    columnNumber: 85
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-2 text-lg font-bold text-slate-900",
                    children: "Levering of afhaling"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 249,
                    columnNumber: 124
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-600",
                    children: "Producten worden geleverd of meegebracht bij uw renovatieproject."
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 249,
                    columnNumber: 203
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[40] = t27;
    } else {
        t27 = $[40];
    }
    let t28;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-16 grid gap-6 md:grid-cols-3",
            children: [
                t26,
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 text-3xl",
                            children: "💬"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                            lineNumber: 256,
                            columnNumber: 144
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mb-2 text-lg font-bold text-slate-900",
                            children: "Persoonlijk advies"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                            lineNumber: 256,
                            columnNumber: 183
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-600",
                            children: "Niet zeker welk product u nodig heeft? Wij helpen u graag verder."
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                            lineNumber: 256,
                            columnNumber: 260
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 256,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[41] = t28;
    } else {
        t28 = $[41];
    }
    let t29;
    if ($[42] !== t16 || $[43] !== t22 || $[44] !== t24 || $[45] !== t25) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-50",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-12",
                    children: [
                        t16,
                        t22,
                        t24,
                        t25,
                        t28
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                    lineNumber: 263,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[42] = t16;
        $[43] = t22;
        $[44] = t24;
        $[45] = t25;
        $[46] = t29;
    } else {
        t29 = $[46];
    }
    return t29;
}
_s(ShopContent, "owr89xW3eTsZ/MJxZR9GqMyNAxI=");
_c = ShopContent;
function _ShopContentFilteredProductsMap(product_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-100 via-white to-sky-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$ProductImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductImage"], {
                        src: product_0.images[0],
                        alt: product_0.name,
                        category: product_0.category
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 275,
                        columnNumber: 283
                    }, this),
                    product_0.bestseller && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white",
                        children: "BESTSELLER"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 275,
                        columnNumber: 401
                    }, this),
                    product_0.originalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute right-4 top-4 rounded-full bg-rose-500 px-3 py-1 text-xs font-bold text-white",
                        children: "AANBIEDING"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 275,
                        columnNumber: 552
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                lineNumber: 275,
                columnNumber: 175
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold uppercase tracking-[0.18em] text-sky-700",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$shop$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_LABELS"][product_0.category]
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                lineNumber: 275,
                                columnNumber: 764
                            }, this),
                            product_0.brand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-500",
                                children: product_0.brand
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                lineNumber: 275,
                                columnNumber: 909
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 275,
                        columnNumber: 702
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-2 line-clamp-2 text-lg font-semibold text-slate-900",
                        children: product_0.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 275,
                        columnNumber: 981
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4 line-clamp-2 text-sm leading-6 text-slate-600",
                        children: product_0.shortDescription
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 275,
                        columnNumber: 1073
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    product_0.originalPrice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-slate-400 line-through",
                                                children: [
                                                    "€",
                                                    product_0.originalPrice.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                                lineNumber: 275,
                                                columnNumber: 1308
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl font-bold text-rose-600",
                                                children: [
                                                    "€",
                                                    product_0.price.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                                lineNumber: 275,
                                                columnNumber: 1406
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 275,
                                        columnNumber: 1257
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-bold text-slate-900",
                                        children: [
                                            "€",
                                            product_0.price.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 275,
                                        columnNumber: 1502
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 text-xs text-slate-400",
                                        children: "Prijs op aanvraag bevestigd"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                        lineNumber: 275,
                                        columnNumber: 1591
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                lineNumber: 275,
                                columnNumber: 1225
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/contact?product=${encodeURIComponent(product_0.name)}&sku=${product_0.sku}`,
                                className: "shrink-0 rounded-full bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 active:scale-95",
                                children: "Vraag aan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                                lineNumber: 275,
                                columnNumber: 1673
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                        lineNumber: 275,
                        columnNumber: 1171
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
                lineNumber: 275,
                columnNumber: 681
            }, this)
        ]
    }, product_0.id, true, {
        fileName: "[project]/src/app/(public)/shop/ShopContent.tsx",
        lineNumber: 275,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ShopContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_33a1cdf5._.js.map