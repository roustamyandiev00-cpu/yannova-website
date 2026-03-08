import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { sanitizeHtml, escapeHtml } from "@/lib/sanitize";
import { z } from "zod";
import { logger } from "@/lib/logger";
import { rateLimitMiddleware } from "@/lib/rate-limit";

// Zod schema for contact form validation
const contactSchema = z.object({
    name: z.string().min(2, "Naam moet minimaal 2 karakters zijn").max(100),
    email: z.string().email("Ongeldig emailadres").max(255),
    phone: z.string().max(20).optional(),
    subject: z.string().max(100).optional(),
    message: z.string().min(10, "Bericht moet minimaal 10 karakters zijn").max(2000),
});

export async function POST(request: Request) {
    try {
        // Rate limiting: 5 requests per 15 minutes
        const { isLimited, remaining, resetTime } = rateLimitMiddleware(request, 5, 15 * 60 * 1000);
        
        if (isLimited) {
            const resetDate = new Date(resetTime);
            return NextResponse.json(
                { 
                    error: "Te veel aanvragen. Probeer het later opnieuw.",
                    resetTime: resetDate.toISOString()
                },
                { 
                    status: 429,
                    headers: {
                        'X-RateLimit-Limit': '5',
                        'X-RateLimit-Remaining': '0',
                        'X-RateLimit-Reset': resetDate.toISOString(),
                    }
                }
            );
        }

        const body = await request.json();

        // Validate input with Zod
        const validation = contactSchema.safeParse(body);
        if (!validation.success) {
            const errors = validation.error.errors.map(e => e.message).join(', ');
            return NextResponse.json(
                { error: `Ongeldige invoer: ${errors}` },
                { status: 400 }
            );
        }

        const { name, email, phone, subject, message } = validation.data;

        // Sanitize all user inputs
        const sanitizedName = sanitizeHtml(name);
        const sanitizedEmail = sanitizeHtml(email);
        const sanitizedPhone = phone ? sanitizeHtml(phone) : undefined;
        const sanitizedSubject = subject ? sanitizeHtml(subject) : 'Algemene vraag';
        const sanitizedMessage = sanitizeHtml(message);

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.ethereal.email",
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_PORT === '465',
            auth: {
                user: process.env.SMTP_USER || "ethereal_user",
                pass: process.env.SMTP_PASS || "ethereal_pass",
            },
        });

        // Email content with sanitized values
        const mailOptions = {
            from: process.env.SMTP_USER || "noreply@yannova.be",
            replyTo: sanitizedEmail,
            to: process.env.CONTACT_EMAIL || "info@yannova.be",
            subject: `[Website] ${sanitizedSubject} - ${sanitizedName}`,
            text: `Naam: ${sanitizedName}\nEmail: ${sanitizedEmail}\nTelefoon: ${sanitizedPhone || "Niet opgegeven"}\nOnderwerp: ${sanitizedSubject}\n\nBericht:\n${sanitizedMessage}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #ff6b00; border-bottom: 2px solid #ff6b00; padding-bottom: 10px;">
                        Nieuw contactformulier bericht
                    </h2>
                    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                        <tr>
                            <td style="padding: 10px; background: #f5f5f5; font-weight: bold; width: 120px;">Naam:</td>
                            <td style="padding: 10px;">${escapeHtml(sanitizedName)}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Email:</td>
                            <td style="padding: 10px;"><a href="mailto:${escapeHtml(sanitizedEmail)}">${escapeHtml(sanitizedEmail)}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Telefoon:</td>
                            <td style="padding: 10px;">${escapeHtml(sanitizedPhone || "Niet opgegeven")}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Onderwerp:</td>
                            <td style="padding: 10px;">${escapeHtml(sanitizedSubject)}</td>
                        </tr>
                    </table>
                    <div style="background: #f9f9f9; padding: 20px; border-left: 4px solid #ff6b00; margin: 20px 0;">
                        <h3 style="margin-top: 0;">Bericht:</h3>
                        <p style="white-space: pre-wrap;">${escapeHtml(sanitizedMessage)}</p>
                    </div>
                    <p style="color: #666; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
                        Dit bericht is verzonden via het contactformulier op www.yannova.be
                    </p>
                </div>
            `,
        };

        // Send email
        if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
            await transporter.sendMail(mailOptions);
            logger.info('Contact email sent', { to: sanitizedEmail, subject: sanitizedSubject });
        } else {
            logger.debug("Simulating email send (no SMTP configured)", { 
                to: mailOptions.to, 
                subject: mailOptions.subject 
            });
            // Simulate a delay in development
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }

        return NextResponse.json(
            { 
                success: true, 
                message: "Bericht succesvol verzonden! We nemen zo snel mogelijk contact met u op." 
            },
            {
                headers: {
                    'X-RateLimit-Limit': '5',
                    'X-RateLimit-Remaining': remaining.toString(),
                }
            }
        );
    } catch (error) {
        logger.error("Error sending contact email", error);
        return NextResponse.json(
            { error: "Er is iets misgegaan bij het versturen van uw bericht. Probeer het later opnieuw of neem telefonisch contact op." },
            { status: 500 }
        );
    }
}
