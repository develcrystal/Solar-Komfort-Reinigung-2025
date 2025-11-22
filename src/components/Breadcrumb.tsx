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
                <span className={`${index === customItems.length - 1 ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-600 dark:text-gray-400'}`}>
                  {item.label}
                </span>
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
    
    const isLast = index === pathSegments.length - 1;
    
    breadcrumbItems.push({
      label,
      href: isLast ? undefined : undefined
    });
  });

  return (
    <nav className={`${pathname === '/' ? 'py-4' : 'py-2'} bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 ${className}`} aria-label="Breadcrumb">
      <div className="container mx-auto px-2 sm:px-4 max-w-screen-2xl">
        <ol className="flex flex-wrap items-center space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 overflow-hidden">
          <li className="flex-shrink-0">
            <Link
              href="/"
              className="hover:text-gray-900 dark:hover:text-white transition-colors flex items-center"
            >
              <HomeIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
              <span className="hidden sm:inline">Start</span>
              <span className="sm:hidden">Home</span>
            </Link>
          </li>
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center flex-shrink-0 min-w-0">
              <ChevronRightIcon className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 text-gray-400 flex-shrink-0" />
              <span className={`${index === breadcrumbItems.length - 1 ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-600 dark:text-gray-400'} truncate max-w-[150px] sm:max-w-none`}>
                {item.label}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}