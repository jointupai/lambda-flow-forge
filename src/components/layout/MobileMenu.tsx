
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CreditCard,
  MessageSquareText,
  Database,
  Mail,
  Code,
  Bell,
  Zap,
  Package,
} from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="container px-4 sm:px-8 py-4 space-y-3 border-t">
        <Link
          to="/"
          className="block py-2 text-base text-foreground/80 hover:text-foreground"
          onClick={onClose}
        >
          Home
        </Link>

        {/* Mobile Solutions Menu */}
        <Accordion type="single" collapsible className="border-none shadow-none">
          <AccordionItem value="solutions" className="border-none">
            <AccordionTrigger className="py-2 text-base font-medium text-foreground/80 hover:no-underline">
              Solutions
            </AccordionTrigger>
            <AccordionContent className="pl-4 space-y-3 mt-2">
              <Link
                to="#"
                className="flex items-center gap-2 py-2 text-sm rounded-lg p-2 hover:bg-gray-50"
                onClick={onClose}
              >
                <div className="p-2 rounded-lg bg-green-50">
                  <CreditCard className="h-4 w-4 text-green-600" />
                </div>
                <span>Stripe Payment Automations</span>
              </Link>
              <Link
                to="#"
                className="flex items-center gap-2 py-2 text-sm rounded-lg p-2 hover:bg-gray-50"
                onClick={onClose}
              >
                <div className="p-2 rounded-lg bg-blue-50">
                  <MessageSquareText className="h-4 w-4 text-blue-600" />
                </div>
                <span>Twilio + SMS Messaging</span>
              </Link>
              <Link
                to="#"
                className="flex items-center gap-2 py-2 text-sm rounded-lg p-2 hover:bg-gray-50"
                onClick={onClose}
              >
                <div className="p-2 rounded-lg bg-purple-50">
                  <Database className="h-4 w-4 text-purple-600" />
                </div>
                <span>Supabase / Firestore Sync</span>
              </Link>
              <Link
                to="#"
                className="flex items-center gap-2 py-2 text-sm rounded-lg p-2 hover:bg-gray-50"
                onClick={onClose}
              >
                <div className="p-2 rounded-lg bg-orange-50">
                  <Mail className="h-4 w-4 text-orange-600" />
                </div>
                <span>Postmark Email Logic</span>
              </Link>
              <Link
                to="#"
                className="flex items-center gap-2 py-2 text-sm rounded-lg p-2 hover:bg-gray-50"
                onClick={onClose}
              >
                <div className="p-2 rounded-lg bg-indigo-50">
                  <Code className="h-4 w-4 text-indigo-600" />
                </div>
                <span>Custom API Integrations</span>
              </Link>
              <Link
                to="#"
                className="flex items-center gap-2 py-2 text-sm rounded-lg p-2 hover:bg-gray-50"
                onClick={onClose}
              >
                <div className="p-2 rounded-lg bg-pink-50">
                  <Bell className="h-4 w-4 text-pink-600" />
                </div>
                <span>Internal Alerts & Notifications</span>
              </Link>
              <Link
                to="#"
                className="flex items-center gap-2 py-2 text-sm rounded-lg p-2 hover:bg-gray-50"
                onClick={onClose}
              >
                <div className="p-2 rounded-lg bg-amber-50">
                  <Zap className="h-4 w-4 text-amber-600" />
                </div>
                <span>Zapier Workflow Replacement</span>
              </Link>
            </AccordionContent>
          </AccordionItem>

          {/* Mobile Micro Products Menu */}
          <AccordionItem value="micro-products" className="border-none">
            <AccordionTrigger className="py-2 text-base font-medium text-foreground/80 hover:no-underline">
              Micro Products
            </AccordionTrigger>
            <AccordionContent className="pl-4 space-y-3 mt-2">
              <Link
                to="/stripe-webflow-kit"
                className="flex items-center gap-2 py-2 text-sm rounded-lg p-2 hover:bg-gray-50"
                onClick={onClose}
              >
                <div className="p-2 rounded-lg bg-blue-50">
                  <Package className="h-4 w-4 text-blue-600" />
                </div>
                <span>Stripe + Webflow Lambda Kit</span>
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Link
          to="/how-it-works"
          className="block py-2 text-base text-foreground/80 hover:text-foreground"
          onClick={onClose}
        >
          How It Works
        </Link>
        <Link
          to="/about"
          className="block py-2 text-base text-foreground/80 hover:text-foreground"
          onClick={onClose}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="block py-2 text-base text-foreground/80 hover:text-foreground"
          onClick={onClose}
        >
          Contact
        </Link>
        <div className="pt-2">
          <Button
            className="w-full bg-brand-primary-400 text-black hover:bg-brand-primary-500"
            onClick={onClose}
          >
            Get a Free Audit
          </Button>
        </div>
      </div>
    </div>
  );
}
