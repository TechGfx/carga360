import React from 'react';
import { BENEFITS } from '../constants';
import { Check } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Resultados reales para empresas de transporte
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              No somos solo un software, somos su aliado estratégico para optimizar recursos y reducir riesgos operativos.
            </p>
            
            <div className="space-y-6">
              {BENEFITS.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{benefit.title}</h4>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button className="bg-primary-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-800 transition-colors shadow-lg">
                Ver casos de éxito
              </button>
            </div>
          </div>

          <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
             <img 
              src="https://picsum.photos/id/447/800/1000" 
              alt="Transport Logistics" 
              className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <div className="bg-white/95 backdrop-blur rounded-xl p-6 shadow-lg border border-slate-200">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="text-4xl font-bold text-primary-700">60%</div>
                    <div className="text-sm font-medium text-slate-600 leading-tight">
                      Ahorro promedio en<br/>tiempo administrativo
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary-600 h-full w-[60%]"></div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;