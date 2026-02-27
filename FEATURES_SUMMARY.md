# Yannova - Firebase & Features Update

## 🚀 Nieuwe Functionaliteit

### 1. Firebase Integratie
- **Realtime Chat** voor bezoekers
- **Firebase Analytics** voor gedragstracking
- **Firestore Database** voor chatgeschiedenis

### 2. Admin Chat Dashboard (`/admin/chat`)
- Live chat beheer
- Realtime berichten synchronisatie
- Chat sessies filteren (actief/gesloten)
- Admin antwoord functionaliteit
- Email notificaties bij nieuwe berichten

### 3. SEO Beheer (`/admin/seo`)
- Meta tags beheer per pagina
- AI-generatie voor SEO content
- Live preview (Google & Social)
- SEO audit tool

### 4. Media Bibliotheek (`/admin/media`)
- Drag & drop upload
- Foto preview
- Map structuur
- Bestandsbeheer

### 5. Dashboard Statistieken
- Projecten teller
- Live chats indicator
- Nieuwe aanvragen
- Media bestanden
- Gebruikersbeheer

## 📁 Nieuwe Bestanden

```
src/
├── lib/
│   ├── firebase.ts                 # Firebase config
│   └── chat-notifications.ts       # Email notificaties
├── components/
│   ├── FirebaseAnalytics.tsx       # Analytics tracking
│   ├── ChatWidget.tsx               # Realtime chat widget (updated)
│   └── admin/
│       ├── ChatDashboard.tsx        # Chat beheer
│       ├── UploadMediaModal.tsx     # Drag-drop upload
│       └── MediaUploadButton.tsx    # Upload knop
├── app/
│   └── admin/
│       └── chat/
│           └── page.tsx             # Chat admin pagina
├── firestore.rules                  # Security rules
├── firebase.json                    # Firebase config
└── FIREBASE_SETUP.md               # Setup handleiding
```

## 🔧 Installatie

### 1. Dependencies
```bash
bun add firebase react-dropzone
```

### 2. Environment Variables
Maak `.env.local` aan:
```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456
NEXT_PUBLIC_FIREBASE_APP_ID=1:123:web:abc
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXX

# Email SMTP (voor chat notificaties)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
ADMIN_EMAIL=info@yannova.be
```

### 3. Firebase Setup
Volg de stappen in `FIREBASE_SETUP.md`

## 🎯 Features in Gebruik

### Chat Widget (Frontend)
- Bezoekers kunnen realtime chatten
- Chatgeschiedenis blijft bewaard
- Email verplicht voor chat start
- Automatische welkomstberichten

### Admin Chat
- Alle actieve chats in 1 overzicht
- Direct antwoorden aan bezoekers
- Sessies sluiten/archiveren
- Filter op status

### Analytics Events
- `chat_opened` - Chat geopend
- `chat_message_sent` - Bericht verstuurd
- `lead_submitted` - Lead ingediend
- `page_view` - Pagina bezocht

## 📝 Todo's voor later

- [ ] Chat zoekfunctionaliteit implementeren
- [ ] Meer statistieken in dashboard
- [ ] Chat berichten archiveren
- [ ] Meerdere admin gebruikers tegelijk in chat
- [ ] Chatbots/AI integratie voor automatische antwoorden

## 🚀 Deployment

Na Firebase setup:
```bash
bun run build
bun run start
```

## 🔗 Belangrijke URLs

- `/admin/chat` - Chat beheer
- `/admin/seo` - SEO instellingen
- `/admin/media` - Foto's beheer
- `/admin` - Dashboard
