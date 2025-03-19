import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <div 
      id="hero"
      ref={heroRef}
      className="relative overflow-hidden min-h-screen flex items-center bg-white"
    >
      <div className="container px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 max-w-7xl mx-auto flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-center">
          {/* Left column - Text content */}
          <div className="flex flex-col text-center lg:text-left space-y-5 lg:col-span-2 mx-auto lg:mx-0 max-w-lg lg:max-w-none">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Domina tu próxima entrevista con IA
            </h1>
            
            <p className="text-lg md:text-xl text-theme-black leading-relaxed text-balance">
              Simulaciones realistas, feedback instantáneo y mejora continua para destacar en cualquier proceso de selección.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 h-12 text-base rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
              >
                Empieza gratis ahora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 h-12 text-base rounded-full transition-all duration-300"
              >
                Ver demo
              </Button>
            </div>
          </div>
          
          {/* Right column - Video */}
          <div className="p-3 w-full lg:col-span-3 z-10">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-200 shadow-lg scale-110">
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/90 shadow-md flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <div className="w-0 h-0 border-t-10 border-t-transparent border-l-16 border-l-primary border-b-10 border-b-transparent ml-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;