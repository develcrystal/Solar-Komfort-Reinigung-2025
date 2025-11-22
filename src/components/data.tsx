import {
  HomeIcon,
  BuildingOfficeIcon,
  WrenchIcon,
  WrenchScrewdriverIcon,
  MoonIcon,
  SparklesIcon,
  TrashIcon,
  KeyIcon,
  UserCircleIcon,
  UserGroupIcon,
  UserIcon,
  DocumentTextIcon,
  PhoneIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  FaceSmileIcon,
  DocumentMagnifyingGlassIcon,
  CheckBadgeIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  StarIcon,
  PhotoIcon
} from "@heroicons/react/24/outline";
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
      icon: <DocumentMagnifyingGlassIcon className="h-6 w-6 text-white" />,
    },
    {
      title: "Grundierung",
      desc: "Optimale Haftung durch spezielle Grundierung, die tief in die Poren der Ziegel eindringt und für eine stabile Verbindung sorgt.",
      icon: <CheckBadgeIcon className="h-6 w-6 text-white" />,
    },
    {
      title: "Beschichtung",
      desc: "Zweifache Beschichtung für langfristigen Schutz mit Lotus-Effekt gegen Umwelteinflüsse, UV-Strahlung, Regen und Frost.",
      icon: <ShieldCheckIcon className="h-6 w-6 text-white" />,
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
      icon: <HomeIcon className="h-6 w-6 text-white" />,
    },
    {
      title: "Dachrinnenreinigung",
      desc: "Gründliche Reinigung Ihrer Dachrinnen für eine optimale Wasserableitung und Schutz vor Wasserschäden.",
      icon: <WrenchIcon className="h-6 w-6 text-white" />,
    },
    {
      title: "Pflaster- & Fassadenreinigung",
      desc: "Professionelle Reinigung von Pflastersteinen und Fassaden sowie hochwertige Fassadenanstriche.",
      icon: <BuildingOfficeIcon className="h-6 w-6 text-white" />,
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
          icon: <HomeIcon className="h-6 w-6 text-white" />
        },
        {
          name: "Fassadenreinigung & Impregnierung",
          href: "/gebaeudereinigung/fassadenreinigung",
          description: "Schonende Fassadenreinigung und Schutzimprägnierung",
          icon: <BuildingOfficeIcon className="h-6 w-6 text-white" />
        },
        {
          name: "Pflaster- & Steinreinigung",
          href: "/gebaeudereinigung/pflasterreinigung",
          description: "Gründliche Reinigung von Pflaster und Naturstein",
          icon: <Squares2X2Icon className="h-6 w-6 text-white" />
        },
        {
          name: "Büroreinigung",
          href: "/gebaeudereinigung/bueroeinigung",
          description: "Professionelle Reinigung für Büoräume",
          icon: <BuildingOfficeIcon className="h-6 w-6 text-white" />
        },
        {
          name: "Baubeschlussreinigung",
          href: "/gebaeudereinigung/baubeschlussreinigung",
          description: "Gründliche Endreinigung nach Bauarbeiten",
          icon: <DocumentTextIcon className="h-6 w-6 text-white" />
        },
        {
          name: "Grundreinigung",
          href: "/gebaeudereinigung/grundreinigung",
          description: "Intensive Grundreinigung aller Bereiche",
          icon: <SparklesIcon className="h-6 w-6 text-white" />
        },
        {
          name: "Haushaltsreinigung",
          href: "/gebaeudereinigung/haushaltsreinigung",
          description: "Zuverlässige Reinigung für Privathaushalte",
          icon: <HomeIcon className="h-6 w-6 text-white" />
        },
        {
          name: "Industriereinigung",
          href: "/gebaeudereinigung/industriereinigung",
          description: "Spezialisierte Reinigung für Industrieanlagen",
          icon: <BuildingOfficeIcon className="h-6 w-6 text-white" />
        },
        {
          name: "Treppenhausreinigung",
          href: "/gebaeudereinigung/treppenhausreinigung",
          description: "Regelmäßige Treppenhausreinigung",
          icon: <WrenchIcon className="h-6 w-6 text-white" />
        },
        {
          name: "Krankenausreinigung",
          href: "/gebaeudereinigung/krankenausreinigung",
          description: "Hygienische Reinigung für medizinische Einrichtungen",
          icon: <InformationCircleIcon className="h-6 w-6 text-white" />
        },
        {
          name: "Hotellerie & Gastronomie",
          href: "/gebaeudereinigung/hotellerie-gastronomie",
          description: "Professionelle Reinigung für Hotels und Restaurants",
          icon: <CheckCircleIcon className="h-6 w-6 text-white" />
        },
        {
          name: "Fenster- & Glasreinigung",
          href: "/gebaeudereinigung/fensterreinigung",
          description: "Streifenfreie Fenster- und Glasreinigung",
          icon: <PhotoIcon className="h-6 w-6 text-white" />
        },
        {
          name: "Schul- & Kindergartenreinigung",
          href: "/gebaeudereinigung/schulreinigung",
          description: "Kindgerechte Reinigung für Bildungseinrichtungen",
          icon: <UserGroupIcon className="h-6 w-6 text-white" />
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
          icon: <WrenchIcon className="h-6 w-6 text-white" />
        },
        {
          name: "Gartenpflege & Außenanlagen",
          href: "/gebaeudeservice/gartenpflege",
          description: "Professionelle Garten- und Außenanlagenpflege",
          icon: <SparklesIcon className="h-6 w-6 text-white" />
        },
        {
          name: "Entrümpelung & Haushaltsauflösungen",
          href: "/gebaeudeservice/entruempelung",
          description: "Fachgerechte Entrümpelung und Haushaltsauflösung",
          icon: <TrashIcon className="h-6 w-6 text-white" />
        },
        {
          name: "Winterdienst",
          href: "/gebaeudeservice/winterdienst",
          description: "Zuverlässiger Winterdienst und Streupflicht",
          icon: <MoonIcon className="h-6 w-6 text-white" />
        },
        {
          name: "Außenpflege & saisonale Dienste",
          href: "/gebaeudeservice/aussenpflege",
          description: "Saisonale Außenpflege das ganze Jahr über",
          icon: <SparklesIcon className="h-6 w-6 text-white" />
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
          icon: <BuildingOfficeIcon className="h-6 w-6 text-white" />
        },
        {
          name: "Unternehmen",
          href: "/facility-management/unternehmen",
          description: "Über unser Facility Management Team",
          icon: <BuildingOfficeIcon className="h-6 w-6 text-white" />
        },
        {
          name: "Portfolio",
          href: "/facility-management/portfolio",
          description: "Case Studies, Team & Service-Pakete",
          icon: <Squares2X2Icon className="h-6 w-6 text-white" />
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
          icon: <UserGroupIcon className="h-6 w-6 text-white" />
        },
        {
          name: "Referenzen",
          href: "/referenzen",
          description: "Erfolgreiche Projekte und Kundenstimmen",
          icon: <StarIcon className="h-6 w-6 text-white" />
        },
        {
          name: "Bildergalerie",
          href: "/galerie",
          description: "Impressionen unserer Arbeiten",
          icon: <PhotoIcon className="h-6 w-6 text-white" />
        }
      ]
    },
    {
      name: "Kontakt",
      href: "/kontakt"
    }
  ];

export { benefitOne, benefitTwo, navigation };
