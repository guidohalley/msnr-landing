'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDown, Filter, Search } from 'lucide-react';

interface SearchFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  filter: 'all' | 'up' | 'down';
  onFilterChange: (value: 'all' | 'up' | 'down') => void;
}

export function SearchFilter({
  search,
  onSearchChange,
  filter,
  onFilterChange,
}: SearchFilterProps) {
  const filters = [
    { value: 'all', label: 'Todos los sitios' },
    { value: 'up', label: 'Sitios activos' },
    { value: 'down', label: 'Sitios caídos' },
  ] as const;

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar sitio..."
          className="h-9 rounded-lg border border-gray-200 bg-white pl-9 pr-4 text-sm text-gray-900 placeholder:text-gray-500 focus:border-[#E2FF3F] focus:outline-none focus:ring-1 focus:ring-[#E2FF3F] dark:border-gray-800 dark:bg-black dark:text-white dark:placeholder:text-gray-400"
        />
      </div>

      <Menu as="div" className="relative">
        <Menu.Button className="inline-flex h-9 items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-800 dark:bg-black dark:text-white dark:hover:bg-gray-900">
          <Filter className="h-4 w-4" />
          <span>{filters.find((f) => f.value === filter)?.label}</span>
          <ChevronDown className="h-4 w-4" />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg border border-gray-200 bg-white py-1 shadow-lg focus:outline-none dark:border-gray-800 dark:bg-black">
            {filters.map((item) => (
              <Menu.Item key={item.value}>
                {({ active }) => (
                  <button
                    onClick={() => onFilterChange(item.value)}
                    className={`
                      block w-full px-4 py-2 text-left text-sm
                      ${
                        active
                          ? 'bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white'
                          : 'text-gray-700 dark:text-gray-300'
                      }
                      ${
                        filter === item.value &&
                        'bg-[#E2FF3F]/10 text-[#E2FF3F] dark:bg-[#E2FF3F]/10 dark:text-[#E2FF3F]'
                      }
                    `}
                  >
                    {item.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
