# Google Reviews Setup — Yannova.be

## Stap 1: Zoek je Google Place ID

1. Ga naar: https://business.google.com
2. Klik op je bedrijf "Yannova Bouw"
3. Klik rechtsboven op het menu (drie puntjes ...)
4. Klik op **"Bedrijfsprofiel bekijken"** of **"Google Maps bekijken"**
5. De URL in je browser ziet er zo uit:
   `https://www.google.com/maps/place/Yannova+Bouw/@51.xxx,4.xxx/...`
6. Zoek in die URL naar `ChIJ...` — dat is je Place ID
   (begint altijd met "ChIJ" gevolgd door letters en cijfers)

**Of gebruik deze tool:**
https://developers.google.com/maps/documentation/places/web-service/place-id#find-id
→ Zoek op "Yannova Bouw Zoersel"

---

## Stap 2: Maak je directe review link

De snelste manier:
1. Ga naar: https://business.google.com
2. Klik op je bedrijfsprofiel
3. Klik op **"Bekijk reviews"** of **"Reviews opvragen"**
4. Google geeft je een directe link, bv: `https://g.page/r/XXXXX/review`

**Of bouw de link zelf:**
`https://search.google.com/local/writereview?placeid=JOUW_PLACE_ID`

---

## Stap 3: Vul in op de website

Open het bestand:
`src/data/testimonials.ts`

Vervang de twee placeholders:
```ts
googlePlaceId: 'JOUW_PLACE_ID_HIER',    // bv. ChIJxxxxxxxxx
reviewsUrl: 'JOUW_REVIEW_LINK_HIER',     // bv. https://g.page/r/xxxxx/review
```

---

## Stap 4: Stuur review-uitnodigingen

Kopieer de e-mailtekst hieronder en stuur naar al je recente klanten.

### E-mail Nederlands (aanbevolen)

**Onderwerp:** Tevreden over Yannova? Uw mening telt!

---

Beste [Naam],

Hartelijk bedankt voor het vertrouwen in Yannova voor uw [ramen/gevel/renovatie] in [plaats].

We hopen dat u volledig tevreden bent met het resultaat. Als dat zo is, zou het ons enorm helpen als u even een Google review wilt achterlaten — het duurt slechts 1 minuut en maakt een groot verschil voor ons bedrijf.

👉 Klik hier om een review achter te laten:
[JOUW REVIEW LINK HIER]

Alvast hartelijk bedankt!

Met vriendelijke groeten,
Yannova Bouw
📞 +32 489 96 00 01
🌐 www.yannova.be

---

### WhatsApp bericht (kort)

Hallo [Naam] 👋

Bedankt voor het vertrouwen in Yannova! Zou u even een Google review willen achterlaten? Het duurt 1 minuut en helpt ons enorm 🙏

👉 [REVIEW LINK]

Alvast bedankt!

---

## Klanten om te contacteren (uit je mailbox)

Kijk in je Outlook inbox naar:
- Klanten die een bevestigingsmail ontvangen hebben
- E-mails van Trustlocal (aanvragen die beantwoord zijn)
- Mensen die "tevreden" of "dankjewel" schreven

Stuur de review-uitnodiging bij voorkeur **2-4 weken na oplevering** van de werken.

---

## Google Business Profile optimalisatie checklist

- [ ] Bedrijfsnaam: "Yannova Bouw" ✓
- [ ] Adres: Zoersel correct ingesteld?
- [ ] Telefoon: +32 489 96 00 01 ingesteld?
- [ ] Website: https://www.yannova.be ingesteld?
- [ ] Openingsuren: Ma-Vr 08:00-18:00 en Za 09:00-13:00
- [ ] Beschrijving: min. 750 tekens met keywords (zie hieronder)
- [ ] Categorie: "Bouwbedrijf" + "Schrijnwerker" + "Gevelrenovatie"
- [ ] Foto's: min. 10 goede foto's van projecten toegevoegd?
- [ ] Google Posts: wekelijks een post plaatsen (project, tip, promo)
- [ ] Q&A: zelf vragen toevoegen en beantwoorden
- [ ] Place ID ingevuld op website: testimonials.ts

### Aanbevolen beschrijving voor Google Business:

Yannova Bouw is uw specialist in ramen, deuren en gevelrenovatie in Zoersel, Antwerpen en omgeving. Wij plaatsen PVC en aluminium ramen met HR++ en drievoudig glas voor maximale isolatie en energiebesparing. Voor gevelrenovatie werken wij met hoogwaardige siliconenharspleister (crepi) en buitengevelisolatie (ETICS). Gratis opmeting aan huis, offerte binnen 24u en premie-advies Mijn VerbouwPremie inbegrepen. 15+ jaar ervaring in de Antwerpse regio. Werkgebied: Zoersel, Schilde, Brasschaat, Antwerpen, Deurne, Berchem, Wilrijk, Merksem, Kapellen, Schoten en omgeving.
