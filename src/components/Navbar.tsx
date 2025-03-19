import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="text-xl font-semibold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                AI Interview
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Beneficios
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Cómo Funciona
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Precios
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-800 hover:text-primary">
              Iniciar Sesión
            </Button>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Registrarse
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a
              href="#benefits"
              className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Beneficios
            </a>
            <a
              href="#how-it-works"
              className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cómo Funciona
            </a>
            <a
              href="#pricing"
              className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Precios
            </a>
            <a
              href="#faq"
              className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="pt-2 flex flex-col space-y-3">
              <Button variant="ghost" className="w-full justify-center">
                Iniciar Sesión
              </Button>
              <Button className="w-full justify-center bg-primary text-white">
                Registrarse
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;