import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MessageSquare, User, Building, Globe, Wrench, FileText, AlertCircle, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import CalendlyDialog from "@/components/shared/CalendlyDialog";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(2, { message: "Company name is required" }),
  website: z.string().url({ message: "Please enter a valid URL" }).or(z.string().length(0)),
  tools: z.string().min(2, { message: "Please list at least one tool" }),
  automation: z.string().min(10, { message: "Please provide more details about your automation needs" })
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      website: "",
      tools: "",
      automation: ""
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    const payload = {
      name: data.name,
      email: data.email,
      companyName: data.company,
      website: data.website,
      tools: data.tools,
      automationGoal: data.automation,
    };

    try {
      const response = await fetch("https://kktvtpzkcf.execute-api.us-east-2.amazonaws.com/default/website-email-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        toast.success("Form submitted successfully!", {
          description: "We'll be in touch soon about your automation audit.",
          icon: <Check className="h-4 w-4" />
        });
        form.reset();
        setShowCalendly(true);
      } else {
        toast.error("There was an issue submitting your form. Please try again.");
      }
    } catch (error) {
      toast.error("There was an issue submitting your form. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <CalendlyDialog open={showCalendly} onOpenChange={setShowCalendly} />
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Let's Talk Automation
            </h1>
            <p className="text-xl text-gray-300">
              Book a free automation audit and discover how AWS Lambda can transform your workflows
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                    <Mail className="text-brand-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <a href="mailto:hello@jointup.ai" className="text-gray-600 hover:text-brand-600 transition-colors">hello@jointup.ai</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                    <Phone className="text-brand-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">Schedule a call online</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                    <MessageSquare className="text-brand-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">Support</h3>
                      <a href="mailto:support@jointup.ai" className="text-gray-600 hover:text-brand-600 transition-colors">support@jointup.ai</a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-brand-600" /> 
                    Why get an audit?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Our automation experts will analyze your current workflows, 
                    identify opportunities for improvement, and provide a 
                    customized plan to help you save time and money.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Book a Free Automation Audit</h2>
                <p className="text-gray-600 mb-8">
                  We'll map out your current stack, identify time-wasting tasks, and give you a simple blueprint to automate it with AWS Lambda.
                </p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <User className="h-4 w-4" /> Name
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Mail className="h-4 w-4" /> Email
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="you@company.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Building className="h-4 w-4" /> Company Name
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Your company" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Globe className="h-4 w-4" /> Website (optional)
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="https://yourcompany.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="tools"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Wrench className="h-4 w-4" /> What tools are you currently using?
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Stripe, Zapier, Supabase, etc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="automation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <FileText className="h-4 w-4" /> What do you want to automate?
                          </FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe your current workflow and what you'd like to improve" 
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div>
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-brand-600 hover:bg-brand-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>Processing...</>
                        ) : (
                          <>
                            Request My Free Audit <ArrowRight className="ml-2" size={16} />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">How long does it take to build a custom automation?</h3>
                <p className="text-gray-600">
                  It depends on the complexity, but most projects take 2-4 weeks from initial call to deployment. 
                  Simple integrations can be completed in as little as a few days.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Do I need my own AWS account?</h3>
                <p className="text-gray-600">
                  Yes, we deploy to your AWS account so you maintain full ownership of the code and infrastructure. 
                  We can help you set this up if needed.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">What happens if something breaks?</h3>
                <p className="text-gray-600">
                  We set up comprehensive monitoring and provide support to fix any issues that arise. 
                  Our solutions are built with error handling and recovery in mind.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
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
