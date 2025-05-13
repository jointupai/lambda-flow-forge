import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Phone } from "lucide-react";
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters"
  }),
  email: z.string().email({
    message: "Please enter a valid email address"
  }),
  companyRole: z.string().min(2, {
    message: "Role is required"
  }),
  companyName: z.string().min(2, {
    message: "Company name is required"
  }),
  website: z.string().url({
    message: "Please enter a valid URL"
  }).or(z.string().length(0)),
  companySize: z.string().min(1, {
    message: "Company size is required"
  }),
  companyRevenue: z.string().min(1, {
    message: "Annual revenue is required"
  }),
  budget: z.string().min(1, {
    message: "Budget range is required"
  }),
  intrestedin: z.string().min(1, {
    message: "Please select at least one service"
  }),
  message: z.string().optional()
});
type FormValues = z.infer<typeof formSchema>;
const getServiceDescription = (service: string): string => {
  const serviceMap: Record<string, string> = {
    'automation': 'Automation Infrastructure',
    'zapier': 'Zapier Replacement',
    'stripe': 'Stripe Payment Workflows',
    'crm': 'CRM & Lead Flow',
    'webhook': 'Webhook Orchestration',
    'cloud': 'Custom Cloud Solutions'
  };
  return `They are interested in ${serviceMap[service]}`;
};
export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      companyRole: "",
      companyName: "",
      website: "",
      companySize: "",
      companyRevenue: "",
      budget: "",
      intrestedin: "",
      message: ""
    }
  });
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    console.log("Submitting form data:", data);
    try {
      const payload = {
        name: data.name,
        email: data.email,
        companyName: data.companyName,
        companyRole: data.companyRole,
        website: data.website,
        companySize: data.companySize,
        companyRevenue: data.companyRevenue,
        budget: data.budget,
        intrestedin: getServiceDescription(data.intrestedin),
        message: data.message || ""
      };
      console.log("Sending payload to API:", payload);
      await fetch("https://kktvtpzkcf.execute-api.us-east-2.amazonaws.com/default/website-email-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
        mode: "no-cors"
      });
      setIsSuccess(true);
      toast.success("Thank you! Your message has been submitted successfully.");
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("There was an issue submitting your form. Please try again.");
    }
    setIsSubmitting(false);
  };
  return <div className="w-full py-0 pt-[80px]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="border border-gray-800 rounded-none overflow-hidden">
          <div className="relative py-12 md:py-16 px-8">
            <div className="absolute inset-0 bg-grid"></div>
            <div className="relative z-10">
              <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Talk to our Sales team.</h1>
                    
                    <div className="space-y-6 mt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-zinc-900 p-2 rounded-full">
                          <Phone className="h-6 w-6 text-gray-300" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">Get a custom demo.</h3>
                          <p className="text-gray-400">Discover the value of JointUp for your enterprise and explore our custom plans and pricing.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="bg-zinc-900 p-2 rounded-full">
                          <Phone className="h-6 w-6 text-gray-300" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">Set up your Enterprise trial.</h3>
                          <p className="text-gray-400">See for yourself how JointUp Enterprise speeds up your workflow & impact.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-zinc-800 pt-6 mt-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <p className="text-xl font-bold">6x faster</p>
                          <p className="text-gray-400">to build and deploy.</p>
                          <div className="mt-4">
                            <img src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//jointup%20(2).png" alt="JointUp" className="h-6" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-xl font-bold">98% faster</p>
                          <p className="text-gray-400">time to market.</p>
                          <div className="mt-4">
                            <img src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//jointup%20(2).png" alt="JointUp" className="h-6" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-10">
                        <blockquote className="border-l-2 border-zinc-700 pl-4 italic">
                          <p className="text-lg">"JointUp makes <span className="font-semibold">our developers happier</span> and lets us go to market quicker."</p>
                        </blockquote>
                        <div className="mt-4">
                          <img src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//jointup%20(2).png" alt="Client" className="h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-zinc-800 rounded-none p-8">
                    {isSuccess ? <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-8 h-8 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-100">Thank You!</h2>
                        <p className="text-gray-400">
                          We've received your submission and will be in touch soon.
                        </p>
                        <Button onClick={() => setIsSuccess(false)} className="mt-6">
                          Submit Another Request
                        </Button>
                      </div> : <div>
                        
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                              <FormField control={form.control} name="name" render={({
                            field
                          }) => <FormItem>
                                  <FormLabel className="text-base font-medium text-gray-200">Name *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your name" {...field} className="h-12 text-base bg-zinc-900 border-gray-800 hover:border-gray-700 focus:border-white transition-colors" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>} />
                              <FormField control={form.control} name="email" render={({
                            field
                          }) => <FormItem>
                                  <FormLabel className="text-base font-medium text-gray-200">Email *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="you@company.com" type="email" {...field} className="h-12 text-base bg-zinc-900 border-gray-800 hover:border-gray-700 focus:border-white transition-colors" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>} />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <FormField control={form.control} name="companyRole" render={({
                            field
                          }) => <FormItem>
                                  <FormLabel className="text-base font-medium text-gray-200">Your Role *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your role" {...field} className="h-12 text-base bg-zinc-900 border-gray-800 hover:border-gray-700 focus:border-white transition-colors" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>} />
                              <FormField control={form.control} name="companyName" render={({
                            field
                          }) => <FormItem>
                                  <FormLabel className="text-base font-medium text-gray-200">Company Name *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Company name" {...field} className="h-12 text-base bg-zinc-900 border-gray-800 hover:border-gray-700 focus:border-white transition-colors" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>} />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <FormField control={form.control} name="website" render={({
                            field
                          }) => <FormItem>
                                  <FormLabel className="text-base font-medium text-gray-200">Website</FormLabel>
                                  <FormControl>
                                    <Input placeholder="https://yourcompany.com" {...field} className="h-12 text-base bg-zinc-900 border-gray-800 hover:border-gray-700 focus:border-white transition-colors" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>} />
                              <FormField control={form.control} name="companySize" render={({
                            field
                          }) => <FormItem>
                                  <FormLabel className="text-base font-medium text-gray-200">Company Size *</FormLabel>
                                  <Select value={field.value} onValueChange={field.onChange}>
                                    <FormControl>
                                      <SelectTrigger className="h-12 text-base bg-zinc-900 border-gray-800 hover:border-gray-700 focus:border-white transition-colors">
                                        <SelectValue placeholder="Select company size" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-zinc-900 border border-gray-800 shadow-lg">
                                      <SelectItem value="1-10" className="cursor-pointer hover:bg-zinc-800">1-10 employees</SelectItem>
                                      <SelectItem value="11-50" className="cursor-pointer hover:bg-zinc-800">11-50 employees</SelectItem>
                                      <SelectItem value="51-200" className="cursor-pointer hover:bg-zinc-800">51-200 employees</SelectItem>
                                      <SelectItem value="201-500" className="cursor-pointer hover:bg-zinc-800">201-500 employees</SelectItem>
                                      <SelectItem value="500+" className="cursor-pointer hover:bg-zinc-800">500+ employees</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>} />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <FormField control={form.control} name="companyRevenue" render={({
                            field
                          }) => <FormItem>
                                  <FormLabel className="text-base font-medium text-gray-200">Annual Revenue *</FormLabel>
                                  <Select value={field.value} onValueChange={field.onChange}>
                                    <FormControl>
                                      <SelectTrigger className="h-12 text-base bg-zinc-900 border-gray-800 hover:border-gray-700 focus:border-white transition-colors">
                                        <SelectValue placeholder="Select annual revenue" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-zinc-900 border border-gray-800 shadow-lg">
                                      <SelectItem value="<1M" className="cursor-pointer hover:bg-zinc-800">Less than $1M</SelectItem>
                                      <SelectItem value="1M-5M" className="cursor-pointer hover:bg-zinc-800">$1M - $5M</SelectItem>
                                      <SelectItem value="5M-10M" className="cursor-pointer hover:bg-zinc-800">$5M - $10M</SelectItem>
                                      <SelectItem value="10M-50M" className="cursor-pointer hover:bg-zinc-800">$10M - $50M</SelectItem>
                                      <SelectItem value="50M+" className="cursor-pointer hover:bg-zinc-800">$50M+</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>} />
                              <FormField control={form.control} name="budget" render={({
                            field
                          }) => <FormItem>
                                  <FormLabel className="text-base font-medium text-gray-200">Project Budget *</FormLabel>
                                  <Select value={field.value} onValueChange={field.onChange}>
                                    <FormControl>
                                      <SelectTrigger className="h-12 text-base bg-zinc-900 border-gray-800 hover:border-gray-700 focus:border-white transition-colors">
                                        <SelectValue placeholder="Select budget range" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-zinc-900 border border-gray-800 shadow-lg">
                                      <SelectItem value="<10k" className="cursor-pointer hover:bg-zinc-800">Less than $10k</SelectItem>
                                      <SelectItem value="10-50k" className="cursor-pointer hover:bg-zinc-800">$10k - $50k</SelectItem>
                                      <SelectItem value="50-100k" className="cursor-pointer hover:bg-zinc-800">$50k - $100k</SelectItem>
                                      <SelectItem value=">100k" className="cursor-pointer hover:bg-zinc-800">More than $100k</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>} />
                            </div>

                            <FormField control={form.control} name="intrestedin" render={({
                          field
                        }) => <FormItem>
                                <FormLabel className="text-base font-medium text-gray-200">What services are you interested in? *</FormLabel>
                                <Select value={field.value} onValueChange={field.onChange}>
                                  <FormControl>
                                    <SelectTrigger className="h-12 text-base bg-zinc-900 border-gray-800 hover:border-gray-700 focus:border-white transition-colors">
                                      <SelectValue placeholder="Select service" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="bg-zinc-900 border border-gray-800 shadow-lg">
                                    <SelectItem value="automation" className="cursor-pointer hover:bg-zinc-800">Automation Infrastructure</SelectItem>
                                    <SelectItem value="zapier" className="cursor-pointer hover:bg-zinc-800">Zapier Replacement</SelectItem>
                                    <SelectItem value="stripe" className="cursor-pointer hover:bg-zinc-800">Stripe Payment Workflows</SelectItem>
                                    <SelectItem value="crm" className="cursor-pointer hover:bg-zinc-800">CRM & Lead Flow</SelectItem>
                                    <SelectItem value="webhook" className="cursor-pointer hover:bg-zinc-800">Webhook Orchestration</SelectItem>
                                    <SelectItem value="cloud" className="cursor-pointer hover:bg-zinc-800">Custom Cloud Solutions</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>} />

                            <FormField control={form.control} name="message" render={({
                          field
                        }) => <FormItem>
                                <FormLabel className="text-base font-medium text-gray-200">Message (optional)</FormLabel>
                                <FormControl>
                                  <Textarea placeholder="Tell us more about your project" className="min-h-[120px] text-base bg-zinc-900 border-gray-800 hover:border-gray-700 focus:border-white transition-colors resize-none" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>} />
                            
                            <div>
                              <p className="text-xs text-gray-500 mb-4">
                                By clicking "Talk to JointUp", I acknowledge I have read and understand the Privacy Notice.
                              </p>
                              
                              <Button type="submit" disabled={isSubmitting} className="w-1/3 h-12 bg-[#0872F5] hover:bg-blue-500 text-white text-base font-medium rounded-lg">
                                {isSubmitting ? "Processing..." : "Talk to JointUp"}
                              </Button>
                            </div>
                          </form>
                        </Form>
                      </div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}