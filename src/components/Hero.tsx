
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
      className="relative overflow-hidden h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(to right, #E6C6C6, #E6C6C6, #000000, #F7F7F7, #E0C7C7)'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute w-full h-full">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/30 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-2/3 right-1/5 w-2 h-2 bg-white/30 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container px-6 md:px-8 lg:px-12 relative z-10 max-w-7xl mx-auto flex flex-col justify-center h-full pt-16 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left column - Text content (smaller) */}
          <div className="flex flex-col text-left space-y-6 lg:col-span-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4 text-white">
              Domina tu próxima entrevista con IA
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-balance">
              Simulaciones realistas, feedback instantáneo y mejora continua para destacar en cualquier proceso de selección.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button 
                size="lg" 
                className="bg-[#DE9F9F] hover:bg-[#DE9F9F]/90 text-white px-6 h-12 text-base rounded-md shadow-lg transition-all duration-300 group"
              >
                Empieza gratis ahora
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 bg-transparent text-white hover:bg-white/10 h-12 text-base rounded-md transition-all duration-300"
              >
                Ver demo
              </Button>
            </div>
          </div>
          
          {/* Right column - Video (larger) */}
          <div className="glass-card p-4 md:p-6 w-full lg:col-span-3">
            <div className="relative aspect-video rounded-md overflow-hidden border border-gray-500/30 shadow-md">
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm shadow-md flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Color palette reference boxes at the bottom */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
        <div className="p-2 bg-[#DE9F9F] text-white text-xs rounded">
          #DE9F9F
        </div>
        <div className="p-2 bg-black text-white text-xs rounded">
          #000000
        </div>
        <div className="p-2 bg-[#F7F7F7] text-gray-800 text-xs rounded">
          #F7F7F7
        </div>
        <div className="p-2 bg-[#E0C7C7] text-gray-800 text-xs rounded">
          #E0C7C7
        </div>
      </div>
    </div>
  );
};

export default Hero;
