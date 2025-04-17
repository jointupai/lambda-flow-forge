
import { Check, X } from "lucide-react";
import React from "react";

const ProblemSolutionSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Why AWS Lambda Instead of Zapier?</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Problem column */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">The Problem</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-2 rounded-full shrink-0">
                  <X className="text-red-600 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-1">Zapier breaks under pressure</h4>
                  <p className="text-gray-700 text-sm md:text-base">Task limits, timeout issues, and unexpected failures as you scale.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-2 rounded-full shrink-0">
                  <X className="text-red-600 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-1">It's not built for developers</h4>
                  <p className="text-gray-700 text-sm md:text-base">No version control, limited logic capabilities, and closed ecosystem.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-2 rounded-full shrink-0">
                  <X className="text-red-600 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-1">You're stitching tools together</h4>
                  <p className="text-gray-700 text-sm md:text-base">Fragile connections between critical services with no error handling.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Solution column */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">The Solution</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full shrink-0">
                  <Check className="text-green-600 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-1">Infinitely scalable</h4>
                  <p className="text-gray-700 text-sm md:text-base">No task limits or timeouts. Handles millions of operations with ease.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full shrink-0">
                  <Check className="text-green-600 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-1">Custom code that's yours</h4>
                  <p className="text-gray-700 text-sm md:text-base">Full control over your automations with real error handling.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full shrink-0">
                  <Check className="text-green-600 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-1">Direct integrations</h4>
                  <p className="text-gray-700 text-sm md:text-base">Connect your tools with clean, reliable pipelines that you own forever.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
