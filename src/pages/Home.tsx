import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Link as LinkIcon, Zap, Database, Github, TerminalSquare, Globe2 } from 'lucide-react';
import AnimatedCodeBlock from "@/components/home/AnimatedCodeBlock";
import CalendlyDialog from "@/components/shared/CalendlyDialog";
import CardDemo from "@/components/ui/cards-demo-3";
import ContactDrawer from "@/components/shared/ContactDrawer";
import LogoScroller from "@/components/home/LogoScroller";
import MetricsSection from "@/components/home/MetricsSection";
export default function Home() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [openContactDrawer, setOpenContactDrawer] = useState(false);
  const [activeTab, setActiveTab] = useState('aws');
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
  return <div className="flex flex-col min-h-screen overflow-x-hidden">
      <CalendlyDialog open={showCalendly} onOpenChange={setShowCalendly} />
      <ContactDrawer open={openContactDrawer} onOpenChange={setOpenContactDrawer} />
      
      {/* Hero Section */}
      <section className="bg-black py-20 md:py-28 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-grid"></div>
        <div className="absolute inset-0 glow-effect"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Automate Work.<br />Scale Smart.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
              We build AI-powered apps and automations that replace manual tasks and scale with your business. 
              Trusted by founders, ops leaders, and fast-growing teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Button size="lg" onClick={() => setShowCalendly(true)} className="bg-white hover:bg-gray-100 text-black font-medium rounded-full text-base h-12 px-8">
                Book a Free Discovery Call
              </Button>
              <Button variant="outline" size="lg" onClick={() => setOpenContactDrawer(true)} className="bg-transparent border border-gray-700 text-gray-200 hover:bg-gray-800 font-medium rounded-full text-base h-12 px-8">
                Let's Partner Up
              </Button>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                <Zap size={16} className="text-white" />
                <span>No-code setup, enterprise-grade reliability</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code display section */}
      

      {/* Integration Partners */}
      

      {/* Key Metrics Section - Replaced with the new interactive MetricsSection */}
      <MetricsSection />

      {/* Services Section */}
      <section className="bg-black py-16 md:py-24 w-full border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We build the systems that power your business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-zinc-900 rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Code className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Custom Web Application Development</h3>
              <p className="text-gray-400 mb-4">
                From MVPs to enterprise dashboards, we build full-stack apps that run fast, look clean, and scale with your growth. Built with modern tech like React, Node.js, and cloud-native architecture.
              </p>
              <Button asChild variant="ghost" className="p-0 hover:bg-transparent group">
                <Link to="/solutions/custom-cloud-solutions" className="flex items-center text-blue-400 font-medium">
                  Learn more
                  <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            {/* Service 2 */}
            <div className="bg-zinc-900 rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">AI-Powered Automation</h3>
              <p className="text-gray-400 mb-4">
                We automate workflows using AWS Lambda, Google Cloud Functions, and AI APIs to eliminate manual work. From CRMs to internal tools, we turn hours of repetitive tasks into automated flows.
              </p>
              <Button asChild variant="ghost" className="p-0 hover:bg-transparent group">
                <Link to="/solutions/automation-infrastructure" className="flex items-center text-purple-400 font-medium">
                  Learn more
                  <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            {/* Service 3 */}
            <div className="bg-zinc-900 rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                <LinkIcon className="text-green-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">CRM & API Integrations</h3>
              <p className="text-gray-400 mb-4">
                We connect your tools—HubSpot, Airtable, Slack, Stripe, Notion—so your team has one smooth workflow, not ten broken ones. Real-time, scalable, and built to last.
              </p>
              <Button asChild variant="ghost" className="p-0 hover:bg-transparent group">
                <Link to="/solutions/webhook-orchestration" className="flex items-center text-green-400 font-medium">
                  Learn more
                  <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Deploy Anywhere Section */}
      <section className="bg-black py-16 md:py-24 w-full border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Deploy once, deliver everywhere.
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              When you push code to the cloud with JointUp, we make it instantly available across the planet.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="outline" className="bg-zinc-900 border border-gray-800 text-white hover:bg-zinc-800" onClick={() => setShowCalendly(true)}>
                Book a Discovery Call
              </Button>
              <Button variant="outline" className="bg-zinc-900 border border-gray-800 text-white hover:bg-zinc-800" onClick={() => setOpenContactDrawer(true)}>
                Learn about Enterprise
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Deployment Section */}
      <section className="bg-black py-16 md:py-24 w-full border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Deploy your first app in seconds.
              </h2>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-500/20 p-1 rounded">
                    <TerminalSquare size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Deploy automatically</h3>
                    <p className="text-gray-400 mt-1">Set it and forget it with fully automated deployments</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-purple-500/20 p-1 rounded">
                    <Code size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Wide range support</h3>
                    <p className="text-gray-400 mt-1">Works with all popular frameworks and libraries</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-green-500/20 p-1 rounded">
                    <Globe2 size={18} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Automatic HTTPS</h3>
                    <p className="text-gray-400 mt-1">SSL certificates for all your domains included</p>
                  </div>
                </li>
              </ul>
              
              <Button className="mt-8 bg-white text-black hover:bg-gray-100" size="lg" onClick={() => setShowCalendly(true)}>
                <span>Start Deploying</span>
                <ArrowRight size={16} />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900 rounded-lg border border-gray-800 p-6 flex flex-col items-center justify-center aspect-square">
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="#FF4785" d="M5 3l14 9-14 9z" fill="none" />
                  </svg>
                </div>
                <p className="text-gray-300">AWS Lambda</p>
              </div>
              
              <div className="bg-zinc-900 rounded-lg border border-gray-800 p-6 flex flex-col items-center justify-center aspect-square">
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                  <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none">
                    <path fill="#00D8FF" d="M128 110.7c9.6 0 17.3 7.7 17.3 17.3s-7.7 17.3-17.3 17.3-17.3-7.7-17.3-17.3 7.7-17.3 17.3-17.3z"></path>
                    <path fill="#00D8FF" d="M128 83.8c23.3 0 44 3.5 60.6 9.4 19.7 7.1 31.7 18 31.7 28.9 0 11.2-13 22.8-34.1 30.2-16 5.5-36.8 8.4-58.2 8.4-22.2 0-43.6-2.7-59.9-8.5-19.7-7-32.2-18.4-32.2-30 0-10.8 11.7-21.5 31.1-28.6 16.8-6.2 38.7-9.8 61-9.8z" strokeWidth="2"></path>
                    <path fill="#00D8FF" d="M98.4 96.2c11.6-20 25.3-36.1 38.1-45.6 15.2-11.3 29-14.2 36.7-9 8 5.5 10.8 21 6.4 42.5-3.3 16.5-11.7 35.9-23.6 55.1-12.4 19.9-26.4 36.2-39.4 45.5-15.5 11.2-30.4 13.7-38.3 8.4-7.6-5.2-10.5-19.2-6.7-38.8 3.1-16.8 11.7-37 26.8-58.1z" strokeWidth="2"></path>
                    <path fill="#00D8FF" d="M98.3 159.7c-11.6-19.9-20.2-40-23.5-56.7-3.9-19.9-.9-34.8 6.9-40.1 8.1-5.6 22.9-2.9 38.5 8.1 12 8.5 25.8 23.1 38 42.6 12.9 20.4 21.7 40.2 25.1 56.3 4 19.1 1.1 33.5-6.8 39-7.6 5.3-20.9 2.7-35.7-7.5-13.4-9.3-27.6-25.3-41.5-49.7z" strokeWidth="2"></path>
                  </svg>
                </div>
                <p className="text-gray-300">React Apps</p>
              </div>
              
              <div className="bg-zinc-900 rounded-lg border border-gray-800 p-6 flex flex-col items-center justify-center aspect-square">
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
                    <path d="M12 0L1.608 6v12l2.182 1.26V7.26L12 2.52l8.21 4.74v8.48l-8.21 4.74-8.21-4.74V12.6L1.608 11.4v1.68l10.392 6 10.392-6V6L12 0z" fill="#64ffda" />
                  </svg>
                </div>
                <p className="text-gray-300">Next.js Apps</p>
              </div>
              
              <div className="bg-zinc-900 rounded-lg border border-gray-800 p-6 flex flex-col items-center justify-center aspect-square">
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                    <path d="M6 3h12l4 6-10 12L2 9l4-6z" fill="#3178C6" />
                    <path d="M17.2 10.875h-7v2.25h4.675c-.325 2.43-2.3 3.375-4.675 3.375-2.825 0-5.2-2.27-5.2-5.2s2.375-5.2 5.2-5.2c1.3 0 2.45.475 3.425 1.175l1.7-1.7c-1.35-1.35-3.2-1.95-5.125-1.95-4.225 0-7.625 3.4-7.625 7.625s3.4 7.675 7.625 7.675c3.85 0 7.3-2.75 7.3-7.625 0-.5-.05-1.075-.15-1.575l-.15-.85z" fill="white" />
                  </svg>
                </div>
                <p className="text-gray-300">Google Cloud</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black relative overflow-hidden border-t border-gray-800">
        <div className="absolute inset-0 bg-grid"></div>
        <div className="absolute inset-0 glow-effect"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Let's Build Something Better
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Book a free discovery call to explore how we can automate, integrate, and scale your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setShowCalendly(true)} className="bg-white hover:bg-gray-100 text-black font-medium rounded-md text-base md:text-lg h-12 px-8">
                Book a Free Discovery Call
              </Button>
              <Button variant="outline" size="lg" onClick={() => setOpenContactDrawer(true)} className="bg-transparent border border-gray-700 text-gray-200 hover:bg-gray-800 font-medium rounded-md text-base md:text-lg h-12 px-8">
                Let's Partner Up
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
}