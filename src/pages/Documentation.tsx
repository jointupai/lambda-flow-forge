
import React from "react";
import { Link } from "react-router-dom";
import { 
  ChevronRight,
  Search,
  BookOpen,
  Code,
  Server,
  Database,
  Shield,
  BarChart,
  Layers,
  GitBranch
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Documentation() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:block w-64 h-screen border-r border-zinc-800 overflow-y-auto fixed top-16">
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search..." 
                className="pl-8 bg-zinc-900 border-zinc-700 w-full"
              />
            </div>
          </div>
          <nav className="px-4 pb-16">
            <div className="space-y-8">
              <div>
                <div className="flex items-center py-2">
                  <span className="text-sm font-medium text-gray-400">Getting Started</span>
                  <ChevronRight className="ml-auto h-4 w-4 text-gray-500" />
                </div>
                <Separator className="bg-zinc-800" />
              </div>
              
              <div>
                <div className="flex items-center py-2">
                  <span className="text-sm font-medium text-gray-400">Core Concepts</span>
                  <ChevronRight className="ml-auto h-4 w-4 text-gray-500" />
                </div>
                <Separator className="bg-zinc-800" />
              </div>
              
              <div>
                <div className="flex items-center py-2">
                  <span className="text-sm font-medium text-gray-400">API Reference</span>
                  <ChevronRight className="ml-auto h-4 w-4 text-gray-500" />
                </div>
                <Separator className="bg-zinc-800" />
              </div>
              
              <div>
                <div className="flex items-center py-2">
                  <span className="text-sm font-medium text-gray-400">Integration Guides</span>
                  <ChevronRight className="ml-auto h-4 w-4 text-gray-500" />
                </div>
                <Separator className="bg-zinc-800" />
              </div>
              
              <div>
                <div className="flex items-center py-2">
                  <span className="text-sm font-medium text-gray-400">Deployment</span>
                  <ChevronRight className="ml-auto h-4 w-4 text-gray-500" />
                </div>
                <Separator className="bg-zinc-800" />
              </div>
              
              <div>
                <div className="flex items-center py-2">
                  <span className="text-sm font-medium text-gray-400">Solutions</span>
                  <ChevronRight className="ml-auto h-4 w-4 text-gray-500" />
                </div>
                <Separator className="bg-zinc-800" />
              </div>
            </div>
          </nav>
        </div>
        
        {/* Main content */}
        <div className="flex-1 md:ml-64">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 max-w-5xl">
            <div className="mb-16">
              <h1 className="text-4xl font-bold mb-4">JointUp Documentation</h1>
              <p className="text-xl text-gray-400">
                JointUp is a cloud automation and integration platform for modern businesses.
              </p>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Start with an idea</h2>
              <p className="text-lg mb-8">
                JointUp builds tools to help you create products faster.
              </p>
              <p className="text-gray-400 mb-4">
                Like our AI assistant, which is your web development companion. Paste a screenshot or write a few sentences and it
                will generate a starting point for your next app, including the code for how it looks and how it works.
                Then it connects to your systems, takes your code, and creates a URL you can share.
              </p>
            </div>
            
            <div className="mb-16">
              <h3 className="text-xl font-medium text-gray-300 mb-4">Get started in minutes</h3>
              <h2 className="text-3xl font-bold mb-6">Choose a Solution</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <Link to="/solutions/custom-web-development">
                  <Card className="bg-zinc-900 border-zinc-800 p-6 hover:border-zinc-600 transition-all">
                    <div className="mb-4">
                      <AspectRatio ratio={16/9}>
                        <div className="h-full w-full flex items-center justify-center bg-zinc-800 rounded-md">
                          <Code size={36} className="text-white" />
                        </div>
                      </AspectRatio>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Custom Web Development</h3>
                    <p className="text-gray-400 text-sm">
                      Tailored web applications built with modern technologies.
                    </p>
                  </Card>
                </Link>
                
                <Link to="/solutions/ai-automation">
                  <Card className="bg-zinc-900 border-zinc-800 p-6 hover:border-zinc-600 transition-all">
                    <div className="mb-4">
                      <AspectRatio ratio={16/9}>
                        <div className="h-full w-full flex items-center justify-center bg-zinc-800 rounded-md">
                          <Bot size={36} className="text-white" />
                        </div>
                      </AspectRatio>
                    </div>
                    <h3 className="text-xl font-bold mb-2">AI Automation</h3>
                    <p className="text-gray-400 text-sm">
                      Intelligent automation for your business processes.
                    </p>
                  </Card>
                </Link>
                
                <Link to="/solutions/crm-api-integrations">
                  <Card className="bg-zinc-900 border-zinc-800 p-6 hover:border-zinc-600 transition-all">
                    <div className="mb-4">
                      <AspectRatio ratio={16/9}>
                        <div className="h-full w-full flex items-center justify-center bg-zinc-800 rounded-md">
                          <Server size={36} className="text-white" />
                        </div>
                      </AspectRatio>
                    </div>
                    <h3 className="text-xl font-bold mb-2">CRM & API Integrations</h3>
                    <p className="text-gray-400 text-sm">
                      Connect your systems and streamline your workflows.
                    </p>
                  </Card>
                </Link>
              </div>
              
              <div className="flex justify-center">
                <Button className="bg-white text-black hover:bg-gray-200">
                  View All Solutions
                </Button>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Iterate quickly while building your product</h2>
              <p className="text-gray-400 mb-8">
                The first version of your product isn't perfect, so you need to iterate and try things.
              </p>
              <p className="text-gray-400 mb-4">
                You can ask for updates, or if you prefer, export the code to your editor and start building
                locally. When you've finished adding your new feature, you want to test and make sure it works correctly
                on different browsers and devices before you update your live application.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Database className="h-5 w-5 text-white" />
                  <h3 className="text-lg font-semibold">Infrastructure from your code</h3>
                </div>
                <p className="text-gray-400">
                  Deploy your applications with a simple push, automatically creating the necessary infrastructure.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-5 w-5 text-white" />
                  <h3 className="text-lg font-semibold">Use your favorite developer tools</h3>
                </div>
                <p className="text-gray-400">
                  Work with your preferred frameworks and libraries while we handle the deployment.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-5 w-5 text-white" />
                  <h3 className="text-lg font-semibold">Stay fast and secure</h3>
                </div>
                <p className="text-gray-400">
                  Built-in security features and performance optimizations for all your applications.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <BarChart className="h-5 w-5 text-white" />
                  <h3 className="text-lg font-semibold">Observability</h3>
                </div>
                <p className="text-gray-400">
                  Monitor and analyze your application's performance with detailed metrics.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button className="bg-white text-black hover:bg-gray-200">
                Start building today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
