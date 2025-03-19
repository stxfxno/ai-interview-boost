
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="text-center max-w-md mx-auto glass-card p-10">
        <div className="text-6xl md:text-8xl font-bold text-primary mb-6">404</div>
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Página no encontrada</h1>
        <p className="text-gray-600 mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          <a href="/" className="inline-flex items-center">
            Volver al inicio
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
