import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface NotificationProps {
  isVisible: boolean;
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ isVisible, message, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-24 right-4 md:right-8 z-[100] bg-white border border-green-100 shadow-xl rounded-xl p-4 flex items-start gap-4 animate-[fade-in-down_0.5s_ease-out] max-w-sm">
      <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
        <CheckCircle2 className="h-5 w-5 text-green-600" />
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-bold text-slate-900">¡Solicitud Enviada!</h3>
        <p className="text-sm text-slate-600 mt-1 leading-snug">{message}</p>
      </div>
      <button 
        onClick={onClose} 
        className="text-slate-400 hover:text-slate-600 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Notification;