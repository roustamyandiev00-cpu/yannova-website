# Google Ads Setup - Samenvatting voor Yannova

## ✅ Wat is er gemaakt?

### 📄 Documentatie (4 bestanden)
1. **GOOGLE_ADS_ZOEKWOORDEN.md**
   - Complete lijst met high-intent zoekwoorden
   - 4 campagnes: Ramen, Gevelrenovatie, Crepi, Renovatie
   - Negatieve zoekwoorden
   - Budget aanbevelingen

2. **GOOGLE_ADS_CONVERSIES.md**
   - Stap-voor-stap conversie setup
   - Primary: Offerteformulier (€50)
   - Secondary: WhatsApp (€20), Telefoon (€25), Email (€15)
   - Test instructies

3. **GOOGLE_ADS_TRACKING.md**
   - Technische implementatie guide
   - Code voorbeelden
   - Testing procedures
   - Troubleshooting

4. **GOOGLE_ADS_ACTIEPLAN.md**
   - Complete 7-stappen plan
   - Week-voor-week planning
   - Checklists
   - Budget strategie

### 🌐 Landingspagina's (4 pagina's)
1. **`/ramen-deuren-antwerpen`**
   - PVC & Aluminium ramen
   - Deuren (voor, schuif)
   - Offerte formulier
   - Reviews & FAQ

2. **`/gevelrenovatie-antwerpen`**
   - Crepi aanbrengen
   - Gevelbekleding
   - Gevelisolatie
   - Gevelreiniging

3. **`/crepi-isolatie-antwerpen`**
   - Traditioneel crepi
   - Siliconencrep
   - Crepi met isolatie
   - Crepi renovatie

4. **`/renovatiebedrijf-antwerpen`**
   - Totaalrenovatie
   - Badkamer & Keuken
   - Dakwerken
   - Vloeren & Schilderwerk

### 💻 Code Components (2 bestanden)
1. **`src/components/GoogleAds.tsx`**
   - Google Tag implementatie
   - Conversie tracking functies
   - Event tracking helpers

2. **`src/components/ContactButtons.tsx`**
   - Telefoon button met tracking
   - WhatsApp button met tracking
   - Email button met tracking

---

## 🚀 Wat moet je NU doen?

### Stap 1: Environment Variables (5 min)
Voeg toe aan `.env.local`:
```env
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Stap 2: Google Ads Component Installeren (2 min)
Update `src/app/layout.tsx`:
```typescript
import { GoogleAds } from '@/components/GoogleAds';

