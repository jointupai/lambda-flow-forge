
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
import NotFound from "./pages/NotFound";
import StripeWebflowKit from "./pages/StripeWebflowKit";
import Portfolio from "./pages/Portfolio";
import USACarTagsCaseStudy from "./pages/case-studies/USACarTags";

// Solution pages
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
              <Route path="/stripe-webflow-kit" element={<StripeWebflowKit />} />
              
              {/* Solution Routes */}
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
