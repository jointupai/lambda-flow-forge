import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Globe, Bot, Wrench, BarChart, Menu, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactDrawer from "@/components/shared/ContactDrawer";
import CalendlyDialog from "@/components/shared/CalendlyDialog";
export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [openContactDrawer, setOpenContactDrawer] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    solutions: false,
    company: false
  });

  // Check if current path matches
  const isActive = (path: string) => {
    if (path === "/documentation" && location.pathname.startsWith("/documentation")) {
      return true;
    }
    return location.pathname === path;
  };

  // Check if the current path is within a specific section
  const isInSection = (section: string) => {
    const solutionsPaths = ["/solutions", "/solutions/custom-web-development", "/solutions/ai-automation", "/solutions/crm-api-integrations", "/solutions/optimization-support", "/solutions/automation-infrastructure", "/solutions/zapier-replacement", "/solutions/stripe-payment-workflows", "/solutions/crm-lead-flow", "/solutions/webhook-orchestration", "/solutions/custom-cloud-solutions"];
    const companyPaths = ["/how-it-works", "/about", "/portfolio", "/company"];
    if (section === "solutions") {
      return solutionsPaths.some(path => location.pathname === path);
    }
    if (section === "company") {
      return companyPaths.some(path => location.pathname === path);
    }
    return false;
  };

  // Toggle mobile dropdown sections
  const toggleMobileDropdown = (section: 'solutions' | 'company') => {
    setMobileDropdowns(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  return <>
    {(showSolutions || showCompany) && <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={() => {
      setShowSolutions(false);
      setShowCompany(false);
    }} />}
    
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-b-[1px] border-[#1F1F`F]">
      <CalendlyDialog open={showCalendly} onOpenChange={setShowCalendly} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//jointup%20(2).png" alt="JointUp.ai Logo" className="h-8 w-auto" />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button onClick={() => {
                  setShowSolutions(!showSolutions);
                  if (showCompany) setShowCompany(false);
                }} className={`flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 ${showSolutions || isInSection("solutions") ? 'nav-menu-item-selected' : ''}`} style={{
                  minWidth: showSolutions || isInSection("solutions") ? null : 'max-content'
                }} data-state={showSolutions ? "open" : "closed"}>
                  <span className="flex items-center min-w-max">
                    Solutions
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${showSolutions ? 'rotate-180' : ''}`} />
                  </span>
                </button>

                {showSolutions && <div className="absolute left-0 top-full mt-2 rounded-xl dropdown-container" style={{
                  width: '780px',
                  maxWidth: 'calc(100vw - 2rem)'
                }}>
                    <div className="vercel-grid-section">
                      <Link to="/solutions/custom-web-development" className="vercel-menu-item">
                        <div className="vercel-menu-item-icon">
                          <Globe className="h-4 w-4 text-white" />
                        </div>
                        <div className="vercel-menu-item-content">
                          <h3 className="vercel-menu-item-title">
                            Custom Web Application Development
                          </h3>
                          <p className="vercel-menu-item-description">
                            Tailored web solutions for your business
                          </p>
                        </div>
                      </Link>

                      <Link to="/solutions/ai-automation" className="vercel-menu-item">
                        <div className="vercel-menu-item-icon">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="vercel-menu-item-content">
                          <h3 className="vercel-menu-item-title">
                            AI-Powered Automation
                          </h3>
                          <p className="vercel-menu-item-description">
                            Intelligent automation solutions
                          </p>
                        </div>
                      </Link>

                      <Link to="/solutions/crm-api-integrations" className="vercel-menu-item">
                        <div className="vercel-menu-item-icon">
                          <Wrench className="h-4 w-4 text-white" />
                        </div>
                        <div className="vercel-menu-item-content">
                          <h3 className="vercel-menu-item-title">
                            CRM & API Integrations
                          </h3>
                          <p className="vercel-menu-item-description">
                            Seamless system connections
                          </p>
                        </div>
                      </Link>

                      <Link to="/solutions/optimization-support" className="vercel-menu-item">
                        <div className="vercel-menu-item-icon">
                          <BarChart className="h-4 w-4 text-white" />
                        </div>
                        <div className="vercel-menu-item-content">
                          <h3 className="vercel-menu-item-title">
                            Ongoing Optimization & Support
                          </h3>
                          <p className="vercel-menu-item-description">
                            Continuous improvement and maintenance
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
                  </div>}
              </div>

              <div className="relative group">
                <button onClick={() => {
                  setShowCompany(!showCompany);
                  if (showSolutions) setShowSolutions(false);
                }} className={`flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 ${showCompany || isInSection("company") ? 'nav-menu-item-selected' : ''}`} style={{
                  minWidth: showCompany || isInSection("company") ? null : 'max-content'
                }} data-state={showCompany ? "open" : "closed"}>
                  <span className="flex items-center min-w-max">
                    Company
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${showCompany ? 'rotate-180' : ''}`} />
                  </span>
                </button>

                {showCompany && <div className="absolute left-0 top-full mt-2 rounded-xl dropdown-container" style={{
                  width: '380px',
                  maxWidth: 'calc(100vw - 2rem)'
                }}>
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
                          <Wrench className="h-4 w-4 text-gray-300" />
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
                  </div>}
              </div>
              
              <Link to="/documentation" className={`text-sm font-medium text-white hover:text-gray-300 ${isActive("/documentation") ? 'nav-menu-item-selected' : ''}`} style={{
                minWidth: isActive("/documentation") ? null : 'max-content',
                display: 'inline-flex',
                padding: isActive("/documentation") ? '0.625rem' : '0'
              }}>
                <span className="flex items-center min-w-max">Docs</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-4">
              <Button onClick={() => navigate('/contact')} className="bg-transparent border border-zinc-700 text-white hover:bg-zinc-800 rounded-full transition-all duration-300">
                Let's Partner Up
              </Button>
            </div>
            
            <button className="lg:hidden rounded-md p-2 text-white overflow-hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="relative w-6 h-6">
                <Menu size={24} className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                <X size={24} className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}`} />
              </div>
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
            
            <div className={`block py-2 text-base font-medium ${isInSection("solutions") ? 'bg-zinc-800 rounded-lg px-2' : 'text-foreground/80'}`}>
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleMobileDropdown('solutions')}>
                <span>Solutions</span>
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${mobileDropdowns.solutions ? 'rotate-180' : ''}`} />
              </div>
              
              {mobileDropdowns.solutions && <div className="pl-0 space-y-2 mt-2 text-left">
                  <Link to="/solutions/custom-web-development" className="flex items-center gap-2 py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                    <Globe className="h-4 w-4 text-white" />
                    <span>Custom Web Application Development</span>
                  </Link>
                  <Link to="/solutions/ai-automation" className="flex items-center gap-2 py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                    <Bot className="h-4 w-4 text-white" />
                    <span>AI-Powered Automation</span>
                  </Link>
                  <Link to="/solutions/crm-api-integrations" className="flex items-center gap-2 py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                    <Wrench className="h-4 w-4 text-white" />
                    <span>CRM & API Integrations</span>
                  </Link>
                  <Link to="/solutions/optimization-support" className="flex items-center gap-2 py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                    <BarChart className="h-4 w-4 text-white" />
                    <span>Ongoing Optimization & Support</span>
                  </Link>
                </div>}
            </div>
            
            <div className={`block py-2 text-base font-medium ${isInSection("company") ? 'bg-zinc-800 rounded-lg px-2' : 'text-foreground/80'}`}>
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleMobileDropdown('company')}>
                <span>Company</span>
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${mobileDropdowns.company ? 'rotate-180' : ''}`} />
              </div>
              
              {mobileDropdowns.company && <div className="pl-0 space-y-2 mt-2 text-left">
                  <Link to="/how-it-works" className="flex items-center gap-2 py-1 text-sm text-foreground/80 hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                    <BarChart className="h-4 w-4 text-white" />
                    <span>How it Works</span>
                  </Link>
                  <Link to="/about" className="flex items-center gap-2 py-1 text-sm text-foreground/80 hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                    <Bot className="h-4 w-4 text-white" />
                    <span>About</span>
                  </Link>
                  <Link to="/portfolio" className="flex items-center gap-2 py-1 text-sm text-foreground/80 hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                    <Wrench className="h-4 w-4 text-white" />
                    <span>Portfolio</span>
                  </Link>
                </div>}
            </div>
            
            <Link to="/documentation" className={`block py-2 text-base font-medium text-foreground/80 hover:text-foreground ${isActive("/documentation") ? 'bg-zinc-800 rounded-lg px-2' : ''}`} onClick={() => setIsMenuOpen(false)}>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Docs</span>
              </div>
            </Link>

            <div className="pt-2">
              <Button className="w-full bg-transparent border border-zinc-700 text-white hover:bg-zinc-800 rounded-full transition-all duration-300" onClick={() => {
              setIsMenuOpen(false);
              navigate('/contact');
            }}>
                Let's Partner Up
              </Button>
            </div>
          </div>
        </div>}
    </header>
    
    <ContactDrawer open={openContactDrawer} onOpenChange={setOpenContactDrawer} />
  </>;
}