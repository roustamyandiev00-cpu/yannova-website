(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ProjectGallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectGallery",
    ()=>ProjectGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
;
var _s = __turbopack_context__.k.signature();
"use client";
'use client';
;
;
;
;
;
function ProjectGallery(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "0f5a37afa1df882a45a282521eb37f00b133b06412481606a1e605bab1f18a1a") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0f5a37afa1df882a45a282521eb37f00b133b06412481606a1e605bab1f18a1a";
    }
    const { projects, categories: t1 } = t0;
    let t2;
    if ($[1] !== t1) {
        t2 = t1 === undefined ? [] : t1;
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const categories = t2;
    const [selectedProject, setSelectedProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let filtered;
    if ($[3] !== activeCategory || $[4] !== projects || $[5] !== searchQuery) {
        filtered = projects;
        if (activeCategory) {
            let t3;
            if ($[7] !== activeCategory) {
                t3 = ({
                    "ProjectGallery[filtered.filter()]": (p)=>p.category === activeCategory
                })["ProjectGallery[filtered.filter()]"];
                $[7] = activeCategory;
                $[8] = t3;
            } else {
                t3 = $[8];
            }
            filtered = filtered.filter(t3);
        }
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter({
                "ProjectGallery[filtered.filter()]": (p_0)=>p_0.title.toLowerCase().includes(query) || p_0.description.toLowerCase().includes(query) || p_0.category.toLowerCase().includes(query) || p_0.location?.toLowerCase().includes(query) || p_0.material?.toLowerCase().includes(query)
            }["ProjectGallery[filtered.filter()]"]);
        }
        $[3] = activeCategory;
        $[4] = projects;
        $[5] = searchQuery;
        $[6] = filtered;
    } else {
        filtered = $[6];
    }
    const filteredProjects = filtered;
    let t3;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectGallery.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "ProjectGallery[<input>.onChange]": (e)=>setSearchQuery(e.target.value)
        })["ProjectGallery[<input>.onChange]"];
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    let t6;
    if ($[11] !== searchQuery) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Zoek op titel, locatie, materiaal...",
            value: searchQuery,
            onChange: t4,
            className: "w-full pl-12 pr-4 py-4 bg-white/5 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectGallery.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        t6 = searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "ProjectGallery[<button>.onClick]": ()=>setSearchQuery("")
            }["ProjectGallery[<button>.onClick]"],
            className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectGallery.tsx",
                lineNumber: 99,
                columnNumber: 147
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectGallery.tsx",
            lineNumber: 97,
            columnNumber: 25
        }, this);
        $[11] = searchQuery;
        $[12] = t5;
        $[13] = t6;
    } else {
        t5 = $[12];
        t6 = $[13];
    }
    let t7;
    if ($[14] !== t5 || $[15] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-xl mx-auto",
                children: [
                    t3,
                    t5,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectGallery.tsx",
                lineNumber: 109,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectGallery.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[14] = t5;
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== activeCategory || $[18] !== categories) {
        t8 = categories.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-center gap-3 mb-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-gray-400 mr-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectGallery.tsx",
                            lineNumber: 118,
                            columnNumber: 167
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: "Filter:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectGallery.tsx",
                            lineNumber: 118,
                            columnNumber: 197
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectGallery.tsx",
                    lineNumber: 118,
                    columnNumber: 107
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ProjectGallery[<button>.onClick]": ()=>setActiveCategory(null)
                    }["ProjectGallery[<button>.onClick]"],
                    className: `px-5 py-2.5 rounded-full text-sm font-medium transition-all ${!activeCategory ? "bg-secondary text-white shadow-lg shadow-secondary/25" : "bg-white/5 text-gray-300 hover:bg-white/10"}`,
                    children: "Alle projecten"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectGallery.tsx",
                    lineNumber: 118,
                    columnNumber: 243
                }, this),
                categories.map({
                    "ProjectGallery[categories.map()]": (category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "ProjectGallery[categories.map() > <button>.onClick]": ()=>setActiveCategory(category)
                            }["ProjectGallery[categories.map() > <button>.onClick]"],
                            className: `px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === category ? "bg-secondary text-white shadow-lg shadow-secondary/25" : "bg-white/5 text-gray-300 hover:bg-white/10"}`,
                            children: category
                        }, category, false, {
                            fileName: "[project]/src/components/ProjectGallery.tsx",
                            lineNumber: 121,
                            columnNumber: 57
                        }, this)
                }["ProjectGallery[categories.map()]"])
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectGallery.tsx",
            lineNumber: 118,
            columnNumber: 35
        }, this);
        $[17] = activeCategory;
        $[18] = categories;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    const t9 = filteredProjects.length === 1 ? "project" : "projecten";
    const t10 = activeCategory && ` in categorie "${activeCategory}"`;
    const t11 = searchQuery && ` voor "${searchQuery}"`;
    let t12;
    if ($[20] !== filteredProjects.length || $[21] !== t10 || $[22] !== t11 || $[23] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 text-sm",
                children: [
                    filteredProjects.length,
                    " ",
                    t9,
                    t10,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectGallery.tsx",
                lineNumber: 136,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectGallery.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[20] = filteredProjects.length;
        $[21] = t10;
        $[22] = t11;
        $[23] = t9;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== filteredProjects) {
        t13 = filteredProjects.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "popLayout",
                children: filteredProjects.map({
                    "ProjectGallery[filteredProjects.map()]": (project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            layout: true,
                            initial: {
                                opacity: 0,
                                scale: 0.9
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.9
                            },
                            transition: {
                                duration: 0.3
                            },
                            className: "group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300",
                            onClick: {
                                "ProjectGallery[filteredProjects.map() > <motion.div>.onClick]": ()=>setSelectedProject(project)
                            }["ProjectGallery[filteredProjects.map() > <motion.div>.onClick]"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: project.imageUrl,
                                    alt: project.title,
                                    fill: true,
                                    className: "object-cover transition-transform duration-700 group-hover:scale-110",
                                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectGallery.tsx",
                                    lineNumber: 161,
                                    columnNumber: 79
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectGallery.tsx",
                                    lineNumber: 161,
                                    columnNumber: 289
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex flex-col justify-end p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-secondary text-xs font-bold tracking-wider uppercase bg-secondary/20 px-2 py-1 rounded backdrop-blur-sm",
                                                    children: project.category
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectGallery.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 645
                                                }, this),
                                                project.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-300 text-xs flex items-center gap-1 bg-black/30 px-2 py-1 rounded backdrop-blur-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ProjectGallery.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 929
                                                        }, this),
                                                        project.location
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ProjectGallery.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 818
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProjectGallery.tsx",
                                            lineNumber: 161,
                                            columnNumber: 599
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-white text-xl font-bold mb-1",
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectGallery.tsx",
                                            lineNumber: 161,
                                            columnNumber: 991
                                        }, this),
                                        project.material && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-secondary text-sm font-medium",
                                            children: project.material
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectGallery.tsx",
                                            lineNumber: 161,
                                            columnNumber: 1082
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300 text-sm mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                            children: project.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectGallery.tsx",
                                            lineNumber: 161,
                                            columnNumber: 1161
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectGallery.tsx",
                                    lineNumber: 161,
                                    columnNumber: 451
                                }, this)
                            ]
                        }, project.id, true, {
                            fileName: "[project]/src/components/ProjectGallery.tsx",
                            lineNumber: 148,
                            columnNumber: 64
                        }, this)
                }["ProjectGallery[filteredProjects.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectGallery.tsx",
                lineNumber: 147,
                columnNumber: 111
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectGallery.tsx",
            lineNumber: 147,
            columnNumber: 41
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-20 bg-white/5 rounded-3xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "h-16 w-16 text-gray-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectGallery.tsx",
                        lineNumber: 162,
                        columnNumber: 173
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-white mb-2",
                        children: "Geen projecten gevonden"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectGallery.tsx",
                        lineNumber: 162,
                        columnNumber: 232
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 mb-6",
                        children: "Probeer een andere zoekterm of filter."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectGallery.tsx",
                        lineNumber: 162,
                        columnNumber: 314
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "ProjectGallery[<button>.onClick]": ()=>{
                                setSearchQuery("");
                                setActiveCategory(null);
                            }
                        }["ProjectGallery[<button>.onClick]"],
                        className: "inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/80 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectGallery.tsx",
                                lineNumber: 167,
                                columnNumber: 176
                            }, this),
                            "Filters wissen"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectGallery.tsx",
                        lineNumber: 162,
                        columnNumber: 390
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectGallery.tsx",
                lineNumber: 162,
                columnNumber: 139
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectGallery.tsx",
            lineNumber: 162,
            columnNumber: 81
        }, this);
        $[25] = filteredProjects;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== filteredProjects || $[28] !== selectedProject) {
        t14 = selectedProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10",
            onClick: {
                "ProjectGallery[<motion.div>.onClick]": ()=>setSelectedProject(null)
            }["ProjectGallery[<motion.div>.onClick]"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ProjectGallery[<button>.onClick]": ()=>setSelectedProject(null)
                    }["ProjectGallery[<button>.onClick]"],
                    className: "absolute right-6 top-6 text-white hover:text-secondary transition-colors z-[60] bg-black/50 rounded-full p-2 backdrop-blur-sm",
                    "aria-label": "Sluiten",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "h-8 w-8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectGallery.tsx",
                        lineNumber: 185,
                        columnNumber: 205
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectGallery.tsx",
                    lineNumber: 183,
                    columnNumber: 48
                }, this),
                filteredProjects.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "ProjectGallery[<button>.onClick]": (e_0)=>{
                                    e_0.stopPropagation();
                                    const currentIndex = filteredProjects.findIndex({
                                        "ProjectGallery[<button>.onClick > filteredProjects.findIndex()]": (p_1)=>p_1.id === selectedProject.id
                                    }["ProjectGallery[<button>.onClick > filteredProjects.findIndex()]"]);
                                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredProjects.length - 1;
                                    setSelectedProject(filteredProjects[prevIndex]);
                                }
                            }["ProjectGallery[<button>.onClick]"],
                            className: "absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors z-[60] bg-black/50 rounded-full p-3 backdrop-blur-sm hover:scale-110",
                            "aria-label": "Vorig project",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M15 19l-7-7 7-7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectGallery.tsx",
                                    lineNumber: 194,
                                    columnNumber: 326
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectGallery.tsx",
                                lineNumber: 194,
                                columnNumber: 247
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectGallery.tsx",
                            lineNumber: 185,
                            columnNumber: 273
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "ProjectGallery[<button>.onClick]": (e_1)=>{
                                    e_1.stopPropagation();
                                    const currentIndex_0 = filteredProjects.findIndex({
                                        "ProjectGallery[<button>.onClick > filteredProjects.findIndex()]": (p_2)=>p_2.id === selectedProject.id
                                    }["ProjectGallery[<button>.onClick > filteredProjects.findIndex()]"]);
                                    const nextIndex = currentIndex_0 < filteredProjects.length - 1 ? currentIndex_0 + 1 : 0;
                                    setSelectedProject(filteredProjects[nextIndex]);
                                }
                            }["ProjectGallery[<button>.onClick]"],
                            className: "absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors z-[60] bg-black/50 rounded-full p-3 backdrop-blur-sm hover:scale-110",
                            "aria-label": "Volgend project",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 5l7 7-7 7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectGallery.tsx",
                                    lineNumber: 203,
                                    columnNumber: 329
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectGallery.tsx",
                                lineNumber: 203,
                                columnNumber: 250
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectGallery.tsx",
                            lineNumber: 194,
                            columnNumber: 430
                        }, this)
                    ]
                }, void 0, true),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-full w-full max-w-6xl flex flex-col",
                    onClick: _ProjectGalleryDivOnClick,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex-1 rounded-2xl overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: selectedProject.imageUrl,
                                alt: selectedProject.title,
                                fill: true,
                                className: "object-contain",
                                quality: 100
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectGallery.tsx",
                                lineNumber: 203,
                                columnNumber: 595
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectGallery.tsx",
                            lineNumber: 203,
                            columnNumber: 534
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 text-center bg-black/50 backdrop-blur-md rounded-2xl p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-3 mb-3 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-secondary text-sm font-bold uppercase tracking-widest bg-secondary/20 px-3 py-1 rounded-full",
                                            children: selectedProject.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectGallery.tsx",
                                            lineNumber: 203,
                                            columnNumber: 872
                                        }, this),
                                        selectedProject.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-300 text-sm flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectGallery.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 1149
                                                }, this),
                                                selectedProject.location
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProjectGallery.tsx",
                                            lineNumber: 203,
                                            columnNumber: 1050
                                        }, this),
                                        selectedProject.year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-300 text-sm bg-white/10 px-3 py-1 rounded-full",
                                            children: selectedProject.year
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectGallery.tsx",
                                            lineNumber: 203,
                                            columnNumber: 1238
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectGallery.tsx",
                                    lineNumber: 203,
                                    columnNumber: 801
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-4xl font-bold text-white mt-2 mb-3",
                                    children: selectedProject.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectGallery.tsx",
                                    lineNumber: 203,
                                    columnNumber: 1349
                                }, this),
                                selectedProject.material && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 mt-2 px-4 py-2 bg-white/10 rounded-full mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-secondary text-sm font-medium",
                                        children: selectedProject.material
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectGallery.tsx",
                                        lineNumber: 203,
                                        columnNumber: 1567
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectGallery.tsx",
                                    lineNumber: 203,
                                    columnNumber: 1474
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed text-base",
                                    children: selectedProject.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectGallery.tsx",
                                    lineNumber: 203,
                                    columnNumber: 1660
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectGallery.tsx",
                            lineNumber: 203,
                            columnNumber: 722
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectGallery.tsx",
                    lineNumber: 203,
                    columnNumber: 434
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectGallery.tsx",
            lineNumber: 175,
            columnNumber: 30
        }, this);
        $[27] = filteredProjects;
        $[28] = selectedProject;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectGallery.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[30] = t14;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] !== t12 || $[33] !== t13 || $[34] !== t15 || $[35] !== t7 || $[36] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t7,
                t8,
                t12,
                t13,
                t15
            ]
        }, void 0, true);
        $[32] = t12;
        $[33] = t13;
        $[34] = t15;
        $[35] = t7;
        $[36] = t8;
        $[37] = t16;
    } else {
        t16 = $[37];
    }
    return t16;
}
_s(ProjectGallery, "MbHHmBxZHMsAaClma9J7oIgsd68=");
_c = ProjectGallery;
function _ProjectGalleryDivOnClick(e_2) {
    return e_2.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "ProjectGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PhotoGallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhotoGallery",
    ()=>PhotoGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
'use client';
;
;
;
;
function PhotoGallery(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "17a0a5a2921ffc100ddaa82983b9e97ae111d45304dd866b04ed9aaeb8fdaed4") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "17a0a5a2921ffc100ddaa82983b9e97ae111d45304dd866b04ed9aaeb8fdaed4";
    }
    const { photos } = t0;
    const [selectedPhoto, setSelectedPhoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "PhotoGallery[openLightbox]": (index)=>{
                setSelectedPhoto(index);
            }
        })["PhotoGallery[openLightbox]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const openLightbox = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "PhotoGallery[closeLightbox]": ()=>{
                setSelectedPhoto(null);
            }
        })["PhotoGallery[closeLightbox]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const closeLightbox = t2;
    let t3;
    if ($[3] !== selectedPhoto) {
        t3 = ({
            "PhotoGallery[goToPrevious]": ()=>{
                if (selectedPhoto !== null && selectedPhoto > 0) {
                    setSelectedPhoto(selectedPhoto - 1);
                }
            }
        })["PhotoGallery[goToPrevious]"];
        $[3] = selectedPhoto;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const goToPrevious = t3;
    let t4;
    if ($[5] !== photos.length || $[6] !== selectedPhoto) {
        t4 = ({
            "PhotoGallery[goToNext]": ()=>{
                if (selectedPhoto !== null && selectedPhoto < photos.length - 1) {
                    setSelectedPhoto(selectedPhoto + 1);
                }
            }
        })["PhotoGallery[goToNext]"];
        $[5] = photos.length;
        $[6] = selectedPhoto;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const goToNext = t4;
    let t5;
    if ($[8] !== goToNext || $[9] !== goToPrevious) {
        t5 = ({
            "PhotoGallery[handleKeyDown]": (e)=>{
                if (e.key === "Escape") {
                    closeLightbox();
                }
                if (e.key === "ArrowLeft") {
                    goToPrevious();
                }
                if (e.key === "ArrowRight") {
                    goToNext();
                }
            }
        })["PhotoGallery[handleKeyDown]"];
        $[8] = goToNext;
        $[9] = goToPrevious;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const handleKeyDown = t5;
    let t6;
    if ($[11] !== photos) {
        let t7;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = ({
                "PhotoGallery[photos.map()]": (photo, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group relative aspect-square overflow-hidden rounded-2xl bg-gray-900 cursor-pointer",
                        onClick: {
                            "PhotoGallery[photos.map() > <div>.onClick]": ()=>openLightbox(index_0)
                        }["PhotoGallery[photos.map() > <div>.onClick]"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: photo.url,
                                alt: `Project foto ${index_0 + 1}`,
                                fill: true,
                                className: "object-cover transition-transform duration-500 group-hover:scale-110",
                                sizes: "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PhotoGallery.tsx",
                                lineNumber: 111,
                                columnNumber: 58
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PhotoGallery.tsx",
                                lineNumber: 111,
                                columnNumber: 276
                            }, this)
                        ]
                    }, photo.filename, true, {
                        fileName: "[project]/src/components/PhotoGallery.tsx",
                        lineNumber: 109,
                        columnNumber: 59
                    }, this)
            })["PhotoGallery[photos.map()]"];
            $[13] = t7;
        } else {
            t7 = $[13];
        }
        t6 = photos.map(t7);
        $[11] = photos;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/PhotoGallery.tsx",
            lineNumber: 125,
            columnNumber: 10
        }, this);
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== goToNext || $[17] !== goToPrevious || $[18] !== handleKeyDown || $[19] !== photos || $[20] !== selectedPhoto) {
        t8 = selectedPhoto !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 bg-black/95 flex items-center justify-center",
            onClick: closeLightbox,
            onKeyDown: handleKeyDown,
            tabIndex: 0,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: closeLightbox,
                    className: "absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors",
                    "aria-label": "Sluiten",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "h-6 w-6 text-white"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PhotoGallery.tsx",
                        lineNumber: 133,
                        columnNumber: 338
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PhotoGallery.tsx",
                    lineNumber: 133,
                    columnNumber: 180
                }, this),
                selectedPhoto > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "PhotoGallery[<button>.onClick]": (e_0)=>{
                            e_0.stopPropagation();
                            goToPrevious();
                        }
                    }["PhotoGallery[<button>.onClick]"],
                    className: "absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors",
                    "aria-label": "Vorige",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                        className: "h-8 w-8 text-white"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PhotoGallery.tsx",
                        lineNumber: 138,
                        columnNumber: 162
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PhotoGallery.tsx",
                    lineNumber: 133,
                    columnNumber: 405
                }, this),
                selectedPhoto < photos.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "PhotoGallery[<button>.onClick]": (e_1)=>{
                            e_1.stopPropagation();
                            goToNext();
                        }
                    }["PhotoGallery[<button>.onClick]"],
                    className: "absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors",
                    "aria-label": "Volgende",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "h-8 w-8 text-white"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PhotoGallery.tsx",
                        lineNumber: 143,
                        columnNumber: 165
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PhotoGallery.tsx",
                    lineNumber: 138,
                    columnNumber: 256
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-full flex items-center justify-center p-4",
                    onClick: _PhotoGalleryDivOnClick,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-7xl max-h-full w-full h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: photos[selectedPhoto].url,
                            alt: `Project foto ${selectedPhoto + 1}`,
                            fill: true,
                            className: "object-contain",
                            sizes: "100vw",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/PhotoGallery.tsx",
                            lineNumber: 143,
                            columnNumber: 394
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PhotoGallery.tsx",
                        lineNumber: 143,
                        columnNumber: 333
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PhotoGallery.tsx",
                    lineNumber: 143,
                    columnNumber: 222
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white text-sm font-medium",
                        children: [
                            selectedPhoto + 1,
                            " / ",
                            photos.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PhotoGallery.tsx",
                        lineNumber: 143,
                        columnNumber: 671
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PhotoGallery.tsx",
                    lineNumber: 143,
                    columnNumber: 558
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PhotoGallery.tsx",
            lineNumber: 133,
            columnNumber: 36
        }, this);
        $[16] = goToNext;
        $[17] = goToPrevious;
        $[18] = handleKeyDown;
        $[19] = photos;
        $[20] = selectedPhoto;
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    let t9;
    if ($[22] !== t7 || $[23] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t7,
                t8
            ]
        }, void 0, true);
        $[22] = t7;
        $[23] = t8;
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    return t9;
}
_s(PhotoGallery, "l782GLUJBWXzVdU82NoqbVlGkPE=");
_c = PhotoGallery;
function _PhotoGalleryDivOnClick(e_2) {
    return e_2.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "PhotoGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Funnel
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
            key: "sc7q7i"
        }
    ]
];
const Funnel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("funnel", __iconNode);
;
 //# sourceMappingURL=funnel.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Filter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Search
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("search", __iconNode);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronLeft
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
];
const ChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-left", __iconNode);
;
 //# sourceMappingURL=chevron-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronRight
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
];
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-right", __iconNode);
;
 //# sourceMappingURL=chevron-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_4a5324ed._.js.map