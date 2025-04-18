import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, FileCode, Code, Clock, MessageSquare, Shield, Check, X, Download, Upload, Zap, Github, Users, Building } from "lucide-react";
const StripeWebflowKit = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 text-white bg-slate-100">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-zinc-950 lg:text-6xl">
            Add Stripe to Webflow in 15 Minutes—
            <span className="ml-2 text-zinc-950">Without Code or Costly Plugins</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-950">
            Get our pre-built AWS Lambda function + step-by-step guide to process payments, 
            subscriptions, and refunds directly in Webflow. No more Zapier workarounds or 
            $500/month SaaS tools.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-8">
            Download Now ($97) <ArrowRight className="ml-2 text-black" />
          </Button>
        </div>
      </section>

      {/* New Stripe Elements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Embed Stripe Elements Anywhere on Your Webflow Site
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our kit lets you place Stripe's secure payment forms on any page. Perfect for 
              checkouts, subscription signups, or donation forms.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <img src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//pe_layout_example.525f78bcb99b95e49be92e5dd34df439.png" alt="Stripe Elements Layout Example" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 px-4">
            {/* Before */}
            <Card className="p-6 border-red-200 bg-white/50 backdrop-blur">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Before</h3>
                <p className="text-lg mb-4 text-gray-600">Webflow + Zapier + Stripe</p>
                <div className="space-y-4 mb-6">
                  <div className="h-40 bg-red-50 rounded-lg flex items-center justify-center">
                    {/* Complex flowchart illustration would go here */}
                    <div className="text-red-500">Messy Flowchart</div>
                  </div>
                </div>
                <p className="text-xl font-semibold text-red-500">$1,200/year</p>
                <p className="text-gray-500">Breaks under load</p>
              </div>
            </Card>

            {/* After */}
            <Card className="p-6 border-green-200 bg-white/50 backdrop-blur">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">After</h3>
                <p className="text-lg mb-4 text-gray-600">Webflow + Your Lambda</p>
                <div className="space-y-4 mb-6">
                  <div className="h-40 bg-green-50 rounded-lg flex items-center justify-center">
                    {/* Simple arrow illustration would go here */}
                    <div className="text-green-500">Clean Arrow</div>
                  </div>
                </div>
                <p className="text-xl font-semibold text-green-500">$0/month</p>
                <p className="text-gray-500">Scales infinitely</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-brand-primary-50">
                    <FileCode className="h-6 w-6 text-brand-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Pre-Built Lambda Function</h3>
                    <p className="text-gray-600">One-click deploy with AWS SAM/Terraform template included. 
                    Handles Stripe webhooks, payment failures, and subscription updates.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-50">
                    <Code className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Webflow Embed Code</h3>
                    <p className="text-gray-600">Copy-paste snippet for checkout pages. Works with any Webflow site.</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-purple-50">
                    <Clock className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">30-Minute Setup Video</h3>
                    <p className="text-gray-600">Complete walkthrough for non-technical users.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-pink-50">
                    <MessageSquare className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">30 Days of Support</h3>
                    <p className="text-gray-600">Access to private Discord for troubleshooting.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-brand-primary-200">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-green-50">
                    <Shield className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">BONUS: GDPR-Compliant Checkout Guide</h3>
                    <p className="text-gray-600">Sell to EU clients worry-free.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
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
    </div>;
};
export default StripeWebflowKit;