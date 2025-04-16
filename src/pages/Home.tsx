
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Custom AWS Lambda Automations That Scale With You
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Replace your fragile Zapier stack with real serverless infrastructure.
              We build lightweight, powerful AWS Lambda functions that connect your tools and automate your workflows — forever.
            </p>
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-lg px-8 py-6 h-auto">
              Get a Free Integration Audit
            </Button>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Once. Scale Forever.</h2>
            <p className="text-lg text-gray-600 mb-12">
              We design and deploy custom backend logic using AWS Lambda — no plugins, no duct tape. 
              Whether you're running Stripe, Supabase, Twilio, or Google APIs, we connect it all into 
              a reliable, serverless pipeline.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Stripe webhooks → order processing" },
              { title: "Twilio → auto text/email notifications" },
              { title: "Postmark → custom transactional emails" },
              { title: "Supabase or Firestore → auto-create user records" },
              { title: "API middleware → clean backend pipelines" }
            ].map((integration, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex items-start space-x-3"
              >
                <Check className="text-brand-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{integration.title}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-brand-600 text-brand-600 hover:bg-brand-50">
              Not sure if we support your tools? <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Why JointUp.ai Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't Let Zapier Break Your Business</h2>
            <p className="text-xl text-gray-600">
              🧱 Most teams use glue. We build foundations.
              No more hitting task limits, delays, or unexpected failures.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                icon: "🧠", 
                title: "We write real code", 
                description: "No templates or low-code guesswork" 
              },
              { 
                icon: "🔌", 
                title: "Fully custom integrations", 
                description: "You're not boxed into what a tool allows" 
              },
              { 
                icon: "📈", 
                title: "Infinitely scalable", 
                description: "Works whether you have 10 or 10,000 users" 
              },
              { 
                icon: "💬", 
                title: "Direct support from a real dev", 
                description: "No bots or waiting" 
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Workflows Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Imagine These Running Without You
            </h2>
            
            <div className="space-y-10">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <div className="font-medium text-lg text-brand-600 mb-3">💡 Example 1:</div>
                <p className="text-gray-700 text-lg">
                  A Stripe payment is made → order is saved to Supabase → confirmation email and SMS sent via Postmark + Twilio → your team gets a Slack ping.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <div className="font-medium text-lg text-brand-600 mb-3">💡 Example 2:</div>
                <p className="text-gray-700 text-lg">
                  A user fills out your Webflow form → info is passed through a Lambda function → enriched with Clearbit → sent to ActiveCampaign → they get a tailored onboarding email.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Button className="bg-brand-600 hover:bg-brand-700">
                💬 Want us to build yours? <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              You're a Perfect Fit If You're…
            </h2>
            
            <div className="space-y-4">
              {[
                "A startup founder tired of Zapier breaking",
                "A business that needs custom logic to run behind your site",
                "An agency looking to white-label automation work",
                "A SaaS team using Stripe, Supabase, or Twilio",
                "Anyone serious about scalability & control"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Check className="text-brand-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600 text-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Book a Free Automation Audit</h2>
            <p className="text-xl mb-8">
              We'll map out your current stack, identify time-wasting tasks, and give you a simple blueprint to automate it with AWS Lambda.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-brand-700 hover:border-transparent">
                Request My Free Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
