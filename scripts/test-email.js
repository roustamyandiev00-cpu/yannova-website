#!/usr/bin/env node

/**
 * Test script voor email configuratie
 * Run met: node scripts/test-email.js
 */

require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

async function testEmail() {
  console.log('🔍 Email configuratie testen...\n');

  // Check environment variables
  const config = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    contactEmail: process.env.CONTACT_EMAIL || 'info@yannova.be',
  };

  console.log('📋 Configuratie:');
  console.log(`   Host: ${config.host}`);
  console.log(`   Port: ${config.port}`);
  console.log(`   User: ${config.user}`);
  console.log(`   Pass: ${config.pass ? '***' + config.pass.slice(-4) : 'NIET INGESTELD'}`);
  console.log(`   Contact Email: ${config.contactEmail}\n`);

  // Check if all required fields are set
  if (!config.host || !config.user || !config.pass) {
    console.error('❌ SMTP configuratie is niet compleet!');
    console.error('   Vul de volgende variabelen in .env.local in:');
    if (!config.host) console.error('   - SMTP_HOST');
    if (!config.user) console.error('   - SMTP_USER');
    if (!config.pass) console.error('   - SMTP_PASS');
    process.exit(1);
  }

  try {
    // Create transporter
    console.log('🔌 Verbinding maken met SMTP server...');
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: Number(config.port),
      secure: config.port === '465',
      auth: {
        user: config.user,
        pass: config.pass,
      },
      debug: true,
    });

    // Verify connection
    console.log('✅ Verbinding testen...');
    await transporter.verify();
    console.log('✅ SMTP verbinding succesvol!\n');

    // Send test email
    console.log('📧 Test email versturen...');
    const info = await transporter.sendMail({
      from: config.user,
      to: config.contactEmail,
      subject: '[TEST] Yannova.be Email Configuratie Test',
      text: 'Dit is een test email van je Yannova.be website.\n\nAls je deze email ontvangt, werkt de email configuratie correct!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff6b00; border-bottom: 2px solid #ff6b00; padding-bottom: 10px;">
            ✅ Email Configuratie Test
          </h2>
          <p>Dit is een test email van je <strong>Yannova.be</strong> website.</p>
          <p>Als je deze email ontvangt, werkt de email configuratie correct!</p>
          <div style="background: #f9f9f9; padding: 20px; border-left: 4px solid #ff6b00; margin: 20px 0;">
            <h3 style="margin-top: 0;">Configuratie Details:</h3>
            <ul>
              <li><strong>SMTP Host:</strong> ${config.host}</li>
              <li><strong>SMTP Port:</strong> ${config.port}</li>
              <li><strong>SMTP User:</strong> ${config.user}</li>
              <li><strong>Contact Email:</strong> ${config.contactEmail}</li>
            </ul>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            Test uitgevoerd op: ${new Date().toLocaleString('nl-BE')}
          </p>
        </div>
      `,
    });

    console.log('✅ Test email succesvol verzonden!');
    console.log(`   Message ID: ${info.messageId}`);
    console.log(`   Naar: ${config.contactEmail}\n`);
    console.log('🎉 Email configuratie werkt perfect!');
    console.log('   Je kunt nu het contactformulier op je website gebruiken.\n');

  } catch (error) {
    console.error('\n❌ Email test gefaald!');
    console.error('   Error:', error.message);
    
    if (error.code === 'EAUTH') {
      console.error('\n💡 Tip: Controleer je SMTP gebruikersnaam en wachtwoord');
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      console.error('\n💡 Tip: Controleer je SMTP host en port instellingen');
    }
    
    process.exit(1);
  }
}

testEmail();
