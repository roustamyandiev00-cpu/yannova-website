# Google Ads Implementatie - Samenvatting

## ✅ Wat is geïmplementeerd

### 1. Google Ads Tracking Library
**Bestand**: `src/lib/google-ads.ts`

Functies:
- `trackContactFormSubmission(value?)` - Track wanneer contactformulier wordt verzonden
- `trackPhoneClick()` - Track wanneer op telefoonnummer wordt geklikt
- `trackWhatsAppClick()` - Track wanneer op WhatsApp button wordt geklikt

### 2. ContactForm Component Update
**Bestand**: `src/components/ContactForm.tsx`

- Importeert `trackContactFormSubmission`
- Roept tracking aan na succesvolle formulier verzending
- Werkt automatisch wanneer Google Ads ID is geconfigureerd

### 3. Contact Page Update
**Bestanden**: 
- `src/app/contact/page.tsx` - Client component met tracking
- `src/app/contact/layout.tsx` - Server component voor metadata

Tracking toegevoegd voor:
- Telefoon nummer clicks
- WhatsApp button clicks

### 4. Analytics Component Update
**Bestand**: `src/components/Analytics.tsx`

- Ondersteunt nu zowel Google Analytics als Google Ads
- Laadt Google Ads tag automatisch wanneer `NEXT_PUBLIC_GOOGLE_ADS_ID` is ingesteld
- Werkt alleen in productie om test data te voorkomen

### 5. Environment Variables
**Bestand**: `.env.local`

Toegevoegd (uitgecommentarieerd):
```env
# NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
# NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL=xxxxxxxxxxxxx
```

## 🚀 Hoe te gebruiken

### Stap 1: Google Ads Conversion Action aanmaken
1. Ga naar Google Ads > Tools > Conversions
2. Maak een nieuwe "Submit lead form" conversion aan
3. Kopieer de Conversion ID (AW-XXXXXXXXX) en Label

### Stap 2: Environment Variables instellen
Open `.env.local` en uncomment + vul in:
```env
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-123456789
NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL=AbC-D_efG-h12_34-567
```

### Stap 3: Deploy naar productie
```bash
npm run build
npm run start
# Of deploy naar Vercel
```

### Stap 4: Verifieer tracking
- Vul het contactformulier in
- Check browser console voor: "Google Ads conversion tracked: ..."
- Wacht 24-48 uur voor data in Google Ads

## 📊 Wat wordt getrackt?

| Event | Trigger | Waarde |
|-------|---------|--------|
| Conversion | Contactformulier verzonden | 1.0 EUR (aanpasbaar) |
| phone_click | Telefoon nummer geklikt | - |
| whatsapp_click | WhatsApp button geklikt | - |

## 🔧 Geavanceerde opties

### Dynamische conversion values
Pas de waarde aan op basis van het onderwerp:

```typescript
// In ContactForm.tsx, voor trackContactFormSubmission():
const subject = formData.get('subject');
let value = 1.0;
if (subject === 'offerte') value = 50.0;
if (subject === 'renovatie') value = 100.0;

trackContactFormSubmission(value);
```

### Enhanced Conversions
Voeg customer data toe voor betere tracking:

```typescript
// In src/lib/google-ads.ts
trackContactFormSubmission(value, email, phone);
```

## 📚 Documentatie

Zie `GOOGLE_ADS_SETUP.md` voor:
- Gedetailleerde setup instructies
- Troubleshooting tips
- Privacy & GDPR overwegingen
- Google Tag Assistant gebruik

## ✨ Voordelen

1. **ROI Tracking** - Zie exact welke campagnes leads genereren
2. **Cost per Lead** - Bereken kosten per contactformulier verzending
3. **Optimization** - Google Ads kan automatisch optimaliseren voor conversies
4. **Remarketing** - Maak lijsten van mensen die het formulier hebben ingevuld
5. **Multi-channel** - Track ook telefoon en WhatsApp interacties

## 🔒 Privacy

De implementatie:
- Werkt alleen in productie (niet in development)
- Respecteert cookie consent (via CookieConsent component)
- Gebruikt geen PII zonder toestemming
- Is GDPR compliant wanneer correct geconfigureerd

## 🆘 Support

Voor vragen of problemen:
1. Check `GOOGLE_ADS_SETUP.md`
2. Gebruik Google Tag Assistant voor debugging
3. Verifieer environment variables
4. Check browser console voor errors

---

**Implementatie datum:** Maart 2026
**Status:** ✅ Klaar voor gebruik
