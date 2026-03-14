# Sitemap Structuur - Yannova.be

## 📍 Huidige Sitemap

**URL:** https://www.yannova.be/sitemap.xml

### Pagina Categorieën

#### 1. Hoofdpagina's (Priority: 0.95-1.0)
- Homepage (/)
- Diensten overzicht
- Contact
- Over ons

#### 2. Service Pagina's (Priority: 0.85-0.95)
- Ramen (/ramen)
- Deuren (/deuren)
- Gevelrenovatie (/gevelrenovatie)
- Renovatie (/renovatie)
- Totaalrenovatie (/totaalrenovatie)

#### 3. Lokale Pagina's (Priority: 0.85-0.9)
Per gemeente voor elke dienst:
- /ramen/[gemeente]
- /deuren/[gemeente]
- /gevelrenovatie/[gemeente]
- /renovatie/[gemeente]
- /totaalrenovatie/[gemeente]

**Gemeenten:**
- Antwerpen, Berchem, Brasschaat, Deurne, Merksem
- Mortsel, Schilde, Schoten, Wijnegem, Wilrijk, Zoersel

#### 4. Product Pagina's (Priority: 0.85)
- /producten/[product-slug]

#### 5. Blog Pagina's (Priority: 0.7)
- /blog
- /blog/[post-slug]

#### 6. Shop Pagina's (Priority: 0.8)
- /shop
- /shop/cart

#### 7. Utility Pagina's (Priority: 0.75-0.8)
- /vraag-ai
- /reviews
- /werkgebied
- /premie-gids
- /veelgestelde-vragen

## 🔄 Update Frequentie

- **Homepage:** Daily
- **Blog posts:** Monthly  
- **Andere pagina's:** Weekly

## 📊 Statistieken

Totaal aantal URLs in sitemap: ~150+
- Hoofdpagina's: ~25
- Lokale pagina's: ~55 (11 gemeenten × 5 diensten)
- Product pagina's: ~20
- Blog pagina's: ~30+
- Overige: ~20

## 🚀 Toekomstige Uitbreidingen

Als de site groeit (>1000 URLs), overweeg:

### Sitemap Index
Splits in meerdere sitemaps:
- sitemap-main.xml (hoofdpagina's)
- sitemap-services.xml (diensten)
- sitemap-locations.xml (lokale pagina's)
- sitemap-products.xml (producten)
- sitemap-blog.xml (blog posts)

### Implementatie
```typescript
// src/app/sitemap-index.ts
export default function sitemapIndex() {
  return [
    { url: 'https://www.yannova.be/sitemap-main.xml' },
    { url: 'https://www.yannova.be/sitemap-services.xml' },
    { url: 'https://www.yannova.be/sitemap-locations.xml' },
    { url: 'https://www.yannova.be/sitemap-products.xml' },
    { url: 'https://www.yannova.be/sitemap-blog.xml' },
  ]
}
```

## ✅ Best Practices

1. **Max 50,000 URLs per sitemap**
2. **Max 50MB per sitemap file**
3. **Update lastModified bij content changes**
4. **Gebruik correcte priority values**
5. **Test sitemap regelmatig**

## 🛠️ Testen

```bash
# Test sitemap
npm run test:sitemap

# Of handmatig
curl https://www.yannova.be/sitemap.xml

# Valideer XML
xmllint --noout sitemap.xml
```

## 📝 Onderhoud

### Maandelijks
- Check aantal geïndexeerde pagina's in GSC
- Vergelijk met sitemap count
- Los indexeringsproblemen op

### Bij nieuwe content
- Sitemap wordt automatisch gegenereerd
- Dien opnieuw in bij GSC (optioneel)
- Google crawlt automatisch binnen 1-7 dagen

---
**Laatste update:** ${new Date().toLocaleDateString('nl-BE')}
