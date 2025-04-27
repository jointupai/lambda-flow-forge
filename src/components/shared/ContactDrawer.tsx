
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CalendlyDialog from "@/components/shared/CalendlyDialog";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  role: z.string().min(2, { message: "Role is required" }),
  companyName: z.string().min(2, { message: "Company name is required" }),
  website: z.string().url({ message: "Please enter a valid URL" }).or(z.string().length(0)),
  companySize: z.string().min(1, { message: "Company size is required" }),
  revenue: z.string().min(1, { message: "Annual revenue is required" }),
  budget: z.string().min(1, { message: "Budget range is required" }),
  services: z.string().min(2, { message: "Please select at least one service" }),
  message: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactDrawer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
      companyName: "",
      website: "",
      companySize: "",
      revenue: "",
      budget: "",
      services: "",
      message: "",
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await fetch("https://kktvtpzkcf.execute-api.us-east-2.amazonaws.com/default/website-email-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        mode: "no-cors"
      });

      toast.success("Form submitted successfully!", {
        description: "We'll be in touch soon about your project."
      });
      form.reset();
      setOpen(false);
      setShowCalendly(true);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("There was an issue submitting your form. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <CalendlyDialog open={showCalendly} onOpenChange={setShowCalendly} />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="bg-transparent border border-black text-black hover:bg-gray-100 rounded-full">
            <span className="flex items-center cursor-pointer px-4 py-6 text-black hover:text-gray-800 transition-all duration-300">
              Let's Partner Up
            </span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold">Let's Partner Up</SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your name?</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your email?</FormLabel>
                    <FormControl>
                      <Input placeholder="you@company.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="role" render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your role in the company?</FormLabel>
                    <FormControl>
                      <Input placeholder="Your role" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="companyName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Company name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="website" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Website</FormLabel>
                    <FormControl>
                      <Input placeholder="https://yourcompany.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="companySize" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Size</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="500+">500+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="revenue" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company's Annual Revenue</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select annual revenue" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="<1M">Less than $1M</SelectItem>
                        <SelectItem value="1M-5M">$1M - $5M</SelectItem>
                        <SelectItem value="5M-10M">$5M - $10M</SelectItem>
                        <SelectItem value="10M-50M">$10M - $50M</SelectItem>
                        <SelectItem value="50M+">$50M+</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="budget" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Budget</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="<10k">Less than $10k</SelectItem>
                        <SelectItem value="10-50k">$10k - $50k</SelectItem>
                        <SelectItem value="50-100k">$50k - $100k</SelectItem>
                        <SelectItem value=">100k">More than $100k</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="services" render={({ field }) => (
                  <FormItem>
                    <FormLabel>What services are you interested in?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="automation">Automation Infrastructure</SelectItem>
                        <SelectItem value="zapier">Zapier Replacement</SelectItem>
                        <SelectItem value="stripe">Stripe Payment Workflows</SelectItem>
                        <SelectItem value="crm">CRM & Lead Flow</SelectItem>
                        <SelectItem value="webhook">Webhook Orchestration</SelectItem>
                        <SelectItem value="cloud">Custom Cloud Solutions</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message (optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us more about your project" 
                        className="min-h-[120px] resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-zinc-950 hover:bg-zinc-800 text-gray-50 text-base font-medium rounded-md"
                >
                  {isSubmitting ? "Processing..." : "Submit"}
                </Button>
              </form>
            </Form>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

