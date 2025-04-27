
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Navbar as FlowbiteNavbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
  Dropdown
} from "flowbite-react";
import { HiArrowRight, HiChevronDown } from "react-icons/hi";
import CalendlyDialog from "@/components/shared/CalendlyDialog";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <CalendlyDialog open={showCalendly} onOpenChange={setShowCalendly} />
      
      <div className="container mx-auto px-4">
        <FlowbiteNavbar fluid className="py-4">
          <NavbarBrand href="/">
            <img src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//jointup.svg" alt="JointUp.ai Logo" className="h-8 w-auto" />
          </NavbarBrand>
          
          <div className="flex md:order-2 gap-2">
            <Button 
              size="sm" 
              className="hidden md:flex bg-transparent border border-black text-black hover:bg-gray-100 rounded-full"
              onClick={() => window.open('https://calendly.com/jointup/intro', '_blank')}
            >
              Get a Free Audit
              <HiArrowRight className="ml-2" />
            </Button>
            <NavbarToggle />
          </div>
          
          <NavbarCollapse>
            <Dropdown
              label={
                <div className="flex items-center text-gray-900">
                  Solutions
                  <HiChevronDown className="ml-2" />
                </div>
              }
              inline
            >
              <Dropdown.Item>
                <Link to="/solutions/automation-infrastructure" className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-green-50">
                    <svg className="h-4 w-4 text-green-600" />
                  </div>
                  <span>Automation Infrastructure</span>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/solutions/zapier-replacement" className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-blue-50">
                    <svg className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>Zapier Replacement Systems</span>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/solutions/stripe-payment-workflows" className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-purple-50">
                    <svg className="h-4 w-4 text-purple-600" />
                  </div>
                  <span>Stripe Payment Workflows</span>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/solutions/crm-lead-flow" className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-orange-50">
                    <svg className="h-4 w-4 text-orange-600" />
                  </div>
                  <span>CRM & Lead Flow Automation</span>
                </Link>
              </Dropdown.Item>
            </Dropdown>
            
            <Dropdown
              label={
                <div className="flex items-center text-gray-900">
                  Micro Products
                  <HiChevronDown className="ml-2" />
                </div>
              }
              inline
            >
              <Dropdown.Item>
                <Link to="/stripe-webflow-kit">Stripe Webflow Kit</Link>
              </Dropdown.Item>
            </Dropdown>
            
            <Dropdown
              label={
                <div className="flex items-center text-gray-900">
                  Company
                  <HiChevronDown className="ml-2" />
                </div>
              }
              inline
            >
              <Dropdown.Item>
                <Link to="/about">About Us</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/case-studies/usacartags">Case Studies</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/portfolio">Portfolio</Link>
              </Dropdown.Item>
            </Dropdown>
          </NavbarCollapse>
        </FlowbiteNavbar>
      </div>
    </header>
  );
}
