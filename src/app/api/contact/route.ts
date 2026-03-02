import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { sanitizeHtml, escapeHtml } from "@/lib/sanitize";
import { z } from "zod";
import { logger } from "@/lib/logger";

// Zod schema for contact form validation
const contactSchema = z.object({
    name: z.string().min(1).max(100),
    email: z.string().email().max(255),
    phone: z.string().max(20).optional(),
    message: z.string().min(1).max(5000),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate input with Zod
        const validation = contactSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                { error: "Ongeldige invoer. Controleer alle velden." },
                { status: 400 }
            );
        }

        const { name, email, phone, message } = validation.data;

        // Sanitize all user inputs
        const sanitizedName = sanitizeHtml(name);
        const sanitizedEmail = sanitizeHtml(email);
        const sanitizedPhone = phone ? sanitizeHtml(phone) : undefined;
        const sanitizedMessage = sanitizeHtml(message);

        // Configure Nodemailer transporter (using a test account or environment variables)
        // For production, you should use environment variables: process.env.SMTP_HOST, etc.
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.ethereal.email",
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER || "ethereal_user", // Replace with real credentials
                pass: process.env.SMTP_PASS || "ethereal_pass", // Replace with real credentials
            },
        });

        // Email content with sanitized values
        const mailOptions = {
            from: `"${sanitizedName}" <${sanitizedEmail}>`, // Sender address
            to: process.env.CONTACT_EMAIL || "info@yannova.be", // Receiver address
            subject: `Nieuw bericht van ${sanitizedName} via Yannova Website`, // Subject line
            text: `Naam: ${sanitizedName}\nEmail: ${sanitizedEmail}\nTelefoon: ${sanitizedPhone || "Niet opgegeven"}\n\nBericht:\n${sanitizedMessage}`, // Plain text body
            html: `
        <h3>Nieuw contactformulier bericht</h3>
        <p><strong>Naam:</strong> ${escapeHtml(sanitizedName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(sanitizedEmail)}</p>
        <p><strong>Telefoon:</strong> ${escapeHtml(sanitizedPhone || "Niet opgegeven")}</p>
        <br/>
        <p><strong>Bericht:</strong></p>
        <p>${escapeHtml(sanitizedMessage).replace(/\n/g, "<br>")}</p>
      `, // HTML body
        };

        // Send email
        // Note: In development without real credentials, this might fail or need Ethereal.
        // For this demo, we'll simulate success if no credentials are set, or try to send if they are.
        if (process.env.SMTP_HOST) {
            await transporter.sendMail(mailOptions);
        } else {
            logger.debug("Simulating email send", { to: mailOptions.to, subject: mailOptions.subject });
            // Simulate a delay
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }

        return NextResponse.json({ success: true, message: "Bericht succesvol verzonden!" });
    } catch (error) {
        logger.error("Error sending email", error);
        return NextResponse.json(
            { error: "Er is iets misgegaan bij het versturen van uw bericht." },
            { status: 500 }
        );
    }
}
