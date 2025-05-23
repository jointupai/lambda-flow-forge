
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, X } from "lucide-react";

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

interface ContactDrawerProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

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

export default function ContactDrawer({
  children,
  open: externalOpen,
  onOpenChange: externalOnOpenChange
}: ContactDrawerProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [internalOpen, setInternalOpen] = useState(false);
  
  const open = externalOpen !== undefined ? externalOpen : internalOpen;
  const onOpenChange = externalOnOpenChange || setInternalOpen;
  
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
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("There was an issue submitting your form. Please try again.");
    }
    setIsSubmitting(false);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setIsSuccess(false);
    }, 300);
  };

  return <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild data-drawer-trigger>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-xl h-[100svh] sm:h-auto overflow-y-auto bg-white/95 backdrop-blur-sm border border-gray-200 shadow-2xl rounded-l-3xl" style={{
      animation: 'slide 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
        <style>{`
          @keyframes slide {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0);
            }
          }

          .data-[state=closed]:animate-out {
            animation: slideOut 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }

          @keyframes slideOut {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(100%);
            }
          }
        `}</style>
        
        <SheetHeader className="relative">
          <SheetTitle className="font-medium py-2 my-2 tracking-tighter text-2xl sm:text-3xl">Get In Touch</SheetTitle>
          <SheetClose className="absolute -right-1 -top-1 rounded-full p-1.5 sm:p-2 text-gray-500 hover:text-gray-700 transition-colors">
            <X className="h-5 w-5 sm:h-6 sm:w-6 stroke-[1.5]" />
          </SheetClose>
        </SheetHeader>

        {isSuccess ? <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Thank You!</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xs mx-auto">
              We've received your submission and will be in touch soon.
            </p>
            <Button onClick={handleClose} className="mt-4 sm:mt-6">
              Close
            </Button>
          </div> : <>
            <div className="mt-4 sm:mt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <FormField control={form.control} name="name" render={({
                  field
                }) => <FormItem>
                          <FormLabel className="text-sm sm:text-base font-medium text-gray-900">Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} className="h-10 sm:h-12 text-sm sm:text-base bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-black transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    <FormField control={form.control} name="email" render={({
                  field
                }) => <FormItem>
                          <FormLabel className="text-sm sm:text-base font-medium text-gray-900">Email *</FormLabel>
                          <FormControl>
                            <Input placeholder="you@company.com" type="email" {...field} className="h-10 sm:h-12 text-sm sm:text-base bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-black transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <FormField control={form.control} name="companyRole" render={({
                  field
                }) => <FormItem>
                          <FormLabel className="text-sm sm:text-base font-medium text-gray-900">Your Role *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your role" {...field} className="h-10 sm:h-12 text-sm sm:text-base bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-black transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    <FormField control={form.control} name="companyName" render={({
                  field
                }) => <FormItem>
                          <FormLabel className="text-sm sm:text-base font-medium text-gray-900">Company Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Company name" {...field} className="h-10 sm:h-12 text-sm sm:text-base bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-black transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <FormField control={form.control} name="website" render={({
                  field
                }) => <FormItem>
                          <FormLabel className="text-sm sm:text-base font-medium text-gray-900">Website</FormLabel>
                          <FormControl>
                            <Input placeholder="https://yourcompany.com" {...field} className="h-10 sm:h-12 text-sm sm:text-base bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-black transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    <FormField control={form.control} name="companySize" render={({
                  field
                }) => <FormItem>
                          <FormLabel className="text-sm sm:text-base font-medium text-gray-900">Company Size *</FormLabel>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger className="h-10 sm:h-12 text-sm sm:text-base bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-black transition-colors">
                                <SelectValue placeholder="Select company size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white border border-gray-100 shadow-lg max-h-[200px]">
                              <SelectItem value="1-10" className="cursor-pointer hover:bg-gray-100">1-10 employees</SelectItem>
                              <SelectItem value="11-50" className="cursor-pointer hover:bg-gray-100">11-50 employees</SelectItem>
                              <SelectItem value="51-200" className="cursor-pointer hover:bg-gray-100">51-200 employees</SelectItem>
                              <SelectItem value="201-500" className="cursor-pointer hover:bg-gray-100">201-500 employees</SelectItem>
                              <SelectItem value="500+" className="cursor-pointer hover:bg-gray-100">500+ employees</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <FormField control={form.control} name="companyRevenue" render={({
                  field
                }) => <FormItem>
                          <FormLabel className="text-sm sm:text-base font-medium text-gray-900">Annual Revenue *</FormLabel>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger className="h-10 sm:h-12 text-sm sm:text-base bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-black transition-colors">
                                <SelectValue placeholder="Select annual revenue" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white border border-gray-100 shadow-lg max-h-[200px]">
                              <SelectItem value="<1M" className="cursor-pointer hover:bg-gray-100">Less than $1M</SelectItem>
                              <SelectItem value="1M-5M" className="cursor-pointer hover:bg-gray-100">$1M - $5M</SelectItem>
                              <SelectItem value="5M-10M" className="cursor-pointer hover:bg-gray-100">$5M - $10M</SelectItem>
                              <SelectItem value="10M-50M" className="cursor-pointer hover:bg-gray-100">$10M - $50M</SelectItem>
                              <SelectItem value="50M+" className="cursor-pointer hover:bg-gray-100">$50M+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>} />
                    <FormField control={form.control} name="budget" render={({
                  field
                }) => <FormItem>
                          <FormLabel className="text-sm sm:text-base font-medium text-gray-900">Project Budget *</FormLabel>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger className="h-10 sm:h-12 text-sm sm:text-base bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-black transition-colors">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white border border-gray-100 shadow-lg max-h-[200px]">
                              <SelectItem value="<10k" className="cursor-pointer hover:bg-gray-100">Less than $10k</SelectItem>
                              <SelectItem value="10-50k" className="cursor-pointer hover:bg-gray-100">$10k - $50k</SelectItem>
                              <SelectItem value="50-100k" className="cursor-pointer hover:bg-gray-100">$50k - $100k</SelectItem>
                              <SelectItem value=">100k" className="cursor-pointer hover:bg-gray-100">More than $100k</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>} />
                  </div>

                  <FormField control={form.control} name="intrestedin" render={({
                field
              }) => <FormItem>
                        <FormLabel className="text-sm sm:text-base font-medium text-gray-900">What services are you interested in? *</FormLabel>
                        <Select value={field.value} onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger className="h-10 sm:h-12 text-sm sm:text-base bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-black transition-colors">
                              <SelectValue placeholder="Select service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white border border-gray-100 shadow-lg max-h-[200px]">
                            <SelectItem value="automation" className="cursor-pointer hover:bg-gray-100">Automation Infrastructure</SelectItem>
                            <SelectItem value="zapier" className="cursor-pointer hover:bg-gray-100">Zapier Replacement</SelectItem>
                            <SelectItem value="stripe" className="cursor-pointer hover:bg-gray-100">Stripe Payment Workflows</SelectItem>
                            <SelectItem value="crm" className="cursor-pointer hover:bg-gray-100">CRM & Lead Flow</SelectItem>
                            <SelectItem value="webhook" className="cursor-pointer hover:bg-gray-100">Webhook Orchestration</SelectItem>
                            <SelectItem value="cloud" className="cursor-pointer hover:bg-gray-100">Custom Cloud Solutions</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>} />

                  <FormField control={form.control} name="message" render={({
                field
              }) => <FormItem>
                        <FormLabel className="text-sm sm:text-base font-medium text-gray-900">Message (optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us more about your project" className="min-h-[100px] sm:min-h-[120px] text-sm sm:text-base bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-black transition-colors resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />

                  <Button type="submit" disabled={isSubmitting} className="w-full h-10 sm:h-12 bg-zinc-950 hover:bg-zinc-800 text-gray-50 text-sm sm:text-base font-medium rounded-full">
                    {isSubmitting ? "Processing..." : "Submit"}
                  </Button>
                </form>
              </Form>
            </div>
          </>}
      </SheetContent>
    </Sheet>;
}
