# Setup Guide: Integraties Configureren

Deze guide helpt je om alle externe integraties te configureren voor de chat features.

## 📧 Email Service (Resend)

1. Ga naar [resend.com](https://resend.com) en maak een account
2. Verifieer je domein (yannova.be)
3. Genereer een API key
4. Voeg toe aan `.env.local`:
```bash
RESEND_API_KEY="re_jouw_api_key_hier"
```

**Alternatief: SendGrid**
```bash
SENDGRID_API_KEY="SG.jouw_api_key_hier"
```

## 📱 SMS Notificaties (Twilio)

1. Ga naar [twilio.com](https://twilio.com) en maak een account
2. Koop een telefoonnummer
3. Haal je credentials op
4. Voeg toe aan `.env.local`:
```bash
TWILIO_ACCOUNT_SID="ACxxxxxxxxxxxxx"
TWILIO_AUTH_TOKEN="jouw_auth_token"
TWILIO_PHONE_NUMBER="+32470123456"
TEAM_NOTIFICATION_PHONE="+32489960001"
```

**Kosten:** ~€1/maand voor nummer + €0.07 per SMS

## 📅 Google Calendar API

1. Ga naar [Google Cloud Console](https://console.cloud.google.com)
2. Maak een nieuw project
3. Enable Google Calendar API
4. Maak een Service Account
5. Download de credentials JSON
6. Voeg toe aan `.env.local`:
```bash
GOOGLE_CALENDAR_API_KEY="jouw_api_key"
GOOGLE_CALENDAR_ID="primary"
# Of specifiek calendar ID: "abc123@group.calendar.google.com"
```

## 🤖 AI Services (Reeds geconfigureerd)

### Grok AI
```bash
XAI_API_KEY="xai-jouw_key_hier"
```

### Google Gemini
```bash
GOOGLE_GENERATIVE_AI_API_KEY="AIzaSyBnXC_9Q1KGwJWh_t8rXVcxaHwAvgmAbW4"
```

## 🔗 Webhooks Configureren

### Supabase Webhooks (voor real-time notificaties)

1. Ga naar Supabase Dashboard
2. Database → Webhooks
3. Maak nieuwe webhook:
   - **Table:** `chat_sessions`
   - **Events:** INSERT, UPDATE
   - **URL:** `https://jouw-domein.com/api/webhooks/hot-lead`
   - **Method:** POST

## 🧪 Testen

### Test Email
```bash
curl -X POST http://localhost:3000/api/chat/send-summary \
  -H "Content-Type: application/json" \
  -d '{"sessionId": "test-session-id"}'
```

### Test SMS
```bash
# Voeg test functie toe in je code
import { sendSMS } from '@/lib/sms-notifications';

await sendSMS({
  to: '+32489960001',
  body: 'Test SMS van Yannova chat systeem'
});
```

### Test Hot Lead Webhook
```bash
curl -X POST http://localhost:3000/api/webhooks/hot-lead \
  -H "Content-Type: application/json" \
  -d '{"sessionId": "test-session-id", "trigger": "manual"}'
```

## 💰 Kosten Overzicht

| Service | Kosten | Limiet |
|---------|--------|--------|
| Resend | Gratis | 3,000 emails/maand |
| Twilio SMS | €0.07/SMS | Pay as you go |
| Google Calendar | Gratis | 1M requests/dag |
| Grok AI | $5/1M tokens | Pay as you go |
| Google Gemini | Gratis | 15 requests/min |

## 🔒 Beveiliging

**Belangrijk:** Voeg nooit API keys toe aan Git!

Zorg dat `.env.local` in `.gitignore` staat:
```
.env.local
.env*.local
```

Voor productie, gebruik Vercel Environment Variables:
1. Ga naar Vercel Dashboard
2. Project Settings → Environment Variables
3. Voeg alle keys toe

## 📊 Monitoring

### Email Delivery
- Resend Dashboard: Zie alle verzonden emails
- Check bounce rate en open rate

### SMS Delivery
- Twilio Console: Zie alle SMS logs
- Monitor delivery status

### API Usage
- Check Grok/Gemini usage in hun dashboards
- Set up alerts voor hoge usage

## 🆘 Troubleshooting

### Emails komen niet aan
1. Check spam folder
2. Verifieer domein in Resend
3. Check API key is correct

### SMS werkt niet
1. Verifieer telefoonnummer format (+32...)
2. Check Twilio balance
3. Verifieer nummer is niet geblokkeerd

### Calendar sync faalt
1. Check API key permissions
2. Verifieer calendar ID
3. Check quota limits

## 🚀 Productie Checklist

- [ ] Alle API keys toegevoegd aan Vercel
- [ ] Domein geverifieerd voor emails
- [ ] Twilio nummer gekocht en geconfigureerd
- [ ] Google Calendar gedeeld met service account
- [ ] Webhooks geconfigureerd in Supabase
- [ ] Test emails verstuurd
- [ ] Test SMS verstuurd
- [ ] Monitoring alerts ingesteld

## 📞 Support

Bij vragen over setup:
- Email: info@yannova.be
- Check documentatie van elke service
- Test eerst in development mode
