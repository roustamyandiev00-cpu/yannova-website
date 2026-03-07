# ⚡ QUICK START - YANNOVA VERBETERINGEN

## 🚀 IN 5 MINUTEN AAN DE SLAG

### 1️⃣ Installeer Dependencies (2 min)
```bash
npm install
```

### 2️⃣ Optimaliseer Images (1 min)
```bash
npm run optimize-images
```

### 3️⃣ Test Database Health (30 sec)
```bash
npm run dev
# In nieuwe terminal:
npm run health-check
```

### 4️⃣ Test AI Chatbot (30 sec)
```bash
curl -X POST http://localhost:3000/api/chat/ai \
  -H "Content-Type: application/json" \
  -d '{"messages":[],"userMessage":"Hallo, wat doen jullie?"}'
```

### 5️⃣ Analyseer Bundle (1 min)
```bash
npm run analyze
```

## ✅ KLAAR!

Je hebt nu:
- ✅ Stabiele database connectie
- ✅ Geoptimaliseerde images
- ✅ Werkende AI chatbot
- ✅ Bundle size inzicht

---

## 📝 GEBRUIK IN JE CODE

### OptimizedImage Component
```tsx
import OptimizedImage from '@/components/OptimizedImage';

// In je component
<OptimizedImage
  src="/images/renovatie/bathroom-md.webp"
  alt="Badkamerrenovatie"
  width={1200}
  height={800}
  type="gallery"
  priority={false}
/>
```

### Database met Retry Logic
```typescript
import { prisma, withRetry } from '@/lib/prisma';

// Met automatic retry
const users = await withRetry(() => 
  prisma.user.findMany()
);

// Normale query
const user = await prisma.user.findUnique({
  where: { id: '123' }
});
```

### AI Chatbot API
```typescript
const response = await fetch('/api/chat/ai', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    messages: conversationHistory,
    userMessage: 'Wat kost een renovatie?'
  })
});

const data = await response.json();
console.log(data.response); // AI antwoord
console.log(data.quickReplies); // Suggesties
```

---

## 🎯 VOLGENDE STAPPEN

1. **Update je components** om OptimizedImage te gebruiken
2. **Integreer AI chatbot** in je ChatWidget
3. **Monitor bundle size** met `npm run analyze`
4. **Check database health** regelmatig

Meer details: `README_IMPROVEMENTS.md` en `docs/IMPLEMENTATION_GUIDE.md`
