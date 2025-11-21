import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  HomeIcon,
  BuildingOfficeIcon,
  WrenchIcon,
} from "@heroicons/react/24/solid";
import { ReactElement } from "react";
import benefitOneImg from "../../public/img/flux/dachbeschichtung-prozess.webp";
import benefitTwoImg from "../../public/img/flux/quer_Vorher-Nachher Dachreinigung.webp";
import { StaticImageData } from "next/image";

export interface BulletPoint {
  title: string;
  desc: string;
  icon: ReactElement;
}

export interface BenefitData {
  title: string;
  desc: string;
  image: StaticImageData;
  bullets: BulletPoint[];
}

const benefitOne: BenefitData = {
  title: "Unsere professionelle Dachbeschichtung",
  desc: "Wir bieten umfassende Dienstleistungen für Ihr Dach - von der gründlichen Reinigung bis zur langlebigen Beschichtung mit modernem Nano-Effekt.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Vorbereitung",
      desc: "Detaillierte Inspektion, gründliche Reinigung mit Hochdruckverfahren und sorgfältiger Schutz angrenzender Bereiche.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Grundierung",
      desc: "Optimale Haftung durch spezielle Grundierung, die tief in die Poren der Ziegel eindringt und für eine stabile Verbindung sorgt.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Beschichtung",
      desc: "Zweifache Beschichtung für langfristigen Schutz mit Lotus-Effekt gegen Umwelteinflüsse, UV-Strahlung, Regen und Frost.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo: BenefitData = {
  title: "Unsere weiteren Leistungen",
  desc: "Neben der Dachbeschichtung bieten wir eine Vielzahl weiterer Dienstleistungen für Ihr Zuhause und Ihre Immobilie.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Dachreinigung & Dachimprägnierung",
      desc: "Professionelle Reinigung und Imprägnierung Ihres Daches für langanhaltenden Schutz und Werterhalt.",
      icon: <HomeIcon />,
    },
    {
      title: "Dachrinnenreinigung",
      desc: "Gründliche Reinigung Ihrer Dachrinnen für eine optimale Wasserableitung und Schutz vor Wasserschäden.",
      icon: <WrenchIcon />,
    },
    {
      title: "Pflaster- & Fassadenreinigung",
      desc: "Professionelle Reinigung von Pflastersteinen und Fassaden sowie hochwertige Fassadenanstriche.",
      icon: <BuildingOfficeIcon />,
    },
  ],
};

