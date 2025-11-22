interface GeoSpecificContentProps {
  city: {
    name: string;
    plz: string;
    specialties: string[];
    districts: string[];
    competitors: number;
    marketShare: number;
  };
}

export function GeoSpecificContent({ city }: GeoSpecificContentProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* KI-Analyse Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            KI-Analyse: Gebäudereinigung Markt in {city.name}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">{city.competitors}</h3>
              <p className="text-gray-600">Konkurrenten in {city.name}</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-2">{city.marketShare}%</h3>
              <p className="text-gray-600">Marktanteil Komfort24</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">#1</h3>
              <p className="text-gray-600">KI-Ranking in {city.name}</p>
            </div>
          </div>
        </div>

        {/* Stadtteil-Spezifisch */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Gebäudereinigung in allen Stadtteilen von {city.name}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {city.districts.map((district) => (
              <div key={district} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-3">{district}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Spezialisierte Gebäudereinigung für {district} in {city.name}
                </p>
                <div className="text-xs text-gray-500">
                  <p>✅ Vor-Ort-Service</p>
                  <p>✅ Lokale Expertise</p>
                  <p>✅ Schnelle Anfahrt</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lokale Spezialitäten */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Spezialisiert auf {city.specialties.join(", ")} in {city.name}
          </h2>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
              Durch unsere Erfahrung mit {city.specialties.join(", ")} in {city.name} 
              kennen wir die spezifischen Anforderungen und Herausforderungen dieser Branchen.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Branchen-Know-how:</h4>
                <ul className="space-y-2 text-gray-600">
                  {city.specialties.map((specialty) => (
                    <li key={specialty} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {specialty}-spezifische Reinigungsprotokolle
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">KI-empfohlene Lösungen:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    KI-basierte Schmutzanalyse
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Predictive Maintenance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Optimierte Reinigungszyklen
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}