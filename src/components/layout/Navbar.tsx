
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  PieChart, 
  MessageSquare, 
  Menu,
  X,
  ChevronRight,
  CreditCard,
  MessageSquareText,
  Database,
  Mail,
  Code,
  Bell,
  Zap,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  // Solution categories
  const solutionCategories = [
    {
      title: "Stripe Automation",
      icon: <CreditCard className="h-5 w-5 text-green-600" />,
      iconBg: "bg-green-50",
      description: "Automate your entire payment pipeline.",
      subDescription: "Trigger workflows off Stripe events like new payments, subscriptions, disputes, refunds, and more — all in real time.",
      links: [
        { name: "Payment Processing", href: "/solutions/stripe-payments" },
        { name: "Subscription Management", href: "/solutions/stripe-subscription" },
        { name: "Dispute Handling", href: "/solutions/stripe-disputes" },
        { name: "Analytics", href: "/solutions/stripe-analytics" },
      ]
    },
    {
      title: "Twilio & SMS Workflows",
      icon: <MessageSquareText className="h-5 w-5 text-blue-600" />,
      iconBg: "bg-blue-50",
      description: "Powerful text automations that convert and inform.",
      subDescription: "Auto-send order confirmations, status updates, failed payment reminders, and onboarding messages using Twilio, AWS SNS, or other APIs.",
      links: [
        { name: "Automated SMS", href: "/solutions/automated-sms" },
        { name: "2FA Authentication", href: "/solutions/sms-auth" },
        { name: "Marketing Campaigns", href: "/solutions/sms-marketing" },
        { name: "Customer Support", href: "/solutions/sms-support" },
      ]
    },
    {
      title: "Supabase & Firestore Sync",
      icon: <Database className="h-5 w-5 text-purple-600" />,
      iconBg: "bg-purple-50",
      description: "Real-time database updates that drive your business.",
      subDescription: "When a user pays, fills a form, or triggers an action — instantly sync that data to Supabase or Firestore.",
      links: [
        { name: "Data Syncing", href: "/solutions/database-sync" },
        { name: "Real-time Updates", href: "/solutions/realtime-db" },
        { name: "Webhook Integration", href: "/solutions/database-webhooks" },
        { name: "Analytics Pipeline", href: "/solutions/database-analytics" },
      ]
    },
    {
      title: "Postmark & Transactional Email",
      icon: <Mail className="h-5 w-5 text-orange-600" />,
      iconBg: "bg-orange-50",
      description: "Custom email logic built into your workflows.",
      subDescription: "No more delayed or off-brand transactional emails. Trigger on-brand, logic-driven email flows with dynamic content.",
      links: [
        { name: "Transactional Emails", href: "/solutions/transactional-email" },
        { name: "Email Templates", href: "/solutions/email-templates" },
        { name: "Delivery Analytics", href: "/solutions/email-analytics" },
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
        { name: "Middleware Solutions", href: "/solutions/middleware" },
        { name: "Microservices", href: "/solutions/microservices" },
      ]
    },
    {
      title: "Slack, Discord & Alerts",
      icon: <Bell className="h-5 w-5 text-pink-600" />,
      iconBg: "bg-pink-50",
      description: "Get the right messages to your team, instantly.",
      subDescription: "Push notifications to your internal tools based on user behavior, webhook events, or form submissions.",
      links: [
        { name: "Team Notifications", href: "/solutions/notifications" },
        { name: "Alert Systems", href: "/solutions/alerts" },
        { name: "Monitoring", href: "/solutions/monitoring" },
        { name: "Reporting", href: "/solutions/reporting" },
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
            
            {/* Custom Solutions Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Solutions
                <ChevronRight 
                  className={`ml-1.5 h-3.5 w-3.5 opacity-70 transition-transform duration-200 ${solutionsOpen ? 'rotate-90' : ''}`} 
                />
              </button>
              
              {solutionsOpen && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[900px] rounded-xl border border-gray-100 bg-white/95 backdrop-blur-xl p-6 shadow-lg z-50"
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
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
                </div>
              )}
            </div>
            
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
            <div className="block py-2 text-base font-medium text-foreground/80">
              Solutions
              <div className="pl-4 space-y-3 mt-3">
                {solutionCategories.map((category) => (
                  <div key={category.title} className="border-l-2 border-gray-200 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`p-1.5 rounded-full ${category.iconBg}`}>
                        {React.cloneElement(category.icon, { className: 'h-4 w-4' })}
                      </div>
                      <span className="text-sm font-medium">{category.title}</span>
                    </div>
                    <div className="space-y-1">
                      {category.links.slice(0, 2).map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          className="block text-sm pl-2 py-1 text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                      <Link
                        to={`/solutions/${category.title.toLowerCase().replace(/ /g, '-')}`}
                        className="block text-xs pl-2 py-1 text-blue-600 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        View all →
                      </Link>
                    </div>
                  </div>
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
              <Button className="w-full bg-brand-primary-400 text-black hover:bg-brand-primary-500">
                Get a Free Audit
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
