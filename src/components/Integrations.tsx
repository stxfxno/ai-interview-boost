import React from 'react';

// Custom Icon components since Lucide React doesn't have these specific brand icons
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const NotionIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <path d="M7 7h10"></path>
    <path d="M7 12h10"></path>
    <path d="M7 17h6"></path>
  </svg>
);

interface IntegrationItemProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const IntegrationItem = ({ icon, name, description }: IntegrationItemProps) => (
  <div className="relative group">
    <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover-lift transition-all duration-300 h-full flex flex-col items-center text-center">
      <div className="mb-4 w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-primary">
        <div className="w-8 h-8">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{name}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const Integrations = () => {
  const integrations = [
    {
      icon: <LinkedInIcon />,
      name: "LinkedIn",
      description: "Conecta tu perfil para personalizar entrevistas basadas en tu experiencia profesional."
    },
    {
      icon: <YouTubeIcon />,
      name: "YouTube",
      description: "Accede a tutoriales exclusivos y consejos de expertos en preparación de entrevistas."
    },
    {
      icon: <NotionIcon />,
      name: "Notion",
      description: "Exporta tus resultados y planes de estudio a tu espacio de trabajo personal."
    }
  ];

  return (
    <section className="w-full bg-blue-50/30">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-blue-100/50 rounded-full">
            <span className="text-sm font-medium text-primary">Integraciones</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Conecta con tus herramientas favoritas
          </h2>
          <p className="text-xl text-gray-600">
            Nuestra plataforma se integra perfectamente con otras aplicaciones para mejorar tu experiencia de preparación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
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
              <IntegrationItem {...integration} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;