const navigation = [
    {
      name: "Gebäudereinigung",
      isMega: true,
      submenu: [
        {
          name: "Dachreinigung & Beschichtung",
          href: "/gebaeudereinigung/dachreinigung",
          description: "Professionelle Dachreinigung und langlebige Beschichtung",
          icon: "/img/icons/gebaeudereinigung.svg"
        },
        {
          name: "Fassadenreinigung & Impregnierung",
          href: "/gebaeudereinigung/fassadenreinigung",
          description: "Schonende Fassadenreinigung und Schutzimprägnierung",
          icon: "/img/icons/gebaeudereinigung.svg"
        },
        { 
          name: "Pflaster- & Steinreinigung", 
          href: "/gebaeudereinigung/pflasterreinigung",
          description: "Gründliche Reinigung von Pflaster und Naturstein",
          icon: "🧱"
        },
        { 
          name: "Büroreinigung", 
          href: "/gebaeudereinigung/bueroeinigung",
          description: "Professionelle Reinigung für Büroräume",
          icon: "🏢"
        },
        { 
          name: "Baubeschlussreinigung", 
          href: "/gebaeudereinigung/baubeschlussreinigung",
          description: "Gründliche Endreinigung nach Bauarbeiten",
          icon: "🔨"
        },
        { 
          name: "Grundreinigung", 
          href: "/gebaeudereinigung/grundreinigung",
          description: "Intensive Grundreinigung aller Bereiche",
          icon: "✨"
        },
        { 
          name: "Haushaltsreinigung", 
          href: "/gebaeudereinigung/haushaltsreinigung",
          description: "Zuverlässige Reinigung für Privathaushalte",
          icon: "🏠"
        },
        { 
          name: "Industriereinigung", 
          href: "/gebaeudereinigung/industriereinigung",
          description: "Spezialisierte Reinigung für Industrieanlagen",
          icon: "🏭"
        },
        { 
          name: "Treppenhausreinigung", 
          href: "/gebaeudereinigung/treppenhausreinigung",
          description: "Regelmäßige Treppenhausreinigung",
          icon: "/img/icons/treppenhausreinigung.svg"
        },
        { 
          name: "Krankenausreinigung", 
          href: "/gebaeudereinigung/krankenausreinigung",
          description: "Hygienische Reinigung für medizinische Einrichtungen",
          icon: "🏥"
        },
        { 
          name: "Hotellerie & Gastronomie", 
          href: "/gebaeudereinigung/hotellerie-gastronomie",
          description: "Professionelle Reinigung für Hotels und Restaurants",
          icon: "🍽️"
        },
        { 
          name: "Fenster- & Glasreinigung", 
          href: "/gebaeudereinigung/fensterreinigung",
          description: "Streifenfreie Fenster- und Glasreinigung",
          icon: "/img/icons/fensterreinigung.svg"
        },
        {
          name: "Schul- & Kindergartenreinigung",
          href: "/gebaeudereinigung/schulreinigung",
          description: "Kindgerechte Reinigung für Bildungseinrichtungen",
          icon: "/img/icons/fensterreinigung.svg"
        }
      ]
    },
    {
      name: "Gebäudeservice",
      isMega: true,
      submenu: [
        { 
          name: "Hausmeisterservice", 
          href: "/gebaeudeservice/hausmeisterservice",
          description: "Umfassender Hausmeisterservice für Ihre Immobilie",
          icon: "🔧"
        },
        { 
          name: "Gartenpflege & Außenanlagen", 
          href: "/gebaeudeservice/gartenpflege",
          description: "Professionelle Garten- und Außenanlagenpflege",
          icon: "🌿"
        },
        { 
          name: "Entrümpelung & Haushaltsauflösungen", 
          href: "/gebaeudeservice/entruempelung",
          description: "Fachgerechte Entrümpelung und Haushaltsauflösung",
          icon: "📦"
        },
        { 
          name: "Winterdienst", 
          href: "/gebaeudeservice/winterdienst",
          description: "Zuverlässiger Winterdienst und Streupflicht",
          icon: "❄️"
        },
        { 
          name: "Außenpflege & saisonale Dienste", 
          href: "/gebaeudeservice/aussenpflege",
          description: "Saisonale Außenpflege das ganze Jahr über",
          icon: "🍂"
        }
      ]
    },
    {
      name: "Facility Management",
      isMega: true,
      submenu: [
        {
          name: "Angebot",
          href: "/facility-management/angebot",
          description: "Unser Facility Management Leistungsspektrum",
          icon: "/img/icons/facility-management.svg"
        },
        {
          name: "Unternehmen",
          href: "/facility-management/unternehmen",
          description: "Über unser Facility Management Team",
          icon: "/img/icons/facility-management.svg"
        },
        {
          name: "Kontakt",
          href: "/facility-management/kontakt-facility",
          description: "Kontakt für Facility Management Anfragen",
          icon: "/img/icons/facility-management.svg"
        }
      ]
    },
    {
      name: "Über uns",
      isMega: true,
      submenu: [
        { 
          name: "Über uns", 
          href: "/ueber-uns",
          description: "Lernen Sie unser erfahrenes Team kennen",
          icon: "👥"
        },
        { 
          name: "Referenzen", 
          href: "/referenzen",
          description: "Erfolgreiche Projekte und Kundenstimmen",
          icon: "⭐"
        },
        { 
          name: "Bildergalerie", 
          href: "/galerie",
          description: "Impressionen unserer Arbeiten",
          icon: "📸"
        }
      ]
    },
    {
      name: "Kontakt",
      href: "/kontakt"
    }
  ];

export { benefitOne, benefitTwo, navigation };