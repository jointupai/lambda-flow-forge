
import React from "react";
import PricingCard from "./PricingCard";
import List from "./List";

const Pricing = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Simple, Transparent Pricing
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Choose the plan that fits your needs. All plans include the complete Stripe Webflow integration kit.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <PricingCard
            type="Basic"
            price="$97"
            subscription="one-time"
            description="Perfect for freelancers and small agencies building client websites."
            buttonText="Get Started"
          >
            <List>Single site license</List>
            <List>Pre-built Lambda function</List>
            <List>Video walkthrough</List>
            <List>30 days support</List>
            <List>Free updates</List>
          </PricingCard>
          <PricingCard
            type="Agency"
            price="$297"
            subscription="one-time"
            description="Ideal for agencies managing multiple client projects."
            buttonText="Best Value"
            active
          >
            <List>Unlimited sites</List>
            <List>White-label solution</List>
            <List>Priority support</List>
            <List>1-year updates</List>
            <List>Custom integration help</List>
          </PricingCard>
          <PricingCard
            type="Enterprise"
            price="Custom"
            subscription="quote"
            description="For large organizations requiring custom solutions."
            buttonText="Contact Us"
          >
            <List>Custom development</List>
            <List>Dedicated support</List>
            <List>SLA guarantees</List>
            <List>Security reviews</List>
            <List>Custom features</List>
          </PricingCard>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
