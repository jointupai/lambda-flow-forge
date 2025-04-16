
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Webhook, Phone, Mail, Database, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 sm:px-8">
        <div className="flex w-full items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 mr-auto">
            <img 
              src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//jointup.svg" 
              alt="JointUp.ai Logo" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Centered Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
            <Link 
              to="/" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </Link>
            
            {/* Solutions Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors bg-transparent">Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent className="py-2 w-[280px] bg-popover">
                    <ul className="grid gap-1 p-2">
                      <li>
                        <Link
                          to="/solutions/stripe"
                          className="flex items-center gap-3 p-2 text-sm rounded-md hover:bg-accent"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Webhook className="h-4 w-4" />
                          <div>
                            <div className="font-medium">Stripe Integrations</div>
                            <div className="text-xs text-muted-foreground">payments, webhooks, metadata</div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/solutions/twilio"
                          className="flex items-center gap-3 p-2 text-sm rounded-md hover:bg-accent"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Phone className="h-4 w-4" />
                          <div>
                            <div className="font-medium">Twilio Automations</div>
                            <div className="text-xs text-muted-foreground">SMS/email after form fills, events</div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/solutions/email"
                          className="flex items-center gap-3 p-2 text-sm rounded-md hover:bg-accent"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Mail className="h-4 w-4" />
                          <div>
                            <div className="font-medium">Postmark & Email Flows</div>
                            <div className="text-xs text-muted-foreground">transactional email with logic</div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/solutions/database"
                          className="flex items-center gap-3 p-2 text-sm rounded-md hover:bg-accent"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Database className="h-4 w-4" />
                          <div>
                            <div className="font-medium">Supabase & Firestore</div>
                            <div className="text-xs text-muted-foreground">DB sync, insert/update triggers</div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/solutions/api"
                          className="flex items-center gap-3 p-2 text-sm rounded-md hover:bg-accent"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Code className="h-4 w-4" />
                          <div>
                            <div className="font-medium">Custom API Pipelines</div>
                            <div className="text-xs text-muted-foreground">Middleware flows, fetch-post-sync</div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link 
              to="/how-it-works" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Get Free Audit Button */}
          <div className="hidden md:block ml-auto">
            <Button size="sm" className="bg-brand-600 hover:bg-brand-700">
              Get a Free Audit
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden rounded-md p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container px-4 sm:px-8 py-4 space-y-3 border-t">
            <Link 
              to="/" 
              className="block py-2 text-base text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Solutions Menu */}
            <div>
              <div className="block py-2 text-base font-medium text-foreground/80">
                Solutions
              </div>
              <div className="pl-4 space-y-2 mt-1">
                <Link 
                  to="/solutions/stripe" 
                  className="flex items-center gap-2 py-1.5 text-sm text-foreground/70 hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Webhook className="h-4 w-4" />
                  Stripe Integrations
                </Link>
                <Link 
                  to="/solutions/twilio" 
                  className="flex items-center gap-2 py-1.5 text-sm text-foreground/70 hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  Twilio Automations
                </Link>
                <Link 
                  to="/solutions/email" 
                  className="flex items-center gap-2 py-1.5 text-sm text-foreground/70 hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mail className="h-4 w-4" />
                  Postmark & Email Flows
                </Link>
                <Link 
                  to="/solutions/database" 
                  className="flex items-center gap-2 py-1.5 text-sm text-foreground/70 hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Database className="h-4 w-4" />
                  Supabase & Firestore
                </Link>
                <Link 
                  to="/solutions/api" 
                  className="flex items-center gap-2 py-1.5 text-sm text-foreground/70 hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Code className="h-4 w-4" />
                  Custom API Pipelines
                </Link>
              </div>
            </div>
            
            <Link 
              to="/how-it-works" 
              className="block py-2 text-base text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-base text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-base text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Button className="w-full bg-brand-600 hover:bg-brand-700">
                Get a Free Audit
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
