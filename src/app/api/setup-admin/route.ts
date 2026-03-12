import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

// This endpoint creates admin users - should be called once after deployment
export async function GET() {
  try {
    const adminEmails = [
      'roustamyandiev00@gmail.com',
      'windowpro.be@gmail.com',
      'admin@yannova.be'
    ];
    
    const password = 'Yannova2024!';
    const hashedPassword = await bcrypt.hash(password, 10);

    const results = [];

    for (const email of adminEmails) {
      try {
        const user = await prisma.user.upsert({
          where: { email },
          update: {
            password: hashedPassword,
            role: 'super_admin',
            active: true,
            name: email === 'roustamyandiev00@gmail.com' ? 'Roustam' : 'Yannova Admin',
          },
          create: {
            email,
            password: hashedPassword,
            role: 'super_admin',
            active: true,
            name: email === 'roustamyandiev00@gmail.com' ? 'Roustam' : 'Yannova Admin',
          },
        });
        
        results.push({ email, status: 'success' });
      } catch (error) {
        results.push({ 
          email, 
          status: 'error', 
          message: error instanceof Error ? error.message : 'Unknown error' 
        });
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Admin users setup complete',
      results,
      note: 'You can now login with these credentials',
      credentials: {
        emails: adminEmails,
        password: 'Yannova2024!',
        loginUrl: '/admin/login'
      }
    });

  } catch (error) {
    console.error('Setup admin error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to setup admin users',
        details: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}


export async function POST() {
  // Keep POST for backward compatibility
  return GET();
}
