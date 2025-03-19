import React, { useEffect, useRef } from 'react';
import { ListOrdered, MessageSquare, BarChart, ArrowRight } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep = ({ number, icon, title, description, isLast = false }: ProcessStepProps) => (
  <div className="relative flex flex-col items-center text-center md:max-w-xs transform hover:scale-105 transition-transform duration-300">
    <div className="flex-shrink-0 mb-4">
      <div className="w-20 h-20 rounded-full bg-pink-50 flex items-center justify-center shadow-sm">
        <div className="w-10 h-10 flex items-center justify-center text-primary">
          {icon}
        </div>
      </div>
    </div>
    
    <div className="px-1 py-1 bg-pink-50 rounded-full text-primary text-sm font-medium mb-3">
      Paso {number}
    </div>
    
    <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
    
    <p className="text-gray-600 text-sm">
      {description}
    </p>
    
    {!isLast && (
      <div className="hidden md:block absolute -right-8 top-20 text-primary transform rotate-0">
        <ArrowRight size={36} className="text-primary/40" />
      </div>
    )}
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
      className="w-full bg-white"
      ref={processRef}
    >
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-pink-50 rounded-full">
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
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-16">
            <ProcessStep 
              number={1}
              icon={<ListOrdered size={28} />}
              title="Elige tu tipo de entrevista"
              description="Selecciona entre entrevistas técnicas, conductuales o específicas para un puesto y nivel de experiencia."
            />
            
            <ProcessStep 
              number={2}
              icon={<MessageSquare size={28} />}
              title="Responde preguntas generadas por IA"
              description="Nuestra IA te plantea preguntas relevantes y desafiantes, simulando situaciones reales."
            />
            
            <ProcessStep 
              number={3}
              icon={<BarChart size={28} />}
              title="Recibe análisis detallado"
              description="Obtén feedback inmediato sobre tus respuestas, comunicación y áreas de mejora."
              isLast={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;