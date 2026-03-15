module.exports=[918622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},556704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},832319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},324725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},193695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},349817,e=>{"use strict";var t=e.i(747909),r=e.i(174017),a=e.i(996250),n=e.i(759756),s=e.i(561916),i=e.i(174677),o=e.i(869741),l=e.i(316795),d=e.i(487718),u=e.i(995169),p=e.i(47587),c=e.i(666012),T=e.i(570101),E=e.i(626937),h=e.i(10372),R=e.i(193695);e.i(52474);var N=e.i(257297),g=e.i(89171),m=e.i(224389);async function _(){try{let e=(0,m.createClient)("https://adlqcdnpjaglfvleeykj.supabase.co",process.env.SUPABASE_SERVICE_ROLE_KEY),{error:t}=await e.rpc("exec",{sql:`
        CREATE TABLE IF NOT EXISTS shop_orders (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          order_number TEXT UNIQUE NOT NULL,
          customer_name TEXT NOT NULL,
          customer_email TEXT NOT NULL,
          customer_phone TEXT NOT NULL,
          shipping_street TEXT NOT NULL,
          shipping_city TEXT NOT NULL,
          shipping_postal_code TEXT NOT NULL,
          shipping_country TEXT DEFAULT 'Belgi\xeb' NOT NULL,
          billing_street TEXT,
          billing_city TEXT,
          billing_postal_code TEXT,
          billing_country TEXT,
          items JSONB NOT NULL,
          subtotal DECIMAL(10,2) NOT NULL,
          shipping_cost DECIMAL(10,2) NOT NULL,
          tax DECIMAL(10,2) DEFAULT 0,
          total DECIMAL(10,2) NOT NULL,
          status TEXT DEFAULT 'pending',
          payment_status TEXT DEFAULT 'pending',
          payment_method TEXT,
          payment_id TEXT,
          customer_notes TEXT,
          admin_notes TEXT,
          tracking_number TEXT,
          tracking_url TEXT,
          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW(),
          paid_at TIMESTAMPTZ,
          shipped_at TIMESTAMPTZ,
          delivered_at TIMESTAMPTZ
        );
      `});if(t)throw Error(`Failed to create shop_orders: ${t.message}`);let{error:r}=await e.rpc("exec",{sql:`
        CREATE TABLE IF NOT EXISTS shop_order_items (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          order_id UUID REFERENCES shop_orders(id) ON DELETE CASCADE,
          product_id TEXT NOT NULL,
          product_name TEXT NOT NULL,
          product_sku TEXT,
          quantity INTEGER NOT NULL,
          unit_price DECIMAL(10,2) NOT NULL,
          total_price DECIMAL(10,2) NOT NULL,
          created_at TIMESTAMPTZ DEFAULT NOW()
        );
      `});if(r)throw Error(`Failed to create shop_order_items: ${r.message}`);return g.NextResponse.json({success:!0,message:"Database tables succesvol aangemaakt! ✅"})}catch(e){return console.error("Setup error:",e),g.NextResponse.json({error:e.message||"Failed to setup database",instructions:"Gebruik de handmatige methode via Supabase Dashboard"},{status:500})}}e.s(["POST",()=>_],602585);var x=e.i(602585);let A=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/admin/setup-database/route",pathname:"/api/admin/setup-database",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/admin/setup-database/route.ts",nextConfigOutput:"",userland:x}),{workAsyncStorage:v,workUnitAsyncStorage:L,serverHooks:U}=A;function f(){return(0,a.patchFetch)({workAsyncStorage:v,workUnitAsyncStorage:L})}async function C(e,t,a){A.isDev&&(0,n.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let g="/api/admin/setup-database/route";g=g.replace(/\/index$/,"")||"/";let m=await A.prepare(e,t,{srcPage:g,multiZoneDraftMode:!1});if(!m)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:_,params:x,nextConfig:v,parsedUrl:L,isDraftMode:U,prerenderManifest:f,routerServerContext:C,isOnDemandRevalidate:O,revalidateOnlyGenerated:b,resolvedPathname:w,clientReferenceManifest:y,serverActionsManifest:I}=m,S=(0,o.normalizeAppPath)(g),D=!!(f.dynamicRoutes[S]||f.routes[w]),P=async()=>((null==C?void 0:C.render404)?await C.render404(e,t,L,!1):t.end("This page could not be found"),null);if(D&&!U){let e=!!f.routes[w],t=f.dynamicRoutes[S];if(t&&!1===t.fallback&&!e){if(v.experimental.adapterPath)return await P();throw new R.NoFallbackError}}let M=null;!D||A.isDev||U||(M="/index"===(M=w)?"/":M);let X=!0===A.isDev||!D,k=D&&!X;I&&y&&(0,i.setManifestsSingleton)({page:g,clientReferenceManifest:y,serverActionsManifest:I});let q=e.method||"GET",F=(0,s.getTracer)(),j=F.getActiveScopeSpan(),H={params:x,prerenderManifest:f,renderOpts:{experimental:{authInterrupts:!!v.experimental.authInterrupts},cacheComponents:!!v.cacheComponents,supportsDynamicResponse:X,incrementalCache:(0,n.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:v.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a,n)=>A.onRequestError(e,t,a,n,C)},sharedContext:{buildId:_}},K=new l.NodeNextRequest(e),$=new l.NodeNextResponse(t),B=d.NextRequestAdapter.fromNodeNextRequest(K,(0,d.signalFromNodeResponse)(t));try{let i=async e=>A.handle(B,H).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=F.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==u.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=r.get("next.route");if(a){let t=`${q} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t)}else e.updateName(`${q} ${g}`)}),o=!!(0,n.getRequestMeta)(e,"minimalMode"),l=async n=>{var s,l;let d=async({previousCacheEntry:r})=>{try{if(!o&&O&&b&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let s=await i(n);e.fetchMetrics=H.renderOpts.fetchMetrics;let l=H.renderOpts.pendingWaitUntil;l&&a.waitUntil&&(a.waitUntil(l),l=void 0);let d=H.renderOpts.collectedTags;if(!D)return await (0,c.sendResponse)(K,$,s,H.renderOpts.pendingWaitUntil),null;{let e=await s.blob(),t=(0,T.toNodeOutgoingHttpHeaders)(s.headers);d&&(t[h.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==H.renderOpts.collectedRevalidate&&!(H.renderOpts.collectedRevalidate>=h.INFINITE_CACHE)&&H.renderOpts.collectedRevalidate,a=void 0===H.renderOpts.collectedExpire||H.renderOpts.collectedExpire>=h.INFINITE_CACHE?void 0:H.renderOpts.collectedExpire;return{value:{kind:N.CachedRouteKind.APP_ROUTE,status:s.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==r?void 0:r.isStale)&&await A.onRequestError(e,t,{routerKind:"App Router",routePath:g,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:k,isOnDemandRevalidate:O})},!1,C),t}},u=await A.handleResponse({req:e,nextConfig:v,cacheKey:M,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:f,isRoutePPREnabled:!1,isOnDemandRevalidate:O,revalidateOnlyGenerated:b,responseGenerator:d,waitUntil:a.waitUntil,isMinimalMode:o});if(!D)return null;if((null==u||null==(s=u.value)?void 0:s.kind)!==N.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==u||null==(l=u.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});o||t.setHeader("x-nextjs-cache",O?"REVALIDATED":u.isMiss?"MISS":u.isStale?"STALE":"HIT"),U&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let R=(0,T.fromNodeOutgoingHttpHeaders)(u.value.headers);return o&&D||R.delete(h.NEXT_CACHE_TAGS_HEADER),!u.cacheControl||t.getHeader("Cache-Control")||R.get("Cache-Control")||R.set("Cache-Control",(0,E.getCacheControlHeader)(u.cacheControl)),await (0,c.sendResponse)(K,$,new Response(u.value.body,{headers:R,status:u.value.status||200})),null};j?await l(j):await F.withPropagatedContext(e.headers,()=>F.trace(u.BaseServerSpan.handleRequest,{spanName:`${q} ${g}`,kind:s.SpanKind.SERVER,attributes:{"http.method":q,"http.target":e.url}},l))}catch(t){if(t instanceof R.NoFallbackError||await A.onRequestError(e,t,{routerKind:"App Router",routePath:S,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:k,isOnDemandRevalidate:O})},!1,C),D)throw t;return await (0,c.sendResponse)(K,$,new Response(null,{status:500})),null}}e.s(["handler",()=>C,"patchFetch",()=>f,"routeModule",()=>A,"serverHooks",()=>U,"workAsyncStorage",()=>v,"workUnitAsyncStorage",()=>L],349817)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__ad960b53._.js.map