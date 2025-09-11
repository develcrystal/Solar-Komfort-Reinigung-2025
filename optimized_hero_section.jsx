// Optimierte Hero-Section - Problem-First Design
const OptimizedHeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/flux/familie-vor-haus-mit-solaranlagen.webp"
          fill
          className="object-cover brightness-[0.7]"
          alt="Zufriedene Familie vor sauberem Gebäude"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* Problem-First Headline */}
          <div className="bg-red-600 text-white px-4 py-2 rounded-lg inline-block mb-4">
            <span className="text-sm font-medium">PROBLEM ERKANNT?</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ihre Reinigungsfirma hält nicht, was sie verspricht?
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <p className="text-lg md:text-xl text-white mb-4">
              <strong>Das kennen Sie:</strong> Schwankende Qualität trotz Verträgen. 
              Termine werden nicht eingehalten. Sie müssen ständig nachfassen.
            </p>
            <p className="text-base md:text-lg text-blue-100">
              Ihre Mitarbeiter und Kunden bemerken es auch.
            </p>
          </div>

          {/* Lösung mit Social Proof */}
          <div className="bg-green-600 rounded-lg p-6 mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              Schluss damit. Hier ist die Lösung:
            </h2>
            <p className="text-green-100 mb-4">
              Komfort Gebäudeservice24 - konstante Qualität durch strukturierte Prozesse. 
              <strong>Über 5.000 Kunden</strong> vertrauen bereits unserem System.
            </p>
            <div className="flex items-center text-green-100">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Tochterfirma der Solar Komfort GmbH - seit Jahren etabliert
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105">
              Kostenloses Beratungsgespräch
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-all">
              Referenzen anschauen
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
