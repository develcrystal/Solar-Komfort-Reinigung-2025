import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Bitte füllen Sie alle Pflichtfelder aus.' },
        { status: 400 }
      );
    }

    // Create email message
    const msg = {
      to: process.env.SENDGRID_TO_EMAIL || 'info@komfort-gebaeudeservice24.de',
      from: process.env.SENDGRID_FROM_EMAIL || 'info@komfort-gebaeudeservice24.de',
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `
Name: ${name}
E-Mail: ${email}

Nachricht:
${message}

---
Gesendet am: ${new Date().toLocaleString('de-DE')}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0052CC;">Neue Kontaktanfrage</h2>
          <div style="background-color: #f5f7fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>E-Mail:</strong> ${email}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Nachricht:</h3>
            <p style="white-space: pre-wrap; color: #555;">${message}</p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #888;">
            Gesendet am: ${new Date().toLocaleString('de-DE')}
          </div>
        </div>
      `,
    };

    // Send email
    await sgMail.send(msg);

    return NextResponse.json(
      { success: true, message: 'Ihre Nachricht wurde erfolgreich gesendet!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('SendGrid Error:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.';
    
    if (error instanceof Error) {
      if (error.message.includes('401')) {
        errorMessage = 'SendGrid API-Key ungültig. Bitte überprüfen Sie die Konfiguration.';
      } else if (error.message.includes('403')) {
        errorMessage = 'SendGrid-Zugriff verweigert. Bitte überprüfen Sie Ihre Berechtigungen.';
      }
    }

    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}
