
export interface PricingCardProps {
  children: React.ReactNode;
  description: string;
  price: string;
  type: string;
  subscription: string;
  buttonText: string;
  active?: boolean;
}

export interface ListProps {
  children: React.ReactNode;
}
