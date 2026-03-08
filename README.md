# Yannova Bouw Website

Modern, high-performance website voor Yannova Bouw - specialist in ramen, deuren en renovatie in Antwerpen en omgeving.

## 🚀 Features

### Core Functionaliteit
- ✅ **Responsive Design** - Volledig geoptimaliseerd voor desktop, tablet en mobiel
- ✅ **SEO Optimized** - Structured data, meta tags, sitemap en robots.txt
- ✅ **Performance** - Web Vitals monitoring, image optimization, caching
- ✅ **Security** - Rate limiting, security headers, input sanitization
- ✅ **Accessibility** - ARIA labels, keyboard navigation, screen reader support

### Pagina's
- 🏠 Homepage met hero sectie en diensten overzicht
- 📋 Diensten pagina's (Ramen & Deuren, Gevelrenovatie, Isolatie, Totaalrenovatie)
- 🖼️ Projecten galerij met filtering
- 📞 Contact formulier met validatie
- 💰 Premie gids voor renovatiepremies
- 🤖 AI Chatbot voor klantenservice

### Admin Dashboard
- 📊 Analytics en statistieken
- 📝 Project management
- 💬 Lead management
- ⭐ Testimonials beheer
- 🖼️ Media library
- 👥 User management
- 🔍 SEO tools

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: PostgreSQL (Supabase)
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **AI**: Google Gemini API
- **Email**: Nodemailer
- **Analytics**: Google Analytics, Firebase
- **Animations**: Framer Motion

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/yourusername/yannova-website.git
cd yannova-website

# Install dependencies
npm install

# Setup environment variables
cp .env.local.example .env.local
# Edit .env.local with your credentials

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Authentication
AUTH_SECRET="your-secret-key"
AUTH_URL="http://localhost:3000"

# Email
SMTP_HOST="your-smtp-host"
SMTP_PORT="587"
SMTP_USER="your-email"
SMTP_PASS="your-password"
CONTACT_EMAIL="info@yannova.be"

# Google AI
GOOGLE_GENERATIVE_AI_API_KEY="your-api-key"

# Site
NEXT_PUBLIC_SITE_URL="https://www.yannova.be"
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

## 📝 Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server

# Database
npx prisma generate     # Generate Prisma client
npx prisma migrate dev  # Run migrations
npx prisma studio       # Open Prisma Studio

# Utilities
npm run lint            # Run ESLint
npm run health-check    # Check API health
```

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── admin/          # Admin dashboard
│   ├── api/            # API routes
│   ├── diensten/       # Service pages
│   └── ...
├── components/         # React components
│   ├── admin/         # Admin components
│   ├── animations/    # Animation components
│   └── ui/            # UI components
├── lib/               # Utility functions
│   ├── actions.ts     # Server actions
│   ├── cache.ts       # Caching system
│   ├── rate-limit.ts  # Rate limiting
│   └── ...
└── prisma/            # Database schema
```

## 🔐 Security Features

- **Rate Limiting**: API endpoints protected against abuse
- **Input Sanitization**: All user inputs sanitized
- **Security Headers**: CSP, HSTS, X-Frame-Options, etc.
- **Authentication**: Secure admin authentication with NextAuth
- **Environment Validation**: Type-safe environment variables

## 📊 Performance

- **Web Vitals Monitoring**: Track LCP, FID, CLS
- **Image Optimization**: Next.js Image component with proper sizing
- **Caching**: Server-side caching for database queries
- **Code Splitting**: Automatic code splitting by Next.js
- **Lazy Loading**: Components and images loaded on demand

## 🎨 Design System

- **Colors**: Custom color palette with CSS variables
- **Typography**: Inter font family
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components
- **Animations**: Smooth transitions with Framer Motion

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Large touch targets, swipe gestures
- **Performance**: Optimized images and assets for mobile

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 👥 Contact

**Yannova Bouw**
- Website: https://www.yannova.be
- Email: info@yannova.be
- Phone: +32 489 96 00 01

---

Built with ❤️ by Yannova Bouw
