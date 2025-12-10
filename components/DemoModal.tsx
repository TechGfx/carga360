import React, { FormEvent } from 'react';
import { X, Loader2 } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, onSubmit, isSubmitting }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={!isSubmitting ? onClose : undefined}
      ></div>
      
      {/* Modal */}
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl relative z-10 transform transition-all scale-100 animate-[fade-in-up_0.3s_ease-out]">
        <button 
          onClick={onClose} 
          disabled={isSubmitting}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-slate-900">Solicita una Demo</h3>
          <p className="text-slate-600 mt-2 text-sm">
            Completa el formulario y uno de nuestros expertos en logística te contactará para agendar una demostración personalizada.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nombre Completo</label>
            <input 
              type="text" 
              name="fullName"
              required 
              disabled={isSubmitting}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm disabled:bg-slate-50 disabled:text-slate-500" 
              placeholder="Ej. Juan Pérez" 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Correo Corporativo</label>
            <input 
              type="email" 
              name="email"
              required 
              disabled={isSubmitting}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm disabled:bg-slate-50 disabled:text-slate-500" 
              placeholder="nombre@empresa.com" 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nombre de la Empresa</label>
            <input 
              type="text" 
              name="companyName"
              required 
              disabled={isSubmitting}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm disabled:bg-slate-50 disabled:text-slate-500" 
              placeholder="Ej. Transportes SAS" 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tamaño de Flota</label>
            <div className="relative">
              <select 
                name="fleetSize"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm appearance-none bg-white disabled:bg-slate-50 disabled:text-slate-500"
                defaultValue=""
              >
                 <option value="" disabled>Selecciona una opción</option>
                 <option value="1-10">1 - 10 vehículos</option>
                 <option value="11-50">11 - 50 vehículos</option>
                 <option value="51-200">51 - 200 vehículos</option>
                 <option value="200+">+200 vehículos</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
              </div>
            </div>
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-accent-600 text-white font-bold py-3.5 rounded-xl hover:bg-accent-500 transition-all shadow-lg shadow-accent-500/20 mt-2 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Enviando...
              </>
            ) : (
              'Enviar Solicitud'
            )}
          </button>
        </form>
        
        <p className="text-center text-xs text-slate-400 mt-4">
          Tus datos están seguros y no compartiremos tu información.
        </p>
      </div>
    </div>
  );
};

export default DemoModal;