
"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";

const content = [
  {
    title: "USA Car Tags",
    description:
      "Revolutionized the vehicle registration process with an automated cloud solution that handles over 10,000 transactions monthly. Integrated AWS Lambda for scalable processing and Stripe for secure payments.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 text-white">
        <img
          src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public/usacartags-website.webp"
          alt="USA Car Tags"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
    ),
  },
  {
    title: "Stripe Payment Integration",
    description:
      "Built custom payment workflows that process millions in transactions annually. Our solutions integrate seamlessly with existing systems while maintaining PCI compliance and optimal security standards.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500 to-yellow-500 text-white">
        <img
          src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public/stripe-payment.webp"
          alt="Stripe Payments"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
    ),
  },
  {
    title: "Enterprise Cloud Solutions",
    description:
      "Developed scalable cloud infrastructure for enterprise clients, resulting in 40% cost reduction and 99.99% uptime. Our solutions handle millions of requests while maintaining exceptional performance.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-emerald-500 text-white">
        <img
          src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public/cloud-architecture.webp"
          alt="Cloud Architecture"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
    ),
  }
];

export default function StickyScrollRevealDemo() {
  return (
    <div className="h-full">
      <StickyScroll content={content} />
    </div>
  );
}
