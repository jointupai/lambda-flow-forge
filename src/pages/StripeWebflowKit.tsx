import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, FileCode, Code, MessageSquare, Shield, Check, X, Download, Upload, Zap, Github, Users, Building, ShoppingCart, Clipboard, CreditCard } from "lucide-react";
import Pricing from "@/components/pricing/Pricing";
import StripePaymentForm from "@/components/stripe/StripePaymentForm";
import { Cover } from "@/components/ui/cover";
const StripeWebflowKit = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 text-black bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-black lg:text-5xl">Add Stripe to Any Website in 15 Minutes No Code, No Plugins</h1>
              <p className="text-xl mb-8 max-w-4xl mx-auto md:mx-0 text-gray-800 md:text-xl">
                Drop in our prebuilt AWS Lambda function + plug-and-play frontend to start accepting payments, subscriptions, and refunds on Webflow, WordPress, Wix, Squarespace, Framer, and more.<br />
                No Zapier. No bloated SaaS tools. Just fast, secure Stripe integration that works anywhere.
              </p>
              <Button size="lg" onClick={scrollToPricing} className="bg-black text-white hover:bg-gray-800 rounded-full px-8">
                Download Now ($97) <ArrowRight className="ml-2 text-white" />
              </Button>
            </div>
            {/* Right Column: Stripe payment form */}
            <div className="w-full flex justify-center">
              <StripePaymentForm />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
              Everything You Need
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What's Included</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get everything you need to start processing payments in Webflow today.
              Zero coding knowledge required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border-2">
              <div className="flex flex-col gap-4">
                <div className="p-3 rounded-xl bg-brand-primary-50 w-fit">
                  <FileCode className="h-8 w-8 text-brand-primary-500" />
                </div>
                <h3 className="text-2xl font-bold">Pre-Built Lambda</h3>
                <ul className="space-y-3">
                  {["One-click AWS deployment", "Handles all Stripe webhooks", "Subscription management", "Payment failure recovery"].map((feature, index) => <li key={index} className="flex items-center gap-2 text-gray-600">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>)}
                </ul>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 ">
              <div className="flex flex-col gap-4">
                <div className="p-3 rounded-xl bg-blue-50 w-fit">
                  <Code className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold">Website Integration</h3>
                <ul className="space-y-3">
                  {["Copy-paste embed code", "Works with any template", "Custom styling options", "Mobile responsive"].map((feature, index) => <li key={index} className="flex items-center gap-2 text-gray-600">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>)}
                </ul>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border-2">
              <div className="flex flex-col gap-4">
                <div className="p-3 rounded-xl bg-purple-50 w-fit">
                  <MessageSquare className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold">Support & Extras</h3>
                <ul className="space-y-3">
                  {["30-minute setup video", "Private Discord access", "Email support (24h)", "GDPR compliance guide"].map((feature, index) => <li key={index} className="flex items-center gap-2 text-gray-600">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>)}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <div ref={pricingRef}>
        <Pricing />
      </div>

      {/* Comparison Section */}
      

      {/* Who It's For Section */}
      

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to add Stripe payments to any website
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            icon: <Download className="h-12 w-12 text-green-500" />,
            number: "1",
            title: "Buy & Download",
            description: "Get the complete Stripe integration kit with AWS Lambda and frontend code"
          }, {
            icon: <Clipboard className="h-12 w-12 text-blue-500" />,
            number: "2",
            title: "Copy-Paste Frontend Code",
            description: "Easily embed the pre-built Stripe payment components into your website"
          }, {
            icon: <CreditCard className="h-12 w-12 text-purple-500" />,
            number: "3",
            title: "Start Accepting Payments",
            description: "Begin processing payments immediately with our pre-configured setup"
          }].map((step, index) => <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center">
                  <div className="mb-4 rounded-full bg-gray-100 p-4">
                    {step.icon}
                  </div>
                  <div className="text-4xl font-bold text-black-300 mb-4">0{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <blockquote className="text-2xl font-medium italic text-gray-900 mb-8">
              "Saved me 10 hours/month vs. Zapier. Worth every penny!"
            </blockquote>
            <p className="text-gray-600">– John Smith, TechCorp</p>
          </div>
          <div className="flex justify-center items-center gap-12 opacity-50">
            <Github className="h-8 w-8" />
            <Users className="h-8 w-8" />
            <Building className="h-8 w-8" />
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">Used by 500+ developers</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[{
            q: "I'm not technical. Can I use this?",
            a: "Yes! The video guide shows every click. Or book our team to install it for you ($300)."
          }, {
            q: "Why not just use Stripe Payments + Webflow?",
            a: "Native Stripe in Webflow lacks subscriptions, retries, and compliance tools. Our Lambda adds all that."
          }, {
            q: "What if I need custom features?",
            a: "This kit covers 90% of use cases. Need more? We build custom solutions."
          }].map((faq, index) => <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-primary-50">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join 1,200+ developers who upgraded from Zapier
          </h2>
          <p className="text-xl text-gray-600 mb-8">Instant access after purchase!</p>
          <Button size="lg" className="bg-black text-white hover:bg-gray-800 rounded-full px-8">
            Get the Kit ($97) <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>;
};
export default StripeWebflowKit;