import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

// Beveiligde setup route - werkt alleen als de secret klopt
export async function POST(req: Request) {
  try {
    const { secret } = await req.json();

    // Controleer de geheime sleutel
    if (secret !== process.env.ADMIN_SETUP_SECRET) {
      return NextResponse.json({ error: 'Ongeautoriseerd' }, { status: 401 });
    }

    const password = 'Yannova2024!';
    const hashedPassword = await bcrypt.hash(password, 10);

    const admins = [
      { email: 'roustamyandiev00@gmail.com', name: 'Roustam' },
      { email: 'windowpro.be@gmail.com', name: 'Yannova Admin' },
    ];

    const results = [];

    for (const admin of admins) {
      const existing = await prisma.user.findUnique({ where: { email: admin.email } });

      if (existing) {
        // Update wachtwoord en zorg dat rol en active correct zijn
        await prisma.user.update({
          where: { email: admin.email },
          data: {
            password: hashedPassword,
            role: 'super_admin',
            active: true,
            name: admin.name,
          },
        });
        results.push({ email: admin.email, status: 'bijgewerkt' });
      } else {
        await prisma.user.create({
          data: {
            email: admin.email,
            password: hashedPassword,
            name: admin.name,
            role: 'super_admin',
            active: true,
          },
        });
        results.push({ email: admin.email, status: 'aangemaakt' });
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Admin gebruikers klaar',
      results,
    });
  } catch (error) {
    console.error('Init admin error:', error);
    return NextResponse.json(
      { error: 'Fout bij aanmaken', details: String(error) },
      { status: 500 }
    );
  }
}

// GET om te controleren of admins bestaan
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');

  if (secret !== process.env.ADMIN_SETUP_SECRET) {
    return NextResponse.json({ error: 'Ongeautoriseerd' }, { status: 401 });
  }

  try {
    const users = await prisma.user.findMany({
      where: {
        email: { in: ['roustamyandiev00@gmail.com', 'windowpro.be@gmail.com'] },
      },
      select: { email: true, role: true, active: true, name: true },
    });

    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
