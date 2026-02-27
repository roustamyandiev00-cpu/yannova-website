# 🚀 Firebase Deployment Checklist

## Pre-Deployment

### 1. Firebase Project Setup ✅
- [ ] Ga naar https://console.firebase.google.com/
- [ ] Maak nieuw project: `yannova-website` 
- [ ] Schakel Google Analytics in
- [ ] Registreer Web App (klik `</>` icoon)
- [ ] Kopieer Firebase config object

### 2. Environment Variables (.env.local)
```bash
# Kopieer .env.local.example naar .env.local
cp .env.local.example .env.local

# Vul in met je Firebase waarden:
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=

# SMTP (voor email notificaties):
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=info@yannova.be
```

### 3. Firestore Database Activeren
```
Firebase Console → Firestore Database
→ "Database maken" 
→ "Test modus" starten
→ Locatie: europe-west (België)
→ "Inschakelen"
```

### 4. Firebase CLI Install (Optioneel)
```bash
npm install -g firebase-tools
firebase login
firebase use --add  # Selecteer je project
```

### 5. Firestore Rules Deployen
```bash
firebase deploy --only firestore:rules
```

### 6. Firestore Indexes Deployen
```bash
firebase deploy --only firestore:indexes
```

## Build & Test

### 7. Dependencies Installeren
```bash
bun install
# of
npm install
```

### 8. Build Testen
```bash
bun run build
# Controleer op errors
```

### 9. Lokale Test
```bash
bun dev
```

- [ ] Open http://localhost:3000
- [ ] Test chat widget (rechtsonder)
- [ ] Open /admin/chat 
- [ ] Verifieer realtime updates

## Data Initialisatie

### 10. Firebase Data Seeden
```bash
# POST naar /api/admin/seed
curl -X POST http://localhost:3000/api/admin/seed \
  -H "Content-Type: application/json" \
  -d '{"type": "firebase-init"}'
```

### 11. Test Data Toevoegen (Optioneel)
```bash
# Demo chat sessies aanmaken
curl -X POST http://localhost:3000/api/admin/seed \
  -H "Content-Type: application/json" \
  -d '{"type": "chat-test-data"}'
```

## Production Deploy

### 12. Vercel Deploy
```bash
# Push naar Git (triggert automatisch deploy)
git add .
git commit -m "Add Firebase chat features"
git push origin main
```

### 13. Environment Variables in Vercel
```
Vercel Dashboard → Project Settings → Environment Variables
→ Voeg alle NEXT_PUBLIC_FIREBASE_* variables toe
→ Voeg SMTP_* variables toe
→ Redeploy
```

### 14. Production Test
- [ ] Test chat widget op productie URL
- [ ] Verifieer /admin/chat werkt
- [ ] Check Firebase Analytics events

## Post-Deploy Monitoring

### 15. Firebase Console Check
```
https://console.firebase.google.com/project/[PROJECT-ID]/
→ Firestore Database: check of data binnenkomt
→ Analytics → Events: check of events gelogd worden
→ Rules: verifieer security rules actief
```

### 16. Vercel Logs Check
```
Vercel Dashboard → Deployments → Latest
→ Functions tab: check voor errors
→ Build logs: verifieer succesvolle build
```

## Troubleshooting

### "Missing or insufficient permissions"
→ Firestore rules nog niet gedeployed
→ Run: `firebase deploy --only firestore:rules`

### "FirebaseError: project not found"
→ Check NEXT_PUBLIC_FIREBASE_PROJECT_ID in .env.local
→ Verifieer project bestaat in Firebase Console

### "Chat werkt niet"
→ Check browser console voor errors
→ Verifieer alle NEXT_PUBLIC_* vars zijn ingevuld
→ Test in incognito mode (geen cached data)

### "Email notificaties werken niet"
→ Check SMTP_* environment variables
→ Verifieer Gmail app password correct
→ Check Vercel function logs

## 🎉 Success!

Als alles werkt:
- Chat widget is live op je website
- Admin dashboard toont realtime chats
- Automatische antwoorden werken
- Analytics trackt alle events
- Email notificaties bij nieuwe berichten

---

**Support:**
- Firebase Docs: https://firebase.google.com/docs
- Vercel Docs: https://vercel.com/docs
- Contact: info@yannova.be
