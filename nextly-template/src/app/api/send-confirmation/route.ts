import { NextResponse } from 'next/server';

/**
 * Interface for email data
 */
interface EmailData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject: string;
  // Optional form steps for calculator
  step_1?: string;
  step_2?: string;
  step_3?: string;
  step_4?: string;
  step_5?: string;
  step_6?: string;
  step_7?: string;
}

/**
 * Log email request for later processing
 * Temporarily disabled email functionality for deployment
 */
async function logEmailRequest(to: string, name: string, data: EmailData): Promise<boolean> {
  try {
    // Log the email request for manual processing
    const logData = {
      timestamp: new Date().toISOString(),
      to,
      name,
      formData: {
        dachform: data.step_1 || 'Nicht angegeben',
        dachflaeche: data.step_2 || 'Nicht angegeben',
        dienstleistung: data.step_3 || 'Nicht angegeben',
        zustand: data.step_4 || 'Nicht angegeben',
        telefon: data.step_7 || 'Nicht angegeben',
        message: data.message,
        subject: data.subject
      }
    };
    
    console.log('E-Mail-Anfrage zum späteren Versenden geloggt:', logData);
    return true;
  } catch (error) {
    console.error('Fehler beim Loggen der E-Mail-Anfrage:', error);
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
    
    // Log the request for manual processing
    await logEmailRequest(data.email, data.name, data);
    
    // Simulate successful email sending for now
    return NextResponse.json({ 
      success: true,
      message: 'Anfrage erhalten - wir melden uns bald bei Ihnen!'
    });
  } catch (error) {
    console.error('Fehler beim Verarbeiten der Anfrage:', error);
    return NextResponse.json(
      { error: 'Fehler beim Verarbeiten der Anfrage' },
      { status: 500 }
    );
  }
}