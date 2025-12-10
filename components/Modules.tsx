import React from 'react';
import { MODULES } from '../constants';

const Modules: React.FC = () => {
  return (
    <section id="modulos" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-600 font-bold tracking-wider uppercase text-sm">Plataforma Integral</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
            Todo lo que necesitas en un solo lugar
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Nuestros módulos integrados se comunican entre sí para darte control total.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MODULES.map((module) => (
            <div key={module.id} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-900 transition-colors">
                <module.icon className="h-6 w-6 text-primary-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors">
                {module.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {module.description}
              </p>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-bold text-accent-600 uppercase tracking-wide">
                  Beneficio Clave
                </p>
                <p className="text-sm text-slate-800 font-medium mt-1">
                  {module.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;