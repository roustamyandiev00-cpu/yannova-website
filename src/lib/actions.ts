'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';
import { generateText } from 'ai';
import { google } from '@ai-sdk/google';
import { logger } from '@/lib/logger';


export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    logger.debug('Authenticate action called for:', email);

    const result = await signIn('credentials', { 
      email, 
      password, 
      redirect: false 
    });
    
    logger.debug('SignIn result:', result);
    
    // If we get here without error, redirect manually
    redirect('/admin');
  } catch (error) {
    // NextAuth throws NEXT_REDIRECT error on success - this is expected
    if (error instanceof Error) {
      if (error.message?.includes('NEXT_REDIRECT')) {
        logger.debug('Redirect error (expected) - re-throwing');
        throw error; // Re-throw to allow redirect
      }
    }

    logger.error('Authentication error:', error);
    
    if (error instanceof AuthError) {
      logger.debug('AuthError type:', error.type);
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Ongeldige inloggegevens.';
        case 'CallbackRouteError':
          return 'Ongeldige inloggegevens.';
        default:
          logger.error('Unknown auth error type:', error.type);
          return 'Er is iets misgegaan. Probeer opnieuw.';
      }
    }

    if (error instanceof Error) {
      logger.error('Unexpected error message:', error.message);
    }
    
    return 'Er is iets misgegaan. Probeer opnieuw.';
  }
}

const ProjectSchema = z.object({
  title: z.string().min(3, "Titel moet minimaal 3 tekens zijn"),
  description: z.string().min(10, "Beschrijving moet minimaal 10 tekens zijn"),
  category: z.string().min(1, "Categorie is verplicht"),
  image: z.instanceof(File).refine((file) => file.size > 0, "Afbeelding is verplicht"),
});

export async function createProject(prevState: unknown, formData: FormData) {
  // 1. Validate fields
  const validatedFields = ProjectSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    category: formData.get('category'),
    image: formData.get('image'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Vul alle velden correct in.',
    };
  }

  const { title, description, category, image } = validatedFields.data;
  let imageUrl = '';

  try {
    // 2. Upload image to Vercel Blob
    const blob = await put(image.name, image, {
      access: 'public',
    });
    imageUrl = blob.url;

    // 3. Save to Database
    await prisma.project.create({
      data: {
        title,
        description,
        category,
        imageUrl,
      },
    });

  } catch (error) {
    logger.error('Database Error', error);
    return {
      message: 'Database fout: Kon project niet aanmaken.',
    };
  }

  // 4. Revalidate and Redirect
  revalidatePath('/admin/projects');
  revalidatePath('/projecten'); // Also update the public page
  redirect('/admin/projects');
}

export async function deleteProject(id: string) {
  try {
    // Optional: Delete blob image here as well if needed (requires del from @vercel/blob)
    await prisma.project.delete({
      where: { id },
    });
    revalidatePath('/admin/projects');
    revalidatePath('/projecten');
  } catch (error) {
    logger.error('Database Error', error);
    throw new Error('Kon project niet verwijderen.');
  }
}

// --- Leads / Chatbot Actions ---

const LeadSchema = z.object({
  message: z.string().min(1, "Bericht mag niet leeg zijn"),
  email: z.string().email("Ongeldig emailadres").optional().or(z.literal('')),
  name: z.string().optional(),
  source: z.string().default("chatbot"),
});

export async function createLead(prevState: unknown, formData: FormData) {
  const validatedFields = LeadSchema.safeParse({
    message: formData.get('message'),
    email: formData.get('email'),
    name: formData.get('name'),
    source: formData.get('source'),
  });

  if (!validatedFields.success) {
    return { success: false, message: 'Vul aub een geldig bericht en email in.' };
  }

  try {
    await prisma.lead.create({
      data: validatedFields.data,
    });

    revalidatePath('/admin/leads');
    return { success: true, message: 'Bericht verstuurd!' };
  } catch (error) {
    logger.error('Lead Error', error);
    return { success: false, message: 'Er ging iets mis bij het versturen.' };
  }
}

