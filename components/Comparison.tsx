import React from 'react';
import { COMPARISON_ITEMS } from '../constants';
import { CheckCircle2, XCircle } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Por qué elegir Carga360?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Deja atrás las herramientas manuales y genéricas. Evoluciona a un sistema especializado.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
          <div className="grid grid-cols-3 bg-slate-950 p-6 text-sm md:text-lg font-bold uppercase tracking-wider text-center border-b border-slate-700">
            <div className="text-slate-400 text-left">Característica</div>
            <div className="text-slate-500">Método Tradicional <br/><span className="text-xs normal-case opacity-70">(Excel/Papel)</span></div>
            <div className="text-accent-500">Carga360 <br/><span className="text-xs normal-case opacity-70">(SaaS Moderno)</span></div>
          </div>
          
          {COMPARISON_ITEMS.map((item, index) => (
            <div key={index} className={`grid grid-cols-3 p-6 items-center border-b border-slate-700/50 ${index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-800/50'}`}>
              <div className="font-medium text-slate-200">{item.feature}</div>
              <div className="flex justify-center">
                {item.old ? <CheckCircle2 className="text-green-500" /> : <XCircle className="text-red-500/50 h-6 w-6" />}
              </div>
              <div className="flex justify-center">
                {item.new ? (
                    <div className="bg-accent-500/10 p-1 rounded-full">
                        <CheckCircle2 className="text-accent-500 h-6 w-6" />
                    </div>
                ) : <XCircle className="text-red-500" />}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-6 font-medium">No te conformes con menos.</p>
          <button className="bg-white text-primary-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
            Actualiza tu operación hoy
          </button>
        </div>
      </div>
    </section>
  );
};

export default Comparison;