'use client';

import Script from 'next/script';

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
  const facebookPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
  const microsoftUetId = process.env.NEXT_PUBLIC_MICROSOFT_UET_ID || '187240546';

  if (!gaId && !googleAdsId && !clarityId && !facebookPixelId && !microsoftUetId) return null;

  return (
    <>
      {/* Facebook Pixel (Meta) */}
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

      {/* Microsoft UET Tag (Bing) */}
      {microsoftUetId && (
        <>
          <Script id="microsoft-uet" strategy="afterInteractive">
            {`
              (function(w,d,t,r,u){
                var f,n,i;
                w[u]=w[u]||[];
                f=function(){
                  var o={ti:"${microsoftUetId}", enableAutoSpaTracking: true};
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
            `}
          </Script>
          <Script id="microsoft-uet-consent" strategy="afterInteractive">
            {`
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
            `}
          </Script>
        </>
      )}

      {/* Google Analytics */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}

      {/* Google Ads - AW-17673401673 */}
      {googleAdsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-ads" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAdsId}');
            `}
          </Script>
        </>
      )}

      {/* Microsoft Clarity */}
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
    </>
  );
}