export async function markLeadAsRead(id: string) {
  try {
    await prisma.lead.update({
      where: { id },
      data: { read: true }
    });
    revalidatePath('/admin/leads');
  } catch (e) {
    logger.error("Failed to mark as read", e);
  }
}

// --- Testimonials Actions ---

const TestimonialSchema = z.object({
  name: z.string().min(2, "Naam moet minimaal 2 tekens zijn"),
  company: z.string().optional(),
  rating: z.number().min(1).max(5),
  text: z.string().min(10, "Testimonial moet minimaal 10 tekens zijn"),
  imageUrl: z.string().url().optional().or(z.literal('')),
});

export async function createTestimonial(prevState: unknown, formData: FormData) {
  const validatedFields = TestimonialSchema.safeParse({
    name: formData.get('name'),
    company: formData.get('company'),
    rating: Number(formData.get('rating')),
    text: formData.get('text'),
    imageUrl: formData.get('imageUrl'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Vul alle velden correct in.',
    };
  }

  try {
    await prisma.testimonial.create({
      data: {
        ...validatedFields.data,
        approved: true, // Auto-approve admin created testimonials
      },
    });

    revalidatePath('/admin/testimonials');
    redirect('/admin/testimonials');
  } catch (error) {
    console.error('Testimonial Error:', error);
    return { message: 'Kon testimonial niet aanmaken.' };
  }
}

export async function approveTestimonial(id: string) {
  try {
    await prisma.testimonial.update({
      where: { id },
      data: { approved: true },
    });
    revalidatePath('/admin/testimonials');
  } catch (error) {
    console.error('Approve Error:', error);
  }
}

export async function toggleFeaturedTestimonial(id: string) {
  try {
    const testimonial = await prisma.testimonial.findUnique({
      where: { id },
      select: { featured: true },
    });

    await prisma.testimonial.update({
      where: { id },
      data: { featured: !testimonial?.featured },
    });
    revalidatePath('/admin/testimonials');
  } catch (error) {
    console.error('Toggle Featured Error:', error);
  }
}

export async function deleteTestimonial(id: string) {
  try {
    await prisma.testimonial.delete({
      where: { id },
    });
    revalidatePath('/admin/testimonials');
  } catch (error) {
    console.error('Delete Testimonial Error:', error);
  }
}

// --- Media Actions ---

export async function deleteMediaFile(id: string) {
  try {
    await prisma.mediaFile.delete({
      where: { id },
    });
    revalidatePath('/admin/media');
  } catch (error) {
    console.error('Delete Media Error:', error);
  }
}

export async function uploadMediaFile(prevState: unknown, formData: FormData) {
  const file = formData.get('file') as File;
  const folder = formData.get('folder') as string || 'uploads';
  const alt = formData.get('alt') as string || '';

  if (!file || file.size === 0) {
    return { success: false, message: 'Selecteer een bestand om te uploaden.' };
  }

  try {
    const blob = await put(file.name, file, {
      access: 'public',
    });

    await prisma.mediaFile.create({
      data: {
        filename: file.name,
        url: blob.url,
        size: file.size,
        mimeType: file.type,
        folder,
        alt,
      },
    });

    revalidatePath('/admin/media');
    return { success: true, message: 'Bestand geüpload!' };
  } catch (error) {
    console.error('Upload Error:', error);
    return { success: false, message: 'Kon bestand niet uploaden.' };
  }
}

// --- Settings Actions (Prisma) ---

export async function updateSettings(formData: FormData) {
  const settings = [
    { key: 'site_name', category: 'general' },
    { key: 'site_description', category: 'general' },
    { key: 'site_url', category: 'general' },
    { key: 'contact_email', category: 'contact' },
    { key: 'contact_phone', category: 'contact' },
    { key: 'contact_address', category: 'contact' },
    { key: 'social_facebook', category: 'social' },
    { key: 'social_instagram', category: 'social' },
    { key: 'social_linkedin', category: 'social' },
    { key: 'social_twitter', category: 'social' },
    { key: 'seo_title', category: 'seo' },
    { key: 'seo_description', category: 'seo' },
    { key: 'seo_keywords', category: 'seo' },
  ];

  try {
    for (const setting of settings) {
      const value = (formData.get(setting.key) as string) || '';

      await prisma.siteSetting.upsert({
        where: { key: setting.key },
        update: { value, category: setting.category },
        create: {
          key: setting.key,
          value,
          category: setting.category,
        },
      });
    }

    revalidatePath('/admin/settings');
    redirect('/admin/settings');
  } catch (error) {
    console.error('Settings Error:', error);
    throw new Error('Kon instellingen niet opslaan.');
  }
}

// --- User Management Actions ---

export async function toggleUserStatus(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: { active: true },
    });

    await prisma.user.update({
      where: { id },
      data: { active: !user?.active },
    });

    revalidatePath('/admin/users');
  } catch (error) {
    console.error('Toggle User Status Error:', error);
  }
}

