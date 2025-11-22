"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { useState } from "react";

export const Navbar = () => {
  const [showStartseiteDropdown, setShowStartseiteDropdown] = useState(false);
  const [showReferenzenDropdown, setShowReferenzenDropdown] = useState(false);

  const navigation = [
    "Startseite",
    "Dienstleistungen",
    "Über uns",
    "Referenzen",
    "Kostenrechner",
    "Kontakt",
  ];

  const getNavigationUrl = (item: string) => {
    switch(item) {
      case "Startseite":
        return "/";
      case "Über uns":
        return "/ueber-uns";
      case "Kostenrechner":
        return "/kostenrechner";
      default:
        return `/${item.toLowerCase().replace(" ", "-")}`;
    }
  };

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <span>
                <Image
                  src="/img/flux/solar-komfort-logo.png"
                  width="150"
                  alt="Solar Komfort"
                  height="37"
                  className="w-auto h-9"
                />
              </span>
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
            <div className="flex items-center mr-3">
              <ThemeChanger />
            </div>
            <div className="hidden mr-3 lg:flex nav__item">
              <Link href="tel:061511546592" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
                06151 15 465 92
              </Link>
            </div>
        </div>
                
        <Disclosure>
          {({ open }) => (
            <>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
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

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      item === "Startseite" ? (
                        <div key={index} className="w-full">
                          <button 
                            onClick={() => setShowStartseiteDropdown(!showStartseiteDropdown)}
                            className="w-full px-4 py-2 -ml-4 text-left text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none flex items-center justify-between"
                          >
                            {item}
                            <svg 
                              className={`w-4 h-4 transition-transform ${showStartseiteDropdown ? 'rotate-180' : ''}`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </button>
                          {showStartseiteDropdown && (
                            <div className="pl-4">
                              <Link href="/" className="block w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                                Hauptstartseite
                              </Link>
                              <Link href="/temp_startseite" className="block w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                                Alternative Startseite
                              </Link>
                            </div>
                          )}
                        </div>
                      ) : item === "Referenzen" ? (
                        <div key={index} className="w-full">
                          <button 
                            onClick={() => setShowReferenzenDropdown(!showReferenzenDropdown)}
                            className="w-full px-4 py-2 -ml-4 text-left text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none flex items-center justify-between"
                          >
                            {item}
                            <svg 
                              className={`w-4 h-4 transition-transform ${showReferenzenDropdown ? 'rotate-180' : ''}`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </button>
                          {showReferenzenDropdown && (
                            <div className="pl-4">
                              <Link href="/referenzen" className="block w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                                Referenzen
                              </Link>
                              <Link href="/referenzen/galerie" className="block w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                                Galerie
                              </Link>
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link key={index} href={getNavigationUrl(item)} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                          {item}
                        </Link>
                      )
                    ))}
                    <Link href="tel:061511546592" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">         
                        06151 15 465 92
                    </Link>
                  </>
                </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                {menu === "Startseite" ? (
                  <div className="relative group">
                    <button 
                      className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 flex items-center"
                    >
                      {menu}
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
                    <div className="absolute left-0 z-10 hidden pt-2 group-hover:block">
                      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-md py-1 w-48">
                        <Link href="/" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-gray-700">
                          Hauptstartseite
                        </Link>
                        <Link href="/temp_startseite" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-gray-700">
                          Alternative Startseite
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : menu === "Referenzen" ? (
                  <div className="relative group">
                    <button 
                      className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 flex items-center"
                    >
                      {menu}
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
                    <div className="absolute left-0 z-10 hidden pt-2 group-hover:block">
                      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-md py-1 w-48">
                        <Link href="/referenzen" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-gray-700">
                          Referenzen
                        </Link>
                        <Link href="/referenzen/galerie" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-gray-700">
                          Galerie
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link href={getNavigationUrl(menu)} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu}
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