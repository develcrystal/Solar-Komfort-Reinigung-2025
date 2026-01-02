"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure, Popover } from "@headlessui/react";
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes';
import { navigation } from './data'; // Import navigation data
import { MegaMenu } from "./MegaMenu"; // Import the new MegaMenu component

// The renderIcon function can be kept as it is, or further improved if needed.
const renderIcon = (icon: string): JSX.Element | null => {
  if (icon.startsWith('/')) {
    return <Image src={icon} alt="" width={22} height={22} />;
  }
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
    return <Image src={mapped} alt="" width={22} height={22} />;
  }
  return <span>{icon}</span>;
};

export const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render the dynamic logo after client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <div className="w-full bg-white dark:bg-neutral-900 shadow-md">
      <nav className="container relative flex flex-wrap items-center justify-between py-4 mx-auto lg:justify-between px-container-px z-50 max-w-8xl">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={mounted && theme === 'dark' ? '/img/inverted_komfort-logo-cropped.webp' : '/img/komfort-logo-cropped.webp'}
            width={300}
            height={90}
            alt="Komfort Gebäudeservice24"
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop Mega Menu - Centered */}
        <div className="hidden xl:flex xl:items-center flex-1 justify-center">
          <Popover.Group as="ul" className="items-center justify-center flex list-none gap-2">
            {navigation.map((menu, index) => (

              <li key={index}>
                {menu.submenu ? (
                  <MegaMenu title={menu.name} items={menu.submenu} columns={menu.name === 'Gebäudereinigung' ? 4 : 3} />
                ) : (
                  <Link
                    href={menu.href}
                    className="px-3 py-2 text-base font-medium text-neutral-700 dark:text-neutral-300 rounded-lg hover:text-primary dark:hover:text-accent transition-colors duration-200"
                  >
                    {menu.name}
                  </Link>
                )}
              </li>
            ))}
          </Popover.Group>
        </div>


        {/* Right Block: Button, Theme, Mobile Menu */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Kostenrechner Button - Desktop */}
          <div className="hidden xl:block">
            <Link
              href="/kostenrechner"
              className="px-6 py-2 text-base font-medium text-black bg-accent rounded-md hover:bg-accent/90 transition-colors whitespace-nowrap"
            >
              Kostenrechner
            </Link>
          </div>
          {/* Theme Switcher */}
          <ThemeChanger />
          {/* Mobile Menu */}
          <div className="xl:hidden">
            <Disclosure>
              {({ open, close }) => (
                <div>
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 text-neutral-500 rounded-md hover:text-primary focus:text-primary focus:bg-primary/10 focus:outline-none dark:text-neutral-300 dark:focus:bg-neutral-700 touch-manipulation"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {open ? (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.829z"
                        />
                      ) : (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>

                  <Disclosure.Panel className="fixed left-0 right-0 w-full bg-white dark:bg-neutral-900 shadow-lg py-5 px-4 sm:px-6 z-40 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto xl:absolute xl:top-full xl:left-1/2 xl:-translate-x-1/2 xl:w-auto xl:max-w-none xl:max-h-none xl:overflow-visible xl:mt-2">
                    <div className="flex flex-col gap-y-1">
                      {navigation.map((item, index) => (
                        <div key={index} className="w-full">
                          {item.submenu ? (
                            <div>
                              <button
                                onClick={() => toggleDropdown(item.name)}
                                className="w-full px-3 py-3 text-left font-medium text-neutral-600 dark:text-neutral-200 rounded-md hover:text-primary focus:text-primary focus:bg-primary/10 dark:focus:bg-neutral-800 focus:outline-none flex items-center justify-between touch-manipulation"
                              >
                                {item.name}
                                <svg
                                  className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                              </button>
                              {activeDropdown === item.name && (
                                <div className="pl-4 pt-2 pb-2 flex flex-col gap-y-1">
                                  {item.submenu.map((subItem, subIndex) => (
                                    <Link
                                      key={subIndex}
                                      href={subItem.href}
                                      onClick={() => close()}
                                      className="block w-full px-3 py-2 text-neutral-500 rounded-md dark:text-neutral-300 hover:text-primary hover:bg-primary/10 dark:hover:text-accent dark:focus:bg-neutral-800 focus:outline-none touch-manipulation"
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={() => close()}
                              className="w-full px-3 py-3 font-medium text-neutral-600 dark:text-neutral-200 rounded-md hover:text-primary hover:bg-primary/10 dark:focus:bg-neutral-800 focus:outline-none block touch-manipulation"
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                      <Link href="/kostenrechner" onClick={() => close()} className="w-full px-6 py-3 mt-3 text-center text-black bg-accent rounded-md hover:bg-accent/90 transition-colors touch-manipulation">
                        Kostenrechner
                      </Link>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        </div>
      </nav>
    </div>
  );
};