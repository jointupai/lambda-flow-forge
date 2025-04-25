
import React from 'react';
import { cn } from "@/lib/utils";
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
    <div className="group h-full flex flex-col rounded-xl p-7 border border-neutral-800 bg-black relative overflow-hidden">
      {/* Blue gradient hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="p-3 rounded-xl bg-blue-400/10 w-fit mb-4 z-10">
        {icon}
      </div>
      <p className="text-2xl font-bold relative z-10 mt-2 text-white">
        {title}
      </p>
      <div className="text-neutral-200 mt-4 relative z-10 flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-2 items-start">
              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-white">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Subtle animated dots in background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -right-2 -bottom-2 w-24 h-24 rounded-full bg-blue-500 blur-xl"></div>
        <div className="absolute -left-2 -top-2 w-24 h-24 rounded-full bg-purple-500 blur-xl"></div>
      </div>
    </div>
  );
};
