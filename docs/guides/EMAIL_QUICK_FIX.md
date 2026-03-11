# 🚨 Quick Fix: Contact Form Emails

## Probleem
Contact formulier geeft error en emails komen niet aan.

## Snelle Oplossing (5 minuten)

### Stap 1: Test SMTP
```bash
node scripts/test-email.js
```

**Als dit werkt** → Ga naar Stap 2
**Als dit NIET werkt** → Volg onderstaande fixes

---

### Fix A: SMTP Credentials Checken

```bash
# Open .env.local
code .env.local

# Verifieer deze regels:
SMTP_HOST=mail.b.hostedemail.com
SMTP_PORT=587
SMTP_USER=info@yannova.be
SMTP_PASS=WRmN3yerM_B8qjFq3z3i
CONTACT_EMAIL=info@yannova.be
```

**Als iets ontbreekt**: Vul aan en test opnieuw

---

### Fix B: Vercel Environment Variables

Als het lokaal werkt maar niet in production:

1. Ga naar [Vercel Dashboard](https://vercel.com)
2. Selecteer je project
3. Settings → Environment Variables
4. Voeg toe:
   - `SMTP_HOST` = `mail.b.hostedemail.com`
   - `SMTP_PORT` = `587`
   - `SMTP_USER` = `info@yannova.be`
   - `SMTP_PASS` = `WRmN3yerM_B8qjFq3z3i`
   - `CONTACT_EMAIL` = `info@yannova.be`
5. Redeploy

---

### Fix C: Email Provider Check

1. Log in op [mail.b.hostedemail.com](https://mail.b.hostedemail.com)
2. Check inbox van info@yannova.be
3. Check spam folder
4. Check email quota (niet vol?)

---

### Stap 2: Deploy Fix

```bash
git add .
git commit -m "fix: contact form CSRF optional, email troubleshooting"
git push
```

---

### Stap 3: Test Live

1. Ga naar https://www.yannova.be/contact
2. Vul formulier in
3. Submit
4. Check inbox info@yannova.be (ook spam!)

---

## ✅ Verificatie

Email moet aankomen met:
- ✅ Correcte afzender (info@yannova.be)
- ✅ Onderwerp: [Website] ...
- ✅ Alle form velden (naam, email, telefoon, bericht)
- ✅ Nette HTML opmaak

---

## 🆘 Nog Steeds Niet Werkend?

### Optie 1: Check Logs
```bash
# Lokaal
npm run dev
# Submit form en check console

# Production
# Ga naar Vercel Dashboard → Logs
```

### Optie 2: Tijdelijk Gmail Gebruiken

```bash
# In .env.local
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=jouw-gmail@gmail.com
SMTP_PASS=app-specific-password
```

Maak app-specific password: [Google Account](https://myaccount.google.com/apppasswords)

### Optie 3: Contact Hosting

Bel/email mail.b.hostedemail.com support:
- Account: info@yannova.be
- Probleem: SMTP niet werkend
- Error: [plak error uit test script]

---

## 📞 Hulp Nodig?

Zie `EMAIL_TROUBLESHOOTING.md` voor gedetailleerde troubleshooting.
