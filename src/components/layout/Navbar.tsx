
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HiArrowRight } from "react-icons/hi";
import CalendlyDialog from "@/components/shared/CalendlyDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <CalendlyDialog open={showCalendly} onOpenChange={setShowCalendly} />
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//jointup.svg" alt="JointUp.ai Logo" className="h-8 w-auto" />
          </Link>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-900 hover:text-gray-600 transition-colors">
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white/95 backdrop-blur-xl">
                <DropdownMenuItem asChild>
                  <Link to="/solutions/automation-infrastructure" className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-green-50">
                      <div className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Automation Infrastructure</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/zapier-replacement" className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-blue-50">
                      <div className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>Zapier Replacement Systems</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/stripe-payment-workflows" className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-purple-50">
                      <div className="h-4 w-4 text-purple-600" />
                    </div>
                    <span>Stripe Payment Workflows</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/crm-lead-flow" className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-orange-50">
                      <div className="h-4 w-4 text-orange-600" />
                    </div>
                    <span>CRM & Lead Flow Automation</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Micro Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-900 hover:text-gray-600 transition-colors">
                Micro Products <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white/95 backdrop-blur-xl">
                <DropdownMenuItem asChild>
                  <Link to="/stripe-webflow-kit">Stripe Webflow Kit</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Company Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-900 hover:text-gray-600 transition-colors">
                Company <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white/95 backdrop-blur-xl">
                <DropdownMenuItem asChild>
                  <Link to="/about">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/case-studies/usacartags">Case Studies</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/portfolio">Portfolio</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              size="sm" 
              className="bg-transparent border border-black text-black hover:bg-gray-100 rounded-full"
              onClick={() => window.open('https://calendly.com/jointup/intro', '_blank')}
            >
              Get a Free Audit
              <HiArrowRight className="ml-2" />
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-500 hover:text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4 pb-4">
              <div className="px-4 py-2 font-medium">Solutions</div>
              <Link to="/solutions/automation-infrastructure" className="px-4 py-2 text-sm text-gray-600">
                Automation Infrastructure
              </Link>
              <Link to="/solutions/zapier-replacement" className="px-4 py-2 text-sm text-gray-600">
                Zapier Replacement Systems
              </Link>
              <Link to="/solutions/stripe-payment-workflows" className="px-4 py-2 text-sm text-gray-600">
                Stripe Payment Workflows
              </Link>
              <Link to="/solutions/crm-lead-flow" className="px-4 py-2 text-sm text-gray-600">
                CRM & Lead Flow Automation
              </Link>
              
              <div className="px-4 py-2 font-medium">Micro Products</div>
              <Link to="/stripe-webflow-kit" className="px-4 py-2 text-sm text-gray-600">
                Stripe Webflow Kit
              </Link>
              
              <div className="px-4 py-2 font-medium">Company</div>
              <Link to="/about" className="px-4 py-2 text-sm text-gray-600">
                About Us
              </Link>
              <Link to="/case-studies/usacartags" className="px-4 py-2 text-sm text-gray-600">
                Case Studies
              </Link>
              <Link to="/portfolio" className="px-4 py-2 text-sm text-gray-600">
                Portfolio
              </Link>
              
              <div className="pt-4 px-4">
                <Button 
                  size="sm" 
                  className="w-full bg-transparent border border-black text-black hover:bg-gray-100 rounded-full"
                  onClick={() => window.open('https://calendly.com/jointup/intro', '_blank')}
                >
                  Get a Free Audit
                  <HiArrowRight className="ml-2" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
