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
'use client';
;
;
;
;
;
function ProjectGallery(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "2598f26262a5e38d3c257ec76384eefab49fa70890ac83d6bab2ab7b9e10d35e") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2598f26262a5e38d3c257ec76384eefab49fa70890ac83d6bab2ab7b9e10d35e";
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
            lineNumber: 78,
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
            className: "w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectGallery.tsx",
            lineNumber: 95,
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
                lineNumber: 98,
                columnNumber: 147
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectGallery.tsx",
            lineNumber: 96,
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
                lineNumber: 108,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectGallery.tsx",
            lineNumber: 108,
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
                            lineNumber: 117,
                            columnNumber: 167
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: "Filter:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectGallery.tsx",
                            lineNumber: 117,
                            columnNumber: 197
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectGallery.tsx",
                    lineNumber: 117,
                    columnNumber: 107
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ProjectGallery[<button>.onClick]": ()=>setActiveCategory(null)
                    }["ProjectGallery[<button>.onClick]"],
                    className: `px-5 py-2.5 rounded-full text-sm font-medium transition-all ${!activeCategory ? "bg-secondary text-white shadow-lg shadow-secondary/25" : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"}`,
                    children: "Alle projecten"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectGallery.tsx",
                    lineNumber: 117,
                    columnNumber: 243
                }, this),
                categories.map({
                    "ProjectGallery[categories.map()]": (category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "ProjectGallery[categories.map() > <button>.onClick]": ()=>setActiveCategory(category)
                            }["ProjectGallery[categories.map() > <button>.onClick]"],
                            className: `px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === category ? "bg-secondary text-white shadow-lg shadow-secondary/25" : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"}`,
                            children: category
                        }, category, false, {
                            fileName: "[project]/src/components/ProjectGallery.tsx",
                            lineNumber: 120,
                            columnNumber: 57
                        }, this)
                }["ProjectGallery[categories.map()]"])
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectGallery.tsx",
            lineNumber: 117,
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
                lineNumber: 135,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectGallery.tsx",
            lineNumber: 135,
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
                    "ProjectGallery[filteredProjects.map()]": (project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            className: "group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-secondary/50",
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
                                    lineNumber: 160,
                                    columnNumber: 79
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectGallery.tsx",
                                    lineNumber: 160,
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
                                                    lineNumber: 160,
                                                    columnNumber: 645
                                                }, this),
                                                project.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-300 text-xs flex items-center gap-1 bg-black/30 px-2 py-1 rounded backdrop-blur-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ProjectGallery.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 929
                                                        }, this),
                                                        project.location
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ProjectGallery.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 818
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProjectGallery.tsx",
                                            lineNumber: 160,
                                            columnNumber: 599
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-white text-xl font-bold mb-1",
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectGallery.tsx",
                                            lineNumber: 160,
                                            columnNumber: 991
                                        }, this),
                                        project.material && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-secondary text-sm font-medium",
                                            children: project.material
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectGallery.tsx",
                                            lineNumber: 160,
                                            columnNumber: 1082
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300 text-sm mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                            children: project.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectGallery.tsx",
                                            lineNumber: 160,
                                            columnNumber: 1161
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectGallery.tsx",
                                    lineNumber: 160,
                                    columnNumber: 451
                                }, this)
                            ]
                        }, project.id, true, {
                            fileName: "[project]/src/components/ProjectGallery.tsx",
                            lineNumber: 147,
                            columnNumber: 73
                        }, this)
                }["ProjectGallery[filteredProjects.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectGallery.tsx",
                lineNumber: 146,
                columnNumber: 111
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectGallery.tsx",
            lineNumber: 146,
            columnNumber: 41
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-20 bg-white/5 rounded-3xl border border-white/10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "h-16 w-16 text-gray-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectGallery.tsx",
                        lineNumber: 161,
                        columnNumber: 196
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-white mb-2",
                        children: "Geen projecten gevonden"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectGallery.tsx",
                        lineNumber: 161,
                        columnNumber: 255
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 mb-6",
                        children: "Probeer een andere zoekterm of filter."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectGallery.tsx",
                        lineNumber: 161,
                        columnNumber: 337
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
                                lineNumber: 166,
                                columnNumber: 176
                            }, this),
                            "Filters wissen"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectGallery.tsx",
                        lineNumber: 161,
                        columnNumber: 413
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectGallery.tsx",
                lineNumber: 161,
                columnNumber: 162
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectGallery.tsx",
            lineNumber: 161,
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
                        lineNumber: 184,
                        columnNumber: 205
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectGallery.tsx",
                    lineNumber: 182,
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
                                    lineNumber: 193,
                                    columnNumber: 326
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectGallery.tsx",
                                lineNumber: 193,
                                columnNumber: 247
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectGallery.tsx",
                            lineNumber: 184,
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
                                    lineNumber: 202,
                                    columnNumber: 329
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectGallery.tsx",
                                lineNumber: 202,
                                columnNumber: 250
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectGallery.tsx",
                            lineNumber: 193,
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
                                lineNumber: 202,
                                columnNumber: 595
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectGallery.tsx",
                            lineNumber: 202,
                            columnNumber: 534
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 text-center bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-3 mb-3 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-secondary text-sm font-bold uppercase tracking-widest bg-secondary/20 px-3 py-1 rounded-full",
                                            children: selectedProject.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectGallery.tsx",
                                            lineNumber: 202,
                                            columnNumber: 895
                                        }, this),
                                        selectedProject.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-300 text-sm flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectGallery.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 1172
                                                }, this),
                                                selectedProject.location
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProjectGallery.tsx",
                                            lineNumber: 202,
                                            columnNumber: 1073
                                        }, this),
                                        selectedProject.year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-300 text-sm bg-white/10 px-3 py-1 rounded-full",
                                            children: selectedProject.year
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectGallery.tsx",
                                            lineNumber: 202,
                                            columnNumber: 1261
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectGallery.tsx",
                                    lineNumber: 202,
                                    columnNumber: 824
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-4xl font-bold text-white mt-2 mb-3",
                                    children: selectedProject.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectGallery.tsx",
                                    lineNumber: 202,
                                    columnNumber: 1372
                                }, this),
                                selectedProject.material && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 mt-2 px-4 py-2 bg-white/10 rounded-full mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-secondary text-sm font-medium",
                                        children: selectedProject.material
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectGallery.tsx",
                                        lineNumber: 202,
                                        columnNumber: 1590
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectGallery.tsx",
                                    lineNumber: 202,
                                    columnNumber: 1497
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed text-base",
                                    children: selectedProject.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectGallery.tsx",
                                    lineNumber: 202,
                                    columnNumber: 1683
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectGallery.tsx",
                            lineNumber: 202,
                            columnNumber: 722
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectGallery.tsx",
                    lineNumber: 202,
                    columnNumber: 434
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectGallery.tsx",
            lineNumber: 174,
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
            lineNumber: 211,
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

//# sourceMappingURL=src_components_5d1119cb._.js.map