import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, FileCode, Code, Clock, MessageSquare, Shield, Check, X, Download, Upload, Zap, Github, Users, Building } from "lucide-react";
import Pricing from "@/components/pricing/Pricing";
import StripePaymentForm from "@/components/stripe/StripePaymentForm";
import { Cover } from "@/components/ui/cover";

const StripeWebflowKit = () => {
  const pricingRef = useRef<HTMLDivElement>(null);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 text-black bg-white">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-black lg:text-6xl">
            Add Stripe to Webflow in{" "}
            <Cover className="text-black">
              15 Minutes
            </Cover>—
            <span className="ml-2 text-black">Without Code or Costly Plugins</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-800">
            Get our pre-built AWS Lambda function + step-by-step guide to process payments, 
            subscriptions, and refunds directly in Webflow. No more Zapier workarounds or 
            $500/month SaaS tools.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToPricing}
            className="bg-black text-white hover:bg-gray-800 rounded-full px-8"
          >
            Download Now ($97) <ArrowRight className="ml-2 text-white" />
          </Button>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
              Live Demo
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Try It Yourself
            </h2>
            <p className="text-xl text-gray-600">
              Experience the exact payment flow your customers will have with our Stripe integration.
              No plugins, no hassle.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">How It Works</h3>
                <ul className="space-y-4">
                  {[
                    "Enter test card: 4242 4242 4242 4242",
                    "Any future expiry date & CVC",
                    "See the seamless checkout experience",
                    "No real charges will be made"
                  ].map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Test Mode Active</h4>
                    <p className="text-blue-700 text-sm">
                      This is a test demo — no real charges will be processed. Feel free to try it out!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent -m-4 rounded-3xl transform rotate-2"></div>
              <div className="relative">
                <StripePaymentForm />
              </div>
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
                  {[
                    "One-click AWS deployment",
                    "Handles all Stripe webhooks",
                    "Subscription management",
                    "Payment failure recovery"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border-2 border-brand-primary-400">
              <div className="flex flex-col gap-4">
                <div className="p-3 rounded-xl bg-blue-50 w-fit">
                  <Code className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold">Webflow Integration</h3>
                <ul className="space-y-3">
                  {[
                    "Copy-paste embed code",
                    "Works with any template",
                    "Custom styling options",
                    "Mobile responsive"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
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
                  {[
                    "30-minute setup video",
                    "Private Discord access",
                    "Email support (24h)",
                    "GDPR compliance guide"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
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
      <section className="py-16 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Who This Is For</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Perfect For:</h3>
              <div className="space-y-4">
                {["Webflow freelancers tired of hacking together Zapier solutions", "SaaS founders who need subscriptions but don't want to rebuild in React", "Agencies looking for a white-label payment solution for clients"].map((item, index) => <div key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>)}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Not For:</h3>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <X className="h-5 w-5 text-red-500" />
                </div>
                <p className="text-gray-700">
                  Enterprise teams needing SOC 2 compliance
                  <a href="/enterprise" className="text-brand-primary-500 ml-2 hover:underline">
                    Check our enterprise solutions →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{
            icon: <Download className="h-8 w-8" />,
            title: "Download",
            description: "Get the Lambda + Webflow files"
          }, {
            icon: <Upload className="h-8 w-8" />,
            title: "Deploy",
            description: "Follow the video (uses AWS Free Tier)"
          }, {
            icon: <Zap className="h-8 w-8" />,
            title: "Go Live",
            description: "Start processing payments in Webflow today"
          }].map((step, index) => <div key={index} className="text-center">
                <div className="bg-brand-primary-50 rounded-full p-4 inline-block mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>)}
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
    </div>
  );
};

export default StripeWebflowKit;
