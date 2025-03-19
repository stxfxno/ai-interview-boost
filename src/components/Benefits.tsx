
import React from 'react';
import { Check, BarChart2, Brain, Lightbulb, PieChart, LineChart } from 'lucide-react';

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitItem = ({ icon, title, description }: BenefitItemProps) => (
  <div className="flex items-start space-x-4 p-6 rounded-2xl hover-lift bg-white border border-theme-pink/10 shadow-sm">
    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-theme-pink/10 flex items-center justify-center text-theme-pink">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2 text-theme-black">{title}</h3>
      <p className="text-theme-darkgray">{description}</p>
    </div>
  </div>
);

const Benefits = () => {
  const benefits = [
    {
      icon: <Check className="w-6 h-6" />,
      title: "Simulaciones realistas",
      description: "Entrevistas adaptadas a cada puesto y empresa con preguntas personalizadas."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Feedback con IA",
      description: "Análisis detallado de tu comunicación verbal y respuestas técnicas."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Recomendaciones de estudio",
      description: "Materiales específicos para mejorar en tus áreas de oportunidad."
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Banco de preguntas",
      description: "Accede a miles de preguntas reales categorizadas por rol y nivel."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Seguimiento de progreso",
      description: "Visualiza tu evolución y puntos de mejora con métricas claras."
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Informes detallados",
      description: "Recibe un análisis profundo de tus fortalezas y debilidades."
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block mb-3 px-3 py-1 bg-theme-pink/10 rounded-full">
          <span className="text-sm font-medium text-theme-pink">Por qué elegirnos</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-theme-black">
          Prepárate con ventaja para cualquier entrevista
        </h2>
        <p className="text-xl text-theme-darkgray">
          Nuestra plataforma impulsada por IA te proporciona todas las herramientas para destacar en tu próximo proceso de selección.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="transform transition-all duration-500"
            style={{ 
              animationName: 'fade-in-up',
              animationDuration: '0.7s',
              animationFillMode: 'both',
              animationDelay: `${index * 0.1}s`
            }}
          >
            <BenefitItem {...benefit} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
