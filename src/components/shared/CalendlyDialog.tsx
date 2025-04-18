
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

interface CalendlyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CalendlyDialog({ open, onOpenChange }: CalendlyDialogProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset loading state when dialog opens
    if (open) {
      setIsLoading(true);
      
      // Load Calendly widget script
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      
      // Add event listener to detect when script is loaded
      script.onload = () => {
        // Short delay to allow Calendly to initialize
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      };
      
      document.body.appendChild(script);

      return () => {
        // Clean up script when dialog closes
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[1000px] h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle>Schedule Your Free Audit</DialogTitle>
          <DialogDescription>
            Book a time that works for you and we'll analyze your integration needs.
          </DialogDescription>
        </DialogHeader>
        
        <div className="relative w-full h-[calc(100%-80px)]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
              <Loader2 className="h-8 w-8 animate-spin text-brand-primary-400" />
            </div>
          )}
          
          <div 
            className="calendly-inline-widget w-full h-full" 
            data-url="https://calendly.com/jointup/intro"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
