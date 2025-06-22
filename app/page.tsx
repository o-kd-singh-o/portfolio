"use client";

import Navigation from './components/navigation';
import HeroSection from './components/hero-section';
import PMDiagram from './components/pm-diagram';
import ShowcaseSections from './components/showcase-sections';
import Footer from './components/footer';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <PMDiagram />
      <ShowcaseSections />
      <Footer />
    </div>
  );
}