export async function createUser(prevState: unknown, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const name = formData.get('name') as string;
  let role = formData.get('role') as string;

  if (!role) {
    // Default to 'user', unless it's the very first user
    const userCount = await prisma.user.count();
    role = userCount === 0 ? 'admin' : 'user';
  }

  if (!email || !password) {
    return { success: false, message: 'Email en wachtwoord zijn verplicht.' };
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role,
      },
    });

    revalidatePath('/admin/users');
  } catch (error) {
    console.error('Create User Error:', error);
    return { success: false, message: 'Kon gebruiker niet aanmaken.' };
  }

  // Redirect outside try-catch to avoid digest error
  redirect('/admin/users');
}

// --- Analytics Actions ---

export async function trackPageView(path: string, referrer?: string) {
  try {
    await prisma.pageView.create({
      data: {
        path,
        referrer,
      },
    });
  } catch (error) {
    console.error('Track Page View Error:', error);
  }
}

export async function incrementProjectViews(id: string) {
  try {
    await prisma.project.update({
      where: { id },
      data: {
        views: {
          increment: 1,
        },
      },
    });
  } catch (error) {
    console.error('Increment Views Error:', error);
  }
}

// --- SEO Actions ---

const SeoPageSchema = z.object({
  path: z.string().min(1, "Pad is verplicht"),
  title: z.string().min(1, "Titel is verplicht"),
  description: z.string().min(1, "Beschrijving is verplicht"),
  keywords: z.string().optional(),
  ogImage: z.string().url().optional().or(z.literal('')),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  canonicalUrl: z.string().url().optional().or(z.literal('')),
  h1: z.string().optional(),
  noindex: z.boolean().default(false),
  nofollow: z.boolean().default(false),
});

export async function saveSeoPage(formData: FormData) {
  const validatedFields = SeoPageSchema.safeParse({
    path: formData.get('path'),
    title: formData.get('title'),
    description: formData.get('description'),
    keywords: formData.get('keywords'),
    ogImage: formData.get('ogImage'),
    ogTitle: formData.get('ogTitle'),
    ogDescription: formData.get('ogDescription'),
    canonicalUrl: formData.get('canonicalUrl'),
    h1: formData.get('h1'),
    noindex: formData.get('noindex') === 'on',
    nofollow: formData.get('nofollow') === 'on',
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Vul alle verplichte velden correct in.',
    };
  }

  const data = validatedFields.data;

  try {
    await prisma.seoPage.upsert({
      where: { path: data.path },
      update: data,
      create: data,
    });

    revalidatePath('/admin/seo');
    return { success: true, message: 'SEO pagina opgeslagen!' };
  } catch (error) {
    console.error('Save SEO Page Error:', error);
    return { message: 'Kon SEO pagina niet opslaan.' };
  }
}

