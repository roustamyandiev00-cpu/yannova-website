# Supabase Real-time Chat Setup

## 🎯 Wat is geïmplementeerd

- ✅ Real-time chat met Supabase
- ✅ AI responses met Google Gemini
- ✅ Chat sessies en berichten opslag
- ✅ Live updates zonder page refresh
- ✅ Chat geschiedenis per sessie

## 📋 Setup Stappen

### 1. Supabase Database Schema

Ga naar je Supabase dashboard → SQL Editor en voer uit:

```bash
# Run het schema bestand
cat supabase-chat-schema.sql
```

Of kopieer de inhoud van `supabase-chat-schema.sql` naar de SQL Editor.

Dit creëert:
- `chat_sessions` table
- `chat_messages` table
- Indexes voor performance
- Row Level Security policies
- Realtime subscriptions

### 2. Environment Variables

Vul in `.env.local`:

```env
# Supabase (REQUIRED voor chat)
NEXT_PUBLIC_SUPABASE_URL=https://uphjbgfwtvtqwnyrtnee.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[your-anon-key]

# Google AI (REQUIRED voor AI responses)
GOOGLE_GENERATIVE_AI_API_KEY=[your-google-ai-key]
```

#### Supabase Keys vinden:
1. Ga naar [Supabase Dashboard](https://supabase.com/dashboard)
2. Selecteer je project
3. Ga naar Settings → API
4. Kopieer:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - anon/public key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

#### Google AI API Key:
1. Ga naar [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Klik op "Create API Key"
3. Kopieer de key → `GOOGLE_GENERATIVE_AI_API_KEY`

### 3. Test de Chat

```bash
# Start development server
npm run dev

# Open browser
open http://localhost:3000

# Klik op chat widget (rechtsonder)
# Vul je gegevens in
# Start een gesprek!
```

## 🏗️ Architectuur

### Database Schema

```
chat_sessions
├── id (UUID, primary key)
├── email (TEXT)
├── name (TEXT)
├── phone (TEXT)
├── status (TEXT: active/archived/closed)
├── created_at (TIMESTAMPTZ)
└── updated_at (TIMESTAMPTZ)

chat_messages
├── id (UUID, primary key)
├── session_id (UUID, foreign key)
├── text (TEXT)
├── sender (TEXT: user/admin/ai)
├── email (TEXT)
└── created_at (TIMESTAMPTZ)
```

### Flow

1. **User opent chat** → Vult naam, email, telefoon in
2. **Session wordt aangemaakt** → Opgeslagen in `chat_sessions`
3. **AI stuurt welkomstbericht** → Opgeslagen in `chat_messages`
4. **User stuurt bericht** → Opgeslagen in `chat_messages`
5. **AI genereert response** → Via `/api/chat/ai`
6. **Response opgeslagen** → In `chat_messages`
7. **Realtime update** → Alle clients zien nieuwe berichten direct

### AI Context

De AI heeft kennis over:
- Yannova diensten (ramen, deuren, renovatie)
- Prijzen en garanties
- Werkgebied (Antwerpen + 30km)
- Contact informatie
- Premies en subsidies

## 🔧 Configuratie

### AI Prompt Aanpassen

Edit `src/app/api/chat/ai/route.ts`:

```typescript
const SYSTEM_PROMPT = `
Je bent een vriendelijke AI assistent voor Yannova...
[pas aan naar wens]
`;
```

### Chat Widget Styling

Edit `src/components/ChatWidget.tsx` voor:
- Kleuren
- Positionering
- Animaties
- Teksten

### Realtime Settings

In Supabase Dashboard → Database → Replication:
- Zorg dat `chat_sessions` en `chat_messages` enabled zijn
- Check "Realtime" toggle

## 📊 Admin Dashboard (TODO)

Je kunt een admin dashboard maken om:
- Alle chat sessies te zien
- Live mee te kijken met gesprekken
- Handmatig te antwoorden (override AI)
- Sessies te archiveren

Voorbeeld query:

```typescript
// Get all active sessions
const { data } = await supabase
  .from('chat_sessions')
  .select(`
    *,
    chat_messages (*)
  `)
  .eq('status', 'active')
  .order('updated_at', { ascending: false });
```

## 🚀 Deployment

### Vercel Environment Variables

Voeg toe aan Vercel:

```env
NEXT_PUBLIC_SUPABASE_URL=https://uphjbgfwtvtqwnyrtnee.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[your-anon-key]
GOOGLE_GENERATIVE_AI_API_KEY=[your-google-ai-key]
```

### Supabase Production

- Supabase is automatisch production-ready
- Geen extra configuratie nodig
- Realtime werkt out-of-the-box

## 🔒 Security

### Row Level Security (RLS)

Huidige policy: Allow all (voor development)

Voor productie, overweeg:

```sql
-- Only allow users to see their own sessions
CREATE POLICY "Users can view own sessions" ON chat_sessions
  FOR SELECT USING (email = current_user_email());

-- Only allow users to send messages to their own sessions
CREATE POLICY "Users can insert own messages" ON chat_messages
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM chat_sessions 
      WHERE id = session_id 
      AND email = current_user_email()
    )
  );
```

### Rate Limiting

Overweeg rate limiting toe te voegen aan `/api/chat/ai`:

```typescript
import { rateLimitMiddleware } from '@/lib/rate-limit';

// 10 messages per minute
const { isLimited } = rateLimitMiddleware(request, 10, 60 * 1000);
if (isLimited) {
  return NextResponse.json({ error: 'Te veel berichten' }, { status: 429 });
}
```

## 📈 Monitoring

### Supabase Dashboard

Monitor:
- Database usage
- Realtime connections
- API requests
- Storage

### Logs

Check logs in:
- Vercel Functions logs
- Supabase Logs & Reports
- Browser console (development)

## 🐛 Troubleshooting

### Chat berichten verschijnen niet

1. Check Supabase Realtime is enabled
2. Verify anon key is correct
3. Check browser console for errors
4. Test database connection:

```typescript
const { data, error } = await supabase
  .from('chat_messages')
  .select('*')
  .limit(1);

console.log({ data, error });
```

### AI responses werken niet

1. Verify `GOOGLE_GENERATIVE_AI_API_KEY` is set
2. Check API quota in Google Cloud Console
3. Test API directly:

```bash
curl https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_KEY \
  -H 'Content-Type: application/json' \
  -d '{"contents":[{"parts":[{"text":"Hello"}]}]}'
```

### Realtime niet werkend

1. Check Supabase project is not paused
2. Verify tables have Realtime enabled
3. Check browser supports WebSockets
4. Test connection:

```typescript
const channel = supabase.channel('test');
channel.subscribe((status) => {
  console.log('Realtime status:', status);
});
```

## 💡 Tips

- Test chat in incognito mode voor fresh session
- Use Supabase Studio to view data in real-time
- Monitor AI costs in Google Cloud Console
- Keep conversation history limited (last 10 messages)
- Archive old sessions regularly

---

**Setup Date:** Maart 2026
**Version:** 1.0.0
**Dependencies:** Supabase, Google AI, Next.js 16
