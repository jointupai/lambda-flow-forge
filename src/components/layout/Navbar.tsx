
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PieChart, MessageSquare, Menu, X, ChevronRight, CreditCard, MessageSquareText, Database, Mail, Code, Bell, Zap, Package, Cloud, Webhook, BarChart, Bot, Replace } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import CalendlyDialog from "@/components/shared/CalendlyDialog";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <CalendlyDialog open={showCalendly} onOpenChange={setShowCalendly} />
      
      <div className="container flex h-16 items-center px-4 sm:px-8">
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//jointup.svg" alt="JointUp.ai Logo" className="h-8 w-auto" />
          </Link>

          {/* Centered Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-6">
            {/* Home link */}
            <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            
            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" asChild>
                <button className="flex items-center outline-none">
                  Solutions
                  <ChevronRight className="ml-1.5 h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                </button>
              </DropdownMenuTrigger>
              
              <DropdownMenuContent className="w-64 bg-white/95 backdrop-blur-xl rounded-xl p-3 mt-2 animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 shadow-lg border border-gray-100/40" align="start" sideOffset={8}>
                <DropdownMenuItem asChild className="flex items-center gap-3 py-2.5 px-3 cursor-pointer rounded-lg hover:bg-gray-50/80 transition-colors">
                  <Link to="/solutions/automation-infrastructure" className="flex items-center gap-3 w-full">
                    <div className="p-2 rounded-lg bg-green-50">
                      <Cloud className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="font-medium">Automation Infrastructure</span>
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild className="flex items-center gap-3 py-2.5 px-3 cursor-pointer rounded-lg hover:bg-gray-50/80 transition-colors">
                  <Link to="/solutions/zapier-replacement" className="flex items-center gap-3 w-full">
                    <div className="p-2 rounded-lg bg-blue-50">
                      <Replace className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="font-medium">Zapier Replacement Systems</span>
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild className="flex items-center gap-3 py-2.5 px-3 cursor-pointer rounded-lg hover:bg-gray-50/80 transition-colors">
                  <Link to="/solutions/stripe-payment-workflows" className="flex items-center gap-3 w-full">
                    <div className="p-2 rounded-lg bg-purple-50">
                      <CreditCard className="h-4 w-4 text-purple-600" />
                    </div>
                    <span className="font-medium">Stripe Payment Workflows</span>
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild className="flex items-center gap-3 py-2.5 px-3 cursor-pointer rounded-lg hover:bg-gray-50/80 transition-colors">
                  <Link to="/solutions/crm-lead-flow" className="flex items-center gap-3 w-full">
                    <div className="p-2 rounded-lg bg-orange-50">
                      <BarChart className="h-4 w-4 text-orange-600" />
                    </div>
                    <span className="font-medium">CRM & Lead Flow Automation</span>
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild className="flex items-center gap-3 py-2.5 px-3 cursor-pointer rounded-lg hover:bg-gray-50/80 transition-colors">
                  <Link to="/solutions/webhook-orchestration" className="flex items-center gap-3 w-full">
                    <div className="p-2 rounded-lg bg-indigo-50">
                      <Webhook className="h-4 w-4 text-indigo-600" />
                    </div>
                    <span className="font-medium">Webhook & API Orchestration</span>
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild className="flex items-center gap-3 py-2.5 px-3 cursor-pointer rounded-lg hover:bg-gray-50/80 transition-colors">
                  <Link to="/solutions/custom-cloud-solutions" className="flex items-center gap-3 w-full">
                    <div className="p-2 rounded-lg bg-pink-50">
                      <Bot className="h-4 w-4 text-pink-600" />
                    </div>
                    <span className="font-medium">Custom Cloud Solutions</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Micro Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" asChild>
                <button className="flex items-center outline-none">
                  Micro Products
                  <ChevronRight className="ml-1.5 h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                </button>
              </DropdownMenuTrigger>
              
              <DropdownMenuContent className="w-64 bg-white/95 backdrop-blur-xl rounded-xl p-3 mt-2 animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 shadow-lg border border-gray-100/40" align="start" sideOffset={8}>
                <DropdownMenuItem className="flex items-center gap-3 py-2.5 px-3 cursor-pointer rounded-lg hover:bg-gray-50/80 transition-colors">
                  <Link to="/stripe-webflow-kit" className="flex items-center gap-3 w-full">
                    <div className="p-2 rounded-lg bg-blue-50">
                      <img src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//stripe-v2-svgrepo-com.svg" alt="Stripe Embed Kit" className="h-4 w-4" />
                    </div>
                    <span className="font-medium">Stripe Embed Kit</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Company Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" asChild>
                <button className="flex items-center outline-none">
                  Company
                  <ChevronRight className="ml-1.5 h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                </button>
              </DropdownMenuTrigger>
              
              <DropdownMenuContent className="w-48 bg-white/95 backdrop-blur-xl rounded-xl p-3 mt-2 animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 shadow-lg border border-gray-100/40" align="start" sideOffset={8}>
                <DropdownMenuItem asChild>
                  <Link to="/how-it-works" className="flex items-center gap-3 py-2.5 px-3 cursor-pointer rounded-lg hover:bg-gray-50/80 transition-colors">
                    How it Works
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild>
                  <Link to="/about" className="flex items-center gap-3 py-2.5 px-3 cursor-pointer rounded-lg hover:bg-gray-50/80 transition-colors">
                    About
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link to="/portfolio" className="flex items-center gap-3 py-2.5 px-3 cursor-pointer rounded-lg hover:bg-gray-50/80 transition-colors">
                    Portfolio
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          {/* Get Free Audit Button */}
          <div className="hidden md:block">
            <Button size="sm" className="bg-brand-primary-400 text-black hover:bg-brand-primary-500 rounded-full px-5 transition-all duration-300" onClick={() => window.open('https://calendly.com/jointup/intro', '_blank')}>
              Get a Free Audit
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden rounded-md p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden">
          <div className="container px-4 sm:px-8 py-4 space-y-3 border-t">
            <Link to="/" className="block py-2 text-base text-foreground/80 hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            
            {/* Mobile Solutions Menu */}
            <div className="block py-2 text-base font-medium text-foreground/80">
              Solutions
              <div className="pl-4 space-y-2 mt-2">
                <Link to="/solutions/automation-infrastructure" className="flex items-center gap-2 py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                  <Cloud className="h-4 w-4 text-green-600" />
                  <span>Automation Infrastructure</span>
                </Link>
                <Link to="/solutions/zapier-replacement" className="flex items-center gap-2 py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                  <Replace className="h-4 w-4 text-blue-600" />
                  <span>Zapier Replacement Systems</span>
                </Link>
                <Link to="/solutions/stripe-payment-workflows" className="flex items-center gap-2 py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                  <CreditCard className="h-4 w-4 text-purple-600" />
                  <span>Stripe Payment Workflows</span>
                </Link>
                <Link to="/solutions/crm-lead-flow" className="flex items-center gap-2 py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                  <BarChart className="h-4 w-4 text-orange-600" />
                  <span>CRM & Lead Flow Automation</span>
                </Link>
                <Link to="/solutions/webhook-orchestration" className="flex items-center gap-2 py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                  <Webhook className="h-4 w-4 text-indigo-600" />
                  <span>Webhook & API Orchestration</span>
                </Link>
                <Link to="/solutions/custom-cloud-solutions" className="flex items-center gap-2 py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                  <Bot className="h-4 w-4 text-pink-600" />
                  <span>Custom Cloud Solutions</span>
                </Link>
              </div>
            </div>
            
            {/* Mobile Micro Products Menu */}
            <div className="block py-2 text-base font-medium text-foreground/80">
              Micro Products
              <div className="pl-4 space-y-2 mt-2">
                <Link to="/stripe-webflow-kit" className="flex items-center gap-2 py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                  <img src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//stripe-v2-svgrepo-com.svg" alt="Stripe Embed Kit" className="h-4 w-4" />
                  <span>Stripe + Webflow Lambda Kit</span>
                </Link>
              </div>
            </div>
            
            {/* Mobile Company Menu */}
            <div className="block py-2 text-base font-medium text-foreground/80">
              Company
              <div className="pl-4 space-y-2 mt-2">
                <Link to="/how-it-works" className="block py-1 text-sm text-foreground/80 hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                  How it Works
                </Link>
                <Link to="/about" className="block py-1 text-sm text-foreground/80 hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
                <Link to="/portfolio" className="block py-1 text-sm text-foreground/80 hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                  Portfolio
                </Link>
              </div>
            </div>
            
            <Link to="/contact" className="block py-2 text-base text-foreground/80 hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <div className="pt-2">
              <Button className="w-full bg-brand-primary-400 text-black hover:bg-brand-primary-500" onClick={() => {
                setIsMenuOpen(false);
                window.open('https://calendly.com/jointup/intro', '_blank');
              }}>
                Get a Free Audit
              </Button>
            </div>
          </div>
        </div>}
    </header>;
}
