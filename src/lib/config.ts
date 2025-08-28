export const siteConfig = {
  name: "Solar Komfort GmbH",
  description: "Professionelle Dachbeschichtung, Dachreinigung und Fassadenreinigung in Darmstadt und Umgebung.",
  url: "https://solar-komfort.de",
  
  contact: {
    phone: "+49 (0) 6151 95266-0",
    email: "info@solar-komfort.de",
    address: {
      street: "Musterstraße 123",
      city: "64289 Darmstadt",
      country: "Deutschland",
    },
    businessHours: "Mo-Fr: 8:00-18:00 Uhr, Sa: 9:00-14:00 Uhr",
  },
  
  social: {
    facebook: "https://facebook.com/solarkomfort",
    instagram: "https://instagram.com/solarkomfort",
    linkedin: "https://linkedin.com/company/solarkomfort",
  },
  
  features: {
    darkMode: true,
    multiLanguage: false,
    analytics: true,
  },
  
  seo: {
    defaultTitle: "Solar Komfort GmbH - Professionelle Dachbeschichtung",
    titleTemplate: "%s | Solar Komfort GmbH",
    defaultDescription: "Solar Komfort GmbH bietet professionelle Dachbeschichtung, Dachreinigung und Fassadenreinigung in Darmstadt und Umgebung.",
    keywords: [
      "Dachbeschichtung",
      "Dachreinigung", 
      "Fassadenreinigung",
      "Darmstadt",
      "Solar Komfort",
    ],
  },
  
  navigation: {
    main: [
      { name: "Startseite", href: "/" },
      { name: "Dienstleistungen", href: "/dienstleistungen" },
      { name: "Referenzen", href: "/referenzen" },
      { name: "Über uns", href: "/ueber-uns" },
      { name: "Kontakt", href: "/kontakt" },
    ],
    footer: [
      { name: "Impressum", href: "/impressum" },
      { name: "Datenschutz", href: "/datenschutz" },
      { name: "AGB", href: "/agb" },
    ],
  },
} as const;