export default function RootLayout({ children }) {
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

### Stap 3: Contact Info Updaten (10 min)
Vervang in ALLE bestanden:
- `+32123456789` → Je echte telefoonnummer
- `32123456789` → Je WhatsApp nummer
- `info@yannova.be` → Je echte email

**Bestanden:**
- `src/app/ramen-deuren-antwerpen/page.tsx`
- `src/app/gevelrenovatie-antwerpen/page.tsx`
- `src/app/crepi-isolatie-antwerpen/page.tsx`
- `src/app/renovatiebedrijf-antwerpen/page.tsx`
- `src/components/ContactButtons.tsx`

### Stap 4: Conversies Aanmaken in Google Ads (15 min)
1. Ga naar ads.google.com
2. Tools > Conversies > + Nieuwe conversie
3. Maak aan:
   - Offerteformulier (Primary, €50)
   - WhatsApp Klik (Secondary, €20)
   - Telefoon Klik (Secondary, €25)

### Stap 5: Tracking Testen (10 min)
1. Installeer "Google Tag Assistant" Chrome extensie
2. Open je website
3. Test formulier verzenden
4. Test WhatsApp/Telefoon klikken
5. Check of events zichtbaar zijn

### Stap 6: Eerste Campagne Starten (30 min)
1. Maak campagne "Ramen en Deuren Antwerpen"
2. Voeg 5 exact match zoekwoorden toe:
   - `[ramen plaatsen antwerpen]`
   - `[nieuwe ramen antwerpen]`
   - `[ramen en deuren antwerpen]`
   - `[ramen offerte antwerpen]`
   - `[pvc ramen antwerpen]`
3. Budget: €7/dag
4. Landingspagina: `/ramen-deuren-antwerpen`
5. Activeer campagne

---

## 📊 Eerste Week Planning

**Dag 1 (Vandaag):**
- [ ] Environment variables toevoegen
- [ ] Google Ads component installeren
- [ ] Contact info updaten
- [ ] Tracking testen

**Dag 2:**
- [ ] Conversies aanmaken in Google Ads
- [ ] Test conversie uitvoeren
- [ ] Verificatie (wacht 24u)

**Dag 3:**
- [ ] Eerste campagne aanmaken
- [ ] Zoekwoorden toevoegen
- [ ] Advertenties schrijven
- [ ] Campagne activeren

**Dag 4-7:**
- [ ] Dagelijks zoektermen checken
- [ ] Negatieve zoekwoorden toevoegen
- [ ] Conversies monitoren

---

## 💰 Budget Strategie

### Week 1-2: Test Fase
```
Campagne 1 (Ramen): €7/dag
= €49/week
```

### Week 3-4: Uitbreiden
```
Campagne 1: €10/dag
Campagne 2: €5/dag
= €105/week
```

### Maand 2+: Opschalen
```
Beste campagne: €15/dag
Tweede beste: €10/dag
= €175/week
```

---

## 🎯 Verwachte Resultaten

Bij €10/dag:
- **2-5 klikken per dag**
- **2-10 leads per week**
- **1-3 offertes per week**
- **€20-50 per lead**

**Belangrijk:** Eerste 2 weken = data verzamelen, niet directe ROI!

---

## ⚠️ Belangrijke Tips

### ✅ WEL DOEN:
- Klein starten (€5-10/dag)
- Exact match zoekwoorden
- Dagelijks zoektermen checken
- Negatieve zoekwoorden toevoegen
- Geduld hebben (2 weken)

### ❌ NIET DOEN:
- Direct groot budget (€50+/dag)
- Broad match zoekwoorden
- Alle campagnes tegelijk
- Tracking vergeten
- Te snel opgeven

---

## 📁 Bestandsstructuur

```
Yannova Project/
├── Documentatie/
│   ├── GOOGLE_ADS_ACTIEPLAN.md (← Start hier!)
│   ├── GOOGLE_ADS_ZOEKWOORDEN.md
│   ├── GOOGLE_ADS_CONVERSIES.md
│   ├── GOOGLE_ADS_TRACKING.md
│   └── GOOGLE_ADS_SAMENVATTING.md (← Dit bestand)
│
├── Landingspagina's/
│   ├── src/app/ramen-deuren-antwerpen/page.tsx
│   ├── src/app/gevelrenovatie-antwerpen/page.tsx
│   ├── src/app/crepi-isolatie-antwerpen/page.tsx
│   └── src/app/renovatiebedrijf-antwerpen/page.tsx
│
└── Components/
    ├── src/components/GoogleAds.tsx
    └── src/components/ContactButtons.tsx
```

---

## 🔗 Nuttige Links

- **Google Ads:** https://ads.google.com
- **Google Tag Assistant:** Chrome Web Store
- **Google Keyword Planner:** In Google Ads > Tools

---

## ✅ Checklist: Klaar om te Starten?

### Technisch Setup
- [ ] Environment variables toegevoegd
- [ ] GoogleAds component geïnstalleerd in layout
- [ ] Contact informatie correct in alle bestanden
- [ ] Tracking getest met Tag Assistant
- [ ] Test conversie succesvol

### Google Ads Account
- [ ] Account aangemaakt
- [ ] Betaalmethode toegevoegd
- [ ] Conversies aangemaakt
- [ ] Eerste campagne klaar
- [ ] Campagne geactiveerd

### Content
- [ ] Landingspagina's live
- [ ] Formulieren werken
- [ ] WhatsApp/Telefoon buttons werken
- [ ] Reviews & FAQ toegevoegd

---

## 🎉 Je bent klaar!

Alles staat klaar om te starten met Google Ads. Volg het actieplan stap voor stap en je hebt binnen een week je eerste campagne live!

**Veel succes! 🚀**

---

## 📞 Volgende Stappen

1. **Lees:** `GOOGLE_ADS_ACTIEPLAN.md` voor complete guide
2. **Implementeer:** Stappen 1-6 hierboven
3. **Start:** Eerste campagne deze week
4. **Monitor:** Dagelijks eerste week
5. **Optimaliseer:** Na 2 weken data

**Vragen? Check de documentatie of test eerst met kleine budget!**
