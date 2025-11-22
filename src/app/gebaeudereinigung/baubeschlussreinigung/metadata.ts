import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Baubeschlussreinigung – Baustellen-Standards & Rohbau-Reinigung | Komfort Gebäudeservice24 GmbH',
  description: 'Professionelle Baubeschlussreinigung gemäß VOB/C ATV DIN 18299. Rohbau-Reinigung und Baustaub-Entfernung für Neubauten und Sanierungen. Mit Entsorgungsnachweis und Baustellenverordnung-Compliance für reibungslose Abnahmen.',
  keywords: 'Baubeschlussreinigung, VOB/C ATV DIN 18299, Rohbau-Reinigung, Baustaub-Entfernung, Baustellen-Standards, Baustellenverordnung, Entsorgungsnachweis, Baureinigung Berlin, Endreinigung Baustelle, Komfort Gebäudeservice24',
  openGraph: {
    title: 'Baubeschlussreinigung – VOB/C-konforme Services von Komfort Gebäudeservice24',
    description: 'Erfahren Sie mehr über unsere zertifizierten Baubeschlussreinigungs-Services für saubere und abnahmefähige Baustellen.',
    images: [{ url: '/img/kundenbilder/Grundreinigung.webp' }],
    url: 'https://www.komfort-gebaeudeservice.de/gebaeudereinigung/baubeschlussreinigung',
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
    canonical: '/gebaeudereinigung/baubeschlussreinigung',
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