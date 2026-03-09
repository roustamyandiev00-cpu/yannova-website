# Google Ads Actieplan voor Yannova - Complete Gids

## 📋 Overzicht

Dit document bevat het complete actieplan om Google Ads op te zetten voor Yannova in 7 stappen.

---

## ✅ Wat is al klaar?

### 1. Documentatie
- ✅ `GOOGLE_ADS_ZOEKWOORDEN.md` - Complete lijst met zoekwoorden per campagne
- ✅ `GOOGLE_ADS_CONVERSIES.md` - Conversie setup instructies
- ✅ `GOOGLE_ADS_TRACKING.md` - Technische implementatie guide

### 2. Landingspagina's
- ✅ `/ramen-deuren-antwerpen` - Ramen en deuren landingspagina
- ✅ `/gevelrenovatie-antwerpen` - Gevelrenovatie landingspagina
- ✅ `/crepi-isolatie-antwerpen` - Crepi landingspagina
- ✅ `/renovatiebedrijf-antwerpen` - Algemene renovatie landingspagina

### 3. Tracking Components
- ✅ `src/components/GoogleAds.tsx` - Google Ads tracking component
- ✅ `src/components/ContactButtons.tsx` - Contact buttons met tracking

---

## 🚀 Stap-voor-Stap Implementatie

### STAP 1: Environment Variables Instellen

Voeg toe aan `.env.local`:

```env
# Google Ads Tracking
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Waar vind je deze?**
1. Google Ads account aanmaken op ads.google.com
2. Tools > Conversies > Tag installeren
3. Kopieer de IDs

---

### STAP 2: Google Ads Component Installeren

Update `src/app/layout.tsx`:

```typescript
import { GoogleAds } from '@/components/GoogleAds';