export async function deleteSeoPage(path: string) {
  try {
    await prisma.seoPage.delete({
      where: { path },
    });

    revalidatePath('/admin/seo');
    return { success: true, message: 'SEO pagina verwijderd!' };
  } catch (error) {
    console.error('Delete SEO Page Error:', error);
    return { message: 'Kon SEO pagina niet verwijderen.' };
  }
}

export async function runSeoAudit() {
  const issues: Array<{
    path: string;
    issue: string;
    severity: string;
    message: string;
  }> = [];

  try {
    const seoPages = await prisma.seoPage.findMany();

    // Check all SEO pages for issues
    for (const page of seoPages) {
      if (!page.title || page.title.length < 10) {
        issues.push({
          path: page.path,
          issue: 'short_title',
          severity: 'warning',
          message: 'Meta titel is te kort (minimaal 10 tekens aanbevolen)',
        });
      }
      if (page.title && page.title.length > 60) {
        issues.push({
          path: page.path,
          issue: 'long_title',
          severity: 'warning',
          message: 'Meta titel is te lang (maximaal 60 tekens aanbevolen)',
        });
      }
      if (!page.description || page.description.length < 50) {
        issues.push({
          path: page.path,
          issue: 'short_description',
          severity: 'warning',
          message: 'Meta beschrijving is te kort (minimaal 50 tekens aanbevolen)',
        });
      }
      if (page.description && page.description.length > 160) {
        issues.push({
          path: page.path,
          issue: 'long_description',
          severity: 'warning',
          message: 'Meta beschrijving is te lang (maximaal 160 tekens aanbevolen)',
        });
      }
      if (!page.h1) {
        issues.push({
          path: page.path,
          issue: 'missing_h1',
          severity: 'error',
          message: 'Pagina heeft geen H1 tag',
        });
      }
    }

    // Save audit results
    await prisma.seoAudit.deleteMany({});
    if (issues.length > 0) {
      await prisma.seoAudit.createMany({
        data: issues,
      });
    }

    return { success: true, issues, message: `SEO audit voltooid. ${issues.length} issues gevonden.` };
  } catch (error) {
    console.error('SEO Audit Error:', error);
    return { message: 'Kon SEO audit niet uitvoeren.' };
  }
}

export async function fixSeoIssue(issueId: string) {
  try {
    await prisma.seoAudit.update({
      where: { id: issueId },
      data: { fixed: true, fixedAt: new Date() },
    });

    revalidatePath('/admin/seo');
    return { success: true, message: 'Issue gemarkeerd als opgelost!' };
  } catch (error) {
    console.error('Fix SEO Issue Error:', error);
    return { message: 'Kon issue niet markeren als opgelost.' };
  }
}

// --- AI SEO Generation ---

export async function generateAiSeo(prevState: unknown, formData: FormData) {
  const path = formData.get('path') as string;
  const pageName = formData.get('pageName') as string;
  const content = formData.get('content') as string || '';

  if (!path || !pageName) {
    return { error: 'Path and page name are required' };
  }

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

// --- Media Upload ---

export async function saveMediaFiles(formData: FormData) {
  try {
    const filename = formData.get('filename') as string;
    const mimeType = formData.get('mimeType') as string;
    const size = parseInt(formData.get('size') as string);
    const fileData = formData.get('file') as string;

    if (!filename || !fileData) {
      return { error: 'Bestand is verplicht' };
    }

    // Upload to Vercel Blob (of andere storage)
    const blob = await put(filename, Buffer.from(fileData.split(',')[1], 'base64'), {
      access: 'public',
      contentType: mimeType,
    });

    // Save to database
    await prisma.mediaFile.create({
      data: {
        filename,
        url: blob.url,
        size,
        mimeType,
        folder: 'uploads',
      },
    });

    revalidatePath('/admin/media');
    return { success: true, url: blob.url };
  } catch (error) {
    console.error('Media Upload Error:', error);
    return { error: 'Upload mislukt' };
  }
}
