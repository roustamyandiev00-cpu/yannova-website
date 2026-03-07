# 🚀 IMPLEMENTATIE GIDS - YANNOVA VERBETERINGEN

## ✅ WAT IS GEÏMPLEMENTEERD

### 1. DATABASE OPTIMALISATIE (Prioriteit 1)

#### Connection Pooling & Retry Logic
**Bestand**: `src/lib/prisma.ts`

**Verbeteringen**:
- ✅ Connection pool configuratie (max: 10, min: 2)
- ✅ Automatic retry logic met exponential backoff
- ✅ Graceful shutdown handling
- ✅ Error handling voor pool errors
- ✅ Health check functie

**Gebruik**:
```typescript
import { prisma, withRetry } from '@/lib/prisma';

// Met retry logic
const users = await withRetry(() => prisma.user.findMany());

// Normale query (zonder retry)
const user = await prisma.user.findUnique({ where: { id: '123' } });
```

**Health Check Endpoint**: `/api/health`
```bash
curl https://yannova.be/api/health
```

---

### 2. IMAGE OPTIMALISATIE (Prioriteit 2)

#### Next.js Image Configuration
**Bestand**: `next.config.ts`

**Verbeteringen**:
- ✅ AVIF & WebP format support
- ✅ Responsive breakpoints (8 device sizes)
- ✅ 1-year cache TTL
- ✅ SVG security settings

#### OptimizedImage Component
**Bestand**: `src/components/OptimizedImage.tsx`

**Features**:
- ✅ Automatic blur placeholder
- ✅ Loading states met smooth transitions
- ✅ Error handling met fallback
- ✅ Responsive sizes per type (hero, gallery, thumbnail)

**Gebruik**:
```tsx
import OptimizedImage from '@/components/OptimizedImage';

<OptimizedImage
  src="/RenovatieProject/bathroom_renovation_tiling.png"
  alt="Badkamerrenovatie"
  width={1200}
  height={800}
  type="gallery"
  priority={false}
/>
```

#### Image Optimization Script
**Bestand**: `scripts/optimize-images.js`

**Installeer dependencies**:
```bash
npm install sharp --save-dev
```

**Run script**:
```bash
node scripts/optimize-images.js
```

Dit genereert:
- 3 WebP sizes per image (640px, 1024px, 1920px)
- 1 AVIF versie per image
- Output: `public/images/renovatie/`

---

### 3. BUNDLE ANALYZER (Prioriteit 2)

**Bestand**: `next.config.ts`

**Installeer**:
```bash
npm install webpack-bundle-analyzer --save-dev
```

**Gebruik**:
```bash
ANALYZE=true npm run build
```

Dit opent automatisch een visualisatie van je bundle size in de browser.

---

### 4. AI CHATBOT VERBETERING (Prioriteit 3)

#### Enhanced AI Chatbot
**Bestand**: `src/lib/ai-chatbot.ts`

**Features**:
- ✅ Google Gemini AI integratie
- ✅ Intent detection (quote, info, contact, complaint)
- ✅ Quick reply suggestions
- ✅ Human intervention detection
- ✅ Context-aware responses
- ✅ Nederlandse taal (België)

#### API Endpoint
**Bestand**: `src/app/api/chat/ai/route.ts`

**Gebruik**:
```typescript
const response = await fetch('/api/chat/ai', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    messages: [
      { role: 'user', content: 'Wat kost een badkamerrenovatie?' }
    ],
    userMessage: 'Wat kost een badkamerrenovatie?'
  })
});

const data = await response.json();
// {
//   response: "De prijs van een badkamerrenovatie...",
//   intent: "quote",
//   confidence: 0.9,
//   needsHuman: false,
//   quickReplies: ["Ja, graag een offerte", ...]
// }
```

---

## 📋 VOLGENDE STAPPEN

### Stap 1: Installeer Dependencies
```bash
npm install sharp webpack-bundle-analyzer --save-dev
npm install @google/generative-ai
```

