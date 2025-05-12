
import React, { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const MetricsSection = () => {
  const [selectedOption, setSelectedOption] = useState('aws');
  
  // Updated metrics data with additional information content
  const metrics = {
    aws: {
      company: 'JointUp.ai',
      metric: '95%',
      description: 'Reduction in operational costs',
      content: 'Get started using our pre-built templates. Easily stream long-running workflows for a better user experience with zero-config infrastructure that's always globally performant.'
    },
    zapier: {
      company: 'Zapier',
      metric: '24x',
      description: 'Faster development cycles',
      content: 'Build your automation workflows with our no-code interface. Connect your favorite apps and services with our extensive library of integrations.'
    },
    stripe: {
      company: 'Stripe',
      metric: '85%',
      description: 'Increase in automation efficiency',
      content: 'Streamline your payment processing with our secure and reliable infrastructure. Accept payments from customers around the world with minimal setup.'
    },
    supabase: {
      company: 'Supabase',
      metric: '40s',
      description: 'Average deployment time',
      content: 'Deploy your database and API in seconds. Built on open source technology, Supabase gives you the tools to create a complete backend in record time.'
    }
  };

  const buttonOptions = [
    { value: 'aws', label: 'AI Apps' },
    { value: 'zapier', label: 'Web Apps' },
    { value: 'stripe', label: 'Ecommerce' },
    { value: 'supabase', label: 'Marketing' },
  ];

  return (
    <section className="bg-black py-16 md:py-24 w-full relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-start gap-16">
          {/* Left side with metrics */}
          <div className="md:w-1/2 lg:w-5/12">
            <p className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
              <span className="text-gradient">{metrics[selectedOption as keyof typeof metrics].company}</span> builds times went from days to hours.
            </p>
            
            <div className="mb-8">
              <p className="text-5xl font-bold text-white">{metrics[selectedOption as keyof typeof metrics].metric}</p>
              <p className="text-gray-400 mt-2">{metrics[selectedOption as keyof typeof metrics].description}</p>
            </div>
            
            <div className="inline-flex p-1 bg-zinc-900 rounded-full">
              {buttonOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedOption(option.value)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedOption === option.value 
                      ? 'bg-zinc-800 text-white' 
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Right side with content */}
          <div className="md:w-1/2 lg:w-5/12 mt-10 md:mt-0">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <p className="text-gray-300 leading-relaxed">
                {metrics[selectedOption as keyof typeof metrics].content}
              </p>
              
              <button className="mt-6 bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-md flex items-center text-sm">
                Deploy AI Apps in seconds
                <span className="ml-2 inline-flex items-center justify-center w-5 h-5 bg-black text-white rounded-full">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
