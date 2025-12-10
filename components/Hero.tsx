import React from 'react';
import { CheckCircle2, ArrowRight, Truck, MapPin, Users, FileText, AlertCircle } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-primary-900">
      {/* Background Pattern/Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
            src="https://picsum.photos/id/192/1920/1080" 
            alt="Logistics Background" 
            className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-800/50 border border-primary-700 text-primary-100 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
              </span>
              Plataforma SaaS #1 en LatAm
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Domina tu Logística. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Centraliza tu Operación.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-100 max-w-2xl leading-relaxed">
              Carga360 elimina el caos operativo unificando vehículos, conductores, documentos y clientes en una sola plataforma inteligente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={onOpenDemo}
                className="flex items-center justify-center gap-2 bg-accent-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-500 transition-all shadow-lg hover:shadow-accent-500/20 transform hover:-translate-y-1"
              >
                Solicitar Demo
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all backdrop-blur-sm">
                Ver Video
              </button>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:gap-8 text-primary-200 text-sm font-medium justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent-500" />
                <span>Gestión de Flota</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent-500" />
                <span>Rastreo GPS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent-500" />
                <span>Control Documental</span>
              </div>
            </div>
          </div>

          {/* Detailed Dashboard Visual */}
          <div className="relative mt-12 md:mt-0 block transform md:transform-none scale-100 origin-top">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-blue-600 rounded-2xl blur opacity-30"></div>
            
            {/* Main Dashboard Container */}
            <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-4 md:p-6 shadow-2xl overflow-hidden">
                {/* Dashboard Header */}
                <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-slate-400 text-xs font-mono">live_operation_view.exe</div>
                </div>

                {/* Dashboard Content Grid */}
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                    
                    {/* Left Column: Active Fleet (Trucks) */}
                    <div className="col-span-2 space-y-3">
                        <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Flota Activa</h4>
                        
                        {/* Truck Item 1 */}
                        <div className="bg-slate-800/50 p-2 md:p-3 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between border border-slate-700/50 gap-2 sm:gap-0">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-500/20 p-2 rounded-md shrink-0">
                                    <Truck className="h-4 w-4 text-blue-400" />
                                </div>
                                <div>
                                    <div className="text-white text-sm font-semibold">TQX-982</div>
                                    <div className="text-slate-500 text-[10px] flex items-center gap-1">
                                        <MapPin className="h-3 w-3" /> BOG -&gt; MDE
                                    </div>
                                </div>
                            </div>
                            <span className="bg-green-500/20 text-green-400 text-[10px] px-2 py-1 rounded-full border border-green-500/20 text-center sm:text-left w-fit self-start sm:self-auto">En Ruta</span>
                        </div>

                        {/* Truck Item 2 */}
                        <div className="bg-slate-800/50 p-2 md:p-3 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between border border-slate-700/50 gap-2 sm:gap-0">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-500/20 p-2 rounded-md shrink-0">
                                    <Truck className="h-4 w-4 text-blue-400" />
                                </div>
                                <div>
                                    <div className="text-white text-sm font-semibold">SXR-441</div>
                                    <div className="text-slate-500 text-[10px] flex items-center gap-1">
                                        <MapPin className="h-3 w-3" /> CLO -&gt; BUN
                                    </div>
                                </div>
                            </div>
                            <span className="bg-yellow-500/20 text-yellow-400 text-[10px] px-2 py-1 rounded-full border border-yellow-500/20 text-center sm:text-left w-fit self-start sm:self-auto">Cargando</span>
                        </div>
                        {/* Truck Item 3 */}
                        <div className="bg-slate-800/50 p-2 md:p-3 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between border border-slate-700/50 opacity-75 gap-2 sm:gap-0">
                            <div className="flex items-center gap-3">
                                <div className="bg-slate-700 p-2 rounded-md shrink-0">
                                    <Truck className="h-4 w-4 text-slate-400" />
                                </div>
                                <div>
                                    <div className="text-slate-300 text-sm font-semibold">LMP-102</div>
                                    <div className="text-slate-500 text-[10px]">Patio Central</div>
                                </div>
                            </div>
                            <span className="bg-slate-700 text-slate-400 text-[10px] px-2 py-1 rounded-full text-center sm:text-left w-fit self-start sm:self-auto">Disponible</span>
                        </div>
                    </div>

                    {/* Right Column: Drivers & Docs */}
                    <div className="col-span-1 space-y-4">
                        
                        {/* Drivers Card */}
                        <div className="bg-slate-800/50 p-2 md:p-3 rounded-lg border border-slate-700/50 h-full">
                            <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 flex flex-col xl:flex-row items-start xl:items-center gap-1">
                                <span className="flex items-center gap-2"><Users className="h-3 w-3" /> Cond.</span>
                            </h4>
                            <div className="flex -space-x-2 overflow-hidden mb-2">
                                <div className="inline-block h-6 w-6 md:h-8 md:w-8 rounded-full ring-2 ring-slate-900 bg-slate-600 flex items-center justify-center text-[10px] md:text-xs text-white">JD</div>
                                <div className="inline-block h-6 w-6 md:h-8 md:w-8 rounded-full ring-2 ring-slate-900 bg-slate-600 flex items-center justify-center text-[10px] md:text-xs text-white">AM</div>
                                <div className="inline-block h-6 w-6 md:h-8 md:w-8 rounded-full ring-2 ring-slate-900 bg-slate-600 flex items-center justify-center text-[10px] md:text-xs text-white">CR</div>
                            </div>
                            <div className="text-[10px] md:text-xs text-green-400 font-medium">+2 Disp.</div>
                        </div>

                        {/* Docs Card */}
                        <div className="bg-slate-800/50 p-2 md:p-3 rounded-lg border border-slate-700/50 relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 p-1">
                                <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                            </div>
                            <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                                <FileText className="h-3 w-3" /> Docs
                            </h4>
                            <div className="space-y-2">
                                <div className="flex items-center gap-1 text-[10px] text-slate-300 bg-red-500/10 p-1 rounded border border-red-500/20 truncate">
                                    <AlertCircle className="h-3 w-3 text-red-500 shrink-0" />
                                    <span className="truncate">SOAT TQX...</span>
                                </div>
                                <div className="flex items-center gap-1 text-[10px] text-slate-300 bg-slate-700/30 p-1 rounded truncate">
                                    <CheckCircle2 className="h-3 w-3 text-green-500 shrink-0" />
                                    <span className="truncate">RTM SXR...</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
                {/* Floating Notification */}
                <div className="absolute bottom-4 right-4 bg-white text-slate-900 p-2 md:p-3 rounded-lg shadow-xl flex items-center gap-2 md:gap-3 animate-bounce shadow-accent-500/20 border-l-4 border-accent-500 max-w-[200px] md:max-w-none">
                    <div className="bg-green-100 p-1 md:p-1.5 rounded-full shrink-0">
                    <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-green-600" />
                    </div>
                    <div>
                    <p className="text-[9px] md:text-[10px] text-slate-500 uppercase font-bold">Orden #4092</p>
                    <p className="text-[10px] md:text-xs font-bold truncate">Entregada en Medellín</p>
                    </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;