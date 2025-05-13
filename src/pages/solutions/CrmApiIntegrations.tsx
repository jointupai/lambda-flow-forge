
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CrmApiIntegrations() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section - Boxed layout with border */}
        <div className="border border-zinc-800 rounded-xl overflow-hidden mb-16">
          <div className="bg-grid glow-effect p-16 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 max-w-4xl">
              CRM & API Integrations
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-12">
              Connect your systems and streamline your business processes with seamless CRM integrations and custom API development.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 h-auto" size="lg">
                Start Integrating
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-zinc-800 rounded-full px-8 py-6 h-auto" size="lg">
                Get a Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="border border-zinc-800 rounded-xl overflow-hidden mb-16">
          <div className="bg-grid glow-effect p-12 md:p-16">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1">
                <blockquote className="text-xl md:text-2xl font-light italic relative">
                  <span className="text-4xl absolute -left-6 -top-6 opacity-30">"</span>
                  The integration between our CRM and e-commerce platform has eliminated data silos and given us a 360-degree view of our customer journey. Our team now makes decisions based on complete information.
                  <span className="text-4xl absolute -right-2 bottom-0 opacity-30">"</span>
                </blockquote>
                <div className="mt-8">
                  <p className="font-medium">Michael Chen</p>
                  <p className="text-sm text-gray-400">Marketing Director, Retail Innovations</p>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-md h-64 bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-lg flex items-center justify-center">
                  <p className="text-sm text-gray-400">Integration Architecture Diagram</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="border border-zinc-800 rounded-xl overflow-hidden">
          <div className="bg-grid glow-effect p-12 md:p-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Integration Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "CRM System Integration",
                  description: "Connect your CRM with other business systems for unified data and streamlined operations."
                },
                {
                  title: "Custom API Development",
                  description: "Build tailored APIs that enable your systems to communicate effectively."
                },
                {
                  title: "Middleware Solutions",
                  description: "Create reliable connections between disparate systems with custom middleware."
                },
                {
                  title: "Data Synchronization",
                  description: "Keep information consistent across all platforms with automated sync processes."
                },
                {
                  title: "E-commerce Integration",
                  description: "Connect your online store with inventory, shipping, and customer management systems."
                },
                {
                  title: "Workflow Automation",
                  description: "Automate business processes that span multiple systems for increased efficiency."
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
                  Discuss Your Integration Needs
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
