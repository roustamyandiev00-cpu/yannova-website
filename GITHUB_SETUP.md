# 🐙 GitHub Repository Setup - Yannova

## Stap 1: Maak een nieuwe repository op GitHub

### Via GitHub Website (Aanbevolen):

1. **Ga naar GitHub**: https://github.com/new

2. **Vul de repository details in**:
   - **Repository name**: `yannova-website` (of `Yannova.be`)
   - **Description**: `Yannova renovation company website - Next.js 16 + React 19 + Supabase`
   - **Visibility**: 
     - ✅ **Private** (AANBEVOLEN - bevat business logic)
     - ⚠️ Public (alleen als je open source wilt)
   - **Initialize repository**: 
     - ❌ NIET aanvinken "Add a README file"
     - ❌ NIET aanvinken ".gitignore"
     - ❌ NIET aanvinken "Choose a license"
     - (We hebben al een lokale repository met commits)

3. **Klik op "Create repository"**

4. **Kopieer de repository URL** die je ziet (bijvoorbeeld):
   ```
   https://github.com/jouw-username/yannova-website.git
   ```

---

## Stap 2: Verbind lokale repository met GitHub

### Optie A: HTTPS (Makkelijkst)

```bash
# Voeg GitHub remote toe
git remote add origin https://github.com/jouw-username/yannova-website.git

# Verifieer
git remote -v

# Push naar GitHub
git push -u origin main
```

Bij de eerste push wordt je gevraagd om in te loggen met GitHub credentials.

### Optie B: SSH (Veiliger, maar vereist SSH key setup)

```bash
# Voeg GitHub remote toe
git remote add origin git@github.com:jouw-username/yannova-website.git

# Push naar GitHub
git push -u origin main
```

**Als je nog geen SSH key hebt**:
```bash
# Genereer SSH key
ssh-keygen -t ed25519 -C "jouw-email@example.com"

# Kopieer public key
cat ~/.ssh/id_ed25519.pub

# Voeg toe aan GitHub:
# GitHub > Settings > SSH and GPG keys > New SSH key
```

---

## Stap 3: Verifieer dat alles werkt

```bash
# Check remote
git remote -v
# Moet tonen:
# origin  https://github.com/jouw-username/yannova-website.git (fetch)
# origin  https://github.com/jouw-username/yannova-website.git (push)

# Check laatste commit
git log --oneline -1
# Moet tonen: security: fix 6 critical security vulnerabilities
```

---

## ⚠️ BELANGRIJK: Verifieer dat secrets NIET op GitHub staan

### Na de push, check op GitHub:

1. **Ga naar je repository op GitHub**
2. **Check deze bestanden**:
   - ✅ `.env` moet placeholders bevatten (GEEN echte wachtwoorden)
   - ✅ `.env.local` mag NIET zichtbaar zijn (gitignored)
   - ✅ `.env.local.example` moet zichtbaar zijn (documentatie)

3. **Zoek naar secrets**:
   - Gebruik GitHub search: zoek naar `WRmN3yerM_B8qjFq3z3i`
   - Moet GEEN resultaten geven!
   - Als wel: DIRECT repository verwijderen en opnieuw beginnen

---

## 🔒 Security Check

```bash
# Lokaal: Check of .env.local NOOIT is gecommit
git log --all --full-history --source -- .env.local
# Moet leeg zijn!

# Check of .env alleen placeholders bevat
git show HEAD:.env | grep -i "password\|secret\|key"
# Moet alleen "YOUR_" placeholders tonen
```

---

## 📝 Repository Settings (Optioneel maar Aanbevolen)

### Op GitHub repository pagina:

1. **Settings > General**:
   - ✅ Enable "Require branches to be up to date before merging"
   - ✅ Enable "Automatically delete head branches"

2. **Settings > Branches**:
   - Klik "Add rule"
   - Branch name pattern: `main`
   - ✅ Enable "Require a pull request before merging"
   - ✅ Enable "Require status checks to pass before merging"

3. **Settings > Secrets and variables > Actions**:
   - Voeg secrets toe voor CI/CD (later)

---

## 🎉 Klaar!

Je repository is nu op GitHub! Volgende stap: Vercel deployment.

**Repository URL**: https://github.com/jouw-username/yannova-website

---

## 🆘 Troubleshooting

### "Permission denied (publickey)"
```bash
# Je hebt SSH key nodig, gebruik HTTPS in plaats daarvan:
git remote set-url origin https://github.com/jouw-username/yannova-website.git
```

### "Repository not found"
```bash
# Check of de URL correct is:
git remote -v

# Update indien nodig:
git remote set-url origin https://github.com/CORRECTE-username/yannova-website.git
```

### "Failed to push some refs"
```bash
# Als de remote repository niet leeg is:
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### "Authentication failed"
```bash
# Voor HTTPS: gebruik Personal Access Token in plaats van wachtwoord
# GitHub > Settings > Developer settings > Personal access tokens > Generate new token
# Gebruik token als wachtwoord bij git push
```

---

**Volgende stap**: Vercel Deployment (zie DEPLOYMENT_CHECKLIST.md)
