import { ReactNode } from 'react';

export interface PricingCardProps {
  children: React.ReactNode;
  description: string;
  price: string;
  type: string;
  subtitle?: string;
  subscription: string;
  buttonText: string;
  active?: boolean;
  quote?: string;
  icon?: ReactNode;
  href: string;
}

export interface ListProps {
  children: React.ReactNode;
  variant?: 'check' | 'cross';
}
