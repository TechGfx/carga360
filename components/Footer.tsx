import React from 'react';
import { Linkedin, Facebook, Twitter, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6 gap-2">
              <Logo className="h-10 w-10" inverted={true} />
              <span className="font-bold text-2xl text-white tracking-tight">
                Carga<span style={{ color: '#0D4B6F' }}>360</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Plataforma integral para la gestión logística en Latinoamérica. Simplificamos el transporte, garantizamos cumplimiento y optimizamos recursos.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-bold mb-6">Producto</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#modulos" className="hover:text-[#EA580C] transition-colors">Gestión de Tráfico</a></li>
              <li><a href="#modulos" className="hover:text-[#EA580C] transition-colors">App Conductores</a></li>
              <li><a href="#modulos" className="hover:text-[#EA580C] transition-colors">Módulo SARLAFT</a></li>
              <li><a href="#modulos" className="hover:text-[#EA580C] transition-colors">Integración GPS</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-6">Empresa</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-[#EA580C] transition-colors">Sobre Nosotros</a></li>
              <li><a href="#testimonios" className="hover:text-[#EA580C] transition-colors">Clientes</a></li>
              <li><a href="#" className="hover:text-[#EA580C] transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-[#EA580C] transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Contacto</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-[#EA580C]" />
                <span>Medellín, Colombia<br/>Centro Empresarial Andino</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-[#EA580C]" />
                <span>contacto@carga360.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Carga360. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;