
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TimelineDemo from "@/components/home/TimelineDemo";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="bg-black border-b border-[#1F1F1F] py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              How It Works
            </h1>
            <p className="text-xl text-gray-400">
              Our simple 3-step process to transform your workflows with AWS Lambda
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <TimelineDemo />

      {/* After Launch */}
      <section className="py-16 bg-black border-t border-[#1F1F1F]">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">After Launch</h2>
            <p className="text-xl text-gray-400 mb-8">
              We don't just build it and disappear. Our clients receive ongoing support, 
              monitoring, and optimization to ensure your automations keep running smoothly 
              as your business grows.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left mt-12">
              <div className="bg-zinc-900 border border-[#1F1F1F] p-6 rounded-lg transition-all duration-300 hover:border-gray-700">
                <h3 className="font-bold text-xl mb-3">Monitoring</h3>
                <p className="text-gray-400">
                  We set up proper monitoring and alerts so issues are caught before they impact your business.
                </p>
              </div>
              
              <div className="bg-zinc-900 border border-[#1F1F1F] p-6 rounded-lg transition-all duration-300 hover:border-gray-700">
                <h3 className="font-bold text-xl mb-3">Support</h3>
                <p className="text-gray-400">
                  Direct access to your developer for questions, tweaks, and improvements.
                </p>
              </div>
              
              <div className="bg-zinc-900 border border-[#1F1F1F] p-6 rounded-lg transition-all duration-300 hover:border-gray-700">
                <h3 className="font-bold text-xl mb-3">Scaling</h3>
                <p className="text-gray-400">
                  As your needs grow, we help adjust your automations to handle increasing workloads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-900 border-t border-[#1F1F1F]">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to automate your business?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Schedule a discovery call and let's discuss how we can transform your workflows.
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
