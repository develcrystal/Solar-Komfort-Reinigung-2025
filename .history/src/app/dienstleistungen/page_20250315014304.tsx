import { Container } from '@/components/Container';
import Image from 'next/image';

export default function Dienstleistungen() {
  return (
    <Container>
      <h1 className="text-4xl font-bold mb-8">Unsere Dienstleistungen</h1>
      <div className="grid gap-8">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="/img/flux/quer_Vorher-Nachher-Dachreinigung.webp"
            alt="Dachreinigung"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <div className="md:ml-8">
            <h2 className="text-2xl font-bold mt-4 md:mt-0">Dachreinigung</h2>
            <p className="mt-2 text-gray-600">
              Professionelle Reinigung Ihres Daches für langfristigen Schutz und Werterhalt. Wir entfernen Moos, Flechten und Algen schonend und nachhaltig.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="/img/flux/dachbeschichtung-prozess.webp"
            alt="Dachbeschichtung"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <div className="md:ml-8">
            <h2 className="text-2xl font-bold mt-4 md:mt-0">Dachbeschichtung</h2>
            <p className="mt-2 text-gray-600">
              Schützen Sie Ihr Dach mit unserer hochwertigen Beschichtung. Verlängert die Lebensdauer und verbessert die Optik Ihres Daches.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="/img/flux/fassadenreinigung-vorher-nachher.webp"
            alt="Fassadenreinigung"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <div className="md:ml-8">
            <h2 className="text-2xl font-bold mt-4 md:mt-0">Fassadenreinigung</h2>
            <p className="mt-2 text-gray-600">
              Professionelle Reinigung Ihrer Fassade für ein frisches Erscheinungsbild. Wir entfernen Schmutz, Algen und Verfärbungen schonend und effektiv.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="/img/flux/solaranlagenreinigung-vorher-nachher.webp"
            alt="Solaranlagenreinigung"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <div className="md:ml-8">
            <h2 className="text-2xl font-bold mt-4 md:mt-0">Solaranlagenreinigung</h2>
            <p className="mt-2 text-gray-600">
              Maximieren Sie die Effizienz Ihrer Solaranlage durch regelmäßige Reinigung. Wir entfernen Schmutz und Ablagerungen für optimale Leistung.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
