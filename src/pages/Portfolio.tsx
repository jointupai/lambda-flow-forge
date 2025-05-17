
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="bg-black py-20 border-b border-[#1F1F1F]">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-400">
              Custom automation solutions that drive business growth
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-black border-b border-[#1F1F1F]">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-zinc-900 border border-[#1F1F1F] rounded-lg p-6 hover:border-gray-700 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-black/60 text-gray-300 text-sm px-3 py-1 rounded-full border border-[#1F1F1F]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-zinc-900/30 border-b border-[#1F1F1F]">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Featured Work</h2>
            <div className="space-y-12">
              <div className="bg-black border border-[#1F1F1F] rounded-lg p-8 hover:border-gray-700 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4 text-white">Custom Payment Processor</h3>
                    <p className="text-gray-400 mb-4">
                      We built an automated payment processing system that syncs customer data between 
                      Stripe and a custom database, providing real-time order status updates and 
                      automated fulfillment.
                    </p>
                    <p className="text-gray-400 mb-6">
                      The solution reduced manual processing time by 85% and eliminated payment
                      reconciliation errors completely.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="bg-black/60 text-gray-300 text-sm px-3 py-1 rounded-full border border-[#1F1F1F]">
                        AWS Lambda
                      </span>
                      <span className="bg-black/60 text-gray-300 text-sm px-3 py-1 rounded-full border border-[#1F1F1F]">
                        Stripe API
                      </span>
                      <span className="bg-black/60 text-gray-300 text-sm px-3 py-1 rounded-full border border-[#1F1F1F]">
                        Webhook Integration
                      </span>
                    </div>
                  </div>
                  <div className="md:w-1/3 bg-zinc-900 rounded-lg h-48 flex items-center justify-center">
                    <p className="text-gray-500 text-center">Project Screenshot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to build your solution?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss how we can automate your business processes.
            </p>
            <Link to="/contact">
              <Button className="px-8 py-6 bg-white text-black hover:bg-gray-200 flex items-center gap-2 text-lg">
                Schedule a Call <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
