/**
 * Test Email Script
 * Test of SMTP configuratie werkt
 * 
 * Run: node scripts/test-email.js
 */

const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmail() {
  console.log('🔍 Testing email configuration...\n');

  // Check environment variables
  console.log('Environment variables:');
  console.log('SMTP_HOST:', process.env.SMTP_HOST || '❌ NOT SET');
  console.log('SMTP_PORT:', process.env.SMTP_PORT || '❌ NOT SET');
  console.log('SMTP_USER:', process.env.SMTP_USER || '❌ NOT SET');
  console.log('SMTP_PASS:', process.env.SMTP_PASS ? '✅ SET' : '❌ NOT SET');
  console.log('CONTACT_EMAIL:', process.env.CONTACT_EMAIL || '❌ NOT SET');
  console.log('');

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('❌ SMTP configuration incomplete!');
    process.exit(1);
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    debug: true, // Enable debug output
  });

  console.log('📧 Attempting to send test email...\n');

  try {
    // Verify connection
    await transporter.verify();
    console.log('✅ SMTP connection verified!\n');

    // Send test email
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: 'Test Email - Yannova Contact Form',
      text: 'Dit is een test email van het Yannova contact formulier.',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff6b00;">Test Email</h2>
          <p>Dit is een test email van het Yannova contact formulier.</p>
          <p>Als je deze email ontvangt, werkt de SMTP configuratie correct! ✅</p>
          <hr>
          <p style="color: #666; font-size: 12px;">
            Verzonden op: ${new Date().toLocaleString('nl-BE')}
          </p>
        </div>
      `,
    });

    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
    console.log('\n✨ Email configuration is working correctly!');
  } catch (error) {
    console.error('❌ Error sending test email:');
    console.error(error.message);
    
    if (error.code === 'EAUTH') {
      console.error('\n💡 Authentication failed. Check your SMTP_USER and SMTP_PASS.');
    } else if (error.code === 'ECONNECTION') {
      console.error('\n💡 Connection failed. Check your SMTP_HOST and SMTP_PORT.');
    } else if (error.code === 'ETIMEDOUT') {
      console.error('\n💡 Connection timeout. Check your network or firewall settings.');
    }
    
    process.exit(1);
  }
}

testEmail();
