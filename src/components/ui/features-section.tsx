
import React from "react";
import { cn } from "@/lib/utils";
import { Activity, Webhook, Zap, Database, Bell } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Automation Infrastructure",
      description: "Scalable logic flows, serverless orchestration, zero maintenance",
      icon: <Database className="h-6 w-6 text-neutral-600 dark:text-neutral-200" />,
      className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800"
    },
    {
      title: "Stripe + CRM Workflows",
      description: "Checkout + metadata sync + real-time notifications",
      icon: <Bell className="h-6 w-6 text-neutral-600 dark:text-neutral-200" />,
      className: "col-span-1 lg:col-span-2 border-b dark:border-neutral-800"
    },
    {
      title: "API Orchestration",
      description: "Webhooks, Slack, Supabase, Postmark, Twilio — all talking to each other",
      icon: <Webhook className="h-6 w-6 text-neutral-600 dark:text-neutral-200" />,
      className: "col-span-1 lg:col-span-2 lg:border-r dark:border-neutral-800"
    },
    {
      title: "Internal Ops Automation",
      description: "Invoicing, lead routing, fulfillment, tagging",
      icon: <Zap className="h-6 w-6 text-neutral-600 dark:text-neutral-200" />,
      className: "col-span-1 lg:col-span-2 border-b lg:border-r dark:border-neutral-800"
    },
    {
      title: "Event-Driven Architecture",
      description: "Workflows that run based on real-time triggers, not polling",
      icon: <Activity className="h-6 w-6 text-neutral-600 dark:text-neutral-200" />,
      className: "col-span-1 lg:col-span-2 border-b lg:border-none dark:border-neutral-800"
    }
  ];

  return (
    <div className="relative z-20 py-10 lg:py-20 max-w-7xl mx-auto">
      <div className="px-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center text-black dark:text-white">
          What We Build
        </h2>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <div className="flex flex-col gap-4">
                <div className="bg-neutral-100 dark:bg-neutral-800 w-12 h-12 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </div>
              </div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-6 relative overflow-hidden hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <h3 className="font-semibold text-xl mb-2 text-black dark:text-white">
      {children}
    </h3>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-sm text-neutral-600 dark:text-neutral-300">
      {children}
    </p>
  );
};
