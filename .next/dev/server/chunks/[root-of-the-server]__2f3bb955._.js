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
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/logger.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logger",
    ()=>logger
]);
class Logger {
    isDevelopment = ("TURBOPACK compile-time value", "development") !== 'production';
    debug(message, ...args) {
        if (this.isDevelopment) {
            console.log(`[DEBUG] ${message}`, ...args);
        }
    }
    info(message, ...args) {
        if (this.isDevelopment) {
            console.info(`[INFO] ${message}`, ...args);
        }
    }
    warn(message, ...args) {
        if (this.isDevelopment) {
            console.warn(`[WARN] ${message}`, ...args);
        }
    }
    error(message, error) {
        // Always log errors, but sanitize in production
        if (this.isDevelopment) {
            console.error(`[ERROR] ${message}`, error);
        } else {
            // In production, log only the message without sensitive details
            console.error(`[ERROR] ${message}`);
        // In a real production app, send to error tracking service (Sentry, etc.)
        }
    }
}
const logger = new Logger();
}),
"[project]/src/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "checkDatabaseHealth",
    ()=>checkDatabaseHealth,
    "prisma",
    ()=>prisma,
    "withRetry",
    ()=>withRetry
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-pg/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/logger.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
// Ensure DATABASE_URL has sslmode parameter for self-signed certificates
let connectionString = process.env.DATABASE_URL;
if (connectionString && !connectionString.includes('sslmode=')) {
    connectionString += connectionString.includes('?') ? '&sslmode=no-verify' : '?sslmode=no-verify';
}
// Enhanced connection pool configuration for Supabase with retry logic
const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["Pool"]({
    connectionString,
    ssl: {
        rejectUnauthorized: false // Accept self-signed certificates
    },
    // Connection pool settings optimized for serverless
    max: 10,
    min: 2,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
    maxUses: 7500
});
// Handle pool errors gracefully
pool.on('error', (err)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error('Unexpected error on idle client', err);
});
// Connection retry logic
pool.on('connect', ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].debug('Database connection established');
    }
});
const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrismaPg"](pool);
const globalForPrisma = /*TURBOPACK member replacement*/ __turbopack_context__.g;
const prisma = globalForPrisma.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
    adapter,
    log: ("TURBOPACK compile-time truthy", 1) ? [
        'error',
        'warn'
    ] : "TURBOPACK unreachable",
    errorFormat: 'pretty'
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
// Graceful shutdown
process.on('beforeExit', async ()=>{
    await pool.end();
    await prisma.$disconnect();
});
async function withRetry(operation, maxRetries = 3, delay = 1000) {
    let lastError;
    for(let i = 0; i < maxRetries; i++){
        try {
            return await operation();
        } catch (error) {
            lastError = error;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error(`Database operation failed (attempt ${i + 1}/${maxRetries})`, error);
            // Don't retry on certain errors
            if (error instanceof Error && (error.message.includes('Unique constraint') || error.message.includes('Foreign key constraint'))) {
                throw error;
            }
            if (i < maxRetries - 1) {
                // Exponential backoff
                const waitTime = delay * Math.pow(2, i);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].debug(`Retrying in ${waitTime}ms...`);
                await new Promise((resolve)=>setTimeout(resolve, waitTime));
            }
        }
    }
    throw lastError || new Error('Operation failed after retries');
}
async function checkDatabaseHealth() {
    try {
        await prisma.$queryRaw`SELECT 1`;
        return true;
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error('Database health check failed', error);
        return false;
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/api/health/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const dynamic = 'force-dynamic';
const runtime = 'nodejs';
async function GET() {
    const startTime = Date.now();
    try {
        // Check database health
        const dbHealthy = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkDatabaseHealth"])();
        const dbResponseTime = Date.now() - startTime;
        // Check environment
        const env = ("TURBOPACK compile-time value", "development") || 'unknown';
        const version = process.env.npm_package_version || '1.0.0';
        // Memory usage
        const memoryUsage = process.memoryUsage();
        const memoryMB = {
            rss: Math.round(memoryUsage.rss / 1024 / 1024),
            heapTotal: Math.round(memoryUsage.heapTotal / 1024 / 1024),
            heapUsed: Math.round(memoryUsage.heapUsed / 1024 / 1024),
            external: Math.round(memoryUsage.external / 1024 / 1024)
        };
        if (!dbHealthy) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                status: 'unhealthy',
                checks: {
                    database: {
                        status: 'fail',
                        responseTime: `${dbResponseTime}ms`
                    }
                },
                environment: env,
                version,
                timestamp: new Date().toISOString(),
                uptime: process.uptime()
            }, {
                status: 503
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: 'healthy',
            checks: {
                database: {
                    status: 'pass',
                    responseTime: `${dbResponseTime}ms`
                }
            },
            environment: env,
            version,
            memory: memoryMB,
            uptime: Math.round(process.uptime()),
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: 'error',
            message: error instanceof Error ? error.message : 'Unknown error',
            timestamp: new Date().toISOString()
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2f3bb955._.js.map