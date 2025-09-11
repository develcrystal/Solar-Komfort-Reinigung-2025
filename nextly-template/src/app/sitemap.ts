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

  // Hierarchische Kategorie-Struktur für SEO-optimierte URLs (ohne Kategorie-Landing-Pages)
  const categories = [
    {
      slug: 'gebaeudereinigung',
      services: [
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
        'pflasterreinigung'
      ]
    },
    {
      slug: 'gebaeudeservice',
      services: [
        'hausmeisterservice',
        'gartenpflege',
        'winterdienst',
        'aussenpflege'
      ]
    },
    {
      slug: 'facility-management',
      services: [
        'angebot',
        'unternehmen',
        'kontakt-facility'
      ]
    }
  ];

  // Root-Level Service-Seiten
  const rootServices = ['entruempelung', 'galerie'];

  // Generiere Service-Seiten mit hierarchischer Struktur
  const servicePages: SitemapEntry[] = [];
  
  categories.forEach(category => {
    category.services.forEach(service => {
      servicePages.push({
        url: `${baseUrl}/${category.slug}/${service}`,
        lastModified: lastMod,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  // Root-Level Service-Seiten
  const rootServicePages: SitemapEntry[] = rootServices.map(service => ({
    url: `${baseUrl}/${service}`,
    lastModified: lastMod,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Kombiniere alle Seiten (ohne Kategorie-Landing-Pages)
  return [...mainPages, ...servicePages, ...rootServicePages];
}
