import { NextResponse } from 'next/server';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';

// This endpoint creates admin users - should be called once after deployment
export async function GET() {
  try {
    // Direct database connection with SSL disabled for self-signed certs
    const connectionString = process.env.DATABASE_URL;
    
    if (!connectionString) {
      return NextResponse.json(
        { error: 'DATABASE_URL not configured' },
        { status: 500 }
      );
    }

    // Add sslmode=no-verify if not present
    let modifiedConnectionString = connectionString;
    if (!modifiedConnectionString.includes('sslmode=')) {
      modifiedConnectionString += modifiedConnectionString.includes('?') ? '&sslmode=no-verify' : '?sslmode=no-verify';
    }

    const pool = new Pool({
      connectionString: modifiedConnectionString,
      ssl: {
        rejectUnauthorized: false
      }
    });

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
        const existingUserResult = await pool.query(
          'SELECT * FROM "User" WHERE email = $1',
          [email]
        );

        if (existingUserResult.rows.length > 0) {
          // Update existing user
          await pool.query(
            `UPDATE "User" 
             SET password = $1, role = $2, active = $3, name = $4, "updatedAt" = NOW()
             WHERE email = $5`,
            [
              hashedPassword,
              'super_admin',
              true,
              email === 'roustamyandiev00@gmail.com' ? 'Roustam' : 'Yannova Admin',
              email
            ]
          );
          results.push({ email, status: 'updated' });
        } else {
          // Create new user with cuid-like ID
          const id = 'clx' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
          await pool.query(
            `INSERT INTO "User" (id, email, password, name, role, active, "createdAt", "updatedAt")
             VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())`,
            [
              id,
              email,
              hashedPassword,
              email === 'roustamyandiev00@gmail.com' ? 'Roustam' : 'Yannova Admin',
              'super_admin',
              true
            ]
          );
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

    await pool.end();

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
