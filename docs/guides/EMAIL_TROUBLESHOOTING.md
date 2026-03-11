# Email Troubleshooting Guide - Yannova Contact Form

## 🔍 Probleem: Geen emails ontvangen

### Stap 1: Test SMTP Configuratie

```bash
node scripts/test-email.js
```

Dit script test of de SMTP verbinding werkt en stuurt een test email.

**Mogelijke uitkomsten**:
- ✅ Email verzonden → SMTP werkt, probleem ligt elders
- ❌ Authentication failed → Verkeerde credentials
- ❌ Connection failed → Verkeerde host/port
- ❌ Timeout → Firewall of netwerk probleem

---

## 🔧 Veelvoorkomende Problemen

### 1. SMTP Authentication Failed

**Symptomen**: Error "EAUTH" of "Invalid login"

**Oplossingen**:
1. Check of SMTP_USER en SMTP_PASS correct zijn in `.env.local`
2. Verifieer credentials in mail.b.hostedemail.com
3. Check of 2FA is ingeschakeld (moet uit voor SMTP)
4. Probeer wachtwoord opnieuw in te stellen

**Test**:
```bash
# Check of credentials zijn ingesteld
grep SMTP .env.local
```

---

### 2. Connection Timeout

**Symptomen**: Error "ETIMEDOUT" of "ECONNECTION"

**Oplossingen**:
1. Check firewall instellingen
2. Verifieer SMTP_HOST: `mail.b.hostedemail.com`
3. Verifieer SMTP_PORT: `587` (of `465` voor SSL)
4. Test verbinding:
   ```bash
   telnet mail.b.hostedemail.com 587
   ```

---

### 3. Emails Komen Niet Aan

**Symptomen**: Geen error, maar email komt niet aan

**Oplossingen**:

#### A. Check Spam Folder
- Kijk in spam/junk folder van info@yannova.be
- Voeg afzender toe aan whitelist

#### B. Check Email Logs
```bash
# In development
npm run dev
# Kijk naar console output bij form submit
```

#### C. Check CONTACT_EMAIL
```bash
grep CONTACT_EMAIL .env.local
# Moet zijn: CONTACT_EMAIL=info@yannova.be
```

#### D. Check Email Provider
- Log in op mail.b.hostedemail.com
- Check inbox van info@yannova.be
- Check email quota (niet vol?)
- Check email forwarding regels

---

### 4. CSRF Token Error

**Symptomen**: "Ongeldige beveiligingstoken" error

**Oplossing**: CSRF is nu optioneel gemaakt. Als dit nog steeds een probleem is:

```typescript
// In src/components/ContactForm.tsx
// Verwijder CSRF token fetch tijdelijk
```

---

## 🧪 Handmatige Test

### Test 1: Direct API Call

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Gebruiker",
    "email": "test@example.com",
    "phone": "0489960001",
    "subject": "Test",
    "message": "Dit is een test bericht"
  }'
```

**Verwachte response**:
```json
{
  "success": true,
  "message": "Bericht succesvol verzonden!"
}
```

### Test 2: Check Logs

```bash
# Start development server met logs
npm run dev

# In andere terminal, submit form
# Check console voor:
# - "Contact email sent" → Success
# - "Email not sent - SMTP not configured" → Config probleem
# - Error messages → Specifiek probleem
```

---

## 📋 Checklist

Ga deze checklist af:

- [ ] `.env.local` bestaat en bevat SMTP configuratie
- [ ] SMTP_HOST = `mail.b.hostedemail.com`
- [ ] SMTP_PORT = `587`
- [ ] SMTP_USER = `info@yannova.be`
- [ ] SMTP_PASS is ingevuld (niet leeg)
- [ ] CONTACT_EMAIL = `info@yannova.be`
- [ ] Test script draait zonder errors: `node scripts/test-email.js`
- [ ] Spam folder gecheckt
- [ ] Email provider inbox gecheckt
- [ ] Firewall staat SMTP verkeer toe (port 587)

---

## 🔍 Debug Mode

Voor gedetailleerde logging, voeg toe aan `.env.local`:

```bash
DEBUG=nodemailer:*
NODE_ENV=development
```

Dan:
```bash
npm run dev
```

Je ziet nu alle SMTP communicatie in de console.

---

## 🚨 Emergency: Tijdelijke Oplossing

Als emails absoluut niet werken, gebruik tijdelijk een alternatieve methode:

### Optie 1: Gmail SMTP (Tijdelijk)

```bash
# In .env.local
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=jouw-gmail@gmail.com
SMTP_PASS=app-specific-password
```

**Let op**: Maak een app-specific password aan in Gmail settings!

### Optie 2: SendGrid (Gratis tier)

```bash
npm install @sendgrid/mail

# In .env.local
SENDGRID_API_KEY=your-api-key
```

### Optie 3: Webhook naar Zapier/Make

Stuur form data naar webhook die email verstuurt.

---

## 📞 Contact Hosting Provider

Als niets werkt, contact mail.b.hostedemail.com:

**Informatie om te geven**:
- Account: info@yannova.be
- Probleem: SMTP authentication/connection
- Error messages uit test script
- Poort gebruikt: 587
- Datum/tijd van test

---

## ✅ Verificatie

Na oplossing, test:

1. Run test script: `node scripts/test-email.js`
2. Submit contact form op website
3. Check inbox info@yannova.be
4. Verifieer email inhoud correct is

---

## 📝 Veelgestelde Vragen

**Q: Waarom krijg ik geen error maar ook geen email?**
A: Email is waarschijnlijk verzonden maar komt aan in spam, of email provider blokkeert het.

**Q: Werkt het lokaal maar niet in production?**
A: Check Vercel environment variables. SMTP credentials moeten daar ook ingesteld zijn.

**Q: Kan ik een andere email provider gebruiken?**
A: Ja, update SMTP_HOST, SMTP_PORT, SMTP_USER en SMTP_PASS in .env.local

**Q: Hoe test ik in production?**
A: Gebruik de live website, of test via Vercel logs in dashboard.

---

## 🔗 Nuttige Links

- [Nodemailer Documentation](https://nodemailer.com/)
- [SMTP Error Codes](https://www.mailgun.com/blog/email/smtp-error-codes/)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)

---

**Laatste update**: Na implementatie CSRF protection en email fixes
