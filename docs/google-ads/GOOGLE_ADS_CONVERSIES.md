# Google Ads Conversie Setup voor Yannova

## Stap 1: Conversies Aanmaken in Google Ads

### Primary Conversion: Offerteformulier Verzonden

**Instellingen:**
```
Naam: Offerte Formulier - Yannova
Categorie: Submit lead form
Waarde: Gebruik dezelfde waarde voor elke conversie
Waarde instellen: €50 (geschatte waarde per lead)
Telling: Eén conversie per klik
Conversievenster: 30 dagen
Opnemen in "Conversies": JA ✓
Attributiemodel: Data-driven (of Last click)
```

**Conversie-actie:**
- Event name: `form_submit_offerte`
- Trigger: Wanneer offerteformulier succesvol verzonden is

---

### Secondary Conversion 1: WhatsApp Klik

**Instellingen:**
```
Naam: WhatsApp Contact - Yannova
Categorie: Contact
Waarde: €20
Telling: Eén conversie per klik
Conversievenster: 7 dagen
Opnemen in "Conversies": NEE ✗ (secondary)
```

**Conversie-actie:**
- Event name: `whatsapp_click`
- Trigger: Klik op WhatsApp button

---

### Secondary Conversion 2: Telefoon Klik

**Instellingen:**
```
Naam: Telefoon Klik - Yannova
Categorie: Contact
Waarde: €25
Telling: Eén conversie per klik
Conversievenster: 7 dagen
Opnemen in "Conversies": NEE ✗ (secondary)
```

**Conversie-actie:**
- Event name: `phone_click`
- Trigger: Klik op telefoonnummer

---

### Secondary Conversion 3: Email Klik (Optioneel)

**Instellingen:**
```
Naam: Email Contact - Yannova
Categorie: Contact
Waarde: €15
Telling: Eén conversie per klik
Conversievenster: 7 dagen
Opnemen in "Conversies": NEE ✗ (secondary)
```

**Conversie-actie:**
- Event name: `email_click`
- Trigger: Klik op email adres

---

## Stap 2: Google Tag Installeren

### Google Tag ID
Je krijgt een tag ID zoals: `G-XXXXXXXXXX` of `AW-XXXXXXXXX`

### Installatie in Next.js (zie GOOGLE_ADS_TRACKING.md voor code)

---

## Stap 3: Conversie Events Testen

### Test Checklist:

**Offerteformulier:**
- [ ] Formulier invullen op website
- [ ] Formulier verzenden
- [ ] Check in Google Ads > Tools > Conversies
- [ ] Status moet "Recent" zijn binnen 24 uur

**WhatsApp Button:**
- [ ] Klik op WhatsApp button
- [ ] Check in Google Tag Assistant
- [ ] Event `whatsapp_click` moet zichtbaar zijn

**Telefoon Button:**
- [ ] Klik op telefoonnummer
- [ ] Check in Google Tag Assistant
- [ ] Event `phone_click` moet zichtbaar zijn

---

## Stap 4: Google Tag Assistant Gebruiken

1. Installeer Chrome extensie: "Google Tag Assistant"
2. Ga naar je website
3. Klik op extensie icoon
4. Klik "Connect"
5. Voer acties uit (formulier verzenden, WhatsApp klikken)
6. Check of events worden geregistreerd

---

## Stap 5: Conversie Waarden Instellen

### Waarom waarden belangrijk zijn:
- Google kan beter optimaliseren
- Je ziet ROI in rapporten
- Smart Bidding werkt beter

### Aanbevolen waarden voor Yannova:

**Als je weet dat:**
- 10 leads = 1 klant
- Gemiddelde order = €5000
- Winstmarge = 20%

**Dan:**
- Waarde per klant = €1000 winst
- Waarde per lead = €100 (€1000 / 10 leads)

**Stel in:**
- Offerteformulier: €100
- WhatsApp klik: €30
- Telefoon klik: €40
- Email klik: €20

---

## Stap 6: Conversie Tracking Controleren

### Dagelijks (Eerste week):
- Check of conversies binnenkomen
- Kijk naar "Recent" status in Google Ads
- Test zelf regelmatig

### Wekelijks:
- Analyseer conversie rate
- Check kwaliteit van leads
- Pas waarden aan indien nodig

### Maandelijks:
- Vergelijk met werkelijke klanten
- Optimaliseer conversie waarden
- Update attributiemodel indien nodig

---

## Veelvoorkomende Problemen

### "Geen conversies zichtbaar"
**Oplossingen:**
1. Check of Google Tag correct geïnstalleerd is
2. Gebruik Google Tag Assistant
3. Wacht 24-48 uur (data vertraging)
4. Check of conversie-actie "Enabled" is

### "Te veel conversies"
**Oplossingen:**
1. Check "Telling" instelling (moet "Eén" zijn)
2. Controleer of er geen dubbele tags zijn
3. Check of test-conversies niet meetellen

### "Conversies maar geen leads"
**Oplossingen:**
1. Check of formulier daadwerkelijk verstuurd wordt
2. Test email ontvangst
3. Check spam folder
4. Controleer database/CRM

---

## Google Ads Conversie Kolommen

### Voeg deze kolommen toe in je campagne overzicht:

**Conversies:**
- Conversies (primary)
- Conversie waarde
- Kosten per conversie
- Conversie rate

**Alle conversies:**
- Alle conversies (incl. secondary)
- Alle conversie waarde
- View-through conversies

**Interacties:**
- Klikken
- CTR
- Gemiddelde CPC

---

## Smart Bidding Strategie (Na 30 conversies)

### Wanneer genoeg data:
- 30+ conversies in 30 dagen
- Stabiele conversie rate
- Goede lead kwaliteit

### Dan overstappen naar:
**Maximize Conversions:**
- Beste voor lead generatie
- Automatische biedingen
- Vereist budget limiet

**Target CPA:**
- Als je weet wat een lead mag kosten
- Bijvoorbeeld: €40 per lead
- Meer controle over kosten

---

## Conversie Optimalisatie Tips

1. **Focus op kwaliteit, niet kwantiteit**
   - Liever 5 goede leads dan 20 slechte

2. **Track offline conversies**
   - Upload klanten die daadwerkelijk besteld hebben
   - Helpt Google beter optimaliseren

3. **Gebruik conversie waarden**
   - Niet alle leads zijn gelijk
   - Grote projecten = hogere waarde

4. **Test verschillende landingspagina's**
   - A/B test formulieren
   - Optimaliseer voor conversie rate

5. **Analyseer zoektermen**
   - Welke zoekwoorden geven beste leads?
   - Verhoog biedingen op die zoekwoorden

---

## Checklist: Ben je klaar?

- [ ] Google Ads account aangemaakt
- [ ] Google Tag geïnstalleerd op website
- [ ] Primary conversie aangemaakt (Offerteformulier)
- [ ] Secondary conversies aangemaakt (WhatsApp, Telefoon)
- [ ] Conversie waarden ingesteld
- [ ] Google Tag Assistant getest
- [ ] Test conversie succesvol uitgevoerd
- [ ] Conversies zichtbaar in Google Ads (binnen 24u)
- [ ] Campagne kan starten! 🚀

---

## Volgende Stap

Zie `GOOGLE_ADS_TRACKING.md` voor de exacte code implementatie in je Next.js website.
