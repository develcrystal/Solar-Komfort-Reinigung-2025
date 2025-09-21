import Script from 'next/script';

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Komfort Gebäudeservice24 GmbH",
    "image": "/img/komfort-logo-cropped.webp",
    "url": "https://www.komfort-gebaeudeservice24.de",
    "telephone": "+4961511234567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Musterstraße 123",
      "addressLocality": "Darmstadt",
      "postalCode": "64283",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.8728,
      "longitude": 8.6512
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/solarkomfort",
      "https://www.instagram.com/solarkomfort"
    ],
    "priceRange": "€€",
    "description": "Komfort Gebäudeservice24 GmbH bietet professionelle Gebäudereinigung, Büroreinigung, Industriereinigung, Fassadenreinigung, Grundreinigung und Hausmeisterservice in Darmstadt und dem Rhein-Main-Gebiet.",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 49.8728,
        "longitude": 8.6512
      },
      "geoRadius": "50000"
    },
    "serviceType": ["Gebäudereinigung", "Büroreinigung", "Industriereinigung", "Fassadenreinigung", "Grundreinigung", "Hausmeisterservice", "Treppenhausreinigung", "Dachreinigung"]
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema() {
  const services = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Büroreinigung",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Komfort Gebäudeservice24 GmbH"
      },
      "areaServed": "Darmstadt, Frankfurt, Rhein-Main-Gebiet",
      "description": "Professionelle Büroreinigung und Unterhaltsreinigung für Unternehmen. Regelmäßige und zuverlässige Reinigung von Büroräumen, Praxen und Gewerbeimmobilien.",
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Industriereinigung",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Komfort Gebäudeservice24 GmbH"
      },
      "areaServed": "Darmstadt, Frankfurt, Rhein-Main-Gebiet",
      "description": "Spezialisierte Industriereinigung für Produktionsstätten, Hallen und gewerbliche Anlagen mit modernsten Reinigungsverfahren und Sicherheitsstandards.",
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Fassadenreinigung",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Komfort Gebäudeservice24 GmbH"
      },
      "areaServed": "Darmstadt, Frankfurt, Rhein-Main-Gebiet",
      "description": "Schonende Fassadenreinigung und Gebäudeaußenreinigung zur Entfernung von Verschmutzungen, Algen und Grünbelag für ein gepflegtes Erscheinungsbild.",
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Grundreinigung",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Komfort Gebäudeservice24 GmbH"
      },
      "areaServed": "Darmstadt, Frankfurt, Rhein-Main-Gebiet",
      "description": "Intensive Grundreinigung und Bauschlussreinigung für Neubezug, nach Renovierungen oder bei hartnäckigen Verschmutzungen.",
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Hausmeisterservice",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Komfort Gebäudeservice24 GmbH"
      },
      "areaServed": "Darmstadt, Frankfurt, Rhein-Main-Gebiet",
      "description": "Professioneller Hausmeisterservice und Facility Management für Wohnanlagen, Gewerbeimmobilien und öffentliche Einrichtungen.",
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Dachreinigung",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Komfort Gebäudeservice24 GmbH"
      },
      "areaServed": "Darmstadt, Frankfurt, Rhein-Main-Gebiet",
      "description": "Professionelle Dachreinigung zur Entfernung von Moos, Algen und Verschmutzungen für eine längere Lebensdauer und bessere Optik Ihres Daches.",
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR"
        }
      }
    }
  ];

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Warum ist eine Dachreinigung sinnvoll?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eine Dachreinigung entfernt Algen, Moose und Schimmel, die sich über die Jahre auf Ihrem Dach ansammeln. Dies schützt nicht nur die Integrität Ihres Daches, sondern steigert auch den Wert Ihrer Immobilie. Durch die Reinigung wird das Dach wieder strahlend sauber und behält seine Funktionalität und Ästhetik."
        }
      },
      {
        "@type": "Question",
        "name": "Wie funktioniert die Niederdruckreinigung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Niederdruckreinigung ist schonend für Ihr Dach und verursacht keine Schäden an den Dachziegeln oder der Dachhaut. Unsere Reinigungslösung wird flächendeckend aufgetragen und trocknet organische Verschmutzungen von innen heraus aus. Der Selbstreinigungseffekt sorgt dafür, dass Wind und Wetter die restlichen Verschmutzungen kontinuierlich entfernen."
        }
      },
      {
        "@type": "Question",
        "name": "Wie lange hält eine Dachbeschichtung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eine professionelle Dachbeschichtung hält in der Regel 10-15 Jahre, abhängig von den Witterungsbedingungen und der Qualität der Beschichtung. Unsere hochwertige Beschichtung mit Nano-Effekt bietet einen langanhaltenden Schutz und verlängert die Lebensdauer Ihres Daches erheblich."
        }
      },
      {
        "@type": "Question",
        "name": "Wie oft sollte eine Solaranlage gereinigt werden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Solaranlagen sollten je nach Standort und Umgebungsbedingungen etwa alle 1-2 Jahre gereinigt werden. In Gebieten mit starker Verschmutzung oder in der Nähe von Bäumen kann eine häufigere Reinigung erforderlich sein. Eine regelmäßige Reinigung erhöht die Effizienz Ihrer Solaranlage um bis zu 30%."
        }
      }
    ]
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
