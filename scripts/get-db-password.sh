#!/bin/bash

echo "🔐 Database Wachtwoord Ophalen"
echo "================================"
echo ""
echo "Het database wachtwoord moet je handmatig ophalen uit Supabase Dashboard."
echo ""
echo "Stappen:"
echo "1. Open: https://supabase.com/dashboard/project/hqeozmmlddvempancnao/settings/database"
echo "2. Scroll naar 'Database password'"
echo "3. Klik op 'Reset database password' als je het wachtwoord niet meer weet"
echo "4. Kopieer het wachtwoord"
echo ""
echo "Wil je het wachtwoord nu invoeren? (j/n)"
read -p "> " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Jj]$ ]]; then
    echo ""
    read -sp "Voer database wachtwoord in: " DB_PASSWORD
    echo ""
    
    # URL encode special characters
    ENCODED_PASSWORD=$(echo -n "$DB_PASSWORD" | jq -sRr @uri)
    
    # Update .env.local
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        sed -i '' "s|DATABASE_URL=\"postgresql://postgres.hqeozmmlddvempancnao:\[YOUR-DB-PASSWORD\]@|DATABASE_URL=\"postgresql://postgres.hqeozmmlddvempancnao:${ENCODED_PASSWORD}@|g" .env.local
        sed -i '' "s|DIRECT_URL=\"postgresql://postgres.hqeozmmlddvempancnao:\[YOUR-DB-PASSWORD\]@|DIRECT_URL=\"postgresql://postgres.hqeozmmlddvempancnao:${ENCODED_PASSWORD}@|g" .env.local
    else
        # Linux
        sed -i "s|DATABASE_URL=\"postgresql://postgres.hqeozmmlddvempancnao:\[YOUR-DB-PASSWORD\]@|DATABASE_URL=\"postgresql://postgres.hqeozmmlddvempancnao:${ENCODED_PASSWORD}@|g" .env.local
        sed -i "s|DIRECT_URL=\"postgresql://postgres.hqeozmmlddvempancnao:\[YOUR-DB-PASSWORD\]@|DIRECT_URL=\"postgresql://postgres.hqeozmmlddvempancnao:${ENCODED_PASSWORD}@|g" .env.local
    fi
    
    echo "✅ Database wachtwoord opgeslagen in .env.local"
    echo ""
    echo "Test de connectie:"
    echo "  npx prisma db pull"
    echo ""
else
    echo "Oké, je kunt het later handmatig invullen in .env.local"
fi
