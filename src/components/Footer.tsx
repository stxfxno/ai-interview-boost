
import React from 'react';
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-5">
              <span className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                AI Interview
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              La plataforma de inteligencia artificial que te ayuda a prepararte para tus entrevistas laborales y destacar en cualquier proceso de selección.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Beneficios</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">Cómo funciona</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Precios</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Empleo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Prensa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="flex-shrink-0 mr-3 mt-1 text-gray-400" />
                <span className="text-gray-400">Av. Innovación 1234, Ciudad Tech</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="flex-shrink-0 mr-3 text-gray-400" />
                <span className="text-gray-400">+34 91 123 45 67</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="flex-shrink-0 mr-3 text-gray-400" />
                <a href="mailto:info@aiinterview.com" className="text-gray-400 hover:text-white transition-colors">
                  info@aiinterview.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AI Interview. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacidad</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Términos</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
