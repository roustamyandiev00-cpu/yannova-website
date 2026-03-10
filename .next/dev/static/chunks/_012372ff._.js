(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AIChatShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIChatShell",
    ()=>AIChatShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const quickLinks = [
    {
        title: "Premies",
        href: "/premie-gids"
    },
    {
        title: "Ramen",
        href: "/ramen"
    },
    {
        title: "Ramen & Deuren",
        href: "/diensten/ramen-deuren"
    },
    {
        title: "Contact",
        href: "/contact"
    },
    {
        title: "Offerte",
        href: "/contact"
    }
];
function AIChatShell() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "6005c4a1300942c470d3f0ff576516098f3eeb851883fb3dfbd1ef94df9a4796") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6005c4a1300942c470d3f0ff576516098f3eeb851883fb3dfbd1ef94df9a4796";
    }
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                role: "assistant",
                content: "Hallo! Ik ben Yannova AI. Stel je vraag over ramen, deuren, premies of renovatie en ik help je verder.",
                relatedLinks: [
                    {
                        title: "Bekijk onze ramen",
                        href: "/ramen"
                    },
                    {
                        title: "Bekijk premies",
                        href: "/premie-gids"
                    }
                ]
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[2] !== input || $[3] !== isLoading) {
        t1 = ({
            "AIChatShell[handleSubmit]": async (e)=>{
                e.preventDefault();
                if (!input.trim() || isLoading) {
                    return;
                }
                const question = input;
                const userMessage = {
                    role: "user",
                    content: question
                };
                setMessages({
                    "AIChatShell[handleSubmit > setMessages()]": (prev)=>[
                            ...prev,
                            userMessage
                        ]
                }["AIChatShell[handleSubmit > setMessages()]"]);
                setInput("");
                setIsLoading(true);
                setTimeout({
                    "AIChatShell[handleSubmit > setTimeout()]": ()=>{
                        const aiResponse = {
                            role: "assistant",
                            content: `Bedankt voor je vraag over "${question}". Voor een gedetailleerd antwoord en persoonlijk advies kan je een gratis offerte aanvragen of contact opnemen met ons team.`,
                            relatedLinks: [
                                {
                                    title: "Gratis offerte aanvragen",
                                    href: "/contact"
                                },
                                {
                                    title: "Contact opnemen",
                                    href: "/contact"
                                },
                                {
                                    title: "Bekijk projecten",
                                    href: "/projecten"
                                }
                            ]
                        };
                        setMessages({
                            "AIChatShell[handleSubmit > setTimeout() > setMessages()]": (prev_0)=>[
                                    ...prev_0,
                                    aiResponse
                                ]
                        }["AIChatShell[handleSubmit > setTimeout() > setMessages()]"]);
                        setIsLoading(false);
                    }
                }["AIChatShell[handleSubmit > setTimeout()]"], 1000);
            }
        })["AIChatShell[handleSubmit]"];
        $[2] = input;
        $[3] = isLoading;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const handleSubmit = t1;
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 px-4 py-3 bg-white/5 border-b border-white/10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/10 text-secondary",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AIChatShell.tsx",
                        lineNumber: 110,
                        columnNumber: 197
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/AIChatShell.tsx",
                    lineNumber: 110,
                    columnNumber: 97
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-semibold text-white text-sm",
                            children: "Yannova AI"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AIChatShell.tsx",
                            lineNumber: 110,
                            columnNumber: 240
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-400",
                            children: "24/7 beschikbaar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AIChatShell.tsx",
                            lineNumber: 110,
                            columnNumber: 304
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AIChatShell.tsx",
                    lineNumber: 110,
                    columnNumber: 235
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AIChatShell.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== messages) {
        t3 = messages.map(_AIChatShellMessagesMap);
        $[6] = messages;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== isLoading) {
        t4 = isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-start",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/10 rounded-xl px-4 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-sm text-gray-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-pulse flex gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-2 w-2 bg-gray-400 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AIChatShell.tsx",
                                    lineNumber: 125,
                                    columnNumber: 214
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-2 w-2 bg-gray-400 rounded-full animation-delay-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AIChatShell.tsx",
                                    lineNumber: 125,
                                    columnNumber: 267
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-2 w-2 bg-gray-400 rounded-full animation-delay-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AIChatShell.tsx",
                                    lineNumber: 125,
                                    columnNumber: 340
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AIChatShell.tsx",
                            lineNumber: 125,
                            columnNumber: 172
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Aan het denken..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/AIChatShell.tsx",
                            lineNumber: 125,
                            columnNumber: 419
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AIChatShell.tsx",
                    lineNumber: 125,
                    columnNumber: 109
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AIChatShell.tsx",
                lineNumber: 125,
                columnNumber: 59
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AIChatShell.tsx",
            lineNumber: 125,
            columnNumber: 23
        }, this);
        $[8] = isLoading;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t3 || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto p-4 space-y-4",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AIChatShell.tsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        $[10] = t3;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-4 py-2 border-t border-white/10 bg-white/5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: quickLinks.map(_AIChatShellQuickLinksMap)
            }, void 0, false, {
                fileName: "[project]/src/components/AIChatShell.tsx",
                lineNumber: 142,
                columnNumber: 73
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AIChatShell.tsx",
            lineNumber: 142,
            columnNumber: 10
        }, this);
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "AIChatShell[<input>.onChange]": (e_0)=>setInput(e_0.target.value)
        })["AIChatShell[<input>.onChange]"];
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== input) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: input,
            onChange: t7,
            placeholder: "Stel je vraag over ramen, deuren, premies...",
            className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-secondary/50 transition-colors"
        }, void 0, false, {
            fileName: "[project]/src/components/AIChatShell.tsx",
            lineNumber: 158,
            columnNumber: 10
        }, this);
        $[15] = input;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== input || $[18] !== isLoading) {
        t9 = isLoading || !input.trim();
        $[17] = input;
        $[18] = isLoading;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/AIChatShell.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: t9,
            className: "flex items-center justify-center h-10 w-10 bg-secondary hover:bg-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-white transition-colors",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/AIChatShell.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[21] = t9;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== t11 || $[24] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: [
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AIChatShell.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[23] = t11;
        $[24] = t8;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] !== handleSubmit || $[27] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "p-4 border-t border-white/10",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/AIChatShell.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[26] = handleSubmit;
        $[27] = t12;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== t13 || $[30] !== t5) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-[600px] bg-white/5 border border-white/10 rounded-xl overflow-hidden",
            children: [
                t2,
                t5,
                t6,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AIChatShell.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[29] = t13;
        $[30] = t5;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    return t14;
}
_s(AIChatShell, "GYF46WpwYmJ1ZmG1SjE+7uZhrdU=");
_c = AIChatShell;
function _AIChatShellQuickLinksMap(link_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: link_0.href,
        className: "text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg text-gray-300 hover:text-white transition-colors",
        children: link_0.title
    }, link_0.title, false, {
        fileName: "[project]/src/components/AIChatShell.tsx",
        lineNumber: 218,
        columnNumber: 10
    }, this);
}
function _AIChatShellMessagesMap(message, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex ${message.role === "user" ? "justify-end" : "justify-start"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `max-w-[80%] rounded-xl px-4 py-3 ${message.role === "user" ? "bg-secondary text-white" : "bg-white/10 text-gray-200"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm leading-relaxed",
                    children: message.content
                }, void 0, false, {
                    fileName: "[project]/src/components/AIChatShell.tsx",
                    lineNumber: 221,
                    columnNumber: 244
                }, this),
                message.role === "assistant" && message.relatedLinks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 pt-3 border-t border-white/10 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-400 font-medium",
                            children: "Gerelateerde pagina's:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AIChatShell.tsx",
                            lineNumber: 221,
                            columnNumber: 423
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: message.relatedLinks.map(_AIChatShellMessagesMapMessageRelatedLinksMap)
                        }, void 0, false, {
                            fileName: "[project]/src/components/AIChatShell.tsx",
                            lineNumber: 221,
                            columnNumber: 498
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AIChatShell.tsx",
                    lineNumber: 221,
                    columnNumber: 361
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AIChatShell.tsx",
            lineNumber: 221,
            columnNumber: 107
        }, this)
    }, index, false, {
        fileName: "[project]/src/components/AIChatShell.tsx",
        lineNumber: 221,
        columnNumber: 10
    }, this);
}
function _AIChatShellMessagesMapMessageRelatedLinksMap(link, linkIndex) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: link.href,
        className: "inline-flex items-center gap-1 text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg text-secondary hover:text-white transition-colors",
        children: [
            link.title,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                className: "h-3 w-3"
            }, void 0, false, {
                fileName: "[project]/src/components/AIChatShell.tsx",
                lineNumber: 224,
                columnNumber: 215
            }, this)
        ]
    }, linkIndex, true, {
        fileName: "[project]/src/components/AIChatShell.tsx",
        lineNumber: 224,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AIChatShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ExternalLink
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
            d: "M15 3h6v6",
            key: "1q9fwt"
        }
    ],
    [
        "path",
        {
            d: "M10 14 21 3",
            key: "gplh6r"
        }
    ],
    [
        "path",
        {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp"
        }
    ]
];
const ExternalLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("external-link", __iconNode);
;
 //# sourceMappingURL=external-link.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExternalLink",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_012372ff._.js.map