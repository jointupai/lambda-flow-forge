
import { ArrowRight, Check, X, Zap, CreditCard, MessageSquare, Bell, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TestimonialVideos from "@/components/home/TestimonialVideos";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                We Build AWS Lambda Integrations That Automate Your Business
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600">
                Scalable backend logic that replaces Zapier and powers real-time workflows 
                for Stripe, Twilio, Postmark, Supabase & more.
              </p>
              <Button 
                size="lg" 
                className="bg-[#F97316] hover:bg-[#EA580C] text-white text-lg px-8 py-6 h-auto"
              >
                <span>Get a Free Integration Audit</span>
                <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-lg">
                <div className="flex items-center mb-4 text-sm text-gray-600">
                  <div className="flex space-x-2 mr-auto">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="font-mono">lambda_function.py</div>
                </div>
                <pre className="font-mono text-sm text-gray-800 overflow-x-auto">
<code>{`def lambda_handler(event, context):
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
    
    return {"statusCode": 200}`}</code>
                </pre>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#F97316] text-white p-3 rounded-lg shadow-lg">
                <Zap size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why AWS Lambda Instead of Zapier?</h2>
          <div className="grid md:grid-cols-2 gap-16">
            {/* Problem column */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">The Problem</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-full">
                    <X className="text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Zapier breaks under pressure</h4>
                    <p className="text-gray-700">Task limits, timeout issues, and unexpected failures as you scale.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-full">
                    <X className="text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">It's not built for developers</h4>
                    <p className="text-gray-700">No version control, limited logic capabilities, and closed ecosystem.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-full">
                    <X className="text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">You're stitching tools together</h4>
                    <p className="text-gray-700">Fragile connections between critical services with no error handling.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Solution column */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">The Solution</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Infinitely scalable</h4>
                    <p className="text-gray-700">No task limits or timeouts. Handles millions of operations with ease.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Custom code that's yours</h4>
                    <p className="text-gray-700">Full control over your automations with real error handling.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Direct integrations</h4>
                    <p className="text-gray-700">Connect your tools with clean, reliable pipelines that you own forever.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Build</h2>
            <p className="text-lg text-gray-600">
              Custom backend logic that connects your essential tools into a seamless, 
              reliable automation pipeline.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                icon: <CreditCard className="text-[#F97316]" size={32} />,
                title: "Stripe",
                description: "Payment → webhook → metadata update"
              },
              { 
                icon: <MessageSquare className="text-[#F97316]" size={32} />,
                title: "Twilio",
                description: "Form → SMS/email triggers"
              },
              { 
                icon: <MessageSquare className="text-[#F97316]" size={32} />,
                title: "Postmark",
                description: "Automated receipts and status emails"
              },
              { 
                icon: <Database className="text-[#F97316]" size={32} />,
                title: "Supabase",
                description: "Insert/update database records"
              },
              { 
                icon: <Zap className="text-[#F97316]" size={32} />,
                title: "API Middleware",
                description: "Multi-service logic flows"
              },
              { 
                icon: <Bell className="text-[#F97316]" size={32} />,
                title: "Slack + Discord",
                description: "Live event notifications"
              }
            ].map((integration, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{integration.icon}</div>
                <h3 className="font-bold text-lg mb-2">{integration.title}</h3>
                <p className="text-gray-700">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Use Case Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
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
            
            <div className="text-center mt-12">
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium">
                ✅ No Zapier. Just clean code and real-time results.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Videos Section */}
      <TestimonialVideos />

      {/* CTA Section */}
      <section className="py-20 bg-[#F97316] text-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Replace Your Zapier Stack?</h2>
            <p className="text-xl mb-8">
              Book a free audit of your current automation setup and we'll show you how 
              AWS Lambda can make everything faster, more reliable, and infinitely scalable.
            </p>
            <Link to="/contact">
              <Button 
                size="lg"
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#F97316] font-medium"
              >
                Get Your Free Integration Audit
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