export default function RootLayout({ children }: { children: React.ReactNode }) {
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

### STAP 3: Conversies Aanmaken in Google Ads

Ga naar Google Ads > Tools > Conversies > + Nieuwe conversie

#### Primary Conversie: Offerteformulier
```
Naam: Offerte Formulier - Yannova
Categorie: Submit lead form
Waarde: €50
Telling: Eén conversie per klik
Opnemen in "Conversies": JA ✓
```

#### Secondary Conversies:
1. **WhatsApp Klik** - €20 - NEE ✗
2. **Telefoon Klik** - €25 - NEE ✗
3. **Email Klik** - €15 - NEE ✗

---

### STAP 4: Contact Formulier Tracking Toevoegen

Update je contact formulier (bijvoorbeeld in `src/app/contact/page.tsx`):

```typescript
'use client';

import { useState } from 'react';
import { trackFormSubmit } from '@/components/GoogleAds';

export default function ContactPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // ✅ Track conversie NA succesvolle verzending
      trackFormSubmit('offerte');
      alert('Bedankt! We nemen zo snel mogelijk contact op.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Formulier velden */}
    </form>
  );
}
```

---

### STAP 5: Contact Buttons Toevoegen aan Landingspagina's

Update de landingspagina's om de ContactButtons component te gebruiken:

```typescript
import { ContactButtons } from '@/components/ContactButtons';

export default function RamenDeurenAntwerpenPage() {
  return (
    <div>
      <h1>Ramen en Deuren Plaatsen in Antwerpen</h1>
      
      <ContactButtons 
        phone="+32123456789"
        whatsapp="32123456789"
        whatsappMessage="Hallo Yannova, ik wil graag een offerte voor ramen en deuren"
      />
    </div>
  );
}
```

---

### STAP 6: Tracking Testen

#### Test met Google Tag Assistant:
1. Installeer Chrome extensie "Google Tag Assistant"
2. Open je website
3. Klik op extensie > "Connect"
4. Voer acties uit (formulier verzenden, buttons klikken)
5. Check of events worden geregistreerd

#### Verwachte events:
- `page_view` - Bij elke pagina
- `form_submit_offerte` - Bij formulier verzenden
- `whatsapp_click` - Bij WhatsApp klik
- `phone_click` - Bij telefoon klik

---

### STAP 7: Google Ads Campagnes Aanmaken

#### Campagne 1: Ramen en Deuren Antwerpen

**Instellingen:**
- Type: Zoeknetwerk
- Doel: Leads
- Budget: €7/dag (start klein)
- Locatie: Antwerpen + 15km
- Taal: Nederlands

**Zoekwoorden (Exact Match):**
```
[ramen plaatsen antwerpen]
[nieuwe ramen antwerpen]
[ramen en deuren antwerpen]
[ramen offerte antwerpen]
[pvc ramen antwerpen]
```

**Advertentie Voorbeeld:**
```
Titel 1: Ramen Plaatsen Antwerpen
Titel 2: Gratis Offerte | Yannova
Titel 3: PVC & Aluminium Ramen
Beschrijving 1: Vakkundige plaatsing van ramen en deuren in Antwerpen. 15+ jaar ervaring. Vraag gratis offerte aan!
Beschrijving 2: ✓ Snelle service ✓ Transparante prijs ✓ Garantie op werk
```

**Landingspagina:**
`https://jouwwebsite.be/ramen-deuren-antwerpen`

---

#### Campagne 2: Gevelrenovatie Antwerpen

**Instellingen:**
- Budget: €5/dag
- Locatie: Antwerpen + 15km

**Zoekwoorden:**
```
[gevelrenovatie antwerpen]
[gevel renoveren antwerpen]
[gevelwerken antwerpen]
[gevelrenovatie offerte antwerpen]
```

**Landingspagina:**
`https://jouwwebsite.be/gevelrenovatie-antwerpen`

---

#### Campagne 3: Crepi Antwerpen

**Instellingen:**
- Budget: €5/dag (later toevoegen)

**Zoekwoorden:**
```
[crepi aanbrengen antwerpen]
[crepi gevel antwerpen]
[gevel bepleisteren antwerpen]
[crepi offerte antwerpen]
```

**Landingspagina:**
`https://jouwwebsite.be/crepi-isolatie-antwerpen`

---

#### Campagne 4: Renovatiebedrijf Antwerpen

**Instellingen:**
- Budget: €5/dag (later toevoegen)

**Zoekwoorden:**
```
[renovatiebedrijf antwerpen]
[renovatie antwerpen]
[totaalrenovatie antwerpen]
[renovatie offerte antwerpen]
```

**Landingspagina:**
`https://jouwwebsite.be/renovatiebedrijf-antwerpen`

---

## 📊 Week 1 Planning

### Dag 1 (Vandaag)
- [ ] Environment variables toevoegen
- [ ] GoogleAds component installeren in layout
- [ ] Tracking testen met Google Tag Assistant
- [ ] Conversies aanmaken in Google Ads

### Dag 2
- [ ] Contact formulier tracking toevoegen
- [ ] ContactButtons component gebruiken in landingspagina's
- [ ] Test conversie uitvoeren
- [ ] Verificatie in Google Ads (wacht 24u)

### Dag 3
- [ ] Campagne 1 aanmaken (Ramen & Deuren)
- [ ] 5 exact match zoekwoorden toevoegen
- [ ] Budget instellen op €7/dag
- [ ] Advertenties schrijven
- [ ] Campagne activeren

### Dag 4-7
- [ ] Dagelijks zoektermen rapport checken
- [ ] Negatieve zoekwoorden toevoegen
- [ ] Conversies monitoren
- [ ] Noteer welke zoekwoorden klikken geven

---

## 📊 Week 2 Planning

### Analyseren
- Welke zoekwoorden geven klikken?
- Welke zoekwoorden geven conversies?
- Wat is de cost per lead?
- Welke advertenties presteren best?

### Optimaliseren
- Slechte zoekwoorden pauzeren
- Beste zoekwoorden: verhoog biedingen
- Irrelevante zoektermen uitsluiten
- Budget verschuiven naar winnende campagne

### Uitbreiden (Optioneel)
- Start Campagne 2 (Gevelrenovatie) als Campagne 1 goed presteert
- Voeg phrase match zoekwoorden toe
- Test nieuwe advertentie varianten

---

## 💰 Budget Aanbeveling

### Week 1-2 (Test Fase)
```
Campagne 1 (Ramen): €7/dag
Totaal: €7/dag = €49/week
```

### Week 3-4 (Als data goed is)
```
Campagne 1 (Ramen): €10/dag
Campagne 2 (Gevel): €5/dag
Totaal: €15/dag = €105/week
```

### Maand 2+ (Opschalen)
```
Beste campagne: €15/dag
Tweede beste: €10/dag
Derde beste: €5/dag
Totaal: €30/dag = €210/week
```

---

## 🎯 Verwachte Resultaten

### Bij €10/dag budget:
- **Klikken:** 2-5 per dag
- **Leads:** 2-10 per week
- **Offertes:** 1-3 per week
- **Cost per lead:** €20-50

### Realistische cijfers:
- **CPC:** €2-5
- **CTR:** 3-8%
- **Conversie rate:** 5-15%

**Belangrijk:** Eerste 2 weken zijn voor data verzamelen!

---

## ⚠️ Veelvoorkomende Fouten Vermijden

### ❌ NIET DOEN:
1. Direct groot budget starten (€50+/dag)
2. Broad match zoekwoorden gebruiken
3. Alle campagnes tegelijk starten
4. Tracking vergeten te installeren
5. Geen negatieve zoekwoorden toevoegen
6. Te snel opgeven (wacht 2 weken)

### ✅ WEL DOEN:
1. Klein starten (€5-10/dag)
2. Exact match zoekwoorden gebruiken
3. Eén campagne tegelijk testen
4. Tracking eerst goed instellen
5. Dagelijks zoektermen checken
6. Geduld hebben en data verzamelen

---

## 📞 Contact Informatie Updaten

Vergeet niet om in alle bestanden je echte contactgegevens in te vullen:

**Te vervangen:**
- `+32123456789` → Je echte telefoonnummer
- `32123456789` → Je WhatsApp nummer (zonder +)
- `info@yannova.be` → Je echte email

**Bestanden om te updaten:**
- Alle landingspagina's in `src/app/`
- `src/components/ContactButtons.tsx`
- Contact formulieren

---

## 🔗 Nuttige Links

- **Google Ads:** https://ads.google.com
- **Google Tag Assistant:** Chrome Web Store
- **Google Analytics:** https://analytics.google.com
- **Zoekwoorden Tool:** Google Keyword Planner

---

## ✅ Checklist: Ben je klaar om te starten?

### Technisch
- [ ] Environment variables toegevoegd
- [ ] GoogleAds component geïnstalleerd
- [ ] Tracking getest met Tag Assistant
- [ ] Conversies aangemaakt in Google Ads
- [ ] Test conversie succesvol uitgevoerd

### Content
- [ ] Landingspagina's live
- [ ] Contact informatie correct
- [ ] Formulieren werken
- [ ] WhatsApp/Telefoon buttons werken

### Google Ads
- [ ] Google Ads account aangemaakt
- [ ] Betaalmethode toegevoegd
- [ ] Eerste campagne aangemaakt
- [ ] Zoekwoorden toegevoegd
- [ ] Advertenties geschreven
- [ ] Budget ingesteld

### Klaar!
- [ ] Campagne geactiveerd
- [ ] Dagelijkse monitoring ingesteld
- [ ] Notitieblok klaar voor optimalisaties

---

## 🎉 Volgende Stappen

1. **Vandaag:** Tracking installeren en testen
2. **Deze week:** Eerste campagne starten
3. **Week 2:** Analyseren en optimaliseren
4. **Week 3:** Opschalen wat werkt

**Succes met je Google Ads campagnes! 🚀**

---

## 📚 Gerelateerde Documenten

- `GOOGLE_ADS_ZOEKWOORDEN.md` - Complete zoekwoorden lijst
- `GOOGLE_ADS_CONVERSIES.md` - Conversie setup details
- `GOOGLE_ADS_TRACKING.md` - Technische implementatie
