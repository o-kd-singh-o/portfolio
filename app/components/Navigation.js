'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [presentationsOpen, setPresentationsOpen] = useState(false);
  const [workshopOpen, setWorkshopOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 p-4 sm:p-6 z-50 flex items-center gap-2 sm:gap-3">
      {/* Home Link */}
      <Link
        href="/"
        className="px-2.5 py-2 text-sm font-medium text-foreground hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
      >
        Home
      </Link>

      {/* Startup Week Presentations Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setPresentationsOpen(true)}
        onMouseLeave={() => setPresentationsOpen(false)}
      >
        <Link
          href="/startup-week-presentations"
          onClick={() => setPresentationsOpen(false)}
          className="px-3 sm:px-4 py-2 text-sm font-medium text-foreground hover:text-gray-600 dark:hover:text-gray-300 transition-colors inline-flex items-center gap-1.5"
        >
          Startup Week Presentations
          <svg
            className={`w-4 h-4 transition-transform duration-200 opacity-70 ${
              presentationsOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Link>

        {presentationsOpen && (
          <div className="absolute right-0 top-full pt-1 w-64 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden py-1">
              <Link
                href="/startup-week-presentations#plug-the-revenue-leaks"
                onClick={() => setPresentationsOpen(false)}
                className="block px-4 py-3 text-sm text-foreground hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Plug the Revenue Leaks
              </Link>
              <Link
                href="/startup-week-presentations#the-era-of-vibe-coding-is-over"
                onClick={() => setPresentationsOpen(false)}
                className="block px-4 py-3 text-sm text-foreground hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-t border-gray-100 dark:border-gray-700/60"
              >
                The Era of Vibe Coding is Over
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Workshop Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setWorkshopOpen(true)}
        onMouseLeave={() => setWorkshopOpen(false)}
      >
        <button
          onClick={() => setWorkshopOpen(!workshopOpen)}
          className="px-3 sm:px-4 py-2 text-sm font-medium text-foreground hover:text-gray-600 dark:hover:text-gray-300 transition-colors inline-flex items-center gap-1.5"
        >
          Workshop
          <svg
            className={`w-4 h-4 transition-transform duration-200 opacity-70 ${
              workshopOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {workshopOpen && (
          <div className="absolute right-0 top-full pt-1 w-56 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden py-1">
              <Link
                href="/workshops/build-fast-with-ai"
                onClick={() => setWorkshopOpen(false)}
                className="block px-4 py-3 text-sm text-foreground hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Build Fast with AI
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
