import React, { useState } from 'react';
import { ArrowRight, CreditCard, MessageSquare, Database, Code, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import TestimonialVideos from "@/components/home/TestimonialVideos";
import AnimatedCodeBlock from "@/components/home/AnimatedCodeBlock";
import CostCalculator from "@/components/home/CostCalculator";
import ProblemSolutionSection from "@/components/home/ProblemSolutionSection";
import CalendlyDialog from "@/components/shared/CalendlyDialog";
import CardDemo from "@/components/ui/cards-demo-3";
import FeaturesSectionDemo from "@/components/ui/features-section";
import WobbleCardDemo from "@/components/ui/wobble-card-demo";
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
  return <div className="flex flex-col min-h-screen">
      <CalendlyDialog open={showCalendly} onOpenChange={setShowCalendly} />
      
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight text-gray-900 xl:text-5xl">Build Scalable Backend Automation That Powers Your Growth</h1>
              <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-600">We build cloud automation infrastructure for companies doing $1M–$100M+ — replacing brittle ops with real-time, resilient systems that scale with your growth.</p>
              <Button size="lg" className="w-full sm:w-auto bg-brand-primary-400 hover:bg-brand-primary-500 text-black text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto rounded-full" onClick={() => window.open('https://calendly.com/jointup/intro', '_blank')}>
                <span className="font-bold text-base">Schedule a Strategy Call</span>
                <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <AnimatedCodeBlock code={lambdaCode} />
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist Section with Card */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">You've Scaled. Your Automation Stack Hasn't.</h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Startups, SaaS, and service businesses hit a wall when it comes to backend workflows. 
                Zapier breaks. CRMs get messy. Devs are overloaded.
                <span className="block mt-4">
                  We step in and build the invisible systems that power growth — using battle-tested, serverless architecture.
                </span>
              </p>
              <Button asChild className="mt-6 bg-black text-white hover:bg-gray-900">
                <Link to="/case-studies/usacartags" className="rounded-[100px] px-[26px] py-[26px]">
                  USACARTAGS Demo <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
            <div>
              <CardDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Wobble Card Demo Section */}
      <section className="py-16 md:py-24">
        <WobbleCardDemo />
      </section>

      {/* Features Section */}
      <FeaturesSectionDemo />

      {/* What We Build Section */}
      

      {/* Problem Solution Section */}
      <ProblemSolutionSection />

      {/* Cost Calculator Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CostCalculator />
        </div>
      </section>

      {/* Mini Use Case Section - Mobile Optimized */}
      

      {/* Testimonial Videos */}
      <TestimonialVideos />

      {/* CTA Section */}
      
    </div>;
}