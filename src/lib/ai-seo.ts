'use server';

import { generateText } from 'ai';
import { google } from '@ai-sdk/google';
import { z } from 'zod';

const AiSeoSchema = z.object({
  path: z.string(),
  pageName: z.string(),
  content: z.string().optional(),
});

export async function generateAiSeo(prevState: unknown, formData: FormData) {
  const parsed = AiSeoSchema.safeParse({
    path: formData.get('path'),
    pageName: formData.get('pageName'),
    content: formData.get('content') || '',
  });

  if (!parsed.success) {
    return { error: 'Invalid input' };
  }

  const { path, pageName, content } = parsed.data;

  try {
    const { text } = await generateText({
      model: google('gemini-2.0-flash-001'),
      prompt: `Genereer SEO metadata voor een renovatiebedrijf website pagina.

Pagina: ${pageName}
URL: ${path}
${content ? `Pagina inhoud: ${content}` : ''}

Genereer een JSON object met deze velden (in het Nederlands):
- title: Meta titel (50-60 tekens, aantrekkelijk voor klanten)
- description: Meta beschrijving (150-160 tekens, met call-to-action)
- keywords: 5-8 relevante keywords (komma gescheiden)
- h1: H1 heading (1 zin, max 10 woorden)
- ogTitle: Social media titel (max 40 tekens)
- ogDescription: Social media beschrijving (max 100 tekens)

Geef ALLEEN het JSON object terug, geen andere tekst.`,
    });

    // Extract JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return { error: 'AI response parsing failed' };
    }

    const seoData = JSON.parse(jsonMatch[0]);

    return {
      success: true,
      data: seoData,
    };
  } catch (error) {
    console.error('AI SEO Error:', error);
    return { error: 'AI generation failed' };
  }
}

export async function analyzeSeoWithAi(seoPage: {
  path: string;
  title: string;
  description: string;
  h1: string | null;
}) {
  try {
    const { text } = await generateText({
      model: google('gemini-2.0-flash-001'),
      prompt: `Analyseer deze SEO pagina en geef suggesties:

Pagina: ${seoPage.path}
Titel: ${seoPage.title}
Beschrijving: ${seoPage.description}
H1: ${seoPage.h1 || '(geen)'}

Geef een JSON array met verbeterpunten. Elk item moet:
- type: "error", "warning", of "info"
- field: welk veld het betreft ("title", "description", "h1")
- message: korte beschrijving van het probleem
- suggestion: concrete verbetersuggestie

Geef ALLEEN de JSON array terug.`,
    });

    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) return { suggestions: [] };

    const suggestions = JSON.parse(jsonMatch[0]);
    return { suggestions };
  } catch (error) {
    console.error('AI Analysis Error:', error);
    return { suggestions: [] };
  }
}
