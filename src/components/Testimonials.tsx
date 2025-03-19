
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  rating: number;
}

const TestimonialCard = ({ quote, author, position, rating }: TestimonialProps) => (
  <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover-lift transition-all duration-300 h-full flex flex-col">
    <div className="flex mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star 
          key={i} 
          size={18} 
          className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"} 
        />
      ))}
    </div>
    <blockquote className="text-gray-700 mb-6 flex-grow">"{quote}"</blockquote>
    <div className="mt-auto">
      <div className="font-medium text-gray-900">{author}</div>
      <div className="text-sm text-gray-500">{position}</div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "La plataforma me ayudó a conseguir mi trabajo soñado. El feedback de la IA identificó patrones en mis respuestas que nunca había notado, lo que me permitió mejorar significativamente.",
      author: "María García",
      position: "Desarrolladora Frontend",
      rating: 5
    },
    {
      quote: "Practicar entrevistas técnicas con esta herramienta hizo toda la diferencia. Las preguntas eran muy similares a las que me hicieron en la entrevista real. El análisis detallado de mis respuestas fue invaluable.",
      author: "Carlos Rodríguez",
      position: "Ingeniero de Software",
      rating: 5
    },
    {
      quote: "Después de tres rechazos en entrevistas, utilicé esta plataforma durante dos semanas. En mi siguiente entrevista, no solo me sentí más preparada sino que finalmente obtuve una oferta.",
      author: "Laura Martínez",
      position: "Product Manager",
      rating: 4
    },
    {
      quote: "Las simulaciones son increíblemente realistas. La IA supo exactamente dónde estaban mis puntos débiles y me dio consejos específicos para mejorar. La inversión valió completamente la pena.",
      author: "Alejandro Herrera",
      position: "Data Scientist",
      rating: 5
    },
    {
      quote: "Prepararse para una entrevista nunca había sido tan sencillo. Las recomendaciones personalizadas y el seguimiento de progreso me mantuvieron motivada durante todo el proceso.",
      author: "Sofía Díaz",
      position: "UX Designer",
      rating: 5
    },
    {
      quote: "La herramienta me permitió practicar en escenarios específicos para el rol que buscaba. Las preguntas eran desafiantes y relevantes, y el feedback me ayudó a estructurar mejor mis respuestas.",
      author: "Diego Sánchez",
      position: "Marketing Manager",
      rating: 4
    }
  ];

  return (
    <section className="section-padding">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block mb-3 px-3 py-1 bg-blue-50 rounded-full">
          <span className="text-sm font-medium text-primary">Testimonios</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Historias de éxito de nuestros usuarios
        </h2>
        <p className="text-xl text-gray-600">
          Descubre cómo nuestra plataforma ha ayudado a profesionales a destacar en sus entrevistas y avanzar en sus carreras.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="transition-all duration-500"
            style={{ 
              animationName: 'fade-in-up',
              animationDuration: '0.7s',
              animationFillMode: 'both',
              animationDelay: `${index * 0.1}s`
            }}
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
