
import React, { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const MetricsSection = () => {
  const [selectedOption, setSelectedOption] = useState('aws');
  
  const metrics = {
    aws: {
      company: 'JointUp.ai',
      metric: '95%',
      description: 'Reduction in operational costs'
    },
    zapier: {
      company: 'Zapier',
      metric: '24x',
      description: 'Faster development cycles'
    },
    stripe: {
      company: 'Stripe',
      metric: '85%',
      description: 'Increase in automation efficiency'
    },
    supabase: {
      company: 'Supabase',
      metric: '40s',
      description: 'Average deployment time'
    }
  };

  return (
    <section className="bg-black py-16 md:py-24 w-full relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="md:flex md:justify-between items-start">
          <div className="mb-8 md:mb-0 md:max-w-md">
            <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
              <span className="text-gradient">{metrics[selectedOption as keyof typeof metrics].company}</span> builds times went from days to hours.
            </p>
          </div>
          <div>
            <p className="text-5xl font-bold text-white">{metrics[selectedOption as keyof typeof metrics].metric}</p>
            <p className="text-gray-400 mt-2">{metrics[selectedOption as keyof typeof metrics].description}</p>
          </div>
        </div>
        
        <div className="mt-12">
          <ToggleGroup 
            type="single" 
            value={selectedOption}
            onValueChange={(value) => {
              if (value) setSelectedOption(value);
            }}
            className="p-1 bg-zinc-900 rounded-full inline-flex"
          >
            <ToggleGroupItem 
              value="aws" 
              className="px-4 py-2 rounded-full data-[state=on]:bg-zinc-800"
              aria-label="AWS"
            >
              AWS Lambda
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="zapier" 
              className="px-4 py-2 rounded-full data-[state=on]:bg-zinc-800"
              aria-label="Zapier"
            >
              Zapier
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="stripe" 
              className="px-4 py-2 rounded-full data-[state=on]:bg-zinc-800"
              aria-label="Stripe"
            >
              Stripe
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="supabase" 
              className="px-4 py-2 rounded-full data-[state=on]:bg-zinc-800"
              aria-label="Supabase"
            >
              Supabase
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
