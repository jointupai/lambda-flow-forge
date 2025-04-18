import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TestimonialVideos from "@/components/home/TestimonialVideos";
import AnimatedCodeBlock from "@/components/home/AnimatedCodeBlock";
import CostCalculator from "@/components/home/CostCalculator";
import ProblemSolutionSection from "@/components/home/ProblemSolutionSection";
import CalendlyDialog from "@/components/shared/CalendlyDialog";
import CardDemo from "@/components/ui/cards-demo-3";

export default function Home() {
  const [showCalendly, setShowCalendly] = useState(false);
  const lambdaCode = `def lambda_handler(event, context):
    # Parse Stripe webhook
    stripe_event = json.loads(event['body'])
    
    # Extract customer data
    customer = stripe_event['data']['object']
    
    # Update database record
    update_supabase_record(customer)
    
    # Send confirmation via Twilio
    send_sms_notification(customer['phone'])
    
    # Post to Slack channel
    post_to_slack(customer)
    
    return {"statusCode": 200}`;

  return (
    <div className="flex flex-col min-h-screen">
      <CalendlyDialog open={showCalendly} onOpenChange={setShowCalendly} />
      
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight text-gray-900">
                Modern Backend Automation. Built for Scale.
              </h1>
              <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-600">
                We replace bloated tools and manual ops with cloud-native infrastructure — using AWS Lambda and Google Cloud Functions — so your business runs on autopilot.
              </p>
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-brand-primary-400 hover:bg-brand-primary-500 text-black text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto rounded-full" 
                onClick={() => window.open('https://calendly.com/jointup/intro', '_blank')}
              >
                <span className="font-bold">🟡 Schedule a Strategy Call</span>
                <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <AnimatedCodeBlock code={lambdaCode} />
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              You've Outgrown Zapier. You're Scaling. You Need Infrastructure.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Startups, SaaS, and service businesses hit a wall when it comes to backend workflows. 
              Zapier breaks. CRMs get messy. Devs are overloaded.
              <span className="block mt-4">
                We step in and build the invisible systems that power growth — using battle-tested, serverless architecture.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Animated Card Section - Replacing Logo Scroller */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <CardDemo />
        </div>
      </section>

      {/* Problem Solution Section */}
      <ProblemSolutionSection />

      {/* Cost Calculator Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CostCalculator />
        </div>
      </section>

      {/* What We Build Section - Mobile Optimized */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">What We Build</h2>
            <p className="text-base md:text-lg text-gray-600">
              Custom backend logic that connects your essential tools into a seamless, 
              reliable automation pipeline.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
            {[{
            icon: <CreditCard className="text-[#F97316]" size={32} />,
            title: "Stripe",
            description: "Payment → webhook → metadata update"
          }, {
            icon: <MessageSquare className="text-[#F97316]" size={32} />,
            title: "Twilio",
            description: "Form → SMS/email triggers"
          }, {
            icon: <MessageSquare className="text-[#F97316]" size={32} />,
            title: "Postmark",
            description: "Automated receipts and status emails"
          }, {
            icon: <Database className="text-[#F97316]" size={32} />,
            title: "Supabase",
            description: "Insert/update database records"
          }, {
            icon: <Code className="text-[#F97316]" size={32} />,
            title: "API Middleware",
            description: "Multi-service logic flows"
          }, {
            icon: <Bell className="text-[#F97316]" size={32} />,
            title: "Slack + Discord",
            description: "Live event notifications"
          }].map((integration, index) => <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="mb-4">{integration.icon}</div>
                <h3 className="font-bold text-lg mb-2">{integration.title}</h3>
                <p className="text-gray-700">{integration.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Mini Use Case Section - Mobile Optimized */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center">
              How It Works: A Real Example
            </h2>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-0">
              {/* Step 1 */}
              <div className="flex-1 relative">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-full">
                  <div className="bg-[#F97316] text-white w-8 h-8 rounded-full flex items-center justify-center mb-4 font-bold">1</div>
                  <h3 className="font-bold text-lg mb-3">Customer Checkout</h3>
                  <p className="text-gray-700">A customer completes payment with Stripe, which triggers a webhook to your AWS Lambda function.</p>
                </div>
                <div className="hidden md:block absolute right-0 top-1/2 h-2 w-12 bg-gray-300 -mr-6 transform -translate-y-1/2"></div>
              </div>
              
              {/* Step 2 */}
              <div className="flex-1 relative">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-full">
                  <div className="bg-[#F97316] text-white w-8 h-8 rounded-full flex items-center justify-center mb-4 font-bold">2</div>
                  <h3 className="font-bold text-lg mb-3">Lambda Processing</h3>
                  <p className="text-gray-700">Lambda parses payment + metadata, creates a new row in Supabase, and sends customer confirmation via Twilio SMS.</p>
                </div>
                <div className="hidden md:block absolute right-0 top-1/2 h-2 w-12 bg-gray-300 -mr-6 transform -translate-y-1/2"></div>
              </div>
              
              {/* Step 3 */}
              <div className="flex-1">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-full">
                  <div className="bg-[#F97316] text-white w-8 h-8 rounded-full flex items-center justify-center mb-4 font-bold">3</div>
                  <h3 className="font-bold text-lg mb-3">Team Notification</h3>
                  <p className="text-gray-700">Your team receives instant notification in Slack with order details and customer information.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8 md:mt-12">
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium text-sm md:text-base">
                ✅ No Zapier. Just clean code and real-time results.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Videos */}
      <TestimonialVideos />

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-brand-primary-400 text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to Replace Your Zapier Stack?</h2>
            <p className="text-base md:text-xl mb-6 md:mb-8">
              Book a free audit of your current automation setup and we'll show you how 
              AWS Lambda can make everything faster, more reliable, and infinitely scalable.
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-black text-black hover:bg-black hover:text-brand-primary-400 font-medium"
              onClick={() => window.open('https://calendly.com/jointup/intro', '_blank')}
            >
              Get Your Free Integration Audit
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
