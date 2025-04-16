
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
  Code,
  LayoutGrid,
  LineChart,
  Bot,
  ChevronRight,
  Building,
  Target,
  Infinity,
  Settings,
  Zap
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

  // Solution categories
  const solutionCategories = [
    {
      title: "Data Platforms",
      icon: <Database className="h-5 w-5 text-blue-600" />,
      iconBg: "bg-blue-50",
      description: "Store, sync and query your data",
      links: [
        { name: "Supabase Solutions", href: "/solutions/supabase" },
        { name: "PostgreSQL Database", href: "/solutions/postgresql" },
        { name: "Firebase Integration", href: "/solutions/firebase" },
        { name: "Data Synchronization", href: "/solutions/data-sync" },
      ]
    },
    {
      title: "API Integration",
      icon: <Webhook className="h-5 w-5 text-green-600" />,
      iconBg: "bg-green-50",
      description: "Connect systems with advanced API workflows",
      links: [
        { name: "REST API Development", href: "/solutions/rest-api" },
        { name: "GraphQL Implementation", href: "/solutions/graphql" },
        { name: "API Gateway Solutions", href: "/solutions/api-gateway" },
        { name: "Webhook Automation", href: "/solutions/webhooks" },
      ]
    },
    {
      title: "AI & Automation",
      icon: <Bot className="h-5 w-5 text-purple-600" />,
      iconBg: "bg-purple-50",
      description: "Build intelligent systems with AI",
      links: [
        { name: "AI-Powered Workflows", href: "/solutions/ai-workflows" },
        { name: "ML Model Integration", href: "/solutions/ml-integration" },
        { name: "Predictive Analytics", href: "/solutions/predictive-analytics" },
        { name: "NLP Solutions", href: "/solutions/nlp" },
      ]
    },
    {
      title: "Business Solutions",
      icon: <Building className="h-5 w-5 text-orange-600" />,
      iconBg: "bg-orange-50",
      description: "End-to-end business process automation",
      links: [
        { name: "CRM Integration", href: "/solutions/crm" },
        { name: "Payment Processing", href: "/solutions/payments" },
        { name: "Customer Journey Automation", href: "/solutions/customer-journey" },
        { name: "Enterprise Workflows", href: "/solutions/enterprise" },
      ]
    }
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
            
            {/* Solutions Mega Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors bg-transparent">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-[800px] p-4">
                    <div className="grid grid-cols-2 gap-4">
                      {solutionCategories.map((category) => (
                        <div key={category.title} className="group rounded-md p-4 hover:bg-slate-50 transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`p-2 rounded-full ${category.iconBg}`}>
                              {category.icon}
                            </div>
                            <h3 className="text-base font-medium text-gray-800">
                              {category.title}
                            </h3>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">
                            {category.description}
                          </p>
                          <ul className="space-y-1.5">
                            {category.links.map((link) => (
                              <li key={link.name}>
                                <Link
                                  to={link.href}
                                  className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-600 py-1 group-hover:translate-x-1 transition-transform"
                                >
                                  <span>{link.name}</span>
                                  <ChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-3 pt-2 border-t border-gray-100">
                            <Link
                              to={`/solutions/${category.title.toLowerCase().replace(/ /g, '-')}`}
                              className="inline-flex items-center text-xs font-medium text-blue-600 hover:underline"
                            >
                              Explore all {category.title}
                              <ChevronRight className="ml-1 h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-5 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-gray-800">Need a custom solution?</h4>
                          <p className="text-xs text-gray-500 mt-0.5">Let's discuss how we can help your business.</p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-blue-600 border-blue-200 hover:bg-blue-50"
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
              className="bg-brand-primary-400 text-black hover:bg-brand-primary-500"
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
