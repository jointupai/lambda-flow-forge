
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
    <div className="group h-full flex flex-col rounded-xl p-7 border border-neutral-200 bg-white hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
      {/* Content */}
      <div className="p-3 rounded-xl bg-blue-50 w-fit mb-4 z-10">
        {icon}
      </div>
      <p className="text-2xl font-bold relative z-10 mt-2 text-zinc-800">
        {title}
      </p>
      <div className="text-neutral-600 mt-4 relative z-10 flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-2 items-start">
              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-600">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
