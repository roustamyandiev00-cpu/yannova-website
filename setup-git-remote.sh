#!/bin/bash

# Voer dit script uit nadat je een GitHub repo hebt aangemaakt
# Vervang USERNAME met je GitHub username

GITHUB_USERNAME="jouw-username"
REPO_NAME="yannova-web"

git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git
git branch -M main
git push -u origin main

echo "✅ Gepusht naar GitHub!"
echo "Nu koppelen aan Vercel:"
echo "1. Ga naar https://vercel.com/new"
echo "2. Import je GitHub repo"
echo "3. Voeg environment variables toe"
