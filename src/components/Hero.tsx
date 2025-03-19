
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
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-theme-pink"
    >
      {/* Background elements */}
      <div className="absolute inset-0 flex">
        <div className="w-1/3 h-full bg-theme-pink"></div>
        <div className="w-1/3 h-full bg-black"></div>
        <div className="w-1/3 h-full bg-theme-gray"></div>
      </div>
      
      <div className="container px-6 md:px-8 lg:px-12 relative z-10 max-w-7xl mx-auto flex flex-col justify-center h-full pt-16 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left column - Text content - now smaller (2 columns instead of 3) */}
          <div className="flex flex-col text-left space-y-6 lg:col-span-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4 text-white">
              Domina tu próxima entrevista con IA
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed text-balance">
              Simulaciones realistas, feedback instantáneo y mejora continua para destacar en cualquier proceso de selección.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button 
                size="lg" 
                className="bg-theme-pink hover:bg-theme-pink/90 text-white px-8 h-12 text-base rounded-full shadow-lg shadow-theme-pink/20 hover:shadow-theme-pink/30 transition-all duration-300 group"
              >
                Empieza gratis ahora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 h-12 text-base rounded-full transition-all duration-300"
              >
                Ver demo
              </Button>
            </div>
          </div>
          
          {/* Right column - Video - now larger (3 columns instead of 2) */}
          <div className="glass-card p-4 md:p-6 animate-subtle-pulse w-full lg:col-span-3 z-10 bg-white/10 backdrop-blur-md">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-white/20 shadow-lg">
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/90 shadow-md flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <div className="w-0 h-0 border-t-10 border-t-transparent border-l-16 border-l-theme-pink border-b-10 border-b-transparent ml-2"></div>
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
