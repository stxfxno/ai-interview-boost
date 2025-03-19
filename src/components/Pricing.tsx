
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PlanFeature {
  text: string;
  available: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  buttonText: string;
  popular?: boolean;
}

const PricingCard = ({ plan }: { plan: PricingPlan }) => (
  <div className={`relative rounded-2xl p-8 ${plan.popular ? 'bg-gradient-to-b from-blue-50 to-white border-blue-200 shadow-lg shadow-blue-200/20' : 'bg-white border-gray-200'} border transition-all duration-300 hover-lift overflow-hidden`}>
    {plan.popular && (
      <div className="absolute top-0 right-0">
        <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg shadow-sm">
          Recomendado
        </div>
      </div>
    )}
    
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
      <p className="text-gray-600 text-sm mb-5">{plan.description}</p>
      <div className="flex items-baseline mb-2">
        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
        {plan.price !== "Gratis" && <span className="text-gray-500 ml-2">/{plan.period}</span>}
      </div>
    </div>
    
    <div className="space-y-3 mb-8">
      {plan.features.map((feature, index) => (
        <div key={index} className="flex items-start">
          <div className={`flex-shrink-0 mt-1 ${feature.available ? 'text-primary' : 'text-gray-300'}`}>
            <Check size={18} />
          </div>
          <span className={`ml-3 text-sm ${feature.available ? 'text-gray-600' : 'text-gray-400'}`}>
            {feature.text}
          </span>
        </div>
      ))}
    </div>
    
    <Button 
      className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
    >
      {plan.buttonText}
    </Button>
  </div>
);

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  
  const plans: PricingPlan[] = [
    {
      name: "Gratis",
      price: "Gratis",
      period: "",
      description: "Ideal para probar nuestra plataforma",
      buttonText: "Comenzar gratis",
      features: [
        { text: "5 entrevistas al mes", available: true },
        { text: "Análisis básico de respuestas", available: true },
        { text: "Banco de 100 preguntas", available: true },
        { text: "Feedback automatizado", available: true },
        { text: "Soporte por email", available: true },
        { text: "Recomendaciones personalizadas", available: false },
        { text: "Entrevistas específicas por empresa", available: false },
        { text: "Seguimiento de progreso avanzado", available: false },
      ],
    },
    {
      name: "Pro",
      price: billingPeriod === 'monthly' ? "$9.99" : "$7.99",
      period: billingPeriod === 'monthly' ? "mes" : "mes (facturado anualmente)",
      description: "Para profesionales que buscan mejorar",
      buttonText: "Suscribirme a Pro",
      popular: true,
      features: [
        { text: "20 entrevistas al mes", available: true },
        { text: "Análisis detallado de respuestas", available: true },
        { text: "Banco de 500+ preguntas", available: true },
        { text: "Feedback avanzado con sugerencias", available: true },
        { text: "Soporte prioritario", available: true },
        { text: "Recomendaciones personalizadas", available: true },
        { text: "Entrevistas específicas por empresa", available: true },
        { text: "Seguimiento de progreso avanzado", available: false },
      ],
    },
    {
      name: "Premium",
      price: billingPeriod === 'monthly' ? "$19.99" : "$15.99",
      period: billingPeriod === 'monthly' ? "mes" : "mes (facturado anualmente)",
      description: "La experiencia completa y sin límites",
      buttonText: "Obtener Premium",
      features: [
        { text: "Entrevistas ilimitadas", available: true },
        { text: "Análisis exhaustivo con IA avanzada", available: true },
        { text: "Acceso a todas las preguntas", available: true },
        { text: "Feedback personalizado con coach virtual", available: true },
        { text: "Soporte 24/7", available: true },
        { text: "Recomendaciones personalizadas", available: true },
        { text: "Entrevistas específicas por empresa", available: true },
        { text: "Seguimiento de progreso avanzado", available: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-blue-50/50">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-block mb-3 px-3 py-1 bg-blue-100/50 rounded-full">
          <span className="text-sm font-medium text-primary">Planes para todos</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Elige el plan que mejor se adapte a ti
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Ofrecemos diferentes opciones para adaptarse a tus necesidades de preparación para entrevistas.
        </p>
        
        <div className="inline-flex p-1 bg-gray-100 rounded-lg">
          <button 
            className={`px-4 py-2 text-sm rounded-md transition-all ${billingPeriod === 'monthly' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            onClick={() => setBillingPeriod('monthly')}
          >
            Facturación mensual
          </button>
          <button 
            className={`px-4 py-2 text-sm rounded-md transition-all ${billingPeriod === 'yearly' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            onClick={() => setBillingPeriod('yearly')}
          >
            Facturación anual <span className="text-green-600 font-medium">-20%</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="transform transition-all duration-500"
            style={{ 
              animationName: 'fade-in-up',
              animationDuration: '0.5s',
              animationFillMode: 'both',
              animationDelay: `${index * 0.1}s`
            }}
          >
            <PricingCard plan={plan} />
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600">
          ¿Necesitas un plan para equipos o empresas? <a href="#" className="text-primary font-medium hover:underline">Contáctanos</a> para una solución personalizada.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
