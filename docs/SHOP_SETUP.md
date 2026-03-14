# Shop Setup - Ramen & Deuren Onderhoud

## Overzicht

De Yannova webshop is een specialistische mini-shop voor onderhoud, accessoires en naverkoop van ramen en deuren. De shop is geïntegreerd met BigBuy voor dropshipping.

## Features

- ✅ BigBuy API integratie voor dropshipping
- ✅ Productcatalogus met categorieën
- ✅ Winkelwagen functionaliteit
- ✅ Product detail pagina's
- ✅ Admin interface voor productbeheer
- ✅ Automatische voorraad synchronisatie
- ✅ Responsive design

## Productcategorieën

### A. Onderhoud & Reiniging
- FENOSOL PVC reiniger
- FENOSOL Aluminium cleaner
- FENOSOL care kits
- Glasreiniger premium
- Rubberdichting conditioner
- Siliconenspray
- Beslagspray / multispray
- Reinigingsdoeken microvezel
- Complete onderhoudsbox

### B. Tochtwering & Isolatie
- Zelfklevende tochtstrips (E, D, P-profiel)
- Onderdeurborstel
- Transparante tochtband
- Rubberen kierdichting
- Silicone afdichtingsstrip
- Isolatietape
- Geluidsdempende afdichtingsstrip
- Winter afdichtingsset

### C. Raam Accessoires
- Universele raamgrepen
- Afsluitbare raamgrepen
- Kindveilige raamgrepen
- Raamrestrictors
- Ventilatierooster
- Afdekkapjes voor scharnieren
- Onderhoudsset voor scharnieren

### D. Deur Accessoires
- Deurstoppers (vloer/muur)
- Tochtborstel onder deur
- Veiligheidsbeslag
- Cilinders
- Deurketting
- Anti-inbraak strip
- Drempelbescherming

### E. Bundels
- Onderhoudskit PVC ramen
- Onderhoudskit aluminium ramen
- Winterkit tocht & isolatie
- Veiligheidskit ramen
- Starterspakket

## BigBuy API Configuratie

### Environment Variables

Voeg de volgende variabelen toe aan `.env.local`:

```env
BIGBUY_API_KEY="YWVmY2U1OTk3NmIxOTk2NDgyNjFkMmM0OGIxNTVhMzcwOTI2NTY2YzEzOTFjNzU4MzJmYzBkZTVhNjc5YWYzZA"
BIGBUY_API_SECRET="MmJkOWNiMzcxZjc2OWY3MTU2ZjVmZDcwNTY1ZmFlMGQ1YTgxMTQwZmVlNzFiMWQzYTA2ZTM4MzY1ODVlNmY2Ng"
BIGBUY_API_URL="https://api.bigbuy.eu"
```

### API Endpoints

De BigBuy client ondersteunt:

- **Producten**: Ophalen van productcatalogus
- **Voorraad**: Real-time voorraad controle
- **Bestellingen**: Automatische order plaatsing
- **Verzending**: Tracking en verzendopties
- **Categorieën**: Product categorisatie

## Implementatie Details

### File Structure

```
src/
├── app/
│   ├── (public)/
│   │   └── shop/
│   │       ├── page.tsx              # Shop overzicht
│   │       ├── ShopContent.tsx       # Shop component
│   │       ├── cart/
│   │       │   ├── page.tsx          # Winkelwagen
│   │       │   └── CartContent.tsx
│   │       └── product/
│   │           └── [id]/
│   │               ├── page.tsx      # Product detail
│   │               └── ProductDetail.tsx
│   ├── admin/
│   │   └── shop/
│   │       ├── page.tsx              # Admin interface
│   │       └── ShopAdmin.tsx
│   └── api/
│       └── shop/
│           ├── products/
│           │   ├── route.ts          # Product API
│           │   └── [id]/route.ts
│           └── orders/
│               └── route.ts          # Order API
├── components/
│   └── CartButton.tsx                # Winkelwagen knop
├── contexts/
│   └── CartContext.tsx               # Winkelwagen state
├── lib/
│   └── bigbuy.ts                     # BigBuy API client
└── types/
    └── shop.ts                       # Type definities
```

