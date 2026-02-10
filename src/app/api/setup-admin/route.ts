import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    const user = await prisma.user.create({
      data: {
        email: 'admin@yannova.be',
        password: hashedPassword,
        name: 'Admin',
        role: 'admin',
      },
    });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Admin created',
      email: user.email 
    });
  } catch (error: unknown) {
    if (typeof error === 'object' && error !== null && 'code' in error && (error as { code?: string }).code === 'P2002') {
      return NextResponse.json({ 
        success: false, 
        message: 'Admin already exists' 
      });
    }
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ 
      success: false, 
      error: message 
    }, { status: 500 });
  }
}
