
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

export default function ContactDrawer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      website: "",
      tools: "",
      automation: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    const payload = {
      name: data.name,
      email: data.email,
      companyName: data.company,
      website: data.website,
      tools: data.tools,
      automationGoal: data.automation
    };

    try {
      await fetch("https://kktvtpzkcf.execute-api.us-east-2.amazonaws.com/default/website-email-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        mode: "no-cors"
      });

      toast.success("Form submitted successfully!", {
        description: "We'll be in touch soon about your automation audit."
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
              Contact Us
            </span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold">Get In Touch</SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@company.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="company" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  
                  <FormField control={form.control} name="website" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website (optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://yourcompany.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="tools" render={({ field }) => (
                  <FormItem>
                    <FormLabel>What tools are you currently using?</FormLabel>
                    <FormControl>
                      <Input placeholder="Stripe, Zapier, Supabase, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="automation" render={({ field }) => (
                  <FormItem>
                    <FormLabel>What do you want to automate?</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your current workflow and what you'd like to improve" 
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
