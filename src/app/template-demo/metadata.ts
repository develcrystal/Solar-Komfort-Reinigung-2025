import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Template - Komfort Gebäudeservice24 GmbH',
  description: 'Professionelle Reinigungs- und Gebäudeservices mit VOB-konformer Qualität, Zertifizierungen und Garantien. SEO-optimiert für bessere Sichtbarkeit.',
  keywords: 'Reinigung, Gebäudeservice, VOB, Compliance, Zertifizierung, Umzugsreinigung, Fensterreinigung, Haushaltsreinigung',
  openGraph: {
    title: 'Service Template - Komfort Gebäudeservice24 GmbH',
    description: 'Hochwertige Services für Ihr Gebäude. Erfahren Sie mehr über unsere Standards und Garantien.',
    images: '/img/hero.webp',
    url: 'https://www.komfort-gebaeudeservice.de/service-template',
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
    canonical: '/service-template',
  },
  authors: [{ name: 'Komfort Gebäudeservice24 GmbH' }],
  creator: 'Komfort Gebäudeservice24 GmbH',
  publisher: 'Komfort Gebäudeservice24 GmbH',
};