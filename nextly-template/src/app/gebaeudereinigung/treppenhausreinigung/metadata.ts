import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Treppenhausreinigung – WEG-Verwaltung & Mehrfamilienhaus-Spezifikationen | Komfort Gebäudeservice24 GmbH',
  description: 'Professionelle Treppenhausreinigung für Mehrfamilienhäuser mit WEG-Gesetz §21 Compliance, Hausordnungs-Einhaltung und Lärmschutz-Zeiten. Saubere Gemeinschaftsbereiche für zufriedene Bewohner.',
  keywords: 'Treppenhausreinigung, WEG-Verwaltung, Mehrfamilienhaus-Reinigung, Hausordnungs-Compliance, WEG-Gesetz §21, Lärmschutz-Zeiten, Gemeinschaftsbereiche-Reinigung, Berlin, Komfort Gebäudeservice24',
  openGraph: {
    title: 'Treppenhausreinigung – WEG-konforme Services von Komfort Gebäudeservice24',
    description: 'Erfahren Sie mehr über unsere zertifizierten Treppenhausreinigungs-Services für saubere und regelkonforme Gemeinschaftsräume.',
    images: [{ url: '/img/kundenbilder/Treppenhausreinigung.webp' }],
    url: 'https://www.komfort-gebaeudeservice.de/gebaeudereinigung/treppenhausreinigung',
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
    canonical: '/gebaeudereinigung/treppenhausreinigung',
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