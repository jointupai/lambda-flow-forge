
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import React from "react";

export default function About() {
  const values = [
    {
      title: "Reliability First",
      description: "We build systems that don't break. Period. Your business depends on automation that works 24/7."
    },
    {
      title: "Real Engineering",
      description: "No low-code hacks or temporary fixes. We write proper, maintainable code that scales with your business."
    },
    {
      title: "Founder-Focused",
      description: "We understand the challenges of running a lean business. Our solutions are built to reduce your operational burden."
    },
    {
      title: "Transparent Process",
      description: "Clear communication, predictable timelines, and fixed pricing. No surprises or hidden costs."
    }
  ];

  const timelineData = [
    {
      title: "The Problem",
      content: (
        <div className="bg-zinc-900 border border-[#1F1F1F] p-6 rounded-lg">
          <p className="text-gray-300 mb-4">
            After years of watching startups struggle with fragile automation tools that constantly 
            break at scale, I decided to create a service that delivers what growing businesses 
            actually need: reliable, custom automation that works as well at 10,000 users as it 
            does at 10.
          </p>
          <p className="text-gray-300">
            Your business deserves better than Zapier. Let's automate it right.
          </p>
        </div>
      )
    },
    {
      title: "Our Mission",
      content: (
        <div className="bg-zinc-900 border border-[#1F1F1F] p-6 rounded-lg">
          <p className="text-gray-300">
            At JointUp.ai, we believe your business deserves automation tools that grow with you.
            We create reliable, scalable solutions that eliminate technical debt and let you
            focus on what matters most - building your business.
          </p>
        </div>
      )
    },
    {
      title: "The Approach",
      content: (
        <div className="bg-zinc-900 border border-[#1F1F1F] p-6 rounded-lg">
          <p className="text-gray-300">
            While other automation services focus on quick fixes using visual builders or 
            templates, we take a fundamentally different approach. We write actual code 
            that runs in your AWS environment, giving you complete ownership and control.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="bg-black py-20 border-b border-[#1F1F1F]">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
              Built by Engineers. Focused on Results.
            </h1>
            <p className="text-xl text-gray-400">
              We're engineers who believe your business deserves better than brittle automation tools.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-black border-b border-[#1F1F1F]">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="bg-zinc-900 border border-[#1F1F1F] p-8 rounded-lg mb-10">
                <p className="text-xl leading-relaxed text-gray-300">
                  👋 Hey, I'm Alex — founder of JointUp.ai. I specialize in AWS Lambda automation for 
                  startups and lean businesses. I built this agency to help founders skip the duct-tape 
                  phase and build workflows that scale like real software.
                </p>
              </div>
              
              {/* Timeline Section */}
              <Timeline data={timelineData} />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-black border-b border-[#1F1F1F]">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-zinc-900 p-6 rounded-lg border border-[#1F1F1F] hover:border-gray-700 transition-all duration-300">
                  <h3 className="font-bold text-xl mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team/Expertise */}
      <section className="py-16 bg-zinc-900/50 border-b border-[#1F1F1F]">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Our Expertise</h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-black p-6 rounded-lg border border-[#1F1F1F] hover:border-gray-700 transition-all duration-300">
                <h3 className="font-bold text-xl mb-3 text-white">AWS Lambda</h3>
                <p className="text-gray-400">
                  Specialized in serverless architectures that scale automatically with your usage.
                </p>
              </div>
              
              <div className="bg-black p-6 rounded-lg border border-[#1F1F1F] hover:border-gray-700 transition-all duration-300">
                <h3 className="font-bold text-xl mb-3 text-white">API Integration</h3>
                <p className="text-gray-400">
                  Expert in connecting disparate systems through robust API middleware.
                </p>
              </div>
              
              <div className="bg-black p-6 rounded-lg border border-[#1F1F1F] hover:border-gray-700 transition-all duration-300">
                <h3 className="font-bold text-xl mb-3 text-white">Workflow Design</h3>
                <p className="text-gray-400">
                  Engineering automation flows that reduce manual steps and eliminate bottlenecks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Want to learn more about how we work?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Book a call with our team to discuss your automation needs and see if we're a good fit.
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
