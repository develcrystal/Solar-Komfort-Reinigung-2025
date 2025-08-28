import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'your-smtp-host',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'your-email@example.com',
    pass: 'your-email-password',
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Alle Felder sind erforderlich' });
    }

    const mailOptions = {
      from: 'your-email@example.com',
      to: 'recipient-email@example.com',
      subject: 'Neue Anfrage von der Website',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'E-Mail erfolgreich gesendet' });
    } catch (error) {
      res.status(500).json({ error: 'Fehler beim Senden der E-Mail' });
    }
  } else {
    res.status(405).json({ error: 'Methode nicht erlaubt' });
  }
}