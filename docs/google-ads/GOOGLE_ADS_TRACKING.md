# Google Ads Tracking Implementatie - Yannova Next.js

## Overzicht
Deze guide laat zien hoe je Google Ads tracking implementeert in je Next.js website met:
- Google Tag (gtag.js)
- Conversie tracking voor formulieren
- Event tracking voor WhatsApp, Telefoon, Email klikken

---

## Stap 1: Environment Variables

Voeg toe aan `.env.local`:

```env
# Google Ads
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Waar vind je deze IDs?**
- Google Ads ID: Google Ads > Tools > Conversies > Tag installeren
- GA Measurement ID: Google Analytics > Admin > Data Streams

---

## Stap 2: Google Tag Component

Maak bestand: `src/components/GoogleAds.tsx`

```typescript
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAds() {
  if (!GOOGLE_ADS_ID) return null;

  return (
    <>
      {/* Google Tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  );
}

// Helper functie voor conversie tracking
export function trackConversion(conversionLabel: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
      value: value || 0,
      currency: 'EUR',
    });
  }
}

// Event tracking helpers
export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

// Specifieke tracking functies
export const trackFormSubmit = (formType: string = 'offerte') => {
  trackEvent('form_submit_offerte', {
    form_type: formType,
    value: 50,
    currency: 'EUR',
  });
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    value: 20,
    currency: 'EUR',
  });
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    value: 25,
    currency: 'EUR',
  });
};

export const trackEmailClick = () => {
  trackEvent('email_click', {
    value: 15,
    currency: 'EUR',
  });
};

// TypeScript declarations
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
```

---

## Stap 3: Installeer in Root Layout

Update `src/app/layout.tsx`:

```typescript
import { GoogleAds } from '@/components/GoogleAds';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>
        <GoogleAds />
        {children}
      </body>
    </html>
  );
}
```

---

## Stap 4: Tracking in Contact Formulier

Update je contact formulier component (bijvoorbeeld `src/components/ContactForm.tsx`):

```typescript
'use client';

import { useState } from 'react';
import { trackFormSubmit } from '@/components/GoogleAds';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      // Verstuur formulier
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // ✅ BELANGRIJK: Track conversie NA succesvolle verzending
        trackFormSubmit('offerte');
        
        alert('Bedankt! We nemen zo snel mogelijk contact op.');
        e.currentTarget.reset();
      } else {
        alert('Er ging iets mis. Probeer het opnieuw.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Er ging iets mis. Probeer het opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Formulier velden */}
      <input type="text" name="name" required />
      <input type="email" name="email" required />
      <input type="tel" name="phone" required />
      <textarea name="message" required />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Verzenden...' : 'Verstuur'}
      </button>
    </form>
  );
}
```

---

## Stap 5: Tracking voor WhatsApp, Telefoon, Email

Maak component: `src/components/ContactButtons.tsx`

```typescript
'use client';

import { trackWhatsAppClick, trackPhoneClick, trackEmailClick } from '@/components/GoogleAds';

export function ContactButtons() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    // Link opent automatisch
  };

  const handlePhoneClick = () => {
    trackPhoneClick();
    // Link opent automatisch
  };

  const handleEmailClick = () => {
    trackEmailClick();
    // Link opent automatisch
  };

  return (
    <div className="flex gap-4">
      {/* WhatsApp */}
      <a
        href="https://wa.me/32123456789?text=Hallo%20Yannova,%20ik%20wil%20graag%20een%20offerte"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="btn-whatsapp"
      >
        WhatsApp
      </a>

      {/* Telefoon */}
      <a
        href="tel:+32123456789"
        onClick={handlePhoneClick}
        className="btn-phone"
      >
        Bel ons
      </a>

      {/* Email */}
      <a
        href="mailto:info@yannova.be"
        onClick={handleEmailClick}
        className="btn-email"
      >
        Email
      </a>
    </div>
  );
}
```

---

## Stap 6: Gebruik in Landingspagina's

Voorbeeld voor `src/app/ramen-deuren-antwerpen/page.tsx`:

```typescript
import { ContactForm } from '@/components/ContactForm';
import { ContactButtons } from '@/components/ContactButtons';

