"use client";

import { useState, useEffect } from 'react';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              KD Singh
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('work')}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                My Work
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Community
              </button>
              <button 
                onClick={() => scrollToSection('outside-work')}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Outside Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}