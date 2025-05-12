
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Cloud, CreditCard, BarChart, Bot, Replace, Webhook, Menu, X } from "lucide-react";
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
                  className={`flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 ${showSolutions ? 'nav-menu-item-selected' : ''}`}
                  style={{ minWidth: showSolutions ? null : 'max-content' }}
                  data-state={showSolutions ? "open" : "closed"}
                >
                  <span className="flex items-center min-w-max">
                    Solutions
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${showSolutions ? 'rotate-180' : ''}`} />
                  </span>
                </button>

                {showSolutions && (
                  <div className="absolute left-0 top-full mt-2 rounded-xl dropdown-container" style={{ width: '780px', maxWidth: 'calc(100vw - 2rem)' }}>
                    <div className="vercel-grid-section">
                      <Link to="/solutions/automation-infrastructure" className="vercel-menu-item">
                        <div className="vercel-menu-item-icon">
                          <Cloud className="h-4 w-4 text-green-400" />
                        </div>
                        <div className="vercel-menu-item-content">
                          <h3 className="vercel-menu-item-title">
                            Automation Infrastructure
                          </h3>
                          <p className="vercel-menu-item-description">
                            Build scalable cloud automation
                          </p>
                        </div>
                      </Link>

                      <Link to="/solutions/zapier-replacement" className="vercel-menu-item">
                        <div className="vercel-menu-item-icon">
                          <Replace className="h-4 w-4 text-blue-400" />
                        </div>
                        <div className="vercel-menu-item-content">
                          <h3 className="vercel-menu-item-title">
                            Zapier Replacement
                          </h3>
                          <p className="vercel-menu-item-description">
                            Enterprise-grade automation
                          </p>
                        </div>
                      </Link>

                      <Link to="/solutions/stripe-payment-workflows" className="vercel-menu-item">
                        <div className="vercel-menu-item-icon">
                          <CreditCard className="h-4 w-4 text-purple-400" />
                        </div>
                        <div className="vercel-menu-item-content">
                          <h3 className="vercel-menu-item-title">
                            Stripe Payment Workflows
                          </h3>
                          <p className="vercel-menu-item-description">
                            Automate payment workflows
                          </p>
                        </div>
                      </Link>

                      <Link to="/solutions/crm-lead-flow" className="vercel-menu-item">
                        <div className="vercel-menu-item-icon">
                          <BarChart className="h-4 w-4 text-orange-400" />
                        </div>
                        <div className="vercel-menu-item-content">
                          <h3 className="vercel-menu-item-title">
                            CRM & Lead Flow Automation
                          </h3>
                          <p className="vercel-menu-item-description">
                            Automate CRM processes
                          </p>
                        </div>
                      </Link>

                      <Link to="/solutions/webhook-orchestration" className="vercel-menu-item">
                        <div className="vercel-menu-item-icon">
                          <Webhook className="h-4 w-4 text-indigo-400" />
                        </div>
                        <div className="vercel-menu-item-content">
                          <h3 className="vercel-menu-item-title">
                            Webhook & API Orchestration
                          </h3>
                          <p className="vercel-menu-item-description">
                            Orchestrate API workflows
                          </p>
                        </div>
                      </Link>

                      <Link to="/solutions/custom-cloud-solutions" className="vercel-menu-item">
                        <div className="vercel-menu-item-icon">
                          <Bot className="h-4 w-4 text-pink-400" />
                        </div>
                        <div className="vercel-menu-item-content">
                          <h3 className="vercel-menu-item-title">
                            Custom Cloud Solutions
                          </h3>
                          <p className="vercel-menu-item-description">
                            Tailored to your needs
                          </p>
                        </div>
                      </Link>
                    </div>

                    <div className="dropdown-footer">
                      <Link to="/solutions" className="flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                        View All Solutions
                        <ChevronDown className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative group">
                <button 
                  onClick={() => {
                    setShowProducts(!showProducts);
                    if (showSolutions) setShowSolutions(false);
                    if (showCompany) setShowCompany(false);
                  }} 
                  className={`flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 ${showProducts ? 'nav-menu-item-selected' : ''}`}
                  style={{ minWidth: showProducts ? null : 'max-content' }}
                  data-state={showProducts ? "open" : "closed"}
                >
                  <span className="flex items-center min-w-max">
                    Micro Products
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${showProducts ? 'rotate-180' : ''}`} />
                  </span>
                </button>

                {showProducts && (
                  <div className="absolute left-0 top-full mt-2 rounded-xl dropdown-container" style={{ width: '380px', maxWidth: 'calc(100vw - 2rem)' }}>
                    <div>
                      <Link to="/stripe-webflow-kit" className="vercel-menu-item">
                        <div className="vercel-menu-item-icon">
                          <img src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//stripe-s-svgrepo-com.svg" alt="Stripe Embed Kit" className="h-4 w-4" />
                        </div>
                        <div className="vercel-menu-item-content">
                          <h3 className="vercel-menu-item-title">Stripe Embed Kit</h3>
                          <p className="vercel-menu-item-description">Integrate Stripe into Webflow</p>
                        </div>
                      </Link>
                    </div>

                    <div className="dropdown-footer">
                      <Link to="/micro-products" className="flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                        View All Products
                        <ChevronDown className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative group">
                <button 
                  onClick={() => {
                    setShowCompany(!showCompany);
                    if (showSolutions) setShowSolutions(false);
                    if (showProducts) setShowProducts(false);
                  }} 
                  className={`flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 ${showCompany ? 'nav-menu-item-selected' : ''}`}
                  style={{ minWidth: showCompany ? null : 'max-content' }}
                  data-state={showCompany ? "open" : "closed"}
                >
                  <span className="flex items-center min-w-max">
                    Company
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${showCompany ? 'rotate-180' : ''}`} />
                  </span>
                </button>

                {showCompany && (
                  <div className="absolute left-0 top-full mt-2 rounded-xl dropdown-container" style={{ width: '380px', maxWidth: 'calc(100vw - 2rem)' }}>
                    <div>
                      <Link to="/how-it-works" className="vercel-menu-item">
                        <div className="vercel-menu-item-icon">
                          <BarChart className="h-4 w-4 text-gray-300" />
                        </div>
                        <div className="vercel-menu-item-content">
                          <h3 className="vercel-menu-item-title">How it Works</h3>
                          <p className="vercel-menu-item-description">Our process and methodology</p>
                        </div>
                      </Link>

                      <Link to="/about" className="vercel-menu-item">
                        <div className="vercel-menu-item-icon">
                          <Bot className="h-4 w-4 text-gray-300" />
                        </div>
                        <div className="vercel-menu-item-content">
                          <h3 className="vercel-menu-item-title">About</h3>
                          <p className="vercel-menu-item-description">Our team and mission</p>
                        </div>
                      </Link>

                      <Link to="/portfolio" className="vercel-menu-item">
                        <div className="vercel-menu-item-icon">
                          <Replace className="h-4 w-4 text-gray-300" />
                        </div>
                        <div className="vercel-menu-item-content">
                          <h3 className="vercel-menu-item-title">Portfolio</h3>
                          <p className="vercel-menu-item-description">Past work and case studies</p>
                        </div>
                      </Link>
                    </div>

                    <div className="dropdown-footer">
                      <Link to="/company" className="flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                        Learn More About Us
                        <ChevronDown className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                )}
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

      {/* Mobile menu */}
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
