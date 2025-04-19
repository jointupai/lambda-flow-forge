
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StickyScrollRevealDemo from "@/components/ui/sticky-scroll-reveal-demo";

export default function Portfolio() {
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

      {/* Sticky Scroll Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <StickyScrollRevealDemo />
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