export default function RamenDeurenAntwerpenPage() {
  return (
    <div>
      <h1>Ramen en Deuren Plaatsen in Antwerpen</h1>
      
      {/* Hero sectie met direct contact */}
      <section>
        <ContactButtons />
      </section>

      {/* Offerte formulier */}
      <section>
        <h2>Vraag een gratis offerte aan</h2>
        <ContactForm />
      </section>
    </div>
  );
}
```

---

## Stap 7: Testing

### Test met Google Tag Assistant:

1. **Installeer extensie:**
   - Chrome Web Store > "Google Tag Assistant"

2. **Test je website:**
   ```
   1. Open je website
   2. Klik op Tag Assistant extensie
   3. Klik "Connect"
   4. Voer acties uit (formulier verzenden, buttons klikken)
   5. Check of events worden geregistreerd
   ```

3. **Verwachte events:**
   - `page_view` - Bij elke pagina
   - `form_submit_offerte` - Bij formulier verzenden
   - `whatsapp_click` - Bij WhatsApp klik
   - `phone_click` - Bij telefoon klik
   - `email_click` - Bij email klik

### Test in Console:

Open browser console en test:

```javascript
// Test of gtag beschikbaar is
console.log(typeof window.gtag); // Moet 'function' zijn

// Test event
window.gtag('event', 'test_event', { test: true });

// Check dataLayer
console.log(window.dataLayer);
```

---

## Stap 8: Conversie Labels Koppelen

Na het aanmaken van conversies in Google Ads krijg je labels zoals:

```
AW-XXXXXXXXXX/AbC-XXXXXXXXXX
```

Update je tracking functies:

```typescript
// In GoogleAds.tsx
export const trackFormSubmit = (formType: string = 'offerte') => {
  // Gebruik je echte conversie label
  trackConversion('AbC-XXXXXXXXXX', 50);
  
  trackEvent('form_submit_offerte', {
    form_type: formType,
    value: 50,
    currency: 'EUR',
  });
};
```

---

## Stap 9: Verificatie in Google Ads

### Check conversies:

1. **Google Ads Dashboard:**
   - Tools > Conversies
   - Klik op conversie naam
   - Check "Recent conversions"

2. **Verwachte status:**
   - "No recent conversions" → Nog geen data (wacht 24-48u)
   - "Recording conversions" → ✅ Werkt!
   - "Unverified" → Tag niet correct geïnstalleerd

3. **Test conversie:**
   - Verstuur test formulier
   - Wacht 2-4 uur
   - Check of conversie zichtbaar is

---

## Veelvoorkomende Problemen

### "gtag is not defined"
**Oplossing:**
- Check of Script component correct geladen is
- Gebruik `strategy="afterInteractive"`
- Check browser console voor errors

### "Conversies niet zichtbaar in Google Ads"
**Oplossing:**
- Wacht 24-48 uur (data vertraging)
- Check of conversie "Enabled" is
- Gebruik Google Tag Assistant
- Check of juiste conversie label gebruikt wordt

### "Te veel conversies"
**Oplossing:**
- Track alleen NA succesvolle verzending
- Gebruik `if (response.ok)` check
- Voorkom dubbele tracking

---

## Best Practices

1. **Track alleen echte conversies:**
   ```typescript
   // ✅ GOED
   if (response.ok) {
     trackFormSubmit();
   }
   
   // ❌ FOUT
   trackFormSubmit(); // Voor response check
   ```

2. **Gebruik duidelijke event namen:**
   ```typescript
   // ✅ GOED
   trackEvent('form_submit_offerte');
   
   // ❌ FOUT
   trackEvent('submit');
   ```

3. **Voeg waarden toe:**
   ```typescript
   trackEvent('form_submit', {
     value: 50,
     currency: 'EUR',
     form_type: 'offerte',
   });
   ```

4. **Test in development:**
   ```typescript
   if (process.env.NODE_ENV === 'development') {
     console.log('Would track:', eventName, params);
     return;
   }
   trackEvent(eventName, params);
   ```

---

## Checklist

- [ ] Environment variables toegevoegd
- [ ] GoogleAds component gemaakt
- [ ] Geïnstalleerd in root layout
- [ ] Tracking toegevoegd aan contact formulier
- [ ] Contact buttons hebben tracking
- [ ] Google Tag Assistant getest
- [ ] Test conversie uitgevoerd
- [ ] Conversies zichtbaar in Google Ads
- [ ] Klaar voor campagne! 🚀

---

## Volgende Stappen

1. Zie `GOOGLE_ADS_CONVERSIES.md` voor conversie setup in Google Ads
2. Zie `GOOGLE_ADS_LANDINGSPAGINAS.md` voor landingspagina's maken
3. Zie `GOOGLE_ADS_ZOEKWOORDEN.md` voor zoekwoorden lijst
