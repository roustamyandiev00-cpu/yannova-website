# Mappenstructuur Verbeterplan

## Huidige Problemen
- 40+ losse markdown bestanden in root directory
- 5 verschillende AI/agent configuratiemappen (.agents, .codex, .gemini, .qodo, .specify)
- Losse component bestanden in root (ArchitecturalAnimation.tsx)
- Onduidelijke organisatie van scripts en configuraties

## Voorgestelde Nieuwe Structuur

```
/
├── .ai-tools/              # Gecentraliseerde AI tool configuraties
│   ├── agents/            # Van .agents, .codex, .qodo
│   ├── workflows/         # Van .agents/workflows, .qodo/workflows
│   └── templates/         # Van .specify/templates
│
├── docs/                   # Alle documentatie
│   ├── deployment/        # DEPLOYMENT_*.md, VERCEL_*.md
│   ├── setup/             # *_SETUP.md bestanden
│   ├── guides/            # *_GUIDE.md bestanden
│   ├── seo/               # SEO_*.md bestanden
│   ├── google-ads/        # GOOGLE_ADS_*.md bestanden
│   └── changelog/         # CHANGELOG.md, FEATURES_SUMMARY.md
│
├── scripts/               # Alle scripts (blijft)
│   ├── admin/            # Admin gerelateerde scripts
│   ├── database/         # Database scripts
│   ├── seo/              # SEO scripts
│   └── deployment/       # Deployment scripts
│
├── public/                # Publieke assets (blijft)
│   ├── images/           # Geoptimaliseerde images
│   └── fotos/            # Project foto's
│
├── src/                   # Source code (blijft)
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── types/
│
├── config/                # Configuratiebestanden
│   ├── firebase/         # firestore.*, firebase-debug.log
│   ├── env/              # .env bestanden
│   └── deployment/       # netlify.toml, vercel.json
│
└── [standaard config bestanden in root]
    ├── package.json
    ├── tsconfig.json
    ├── next.config.ts
    └── .gitignore
```

## Acties

### 1. Documentatie Consolideren
- Verplaats alle *_SETUP.md naar docs/setup/
- Verplaats alle *_GUIDE.md naar docs/guides/
- Verplaats alle DEPLOYMENT_*.md naar docs/deployment/
- Verplaats alle SEO_*.md naar docs/seo/
- Verplaats alle GOOGLE_ADS_*.md naar docs/google-ads/

### 2. AI Tools Consolideren
- Merge .agents, .codex, .gemini, .qodo naar .ai-tools/
- Behoud alleen .kiro/ (actieve tool)

### 3. Scripts Organiseren
- Groepeer scripts in subdirectories per functie

### 4. Config Files Opschonen
- Verplaats Firebase configs naar config/firebase/
- Groepeer deployment configs

### 5. Root Opschonen
- Verwijder losse component bestanden (verplaats naar src/components/)
- Behoud alleen essentiële config bestanden

## Voordelen
- Overzichtelijke root directory
- Logische groepering van documentatie
- Makkelijker te navigeren
- Betere scheiding tussen code, config en docs
- Eenvoudiger onderhoud
