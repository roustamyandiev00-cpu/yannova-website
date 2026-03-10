module.exports = [
"[project]/src/lib/seo.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateSEO",
    ()=>generateSEO,
    "locationKeywords",
    ()=>locationKeywords
]);
const baseUrl = 'https://www.yannova.be';
function generateSEO({ title, description, path = '', keywords = [], image = '/og-image.jpg', noindex = false }) {
    const url = `${baseUrl}${path}`;
    const fullTitle = path === '' ? title : `${title} | Yannova`;
    return {
        title: fullTitle,
        description,
        keywords: [
            ...keywords,
            'ramen antwerpen',
            'deuren antwerpen',
            'renovatie antwerpen',
            'yannova'
        ],
        alternates: {
            canonical: url
        },
        openGraph: {
            title: fullTitle,
            description,
            url,
            type: 'website',
            locale: 'nl_BE',
            siteName: 'Yannova Bouw',
            images: [
                {
                    url: `${baseUrl}${image}`,
                    width: 1200,
                    height: 630,
                    alt: title
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [
                `${baseUrl}${image}`
            ]
        },
        robots: noindex ? {
            index: false,
            follow: false
        } : {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1
            }
        }
    };
}
const locationKeywords = {
    antwerpen: [
        'ramen antwerpen',
        'deuren antwerpen',
        'renovatie antwerpen',
        'gevelrenovatie antwerpen',
        'ramen antwerpen stad'
    ],
    berchem: [
        'ramen berchem',
        'deuren berchem',
        'renovatie berchem'
    ],
    deurne: [
        'ramen deurne',
        'deuren deurne',
        'renovatie deurne'
    ],
    merksem: [
        'ramen merksem',
        'deuren merksem',
        'renovatie merksem'
    ],
    wilrijk: [
        'ramen wilrijk',
        'deuren wilrijk',
        'renovatie wilrijk'
    ],
    mechelen: [
        'ramen mechelen',
        'deuren mechelen',
        'renovatie mechelen'
    ],
    zoersel: [
        'ramen zoersel',
        'deuren zoersel',
        'renovatie zoersel'
    ]
};
}),
"[project]/src/app/contact/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/seo.ts [app-rsc] (ecmascript)");
;
const metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateSEO"])({
    title: "Contact - Gratis Offerte Aanvragen",
    description: "Neem contact op voor een gratis offerte of advies. Reactie binnen 24 uur. Bereikbaar via telefoon, email en WhatsApp. Actief in Antwerpen en omgeving.",
    path: "/contact",
    keywords: [
        "contact yannova",
        "offerte aanvragen",
        "gratis opmeting",
        "renovatie antwerpen contact"
    ]
});
function ContactLayout({ children }) {
    return children;
}
}),
];

//# sourceMappingURL=src_97fa1d85._.js.map