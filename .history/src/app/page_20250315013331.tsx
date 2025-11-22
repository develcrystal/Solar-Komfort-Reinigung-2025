import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Metadata } from "next";

import { benefitOne, benefitTwo } from "@/components/data";

export const metadata: Metadata = {
  title: "Solar Komfort GmbH - Professionelle Dachreinigung & Dachbeschichtung",
  description: "Professionelle Dachreinigung und Dachbeschichtung mit Nano-Effekt in Darmstadt und Umgebung. Verlängern Sie die Lebensdauer Ihres Daches mit unseren Experten.",
  keywords: "Dachreinigung, Dachbeschichtung, Nano-Effekt, Darmstadt, Fassadenreinigung, Solaranlagenreinigung",
  openGraph: {
    title: "Solar Komfort GmbH - Professionelle Dachreinigung & Dachbeschichtung",
    description: "Professionelle Dachreinigung und Dachbeschichtung mit Nano-Effekt in Darmstadt und Umgebung. Verlängern Sie die Lebensdauer Ihres Daches mit unseren Experten.",
    url: "https://solar-komfort.de",
    siteName: "Solar Komfort GmbH",
    locale: "de_DE",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <div id="dachbeschichtung">
          <SectionTitle
            preTitle="Solar Komfort GmbH"
            title="Unsere professionelle Dachbeschichtung"
          >
            Wir bieten umfassende Dienstleistungen für Ihr Dach - von der gründlichen Reinigung bis zur langlebigen Beschichtung mit modernem Nano-Effekt. Unsere Experten sorgen für ein strahlendes und langlebiges Ergebnis.
          </SectionTitle>

          <Benefits data={benefitOne} />
        </div>
        <div id="leistungen">
          <Benefits imgPos="right" data={benefitTwo} />
        </div>

        <div id="prozess">
          <SectionTitle
            preTitle="Unser Prozess"
            title="So gehen wir bei der Dachbeschichtung vor"
          >
            Unsere Dachbeschichtung erfolgt in drei sorgfältig durchgeführten Schritten: Vorbereitung, Grundierung und zweifache Beschichtung. Jeder Schritt ist entscheidend für ein langlebiges und qualitativ hochwertiges Ergebnis.
          </SectionTitle>

          <Video 
            videoId="rKtfqb3sKww" 
            title="Sehen Sie unsere Dachbeschichtung in Aktion"
          />
        </div>

        <div id="kundenstimmen">
          <SectionTitle
            preTitle="Kundenstimmen"
            title="Das sagen unsere Kunden über uns"
          >
            Die Zufriedenheit unserer Kunden steht für uns an erster Stelle. Hier finden Sie einige Stimmen unserer zufriedenen Kunden.
          </SectionTitle>

          <Testimonials />
        </div>

        <div id="faq">
          <SectionTitle preTitle="FAQ" title="Häufig gestellte Fragen">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Dienstleistungen rund um Dachbeschichtung und Reinigung.
          </SectionTitle>

          <Faq />
        </div>
        <Cta />
      </Container>
    </>
  );
}