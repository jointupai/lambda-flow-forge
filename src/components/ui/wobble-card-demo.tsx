
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
        <h2 className="max-w-80 text-left text-balance text-base md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
          Google/AWS Cloud Infrastructure Experts
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-800">
          4+ Years of experience. We handle all the technical details so you can focus on growing your business.
        </p>
      </WobbleCard>
      
      <WobbleCard 
        containerClassName="col-span-1 lg:col-span-3 bg-brand-primary-400 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] cursor-pointer"
        onClick={() => window.location.href = "/case-studies/usacartags"}
      >
        <div className="flex justify-between items-start w-full">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
              Cloud-native infrastructure saves money. A lot of it.
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-800">
              By switching to AWS Lambda or Google Cloud Functions, our clients routinely cut automation costs by 85% or more. These cloud services charge pennies per million operations, and scale automatically with usage.
            </p>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="text-right"
          >
            <div className="flex flex-col items-end">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-6xl font-bold text-black"
              >
                85%
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg text-neutral-800"
              >
                Saving on cost
              </motion.span>
            </div>
          </motion.div>
        </div>
      </WobbleCard>
    </div>
  );
}
