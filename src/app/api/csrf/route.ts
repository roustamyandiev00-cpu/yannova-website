import { NextResponse } from 'next/server';
import { generateCsrfToken, hashToken } from '@/lib/csrf';

export async function GET() {
  const token = generateCsrfToken();
  const hash = hashToken(token);

  return NextResponse.json(
    { csrfToken: token },
    {
      headers: {
        'X-CSRF-Token': hash,
      },
    }
  );
}
