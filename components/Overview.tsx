import React from 'react';
import { AlertTriangle, FileX, MessageSquareWarning, Zap } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            La logística manual te está costando dinero
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Muchas empresas de transporte siguen gestionando operaciones millonarias con herramientas obsoletas. 
            Carga360 transforma el caos en control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
             <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-red-100 transition-colors">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-red-100 text-red-600 rounded-lg">
                    <FileX className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">Dependencia de Excel</h3>
                  <p className="text-slate-600">Archivos desactualizados, versiones conflictivas y pérdida de datos críticos por errores humanos.</p>
                </div>
             </div>

             <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-red-100 transition-colors">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-red-100 text-red-600 rounded-lg">
                    <MessageSquareWarning className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">Caos en WhatsApp</h3>
                  <p className="text-slate-600">Información de viajes dispersa en chats informales, sin respaldo legal ni trazabilidad real.</p>
                </div>
             </div>

             <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-red-100 transition-colors">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-red-100 text-red-600 rounded-lg">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">Riesgos Legales</h3>
                  <p className="text-slate-600">Multas por documentos vencidos y falta de validación de antecedentes (SARLAFT) de terceros.</p>
                </div>
             </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-primary-900/5 rounded-3xl transform rotate-3"></div>
             <div className="relative bg-primary-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                <div className="inline-block p-3 bg-accent-600 rounded-xl mb-6 shadow-lg shadow-accent-600/20">
                    <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6">La Solución Carga360</h3>
                <div className="space-y-6 text-primary-100">
                  <p>
                    Centralizamos toda tu operación en una sola nube segura. Desde la creación de la orden hasta la entrega final, todo está conectado.
                  </p>
                  <p>
                    Automatizamos tareas repetitivas y validaciones de seguridad, permitiendo que tu equipo se enfoque en hacer crecer el negocio, no en llenar planillas.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-primary-800">
                  <p className="font-bold text-white text-lg">
                    Resultado: Una operación blindada, eficiente y rentable.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;