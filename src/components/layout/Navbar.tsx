
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MegaMenu, MegaMenuDropdown, MegaMenuDropdownToggle, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { HiArrowRight, HiChevronDown } from "react-icons/hi";
import CalendlyDialog from "@/components/shared/CalendlyDialog";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showCalendly, setShowCalendly] = React.useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <CalendlyDialog open={showCalendly} onOpenChange={setShowCalendly} />
      
      <div className="container mx-auto px-4">
        <MegaMenu className="py-4">
          <NavbarBrand href="/">
            <img src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//jointup.svg" alt="JointUp.ai Logo" className="h-8 w-auto" />
          </NavbarBrand>
          
          <NavbarToggle />
          
          <NavbarCollapse>
            <MegaMenuDropdownToggle>
              Solutions
              <HiChevronDown className="ml-2" />
            </MegaMenuDropdownToggle>
            
            <MegaMenuDropdownToggle>
              Micro Products
              <HiChevronDown className="ml-2" />
            </MegaMenuDropdownToggle>
            
            <MegaMenuDropdownToggle>
              Company
              <HiChevronDown className="ml-2" />
            </MegaMenuDropdownToggle>
          </NavbarCollapse>

          <div className="hidden md:flex items-center">
            <Button 
              size="lg" 
              className="bg-transparent border border-black text-black hover:bg-gray-100 rounded-full"
              onClick={() => window.open('https://calendly.com/jointup/intro', '_blank')}
            >
              Get a Free Audit
              <HiArrowRight className="ml-2" />
            </Button>
          </div>

          <MegaMenuDropdown>
            {/* Solutions Dropdown */}
            <div className="mt-6 border-y border-gray-200 bg-white shadow-sm">
              <div className="mx-auto grid max-w-screen-xl px-4 py-5 text-sm md:grid-cols-3 md:px-6">
                <ul className="space-y-4">
                  <li>
                    <Link to="/solutions/automation-infrastructure" className="flex items-center gap-2 hover:text-primary-600">
                      <div className="p-2 rounded-lg bg-green-50">
                        <svg className="h-4 w-4 text-green-600" /> {/* Add appropriate icon */}
                      </div>
                      <span>Automation Infrastructure</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/zapier-replacement" className="flex items-center gap-2 hover:text-primary-600">
                      <div className="p-2 rounded-lg bg-blue-50">
                        <svg className="h-4 w-4 text-blue-600" /> {/* Add appropriate icon */}
                      </div>
                      <span>Zapier Replacement Systems</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/stripe-payment-workflows" className="flex items-center gap-2 hover:text-primary-600">
                      <div className="p-2 rounded-lg bg-purple-50">
                        <svg className="h-4 w-4 text-purple-600" /> {/* Add appropriate icon */}
                      </div>
                      <span>Stripe Payment Workflows</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/crm-lead-flow" className="flex items-center gap-2 hover:text-primary-600">
                      <div className="p-2 rounded-lg bg-orange-50">
                        <svg className="h-4 w-4 text-orange-600" /> {/* Add appropriate icon */}
                      </div>
                      <span>CRM & Lead Flow Automation</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/webhook-orchestration" className="flex items-center gap-2 hover:text-primary-600">
                      <div className="p-2 rounded-lg bg-indigo-50">
                        <svg className="h-4 w-4 text-indigo-600" /> {/* Add appropriate icon */}
                      </div>
                      <span>Webhook & API Orchestration</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/custom-cloud-solutions" className="flex items-center gap-2 hover:text-primary-600">
                      <div className="p-2 rounded-lg bg-pink-50">
                        <svg className="h-4 w-4 text-pink-600" /> {/* Add appropriate icon */}
                      </div>
                      <span>Custom Cloud Solutions</span>
                    </Link>
                  </li>
                </ul>
                
                <ul className="space-y-4">
                  <li>
                    <Link to="/solutions/stripe-payment-workflows" className="flex items-center gap-2 hover:text-primary-600">
                      <div className="p-2 rounded-lg bg-purple-50">
                        <svg className="h-4 w-4 text-purple-600" /> {/* Add appropriate icon */}
                      </div>
                      <span>Stripe Payment Workflows</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/crm-lead-flow" className="flex items-center gap-2 hover:text-primary-600">
                      <div className="p-2 rounded-lg bg-orange-50">
                        <svg className="h-4 w-4 text-orange-600" /> {/* Add appropriate icon */}
                      </div>
                      <span>CRM & Lead Flow Automation</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/webhook-orchestration" className="flex items-center gap-2 hover:text-primary-600">
                      <div className="p-2 rounded-lg bg-indigo-50">
                        <svg className="h-4 w-4 text-indigo-600" /> {/* Add appropriate icon */}
                      </div>
                      <span>Webhook & API Orchestration</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/custom-cloud-solutions" className="flex items-center gap-2 hover:text-primary-600">
                      <div className="p-2 rounded-lg bg-pink-50">
                        <svg className="h-4 w-4 text-pink-600" /> {/* Add appropriate icon */}
                      </div>
                      <span>Custom Cloud Solutions</span>
                    </Link>
                  </li>
                </ul>

                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-2 text-base font-semibold text-gray-900">Why Choose Us?</h3>
                  <p className="mb-4 text-sm text-gray-500">
                    We build cloud automation infrastructure for companies doing $1M–$100M+ — replacing brittle ops with real-time, resilient systems.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/case-studies/usacartags">
                      View Case Studies
                      <HiArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </MegaMenuDropdown>
        </MegaMenu>
      </div>
    </header>
  );
}
