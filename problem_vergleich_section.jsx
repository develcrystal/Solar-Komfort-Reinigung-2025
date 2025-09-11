// Problem-Vergleich Section - Andere vs. Wir
const ProblemVergleichSection = () => {
  const probleme = [
    {
      problem: "Reinigungsqualität schwankt trotz Beschwerden",
      andereLosung: "Versprechen Besserung, aber keine Struktur",
      unsereLosung: "Strukturierte Qualitätskontrolle mit Checklisten"
    },
    {
      problem: "Termine werden nicht eingehalten", 
      andereLosung: "Ausreden und Entschuldigungen",
      unsereLosung: "Feste Terminpläne + Backup-Teams"
    },
    {
      problem: "Ständiges Nachfassen erforderlich",
      andereLosung: "Reagieren nur auf Beschwerden", 
      unsereLosung: "Proaktive Kommunikation + feste Ansprechpartner"
    },
    {
      problem: "Unprofessionelles Personal",
      andereLosung: "Wechselnde Subunternehmer",
      unsereLosung: "Eigenes, geschultes Fachpersonal"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-green-50">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Der Unterschied ist offensichtlich
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Warum über 5.000 Kunden von anderen Reinigungsfirmen zu uns gewechselt sind
            </p>
          </div>

          {/* Vergleichstabelle */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Header Row */}
              <div className="bg-gray-100 p-6 font-semibold text-gray-800">
                Das Problem
              </div>
              <div className="bg-red-100 p-6 font-semibold text-red-800">
                ❌ Andere Reinigungsfirmen
              </div>
              <div className="bg-green-100 p-6 font-semibold text-green-800">
                ✅ Komfort Gebäudeservice24
              </div>

              {/* Comparison Rows */}
              {probleme.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="p-6 border-t border-gray-200 bg-gray-50">
                    <p className="font-medium text-gray-900">{item.problem}</p>
                  </div>
                  <div className="p-6 border-t border-gray-200 bg-red-25">
                    <p className="text-red-700">{item.andereLosung}</p>
                  </div>
                  <div className="p-6 border-t border-gray-200 bg-green-25">
                    <p className="text-green-700 font-medium">{item.unsereLosung}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Garantie-Box */}
          <div className="bg-yellow-400 rounded-2xl p-8 mt-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Unser Versprechen an Sie:
            </h3>
            <p className="text-lg text-black mb-6">
              Konstante Qualität und zuverlässiger Service - oder Sie zahlen den ersten Monat nicht.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-yellow-400 font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors">
                Jetzt kostenlos testen
              </button>
              <button className="bg-white text-black font-semibold py-3 px-8 rounded-lg border-2 border-black hover:bg-gray-50 transition-colors">
                Referenzen anfordern
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
