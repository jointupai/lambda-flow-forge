
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CustomWebDevelopment() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section - Boxed layout with border */}
        <div className="border border-zinc-800 rounded-xl overflow-hidden mb-16">
          <div className="bg-grid glow-effect p-16 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 max-w-4xl">
              Custom Web Application Development
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-12">
              Build scalable, modern web applications with our expert development team. From concept to deployment, we create solutions that drive your business forward.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 h-auto" size="lg">
                Start Your Project
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
                  Working with JointUp transformed our business operations. Their custom web application reduced our processing time by 75% and improved customer satisfaction significantly.
                  <span className="text-4xl absolute -right-2 bottom-0 opacity-30">"</span>
                </blockquote>
                <div className="mt-8">
                  <p className="font-medium">Alex Thompson</p>
                  <p className="text-sm text-gray-400">CTO, TechSolutions Inc</p>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-md h-64 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg flex items-center justify-center">
                  <p className="text-sm text-gray-400">Client Project Visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="border border-zinc-800 rounded-xl overflow-hidden">
          <div className="bg-grid glow-effect p-12 md:p-16">
            <h2 className="text-3xl font-bold mb-12 text-center">What We Offer</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Intuitive User Interfaces",
                  description: "We design and build user-friendly interfaces that enhance user experience and engagement."
                },
                {
                  title: "Scalable Architecture",
                  description: "Our applications are built to handle growth, ensuring your solution works as your business scales."
                },
                {
                  title: "API Integration",
                  description: "Seamless integration with third-party services and existing systems for unified operations."
                },
                {
                  title: "Performance Optimization",
                  description: "Fast-loading applications optimized for speed and efficiency across all devices."
                },
                {
                  title: "Security First",
                  description: "We implement industry best practices to keep your data and users secure."
                },
                {
                  title: "Ongoing Support",
                  description: "Continuous maintenance and support to ensure your application runs smoothly."
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
                  Schedule a Consultation
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
