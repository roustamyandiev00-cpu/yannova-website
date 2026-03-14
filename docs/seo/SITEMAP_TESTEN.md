# Sitemap Testen - Lokaal vs Productie

## ❌ Wat je nu ziet (404 Error)

Je probeert de **productie URL** te openen terwijl je **lokaal** aan het ontwikkelen bent:
- URL in browser: `https://www.yannova.be/sitemap.xml`
- Dit werkt alleen als je site live staat op Vercel/productie

## ✅ Hoe te Testen

### Lokaal Testen (Development)

**Optie 1: Browser**
```
http://localhost:3000/sitemap.xml
```
Open deze URL in je browser terwijl `npm run dev` draait.

**Optie 2: Terminal**
```bash
# Test met curl
curl http://localhost:3000/sitemap.xml

# Of bekijk in browser
open http://localhost:3000/sitemap.xml
```

**Optie 3: Test Script**
```bash
# Pas eerst de URL aan in het script voor lokaal testen
npm run test:sitemap
```

### Productie Testen (Live Site)

**Na deployment naar Vercel:**
```
https://www.yannova.be/sitemap.xml
```

**Test met curl:**
```bash
curl https://www.yannova.be/sitemap.xml
```

## 🔧 Quick Fix - Test Nu Lokaal

Open in je browser:
```
http://localhost:3000/sitemap.xml
```

Je zou moeten zien:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.yannova.be</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- meer URLs... -->
</urlset>
```

## 📋 Checklist

### Lokaal (Development)
- [ ] Dev server draait (`npm run dev`)
- [ ] Open `http://localhost:3000/sitemap.xml`
- [ ] Zie je XML met URLs?
- [ ] Geen errors in terminal?

### Productie (Na Deploy)
- [ ] Site gedeployed naar Vercel
- [ ] Open `https://www.yannova.be/sitemap.xml`
- [ ] Zie je XML met URLs?
- [ ] Dien in bij Google Search Console

## 🚀 Deployment Checklist

Voordat je de sitemap indient bij Google:

1. **Deploy naar productie**
   ```bash
   git add .
   git commit -m "SEO: Optimized sitemap"
   git push
   ```

2. **Wacht op Vercel deployment** (1-2 minuten)

3. **Test productie sitemap**
   ```bash
   curl https://www.yannova.be/sitemap.xml
   ```

4. **Dien in bij Google Search Console**
   - Ga naar search.google.com/search-console
   - Sitemaps → Nieuwe sitemap toevoegen
   - Voer in: `sitemap.xml`
   - Klik "Indienen"

## 🐛 Troubleshooting

### "404 Not Found" op localhost
**Probleem:** Dev server draait niet
**Oplossing:**
```bash
npm run dev
```

### "404 Not Found" op productie
**Probleem:** Nog niet gedeployed of build error
**Oplossing:**
1. Check Vercel dashboard voor deployment status
2. Check build logs voor errors
3. Redeploy indien nodig

### "Cannot read sitemap"
**Probleem:** Syntax error in sitemap.ts
**Oplossing:**
```bash
# Check voor TypeScript errors
npm run build

# Fix errors en test opnieuw
```

## 💡 Tips

1. **Altijd eerst lokaal testen** voordat je deploy
2. **Check build logs** bij deployment
3. **Test productie URL** na elke deployment
4. **Wacht 24-48 uur** na indienen bij Google voor indexering

---

**TL;DR:** Gebruik `http://localhost:3000/sitemap.xml` voor lokaal testen!
