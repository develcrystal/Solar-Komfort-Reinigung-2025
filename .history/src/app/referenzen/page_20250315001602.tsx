import { Container } from '@/components/Container';
import Image from 'next/image';

export default function Referenzen() {
  return (
    <Container>
      <h1 className="text-4xl font-bold mb-8">Referenzen</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Kundenbewertungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Image 
                src="/img/user1.jpg" 
                alt="Kunde" 
                width={60} 
                height={60} 
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">Michael Becker</h3>
                <div className="flex text-yellow-400">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              "Die Dachreinigung wurde sehr professionell durchgeführt. Das Team war pünktlich, freundlich und hat saubere Arbeit geleistet. Mein Dach sieht aus wie neu!"
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Image 
                src="/img/user2.jpg" 
                alt="Kunde" 
                width={60} 
                height={60} 
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">Sabine Müller</h3>
                <div className="flex text-yellow-400">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              "Ich bin sehr zufrieden mit der Dachbeschichtung. Die Beratung war kompetent und das Ergebnis überzeugt. Kann Solar Komfort nur weiterempfehlen!"
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Image 
                src="/img/user3.jpg" 
                alt="Kunde" 
                width={60} 
                height={60} 
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">Klaus Werner</h3>
                <div className="flex text-yellow-400">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              "Die Fassadenreinigung hat mein Haus komplett verändert. Es sieht aus wie neu gestrichen. Das Team war sehr ordentlich und hat alles sauber hinterlassen."
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-6">Referenzprojekte</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/img/flux/referenz-einfamilienhaus2.webp" 
              alt="Einfamilienhaus in München" 
              width={400} 
              height={200}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Einfamilienhaus in München</h3>
              <p className="text-gray-600 text-sm">Dachreinigung und Dachbeschichtung</p>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/img/flux/referenz-mehrfamilienhaus1.webp" 
              alt="Mehrfamilienhaus in Stuttgart" 
              width={400} 
              height={200}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Mehrfamilienhaus in Stuttgart</h3>
              <p className="text-gray-600 text-sm">Fassadenreinigung</p>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/img/flux/referenz-gewerbeobjekt1.webp" 
              alt="Gewerbeobjekt in Frankfurt" 
              width={400} 
              height={200}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Gewerbeobjekt in Frankfurt</h3>
              <p className="text-gray-600 text-sm">Dach- und Fassadenreinigung</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/img/flux/referenz-einfamilienhaus3.webp" 
              alt="Einfamilienhaus in Berlin" 
              width={400} 
              height={200}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Einfamilienhaus in Berlin</h3>
              <p className="text-gray-600 text-sm">Dachbeschichtung</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/img/flux/referenz-mehrfamilienhaus5.webp" 
              alt="Mehrfamilienhaus in Hamburg" 
              width={400} 
              height={200}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Mehrfamilienhaus in Hamburg</h3>
              <p className="text-gray-600 text-sm">Dach- und Fassadenreinigung</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/img/flux/referenz-gewerbeobjekt3.webp" 
              alt="Gewerbeobjekt in Köln" 
              width={400} 
              height={200}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Gewerbeobjekt in Köln</h3>
              <p className="text-gray-600 text-sm">Solaranlagenreinigung</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
