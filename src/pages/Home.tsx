
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 min-h-screen flex flex-col">
        <div className="flex-grow flex flex-col md:flex-row">
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/2 py-16 md:py-28 px-6 md:px-12 lg:px-16 flex flex-col justify-center">
            <div className="max-w-xl">
              <div className="uppercase text-sm font-medium tracking-wider text-gray-600 mb-4">
                JointUp AI Sales Platform
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-8 leading-tight">
                The only tool you need to grow
              </h1>
              
              <div className="w-full max-w-md mb-6">
                <Input 
                  type="email" 
                  placeholder="Enter email" 
                  className="h-12 rounded-md border mb-4"
                  value={email}
                  onChange={handleEmailChange}
                />
                <Button 
                  className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-black rounded-md font-medium text-base"
                >
                  Sign up for free
                </Button>
              </div>
              
              <p className="text-sm text-gray-600">
                By signing up, I agree to JointUp's{" "}
                <Link to="#" className="underline hover:text-gray-800">Terms of Service</Link> and{" "}
                <Link to="#" className="underline hover:text-gray-800">Privacy Policy</Link>.
              </p>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="w-full md:w-1/2 relative hidden md:block">
            <img 
              src="/lovable-uploads/d51ded13-f114-4b4d-bd42-2070abc8c3b9.png" 
              alt="JointUp.ai Dashboard" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>
        
        {/* Companies Section */}
        <div className="bg-gray-50 py-8 px-6 border-t border-gray-200">
          <div className="container mx-auto">
            <div className="text-center text-xs text-gray-500 uppercase tracking-wide font-medium mb-6">
              Join over 500,000 businesses using JointUp
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 items-center">
              {companies.map((company, index) => (
                <div key={index} className="opacity-70 hover:opacity-100 transition-opacity">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="h-5 md:h-6 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Mock company logos
const companies = [
  { name: "Autodesk", logo: "https://placehold.co/100x30/f1f1f1/8d8d8d?text=Autodesk" },
  { name: "ClickUp", logo: "https://placehold.co/100x30/f1f1f1/8d8d8d?text=ClickUp" },
  { name: "Veeva", logo: "https://placehold.co/100x30/f1f1f1/8d8d8d?text=Veeva" },
  { name: "Redis", logo: "https://placehold.co/100x30/f1f1f1/8d8d8d?text=Redis" },
  { name: "Cyera", logo: "https://placehold.co/100x30/f1f1f1/8d8d8d?text=Cyera" },
  { name: "Cint", logo: "https://placehold.co/100x30/f1f1f1/8d8d8d?text=Cint" },
  { name: "DocuSign", logo: "https://placehold.co/100x30/f1f1f1/8d8d8d?text=DocuSign" },
];
