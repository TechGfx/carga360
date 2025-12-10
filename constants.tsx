import { 
  Package, 
  Truck, 
  Users, 
  FileCheck, 
  Map, 
  Satellite, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  LayoutDashboard, 
  AlertTriangle, 
  Smartphone,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { FeatureModule, Testimonial, FaqItem, BenefitItem } from './types';

export const MODULES: FeatureModule[] = [
  {
    id: 'orders',
    title: 'Gestión de Órdenes de Carga',
    description: 'Crea, asigna, edita y cierra órdenes con flujos de trabajo personalizables. Visualiza estados automáticos y mantén trazabilidad completa desde la solicitud hasta la entrega.',
    benefit: 'Optimiza el despacho y elimina errores de coordinación.',
    icon: Package
  },
  {
    id: 'vehicles',
    title: 'Gestión de Vehículos',
    description: 'Base de datos completa con información técnica, historial de uso, disponibilidad en tiempo real y alertas preventivas de mantenimiento programado.',
    benefit: 'Maximiza la vida útil de tu flota y reduce tiempos muertos.',
    icon: Truck
  },
  {
    id: 'drivers',
    title: 'Gestión de Conductores',
    description: 'Expediente digital de conductores: documentos, historial de viajes, asignaciones actuales y control de disponibilidad y descansos.',
    benefit: 'Asigna al conductor ideal para cada ruta instantáneamente.',
    icon: Users
  },
  {
    id: 'docs',
    title: 'Gestión Documental Inteligente',
    description: 'Control centralizado de SOAT, Tecnomecánica, licencias, seguros y manifiestos. Sistema de alertas automáticas antes del vencimiento.',
    benefit: 'Evita multas y asegura que tu flota siempre cumpla la norma.',
    icon: FileCheck
  },
  {
    id: 'routes',
    title: 'Rutas y Planificación',
    description: 'Programación optimizada de viajes con información por etapas, carga de evidencias fotográficas y validación de checkpoints digitales.',
    benefit: 'Reduce costos de combustible y mejora tiempos de entrega.',
    icon: Map
  },
  {
    id: 'gps',
    title: 'GPS y Trazabilidad Real',
    description: 'Integración agnóstica con tus dispositivos GPS. Visualiza ubicación, recorridos históricos, alertas por desviación y excesos de velocidad.',
    benefit: 'Control total de la operación sin cambiar de plataforma.',
    icon: Satellite
  },
  {
    id: 'reports',
    title: 'Reportes Automáticos',
    description: 'Dashboards de rendimiento vehicular, eficiencia de conductores, rentabilidad por orden y cumplimiento de entregas.',
    benefit: 'Toma decisiones basadas en datos, no en suposiciones.',
    icon: BarChart3
  },
  {
    id: 'sarlaft',
    title: 'Módulo SARLAFT y Riesgos',
    description: 'Validaciones automáticas en listas restrictivas, matrices de riesgo, historial de consultas y aprobación/rechazo de terceros.',
    benefit: 'Blinda tu operación y cumple con la normativa legal vigente.',
    icon: ShieldCheck
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    title: 'Ahorro del 60% en tareas administrativas',
    description: 'Automatiza la creación de documentos y reportes que hoy haces manualmente.',
    icon: Zap
  },
  {
    title: 'Trazabilidad Total',
    description: 'Visibilidad 360° de vehículos, conductores y mercancía en una sola pantalla.',
    icon: LayoutDashboard
  },
  {
    title: 'Cero Errores Humanos',
    description: 'Validaciones automáticas que impiden despachar con documentos vencidos.',
    icon: AlertTriangle
  },
  {
    title: 'Adiós al Excel',
    description: 'Centraliza la información dispersa en hojas de cálculo y chats de WhatsApp.',
    icon: FileCheck
  },
  {
    title: 'Control de Riesgo (SARLAFT)',
    description: 'Verificación preventiva de clientes y proveedores para seguridad jurídica.',
    icon: ShieldCheck
  },
  {
    title: 'Acceso Multi-dispositivo',
    description: 'Tu equipo conectado desde la oficina o en ruta desde cualquier celular.',
    icon: Smartphone
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Mendoza",
    role: "Gerente de Operaciones",
    company: "TransLogística Andina",
    quote: "Antes perdíamos horas cuadrando planillas en Excel. Con Carga360, hemos reducido el tiempo administrativo a la mitad y tenemos control total de la flota."
  },
  {
    id: 2,
    name: "Mariana Vélez",
    role: "Coordinadora de Tráfico",
    company: "Envíos Rápidos SAS",
    quote: "El módulo de alertas de documentos nos salvó de varias multas. El sistema nos avisa semanas antes de que venza un SOAT o una licencia. Es indispensable."
  },
  {
    id: 3,
    name: "Roberto Gómez",
    role: "Director General",
    company: "Transportes del Norte",
    quote: "La implementación fue sorprendentemente rápida. En una semana ya teníamos toda la flota migrada y los conductores usando la plataforma sin problemas."
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Carga360 es seguro para mi información?",
    answer: "Absolutamente. Utilizamos encriptación de nivel bancario (AES-256) y servidores en la nube con copias de seguridad automáticas diarias. Tu información es confidencial y solo tu empresa tiene acceso a ella."
  },
  {
    question: "¿Se integra con mis dispositivos GPS actuales?",
    answer: "Sí. Carga360 cuenta con una API flexible que ya está integrada con los principales proveedores de rastreo satelital del mercado. Si usas uno nuevo, nuestro equipo técnico puede evaluar la integración."
  },
  {
    question: "¿Es difícil migrar mis datos desde Excel?",
    answer: "Para nada. Contamos con plantillas de importación masiva que te permiten subir cientos de vehículos, conductores y clientes en minutos. Además, nuestro equipo de soporte te acompaña en el proceso."
  },
  {
    question: "¿Cómo funcionan los precios?",
    answer: "Manejamos un modelo de suscripción mensual basado en el tamaño de tu flota. Esto incluye soporte, actualizaciones y almacenamiento en la nube. Solicita una demo para recibir una cotización a medida."
  },
  {
    question: "¿Puedo usarlo desde el celular?",
    answer: "Sí, Carga360 es una plataforma 100% web y responsiva. Funciona perfectamente en computadoras, tablets y smartphones sin necesidad de instalar servidores físicos."
  },
  {
    question: "¿Cumple con la normativa SARLAFT?",
    answer: "Sí. Nuestro módulo de riesgos está diseñado específicamente para ayudar a las empresas de transporte a cumplir con la debida diligencia y gestión de riesgos LA/FT requerida por las autoridades."
  },
  {
    question: "¿Qué tipo de soporte ofrecen?",
    answer: "Ofrecemos soporte técnico prioritario vía chat, correo electrónico y teléfono en horario de oficina, además de una base de conocimientos completa con tutoriales en video."
  },
  {
    question: "¿La plataforma es escalable si mi flota crece?",
    answer: "Totalmente. Carga360 está diseñada para crecer contigo, soportando desde pequeñas flotas de 5 vehículos hasta operaciones masivas con cientos de unidades sin perder rendimiento."
  }
];

export const COMPARISON_ITEMS = [
  { feature: "Información Centralizada", old: false, new: true },
  { feature: "Alertas Automáticas", old: false, new: true },
  { feature: "Acceso Móvil", old: false, new: true },
  { feature: "Validación de Riesgos", old: false, new: true },
  { feature: "Reportes en Tiempo Real", old: false, new: true },
];