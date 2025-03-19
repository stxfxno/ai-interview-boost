
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
  <div className="relative flex flex-col items-center text-center space-y-4">
    <div className="flex-shrink-0 z-10">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center border-4 border-theme-pink/30 shadow-sm">
        <div className="w-full h-full rounded-full bg-theme-pink/10 flex items-center justify-center overflow-hidden">
          {icon}
        </div>
      </div>
    </div>
    
    {!isLast && (
      <div className="absolute top-20 left-1/2 h-12 w-px bg-theme-pink/30 -translate-x-1/2 hidden md:block"></div>
    )}
    
    <div className="text-center max-w-sm mx-auto">
      <div className="inline-block mb-3 px-4 py-1 bg-theme-pink/10 rounded-full text-theme-pink text-sm font-medium">
        Paso {number}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-theme-black">{title}</h3>
      <p className="text-theme-darkgray">{description}</p>
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
      className="section-padding bg-white"
      ref={processRef}
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block mb-3 px-3 py-1 bg-theme-pink/10 rounded-full">
          <span className="text-sm font-medium text-theme-pink">Proceso simple</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-theme-black">
          Cómo funciona nuestra plataforma
        </h2>
        <p className="text-xl text-theme-darkgray">
          En solo tres pasos, estarás preparado para enfrentar cualquier entrevista con seguridad y excelente desempeño.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-6">
          <ProcessStep 
            number={1}
            icon={<ListOrdered size={32} className="text-theme-pink" />}
            title="Elige tu tipo de entrevista"
            description="Selecciona entre entrevistas técnicas, conductuales o específicas para un puesto y nivel de experiencia."
          />
          
          <ProcessStep 
            number={2}
            icon={<MessageSquare size={32} className="text-theme-pink" />}
            title="Responde preguntas generadas por IA"
            description="Nuestra IA te plantea preguntas relevantes y desafiantes, simulando situaciones reales."
          />
          
          <ProcessStep 
            number={3}
            icon={<BarChart size={32} className="text-theme-pink" />}
            title="Recibe análisis detallado"
            description="Obtén feedback inmediato sobre tus respuestas, comunicación y áreas de mejora."
            isLast={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
