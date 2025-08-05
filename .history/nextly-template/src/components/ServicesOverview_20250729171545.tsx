import Image from 'next/image';

const services = [
  {
    title: "Unterhaltsreinigung",
    image: "/img/flux/benefit-one.png",
    description: [
      "Individuelle Konzepte",
      "Qualitative Leistung",
      "Nach Ihren Wünschen"
    ],
    buttonText: "Jetzt mehr erfahren"
  },
  {
    title: "Glas & Fassadenreinigung",
    image: "/img/flux/benefit-two.png",
    description: [
      "Jegliche Art von Glas",
      "Modernste Technik",
      "Wirksame Methoden"
    ],
    buttonText: "Jetzt mehr erfahren"
  },
  {
    title: "Baureinigung",
    image: "/img/flux/benefit-one.png",
    description: [
      "Vor-Ort-Begehung",
      "Jahrelange Erfahrung",
      "Terminliche Flexibilität"
    ],
    buttonText: "Jetzt mehr erfahren"
  },
  {
    title: "Grundreinigung",
    image: "/img/flux/benefit-two.png",
    description: [
      "Full-Service",
      "Diverse Methoden",
      "Gesetzliche Vorgaben"
    ],
    buttonText: "Jetzt mehr erfahren"
  },
  {
    title: "Objektbetreuung",
    image: "/img/flux/benefit-one.png",
    description: [
      "Hausmeisterservice",
      "Gartenpflege",
      "Reinigungsservice"
    ],
    buttonText: "Jetzt mehr erfahren"
  }
];

export default function ServicesOverview() {
  return (
    <section id="leistungen" className="bg-white dark:bg-gray-900 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Unsere Leistungen im Überblick
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-5">
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
              <button className="mt-auto px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}