import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Validate input (basic check)
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Naam, email en bericht zijn verplicht." },
                { status: 400 }
            );
        }

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

        // Email content
        const mailOptions = {
            from: `"${name}" <${email}>`, // Sender address
            to: process.env.CONTACT_EMAIL || "info@yannova.be", // Receiver address
            subject: `Nieuw bericht van ${name} via Yannova Website`, // Subject line
            text: `Naam: ${name}\nEmail: ${email}\nTelefoon: ${phone || "Niet opgegeven"}\n\nBericht:\n${message}`, // Plain text body
            html: `
        <h3>Nieuw contactformulier bericht</h3>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefoon:</strong> ${phone || "Niet opgegeven"}</p>
        <br/>
        <p><strong>Bericht:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `, // HTML body
        };

        // Send email
        // Note: In development without real credentials, this might fail or need Ethereal.
        // For this demo, we'll simulate success if no credentials are set, or try to send if they are.
        if (process.env.SMTP_HOST) {
            await transporter.sendMail(mailOptions);
        } else {
            console.log("Simulating email send:", mailOptions);
            // Simulate a delay
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }

        return NextResponse.json({ success: true, message: "Bericht succesvol verzonden!" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Er is iets misgegaan bij het versturen van uw bericht." },
            { status: 500 }
        );
    }
}
