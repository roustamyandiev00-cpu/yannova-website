'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { trackPageView } from '@/lib/analytics';

/**
 * Loads GA4, Google Ads, Microsoft Clarity and Facebook Pixel.
 * Also handles:
 *  - Google Consent Mode V2 (default denied, updated on consent)
 *  - Soft-navigation pageview tracking for Next.js App Router
 *
 * Place once in root layout inside <head>.
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
  const facebookPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
  const microsoftUetId = process.env.NEXT_PUBLIC_MICROSOFT_UED;

  // ── Soft-navigation pageview tracking ──────────────────────────────────────
  const pathname = usePathname();
  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return (
    <>
      {/* ── Google Consent Mode V2 — must run before any gtag config ── */}
      {(gaId || googleAdsId) && (
ive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
            gtag('set', 'ads_data_redaction', true);
          `}
        </Script>
      )}

      {/* ── GA4 ── */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { send_page_view: false });
            `}
          </Script>
        </>
      )}

      {/* ── Google Ads ── */}
      {googleAdsId && (
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('config', '${googleAdsId}');
          `}
        </Script>
      )}

      {/* ── Microsoft Clarity ── */}
      {clarityId && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      )}

      {/* ── Facebook Pixel ── */}
      {facebookPixelId && (
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${facebookPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      {/* ── Microsoft UET (Bing Ads) ── */}
      {microsoftUetId && (
        <>
          <Script id="microsoft-uet" strategy="afterInteractive">
            {`
              (function(w,d,t,r,u){
                var f,n,i;w[u]=w[u]||[];
                f=function(){var o={ti:"${microsoftUetId}",enableAutoSpaTracking:true};
                  o.q=w[u];w[u]=new UET(o);w[u].push("pageLoad");};
                n=d.createElement(t);n.src=r;n.async=1;
                n.onload=n.onreadystatechange=function(){
                  var s=this.readyState;
                  s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null);
                };
                i=d.getElementsByTagName(t)[0];i.parentNode.insertBefore(n,i);
              })(window,document,"script","https://bat.bing.com/bat.js","uetq");
            `}
          </Script>
          <Script id="microsoft-uet-consent" strategy="afterInteractive">
            {`
              window.uetq = window.uetq || [];
              window.uetq.push('consent', 'default', { ad_storage: 'denied' });
              try {
                if (window.localStorage.getItem('cookieConsent') === 'accepted') {
                  window.uetq.push('consent', 'update', { ad_storage: 'granted' });
                }
              } catch(e) {}
              window.addEventListener('storage', function(e) {
                if (e.key === 'cookieConsent') {
                  window.uetq.push('consent', 'update', {
                    ad_storage: e.newValue === 'accepted' ? 'granted' : 'denied'
                  });
                }
              });
            `}
          </Script>
        </>
      )}
    </>
  );
}
