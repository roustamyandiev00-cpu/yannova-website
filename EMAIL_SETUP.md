# Email Configuratie Gids

Deze gids helpt je om de email functionaliteit van je Yannova.be website in te stellen.

## 📧 Wat werkt er?

- **Contactformulier** op `/contact` pagina
- **Chat widget** voor directe berichten
- **Email notificaties** naar info@yannova.be

## 🔧 Configuratie Stappen

### Stap 1: SMTP Instellingen

Open `.env.local` en vul de volgende variabelen in:

```env
SMTP_HOST=mail.b.hostedemail.com
SMTP_PORT=465
SMTP_USER=info@yannova.be
SMTP_PASS=jouw_wachtwoord_hier
CONTACT_EMAIL=info@yannova.be
```

### Stap 2: Wachtwoord Vinden

Je SMTP wachtwoord kun je vinden in:

**Thunderbird:**
1. Ga naar `Instellingen` → `Privacy & Beveiliging`
2. Klik op `Opgeslagen wachtwoorden`
3. Zoek naar `mail.b.hostedemail.com`
4. Kopieer het wachtwoord

**Of vraag het aan je hosting provider**

### Stap 3: Test de Configuratie

Run het test script:

```bash
node scripts/test-email.js
```

Dit script:
- ✅ Controleert of alle variabelen zijn ingesteld
- ✅ Test de SMTP verbinding
- ✅ Stuurt een test email naar info@yannova.be

### Stap 4: Test het Contactformulier

1. Start je development server: `npm run dev`
2. Ga naar `http://localhost:3000/contact`
3. Vul het formulier in en verstuur
4. Controleer je inbox op info@yannova.be

## 🔒 Beveiliging

- `.env.local` staat in `.gitignore` en wordt NOOIT gecommit
- Gebruik sterke wachtwoorden
- Port 465 gebruikt SSL encryptie

## 🐛 Troubleshooting

### "Can't reach SMTP server"
- Controleer of SMTP_HOST correct is
- Controleer je internetverbinding
- Mogelijk blokkeert een firewall de verbinding

### "Authentication failed"
- Controleer SMTP_USER en SMTP_PASS
- Zorg dat het wachtwoord geen spaties bevat
- Probeer opnieuw in te loggen in Thunderbird

### "JSON parse error" in formulier
- Dit is opgelost met betere error handling
- Controleer de browser console voor details

## 📝 Email Template

Emails worden verzonden met:
- **Van:** info@yannova.be
- **Naar:** info@yannova.be (of CONTACT_EMAIL)
- **Reply-To:** Email van de gebruiker
- **Onderwerp:** [Website] Onderwerp - Naam

## 🚀 Productie Deployment

Voor Vercel deployment:

1. Ga naar je Vercel project dashboard
2. Ga naar `Settings` → `Environment Variables`
3. Voeg toe:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_EMAIL`

4. Redeploy je applicatie

## 📊 Rate Limiting

Het contactformulier heeft rate limiting:
- **Limiet:** 5 berichten per 15 minuten per IP
- **Bescherming:** Tegen spam en misbruik

## ✅ Checklist

- [ ] SMTP credentials ingevuld in `.env.local`
- [ ] Test script succesvol uitgevoerd
- [ ] Test email ontvangen
- [ ] Contactformulier getest
- [ ] Chat widget getest
- [ ] Environment variables toegevoegd aan Vercel

## 🆘 Hulp Nodig?

Als je problemen hebt:
1. Run `node scripts/test-email.js` voor diagnostics
2. Controleer de browser console voor errors
3. Check de server logs in development mode
4. Neem contact op met je hosting provider

---

**Laatste update:** Maart 2026
