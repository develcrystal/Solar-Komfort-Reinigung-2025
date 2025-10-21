import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum für Komfort Gebäudeservice24 GmbH',
};

export default function ImpressumPage() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Impressum</h1>
      <h2 className="text-2xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
      <p className="mb-4">
        Komfort Gebäudeservice24 GmbH<br />
        Musterstraße 1<br />
        64293 Darmstadt<br />
        Deutschland
      </p>
      <p className="mb-4">
        <strong>Handelsregister:</strong> HRB [Ihre Register-Nummer einfügen]<br />
        <strong>Registergericht:</strong> Amtsgericht Darmstadt
      </p>
      <h2 className="text-2xl font-semibold mb-2">Umsatzsteuer-ID</h2>
      <p className="mb-4">
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
        DE[ Ihre USt-ID-Nummer einfügen ]
      </p>
      <p className="mb-4">
        <strong>Kontakt:</strong><br />
        Telefon: <a href="tel:061511546592" className="text-blue-600 hover:underline">06151 15 465 92</a><br />
        E-Mail: <a href="mailto:info@komfort-facility.de" className="text-blue-600 hover:underline">info@komfort-facility.de</a><br />
        Website: www.komfort-facility.de
      </p>
      <p className="mb-4">
        <strong>Geschäftsführer:</strong><br />
        [Namen der Geschäftsführer einfügen]
      </p>
      <h2 className="text-2xl font-semibold mb-2">Inhaltlich verantwortlich gemäß §55 Absatz 2 RStV:</h2>
      <p className="mb-4">
        [Name des Verantwortlichen]<br />
        Komfort Gebäudeservice24 GmbH<br />
        Musterstraße 1<br />
        64293 Darmstadt
      </p>
      <p className="mb-4">
        Datum der letzten Aktualisierung: [Datum einfügen]
      </p>
      <h2 className="text-2xl font-semibold mb-2">Haftungshinweis:</h2>
      <p className="mb-4">
        Haftung für Inhalte<br />
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.<br />
        <br />
        Haftung für Links<br />
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.<br />
        Bei Bekanntwerden von Rechtsverstößen werden wir derartige Inhalte umgehend entfernen oder aus der Verlinkung ändern.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Urheberrechtlicher Hinweis:</h2>
      <p className="mb-4">
        Die Inhalte und Werke auf diesen Seiten erstellt von den Seitenbetreibern sind urheberrechtlich geschützt. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.<br />
        <br />
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
      </p>
      <p className="mb-4">
        Plattform der EU-Kommission zur Online-Streitbeilegung: <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>
      </p>
      <p className="mb-4">
        Zur Streitbeilegung stehen wir Ihnen vor und auch nach dem Kauf gerne zur Verfügung. Gerne beantworten wir auch Ihre Fragen zu Bestellung, Lieferung und Zahlung. Ihre Zufriedenheit ist uns wichtig. Sollte es dennoch zu einem Rechtsstreit kommen, ist ausschließlich das Gericht in Darmstadt zuständig.
      </p>
    </main>
  );
}