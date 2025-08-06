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

export { benefitOne, benefitTwo };