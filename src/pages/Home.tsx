
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from 'lucide-react';
import TestimonialVideos from "@/components/home/TestimonialVideos";
import AnimatedCodeBlock from "@/components/home/AnimatedCodeBlock";
import CostCalculator from "@/components/home/CostCalculator";
import ProblemSolutionSection from "@/components/home/ProblemSolutionSection";
import CalendlyDialog from "@/components/shared/CalendlyDialog";
import CardDemo from "@/components/ui/cards-demo-3";
import FeaturesSectionDemo from "@/components/ui/features-section";
import WobbleCardDemo from "@/components/ui/wobble-card-demo";
import ContactDrawer from "@/components/shared/ContactDrawer";
import LogoScroller from "@/components/home/LogoScroller";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <CalendlyDialog open={showCalendly} onOpenChange={setShowCalendly} />
      <ContactDrawer open={openContactDrawer} onOpenChange={setOpenContactDrawer} />
      
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24 lg:py-32 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-gray-100/50 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="text-center lg:text-left space-y-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                Build Scalable Backend Automation That Powers Your Growth
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                We build cloud automation infrastructure for companies doing $1M–$100M+ — replacing brittle ops with real-time, resilient systems that scale with your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() => setShowCalendly(true)}
                  className="bg-primary hover:bg-primary/90 text-black font-medium rounded-full text-base md:text-lg h-14 px-8"
                >
                  Book a Discovery Call
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => setOpenContactDrawer(true)} 
                  className="bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-50 font-medium rounded-full text-base md:text-lg h-14 px-8"
                >
                  Let's Partner Up
                </Button>
              </div>
              <div className="pt-4">
                <p className="text-sm text-gray-500 flex items-center justify-center lg:justify-start gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>No-code setup, enterprise-grade reliability</span>
                </p>
              </div>
            </div>
            <div className="relative w-full max-w-full animate-fade-in">
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="text-xs text-gray-400 ml-2">lambda_handler.py</div>
                </div>
                <div className="p-2 sm:p-4">
                  <AnimatedCodeBlock code={lambdaCode} />
                </div>
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-primary to-primary/70 rounded-xl blur-md opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">Seamlessly integrates with your tech stack</p>
          </div>
          <LogoScroller />
        </div>
      </section>

      {/* Why We Exist Section with Card */}
      <section className="bg-gray-50 py-16 md:py-24 lg:py-28 w-full">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                You've Scaled. Your Automation Stack Hasn't.
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Startups, SaaS, and service businesses hit a wall when it comes to backend workflows. 
                Zapier breaks. CRMs get messy. Devs are overloaded.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We step in and build the invisible systems that power growth — using battle-tested, serverless architecture.
              </p>
              <Button asChild className="mt-4 bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-50 font-medium rounded-full text-base px-8 py-6 h-auto">
                <Link to="/case-studies/usacartags" className="flex items-center cursor-pointer gap-2">
                  View Case Studies
                  <ArrowRight size={18} />
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
      <section className="py-16 md:py-24 lg:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Custom Automation That Just Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We build resilient backend systems that handle your critical workflows at scale, 
              without the limitations of no-code tools.
            </p>
          </div>
          <WobbleCardDemo />
        </div>
      </section>

      {/* Features Section with improved spacing */}
      <div className="py-16 md:py-24 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Enterprise-Grade Infrastructure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built on AWS Lambda with automated scaling, monitoring, and error handling
            </p>
          </div>
          <FeaturesSectionDemo />
        </div>
      </div>

      {/* Problem Solution Section */}
      <div className="py-16 md:py-24 lg:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ProblemSolutionSection />
        </div>
      </div>

      {/* Cost Calculator Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <CostCalculator />
        </div>
      </section>

      {/* Testimonial Videos */}
      <section className="py-16 md:py-24 lg:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <TestimonialVideos />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to build automation that scales with your business?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Let's discuss your backend workflows and how we can transform them into 
              resilient, scalable systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setShowCalendly(true)} 
                className="bg-primary hover:bg-primary/90 text-black font-medium rounded-full text-base md:text-lg h-14 px-8"
              >
                Book a Discovery Call
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => setOpenContactDrawer(true)} 
                className="bg-transparent border border-gray-300 text-white hover:bg-white/10 font-medium rounded-full text-base md:text-lg h-14 px-8"
              >
                Let's Partner Up
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
