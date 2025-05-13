
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Contact from "./pages/Contact";
import StripeWebflowKit from "./pages/StripeWebflowKit";
import Portfolio from "./pages/Portfolio";
import Documentation from "./pages/Documentation";
import USACarTagsCaseStudy from "./pages/case-studies/USACarTags";
import NotFound from "./pages/NotFound";

// New solution pages
import CustomWebDevelopment from "./pages/solutions/CustomWebDevelopment";
import AIAutomation from "./pages/solutions/AIAutomation";
import CrmApiIntegrations from "./pages/solutions/CrmApiIntegrations";
import OptimizationSupport from "./pages/solutions/OptimizationSupport";

// Old solution pages (for backward compatibility)
import AutomationInfrastructure from "./pages/solutions/AutomationInfrastructure";
import ZapierReplacement from "./pages/solutions/ZapierReplacement";
import StripePaymentWorkflows from "./pages/solutions/StripePaymentWorkflows";
import CrmLeadFlow from "./pages/solutions/CrmLeadFlow";
import WebhookOrchestration from "./pages/solutions/WebhookOrchestration";
import CustomCloudSolutions from "./pages/solutions/CustomCloudSolutions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/index" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/stripe-webflow-kit" element={<StripeWebflowKit />} />
              
              {/* New Solution Routes */}
              <Route path="/solutions/custom-web-development" element={<CustomWebDevelopment />} />
              <Route path="/solutions/ai-automation" element={<AIAutomation />} />
              <Route path="/solutions/crm-api-integrations" element={<CrmApiIntegrations />} />
              <Route path="/solutions/optimization-support" element={<OptimizationSupport />} />
              
              {/* Keep old routes for backward compatibility */}
              <Route path="/solutions/automation-infrastructure" element={<AutomationInfrastructure />} />
              <Route path="/solutions/zapier-replacement" element={<ZapierReplacement />} />
              <Route path="/solutions/stripe-payment-workflows" element={<StripePaymentWorkflows />} />
              <Route path="/solutions/crm-lead-flow" element={<CrmLeadFlow />} />
              <Route path="/solutions/webhook-orchestration" element={<WebhookOrchestration />} />
              <Route path="/solutions/custom-cloud-solutions" element={<CustomCloudSolutions />} />
              
              <Route path="/case-studies/usacartags" element={<USACarTagsCaseStudy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
