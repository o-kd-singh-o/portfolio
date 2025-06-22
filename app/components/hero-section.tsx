"use client";

import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Product Management is the intersection of{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technology, People & Business
            </span>
          </h2>
        </div>
        
        <div className="mb-12 animate-fade-in-delay">
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hi, I'm Kundan Deep (KD) Singh, a product manager transforming complex tech challenges into innovative products that drive growth.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
          <Button 
            onClick={() => scrollToSection('work')}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105"
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline" 
            size="lg"
            className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105"
          >
            Let's Connect
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
}