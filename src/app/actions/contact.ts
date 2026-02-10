'use server'

import { z } from 'zod'
import nodemailer from 'nodemailer'

const schema = z.object({
  name: z.string().min(2, "Naam moet minstens 2 karakters bevatten"),
  email: z.string().email("Ongeldig email adres"),
  message: z.string().min(10, "Bericht moet minstens 10 karakters bevatten"),
})

export type FormState = {
  success?: boolean
  message?: string
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
  }
}

export async function sendContactEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Vul aub alle velden correct in."
    }
  }

  const { name, email, message } = validatedFields.data

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Verstuur mail naar jezelf (info@yannova.be)
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, // Verstuur vanuit eigen adres om SPF issues te voorkomen, met naam van afzender
      replyTo: email, // Zodat je direct terug kan mailen naar de klant
      to: process.env.SMTP_USER, // Naar info@yannova.be
      subject: `Nieuw bericht van ${name} via website`,
      text: `Naam: ${name}\nEmail: ${email}\n\nBericht:\n${message}`,
      html: `
        <h3>Nieuw contactformulier bericht</h3>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Bericht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return {
      success: true,
      message: "Bedankt voor je bericht! We hebben het goed ontvangen en nemen zo snel mogelijk contact op."
    }
  } catch (error) {
    console.error('Email error:', error)
    return {
      success: false,
      message: "Er ging iets mis bij het verzenden. Probeer het later opnieuw of bel ons direct."
    }
  }
}
