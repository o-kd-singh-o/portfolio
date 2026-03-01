'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 p-6 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsOpen(true)}
          className="px-4 py-2 text-sm font-medium text-foreground hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          Workshop
        </button>

        {isOpen && (
          <div
            onMouseLeave={() => setIsOpen(false)}
            className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <Link
              href="/workshops/build-fast-with-ai"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-sm text-foreground hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              Build Fast with AI
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