### Key Components

#### BigBuy Client (`src/lib/bigbuy.ts`)
- OAuth2 authenticatie
- Automatische token refresh
- Product, order en shipping methods
- Error handling

#### Cart Context (`src/contexts/CartContext.tsx`)
- Global winkelwagen state
- LocalStorage persistentie
- Add, remove, update functies

#### Shop Pages
- Product overzicht met filters
- Product detail met afbeeldingen
- Winkelwagen met totalen
- Admin interface voor beheer

## Gebruik

### Voor Klanten

1. **Producten Bekijken**
   - Ga naar `/shop`
   - Filter op categorie
   - Bekijk product details

2. **Bestellen**
   - Voeg producten toe aan winkelwagen
   - Bekijk winkelwagen
   - Ga naar checkout
   - Vul verzendgegevens in
   - Plaats bestelling

3. **Verzending**
   - Gratis verzending vanaf €50
   - Besteld voor 15:00, morgen in huis
   - Track & trace via email

### Voor Admin

1. **Producten Beheren**
   - Ga naar `/admin/shop`
   - Synchroniseer met BigBuy
   - Bekijk voorraad status
   - Monitor prijzen

2. **Bestellingen Beheren**
   - Bekijk alle bestellingen
   - Check order status
   - Track verzendingen

## SEO & Marketing

### Product Pages
- Unieke meta descriptions
- Structured data (Product schema)
- Alt tags voor afbeeldingen
- Breadcrumb navigatie

### Keywords
- Ramen onderhoud
- Deuren onderhoud
- FENOSOL producten
- PVC reiniger
- Aluminium cleaner
- Tochtwering
- Raam accessoires

### Google Ads
- Shopping campagnes
- Product feed integratie
- Conversion tracking

## Testing

### Test Scenario's

1. **Product Synchronisatie**
   ```bash
   # Test BigBuy API connectie
   curl -X GET http://localhost:3000/api/shop/products
   ```

2. **Winkelwagen**
   - Voeg product toe
   - Update aantal
   - Verwijder product
   - Check localStorage

3. **Checkout Flow**
   - Vul formulier in
   - Valideer velden
   - Test order plaatsing

## Troubleshooting

### BigBuy API Errors

**401 Unauthorized**
- Check API credentials
- Verifieer token expiry

**404 Product Not Found**
- Synchroniseer producten
- Check product ID

**500 Server Error**
- Check API status
- Verifieer request format

### Winkelwagen Issues

**Items verdwijnen**
- Check localStorage
- Verifieer CartProvider

**Prijs klopt niet**
- Synchroniseer met BigBuy
- Check currency conversion

## Roadmap

### Fase 1 (Huidig)
- ✅ BigBuy integratie
- ✅ Product catalogus
- ✅ Winkelwagen
- ✅ Admin interface

### Fase 2 (Volgende)
- [ ] Checkout flow
- [ ] Payment integratie (Mollie/Stripe)
- [ ] Email notificaties
- [ ] Order tracking

### Fase 3 (Toekomst)
- [ ] Product reviews
- [ ] Wishlist functionaliteit
- [ ] Loyalty programma
- [ ] Bundel kortingen

## Support

Voor vragen of problemen:
- Email: info@yannova.be
- Tel: 0468 14 14 33
- BigBuy Support: https://www.bigbuy.eu/nl/support

## Links

- [BigBuy API Docs](https://api.bigbuy.eu/rest/doc/index.html)
- [BigBuy Dashboard](https://www.bigbuy.eu/nl/account)
- [Shop Admin](/admin/shop)
- [Shop Frontend](/shop)
