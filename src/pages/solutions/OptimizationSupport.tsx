
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function OptimizationSupport() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section - Boxed layout with border */}
        <div className="border border-zinc-800 rounded-xl overflow-hidden mb-16">
          <div className="p-16 flex flex-col items-center justify-center text-center relative">
            <div className="absolute inset-0 bg-grid" style={{ backgroundSize: '40px 40px' }}></div>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 max-w-4xl">
                Ongoing Optimization & Support
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mb-12">
                Keep your digital solutions running at peak performance with our comprehensive optimization and support services.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 h-auto" size="lg">
                  Get Support
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-zinc-800 rounded-full px-8 py-6 h-auto" size="lg">
                  See Plans
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="border border-zinc-800 rounded-xl overflow-hidden mb-16">
          <div className="p-12 md:p-16 relative">
            <div className="absolute inset-0 bg-grid" style={{ backgroundSize: '40px 40px' }}></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl font-light italic relative">
                    <span className="text-4xl absolute -left-6 -top-6 opacity-30">"</span>
                    JointUp's ongoing support has been invaluable. They not only resolve issues quickly but proactively identify opportunities to improve our platform's performance and user experience.
                    <span className="text-4xl absolute -right-2 bottom-0 opacity-30">"</span>
                  </blockquote>
                  <div className="mt-8">
                    <p className="font-medium">Jessica Miller</p>
                    <p className="text-sm text-gray-400">Product Manager, SaaS Solutions Inc</p>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-full max-w-md h-64 border border-zinc-800 rounded-lg flex items-center justify-center">
                    <p className="text-sm text-gray-400">Performance Metrics Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="border border-zinc-800 rounded-xl overflow-hidden">
          <div className="p-12 md:p-16 relative">
            <div className="absolute inset-0 bg-grid" style={{ backgroundSize: '40px 40px' }}></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-12 text-center">Support Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "24/7 Technical Support",
                    description: "Round-the-clock assistance for critical issues to minimize downtime and disruption."
                  },
                  {
                    title: "Performance Optimization",
                    description: "Continuous monitoring and improvements to ensure your applications run at peak efficiency."
                  },
                  {
                    title: "Security Updates",
                    description: "Regular security patches and updates to protect against evolving threats."
                  },
                  {
                    title: "Feature Enhancements",
                    description: "Ongoing development of new features and improvements based on user feedback and needs."
                  },
                  {
                    title: "Scaling Assistance",
                    description: "Expert help in scaling your applications to handle growing user bases and data volumes."
                  },
                  {
                    title: "Regular Maintenance",
                    description: "Scheduled maintenance to prevent issues before they impact your business."
                  }
                ].map((feature, index) => (
                  <div key={index} className="border border-zinc-800 rounded-lg p-6 hover:bg-zinc-900/50 transition-colors duration-300">
                    <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <Link to="/contact">
                  <Button className="group bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 h-auto" size="lg">
                    Talk To Support Specialists
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
