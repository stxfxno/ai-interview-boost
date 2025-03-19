
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
      ref={heroRef}
      className="relative overflow-hidden min-h-[90vh] flex items-center justify-center"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(236, 246, 255, 0.8) 0%, rgba(224, 242, 254, 0.5) 45%, rgba(224, 231, 255, 0.2) 100%)'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100/60 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl"></div>
      
      <div className="absolute w-full h-full">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-blue-400/80 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-300/60 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-300/50 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-2/3 right-1/5 w-2 h-2 bg-blue-400/70 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-white/50 backdrop-blur-sm border border-blue-100/80 rounded-full">
            <span className="text-sm font-medium text-blue-700">La IA que potencia tu carrera profesional</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-800 inline-block text-transparent bg-clip-text">
            Domina tu próxima entrevista con IA
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed text-balance">
            Simulaciones realistas, feedback instantáneo y mejora continua para destacar en cualquier proceso de selección.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 group"
            >
              Empieza gratis ahora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 hover:bg-gray-100/50 h-14 text-lg rounded-full transition-all duration-300"
            >
              Ver demo
            </Button>
          </div>
          
          <div className="mt-16 md:mt-24 max-w-4xl mx-auto glass-card p-6 md:p-8 animate-subtle-pulse">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-blue-100/80 shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-blue-100/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 shadow-md flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1"></div>
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
