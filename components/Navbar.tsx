import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onOpenDemo: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Módulos', href: '#modulos' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-2" onClick={() => window.scrollTo(0,0)}>
            <Logo className="h-10 w-10" />
            <span className="font-bold text-2xl text-slate-800 tracking-tight flex items-center">
              Carga<span style={{ color: '#0D4B6F' }}>360</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-[#0D4B6F] font-medium transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={onOpenDemo}
              className="text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg text-sm"
              style={{ backgroundColor: '#0D4B6F' }}
            >
              Solicitar Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-[#0D4B6F] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0D4B6F]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onOpenDemo();
                }}
                className="w-full text-white px-5 py-3 rounded-lg font-semibold transition-colors shadow-sm"
                style={{ backgroundColor: '#0D4B6F' }}
              >
                Solicitar Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;