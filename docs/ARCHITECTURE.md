# 🏗️ ARCHITECTUUR OVERZICHT - YANNOVA.BE

## 📊 SYSTEEM DIAGRAM

```
┌─────────────────────────────────────────────────────────────┐
│                      YANNOVA.BE v2.0                        │
│                   Next.js 16 Application                     │
└─────────────────────────────────────────────────────────────┘
                              │
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   Frontend   │    │   Backend    │    │  External    │
│  Components  │    │     API      │    │  Services    │
└──────────────┘    └──────────────┘    └──────────────┘
        │                     │                     │
        │                     │                     │
        ▼                     ▼                     ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ Optimized    │    │ Database     │    │ Google AI    │
│ Images       │    │ (Supabase)   │    │ (Gemini)     │
│ (WebP/AVIF)  │    │ + Prisma     │    │              │
└──────────────┘    └──────────────┘    └──────────────┘
```

---

## 🔧 COMPONENT ARCHITECTUUR

### 1. Database Layer

```
┌─────────────────────────────────────────┐
│         src/lib/prisma.ts               │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐   │
│  │   Connection Pool Manager       │   │
│  │   - Max: 10 connections         │   │
│  │   - Min: 2 connections          │   │
│  │   - Timeout: 10s                │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │   Retry Logic                   │   │
│  │   - Max retries: 3              │   │
│  │   - Exponential backoff         │   │
│  │   - Smart error handling        │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │   Health Check                  │   │
│  │   - /api/health endpoint        │   │
│  │   - Database connectivity       │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

### 2. Image Optimization Layer

```
┌─────────────────────────────────────────┐
│    Image Optimization Pipeline          │
├─────────────────────────────────────────┤
│                                         │
│  Input: RenovatieProject/*.png         │
│         │                               │
│         ▼                               │
│  ┌─────────────────────────────────┐   │
│  │  scripts/optimize-images.js     │   │
│  │  - Resize to 3 sizes            │   │
│  │  - Convert to WebP              │   │
│  │  - Convert to AVIF              │   │
│  │  - Quality: 85%                 │   │
│  └─────────────────────────────────┘   │
│         │                               │
│         ▼                               │
│  Output: public/images/renovatie/      │
│         - *-sm.webp (640px)            │
│         - *-md.webp (1024px)           │
│         - *-lg.webp (1920px)           │
│         - *.avif (1920px)              │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  OptimizedImage Component       │   │
│  │  - Blur placeholder             │   │
│  │  - Lazy loading                 │   │
│  │  - Error handling               │   │
│  │  - Responsive sizes             │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

### 3. AI Chatbot Architecture

```
┌─────────────────────────────────────────┐
│         AI Chatbot System               │
├─────────────────────────────────────────┤
│                                         │
│  User Message                           │
│         │                               │
│         ▼                               │
│  ┌─────────────────────────────────┐   │
│  │  Intent Detection               │   │
│  │  - Quote request                │   │
│  │  - Info request                 │   │
│  │  - Contact request              │   │
│  │  - Complaint                    │   │
│  └─────────────────────────────────┘   │
│         │                               │
│         ▼                               │
│  ┌─────────────────────────────────┐   │
│  │  Human Intervention Check       │   │
│  │  - Complaints → Human           │   │
│  │  - Complex questions → Human    │   │
│  │  - Urgent matters → Human       │   │
│  └─────────────────────────────────┘   │
│         │                               │
│         ▼                               │
│  ┌─────────────────────────────────┐   │
│  │  Google Gemini AI               │   │
│  │  - Context-aware responses      │   │
│  │  - Company knowledge base       │   │
│  │  - Dutch (Belgium) language     │   │
│  └─────────────────────────────────┘   │
│         │                               │
│         ▼                               │
│  ┌─────────────────────────────────┐   │
│  │  Quick Reply Generator          │   │
│  │  - Intent-based suggestions     │   │
│  │  - Contextual options           │   │
│  └─────────────────────────────────┘   │
│         │                               │
│         ▼                               │
│  Response + Quick Replies               │
└─────────────────────────────────────────┘
```

---

## 📁 FILE STRUCTURE

```
yannova.be/
├── src/
│   ├── app/
│   │   └── api/
│   │       ├── health/
│   │       │   └── route.ts          # Health check endpoint
│   │       └── chat/
│   │           └── ai/
│   │               └── route.ts      # AI chatbot API
│   ├── components/
│   │   ├── OptimizedImage.tsx        # Image component
│   │   └── examples/
│   │       ├── ChatbotExample.tsx    # Chatbot voorbeeld
│   │       └── ImageExample.tsx      # Image voorbeeld
│   └── lib/
│       ├── prisma.ts                 # Database client + retry
│       ├── ai-chatbot.ts             # AI logic
│       └── image-optimizer.ts        # Image utilities
├── scripts/
│   └── optimize-images.js            # Batch optimization
├── docs/
│   ├── IMPLEMENTATION_GUIDE.md       # Gedetailleerde gids
│   └── ARCHITECTURE.md               # Dit bestand
├── public/
│   └── images/
│       └── renovatie/                # Geoptimaliseerde images
├── RenovatieProject/                 # Originele images
├── next.config.ts                    # Next.js configuratie
├── package.json                      # Dependencies
├── README_IMPROVEMENTS.md            # Overzicht
├── QUICK_START.md                    # Snelle start
└── CHANGELOG.md                      # Versie geschiedenis
```

---

## 🔄 DATA FLOW

### Database Query Flow

```
Component
    │
    ▼
prisma.user.findMany()
    │
    ▼
withRetry() wrapper
    │
    ├─► Attempt 1 ──► Success ──► Return data
    │                    │
    │                    ▼
    │                  Failed
    │                    │
    ├─► Wait 1s ──► Attempt 2 ──► Success ──► Return data
    │                    │
    │                    ▼
    │                  Failed
    │                    │
    ├─► Wait 2s ──► Attempt 3 ──► Success ──► Return data
    │                    │
    │                    ▼
    │                  Failed
    │                    │
    └─► Throw Error
```

### Image Loading Flow

```
Browser Request
    │
    ▼
OptimizedImage Component
    │
    ├─► Show blur placeholder
    │
    ▼
Next.js Image Optimization
    │
    ├─► Check browser support
    │   ├─► AVIF supported? → Serve AVIF
    │   ├─► WebP supported? → Serve WebP
    │   └─► Fallback → Serve original
    │
    ├─► Resize to viewport
    │
    └─► Apply lazy loading
        │
        ▼
    Image loaded
        │
        ├─► Remove blur
        └─► Smooth transition
```

### AI Chat Flow

```
User sends message
    │
    ▼
/api/chat/ai
    │
    ├─► Detect intent
    │   ├─► Quote
    │   ├─► Info
    │   ├─► Contact
    │   └─► Complaint
    │
    ├─► Check human intervention needed?
    │   ├─► Yes → Return escalation message
    │   └─► No → Continue
    │
    ├─► Build context
    │   ├─► Company info
    │   ├─► Services
    │   └─► Conversation history
    │
    ├─► Call Google Gemini AI
    │   └─► Generate response
    │
    ├─► Generate quick replies
    │
    └─► Return response
        ├─► AI message
        ├─► Quick replies
        ├─► Intent
        └─► Confidence score
```

---

## 🎯 PERFORMANCE OPTIMIZATIONS

### 1. Database
- ✅ Connection pooling (10 max, 2 min)
- ✅ Automatic retry with exponential backoff
- ✅ Graceful shutdown
- ✅ Query logging in development

### 2. Images
- ✅ AVIF format (30% smaller than WebP)
- ✅ WebP format (25% smaller than JPEG)
- ✅ Responsive sizes (8 breakpoints)
- ✅ Lazy loading
- ✅ Blur placeholders
- ✅ 1-year cache TTL

### 3. Bundle
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Package optimization (lucide-react, framer-motion)
- ✅ Compression enabled

### 4. API
- ✅ Edge runtime where possible
- ✅ Streaming responses
- ✅ Error handling
- ✅ Rate limiting ready

---

## 🔐 SECURITY

### Database
- ✅ SSL/TLS encryption
- ✅ Connection pooling limits
- ✅ Prepared statements (Prisma)
- ✅ Environment variable protection

### API
- ✅ Input validation
- ✅ Error message sanitization
- ✅ CORS configuration
- ✅ Rate limiting ready

### Images
- ✅ SVG sanitization
- ✅ Content Security Policy
- ✅ Secure headers

---

## 📊 MONITORING

### Health Checks
```bash
GET /api/health

Response:
{
  "status": "healthy",
  "database": "connected",
  "timestamp": "2026-03-01T12:00:00Z"
}
```

### Metrics to Track
- Database connection pool usage
- API response times
- Image load times
- Bundle size
- Core Web Vitals (LCP, FID, CLS)
- AI chatbot response times
- Error rates

---

## 🚀 DEPLOYMENT

### Environment Variables Required
```env
# Database
DATABASE_URL=postgres://...
DIRECT_URL=postgres://...

# AI
GOOGLE_GENERATIVE_AI_API_KEY=...

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...

# Auth
AUTH_SECRET=...
AUTH_URL=...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

### Build Process
```bash
1. npm install
2. npm run optimize-images
3. npm run build
4. npm run start
```

### Vercel Deployment
- ✅ Automatic deployments
- ✅ Environment variables configured
- ✅ Edge functions ready
- ✅ Image optimization enabled

---

**Versie**: 2.0.0  
**Laatst bijgewerkt**: 2026-03-01
