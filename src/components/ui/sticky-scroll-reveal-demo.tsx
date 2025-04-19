
"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";

const content = [
  {
    title: "AWS Lambda Integration",
    description: "Build scalable, serverless automation that powers your growth. We specialize in creating custom AWS Lambda functions that handle your business logic efficiently and cost-effectively.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//brand-aws-svgrepo-com%20(1).svg"
          alt="AWS Logo"
          className="w-20 h-20"
        />
      </div>
    ),
  },
  {
    title: "Stripe Payment Integration",
    description: "Seamlessly integrate Stripe payments into your workflow. Our custom solutions handle everything from payment processing to automated fulfillment, ensuring a smooth customer experience.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <svg className="w-20 h-20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
        </svg>
      </div>
    ),
  },
  {
    title: "Custom Cloud Solutions",
    description: "We build tailored cloud solutions that automate your business processes. From webhook orchestration to complex data pipelines, we create reliable and scalable systems that grow with your business.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-pink-500 to-indigo-500 text-white">
        Cloud Solutions
      </div>
    ),
  }
];

export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
