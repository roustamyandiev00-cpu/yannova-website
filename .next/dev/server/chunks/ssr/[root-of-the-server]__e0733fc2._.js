module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/error.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/error.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/faq-schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "commonFAQs",
    ()=>commonFAQs,
    "generateFAQSchema",
    ()=>generateFAQSchema
]);
function generateFAQSchema(faqs) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq)=>({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer
                }
            }))
    };
}
const commonFAQs = {
    ramen: [
        {
            question: 'Wat kost het plaatsen van nieuwe ramen in Antwerpen?',
            answer: 'De prijs voor nieuwe ramen hangt af van het type, de grootte en het materiaal. Gemiddeld betaal je tussen €300 en €800 per m². Wij bieden een gratis opmeting en offerte binnen 24 uur.'
        },
        {
            question: 'Hoe lang duurt het plaatsen van ramen?',
            answer: 'Voor een gemiddelde woning duurt de plaatsing 1 tot 2 dagen. Dit hangt af van het aantal ramen en de complexiteit van de installatie.'
        },
        {
            question: 'Welke premies zijn er beschikbaar voor nieuwe ramen?',
            answer: 'In Vlaanderen kun je aanspraak maken op de renovatiepremie voor hoogrendementsbeglazing. De premie bedraagt tot €20 per m² glas. Bekijk onze premie-gids voor meer informatie.'
        }
    ],
    deuren: [
        {
            question: 'Wat zijn de voordelen van een nieuwe voordeur?',
            answer: 'Een nieuwe voordeur verbetert de isolatie, verhoogt de veiligheid en geeft je woning een frisse uitstraling. Moderne deuren zijn energiezuinig en onderhoudsvriendelijk.'
        },
        {
            question: 'Welke soorten deuren plaatst Yannova?',
            answer: 'Wij plaatsen voordeuren, achterdeuren, schuifdeuren en garagepoorten in verschillende materialen zoals PVC, aluminium en hout.'
        }
    ],
    renovatie: [
        {
            question: 'Wat houdt een totaalrenovatie in?',
            answer: 'Een totaalrenovatie omvat alle aspecten van je woning: van gevelwerken en isolatie tot ramen, deuren en binnenafwerking. Wij begeleiden je van A tot Z.'
        },
        {
            question: 'Hoe lang duurt een renovatieproject?',
            answer: 'Dit hangt af van de omvang. Een gevelrenovatie duurt gemiddeld 2-4 weken, een totaalrenovatie kan 2-6 maanden duren.'
        }
    ],
    gevelisolatie: [
        {
            question: 'Wat kost gevelisolatie?',
            answer: 'Gevelisolatie kost gemiddeld tussen €80 en €150 per m², afhankelijk van het type isolatie en afwerking. Met premies kan dit aanzienlijk goedkoper uitvallen.'
        },
        {
            question: 'Welke premies zijn er voor gevelisolatie?',
            answer: 'Je kunt aanspraak maken op de Vlaamse renovatiepremie voor muurisolatie. De premie bedraagt tot €50 per m². Bekijk onze premie-gids voor alle voorwaarden.'
        }
    ]
};
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$faq$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/faq-schema.ts [app-rsc] (ecmascript)");
;
;
const dynamic = 'force-dynamic';
const homepageFAQs = [
    {
        question: "Wat zijn de kosten voor nieuwe ramen in Antwerpen?",
        answer: "De prijs voor nieuwe ramen hangt af van het type, de grootte en het materiaal. Gemiddeld betaal je tussen €300 en €800 per m². Wij bieden een gratis opmeting en offerte binnen 24 uur."
    },
    {
        question: "In welke regio's is Yannova actief?",
        answer: "Wij zijn actief in Antwerpen stad en alle randgemeenten: Berchem, Deurne, Merksem, Wilrijk, Brasschaat, Schoten, Wijnegem, Schilde, Ranst, Mortsel en omgeving."
    }
];
const faqSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$faq$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateFAQSchema"])(homepageFAQs);
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(faqSchema)
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-900 text-white p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold mb-4",
                        children: "Yannova Bouw"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-300 mb-4",
                        children: "Specialist in ramen, deuren en gevelrenovatie in Antwerpen en omgeving."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/offerte",
                        className: "inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600",
                        children: "Gratis offerte aanvragen"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e0733fc2._.js.map