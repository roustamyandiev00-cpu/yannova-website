# Firebase Setup Handleiding voor Yannova

## Stap 1: Firebase Project Aanmaken

1. Ga naar [Firebase Console](https://console.firebase.google.com/)
2. Klik op "Project toevoegen"
3. Geef je project een naam: `yannova-website`
4. Schakel Google Analytics in (optioneel maar aanbevolen)
5. Accepteer de voorwaarden en klik "Project maken"

## Stap 2: Web App Registreren

1. In je Firebase project, klik op het `</>` icoon (Web)
2. Geef je app een naam: `yannova-web`
3. Schakel "Firebase Hosting" uit (we gebruiken Vercel)
4. Klik "App registreren"
5. Kopieer de Firebase config object

## Stap 3: Environment Variables Instellen

Maak een `.env.local` bestand in de root van je project:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyYourActualApiKeyHere
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=yannova-website.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=yannova-website
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=yannova-website.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef123456
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Stap 4: Firestore Database Activeren

1. Ga naar "Firestore Database" in de linker sidebar
2. Klik "Database maken"
3. Kies "Starten in testmodus" (voor nu)
4. Selecteer een locatie dicht bij je gebruikers (europe-west voor België)
5. Klik "Inschakelen"

## Stap 5: Security Rules Instellen

1. Ga naar Firestore Database > Rules
2. Vervang de rules met de inhoud uit `firestore.rules` in je project:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /chatSessions/{sessionId} {
      allow read: if true;
      allow create: if true;
      allow update: if true;
    }
    
    match /chatMessages/{messageId} {
      allow read: if true;
      allow create: if true;
    }
    
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

3. Klik "Publiceren"

## Stap 6: Firebase CLI Installeren (Optioneel)

Als je Firebase functions wilt deployen:

```bash
npm install -g firebase-tools
firebase login
firebase init
```

## Stap 7: Testen

1. Start je Next.js app: `bun dev`
2. Open de website in je browser
3. Open de chat widget (rechtsonder)
4. Start een gesprek
5. Ga naar `/admin/chat` om het bericht te zien

## 🔒 Productie Security (Belangrijk!)

Voor productie, update je Firestore rules naar:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Chat sessions - allow read/write for anonymous users
    match /chatSessions/{sessionId} {
      allow read: if request.auth != null || resource.data.status == 'active';
      allow create: if request.resource.data.email is string 
                    && request.resource.data.email.matches('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}$');
      allow update: if request.auth != null || 
                    (resource.data.email == request.resource.data.email);
    }
    
    // Chat messages - users can only read their own session messages
    match /chatMessages/{messageId} {
      allow read: if request.auth != null || 
                    resource.data.sessionId == get(/databases/$(database)/documents/chatSessions/$(resource.data.sessionId)).data.id;
      allow create: if request.resource.data.text is string 
                    && request.resource.data.text.size() < 1000;
    }
  }
}
```

## 📊 Firebase Analytics

Analytics wordt automatisch geïnitialiseerd in `src/lib/firebase.ts`. Belangrijke events die worden getrackt:

- `page_view` - Pagina bezoeken
- `chat_opened` - Chat widget geopend
- `chat_message_sent` - Bericht verstuurd
- `lead_submitted` - Lead formulier ingediend
- `quote_requested` - Offerte aangevraagd

Bekijk je analytics in de Firebase Console onder "Analytics".

## 🔧 Troubleshooting

### "FirebaseError: Missing or insufficient permissions"
- Check of je Firestore rules correct zijn gepubliceerd
- Wacht 1-2 minuten na publiceren voor propagatie

### "Chat werkt niet"
- Check browser console voor errors
- Verifieer dat environment variables correct zijn ingesteld
- Check of Firestore database is aangemaakt

### "Analytics werkt niet"
- Analytics werkt alleen in productie (niet localhost)
- Of gebruik een custom domain in Firebase settings

## 📞 Support

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase Analytics](https://firebase.google.com/docs/analytics)
