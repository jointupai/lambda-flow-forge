
import React from "react";
import PricingCard from "./PricingCard";
import List from "./List";
import { MessageSquare, Rocket, Brain } from "lucide-react";

const Pricing = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Choose Your Integration Path
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                From DIY to done-for-you, we've got you covered.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <PricingCard
            type="Starter"
            subtitle="StripeFlowKit – The DIY Package"
            price="$97"
            subscription="one-time"
            description="Perfect for devs or no-coders who want to integrate Stripe into Webflow without Zapier."
            buttonText="Get Started"
            quote="I want to plug it in and figure it out myself."
          >
            <List variant="check">AWS Lambda code (prebuilt)</List>
            <List variant="check">Stripe Elements with Apple Pay, Google Pay, Affirm</List>
            <List variant="check">Webflow embed & metadata guide</List>
            <List variant="check">Video walkthrough</List>
            <List variant="check">Self-hosted on your AWS account</List>
            <List variant="cross">No installation support</List>
            <List variant="cross">No CRM or SMS setup</List>
          </PricingCard>
          
          <PricingCard
            type="Pro"
            subtitle="Done-For-You Setup"
            price="$297"
            subscription="one-time"
            description="We deploy StripeFlowKit for you — fully installed and ready to go. Perfect if you just want it to work without touching AWS."
            buttonText="Best Value"
            active
            quote="I don't want to mess with AWS — can you just do it for me?"
            icon={<Rocket className="w-6 h-6" />}
          >
            <List variant="check">Everything in Starter</List>
            <List variant="check">We install and deploy it on your AWS</List>
            <List variant="check">Connect to your Stripe account</List>
            <List variant="check">Custom Webflow embed provided</List>
            <List variant="check">Includes 1 hour of support</List>
            <List variant="cross">CRM or Twilio not included (see Expert tier)</List>
          </PricingCard>
          
          <PricingCard
            type="Expert"
            subtitle="Full Custom Cloud Automation"
            price="$2,500"
            subscription="from"
            description="Custom-built Lambda workflows for Stripe, CRMs, emails, SMS, and analytics. Perfect for SaaS companies, scaling e-commerce, and serious Webflow businesses."
            buttonText="Contact Us"
            quote="Need a custom solution that scales with your business?"
            icon={<Brain className="w-6 h-6" />}
          >
            <List variant="check">Includes Starter + Pro</List>
            <List variant="check">Full CRM integration (ActiveCampaign, HubSpot, etc.)</List>
            <List variant="check">Webhook chaining (e.g., Supabase, Firestore, Twilio)</List>
            <List variant="check">Postmark + SMS follow-up logic</List>
            <List variant="check">Admin dashboard (optional)</List>
            <List variant="check">Tailored Lambda flows for your use case</List>
            <List variant="check">Ongoing support & SLA options</List>
          </PricingCard>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
