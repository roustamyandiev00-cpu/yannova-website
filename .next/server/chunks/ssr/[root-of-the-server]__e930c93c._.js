module.exports=[918622,(a,b,c)=>{b.exports=a.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},187924,(a,b,c)=>{"use strict";b.exports=a.r(342602).vendored["react-ssr"].ReactJsxRuntime},342602,(a,b,c)=>{"use strict";b.exports=a.r(918622)},572131,(a,b,c)=>{"use strict";b.exports=a.r(342602).vendored["react-ssr"].React},935112,(a,b,c)=>{"use strict";b.exports=a.r(342602).vendored["react-ssr"].ReactDOM},346058,(a,b,c)=>{"use strict";function d(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(d=function(a){return a?c:b})(a)}c._=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=d(b);if(c&&c.has(a))return c.get(a);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(e,g,h):e[g]=a[g]}return e.default=a,c&&c.set(a,e),e}},833354,(a,b,c)=>{"use strict";c._=function(a){return a&&a.__esModule?a:{default:a}}},292966,(a,b,c)=>{"use strict";b.exports=a.r(342602).vendored.contexts.HeadManagerContext},430089,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"setAttributesFromProps",{enumerable:!0,get:function(){return g}});let d={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},e=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function f(a){return["async","defer","noModule"].includes(a)}function g(a,b){for(let[c,g]of Object.entries(b)){if(!b.hasOwnProperty(c)||e.includes(c)||void 0===g)continue;let h=d[c]||c.toLowerCase();"SCRIPT"===a.tagName&&f(h)?a[h]=!!g:a.setAttribute(h,String(g)),(!1===g||"SCRIPT"===a.tagName&&f(h)&&(!g||"false"===g))&&(a.setAttribute(h,""),a.removeAttribute(h))}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},612962,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={cancelIdleCallback:function(){return g},requestIdleCallback:function(){return f}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="u">typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(a){let b=Date.now();return self.setTimeout(function(){a({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-b))}})},1)},g="u">typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(a){return clearTimeout(a)};("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},496665,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return t},handleClientScriptLoad:function(){return q},initScriptLoader:function(){return r}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(833354),g=a.r(346058),h=a.r(187924),i=f._(a.r(935112)),j=g._(a.r(572131)),k=a.r(292966),l=a.r(430089),m=a.r(612962),n=new Map,o=new Set,p=a=>{let{src:b,id:c,onLoad:d=()=>{},onReady:e=null,dangerouslySetInnerHTML:f,children:g="",strategy:h="afterInteractive",onError:j,stylesheets:k}=a,m=c||b;if(m&&o.has(m))return;if(n.has(b)){o.add(m),n.get(b).then(d,j);return}let p=()=>{e&&e(),o.add(m)},q=document.createElement("script"),r=new Promise((a,b)=>{q.addEventListener("load",function(b){a(),d&&d.call(this,b),p()}),q.addEventListener("error",function(a){b(a)})}).catch(function(a){j&&j(a)});f?(q.innerHTML=f.__html||"",p()):g?(q.textContent="string"==typeof g?g:Array.isArray(g)?g.join(""):"",p()):b&&(q.src=b,n.set(b,r)),(0,l.setAttributesFromProps)(q,a),"worker"===h&&q.setAttribute("type","text/partytown"),q.setAttribute("data-nscript",h),k&&(a=>{if(i.default.preinit)return a.forEach(a=>{i.default.preinit(a,{as:"style"})})})(k),document.body.appendChild(q)};function q(a){let{strategy:b="afterInteractive"}=a;"lazyOnload"===b?window.addEventListener("load",()=>{(0,m.requestIdleCallback)(()=>p(a))}):p(a)}function r(a){a.forEach(q),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(a=>{let b=a.id||a.getAttribute("src");o.add(b)})}function s(a){let{id:b,src:c="",onLoad:d=()=>{},onReady:e=null,strategy:f="afterInteractive",onError:g,stylesheets:l,...n}=a,{updateScripts:q,scripts:r,getIsSsr:s,appDir:t,nonce:u}=(0,j.useContext)(k.HeadManagerContext);u=n.nonce||u;let v=(0,j.useRef)(!1);(0,j.useEffect)(()=>{let a=b||c;v.current||(e&&a&&o.has(a)&&e(),v.current=!0)},[e,b,c]);let w=(0,j.useRef)(!1);if((0,j.useEffect)(()=>{if(!w.current){if("afterInteractive"===f)p(a);else"lazyOnload"===f&&("complete"===document.readyState?(0,m.requestIdleCallback)(()=>p(a)):window.addEventListener("load",()=>{(0,m.requestIdleCallback)(()=>p(a))}));w.current=!0}},[a,f]),("beforeInteractive"===f||"worker"===f)&&(q?(r[f]=(r[f]||[]).concat([{id:b,src:c,onLoad:d,onReady:e,onError:g,...n,nonce:u}]),q(r)):s&&s()?o.add(b||c):s&&!s()&&p({...a,nonce:u})),t){if(l&&l.forEach(a=>{i.default.preinit(a,{as:"style"})}),"beforeInteractive"===f)if(!c)return n.dangerouslySetInnerHTML&&(n.children=n.dangerouslySetInnerHTML.__html,delete n.dangerouslySetInnerHTML),(0,h.jsx)("script",{nonce:u,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0,{...n,id:b}])})`}});else return i.default.preload(c,n.integrity?{as:"script",integrity:n.integrity,nonce:u,crossOrigin:n.crossOrigin}:{as:"script",nonce:u,crossOrigin:n.crossOrigin}),(0,h.jsx)("script",{nonce:u,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${JSON.stringify([c,{...n,id:b}])})`}});"afterInteractive"===f&&c&&i.default.preload(c,n.integrity?{as:"script",integrity:n.integrity,nonce:u,crossOrigin:n.crossOrigin}:{as:"script",nonce:u,crossOrigin:n.crossOrigin})}return null}Object.defineProperty(s,"__nextScript",{value:!0});let t=s;("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},147283,(a,b,c)=>{b.exports=a.r(496665)},593999,a=>{"use strict";var b=a.i(187924),c=a.i(147283);function d(){let a="G-8WTT4MHH91",d=process.env.NEXT_PUBLIC_CLARITY_ID,e=process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID,f="10710YLS72918508";return(0,b.jsxs)(b.Fragment,{children:[e&&(0,b.jsx)(c.default,{id:"facebook-pixel",strategy:"afterInteractive",children:`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${e}');
            fbq('track', 'PageView');
          `}),f&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(c.default,{id:"microsoft-uet",strategy:"afterInteractive",children:`
              (function(w,d,t,r,u){
                var f,n,i;
                w[u]=w[u]||[];
                f=function(){
                  var o={ti:"${f}", enableAutoSpaTracking: true};
                  o.q=w[u];
                  w[u]=new UET(o);
                  w[u].push("pageLoad");
                };
                n=d.createElement(t);
                n.src=r;
                n.async=1;
                n.onload=n.onreadystatechange=function(){
                  var s=this.readyState;
                  s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null);
                };
                i=d.getElementsByTagName(t)[0];
                i.parentNode.insertBefore(n,i);
              })(window,document,"script","https://bat.bing.com/bat.js","uetq");
            `}),(0,b.jsx)(c.default,{id:"microsoft-uet-consent",strategy:"afterInteractive",children:`
              window.uetq = window.uetq || [];
              window.uetq.push('consent', 'default', { ad_storage: 'denied' });

              function updateMicrosoftUetConsent(value) {
                window.uetq = window.uetq || [];
                window.uetq.push('consent', 'update', {
                  ad_storage: value === 'accepted' ? 'granted' : 'denied',
                });
              }

              try {
                var initialConsent = window.localStorage.getItem('cookieConsent');
                if (initialConsent === 'accepted') {
                  updateMicrosoftUetConsent('accepted');
                }
              } catch (error) {
                console.warn('Unable to read cookie consent for UET', error);
              }

              window.addEventListener('cookie-consent-change', function(event) {
                updateMicrosoftUetConsent(event.detail);
              });

              window.addEventListener('storage', function(event) {
                if (event.key === 'cookieConsent') {
                  updateMicrosoftUetConsent(event.newValue || 'declined');
                }
              });
            `})]}),a&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(c.default,{src:`https://www.googletagmanager.com/gtag/js?id=${a}`,strategy:"afterInteractive"}),(0,b.jsx)(c.default,{id:"google-analytics",strategy:"afterInteractive",children:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${a}');
            `})]}),"",d&&(0,b.jsx)(c.default,{id:"microsoft-clarity",strategy:"afterInteractive",children:`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${d}");
          `})]})}a.s(["Analytics",()=>d])},676332,a=>{"use strict";var b=a.i(572131);function c(){return(0,b.useEffect)(()=>{let a=a=>{};if("PerformanceObserver"in window)try{new PerformanceObserver(b=>{let c=b.getEntries(),d=c[c.length-1],e=d.renderTime||d.loadTime||0;a({name:"LCP",value:e,rating:e<=2500?"good":e<=4e3?"needs-improvement":"poor"})}).observe({type:"largest-contentful-paint",buffered:!0}),new PerformanceObserver(b=>{b.getEntries().forEach(b=>{if(b.processingStart){let c=b.processingStart-b.startTime;a({name:"FID",value:c,rating:c<=100?"good":c<=300?"needs-improvement":"poor"})}})}).observe({type:"first-input",buffered:!0});let b=0;new PerformanceObserver(a=>{for(let c of a.getEntries())!c.hadRecentInput&&c.value&&(b+=c.value)}).observe({type:"layout-shift",buffered:!0}),window.addEventListener("visibilitychange",()=>{if("hidden"===document.visibilityState){let c=b<=.1?"good":b<=.25?"needs-improvement":"poor";a({name:"CLS",value:b,rating:c})}})}catch{}},[]),null}a.s(["PerformanceMonitor",()=>c])},925293,a=>{"use strict";var b=a.i(572131);function c(){return(0,b.useEffect)(()=>{Promise.all([a.A(549456),a.A(995018)]).then(([{datadogRum:a},{reactPlugin:b}])=>{a.getInitConfiguration()||a.init({applicationId:"42e26d88-40f4-4e0f-9e88-674fa3bd9a46",clientToken:"pubdac9aebe5ebdc8255db5c48b5e013f02",site:"datadoghq.eu",service:"yannova",env:"production",version:"1.0.0",sessionSampleRate:100,sessionReplaySampleRate:20,trackUserInteractions:!0,trackResources:!0,trackLongTasks:!0,defaultPrivacyLevel:"mask-user-input",plugins:[b({router:!0})]})})},[]),null}a.s(["DatadogRUM",()=>c])},549456,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@datadog_browser-rum_esm_ba9e8252._.js","server/chunks/ssr/node_modules_@datadog_c1380d98._.js","server/chunks/ssr/node_modules_@datadog_browser-rum_esm_entries_main_5522d7d4.js"].map(b=>a.l(b))).then(()=>b(328831)))},995018,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_@datadog_browser-rum-react_esm_entries_main_8e7866f3.js","server/chunks/ssr/node_modules_@datadog_64fdeaab._.js"].map(b=>a.l(b))).then(()=>b(334283)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__e930c93c._.js.map