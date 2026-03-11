import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

// This endpoint should be protected or removed after first use
export async function POST(request: Request) {
  try {
    // Get secret key from request
    const body = await request.json();
    const { secret } = body;

    // Simple protection - change this secret
    if (secret !== process.env.ADMIN_SETUP_SECRET) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const adminEmails = [
      'roustamyandiev00@gmail.com',
      'windowpro.be@gmail.com'
    ];
    
    const password = 'Yannova2024!';
    const hashedPassword = await bcrypt.hash(password, 10);

    const results = [];

    for (const email of adminEmails) {
      try {
        // Check if user exists
        const existingUser = await prisma.user.findUnique({
          where: { email }
        });

        if (existingUser) {
          // Update existing user
          await prisma.user.update({
            where: { email },
            data: {
              password: hashedPassword,
              role: 'super_admin',
              active: true,
              name: email === 'roustamyandiev00@gmail.com' ? 'Roustam' : 'Yannova Admin'
            }
          });
          results.push({ email, status: 'updated' });
        } else {
          // Create new user
          await prisma.user.create({
            data: {
              email,
              password: hashedPassword,
              role: 'super_admin',
              active: true,
              name: email === 'roustamyandiev00@gmail.com' ? 'Roustam' : 'Yannova Admin'
            }
          });
          results.push({ email, status: 'created' });
        }
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
      credentials: {
        emails: adminEmails,
        password: 'Yannova2024!'
      }
    });

  } catch (error) {
    console.error('Setup admin error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to setup admin users',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
