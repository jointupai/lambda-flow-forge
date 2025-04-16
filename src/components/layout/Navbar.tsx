
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  PieChart, 
  MessageSquare, 
  DatabaseIcon, 
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
                  <NavigationMenuContent className="bg-white shadow-2xl rounded-xl border border-gray-100 w-[1000px] p-8">
                    <div className="grid grid-cols-4 gap-8">
                      {/* Column 1 - Pipeline Builder */}
                      <div className="space-y-4 group">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="bg-gray-100 p-3 rounded-lg group-hover:bg-blue-50 transition-colors">
                            <PieChart className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                            Pipeline Builder
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                          Find the right people and book quality meetings
                        </p>
                        <Button variant="outline" size="sm" className="mb-4">
                          Learn more
                        </Button>

                        <ul className="space-y-2 pt-4 border-t border-gray-200">
                          <li>
                            <Link 
                              to="/solutions/b2b-prospecting" 
                              className="text-sm text-gray-700 hover:text-blue-600 py-2 block transition-colors"
                            >
                              B2B Prospecting Data
                            </Link>
                          </li>
                          <li className="text-sm hover:text-brand-primary-600">
                            <Link to="/solutions/multichannel-outreach" className="block py-1">Multichannel Outreach</Link>
                          </li>
                          <li className="text-sm hover:text-brand-primary-600">
                            <Link to="/solutions/ai-assistants" className="block py-1">AI Assistants</Link>
                          </li>
                          <li className="text-sm hover:text-brand-primary-600">
                            <Link to="/solutions/done-for-you" className="block py-1">Done-For-You Outbound</Link>
                          </li>
                        </ul>
                      </div>

                      {/* Column 2 - Call Assistant */}
                      <div className="space-y-4 group">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="bg-gray-100 p-3 rounded-lg group-hover:bg-green-50 transition-colors">
                            <MessageSquare className="h-6 w-6 text-gray-700 group-hover:text-green-600 transition-colors" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                            Call Assistant
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                          Turn conversations into deals with AI assistance
                        </p>
                        <Button variant="outline" size="sm" className="mb-4">
                          Learn more
                        </Button>

                        <ul className="space-y-2 pt-4 border-t border-gray-200">
                          <li>
                            <Link 
                              to="/solutions/meeting-scheduler" 
                              className="text-sm text-gray-700 hover:text-green-600 py-2 block transition-colors"
                            >
                              Meeting Scheduler
                            </Link>
                          </li>
                          <li className="text-sm hover:text-brand-primary-600">
                            <Link to="/solutions/pre-meeting-insights" className="block py-1">Pre-Meeting Insights</Link>
                          </li>
                          <li className="text-sm hover:text-brand-primary-600">
                            <Link to="/solutions/call-recorder" className="block py-1">Call Recorder & Insights</Link>
                          </li>
                          <li className="text-sm hover:text-brand-primary-600">
                            <Link to="/solutions/automated-follow-up" className="block py-1">Automated Meeting Follow-up</Link>
                          </li>
                        </ul>
                      </div>

                      {/* Column 3 - Data Enrichment */}
                      <div className="space-y-4 group">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="bg-gray-100 p-3 rounded-lg group-hover:bg-purple-50 transition-colors">
                            <DatabaseIcon className="h-6 w-6 text-gray-700 group-hover:text-purple-600 transition-colors" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                            Data Enrichment
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                          Keep your data up-to-date, all the time
                        </p>
                        <Button variant="outline" size="sm" className="mb-4">
                          Learn more
                        </Button>

                        <ul className="space-y-2 pt-4 border-t border-gray-200">
                          <li>
                            <Link 
                              to="/solutions/crm-enrichment" 
                              className="text-sm text-gray-700 hover:text-purple-600 py-2 block transition-colors"
                            >
                              CRM Enrichment
                            </Link>
                          </li>
                          <li className="text-sm hover:text-brand-primary-600">
                            <Link to="/solutions/waterfall-enrichment" className="block py-1">Waterfall Enrichment</Link>
                          </li>
                          <li className="text-sm hover:text-brand-primary-600">
                            <Link to="/solutions/csv-enrichment" className="block py-1">CSV Enrichment</Link>
                          </li>
                          <li className="text-sm hover:text-brand-primary-600">
                            <Link to="/solutions/enrichment-api" className="block py-1">Enrichment API</Link>
                          </li>
                        </ul>
                      </div>

                      {/* Column 4 - Go-To-Market Platform */}
                      <div className="space-y-4 group">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="bg-gray-100 p-3 rounded-lg group-hover:bg-orange-50 transition-colors">
                            <RefreshCw className="h-6 w-6 text-gray-700 group-hover:text-orange-600 transition-colors" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                            Go-To-Market Platform
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                          Run your entire sales cycle on unified customer data
                        </p>
                        <Button variant="outline" size="sm" className="mb-4">
                          Learn more
                        </Button>

                        <ul className="space-y-2 pt-4 border-t border-gray-200">
                          <li>
                            <Link 
                              to="/solutions/deal-management" 
                              className="text-sm text-gray-700 hover:text-orange-600 py-2 block transition-colors"
                            >
                              Deal Management
                            </Link>
                          </li>
                          <li className="text-sm hover:text-brand-primary-600">
                            <Link to="/solutions/apollo-platform" className="block py-1">Apollo Platform</Link>
                          </li>
                          <li className="text-sm hover:text-brand-primary-600">
                            <Link to="/solutions/living-data-network" className="block py-1">Living Data Network</Link>
                          </li>
                          <li className="text-sm hover:text-brand-primary-600">
                            <Link to="/solutions/apollo-ai" className="block py-1">Apollo AI</Link>
                          </li>
                          <li className="text-sm hover:text-brand-primary-600">
                            <Link to="/solutions/integrations" className="block py-1">Integrations</Link>
                          </li>
                          <li className="text-sm hover:text-brand-primary-600">
                            <Link to="/solutions/chrome-extension" className="block py-1">Chrome Extension</Link>
                          </li>
                          <li className="text-sm hover:text-brand-primary-600">
                            <Link to="/solutions/workflow-automation" className="block py-1">Workflow Automation</Link>
                          </li>
                        </ul>
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