### Stap 2: Optimaliseer Images
```bash
node scripts/optimize-images.js
```

### Stap 3: Update Components
Vervang bestaande `<Image>` components met `<OptimizedImage>`:

**Voor**:
```tsx
<Image src="/RenovatieProject/bathroom.png" alt="Badkamer" />
```

**Na**:
```tsx
<OptimizedImage 
  src="/images/renovatie/bathroom-md.webp" 
  alt="Badkamer"
  type="gallery"
/>
```

### Stap 4: Integreer AI Chatbot
Update je bestaande `ChatWidget.tsx` of `Chatbot.tsx`:

```tsx
import { useState } from 'react';

const [messages, setMessages] = useState([]);

async function sendMessage(userMessage: string) {
  const response = await fetch('/api/chat/ai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages, userMessage })
  });
  
  const data = await response.json();
  
  setMessages([
    ...messages,
    { role: 'user', content: userMessage },
    { role: 'assistant', content: data.response }
  ]);
}
```

### Stap 5: Test Database Health
```bash
curl http://localhost:3000/api/health
```

### Stap 6: Analyseer Bundle Size
```bash
ANALYZE=true npm run build
```

---

## 🎯 VERWACHTE RESULTATEN

### Performance Verbeteringen
- ⚡ **40-60% sneller laden** door image optimization
- ⚡ **30-40% kleinere bundle** door code splitting
- ⚡ **Stabielere database** door connection pooling
- ⚡ **Betere UX** door AI chatbot

### SEO Verbeteringen
- 🔍 **Betere Core Web Vitals** (LCP, CLS)
- 🔍 **Hogere Google PageSpeed score**
- 🔍 **Betere mobile performance**

### User Experience
- 💬 **Slimmere chatbot** met context-aware responses
- 💬 **Snellere antwoorden** door AI
- 💬 **Betere lead kwalificatie** door intent detection

---

## 🐛 TROUBLESHOOTING

### Database Connection Errors
Als je nog steeds connection errors krijgt:

1. Check je `.env.local`:
```env
DATABASE_URL="postgres://...?sslmode=require&pgbouncer=true&connection_limit=10"
```

2. Verhoog de pool timeout:
```typescript
// In src/lib/prisma.ts
connectionTimeoutMillis: 20000, // 20 seconds
```

### Image Optimization Fails
Als `sharp` niet installeert:

```bash
# macOS
brew install vips

# Linux
sudo apt-get install libvips-dev

# Probeer opnieuw
npm install sharp --save-dev
```

### AI Chatbot Errors
Check je Google AI API key:

```bash
# In .env.local
GOOGLE_GENERATIVE_AI_API_KEY=your_key_here
```

Test de API:
```bash
curl -X POST http://localhost:3000/api/chat/ai \
  -H "Content-Type: application/json" \
  -d '{"messages":[],"userMessage":"Hallo"}'
```

---

## 📚 EXTRA RESOURCES

### GitHub Repositories (voor verdere inspiratie)
- [uixmat/firestarta](https://github.com/uixmat/firestarta) - SaaS boilerplate
- [vercel/ai-chatbot](https://github.com/vercel/ai-chatbot) - AI chatbot
- [nemanjam/nextjs-prisma-boilerplate](https://github.com/nemanjam/nextjs-prisma-boilerplate) - Full stack boilerplate

### Documentatie
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Prisma Connection Pooling](https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections/connection-pool)
- [Google AI SDK](https://ai.google.dev/tutorials/node_quickstart)

---

## ✨ KLAAR!

Je hebt nu:
- ✅ Stabiele database connectie met retry logic
- ✅ Geoptimaliseerde images voor sneller laden
- ✅ Bundle analyzer voor performance monitoring
- ✅ Slimme AI chatbot voor betere customer service

**Volgende prioriteiten** (Week 3-4):
- Redis caching implementeren
- Service Worker voor offline support
- Push notifications voor admin
- File uploads in chat
- Typing indicators

Veel succes! 🚀
