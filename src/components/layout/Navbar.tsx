import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Cloud, CreditCard, BarChart, Bot, Replace, Webhook, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactDrawer from "@/components/shared/ContactDrawer";
import CalendlyDialog from "@/components/shared/CalendlyDialog";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [openContactDrawer, setOpenContactDrawer] = useState(false);

  return <>
    {(showSolutions || showProducts || showCompany) && <div 
      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" 
      onClick={() => {
        setShowSolutions(false);
        setShowProducts(false);
        setShowCompany(false);
      }} 
    />}
    
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <CalendlyDialog open={showCalendly} onOpenChange={setShowCalendly} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//jointup%20(2).png" alt="JointUp.ai Logo" className="h-8 w-auto" />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button 
                  onClick={() => {
                    setShowSolutions(!showSolutions);
                    if (showProducts) setShowProducts(false);
                    if (showCompany) setShowCompany(false);
                  }} 
                  className="flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 nav-menu-trigger"
                  data-state={showSolutions ? "open" : "closed"}
                >
                  Solutions
                  <ChevronRight className={`ml-1 h-4 w-4 transition-transform duration-200 ${showSolutions ? 'rotate-90' : ''}`} />
                </button>

                {showSolutions && <div className="absolute left-0 top-full mt-2 w-[850px] rounded-xl dropdown-container menu-animate-in">
                    <div className="p-8">
                      <div className="mb-8">
                        <h4 className="text-base font-medium text-white mb-1">Solutions</h4>
                        <p className="text-sm text-gray-400">Discover our range of automation solutions</p>
                      </div>

                      <div className="grid grid-cols-2 gap-5">
                        <Link to="/solutions/automation-infrastructure" className="group flex items-start gap-4 rounded-lg p-4 menu-item-hover">
                          <div className="p-2 rounded-lg bg-zinc-800">
                            <Cloud className="h-5 w-5 text-green-400" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-white">
                              Automation Infrastructure
                            </h3>
                            <p className="text-sm text-gray-400">
                              Build scalable cloud automation that powers your growth
                            </p>
                          </div>
                        </Link>

                        <Link to="/solutions/zapier-replacement" className="group flex items-start gap-4 rounded-lg p-4 menu-item-hover">
                          <div className="p-2 rounded-lg bg-zinc-800">
                            <Replace className="h-5 w-5 text-blue-400" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-white">
                              Zapier Replacement
                            </h3>
                            <p className="text-sm text-gray-400">
                              Enterprise-grade automation to replace Zapier
                            </p>
                          </div>
                        </Link>

                        <Link to="/solutions/stripe-payment-workflows" className="group flex items-start gap-4 rounded-lg p-4 menu-item-hover">
                          <div className="p-2 rounded-lg bg-zinc-800">
                            <CreditCard className="h-5 w-5 text-purple-400" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-white">
                              Stripe Payment Workflows
                            </h3>
                            <p className="text-sm text-gray-400">
                              Automate your payment workflows with Stripe
                            </p>
                          </div>
                        </Link>

                        <Link to="/solutions/crm-lead-flow" className="group flex items-start gap-4 rounded-lg p-4 menu-item-hover">
                          <div className="p-2 rounded-lg bg-zinc-800">
                            <BarChart className="h-5 w-5 text-orange-400" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-white">
                              CRM & Lead Flow Automation
                            </h3>
                            <p className="text-sm text-gray-400">
                              Automate your CRM and lead flow processes
                            </p>
                          </div>
                        </Link>

                        <Link to="/solutions/webhook-orchestration" className="group flex items-start gap-4 rounded-lg p-4 menu-item-hover">
                          <div className="p-2 rounded-lg bg-zinc-800">
                            <Webhook className="h-5 w-5 text-indigo-400" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-white">
                              Webhook & API Orchestration
                            </h3>
                            <p className="text-sm text-gray-400">
                              Orchestrate your API and webhook workflows
                            </p>
                          </div>
                        </Link>

                        <Link to="/solutions/custom-cloud-solutions" className="group flex items-start gap-4 rounded-lg p-4 menu-item-hover">
                          <div className="p-2 rounded-lg bg-zinc-800">
                            <Bot className="h-5 w-5 text-pink-400" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-white">
                              Custom Cloud Solutions
                            </h3>
                            <p className="text-sm text-gray-400">
                              Build custom cloud solutions tailored to your needs
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="bg-zinc-900 px-8 py-4 rounded-b-xl">
                      <Link to="/solutions" className="flex items-center justify-center gap-2 text-white font-medium hover:text-gray-300 transition-colors">
                        View All Solutions
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>}
              </div>

              <div className="relative group">
                <button 
                  onClick={() => {
                    setShowProducts(!showProducts);
                    if (showSolutions) setShowSolutions(false);
                    if (showCompany) setShowCompany(false);
                  }} 
                  className="flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 nav-menu-trigger"
                  data-state={showProducts ? "open" : "closed"}
                >
                  Micro Products
                  <ChevronRight className={`ml-1 h-4 w-4 transition-transform duration-200 ${showProducts ? 'rotate-90' : ''}`} />
                </button>

                {showProducts && <div className="absolute left-0 top-full mt-2 w-[850px] rounded-xl dropdown-container menu-animate-in">
                    <div className="p-8">
                      <div className="mb-8">
                        <h4 className="text-base font-medium text-white mb-1">Micro Products</h4>
                        <p className="text-sm text-gray-400">Explore our standalone solutions</p>
                      </div>

                      <div className="grid grid-cols-2 gap-5">
                        <Link to="/stripe-webflow-kit" className="group flex items-start gap-4 rounded-lg p-4 menu-item-hover">
                          <div className="p-2 rounded-lg bg-zinc-800">
                            <img src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//stripe-s-svgrepo-com.svg" alt="Stripe Embed Kit" className="h-6 w-auto" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-white">Stripe Embed Kit</h3>
                            <p className="text-sm text-gray-400">Seamlessly integrate Stripe payments into your Webflow site</p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="bg-zinc-900 px-8 py-4 rounded-b-xl">
                      <Link to="/micro-products" className="flex items-center justify-center gap-2 text-white font-medium hover:text-gray-300 transition-colors">
                        View All Products
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>}
              </div>

              <div className="relative group">
                <button 
                  onClick={() => {
                    setShowCompany(!showCompany);
                    if (showSolutions) setShowSolutions(false);
                    if (showProducts) setShowProducts(false);
                  }} 
                  className="flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 nav-menu-trigger"
                  data-state={showCompany ? "open" : "closed"}
                >
                  Company
                  <ChevronRight className={`ml-1 h-4 w-4 transition-transform duration-200 ${showCompany ? 'rotate-90' : ''}`} />
                </button>

                {showCompany && <div className="absolute left-0 top-full mt-2 w-[850px] rounded-xl dropdown-container menu-animate-in">
                    <div className="p-8">
                      <div className="mb-8">
                        <h4 className="text-base font-medium text-white mb-1">Company</h4>
                        <p className="text-sm text-gray-400">Learn more about who we are</p>
                      </div>

                      <div className="grid grid-cols-2 gap-5">
                        <Link to="/how-it-works" className="group flex items-start gap-4 rounded-lg p-4 menu-item-hover">
                          <div className="p-2 rounded-lg bg-zinc-800">
                            <BarChart className="h-5 w-5 text-gray-300" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-white">How it Works</h3>
                            <p className="text-sm text-gray-400">Learn about our process and methodology</p>
                          </div>
                        </Link>

                        <Link to="/about" className="group flex items-start gap-4 rounded-lg p-4 menu-item-hover">
                          <div className="p-2 rounded-lg bg-zinc-800">
                            <Bot className="h-5 w-5 text-gray-300" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-white">About</h3>
                            <p className="text-sm text-gray-400">Get to know our team and mission</p>
                          </div>
                        </Link>

                        <Link to="/portfolio" className="group flex items-start gap-4 rounded-lg p-4 menu-item-hover">
                          <div className="p-2 rounded-lg bg-zinc-800">
                            <Replace className="h-5 w-5 text-gray-300" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-white">Portfolio</h3>
                            <p className="text-sm text-gray-400">View our past work and case studies</p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="bg-zinc-900 px-8 py-4 rounded-b-xl">
                      <Link to="/company" className="flex items-center justify-center gap-2 text-white font-medium hover:text-gray-300 transition-colors">
                        Learn More About Us
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-4">
              <Button 
                onClick={() => setOpenContactDrawer(true)} 
                className="bg-transparent border border-zinc-700 text-white hover:bg-zinc-800 rounded-full transition-all duration-300"
              >
                Let's Partner Up
              </Button>
            </div>
            
            <button className="lg:hidden rounded-md p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - unchanged */}
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
    </header>
    
    <ContactDrawer open={openContactDrawer} onOpenChange={setOpenContactDrawer} />
  </>;
}
