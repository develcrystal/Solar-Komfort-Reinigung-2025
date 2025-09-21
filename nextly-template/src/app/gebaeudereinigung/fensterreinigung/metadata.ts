import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fensterreinigung – Höhenarbeits-Zertifizierung & Glasarten-Expertise | Komfort Gebäudeservice24 GmbH',
  description: 'Professionelle Fensterreinigung mit SCC-Zertifizierung und DGUV-Regel 101-005. Expertise für alle Glasarten und Rahmen-Materialien, inklusive Höhenarbeits-Versicherung für sichere und streifenfreie Ergebnisse.',
  keywords: 'Fensterreinigung, Höhenarbeits-Zertifizierung, Glasarten-Reinigung, Rahmen-Materialien, DGUV Regel 101-005, SCC-Zertifizierung, Höhenarbeits-Versicherung, Glasfassaden-Reinigung, Berlin, Komfort Gebäudeservice24',
  openGraph: {
    title: 'Fensterreinigung – Sichere und professionelle Services von Komfort Gebäudeservice24',
    description: 'Erfahren Sie mehr über unsere zertifizierten Fensterreinigungs-Services für kristallklare Sicht und höchste Sicherheit.',
    images: [{ url: '/img/kundenbilder/Reinigung.webp' }],
    url: 'https://www.komfort-gebaeudeservice.de/gebaeudereinigung/fensterreinigung',
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
    canonical: '/gebaeudereinigung/fensterreinigung',
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