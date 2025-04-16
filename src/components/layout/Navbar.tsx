
import React, { useState } from "react";
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
  Code,
  LayoutGrid,
  LineChart,
  Bot,
  ChevronRight,
  Building,
  Target,
  Infinity,
  Settings,
  Zap,
  MessageSquareText,
  CreditCard,
  Bell
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Solution categories - updated with the new solutions
  const solutionCategories = [
    {
      title: "Stripe Automation",
      icon: <Zap className="h-5 w-5 text-green-600" />,
      iconBg: "bg-green-50",
      description: "Automate your entire payment pipeline.",
      subDescription: "Trigger workflows off Stripe events like new payments, subscriptions, disputes, refunds, and more — all in real time.",
      links: [
        { name: "Subscription Management", href: "/solutions/stripe-subscription" },
        { name: "Payment Automations", href: "/solutions/stripe-payments" },
        { name: "Fraud & Dispute Handling", href: "/solutions/stripe-fraud" },
        { name: "Revenue Analytics", href: "/solutions/stripe-analytics" },
      ]
    },
    {
      title: "Twilio & SMS Workflows",
      icon: <MessageSquareText className="h-5 w-5 text-blue-600" />,
      iconBg: "bg-blue-50",
      description: "Powerful text automations that convert and inform.",
      subDescription: "Auto-send order confirmations, status updates, failed payment reminders, and onboarding messages using Twilio, AWS SNS, or other APIs.",
      links: [
        { name: "SMS Marketing", href: "/solutions/sms-marketing" },
        { name: "Notification Systems", href: "/solutions/sms-notifications" },
        { name: "Two-Factor Auth", href: "/solutions/sms-auth" },
        { name: "Campaign Analytics", href: "/solutions/sms-analytics" },
      ]
    },
    {
      title: "Supabase & Firestore Sync",
      icon: <Database className="h-5 w-5 text-purple-600" />,
      iconBg: "bg-purple-50",
      description: "Real-time database updates that drive your business.",
      subDescription: "When a user pays, fills a form, or triggers an action — instantly sync that data to Supabase or Firestore.",
      links: [
        { name: "Real-time Data Sync", href: "/solutions/database-sync" },
        { name: "Webhook Integrations", href: "/solutions/database-webhooks" },
        { name: "Analytics Pipelines", href: "/solutions/database-analytics" },
        { name: "Data Migration", href: "/solutions/database-migration" },
      ]
    },
    {
      title: "Postmark & Transactional Email",
      icon: <Mail className="h-5 w-5 text-orange-600" />,
      iconBg: "bg-orange-50",
      description: "Custom email logic built into your workflows.",
      subDescription: "No more delayed or off-brand transactional emails. Trigger on-brand, logic-driven email flows with dynamic content.",
      links: [
        { name: "Email Templating", href: "/solutions/email-templates" },
        { name: "Delivery Optimization", href: "/solutions/email-delivery" },
        { name: "Engagement Tracking", href: "/solutions/email-tracking" },
        { name: "Personalization", href: "/solutions/email-personalization" },
      ]
    },
    {
      title: "Custom API Pipelines",
      icon: <Code className="h-5 w-5 text-indigo-600" />,
      iconBg: "bg-indigo-50",
      description: "We connect any system with an API. Period.",
      subDescription: "From CRMs to ERPs to custom tools — we build robust middleware with error handling, retry logic, and logging.",
      links: [
        { name: "API Integration", href: "/solutions/api-integration" },
        { name: "Serverless Functions", href: "/solutions/serverless" },
        { name: "Custom Middleware", href: "/solutions/middleware" },
        { name: "Error Handling", href: "/solutions/api-error-handling" },
      ]
    },
    {
      title: "Slack, Discord & Alerts",
      icon: <Bell className="h-5 w-5 text-pink-600" />,
      iconBg: "bg-pink-50",
      description: "Get the right messages to your team, instantly.",
      subDescription: "Push notifications to your internal tools based on user behavior, webhook events, or form submissions.",
      links: [
        { name: "Team Notifications", href: "/solutions/team-notifications" },
        { name: "Webhook Alerts", href: "/solutions/webhook-alerts" },
        { name: "Custom Reporting", href: "/solutions/custom-reporting" },
        { name: "Event Monitoring", href: "/solutions/event-monitoring" },
      ]
    },
  ];

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

          {/* Centered Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-6">
            <Link 
              to="/" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </Link>
            
            {/* Solutions Mega Dropdown - Apple Inspired */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors bg-transparent">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-[900px] p-6 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-gray-100">
                    <div className="grid grid-cols-2 gap-6">
                      {solutionCategories.map((category) => (
                        <div key={category.title} className="group rounded-xl p-4 hover:bg-gray-50/80 transition-all duration-300">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`p-2.5 rounded-full ${category.iconBg} backdrop-blur-sm`}>
                              {category.icon}
                            </div>
                            <h3 className="text-base font-medium text-gray-800">
                              {category.title}
                            </h3>
                          </div>
                          <p className="text-sm text-gray-500 mb-2 font-light leading-relaxed">
                            {category.description}
                          </p>
                          <p className="text-xs text-gray-400 mb-4 font-light leading-relaxed">
                            {category.subDescription}
                          </p>
                          <ul className="space-y-2">
                            {category.links.map((link) => (
                              <li key={link.name}>
                                <Link
                                  to={link.href}
                                  className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-600 py-1 
                                  group-hover:translate-x-0.5 transition-all duration-200 ease-in-out"
                                >
                                  <span>{link.name}</span>
                                  <ChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 pt-3 border-t border-gray-100">
                            <Link
                              to={`/solutions/${category.title.toLowerCase().replace(/ /g, '-')}`}
                              className="inline-flex items-center text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
                            >
                              Explore all {category.title}
                              <ChevronRight className="ml-1 h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-5 border-t border-gray-100">
                      <div className="flex items-center justify-between bg-gray-50/60 rounded-xl p-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-800">Need a custom solution?</h4>
                          <p className="text-xs text-gray-500 mt-0.5">Let's discuss how we can help your business.</p>
                        </div>
                        <Button
                          size="sm"
                          className="text-black bg-brand-primary-400 hover:bg-brand-primary-500 rounded-full px-4 transition-all duration-300"
                          asChild
                        >
                          <Link to="/contact">Get in touch</Link>
                        </Button>
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
                {solutionCategories.map((category) => (
                  <DropdownMenu key={category.title}>
                    <DropdownMenuTrigger className="flex items-center gap-2 py-1.5 w-full text-left text-sm text-foreground/70 hover:text-foreground">
                      <div className={`p-1 rounded-full ${category.iconBg}`}>
                        {React.cloneElement(category.icon, { className: 'h-4 w-4' })}
                      </div>
                      <span>{category.title}</span>
                      <ChevronRight className="h-4 w-4 ml-auto" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      {category.links.map((link) => (
                        <DropdownMenuItem key={link.name} asChild>
                          <Link 
                            to={link.href}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ))}
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
