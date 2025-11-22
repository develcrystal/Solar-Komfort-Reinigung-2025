import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grundreinigung – VOB-konforme Bauschluss- und Umzugsreinigung | Komfort Gebäudeservice24 GmbH',
  description: 'Professionelle Grundreinigung für Neubauten, Umbauten und Umzüge. VOB-konform mit Abnahmeprotokoll und Kaution-Rückgabe-Garantie. Über 5000 zufriedene Kunden in Berlin und Umgebung.',
  keywords: 'Grundreinigung, VOB-konforme Reinigung, Bauschlussreinigung, Umzugsreinigung, Nachmieterreinigung, Abnahmeprotokoll, Kaution-Rückgabe, Gebäudereinigung Berlin, Tiefenreinigung, Komfort Gebäudeservice24',
  openGraph: {
    title: 'Grundreinigung – VOB-konforme Services von Komfort Gebäudeservice24',
    description: 'Erfahren Sie mehr über unsere zertifizierten Grundreinigungs-Services für perfekte Übergaben und hygienische Räume.',
    images: [{ url: '/img/kundenbilder/Grundreinigung.webp' }],
    url: 'https://www.komfort-gebaeudeservice.de/gebaeudereinigung/grundreinigung',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/gebaeudereinigung/grundreinigung',
  },
  authors: [{ name: 'Komfort Gebäudeservice24 GmbH' }],
  creator: 'Komfort Gebäudeservice24 GmbH',
  publisher: 'Komfort Gebäudeservice24 GmbH',
  applicationName: 'Komfort Gebäudeservice24',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};