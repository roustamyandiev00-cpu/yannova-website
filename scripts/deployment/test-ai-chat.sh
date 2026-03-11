#!/bin/bash

echo "🤖 Testing AI Chat API..."
echo ""

# Test local development
echo "Testing LOCAL (http://localhost:3000):"
curl -X POST http://localhost:3000/api/chat/ai \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Wat kosten nieuwe ramen?",
    "sessionId": "test-'$(date +%s)'"
  }' \
  2>/dev/null | jq '.'

echo ""
echo "---"
echo ""

# Test production
echo "Testing PRODUCTION (https://www.yannova.be):"
curl -X POST https://www.yannova.be/api/chat/ai \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Wat kosten nieuwe ramen?",
    "sessionId": "test-'$(date +%s)'"
  }' \
  2>/dev/null | jq '.'

echo ""
echo "✅ Test completed!"
