
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MessageSquare } from "lucide-react";

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    tools: "",
    automation: ""
  });

  // Form handling
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    alert("Thanks for your submission! We'll be in touch soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      website: "",
      tools: "",
      automation: ""
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Talk Automation
            </h1>
            <p className="text-xl text-gray-300">
              Book a free automation audit and discover how AWS Lambda can transform your workflows
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="md:col-span-1">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Mail className="text-brand-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <p className="text-gray-600">hello@jointup.ai</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="text-brand-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <p className="text-gray-600">Schedule a call online</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MessageSquare className="text-brand-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">Support</h3>
                      <p className="text-gray-600">support@jointup.ai</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Form */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Book a Free Automation Audit</h2>
                <p className="text-gray-600 mb-8">
                  We'll map out your current stack, identify time-wasting tasks, and give you a simple blueprint to automate it with AWS Lambda.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                        Website (optional)
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="tools" className="block text-sm font-medium text-gray-700 mb-1">
                      What tools are you currently using?
                    </label>
                    <input
                      type="text"
                      id="tools"
                      name="tools"
                      value={formData.tools}
                      onChange={handleChange}
                      placeholder="Stripe, Zapier, Supabase, etc."
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="automation" className="block text-sm font-medium text-gray-700 mb-1">
                      What do you want to automate?
                    </label>
                    <textarea
                      id="automation"
                      name="automation"
                      value={formData.automation}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your current workflow and what you'd like to improve"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500"
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button type="submit" size="lg" className="w-full bg-brand-600 hover:bg-brand-700">
                      Request My Free Audit <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">How long does it take to build a custom automation?</h3>
                <p className="text-gray-600">
                  It depends on the complexity, but most projects take 2-4 weeks from initial call to deployment. 
                  Simple integrations can be completed in as little as a few days.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Do I need my own AWS account?</h3>
                <p className="text-gray-600">
                  Yes, we deploy to your AWS account so you maintain full ownership of the code and infrastructure. 
                  We can help you set this up if needed.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">What happens if something breaks?</h3>
                <p className="text-gray-600">
                  We set up comprehensive monitoring and provide support to fix any issues that arise. 
                  Our solutions are built with error handling and recovery in mind.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">How much does a typical project cost?</h3>
                <p className="text-gray-600">
                  Pricing depends on the complexity and scope of the project. We provide fixed-price quotes 
                  after the initial discovery call, typically ranging from $2,000-$15,000.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
