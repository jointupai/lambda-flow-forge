
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "We map your current stack + bottlenecks",
      details: [
        "Review your existing automation setup",
        "Identify manual processes that could be automated",
        "Document integration points between systems",
        "Understand your business goals and pain points"
      ]
    },
    {
      number: "02",
      title: "Automation Blueprint",
      description: "You get a clear plan (and a fixed quote)",
      details: [
        "Custom architecture diagram of your solution",
        "Detailed scope document with all features",
        "Timeline for development and deployment",
        "Fixed price quote with no surprise costs"
      ]
    },
    {
      number: "03",
      title: "Deployment",
      description: "We build, test, and go live — fast",
      details: [
        "Development of custom Lambda functions",
        "Integration with your existing systems",
        "Comprehensive testing to ensure reliability",
        "Deployment to your AWS environment with monitoring"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-xl text-gray-300">
              Our simple 3-step process to transform your workflows with AWS Lambda
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-8">
                  {/* Step Number */}
                  <div className="md:w-1/4">
                    <div className="bg-brand-50 text-brand-700 text-5xl font-bold w-20 h-20 rounded-full flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-xl text-gray-600 mb-6">{step.description}</p>
                    
                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-6">
                      <h4 className="font-semibold mb-4">What happens in this step:</h4>
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="bg-brand-100 text-brand-700 rounded-full p-1 mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* After Launch */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">After Launch</h2>
            <p className="text-xl text-gray-600 mb-8">
              We don't just build it and disappear. Our clients receive ongoing support, 
              monitoring, and optimization to ensure your automations keep running smoothly 
              as your business grows.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-3">Monitoring</h3>
                <p className="text-gray-600">
                  We set up proper monitoring and alerts so issues are caught before they impact your business.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-3">Support</h3>
                <p className="text-gray-600">
                  Direct access to your developer for questions, tweaks, and improvements.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-3">Scaling</h3>
                <p className="text-gray-600">
                  As your needs grow, we help adjust your automations to handle increasing workloads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-600 text-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Book a free discovery call to see how we can automate your workflows with AWS Lambda.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-brand-700 hover:border-transparent">
                Book a Free Discovery Call <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
