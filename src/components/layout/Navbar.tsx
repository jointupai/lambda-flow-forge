
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  PieChart, 
  MessageSquare, 
  Menu,
  X,
  CreditCard,
  MessageSquareText,
  Database,
  Mail,
  Code,
  Bell,
  Zap,
  Package,
  Users,
  Code2,
  Building,
  CircleDollarSign,
  LineChart,
  Laptop,
  Headphones,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  MegaMenuContent,
  MegaMenuSection,
  MegaMenuItem
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileMenu } from "./MobileMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Close menu when resizing from mobile to desktop
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 sm:px-8">
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//jointup.svg" 
              alt="JointUp.ai Logo" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-4">
            {/* Home link */}
            <Link 
              to="/" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-2 py-2"
            >
              Home
            </Link>
            
            {/* Solutions Mega Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent"
                    aria-label="Solutions"
                  >
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <MegaMenuContent columns={3} footerContent={
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">Need a custom integration?</p>
                        <Button asChild variant="default" className="bg-brand-primary-400 text-black hover:bg-brand-primary-500">
                          <Link to="/contact" className="flex items-center gap-2">
                            Contact Us <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    }>
                      <MegaMenuSection title="Payment Solutions">
                        <MegaMenuItem
                          href="#"
                          icon={<div className="p-2 rounded-lg bg-green-50"><CreditCard className="h-4 w-4 text-green-600" /></div>}
                          description="Automate your payment flows with Stripe integration"
                        >
                          Stripe Payment Automations
                        </MegaMenuItem>
                        <MegaMenuItem
                          href="#"
                          icon={<div className="p-2 rounded-lg bg-indigo-50"><CircleDollarSign className="h-4 w-4 text-indigo-600" /></div>}
                          description="Set up recurring billing and subscription management"
                        >
                          Subscription Management
                        </MegaMenuItem>
                      </MegaMenuSection>

                      <MegaMenuSection title="Communication Tools">
                        <MegaMenuItem
                          href="#"
                          icon={<div className="p-2 rounded-lg bg-blue-50"><MessageSquareText className="h-4 w-4 text-blue-600" /></div>}
                          description="Send automated SMS messages with Twilio"
                        >
                          Twilio + SMS Messaging
                        </MegaMenuItem>
                        <MegaMenuItem
                          href="#"
                          icon={<div className="p-2 rounded-lg bg-orange-50"><Mail className="h-4 w-4 text-orange-600" /></div>}
                          description="Implement email automation with Postmark"
                        >
                          Postmark Email Logic
                        </MegaMenuItem>
                        <MegaMenuItem
                          href="#"
                          icon={<div className="p-2 rounded-lg bg-pink-50"><Bell className="h-4 w-4 text-pink-600" /></div>}
                          description="Build notification systems for your team"
                        >
                          Internal Alerts & Notifications
                        </MegaMenuItem>
                      </MegaMenuSection>

                      <MegaMenuSection title="Data & Integration">
                        <MegaMenuItem
                          href="#"
                          icon={<div className="p-2 rounded-lg bg-purple-50"><Database className="h-4 w-4 text-purple-600" /></div>}
                          description="Sync data between Supabase and Firestore databases"
                        >
                          Supabase / Firestore Sync
                        </MegaMenuItem>
                        <MegaMenuItem
                          href="#"
                          icon={<div className="p-2 rounded-lg bg-indigo-50"><Code className="h-4 w-4 text-indigo-600" /></div>}
                          description="Create custom API integrations for your business"
                        >
                          Custom API Integrations
                        </MegaMenuItem>
                        <MegaMenuItem
                          href="#"
                          icon={<div className="p-2 rounded-lg bg-amber-50"><Zap className="h-4 w-4 text-amber-600" /></div>}
                          description="Replace your Zapier workflows with custom code"
                        >
                          Zapier Workflow Replacement
                        </MegaMenuItem>
                      </MegaMenuSection>
                    </MegaMenuContent>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Micro Products Mega Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent"
                    aria-label="Micro Products"
                  >
                    Micro Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <MegaMenuContent columns={2} footerContent={
                      <div className="flex justify-center">
                        <Button asChild variant="outline" className="border-brand-primary-400 text-black hover:bg-brand-primary-100">
                          <Link to="/contact" className="flex items-center gap-1">
                            Request Custom Product <ChevronRight className="h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    }>
                      <MegaMenuSection title="For Webflow Users">
                        <MegaMenuItem
                          href="/stripe-webflow-kit"
                          icon={<div className="p-2 rounded-lg bg-blue-50"><Package className="h-4 w-4 text-blue-600" /></div>}
                          description="Complete Stripe integration kit for Webflow sites"
                        >
                          Stripe + Webflow Lambda Kit
                        </MegaMenuItem>
                        <MegaMenuItem
                          href="#"
                          icon={<div className="p-2 rounded-lg bg-green-50"><Users className="h-4 w-4 text-green-600" /></div>}
                          description="User authentication system for Webflow"
                        >
                          Webflow Auth System
                        </MegaMenuItem>
                      </MegaMenuSection>

                      <MegaMenuSection title="For Developers">
                        <MegaMenuItem
                          href="#"
                          icon={<div className="p-2 rounded-lg bg-indigo-50"><Code2 className="h-4 w-4 text-indigo-600" /></div>}
                          description="API route helpers and middleware collection"
                        >
                          API Middleware Pack
                        </MegaMenuItem>
                        <MegaMenuItem
                          href="#"
                          icon={<div className="p-2 rounded-lg bg-purple-50"><Database className="h-4 w-4 text-purple-600" /></div>}
                          description="Data transformation and migration utilities"
                        >
                          Data Migration Tools
                        </MegaMenuItem>
                      </MegaMenuSection>
                    </MegaMenuContent>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link 
              to="/how-it-works" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-2 py-2"
            >
              How It Works
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-2 py-2"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-2 py-2"
            >
              Contact
            </Link>
          </div>

          {/* Get Free Audit Button */}
          <div className="hidden md:block">
            <Button 
              size="sm" 
              className="bg-brand-primary-400 text-black hover:bg-brand-primary-500 rounded-full px-5 transition-all duration-300"
            >
              Get a Free Audit
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden rounded-md p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
