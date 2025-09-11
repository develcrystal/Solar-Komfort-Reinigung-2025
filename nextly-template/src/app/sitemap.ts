import { MetadataRoute } from 'next'

type SitemapEntry = {
  url: string;
  lastModified: string | Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.komfort-gebaeudeservice24.de';
  const lastMod = new Date().toISOString().split('T')[0];
  
  // Hauptseiten
  const mainPages: SitemapEntry[] = [
    {
      url: `${baseUrl}/`,
      lastModified: lastMod,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kostenrechner`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/referenzen`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 0.1,
    }
  ];

  // Service-Seiten unter /dienstleistungen/ (existierende Struktur nutzen)
  const dienstleistungenServices = [
    'dachreinigung',
    'fassadenreinigung', 
    'bueroeinigung',
    'baubeschlussreinigung',
    'grundreinigung',
    'haushaltsreinigung',
    'industriereinigung',
    'treppenhausreinigung',
    'krankenausreinigung',
    'hotellerie-gastronomie',
    'fensterreinigung',
    'schulreinigung',
    'pflasterreinigung',
    'hausmeisterservice',
    'gartenpflege',
    'winterdienst',
    'aussenpflege'
  ];

  // Weitere Service-Seiten auf Root-Level
  const rootServices = [
    'entruempelung',
    'angebot',
    'unternehmen',
    'kontakt-facility',
    'galerie'
  ];

  // Generiere Service-Seiten unter /dienstleistungen/
  const dienstleistungenPages: SitemapEntry[] = dienstleistungenServices.map(service => ({
    url: `${baseUrl}/dienstleistungen/${service}`,
    lastModified: lastMod,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Dienstleistungen-Übersichtsseite
  const dienstleistungenOverview: SitemapEntry = {
    url: `${baseUrl}/dienstleistungen`,
    lastModified: lastMod,
    changeFrequency: 'monthly',
    priority: 0.8,
  };

  // Root-Level Service-Seiten
  const rootServicePages: SitemapEntry[] = rootServices.map(service => ({
    url: `${baseUrl}/${service}`,
    lastModified: lastMod,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Kombiniere alle Seiten
  return [...mainPages, dienstleistungenOverview, ...dienstleistungenPages, ...rootServicePages];
}
