
import { Check, X } from "lucide-react";
import React from "react";

const ProblemSolutionSection = () => {
  const problems = [
    {
      title: "Zapier Getting Too Expensive",
      description: "Hitting price limits as you scale triggers or add zaps",
      icon: <X className="text-red-500" size={20} />
    },
    {
      title: "Unreliable Automations",
      description: "Workflows break when APIs change or rate limits hit",
      icon: <X className="text-red-500" size={20} />
    },
    {
      title: "Limited by No-Code",
      description: "Complex logic & conditions are impossible to implement",
      icon: <X className="text-red-500" size={20} />
    }
  ];

  const solutions = [
    {
      title: "Pay Only for What You Use",
      description: "AWS Lambda's pay-per-execution model scales with you",
      icon: <Check className="text-green-500" size={20} />
    },
    {
      title: "Bulletproof Reliability",
      description: "Enterprise-grade infrastructure with built-in monitoring",
      icon: <Check className="text-green-500" size={20} />
    },
    {
      title: "Unlimited Flexibility",
      description: "Any business logic can be implemented exactly as needed",
      icon: <Check className="text-green-500" size={20} />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">The Problem With Zapier</h2>
          <p className="text-lg text-gray-600">
            As your business grows, so do the limitations of no-code tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold mb-6 text-gray-800">The Problem</h3>
            <div className="space-y-6">
              {problems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold mb-6 text-gray-800">Our Solution</h3>
            <div className="space-y-6">
              {solutions.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
