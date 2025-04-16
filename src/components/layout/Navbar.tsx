
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 sm:px-8">
        <div className="flex w-full justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://kzljjbwouqfrokyokgjy.supabase.co/storage/v1/object/public/Public//jointup%20(2).svg" 
              alt="JointUp.ai Logo" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Services
            </Link>
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
            <Button size="sm" className="bg-brand-600 hover:bg-brand-700">
              Get a Free Audit
            </Button>
          </nav>

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
            <Link 
              to="/services" 
              className="block py-2 text-base text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
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
