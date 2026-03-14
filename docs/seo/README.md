# SEO Documentatie - Yannova.be

## 📚 Overzicht

Deze folder bevat alle SEO documentatie en guides voor Yannova.be.

## 🚀 Quick Start

**Nieuw met SEO?** Start hier:
1. [SEO Quick Start Guide](./SEO_QUICK_START.md) - 15 minuten setup
2. [Google Search Console Setup](./GOOGLE_SEARCH_CONSOLE_SETUP.md) - Stap voor stap
3. [SEO Checklist](./SEO_CHECKLIST.md) - Volledige checklist

## 📖 Documentatie

### Basis Setup
- **SEO_QUICK_START.md** - Snelle start guide (15 min)
- **GOOGLE_SEARCH_CONSOLE_SETUP.md** - Google verificatie en setup
- **SEO_CHECKLIST.md** - Volledige SEO checklist

### Technische Implementatie
- Sitemap: `/src/app/sitemap.ts`
- Robots.txt: `/src/app/robots.ts`
- Metadata: `/src/app/layout.tsx`
- Structured Data: `/src/lib/structured-data.ts`

## 🛠️ Tools & Scripts

### Sitemap Testen
```bash
npm run test:sitemap
```

### Belangrijke URLs
- Sitemap: https://www.yannova.be/sitemap.xml
- Robots.txt: https://www.yannova.be/robots.txt

## ✅ Wat is al Geïmplementeerd?

- ✅ Dynamische sitemap met alle pagina's
- ✅ Robots.txt met sitemap referentie
- ✅ Meta tags op alle pagina's
- ✅ Structured data (Schema.org)
- ✅ Open Graph tags
- ✅ Mobile-friendly design
- ✅ Fast loading times
- ✅ Google Analytics (via GTM)
- ✅ Microsoft Clarity

## 📊 Monitoring

Check regelmatig:
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)
- [PageSpeed Insights](https://pagespeed.web.dev)

---
**Laatste update:** ${new Date().toLocaleDateString('nl-BE')}
