# 🤖 Google AI Setup voor Yannova Chatbot

## Stap 1: Google AI API Key Aanmaken (5 minuten)

1. **Ga naar Google AI Studio:**
   - Open: https://aistudio.google.com/app/apikey
   - Log in met je Google account

2. **Maak een API Key aan:**
   - Klik op "Create API Key"
   - Selecteer een bestaand Google Cloud project of maak een nieuw aan
   - Kopieer de API key (begint met `AIza...`)

3. **Voeg de API key toe aan .env.local:**
   ```bash
   GOOGLE_GENERATIVE_AI_API_KEY=AIzaSy...jouw-key-hier
   ```

4. **Herstart de development server:**
   ```bash
   # Stop de huidige server (Ctrl+C)
   npm run dev
   ```

5. **Test de chatbot:**
   - Ga naar http://localhost:3000
   - Klik op de chat widget rechtsonder
   - Stel een vraag zoals "Wat kosten nieuwe ramen?"

## Stap 2: Voeg de API Key toe aan Vercel (voor productie)

1. **Ga naar Vercel Dashboard:**
   - Open: https://vercel.com/dashboard
   - Selecteer je project (yannova-website)

2. **Ga naar Settings → Environment Variables:**
   - Klik op "Add New"
   - Name: `GOOGLE_GENERATIVE_AI_API_KEY`
   - Value: `AIzaSy...jouw-key-hier`
   - Environment: Production, Preview, Development (selecteer alle 3)
   - Klik "Save"

3. **Redeploy:**
   - Ga naar "Deployments" tab
   - Klik op de 3 puntjes bij de laatste deployment
   - Klik "Redeploy"

## Gratis Tier Limieten:

**Google Gemini 1.5 Flash (Gratis):**
- 15 requests per minuut
- 1 miljoen tokens per dag
- 1.500 requests per dag

Dit is meer dan genoeg voor een kleine tot middelgrote website!

## Kosten bij overschrijding:

Als je de gratis tier overschrijdt:
- Input: $0.075 per 1M tokens
- Output: $0.30 per 1M tokens

Voor een chatbot betekent dit:
- ~10.000 gesprekken per maand = ~$5-10

## Alternatief: Cloudflare Workers AI (Gratis)

Als je geen Google account wilt gebruiken, kun je ook Cloudflare Workers AI gebruiken:

1. **Maak een Cloudflare account:**
   - https://dash.cloudflare.com/sign-up

2. **Ga naar Workers & Pages → AI:**
   - Klik op "Get Started"
   - Kopieer je Account ID

3. **Maak een API Token:**
   - Ga naar "My Profile" → "API Tokens"
   - Klik "Create Token"
   - Selecteer "Edit Cloudflare Workers" template
   - Kopieer de token

4. **Voeg toe aan .env.local:**
   ```bash
   CF_AI_ACCOUNT_ID=jouw-account-id
   CF_AI_API_TOKEN=jouw-api-token
   CF_AI_MODEL=@cf/meta/llama-3.2-3b-instruct
   ```

**Gratis tier:**
- 10.000 requests per dag
- Geen kosten tot 100.000 requests/dag

## Test Commands:

**Test lokaal:**
```bash
curl -X POST http://localhost:3000/api/chat/ai \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Wat kosten nieuwe ramen?",
    "sessionId": "test-123"
  }'
```

**Test productie:**
```bash
curl -X POST https://www.yannova.be/api/chat/ai \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Wat kosten nieuwe ramen?",
    "sessionId": "test-123"
  }'
```

## Troubleshooting:

**"API key not configured":**
- Check of de API key correct is in .env.local
- Herstart de development server

**"Rate limit exceeded":**
- Je hebt de gratis tier limiet bereikt
- Wacht 1 minuut en probeer opnieuw
- Overweeg upgrade naar betaald plan

**"Invalid API key":**
- Check of de API key correct is gekopieerd
- Geen spaties voor of na de key
- Key moet beginnen met `AIza`

## Monitoring:

**Google AI Studio:**
- Bekijk je usage: https://aistudio.google.com/app/apikey
- Check quota en limieten

**Vercel Logs:**
- Bekijk errors: https://vercel.com/dashboard → Logs
- Filter op "AI Chat Error"

---

## Quick Start (TL;DR):

1. Ga naar https://aistudio.google.com/app/apikey
2. Maak API key aan
3. Voeg toe aan .env.local: `GOOGLE_GENERATIVE_AI_API_KEY=AIza...`
4. Herstart server: `npm run dev`
5. Test chatbot op website
6. Voeg toe aan Vercel Environment Variables
7. Redeploy

Klaar! 🎉
