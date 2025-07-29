import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// E-Mail-Versand mit Nodemailer
async function sendEmail(to: string, name: string, data: any) {
  try {
    // In der Entwicklungsumgebung verwenden wir einen Test-Account
    // In der Produktion würden wir echte SMTP-Daten aus Umgebungsvariablen verwenden
    let transporter;
    
    if (process.env.NODE_ENV === 'production' && process.env.EMAIL_HOST) {
      // Produktionsumgebung mit echten SMTP-Daten
      transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT || 587),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
    } else {
      // Entwicklungsumgebung mit ethereal.email (Test-E-Mail-Service)
      const testAccount = await nodemailer.createTestAccount();
      
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    // Formatiere die Daten für die E-Mail
    const dachform = data.step_1 || 'Nicht angegeben';
    const dachflaeche = data.step_2 || 'Nicht angegeben';
    const dienstleistung = data.step_3 || 'Nicht angegeben';
    const zustand = data.step_4 || 'Nicht angegeben';
    const telefon = data.step_7 || 'Nicht angegeben';

    // Sende die E-Mail
    const info = await transporter.sendMail({
      from: '"Solar Komfort" <info@solar-komfort.de>',
      to,
      subject: 'Ihre Anfrage bei Solar Komfort',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://solar-komfort-reinigung-pu1jp3o24-develcrystals-projects.vercel.app/img/logo.svg" alt="Solar Komfort Logo" style="width: 150px;">
          </div>
          
          <h1 style="color: #FFA500; text-align: center;">Vielen Dank für Ihre Anfrage, ${name}!</h1>
          
          <p style="font-size: 16px; line-height: 1.5;">Wir haben Ihre Anfrage erhalten und werden uns in Kürze bei Ihnen melden.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h2 style="color: #3B82F6; font-size: 18px;">Ihre angegebenen Daten:</h2>
            <ul style="list-style-type: none; padding-left: 0;">
              <li style="padding: 5px 0;"><strong>Dachform:</strong> ${dachform}</li>
              <li style="padding: 5px 0;"><strong>Dachfläche:</strong> ${dachflaeche} m²</li>
              <li style="padding: 5px 0;"><strong>Gewünschte Dienstleistung:</strong> ${dienstleistung}</li>
              <li style="padding: 5px 0;"><strong>Zustand des Daches:</strong> ${zustand}</li>
              <li style="padding: 5px 0;"><strong>Telefonnummer:</strong> ${telefon}</li>
            </ul>
          </div>
          
          <p style="font-size: 16px; line-height: 1.5;">Ein Mitarbeiter wird sich innerhalb der nächsten 24 Stunden mit Ihnen in Verbindung setzen, um Ihre Anfrage zu besprechen und Ihnen ein individuelles Angebot zu erstellen.</p>
          
          <p style="font-size: 16px; line-height: 1.5;">Bei Fragen können Sie uns gerne unter <a href="tel:061511546592" style="color: #3B82F6; text-decoration: none;">06151 15 465 92</a> erreichen.</p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p style="color: #666; font-size: 14px;">Mit freundlichen Grüßen,<br>Ihr Solar Komfort Team</p>
          </div>
        </div>
      `,
    });

    console.log('Bestätigungsmail gesendet:', info.messageId);
    
    // Wenn wir in der Entwicklungsumgebung sind, geben wir die URL zur Vorschau der E-Mail aus
    if (process.env.NODE_ENV !== 'production') {
      console.log('Vorschau URL:', nodemailer.getTestMessageUrl(info));
    }
    
    return true;
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validiere die Daten
    if (!data.email || !data.name) {
      return NextResponse.json(
        { error: 'E-Mail-Adresse und Name sind erforderlich' },
        { status: 400 }
      );
    }
    
    // Sende die Bestätigungsmail
    await sendEmail(data.email, data.name, data);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Fehler beim Senden der Bestätigungsmail:', error);
    return NextResponse.json(
      { error: 'Fehler beim Senden der Bestätigungsmail' },
      { status: 500 }
    );
  }
}
