import React, { useState } from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
const MetricsSection = () => {
  const [selectedOption, setSelectedOption] = useState('ai');
  const isMobile = useIsMobile();

  // Updated metrics data with the five options and button text
  const metrics = {
    ai: {
      company: 'AI Automations That Help You Scale',
      metric: '268%',
      description: 'Reduction in manual work',
      content: 'AI-first workflows, built for real operations. We integrate OpenAI, OCR, and AI APIs into your backend to automate decision-making, data entry, and task routing',
      heading: 'launched in days, not months.',
      buttonText: 'Automate with AI'
    },
    apps: {
      company: 'Full Stack Web Apps',
      metric: '24x',
      description: 'Faster build speed',
      content: 'Custom web apps that run lean and scale hard. MVPs, dashboards, portals—built fast, clean, and integrated with your stack.',
      heading: 'deployed in weeks, not quarters.',
      buttonText: 'Launch Your App'
    },
    ops: {
      company: 'Operations Solutions',
      metric: '85%',
      description: 'Increase in operational efficiency',
      content: 'Streamline your operations with our secure and reliable infrastructure. Improve workflow efficiency and reduce manual tasks with our automation tools.',
      heading: 'optimized in hours, not days.',
      buttonText: 'Fix My Workflow'
    },
    crm: {
      company: 'CRM Solutions',
      metric: '78%',
      description: 'Increase in customer retention',
      content: 'Manage your customer relationships with our comprehensive CRM tools. Track interactions, manage leads, and increase conversions with our intuitive platform.',
      heading: 'integrated in days, not weeks.',
      buttonText: 'Fix CRM Sync'
    },
    data: {
      company: 'Connect, transform, and act on your business data',
      metric: '40s',
      description: 'Average data processing time',
      content: 'Real-time pipelines, live dashboards, and back-end automations to keep your systems in sync.',
      heading: 'analyzed in seconds, not hours.',
      buttonText: 'Sync My Stack'
    }
  };
  const buttonOptions = [{
    value: 'ai',
    label: 'AI'
  }, {
    value: 'apps',
    label: 'Web'
  }, {
    value: 'ops',
    label: 'Ops'
  }, {
    value: 'crm',
    label: 'CRM'
  }, {
    value: 'data',
    label: 'API'
  }];
  return <section className="w-full py-0">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="border border-gray-800 rounded-none bg-black">
          <div className="px-4 py-8 md:px-8 md:py-12 flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-16">
            {/* Left side with metrics */}
            <div className="w-full md:w-1/2 lg:w-5/12">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6 md:mb-8">
                <span className="text-gradient">{metrics[selectedOption as keyof typeof metrics].company}</span> {metrics[selectedOption as keyof typeof metrics].heading}
              </p>
              
              <div className="mb-6 md:mb-8">
                <p className="text-4xl md:text-5xl font-bold text-white">{metrics[selectedOption as keyof typeof metrics].metric}</p>
                <p className="text-gray-400 mt-2">{metrics[selectedOption as keyof typeof metrics].description}</p>
              </div>
              
              <div className="flex justify-left mb-6 md:mb-8">
                <div className="inline-flex items-center p-1 bg-black border border-gray-800 rounded-full">
                  {buttonOptions.map(option => <button key={option.value} onClick={() => setSelectedOption(option.value)} className={`px-4 py-2 text-sm rounded-full transition-colors ${selectedOption === option.value ? 'bg-zinc-800 text-white' : 'text-gray-400 hover:text-gray-300'}`}>
                      {option.label}
                    </button>)}
                </div>
              </div>
            </div>
            
            {/* Right side with content */}
            <div className="w-full md:w-1/2 lg:w-5/12">
              <div className="bg-[#0000] border-none rounded-lg p-0 md:p-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  {metrics[selectedOption as keyof typeof metrics].content}
                </p>
                
                <button className="mt-2 md:mt-6 bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-full flex items-center text-sm">
                  {metrics[selectedOption as keyof typeof metrics].buttonText}
                  <span className="ml-2 inline-flex items-center justify-center w-5 h-5 bg-black text-white rounded-full">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MetricsSection;