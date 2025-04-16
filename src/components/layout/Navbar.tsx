import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  PieChart, 
  MessageSquare, 
  Database as DatabaseIcon, 
  RefreshCw,
  X,
  Menu,
  Webhook,
  Phone,
  Mail,
  Database,
  Code
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink
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
            
            {/* Solutions Mega Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors bg-transparent">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="grid grid-cols-4 gap-0 w-[920px]">
                      {/* Column 1 - Pipeline Builder */}
                      <div className="p-6 border-r border-gray-100 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-blue-50 p-3 rounded-full">
                            <PieChart className="h-5 w-5 text-blue-600" />
                          </div>
                          <h3 className="text-base font-medium text-gray-800">
                            Pipeline Builder
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                          Find the right people and book quality meetings
                        </p>
                        <Button variant="outline" size="sm" className="w-full mb-4">
                          Learn more
                        </Button>

                        <div className="border-t border-gray-100 pt-4">
                          <ul className="space-y-2">
                            <li>
                              <Link 
                                to="/solutions/b2b-prospecting" 
                                className="text-sm text-gray-600 hover:text-blue-600 py-1.5 block transition-colors"
                              >
                                B2B Prospecting Data
                              </Link>
                            </li>
                            <li>
                              <Link 
                                to="/solutions/multichannel-outreach" 
                                className="text-sm text-gray-600 hover:text-blue-600 py-1.5 block transition-colors"
                              >
                                Multichannel Outreach
                              </Link>
                            </li>
                            <li>
                              <Link 
                                to="/solutions/ai-assistants" 
                                className="text-sm text-gray-600 hover:text-blue-600 py-1.5 block transition-colors"
                              >
                                AI Assistants
                              </Link>
                            </li>
                            <li>
                              <Link 
                                to="/solutions/done-for-you" 
                                className="text-sm text-gray-600 hover:text-blue-600 py-1.5 block transition-colors"
                              >
                                Done-For-You Outbound
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Column 2 - Call Assistant */}
                      <div className="p-6 border-r border-gray-100 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-green-50 p-3 rounded-full">
                            <MessageSquare className="h-5 w-5 text-green-600" />
                          </div>
                          <h3 className="text-base font-medium text-gray-800">
                            Call Assistant
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                          Turn conversations into deals with AI assistance
                        </p>
                        <Button variant="outline" size="sm" className="w-full mb-4">
                          Learn more
                        </Button>

                        <div className="border-t border-gray-100 pt-4">
                          <ul className="space-y-2">
                            <li>
                              <Link 
                                to="/solutions/meeting-scheduler" 
                                className="text-sm text-gray-600 hover:text-green-600 py-1.5 block transition-colors"
                              >
                                Meeting Scheduler
                              </Link>
                            </li>
                            <li>
                              <Link 
                                to="/solutions/pre-meeting-insights" 
                                className="text-sm text-gray-600 hover:text-green-600 py-1.5 block transition-colors"
                              >
                                Pre-Meeting Insights
                              </Link>
                            </li>
                            <li>
                              <Link 
                                to="/solutions/call-recorder" 
                                className="text-sm text-gray-600 hover:text-green-600 py-1.5 block transition-colors"
                              >
                                Call Recorder & Insights
                              </Link>
                            </li>
                            <li>
                              <Link 
                                to="/solutions/automated-follow-up" 
                                className="text-sm text-gray-600 hover:text-green-600 py-1.5 block transition-colors"
                              >
                                Automated Meeting Follow-up
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Column 3 - Data Enrichment */}
                      <div className="p-6 border-r border-gray-100 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-purple-50 p-3 rounded-full">
                            <DatabaseIcon className="h-5 w-5 text-purple-600" />
                          </div>
                          <h3 className="text-base font-medium text-gray-800">
                            Data Enrichment
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                          Keep your data up-to-date, all the time
                        </p>
                        <Button variant="outline" size="sm" className="w-full mb-4">
                          Learn more
                        </Button>

                        <div className="border-t border-gray-100 pt-4">
                          <ul className="space-y-2">
                            <li>
                              <Link 
                                to="/solutions/crm-enrichment" 
                                className="text-sm text-gray-600 hover:text-purple-600 py-1.5 block transition-colors"
                              >
                                CRM Enrichment
                              </Link>
                            </li>
                            <li>
                              <Link 
                                to="/solutions/waterfall-enrichment" 
                                className="text-sm text-gray-600 hover:text-purple-600 py-1.5 block transition-colors"
                              >
                                Waterfall Enrichment
                              </Link>
                            </li>
                            <li>
                              <Link 
                                to="/solutions/csv-enrichment" 
                                className="text-sm text-gray-600 hover:text-purple-600 py-1.5 block transition-colors"
                              >
                                CSV Enrichment
                              </Link>
                            </li>
                            <li>
                              <Link 
                                to="/solutions/enrichment-api" 
                                className="text-sm text-gray-600 hover:text-purple-600 py-1.5 block transition-colors"
                              >
                                Enrichment API
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Column 4 - Go-To-Market Platform */}
                      <div className="p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-orange-50 p-3 rounded-full">
                            <RefreshCw className="h-5 w-5 text-orange-600" />
                          </div>
                          <h3 className="text-base font-medium text-gray-800">
                            Go-To-Market Platform
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                          Run your entire sales cycle on unified customer data
                        </p>
                        <Button variant="outline" size="sm" className="w-full mb-4">
                          Learn more
                        </Button>

                        <div className="border-t border-gray-100 pt-4">
                          <ul className="space-y-2">
                            <li>
                              <Link 
                                to="/solutions/deal-management" 
                                className="text-sm text-gray-600 hover:text-orange-600 py-1.5 block transition-colors"
                              >
                                Deal Management
                              </Link>
                            </li>
                            <li>
                              <Link 
                                to="/solutions/apollo-platform" 
                                className="text-sm text-gray-600 hover:text-orange-600 py-1.5 block transition-colors"
                              >
                                Apollo Platform
                              </Link>
                            </li>
                            <li>
                              <Link 
                                to="/solutions/living-data-network" 
                                className="text-sm text-gray-600 hover:text-orange-600 py-1.5 block transition-colors"
                              >
                                Living Data Network
                              </Link>
                            </li>
                            <li>
                              <Link 
                                to="/solutions/apollo-ai" 
                                className="text-sm text-gray-600 hover:text-orange-600 py-1.5 block transition-colors"
                              >
                                Apollo AI
                              </Link>
                            </li>
                            <li>
                              <Link 
                                to="/solutions/integrations" 
                                className="text-sm text-gray-600 hover:text-orange-600 py-1.5 block transition-colors"
                              >
                                Integrations
                              </Link>
                            </li>
                            <li>
                              <Link 
                                to="/solutions/chrome-extension" 
                                className="text-sm text-gray-600 hover:text-orange-600 py-1.5 block transition-colors"
                              >
                                Chrome Extension
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
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
