
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function CrmLeadFlow() {
  const useCases = [
    "Lead capture → CRM → Email/SMS trigger",
    "Calendar routing + contact creation",
    "CRM data sync with Stripe + Supabase"
  ];

  const outcomes = [
    "No more lead leakage",
    "Faster pipeline movement",
    "Smarter customer journeys"
  ];

  const technologies = [
    "Postmark", 
    "HubSpot API", 
    "ActiveCampaign API", 
    "Twilio", 
    "Supabase", 
    "Lambda"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">CRM & Lead Flow Automation</h1>
            <p className="text-xl md:text-2xl text-gray-300">Don't Just Capture Leads — Activate Them.</p>
            <p className="mt-8 text-lg text-gray-300 max-w-3xl mx-auto">
              We help you auto-route, tag, and trigger CRM actions across ActiveCampaign, HubSpot, Salesforce, and more — without no-code tools.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Use Cases */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Use Cases</h2>
              <ul className="space-y-4">
                {useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Outcomes</h2>
              <ul className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-primary-400">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-black">Ready to improve your lead management?</h2>
            <Button 
              size="lg"
              variant="outline" 
              className="border-black text-black hover:bg-black hover:text-brand-primary-400"
              onClick={() => window.open('https://calendly.com/jointup/intro', '_blank')}
            >
              Automate My Lead Flow
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
