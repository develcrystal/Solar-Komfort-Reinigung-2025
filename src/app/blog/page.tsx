import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Breadcrumb } from '@/components/Breadcrumb';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "professionelle-bueroreinigung-darmstadt-tipps",
    title: "10 Tipps für professionelle Büroreinigung in Darmstadt",
    excerpt: "Entdecken Sie, wie professionelle Büroreinigung die Produktivität steigert und ein gesundes Arbeitsumfeld schafft. Unsere Experten-Tipps für Unternehmen im Rhein-Main-Gebiet.",
    date: "2024-11-15",
    readTime: "5 min",
    category: "Büroreinigung",
    keywords: ["Büroreinigung Darmstadt", "Arbeitsplatz Hygiene", "Produktivität"],
    image: "/img/flux/bueroreinigung-tipps.webp"
  },
  {
    slug: "industriereinigung-sicherheitsstandards-rhein-main",
    title: "Sicherheitsstandards bei der Industriereinigung im Rhein-Main-Gebiet",
    excerpt: "Erfahren Sie, welche Sicherheitsstandards bei der professionellen Industriereinigung beachtet werden müssen und wie Sie Ihre Produktionsstätten optimal reinigen lassen.",
    date: "2024-11-10",
    readTime: "7 min", 
    category: "Industriereinigung",
    keywords: ["Industriereinigung", "Sicherheitsstandards", "DGUV"],
    image: "/img/flux/industriereinigung-sicherheit.webp"
  },
  {
    slug: "facility-management-kosten-optimieren",
    title: "Facility Management Kosten optimieren: 5 bewährte Strategien",
    excerpt: "Wie Sie durch professionelles Facility Management langfristig Kosten sparen und die Effizienz Ihrer Immobilie steigern. Praktische Tipps für Objektbesitzer.",
    date: "2024-11-05",
    readTime: "6 min",
    category: "Facility Management", 
    keywords: ["Facility Management", "Kostenoptimierung", "Objektbetreuung"],
    image: "/img/flux/facility-management-kosten.webp"
  },
  {
    slug: "fassadenreinigung-darmstadt-wann-notwendig",
    title: "Wann ist eine Fassadenreinigung in Darmstadt notwendig?",
    excerpt: "Lernen Sie die wichtigsten Anzeichen kennen, die für eine professionelle Fassadenreinigung sprechen und wie Sie die Lebensdauer Ihrer Gebäudehülle verlängern.",
    date: "2024-10-28", 
    readTime: "4 min",
    category: "Fassadenreinigung",
    keywords: ["Fassadenreinigung Darmstadt", "Gebäudepflege", "Wertsteigerung"],
    image: "/img/flux/fassadenreinigung-notwendig.webp"
  },
  {
    slug: "nachhaltigkeit-gebaeudereinigung-umwelt",
    title: "Nachhaltigkeit in der Gebäudereinigung: Umweltschutz und Effizienz", 
    excerpt: "Wie moderne Gebäudereinigung umweltfreundlich und nachhaltig gestaltet werden kann. Von grünen Reinigungsmitteln bis zu ressourcenschonenden Verfahren.",
    date: "2024-10-20",
    readTime: "8 min",
    category: "Nachhaltigkeit",
    keywords: ["Nachhaltige Reinigung", "Umweltschutz", "Grüne Chemie"],
    image: "/img/flux/nachhaltige-reinigung.webp"
  },
  {
    slug: "hausmeisterservice-darmstadt-leistungen",
    title: "Hausmeisterservice in Darmstadt: Diese Leistungen sind enthalten",
    excerpt: "Vollständiger Überblick über professionelle Hausmeisterservice-Leistungen. Von der Objektbetreuung bis zur technischen Wartung - alles aus einer Hand.",
    date: "2024-10-15",
    readTime: "5 min",
    category: "Hausmeisterservice",
    keywords: ["Hausmeisterservice Darmstadt", "Objektbetreuung", "Hausverwaltung"],
    image: "/img/flux/hausmeisterservice-leistungen.webp"
  }
];

export default function BlogPage() {
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Breadcrumb />
      
      <Container>
        <Section>
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Gebäudereinigung Blog
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expertenwissen, Tipps und Einblicke rund um professionelle Gebäudereinigung, 
              Facility Management und Hausmeisterservice im Rhein-Main-Gebiet.
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
              Alle Artikel
            </button>
            {categories.map((category) => (
              <button 
                key={category}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.slug}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                  {/* Placeholder für Blog-Bilder */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <span className="text-sm">Blog Bild</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-3">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('de-DE', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.keywords.slice(0, 3).map((keyword) => (
                      <span 
                        key={keyword}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    Weiterlesen →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Bleiben Sie informiert
            </h3>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Erhalten Sie regelmäßig Expertentipps und News rund um professionelle Gebäudereinigung direkt in Ihr Postfach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                Anmelden
              </button>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
}