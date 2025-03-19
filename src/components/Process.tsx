
import React, { useEffect, useRef } from 'react';
import { ListOrdered, MessageSquare, BarChart } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep = ({ number, icon, title, description, isLast = false }: ProcessStepProps) => (
  <div className="relative flex flex-col md:flex-row items-center md:items-start md:space-x-6">
    <div className="flex-shrink-0 z-10">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center border-4 border-blue-100 shadow-sm">
        <div className="w-full h-full rounded-full bg-blue-50 flex items-center justify-center overflow-hidden">
          {icon}
        </div>
      </div>
    </div>
    
    {!isLast && (
      <div className="absolute top-16 md:top-10 left-1/2 md:left-10 w-px md:w-px h-24 md:h-[calc(100%-60px)] bg-blue-200 -translate-x-1/2 md:translate-x-0"></div>
    )}
    
    <div className="mt-6 md:mt-0 text-center md:text-left md:flex-grow pt-2">
      <div className="inline-block mb-3 px-4 py-1 bg-blue-50 rounded-full text-primary text-sm font-medium">
        Paso {number}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 max-w-lg">{description}</p>
    </div>
  </div>
);

const Process = () => {
  const processRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (processRef.current) {
      observer.observe(processRef.current);
    }
    
    return () => {
      if (processRef.current) {
        observer.unobserve(processRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="how-it-works" 
      className="section-padding bg-gradient-to-b from-white to-blue-50"
      ref={processRef}
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block mb-3 px-3 py-1 bg-blue-100/50 rounded-full">
          <span className="text-sm font-medium text-primary">Proceso simple</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Cómo funciona nuestra plataforma
        </h2>
        <p className="text-xl text-gray-600">
          En solo tres pasos, estarás preparado para enfrentar cualquier entrevista con seguridad y excelente desempeño.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-16 md:space-y-24 px-4">
          <ProcessStep 
            number={1}
            icon={<ListOrdered size={32} className="text-primary" />}
            title="Elige tu tipo de entrevista"
            description="Selecciona entre entrevistas técnicas, conductuales o específicas para un puesto y nivel de experiencia. Personalizamos cada simulación según tus necesidades."
          />
          
          <ProcessStep 
            number={2}
            icon={<MessageSquare size={32} className="text-primary" />}
            title="Responde preguntas generadas por IA"
            description="Nuestra IA te plantea preguntas relevantes y desafiantes, simulando diferentes estilos de entrevistadores y situaciones reales de entrevista."
          />
          
          <ProcessStep 
            number={3}
            icon={<BarChart size={32} className="text-primary" />}
            title="Recibe análisis detallado y recomendaciones"
            description="Obtén feedback inmediato sobre tus respuestas, comunicación y áreas de mejora, junto con recursos específicos para prepararte mejor."
            isLast={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
