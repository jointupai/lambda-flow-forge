
"use client";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-brand-primary-400 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
            Automate Your Backend Infrastructure
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-800">
            Build scalable, serverless automation that powers your growth with AWS Lambda and Google Cloud Functions.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-brand-primary-400">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
          No Code Required
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-800">
          We handle all the technical details so you can focus on growing your business.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-brand-primary-400 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
            Ready to replace your Zapier stack with real infrastructure?
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-800">
            Schedule a free workflow audit and see how we can help you scale your operations with confidence.
          </p>
        </div>
      </WobbleCard>
    </div>
  );
}
