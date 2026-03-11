# Google Tag Manager Setup Guide - Yannova.be

## Overzicht
GTM Container ID: `GTM-586XVHKN`
GA4 Measurement ID: `G-1RS27QF82W`
Google Ads ID: `AW-17673401673`

## Stap 1: Google Analytics 4 Tag

1. Ga naar **Tags** → **New**
2. **Tag Configuration**:
   - Type: `Google Analytics: GA4 Configuration`
   - Measurement ID: `G-1RS27QF82W`
3. **Triggering**: `All Pages`
4. **Name**: `GA4 - Configuration`
5. **Save**

## Stap 2: Custom Event Triggers

Maak de volgende triggers aan:

### Trigger 1: Form Submit
- **Triggers** → **New**
- **Trigger Configuration**: `Custom Event`
- **Event name**: `form_submit`
- **Name**: `CE - Form Submit`
- **Save**

### Trigger 2: WhatsApp Click
- **Trigger Configuration**: `Custom Event`
- **Event name**: `whatsapp_click`
- **Name**: `CE - WhatsApp Click`
- **Save**

### Trigger 3: Phone Click
- **Trigger Configuration**: `Custom Event`
- **Event name**: `phone_click`
- **Name**: `CE - Phone Click`
- **Save**

### Trigger 4: Email Click
- **Trigger Configuration**: `Custom Event`
- **Event name**: `email_click`
- **Name**: `CE - Email Click`
- **Save**

## Stap 3: Google Ads Conversion Tags

### Tag 1: Form Submit Conversion
1. **Tags** → **New**
2. **Tag Configuration**: `Google Ads Conversion Tracking`
3. **Conversion ID**: `AW-17673401673`
4. **Conversion Label**: [Haal dit op uit Google Ads → Conversions]
5. **Conversion Value**: `{{Event - value}}` (variabele, zie stap 4)
6. **Currency Code**: `EUR`
7. **Triggering**: `CE - Form Submit`
8. **Name**: `Google Ads - Form Submit Conversion`
9. **Save**

### Tag 2: WhatsApp Click Conversion
- Herhaal bovenstaande met:
  - **Triggering**: `CE - WhatsApp Click`
  - **Name**: `Google Ads - WhatsApp Conversion`

### Tag 3: Phone Click Conversion
- **Triggering**: `CE - Phone Click`
- **Name**: `Google Ads - Phone Conversion`

### Tag 4: Email Click Conversion
- **Triggering**: `CE - Email Click`
- **Name**: `Google Ads - Email Conversion`

## Stap 4: Data Layer Variables

Maak variabelen aan om event data te lezen:

### Variable 1: Event Value
1. **Variables** → **New**
2. **Variable Configuration**: `Data Layer Variable`
3. **Data Layer Variable Name**: `value`
4. **Name**: `Event - value`
5. **Save**

### Variable 2: Form Type
- **Data Layer Variable Name**: `form_type`
- **Name**: `Event - form_type`

### Variable 3: Currency
- **Data Layer Variable Name**: `currency`
- **Name**: `Event - currency`

## Stap 5: GA4 Event Tags (optioneel maar aanbevolen)

Voor betere tracking in GA4, maak ook GA4 event tags:

### GA4 Event - Form Submit
1. **Tags** → **New**
2. **Tag Configuration**: `Google Analytics: GA4 Event`
3. **Configuration Tag**: `GA4 - Configuration`
4. **Event Name**: `form_submit`
5. **Event Parameters**:
   - `form_type`: `{{Event - form_type}}`
   - `value`: `{{Event - value}}`
   - `currency`: `{{Event - currency}}`
6. **Triggering**: `CE - Form Submit`
7. **Name**: `GA4 - Form Submit Event`
8. **Save**

Herhaal dit voor de andere events (whatsapp_click, phone_click, email_click).

## Stap 6: Testen

1. Klik op **Preview** (rechtsboven in GTM)
2. Voer je website URL in: `https://www.yannova.be`
3. Test alle events:
   - Klik op WhatsApp button
   - Klik op telefoon nummer
   - Klik op email
   - Verstuur een formulier
4. Controleer in de GTM Preview of alle tags afvuren

## Stap 7: Publiceren

1. Als alles werkt in Preview mode
2. Klik op **Submit** (rechtsboven)
3. **Version Name**: `Initial Setup - GA4 + Conversions`
4. **Version Description**: `GA4 tracking en Google Ads conversie tracking voor alle belangrijke events`
5. **Publish**

## Conversie Labels ophalen uit Google Ads

1. Ga naar [Google Ads](https://ads.google.com)
2. **Tools & Settings** → **Conversions**
3. Klik op elke conversie actie
4. Kopieer het **Conversion Label** (bijv. `abc123DEF`)
5. Gebruik dit in je GTM conversion tags

## Verificatie

Na publiceren, controleer:
- **Google Analytics**: Real-time events
- **Google Ads**: Conversions (kan 24-48 uur duren)
- **GTM Debug Console**: Alle tags vuren correct af

## Huidige Code Implementatie

Je website gebruikt al de juiste event tracking:
- `gtmTrackFormSubmit()` → stuurt `form_submit` event
- `gtmTrackWhatsApp()` → stuurt `whatsapp_click` event
- `gtmTrackPhone()` → stuurt `phone_click` event
- `gtmTrackEmail()` → stuurt `email_click` event

Deze events worden automatisch opgepikt door GTM als je de triggers correct hebt ingesteld.
