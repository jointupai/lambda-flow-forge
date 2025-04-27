import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Cloud, CreditCard, BarChart, Bot, Replace, Webhook, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import CalendlyDialog from "@/components/shared/CalendlyDialog";
import ContactDrawer from "@/components/shared/ContactDrawer";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <CalendlyDialog open={showCalendly} onOpenChange={setShowCalendly} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//jointup.svg" alt="JointUp.ai Logo" className="h-8 w-auto" />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button onClick={() => setShowSolutions(!showSolutions)} className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900">
                  Solutions
                  <ChevronRight className={`ml-1 h-4 w-4 transition-transform duration-200 ${showSolutions ? 'rotate-90' : ''}`} />
                </button>

                {showSolutions && <div className="absolute left-0 top-full mt-2 w-[850px] rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="p-8">
                      <div className="mb-8">
                        <h4 className="text-base font-medium text-gray-900 mb-1">Solutions</h4>
                        <p className="text-sm text-gray-600">Discover our range of automation solutions</p>
                      </div>

                      <div className="grid grid-cols-2 gap-5">
                        <Link to="/solutions/automation-infrastructure" className="group flex items-start gap-4 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="p-2 rounded-lg bg-green-50">
                            <Cloud className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h3 className="">
                              Automation Infrastructure
                            </h3>
                            <p className="text-sm text-gray-600">
                              Build scalable cloud automation that powers your growth
                            </p>
                          </div>
                        </Link>

                        <Link to="/solutions/zapier-replacement" className="group flex items-start gap-4 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="p-2 rounded-lg bg-blue-50">
                            <Replace className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">
                              Zapier Replacement
                            </h3>
                            <p className="text-sm text-gray-600">
                              Enterprise-grade automation to replace Zapier
                            </p>
                          </div>
                        </Link>

                        <Link to="/solutions/stripe-payment-workflows" className="group flex items-start gap-4 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="p-2 rounded-lg bg-purple-50">
                            <CreditCard className="h-5 w-5 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">
                              Stripe Payment Workflows
                            </h3>
                            <p className="text-sm text-gray-600">
                              Automate your payment workflows with Stripe
                            </p>
                          </div>
                        </Link>

                        <Link to="/solutions/crm-lead-flow" className="group flex items-start gap-4 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="p-2 rounded-lg bg-orange-50">
                            <BarChart className="h-5 w-5 text-orange-600" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">
                              CRM & Lead Flow Automation
                            </h3>
                            <p className="text-sm text-gray-600">
                              Automate your CRM and lead flow processes
                            </p>
                          </div>
                        </Link>

                        <Link to="/solutions/webhook-orchestration" className="group flex items-start gap-4 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="p-2 rounded-lg bg-indigo-50">
                            <Webhook className="h-5 w-5 text-indigo-600" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">
                              Webhook & API Orchestration
                            </h3>
                            <p className="text-sm text-gray-600">
                              Orchestrate your API and webhook workflows
                            </p>
                          </div>
                        </Link>

                        <Link to="/solutions/custom-cloud-solutions" className="group flex items-start gap-4 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="p-2 rounded-lg bg-pink-50">
                            <Bot className="h-5 w-5 text-pink-600" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">
                              Custom Cloud Solutions
                            </h3>
                            <p className="text-sm text-gray-600">
                              Build custom cloud solutions tailored to your needs
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="bg-gray-50 px-8 py-4 rounded-b-xl">
                      <Link to="/solutions" className="flex items-center justify-center gap-2 text-primary font-medium hover:text-primary/90 transition-colors">
                        View All Solutions
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>}
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                  Micro Products
                  <ChevronRight className="ml-1.5 h-3.5 w-3.5 opacity-70" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 bg-white/95 backdrop-blur-xl rounded-xl p-3 mt-2 animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 shadow-lg border border-gray-100/40" align="start" sideOffset={8}>
                  <DropdownMenuItem className="flex items-center gap-3 py-2.5 px-3 cursor-pointer rounded-lg hover:bg-gray-50/80 transition-colors">
                    <Link to="/stripe-webflow-kit" className="flex items-center gap-3 w-full">
                      <img src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//stripe-s-svgrepo-com.svg" alt="Stripe Embed Kit" className="h-6 w-auto" />
                      <span className="font-medium">Stripe Embed Kit</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                  Company
                  <ChevronRight className="ml-1.5 h-3.5 w-3.5 opacity-70" />
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
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="bg-transparent border border-black text-black hover:bg-gray-100 rounded-full">
              <Link to="#" onClick={() => window.open('https://calendly.com/jointup/intro', '_blank')} className="flex items-center cursor-pointer px-4 py-6 text-black hover:text-gray-800 transition-all duration-300">
                Get a Free Audit
              </Link>
            </Button>
          </div>

          <button className="lg:hidden rounded-md p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen && <div className="md:hidden">
          <div className="container px-4 sm:px-8 py-4 space-y-3 border-t">
            <Link to="/" className="block py-2 text-base text-foreground/80 hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            
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
            
            <div className="block py-2 text-base font-medium text-foreground/80">
              Micro Products
              <div className="pl-4 space-y-2 mt-2">
                <Link to="/stripe-webflow-kit" className="flex items-center gap-2 py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                  <img src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//stripe-s-svgrepo-com.svg" alt="Stripe Embed Kit" className="h-4 w-4" />
                  <span>Stripe + Webflow Lambda Kit</span>
                </Link>
              </div>
            </div>
            
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
            
            <div className="block py-2">
              <ContactDrawer />
            </div>

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