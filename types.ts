import { LucideIcon } from 'lucide-react';

export interface FeatureModule {
  id: string;
  title: string;
  description: string;
  benefit: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: LucideIcon;
}