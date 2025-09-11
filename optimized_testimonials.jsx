// Optimierte Testimonials - Vorher/Nachher Fokus
const OptimizedTestimonials = () => {
  const vorherNachherTestimonials = [
    {
      rating: "★★★★★",
      vorher: "3 verschiedene Reinigungsfirmen in 2 Jahren. Immer die gleichen Probleme.",
      nachher: "Seit 18 Monaten konstante Qualität. Endlich können wir uns auf anderes konzentrieren.",
      name: "Petra Hartmann", 
      role: "Wohnungsbaugesellschaft Darmstadt",
      branche: "Immobilien",
      zeitraum: "Kunde seit 2023",
      initial: "P"
    },
    {
      rating: "★★★★★",
      vorher: "Ständige Nachfragen wegen vergessener Desinfektionen. Patienten haben sich beschwert.",
      nachher: "RKI-konforme Reinigung dokumentiert. Null Beschwerden seit dem Wechsel.",
      name: "Dr. Michael Schmidt",
      role: "Zahnarztpraxis Berlin-Mitte", 
      branche: "Gesundheitswesen",
      zeitraum: "Kunde seit 2022",
      initial: "M"
    },
    {
      rating: "★★★★★",
      vorher: "Fitnessstudio-Reinigung ist speziell. Andere Firmen haben das nie verstanden.",
      nachher: "Endlich Experten! Kennen jeden Gerätetyp und alle Hygieneanforderungen.",
      name: "Sandra Becker",
      role: "Facility Managerin Gewerbezentrum",
      branche: "Sport & Fitness", 
      zeitraum: "Kunde seit 2021",
      initial: "S"
    },
    {
      rating: "★★★★★", 
      vorher: "Schulreinigung nach Ferien war immer ein Drama. Termine nie eingehalten.",
      nachher: "Strukturierte Abläufe, transparente Dokumentation. Schulstart ohne Stress.",
      name: "Thomas Wagner",
      role: "Schulverwaltung Darmstadt",
      branche: "Bildung",
      zeitraum: "Kunde seit 2020", 
      initial: "T"
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Echte Kunden, echte Erfolge
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lesen Sie, wie sich der Wechsel zu Komfort Gebäudeservice24 für unsere Kunden ausgewirkt hat
            </p>
          </div>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {vorherNachherTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-yellow-400 text-xl">{testimonial.rating}</div>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      {testimonial.zeitraum}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <span className="text-xl font-bold">{testimonial.initial}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-blue-100 text-sm">{testimonial.role}</p>
                      <span className="bg-blue-500 px-2 py-1 rounded text-xs mt-1 inline-block">
                        {testimonial.branche}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Vorher/Nachher Content */}
                <div className="p-6">
                  {/* Vorher */}
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-red-600 text-sm">❌</span>
                      </div>
                      <span className="text-sm font-semibold text-red-600">VORHER</span>
                    </div>
                    <p className="text-gray-700 italic pl-8">
                      "{testimonial.vorher}"
                    </p>
                  </div>

                  {/* Nachher */}
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-green-600 text-sm">✓</span>
                      </div>
                      <span className="text-sm font-semibold text-green-600">NACHHER</span>
                    </div>
                    <p className="text-gray-900 font-medium pl-8">
                      "{testimonial.nachher}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-Action */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Möchten Sie auch so eine Erfolgsgeschichte?
              </h3>
              <p className="text-gray-600 mb-6">
                Über 5.000 Kunden haben bereits gewechselt. Werden Sie der nächste Erfolg.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                Kostenloses Erstgespräch vereinbaren
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
