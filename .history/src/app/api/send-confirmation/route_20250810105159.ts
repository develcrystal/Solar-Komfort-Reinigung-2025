import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

// Transporter mit Ethereal‑Credentials
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false, // true für 465, false für andere Ports
  auth: {
    user: 'orlo.davis@ethereal.email',
    pass: 'NSkzXzersVNmXkYqux',
  },
});

/**
 * POST‑Handler für /api/send-confirmation
 * Erwartet JSON‑Body: { name: string, email: string, message: string }
 */
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const mailOptions = {
      from: 'solar-komfort.de <no-reply@solar-komfort.de>',
      to: 'orlo.davis@ethereal.email', // Empfänger (Ethereal‑Inbox)
      subject: 'Neue Anfrage von der Kontaktseite',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Bestätigungsmail gesendet' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Fehler beim Senden der E‑Mail:', error);
    return NextResponse.json(
      { message: 'Fehler beim Senden der E‑Mail' },
      { status: 500 }
    );
  }
}