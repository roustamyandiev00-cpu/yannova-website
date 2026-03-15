module.exports = [
"[project]/instrumentation.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "register",
    ()=>register
]);
async function register() {
    if ("TURBOPACK compile-time truthy", 1) {
        const tracer = (await __turbopack_context__.A("[externals]/dd-trace [external] (dd-trace, cjs, [project]/node_modules/dd-trace, async loader)")).default;
        tracer.init({
            service: 'yannova',
            env: ("TURBOPACK compile-time value", "development"),
            version: process.env.npm_package_version,
            logInjection: true
        });
    }
}
}),
];

//# sourceMappingURL=instrumentation_ts_cf8be71b._.js.map