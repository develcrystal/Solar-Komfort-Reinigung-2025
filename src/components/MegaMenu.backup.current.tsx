import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
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
  // Vereinfachte Implementation ohne Array-Chunks
  const itemsPerColumn = Math.ceil(items.length / columns);
  const columnItems: MenuItem[][] = [];
  
  // Erstelle Spalten
  for (let col = 0; col < columns; col++) {
    const start = col * itemsPerColumn;
    const end = start + itemsPerColumn;
    columnItems.push(items.slice(start, end));
  }

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
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
                <div className={`relative grid gap-6 bg-white dark:bg-gray-800 p-6 ${columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
                  {columnItems.map((column, colIndex) => (
                    <div key={colIndex} className="space-y-4">
                      {column.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group -m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
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
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-white">
                              {item.name}
                            </p>
                            {item.description && (
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4">
                  <div className="text-center">
                    <Link
                      href="/dienstleistungen"
                      className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      Alle Dienstleistungen anzeigen <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default MegaMenu;