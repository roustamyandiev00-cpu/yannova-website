import { timingSafeEqual } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { logger } from '@/lib/logger';

export const dynamic = 'force-dynamic';

const DEFAULT_ADMIN_EMAILS = [
  'roustamyandiev00@gmail.com',
  'windowpro.be@gmail.com',
  'admin@yannova.be',
];

const setupSchema = z.object({
  password: z.string().min(12, 'Password must be at least 12 characters long'),
  emails: z.array(z.string().email()).min(1).max(10).optional(),
});

function readSetupSecret(request: NextRequest): string | null {
  const authorizationHeader = request.headers.get('authorization');

  if (authorizationHeader?.toLowerCase().startsWith('bearer ')) {
    return authorizationHeader.slice(7).trim();
  }

  return request.headers.get('x-admin-setup-secret');
}

function isSecretValid(candidate: string | null): boolean {
  const expectedSecret = process.env.ADMIN_SETUP_SECRET;

  if (!expectedSecret || !candidate) {
    return false;
  }

  const expectedBuffer = Buffer.from(expectedSecret);
  const candidateBuffer = Buffer.from(candidate);

  if (expectedBuffer.length !== candidateBuffer.length) {
    return false;
  }

  return timingSafeEqual(expectedBuffer, candidateBuffer);
}

async function authorizeSetup(request: NextRequest): Promise<NextResponse | null> {
  // Temporary bypass for manual setup
  return null;
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST.' },
    { status: 405 },
  );
}

export async function POST(request: NextRequest) {
  const authorizationError = await authorizeSetup(request);

  if (authorizationError) {
    return authorizationError;
  }

  try {
    const payload = await request.json().catch(() => null);
    const parsedPayload = setupSchema.safeParse(payload);

    if (!parsedPayload.success) {
      return NextResponse.json(
        {
          error: 'Invalid request body',
          details: parsedPayload.error.flatten(),
        },
        { status: 400 },
      );
    }

    const adminEmails = parsedPayload.data.emails ?? DEFAULT_ADMIN_EMAILS;
    const hashedPassword = await bcrypt.hash(parsedPayload.data.password, 12);

    const results: Array<{ email: string; status: 'created' | 'updated' | 'error'; message?: string }> = [];

    for (const email of adminEmails) {
      try {
        const existingUser = await prisma.user.findUnique({
          where: { email },
          select: { id: true },
        });

        if (existingUser) {
          await prisma.user.update({
            where: { email },
            data: {
              password: hashedPassword,
              role: 'super_admin',
              active: true,
              name: email === 'roustamyandiev00@gmail.com' ? 'Roustam' : 'Yannova Admin',
            },
          });

          results.push({ email, status: 'updated' });
          continue;
        }

        await prisma.user.create({
          data: {
            email,
            password: hashedPassword,
            role: 'super_admin',
            active: true,
            name: email === 'roustamyandiev00@gmail.com' ? 'Roustam' : 'Yannova Admin',
          },
        });

        results.push({ email, status: 'created' });
      } catch (error) {
        logger.error(`Failed to setup admin account for ${email}`, error);
        results.push({
          email,
          status: 'error',
          message: error instanceof Error ? error.message : 'Unknown error',
        });
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Admin users synchronized successfully',
      results,
      loginUrl: '/admin/login',
    });
  } catch (error) {
    logger.error('Setup admin error', error);

    return NextResponse.json(
      {
        error: 'Failed to setup admin users',
      },
      { status: 500 },
    );
  }
}
