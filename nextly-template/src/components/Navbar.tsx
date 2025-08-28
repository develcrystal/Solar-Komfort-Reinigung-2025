"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ChevronDownIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { MegaMenu } from "./MegaMenu";

const renderIcon = (icon: string): JSX.Element | null => {
  if (icon.startsWith('/')) {
    return <Image src={icon} alt="" width={20} height={20} className="h-5 w-5" />;
  }
  // Map common emoji to consistent SVG icons
  const emojiToIcon: Record<string, string> = {
    "🏠": "/img/icons/einfamilienhaus.svg",
    "🏢": "/img/icons/gebaeudereinigung.svg",
    "🔨": "/img/icons/facility-management.svg",
    "✨": "/img/icons/sonstiges.svg",
    "🏭": "/img/icons/facility-management.svg",
    "🪜": "/img/icons/treppenhausreinigung.svg",
    "🏥": "/img/icons/sonstiges.svg",
    "🍽️": "/img/icons/sonstiges.svg",
    "🎓": "/img/icons/sonstiges.svg",
    "👥": "/img/icons/einfamilienhaus.svg",
    "⭐": "/img/icons/sonstiges.svg",
    "📸": "/img/icons/sonstiges.svg",
    "🔧": "/img/icons/facility-management.svg",
    "🌿": "/img/icons/sonstiges.svg",
    "📦": "/img/icons/sonstiges.svg",
    "❄️": "/img/icons/facility-management.svg",
    "🍂": "/img/icons/sonstiges.svg",
    "🧱": "/img/icons/sonstiges.svg",
  };
  
  const mapped = emojiToIcon[icon];
  if (mapped) {
    return <Image src={mapped} alt="" width={20} height={20} className="h-5 w-5" />;
  }
  return <span className="text-lg">{icon}</span>;
};

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      name: "Dachreinigung & Beschichtung",
      href: "/dachreinigung",
      description: "Professionelle Dachreinigung und langlebige Beschichtung",
      icon: "/img/icons/gebaeudereinigung.svg"
    },
    {
      name: "Fassadenreinigung & Impregnierung",
      href: "/fassadenreinigung",
      description: "Schonende Fassadenreinigung und Schutzimprägnierung",
      icon: "/img/icons/gebaeudereinigung.svg"
    },
    { 
      name: "Pflaster- & Steinreinigung", 
      href: "/pflasterreinigung",
      description: "Gründliche Reinigung von Pflaster und Naturstein",
      icon: "🧱"
    },
    { 
      name: "Büroreinigung", 
      href: "/bueroeinigung",
      description: "Professionelle Reinigung für Büroräume",
      icon: "🏢"
    },
    { 
      name: "Baubeschlussreinigung", 
      href: "/baubeschlussreinigung",
      description: "Gründliche Endreinigung nach Bauarbeiten",
      icon: "🔨"
    },
    { 
      name: "Grundreinigung", 
      href: "/grundreinigung",
      description: "Intensive Grundreinigung aller Bereiche",
      icon: "✨"
    }
  ];

  const buildingServices = [
    {
      name: "Hausmeisterservice",
      href: "/hausmeisterservice",
      description: "Ihr zuverlässiger Hausmeisterservice",
      icon: "🔧"
    },
    {
      name: "Gartenpflege",
      href: "/gartenpflege",
      description: "Professionelle Gartenpflege und -gestaltung",
      icon: "🌿"
    },
    {
      name: "Entrümpelung",
      href: "/entruempelung",
      description: "Schnelle und zuverlässige Entrümpelung",
      icon: "📦"
    },
    {
      name: "Winterdienst",
      href: "/winterdienst",
      description: "Zuverlässiger Winterdienst für Ihre Sicherheit",
      icon: "❄️"
    },
    {
      name: "Außenpflege",
      href: "/aussenpflege",
      description: "Umfassende Pflege für Außenanlagen",
      icon: "🍂"
    }
  ];

  const navigation = [
    {
      name: "Startseite",
      href: "/"
    },
    {
      name: "Gebäudereinigung",
      isMega: true,
      submenu: services
    },
    {
      name: "Gebäudeservice",
      isMega: true,
      submenu: buildingServices
    },
    {
      name: "Facility Management",
      submenu: [
        {
          name: "Angebot",
          href: "/angebot",
          description: "Unser Facility Management Leistungsspektrum",
          icon: "/img/icons/facility-management.svg"
        },
        {
          name: "Unternehmen",
          href: "/unternehmen",
          description: "Über unser Facility Management Team",
          icon: "/img/icons/facility-management.svg"
        },
        {
          name: "Kontakt",
          href: "/kontakt-facility",
          description: "Kontakt für Facility Management Anfragen",
          icon: "/img/icons/facility-management.svg"
        }
      ]
    },
    {
      name: "Über uns",
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

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-blue-500 py-6 lg:border-none">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                className="h-8 w-auto"
                src="/img/logo/komfort-gebaeudeservice24-logo.svg"
                alt="Komfort Gebäudeservice24 GmbH"
                width={180}
                height={40}
                priority
              />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Popover.Group className="flex gap-x-8">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    {item.isMega ? (
                      <MegaMenu 
                        title={item.name}
                        items={item.submenu || []}
                        columns={item.name === 'Gebäudereinigung' ? 2 : 2}
                      />
                    ) : (
                      <Link
                        href={item.href}
                        className="text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </Popover.Group>
            </div>
          </div>

          <div className="ml-10 space-x-4 flex items-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Kontakt aufnehmen
            </Link>
            <ThemeChanger />
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Menü öffnen</span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <Transition
          show={mobileMenuOpen}
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <div key={item.name} className="mx-4">
                  {item.isMega ? (
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">
                            {item.name}
                            <ChevronDownIcon
                              className={`h-5 w-5 transition-transform ${
                                open ? 'rotate-180' : ''
                              }`}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {item.submenu?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ) : (
                    <Link
                      href={item.href}
                      className="block rounded-lg py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4 dark:border-gray-800">
              <div className="mx-4">
                <Link
                  href="/kontakt"
                  className="block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </div>
        </Transition>
      </nav>
    </header>
  );
}