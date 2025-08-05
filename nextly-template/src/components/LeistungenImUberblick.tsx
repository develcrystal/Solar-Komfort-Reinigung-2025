import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: "Unterhaltsreinigung",
    image: "/img/flux/buero-reinigung.png",
    description: [
      "Regelmäßige Büro- & Praxisreinigung",
      "Individuelle Reinigungspläne",
      "Qualitätskontrolle vor Ort"
    ],
    buttonText: "Mehr erfahren",
    link: "/dienstleistungen/unterhaltsreinigung"
  },
  {
    title: "Glas & Fassadenreinigung",
    image: "/img/flux/fassaden-reinigung.png",
    description: [
      "Streifenfreie Glasreinigung",
      "Fassadenreinigung aller Art",
      "Moderne Reinigungstechnik"
    ],
    buttonText: "Mehr erfahren",
    link: "/dienstleistungen/glas-fassadenreinigung"
  },
  {
    title: "Industriereinigung",
    image: "/img/flux/industriereinigung.png",
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
    image: "/img/flux/professionelle-ausruestung3.webp",
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
    image: "/img/flux/team-beratung1.webp",
    description: [
      "Hausmeisterservice",
      "Facility Management",
      "Ganzheitliche Betreuung"
    ],
    buttonText: "Mehr erfahren",
    link: "/dienstleistungen/objektbetreuung"
  }
];

export default function LeistungenImUberblick() {
  return (
    <section id="leistungen" className="bg-white dark:bg-gray-900 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Unsere Leistungen im Überblick
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {service.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <Link href={service.link} className="mt-auto px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                {service.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}