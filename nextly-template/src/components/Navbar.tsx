"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { useState } from "react";

export const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    {
      name: "Startseite",
      href: "/"
    },
    {
      name: "Gebäudereinigung",
      isMega: true,
      submenu: [
        {
          name: "Dachreinigung & Beschichtung",
          href: "/dachreinigung",
          description: "Professionelle Dachreinigung und langlebige Beschichtung",
          icon: "🏠"
        },
        {
          name: "Fassadenreinigung & Impregnierung",
          href: "/fassadenreinigung",
          description: "Schonende Fassadenreinigung und Schutzimprägnierung",
          icon: "🏢"
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
        },
        { 
          name: "Haushaltsreinigung", 
          href: "/haushaltsreinigung",
          description: "Zuverlässige Reinigung für Privathaushalte",
          icon: "🏠"
        },
        { 
          name: "Industriereinigung", 
          href: "/industriereinigung",
          description: "Spezialisierte Reinigung für Industrieanlagen",
          icon: "🏭"
        },
        { 
          name: "Treppenhausreinigung", 
          href: "/treppenhausreinigung",
          description: "Regelmäßige Treppenhausreinigung",
          icon: "🪜"
        },
        { 
          name: "Krankenausreinigung", 
          href: "/krankenausreinigung",
          description: "Hygienische Reinigung für medizinische Einrichtungen",
          icon: "🏥"
        },
        { 
          name: "Hotellerie & Gastronomie", 
          href: "/hotellerie-gastronomie",
          description: "Professionelle Reinigung für Hotels und Restaurants",
          icon: "🍽️"
        },
        { 
          name: "Fenster- & Glasreinigung", 
          href: "/fensterreinigung",
          description: "Streifenfreie Fenster- und Glasreinigung",
          icon: "🪟"
        },
        { 
          name: "Schul- & Kindergartenreinigung", 
          href: "/schulreinigung",
          description: "Kindgerechte Reinigung für Bildungseinrichtungen",
          icon: "🎓"
        }
      ]
    },
    {
      name: "Gebäudeservice",
      isMega: true,
      submenu: [
        { 
          name: "Hausmeisterservice", 
          href: "/hausmeisterservice",
          description: "Umfassender Hausmeisterservice für Ihre Immobilie",
          icon: "🔧"
        },
        { 
          name: "Gartenpflege & Außenanlagen", 
          href: "/gartenpflege",
          description: "Professionelle Garten- und Außenanlagenpflege",
          icon: "🌿"
        },
        { 
          name: "Entrümpelung & Haushaltsauflösungen", 
          href: "/entruempelung",
          description: "Fachgerechte Entrümpelung und Haushaltsauflösung",
          icon: "📦"
        },
        { 
          name: "Winterdienst", 
          href: "/winterdienst",
          description: "Zuverlässiger Winterdienst und Streupflicht",
          icon: "❄️"
        },
        { 
          name: "Außenpflege & saisonale Dienste", 
          href: "/aussenpflege",
          description: "Saisonale Außenpflege das ganze Jahr über",
          icon: "🍂"
        }
      ]
    },
    {
      name: "Facility Management",
      submenu: [
        { 
          name: "Angebot", 
          href: "/angebot",
          description: "Unser Facility Management Leistungsspektrum",
          icon: "📋"
        },
        { 
          name: "Unternehmen", 
          href: "/unternehmen",
          description: "Über unser Facility Management Team",
          icon: "🏢"
        },
        { 
          name: "Kontakt", 
          href: "/kontakt-facility",
          description: "Kontakt für Facility Management Anfragen",
          icon: "📞"
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
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between px-4 py-6 sm:px-6 md:px-8 mx-auto lg:justify-between xl:px-1 z-50 max-w-screen-2xl">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-xl sm:text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <span>
                <Image
                  src="/img/flux/solar-komfort-logo.png"
                  width="150"
                  alt="Solar Komfort"
                  height="37"
                  className="w-auto h-8 sm:h-9"
                />
              </span>
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-2 sm:gap-3 nav__item mr-1 sm:mr-2 xl:flex ml-auto xl:ml-0 xl:order-2">
            <div className="flex items-center mr-2 sm:mr-3">
              <ThemeChanger />
            </div>
            <div className="hidden mr-2 sm:mr-3 xl:flex nav__item">
              <Link href="/kostenrechner" className="px-4 sm:px-6 py-2 text-sm sm:text-base text-white bg-indigo-600 rounded-md md:ml-5 hover:bg-indigo-700 transition-colors">
                Kostenrechner
              </Link>
            </div>
        </div>
                
        <Disclosure>
          {({ open }) => (
            <>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 text-gray-500 rounded-md xl:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700 touch-manipulation">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.829z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-4 sm:my-5 xl:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <div key={index} className="w-full">
                        {item.submenu ? (
                          <>
                            <button 
                              onClick={() => toggleDropdown(item.name)}
                              className="w-full px-3 sm:px-4 py-2 sm:py-3 -ml-3 sm:-ml-4 text-left text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none flex items-center justify-between touch-manipulation"
                            >
                              {item.name}
                              <svg 
                                className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                              </svg>
                            </button>
                            {activeDropdown === item.name && (
                              <div className="pl-3 sm:pl-4 max-w-[280px]">
                                {item.submenu.map((subItem, subIndex) => (
                                  <Link 
                                    key={subIndex} 
                                    href={subItem.href} 
                                    className="block w-full px-3 sm:px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none whitespace-normal break-words touch-manipulation"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <Link 
                            href={item.href} 
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 -ml-3 sm:-ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none block touch-manipulation"
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                    <Link href="/kostenrechner" className="w-full px-4 sm:px-6 py-3 mt-3 text-center text-white bg-indigo-600 rounded-md xl:ml-5 hover:bg-indigo-700 transition-colors touch-manipulation">         
                        Kostenrechner
                    </Link>
                  </>
                </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
        {/* Desktop Mega Menu */}
        <div className="hidden xl:flex xl:items-center">
          <ul className="items-center justify-center flex-1 pt-6 list-none xl:pt-0 xl:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                {menu.submenu ? (
                  <div className="relative group">
                    <button 
                      className="inline-block px-4 py-2 text-base font-medium text-gray-800 no-underline rounded-lg dark:text-gray-200 hover:text-blue-600 hover:bg-blue-50 focus:text-blue-600 focus:bg-blue-50 focus:outline-none dark:hover:bg-gray-800 dark:focus:bg-gray-800 transition-all duration-200 flex items-center"
                    >
                      {menu.name}
                      <svg 
                        className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    
                    {/* Mega Menu Dropdown */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-50 hidden pt-4 group-hover:block">
                      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300">
                        {/* Mega Menu for "Gebäudereinigung" and "Gebäudeservice" */}
                        {menu.isMega ? (
                          <div className="w-[800px] p-8">
                            <div className="mb-6">
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-left">
                                {menu.name}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400 text-left">
                                Entdecken Sie unser umfassendes Leistungsspektrum
                              </p>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-6">
                              {menu.submenu.map((subItem, subIndex) => (
                                <Link 
                                  key={subIndex} 
                                  href={subItem.href} 
                                  className="group/item p-4 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-200 border border-transparent hover:border-blue-200 dark:hover:border-gray-700"
                                >
                                  <div className="flex items-start space-x-3">
                                    <div className="text-2xl flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                                      {subItem.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="text-sm font-medium text-gray-900 dark:text-white group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-200 leading-tight text-left">
                                        {subItem.name}
                                      </div>
                                      {subItem.description && (
                                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-tight text-left">
                                          {subItem.description}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            
                            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-sm font-medium text-gray-900 dark:text-white text-left">
                                    Benötigen Sie eine Beratung?
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 text-left">
                                    Kontaktieren Sie uns für ein kostenloses Angebot
                                  </p>
                                </div>
                                <Link 
                                  href="/kontakt"
                                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                >
                                  Kontakt aufnehmen
                                </Link>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Regular Dropdown for smaller menus */
                          <div className="w-80 py-4">
                            <div className="px-6 pb-4 mb-4 border-b border-gray-100 dark:border-gray-800">
                              <h3 className="text-base font-semibold text-gray-900 dark:text-white text-left">
                                {menu.name}
                              </h3>
                            </div>
                            {menu.submenu.map((subItem, subIndex) => (
                              <Link 
                                key={subIndex} 
                                href={subItem.href} 
                                className="flex items-center px-6 py-3 text-gray-800 dark:text-gray-200 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 dark:hover:text-blue-400 transition-all duration-200"
                              >
                                <span className="text-lg mr-3">{subItem.icon}</span>
                                <div className="flex-1">
                                  <div className="text-sm font-medium text-left">{subItem.name}</div>
                                  {subItem.description && (
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-left">
                                      {subItem.description}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={menu.href}
                    className="inline-block px-4 py-2 text-base font-medium text-gray-800 no-underline rounded-lg dark:text-gray-200 hover:text-blue-600 hover:bg-blue-50 focus:text-blue-600 focus:bg-blue-50 focus:outline-none dark:hover:bg-gray-800 dark:focus:bg-gray-800 transition-all duration-200"
                  >
                    {menu.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </div>
  );
}