import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'your-ethereal-email@ethereal.email', // your Ethereal email
    pass: 'your-ethereal-password', // your Ethereal password
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: 'solar-komfort.de <no-reply@solar-komfort.de>',
      to: 'your-ethereal-email@ethereal.email', // your Ethereal email
      subject: 'Neue Anfrage von der Kontaktseite',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Bestätigungsmail gesendet' });
    } catch (error) {
      console.error('Fehler beim Senden der E-Mail:', error);
      res.status(500).json({ message: 'Fehler beim Senden der E-Mail' });
    }
  } else {
    res.status(405).json({ message: 'Methode nicht erlaubt' });
  }
}