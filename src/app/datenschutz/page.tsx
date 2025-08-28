import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung für Komfort Gebäudeservice24',
};

export default function DatenschutzPage() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Datenschutz</h1>
      <p className="mb-4">
        Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Diese
        Datenschutzerklärung erläutert, welche Daten wir erheben, wie wir sie
        verwenden und welche Rechte Sie in Bezug auf Ihre Daten haben.
      </p>
      <h2 className="text-2xl font-semibold mb-2">1. Verantwortlicher</h2>
      <p className="mb-2">
        Komfort Gebäudeservice24 GmbH
        <br />
        Musterstraße 1, 64293 Darmstadt, Deutschland
        <br />
        E‑Mail: info@solarkomfort.de
      </p>
      <h2 className="text-2xl font-semibold mb-2">2. Daten, die wir verarbeiten</h2>
      <p className="mb-2">
        Wir verarbeiten personenbezogene Daten, die Sie uns im Rahmen des
        Kontaktformulars, bei Anfragen oder bei Nutzung unserer
        Services zur Verfügung stellen. Dazu gehören Name, E‑Mail‑Adresse,
        Telefonnummer und ggf. weitere Angaben, die Sie freiwillig
        angeben.
      </p>
      <h2 className="text-2xl font-semibold mb-2">3. Zweck der Verarbeitung</h2>
      <p className="mb-2">
        Die Daten werden ausschließlich zur Bearbeitung Ihrer
        Anfragen, zur Bereitstellung von Informationen und
        zur Erfüllung gesetzlicher Verpflichtungen
        verwendet.
      </p>
      <h2 className="text-2xl font-semibold mb-2">4. Weitergabe an Dritte</h2>
      <p className="mb-2">
        Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, wenn
        dies zur Erfüllung des Vertrags erforderlich ist
        (z. B. an Dienstleister für den Versand von
        E‑Mails) oder wenn wir gesetzlich dazu
        verpflichtet sind.
      </p>
      <h2 className="text-2xl font-semibold mb-2">5. Ihre Rechte</h2>
      <p className="mb-2">
        Sie haben das Recht auf Auskunft, Berichtigung,
        Löschung, Einschränkung der Verarbeitung,
        Datenübertragbarkeit und Widerspruch.
        Bitte kontaktieren Sie uns hierfür unter
        <a href="mailto:info@solarkomfort.de" className="text-blue-600 hover:underline">info@solarkomfort.de</a>.
      </p>
      <h2 className="text-2xl font-semibold mb-2">6. Cookies</h2>
      <p className="mb-2">
        Unsere Website verwendet Cookies, um die
        Benutzerfreundlichkeit zu verbessern.
        Durch die Nutzung der Seite stimmen Sie
        der Verwendung von Cookies zu.
      </p>
      <h2 className="text-2xl font-semibold mb-2">7. Änderungen der
        Datenschutzerklärung</h2>
      <p className="mb-2">
        Wir behalten uns das Recht vor,
        diese Datenschutzerklärung
        jederzeit zu aktualisieren.
        Die aktuelle Version ist
        jederzeit auf dieser Seite einsehbar.
      </p>
    </main>
  );
}