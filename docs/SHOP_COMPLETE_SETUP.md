# Complete Shop Setup Guide

## ✅ Wat is nu klaar:

### 1. Frontend
- ✅ Productcatalogus (15 producten)
- ✅ Winkelwagen met localStorage
- ✅ Product detail pagina's
- ✅ Checkout formulier
- ✅ Order bevestigingspagina
- ✅ Responsive design

### 2. Backend
- ✅ Database schema (Supabase)
- ✅ Order management systeem
- ✅ Mollie payment integratie
- ✅ Email templates
- ✅ API routes voor checkout
- ✅ Webhook voor payment updates

### 3. Admin
- ✅ Order overzicht
- ✅ Product beheer basis

---

## 🚀 Setup Instructies

### Stap 1: Database Migratie

Run de SQL migratie in Supabase:

```bash
# Ga naar Supabase Dashboard
# SQL Editor → New Query
# Kopieer de inhoud van: supabase/migrations/20240315_create_shop_tables.sql
# Run de query
```

Of via CLI:
```bash
supabase db push
```

### Stap 2: Mollie Account Setup

1. **Maak een Mollie account aan:**
   - Ga naar https://www.mollie.com/dashboard/signup
   - Vul bedrijfsgegevens in
   - Verifieer je account

2. **Haal je API keys op:**
   - Ga naar Developers → API keys
   - Kopieer de "Test API key" voor development
   - Later: gebruik "Live API key" voor productie

3. **Voeg API key toe aan .env.local:**
   ```env
   MOLLIE_API_KEY="test_xxxxxxxxxxxxxxxxxxxxxxxxxx"
   NEXT_PUBLIC_SITE_URL="http://localhost:3000"
   ```

4. **Configureer Webhook URL:**
   - Ga naar Developers → Webhooks
   - Voeg toe: `https://jouw-domein.be/api/webhooks/mollie`
   - Voor development: gebruik ngrok of localtunnel

### Stap 3: Email Setup (Optioneel maar aanbevolen)

Je huidige SMTP setup werkt al, maar controleer:

```env
EMAIL_FROM="noreply@yannova.be"
SMTP_HOST="jouw-smtp-server"
SMTP_PORT="587"
SMTP_USER="jouw-email"
SMTP_PASSWORD="jouw-wachtwoord"
```

### Stap 4: Test de Shop

1. **Start development server:**
   ```bash
   npm run dev
   ```

2. **Test checkout flow:**
   - Ga naar http://localhost:3000/shop
   - Voeg producten toe aan winkelwagen
   - Ga naar checkout
   - Vul formulier in
   - Test payment (gebruik Mollie test cards)

3. **Mollie Test Cards:**
   - Visa: `4242 4242 4242 4242`
   - Mastercard: `5555 5555 5555 4444`
   - iDEAL: Kies "Test Bank" → Succesvol

---

## 📧 Email Templates

De volgende emails worden automatisch verstuurd:

### 1. Order Bevestiging (naar klant)
- Ordernummer
- Producten
- Totaal bedrag
- Verzendadres
- Status

### 2. Admin Notificatie (naar jou)
- Nieuwe bestelling alert
- Klantgegevens
- Producten
- Link naar admin

---

## 🔧 Mollie Webhook Setup (Belangrijk!)

Voor development met localhost:

### Optie A: ngrok (Aanbevolen)
```bash
# Installeer ngrok
brew install ngrok  # macOS
# of download van https://ngrok.com

# Start ngrok
ngrok http 3000

# Gebruik de https URL in Mollie webhook:
# https://xxxx-xx-xx-xx-xx.ngrok.io/api/webhooks/mollie
```

### Optie B: localtunnel
```bash
npm install -g localtunnel
lt --port 3000
```

### Voor Productie:
Gebruik je echte domein:
```
https://yannova.be/api/webhooks/mollie
```

---

## 💳 Payment Flow

1. **Klant vult checkout formulier in**
2. **Order wordt aangemaakt in database** (status: pending)
3. **Mollie payment wordt gecreëerd**
4. **Klant wordt doorgestuurd naar Mollie**
5. **Klant betaalt via iDEAL/Bancontact/etc**
6. **Mollie stuurt webhook naar jouw server**
7. **Order status wordt geüpdatet** (status: paid)
8. **Emails worden verstuurd**
9. **Klant ziet bevestigingspagina**

---

## 📊 Admin Functies

### Orders Bekijken
```
/admin/shop
```

Hier kun je:
- Alle orders zien
- Order status updaten
- Klantgegevens bekijken
- Producten per order zien

### Order Statussen
- `pending` - Wacht op betaling
- `paid` - Betaald
- `processing` - In behandeling
- `shipped` - Verzonden
- `delivered` - Geleverd
- `cancelled` - Geannuleerd
- `refunded` - Terugbetaald

---

## 🔐 Security Checklist

- ✅ RLS policies op Supabase tables
- ✅ API keys in environment variables
- ✅ HTTPS voor productie
- ✅ CSRF protection (Next.js default)
- ✅ Input validation op checkout
- ✅ Webhook signature verification (Mollie)

---

## 📱 Testing Checklist

### Checkout Flow
- [ ] Producten toevoegen aan winkelwagen
- [ ] Winkelwagen bijwerken (aantal, verwijderen)
- [ ] Checkout formulier invullen
- [ ] Validatie errors testen
- [ ] Algemene voorwaarden accepteren
- [ ] Order plaatsen

### Payment Flow
- [ ] Mollie payment pagina opent
- [ ] Test payment succesvol
- [ ] Redirect naar bevestigingspagina
- [ ] Order status is "paid"
- [ ] Emails ontvangen

### Admin
- [ ] Order verschijnt in admin
- [ ] Order details kloppen
- [ ] Status kan worden geüpdatet

---

## 🚨 Troubleshooting

### "Payment failed"
- Check Mollie API key
- Check webhook URL
- Check Mollie dashboard voor errors

### "Order not found"
- Check database connection
- Check Supabase RLS policies
- Check order_number in URL

### "Email not sent"
- Check SMTP credentials
- Check email templates
- Check server logs

### "Webhook not working"
- Check ngrok/localtunnel is running
- Check webhook URL in Mollie dashboard
- Check server logs for webhook calls

---

## 🎯 Volgende Stappen

### Fase 1: Basis (NU KLAAR)
- ✅ Checkout systeem
- ✅ Payment integratie
- ✅ Order management
- ✅ Email notificaties

### Fase 2: Uitbreidingen (Optioneel)
- [ ] Factuur generatie (PDF)
- [ ] Track & trace integratie
- [ ] Automatische voorraad sync met BigBuy
- [ ] Customer accounts
- [ ] Order history voor klanten
- [ ] Retour/refund systeem

### Fase 3: Marketing (Later)
- [ ] Abandoned cart emails
- [ ] Product reviews
- [ ] Loyalty programma
- [ ] Kortingscodes
- [ ] Upsell/cross-sell

---

## 📞 Support

Voor vragen:
- Mollie Support: https://help.mollie.com
- Supabase Docs: https://supabase.com/docs
- Next.js Docs: https://nextjs.org/docs

---

## 🎉 Je bent klaar!

De shop is nu volledig functioneel met:
- ✅ 15 Producten
- ✅ Winkelwagen
- ✅ Checkout
- ✅ Mollie Payments
- ✅ Order Management
- ✅ Email Notificaties
- ✅ Admin Interface

**Test de shop en begin met verkopen!** 🚀
