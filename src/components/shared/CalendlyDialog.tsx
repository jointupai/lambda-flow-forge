
import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CalendlyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CalendlyDialog({ open, onOpenChange }: CalendlyDialogProps) {
  useEffect(() => {
    // Load Calendly widget script
    if (open) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] h-[700px]">
        <DialogHeader>
          <DialogTitle>Schedule Your Free Audit</DialogTitle>
        </DialogHeader>
        <div 
          className="calendly-inline-widget w-full h-full" 
          data-url="https://calendly.com/jointup/intro"
        />
      </DialogContent>
    </Dialog>
  );
}
