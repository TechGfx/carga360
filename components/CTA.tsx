import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

interface CTAProps {
  onOpenDemo: () => void;
}

const CTA: React.FC<CTAProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-20 bg-primary-900 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-800 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-accent-600 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          ¿Listo para profesionalizar tu logística?
        </h2>
        <p className="text-primary-100 text-xl mb-10 max-w-2xl mx-auto">
          Únete a las empresas que ya operan con Carga360. Solicita una demostración gratuita y descubre el potencial de tu flota.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={onOpenDemo}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-accent-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-500 transition-all shadow-xl shadow-accent-900/20 transform hover:-translate-y-1"
          >
            Solicitar Demo Gratuita
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border-2 border-primary-400 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
            <Phone className="h-5 w-5" />
            Hablar con un asesor
          </button>
        </div>
        
        <p className="mt-6 text-sm text-primary-300 font-medium">
          Sin compromiso. No se requiere tarjeta de crédito para la demo.
        </p>
      </div>
    </section>
  );
};

export default CTA;