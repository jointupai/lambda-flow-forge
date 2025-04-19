
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-brand-primary-400 min-h-[500px] lg:min-h-[300px] relative"
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
        <img 
          src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//brand-aws-svgrepo-com%20(1).svg" 
          alt="AWS Logo" 
          className="absolute bottom-4 right-4 w-12 h-12 opacity-70"
        />
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
            Case Study: USACarTags
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-800">
            We built a fully custom backend with Stripe checkout → Twilio SMS → Postmark email → live order dashboard. 
            It runs 100% autonomously and scaled to thousands of orders without breaking.
          </p>
          <Button 
            asChild 
            variant="default" 
            className="mt-6 bg-black text-white hover:bg-gray-900"
          >
            <Link to="/case-studies/usacartags">
              See how we did it
            </Link>
          </Button>
        </div>
      </WobbleCard>
    </div>
  );
}
