# 🤖 AI Chatbot Activeren - Stap voor Stap

## ✅ Wat is al klaar:

- ✅ AI chatbot code is volledig geïmplementeerd
- ✅ Supabase database voor chat geschiedenis
- ✅ Google Gemini 1.5 Flash integratie
- ✅ Cloudflare Workers AI als backup
- ✅ Lead form integratie
- ✅ Chat widget op alle pagina's

## ❌ Wat ontbreekt:

- ❌ Google AI API Key is niet ingesteld
- ❌ API Key moet toegevoegd worden aan Vercel

---

## 🚀 Activeer de AI Chatbot in 3 Stappen:

### Stap 1: Google AI API Key Aanmaken (2 minuten)

1. **Open Google AI Studio:**
   ```
   https://aistudio.google.com/app/apikey
   ```

2. **Klik op "Create API Key"**
   - Log in met je Google account
   - Selecteer een project (of maak nieuw aan)
   - Kopieer de API key (begint met `AIza...`)

3. **Voorbeeld API key:**
   ```
   AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

---

### Stap 2: API Key Toevoegen aan Vercel (2 minuten)

1. **Ga naar Vercel Dashboard:**
   ```
   https://vercel.com/dashboard
   ```

2. **Selecteer je project** (yannova-website)

3. **Ga naar Settings → Environment Variables**

4. **Klik "Add New":**
   - **Name:** `GOOGLE_GENERATIVE_AI_API_KEY`
   - **Value:** `AIzaSy...` (jouw API key)
   - **Environment:** Selecteer alle 3:
     - ✅ Production
     - ✅ Preview
     - ✅ Development

5. **Klik "Save"**

---

### Stap 3: Redeploy (1 minuut)

1. **Ga naar "Deployments" tab in Vercel**

2. **Klik op de 3 puntjes** bij de laatste deployment

3. **Klik "Redeploy"**

4. **Wacht 2-3 minuten** tot deployment klaar is

---

## ✅ Test de Chatbot:

### Test 1: Op de Website
1. Ga naar https://www.yannova.be
2. Klik op de chat widget rechtsonder (blauwe cirkel)
3. Stel een vraag: "Wat kosten nieuwe ramen?"
4. Je zou binnen 2-3 seconden een antwoord moeten krijgen

### Test 2: Via API (Terminal)
```bash
curl -X POST https://www.yannova.be/api/chat/ai \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Wat kosten nieuwe ramen?",
    "sessionId": "test-123"
  }'
```

**Verwacht resultaat:**
```json
{
  "response": "Nieuwe ramen kosten gemiddeld €400-600 per m² voor PVC en €600-900 per m² voor aluminium, inclusief plaatsing en BTW. Voor een exacte offerte doen we graag een gratis opmeting bij u thuis.",
  "success": true
}
```

---

## 🎯 Wat kan de AI Chatbot:

### Beantwoorden van vragen over:
- ✅ Prijzen van ramen en deuren
- ✅ Materialen (PVC vs Aluminium)
- ✅ Premies en subsidies
- ✅ Werkgebied (Antwerpen en omgeving)
- ✅ Diensten (renovatie, isolatie, etc.)
- ✅ Garanties en service
- ✅ Contactgegevens

### Automatische lead generatie:
- Als klant interesse toont → Vraagt om contactgegevens
- Slaat gesprek op in database
- Stuurt notificatie naar admin dashboard

---

## 💰 Kosten:

### Google Gemini 1.5 Flash - Gratis Tier:
- **15 requests per minuut**
- **1.500 requests per dag**
- **1 miljoen tokens per dag**

**Dit is gratis en meer dan genoeg voor:**
- ~500 gesprekken per dag
- ~15.000 gesprekken per maand
- €0 kosten

### Als je de gratis tier overschrijdt:
- Input: $0.075 per 1M tokens (~€0.07)
- Output: $0.30 per 1M tokens (~€0.28)
- **Geschatte kosten:** €5-10 per maand voor 10.000+ gesprekken

---

## 🔧 Troubleshooting:

### Probleem: "API key not configured"
**Oplossing:**
1. Check of API key correct is in Vercel
2. Check of je hebt geredeploy'd
3. Wacht 2-3 minuten na redeploy

### Probleem: "Rate limit exceeded"
**Oplossing:**
1. Je hebt 15 requests/minuut limiet bereikt
2. Wacht 1 minuut en probeer opnieuw
3. Overweeg upgrade naar betaald plan

### Probleem: Chatbot geeft geen antwoord
**Oplossing:**
1. Open browser console (F12)
2. Check voor errors
3. Test API direct met curl command
4. Check Vercel logs: https://vercel.com/dashboard → Logs

---

## 📊 Monitoring:

### Google AI Studio:
- Bekijk usage: https://aistudio.google.com/app/apikey
- Check quota en limieten
- Zie aantal requests per dag

### Vercel Logs:
- Bekijk errors: https://vercel.com/dashboard → Logs
- Filter op "AI Chat Error"
- Check response times

### Supabase Database:
- Bekijk chat geschiedenis: https://supabase.com/dashboard
- Ga naar Table Editor → chat_messages
- Zie alle gesprekken en leads

---

## 🎨 Aanpassen van de AI:

### Wijzig de AI persoonlijkheid:
Bestand: `src/app/api/chat/ai/route.ts`

Zoek naar `SYSTEM_PROMPT` en pas aan:
```typescript
const SYSTEM_PROMPT = `Je bent een vriendelijke en behulpzame AI assistent...`;
```

### Voeg meer informatie toe:
- Prijzen updaten
- Nieuwe diensten toevoegen
- Werkgebied uitbreiden
- Contactgegevens wijzigen

---

## ✅ Checklist:

- [ ] Google AI API Key aangemaakt
- [ ] API Key toegevoegd aan Vercel Environment Variables
- [ ] Geredeploy'd in Vercel
- [ ] Getest op website (chat widget)
- [ ] Getest via API (curl command)
- [ ] Monitoring ingesteld (Google AI Studio)
- [ ] Team geïnformeerd over nieuwe chatbot

---

## 🚀 Volgende Stappen:

1. **Week 1:** Monitor usage en feedback
2. **Week 2:** Optimaliseer AI responses op basis van echte vragen
3. **Week 3:** Voeg meer context toe (blog posts, FAQ's)
4. **Week 4:** Analyseer conversie rate (chat → lead)

---

## 📞 Hulp Nodig?

Als je problemen hebt:
1. Check de troubleshooting sectie hierboven
2. Bekijk Vercel logs voor errors
3. Test de API direct met curl
4. Check Google AI Studio voor quota

**De chatbot is klaar om te gebruiken zodra je de API key hebt toegevoegd!** 🎉
