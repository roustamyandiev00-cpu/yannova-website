module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/google/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
;
;
const dynamic = 'force-dynamic';
const systemPrompt = `Je bent de AI-verkoopassistent van Yannova Bouw, een bouwbedrijf in Zoersel gespecialiseerd in ramen, deuren, gevelrenovatie en isolatie.

DOEL:
Je primaire doel is om bezoekers om te zetten naar leads door actief hun behoeften te achterhalen en een gesprek aan te gaan.

STIJL EN TONALITEIT:
- Wees vriendelijk, professioneel EN ondernemend
- Geef KORTE, beknopte antwoorden (max 2-3 zinnen)
- Stel altijd een VERVOLGVRAG om het gesprek gaande te houden
- Gebruik een actieve, verkopende toon

GESPREKSTECHNIEKEN:
1. STEL OPEN VRAGEN: "Wat voor type ramen heeft u nu?", "In welke fase bevindt uw project zich?"
2. QUALIFY DE LEAD: Vraag naar locatie, timing, budgetindicatie, specifieke wensen
3. BIED WAARDE: Geef 1 concreet tip per antwoord, geen essays
4. CALL-TO-ACTION: Richt elk gesprek naar een offerte-aanvraag of telefoongesprek

BEDRIJFSINFO:
- Locatie: Zoersel, actief in Antwerpen en Mechelen
- Ervaring: 15+ jaar
- Garantie: 30 jaar garantie op alle werken
- Contact: +32 489 96 00 01, info@yannova.be
- Merken: Schüco, Reynaers, Aluplast, Salamander, Rehau, Veka, Impact, Aliplast

DIENSTEN:
- Ramen/deuren (PVC/Aluminium)
- Gevelrenovatie/crepi
- Dak- en gevelisolatie
- Totaalrenovaties
- Premiehulp (Mijn VerbouwPremie)

REGELS:
- MAX 50 woorden per antwoord
- Eindig met 1 concrete vraag
- Geen technische details tenzij specifiek gevraagd
- Wil de klant een offerte? -> Vraag direct hun email/telefoon
- Onbekend antwoord? -> "Daarvoor kunnen we u beter telefonisch adviseren. Bel +32 489 96 00 01"`;
async function POST(req) {
    try {
        const { messages } = await req.json();
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["streamText"])({
            model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["google"])('gemini-flash-latest'),
            system: systemPrompt,
            messages
        });
        return result.toDataStreamResponse();
    } catch (error) {
        console.error('Chat API Error:', error);
        return new Response(JSON.stringify({
            error: 'Internal server error',
            details: String(error)
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__afa13a63._.js.map