"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  customItems?: BreadcrumbItem[];
  className?: string;
}

// Category and service mappings for SEO-friendly breadcrumbs
const categoryMappings: Record<string, string> = {
  'gebaeudereinigung': 'Gebäudereinigung',
  'gebaeudeservice': 'Gebäudeservice', 
  'facility-management': 'Facility Management'
};

const serviceMappings: Record<string, string> = {
  // Gebäudereinigung
  'bueroeinigung': 'Büroreinigung',
  'industriereinigung': 'Industriereinigung',
  'fassadenreinigung': 'Fassadenreinigung',
  'grundreinigung': 'Grundreinigung',
  'dachreinigung': 'Dachreinigung',
  'treppenhausreinigung': 'Treppenhausreinigung',
  'haushaltsreinigung': 'Haushaltsreinigung',
  'baubeschlussreinigung': 'Baubeschlussreinigung',
  'krankenausreinigung': 'Krankenausreinigung',
  'hotellerie-gastronomie': 'Hotellerie & Gastronomie',
  'fensterreinigung': 'Fensterreinigung',
  'schulreinigung': 'Schulreinigung',
  'pflasterreinigung': 'Pflasterreinigung',
  
  // Gebäudeservice
  'hausmeisterservice': 'Hausmeisterservice',
  'gartenpflege': 'Gartenpflege',
  'entruempelung': 'Entrümpelung',
  'winterdienst': 'Winterdienst',
  'aussenpflege': 'Außenpflege',
  
  // Facility Management
  'angebot': 'Angebot',
  'unternehmen': 'Unternehmen',
  'kontakt-facility': 'Kontakt',
  
  // Main pages
  'ueber-uns': 'Über uns',
  'kontakt': 'Kontakt',
  'kostenrechner': 'Kostenrechner',
  'referenzen': 'Referenzen',
  'impressum': 'Impressum',
  'datenschutz': 'Datenschutz'
};

export function Breadcrumb({ customItems, className = "" }: BreadcrumbProps) {
  const pathname = usePathname();
  
  // If custom items provided, use those
  if (customItems) {
    return (
      <nav className={`${pathname === '/' ? 'py-4' : 'py-2'} ${className}`} aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <Link 
                href="/" 
                className="hover:text-gray-900 dark:hover:text-white transition-colors flex items-center"
              >
                <HomeIcon className="w-4 h-4 mr-1" />
                Start
              </Link>
            </li>
            {customItems.map((item, index) => (
              <li key={index} className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 mx-2 text-gray-400" />
                {item.href ? (
                  <Link 
                    href={item.href}
                    className="hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-900 dark:text-white font-medium">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    );
  }

  // Auto-generate breadcrumbs from pathname
  const pathSegments = pathname.split('/').filter(segment => segment);
  
  if (pathSegments.length === 0) return null; // Don't show on homepage
  
  const breadcrumbItems: BreadcrumbItem[] = [];
  let currentPath = '';

  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Get display name for segment
    let label = serviceMappings[segment] || categoryMappings[segment] || segment;
    
    // Capitalize first letter if not in mappings
    if (!serviceMappings[segment] && !categoryMappings[segment]) {
      label = segment.charAt(0).toUpperCase() + segment.slice(1);
    }
    
    // For the last item, don't include href (current page)
    const isLast = index === pathSegments.length - 1;
    
    breadcrumbItems.push({
      label,
      href: isLast ? undefined : currentPath
    });
  });

  return (
    <nav className={`${pathname === '/' ? 'py-4' : 'py-2'} bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 ${className}`} aria-label="Breadcrumb">
      <div className="container mx-auto px-4 max-w-screen-2xl">
        <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <li>
            <Link 
              href="/" 
              className="hover:text-gray-900 dark:hover:text-white transition-colors flex items-center"
            >
              <HomeIcon className="w-4 h-4 mr-1" />
              Start
            </Link>
          </li>
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRightIcon className="w-4 h-4 mx-2 text-gray-400" />
              {item.href ? (
                <Link 
                  href={item.href}
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 dark:text-white font-medium">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}