import { Container } from '@/components/Container';
import Image from 'next/image';

export default function UeberUns() {
  return (
    <Container>
      <h1 className="text-4xl font-bold mb-8">Über uns</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Unser Unternehmen</h2>
        <p className="text-gray-600 mb-4">
          Solar Komfort GmbH ist Ihr zuverlässiger Partner für professionelle Dach- und Fassadenreinigung sowie Dachbeschichtung. 
          Mit jahrelanger Erfahrung und modernster Technik sorgen wir für langanhaltende Sauberkeit und Schutz Ihrer Immobilie.
        </p>
        <p className="text-gray-600 mb-4">
          Unser Unternehmen wurde 2010 gegründet und hat sich seitdem zu einem führenden Anbieter in der Region entwickelt. 
          Wir legen großen Wert auf Qualität, Nachhaltigkeit und Kundenzufriedenheit.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Unser Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Image 
              src="/img/flux/team-geschaeftsfuehrerteam1.webp"
              alt="Max Mustermann - Geschäftsführer"
              width={150}
              height={150}
              className="rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Max Mustermann</h3>
            <p className="text-gray-600">Geschäftsführer</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Image 
              src="/img/flux/team-projektleiterimage.webp"
              alt="Anna Schmidt - Projektleiterin"
              width={150}
              height={150}
              className="rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Anna Schmidt</h3>
            <p className="text-gray-600">Projektleiterin</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Image 
              src="/img/flux/team-technischer-leiterimage.webp"
              alt="Thomas Weber - Technischer Leiter"
              width={150}
              height={150}
              className="rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Thomas Weber</h3>
            <p className="text-gray-600">Technischer Leiter</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Unsere Ausrüstung</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image 
              src="/img/flux/professionelle-ausruestung1.webp"
              alt="Professionelle Ausrüstung für Dachreinigung"
              width={400}
              height={300}
              className="rounded-lg mb-4"
            />
            <p className="text-gray-600">Modernste Reinigungsgeräte für optimale Ergebnisse</p>
          </div>
          <div>
            <Image 
              src="/img/flux/firmenfahrzeug-solar-komfort1.webp"
              alt="Firmenfahrzeug Solar Komfort"
              width={400}
              height={300}
              className="rounded-lg mb-4"
            />
            <p className="text-gray-600">Unser Fuhrpark für schnellen und zuverlässigen Service</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Unsere Philosophie</h2>
        <p className="text-gray-600 mb-4">
          Wir arbeiten nach dem Grundsatz: Qualität, Zuverlässigkeit und Kundenzufriedenheit stehen an erster Stelle. 
          Unsere umweltfreundlichen Reinigungsmethoden schonen nicht nur Ihr Dach und Ihre Fassade, sondern auch die Umwelt.
        </p>
        <p className="text-gray-600">
          Mit modernster Technik und geschultem Personal garantieren wir Ihnen ein optimales Ergebnis. 
          Wir beraten Sie gerne und erstellen Ihnen ein individuelles Angebot.
        </p>
      </div>
    </Container>
  );
}
