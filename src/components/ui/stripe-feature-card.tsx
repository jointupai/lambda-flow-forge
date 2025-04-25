
import React from 'react';
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Check } from "lucide-react";

interface StripeFeatureCardProps {
  title: string;
  icon: React.ReactNode;
  features: string[];
}

export const StripeFeatureCard: React.FC<StripeFeatureCardProps> = ({
  title,
  icon,
  features
}) => {
  return (
    <CardSpotlight className="h-full flex flex-col">
      <div className="p-3 rounded-xl bg-blue-400/10 w-fit mb-4">
        {icon}
      </div>
      <p className="text-2xl font-bold relative z-20 mt-2 text-white">
        {title}
      </p>
      <div className="text-neutral-200 mt-4 relative z-20 flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-2 items-start">
              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-white">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    </CardSpotlight>
  );
};
