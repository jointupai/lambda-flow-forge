import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import TestimonialVideos from "@/components/home/TestimonialVideos";
import AnimatedCodeBlock from "@/components/home/AnimatedCodeBlock";
import CostCalculator from "@/components/home/CostCalculator";
import ProblemSolutionSection from "@/components/home/ProblemSolutionSection";
import CalendlyDialog from "@/components/shared/CalendlyDialog";
import CardDemo from "@/components/ui/cards-demo-3";
import FeaturesSectionDemo from "@/components/ui/features-section";
import WobbleCardDemo from "@/components/ui/wobble-card-demo";
import ContactDrawer from "@/components/shared/ContactDrawer";

export default function Home() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [openContactDrawer, setOpenContactDrawer] = useState(false);
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

  return <div className="flex flex-col min-h-screen">
      <CalendlyDialog open={showCalendly} onOpenChange={setShowCalendly} />
      
      {/* Hero Section */}
      <section className="bg-white py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="text-center lg:text-left space-y-4 md:space-y-6">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                Build Scalable Backend Automation That Powers Your Growth
              </h1>
              <p className="text-base md:text-lg mb-6 text-gray-600 max-w-2xl mx-auto lg:mx-0">
                We build cloud automation infrastructure for companies doing $1M–$100M+ — replacing brittle ops with real-time, resilient systems that scale with your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="default"
                  variant="outline"
                  onClick={() => {
                    const drawerButton = document.querySelector('[data-drawer-trigger]');
                    if (drawerButton) {
                      (drawerButton as HTMLElement).click();
                    }
                  }} 
                  className="w-full sm:w-auto bg-transparent border border-black text-black hover:bg-gray-100 text-base md:text-lg px-6 md:px-8 h-14 rounded-full"
                >
                  Let's Partner Up
                </Button>
              </div>
            </div>
            <div className="relative mt-6 lg:mt-0 w-full max-w-full">
              <div className="w-full px-2 sm:px-4">
                <AnimatedCodeBlock code={lambdaCode} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist Section with Card */}
      <section className="bg-gray-50 py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900">You've Scaled. Your Automation Stack Hasn't.</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Startups, SaaS, and service businesses hit a wall when it comes to backend workflows. 
                Zapier breaks. CRMs get messy. Devs are overloaded.
                <span className="block mt-4">
                  We step in and build the invisible systems that power growth — using battle-tested, serverless architecture.
                </span>
              </p>
              <Button asChild className="mt-4 bg-transparent border border-black text-black hover:bg-gray-100 rounded-full">
                <Link to="/case-studies/usacartags" className="flex items-center cursor-pointer gap-1 px-4 py-6 text-black hover:text-gray-800 transition-all duration-300">
                  View Case Studies
                </Link>
              </Button>
            </div>
            <div className="mt-6 lg:mt-0">
              <CardDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Wobble Card Demo Section */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <WobbleCardDemo />
        </div>
      </section>

      {/* Features Section */}
      <div className="px-4 md:px-6 lg:px-8">
        <FeaturesSectionDemo />
      </div>

      {/* Problem Solution Section */}
      <div className="px-4 md:px-6 lg:px-8">
        <ProblemSolutionSection />
      </div>

      {/* Cost Calculator Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <CostCalculator />
        </div>
      </section>

      {/* Testimonial Videos */}
      <section className="px-4 md:px-6 lg:px-8">
        <TestimonialVideos />
      </section>
      
      {/* ContactDrawer with trigger attribute for programmatic opening */}
      <ContactDrawer />
    </div>;
}
