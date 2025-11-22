import Link from "next/link";
import Image from "next/image";
import { Fragment, useRef } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

type MenuItem = {
  name: string;
  href: string;
  description?: string;
  icon?: string | JSX.Element;
  submenu?: MenuItem[];
};

type MegaMenuProps = {
  title: string;
  items: MenuItem[];
  columns?: number;
};

export const MegaMenu = ({ title, items, columns = 3 }: MegaMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = (button: HTMLElement) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    button.click();
  };

  const handleMouseLeave = (button: HTMLElement) => {
    timeoutRef.current = setTimeout(() => {
      button.click();
    }, 150);
  };

  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <div
            ref={menuRef}
            onMouseEnter={() => {
              const button = menuRef.current?.querySelector('button') as HTMLElement;
              if (button) handleMouseEnter(button);
            }}
            onMouseLeave={() => {
              const button = menuRef.current?.querySelector('button') as HTMLElement;
              if (button && !menuRef.current?.querySelector('[data-headlessui-state*="open"]')) {
                handleMouseLeave(button);
              }
            }}
          >
            <Popover.Button
              className={`
                ${open ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}
                group inline-flex items-center rounded-md text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 px-3 py-2 transition-colors duration-200
              `}
            >
              <span>{title}</span>
              <ChevronDownIcon
                className={`
                  ${open ? 'rotate-180 text-blue-600 dark:text-blue-400' : 'text-gray-500'}
                  ml-1 h-5 w-5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-transform duration-200
                `}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className={`absolute left-1/2 z-10 mt-3 w-screen ${columns === 4 ? 'max-w-6xl' : 'max-w-4xl'} -translate-x-1/2 transform px-4 sm:px-0`}>
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className={`relative grid gap-6 bg-white dark:bg-gray-800 p-6 auto-rows-fr ${columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
                    {items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => close()}
                        className="group -m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 h-full"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-blue-500 text-white group-hover:bg-blue-600 transition-colors duration-200">
                          {typeof item.icon === 'string' && item.icon.startsWith('/') ? (
                            <Image
                              src={item.icon}
                              alt=""
                              width={20}
                              height={20}
                              className="h-5 w-5"
                            />
                          ) : (
                            <span className="text-lg">{item.icon}</span>
                          )}
                        </div>
                        <div className="ml-4 flex-1">
                          <p className="text-base font-medium text-gray-900 dark:text-white line-clamp-2">
                            {item.name}
                          </p>
                          {item.description && (
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">Unsere Hauptleistungen</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {/* Gebäudereinigung */}
                        <Link
                          href="/gebaeudereinigung/dachreinigung"
                          className="flex flex-col items-center p-3 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                        >
                          <div className="mb-2">
                            <Image
                              src="/img/kundenbilder/Dachreinigung.webp"
                              alt="Dachreinigung"
                              width={80}
                              height={60}
                              className="rounded object-cover"
                            />
                          </div>
                          <span className="text-sm font-medium text-center text-blue-600 dark:text-blue-400 group-hover:underline">
                            Gebäudereinigung
                          </span>
                        </Link>

                        {/* Gebäudeservice */}
                        <Link
                          href="/gebaeudeservice/hausmeisterservice"
                          className="flex flex-col items-center p-3 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                        >
                          <div className="mb-2">
                            <Image
                              src="/img/kundenbilder/Haus.webp"
                              alt="Gebäudeservice"
                              width={80}
                              height={60}
                              className="rounded object-cover"
                            />
                          </div>
                          <span className="text-sm font-medium text-center text-blue-600 dark:text-blue-400 group-hover:underline">
                            Gebäudeservice
                          </span>
                        </Link>

                        {/* Facility Management */}
                        <Link
                          href="/facility-management/angebot"
                          onClick={() => close()}
                          className="flex flex-col items-center p-3 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                        >
                          <div className="mb-2">
                            <Image
                              src="/img/kundenbilder/Industriereinigung.webp"
                              alt="Facility Management"
                              width={80}
                              height={60}
                              className="rounded object-cover"
                            />
                          </div>
                          <span className="text-sm font-medium text-center text-blue-600 dark:text-blue-400 group-hover:underline">
                            Facility Management
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </div>
        </>
      )}
    </Popover>
  );
};

export default MegaMenu;
