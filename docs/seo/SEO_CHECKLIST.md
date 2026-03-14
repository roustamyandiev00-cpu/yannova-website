# SEO Checklist voor Yannova.be

## ✅ Basis SEO Setup

### 1. Sitemap & Robots.txt
- [x] Sitemap.xml gegenereerd (`/sitemap.xml`)
- [x] Robots.txt geconfigureerd
- [x] Sitemap URL in robots.txt
- [ ] Sitemap ingediend bij Google Search Console
- [ ] Sitemap ingediend bij Bing Webmaster Tools

### 2. Google Search Console Setup
1. Ga naar [Google Search Console](https://search.google.com/search-console)
2. Voeg je website toe: `https://www.yannova.be`
3. Verificatie opties:
   - **HTML bestand** (aanbevolen): Download verificatiebestand en plaats in `/public`
   - **HTML tag**: Voeg meta tag toe aan `src/app/layout.tsx`
   - **Google Analytics**: Als je GA4 al hebt ingesteld
   - **DNS verificatie**: Via je domeinprovider

4. Na verificatie:
   - Dien sitemap in: `https://www.yannova.be/sitemap.xml`
   - Controleer indexatiestatus
   - Check voor crawl errors

### 3. Google Analytics 4
- [x] GA4 geïnstalleerd via GTM
- [ ] Conversies ingesteld (contactformulier, offerte aanvragen)
- [ ] E-commerce tracking (voor shop)

### 4. Structured Data (Schema.org)
- [x] LocalBusiness schema
- [x] Organization schema
- [x] Service schema
- [x] WebSite schema
- [ ] Test met [Rich Results Test](https://search.google.com/test/rich-results)

## 🎯 On-Page SEO

### Elke Pagina Moet Hebben:
- [x] Unieke title tag (50-60 karakters)
- [x] Meta description (150-160 karakters)
- [x] H1 heading (1 per pagina)
- [x] H2-H6 headings (logische hiërarchie)
- [x] Alt tekst voor alle afbeeldingen
- [x] Internal linking
- [x] Mobile-friendly design
- [x] Fast loading speed

### Content Optimalisatie:
- [x] Focus keywords in title
- [x] Keywords in eerste 100 woorden
- [x] Keywords in headings
- [x] Lokale keywords (Antwerpen, Berchem, etc.)
- [x] Call-to-actions
- [x] Contact informatie zichtbaar

## 📍 Local SEO

### Google Business Profile
1. Claim je [Google Business Profile](https://business.google.com)
2. Vul alle informatie in:
   - Bedrijfsnaam: Yannova
   - Categorie: Aannemer / Renovatiebedrijf
   - Adres: Je bedrijfsadres
   - Telefoonnummer: +32 489 96 00 01
   - Website: https://www.yannova.be
   - Openingstijden
   - Foto's van projecten
   - Diensten

3. Vraag reviews van klanten
4. Post regelmatig updates

### NAP Consistency (Name, Address, Phone)
Zorg dat je bedrijfsgegevens overal hetzelfde zijn:
- Website
- Google Business Profile
- Facebook
- Andere directories

### Lokale Citations
Registreer je bedrijf op:
- [ ] Google Business Profile
- [ ] Bing Places
- [ ] Gouden Gids
- [ ] 2dehands (zakelijk)
- [ ] Trustpilot
- [ ] Lokale business directories

## 🔗 Off-Page SEO

### Backlinks
- [ ] Vraag links van leveranciers (PVC ramen fabrikanten, etc.)
- [ ] Lokale partnerships
- [ ] Gastblogs op bouw/renovatie websites
- [ ] Persberichten bij grote projecten

### Social Media
- [ ] Facebook bedrijfspagina
- [ ] Instagram met projectfoto's
- [ ] LinkedIn bedrijfspagina
- [ ] Regelmatige posts

## 📊 Monitoring & Analytics

### Wekelijks Checken:
- Google Search Console voor errors
- Ranking positie voor belangrijke keywords
- Organisch verkeer in GA4

### Maandelijks Checken:
- Top performing pagina's
- Conversie rates
- Bounce rates
- Nieuwe backlinks

### Belangrijke Keywords om te Volgen:
1. ramen antwerpen
2. deuren antwerpen
3. gevelrenovatie antwerpen
4. renovatiebedrijf antwerpen
5. ramen berchem
6. ramen schoten
7. ramen brasschaat
8. totaalrenovatie antwerpen
9. pvc ramen antwerpen
10. aluminium ramen antwerpen

## 🚀 Quick Wins

### Direct Implementeren:
1. ✅ Sitemap optimaliseren (DONE)
2. ✅ Robots.txt verbeteren (DONE)
3. [ ] Google Search Console verificatie
4. [ ] Google Business Profile claimen
5. [ ] Reviews vragen aan recente klanten
6. [ ] Foto's toevoegen aan Google Business
7. [ ] Social media profielen aanmaken/optimaliseren

### Deze Week:
1. Sitemap indienen bij Google
2. Alle pagina's indexeren laten
3. Google Business Profile volledig invullen
4. 5 klanten vragen om Google review

### Deze Maand:
1. 10+ backlinks opbouwen
2. Blog content creëren (1-2 posts per week)
3. Social media strategie opstarten
4. Lokale partnerships aangaan

## 🛠️ Tools

### Gratis SEO Tools:
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

### Keyword Research:
- Google Keyword Planner
- Google Trends
- AnswerThePublic
- Ubersuggest (gratis versie)

### Monitoring:
- Google Search Console (rankings & clicks)
- Google Analytics (traffic & conversie)
- Microsoft Clarity (user behavior) - al geïnstalleerd!

## 📞 Support

Voor vragen over SEO implementatie:
- Check de documentatie in `/docs/seo/`
- Test je pagina's met Google tools
- Monitor resultaten wekelijks

---

**Laatste update:** ${new Date().toLocaleDateString('nl-BE')}
