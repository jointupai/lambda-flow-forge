import React from "react";
import { cn } from "@/lib/utils";
import { Activity, Webhook, Zap, Database, Bell } from "lucide-react";
import { motion } from "framer-motion";
export default function FeaturesSectionDemo() {
  const features = [{
    title: "Automation Infrastructure",
    description: "Scalable logic flows, serverless orchestration, zero maintenance",
    icon: <Database className="h-6 w-6 text-neutral-600 dark:text-neutral-200" />,
    className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800"
  }, {
    title: "Stripe + CRM Workflows",
    description: "Checkout + metadata sync + real-time notifications",
    icon: <Bell className="h-6 w-6 text-neutral-600 dark:text-neutral-200" />,
    className: "col-span-1 lg:col-span-2 border-b dark:border-neutral-800"
  }, {
    title: "API Orchestration",
    description: "Webhooks, Slack, Supabase, Postmark, Twilio — all talking to each other",
    icon: <Webhook className="h-6 w-6 text-neutral-600 dark:text-neutral-200" />,
    className: "col-span-1 lg:col-span-2 lg:border-r dark:border-neutral-800"
  }, {
    title: "Internal Ops Automation",
    description: "Invoicing, lead routing, fulfillment, tagging",
    icon: <Zap className="h-6 w-6 text-neutral-600 dark:text-neutral-200" />,
    className: "col-span-1 lg:col-span-2 border-b lg:border-r dark:border-neutral-800"
  }, {
    title: "Event-Driven Architecture",
    description: "Workflows that run based on real-time triggers, not polling",
    icon: <Activity className="h-6 w-6 text-neutral-600 dark:text-neutral-200" />,
    className: "col-span-1 lg:col-span-2 border-b lg:border-none dark:border-neutral-800"
  }];
  return;
}
const FeatureCard = ({
  children,
  className
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn(`p-6 relative overflow-hidden hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors`, className)}>
      {children}
    </div>;
};
const FeatureTitle = ({
  children
}: {
  children?: React.ReactNode;
}) => {
  return <h3 className="font-semibold text-xl mb-2 text-black dark:text-white">
      {children}
    </h3>;
};
const FeatureDescription = ({
  children
}: {
  children?: React.ReactNode;
}) => {
  return <p className="text-sm text-neutral-600 dark:text-neutral-300">
      {children}
    </p>;
};