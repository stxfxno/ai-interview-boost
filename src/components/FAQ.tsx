
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => (
  <div className="border-b border-gray-200 last:border-0">
    <button
      className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
      onClick={onClick}
    >
      <span className="text-lg font-medium text-gray-900">{question}</span>
      <ChevronDown
        className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
          isOpen ? 'transform rotate-180' : ''
        }`}
      />
    </button>
    
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
      }`}
    >
      <p className="text-gray-600">{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Cómo me ayuda la IA a preparar mis entrevistas?",
      answer: "Nuestra IA analiza miles de entrevistas reales para generar preguntas relevantes según el puesto que buscas. Evalúa tus respuestas considerando claridad, estructura, relevancia y otros factores clave para proporcionar feedback personalizado y recomendaciones de mejora específicas."
    },
    {
      question: "¿Las entrevistas simuladas son parecidas a las reales?",
      answer: "Sí, nuestras simulaciones están basadas en entrevistas reales de miles de empresas. La IA personaliza las preguntas según la industria, puesto y nivel de experiencia, creando escenarios muy similares a los que enfrentarás en entrevistas reales."
    },
    {
      question: "¿Puedo acceder a las entrevistas desde cualquier dispositivo?",
      answer: "Absolutamente. Nuestra plataforma es completamente responsiva y funciona en cualquier dispositivo con conexión a internet: computadoras, tablets y smartphones. Puedes prepararte dondequiera que estés."
    },
    {
      question: "¿Qué tipos de entrevistas puedo practicar?",
      answer: "Ofrecemos simulaciones para entrevistas técnicas específicas por rol (desarrollo, datos, diseño, etc.), entrevistas conductuales (basadas en competencias), entrevistas de casos (consultoría) y entrevistas específicas por empresa."
    },
    {
      question: "¿Cómo funciona el sistema de feedback?",
      answer: "Después de cada respuesta, nuestra IA analiza múltiples aspectos: contenido, estructura, relevancia, comunicación verbal y no verbal (en entrevistas con video). Recibes una puntuación detallada con sugerencias específicas de mejora y ejemplos de respuestas efectivas."
    },
    {
      question: "¿Puedo cancelar mi suscripción en cualquier momento?",
      answer: "Por supuesto. No hay contratos de permanencia. Puedes cancelar tu suscripción en cualquier momento desde tu perfil y seguirás teniendo acceso hasta el final del período facturado."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block mb-3 px-3 py-1 bg-blue-50 rounded-full">
          <span className="text-sm font-medium text-primary">Preguntas frecuentes</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Todo lo que necesitas saber
        </h2>
        <p className="text-xl text-gray-600">
          Encuentra respuestas a las preguntas más comunes sobre nuestra plataforma.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>
      
      <div className="text-center mt-10 max-w-xl mx-auto">
        <p className="text-gray-600 mb-4">
          ¿No encuentras lo que buscas? Estamos aquí para ayudarte.
        </p>
        <button className="inline-flex items-center text-primary font-medium hover:underline">
          Contacta con nuestro equipo de soporte
        </button>
      </div>
    </section>
  );
};

export default FAQ;
