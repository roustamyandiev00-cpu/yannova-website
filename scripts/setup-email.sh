#!/bin/bash

# Email Setup Script voor Yannova.be
# Dit script helpt je om de email configuratie in te stellen

echo "📧 Yannova.be Email Setup"
echo "=========================="
echo ""

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "❌ .env.local bestand niet gevonden!"
    echo "   Kopieer eerst .env.local.example naar .env.local"
    echo ""
    read -p "Wil je dit nu doen? (j/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Jj]$ ]]; then
        cp .env.local.example .env.local
        echo "✅ .env.local aangemaakt"
    else
        exit 1
    fi
fi

echo "📋 Huidige SMTP configuratie:"
echo ""

# Read current values
SMTP_HOST=$(grep "^SMTP_HOST=" .env.local | cut -d '=' -f2)
SMTP_PORT=$(grep "^SMTP_PORT=" .env.local | cut -d '=' -f2)
SMTP_USER=$(grep "^SMTP_USER=" .env.local | cut -d '=' -f2)
SMTP_PASS=$(grep "^SMTP_PASS=" .env.local | cut -d '=' -f2)

echo "   Host: ${SMTP_HOST:-NIET INGESTELD}"
echo "   Port: ${SMTP_PORT:-NIET INGESTELD}"
echo "   User: ${SMTP_USER:-NIET INGESTELD}"
echo "   Pass: ${SMTP_PASS:+***${SMTP_PASS: -4}}"
echo ""

# Check if password is set
if [[ "$SMTP_PASS" == *"YOUR_SMTP_PASSWORD_HERE"* ]] || [ -z "$SMTP_PASS" ]; then
    echo "⚠️  SMTP wachtwoord is nog niet ingesteld!"
    echo ""
    echo "Je kunt het wachtwoord vinden in:"
    echo "  • Thunderbird: Instellingen → Privacy & Beveiliging → Opgeslagen wachtwoorden"
    echo "  • Of vraag het aan je hosting provider"
    echo ""
    read -p "Wil je het wachtwoord nu invoeren? (j/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Jj]$ ]]; then
        echo ""
        read -sp "Voer SMTP wachtwoord in: " NEW_PASS
        echo ""
        
        # Update .env.local
        if [[ "$OSTYPE" == "darwin"* ]]; then
            # macOS
            sed -i '' "s|SMTP_PASS=.*|SMTP_PASS=$NEW_PASS|g" .env.local
        else
            # Linux
            sed -i "s|SMTP_PASS=.*|SMTP_PASS=$NEW_PASS|g" .env.local
        fi
        
        echo "✅ Wachtwoord opgeslagen in .env.local"
        echo ""
    fi
fi

echo "🧪 Wil je de email configuratie testen?"
read -p "Test uitvoeren? (j/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Jj]$ ]]; then
    echo ""
    node scripts/test-email.js
fi

echo ""
echo "✅ Setup voltooid!"
echo ""
echo "Volgende stappen:"
echo "  1. Start development server: npm run dev"
echo "  2. Test het contactformulier op: http://localhost:3000/contact"
echo "  3. Controleer je inbox op: info@yannova.be"
echo ""
