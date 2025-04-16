
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-100">
      <div className="container flex h-16 md:h-20 items-center px-4 sm:px-8 mx-auto">
        <div className="flex w-full justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-800">JointUp.ai</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/services" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Platform
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Roles
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Resources
            </Link>
            <Link 
              to="/pricing" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Pricing
            </Link>
            <Button size="sm" variant="outline" className="border-gray-300 text-gray-700">
              Get a demo
            </Button>
            <Button size="sm" variant="outline" className="border-gray-300 text-gray-700">
              Log in
            </Button>
            <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-black">
              Sign up for free
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden rounded-md p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100">
          <div className="container px-4 sm:px-8 py-4 space-y-3">
            <Link 
              to="/services" 
              className="block py-2 text-base text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Platform
            </Link>
            <Link 
              to="/how-it-works" 
              className="block py-2 text-base text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Roles
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-base text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              to="/pricing" 
              className="block py-2 text-base text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="pt-2 space-y-3">
              <Button variant="outline" className="w-full border-gray-300 text-gray-700">
                Get a demo
              </Button>
              <Button variant="outline" className="w-full border-gray-300 text-gray-700">
                Log in
              </Button>
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                Sign up for free
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
