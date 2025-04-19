
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Integration",
      description: "Custom Stripe payment flow with automated fulfillment",
      tech: ["AWS Lambda", "Stripe API", "Webhook Integration"]
    },
    {
      title: "CRM Automation",
      description: "Automated customer data sync between platforms",
      tech: ["Supabase", "AWS Lambda", "API Integration"]
    },
    {
      title: "Notification System",
      description: "Real-time notification system for order updates",
      tech: ["Twilio", "AWS Lambda", "Event-driven Architecture"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300">
              Custom automation solutions that drive business growth
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to build your solution?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can automate your business processes.
            </p>
            <Button 
              size="lg" 
              className="bg-brand-primary-400 text-black hover:bg-brand-primary-500 rounded-full px-8"
              onClick={() => window.open('https://calendly.com/jointup/intro', '_blank')}
            >
              Schedule a Call <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
