import Image from 'next/image';
import Link from 'next/link';

interface Service {
  title: string;
  image: string;
  description: string[];
  buttonText: string;
  link: string;
}

const services: Service[] = [
  {
    title: "Unterhaltsreinigung",
    image: "/img/kundenbilder/Büroreinigung.png",
    description: [
      "Regelmäßige Büro- & Praxisreinigung",
      "Individuelle Reinigungspläne",
      "Qualitätskontrolle vor Ort"
    ],
    buttonText: "Mehr erfahren",
    link: "/dienstleistungen/bueroeinigung"
  },
  {
    title: "Glas & Fassadenreinigung",
    image: "/img/kundenbilder/Fassaden-Reingung.png",
    description: [
      "Streifenfreie Glasreinigung",
      "Fassadenreinigung aller Art",
      "Moderne Reinigungstechnik"
    ],
    buttonText: "Mehr erfahren",
    link: "/dienstleistungen/fassadenreinigung"
  },
  {
    title: "Industriereinigung",
    image: "/img/kundenbilder/Industriereinigung.png",
    description: [
      "Industriehallen & Produktionsstätten",
      "Spezialreinigungsverfahren",
      "Termingerechte Ausführung"
    ],
    buttonText: "Mehr erfahren",
    link: "/dienstleistungen/industriereinigung"
  },
  {
    title: "Grundreinigung",
    image: "/img/kundenbilder/Grundreinigung.png",
    description: [
      "Intensive Tiefenreinigung",
      "Neubezug & Renovierung",
      "Spezialreinigungsverfahren"
    ],
    buttonText: "Mehr erfahren",
    link: "/dienstleistungen/grundreinigung"
  },
  {
    title: "Objektbetreuung",
    image: "/img/kundenbilder/Haus.png",
    description: [
      "Hausmeisterservice",
      "Facility Management",
      "Ganzheitliche Betreuung"
    ],
    buttonText: "Mehr erfahren",
    link: "/dienstleistungen/hausmeisterservice"
  },
  {
    title: "Entrümpelung & Haushaltsauflösungen",
    image: "/img/kundenbilder/Entrümpelung.png",
    description: [
      "Wohnungsauflösungen & Kellerentrümpelung",
      "Fachgerechte Entsorgung & Trennung",
      "Diskret & zuverlässig"
    ],
    buttonText: "Mehr erfahren",
    link: "/entruempelung"
  },
  {
    title: "Außenpflege & Saisonarbeiten",
    image: "/img/kundenbilder/Pflaster-stein-Reinigung.png",
    description: [
      "Terrassen- & Pflasterreinigung",
      "Spielplatzkontrolle & Mülltonnendienst",
      "Saisonale Arbeiten & Sonderaufträge"
    ],
    buttonText: "Mehr erfahren",
    link: "/aussenpflege"
  },
  {
    title: "Gartenpflege",
    image: "/img/kundenbilder/Gartenpflege.png",
    description: [
      "Rasenmähen & Heckenschnitt",
      "Laubentfernung & Beetpflege",
      "Schnittgutentsorgung & Kompostierung"
    ],
    buttonText: "Mehr erfahren",
    link: "/gartenpflege"
  },
  {
    title: "Winterdienst",
    image: "/img/kundenbilder/Dachreinigung.png",
    description: [
      "Schneeräumung & Streudienst",
      "24/7-Rufbereitschaft & Vertragssicherheit",
      "Moderne Ausrüstung & Umweltfreundlichkeit"
    ],
    buttonText: "Mehr erfahren",
    link: "/winterdienst"
  }
];

export default function LeistungenImUberblick() {
  return (
    <section id="leistungen" className="bg-gray-50 dark:bg-gray-800 py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
            Unsere Leistungen im Überblick
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Von der täglichen Unterhaltsreinigung bis zur kompletten Objektbetreuung - 
            wir bieten Ihnen professionelle Reinigungsdienstleistungen aus einer Hand.
          </p>
        </div>
        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Image Section */}
                <div className="md:w-1/2 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={600}
                    className="w-full h-80 object-cover"
                  />
                </div>
                
                {/* Content Section */}
                <div className="md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide text-gray-900 dark:text-white mb-6 break-words">
                    {service.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-4 mb-8">
                    {service.description.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={service.link} 
                    className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all self-start"
                  >
                    {service.buttonText}
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}