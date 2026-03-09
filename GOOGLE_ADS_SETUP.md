# Google Ads Conversion Tracking Setup

Your Google Ads ID `AW-17673401673` is now configured. Follow these steps to set up conversion tracking for your lead forms.

## ✅ Already Configured

- Google Ads ID: `AW-17673401673`
- Google Analytics: `G-1RS27QF82W`
- Google Tag Manager: `GTM-586XVHKN`
- Tracking script active in production

## Setting Up Conversions in Google Ads

### 1. Create Conversion Actions

Go to [Google Ads](https://ads.google.com) and follow these steps:

1. Click **Tools & Settings** (wrench icon)
2. Under **Measurement**, click **Conversions**
3. Click **+ New conversion action**
4. Select **Website**
5. Choose conversion type:
   - **Submit lead form** (for contact forms)
   - **Phone calls** (for phone clicks)
   - **Other** (for custom events)

### 2. Configure Conversion Details

For each conversion (e.g., "Offerte Form Submission"):

**Category**: Submit lead form  
**Conversion name**: Offerte Form Submission  
**Value**: Use different values for each conversion (optional)
- Form submission: €50
- WhatsApp click: €20
- Phone click: €25
- Email click: €15

**Count**: One (count only one conversion per interaction)  
**Conversion window**: 30 days  
**Attribution model**: Data-driven or Last click

### 3. Get Conversion Labels

After creating each conversion action:

1. Click on the conversion name
2. Click **Tag setup** > **Use Google tag**
3. You'll see a conversion label like: `AbC123dEfGhI`
4. Copy this label for each conversion

### 4. Update Your Code

Add the conversion labels to your tracking functions. For example:

```typescript
// In your form submission handler
import { trackConversion } from '@/components/GoogleAds';

// When form is submitted successfully
trackConversion('AbC123dEfGhI', 50); // Replace with your actual label
```

## Current Tracking Functions

Your site already has these tracking functions ready:

```typescript
import { 
  trackFormSubmit, 
  trackWhatsAppClick, 
  trackPhoneClick, 
  trackEmailClick,
  trackConversion 
} from '@/components/GoogleAds';

// Form submission
trackFormSubmit('offerte'); // Tracks with €50 value

// Contact clicks
trackWhatsAppClick(); // Tracks with €20 value
trackPhoneClick();    // Tracks with €25 value
trackEmailClick();    // Tracks with €15 value

// Custom conversion with label
trackConversion('YOUR_CONVERSION_LABEL', 100);
```

## Implementing Conversion Tracking

### Example: Contact Form

```typescript
'use client';

import { trackFormSubmit, trackConversion } from '@/components/GoogleAds';

export function ContactForm() {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Submit form data
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });
    
    if (response.ok) {
      // Track the conversion
      trackFormSubmit('offerte');
      
      // Or use specific conversion label from Google Ads
      trackConversion('YOUR_CONVERSION_LABEL', 50);
    }
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
}
```

### Example: WhatsApp Button

```typescript
import { trackWhatsAppClick } from '@/components/GoogleAds';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/32123456789"
      onClick={() => trackWhatsAppClick()}
      target="_blank"
      rel="noopener noreferrer"
    >
      Contact via WhatsApp
    </a>
  );
}
```

## Testing Conversions

### 1. Test in Development
Conversions only track in production, but you can test the code:

```bash
NODE_ENV=production npm run dev
```

### 2. Verify in Google Ads

1. Go to **Tools & Settings** > **Conversions**
2. Check the **Status** column - should show "Recording conversions"
3. Perform a test conversion on your site
4. Wait 3-24 hours for data to appear
5. Check **Recent conversions** in the conversion details

### 3. Use Google Tag Assistant

Install [Google Tag Assistant](https://tagassistant.google.com/) Chrome extension:
- Visit your site
- Click the extension icon
- Verify Google Ads tag is firing
- Test conversion actions

## Conversion Labels Reference

Create these conversions in Google Ads and note their labels:

| Conversion Name | Type | Value | Label |
|----------------|------|-------|-------|
| Offerte Form | Submit lead form | €50 | `_______` |
| WhatsApp Click | Other | €20 | `_______` |
| Phone Click | Phone call | €25 | `_______` |
| Email Click | Other | €15 | `_______` |

## Troubleshooting

### Conversions not showing?

1. **Check environment**: Only works in production (`NODE_ENV=production`)
2. **Verify IDs**: Ensure `NEXT_PUBLIC_GOOGLE_ADS_ID` is correct
3. **Wait**: Can take 3-24 hours for first conversions to appear
4. **Check browser console**: Look for gtag errors
5. **Ad blockers**: Disable ad blockers when testing

### Tag not firing?

1. Open browser DevTools > Network tab
2. Filter by "google"
3. Look for requests to `googletagmanager.com`
4. Check for `gtag/js` and conversion events

## Resources

- [Google Ads Conversion Tracking Guide](https://support.google.com/google-ads/answer/1722022)
- [Set up conversion tracking](https://support.google.com/google-ads/answer/12785821)
- [Test your conversion tracking](https://support.google.com/google-ads/answer/6331314)
- [Your Google Ads Dashboard](https://ads.google.com)

## Next Steps

1. ✅ Google Ads ID configured
2. ⏳ Create conversion actions in Google Ads
3. ⏳ Get conversion labels
4. ⏳ Update tracking functions with labels
5. ⏳ Test conversions
6. ⏳ Monitor performance in Google Ads dashboard
