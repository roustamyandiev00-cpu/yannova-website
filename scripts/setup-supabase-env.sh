#!/bin/bash

echo "🚀 Supabase Environment Setup"
echo "=============================="
echo ""
echo "Project: Archonpro.com"
echo "Reference: hqeozmmlddvempancnao"
echo "Region: EU West (Ireland)"
echo ""

# Supabase keys (already retrieved)
SUPABASE_URL="https://hqeozmmlddvempancnao.supabase.co"
ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxZW96bW1sZGR2ZW1wYW5jbmFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2NDE0OTAsImV4cCI6MjA4NzIxNzQ5MH0.AdNH_DwkvsiR_RhRqRbzp6fSxGd-GiKacIjiB4mbEDE"
SERVICE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxZW96bW1sZGR2ZW1wYW5jbmFvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTY0MTQ5MCwiZXhwIjoyMDg3MjE3NDkwfQ.tPqLpISxLCHamKuwWV7O0JawsObQieYrQPBvK7TGTsw"

echo "✅ Supabase URL en Keys zijn al ingevuld"
echo ""
echo "📋 Nu hebben we het database wachtwoord nodig:"
echo ""
echo "Stappen:"
echo "1. Open: https://supabase.com/dashboard/project/hqeozmmlddvempancnao/settings/database"
echo "2. Scroll naar 'Database password'"
echo "3. Als je het wachtwoord niet meer weet, klik 'Reset database password'"
echo "4. Kopieer het wachtwoord"
echo ""
read -p "Heb je het wachtwoord? (j/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Jj]$ ]]; then
    echo "Oké, open eerst de Supabase dashboard en haal het wachtwoord op."
    echo "Run dit script opnieuw wanneer je het hebt."
    exit 0
fi

echo ""
read -sp "Voer database wachtwoord in: " DB_PASSWORD
echo ""
echo ""

if [ -z "$DB_PASSWORD" ]; then
    echo "❌ Geen wachtwoord ingevoerd"
    exit 1
fi

# URL encode the password
ENCODED_PASSWORD=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$DB_PASSWORD', safe=''))")

# Create/update .env.local
cat > .env.local << EOF
# ============================================
# Email Configuration
# ============================================
SMTP_HOST=mail.b.hostedemail.com
SMTP_PORT=587
SMTP_USER=info@yannova.be
SMTP_PASS=WRmN3yerM_B8qjFq3z3i
CONTACT_EMAIL=info@yannova.be

# ============================================
# NextAuth Configuration
# ============================================
AUTH_SECRET=zgX5qjcxcTVTXy28PODzEELVJaDRP2l/1DFG/hSbrQ8=
AUTH_URL=http://localhost:3000

# ============================================
# Database - Supabase PostgreSQL
# ============================================
# Project: Archonpro.com (hqeozmmlddvempancnao)
DATABASE_URL="postgresql://postgres.hqeozmmlddvempancnao:${ENCODED_PASSWORD}@aws-0-eu-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.hqeozmmlddvempancnao:${ENCODED_PASSWORD}@aws-0-eu-west-1.pooler.supabase.com:5432/postgres"

# ============================================
# Google AI & Analytics
# ============================================
NEXT_PUBLIC_GA_ID=G-1RS27QF82W
GOOGLE_GENERATIVE_AI_API_KEY=YOUR_GOOGLE_AI_API_KEY_HERE

# ============================================
# Supabase Configuration (for Real-time Chat)
# ============================================
# Project: Archonpro.com (hqeozmmlddvempancnao)
NEXT_PUBLIC_SUPABASE_URL=${SUPABASE_URL}
NEXT_PUBLIC_SUPABASE_ANON_KEY=${ANON_KEY}
SUPABASE_SERVICE_ROLE_KEY=${SERVICE_KEY}

# ============================================
# Site Configuration
# ============================================
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EOF

echo "✅ .env.local bijgewerkt met database wachtwoord"
echo ""
echo "🧪 Database connectie testen..."
echo ""

# Test database connection
if npx prisma db pull --force 2>&1 | grep -q "Introspection completed"; then
    echo "✅ Database connectie werkt!"
    echo ""
    echo "📊 Volgende stap: Chat schema aanmaken"
    echo ""
    echo "Run in Supabase SQL Editor:"
    echo "  cat supabase-chat-schema.sql"
    echo ""
    echo "Of open:"
    echo "  https://supabase.com/dashboard/project/hqeozmmlddvempancnao/editor"
else
    echo "⚠️  Database connectie test gefaald"
    echo "Check of het wachtwoord correct is"
fi

echo ""
echo "✅ Setup voltooid!"
