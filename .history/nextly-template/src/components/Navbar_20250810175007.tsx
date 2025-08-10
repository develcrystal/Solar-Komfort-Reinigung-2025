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
      submenu: [
        {
          name: "Dachreinigung & Beschichtung",
          href: "/dachreinigung",
          description: "Expertise in roof cleaning and coating",
          icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        },
        {
          name: "Fassadenreinigung & Impregnierung",
          href: "/fassadenreinigung",
          description: "Facade cleaning and impregnation services",
          icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        },
        { name: "Pflaster- & Steinreinigung", href: "/pflasterreinigung" },
        { name: "Büroreinigung", href: "/bueroeinigung" },
        { name: "Baubeschlussreinigung", href: "/baubeschlussreinigung" },
        { name: "Grundreinigung", href: "/grundreinigung" },
        { name: "Haushaltsreinigung", href: "/haushaltsreinigung" },
        { name: "Industriereinigung", href: "/industriereinigung" },
        { name: "Treppenhausreinigung", href: "/treppenhausreinigung" },
        { name: "Krankenausreinigung", href: "/krankenausreinigung" },
        { name: "Hotellerie & Gastronomie", href: "/hotellerie-gastronomie" },
        { name: "Fenster- & Glasreinigung", href: "/fensterreinigung" },
        { name: "Schul- & Kindergartenreinigung", href: "/schulreinigung" }
      ]
    },
    {
      name: "Gebäudeservice",
      submenu: [
        { name: "Hausmeisterservice", href: "/hausmeisterservice" },
        { name: "Gartenpflege & Außenanlagen", href: "/gartenpflege" },
        { name: "Entrümpelung & Haushaltsauflösungen", href: "/entruempelung" },
        { name: "Winterdienst", href: "/winterdienst" },
        { name: "Außenpflege & saisonale Dienste", href: "/aussenpflege" }
      ]
    },
    {
      name: "Facility Management",
      submenu: [
        { name: "Angebot", href: "/angebot" },
        { name: "Unternehmen", href: "/unternehmen" },
        { name: "Kontakt", href: "/kontakt-facility" }
      ]
    },
    {
      name: "Über uns",
      submenu: [
        { name: "Über uns", href: "/ueber-uns" },
        { name: "Referenzen", href: "/referenzen" },
        { name: "Bildergalerie", href: "/galerie" }
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
        
        {/* menu  */}
        <div className="hidden text-center xl:flex xl:items-center">
          <ul className="items-center justify-center flex-1 pt-6 list-none xl:pt-0 xl:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                {menu.submenu ? (
                  <div className="relative group">
                    <button 
                      className="inline-block px-3 py-2 text-base font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 flex items-center"
                    >
                      {menu.name}
                      <svg 
                        className="w-4 h-4 ml-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    <div className="absolute left-0 z-50 hidden pt-4 group-hover:block">
                      <div className="absolute left-0 z-50 hidden pt-4 group-hover:block w-[600px]">
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-md py-4 grid grid-cols-2 gap-4 max-h-[80vh] overflow-y-auto">
                          {menu.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-gray-700 whitespace-normal break-words"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                ) : (
                  <Link
                    href={menu.href}
                    className="inline-block px-3 py-2 text-base font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
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