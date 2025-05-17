
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "Discovery",
      content: (
        <div className="bg-zinc-900 border border-[#1F1F1F] rounded-lg p-6 shadow-sm transition-all duration-300 hover:border-gray-700">
          <p className="mb-6 text-sm font-normal text-gray-400 md:text-base">
            We begin with a deep dive into your current automation setup, understanding your pain points and goals.
          </p>
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm">
              <span className="text-white">✓</span> Review existing automation setup
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm">
              <span className="text-white">✓</span> Identify manual processes
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm">
              <span className="text-white">✓</span> Document integration points
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm">
              <span className="text-white">✓</span> Map business requirements
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Design",
      content: (
        <div className="bg-zinc-900 border border-[#1F1F1F] rounded-lg p-6 shadow-sm transition-all duration-300 hover:border-gray-700">
          <p className="mb-6 text-sm font-normal text-gray-400 md:text-base">
            We create a detailed blueprint of your new automation infrastructure, leveraging AWS Lambda and cloud-native services.
          </p>
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm">
              <span className="text-white">✓</span> Architecture diagram
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm">
              <span className="text-white">✓</span> Integration specs
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm">
              <span className="text-white">✓</span> Timeline & milestones
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm">
              <span className="text-white">✓</span> Fixed-price quote
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Deploy",
      content: (
        <div className="bg-zinc-900 border border-[#1F1F1F] rounded-lg p-6 shadow-sm transition-all duration-300 hover:border-gray-700">
          <p className="mb-6 text-sm font-normal text-gray-400 md:text-base">
            We build, test, and deploy your new automation infrastructure with minimal disruption to your operations.
          </p>
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm">
              <span className="text-white">✓</span> Lambda function development
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm">
              <span className="text-white">✓</span> System integration
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm">
              <span className="text-white">✓</span> Testing & validation
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm">
              <span className="text-white">✓</span> Production deployment
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm">
              <span className="text-white">✓</span> Monitoring setup
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip bg-black">
      <Timeline data={data} />
    </div>
  );
}
